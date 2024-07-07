import EmailSection from "@/components/EmailSection";
import FeaturesSection from "@/components/FeaturesSection";
import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import TutorialSection from "@/components/TutorialSection";
import Image from "next/image";

export default function Home() {
  const tutorial = [{
    image:"/tutorial.png",
    heading:"1. Create beautiful email newsletters",
    subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit augue turpis etiam felis aliquam u.",
    firstPointImg:"https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/61819699b67a2c0948dcdef8_home-perk-01-applay-x-template.svg",
    firstPointHeading:"Drag-and-drop builder",
    firstPointSubHead:"Odio pellentesque diam volutpat commodolo sed egestas egestas fringilla phasellus",
    secondPointImg:"https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/6181969935b63c7bfad6685d_home-perk-02-applay-x-template.svg",
    secondPointHeading:"Pre made templates",
    secondPointSubHead:"Senectus et netus et malesuada pellentesque eu tincidunt tortor aliquam nulla facilisi."
  },
  {
    inverted:true,
    image:"/tutorial2.png",
    heading:"2. Send it to your email audience",
    subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit augue turpis etiam felis aliquam u.",
    firstPointImg:"https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/618196991957736761ef4215_home-perk-03-applay-x-template.svg",
    firstPointHeading:"Delivery optimization",
    firstPointSubHead:"Odio pellentesque diam volutpat commodolo sed egestas egestas fringilla phasellus",
    secondPointImg:"https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/61819699fc84e783ee4bffc8_home-perk-04-applay-x-template.svg",
    secondPointHeading:"Advanced A/B testing",
    secondPointSubHead:"Senectus et netus et malesuada pellentesque eu tincidunt tortor aliquam nulla facilisi."
  },
  {
    image:"/tutorial3.png",
    heading:"3. Measure email campaign results",
    subHeading:"Lorem ipsum dolor sit amet, consectetur adipiscing elit turpis velit augue turpis etiam felis aliquam u.",
    firstPointImg:"https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/618196993ebc8958b57ca85d_home-perk-05-applay-x-template.svg",
    firstPointHeading:"Granular reports",
    firstPointSubHead:"Odio pellentesque diam volutpat commodolo sed egestas egestas fringilla phasellus",
    secondPointImg:"https://assets-global.website-files.com/61800161ed9edf6bdd5c6c4d/61819699466df851b9ba41d3_home-perk-06-applay-x-template.svg",
    secondPointHeading:"AI-based optimizations",
    secondPointSubHead:"Senectus et netus et malesuada pellentesque eu tincidunt tortor aliquam nulla facilisi."
  }
]
  return (
    <div className="min-h-screen flex flex-col items-center ">
      <Navbar />
      <HeroSection />
      <TutorialSection data={tutorial[0]}/>
      <TutorialSection data={tutorial[1]} />
      <TutorialSection data={tutorial[2]}/>
      <EmailSection />
      <FeaturesSection />
    </div>
  );
}
