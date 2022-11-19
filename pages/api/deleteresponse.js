import connectDb from "../../lib/connectDb";
var ObjectId = require('mongodb').ObjectID;

export default async function handler(req, res) {
    if (req.method == "DELETE") {


     try{
        const db = await connectDb();

        const {_id} = req.query;

        const results = await db.collection('responses').deleteOne({_id: ObjectId(_id) });


        res.send({success: true, message: 'response has been deleted', data: results});
     }catch(err){

   
        res.send({success: false, message: err.message});
     }
      
      
     


    }else{

  
        res.status(500).send({ success: false, message: "Must be a POST request" });


    }
  


}