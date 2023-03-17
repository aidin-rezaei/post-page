import { useRouter } from "next/navigation";

export default function Post( ) {
  const router = useRouter()
  const { pid } = router.query
    return (
      <div className='bg-gray-800 h-screen p-16 text-gray-100'>
hyjk {pid}
      </div>
    );
  }