<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import { projects } from "../../../data/project_client";

  let activeTab = "client";

  let openSourceProjects = [
    {
      title: "Box Cache Tester",
      description:
        "CLI tool built in Rust for testing web cache behavior and detecting cache poisoning vulnerabilities. Supports customizing request headers, stripping response headers, and detecting reflected content with colorized terminal output.",
      images: ["/box-cache-tester/test.png"],
      github: "https://github.com/boxgramer/box-cache-tester",
      stacks: ["Rust"],
    },
    {
      title: "XSS Box Scanner",
      description:
        "A blazingly fast concurrent XSS scanner built in Go. Uses heuristics and concurrent payload delivery to find cross-site scripting vulnerabilities across large parameter sets.",
      images: ["/xss-box-scanner/scan.png"],
      github: "https://github.com/boxgramer/xss-box-scanner",
      stacks: ["Go"],
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

<section id="software" style="background: var(--bg); padding: 7rem 0;">
  <div class="container mx-auto max-w-6xl px-6">
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-3">
        <span style="width:2px; height:28px; background:var(--green); border-radius:2px; display:block;"></span>
        <span class="text-xs font-bold tracking-widest uppercase" style="color:var(--green);">Software Engineering</span>
      </div>
      <h2 class="text-4xl font-black" style="color:var(--text);">Web & Software Projects</h2>
      <p class="mt-3 text-base max-w-xl" style="color:var(--text-muted);">
        Full-stack applications, mobile apps, and command-line tools from my freelance work and open-source contributions.
      </p>
    </div>

    <!-- Tabs -->
    <div class="flex gap-2 mb-8 p-1 rounded-xl w-fit" style="background: var(--surface); border: 1px solid var(--border);">
      <button
        on:click={() => activeTab = "client"}
        class="px-5 py-2 rounded-lg text-sm font-bold transition-all"
        style="
          background: {activeTab === 'client' ? 'var(--card)' : 'transparent'};
          color: {activeTab === 'client' ? 'var(--text)' : 'var(--text-muted)'};
          box-shadow: {activeTab === 'client' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'};
        "
      >
        Client Work
      </button>
      <button
        on:click={() => activeTab = "oss"}
        class="px-5 py-2 rounded-lg text-sm font-bold transition-all"
        style="
          background: {activeTab === 'oss' ? 'var(--card)' : 'transparent'};
          color: {activeTab === 'oss' ? 'var(--text)' : 'var(--text-muted)'};
          box-shadow: {activeTab === 'oss' ? '0 2px 4px rgba(0,0,0,0.05)' : 'none'};
        "
      >
        Open Source Tools
      </button>
    </div>

    <!-- Grid -->
    <div class="grid md:grid-cols-2 gap-6">
      {#if activeTab === "client"}
        {#each projects as project}
          <button
            class="text-left w-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            style="background: var(--card); border: 1px solid var(--border); outline:none;"
            on:click={() => openModal(project)}
            aria-label="Open {project.title} details"
          >
            <div class="flex justify-between items-start mb-4">
              <h3 class="text-lg font-bold" style="color:var(--text);">{project.title}</h3>
              <span class="text-[10px] font-bold uppercase px-2 py-1 rounded" style="background:var(--surface); color:var(--text-muted);">
                {project.year}
              </span>
            </div>
            <p class="text-sm leading-relaxed mb-6 line-clamp-2" style="color:var(--text-muted);">
              {project.description}
            </p>
            <div class="flex flex-wrap gap-2 mt-auto">
              {#each project.stacks as stack}
                <span class="text-xs px-2.5 py-1 rounded-md" style="background:var(--green-lo); color:#059669;">
                  {stack}
                </span>
              {/each}
            </div>
          </button>
        {/each}
      {:else}
        {#each openSourceProjects as project}
          <button
            class="text-left w-full rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg group"
            style="background: var(--card); border: 1px solid var(--border); outline:none;"
            on:click={() => openModal(project)}
            aria-label="Open {project.title} details"
          >
            <div class="flex items-center gap-3 mb-4">
              <span class="text-xl">🦀</span>
              <h3 class="text-lg font-bold" style="color:var(--text);">{project.title}</h3>
            </div>
            <p class="text-sm leading-relaxed mb-6 line-clamp-2" style="color:var(--text-muted);">
              {project.description}
            </p>
            <div class="flex flex-wrap gap-2 mt-auto">
              {#each project.stacks as stack}
                <span class="text-xs px-2.5 py-1 rounded-md" style="background:var(--blue-lo); color:#2563eb;">
                  {stack}
                </span>
              {/each}
            </div>
          </button>
        {/each}
      {/if}
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
      style="max-width: 860px; max-height: 90vh; background: var(--card); border: 1px solid var(--border-hi); scrollbar-width: thin;"
      in:scale={{ duration: 220, start: 0.94 }}
      out:scale={{ duration: 180, start: 0.97 }}
    >
      <!-- Header -->
      <div class="sticky top-0 z-20 flex items-start justify-between gap-4 px-6 py-4 border-b"
        style="background: var(--card); border-color: var(--border); border-radius: 20px 20px 0 0;">
        <div>
          <h3 class="text-xl font-black leading-tight" style="color:var(--text);">{selectedProject.title}</h3>
          <div class="flex items-center gap-2 mt-2 flex-wrap">
            {#each selectedProject.stacks as stack}
              <span class="text-xs px-2 py-0.5 rounded" style="background:var(--surface); color:var(--text-muted);">
                {stack}
              </span>
            {/each}
          </div>
        </div>
        <button on:click={closeModal} class="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xl font-light hover:bg-black/5"
          style="color:var(--text-muted); background:var(--surface);">×</button>
      </div>

      <!-- Body -->
      <div class="p-6 space-y-7">
        
        <!-- Action Buttons -->
        <div class="flex gap-3">
          {#if selectedProject.demoLink}
            <a href={selectedProject.demoLink} target="_blank" rel="noopener noreferrer" 
              class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all hover:scale-[1.02]"
              style="background: var(--accent); color: white; border: 1px solid var(--accent);">
              💬 Request Demo Access
            </a>
          {/if}
          {#if selectedProject.github}
            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" 
              class="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-bold transition-all hover:scale-[1.02]"
              style="background: var(--text); color: var(--card); border: 1px solid var(--text);">
              <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
              View Source on GitHub
            </a>
          {/if}
        </div>

        <div>
          <p class="text-xs font-bold uppercase tracking-widest mb-2" style="color:var(--text-muted);">About This Project</p>
          <p class="text-sm leading-relaxed" style="color:var(--text-muted);">{selectedProject.description}</p>
        </div>

        {#if selectedProject.images && selectedProject.images.length > 0}
          <div>
            <p class="text-xs font-bold uppercase tracking-widest mb-3" style="color:var(--accent);">Screenshots</p>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {#each selectedProject.images as img, i}
                <div class="rounded-xl overflow-hidden" style="background:var(--surface);">
                  <!-- In development, if images are missing, they will just show alt text or broken image.
                       In production, these paths should resolve relative to /static -->
                  <img src={img} alt="Screenshot {i+1}" style="width:100%; height:100%; object-fit:cover; display:block;" loading="lazy" />
                </div>
              {/each}
            </div>
          </div>
        {/if}

      </div>
    </div>
  </div>
{/if}
