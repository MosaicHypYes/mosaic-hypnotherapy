
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-cream border-b">
      <div className="container-custom flex flex-col sm:flex-row items-center justify-between gap-4 py-5">

        {/* Logo */}
        <a href="/" className="flex items-center gap-4">
          <Image
            src="/logo.jpg"
            alt="Mosaic Hypnotherapy Logo"
            width={70}
            height={70}
            className="rounded-full"
          />

          <div>
            <h1 className="text-3xl tracking-widest text-deep">
              MOSAIC
            </h1>
            <p className="tracking-[0.4em] text-sm text-deep">
              HYPNOTHERAPY
            </p>
          </div>
        </a>

        {/* Navigation */}
        <nav className="flex flex-wrap items-center justify-center gap-4 sm:gap-5">

          <a href="#about" className="text-deep hover:opacity-70">
            About
          </a>

          <a href="#expect" className="text-deep hover:opacity-70">
            What to Expect
          </a>

          <a href="#my-book" className="text-deep font-medium hover:opacity-70">
            My Book
          </a>

          <a
            href="mailto:hello@mosaichypnotherapy.com?subject=Enquiry"
            className="bg-deep text-white px-5 py-3 rounded-xl text-sm sm:text-base text-center hover:opacity-90"
          >
            Book a Consultation
          </a>

        </nav>
      </div>
    </header>
  );
}
