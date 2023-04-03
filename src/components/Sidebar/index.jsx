const Sidebar = () => {
    return (
        <div className="dark:text-white my-5 mr-5">
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
            
        </div>
    );
}

export default Sidebar;