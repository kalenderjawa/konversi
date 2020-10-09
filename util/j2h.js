/**
 * Jawa Util
 */
import { MasehiKeHijriyah } from "./m2h";

function JawaKeHijriyah({ d, m, y }) {
  return { tgl: d, bln: m, thn: y - 512 };
}

function HijriyahKeJawa({ d, m, y }) {
  return { tgl: d, bln: m, thn: y + 512 };
}

function MasehiKeJawa({ y, m, d }) {
  let { year, month, dayOfMonth } = MasehiKeHijriyah(
    new Date(`${y}-${m}-${d}`),
    -1
  );
  return HijriyahKeJawa({ d: dayOfMonth, m: month, y: year });
}

export { JawaKeHijriyah, HijriyahKeJawa, MasehiKeJawa };
