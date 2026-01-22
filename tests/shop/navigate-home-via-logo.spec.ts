// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shop Page Functionality', () => {
  test('Navigate Home via Logo', async ({ page }) => {
    // 1. Navigate to the shop page
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Click 'StyleAutomation' logo link
    await page.getByTestId('nav-home').click();

    // 3. Verify page remains on index.html
    await expect(page).toHaveURL('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');
    await expect(page).toHaveTitle('Shop - StyleAutomation');
  });
});