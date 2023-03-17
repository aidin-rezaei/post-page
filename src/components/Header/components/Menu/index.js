const Menu = () => {
    return (
        <menu className="w-[100%]">
            <ul className="flex justify-start items-center gap-1 dark:text-white">
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">Categories</li>
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">Guides</li>
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">WordPress Hosting</li>
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">Managed Hosting</li>
                <li className="p-5 h-20 flex justify-between items-center cursor-pointer text-lg font-bold">Coupons</li>

            </ul>
        </menu>
    );
}

export default Menu;