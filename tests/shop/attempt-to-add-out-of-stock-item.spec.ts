// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shop Page Functionality', () => {
  test('Attempt to Add Out of Stock Item', async ({ page }) => {
    // 1. Navigate to the shop page
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');
    
    // Clear localStorage before test
    await page.evaluate(() => localStorage.clear());
    await page.reload();

    // 2. Attempt to click 'Out of Stock' button for 'Limited Edition Cap'
    const outOfStockButton = page.locator('.product-card:has-text("Limited Edition Cap") button');
    await outOfStockButton.click({ force: true });

    // 3. Verify button does not respond
    await expect(outOfStockButton).toBeDisabled();
    await expect(outOfStockButton).toHaveText('Out of Stock');

    // 4. Verify cart badge remains 0
    const cartBadge = page.getByTestId('cart-badge');
    await expect(cartBadge).toHaveText('0');

    // Verify no item added to cart
    const cartLength = await page.evaluate(() => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      return cart.length;
    });
    expect(cartLength).toBe(0);
  });
});