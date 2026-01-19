import { TechStack } from "@/components/tech-stack";


export default function AboutPage() {
    return (
      <section className="py-24 space-y-10" style={{ paddingTop: 'clamp(3rem, 8vw, 6rem)', paddingBottom: 'clamp(3rem, 8vw, 6rem)' }}>
        <h1 className="font-bold" style={{ fontSize: 'clamp(1.75rem, 4vw, 2.25rem)' }}>Services</h1>
        
        <TechStack />
        
      </section>
    );
  }