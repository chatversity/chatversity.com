import Link from 'next/link';

export default function Index() {
    return (
    <div>
        <Link href="/about">
            <a>About Page</a>
        </Link>
        <p>Hello World!</p>
    </div>
    );
}