const users = require("./string");

describe("Test user", () => {
  test("Verify keys", () => {
    const userKeys = Object.keys(users[1]);
    expect(userKeys).toStrictEqual(["id", "first_name", "last_name", "email"]);
  });

  test("If id is a number", () => {
    const typeUserId = typeof users[0].id;
    expect(typeUserId).toBe("number");
  });

  test("If first_name is a string", () => {
    const typeUserFname = typeof users[0].first_name;
    expect(typeUserFname).toBe("string");
  });

  test("If last_name is a string", () => {
    const typeUserLname = typeof users[0].last_name;
    expect(typeUserLname).toBe("string");
  });

  test("If email is a string", () => {
    const typeUserEmail = typeof users[0].email;
    expect(typeUserEmail).toBe("string");
  });

  test("Check email", () => {
    const check = new RegExp(
      /^[A-Za-z0-9_\-\.]+@[A-Za-z0-9_\-\.]{2,}\.[A-Za-z0-9]{2,}(\.[A-Za-z0-9])?/
    );
    expect(check.test(users[0].email)).toBe(true);
  });
});
