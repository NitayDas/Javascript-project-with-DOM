document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositAmount = getFieldelementById('deposit-amount');
    console.log(depositAmount);

    if(isNaN(depositAmount))
    {
        alert("Please Enter a valid Amount");
        return;
    }
    const PreviousdepositTotal=document.getElementById('deposit-total');
    const depositTotal= gethtmlElementbyId('deposit-total');

    PreviousdepositTotal.innerText=depositAmount+depositTotal;

    const PreviousbalanceTotal=document.getElementById('balance-total');
    const balanceTotal = gethtmlElementbyId('balance-total');
    PreviousbalanceTotal.innerText= balanceTotal + depositAmount;
})