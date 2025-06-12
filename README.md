# Next WorldBuilder
A collaborative worldbuilding web app built with Next.js.

## Technologies Used
- [Next.js](https://nextjs.org/) + Tailwind CSS + TypeScript
  - UI Components: [shadcn](https://ui.shadcn.com/)
  - Login Authentication: [Better Auth](https://www.better-auth.com) & [Better Auth UI](https://better-auth-ui.com/)
  - ORM: [Prisma](https://www.prisma.io/)
  - Internationalization: [next-intl](https://next-intl.dev/)
- Database: [PostgreSQL](https://www.postgresql.org/)

## Starting the Application
To be able to run the project, you need to have [Node.js](https://nodejs.org/en), Next.js, and PostgreSQL installed.
Afterward, set up the database schema by executing the lastest `migration.sql` file inside the `/prisma/migrations/[lastest_migration]/`.

Install all the necessary dependencies using one of the following commends depending on the package manager you want to use:
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

If you want to run it locally, rename `.env.example` to `.env` and fill in the values of your secret keys 
and connection strings. Otherwise, if you want to deploy the server, make sure your "Environment variables" settings 
have the variables listed in `.env.example`.

Finally, after everything is set up, you can run the server by executing:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.