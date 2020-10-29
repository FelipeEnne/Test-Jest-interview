const { add, mul, sub, div } = require("./number");

describe("Test add", () => {
  test("adds return a number", () => {
    const type = typeof add(1, 1);
    expect(type).toBe("number");
  });

  test("adds 0 + 2 to equal 3", () => {
    expect(add(0, 2)).toBe(2);
  });

  test("adds 1 + 2 to equal 3", () => {
    expect(add(1, 2)).toBe(3);
  });

  test("adds 2 + 2 to equal 4", () => {
    expect(add(2, 2)).toBe(4);
  });
});

describe("Test mul", () => {
  test("mul return a number", () => {
    const type = typeof mul(1, 1);
    expect(type).toBe("number");
  });

  test("mul 0 * 2 to equal 0", () => {
    expect(mul(0, 2)).toBe(0);
  });

  test("adds 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  test("adds 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });
});

describe("Test sub", () => {
  test("sub return a number", () => {
    const type = typeof sub(1, 1);
    expect(type).toBe("number");
  });

  test("adds 0 - 2 to equal -2", () => {
    expect(sub(0, 2)).toBe(-2);
  });

  test("adds 1 - 2 to equal -1", () => {
    expect(sub(1, 2)).toBe(-1);
  });

  test("adds 2 - 2 to equal 0", () => {
    expect(sub(2, 2)).toBe(0);
  });
});

describe("Test div", () => {
  test("div return a number", () => {
    const type = typeof div(1, 1);
    expect(type).toBe("number");
  });

  test("adds 0 / 2 to equal 0", () => {
    expect(div(0, 2)).toBe(0);
  });

  test("adds 1 / 2 to be close To 0.5", () => {
    expect(div(1, 2)).toBeCloseTo(0.5);
  });

  test("adds 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  test("adds 2 / 0 to equal Infinity", () => {
    expect(div(2, 0)).toBe(Infinity);
  });
});
