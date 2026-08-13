import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import logoAsset from "@/assets/land-marvel-logo.png.asset.json";

type NavLink = { label: string; to: "/" | "/buy" | "/sell" | "/projects" | "/contact" };
const navLinks: NavLink[] = [
  { label: "Home", to: "/" },
  { label: "Buy", to: "/buy" },
  { label: "Sell", to: "/sell" },
  { label: "Project", to: "/projects" },
  { label: "Contact Us", to: "/contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex h-20 lg:h-24 items-center justify-between">
        <Link to="/" className="flex items-center">
          <img
            src={logoAsset.url}
            alt="Land Marvel"
            className="h-20 lg:h-24 w-auto object-contain"
          />
        </Link>
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              activeProps={{ className: "text-primary underline decoration-2 underline-offset-8" }}
              className="text-foreground/80 hover:text-primary transition-colors font-bold text-lg xl:text-2xl whitespace-nowrap"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon" aria-label="Open menu" className="text-foreground hover:bg-gray-100"><Menu /></Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-72">
            <div className="flex flex-col gap-6 mt-8">
              {navLinks.map((l) => (
                <Link
                  key={l.label}
                  to={l.to}
                  onClick={() => setOpen(false)}
                  activeProps={{ className: "text-primary font-semibold" }}
                  className="text-lg font-medium text-foreground hover:text-accent"
                >
                  {l.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
