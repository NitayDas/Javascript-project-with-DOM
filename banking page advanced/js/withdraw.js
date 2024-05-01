// when withdraw button is clicked then all things happend below
document.getElementById('btn-withdraw').addEventListener('click', function(){

    // get the Withdraw amount request by user
    const withdrawAmount = getFieldelementById("withdraw-amount");

    // get the total balance of the user
    const balanceTotal = gethtmlElementbyId('balance-total');


    // check withdraw amount is sufficien or not 
    if(balanceTotal<withdrawAmount)
    {
        alert("You don't have sufficient money !");
        return;
    }
    
    // ckeck amount is valid or not
    if(isNaN(withdrawAmount))
    {
        alert("Please Enter a valid Amount");
        return;
    }

    // increase the total withdraw amount
    const PreviouswithdrawTotal= document.getElementById('withdraw-total')
    const withdrawTotal = gethtmlElementbyId('withdraw-total');
    PreviouswithdrawTotal.innerText = withdrawTotal + withdrawAmount;

    const PreviousbalanceTotal=document.getElementById('balance-total');
    PreviousbalanceTotal.innerText= balanceTotal - withdrawAmount;
})