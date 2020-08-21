//AJAX POST .xmlhttprequest
const submit = document.querySelector('.loginbtn');

function login(acc, paw) {
    //帳號密碼
    let user = {
        email: acc,
        account: paw,
    };
    let errtext = document.querySelector('.err');
    // API
    const url = 'https://hexschool-tutorial.herokuapp.com/api/signin';
    const xhr = new XMLHttpRequest();
    xhr.open('post', url, true);
    xhr.setRequestHeader("Content-type", "application/json");
    xhr.send(JSON.stringify(user));
    console.log(user);
    //xhr.send(user);
    xhr.onload = () => {
        let str = JSON.parse(xhr.responseText)
        if (str.success == true) {
            errtext.innerHTML += `${str.message}` // 自行加上 HTML 內容
        } else {
            errtext.innerHTML += `${str.message}` // 自行加上 HTML 內容
        }
    }

}

//事件按鈕
submit.addEventListener('click', () => {
    let acc = document.querySelector('#Account').value;
    let paw = document.querySelector('#Password').value;
    login(acc, paw);
})

