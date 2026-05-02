import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import PhotoSlideshow from "@/components/PhotoSlideshow";
import About from "@/components/About";
import Crisis from "@/components/Crisis";
import EventDetails from "@/components/EventDetails";
import SponsorsDisplay from "@/components/SponsorsDisplay";
import Sponsors from "@/components/Sponsors";
import Volunteer from "@/components/Volunteer";
import RecentActivities from "@/components/RecentActivities";
import Media from "@/components/Media";
import SocialLinks from "@/components/SocialLinks";
// import Organizers from "@/components/Organizers"; // commented out — to be integrated later
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        {/* 1. Hero — full viewport, countdown, CTAs */}
        <Hero />

        {/* 2. Impact stats bar */}
        <Stats />

        {/* 3. Kuakata photo slideshow — what we're fighting for */}
        <PhotoSlideshow />

        {/* 4. About the event + CleanKuakata initiative */}
        <About />

        {/* 5. The crisis — environmental data */}
        <Crisis />

        {/* 6. Event details — date, location, schedule */}
        <EventDetails />

        {/* 7. Confirmed sponsors — bold display */}
        <SponsorsDisplay />

        {/* 8. Sponsorship tiers — sell new sponsors */}
        <Sponsors />

        {/* 9. Volunteer registration */}
        <Volunteer />

        {/* 10. Blog, stories, gallery */}
        <RecentActivities />

        {/* 11. Press & media */}
        <Media />

        {/* 12. Social media links — follow the movement */}
        <SocialLinks />

        {/* Organizers section — commented out until confirmed
        <Organizers />
        */}
      </main>
      <Footer />
      {/* <WhatsAppButton /> */}
    </>
  );
}
