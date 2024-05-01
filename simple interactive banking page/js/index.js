
document.getElementById('btn-login').addEventListener('click',function(){
    const emailfield = document.getElementById('email');
    const email = emailfield.value;

    const passfield = document.getElementById('password');
    const password = passfield.value;

    if(email === 'nitaydas910@gmail.com' && password === '190129')
    {
        window.location.href= 'bank.html';
    }

    else
    {
        console.log("Invalid User");
    }

})