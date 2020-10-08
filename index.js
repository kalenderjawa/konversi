import { HijriyahKeMasehi, MasehikeHijriyah } from "./util/index";

function JawaKeHijriyah({ d, m, y }) {
  return { tgl:d, bln:m, thn: y - 512 };
}

function HijriyahKeJawa({ d, m, y }) {
  return { tgl:d, bln:m, thn: y + 512 };
}

module.exports = { JawaKeHijriyah, HijriyahKeJawa, MasehikeHijriyah, HijriyahKeMasehi };
