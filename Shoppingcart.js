let priceOfEachItem= 10;
let quantityofEachItem= 2;
let discountPercentage= 10;
let taxRate= 8;
let discountAmount=0;

// Calculate Subtotal
let subtotal=priceOfEachItem* quantityofEachItem;
// Apply Discount
if (subtotal > 100){
    let discountAmount =(subtotal * discountPercentage)/100;
    subtotal-= discountAmount;
}

//Calculate Tax
let taxAmount = (subtotal *taxRate)/100;
//Caculate Total Cost
let totalcost= subtotal + taxAmount;
// Print Results

console.log(`Price of Each Item: $`+ priceOfEachItem);
console.log(`Quantity of Each Item: $`+ quantityofEachItem);
console.log(`Subtotal:$`+ subtotal);
console.log(`Discount Amount:$`+ discountAmount);
console.log(`Tax Amount:$`+ taxAmount);
console.log(`Total Cost:$` +totalcost);