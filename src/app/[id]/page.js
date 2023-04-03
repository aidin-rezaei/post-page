import Card from '@/components/Card'
import Content from '@/components/Content'
import Sidebar from '@/components/Sidebar';
import Link from 'next/link';
// import styles from './page.module.css'

async function getData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json();
    return data;
}
async function paginationNext(conut, lastpage) {
    const element = [];
    for (let index = conut + 1; index <= lastpage; index++) {
        if (conut + 2 >= index) {
            element.push(index)
        }
    }
    return element;
}
async function paginationPrevious(conut) {
    const element = [];
    for (let index = conut - 1; index >= 1; index--) {
        if (conut - 2 <= index) {
            element.push(index)
        }
    }
    return element.sort();
}

export default async function Nextpost({ params }) {
    const date = await getData(),
        conut = Number(params.id),
        lastpage = date[date.length - 1].userId,
        getpaginationNext = await paginationNext(conut, lastpage),
        getpaginationPrevious = await paginationPrevious(conut)

    return (
        <div className='flex justify-center items-start flex-wrap '>
            <Content>
                {date.map((item) => {
                    return (
                        <>
                            {
                                conut === item.userId ?
                                    <div key={item.id} >
                                        <Card item={item} key={item.id} />
                                    </div>
                                    :
                                    ""
                            }
                        </>
                    )
                })}
                <div className='pagination w-[100%] flex justify-center'>
                    <Link href={`/`} className="hover:opacity-80 mx-1 my-5 text-white">
                        <p className='bg-[#f05a28] px-2 py-1'>1</p>
                    </Link>
                    <p className='px-2 py-1 my-5'>...</p>
                    {getpaginationPrevious.map((item) => {
                        return (
                            <Link href={`/${item}`} key={item} className="hover:opacity-80 mx-1 my-5 text-white">
                                <p className='bg-[#f05a28] px-2 py-1'>{item}</p>
                            </Link>
                        )
                    })}
                    <p className='px-2 py-1 my-5'>{conut}</p>
                    {getpaginationNext.map((item) => {
                        return (
                            <Link href={`/${item}`} key={item} className="hover:opacity-80 mx-1 my-5 text-white">
                                <p className='bg-[#f05a28] px-2 py-1'>{item}</p>
                            </Link>
                        )
                    })}
                    <p className='px-2 py-1 my-5'>...</p>
                    <Link href={`/${lastpage}`} className="hover:opacity-80 mx-1 my-5 text-white">
                        <p className='bg-[#f05a28] px-2 py-1'>{lastpage}</p>
                    </Link>
                </div>
            </Content >
            <Sidebar />
        </div>
    )
}
