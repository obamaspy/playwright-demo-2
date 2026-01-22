// spec: specs/checkout-test-plan-simplified.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Checkout Page Functionality', () => {
  test('Display Checkout with Empty Cart', async ({ page }) => {
    // 1. Navigate to checkout.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/checkout.html');

    // 2. Verify empty cart message
    await expect(page.getByText('Your cart is empty.')).toBeVisible();

    // 3. Verify total is $0.00
    await expect(page.getByText('$0.00')).toBeVisible();

    // 4. Verify Place Order button is disabled
    await expect(page.getByTestId('finish-btn')).toBeDisabled();
  });
});