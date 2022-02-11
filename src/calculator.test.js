const getAboutUsLink = require("./calculator");

test("Retuns about-us for english language", () => {
    expect(getAboutUsLink(process.env.ENGLISHCODE)).toBe("/about-us");
});

test("Returns about-us for spanish language", () => {
    expect(getAboutUsLink(process.env.GLOAR_VARIABLE)).toBe("/acerca-de");
});

test.skip("Skip a test", () => {
    //comment
    expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
});

// test("Fail a test -1", () => {
//     expect(getAboutUsLink("es-ES")).toBe("");
// });


// test("Blacklist a test", () => {
//     expect(getAboutUsLink("es-ES")).toBe("");
// });

// test("Fail a test -2", () => {
//     expect(getAboutUsLink("es-ES")).toBe("");
// });

test("Account added by arjun-rathi", () => {
    expect(getAboutUsLink("es-ES")).toBe("/acerca-de");
});
