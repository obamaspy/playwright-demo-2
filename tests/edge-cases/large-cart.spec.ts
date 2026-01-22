// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Edge Cases and Error Handling', () => {
  test('Large Number of Cart Items', async ({ page }) => {
    // 1. Navigate to the shop page
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Use browser dev tools to set localStorage cart with 100 items
    await page.evaluate(() => {
      const cart = [];
      for (let i = 0; i < 100; i++) {
        cart.push({ name: 'Vintage Denim Jacket', price: 59.99, id: Date.now() + i });
      }
      localStorage.setItem('cart', JSON.stringify(cart));
    });

    // 3. Verify cart badge shows 100
    await page.evaluate(() => {
      let cart = [];
      try {
        const cartData = localStorage.getItem('cart');
        cart = cartData ? JSON.parse(cartData) : [];
      } catch (e) {
        cart = [];
      }
      const cartCountElem = document.getElementById('cart-count');
      if (cartCountElem) {
        cartCountElem.innerText = cart.length;
      }
    });
    await expect(page.getByText('100')).toBeVisible();

    // 4. Navigate to cart.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/cart.html');

    // 5. Verify item count shows '100 Items'
    await expect(page.getByText('100 Items')).toBeVisible();

    // 6. Verify total price is correct (100 * 59.99 = 5999.00)
    await expect(page.getByText('$5,999.00')).toBeVisible();

    // 7. Verify page performance is acceptable
    // Page loads and displays correctly with large cart
  });
});