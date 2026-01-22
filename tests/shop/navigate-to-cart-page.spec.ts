// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shop Page Functionality', () => {
  test('Navigate to Cart Page', async ({ page }) => {
    // 1. Navigate to the shop page
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // Clear localStorage before test
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    
    // 2. Add one item to cart
    await page.getByTestId('add-to-cart-btn').first().click();
    await expect(page.getByTestId('cart-badge')).toHaveText('1');

    // 3. Click 'Cart' link in navbar
    await page.getByTestId('nav-cart').click();

    // 4. Verify navigation to cart.html
    await expect(page).toHaveURL('file:///home/emoi_user/Workspace/playwright%20demo%202/cart.html');

    // Verify cart badge persists (cart data persists)
    await expect(page.locator('text=1 Item')).toBeVisible();
    await expect(page.locator('text=Vintage Denim Jacket')).toBeVisible();
  });
});