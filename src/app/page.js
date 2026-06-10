import Banner from "@/components/homepage/Banner";
import FeaturesSection from "@/components/homepage/FeaturesSection";
import JobGrid from "@/components/homepage/JobsGrid";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <JobGrid />
      <FeaturesSection />
    </div>
  );
}
