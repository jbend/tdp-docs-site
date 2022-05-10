import Image from 'next/image';
import Link from 'next/link';

export interface HeroCardProps {
  cardTitle: string;
  location: string;
  image: string;
  imageAltText?: string;
}

export default function HeroCard({ cardTitle, location, image, imageAltText }: HeroCardProps) {
  const imageWidth = 240;
  const imageHeight = 180;
  return (
    <div className="relative max-w-s bg-modus-white rounded-lg border border-modus-gray-2 
      shadow-md dark:bg-modus-gray-8 dark:border-modus-gray-7">
      <div>
        <Image className="rounded-t-lg" src={ image } height={ imageHeight } width={ imageWidth } alt={ imageAltText } />
      </div>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-modus-text dark:text-modus-text-dark">{ cardTitle}</h5>
        <p className="mb-3 font-normal text-modus-text dark:text-modus-text-dark">Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.</p>
        <Link href={ location }>
          <a className="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-modus-white bg-modus-trimble-blue 
          hover:bg-modus-blue-light focus:ring-2 focus:outline-none focus:ring-modus-blue-dark dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
            Read more
            <svg className="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
            </svg>
          </a>
        </Link>
      </div>
    </div>  
  );
}