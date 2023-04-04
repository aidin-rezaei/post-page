const Menu = () => {
    return (
        <menu className="w-[100%] flex">
            <ul className="md:flex hidden uppercase justify-start items-center transition-all gap-1 dark:text-white" role="list">
                <li className="relative group p-5 h-20 flex justify-between items-center cursor-pointer text-sm font-bold z-10">
                    Categories
                    <div className="absolute p-2 p invisible flex justify-between gap-2 border-[1px] border-b-[#f05a28] dark:border-gray-600 border-gray-200 items-center opacity-0 group-hover:visible group-hover:opacity-100 transition-all top-[100%] left-0 bg-white border-b-[3px] dark:border-b-[#f05a28] dark:bg-black  z-10">
                        <div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[220px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    BEGINNERS GUIDE
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[220px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    WORDPRESS SECURITY
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[220px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    WORDPRESS THEMES
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[220px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    WP TIPS & TRICKS
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                        </div>
                        <div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[220px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    TUTORIALS
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[220px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    WORDPRESS NEWS
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[220px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    BEST WORDPRESS PLUGINS
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[220px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    PRODUCT REVIEWS
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="relative uppercase group p-5 h-20 flex justify-between items-center cursor-pointer text-sm font-bold z-10">
                    Guides
                    <div className="absolute p-2 p invisible flex justify-between gap-2 border-[1px] border-b-[#f05a28] dark:border-gray-600 border-gray-200 items-center opacity-0 group-hover:visible group-hover:opacity-100 transition-all top-[100%] left-0 bg-white border-b-[3px] dark:border-b-[#f05a28] dark:bg-black  z-10">
                        <div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    START A BLOG
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    MAKE A WEBSITE
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    WORDPRESS HOSTING
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                        </div>

                    </div>
                </li>
                <li className="relative uppercase group p-5 h-20 flex justify-between items-center cursor-pointer text-sm font-bold z-10">
                    WordPress Hosting
                    <div className="absolute p-2 p invisible flex justify-between gap-2 border-[1px] border-b-[#f05a28] dark:border-gray-600 border-gray-200 items-center opacity-0 group-hover:visible group-hover:opacity-100 transition-all top-[100%] left-0 bg-white border-b-[3px] dark:border-b-[#f05a28] dark:bg-black  z-10">
                        <div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    A2 HOSTING
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    HOSTGATOR
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    BLUEHOST
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    CLOUDWAYS
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="relative uppercase group p-5 h-20 flex justify-between items-center cursor-pointer text-sm font-bold z-10">
                    Managed Hosting
                    <div className="absolute p-2 p invisible flex justify-between gap-2 border-[1px] border-b-[#f05a28] dark:border-gray-600 border-gray-200 items-center opacity-0 group-hover:visible group-hover:opacity-100 transition-all top-[100%] left-0 bg-white border-b-[3px] dark:border-b-[#f05a28] dark:bg-black  z-10">
                        <div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    A2 HOSTING
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    HOSTGATOR
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    BLUEHOST
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    CLOUDWAYS
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                        </div>
                    </div>
                </li>
                <li className="relative uppercase group p-5 h-20 flex justify-between items-center cursor-pointer text-sm font-bold z-10">
                    Coupons
                    <div className="absolute p-2 p invisible flex justify-between gap-2 border-[1px] border-b-[#f05a28] dark:border-gray-600 border-gray-200 items-center opacity-0 group-hover:visible group-hover:opacity-100 transition-all top-[100%] left-0 bg-white border-b-[3px] dark:border-b-[#f05a28] dark:bg-black  z-10">
                        <div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    A2 HOSTING
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    HOSTGATOR
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    BLUEHOST
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                            <div className="p-1 hover:text-[#f05a28] flex justify-between items-center w-[200px] border-b-[1px] border-gray-300 dark:border-gray-600">
                                <p className="uppercase text-sm">
                                    CLOUDWAYS
                                </p>
                                <span className="text-gray-300 font-extrabold">{">"}</span>
                            </div>
                        </div>
                    </div>
                </li>

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