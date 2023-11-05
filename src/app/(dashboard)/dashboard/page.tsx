
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Suspense } from "react";
import Link from "next/link";
import { Icons } from "@/components/icons";

export default async function Overview() {
  const events = 1
  // console.log('[session]', session)
  return (
    <div className="flex max-w-screen-xl flex-col space-y-12 p-8">
      <div className="flex flex-col space-y-6">
        <h1 className="font-cal text-3xl font-bold text-foreground">
          Welcome Back Planner!
        </h1>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">

          <Link href={`dashboard/events/${events}`}>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Wedding 1</CardTitle>

              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">2</div>
              </CardContent>
            </Card>
          </Link>
          <Link href="/events">
            <Card >
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium"></CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold"><Icons.add className="h-6 w-6" /></div>
              </CardContent>
            </Card>
          </Link>
        </div>

      </div>
    </div>
  );
}