
// import { Footer } from "@/components/footer"
import { SiteHeader } from "@/components/layouts/site-header";
interface MarketingLayoutProps {
    children: React.ReactNode
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    const user = null
    return (
        <div className="relative flex min-h-screen flex-col">
         <SiteHeader user={user} />
            <main className="flex-1">{children}</main>
            {/* <Footer /> */}

        </div>
    )
}