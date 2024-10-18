export default function ContactSection() {
	return (
		<section id="contact" className="py-20 bg-green-300">
			<div className="container mx-auto text-center">
				<h2 className="text-3xl font-bold mb-8">Contact Me</h2>
				<p className="text-gray-700 mb-8">
					Feel free to reach out for collaborations or just a friendly chat.
				</p>
				<form className="max-w-lg mx-auto">
					<input
						type="text"
						placeholder="Your Name"
						className="w-full p-3 mb-4 border rounded"
					/>
					<input
						type="email"
						placeholder="Your Email"
						className="w-full p-3 mb-4 border rounded"
					/>
					<textarea
						placeholder="Your Message"
						className="w-full p-3 mb-4 border rounded"
					></textarea>
					<button
						type="submit"
						className="bg-blue-500 text-white py-2 px-4 rounded"
					>
						Send Message
					</button>
				</form>
			</div>
		</section>
	);
}
