import Navbar from "@/components/shared/navbar";
import HeroSection from "@/components/landing/hero-section";
import Footer from "@/components/shared/footer";
import FeaturesSection from "@/components/landing/features-section";
import TestimonialsSection from "@/components/landing/testimonials-section";
import PricingSection from "@/components/landing/pricing-section";
import CTASection from "@/components/landing/cta-section";


export default function HomePage() {
    return (
        <>
            <Navbar />
            <HeroSection />
            <FeaturesSection />
            <PricingSection />
            <TestimonialsSection />
            <CTASection />
            <Footer />
        </>
    );
}