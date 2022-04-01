import React from 'react'
import Head from 'next/head'
import Styles from '../../styles/Blogpost.module.css'
import { useState } from 'react'
import * as fs from 'fs';
import Image from 'next/image';



const Slug = (props) => {

    console.log(props);
    const [Blog, setBlog] = useState(props.blog)
    




    // useEffect(() => {
    //     if (!router.isReady) return;
    //     const { slug } = router.query;
    //     fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then(response =>
    //         response.json()
    //     ).then(data => {
    //         setBlog(data)
    //         console.log(data);
    //     })
    // }, [router.isReady])


    return (
        <>
            <Head>
                <title>{Blog && Blog.slug}</title>
            </Head>
            <div className={Styles.container}>
                <h1 className={Styles.center}>{Blog && Blog.title}</h1>
                <hr />
                <span>Published On: {Blog && Blog.date}</span>
                <div>Posted By: {Blog && Blog.Author}</div>
                <div className={Styles.center}>
                    <Image src='/python.jpg' width={600} height={300}  alt={'imagem '}/>
                </div>
                <p>{Blog && Blog.content}</p>
            </div>
        </>
    )
}

// export async function getServerSideProps(context) {
//     console.log(context);
//     let {slug} = context.query
//     let response =  await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
//     let blog = await response.json()

//     return {
//         props: {blog} // will be passed to the page component as props
//     }
// }



export async function getStaticPaths() {
    return {
      paths: [
        { params: {slug: 'history-of-python'} },
        { params: {slug: 'how-to-learn-javascript'} },
        { params: {slug: 'how-to-learn-nextjs'} },
        { params: {slug: 'how-to-learn-python'} },
        { params: {slug: 'what-is-reactjs'} },
      ],
      fallback: true // false or 'blocking'
    };
  }


  export async function getStaticProps(context) {
      let {slug} = context.params
      let blog = await fs.promises.readFile(`AllBlogs/${slug}.json`, 'utf-8')

      console.log(JSON.parse(blog));
      blog =  JSON.parse(blog)
      // let blog = await myblog.json()
    return {
      props: {blog}, // will be passed to the page component as props
    }
  }
export default Slug