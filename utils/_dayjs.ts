import dayjs from "dayjs";
import weekOfYear from "dayjs/plugin/weekOfYear.js";
import utc from "dayjs/plugin/utc.js";
import isToday from "dayjs/plugin/isToday.js";
import { translate } from "./i18n";

/* eslint-disable import/no-named-as-default-member */
dayjs.extend(weekOfYear);
dayjs.extend(utc);
dayjs.extend(isToday);

export default dayjs;

export function getNowDayjs () {
  return dayjs.utc().add(8, "hour");
}

export function getNowStamp () {
  return getNowDayjs().toDate().getTime();
}

export function literalTime (stamp: number) {
  const dayOld = dayjs.utc(stamp);
  const dayNew = dayjs.utc();
  const subDay = dayNew.diff(dayOld, "day");
  const subWeek = dayNew.diff(dayOld, "week");
  const subMonth = dayNew.diff(dayOld, "month");
  const subYear = dayNew.diff(dayOld, "year");
  if (dayOld.isToday()) {
    return translate("today");
  }
  if (subWeek < 1) {
    return translate("days-ago", [subDay + 1]);
  }
  if (subMonth < 1) {
    return translate("weeks-ago", [subWeek + 1]);
  }
  if (subYear < 1) {
    return translate("months-ago", [subMonth + 1]);
  }
  return translate("years-ago", [subYear + 1]);
}

export function formatTime (stamp: number, format = "YYYY-MM-DD HH:mm:ss") {
  return dayjs.utc(stamp).format(format);
}
