import Link from 'next/link';

const PageNotFound = () => {
    return (
        <div>
            <h1>
                Page Not Found
            </h1>
            <h2>
                404 Page - Not Found
            </h2>

            <Link href="/">Homepage</Link>
        </div>
    );
};

export default PageNotFound;
