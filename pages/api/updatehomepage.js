import connectDb from "../../lib/connectDb";

export default async function handler(req, res) {
    if (req.method == "PUT") {
      
     try{
        const db = await connectDb();
        const collection = await db.collection('homepageLinks');
        const filter ={name:'section2'};
        const options = { upsert: true };
        const updateDoc = {
            $set: {
              image1: req.body.image1,
              image2: req.body.image2,
              image3: req.body.image3,
              image4: req.body.image4,
              image5: req.body.image5,
            },
          };
          const result = await collection.updateOne(filter, updateDoc, options);
          res.send({success: true, message: result});
     }catch(err){
    
        res.send({success: false, message: err.message});
     }
      
      

    }else{

  
        res.status(500).send({ success: false, message: "Must be a PUT request" });


    }
  


}