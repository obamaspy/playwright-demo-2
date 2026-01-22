// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shop Page Functionality', () => {
  test('Empty Cart State', async ({ page }) => {
    // 1. Navigate to the shop page with empty cart
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // Clear localStorage before test
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    
    // 2. Verify cart badge shows 0
    const cartBadge = page.getByTestId('cart-badge');
    await expect(cartBadge).toHaveText('0');

    // 3. Verify no items in localStorage
    const cartLength = await page.evaluate(() => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      return cart.length;
    });
    expect(cartLength).toBe(0);
  });
});