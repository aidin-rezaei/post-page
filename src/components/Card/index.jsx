import Image from "next/image";
import Link from "next/link";

const Card = ({ item, dis }) => {
    return (
        <div className="pt-5">
            <div className="px-5">
                <p className="bg-blue-400 px-2 py-1 inline font-bold text-white">
                    WordPress Themes
                </p>
            </div>
            <Link href={`/post/${item.id}`}>
                <div className="px-5">
                    <h2 className="hover:text-red-500 my-3 text-2xl font-bold">
                        {item.title}
                    </h2>
                </div>
                <Image
                    src="/1.jpg"
                    width={700}
                    height={0}
                    alt="logo"

                />
            </Link>
            <p className="text-card p-5 text-justify">
                {item.body}
            </p>
            {dis ? '' :
                <div className="flex px-5 pb-5 items-center border-b border-gray-300 dark:border-gray-600">
                    <Link href={`/post/${item.id}`} className="hover:text-red-500 text-blue-400">
                        <p className="">
                            WordPress Themes
                        </p>
                    </Link>
                    <p className="font-bold pl-1 text-lg">{'>'}</p>
                </div>
            }
        </div>
    );
}

export default Card;