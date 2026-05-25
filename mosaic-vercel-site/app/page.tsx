
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1600&auto=format&fit=crop')] bg-cover bg-center min-h-[520px] flex items-center">
        <div className="container-custom">
          <div className="bg-white/70 backdrop-blur-sm p-10 max-w-2xl rounded-2xl">
            <h1 className="text-6xl leading-tight mb-6 text-deep">
              Solution Focused Hypnotherapy
            </h1>

            <p className="text-2xl mb-8">
              Move beyond burnout, overthinking and
              anxiety. Rewire subconscious patterns
              and remove limiting beliefs.
            </p>

            <a href="https://calendly.com/helen-ogorman/new-meeting?hide_event_type_details=1&hide_gdpr_banner=1"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block bg-deep text-white px-8 py-4 rounded-xl text-lg"
>
  Book a Free Consultation
</a>
          </div>
        </div>
      </section>

      <section className="bg-cream py-5 border-y">
  <div className="container-custom flex flex-col items-center gap-4 text-center">
    <p className="text-xs uppercase tracking-widest text-deep/70">
      Registered Practitioner
    </p>
    <img
      src="/NBFMP-green-logo-on-white-REGISTERED-768x361.webp"
      alt="NBFMP registered professional member logo"
      className="h-10 w-auto object-contain"
    />
  </div>
</section>

      <section className="py-20">
        <div className="container-custom grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-4xl mb-8 text-deep">
              How does online Solution Focused Hypnotherapy work?
            </h2>

            <p className="mb-6 text-lg">
              You may find yourself wanting to make changes in your life —
              from getting more exercise to overcoming a phobia.
            </p>

            <p className="mb-6 text-lg">
              Hypnotherapy works at the subconscious level, where negative 
              patterns have become your default operating system.
            </p>

            <p className="mb-6 text-lg">
              The result is greater creative flow, better emotional regulation
              and a renewed sense of clarity.
            </p>
            
            <p className="mb-6 text-lg">
              Online sessions mean you sit in the comfort of your own home, which helps
              anchor changes in your environment. We engage your imagination to challenge beliefs
              and change limiting habits and behaviours. The hard work is all done in your mind.
            </p>
            
          </div>

          <div>
            <h2 className="text-4xl mb-8 text-deep">
              How is this different from traditional therapy?
            </h2>

            <p className="mb-6 text-lg">
              Solution Focused Hypnotherapy looks at where you want to go,
              rather than repeatedly analysing the past.
            </p>

            <p className="mb-6 text-lg">
              Sessions combine modern neuroscience, psychotherapy and hypnosis
              to create practical forward movement.
            </p>
            <p className="text-lg">
              The focus is on building confidence, resilience and small practical shifts
              that support change in everyday life.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom grid md:grid-cols-2 gap-16 items-start">
          <div>
            <h2 className="text-4xl mb-10 text-deep">
              What to expect in an online hypnotherapy session
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl mb-3">A calm, confidential online conversation</h3>
                <p>We begin by talking through what's going well for you, we define your
                  inner strengths and create a vision of the life you want to live.</p>
              </div>

              <div>
                <h3 className="text-2xl mb-3">Understanding how your mind works</h3>
                <p>Helping you make sense of your experience without judgement.</p>
              </div>

              <div>
                <h3 className="text-2xl mb-3">Guided relaxation and hypnosis</h3>
                <p>You'll be guided into a calm, focused state similar to daydreaming.</p>
              </div>

              <div>
                <h3 className="text-2xl mb-3">Gradual, lasting change</h3>
                <p>Clients notice calmer thinking and more ease in day-to-day life.</p>
              </div>
              <div>
                <h3 className="text-2xl mb-3">A practical focus between sessions</h3>
                <p>
                Each session supports small, manageable changes that help you build
                confidence, resilience and a steadier relationship with your thoughts.
                </p>
</div>
            </div>
          </div>

          <div className="bg-cream p-8 rounded-2xl">
            <h2 className="text-4xl mb-8 text-deep">About Me</h2>

            <figure className="mb-8">
  <Image
    src="/helen.jpg"
    alt="Helen-OGorman-clinical-hypnotherapist-Mosaic-Hypnotherapy"
    width={320}
    height={400}
    className="rounded-2xl"
  />
  <figcaption className="mt-2 text-sm text-deep/70">
    Helen O&apos;Gorman, Clinical Hypnotherapist
  </figcaption>
</figure>

            <p className="mb-5 text-lg">
              I'm Helen O'Gorman, a clinical hypnotherapist specialising
              in enhancing creative performance and subconscious pattern change.
            </p>

            <p className="mb-5 text-lg">
              I'm a linguist and former teacher who worked in the corporate
              sector. I understand the stresses of  working under pressure - 
              in the classroom and beyond.
            </p>

            <p className="text-lg">
              Book for hypnotherapy sessions online in English, French and Spanish.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <h2 className="text-4xl mb-10 text-center text-deep">
            What Clients Say
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl">
              <p className="italic mb-4">
                "Working with Helen has been a game changer for my career."
              </p>
              <p>— Ben, UK</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <p className="italic mb-4">
                "At age 70, I finally feel free from anxiety."
              </p>
              <p>— B, France</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <p className="italic mb-4">
                "Extremely helpful and eye opening."
              </p>
              <p>— A happy client in Kathmandu</p>
            </div>

            <div className="bg-white p-6 rounded-xl">
              <p className="italic mb-4">
                "Helen made it feel so accessible."
              </p>
              <p>— Liverpool, UK</p>
            </div>
          </div>
        </div>
      </section>

      <section id="book" className="py-20 bg-white">
        <div className="container-custom max-w-3xl">
          <h2 className="text-4xl mb-10 text-deep">
            Rate Card
          </h2>

          <div className="space-y-5 text-xl">
            <div className="flex justify-between border-b pb-4">
              <span>Initial Consultation (50 minutes)</span>
              <span>FREE</span>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span>Hypnotherapy Session (60 minutes)</span>
              <span>£60</span>
            </div>

            <div className="flex justify-between border-b pb-4">
              <span>Stop Smoking (2 hour session)</span>
              <span>£100</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
