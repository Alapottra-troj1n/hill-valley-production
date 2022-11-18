import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {
    if (req.method == "POST") {
      
     try{
        const db = await connectDb();
        const results = await db.collection('posts').insertOne(req.body);
        res.send({success: true, message: results});
     }catch(err){
        console.log(err);
        res.send({success: false, message: err.message});
     }
      
      

    }else{

  
        res.status(500).send({ success: false, message: "Must be a POST request" });


    }
  


}