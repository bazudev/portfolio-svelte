<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';

  const showcaseProjects = [
    {
      title: "Spaceventure",
      label: "Technical Project",
      engine: "Unity + Nakama",
      color: "var(--blue)",
      description: "Implement lobby system login using Nakama and Unity.",
      highlights: [
        "Lobby system integration",
        "Nakama authentication",
        "Unity client development"
      ],
      github: "https://github.com/bazudev/Spaceventure",
      images: [
        '/spaceventure/Screenshot 2026-06-18 215401.png',
        '/spaceventure/Screenshot 2026-06-18 215410.png',
        '/spaceventure/Screenshot 2026-06-18 215439.png'
      ]
    },
    {
      title: "Maze Generator",
      label: "Algorithm / Generation",
      engine: "Godot & GDScript",
      color: "var(--gold)",
      description: "Implement generate maze for 2D game using Godot and GDScript.",
      highlights: [
        "2D Maze generation algorithm",
        "GDScript implementation",
        "Procedural generation"
      ],
      github: "https://github.com/bazudev/MazeGenerator",
      images: [
        '/maze/Screenshot 2026-06-18 212402.png'
      ]
    },
    {
      title: "Mud Effect",
      label: "Graphics / Shaders",
      engine: "Godot Shader",
      color: "var(--warm)",
      description: "Implement mud effect using Godot shader.",
      highlights: [
        "Custom Godot shader",
        "Deformation effect",
        "Visual styling"
      ],
      github: "https://github.com/bazudev/godot_mud_effect",
      images: [
        '/mud/Screenshot 2026-06-18 212754.png'
      ]
    },
    {
      title: "Water Effect",
      label: "Graphics / Shaders",
      engine: "Godot Shader",
      color: "var(--blue)",
      description: "Implement water effect using Godot shader.",
      highlights: [
        "Custom Godot water shader",
        "Visual effects integration"
      ],
      github: "https://github.com/bazudev/water_effect",
      images: [
        '/water/Screenshot 2026-06-18 212611.png'
      ]
    },
    {
      title: "Magnet Effect",
      label: "Physics / Gameplay",
      engine: "Godot",
      color: "var(--lavender)",
      description: "Implement magnet effect using Godot raycast.",
      highlights: [
        "Raycast-based physics",
        "Magnet attraction mechanics",
        "Godot engine physics"
      ],
      github: "https://github.com/boxgramer/MagnetBox",
      images: [
        '/magnet/Screenshot 2026-06-18 212946.png',
        '/magnet/Screenshot 2026-06-18 212958.png'
      ]
    },
    {
      title: "HTML5 Space Ship Game",
      label: "Web Game",
      engine: "Phaser 2D",
      color: "var(--green)",
      description: "Implement space ship game using Phaser 2D.",
      highlights: [
        "HTML5 Canvas rendering",
        "Phaser 2D framework",
        "Spaceship mechanics"
      ],
      github: "https://github.com/boxgramer/ship",
      images: [
        '/ship/ss1.png',
        '/ship/ss2.png',
        '/ship/ss3.png'
      ]
    }
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
