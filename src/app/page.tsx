import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex items-center justify-center bg-black flex-col text-yellow-400">
     
     <h1 className="text-2xl font-bold m-5  ">“CulinArt - готовим искусство, вы наслаждаетесь результатом!”</h1>
     <h2 className="font-bold text-xl m-5 "> “Выбирайте CulinArt, и ваши любимые блюда окажутся у вас дома быстрее, чем вы думаете!”</h2>
    <div className="">
      <div>
        <Link className={buttonVariants()} href="/admin">Перейти в админку</Link>
      </div>
    <Image src="/main_food.png"
            alt=""
            width={800}
            height={964}
            className="object-contain"
            />
    </div>
    
      
    </main>
  )
}
