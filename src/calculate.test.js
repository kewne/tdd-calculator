
import { expect, test } from "vitest";
import calculate from "./calculate";

test("calculates bare numbers", () => {
    expect(calculate("5")).toBe(5);
});
