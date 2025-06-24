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
      <div className="absolute inset-0 z-0 bg-black bg-opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center px-4 py-10 text-center max-w-screen-lg">
        {/* Logo with hover effect */}
        <div className="mb-8 flex items-center justify-center p-2 transition-transform duration-300 hover:scale-110">
          <Image
            src="/sa logo.jpg"
            alt="SPECANCIENS Logo"
            width={180}
            height={180}
            className="rounded-full shadow-2xl border-4 border-white sm:w-[200px] sm:h-[200px] md:w-[220px] md:h-[220px]"
            priority
          />
        </div>

        {/* Enhanced Title */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-purple-500 to-pink-400 mb-4 tracking-wide leading-tight drop-shadow-2xl">
          Welcome to Specanciens
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-white font-medium mb-8 px-2">
          Empowering Modern Reporting Solutions
        </p>

        {/* Enter Button */}
        <Link href="/dashboard">
          <Button className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg font-semibold bg-gradient-to-r from-purple-700 via-purple-500 to-pink-500 hover:from-purple-800 hover:to-pink-600 text-white rounded-full shadow-xl transition-transform duration-300 hover:scale-110">
            Enter
          </Button>
        </Link>
      </div>
    </div>
  );
}
