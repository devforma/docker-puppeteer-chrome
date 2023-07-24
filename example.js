const puppeteer = require("puppeteer");

const extensionPath = "/extensions/uBOLite"

const getBackgroundPage = async (browser) => {
    const target = await browser.waitForTarget(target => target.type() == "background_page")
    return target.page()
};

const launchBrowser = async () => {
    return puppeteer.launch({
        executablePath: "google-chrome-stable",
        headless: "new",
        defaultViewport: { width: 1920, height: 1080 },
        args: [
            `--no-sandbox`,

            // enable uBOLite extension
            `--disable-extensions-except=${extensionPath}`,
            `--load-extension=${extensionPath}`
        ]
    })
};

const main = async () => {
    const browser = await launchBrowser();

    // 等待Manifest V2类型的扩展加载完毕
    // let backgroundPage = await getBackgroundPage(browser)

    const page = await browser.newPage();

    await page.tracing.start({ path: "/trace/trace.json" })

    await page.goto("https://www.alibabacloud.com/help/zh/apsaradb-for-rds/latest/high-dimensional-vector-similarity-search-pgvector");
    await page.waitForNetworkIdle({ timeout: 4 * 1000 });
    await page.screenshot({ path: "scidb.png" });

    await page.tracing.stop();

    await page.close();
    await browser.close();
};


main()
