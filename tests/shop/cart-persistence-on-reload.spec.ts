// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shop Page Functionality', () => {
  test('Cart Persistence on Reload', async ({ page }) => {
    // 1. Navigate to the shop page
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Add 2 items to cart
    await page.getByTestId('add-to-cart-btn').first().click();
    await expect(page.getByTestId('cart-badge')).toHaveText('1');
    await page.getByTestId('add-to-cart-btn').nth(1).click();
    await expect(page.getByTestId('cart-badge')).toHaveText('2');

    // 3. Reload the page
    await page.reload();

    // 4. Verify cart badge shows 2
    const cartBadge = page.getByTestId('cart-badge');
    await expect(cartBadge).toHaveText('2');

    // 5. Verify localStorage contains the cart items
    const cartLength = await page.evaluate(() => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      return cart.length;
    });
    expect(cartLength).toBe(2);
  });
});