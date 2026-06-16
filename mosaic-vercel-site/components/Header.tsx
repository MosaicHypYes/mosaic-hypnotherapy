
import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-cream border-b">
      <div className="container-custom flex items-center justify-between py-5">
        <div className="flex items-center gap-4">
          <Image src="/logo.jpg" alt="Mosaic Hypnotherapy Logo" width={70} height={70} className="rounded-full" />
         <div className="hidden sm:block"> 
         <h1 className="text-3xl tracking-widest">MOSAIC</h1>
         <p className="tracking-[0.4em] text-sm">HYPNOTHERAPY</p>
        </div>
        </div>
<a
  href="mailto:hello@mosaichypnotherapy.com?subject=Enquiry"
  className="bg-deep text-white px-4 py-3 sm:px-6 sm:py-3 rounded-xl text-sm sm:text-base text-center"
>
  Book a Free Consultation
</a>
      </div>
    </header>
  );
}
