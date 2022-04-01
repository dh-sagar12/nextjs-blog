import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import {  useState } from 'react'



const DisplayBlogs = (props) => {

  const [Blogs, setBlogs] = useState(props.blogs)
  return (
    <>
      <div className={styles.grid}>
        {
          Blogs.map((blogItem) => {
            return (
              <div key={blogItem.slug}>
                <Link href={`blogposts/${blogItem.slug}`} passHref >
                  <div className={styles.card} >
                    <h2>{blogItem.title}</h2>
                    <p>{blogItem.snippet.substring(0, 120)}...</p>
                  </div>
                </Link>
              </div>
            )
          })
        }
      </div>
    </>
  )
}



export default DisplayBlogs