```
npm install -D @playwright/test

npm run test
npm run show-report
//Open Playwright Inspector
PWDEBUG=1 npm run test
// codegen mode generated script
npx playwright codegen wikipedia.org

//Run all the tests
npx playwright test
//Run a single test file
npx playwright test tests/todo-page.spec.ts
//Run a set of test files
npx playwright test tests/todo-page/ tests/landing-page/
//Run files that have my-spec or my-spec-2 in the file name
npx playwright test my-spec my-spec-2
//Run the test with the title
npx playwright test -g "add a todo item"
//Run tests in headed browsers
npx playwright test --headed
//Run tests in a particular configuration (project)
npx playwright test --project=firefox
//Disable parallelization
npx playwright test --workers=1
//Choose a reporter
npx playwright test --reporter=dot
//Run in debug mode with Playwright Inspector
npx playwright test --debug
//Ask for help
npx playwright test --help

npx playwright show-report

```
```
//https://www.youtube.com/watch?v=A_uvbTFctN4
//Trace Viewer
npm run test
npx playwright show-trace ./example-trace.zip

//When navigating to trace.playwright.dev, you can upload trace files using drag and drop.
https://trace.playwright.dev/
```