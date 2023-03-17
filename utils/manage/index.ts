import { createVNode, render } from "vue";
import { ModalContainerId } from "../constants";
import { notify } from "../notify/notify";
import { CommonItem, AllKeys, HeaderTabUrl } from "../types";
import { getLocalStorage, assignItem, setLocalStorage } from "../utils";
import { translate, translateT } from "../i18n";
import CommonModal from "~/components/common-modal.vue";

export function randomId (exist: CommonItem[] = [], len = 4) {
  const ids: number[] = exist.map(item => item.id);
  while (true) {
    let id: string | number = "";
    for (let i = 0; i < len; i++) {
      id += Math.floor(
        i ? Math.random() * 10 : Math.random() * 9 + 1
      ).toString();
    }
    id = parseInt(id);
    if (!ids.includes(id)) {
      return id;
    }
  }
}

/**
 * 是否可执行操作，以及提示信息
 */
export function useStatusText () {
  const status = ref<string>("");
  const toggleProcessing = () => {
    status.value = status.value ? "" : translate("performing-request");
  };
  const processing = computed(() => !!status.value);

  const githubToken = useGithubToken();
  const statusText = computed<string>((): string => {
    if (!useGithubToken().value) {
      return translate("please-input-token-first");
    }
    return status.value;
  });
  const canCommit = computed<boolean>(() => !!githubToken.value);
  return { toggleProcessing, processing, statusText, canCommit };
}

/**
 * item的所有 `可处理` key
 */
export function keysOfCommonItem (): AllKeys[] {
  let keys: AllKeys[] = [];
  try {
    // 在跳转路由时，触发了监听，但是已经找不到target了
    switch (useCurrentTab().value.url as HeaderTabUrl) {
      case "/articles":
        keys = ["title", "tags"];
        break;
      case "/records":
        keys = ["images"];
        break;
      case "/knowledges":
        keys = ["title", "type", "summary", "link", "cover"];
        break;
    }
    return [...keys, "encrypt"];
  } catch {
    return [];
  }
}

/**
 * 草稿功能
 */
export function loadOrDumpDraft (key: string, type: "load" | "dump", item: CommonItem, inputContent?: string): string | void {
  if (type === "load") {
    const draft = JSON.parse(getLocalStorage(key)!);
    const content = draft.content ?? "";
    delete draft.content;
    assignItem(item, draft);
    notify({
      title: translate("draft-loaded")
    });
    return content;
  } else {
    const result = {
      content: inputContent
    };
    for (const k of keysOfCommonItem()) {
      result[k] = item[k];
    }
    setLocalStorage(key, JSON.stringify(result));
    notify({
      title: translate("draft-saved")
    });
  }
}

/**
 * 是否有改动
 */
export function useHasModified ({ item, origin }: { item: CommonItem, origin: CommonItem, }) {
  const markdownModified = ref<boolean>(false);
  // 目前只有menu,tag和images这几种简单数据，可以直接进行比较
  const hasModified = computed(() => markdownModified.value || keysOfCommonItem()
    .filter(k => typeof item[k] !== "undefined")
    .some((k) => {
      if (k === "images") {
        return JSON.stringify(item[k].map(img => ({ ...img, id: 0 }))) !== JSON.stringify(origin[k].map(img => ({ ...img, id: 0 })));
      }
      return typeof item[k] === "object"
        ? JSON.stringify(item[k]) !== JSON.stringify(origin[k])
        : item[k] !== origin[k];
    }));
  return { hasModified, markdownModified };
}
/**
 * commit id 不一致
 */
export function createCommitModal () {
  return new Promise<boolean>((resolve) => {
    const container = document.createElement("div");
    const vm = createVNode(CommonModal, {
      modelValue: true,
      modalTitle: translateT("warning"),
      modalContent: translate("commit-id-not-correct-confirm")
    });
    vm.props.onOk = () => {
      render(null, container);
      resolve(true);
    };
    vm.props.onCancel_ = () => {
      render(null, container);
      resolve(false);
    };
    render(vm, container);
    document
      .getElementById(ModalContainerId)
      .appendChild(container.firstElementChild);
  });
}
