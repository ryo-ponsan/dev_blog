import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from "next/link"
import Layout, { siteTitle } from '../components/Layout'
import Navbar from '../components/Navbar'

import utilStyle from "../styles/utils.module.css";
import { getPostsData } from "../lib/post";

// SSGの場合 非同期　getStaticPropsはnextjsが用意した関数
// 外部から一度だけデータを取ってくる
export async function getStaticProps() {
    // idとメタデータ各種格納
    const allPostsData = getPostsData(); //id, title, date, thumbnail
    console.log(allPostsData);

    return {
        props: {
            allPostsData,
        },
    };
}

// SSRの場合
// export async function getServerSideProps(context){
//   return {
//     props:{
//       //コンポーネントに渡すためのprops
//     },
//   };
// }

// homeコンポーネントが受取、レンダリング
export default function Home({ allPostsData }) {
    return (
        <Layout home>
            <Head>
                <title>{siteTitle}</title>
            </Head>
            <section className={utilStyle.headingMd}>
                <p>
                    旅行好き。海外も国内も連休のたび出かけます。airbnbで穴場宿見つけるのもまた一興。
                </p>
            </section>

            <section>
                <h2>📝aribnb巡る旅行ブログ</h2>
                <div className={styles.grid}>
                    {allPostsData.map(({ id, title, date, thumbnail }) => (
                        <article key={id}>
                            <Link href={`/posts/${id}`}>
                                <img
                                    src={`${thumbnail}`}
                                    className={styles.thumbnailImage}
                                />
                            </Link>
                            <Link href={`/posts/${id}`}>
                                <p className={utilStyle.boldText}>{title}</p>
                            </Link>
                            <br />
                            <small className={utilStyle.lightText}>
                                {date}
                            </small>
                        </article>
                    ))}
                </div>
            </section>
        </Layout>
    );
}