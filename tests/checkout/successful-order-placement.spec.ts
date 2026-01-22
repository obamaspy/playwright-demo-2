// spec: specs/checkout-test-plan-simplified.md
// seed: tests/seed.spec.ts

import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Checkout Page Functionality', () => {
  test('Successful Order Placement', async ({ page }) => {
    // 1. Navigate to index.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/index.html');

    // Clear localStorage before test
    await page.evaluate(() => localStorage.clear());
    await page.reload();
    
    // 2. Add item to cart
    await page.getByTestId('add-to-cart-btn').first().click();
    await expect(page.getByTestId('cart-badge')).toHaveText('1');

    // 3. Navigate to checkout.html
    await page.goto('file:///home/emoi_user/Workspace/playwright%20demo%202/checkout.html');

    // Generate random data using faker
    const email = faker.internet.email();
    const firstName = faker.person.firstName();
    const lastName = faker.person.lastName();
    const address = faker.location.streetAddress();
    const city = faker.location.city();
    const state = faker.location.state();
    const postalCode = faker.location.zipCode();
    const cardName = faker.person.fullName();
    const cardNumber = faker.finance.creditCardNumber();
    const futureDate = faker.date.future();
    const cardExpiry = `${String(futureDate.getMonth() + 1).padStart(2, '0')}/${String(futureDate.getFullYear()).slice(-2)}`;
    const cardCvc = faker.finance.creditCardCVV();

    // 4. Fill all form fields
    await page.getByTestId('email').fill(email);
    await page.getByTestId('firstName').fill(firstName);
    await page.getByTestId('lastName').fill(lastName);
    await page.getByTestId('address').fill(address);
    await page.getByTestId('city').fill(city);
    await page.getByTestId('state').fill(state);
    await page.getByTestId('postalCode').fill(postalCode);
    await page.getByTestId('card-name').fill(cardName);
    await page.getByTestId('card-number').fill(cardNumber);
    await page.getByTestId('card-expiry').fill(cardExpiry);
    await page.getByTestId('card-cvc').fill(cardCvc);

    // 5. Check terms
    await page.getByTestId('terms-checkbox').click();

    // 6. Click Place Order
    await page.getByTestId('finish-btn').click();

    // 7. Verify navigation to complete.html
    await expect(page.getByText('Thank you for your order!')).toBeVisible();
  });
});