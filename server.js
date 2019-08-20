const express = require('express')

const app = express()

app.get('/', (req, res) => {
    res.json({
        message: 'Welcome to our apps'
    })
})

const PORT = process.emitWarning.PORT || 4000
app.listen(PORT, () => {
    console.log(`SERVER is running on PORT ${PORT}`)
})