'use client';
import Image from "next/image";
import { redirect } from "next/navigation";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center p-8 sm:p-16 pb-16 gap-16">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start w-full sm:w-md">
        {session ? redirect('/dashboard') : <LoggedOutView />}
      </main>
    </div>
  );
}

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