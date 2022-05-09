import Navbar from "./Navbar";

export default function Header({ }) {
  return (
    <header className="h-96 bg-cover bg-center bg-modus-header-blue bg-[url('/header-background.svg')] ">
      <Navbar />
      <h1 className="text-modus-white text-center text-4xl font-bold mt-6">Trimble Cloud Documentation</h1>
    </header>
  )
}

