import { expect } from '@playwright/test';

export class HomePage {

    constructor(page) {

        // Initialize page object
        this.page = page;

        // Home Page
        this.title = page.locator('h1').filter({ hasText: 'Projects' });
        this.flowTable = page.locator('div[class*= "full overflow"]')

        // Navigation tool bar
        this.webApplicationsButton = page.getByRole('button', { name: 'Web Application Main web' })
        this.mobileApplicationsButton = page.getByRole('button', { name: 'Mobile Application Native' })
        this.marketingCampaignButton = page.getByRole('button', { name: 'Marketing Campaign Q2' })

        // #region Web Application Tab
        this.webApplicationTitle = page.locator('h1').filter({ hasText: 'Web Application' });
        this.webApplicationSubtitle = page.getByRole('banner').getByText('Main web application')

        this.projectColumn = page.locator('div[class= "flex flex-col w-80 bg-gray-50 rounded-lg p-4"]')
        this.projectColumnByName = (name) => this.projectColumn.filter({ hasText: name });
        this.itemCard = page.locator('div[class*= "bg-white p-4 rounded-lg"]');
        this.itemCardByName = (name) => this.itemCard.filter({ hasText: name });
        this.itemCardTag = page.locator('span[class*= "px-2 py-1 rounded-full"]');
        this.itemCardTagByName = (name) => this.itemCardTag.getByText(name);
        // #endregion

        // #region Mobile Application Tab
        this.mobileApplicationTitle = page.locator('h1').filter({ hasText: 'Mobile Application' });
        this.mobileApplicationSubtitle = page.getByRole('banner').getByText('Native mobile app development')
        // #endregion

        // #region Marketing Campaign Tab 
        this.marketingTitle = page.locator('h1').filter({ hasText: 'Web Application' });
        this.marketingSubtitle = page.getByRole('banner').getByText('Main web application')
        // #endregion
    }

    async goTo() {
        await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    }


    async waitForURL() {
        await this.page.waitForURL('https://animated-gingersnap-8cf7f2.netlify.app/');
    }

    async verifyCardInColumn(columnName, cardName) {
        await expect(this.projectColumnByName(columnName)).toBeVisible({ timeout: 3000 });
        let column = await this.projectColumnByName(columnName)
        let card = column.locator('div[class*= "bg-white p-4 rounded-lg"]').getByText(cardName);
        await expect(card).toBeVisible({ timeout: 3000 });
    }

    async verifyTagInCard(cardName, ...tagNames) {
        await expect(this.itemCardByName(cardName)).toBeVisible({ timeout: 3000 });
        let card = await this.itemCardByName(cardName);

        for (const tagName of tagNames) {
            let tag = card.locator('span[class*= "px-2 py-1 rounded-full"]').getByText(tagName);
            await expect(tag).toBeVisible({ timeout: 3000 });
        }
    }
}