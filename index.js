const express= require("express")//memmanggil library express js
const bodyParser = require("body-parser")// memanggil library body-parser
const cors = require("cors")//memanggil library cors
const app = express()


//penggunaaan body-parser untuk ekstrak data request berformat JSON
app.use(bodyParser.json())
//penggunaaan body-parser untuk ekstrak data request dari body
app.use(bodyParser.urlencoded({extended: true}))
// penggunaaan cors agar end point dapat diakses oleh cross platfrom
app.use(cors())


// endpoint "/test" dengan method GET
app.get("/test",(req,res) =>{
    let response = {
        message: "ini end-point pertamaku",
        method: req.method,
        code: res.status.code
    }
    res.json(response)
})

app.listen(800, () =>{
    console.log("server run on port 8000")
})