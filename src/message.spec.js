const getMessage = require("./message");

describe("Message", () => {
  describe("GetMessage", () => {
    it("should return hello world when provide a name", () => {
      expect(getMessage("world")).toBe("Hello world");
    });
  });
});
