import connectDb from "../../lib/connectDb";
var ObjectId = require('mongodb').ObjectID;
import { getSession } from 'next-auth/react';

export default async function handler(req, res) {
    const session = await getSession({req});

    if (req.method == "DELETE" && session) {


     try{
        const db = await connectDb();

        const {_id} = req.query;

        const results = await db.collection('posts').deleteOne({_id: ObjectId(_id) });


        res.send({success: true, message: 'post has been deleted', data: results});
     }catch(err){

   
        res.send({success: false, message: err.message});
     }
      
      
     


    }else{

  
        res.status(500).send({ success: false, message: "Must be a POST request" });


    }
  


}