//AJAX POST .xmlhttprequest
const submit = document.querySelector('.loginbtn');


function login() {

    let acc = document.querySelector('#Account').value;
    let paw = document.querySelector('#Password').value;
    //帳號密碼
    let user = {};
    user.email = acc;
    user.password = paw;

    //let errtext = document.querySelector('.err');

    // API
    const url = 'https://hexschool-tutorial.herokuapp.com/api/signin';
    const xhr = new XMLHttpRequest();
    xhr.open('post', url, true);
    xhr.setRequestHeader('Content-type', 'application/json');
    data = JSON.stringify(user);
    xhr.send(data);
    console.log(data);
    xhr.onload = () => {
        let str = JSON.parse(xhr.responseText)
        if (str.success == true) {
            sweetAlert(`${str.message}`);
        } else {
            sweetAlert(`${str.message}`);
        }
    }
}

submit.addEventListener('click', () => {
    //let acc = document.getElementById('Account').value;
    //let paw = document.getElementById('Password').value;
    login();
})





const signupBtn = document.querySelector('.singbtn');


let singup = () =>{
    // api
    const singupUrl = 'https://hexschool-tutorial.herokuapp.com/api/signup';
    let singupAccount = document.querySelector('#singupAccount').value;
    let singupPassword = document.querySelector('#singupPassword').value;
    data = {singupAccount, singupPassword};
    
    axios.post(singupUrl,data).then(res=>{
        console.log(data);
        console.log(res);
        if(res.data.success){
            sweetAlert(`${res.data.message}`);
        }else{
            sweetAlert(`${res.data.message}`);
        }
        
    })
    .catch(err => {
        console.log('錯誤');
    })


}




signupBtn.addEventListener('click',()=>{
    singup();
})

