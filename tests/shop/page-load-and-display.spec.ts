// spec: shop-test-plan.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';

test.describe('Shop Page Functionality', () => {
  test('Page Load and Display', async ({ page }) => {
    // 1. Navigate to the shop page
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // 2. Verify all 7 products are displayed
    await expect(page.locator('.product-card')).toHaveCount(7);

    // 3. Verify product details: titles, descriptions, prices
    await expect(page.getByText('Vintage Denim Jacket')).toBeVisible();
    await expect(page.getByText('Classic styling with durable denim.')).toBeVisible();
    await expect(page.getByText('$59.99')).toBeVisible();

    await expect(page.getByText('Summer Floral Dress')).toBeVisible();
    await expect(page.getByText('Lightweight and breathable.')).toBeVisible();
    await expect(page.getByText('$29.50')).toBeVisible();

    await expect(page.getByText('Urban Running Sneakers')).toBeVisible();
    await expect(page.getByText('High performance running shoes.')).toBeVisible();
    await expect(page.getByText('$1,200.00')).toBeVisible();

    await expect(page.getByText('Limited Edition Cap')).toBeVisible();
    await expect(page.getByText('Sold out everywhere.')).toBeVisible();
    await expect(page.getByText('$15.00')).toBeVisible();

    await expect(page.getByText('Noise-Cancelling Headphones')).toBeVisible();
    await expect(page.getByText('Immersive sound quality.')).toBeVisible();

    await expect(page.getByText('Travel Backpack')).toBeVisible();
    await expect(page.getByText('Fits 15-inch laptops.')).toBeVisible();
    await expect(page.getByText('$45')).toBeVisible();

    await expect(page.getByText('Super High-Capacity Portable Power Bank with Fast Charging')).toBeVisible();
    await expect(page.getByText('Never run out of battery again.')).toBeVisible();
    await expect(page.getByText('$39.99')).toBeVisible();

    // 4. Verify 'Out of Stock' button is disabled
    await expect(page.getByRole('button', { name: 'Out of Stock' })).toBeDisabled();

    // 5. Verify sale pricing for 'Noise-Cancelling Headphones'
    await expect(page.getByText('$250.00')).toBeVisible();
    await expect(page.getByText('$199.00')).toBeVisible();
    await expect(page.getByText('SALE')).toBeVisible();

    // Verify all 'Add to Cart' buttons are enabled except out of stock
    const addToCartButtons = page.getByTestId('add-to-cart-btn');
    await expect(addToCartButtons).toHaveCount(6); // 7 products - 1 out of stock
    for (let i = 0; i < 6; i++) {
      await expect(addToCartButtons.nth(i)).toBeEnabled();
    }
  });
});