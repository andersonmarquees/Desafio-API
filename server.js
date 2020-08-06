const express = require('express')
const cors = require('cors')
const axios = require('axios')


const app = express()
app.use(cors());


app.get('/',  async(request, response) => {

    try {
        const { data } = await axios('https://jsonplaceholder.typicode.com/users')
        return response.json(data)
        
    } catch (error) {
        console.error(error)
    }
})

// app.get('/', (request, response) => {

//     return response.json([
//         {name: "Maria"},
//         {name: "Anderson"},
//     ])
// })

app.listen(3333, () => {
    console.log(`Server is running...`)
})


