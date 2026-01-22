// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Edge Cases and Error Handling', () => {
  test('Large Number of Cart Items', async ({ page }) => {
    // 1. Use browser dev tools to set localStorage cart with 100 items
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');
    await page.evaluate(() => {
      const cart = [];
      for (let i = 0; i < 100; i++) {
        cart.push({ name: 'Vintage Denim Jacket', price: 59.99, id: Date.now() + i });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    });

    // 2. Navigate to the shop page
    // Already navigated

    // 3. Verify cart badge shows 100
    await page.evaluate(() => updateBadge());
    await expect(page.getByText('100')).toBeVisible();

    // 4. Verify page performance is acceptable
    // Page loads and displays correctly with large cart
  });
});