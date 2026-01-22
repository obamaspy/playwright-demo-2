// spec: cart-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Page Functionality', () => {
  test('Proceed to Checkout', async ({ page }) => {
    // 1. Navigate to index.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Add at least one item to cart
    await page.getByTestId('add-to-cart-btn').first().click();
    await expect(page.getByTestId('cart-badge')).toHaveText('1');

    // 3. Navigate to cart.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/cart.html');

    // 4. Click 'Proceed to Checkout' button
    await page.getByTestId('checkout-btn').click();

    // 5. Verify page navigates to checkout.html
    await expect(page).toHaveURL('file:///home/emoi_user/Workspace/playwright%20demo%202/checkout.html');
  });
});