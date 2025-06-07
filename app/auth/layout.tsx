export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className="w-2xl m-auto block">
            {children}
        </main>
    )
}