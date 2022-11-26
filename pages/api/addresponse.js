import { getSession } from 'next-auth/react';
import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {
    
    const session = await getSession({req});

    if (req.method == "POST" && session) {
      
     try{
        const db = await connectDb();
        const results = await db.collection('responses').insertOne(req.body);
        res.send({success: true, message: results});
     }catch(err){
    
        res.send({success: false, message: err.message});

        
     }
      
      

    }else{

  
        res.status(500).send({ success: false, message: "Must be a POST request  Or Must be authenticated." });


    }
  


}