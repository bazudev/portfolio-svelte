<script>
  import bigPicture from '$lib/assets/rimba.png'; // Your large image
</script>

<section id="home" class="min-h-screen bg-gradient-to-tr from-indigo-50 via-white to-indigo-100 flex items-center">
  <div class="container mx-auto max-w-7xl px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

    <!-- Left: Text + Timeline Experience -->
    <div class="space-y-10 max-w-xl">
      <h1 class="text-5xl font-extrabold text-indigo-900 leading-tight drop-shadow-md">
        Hi, I'm <span class="text-indigo-600">Bazudewa</span><br />
        Freelance Software Engineer
      </h1>
      
      <p class="text-lg text-indigo-700 ">
      Over 5 years of professional experience in software development.
      Passionate about cybersecurity and secure coding practices. Skilled in a wide range of modern technologies, focus on Backend development, and
      proficient in deploying scalable applications using containerization.
      </p>

      <section>
        <h3 class="text-2xl font-semibold text-indigo-900 mb-6">Experience</h3>
        <ol class="relative border-l-2 border-indigo-300 ml-4 space-y-10 text-indigo-700">

          <!-- Timeline item -->
          <li class="mb-10 ml-6">
            <span class="absolute -left-4 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold shadow-md">
              1
            </span>
            <time class="mb-1 text-sm font-semibold text-indigo-900">april 2025– present</time>
            <h4 class="text-lg font-semibold">Game Programer at <a href="https://slabgames.com/">SLAB Game</a> </h4>
            <p class="text-sm text-indigo-700 mt-1">Worked on Godot Engine , Roblox Script using lua.</p>
          </li>

          <li class="mb-10 ml-6">
            <span class="absolute -left-4 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold shadow-md">
              2
            </span>
            <time class="mb-1 text-sm font-semibold text-indigo-900">2021– present</time>
            <h4 class="text-lg font-semibold">Freelance Software Enginer</h4>
            <p class="text-sm text-indigo-700 mt-1">Delivering client projects ranging from web apps to automation tools. current tech TALL Stack </p>
          </li>

          <li class="ml-6">
            <span class="absolute -left-4 top-1.5 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white font-bold shadow-md">
              3
            </span>
            <time class="mb-1 text-sm font-semibold text-indigo-900">2020–2021</time>
            <h4 class="text-lg font-semibold">Full Stack Developer at <a href="https://primakara.ac.id/"> Primakara college</a></h4>
            <p class="text-sm text-indigo-700 mt-1"> focus on building web applications for internal company using the Laravel framework.</p>
          </li>
        </ol>
      </section>

    
    </div>

    <!-- Right: Big Picture -->
    <div class="flex flex-col justify-start items-center">
      <!-- svelte-ignore a11y_img_redundant_alt -->
      <img 
        src={bigPicture} 
        alt="Big Professional Image" 
        class="max-w-full object-cover max-h-[600px] hover:scale-105 transition-transform duration-300"
      />
  <a 
        href="#contact" 
        class="inline-block mt-6 px-8 py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 transition"
      >
        Hire Me
      </a>
    </div>

  </div>
</section>

