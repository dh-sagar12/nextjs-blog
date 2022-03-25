import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

const DisplayBlogs = () => {
  return (
    <>
         <div className={styles.grid}>
            <Link href='/blogposts/python-and-its-history'>
              <div className={styles.card}>
                <h2>History and Future of Python</h2>
                <p>Python is an multi-functional and dynamic Object oriented programming langauge...</p>
              </div>
            </Link>
            <Link href='/blogposts/javasciprt-and-its-history'>
              <div className={styles.card}>
                <h2>History and Future of JavaScript</h2>
                <p>JavaScript is an multi-functional and dynamic Object oriented programming langauge...</p>
              </div>
            </Link>
            <Link href='/blogposts/java-and-its-history'>
              <div className={styles.card}>
                <h2>History and Future of Java</h2>
                <p>Java is an multi-functional and dynamic Object oriented programming langauge...</p>
              </div>
            </Link>
            <Link href='/blogposts/csharp-and-its-history'>
              <div className={styles.card}>
                <h2>History and Future of C#</h2>
                <p>C# is an multi-functional and dynamic Object oriented programming langauge...</p>
              </div>
            </Link>
            <Link href='/blogposts/ruby-and-its-history'>
              <div className={styles.card}>
                <h2>History and Future of Ruby</h2>
                <p>Ruby is an multi-functional and dynamic Object oriented programming langauge...</p>
              </div>
            </Link>
            <Link href='/blogposts/linux-and-its-history'>
              <div className={styles.card}>
                <h2>History and Future of Linux</h2>
                <p>Linux is an multi-functional and dynamic Object oriented programming langauge...</p>
              </div>
            </Link>
            
            </div>
    </>
  )
}

export default DisplayBlogs