// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shop Page Functionality', () => {
  test('Add Multiple Items to Cart', async ({ page }) => {
    // 1. Navigate to the shop page
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Click 'Add to Cart' for 'Vintage Denim Jacket'
    const firstButton = page.getByTestId('add-to-cart-btn').first();
    await firstButton.click();

    // 3. Wait for button to revert
    await new Promise(f => setTimeout(f, 1 * 1000));

    // 4. Click 'Add to Cart' for 'Summer Floral Dress'
    const secondButton = page.getByTestId('add-to-cart-btn').nth(1);
    await secondButton.click();

    // 5. Verify cart badge shows 2
    const cartBadge = page.getByTestId('cart-badge');
    await expect(cartBadge).toHaveText('2');
  });
});