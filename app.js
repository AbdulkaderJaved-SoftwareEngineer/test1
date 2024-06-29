const ex = require('express');
const app = ex();

app.get('/',(req,res)=>{
    return res.json({message:"Hello"})
})



app.listen(3000,()=>{
    console.log("Hello")
}
)
