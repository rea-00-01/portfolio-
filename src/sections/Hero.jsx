import { profile } from "../data/portfolio";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-babyblue"
    >
      {/* Looping ambient cat video — see /public/videos/hero-cat-loop.mp4 */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="/videos/hero-cat-loop.mp4" type="video/mp4" />
      </video>

      {/* Subtle overall darkening so the video doesn't fight with the corner card */}
      <div className="absolute inset-0 bg-ink/10" />

      {/* Name card, anchored bottom-left with a blur backing so it stays readable
          over the moving water regardless of what's happening behind it. */}
      <div className="absolute bottom-8 left-6 md:bottom-12 md:left-16 z-10">
        <div className="bg-ivory/70 backdrop-blur-md rounded-card px-6 py-5 md:px-8 md:py-6 shadow-lg max-w-sm">
          <h1 className="text-3xl md:text-5xl font-display font-semibold text-ink">
            {profile.name}
          </h1>
          <p className="mt-2 text-sm md:text-base font-body text-ink-soft">
            {profile.role} — {profile.tagline}
          </p>
        </div>
      </div>
    </section>
  );
}
