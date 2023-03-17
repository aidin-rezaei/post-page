import Image from "next/image";

const Logo = () => {
    return (
        <div className="ml-12 dark:invert dark:brightness-0">
            <Image
                src="/logo.png"
                width={150}
                height={0}
                alt="logo"
                
            />
        </div>
    );
}

export default Logo;