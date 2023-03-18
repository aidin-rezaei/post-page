import Card from '@/components/Card';
import Content from '@/components/Content';
import React from 'react';


async function getData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}


const Page = async ({ params }) => {
  const date = await getData();
  return (
    <Content>
      {date.map((item) => {
        return (
          <>
            {
              Number(params.id) === item.id ?
                <div key={item.id} >
                  <Card item={item} key={item.id} dis/>
                </div>
                :
                ""
            }
          </>
        )
      })}
    </Content>
  )
};

export default Page;