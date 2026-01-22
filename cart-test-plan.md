# Cart Page Test Plan

## Application Overview

This test plan covers the functionality of the shopping cart page (cart.html), including displaying cart items, removing items, calculating totals, and navigation. The cart page loads cart data from localStorage and provides an interface for users to review and modify their cart before proceeding to checkout.

## Test Scenarios

### 1. Cart Page Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Display Empty Cart

**File:** `tests/cart/display-empty-cart.spec.ts`

**Steps:**
  1. Navigate to cart.html
  2. Verify page title is 'Cart - StyleAutomation'
  3. Verify cart header shows 'Shopping Cart'
  4. Verify item count displays '0 Items'
  5. Verify empty cart message is visible
  6. Verify cart summary section is not displayed

**Expected Results:**
  - Cart header displays 'Shopping Cart'
  - Item count shows '0 Items'
  - Empty cart message 'Your cart is empty.' is visible
  - Cart summary and checkout button are hidden

#### 1.2. Display Cart with Single Item

**File:** `tests/cart/display-single-item-cart.spec.ts`

**Steps:**
  1. Navigate to index.html
  2. Click 'Add to Cart' on first product
  3. Wait for cart badge to update to '1'
  4. Navigate to cart.html
  5. Verify item count shows '1 Item'
  6. Verify the item name matches the added product
  7. Verify the item price is correct
  8. Verify total price equals item price
  9. Verify remove button is present
  10. Verify checkout button is visible

**Expected Results:**
  - Cart displays 1 item
  - Item name and price are correct
  - Total price is calculated correctly
  - Remove button is present
  - Checkout button is visible

#### 1.3. Display Cart with Multiple Items

**File:** `tests/cart/display-multiple-items-cart.spec.ts`

**Steps:**
  1. Navigate to index.html
  2. Click 'Add to Cart' on first product
  3. Wait for cart badge to update
  4. Click 'Add to Cart' on second product
  5. Wait for cart badge to update to '2'
  6. Navigate to cart.html
  7. Verify item count shows '2 Items'
  8. Verify both item names and prices are correct
  9. Verify total price is sum of item prices
  10. Verify remove buttons are present for each item

**Expected Results:**
  - Cart displays 2 items
  - Both item names and prices are correct
  - Total price is sum of both items
  - Remove buttons are present for each item

#### 1.4. Remove Item from Cart

**File:** `tests/cart/remove-item-from-cart.spec.ts`

**Steps:**
  1. Navigate to index.html
  2. Add two items to cart
  3. Navigate to cart.html
  4. Click 'Remove' on first item
  5. Verify first item is no longer displayed
  6. Verify item count decreases to '1 Item'
  7. Verify total price updates correctly
  8. Click 'Remove' on remaining item
  9. Verify cart shows '0 Items' and empty message

**Expected Results:**
  - Item is removed from cart
  - Item count decreases
  - Total price updates
  - If last item removed, cart becomes empty

#### 1.5. Navigate Back to Shop from Cart

**File:** `tests/cart/navigate-back-to-shop.spec.ts`

**Steps:**
  1. Navigate to cart.html
  2. Click 'StyleAutomation' logo in navigation
  3. Verify page navigates to index.html
  4. Verify shop page elements are displayed

**Expected Results:**
  - Clicking logo navigates to index.html
  - Page URL changes to shop page

#### 1.6. Proceed to Checkout

**File:** `tests/cart/proceed-to-checkout.spec.ts`

**Steps:**
  1. Navigate to index.html
  2. Add at least one item to cart
  3. Navigate to cart.html
  4. Click 'Proceed to Checkout' button
  5. Verify page navigates to checkout.html

**Expected Results:**
  - Checkout button links to checkout.html
  - Page URL changes to checkout page

#### 1.7. Cart Persistence on Page Reload

**File:** `tests/cart/cart-persistence-on-reload.spec.ts`

**Steps:**
  1. Navigate to index.html
  2. Add items to cart
  3. Navigate to cart.html
  4. Reload the page
  5. Verify cart still displays the items
  6. Verify item count and total are unchanged

**Expected Results:**
  - Cart persists after page reload
  - Items remain in cart
  - Total and count are correct
