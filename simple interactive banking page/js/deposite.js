document.getElementById('btn-deposite').addEventListener('click', function(){

    const depositeField=document.getElementById('deposit');
    const depositeAmount=depositeField.value;
    depositeField.value='';

    if(isNaN(parseFloat(depositeAmount)))
    {
        alert("Please enter a valid amount !");
        return;
    }

    const depositTotalField = document.getElementById('depositTotal');
    depositTotalField.innerText = parseFloat(depositTotalField.innerText) + parseFloat(depositeAmount);

    // access balance current total
    const balanceTotal =document.getElementById('balanceTotal');
    balanceTotal.innerText =parseFloat(balanceTotal.innerText) + parseFloat(depositeAmount);
})