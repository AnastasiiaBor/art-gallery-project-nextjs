import { HeaderProps } from "@/app/lib/types";
import Link from "next/link";

export default function Header( {title, links} : HeaderProps) {
  return (
    <header className="w-full">
      <nav className="flex justify-between items-center py-4 px-6">
        <Link href="/" className="text-3xl font-bold">
          {title}
        </Link>
        <ul className="flex gap-6 text-gray-700 font-medium">
          {links.map((link) => (
            <li key={link.url}>
              <Link href={link.url} className="hover:text-gray-900 hover:underline">
                {link.title}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

// ADD: status Active header link styling
// MODIFY: Link hover styling
