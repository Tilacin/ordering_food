import RecentOrders from "@/components/RecentOrders";
import BarChart from "@/components/BarChart";
import TopCards from "@/components/TopCards";
import Head from "next/head";
import { getServerSession } from "next-auth";
import { authOptions } from "@/utils/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await getServerSession(authOptions);
  
if (session?.user.isAdmin) {
    return (
      <>
        <Head>
          <p className="flex">Панель мониторинга</p>
        </Head>
        <main className="bg-gray-100 min-h-screen">
          <TopCards />

          <div className="p-4 grid md:grid-cols-3 grid-cols-1 gap-4">
            <BarChart />
            <RecentOrders />
          </div>
        </main>
      </>
    );
  } else {
    redirect("/sign-in");
  }
}
