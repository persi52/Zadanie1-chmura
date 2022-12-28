const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
const apiPort = 5000

app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())
app.use(bodyParser.json())


app.post('/fib', (req, res) => {
    const {number} = req.body;

    if(number > 50) res.send({result: fibbonaciSequence(50) })

   res.send({result: fibbonaciSequence(req.body.number)})
})

const fibbonaciSequence = (n) => {
    if (n <= 1) {
        return n;
    }
    return fibbonaciSequence(n - 1) + fibbonaciSequence(n - 2);
}

app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))