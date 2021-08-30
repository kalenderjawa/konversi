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
    let o = Konversi.MasehiKeJawa({ y: 2021, m: 8, d: 30 });
    expect(o).toEqual({ tgl: 21, bln: 1, thn: 1955 });
  });

  test("Jawa Ke Masehi", () => {
    let x = Konversi.JawaKeMasehi({ y: 1954, m: 2, d: 22 });
    expect(x).toEqual({ gd: 10, gm: 10, gy: 2020 });
  });
});
