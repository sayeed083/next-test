import HomeBanner from "@/components/HomeBanner/HomeBanner";
import OurMission from "@/components/OurMission/OurMission";
import OurTeam from "@/components/OurTeam/OurTeam";


export default function Home() {
	return (
		<div>
			<HomeBanner></HomeBanner>
			<OurMission></OurMission>
			<OurTeam />
		</div>
	);
}
