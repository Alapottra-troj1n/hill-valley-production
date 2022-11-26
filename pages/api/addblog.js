import connectDb from "../../lib/connectDb";
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({req});
    if (req.method == "POST" && session) {
      
     try{
        const db = await connectDb();
        const results = await db.collection('posts').insertOne(req.body);
        const newPost = await db.collection('posts').findOne({title: req.body.title});
        res.send({success: true, message: results, newPost: newPost});
     }catch(err){
    
        res.send({success: false, message: err.message});
     }
      
      

    }else{

  
        res.status(500).send({ success: false, message: "Must be a POST request  Or Must be authenticated." });


    }
  


}