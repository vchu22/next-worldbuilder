import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-md">
        <p>A worldbuilding tool that allows fiction writers and video game designers to easily organize of worldbuilding concepts and collaborate with others in real-time.</p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">

          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[128px]"
            href="account/login/"
            rel="noopener noreferrer"
          >
            Login
          </a>
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="account/signup/"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/vercel.svg"
              alt="Vercel logomark"
              width={20}
              height={20}
            />
            Create Account
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h6>Build with</h6>
        <a href="https://nextjs.org/"
          target="_blank"
          rel="noopener noreferrer"><Image
            className="dark:invert"
            src="/next.svg"
            alt="Next.js logo"
            width={120}
            height={26}
            priority
          /></a>
      </footer>
    </div>
  );
}
