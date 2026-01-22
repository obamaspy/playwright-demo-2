// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shop Page Functionality', () => {
  test('Add Single Item to Cart', async ({ page }) => {
    // 1. Navigate to the shop page
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Click 'Add to Cart' button for 'Vintage Denim Jacket'
    const addToCartButton = page.getByTestId('add-to-cart-btn').first();
    await addToCartButton.click();

    // 3. Observe button state change to 'Adding...'
    // 4. Wait for button to show 'Added!'
    await expect(addToCartButton).toHaveText('Added!');
    await expect(addToCartButton).toBeDisabled();

    // 5. Verify cart badge shows 1
    const cartBadge = page.getByTestId('cart-badge');
    await expect(cartBadge).toHaveText('1');

    // 6. Wait for button to revert to 'Add to Cart'
    await new Promise(f => setTimeout(f, 1 * 1000));
    await expect(addToCartButton).toHaveText('Add to Cart');
    await expect(addToCartButton).toBeEnabled();
  });
});