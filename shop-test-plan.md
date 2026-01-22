# Shop Page Test Plan

## Application Overview

This test plan covers the main shop page (index.html) of the StyleAutomation e-commerce site. The page displays a list of products with add to cart functionality, navigation to cart, and cart badge updates. Functionality includes adding items to localStorage-based cart, button state changes during addition, and navigation links.

## Test Scenarios

### 1. Shop Page Functionality

**Seed:** `tests/seed.spec.ts`

#### 1.1. Add Single Item to Cart

**File:** `tests/shop/add-to-cart.spec.ts`

**Steps:**
  1. Navigate to the shop page
  2. Click 'Add to Cart' button for 'Vintage Denim Jacket'
  3. Observe button state change to 'Adding...'
  4. Wait for button to show 'Added!'
  5. Verify cart badge shows 1
  6. Wait for button to revert to 'Add to Cart'

**Expected Results:**
  - Cart badge displays 1
  - Button changes to 'Added!' and disables temporarily
  - Button reverts to 'Add to Cart' after 1 second

#### 1.2. Add Multiple Items to Cart

**File:** `tests/shop/add-multiple-items.spec.ts`

**Steps:**
  1. Navigate to the shop page
  2. Click 'Add to Cart' for 'Vintage Denim Jacket'
  3. Wait for button to revert
  4. Click 'Add to Cart' for 'Summer Floral Dress'
  5. Verify cart badge shows 2

**Expected Results:**
  - Cart badge displays 2
  - Both buttons show 'Added!' sequentially

#### 1.3. Attempt to Add Out of Stock Item

**File:** `tests/shop/out-of-stock.spec.ts`

**Steps:**
  1. Navigate to the shop page
  2. Attempt to click 'Out of Stock' button for 'Limited Edition Cap'
  3. Verify button does not respond
  4. Verify cart badge remains 0

**Expected Results:**
  - Button remains 'Out of Stock' and disabled
  - Cart badge does not change
  - No item added to cart

#### 1.4. Navigate to Cart Page

**File:** `tests/shop/navigate-to-cart.spec.ts`

**Steps:**
  1. Navigate to the shop page
  2. Add one item to cart
  3. Click 'Cart' link in navbar
  4. Verify navigation to cart.html

**Expected Results:**
  - Page navigates to cart.html
  - Cart badge persists

#### 1.5. Navigate Home via Logo

**File:** `tests/shop/navigate-home.spec.ts`

**Steps:**
  1. Navigate to the shop page
  2. Click 'StyleAutomation' logo link
  3. Verify page remains on index.html

**Expected Results:**
  - Logo link navigates to index.html (current page)
  - Page remains on shop page

#### 1.6. Page Load and Display

**File:** `tests/shop/page-load.spec.ts`

**Steps:**
  1. Navigate to the shop page
  2. Verify all 7 products are displayed
  3. Verify product details: titles, descriptions, prices
  4. Verify 'Out of Stock' button is disabled
  5. Verify sale pricing for 'Noise-Cancelling Headphones'

**Expected Results:**
  - All product titles, descriptions, and prices display correctly
  - All 'Add to Cart' buttons are enabled except out of stock
  - Sale tag and strikethrough price show for discounted item

#### 1.7. Cart Persistence on Reload

**File:** `tests/shop/cart-persistence.spec.ts`

**Steps:**
  1. Navigate to the shop page
  2. Add 2 items to cart
  3. Reload the page
  4. Verify cart badge shows 2
  5. Verify localStorage contains the cart items

**Expected Results:**
  - Cart badge shows correct count after page reload
  - Items persist in localStorage

#### 1.8. Rapid Add to Cart Clicks

**File:** `tests/shop/rapid-add.spec.ts`

**Steps:**
  1. Navigate to the shop page
  2. Click 'Add to Cart' for multiple items quickly
  3. Verify each button goes through 'Adding...' to 'Added!' states
  4. Verify cart badge updates to correct total

**Expected Results:**
  - Button states do not interfere with each other
  - Cart count updates correctly

#### 1.9. Empty Cart State

**File:** `tests/shop/empty-cart.spec.ts`

**Steps:**
  1. Navigate to the shop page with empty cart
  2. Verify cart badge shows 0
  3. Verify no items in localStorage

**Expected Results:**
  - Cart badge shows 0
  - No items in localStorage

#### 1.10. Pricing and Sale Display

**File:** `tests/shop/pricing-display.spec.ts`

**Steps:**
  1. Navigate to the shop page
  2. Verify prices for all products
  3. Verify 'Noise-Cancelling Headphones' shows $250.00 crossed out and $199.00 with SALE tag

**Expected Results:**
  - Prices display correctly with currency symbols
  - Discounted price shows strikethrough original

### 2. Edge Cases and Error Handling

**Seed:** `tests/seed.spec.ts`

#### 2.1. Page Behavior Without JavaScript

**File:** `tests/edge-cases/no-javascript.spec.ts`

**Steps:**
  1. Disable JavaScript in browser
  2. Navigate to the shop page
  3. Verify products display but buttons do not function
  4. Re-enable JavaScript

**Expected Results:**
  - Page loads without errors
  - All elements render correctly

#### 2.2. Large Number of Cart Items

**File:** `tests/edge-cases/large-cart.spec.ts`

**Steps:**
  1. Use browser dev tools to set localStorage cart with 100 items
  2. Navigate to the shop page
  3. Verify cart badge shows 100
  4. Verify page performance is acceptable

**Expected Results:**
  - Page handles large cart counts
  - Badge displays correctly

#### 2.3. Corrupted localStorage Data

**File:** `tests/edge-cases/corrupted-storage.spec.ts`

**Steps:**
  1. Set invalid JSON in localStorage 'cart' key
  2. Navigate to the shop page
  3. Verify page loads without errors
  4. Verify add to cart still works and overwrites corrupted data

**Expected Results:**
  - Invalid data does not break the page
  - Cart functionality still works
