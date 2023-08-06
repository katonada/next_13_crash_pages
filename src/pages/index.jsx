import Link from 'next/link';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {
    return (
        <div className={styles.container}>
            <Head>
                <title>600Code Home</title>
            </Head>
            <Link href="/about">About</Link>
            <h1 className={styles.homePageStyle}>Hello world!</h1>
        </div>
    );
}
