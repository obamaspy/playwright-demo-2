// spec: specs/checkout-test-plan-simplified.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Checkout Page Functionality', () => {
  test('Display Checkout with Items', async ({ page }) => {
    // 1. Navigate to index.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Add item to cart
    await page.getByTestId('add-to-cart-btn').first().click();
    await expect(page.getByTestId('add-to-cart-btn').first()).toHaveText('Added!');

    // 3. Navigate to checkout.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/checkout.html');

    // 4. Verify order summary
    await expect(page.getByText('Items (1)')).toBeVisible();

    // 5. Verify total price
    await expect(page.getByText('$59.99')).toBeVisible();
  });
});