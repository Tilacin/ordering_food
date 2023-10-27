import prisma from "@/utils/connect";
import { NextRequest, NextResponse } from "next/server"


//получаем все продукты
export const GET = async (req: NextRequest) => {

    const { searchParams } = new URL(req.url)
    const cat = searchParams.get("cat")

    try {
        const products = await prisma.product.findMany({
            where: {
                ...(cat ? { catSlug: cat } : null),
              },
        })
        return new NextResponse(
            JSON.stringify(products),
            { status: 200 })
    } catch (error) {
        console.log(error);

        return new NextResponse(
            JSON.stringify({ message: "Что-то пошло не так (" }),
            { status: 500 })
    }
}
export const POST = () => {
    return new NextResponse("hello", { status: 200 })
}

//41:38