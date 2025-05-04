import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/mainPage';
import { users } from '../../fixtures/users';

/** @type { MainPage } */
let mainPage;

const admin = users.login1;

test.describe('Smokes', () => {

    test('Login Page: Login Smoke', async ({ page }) => {
        mainPage = new MainPage(page);

        // Verify the user is able to login with valid credentials
        await mainPage.loginPage.goTo();
        await mainPage.loginPage.login(admin.username, admin.password);
        await mainPage.homePage.waitForURL(); // This does nothing at the moment because the URL doesn't change between sections
        await expect(mainPage.homePage.title).toBeVisible({ timeout: 3000 });
    });

    test('Login Page: Invalid password', async ({ page }) => {
        mainPage = new MainPage(page);

        // Verify the error message is displayed when the user enters an invalid password
        await mainPage.loginPage.goTo();
        await mainPage.loginPage.login(admin.username, 'wrongpassword');
        await expect(mainPage.loginPage.passwordError).toBeVisible({ timeout: 3000 });
    });

    test('Login Page: Invalid username', async ({ page }) => {
        mainPage = new MainPage(page);

        // Verify the error message is displayed when the user enters an invalid username
        await mainPage.loginPage.goTo();
        await mainPage.loginPage.login('wrongusername', admin.password);
        await expect(mainPage.loginPage.passwordError).toBeVisible({ timeout: 3000 });
    });

    test.fail('Login Page: Login Negative', async ({ page }) => {
        mainPage = new MainPage(page);

        // Verify the user is not able to login with invalid credentials
        await mainPage.loginPage.goTo();
        await mainPage.loginPage.login(admin.username, 'wrongpassword');
        await mainPage.homePage.waitForURL(); // This does nothing at the moment because the URL doesn't change between sections
        await expect(mainPage.homePage.title).toBeVisible({ timeout: 3000 });
    });
});