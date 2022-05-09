const express = require('express')
const app = express()
const WSserver = require('express-ws')(app)

const PORT = process.env.PORT || 3000

app.ws('/', (ws,req) => {
  console.log('ws connnected');
})

app.listen(PORT, () => console.log(`server started on PORT ${PORT}`))
