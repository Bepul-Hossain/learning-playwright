import { test } from "@playwright/test";
import fs from "fs"


test('API', async ({ page }) => {
     await page.goto('https://letcode.in/elements');
    const [response] = await Promise.all([
        page.waitForResponse(res => res.url() === 'https://api.github.com/users/ortonikc' && res.status() === 200),
        page.fill("input[name='username']", 'ortonikc'),
        page.click('button'),
    ]);
    // console.log(await response.json());
    //jsonPretty format
    fs.writeFile ("file.json", JSON.stringify(await response.json(),null,'\t'), function(err) {
        if (err) throw err;
        console.log('complete');
        }
    );
});