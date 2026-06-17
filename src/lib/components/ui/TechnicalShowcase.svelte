<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  const showcaseProjects = [
    {
      title: "Multiplayer Game",
      label: "Personal Technical Project",
      engine: "Unity + Nakama",
      color: "var(--blue)",
      description:
        "A multiplayer game built to explore networked game architecture. Implements authentication, matchmaking, and real-time game state synchronization using Nakama backend.",
      highlights: [
        "Client-side prediction and server reconciliation",
        "Nakama server integration for auth and matchmaking",
        "Real-time game state synchronization",
      ],
      youtubeId: "",
      github: "https://github.com/boxgramer/multiplayer-sample",
      images: [
        'https://picsum.photos/seed/tc1/640/360',
        'https://picsum.photos/seed/tc2/640/360',
        'https://picsum.photos/seed/tc3/640/360',
        'https://picsum.photos/seed/tc4/640/360'
      ]
    },
    {
      title: "Puzzle Game",
      label: "Personal Project",
      engine: "Godot",
      color: "var(--green)",
      description:
        "A fully featured puzzle game built in Godot. Includes a complete gameplay loop, progression system, persistent save data, and polished mechanics.",
      highlights: [
        "Complete core game loop and state management",
        "Persistent data saving via Godot's FileAccess",
        "UI navigation and juiciness (tweens/particles)",
      ],
      youtubeId: "",
      github: "https://github.com/boxgramer/puzzle-godot",
      images: [
        'https://picsum.photos/seed/tc5/640/360',
        'https://picsum.photos/seed/tc6/640/360',
        'https://picsum.photos/seed/tc7/640/360',
        'https://picsum.photos/seed/tc8/640/360'
      ]
    },
    {
      title: "Maze Generator",
      label: "Technical Experiment",
      engine: "Godot",
      color: "var(--gold)",
      description:
        "A procedural maze generator and playable game in Godot. Focuses on algorithmic problem-solving and real-time procedural content generation.",
      highlights: [
        "Implemented Depth-First Search for maze generation",
        "Procedural mesh and collision generation",
        "Dynamic pathfinding and solver implementation",
      ],
      youtubeId: "",
      github: "https://github.com/boxgramer/maze-generator",
      images: [
        'https://picsum.photos/seed/tc9/640/360',
        'https://picsum.photos/seed/tc10/640/360',
        'https://picsum.photos/seed/tc11/640/360',
        'https://picsum.photos/seed/tc12/640/360'
      ]
    },
    {
      title: "Mud Deformation Effect",
      label: "Technical Experiment",
      engine: "Unity / Shader Graph",
      color: "var(--warm)",
      description:
        "A highly interactive mud/snow deformation system using compute shaders and dynamic displacement mapping. Players can leave permanent trails and footprints.",
      highlights: [
        "Compute shader integration for high-performance state tracking",
        "Dynamic tessellation and displacement mapping",
        "Optimized for real-time mobile performance",
      ],
      youtubeId: "dQw4w9WgXcQ",
      github: "https://github.com/boxgramer",
      images: [
        'https://picsum.photos/seed/mud1/640/360',
        'https://picsum.photos/seed/mud2/640/360',
        'https://picsum.photos/seed/mud3/640/360',
        'https://picsum.photos/seed/mud4/640/360'
      ]
    },
    {
      title: "Interactive Water Shader",
      label: "Graphics Programming",
      engine: "Godot / HLSL",
      color: "var(--blue)",
      description:
        "A stylized water shader with depth-based color absorption, edge intersection foam, and interactive ripples driven by physics objects.",
      highlights: [
        "Custom gerstner wave implementation",
        "Depth texture sampling for intersection foam",
        "Interactive physics ripples using render targets",
      ],
      youtubeId: "9bZkp7q19f0",
      github: "https://github.com/boxgramer",
      images: [
        'https://picsum.photos/seed/wtr1/640/360',
        'https://picsum.photos/seed/wtr2/640/360',
        'https://picsum.photos/seed/wtr3/640/360',
        'https://picsum.photos/seed/wtr4/640/360'
      ]
    },
    {
      title: "Magnet Physics System",
      label: "Gameplay Mechanics",
      engine: "Unity",
      color: "var(--lavender)",
      description:
        "A robust physics-driven magnetism system allowing objects to attract, repel, and form dynamic clusters based on polarity and mass.",
      highlights: [
        "Custom Rigidbody velocity calculation",
        "Inverse square law attraction optimization",
        "Multi-object clustering and stable stacking",
      ],
      youtubeId: "kJQP7kiw5Fk",
      github: "https://github.com/boxgramer",
      images: [
        'https://picsum.photos/seed/mag1/640/360',
        'https://picsum.photos/seed/mag2/640/360',
        'https://picsum.photos/seed/mag3/640/360',
        'https://picsum.photos/seed/mag4/640/360'
      ]
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
</script>

<section style="background: var(--surface); padding: 7rem 0; border-top: 1px solid var(--border);">
  <div class="container mx-auto max-w-6xl px-6">
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-3">
        <span style="width:2px; height:28px; background:var(--blue); border-radius:2px; display:block;"></span>
        <span class="text-xs font-bold tracking-widest uppercase" style="color:var(--blue);">Personal Work</span>
      </div>
      <h2 class="text-4xl font-black" style="color:var(--text);">Technical Showcase</h2>
      <p class="mt-3 text-base max-w-xl" style="color:var(--text-muted);">
        Personal projects and technical experiments focused on expanding my programming toolset.
      </p>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      {#each showcaseProjects as project}
        <button
          class="w-full text-left rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer group"
          style="background: var(--card); border: 1px solid var(--border); position: relative; overflow: hidden; outline:none;"
          on:click={() => openModal(project)}
          aria-label="Open {project.title} details"
        >
          <!-- Hover accent bar -->
          <div style="position: absolute; top: 0; left: 0; width: 100%; height: 4px; background: {project.color}; opacity: 0; transition: opacity 0.3s;" class="group-hover:opacity-100"></div>

          <!-- Header -->
          <div class="mb-4">
            <span class="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded"
              style="background: {project.color}; color: #2d3748; display: inline-block; margin-bottom: 0.5rem; opacity: 0.9;">
              {project.label}
            </span>
            <h3 class="text-xl font-bold" style="color: var(--text);">{project.title}</h3>
            <span class="text-xs font-medium" style="color: var(--text-muted);">{project.engine}</span>
          </div>

          <p class="text-sm leading-relaxed mb-6 line-clamp-3" style="color: var(--text-muted);">
            {project.description}
          </p>

          <div class="mt-auto flex justify-end">
            <span class="text-xs font-bold px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
              style="background: var(--surface); color: var(--text); border: 1px solid var(--border);">
              View Details →
            </span>
          </div>
        </button>
      {/each}
    </div>
  </div>
</section>

<!-- MODAL -->
{#if selectedProject}
  <div
    class="fixed inset-0 z-50 flex items-center justify-center p-3 md:p-6"
    style="background: rgba(255,255,255,0.85); backdrop-filter: blur(8px);"
    on:click={handleBackdropClick}
    transition:fade={{ duration: 200 }}
    role="dialog"
    aria-modal="true"
  >
    <div
      class="relative w-full overflow-y-auto rounded-2xl"
      style="max-width: 760px; max-height: 90vh; background: var(--card); border: 1px solid var(--border-hi); scrollbar-width: thin;"
      in:scale={{ duration: 220, start: 0.94 }}
      out:scale={{ duration: 180, start: 0.97 }}
    >
      <!-- Header -->
      <div class="sticky top-0 z-20 flex items-start justify-between gap-4 px-6 py-4 border-b"
        style="background: var(--card); border-color: var(--border); border-radius: 20px 20px 0 0;">
        <div>
          <h3 class="text-xl font-black leading-tight" style="color:var(--text);">{selectedProject.title}</h3>
          <div class="flex items-center gap-2 mt-1.5 flex-wrap">
            <span class="text-xs px-2.5 py-1 rounded-md font-bold" style="background:{selectedProject.color}; color:#2d3748;">
              {selectedProject.label}
            </span>
            <span class="text-xs px-2 py-0.5 rounded" style="background:var(--surface); color:var(--text-muted);">{selectedProject.engine}</span>
          </div>
        </div>
        <button on:click={closeModal} class="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xl font-light hover:bg-black/5"
          style="color:var(--text-muted); background:var(--surface);">×</button>
      </div>

      <!-- Body -->
      <div class="p-6 space-y-7">

        <!-- YouTube embed -->
        {#if selectedProject.youtubeId}
          <div>
            <p class="text-xs font-bold uppercase tracking-widest mb-3 flex items-center gap-2" style="color:var(--warm);">
              <span>▶</span> Preview Video
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
        {/if}
        
        <!-- GitHub CTA -->
        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" 
          class="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all hover:scale-[1.02]"
          style="background: var(--text); color: var(--card); border: 1px solid var(--border);">
          <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          View Source on GitHub
        </a>

        <p class="text-sm leading-relaxed" style="color:var(--text-muted);">{selectedProject.description}</p>

        <!-- Highlights -->
        <div>
          <p class="text-xs font-bold uppercase tracking-widest mb-3" style="color:var(--green);">Technical Highlights</p>
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

        <!-- Images -->
        <div class="grid grid-cols-2 gap-2">
          {#each selectedProject.images as img, i}
            <div class="rounded-xl overflow-hidden" style="aspect-ratio:16/9; background:var(--surface);">
              <img src={img} alt="Screenshot {i+1}" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
            </div>
          {/each}
        </div>
      </div>
    </div>
  </div>
{/if}
