const Util = require('../index')

describe("Test All Konversi", () => {
    test("Masehi Ke Hijriyah", () => {
        let h = Util.masehikeHijriyah(2020, 10, 5)
        expect(h).toStrictEqual({ "hy": 1442, "hm": 2, "hd": 17 })
    })

    test("Hijriyah Ke Masehi", () => {
        let m = Util.hijriyahKeMasehi(1442, 2, 17)
        expect(m).toStrictEqual({ "gy": 2020, "gm": 10, "gd": 5 })
    })
})

