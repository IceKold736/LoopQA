import { HomePage } from './homePage';
import { LoginPage } from './loginPage';

export class MainPage {
    constructor(page) {
        this.page = page;

        this.homePage = new HomePage(page);
        this.loginPage = new LoginPage(page);
    }
}