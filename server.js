const express = require('express')
const app = express() 
const PORT = 8000

const rappers = {
    '21 savage':{
        'age': 29,
        'birthName': 'Sheyaa', 
        'location': 'London, England'
    },
    'dylan':{
        'age': 29,
        'birthName': 'Dylan', 
        'location': 'London, England'
    },
    'ella':{
        'age': 29,
        'birthName': 'Ella', 
        'location': 'London, England'
    },

}

app.get('/', (req, res)=>{
    res.sendFile(__dirname + '/index.html')
})
app.get('/api/:rapperName', (req,res)=>{
    const rappersName = req.params.rapperName.toLowerCase()
    if(rappers[rappersName]){
        res.json(rappers[rappersName])
    }else{
        res.json(rappers['ella'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
})



















