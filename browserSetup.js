import { chromium } from '@playwright/test';

export async function setupBrowser() {
    // Launch the browser
    const browser = await chromium.launch({
        headless: true, // Set to false if you want to see the browser during tests
    });

    // Create a new browser context
    const context = await browser.newContext();

    // Create a new page
    const page = await context.newPage();

    return { browser, context, page };
}

export async function teardownBrowser(browser) {
    // Close the browser after tests
    await browser.close();
}