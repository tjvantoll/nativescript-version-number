var VersionNumber = require("nativescript-version-number").VersionNumber;
var versionNumber = new VersionNumber();

// TODO replace 'functionname' with an acual function name of your plugin class and run with 'npm test <platform>'
describe("greet function", function() {
  it("exists", function() {
    expect(versionNumber.greet).toBeDefined();
  });

  it("returns a string", function() {
    expect(versionNumber.greet()).toEqual("Hello, NS");
  });
});