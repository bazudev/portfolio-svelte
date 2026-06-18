<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  const gameProjects = [
    {
      title: "Boat Game (Commercial Prototype)",
      badge: "Lead Programmer",
      badgeColor: "#93c5fd",
      engine: "Unity Engine 6",
      teamSize: "Commercial Prototype",
      year: "2026",
      featured: true,
      description: "A time-based boat racing game where players compete to complete courses as quickly as possible while navigating dynamic water environments and checkpoint challenges.",
      responsibilities: [
        "Lead Programmer | Unity, C#"
      ],
      highlights: [
        "Implemented custom water shaders and buoyancy simulation for dynamic boat behavior.",
        "Developed race course systems, checkpoints, and player progression mechanics.",
        "Designed and implemented core gameplay mechanics and supporting game systems.",
        "Established gameplay architecture and technical foundations for the prototype.",
        "Led gameplay feature development and technical decision-making throughout the project."
      ],
      galleryImages: [
        '/boat/Screenshot 2026-06-18 205950.png',
        '/boat/Screenshot 2026-06-18 210000.png',
        '/boat/Screenshot 2026-06-18 210007.png',
        '/boat/Screenshot 2026-06-18 210047.png',
        '/boat/Screenshot 2026-06-18 210120.png',
      ],
    },
    {
      title: "Metro Runner",
      badge: "Gameplay Programmer",
      badgeColor: "#86efac",
      engine: "Godot Engine 3",
      teamSize: "Slabgame",
      year: "2024",
      featured: false,
      description: "A casual arcade game where players navigate through busy environments, avoid obstacles and enemies, collect rewards, and survive for as long as possible.",
      responsibilities: [
        "Gameplay Programmer"
      ],
      highlights: [
        "Implemented AI behavior and gameplay interactions for enemy snail characters.",
        "Designed and implemented character abilities using GDScript in Godot.",
        "Developed gameplay systems supporting player actions and enemy interactions."
      ],
      galleryImages: [
        '/metro-runner/Screenshot 2026-06-18 204251.png',
        '/metro-runner/Screenshot 2026-06-18 204327.png',
        '/metro-runner/Screenshot 2026-06-18 204338.png',
        '/metro-runner/Screenshot 2026-06-18 211308.png',
        '/metro-runner/Screenshot 2026-06-18 211316.png',
        '/metro-runner/Screenshot 2026-06-18 211332.png',
      ],
      link: "https://play.google.com/store/apps/details?id=com.slabgames.metrorunner&hl=id"
    },
    {
      title: "Cheerleader Simulator",
      badge: "Programmer",
      badgeColor: "#fde68a",
      engine: "Roblox Studio",
      teamSize: "Team Project",
      year: "2025",
      featured: false,
      description: "A Roblox dance and clicking game where players perform activities, improve their cheerleading skills, earn rewards, and progress through various gameplay challenges.",
      responsibilities: [
        "Programmer"
      ],
      highlights: [
        "Developed gameplay mechanics using Lua within the Roblox engine.",
        "Implemented gameplay systems and player interactions using the Knit framework.",
        "Utilized Rojo for project structure, version control workflow, and development pipeline integration.",
        "Designed and implemented game features to support player progression and engagement."
      ],
      galleryImages: [
        '/cheerleader/20250625.png',
        '/cheerleader/20250702.png',
        '/cheerleader/Screenshot 2025-06-07 123627.png',
        '/cheerleader/Screenshot 2025-06-13 155116.png',
        '/cheerleader/Screenshot 2025-06-18 213136.png',
        '/cheerleader/Screenshot 2025-06-26 231240.png',
      ],
    },
    {
      title: "FisBud (Education Game)",
      badge: "Gameplay Programmer",
      badgeColor: "var(--accent)",
      engine: "Godot 4",
      teamSize: "Team Project",
      year: "2025",
      featured: false,
      description: "An educational physics game that helps students learn scientific concepts through interactive simulations, visualizations, quizzes, and adaptive learning mechanics.",
      responsibilities: [
        "Gameplay Programmer"
      ],
      highlights: [
        "Designed and implemented educational gameplay mechanics based on physics concepts.",
        "Developed interactive visualizations to demonstrate fundamental physics laws and principles.",
        "Built quiz systems to support learning progression and player assessment.",
        "Implemented fuzzy logic algorithms to drive game behavior and adaptive gameplay elements.",
        "Developed gameplay systems and user interactions using Godot and Gdscript."
      ],
      galleryImages: [
        '/fisbud/Screenshot 2026-06-18 211308.png',
        '/fisbud/Screenshot 2026-06-18 211316.png',
        '/fisbud/Screenshot 2026-06-18 211332.png',
      ],
    },
  ];

  let selectedProject = null;

  function openModal(project) {
    selectedProject = project;
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    selectedProject = null;
    document.body.classList.remove('modal-open');
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  function handleKey(e) {
    if (e.key === 'Escape' && selectedProject) closeModal();
  }

  onMount(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.classList.remove('modal-open');
    };
  });

  const featured = gameProjects.find((p) => p.featured);
  const rest = gameProjects.filter((p) => !p.featured);
</script>

<!-- ────────────────────────────────────────────────────── -->
<!--  SECTION                                               -->
<!-- ────────────────────────────────────────────────────── -->
<section id="projects" style="background: var(--bg); padding: 7rem 0;">
  <div class="container mx-auto max-w-6xl px-6">

    <div class="mb-14">
      <div class="flex items-center gap-3 mb-3">
        <span style="width:2px;height:28px;background:var(--accent);border-radius:2px;display:block;"></span>
        <span class="text-xs font-bold tracking-widest uppercase" style="color:var(--accent);">Commercial Work</span>
      </div>
      <h2 class="text-4xl font-black" style="color:var(--text);">Game Projects</h2>
      <p class="mt-3 text-base max-w-xl" style="color:var(--text-muted);">
        Production games shipped for real clients and studios. Click any project to see details.
      </p>
    </div>

    <!-- Featured (Boat Game) -->
    {#if featured}
      <button
        class="w-full text-left rounded-2xl overflow-hidden mb-8 transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl group cursor-pointer"
        style="background:var(--card); border:1px solid var(--border-hi); position:relative; outline:none;"
        on:click={() => openModal(featured)}
        aria-label="Open {featured.title} details"
      >
        <div style="height:3px; background:linear-gradient(90deg, var(--accent) 0%, var(--lavender) 50%, var(--warm) 100%);"></div>

        <div class="flex flex-col lg:flex-row">
          <!-- Thumbnail panel -->
          <div class="lg:w-2/5 min-h-[240px] relative flex items-center justify-center overflow-hidden bg-black">
            {#if featured.galleryImages && featured.galleryImages.length > 0}
              <img src={featured.galleryImages[0]} alt="{featured.title} thumbnail" class="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-105" loading="lazy" />
            {/if}
            <!-- Badge -->
            <div class="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold z-10"
              style="background:rgba(255,255,255,0.85); color:var(--text); border:1px solid var(--border);">
              🎮 {featured.badge}
            </div>
            <!-- "View details" hint on hover -->
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
              style="background: rgba(255,255,255,0.5); backdrop-filter: blur(2px);">
              <span class="text-sm font-bold" style="color:var(--text);">View Details →</span>
            </div>
          </div>

          <!-- Details -->
          <div class="flex-1 p-8 space-y-5">
            <div>
              <div class="flex flex-wrap items-center gap-3 mb-2">
                <h3 class="text-2xl font-black" style="color:var(--text);">{featured.title}</h3>
                <span class="px-2.5 py-1 rounded-md text-xs font-semibold"
                  style="background:rgba(147,197,253,0.10); color:#93c5fd; border:1px solid rgba(147,197,253,0.22);">
                  {featured.engine}
                </span>
                <span class="text-xs" style="color:var(--text-muted);">{featured.teamSize} &middot; {featured.year}</span>
              </div>
              <p style="color:var(--text-muted);" class="leading-relaxed text-sm">{featured.description}</p>
            </div>
            <div class="space-y-5">
              <div>
                <p class="text-xs font-bold tracking-widest uppercase mb-2" style="color:var(--accent);">Role / Responsibilities</p>
                <div class="flex flex-wrap gap-2">
                  {#each featured.responsibilities as r}
                    <span class="px-3 py-1 rounded-md text-xs font-semibold" style="background:var(--surface); color:var(--text); border:1px solid var(--border);">{r}</span>
                  {/each}
                </div>
              </div>
              <div>
                <p class="text-xs font-bold tracking-widest uppercase mb-3" style="color:var(--green);">What I Did</p>
                <ul class="space-y-2">
                  {#each featured.highlights as h}
                    <li class="flex items-start gap-2 text-sm" style="color:var(--text-muted);">
                      <span class="mt-1.5" style="width:5px;height:5px;border-radius:50%;background:var(--green);flex-shrink:0;"></span>{h}
                    </li>
                  {/each}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </button>
    {/if}

    <!-- Other Projects -->
    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each rest as project}
        <button
          class="text-left rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
          style="background:var(--card); border:1px solid var(--border); outline:none; width:100%;"
          on:click={() => openModal(project)}
          aria-label="Open {project.title} details"
        >
          <div class="h-40 flex items-center justify-center relative overflow-hidden bg-black" style="border-bottom: 1px solid var(--border);">
            {#if project.galleryImages && project.galleryImages.length > 0}
              <img src={project.galleryImages[0]} alt="{project.title} thumbnail" class="absolute inset-0 w-full h-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-110" loading="lazy" />
            {/if}
            <div class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold z-10"
              style="background:rgba(255,255,255,0.85); color:var(--text); border:1px solid var(--border);">
              {project.badge}
            </div>
            <div class="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style="background: rgba(255,255,255,0.5); backdrop-filter: blur(2px);">
              <span class="text-xs font-bold px-3 py-1.5 rounded-full"
                style="background:#ffffff; color:var(--text); border:1px solid var(--border); box-shadow:0 2px 5px rgba(0,0,0,0.05);">
                View Details →
              </span>
            </div>
          </div>

          <div class="p-5 space-y-3">
            <div>
              <h3 class="font-bold text-base mb-1" style="color:var(--text);">{project.title}</h3>
              <div class="flex gap-2 flex-wrap">
                <span class="text-xs px-2 py-0.5 rounded" style="background:var(--surface); color:var(--text-muted);">{project.engine}</span>
                <span class="text-xs" style="color:var(--text-muted);">{project.year}</span>
              </div>
            </div>
            <p class="text-xs leading-relaxed" style="color:var(--text-muted);">{project.description}</p>
          </div>
        </button>
      {/each}
    </div>

  </div>
</section>

<!-- ────────────────────────────────────────────────────── -->
<!--  MODAL                                                 -->
<!-- ────────────────────────────────────────────────────── -->
{#if selectedProject}
  <!-- Backdrop -->
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
    style="background: rgba(255,255,255,0.85); backdrop-filter: blur(8px);"
    on:click={handleBackdropClick}
    transition:fade={{ duration: 200 }}
    role="dialog"
    aria-modal="true"
    aria-label="{selectedProject.title} details"
  >
    <!-- Modal panel -->
    <div
      class="relative w-full overflow-y-auto rounded-2xl"
      style="
        max-width: 860px; max-height: 90vh;
        background: var(--card);
        border: 1px solid var(--border-hi);
        scrollbar-width: thin;
      "
      in:scale={{ duration: 220, start: 0.94 }}
      out:scale={{ duration: 180, start: 0.97 }}
    >

      <!-- Sticky header -->
      <div class="sticky top-0 z-20 flex items-start justify-between gap-4 px-6 py-4 border-b"
        style="background: var(--card); border-color: var(--border); border-radius: 20px 20px 0 0;">
        <div>
          <h3 class="text-xl font-black leading-tight" style="color:var(--text);">{selectedProject.title}</h3>
          <div class="flex items-center gap-2 mt-1.5 flex-wrap">
            <span class="text-xs px-2.5 py-1 rounded-md font-bold"
              style="background:var(--surface); color:var(--text); border:1px solid var(--border);">
              🎮 {selectedProject.badge}
            </span>
            <span class="text-xs px-2 py-0.5 rounded" style="background:var(--surface); color:var(--text-muted);">{selectedProject.engine}</span>
            <span class="text-xs font-mono" style="color:var(--text-muted);">{selectedProject.year}</span>
          </div>
        </div>
        <button
          on:click={closeModal}
          class="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xl font-light transition-all hover:scale-110 hover:bg-white/10"
          style="color:var(--text-muted); background:var(--surface);"
          aria-label="Close modal"
        >×</button>
      </div>

      <!-- Body -->
      <div class="p-6 space-y-7">

        <!-- Image gallery -->
        <div>
          <p class="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style="color:var(--accent);">
            <span>🖼</span> Screenshots
            <span class="font-normal normal-case tracking-normal" style="color:var(--text-muted);">(placeholder images)</span>
          </p>
          <div class="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {#each selectedProject.galleryImages as img, i}
              <div class="rounded-xl overflow-hidden group/img cursor-zoom-in"
                style="aspect-ratio:16/9; background:var(--surface);">
                <img
                  src={img}
                  alt="{selectedProject.title} screenshot {i + 1}"
                  style="width:100%; height:100%; object-fit:cover; display:block; transition:transform 0.3s ease;"
                  on:mouseenter={(e) => e.currentTarget.style.transform = 'scale(1.08)'}
                  on:mouseleave={(e) => e.currentTarget.style.transform = 'scale(1)'}
                  loading="lazy"
                />
              </div>
            {/each}
          </div>
        </div>

        <!-- Divider -->
        <div style="height:1px; background:var(--border);"></div>

        <!-- Description -->
        <div>
          <p class="text-xs font-bold uppercase tracking-widest mb-2" style="color:var(--text-muted);">About This Project</p>
          <p class="text-sm leading-relaxed" style="color:var(--text-muted);">{selectedProject.description}</p>
        </div>

        <!-- Responsibilities + Highlights -->
        <div class="space-y-6">
          <div>
            <p class="text-xs font-bold uppercase tracking-widest mb-3" style="color:var(--accent);">Role / Responsibilities</p>
            <div class="flex flex-wrap gap-2">
              {#each selectedProject.responsibilities as r}
                <span class="px-3 py-1.5 rounded-lg text-sm font-semibold" style="background:var(--surface); color:var(--text); border:1px solid var(--border);">{r}</span>
              {/each}
            </div>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest mb-3" style="color:var(--green);">What I Did</p>
            <ul class="space-y-3">
              {#each selectedProject.highlights as h}
                <li class="flex items-start gap-3 text-sm leading-relaxed" style="color:var(--text-muted);">
                  <span class="flex-shrink-0 mt-1 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    style="background:var(--green-lo); color:var(--green);">★</span>
                  {h}
                </li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- Close button & Links -->
        <div class="flex gap-4">
          {#if selectedProject.link}
            <a
              href={selectedProject.link}
              target="_blank"
              class="flex-1 py-3 text-center rounded-xl text-sm font-bold transition-all hover:opacity-90 flex items-center justify-center gap-2"
              style="background:var(--accent); color:#080c10; border:1px solid var(--accent);"
            >
              Play Game / View
            </a>
          {/if}
          <button
            on:click={closeModal}
            class="{selectedProject.link ? 'flex-1' : 'w-full'} py-3 rounded-xl text-sm font-bold transition-all hover:bg-black/5"
            style="background:var(--surface); color:var(--text); border:1px solid var(--border);"
          >
            Close ×
          </button>
        </div>
      </div>

    </div>
  </div>
{/if}

<style>
  @keyframes orb {
    0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.7; }
    50%       { transform: translate(-50%, -50%) scale(1.3); opacity: 1; }
  }
</style>
