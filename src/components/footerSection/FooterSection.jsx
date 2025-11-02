import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, Globe, Github } from "lucide-react";
import footerImg from "/footer/footerImg.jpg";
import india from "/footer/india.jpg";
import usa from "/footer/usa.png";
import brazil from "/footer/brazil.png";
import header_logo_white from '/header_logo_white.webp'

export default function FooterSection() {
    return (
        <>
            <footer className="relative w-full pt-20 pb-10  text-white overflow-hidden bg-black rounded-t-[60px]">
                <div className="absolute inset-0">
                    <img
                        src={footerImg}
                        alt="world map"
                        className="w-full h-full object-cover rounded-[60px]"
                    />

                </div>
                <div className="relative max-w-7xl mx-auto px-6">
                    <div className="flex justify-between items-center mb-10">
                        <img src={header_logo_white} alt="PragetX logo" className="w-24 md:w-48" />

                        <div className="flex gap-4 text-white/80">
                            {[<Twitter />, <Linkedin />, <Instagram />, <Facebook />, <Youtube />, <Mail />].map((icon, i) => (
                                <button
                                    key={i}
                                    className="hover:text-white transition w-4"
                                >
                                    {icon}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10 text-sm">
                        <div>
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <img src={india} className="w-8 h-6 rounded-md" /> India (HQ)
                            </div>
                            <p className="mt-2 text-white/80">
                                D-509 & D-510, Swati Clover, Shilaj Circle, SP Ring Road, Thaltej,
                                Ahmedabad - 380054
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <img src={usa} className="w-8 h-6 rounded-md" /> US Office
                            </div>
                            <p className="mt-2 text-white/80">
                                PO Box 531, Centerville, Atlanta GA 31028
                            </p>
                        </div>
                        <div>
                            <div className="flex items-center gap-2 text-lg font-semibold">
                                <img src={brazil} className="w-8 h-6 rounded-md" /> Brazil Office
                            </div>
                            <p className="mt-2 text-white/80">
                                Rua Castelo 239 Foz do Iguaçu Paraná. Mr. Marco Antônio.<br />
                                +55 45 8802-5573
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row gap-4 mb-10">
                        <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full w-full md:w-1/3">
                            <Globe className="w-5 h-5 mr-2 text-white/80" /> PragetX
                        </div>
                        <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full w-full md:w-1/3">
                            <Phone className="w-5 h-5 mr-2 text-white/80" /> +91-8487890773
                        </div>
                        <div className="flex items-center justify-center bg-white/10 backdrop-blur-sm px-4 py-3 rounded-full w-full md:w-1/3">
                            <Mail className="w-5 h-5 mr-2 text-white/80" /> hello@pragetx.com
                        </div>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6 text-white/80 text-sm mb-10">
                        {["About Us", "Portfolio", "Careers", "How We Work", "Referral Programs", "Become A Partner", "Blogs", "Contact Us"].map((item, i) => (
                            <a key={i} href="#" className="hover:text-white transition">
                                {item}
                            </a>
                        ))}
                    </div>
                    <div className="flex flex-wrap gap-6 text-xs text-white/60 mb-6 justify-center md:justify-start">
                        <a href="#">Cookies</a>
                        <a href="#">Privacy</a>
                        <a href="#">Terms</a>
                    </div>
                    <p className="text-xs text-white/60 text-center md:text-left">
                        © 2025 <span className="text-blue-400">PragetX</span>. All rights reserved.
                    </p>
                </div>
            </footer>
        </>
    );
}
