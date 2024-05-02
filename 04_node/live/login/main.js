const form = document.querySelector('form')
const idInput = document.querySelector('#user_id')
const passwordInput = document.querySelector('#user_password')
const loginButton = document.querySelector('#login_button')

const main = document.querySelector("main")
const userName = document.querySelector('#user_name')
const userInfo = document.querySelector('#user_info')
const logoutButton = document.querySelector('#logout_button')

form.addEventListener('submit',(e) => e.preventDefault())
// CRUD
    // Create - 로그인 (인증 상태) 만들기
    // Read - 유저 정보 받아오기
    // Update - ??? ( Token -> refresh 토큰으로 재발급 받기)
    // Delete - 로그아웃

function login(){
    const userId = idInput.value
    const userPw = passwordInput.value

    return axios.post('http://localhost:3000', {userId,userPw})
}

loginButton.onclick = () =>{

    login()
}
function getUserInfo(){
    return axios.get('http://localhost:3000')
        .then(res => console.log(res))
        
}

function logout(){

}

// 화면
    // 로그인 폼 없애고 유저 정보 보여주기
    // 유저 정보 없애고 로그인 폼 보여주기

function renderUserInfo(){
    
}   

function render(){
    
}   