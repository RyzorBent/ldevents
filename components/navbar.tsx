"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useState } from "react";
import { useCart } from "@/hooks/use-cart";
import { motion } from 'framer-motion';

const routes = [
  {
    href: "/",
    label: "Home",
  },
  {
    href: "/catalogue",
    label: "Catalogue",
  },
  {
    href: "/about",
    label: "About",
  },
  {
    href: "/contact",
    label: "Contact",
  },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const cart = useCart();
  const itemCount = cart.items.reduce((total, item) => total + item.quantity, 0);

  return (
    <header className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="font-semibold text-xl">
          Elegance Events
        </Link>

        <motion.nav 
          className="hidden md:flex items-center gap-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, staggerChildren: 0.1 }}
        >
          {routes.map((route) => (
            <motion.div key={route.href} whileHover={{ scale: 1.05 }}>
              <Link
                href={route.href}
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary",
                  pathname === route.href
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
              >
                {route.label}
              </Link>
            </motion.div>
          ))}
          <motion.div whileHover={{ scale: 1.05 }}>
            <Link href="/cart">
              <Button size="icon" variant="ghost" className="relative">
                <ShoppingCart className="h-5 w-5" />
                {itemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-4 h-4 rounded-full text-xs flex items-center justify-center">
                    {itemCount}
                  </span>
                )}
              </Button>
            </Link>
          </motion.div>
        </motion.nav>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4 mt-8">
              {routes.map((route) => (
                <Link
                  key={route.href}
                  href={route.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-primary",
                    pathname === route.href
                      ? "text-primary"
                      : "text-muted-foreground"
                  )}
                >
                  {route.label}
                </Link>
              ))}
              <Link href="/cart" onClick={() => setIsOpen(false)}>
                <Button size="icon" variant="ghost" className="relative">
                  <ShoppingCart className="h-5 w-5" />
                  {itemCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground w-4 h-4 rounded-full text-xs flex items-center justify-center">
                      {itemCount}
                    </span>
                  )}
                </Button>
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
