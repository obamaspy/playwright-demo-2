// spec: cart-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Page Functionality', () => {
  test('Display Empty Cart', async ({ page }) => {
    // 1. Navigate to cart.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/cart.html');

    // Clear localStorage before test
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    
    // 2. Verify page title is 'Cart - StyleAutomation'
    await expect(page).toHaveTitle('Cart - StyleAutomation');

    // 3. Verify cart header shows 'Shopping Cart'
    await expect(page.getByText('Shopping Cart')).toBeVisible();

    // 4. Verify item count displays '0 Items'
    await expect(page.getByText('0 Items')).toBeVisible();

    // 5. Verify empty cart message is visible
    await expect(page.getByText('Your cart is empty.')).toBeVisible();

    // 6. Verify cart summary section is not displayed
    await expect(page.getByText('Total:')).not.toBeVisible();
  });
});