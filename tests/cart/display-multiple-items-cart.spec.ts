// spec: cart-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Page Functionality', () => {
  test('Display Cart with Multiple Items', async ({ page }) => {
    // 1. Navigate to index.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Click 'Add to Cart' on first product
    await page.getByTestId('add-to-cart-btn').first().click();

    // 3. Wait for cart badge to update
    await expect(page.getByTestId('cart-badge')).toHaveText('1');

    // 4. Click 'Add to Cart' on second product
    await page.getByTestId('add-to-cart-btn').nth(1).click();

    // 5. Wait for cart badge to update to '2'
    await expect(page.getByTestId('cart-badge')).toHaveText('2');

    // 6. Navigate to cart.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/cart.html');

    // 7. Verify item count shows '2 Items'
    await expect(page.getByText('2 Items')).toBeVisible();

    // 8. Verify both item names and prices are correct
    await expect(page.getByText('Vintage Denim Jacket')).toBeVisible();
    await expect(page.getByText('$59.99')).toBeVisible();
    await expect(page.getByText('Summer Floral Dress')).toBeVisible();
    await expect(page.getByText('$29.50')).toBeVisible();

    // 9. Verify total price is sum of item prices
    await expect(page.getByTestId('total-price')).toHaveText('$89.49');

    // 10. Verify remove buttons are present for each item
    await expect(page.getByRole('button', { name: 'Remove' })).toHaveCount(2);
  });
});