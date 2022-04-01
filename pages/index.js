import Head from 'next/head'
import DisplayBlogs from '../components/DisplayBlogs'
import styles from '../styles/Home.module.css'
import * as fs from 'fs';





export default function Home(props) {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Home- Code Lib</title>
          <meta name="description" content="CodeLib is the all in one destination of yours to get solve every code realted problems and soltions" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <span className={styles.brandName}>CodeLib</span>
          </h1>

          <p className={styles.description}>
            Get started With Some
            <code className={styles.code}>Top Blogs</code>
          </p>

          <DisplayBlogs blogs={props.allblogs} />

        </main>


      </div>
    </>
  )
}


// export async function getServerSideProps(context) {
//   const response = await fetch('http://localhost:3000/api/allblogs');
//   const allblogs = await response.json()
//   return {
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