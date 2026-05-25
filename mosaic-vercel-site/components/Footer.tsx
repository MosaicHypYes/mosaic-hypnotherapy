export default function Footer() {
  return (
    <footer className="bg-deep text-white mt-20 py-10">
      <div className="container-custom flex flex-col md:flex-row justify-between gap-6">
        <div>
          <h2 className="text-2xl mb-2">Solution Focused Hypnotherapy</h2>
          <p>Online sessions available worldwide.</p>
        </div>

        <div className="space-y-2">
          <a
            href="https://www.instagram.com/mosaic_hypyes"
            target="_blank"
            rel="noopener noreferrer"
            className="block underline"
          >
            @mosaic_hypyes
          </a>
          <a
            href="mailto:hello@mosaichypnotherapy.com"
            className="block underline"
          >
            hello@mosaichypnotherapy.com
          </a>
          <a href="/privacy" className="block underline">
  Privacy Policy
</a>
        </div>
      </div>
    </footer>
  );
}
