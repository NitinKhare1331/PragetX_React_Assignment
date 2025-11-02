import React, { useEffect, useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import header_logo_black from "/header_logo_black.webp";

export default function Navbar() {
    const [open, setOpen] = useState(false);

    const items = ["Company", "Products", "Services", "Resources", "Industries"];

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "auto";
    }, [open]);

    return (
        <header className="w-full backdrop-blur-md border-b border-gray-100 fixed top-0 left-0 z-50 bg-white/70">
            <div className="max-w-7xl mx-auto px-4">
                <div className="relative flex items-center h-20 gap-4">

                    <a href="#" className="flex items-center shrink-0">
                        <img src={header_logo_black} alt="PragetX" className="h-5 w-auto" />
                    </a>

                    <nav className="hidden lg:flex flex-1 items-center justify-center">
                        <div className="flex items-center gap-4 backdrop-blur-sm rounded-full border border-gray-200 px-3 py-2 shadow-sm">
                            {items.map((item) => (
                                <button key={item} className="flex items-center gap-2 px-3 py-1.5 text-sm rounded-full text-slate-700 hover:bg-gray-100 hover:text-blue-600 transition">
                                    {item}
                                    <ChevronDown className="w-3 h-3" />
                                </button>
                            ))}
                        </div>
                    </nav>

                    <div className="ml-auto flex items-center gap-3">
                        <a href="#contact" className="hidden sm:inline-block px-6 py-2.5 rounded-full text-white text-sm font-medium bg-linear-to-r from-blue-600 to-sky-500 hover:from-blue-700 hover:to-sky-600 transition-all shadow-sm hover:shadow-md">
                            Get in touch
                        </a>

                        <a href="#contact" className="inline-flex items-center sm:hidden px-3 py-2 rounded-full text-white text-sm font-medium bg-blue-600 hover:bg-blue-700 shadow-sm">
                            Contact
                        </a>

                        <button
                            onClick={() => setOpen(!open)}
                            className="lg:hidden ml-1 p-2 rounded-md border border-gray-300 hover:bg-gray-100 flex items-center justify-center"
                        >
                            {open ? <X className="w-6 h-6 text-slate-800" /> : <Menu className="w-6 h-6 text-slate-800" />}
                        </button>
                    </div>
                </div>
            </div>

            <div className={`fixed inset-0 z-999 lg:hidden transition ${open ? "opacity-100 visible" : "opacity-0 invisible"}`}>
                <div className="absolute  bg-black/40" onClick={() => setOpen(false)} />

                <aside className={`absolute right-0 top-0 h-full w-full max-w-sm bg-white shadow-xl transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`}>
                    <div className="flex items-center justify-between px-4 py-4 border-b">
                        <img src={header_logo_black} alt="PragetX" className="h-5 w-auto" />
                        <button onClick={() => setOpen(false)} className="p-2">
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="px-4 py-6 space-y-4 h-[calc(100vh-64px)] overflow-y-auto bg-white">
                        {items.map((item) => (
                            <a key={item} href="#" onClick={() => setOpen(false)}
                                className="block px-3 py-4 text-center text-slate-800 text-lg font-medium border-b border-gray-200 hover:bg-blue-50"
                            >
                                {item}
                            </a>
                        ))}

                        <a href="#contact" onClick={() => setOpen(false)}
                            className="mt-6 inline-block w-full text-center px-5 py-3 rounded-full text-white font-medium bg-linear-to-r from-blue-600 to-sky-500 shadow-md hover:shadow-lg">
                            Get in touch
                        </a>
                    </nav>
                </aside>
            </div>
        </header>
    );
}

