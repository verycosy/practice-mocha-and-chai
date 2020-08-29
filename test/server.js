const expect = require("chai").expect;
const request = require("request");

describe("Color Code Converter API", () => {
  describe("RGB to Hex conversion", () => {
    const url = "http://localhost:3000/rgbToHex?red=255&green=255&blue=255";

    it("returns status 200", (done) => {
      request(url, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });

    it("returns the color in hex", (done) => {
      request(url, (err, res, body) => {
        expect(body).to.equal("ffffff");
        done();
      });
    });
  });

  describe("Hex to RGB Conversion", () => {
    const url = "http://localhost:3000/hexToRgb?hex=00ff00";

    it("returns status 200", (done) => {
      request(url, (err, res, body) => {
        expect(res.statusCode).to.equal(200);
        done();
      });
    });
    it("returns the color in RGB", (done) => {
      request(url, (err, res, body) => {
        expect(body).to.equal("[0,255,0]");
        done();
      });
    });
  });
});
