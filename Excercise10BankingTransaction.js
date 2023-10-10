//how to track account balances and performance transactions
// how does Balnace +deposit -withdrawal performed; tarnsactions are credit and debt
// credit: deposit-debt:
// debit : balance - withdrawal

let accountBalance = 1000;

function deposit(deposit){
    if(isNaN(deposit)|| deposit<=0){
        return;
    }
    accountBalance += deposit;
    console.log(`new balance:${accountBalance}`);
}

const withdrawal = (withdrawAmount)=>{
    if(isNaN(withdrawAmount) || withdrawAmount <= 0){
        return;
    }
    accountBalance -= withdrawAmount;
    console.log(`new balance :${accountBalance}`);
    console.log(`withdraw amount :${accountBalance}`);
}

function viewBalance(){//void function, it can take any amount
    console.log(`account Balance:${accountBalance}`);
}


let depositResult =deposit(5000.00);
let withdrawResult= withdrawal(5000.00);
let viewBalanceResult = viewBalance();//becuse the fucntion is not defined leave it emoty , noting to pass to 

console.log(`depositResult:${depositResult}`);
console.log(`withdrawResult:${withdrawResult}`);
console.log(`viewBalanceResult:${ viewBalanceResult}`);



