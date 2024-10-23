const mongoose=require('mongoose');
const dbconnect =async ()=>{
    await mongoose.connect("mongodb+srv://vandanpatel493:vandan@cluster0.bm96r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    console.log("conected to server");
    
    
}
module.exports=dbconnect