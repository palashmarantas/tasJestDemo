const getAboutUsLink = require("./calculator");

describe('Test Language code_Expanded name to check for test suite_expand', function () {
    it("Returns about-us for english language", () => {
        expect(getAboutUsLink(process.env.ENGLISHCODE)).toBe("/about-us");
    });

    it("Returns about-us for spanish language_Returns about-us for spanish language", () => {
        expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
    });

    
    // dfgit("Fail case for english language", () => {
    //     expect(getAboutUsLink("en-Uws")).toBe("/about-us");
    // });

    // it("Fail case for spanish", () => {
    //     expect(getAboutUsLink("es-ES")).toBe("/acerca-dedddd");
    // });

    it("Returns meist for estonian language", () => {
        expect(getAboutUsLink("et")).toBe("/meist");
    });

    it("Returns about-us for czech language", () => {
        expect(getAboutUsLink("cs")).toBe("/o nás");
    });

    // it("Fail czech language", () => {
    //     expect(getAboutUsLink("cs")).toBe("/o nas");
    // });

    
    it("added new test newBranch wtestReturns about-us for czech language", () => {
        expect(getAboutUsLink("cs")).toBe("/o nás");
    });
});
