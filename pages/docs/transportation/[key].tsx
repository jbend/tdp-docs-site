import Navbar from './../../../components/Navbar';
import Markdown from './../../../components/Markdown';

export interface DocumentPageProps {
  documentSource: string;
}

export default function TransporationKeyPage({ documentSource }: DocumentPageProps) {


  return (
    <>
      <Navbar />
      <div className="w-2/3 mx-auto mt-12">
        <Markdown url="https://raw.githubusercontent.com/jbend/trimble-react-tailwind-ts/main/README.md" />
      </div>
    </>
  )
}