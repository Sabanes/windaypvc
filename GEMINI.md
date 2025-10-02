## Project Overview

This is the official website for WINDAYPVC, a company specializing in high-quality PVC windows and doors. It is a modern, responsive, and SEO-optimized website built with Next.js 14, TypeScript, and Tailwind CSS. The project uses Shadcn UI for components and Sanity for content management. The website is configured for deployment on Vercel.

## Building and Running

To get started with the project, follow these steps:

1.  **Install dependencies:**
    ```bash
    npm install
    ```

2.  **Run the development server:**
    ```bash
    npm run dev
    ```
    The application will be available at [http://localhost:3000](http://localhost:3000).

3.  **Build for production:**
    ```bash
    npm run build
    ```

4.  **Run in production mode:**
    ```bash
    npm run start
    ```

5.  **Lint the code:**
    ```bash
    npm run lint
    ```

## Development Conventions

*   **Framework:** The project uses Next.js with the App Router.
*   **Styling:** Styling is done with Tailwind CSS.
*   **UI Components:** The project uses Shadcn UI components.
*   **Content Management:** Content is managed through Sanity, with the Sanity Studio accessible at `/studio`.
*   **Deployment:** The project is configured for deployment on Vercel.
*   **Error Handling:** The project is configured to ignore ESLint and TypeScript errors during the build process. It is recommended to run the `lint` command to check for errors during development.
