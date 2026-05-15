
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-cream border-b">
      <div className="container-custom flex items-center justify-between py-5">
        <div className="flex items-center gap-4">
          <Image src="/logo.jpg" alt="Mosaic Logo" width={70} height={70} className="rounded-full" />
          <div>
            <h1 className="text-3xl tracking-widest">MOSAIC</h1>
            <p className="tracking-[0.4em] text-sm">HYPNOTHERAPY</p>
          </div>
        </div>

        <a href="#book" className="bg-deep text-white px-6 py-3 rounded-xl">
          Book a Consultation
        </a>
      </div>
    </header>
  );
}
