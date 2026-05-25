export default function Credentials() {
  return (
    <main className="container-custom py-16">
      <h1 className="text-4xl mb-6">Credentials</h1>

      <div className="space-y-8 text-lg leading-8">
        <p>
          I am a registered practitioner with the National Board for Modern
          Psychotherapy and have completed professional training in solution
          focused hypnotherapy.
        </p>

        <section className="space-y-4">
          <h2 className="text-2xl">Professional Membership</h2>
          <img
            src="/NBFMP-green-logo-on-white-REGISTERED-768x361.webp"
            alt="NBFMP registered practitioner logo"
            className="max-w-xs h-auto"
          />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl">Qualifications</h2>
          <img
            src="/Dch cert - Helen OGorman.jpeg"
            alt="Diploma certificate for Helen O'Gorman"
            className="w-full max-w-3xl rounded border"
          />
        </section>
      </div>
    </main>
  );
}
