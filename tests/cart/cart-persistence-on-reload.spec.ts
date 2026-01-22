// spec: cart-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Page Functionality', () => {
  test('Cart Persistence on Page Reload', async ({ page }) => {
    // 1. Navigate to index.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Add items to cart
    await page.getByTestId('add-to-cart-btn').first().click();
    await expect(page.getByTestId('cart-badge')).toHaveText('1');
    await page.getByTestId('add-to-cart-btn').nth(1).click();
    await expect(page.getByTestId('cart-badge')).toHaveText('2');

    // 3. Navigate to cart.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/cart.html');

    // 4. Reload the page
    await page.reload();

    // 5. Verify cart still displays the items
    await expect(page.getByText('Vintage Denim Jacket')).toBeVisible();
    await expect(page.getByText('Summer Floral Dress')).toBeVisible();

    // 6. Verify item count and total are unchanged
    await expect(page.getByText('2 Items')).toBeVisible();
    await expect(page.getByTestId('total-price')).toHaveText('$89.49');
  });
});