// spec: cart-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Page Functionality', () => {
  test('Remove Item from Cart', async ({ page }) => {
    // 1. Navigate to index.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // Clear localStorage before test
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    
    // 2. Add two items to cart
    await page.getByTestId('add-to-cart-btn').first().click();
    await expect(page.getByTestId('cart-badge')).toHaveText('1');
    await page.getByTestId('add-to-cart-btn').nth(1).click();
    await expect(page.getByTestId('cart-badge')).toHaveText('2');

    // 3. Navigate to cart.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/cart.html');

    // 4. Click 'Remove' on first item
    await page.getByRole('listitem').filter({ hasText: 'Vintage Denim Jacket $59.99' }).getByTestId('remove-btn').click();

    // 5. Verify first item is no longer displayed
    await expect(page.getByText('Vintage Denim Jacket')).not.toBeVisible();

    // 6. Verify item count decreases to '1 Item'
    await expect(page.getByText('1 Item')).toBeVisible();

    // 7. Verify total price updates correctly
    await expect(page.getByTestId('total-price')).toHaveText('$29.50');

    // 8. Click 'Remove' on remaining item
    await page.getByTestId('remove-btn').click();

    // 9. Verify cart shows '0 Items' and empty message
    await expect(page.getByText('0 Items')).toBeVisible();
    await expect(page.getByText('Your cart is empty.')).toBeVisible();
  });
});