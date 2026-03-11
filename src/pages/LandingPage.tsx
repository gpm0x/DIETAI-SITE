import Header from '../components/Header';
import Hero from '../components/Hero';
import HowItWorks from '../components/HowItWorks';
import Differentials from '../components/Differentials';
import Testimonials from '../components/Testimonials';
import Benefits from '../components/Benefits';
import Educational from '../components/Educational';
import VideoShowcase from '../components/VideoShowcase';
import FAQ from '../components/FAQ';
import CTA from '../components/CTA';
import Footer from '../components/Footer';

export default function LandingPage() {
    return (
        <div className="min-h-screen bg-white font-inter">
            <Header />
            <main>
                <Hero />
                <HowItWorks />
                <VideoShowcase />
                <Differentials />
                <Testimonials />
                <Educational />
                <Benefits />
                <FAQ />
                <CTA />
            </main>
            <Footer />
        </div>
    );
}
