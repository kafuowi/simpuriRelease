const express = require('express')
const app = new express()
const mongoose = require('mongoose')
const fileUpload = require('express-fileupload')
app.use(fileUpload())

const newPostController = require('./controllers/newPost')
const newWorldcupController = require('./controllers/newWorldcup')
const homeController = require('./controllers/home')
const storePostController = require('./controllers/storePost')
const getPostController = require('./controllers/getPost')
const newUserController = require('./controllers/newUser')
const storeUserController = require('./controllers/storeUser')
const loginController = require('./controllers/login')
const loginUserController = require('./controllers/loginUser')
const expressSession = require('express-session');
const authMiddleware = require('./middleware/authMiddleware');
const redirectIfAuthenticatedMiddleware =
    require('./middleware/redirectIfAuthenticatedMiddleware')
const logoutController = require('./controllers/logout')
const validateMiddleware = require("./middleware/validateMiddleware");

//worldcup


const getWorldcupPostController = require("./controllers/getWorldcup")
const storeWorldcupController = require('./controllers/storeWorldcup')
const worldcupHomeController = require("./controllers/WorldcupHome");


mongoose.connect('mongodb+srv://animusn:sanspapyrus@cluster0.lrcfl.mongodb.net/test', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true    
});

// const db = mongoose.connection
// db.once('open', () => {
//     console.log("connected...")
// })

const ejs = require('ejs')
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(expressSession({
    secret: 'keyboard cat',
    resave: true,
    saveUninitialized: true
}))
let port = process.env.PORT;
if (port == null||port==""){
    port = 4000;
}
app.listen(port, () => { console.log('App listening on port 4000') })

global.loggedIn = null;
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId;
    next()
});



app.use('/posts/store', validateMiddleware)

app.get('/posts/new', authMiddleware, newPostController)

app.get('/', worldcupHomeController)

app.get('/post/:id', getPostController)

app.get('/auth/logout', logoutController)

app.get('/auth/login', redirectIfAuthenticatedMiddleware, loginController)

app.get('/auth/register', redirectIfAuthenticatedMiddleware, newUserController)

app.post('/posts/store', authMiddleware, storePostController)

app.post('/users/register', redirectIfAuthenticatedMiddleware, storeUserController)

app.post('/users/login', redirectIfAuthenticatedMiddleware, loginUserController)

//worldcup

app.get('/worldcup',worldcupHomeController)

app.get('/worldcup/posts/new', authMiddleware, newWorldcupController)

app.post('/worldcup/posts/store', authMiddleware, storeWorldcupController)


app.get('/worldcup/post/:id', getWorldcupPostController)

app.use((req, res) => res.render('notfound'))






