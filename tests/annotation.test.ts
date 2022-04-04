import {expect, test} from "@playwright/test";

test("first test", async ({page}) => {
    console.log("first test running");
    await page.goto("https://letcode.in");
    console.log("first test done");
})
test("second test", async ({page}) => {
    console.log("second test running");
    await page.goto("https://playwright.dev");
    console.log("second test done");
})
test.only("third test", async ({page, browserName}) => {
    console.log(browserName);
    // if(browserName === "chromium"){
    //     test.skip()
    // }
    // test.slow()
    //test.setTimeout(10000)
    test.skip(browserName === "chromium", "Still working on it")
    console.log("third test running");
    await page.goto("https://google.com");
    console.log("third test done");
})