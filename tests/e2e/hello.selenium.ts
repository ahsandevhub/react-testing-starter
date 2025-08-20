import { Builder, By, until } from "selenium-webdriver";
import chrome from "selenium-webdriver/chrome";

async function main() {
  // set chrome options (uncomment headless for CI)
  const options = new chrome.Options();
  // options.addArguments("--headless=new", "--no-sandbox", "--disable-gpu");

  const driver = await new Builder()
    .forBrowser("chrome")
    .setChromeOptions(options)
    .build();
  try {
    // 1) make sure your dev server is running on this URL
    await driver.get("http://localhost:5173");

    // 2) wait for a clear, stable element (h1) instead of a fragile title regex
    await driver.wait(until.elementLocated(By.css("h1")), 8000);

    // optional: sanity checks and logging
    const title = await driver.getTitle();
    console.log("Page title:", title);

    const h1 = await driver.findElement(By.css("h1"));
    console.log("First H1 text:", await h1.getText());
  } catch (err) {
    console.error("E2E failure:", err);
    throw err;
  } finally {
    await driver.quit();
  }
}

main();
