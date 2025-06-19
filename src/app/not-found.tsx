// src/app/not-found.tsx
"use client";

import Link from "next/link";
import LittleFishLogo from "./components/Logo/Logo";
import Button from "./components/Button/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-light-background dark:bg-dark-background text-center px-6">
      <LittleFishLogo height={80} loop />
      <h1 className="text-4xl font-bold font-poppins mt-6 text-og-blue">
        404 - Page Not Found
      </h1>
      <p className="mt-4 text-dark-card-background dark:text-light-text-secondary text-lg">
        The page you're looking for doesn’t exist. It might have been moved or
        deleted.
      </p>
      <div className="mt-8 w-full max-w-sm">
        <Link href="/">
          <Button>Go Back Home</Button>
        </Link>
      </div>
    </div>
  );
}
