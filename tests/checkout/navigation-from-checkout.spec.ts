// spec: checkout-test-plan-simplified.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Checkout Page Functionality', () => {
  test('Navigation from Checkout', async ({ page }) => {
    // 1. Navigate to checkout.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/checkout.html');

    // 2. Click StyleAutomation logo
    await page.getByTestId('nav-home').click();

    // 3. Verify navigation to index.html
    await expect(page.getByText('Vintage Denim Jacket')).toBeVisible();
  });
});