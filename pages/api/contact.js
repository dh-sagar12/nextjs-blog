import * as fs from 'fs';


export default async function handler(req, res) {
    if (req.method === 'POST') {
        let data =   fs.readdirSync('AllContact')
        fs.writeFile(`AllContact/${data.length +1}.json`, JSON.stringify(req.body), (err, data)=>{
            if (err){
                res.status(500).json({error : "internal server Error"} )
            }
            else{
                res.status(200).json({success: "Successfully Added!!"})
            }
        })
    } else {
        res.status(403).json({ res: 'access denied!!' })
    }
  }