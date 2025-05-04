import { expect } from '@playwright/test';

export class LoginPage {

    constructor(page) {

        // Initialize page object
        this.page = page;

        // Login Page
        this.usernameInput = page.locator('input[id="username"]');
        this.passwordInput = page.locator('input[id="password"]');
        this.signInButton = page.locator('button[type="submit"]');
        this.passwordError = page.locator('div[class="text-red-500 text-sm"]').filter({ hasText: 'Invalid username or password' });
    }

    async goTo() {
        await this.page.goto('https://animated-gingersnap-8cf7f2.netlify.app/');
    }

    async waitForURL() {
        await this.page.waitForURL('https://animated-gingersnap-8cf7f2.netlify.app/');
    }

    async login(username, password) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }
} 