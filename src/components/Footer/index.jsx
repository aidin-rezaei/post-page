import Image from "next/image";

const Footer = () => {
    return (
        <footer className="w-[100%]">
            <div className="w-[100%] py-6 gap-8 flex flex-wrap md:px-[150px] px-2 md:flex-row flex-col justify-center items-center  bg-[#d2d9e2] text-[#535b67]">
                <div className="W-[200px]">
                    <p className="W-[200px]">Featured In</p>
                </div>
                <Image
                    className="md:w-[calc(100%_-_200px)] w-[100%] opacity-50"
                    src="/on.png"
                    width={5000}
                    height={0}
                    alt="logo"

                />
            </div>
        </footer>
    );
}

export default Footer;