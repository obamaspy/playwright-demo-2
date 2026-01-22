// spec: cart-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Page Functionality', () => {
  test('Display Cart with Single Item', async ({ page }) => {
    // 1. Navigate to index.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // Clear localStorage before test
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    
    // 2. Click 'Add to Cart' on first product
    await page.getByTestId('add-to-cart-btn').first().click();

    // 3. Wait for cart badge to update to '1'
    await expect(page.getByTestId('cart-badge')).toHaveText('1');

    // 4. Navigate to cart.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/cart.html');

    // 5. Verify item count shows '1 Item'
    await expect(page.getByText('1 Item')).toBeVisible();

    // 6. Verify the item name matches the added product
    await expect(page.getByText('Vintage Denim Jacket')).toBeVisible();

    // 7. Verify the item price is correct
    await expect(page.getByTestId('cart-item').getByText('$59.99')).toBeVisible();

    // 8. Verify total price equals item price
    await expect(page.getByTestId('total-price')).toHaveText('$59.99');

    // 9. Verify remove button is present
    await expect(page.getByRole('button', { name: 'Remove' })).toBeVisible();

    // 10. Verify checkout button is visible
    await expect(page.getByText('Proceed to Checkout')).toBeVisible();
  });
});