// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck

function findLowestPrice(products, discounts) {
  console.log(products);
  console.log(discounts);
  // Store discounts by tag
  const discountsObj = {};

  // Load the discountsObj
  for (const discount of discounts) {
    discountsObj[discount[0]] = discount.slice(1);
  }

  let totalCost = 0;

  // Loop through each product
  for (const product of products) {
    // Take the base price of the product
    const basePrice = parseInt(product[0]);

    // Initialize the minimum price with the base price
    let minPrice = basePrice;

    // Loop through the tags of the product
    for (const tag of product.slice(1)) {
      // Skip tags with 'EMPTY'
      if (tag !== 'EMPTY') {
        // Retrieve the discount type and value from the discountsObj
        const [discountType, discountValue] = discountsObj[tag];

        // Convert the discount value to an integer
        const intValue = parseInt(discountValue);

        // Apply the discount based on the type
        if (discountType === '0') {
          minPrice = Math.min(minPrice, intValue);
        } else if (discountType === '1') {
          // Calculate price after the percentage discount
          const discountPercentage = 0.01 * intValue;
          minPrice = Math.min(minPrice, Math.round(basePrice * (1 - discountPercentage)));
        } else if (discountType === '2') {
          // Calculate price after the direct discount
          // Correct code minPrice = Math.min(minPrice, basePrice - intValue);
          minPrice = Math.min(minPrice, basePrice);
        }
      }
    }

    // Add the minimum price for this product to the total cost
    totalCost += Math.round(minPrice);
  }

  // Finally, return the totalCost for the products
  return totalCost;
}

window.findLowestPrice = findLowestPrice; // findLowestPrice([ [ '10', 'sale', 'january-sale' ], [ '200', 'sale', 'EMPTY' ] ], [ [ 'sale', '0', '10' ], [ 'january-sale', '1', '10' ] ])
export default findLowestPrice;
