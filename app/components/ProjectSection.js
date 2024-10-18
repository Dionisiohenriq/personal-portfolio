export default function ProjectsSection() {
	return (
		<section id="projects" className="py-20">
			<div className="container mx-auto">
				<h2 className="text-3xl font-bold mb-8">My Projects</h2>
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
					{/* Add more detailed project cards here */}
					<div className="bg-white p-6 shadow-md rounded-lg">
						<h3 className="text-2xl font-bold mb-2">Project 1</h3>
						<p className="text-gray-700 mb-4">Description of Project 1</p>
						<a
							href="http://google.com"
							target="_blank"
							className="text-blue-500 underline"
						>
							View Project
						</a>
					</div>
					<div className="bg-white p-6 shadow-md rounded-lg">
						<h3 className="text-2xl font-bold mb-2">Project 1</h3>
						<p className="text-gray-700 mb-4">Description of Project 1</p>
						<a
							href="http://google.com"
							target="_blank"
							className="text-blue-500 underline"
						>
							View Project
						</a>
					</div>
					<div className="bg-white p-6 shadow-md rounded-lg">
						<h3 className="text-2xl font-bold mb-2">Project 1</h3>
						<p className="text-gray-700 mb-4">Description of Project 1</p>
						<a
							href="http://google.com"
							target="_blank"
							className="text-blue-500 underline"
						>
							View Project
						</a>
					</div>
				</div>
			</div>
		</section>
	);
}
