/**
 * Jawa Util
 */

function JawaKeHijriyah({ d, m, y }) {
  return { tgl: d, bln: m, thn: y - 512 };
}

function HijriyahKeJawa({ d, m, y }) {
  return { tgl: d, bln: m, thn: y + 512 };
}

export { JawaKeHijriyah, HijriyahKeJawa };
