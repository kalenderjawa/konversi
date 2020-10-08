import 'core-js/stable'
import 'regenerator-runtime/runtime'

import * as Konversi from "../../index";
import * as M2H from "../m2h";

describe("Test All Konversi", () => {
  test("Masehi Ke Hijriyah", () => {
    let h = Konversi.MasehikeHijriyah(2020, 10, 7);
    expect(h).toStrictEqual({ hy: 1442, hm: 2, hd: 19 });
  });

  test("Hijriyah Ke Masehi", () => {
    let m = Konversi.HijriyahKeMasehi(1442, 2, 19);
    expect(m).toStrictEqual({ gy: 2020, gm: 10, gd: 7 });
  });

  test("Masehi ke Hijriyah M2H", () => {
    let x = M2H.konversi(new Date(), -2);
    console.log(x);
  });

  test("Jawa ke Hijriyah", () => {
    let j = Konversi.JawaKeHijriyah({d:19, m:2, y:1954})
    console.log(j)
  })
});
