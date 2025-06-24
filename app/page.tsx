import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image"; // Make sure Image is imported for the logo

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Translucency */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/your-background-image.jpg')", // **Replace with your image path**
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.3, // Adjust translucency here (0.0 to 1.0)
        }}
      ></div>

      {/* Content Layer */}
      <div className="relative z-10 flex flex-col items-center justify-center p-6 text-center">
        {/* Logo in the center */}
        <div className="mb-8">
          <Image
            src="/your-logo.png" // **Replace with your logo path**
            alt="Company Logo"
            width={200} // Adjust width as needed
            height={200} // Adjust height as needed
            className="rounded-full shadow-lg" // Example styling for the logo
          />
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-6 drop-shadow-lg">
          Welcome to Reports Modernization
        </h1>

        {/* Enter Button */}
        <Link href={"/dashboard"}>
          <Button className="px-8 py-4 text-lg bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-xl transition transform hover:scale-105">
            Enter
          </Button>
        </Link>
      </div>
    </div>
  );
}
