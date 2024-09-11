document.getElementById('loginForm').addEventListener('submit',function(event) {
    Event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if(username=== ''|| password===''){
        displayError('please fill in both feilds.');
        return;
    }

    if(username ==='user' && password ==='password123'){

        window.location.href ='/dashboard';
    }else{
        displayError('Invalid usrname or password');
    }
});

function displayError(message){
    const errorElement = document.getElementById('error-message');
    errorElement.textContent = message;
    
}