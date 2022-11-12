import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {

    if (req.method == "POST") {

     try{

         const db = await connectDb();
         const data = req.body;
         const results = await db.collection('responses').insertOne({});
         res.send({success: true, message: results});

     }catch(err){
      
        res.send({success: false, message: err.message});
     }
      
      
     


    }else{

  
        res.status(500).send({ success: false, message: "Must be a POST request" });


    }
  


}