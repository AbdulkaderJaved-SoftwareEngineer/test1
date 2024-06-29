const ex = require('express');
const app = ex();

app.get('/',()=>{
    return "Hello"
})



app.listen(3000,()=>{
    console.log("Hello")
}
)
