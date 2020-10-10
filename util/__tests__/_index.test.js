import "core-js/stable";
import "regenerator-runtime/runtime";

import * as Konversi from "../../index";
import * as M2H from "../m2h";

describe("Test All Konversi", () => {
  test("Hijriyah Ke Masehi", () => {
    let m = Konversi.HijriyahKeMasehi(1442, 2, 21);
    expect(m).toStrictEqual({ gy: 2020, gm: 10, gd: 9 });
  });

  test("Masehi ke Hijriyah M2H", () => {
    let { year, month, dayOfMonth } = M2H.MasehiKeHijriyah(
      new Date("2020-10-7"),
      -1
    );
    expect(year).toBe(1442);
    expect(month).toBe(2);
    expect(dayOfMonth).toBe(19);
  });

  test("Jawa ke Hijriyah", () => {
    let j = Konversi.JawaKeHijriyah({ d: 19, m: 2, y: 1954 });
    expect(j).toEqual({ tgl: 19, bln: 2, thn: 1442 });
  });

  test("Masehi Ke Jawa", () => {
    let o = Konversi.MasehiKeJawa({ y: 2020, m: 10, d: 18 });
    expect(o).toEqual({ tgl: 1, bln: 3, thn: 1954 });
  });

  test("Jawa Ke Masehi", () => {
    let x = Konversi.MasehiKeJawa({ y: 2020, m: 10, d: 10 });
    expect(x).toEqual({ tgl: 22, bln: 2, thn: 1954 });
  });
});
