import { test, expect } from '@playwright/test';
import { MainPage } from '../../pages/mainPage';
import { users } from '../../fixtures/users';

/** @type { MainPage } */
let mainPage;

const admin = users.login1;

test.describe('Home Page Tests', () => {

    test.beforeEach(async ({ page }) => {
        mainPage = new MainPage(page);

        await mainPage.loginPage.goTo();
    });

    test('Test Case 1', async () => {

        // Login to the application
        await mainPage.loginPage.login(admin.username, admin.password);

        // Navigate to the Web Application
        await mainPage.homePage.waitForURL(); // This does nothing at the moment because the URL doesn't change between sections
        await mainPage.homePage.webApplicationsButton.click();
        await expect(mainPage.homePage.webApplicationTitle).toBeVisible({ timeout: 3000 });
        await expect(mainPage.homePage.webApplicationSubtitle).toBeVisible({ timeout: 3000 });

        // Verify "Implement user authentication" is in the "To Do" column.
        await mainPage.homePage.verifyCardInColumn('To Do', 'Implement user authentication');

        // Verify "Implement user authentication" has tags "Feature" and "High Priority”
        await mainPage.homePage.verifyTagInCard('Implement user authentication', 'Feature', 'High Priority');
    });


    test('Test Case 2', async () => {

        // Login to the application
        await mainPage.loginPage.login(admin.username, admin.password);

        // Navigate to the Web Application
        await mainPage.homePage.waitForURL(); // This does nothing at the moment because the URL doesn't change between sections
        await mainPage.homePage.webApplicationsButton.click();
        await expect(mainPage.homePage.webApplicationTitle).toBeVisible({ timeout: 3000 });
        await expect(mainPage.homePage.webApplicationSubtitle).toBeVisible({ timeout: 3000 });

        // Verify "Implement user authentication" is in the "To Do" column.
        await mainPage.homePage.verifyCardInColumn('To Do', 'Fix navigation bug');

        // Verify "Implement user authentication" has tags "Feature" and "High Priority”
        await mainPage.homePage.verifyTagInCard('Fix navigation bug', 'Bug');
    });

    test('Test Case 3', async () => {

        // Login to the application
        await mainPage.loginPage.login(admin.username, admin.password);

        // Navigate to the Web Application
        await mainPage.homePage.waitForURL(); // This does nothing at the moment because the URL doesn't change between sections
        await mainPage.homePage.webApplicationsButton.click();
        await expect(mainPage.homePage.webApplicationTitle).toBeVisible({ timeout: 3000 });
        await expect(mainPage.homePage.webApplicationSubtitle).toBeVisible({ timeout: 3000 });

        // Verify "Implement user authentication" is in the "To Do" column.
        await mainPage.homePage.verifyCardInColumn('In progress', 'Design system updates');

        // Verify "Implement user authentication" has tags "Feature" and "High Priority”
        await mainPage.homePage.verifyTagInCard('Design system updates', 'Design');
    });

    test('Test Case 4', async () => {

        // Login to the application
        await mainPage.loginPage.login(admin.username, admin.password);

        // Navigate to the Web Application
        await mainPage.homePage.waitForURL(); // This does nothing at the moment because the URL doesn't change between sections
        await mainPage.homePage.mobileApplicationsButton.click();
        await expect(mainPage.homePage.mobileApplicationTitle).toBeVisible({ timeout: 3000 });
        await expect(mainPage.homePage.mobileApplicationSubtitle).toBeVisible({ timeout: 3000 });

        // Verify "Implement user authentication" is in the "To Do" column.
        await mainPage.homePage.verifyCardInColumn('To Do', 'Push notification system');

        // Verify "Implement user authentication" has tags "Feature" and "High Priority”
        await mainPage.homePage.verifyTagInCard('Push notification system', 'Feature');
    });

    test('Test Case 5', async () => {

        // Login to the application
        await mainPage.loginPage.login(admin.username, admin.password);

        // Navigate to the Web Application
        await mainPage.homePage.waitForURL(); // This does nothing at the moment because the URL doesn't change between sections
        await mainPage.homePage.mobileApplicationsButton.click();
        await expect(mainPage.homePage.mobileApplicationTitle).toBeVisible({ timeout: 3000 });
        await expect(mainPage.homePage.mobileApplicationSubtitle).toBeVisible({ timeout: 3000 });

        // Verify "Implement user authentication" is in the "To Do" column.
        await mainPage.homePage.verifyCardInColumn('In Progress', 'Offline mode');

        // Verify "Implement user authentication" has tags "Feature" and "High Priority”
        await mainPage.homePage.verifyTagInCard('Offline mode', 'Feature', 'High Priority');
    });

    test('Test Case 6', async () => {

        // Login to the application
        await mainPage.loginPage.login(admin.username, admin.password);

        // Navigate to the Web Application
        await mainPage.homePage.waitForURL(); // This does nothing at the moment because the URL doesn't change between sections
        await mainPage.homePage.mobileApplicationsButton.click();
        await expect(mainPage.homePage.mobileApplicationTitle).toBeVisible({ timeout: 3000 });
        await expect(mainPage.homePage.mobileApplicationSubtitle).toBeVisible({ timeout: 3000 });

        // Verify "Implement user authentication" is in the "To Do" column.
        await mainPage.homePage.verifyCardInColumn('Done', 'App icon design');

        // Verify "Implement user authentication" has tags "Feature" and "High Priority”
        await mainPage.homePage.verifyTagInCard('App icon design', 'Design');
    });
});