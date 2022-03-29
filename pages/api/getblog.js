import * as fs from 'fs';

export default async function handler(req, res) {
    fs.readFile(`AllBlogs/${req.query.slug}.json`, 'utf-8', (err, data)=>{
      if (err){
        res.status(404).json({error: "item doenot exists" })
      }
      else{

        res.status(200).json(JSON.parse(data))
      }

    })  

}