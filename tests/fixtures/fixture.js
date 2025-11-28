import { test as base } from 'playwright-bdd';
import { EcomLoginPage } from '../pages/ecomLoginObj';
import { EcomAccountInfoPage } from '../pages/ecomAccountInfoObj';

export const test = base.extend({
    ecomLoginPage: async ({ page }, use) => {
        await use(new EcomLoginPage(page));
    },
    ecomEditAccountPage: async ({ page }, use) => {
        await use(new EcomAccountInfoPage(page));
    },
});

