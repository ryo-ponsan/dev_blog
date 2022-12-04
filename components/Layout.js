import Head from "next/head";
import Image from 'next/image'
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css"
import Link from "next/Link";

const name = "gypsyR";
export const siteTitle = "gypsyR blog";

function Layout({ children, home }) {
    return (
        <div className={styles.container}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <header className={styles.header}>
                {home ? (
                    <>
                        <Image src="/images/profile.png"
                            className={`${utilStyles.borderCircle} ${styles.headerHomeImage}`}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                ) : (
                    <>
                        <Image src="/images/profile.png"
                            className={`${utilStyles.borderCircle}`}
                        />
                        <h1 className={utilStyles.heading2Xl}>{name}</h1>
                    </>
                )}

            </header>
            <main>{children}</main>
            {!home && (
                <div>
                    <Link href="/">← ホームへ戻る</Link>
                </div>
            )}
        </div>
    );
}

export default Layout;