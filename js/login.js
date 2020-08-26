//AJAX POST .xmlhttprequest
const submit = document.querySelector('.loginbtn');

function login() {

    let acc = document.querySelector('#Account').value;
    let paw = document.querySelector('#Password').value;
    //帳號密碼
    let user = {};
    user.email = acc;
    user.password = paw;

    let errtext = document.querySelector('.err');

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






// function login(acc, paw) {

//     const url = 'https://hexschool-tutorial.herokuapp.com/api/signin';
//     const xhr = new XMLHttpRequest()
//     let data = `email=${acc}&password=${paw}`
//     let errtext = document.querySelector('.err');
//     xhr.open('post', url)
//     xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded')
//     xhr.send(data)
//     xhr.onload = () => {
//         let str = JSON.parse(xhr.responseText)
//         if (str.success == true) {
//             errtext.innerHTML += `${str.message}` // 自行加上 HTML 內容
//         } else {
//             errtext.innerHTML += `${str.message}` // 自行加上 HTML 內容
//         }
//     }

// }








//事件按鈕
//submit.addEventListener('click', login);

submit.addEventListener('click', () => {
    let acc = document.getElementById('Account').value;
    let paw = document.getElementById('Password').value;
    login(acc, paw);
    // sweetAlert('Hello World!');
})






// function signin() {
//     const api = "https://hexschool-tutorial.herokuapp.com/api/signin";
//     const signEmail = document.getElementById('Account').value;
//     const signPassword = document.getElementById('Password').value;
//     let account = {};
//     account.email = signEmail;
//     account.password = signPassword;
//     let errtext = document.querySelector('.err');
//     const xhr = new XMLHttpRequest();
//     xhr.open('post', api, true);
//     xhr.setRequestHeader('Content-type', 'application/json');
//     data = JSON.stringify(account);
//     xhr.send(data);
//     xhr.onload = () => {
//         let str = JSON.parse(xhr.responseText)
//         if (str.success == true) {
//             errtext.innerHTML += `${str.message}` // 自行加上 HTML 內容
//         } else {
//             errtext.innerHTML += `${str.message}` // 自行加上 HTML 內容
//         }
//     }
// };


// submit.addEventListener('click', signin);