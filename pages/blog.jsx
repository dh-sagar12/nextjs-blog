import React from 'react'
import styles from '../styles/Blogpage.module.css'
import DisplayBlogs from '../components/DisplayBlogs'
import * as fs from 'fs';


const Blog = (props) => {
  return (
    <>
        <main className={styles.container}>
          <DisplayBlogs blogs= {props.allblogs}/>
        </main>
    
    </>
  )
}

// export async function getServerSideProps(context) {
//   const response = await fetch('http://localhost:3000/api/allblogs');
//   const allblogs = await response.json()
//   return{
//     props: {
//       allblogs
//     }
//   }
// }



export async function getStaticProps(context) {
  let files =   fs.readdirSync('AllBlogs')
    let allblogs = []
    files.forEach(element => {
        let myblog = fs.readFileSync(`AllBlogs/${element}`, 'utf-8')
       allblogs.push(JSON.parse(myblog))
        
    });
return {
  props: {allblogs}, // will be passed to the page component as props
}
}
export default Blog