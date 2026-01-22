// spec: cart-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Cart Page Functionality', () => {
  test('Navigate Back to Shop from Cart', async ({ page }) => {
    // 1. Navigate to cart.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/cart.html');

    // 2. Click 'StyleAutomation' logo in navigation
    await page.getByTestId('nav-home').click();

    // 3. Verify page navigates to index.html
    await expect(page).toHaveURL('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 4. Verify shop page elements are displayed
    await expect(page.getByText('Vintage Denim Jacket')).toBeVisible();
  });
});