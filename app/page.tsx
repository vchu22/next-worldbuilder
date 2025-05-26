'use client';
import { useSession } from "next-auth/react";
import Image from "next/image";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-md">
        {session ? <LoggedInView /> : <LoggedOutView />}
      </main>
    </div>
  );
}

const LoggedInView = () => (
  <>
    You have successfully logged in!
  </>
)

const LoggedOutView = () => (
  <>
    <p>A worldbuilding tool that allows fiction writers and video game designers to easily organize of worldbuilding concepts and collaborate with others in real-time.</p>

    <div className="flex gap-4 items-center flex-col sm:flex-row">
      <a
        className="themed-btn primary"
        href="auth/login/"
        rel="noopener noreferrer"
      >
        <Image
          className="dark:invert"
          src="/vercel.svg"
          alt="Vercel logomark"
          width={20}
          height={20}
        />
        Login
      </a>
      <a
        className="themed-btn secondary"
        href="guide/"
        rel="noopener noreferrer"
      >
        Documentation
      </a>
    </div>
  </>
)