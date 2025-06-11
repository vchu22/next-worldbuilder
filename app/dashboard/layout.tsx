import PageHeader from "@/app/header";
import PageFooter from "@/app/footer";

export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <>
            <PageHeader/>
            <main className="m-auto block">
                {children}
            </main>
            <PageFooter/>
        </>
    )
}