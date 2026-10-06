import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Link, useLocation } from "wouter";

const TABS = [
  { name: "Home", href: "/" },
  { name: "The Alley", href: "/about" },
  { name: "Brands", href: "/brands" },
  { name: "What's on", href: "/events" },
  { name: "Food map", href: "/food" },
];

export const SlideTabs = () => {
  const [location] = useLocation();
  const [position, setPosition] = useState({ left: 0, width: 0, opacity: 0 });
  const tabsRef = useRef<(HTMLLIElement | null)[]>([]);
  
  // Find which tab is active based on location
  const getActiveIndex = () => {
    // Exact match or sub-route match for events/brands
    const index = TABS.findIndex(t => location === t.href || (t.href !== "/" && location.startsWith(t.href)));
    return index === -1 ? 0 : index;
  };

  const [selected, setSelected] = useState(getActiveIndex);

  useEffect(() => {
    setSelected(getActiveIndex());
  }, [location]);

  useEffect(() => {
    const selectedTab = tabsRef.current[selected];
    if (selectedTab) {
      const { width } = selectedTab.getBoundingClientRect();
      setPosition({
        left: selectedTab.offsetLeft,
        width,
        opacity: 1,
      });
    }
  }, [selected]);

  return (
    <ul
      onMouseLeave={() => {
        const selectedTab = tabsRef.current[selected];
        if (selectedTab) {
            const { width } = selectedTab.getBoundingClientRect();
            setPosition({
                left: selectedTab.offsetLeft,
                width,
                opacity: 1,
            });
        }
      }}
      className="relative flex w-fit rounded-full bg-transparent p-1"
    >
      {TABS.map((tab, i) => (
         <Tab
            key={tab.name}
            ref={(el) => { tabsRef.current[i] = el; }}
            setPosition={setPosition}
            onClick={() => setSelected(i)}
            href={tab.href}
          >
            {tab.name}
        </Tab>
      ))}

      <Cursor position={position} />
    </ul>
  );
};

const Tab = React.forwardRef<HTMLLIElement, { children: React.ReactNode, setPosition: any, onClick: () => void, href: string }>(
  ({ children, setPosition, onClick, href }, ref) => {
    return (
      <li
        ref={ref}
        onClick={onClick}
        onMouseEnter={() => {
          if (!ref || !('current' in ref) || !ref.current) return;
          const { width } = ref.current.getBoundingClientRect();
          setPosition({ left: ref.current.offsetLeft, width, opacity: 1 });
        }}
        className="relative z-10 block cursor-pointer px-4 py-2"
      >
        <Link href={href} className="block w-full h-full text-current font-bold uppercase tracking-[.08em] text-[11px] opacity-80 hover:opacity-100 transition-opacity">
          {children}
        </Link>
      </li>
    );
  }
);

const Cursor = ({ position }: { position: any }) => {
  return (
    <motion.li
      animate={{ ...position }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
      className="absolute z-0 h-full rounded-full bg-black/10 dark:bg-white/10 top-0 left-0"
    />
  );
};
