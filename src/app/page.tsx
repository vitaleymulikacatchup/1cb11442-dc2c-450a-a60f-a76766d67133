"use client";

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroSplit from '@/components/sections/hero/HeroSplit';
import SplitAbout from '@/components/sections/about/SplitAbout';
import FeatureCardOne from '@/components/sections/feature/FeatureCardOne';
import TestimonialCardOne from '@/components/sections/testimonial/TestimonialCardOne';
import ContactSplit from '@/components/sections/contact/ContactSplit';
import FooterLogoEmphasis from '@/components/sections/footer/FooterLogoEmphasis';
import { Lightbulb, CheckCircle, MessageCircle } from 'lucide-react';

const assetMap = [
  {"id":"hero-image","url":"https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Abstract green matrix code background with binary style."},
  {"id":"about-us-image","url":"https://images.pexels.com/photos/34332317/pexels-photo-34332317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"modern office workspace - Photo by Pew Nguyen"},
  {"id":"testimonial-1","url":"https://images.pexels.com/photos/34326362/pexels-photo-34326362.png?auto=compress&cs=tinysrgb&h=650&w=940","alt":"A cheerful woman organizing envelopes in a modern mailroom setting."},
  {"id":"testimonial-2","url":"https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Overhead view of a diverse team in a business meeting using laptops and tablets."},
  {"id":"testimonial-3","url":"https://images.pexels.com/photos/2422278/pexels-photo-2422278.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Confident businessman in modern office working on laptop with city view."},
  {"id":"testimonial-4","url":"https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&h=650&w=940","alt":"Diverse professionals unite for teamwork around a wooden table with laptops and documents."}
];

export default function Page() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="sharp"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { "name": "Home", "id": "home" },
            { "name": "About", "id": "about" },
            { "name": "Services", "id": "services" },
            { "name": "Contact", "id": "contact" }
          ]}
          brandName="Webild"
        />
      </div>

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <HeroSplit
            title="Build Better Solutions"
            description="Creating innovative software for modern businesses."
            imagePosition="right"
            imageSrc={assetMap.find(a => a.id === 'hero-image')?.url ?? '/public/images/placeholder.webp'}
            buttons={[
              { "text": "Get Started", "href": "about" },
              { "text": "Contact Us", "href": "contact" }
            ]}
          />
        </div>
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <SplitAbout
            title="About Us"
            description="We are a team dedicated to providing top-notch software solutions."
            bulletPoints={[
              { "title": "Innovation", "description": "Leading in tech innovations.", "icon": Lightbulb },
              { "title": "Quality", "description": "Commitment to excellence.", "icon": CheckCircle },
              { "title": "Support", "description": "24/7 customer assistance.", "icon": MessageCircle }
            ]}
            imageSrc={assetMap.find(a => a.id === 'about-us-image')?.url ?? '/public/images/placeholder.webp'}
          />
        </div>
      </div>

      <div id="feature" data-section="feature" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FeatureCardOne
            title="Our Features"
            description="Explore the capabilities that set us apart."
            features={[
              {
                "title": "Cloud Computing",
                "description": "Scalable solutions powered by the cloud.",
                "imageSrc": assetMap.find(a => a.id === 'hero-image')?.url ?? '/public/images/placeholder.webp'
              },
              {
                "title": "Data Analytics",
                "description": "Gain insights with our analytics tools.",
                "imageSrc": assetMap.find(a => a.id === 'about-us-image')?.url ?? '/public/images/placeholder.webp'
              }
            ]}
          />
        </div>
      </div>

      <div id="testimonials" data-section="testimonials" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <TestimonialCardOne
            title="What Our Clients Say"
            description="Real feedback from our esteemed clients."
            testimonials={[
              {
                "id": "1",
                "name": "Sarah Johnson",
                "role": "CEO",
                "company": "TechCorp",
                "rating": 5,
                "imageSrc": assetMap.find(a => a.id === 'testimonial-1')?.url ?? '/public/images/placeholder.webp'
              },
              {
                "id": "2",
                "name": "Michael Chen",
                "role": "CTO",
                "company": "InnovateLab",
                "rating": 5,
                "imageSrc": assetMap.find(a => a.id === 'testimonial-2')?.url ?? '/public/images/placeholder.webp'
              },
              {
                "id": "3",
                "name": "Emily Rodriguez",
                "role": "Marketing Director",
                "company": "GrowthCo",
                "rating": 5,
                "imageSrc": assetMap.find(a => a.id === 'testimonial-3')?.url ?? '/public/images/placeholder.webp'
              },
              {
                "id": "4",
                "name": "David Kim",
                "role": "Product Manager",
                "company": "StartupXYZ",
                "rating": 5,
                "imageSrc": assetMap.find(a => a.id === 'testimonial-4')?.url ?? '/public/images/placeholder.webp'
              }
            ]}
          />
        </div>
      </div>

      <div id="contact" data-section="contact" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <ContactSplit
            tag="Contact"
            title="Get in Touch"
            description="We’re here to help you with any inquiries or support you need."
            imageSrc={assetMap.find(a => a.id === 'about-us-image')?.url ?? '/public/images/placeholder.webp'}
          />
        </div>
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <div className="mx-auto px-4 md:px-6">
          <FooterLogoEmphasis
            columns={[
              {
                "items": [
                  { "label": "Features", "href": "features" },
                  { "label": "About", "href": "about" }
                ]
              },
              {
                "items": [
                  { "label": "Services", "href": "services" },
                  { "label": "Contact", "href": "contact" }
                ]
              }
            ]}
            logoText="Webild"
          />
        </div>
      </div>
    </ThemeProvider>
  );
}
