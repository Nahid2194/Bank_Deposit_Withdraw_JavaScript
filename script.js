var login = document.querySelector("#loginID");
login.addEventListener("click",function(){
    const loginArea = document.getElementById('login-area');
    loginArea.style.display = "none";
    var TransactionArea = document.getElementById('transaction-area');
    TransactionArea.style.display = "block";

    
})
var btnDeposit = document.getElementById("btnDeposit");
btnDeposit.addEventListener('click',function () {
    // let DepositAmount = document.getElementById("DepositAmount").value;
    // let addAmount = parseFloat(DepositAmount);

    // const currentDeposit =document.getElementById('currentDeposit').innerText;
    // const totalDeposit = parseFloat(currentDeposit)+ addAmount;
    // document.getElementById('currentDeposit').innerText = totalDeposit;
    // Add Deposit in Total Banlance
  
    var addAmount = getInputNumber('DepositAmount')
    addSpan('currentDeposit',addAmount);

    // tAmount = document.getElementById('tAmount').innerText;
    // totalAmount = parseFloat(tAmount) + addAmount;
    // document.getElementById('tAmount').innerText = totalAmount;


    addSpan('tAmount',addAmount);

    document.getElementById('DepositAmount').value ="";
    
    
    
})


//WithDraw Section

var btnWithdraw = document.getElementById('btnWithdraw');
btnWithdraw.addEventListener('click',function(){
    // let addWithdraw = document.getElementById('addWithdraw').value;
    // let withdrawAmount = parseFloat(addWithdraw);

    var withdrawAmount = getInputNumber('addWithdraw')

    // let currentWithdraw = document.getElementById('currentWithdraw').innerText;
    // let totalAmount = parseFloat(currentWithdraw) + withdrawAmount;
    // document.getElementById('currentWithdraw').innerText = totalAmount;
    addSpan('currentWithdraw',withdrawAmount);
    addSpan('tAmount',-withdrawAmount)
    document.getElementById('addWithdraw').value = "";
    

})

// GetInputNumber like take value from id
function getInputNumber(id){
    let Amount = document.getElementById(id).value;
    let addAmount = parseFloat(Amount);
    return addAmount;
}

function addSpan(id,addAmount){ 
    const currentAmount =document.getElementById(id).innerText;
    const totalAmount = parseFloat(currentAmount)+ addAmount;
    document.getElementById(id).innerText = totalAmount;
}