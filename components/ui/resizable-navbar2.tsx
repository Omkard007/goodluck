"use client";

import React, {
  createContext,
  useContext,
  useRef,
  useState,
} from "react";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "motion/react";

/* =====================================================
   CONTEXT
===================================================== */

type NavbarState = {
  isSticky: boolean;
  isAtTop: boolean;
};

const NavbarContext = createContext<NavbarState>({
  isSticky: false,
  isAtTop: true,
});

const useNavbar = () => useContext(NavbarContext);

/* =====================================================
   NAVBAR ROOT
===================================================== */

export const Navbar = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  const [isSticky, setIsSticky] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);

  useMotionValueEvent(scrollY, "change", (y) => {
    setIsAtTop(y === 0);
    setIsSticky(y > 100);
  });

  return (
    <NavbarContext.Provider value={{ isSticky, isAtTop }}>
      <motion.div
        ref={ref}
        className={cn(
          "sticky inset-x-0 top-0 z-40 w-[80%] mx-auto",
          className,
        )}
      >
        {children}
      </motion.div>
    </NavbarContext.Provider>
  );
};

/* =====================================================
   DESKTOP NAV BODY
===================================================== */

export const NavBody = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isSticky, isAtTop } = useNavbar();

  return (
    <motion.div
      animate={{
        backdropFilter: isSticky ? "blur(10px)" : "none",
        backgroundColor: isAtTop
          ? "var(--secondary)"              // solid at top
          : "rgba(255,255,255,0.1)",        // glassy when sticky
        boxShadow: isSticky
          ? "0 10px 30px rgba(0,0,0,0.08)"
          : "none",
        y: isSticky ? 20 : 0,
      }}
      transition={{ type: "spring", stiffness: 200, damping: 40 }}
      className={cn(
        "relative z-50 mx-auto hidden max-w-7xl items-center justify-between rounded-full px-4 py-2 lg:flex",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

/* =====================================================
   NAV ITEMS
===================================================== */

export const NavItems = ({
  items,
  onItemClick,
  className,
}: {
  items: { name: string; link: string }[];
  onItemClick?: () => void;
  className?: string;
}) => {
  const { isSticky, isAtTop } = useNavbar();
  const [hovered, setHovered] = useState<number | null>(null);

  const textColor = isAtTop ? "text-white" : "text-black";

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn(
        "absolute inset-0 flex items-center justify-center space-x-2",
        className,
      )}
    >
      {items.map((item, idx) => (
        <a
          key={idx}
          href={item.link}
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className={cn(
            "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
            textColor,
          )}
        >
          {hovered === idx && (
            <motion.div
              layoutId="nav-hover"
              className="absolute inset-0 rounded-full bg-secondary/70"
            />
          )}
          <span className="relative z-10">{item.name}</span>
        </a>
      ))}
    </div>
  );
};

/* =====================================================
   LOGO
===================================================== */

export const NavbarLogo = () => {
  const { isAtTop } = useNavbar();

  return (
    <a
      href="/"
      className={cn(
        "relative z-10 px-2 py-1 text-lg font-serif transition-colors duration-300",
        isAtTop ? "text-white" : "text-black",
      )}
    >
      Goodluck_Cafe
    </a>
  );
};

/* =====================================================
   NAVBAR BUTTON
===================================================== */

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
}) => {
  const { isAtTop } = useNavbar();

  return (
    <Tag
      href={href}
      className={cn(
        "px-4 py-2 text-sm font-medium transition-colors duration-300",
        isAtTop ? "text-white" : "text-black",
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  );
};

/* =====================================================
   MOBILE NAV
===================================================== */

export const MobileNav = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isAtTop } = useNavbar();

  return (
    <div
      className={cn(
        "lg:hidden px-4 py-2",
        isAtTop ? "bg-secondary text-white" : "bg-white text-black",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const { isAtTop } = useNavbar();

  return (
    <div
      className={cn(
        "flex w-full items-center justify-between transition-colors",
        isAtTop ? "text-white" : "text-black",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  isOpen,
  className,
}: {
  children: React.ReactNode;
  isOpen: boolean;
  className?: string;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex flex-col gap-4 rounded-lg bg-white px-4 py-6 shadow-lg",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) =>
  isOpen ? (
    <IconX className="cursor-pointer" onClick={onClick} />
  ) : (
    <IconMenu2 className="cursor-pointer" onClick={onClick} />
  );
