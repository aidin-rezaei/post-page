import Card from '@/components/Card'
import Content from '@/components/Content'
import styles from './page.module.css'

async function getData() {
  // const db = new PocketBase('http://127.0.0.1:8090');
  // const result = await db.records.getList('notes');
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json();
  return data;
}

export default async function Home() {
  const date = await getData();
  return (
    <Content>
      {date.map((item) => {
        return (
        <div key={item.id}>
          <Card item={item} />
        </div>
        )
      })}
    </Content>
  )
}
