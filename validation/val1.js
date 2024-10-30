const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser');
const {check, validation} = require('express-validator')

const urlencodedParser = bodyParser.urlencoded({extended:false})

app.use(express.json())
app.use(urlencodedParser())

//main logic
app.post('/register',[check('username', 'must be 3 charecters long')
    .exist()
    .isLenght({min:3}),
check('email','email must be valid')
    .exist()
    .isEmail()
    .isNormalizeEmail()
    .isLenght({min:8})

],(req,res)=>{
    const err = validation(req)
    if(!err.isEmpty()){
        //return res.status(422).jsonp(errors.array())
        const alert = errors.array()
        res.render('register',{alert})
    }

})






app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))