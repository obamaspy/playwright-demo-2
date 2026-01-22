// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Edge Cases and Error Handling', () => {
  test('Corrupted localStorage Data', async ({ page }) => {
    // 1. Set invalid JSON in localStorage 'cart' key
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');
    await page.evaluate(() => localStorage.setItem('cart', '{invalid json'));

    // 2. Navigate to the shop page
    await page.reload();

    // 3. Verify page loads without errors
    await expect(page.getByText('Vintage Denim Jacket')).toBeVisible();

    // 4. Verify add to cart still works and overwrites corrupted data
    await page.getByTestId('add-to-cart-btn').first().click();
    await expect(page.getByTestId('cart-badge')).toHaveText('1');
  });
});