// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shop Page Functionality', () => {
  test('Add multiple items to cart', async ({ page }) => {
    // 1. Navigate to the shop page
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // Clear localStorage before test
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    // 2. Click 'Add to Cart' button for 'Vintage Denim Jacket'
    const firstItemButton = page.getByTestId('add-to-cart-btn').first();
    await firstItemButton.click();

    // 3. Click 'Add to Cart' button for 'Summer Floral Dress'
    const secondItemButton = page.getByTestId('add-to-cart-btn').nth(1);
    await secondItemButton.click();

    // 4. Wait for button to show 'Added!'
    await expect(firstItemButton).toHaveText('Added!');
    await expect(secondItemButton).toHaveText('Added!');

    // 5. Verify cart badge shows 2
    const cartBadge = page.getByTestId('cart-badge');
    await expect(cartBadge).toHaveText('2');
  });
});
