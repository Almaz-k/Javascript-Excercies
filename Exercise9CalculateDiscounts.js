// what to do? to calculate discounted price
// how to do 7 subtotal-subtotal*discount;

function calculateDiscountPrice(originalPrice, discountPercentage) {
    if (isNaN(originalPrice) || isNaN(discountPercentage) || discountPercentage <= 0 || originalPrice < 0) {
        return undefined;
    }
    let discount = originalPrice * (discountPercentage / 100);
    return originalPrice - discount;
}

// Declare anonymous function
function callbackFunc(discountedPrice) {
    return discountedPrice;
}

const calculateDiscountPriceResult = calculateDiscountPrice(399.99, 50);
const calculateDiscountedPriceAnoResult = calcuateDiscountPriceVar(399.99, 50, callbackFunc);

function calcuateDiscountPriceVar(originalPrice, discountPercentage, callbackFunc) {
    if (isNaN(originalPrice) || isNaN(discountPercentage) || discountPercentage <= 0 || originalPrice < 0) {
        return undefined;
    }

    let discount = originalPrice * (discountPercentage / 100);
    let discountedPrice = originalPrice - discount;
    return callbackFunc(discountedPrice);
}

// Invoke function section
console.log(`the discounted price from the named function: ${calculateDiscountPriceResult}`);
console.log(`the discount from the anonymous function: ${calculateDiscountedPriceAnoResult}`);
