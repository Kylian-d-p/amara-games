import Link from "next/link";
import { Button } from "../ui/button";

export default function Header() {
  const links = [
    { href: "/", label: "Accueil" },
    { href: "/our-games", label: "Nos jeux" },
    { href: "/about", label: "À propos" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <header className="sticky top-0 left-0 w-full shadow-sm h-16 px-5 flex items-center justify-between">
      <Link href="/">
        <span className="font-heading font-extrabold">Amara Games</span>
      </Link>
      <ul className="flex items-center gap-5">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href}>
              <Button variant={"link"} size={"nopad"}>
                {link.label}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
