import Link from 'next/link';

export default function Home() {
    return (
        <div>
            <Link href="/about">About</Link>
            <h1>Hello world!</h1>
        </div>
    );
}
