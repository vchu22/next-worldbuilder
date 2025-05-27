export default function AuthLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-md">
                {children}
            </main>
        </div>
    )
}