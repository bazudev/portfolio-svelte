<script lang="ts">
	import Footer from "$lib/components/layout/Footer.svelte";
</script>

<main class="container mx-auto max-w-6xl px-6 py-12">
	<div class="content">
		<section class="flex flex-col items-center text-center px-4 py-20">
			<!-- Heading -->
			<h1 class="text-4xl md:text-5xl font-bold leading-tight mb-4">
				Custom Software Solutions <br /> Built with Precision
			</h1>

			<!-- Subheading -->
			<p class="max-w-2xl text-lg text-gray-600 mb-10">
				Emerging software house specializing in modern web applications and
				digital solutions. I transform ideas into powerful, scalable software
				that drives business growth and user engagement.
			</p>

			<!-- Features -->
			<div class="flex flex-wrap justify-center gap-8 text-sm text-gray-700">
				<!-- Full-Stack Development -->
				<div class="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5 text-teal-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M16 18l6-6-6-6M8 6l-6 6 6 6"
						/>
					</svg>
					<span>Full-Stack Development</span>
				</div>

				<!-- Modern Tech Stack -->
				<div class="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5 text-teal-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M12 2l9 4.5v11L12 22 3 17.5v-11L12 2z"
						/>
					</svg>
					<span>Modern Tech Stack</span>
				</div>

				<!-- Quality Focused -->
				<div class="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						class="w-5 h-5 text-teal-600"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M9 12l2 2l4-4m6 2a9 9 0 11-18 0a9 9 0 0118 0z"
						/>
					</svg>
					<span>Quality Focused</span>
				</div>
			</div>
		</section>
		<section class="flex flex-col items-center text-center px-4 py-16">
			<!-- Title -->
			<h2 class="text-2xl md:text-3xl font-bold mb-4">
				Featured Projects & Capabilities
			</h2>

			<!-- Description -->
			<p class="max-w-3xl text-gray-600 text-base md:text-lg">
				Showcasing technical expertise through real-world applications. Each
				project demonstrates different aspects of modern software development
				and problem-solving capabilities.
			</p>
		</section>
		<section class="px-4 py-10">
			<div
				class="max-w-5xl mx-auto bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition overflow-hidden"
			>
				<div class="flex flex-col md:grid md:grid-cols-2">
					<!-- Left Side (Image/Preview) -->
					<div
						class="relative bg-gradient-to-br from-cyan-200 to-blue-200 min-h-[200px]"
					>
						<!-- Top Badge -->
						<span
							class="absolute top-3 left-3 bg-teal-600 text-white text-xs font-semibold px-3 py-1 rounded"
						>
							Featured Project
						</span>

						<!-- Bottom Badge -->
						<span
							class="absolute bottom-3 right-3 bg-white text-gray-700 text-sm px-3 py-1 rounded-full shadow flex items-center gap-1"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								class="w-4 h-4 text-yellow-500"
								fill="currentColor"
								viewBox="0 0 20 20"
							>
								<path
									d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.95a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.37 2.449a1 1 0 00-.364 1.118l1.287 3.951c.3.92-.755 1.688-1.54 1.118l-3.37-2.449a1 1 0 00-1.175 0l-3.37 2.449c-.785.57-1.84-.197-1.54-1.118l1.287-3.951a1 1 0 00-.364-1.118L2.06 9.377c-.783-.57-.38-1.81.588-1.81h4.162a1 1 0 00.95-.69l1.286-3.95z"
								/>
							</svg>
							Best Practice
						</span>
					</div>

					<!-- Right Side (Details) -->
					<div class="p-6 flex flex-col justify-between">
						<!-- Title + Link -->
						<div class="flex justify-between items-start mb-3">
							<h3 class="text-lg md:text-xl font-semibold text-gray-800">
								TaskFlow Pro – Project Management Platform
							</h3>
							<!-- External Link -->
							<a
								href="#"
								target="_blank"
								rel="noopener noreferrer"
								class="text-gray-500 hover:text-gray-700"
							>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-5 h-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M10 6h8m0 0v8m0-8L9 15m-3 3h12a2 2 0 002-2V6a2 2 0 00-2-2H9a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
							</a>
						</div>

						<!-- Meta Info -->
						<div class="flex items-center gap-6 text-sm text-gray-600 mb-4">
							<div class="flex items-center gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M8 7V3m8 4V3m-9 8h10m-11 5h12M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								2024
							</div>
							<div class="flex items-center gap-1">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="w-4 h-4"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M9 17v-2h6v2m-7-8h8M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
									/>
								</svg>
								Full-Stack Application
							</div>
						</div>

						<!-- Description -->
						<p class="text-gray-700 text-sm md:text-base mb-6">
							Comprehensive project management solution featuring real-time
							collaboration, advanced task tracking, team analytics, and
							automated workflow management. Built with modern architecture
							patterns including microservices, real-time updates, and
							responsive design for optimal user experience.
						</p>

						<!-- Tech Stack -->
						<div class="flex flex-wrap gap-2">
							<span
								class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
								>React</span
							>
							<span
								class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
								>Node.js</span
							>
							<span
								class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
								>PostgreSQL</span
							>
							<span
								class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
								>WebSocket</span
							>
							<span
								class="bg-blue-600 text-white text-xs px-3 py-1 rounded-full"
								>Docker</span
							>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="py-12 bg-gray-50">
			<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div class="grid gap-6 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
					<!-- Card 1 -->
					<div class="bg-white rounded-2xl shadow p-6 flex flex-col">
						<div class="bg-indigo-100 h-48 rounded-lg relative">
							<span
								class="absolute top-2 right-2 text-xs bg-gray-200 px-2 py-1 rounded-full"
								>E-Commerce</span
							>
						</div>
						<h3
							class="mt-4 text-lg font-semibold flex justify-between items-center"
						>
							ShopSmart - E-Commerce Platform
							<a href="#" class="text-blue-500 hover:text-blue-700">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 3h7v7m0 0L10 21l-7-7L17 3z"
									/>
								</svg>
							</a>
						</h3>
						<p class="mt-2 text-gray-500 text-sm flex items-center gap-2">
							<span>📅 2024</span>
							<span>↗ Full-Stack</span>
						</p>
						<p class="mt-2 text-gray-600 text-sm">
							Complete e-commerce solution with payment processing and inventory
							management
						</p>
						<div class="mt-4 flex flex-wrap gap-2">
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>Next.js</span
							>
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>Stripe</span
							>
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>MongoDB</span
							>
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>Tailwind</span
							>
						</div>
					</div>

					<!-- Card 2 -->
					<div class="bg-white rounded-2xl shadow p-6 flex flex-col">
						<div class="bg-indigo-100 h-48 rounded-lg relative">
							<span
								class="absolute top-2 right-2 text-xs bg-gray-200 px-2 py-1 rounded-full"
								>Analytics</span
							>
						</div>
						<h3
							class="mt-4 text-lg font-semibold flex justify-between items-center"
						>
							DataViz Dashboard
							<a href="#" class="text-blue-500 hover:text-blue-700">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 3h7v7m0 0L10 21l-7-7L17 3z"
									/>
								</svg>
							</a>
						</h3>
						<p class="mt-2 text-gray-500 text-sm flex items-center gap-2">
							<span>📅 2024</span>
							<span>↗ Real-time Data</span>
						</p>
						<p class="mt-2 text-gray-600 text-sm">
							Real-time analytics dashboard with interactive data visualization
						</p>
						<div class="mt-4 flex flex-wrap gap-2">
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>React</span
							>
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>D3.js</span
							>
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>Express</span
							>
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>Redis</span
							>
						</div>
					</div>

					<!-- Card 3 -->
					<div class="bg-white rounded-2xl shadow p-6 flex flex-col">
						<div class="bg-indigo-100 h-48 rounded-lg relative">
							<span
								class="absolute top-2 right-2 text-xs bg-gray-200 px-2 py-1 rounded-full"
								>Social</span
							>
						</div>
						<h3
							class="mt-4 text-lg font-semibold flex justify-between items-center"
						>
							ConnectHub - Social Platform
							<a href="#" class="text-blue-500 hover:text-blue-700">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="h-5 w-5"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
								>
									<path
										stroke-linecap="round"
										stroke-linejoin="round"
										stroke-width="2"
										d="M14 3h7v7m0 0L10 21l-7-7L17 3z"
									/>
								</svg>
							</a>
						</h3>
						<p class="mt-2 text-gray-500 text-sm flex items-center gap-2">
							<span>📅 2023</span>
							<span>↗ Real-time</span>
						</p>
						<p class="mt-2 text-gray-600 text-sm">
							Social networking platform with real-time messaging and community
							features
						</p>
						<div class="mt-4 flex flex-wrap gap-2">
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>Vue.js</span
							>
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>Socket.io</span
							>
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>MySQL</span
							>
							<span class="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs"
								>AWS S3</span
							>
						</div>
					</div>
				</div>
			</div>
		</section>

		<!-- Contact Section -->
		<section class="bg-gray-50 py-16">
			<div class="max-w-3xl mx-auto text-center px-4">
				<h2 class="text-3xl font-bold text-gray-800 mb-4">
					Let's Build Something Amazing Together
				</h2>
				<p class="text-gray-600 mb-8">
					Ready to bring your ideas to life? I specialize in creating custom
					software solutions that solve real problems and deliver exceptional
					user experiences.
				</p>

				<div class="bg-white shadow-md rounded-lg p-6 inline-block">
					<h3 class="text-lg font-semibold text-gray-700 mb-4">Get In Touch</h3>
					<div class="flex items-center justify-center space-x-3 mb-2">
						<!-- Email Icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-teal-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M16 12H8m0 0l-4-4m4 4l4 4m0-4h8m0 0l4-4m-4 4l-4 4"
							/>
						</svg>
						<span class="text-gray-700">hello@yoursoftwarehouse.com</span>
					</div>
					<div class="flex items-center justify-center space-x-3">
						<!-- Phone Icon -->
						<svg
							xmlns="http://www.w3.org/2000/svg"
							class="h-5 w-5 text-teal-600"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								stroke-linecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								d="M3 5h2l.4 2M7 7h2m1 1h2l1 1h2l2-2m-3 4h2m1 1h2"
							/>
						</svg>
						<span class="text-gray-700">+1 (555) 123-4567</span>
					</div>
				</div>
			</div>
		</section>
	</div>
</main>

<!-- Footer Section -->
<footer class="bg-gray-100 py-6">
	<div class="max-w-3xl mx-auto text-center px-4 text-gray-500 text-sm">
		<p>
			Crafting innovative software solutions with modern technologies and best
			practices.
		</p>
		<p class="mt-2">
			© 2024 Your Software House. Building the future, one project at a time.
		</p>
	</div>
</footer>
