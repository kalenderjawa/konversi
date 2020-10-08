const Util = require("../index.js");
const M2H = require("../m2h.js");

describe("Test All Konversi", () => {
  test("Masehi Ke Hijriyah", () => {
    let h = Util.masehikeHijriyah(2020, 10, 7);
    expect(h).toStrictEqual({ hy: 1442, hm: 2, hd: 19 });
  });

  test("Hijriyah Ke Masehi", () => {
    let m = Util.hijriyahKeMasehi(1442, 2, 19);
    expect(m).toStrictEqual({ gy: 2020, gm: 10, gd: 7 });
  });

  test("Masehi ke Hijriyah M2H", () => {
    let x = M2H.convert(new Date(), -2);
    console.log(x);
  });
});
