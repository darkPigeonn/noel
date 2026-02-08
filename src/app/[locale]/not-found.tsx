import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center">
      <div className="container-custom text-center py-32">
        <h1 className="text-7xl md:text-9xl font-bold text-white/10">404</h1>
        <h2 className="mt-4 text-2xl md:text-3xl font-bold text-white">
          Page Not Found
        </h2>
        <p className="mt-3 text-neutral-400 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center mt-8 px-7 py-3.5 rounded-xl bg-primary-600 text-white font-medium hover:bg-primary-500 transition-colors"
        >
          Go Home
        </Link>
      </div>
    </section>
  );
}

