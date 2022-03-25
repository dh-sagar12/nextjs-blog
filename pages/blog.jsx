import React from 'react'
import styles from '../styles/Blogpage.module.css'
import DisplayBlogs from '../components/DisplayBlogs'

const Blog = () => {
  return (
    <>
        <main className={styles.container}>
          <DisplayBlogs/>
        </main>
    
    </>
  )
}

export default Blog