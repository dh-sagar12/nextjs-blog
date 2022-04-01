import React from 'react'
import Link from 'next/link'
import Image from 'next/dist/client/image'
import styles from '../styles/Navbar.module.css'
import StyleHome from '../styles/Home.module.css'



const Navbar = () => {

  return (

    <>
      <nav className={styles.navbar}>
        <span className={StyleHome.logo}>
          <Link href="/">
            <Image src='/logo.png'  width={30} height={30}  alt={'logo'}>
            </Image>
          </Link>
        </span>

        <ul className={styles.navigations}>
          <li>
            <Link href="/" >
              <a className={styles.navItem}>
                Home
              </a>
            </Link>
          </li>
          <li>
            <Link href="/blog" >
              <a className={styles.navItem}>
                Blogs
              </a>
            </Link>
          </li>
          <li>
            <Link href="/contact" >
              <a className={styles.navItem}>
                Contact
              </a>
            </Link>
          </li>
          <li>
            <Link href="/about" >
              <a className={styles.navItem}>
                About
              </a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navbar