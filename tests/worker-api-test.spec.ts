import { test, expect, APIRequestContext, APIResponse } from "@playwright/test";

let headersArr: Array<{ name: string; value: string }>;

test("backend works", async ({ page }) => {
  await page.goto("https://skyclanparser.shinigamoo.workers.dev/");

  const response = await page.request.get("/");
  await expect(response).toBeOK();
});

test("has CORS headers", async ({ page }) => {
  await page.goto("https://skyclanparser.shinigamoo.workers.dev/");

  const response = await page.request.get("/");

  headersArr = response.headersArray();
  const originObj = headersArr.find(
    (header) => header.name.toLowerCase() === "access-control-allow-origin",
  );
  expect(originObj?.value).toContain("*");

  const methodsObj = headersArr.find(
    (header) => header.name.toLowerCase() === "access-control-allow-methods",
  );
  expect(methodsObj?.value).toContain("GET");
  expect(methodsObj?.value).toContain("POST");
  expect(methodsObj?.value).toContain("OPTIONS");

  const headersObj = headersArr.find(
    (header) => header.name.toLowerCase() === "access-control-allow-headers",
  );
  expect(headersObj?.value).toContain("Content-Type");
});
