import { useRouter } from 'next/router'
import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Styles from '../../styles/Blogpost.module.css'

const Slug = () => {

    const router = useRouter()
    const { slug } = router.query;
    return (
        <>
            <Head>
                <title>{slug}</title>
            </Head>
            <div className={Styles.container}>
                <h1 className={Styles.center}>The Title {slug}</h1>
                <hr />
                <div className={Styles.center}>
                    <Image src='/python.jpg' width={600} height={300} />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum earum beatae atque! Architecto praesentium quaerat voluptas, vitae ab accusamus vero id, repellat aliquam quos dicta. Pariatur non eaque ducimus ab.</p>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet autem fugiat ex inventore ullam, cum vero quasi. Laborum vitae, ex amet, voluptas iure aspernatur veritatis rerum quidem, hic ab facere!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur odit repellat consequuntur. Natus quos quia deserunt, reprehenderit corrupti et ab porro in blanditiis alias nobis. Quo, quos debitis? Tempore dicta nisi id.</p>
            </div>
        </>
    )
}

export default Slug