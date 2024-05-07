const express = require('express');
const path = require('path');
const { default : mongoose } = require('mongoose');
const User = require('./models/users.model')
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended : false }));

//  view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

mongoose.set('strictQuery', false);
mongoose.connect(`mongodb+srv://uplee114:jWWDDa3PWUNBpsvq@cluster0.xjep4dw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`)
    .then(() => {
        console.log(`mongodb connected`)
    })
    .catch((err) => {
        console.log(err)
    });

app.use('/static', express.static(path.join(__dirname, 'public')));

app.get('/login', (req, res) => {
    res.render('login');

});

app.get('/signup', (req, res) => {
    res.render('signup');

});

app.post('/signup', async (req, res) => {
    // user 객체를 생성합니다.
    const user = new User(req.body);

    try {
    // user 컬렉션에 유저를 저장합니다.
        await user.save();
        return res.status(200).json({
            success : true
        });
    }catch(error){
        console.log(err);
    }
})

const port = 4000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
})