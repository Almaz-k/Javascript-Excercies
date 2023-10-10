// Analysis
//what to do to calculate the area and perimeter of rectangler
// how to do the calcuation on JavaScript
//area rectangle = L*W, Perimeter Rectangle =2*(L+ W)
//area circle = PI*r+r Perimeter of Circle= 2*PI*r

const PI = 3.14;
const calculateRectangleArea = (L, W)=>{
    if(isNaN(L) || isNaN(W) || L<=0 || W<=0){// changing the condtion resolves a print for undefined
        return'Invalid Lenth and Width'; // if not defined it will print undefined so we need to debung
    }
    return L*W;
}
function calculateRectanglePerimeter(L, W){
if(isNaN(L) || isNaN(W) || L<=0 || W<=0){
    return;
 }
 return 2*(L+W);
}

const calculateCircleArea = (r) => {
    if(isNaN(r) || r<=0){
        return;
    }
    return PI*Math.pow(r, 2);
}
const calculateCircleFerence = (r) => {
    if(isNaN(r) || r<=0){
        return;
    }
    return 2*PI*r;
}

let rectangleAreaResult = calculateRectangleArea(2,3);// invokation
let rectangelePermiteResult = calculateRectanglePerimeter(2,3);
let circleAreaResult = calculateCircleArea(2);
let circleCercumference = calculateCircleFerence(3);

console.log(`rectangle area:${rectangleAreaResult}`);
console.log(`rectangle perimeter: ${rectangelePermiteResult}`);
console.log(`circle area:${circleAreaResult}`);
console.log(`cicrcle perimeter:${circleCercumference}`);