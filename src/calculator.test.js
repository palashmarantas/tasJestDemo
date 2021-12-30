const getAboutUsLink = require("./calculator");


test("Retuns about-us for english language", () => {
    expect(getAboutUsLink(process.env.ENGLISH_CODE)).toBe("/about-us");
});

test("Returns about-us for spanish language", () => {
    expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
});

test.skip("Skip a test", () => {
    expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
});

test("Fail a test", () => {
    expect(getAboutUsLink("es-ES")).toBe("");
});

test("Blacklist a test", () => {
    expect(getAboutUsLink("es-ES")).toBe("");
});

test("Fail a test", () => {
    expect(getAboutUsLink("es-ES")).toBe("");
});

// test("Fail a test", () => {
//     expect(getAboutUsLink("es-ES")).toBe("");
// });
