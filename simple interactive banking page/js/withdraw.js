document.getElementById('btn-withdraw').addEventListener('click',function(){

    const withdrawField = document.getElementById('withdraw');
    const withdrawAmount = withdrawField.value;
    withdrawField.value='';

    const balanceTotal=document.getElementById('balanceTotal');

    if(isNaN(parseFloat(withdrawAmount)))
    {
        alert("Please enter a valid amount !");
        return;
    }

    if(withdrawAmount>balanceTotal.innerText)
    {
        alert("Don't have sufficient Money!");
        return;
    }

    const withdrawTotal= document.getElementById('withdrawTotal');
    withdrawTotal.innerText= parseFloat(withdrawTotal.innerText) + parseFloat(withdrawAmount);

   
    balanceTotal.innerText=parseFloat(balanceTotal.innerText) - parseFloat(withdrawAmount);

})