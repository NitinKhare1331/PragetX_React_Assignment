import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeroSection from '../components/heroSection/HeroSection'
import AutomationStepsSection from '../components/automationStepsSection/AutomationStepsSection'
import GrowthSection from '../components/growthSection/GrowthSection'
import WhyItWorksSection from '../components/whyItWorksSection/WhyItWorksSection'
import SkillsScrollSection from '../components/skillsScrollSection/SkillsScrollSection'
import VideoSection from '../components/videoSection/VideoSection'
import SuccessStorySection from '../components/successStorySection/SuccessStorySection'
import TestimonialSection from '../components/testimonialSection/TestimonialSection'
import CTASection from '../components/ctaSection/CtaSection'
import FooterSection from '../components/footerSection/FooterSection'
import ToolsSection from '../components/toolsSection/ToolsSection'

const Home = () => {
    return (
        <>
            <div className='overflow-x-hidden'>
                <section
                    className="w-full bg-white"
                    style={{
                        backgroundImage:
                            "radial-gradient(circle, rgba(15,23,42,0.09) 1.5px, transparent 1.5px)",
                        backgroundSize: "24px 24px",
                    }}
                >
                    <Navbar />
                    <HeroSection />
                </section>

                <AutomationStepsSection />

                <GrowthSection />

                <WhyItWorksSection />

                <SkillsScrollSection />

                <VideoSection />

                <ToolsSection />

                <SuccessStorySection />

                <TestimonialSection />

                <CTASection />

                <FooterSection />

            </div>

        </>
    )
}

export default Home