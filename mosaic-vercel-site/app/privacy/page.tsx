export const metadata = {
  title: "Privacy Policy | Mosaic Hypnotherapy",
  description:
    "Privacy policy for Mosaic Hypnotherapy, including how enquiries, bookings and website analytics are handled.",
};

export default function PrivacyPolicy() {
  return (
    <main className="container-custom py-16">
      <h1 className="text-4xl mb-6">Privacy Policy</h1>

      <div className="space-y-6 text-lg leading-8">
        <p>
          Mosaic Hypnotherapy respects your privacy and is committed to protecting
          your personal information.
        </p>

        <p>
          If you contact me by email or book a consultation through Calendly, I may
          receive information such as your name, email address, and any details you
          choose to share.
        </p>

        <p>
          I use this information to respond to enquiries, arrange consultations,
          provide services, and manage client communication.
        </p>

        <p>
          This website may use Vercel Analytics to understand basic website usage,
          such as page views and visits. Calendly may also process information when
          you use the booking link.
        </p>

        <p>
          I do not sell your personal information. I only keep information for as
          long as needed for the purpose it was collected, or where required for
          professional, legal, or administrative reasons.
        </p>

        <p>
          You can contact me to ask about the personal information I hold about
          you, or to request correction or deletion where applicable.
        </p>

        <p>
          Contact:{" "}
          <a className="underline" href="mailto:hello@mosaichypnotherapy.com">
            hello@mosaichypnotherapy.com
          </a>
        </p>

        <p>Last updated: May 2026</p>
      </div>
    </main>
  );
}
