import { Link } from 'react-router-dom';
import { Navbar } from 'flowbite-react';

function Header(){
    return (
        <>
        <Navbar className='flex flex-wrap items-center justify-between p-4 px-5 mx-auto bg-white border-gray-200 dark:bg-gray-900'>
            <Navbar.Brand className='flex items-center'>
                <img src="./resource/logo/logo.png" className="h-8 sm:h-10 sm:mr-3 dark: " alt="Frontam Logo" />
                <span className="self-center text-lg font-semibold sm:text-2xl whitespace-nowrap dark:text-white">Ilham Maulana | Frontam</span>
            </Navbar.Brand>
            <Navbar.Toggle />
            <Navbar.Collapse className='p-4 mt-4 bg-gray-200 border border-gray-400 rounded-lg md:p-0 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700'>
                <Navbar.Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 active:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' as={Link} to="/" active="true">Beranda</Navbar.Link>
                <Navbar.Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' as={Link} to="/blog">Blog</Navbar.Link>
                <Navbar.Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' as={Link} to="/portofolio">Portofolio</Navbar.Link>
                <Navbar.Link className='block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent' as={Link} to="/kontak">Kontak</Navbar.Link>
            </Navbar.Collapse>
        </Navbar>
        </>
    )
}

export default Header