const googleSearch = require("./script");
const dbMock = ["dog.com", "cheesepuff.com", "disney.com"];

describe("googleSearch", () => {
  it("this is a test", () => {
    expect("cat").toBe("cat");
    googleSearch("testtest", dbMock);
  });

  it("is searching google", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
  });

  it("is searching google", () => {
    expect(googleSearch("dog", dbMock)).toEqual(["dog.com"]);
  });

  it("should not return null and or undefined", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("should return the length of the array", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(3);
  });
});
