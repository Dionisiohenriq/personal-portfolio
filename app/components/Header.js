import Link from "next/link";

export default function Header() {
	return (
		<header className="bg-blue-900 text-white py-4">
			<nav className="container mx-auto flex justify-between">
				<div className="text-2xl font-bold">
					<Link href="/">Henrique FullStack Developer</Link>
				</div>
				<div>
					<Link href="#projects" className="mr-4">
						Projects
					</Link>
					<Link href="#skills" className="mr-4">
						Skills
					</Link>
					<Link href="#profiledownload" className="mr-4"></Link>
					<Link href="#contact">Contact</Link>
				</div>
			</nav>
		</header>
	);
}
