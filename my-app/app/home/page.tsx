import Link from 'next/link';

export default function HomePage() {
  return (
    <div>
      <h1>This is the Home Page</h1>
      <Link href="/">Back to Index</Link>
    </div>
  );
}