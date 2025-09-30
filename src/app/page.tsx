import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import HeroSection from '@/components/sections/hero';
import ServicesSection from '@/components/sections/services';
import MetricsSection from '@/components/sections/metrics';
import PortfolioSection from '@/components/sections/portfolio';
import WorkflowVisualizerSection from '@/components/sections/workflow-visualizer';
import ContactSection from '@/components/sections/contact';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <MetricsSection />
        <PortfolioSection />
        <WorkflowVisualizerSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
