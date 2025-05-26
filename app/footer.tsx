import Image from "next/image";

const PageFooter = () => (
    <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <h6>Build with</h6>
        <a href="https://nextjs.org/"
            target="_blank"
            rel="noopener noreferrer">
            <Image
                className="dark:invert"
                src="/next.svg"
                alt="Next.js logo"
                width={120}
                height={26}
                priority
            /></a>
    </footer>
);

export default PageFooter;