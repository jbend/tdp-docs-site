import Link from "next/link";
import Navbar from "../../../components/Navbar";

export default function TransportationIndexPage({}) {
  return (
    <main>
      <Navbar />
      <div className="mx-auto mt-12 w-2/3">
        <h1>Transportation</h1>
        <p>Document Index</p>
        <ul>
          <li>
            <Link href="/docs/transportation/doc1">Document 1</Link>
          </li>
          <li>
            <Link href="/docs/transportation/doc2">Document 2</Link>
          </li>
          <li>
            <Link href="/docs/transportation/doc3">Document 3</Link>
          </li>
        </ul>
      </div>
    </main>
  );
}
