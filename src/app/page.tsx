import { Closing } from "@/components/Closing";
import { FindYourFormula } from "@/components/FindYourFormula";
import { Experience } from "@/components/home/Experience";
import { Hero } from "@/components/home/Hero";
import { Lineup } from "@/components/home/Lineup";
import { MeetArtist } from "@/components/home/MeetArtist";
import { SetlistSpread } from "@/components/home/SetlistSpread";
import { VisitLab } from "@/components/home/VisitLab";
import { Voices } from "@/components/Voices";

export default function Home() {
  return (
    <>
      <Hero />
      <SetlistSpread />
      <FindYourFormula />
      <MeetArtist />
      <Lineup />
      <Experience />
      <Voices />
      <VisitLab />
      <Closing />
    </>
  );
}
