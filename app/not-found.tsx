import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="notfound">
      <div>
        <div className="code">404</div>
        <h1 className="display">Page not found.</h1>
        <p>The page you are looking for is unavailable. Return home to continue exploring PT Permata Bangun Indo.</p>
        <Link className="btn" href="/id">
          Back to home <span className="arrow">↗</span>
        </Link>
      </div>
    </div>
  );
}
