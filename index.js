const express= require("express");
const app = express();
const PORT = 8000;
app.get("/",(req, resp)=>{
resp.send("app is working...")
});

app.listen(PORT);