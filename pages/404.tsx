import Link from "next/link";

export default function Custom404() {
  return (
    <div className="bg-white rounded-md px-40 py-20 shadow-xl">
      <div className="flex flex-col items-center">
        <h1 className="text-blue-600 text-9xl font-bold">404</h1>

        <h6 className="text-gray-800 mb-2 text-center text-2xl font-bold md:text-3xl">
          <span className="text-red-500">Oops!</span> Page not found
        </h6>

        <p className="text-gray-500 mb-8 text-center md:text-lg">
          The page you’re looking for doesn’t exist.
        </p>

        <Link href="/">
          <a className="text-blue-800 bg-blue-100 px-6 py-2 text-sm font-semibold">
            Go home
          </a>
        </Link>
      </div>
    </div>
  );
}
