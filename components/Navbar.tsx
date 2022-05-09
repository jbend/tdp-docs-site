import TrimbleLogo from './TrimbleLogo';

export default function Navbar() {

  return (
    <nav id="header" className="relative w-full z-10 top-0 bg-modus-white border-b border-modus-gray-400">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-4">
        <div className="pl-4 flex items-center">
          <TrimbleLogo />
        </div>
        <div className="block lg:hidden pr-4">
            <button id="nav-toggle" className="flex items-center px-3 py-2 border rounded text-modus-gray-500 border-modus-gray-600 hover:text-modus-gray-900 hover:border-modus-blue appearance-none focus:outline-none">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                  <title>Menu</title>
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
              </svg>
            </button>
        </div>
        <div className="w-full flex-grow lg:flex  lg:content-center lg:items-center lg:w-auto hidden lg:block mt-2 lg:mt-0 z-20" id="nav-content">
            <div className="flex-1 w-full mx-auto max-w-sm content-center py-4 lg:py-0">
            </div>
            <ul className="list-reset lg:flex justify-end items-center">
              {/* <li className="mr-3 py-2 lg:py-0">
                  <a className="inline-block py-2 px-4 text-modus-gray-900 font-bold no-underline" href="#">Active</a>
              </li>
              <li className="mr-3 py-2 lg:py-0">
                  <a className="inline-block text-modus-gray-600 no-underline hover:text-modus-gray-900 hover:underline py-2 px-4" href="#">link</a>
              </li> */}
              <li className="mr-3 py-2 lg:py-0">
                  <a className="inline-block text-modus-gray-600 no-underline hover:text-modus-gray-900 hover:underline py-2 px-4" href="#">Sign In</a>
              </li>
            </ul>
        </div>
      </div>
    </nav>    
  );
}