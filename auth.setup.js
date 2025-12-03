import { test as setup, expected } from '@playwright/test';

const authfile = 'playwright/.auth/user.json';
setup('Authenticate user before tests', async ({ page }) => {

    await page.goto(process.env.URL);
    await page.getByRole('button', { name: 'My account' }).click();
    await page.getByLabel('E-Mail Address').fill(process.env.EMAIL);
    await page.getByLabel('Password').fill(process.env.PASSWORD);
    await page.locator('input:has-text("Login")').click();

    //  await expected(page).toHaveURL('https://ecommerce-playground.lambdatest.io/index.php?route=account/account');
    await page.context().storageState({ path: authfile });
})
