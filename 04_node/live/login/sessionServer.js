const express = require('express');
const cors = require('cors');
const session = require('express-session');

const app = express()
app.use(cors({
    origin : 'https://127.0.0.1:5500',
    methods: ["POST", "GET", "PUT", "DELETE", "OPTIONS"] ,
    credentials : true
}))

app.use(session({
    secret: "session secret",
    resave: false,
    saveUninitaialized : true
}))

app.use(express.json())

app.post('/',(req, res) =>{
    console.log('POST 요청이 들어왔다')
    const {userId,userPw} = req.body

    userId.find(el => el.id === userId && el.password === userPw)

    if(!userInfo){
        res.status(401).send('로그인 실패')
    }else{
        req.session.userId = userInfo.id
        console.log('세션 생성 완료')
    }
})


app.get('/', (req, res) => {
    console.log('GET요청 들어온다')
    console.log()
})
app.listen(3000, () =>{
    console.log('서버 시작!')
})