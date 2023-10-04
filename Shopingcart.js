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

console.log(`Price of Each Item: ${priceOfEachItem}
Quantity of Each Item: ${quantityofEachItem}
Subtotal:${subtotal}
Discount Amount:${discountAmount}
Tax Amount:$ {taxAmount}
Total Cost:${totalcost}`);