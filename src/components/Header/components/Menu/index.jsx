const Menu = () => {
    return (
        <menu className="w-[100%] flex">
            <ul className="md:flex hidden justify-start items-center gap-1 dark:text-white">
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">Categories</li>
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">Guides</li>
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">WordPress Hosting</li>
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">Managed Hosting</li>
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">Coupons</li>

            </ul>
            <div className="md:hidden dark:text-white ml-5 w-12 h-[100%]">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                </svg>
            </div>

        </menu>
    );
}

export default Menu;