import Head from "next/head";
import Header from "./components/Header";
import HomeSection from "./components/HomeSection";
import ProjectsSection from "./components/ProjectSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import SkillsSection from "./components/SkillsSection";
import ProfileDownload from "./components/ProfileDownload";

export default function Home() {
	return (
		<div>
			<Head>
				<title>Henriques Portfolio</title>
			</Head>
			<Header />
			<main>
				<HomeSection />
				<SkillsSection />
				<ProjectsSection />
				<ProfileDownload />
				<ContactSection />
			</main>
			<Footer />
		</div>
	);
}
