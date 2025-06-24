import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage: "url(/BACKGROUND.jpg)",
        }}
      ></div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-black bg-opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        {/* Logo with hover effect */}
        <div className="mb-10 flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110">
          <Image
            src="/sa logo.jpg"
            alt="SPECANCIENS Logo"
            width={220}
            height={220}
            className="rounded-full shadow-2xl border-4 border-white"
            priority
          />
        </div>

        {/* Enhanced Title */}
        <h1 className="text-7xl md:text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-500 to-pink-400 mb-6 tracking-wider leading-tight drop-shadow-2xl">
          Welcome to Specanciens
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-white font-medium mb-10 drop-shadow-sm">
        Empowering Modern Reporting Solutions
        </p>

        {/* Enter Button */}
        <Link href="/dashboard">
          <Button className="px-10 py-4 text-lg font-semibold bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-600 text-white rounded-full shadow-xl transition duration-300 ease-in-out transform hover:scale-110">
          Enter
          </Button>

        </Link>
      </div>
    </div>
  );
}
