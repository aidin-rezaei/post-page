import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-[100%]">
            <div className="w-[100%] transition-all py-6 gap-8 flex flex-wrap md:px-[150px] px-2 md:flex-row flex-col justify-center items-center  bg-[#d2d9e2] dark:bg-gray-500 dark:text-gray-200  text-[#535b67]">
                <div className="W-[200px]">
                    <p className="W-[200px]">Featured In</p>
                </div>
                <Image
                    className="md:w-[calc(100%_-_200px)] w-[100%] opacity-50 dark:invert dark:brightness-0"
                    src="/on.png"
                    width={5000}
                    height={0}
                    alt="logo"

                />
            </div>
            <div className="w-[100%] bg-[#2c3644] hidden md:flex  md:px-[150px] py-12 px-2 justify-center items-start gap-5 flex-wrap">
                <div className="max-w-[400px] text-sm">
                    <h3 className="text-white font-bold pb-6">ABOUT WPKUBE</h3>
                    <p className="text-gray-400">
                        WPKube is an online WordPress resource which focuses on WordPress tutorials, How-to’s, guides, plugins, news, and more. We aim to provide the most comprehensive beginner’s guides to anything about WordPress — from installing plugins, themes, automated installs and setups, to creating and setting up pages for your website.
                        <br />
                        <br />
                        We have over 500+ tutorials, guides, product reviews, tips, and tricks about WordPress. Founded by Devesh Sharma, the main goal of this site is to provide useful information on anything and everything WordPress.

                    </p>
                    <div className="flex py-5 gap-5">
                        <div className="bg-[#46a9e3] p-[7px_14px] text-white rounded-sm"> Twitter</div>
                        <div className="bg-[#36549d] p-[7px_14px] text-white rounded-sm">  Facebook</div>
                    </div>
                </div>
                <div className="max-w-[150px] text-sm">
                    <h3 className="text-white font-bold pb-6">USEFUL LINKS</h3>
                    <p className="text-gray-400 hover:text-white py-1">
                        Behind the Scenes
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        Beginner Guides
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        WordPress Hosting
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        WooCommerce Themes
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        MeridianThemes
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        Exclusive WordPress Deals
                    </p>
                    <p className="text-gray-400 hover:text-white py-1 my-2 decoration-solid underline">
                        View All Guides »
                    </p>
                </div>
                <div className="max-w-[150px] text-sm">
                    <h3 className="text-white font-bold pb-6">REVIEWS</h3>
                    <p className="text-gray-400 hover:text-white py-1">
                        WPEngine
                        <span className="bg-[#8E99A9] rounded-sm text-white ml-2 p-[1px_4px] text-[11px]">33% OFF</span>
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        Thrive Leads

                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        Flywheel
                        <span className="bg-[#8E99A9] rounded-sm text-white ml-2 p-[1px_4px] text-[11px]">33% OFF</span>

                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        Divi Theme
                        <span className="bg-[#8E99A9] rounded-sm text-white ml-2 p-[1px_4px] text-[11px]">20% OFF</span>

                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        Thrive Architect
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        Elegant Themes
                    </p>
                    <p className="text-gray-400 hover:text-white py-1 my-2 decoration-solid underline">
                        Reviews »
                    </p>
                </div>
                <div className="max-w-[150px] text-sm">
                    <h3 className="text-white font-bold pb-6">DEALS</h3>
                    <p className="text-gray-400 hover:text-white py-1">
                        InMotion Hosting
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        LifterLMS Coupon
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        LiquidWeb Coupon
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        WPEngine Coupon
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        A2 Hosting
                    </p>
                    <p className="text-gray-400 hover:text-white py-1">
                        FloThemes
                    </p>
                    <p className="text-gray-400 hover:text-white py-1 my-2 decoration-solid underline">
                        More Deals »
                    </p>
                </div>
            </div>
            <div className="text-gray-400 bg-[#262f3c] w-[100%] md:px-[150px] py-5 px-2 flex md:justify-between justify-center items-start gap-5 flex-wrap text-sm">
                <p>
                    © Copyright 2023 WPKube ® All Rights Reserved.
                </p>
                <div className="flex items-center justify-center gap-5">
                    <p className="hover:text-white">Contact</p>
                    <p className="hover:text-white">Site Terms</p>
                    <p className="hover:text-white">Disclosure</p>
                    <p className="hover:text-white">Privacy Policy</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;