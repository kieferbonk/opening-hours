import { hexToRGB } from "./ConversionUtils"

describe("ConversionUtils", () => {
    it("converts hex colors to RGB", () => {
        expect(hexToRGB("#202125")).toStrictEqual([32, 33, 37])
        expect(hexToRGB("#FFFFFF")).toStrictEqual([255, 255, 255])
        expect(hexToRGB("#5BCB02")).toStrictEqual([91, 203, 2])
    })
})
