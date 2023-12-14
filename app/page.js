import HeroSection from "@/components/home/HeroSection";
import UserStory from "@/components/home/UserStory";

export default function Page({ items }) {
  return (
    <div className="container">
      <HeroSection />
      <UserStory />
    </div>
  );
}
