/**
 * Konversi Penanggalan:
 * - Jawa Ke Hijriyah
 * - Hijriyah ke Jawa
 * - Jawa Ke Masehi
 * - Masehi Ke Jawa
 */
import { MasehiKeHijriyah } from "./m2h";
import { HijriyahKeMasehi } from "./index";

/**
 * Perbedaan penanggalan Jawa dan Hijriyah terutama pada tahun
 * dengan selisih tahun yaitu 512. (butuh testing!)
 */

function JawaKeHijriyah({ d, m, y }) {
  return { tgl: d, bln: m, thn: y - 512 };
}

function HijriyahKeJawa({ d, m, y }) {
  return { tgl: d, bln: m, thn: y + 512 };
}

/**--*/

function JawaKeMasehi({ d, m, y }) {
  let { tgl, bln, thn } = JawaKeHijriyah({ d, m, y });
  return HijriyahKeMasehi(thn, bln, tgl);
}

function MasehiKeJawa({ y, m, d }) {
  let { year, month, dayOfMonth } = MasehiKeHijriyah(
    new Date(`${y}-${m}-${d}`),
    -1
  );
  return HijriyahKeJawa({ d: dayOfMonth, m: month, y: year });
}

export { JawaKeHijriyah, HijriyahKeJawa, JawaKeMasehi, MasehiKeJawa };
