import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  "Dashboard",
  "Workouts",
  "Nutrition",
  "Progress",
  "Settings",
];

function SidebarContent() {
  return (
    <div className="flex h-full flex-col">
      {/* Logo */}
      <h2 className="text-3xl font-bold text-white">
        FitTrack
      </h2>

      {/* Nav */}
      <nav className="mt-10 space-y-3">
        {navItems.map((item, index) => (
          <button
            key={item}
            className={`w-full rounded-2xl px-4 py-3 text-left transition ${
              index === 0
                ? "bg-violet-500/20 text-white"
                : "text-zinc-400 hover:bg-white/5 hover:text-white"
            }`}
          >
            {item}
          </button>
        ))}
      </nav>

      {/* Upgrade Card */}
      <div className="mt-auto rounded-3xl border border-violet-500/20 bg-violet-500/10 p-5">
        <h3 className="text-xl font-semibold text-white">
          Upgrade Pro
        </h3>

        <p className="mt-2 text-sm text-zinc-300">
          Unlock advanced analytics and
          coaching.
        </p>

        <button className="mt-5 w-full rounded-full bg-gradient-to-r from-violet-500 to-cyan-500 py-3 font-medium text-white">
          Upgrade
        </button>
      </div>
    </div>
  );
}

export default function Sidebar() {
  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden w-72 border-r border-white/10 bg-white/[0.02] p-6 lg:block">
        <SidebarContent />
      </aside>

      {/* Mobile Sidebar */}
      <div className="fixed left-4 top-4 z-50 lg:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <button className="rounded-xl border border-white/10 bg-black/60 p-3 backdrop-blur-xl">
              <Menu className="h-5 w-5 text-white" />
            </button>
          </SheetTrigger>

          <SheetContent
            side="left"
            className="border-white/10 bg-black text-white"
          >
            <SidebarContent />
          </SheetContent>
        </Sheet>
      </div>
    </>
  );
}