import { Hero } from "@/components/landing/hero";
import AboutSection from "@/components/landing/AboutSection";
import FeaturesSection from "@/components/landing/FeaturesSection";

export default function HomePage() {
  return (
<<<<<<< HEAD
    <main className="bg-background text-foreground" style={{ fontFamily: 'Inter, Arial, sans-serif' }}>
      {/* Inter font for this page only */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap');
      `}</style>
      <Hero
        title="Powerful, Effortless Coding Events."
        subtitle="Host or join programming contests, assessments, and challenges with a modern, reliable platform."
        actions={[
          {
            label: "Join a Test",
            href: "/join",
            variant: "outline"
          }
        ]}
        titleClassName="text-5xl md:text-6xl font-extrabold"
        subtitleClassName="text-lg md:text-xl max-w-[600px] text-muted-foreground"
        actionsClassName="mt-8"
      />
      <div className="h-4" />
      <AboutSection />
      <FeaturesSection />
      <div className="h-20" />
      <div className="mt-12 flex flex-col items-center text-muted-foreground text-sm pb-8 px-4">
        <span>
          Made with <span className="text-red-500">❤️</span> by SOSC
=======
    <div className="h-screen bg-background flex items-center pt-12">
      {/* Main Content */}
      <main className="flex flex-col items-center px-4  py-6 relative w-full h-8/12">
        <div className="absolute right-8 flex items-center gap-1 text-sm text-foreground cursor-pointer">
          <LogOut size={20} />
          Logout
        </div>
        <h1
          className="self-start text-5xl font-extrabold text-foreground relative inline-block"
        >
          LETS GET STARTED
          <div className="mt-1 w-36 h-1 rounded-sm bg-primary" />
        </h1>

        {/* Buttons */}
        <div className="flex gap-40 mt-24">
          <Link
            href="/admin"
            className="w-60 h-40 border-4 rounded-2xl flex flex-col items-center justify-start border-primary shadow-[0_8px_16px_rgba(255,255,255,0.24)] bg-primary/10"
          >
            <div className="w-16 h-16 bg-contain bg-no-repeat bg-center mb-2" />
            <span className="mt-[-0.75rem] text-foreground font-bold text-2xl">
              HOST
            </span>
          </Link>

          <Link
            href="/join"
            className="w-60 h-40 border-4 rounded-2xl flex flex-col items-center justify-start border-primary shadow-[0_8px_16px_rgba(255,255,255,0.25)] bg-primary/10"
          >
            <div className="w-16 h-16 bg-contain bg-no-repeat bg-center mb-2" />
            <span className="mt-[-0.75rem] text-foreground font-bold text-2xl text-center">
              JOIN A TEST
            </span>
          </Link>
        </div>

        {/* Bottom Center Footer */}
        <div className="mt-12 flex flex-col items-center text-muted-foreground text-sm">
          <div className="w-32 h-1 rounded-full bg-primary mb-8" />
          <span className="text-foreground">
            Made with <span className="text-destructive">❤️</span> by <b>SOSC</b>
>>>>>>> 3e3c614ad57302e73404879f7ae7dca43e78ca9a
          </span>
        </div>
    </main>
  );
}
