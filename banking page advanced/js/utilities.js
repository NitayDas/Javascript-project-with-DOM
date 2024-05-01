function getFieldelementById(inputid)
{
    const fieldAmount = document.getElementById(inputid);
    const Amount=fieldAmount.value;
    fieldAmount.value='';
    return parseFloat(Amount);
}

function gethtmlElementbyId(elementid)
{
    const elementAmount = document.getElementById(elementid);
    return parseFloat(elementAmount.innerText);
}