import React from 'react'
import styles from '../styles/Blogpage.module.css'
import DisplayBlogs from '../components/DisplayBlogs'

const Blog = (props) => {
  return (
    <>
        <main className={styles.container}>
          <DisplayBlogs blogs= {props.allblogs}/>
        </main>
    
    </>
  )
}

export async function getServerSideProps(context) {
  const response = await fetch('http://localhost:3000/api/allblogs');
  const allblogs = await response.json()
  return{
    props: {
      allblogs
    }
  }
}

export default Blog