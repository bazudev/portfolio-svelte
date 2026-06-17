<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  const gameProjects = [
    {
      title: "Boat Game",
      badge: "Gameplay Programmer",
      badgeColor: "#93c5fd",
      engine: "Godot",
      teamSize: "2 Programmers",
      year: "2025",
      featured: true,
      description:
        "A commercial boat game built with a small team. Responsible for implementing core gameplay features, building the game's foundational systems, and collaborating closely with the other programmer to ship production-ready mechanics.",
      responsibilities: [
        "Core Gameplay Features",
        "Game Systems Development",
        "Gameplay Architecture",
        "Team Collaboration",
      ],
      highlights: [
        "Implemented boat physics and movement mechanics",
        "Built the game state and save/load pipeline",
        "Contributed to gameplay feature design and iteration",
        "Worked in a 2-programmer team to hit production milestones",
      ],
      youtubeId: 'dQw4w9WgXcQ',
      galleryImages: [
        'https://picsum.photos/seed/10/640/360',
        'https://picsum.photos/seed/11/640/360',
        'https://picsum.photos/seed/12/640/360',
        'https://picsum.photos/seed/13/640/360',
        'https://picsum.photos/seed/14/640/360',
        'https://picsum.photos/seed/15/640/360',
        'https://picsum.photos/seed/16/640/360',
        'https://picsum.photos/seed/17/640/360',
      ],
    },
    {
      title: "Cat Game",
      badge: "Gameplay Programmer",
      badgeColor: "#86efac",
      engine: "Godot / Unity",
      teamSize: "Team Project",
      year: "2025",
      featured: false,
      description:
        "Commercial cat-themed game. Focused on implementing gameplay features, bug fixing, and integrating gameplay systems with the broader project.",
      responsibilities: [
        "Feature Implementation",
        "Gameplay Development",
        "Bug Fixing",
        "System Integration",
      ],
      highlights: [
        "Implemented core player interaction systems",
        "Integrated gameplay with backend services",
        "Resolved critical gameplay bugs before release",
      ],
      youtubeId: '9bZkp7q19f0',
      galleryImages: [
        'https://picsum.photos/seed/20/640/360',
        'https://picsum.photos/seed/21/640/360',
        'https://picsum.photos/seed/22/640/360',
        'https://picsum.photos/seed/23/640/360',
        'https://picsum.photos/seed/24/640/360',
        'https://picsum.photos/seed/25/640/360',
        'https://picsum.photos/seed/26/640/360',
        'https://picsum.photos/seed/27/640/360',
      ],
    },
    {
      title: "Story Game 1",
      badge: "Gameplay Programmer",
      badgeColor: "#fde68a",
      engine: "Unity",
      teamSize: "Team Project",
      year: "2024",
      featured: false,
      description:
        "Commercial story-driven game. Contributed gameplay systems and feature development aligned with the design vision.",
      responsibilities: ["Gameplay Systems", "Feature Development", "Technical Problem Solving"],
      highlights: [
        "Built narrative trigger and dialogue systems",
        "Optimized scene loading for smoother transitions",
      ],
      youtubeId: 'kJQP7kiw5Fk',
      galleryImages: [
        'https://picsum.photos/seed/30/640/360',
        'https://picsum.photos/seed/31/640/360',
        'https://picsum.photos/seed/32/640/360',
        'https://picsum.photos/seed/33/640/360',
        'https://picsum.photos/seed/34/640/360',
        'https://picsum.photos/seed/35/640/360',
        'https://picsum.photos/seed/36/640/360',
        'https://picsum.photos/seed/37/640/360',
      ],
    },
    {
      title: "Story Game 2",
      badge: "Gameplay Programmer",
      badgeColor: "var(--accent)",
      engine: "Unity",
      teamSize: "Team Project",
      year: "2024",
      featured: false,
      description:
        "Second commercial story-game title. Delivered gameplay programming contributions including game mechanics, feature implementation, and system integration.",
      responsibilities: ["Gameplay Mechanics", "Feature Implementation", "System Integration"],
      highlights: [
        "Built reusable gameplay component library",
        "Implemented event system for decoupled game logic",
      ],
      youtubeId: 'JGwWNGJdvx8',
      galleryImages: [
        'https://picsum.photos/seed/40/640/360',
        'https://picsum.photos/seed/41/640/360',
        'https://picsum.photos/seed/42/640/360',
        'https://picsum.photos/seed/43/640/360',
        'https://picsum.photos/seed/44/640/360',
        'https://picsum.photos/seed/45/640/360',
        'https://picsum.photos/seed/46/640/360',
        'https://picsum.photos/seed/47/640/360',
      ],
    },
    {
      title: "Roblox Tycoon / RPG",
      badge: "Gameplay Programmer",
      badgeColor: "var(--lavender)",
      engine: "Roblox Studio",
      teamSize: "Studio Team",
      year: "2025",
      featured: false,
      description:
        "Commercial Roblox game title. Developed core gameplay mechanics, progression systems, and server-client data synchronization using Luau.",
      responsibilities: ["Core Gameplay", "Luau Scripting", "DataStore Integration"],
      highlights: [
        "Programmed complex networked abilities",
        "Optimized client-server remote events",
      ],
      youtubeId: 'dQw4w9WgXcQ',
      galleryImages: [
        'https://picsum.photos/seed/rbx1/640/360',
        'https://picsum.photos/seed/rbx2/640/360',
        'https://picsum.photos/seed/rbx3/640/360',
        'https://picsum.photos/seed/rbx4/640/360',
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
          <!-- Placeholder panel -->
          <div class="lg:w-2/5 min-h-[240px] relative flex items-center justify-center overflow-hidden"
            style="background: linear-gradient(135deg, var(--surface) 0%, #ffffff 50%, var(--surface) 100%);">
            <div class="text-center space-y-2 p-8 relative z-10">
              <div class="text-7xl" style="filter:drop-shadow(0 4px 10px rgba(0,0,0,0.1));">⛵</div>
              <p class="text-xs font-bold tracking-widest uppercase" style="color:var(--text-muted);">Click to View Details</p>
            </div>
            <!-- Animated glow orb -->
            <div style="
              position:absolute; width:200px; height:200px; border-radius:50%;
              background: radial-gradient(circle, rgba(147,197,253,0.3) 0%, transparent 70%);
              top:50%; left:50%; transform:translate(-50%,-50%);
              animation: orb 4s ease-in-out infinite;
            "></div>
            <!-- Badge -->
            <div class="absolute top-4 left-4 px-3 py-1.5 rounded-lg text-xs font-bold"
              style="background:rgba(255,255,255,0.8); color:var(--text); border:1px solid var(--border);">
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
            <div class="grid sm:grid-cols-2 gap-5">
              <div>
                <p class="text-xs font-bold tracking-widest uppercase mb-3" style="color:var(--accent);">Responsibilities</p>
                <ul class="space-y-2">
                  {#each featured.responsibilities as r}
                    <li class="flex items-center gap-2 text-sm" style="color:var(--text-muted);">
                      <span style="width:5px;height:5px;border-radius:50%;background:var(--accent);flex-shrink:0;"></span>{r}
                    </li>
                  {/each}
                </ul>
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
    <div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
      {#each rest as project}
        <button
          class="text-left rounded-xl overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
          style="background:var(--card); border:1px solid var(--border); outline:none; width:100%;"
          on:click={() => openModal(project)}
          aria-label="Open {project.title} details"
        >
          <div class="h-40 flex items-center justify-center relative overflow-hidden"
            style="background: linear-gradient(135deg, var(--surface) 0%, #ffffff 100%); border-bottom: 1px solid var(--border);">
            <div class="text-5xl" style="filter:drop-shadow(0 4px 10px rgba(0,0,0,0.1)); opacity:0.9;">🎮</div>
            <div class="absolute top-3 left-3 px-2.5 py-1 rounded-md text-xs font-bold"
              style="background:rgba(255,255,255,0.8); color:var(--text); border:1px solid var(--border);">
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

        <!-- YouTube embed -->
        <div>
          <p class="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style="color:var(--warm);">
            <span>▶</span> Gameplay Video
            <span class="font-normal normal-case tracking-normal" style="color:var(--text-muted);">(sample placeholder)</span>
          </p>
          <div style="aspect-ratio:16/9; border-radius:14px; overflow:hidden; border:1px solid var(--border);">
            <iframe
              src="https://www.youtube.com/embed/{selectedProject.youtubeId}?rel=0&modestbranding=1"
              style="width:100%; height:100%; display:block;"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              title="{selectedProject.title} video"
            ></iframe>
          </div>
        </div>

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
        <div class="grid sm:grid-cols-2 gap-6">
          <div>
            <p class="text-xs font-bold uppercase tracking-widest mb-3" style="color:var(--accent);">Responsibilities</p>
            <ul class="space-y-2.5">
              {#each selectedProject.responsibilities as r}
                <li class="flex items-center gap-3 text-sm" style="color:var(--text-muted);">
                  <span class="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    style="background:var(--accent-lo); color:var(--accent);">✓</span>
                  {r}
                </li>
              {/each}
            </ul>
          </div>
          <div>
            <p class="text-xs font-bold uppercase tracking-widest mb-3" style="color:var(--green);">What I Did</p>
            <ul class="space-y-2.5">
              {#each selectedProject.highlights as h}
                <li class="flex items-start gap-3 text-sm" style="color:var(--text-muted);">
                  <span class="flex-shrink-0 mt-0.5 w-5 h-5 rounded-full flex items-center justify-center text-xs"
                    style="background:var(--green-lo); color:var(--green);">★</span>
                  {h}
                </li>
              {/each}
            </ul>
          </div>
        </div>

        <!-- Close button -->
        <button
          on:click={closeModal}
          class="w-full py-3 rounded-xl text-sm font-bold transition-all hover:bg-black/5"
          style="background:var(--surface); color:var(--text); border:1px solid var(--border);"
        >
          Close ×
        </button>
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
