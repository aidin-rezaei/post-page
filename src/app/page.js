import Card from '@/components/Card'
import Content from '@/components/Content'
import Link from 'next/link';
// import styles from './page.module.css'

async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}


export default async function Home() {
  const date = await getData();
  let conut = 1;
  let lastpage = date[date.length - 1].userId
  async function pagination() {
    let count1= 3
    const element = [];
    for (let index = conut;conut + 2 == index < lastpage; index++) {
      console.log(index);
    }
    return element;
  }
  const datepagination = await pagination();
  // console.log();
  return (
    <Content>
      {date.map((item) => {
        return (
          <>
            {
              conut === item.userId ?
                <div key={item.id} >
                  <Card item={item} key={item.id}/>
                </div>
                :
                ""
            }
          </>
        )
      })}
      <div className='pagination w-[100%] flex justify-center'>
        {/* {lastpage} */}
        <p className='px-2 py-1'>{conut}</p>
        {}
        <Link href="/1" className="hover:text-red-500 text-white">
          <p className='bg-blue-400 px-2 py-1'>2</p>
        </Link>
      </div>
    </Content >
  )
}
