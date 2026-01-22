// spec: specs/checkout-test-plan-simplified.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Checkout Page Functionality', () => {
  test('Form Validation', async ({ page }) => {
    // 1. Navigate to index.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // Clear localStorage before test
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    
    // 2. Add item to cart
    await page.getByTestId('add-to-cart-btn').first().click();
    await expect(page.getByTestId('add-to-cart-btn').first()).toHaveText('Added!');

    // 3. Navigate to checkout.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/checkout.html');

    // 4. Click Place Order without filling
    await page.getByTestId('finish-btn').click();

    // 5. Verify no navigation
    await expect(page.getByText('Items (1)')).toBeVisible();

    // 6. Verify validation errors
    await expect(page.getByTestId('email')).toBeFocused();
  });
});