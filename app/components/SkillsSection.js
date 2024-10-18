export default function SkillsSection() {
	return (
		<section id="skills" className="py-20 bg-green-700">
			<div className="container max-auto text-center">
				<h2 className="text-3xl font-bold mb-8">Skills</h2>
				<div className="flex flex-wrap justify-center">
					<div className="w-1/2 sm:w-1/3 lg:w-1/4 p-4">
						<div className="bg-gray-400 p-6 shadow-md rounded-lg">
							<h3 className="text-xl font-bold mb-2">JavaScript</h3>
							<p className="text-gray-700">Expert in ES6+, React and Node.js</p>
						</div>
						<div className="bg-white p-6 shadow-md rounded-lg">
							<h3 className="text-xl font-bold mb-2">.NET</h3>
							<p className="text-gray-700">Expert in ES6+, React and Node.js</p>
						</div>
						<div className="bg-white p-6 shadow-md rounded-lg">
							<h3 className="text-xl font-bold mb-2">Python</h3>
							<p className="text-gray-700">Expert in ES6+, React and Node.js</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
