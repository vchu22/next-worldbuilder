export default function BlogLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-md">{children}</main>
}