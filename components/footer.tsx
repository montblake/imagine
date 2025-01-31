import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-200 border-t border-neutral-300 mt-auto">
      <div className="container flex h-16 items-center justify-between px-4">
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Your Company. All rights reserved.
        </p>

        <nav>
          <ul className="flex items-center gap-6">
            <li>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary/80"
              >
                Privacy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary/80"
              >
                Terms
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
