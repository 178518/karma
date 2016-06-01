/**
 * 测试整数
 */
describe("this is a integer test!", function () {
    it("Is integer", function () {
        expect(true).toEqual(isInteger(20));
        expect(false).toEqual(isInteger("20"));
        expect(false).toEqual(isInteger(0));
        expect(false).toEqual(isInteger(0.1));
    })
});

/**
 * 测试翻转
 */
describe("this is a string reverse test!", function () {
    it("reverse String", function () {
        expect("DCBA").toEqual(reverse("ABCD"))
    })
});

describe("Math method test!", function () {
    it("Math method", function () {
        expect(1.0).toEqual(Math.round(.6));
        expect(1.0).toEqual(Math.ceil(.6));
        expect(0.0).toEqual(Math.floor(.6));
    })

    it("number cacl", function () {
        var x = .3 - .2;
        var y = .2 - .1;
        expect(false).toEqual(x == y);
        expect(false).toEqual(x == .1);
        expect(true).toEqual(y == .1);
    })
});
