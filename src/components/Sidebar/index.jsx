const Sidebar = () => {
    return (
        <div className="my-5 mr-5">
            <div className="w-[320px] p-[20px]" style={{ background: "#2c3644 url(/2.png) no-repeat 110% -20px" }}>
                <h3 className="text-white font-bold before:content-[''] before:w-[35px] before:h-[1px] before:bg-[#f05a28] before:absolute relative before:-bottom-[10px]">
                    OUR NEWSLETTER
                </h3>
                <p className="text-gray-400 py-[30px]">
                    Get awesome content delivered straight to your inbox.
                </p>
                <input className="p-[8px] bg-gray-600 w-[100%] outline-none" placeholder="Enter your email address" type="text" name="mail" id="mail" />
                <button className="bg-[#f05a28] text-white w-[100%] mt-[20px] p-[8px] outline-none hover:bg-transparent transition-all border-2 border-[#f05a28] hover:border-[#f05a28]" type="submit">
                    GET UPDATES
                </button>
            </div>
            <div className="w-[320px] bg-[#d2d9e2] mt-5 p-[20px]">
                <h3 className="text-black font-bold before:content-[''] before:w-[35px] before:h-[1px] before:bg-[#f05a28] before:absolute relative before:-bottom-[10px]">
                    THE BEST OF WPKUBE
                </h3>
                <p className="text-gray-600 py-[30px]">
                    Some of the best content we have published so far.
                </p>
                <h3 className="text-black before:content-[''] before:w-[35px] before:h-[1px] before:bg-[#f05a28] before:absolute relative before:-bottom-[10px]">
                    BEGINNER GUIDES & REVIEWS
                </h3>
                <div className="py-[20px] flex justify-start items-start border-b-[1px] border-gray-400">
                    <div className="pr-2">
                        <p className="w-[28px] h-[28px] flex justify-center items-center text-white bg-[#f05a28]">1</p>
                    </div>
                    <p className="text-sm font-bold">
                        17 of the Best Google Fonts for 2023 (And How to Use Them in WordPress)
                    </p>
                </div>
                <div className="py-[20px] flex justify-start items-start border-b-[1px] border-gray-400">
                    <div className="pr-2">
                        <p className="w-[28px] h-[28px] flex justify-center items-center text-white bg-[#f05a28]">2</p>
                    </div>
                    <p className="text-sm font-bold">
                        10 Best WordPress Hosting Options for 2023 (Pros & Cons)
                    </p>
                </div>
                <div className="py-[20px] flex justify-start items-start border-b-[1px] border-gray-400">
                    <div className="pr-2">
                        <p className="w-[28px] h-[28px] flex justify-center items-center text-white bg-[#f05a28]">3</p>
                    </div>
                    <p className="text-sm font-bold">
                        8 Best Managed WordPress Hosting Providers for 2023 Compared
                    </p>
                </div>
                <div className="py-[20px] flex justify-start items-start border-b-[1px] border-gray-400">
                    <div className="pr-2">
                        <p className="w-[28px] h-[28px] flex justify-center items-center text-white bg-[#f05a28]">4</p>
                    </div>
                    <p className="text-sm font-bold">
                        5 Best WooCommerce Hosting Providers Compared in 2023 (All Budgets)
                    </p>
                </div>
                <div className="py-[20px] flex justify-start items-start border-b-[1px] border-gray-400">
                    <div className="pr-2">
                        <p className="w-[28px] h-[28px] flex justify-center items-center text-white bg-[#f05a28]">5</p>
                    </div>
                    <p className="text-sm font-bold">
                        Top 9 Landing Page Plugins for WordPress (2023)
                    </p>
                </div>
                <div className="py-[20px] flex justify-start items-start border-b-[1px] border-gray-400">
                    <div className="pr-2">
                        <p className="w-[28px] h-[28px] flex justify-center items-center text-white bg-[#f05a28]">6</p>
                    </div>
                    <p className="text-sm font-bold">
                        9 Best List Building Plugins for WordPress In 2023
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;