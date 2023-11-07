import Landing from "@/components/containers/landing/Landing.";
import LandingLayout from "@/layouts/LandingLayout";

export default function Home() {
  return (
    <main>
      <Landing />
    </main>
  );
}

Home.Layout = LandingLayout;
