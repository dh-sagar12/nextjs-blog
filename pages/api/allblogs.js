import * as fs from 'fs';

export default async function handler(req, res) {
    let files =   fs.readdirSync('AllBlogs')
    let allblogs = []
    files.forEach(element => {
        let myblog = fs.readFileSync(`AllBlogs/${element}`, 'utf-8')
       allblogs.push(JSON.parse(myblog))
        
    });
    res.status(200).json(allblogs) 

}