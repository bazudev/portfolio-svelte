<script>
  import { onMount } from 'svelte';
  import { fade, scale } from 'svelte/transition';
  import { writeups } from "../../../data/writeups";

  const sortedWriteups = [...writeups].sort((a, b) => Number(a.id) - Number(b.id));
  let visibleCount = 6;

  function showAll() { visibleCount = sortedWriteups.length; }
  function hideAll() { visibleCount = 6; }

  let selectedWriteup = null;

  function openModal(writeup) {
    selectedWriteup = writeup;
    document.body.classList.add('modal-open');
  }

  function closeModal() {
    selectedWriteup = null;
    document.body.classList.remove('modal-open');
  }

  function handleBackdropClick(e) {
    if (e.target === e.currentTarget) closeModal();
  }

  function handleKey(e) {
    if (e.key === 'Escape' && selectedWriteup) closeModal();
  }

  onMount(() => {
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.classList.remove('modal-open');
    };
  });
</script>

<section id="writeups" style="background: var(--surface); padding: 7rem 0; border-top: 1px solid var(--border);">
  <div class="container mx-auto max-w-6xl px-6">
    
    <div class="mb-12">
      <div class="flex items-center gap-3 mb-3">
        <span style="width:2px; height:28px; background:var(--warm); border-radius:2px; display:block;"></span>
        <span class="text-xs font-bold tracking-widest uppercase" style="color:var(--warm);">Learning Security Logs</span>
      </div>
      <h2 class="text-4xl font-black" style="color:var(--text);">Learning Security Logs</h2>
      <p class="mt-3 text-base max-w-xl" style="color:var(--text-muted);">
        Security research and vulnerability analysis — an additional technical interest alongside gameplay programming.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-10">
      {#each sortedWriteups.slice(0, visibleCount) as writeup}
        <button
          on:click={() => openModal(writeup)}
          class="text-left flex flex-col rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-2 group p-6"
          style="background: var(--card); border: 1px solid var(--border); box-shadow: 0 4px 10px rgba(0,0,0,0.02); height: 100%; outline: none;"
        >
          <p class="text-xs font-mono mb-2" style="color:var(--text-muted);">{writeup.date}</p>
          <h3 class="text-lg font-bold leading-snug mb-3 transition-colors duration-200 group-hover:text-[var(--accent)]"
            style="color:var(--text);">
            {writeup.title}
          </h3>
          <p class="text-sm line-clamp-3 mb-5" style="color:var(--text-muted);">{writeup.description}</p>
          
          <div class="mt-auto flex items-center justify-between">
            <span class="text-xs font-bold px-3 py-1 rounded" style="background:var(--surface); color:var(--text-muted);">
              {writeup.tag}
            </span>
            <span class="text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity" style="color:var(--accent);">
              Read Summary →
            </span>
          </div>
        </button>
      {/each}
    </div>

    <div class="text-center">
      {#if visibleCount < sortedWriteups.length}
        <button
          on:click={showAll}
          class="px-8 py-3 rounded-xl text-sm font-bold transition-all hover:bg-black/5 hover:-translate-y-1"
          style="background: var(--card); color: var(--text); border: 1px solid var(--border); box-shadow: 0 2px 5px rgba(0,0,0,0.02);"
        >  
          Show All Logs ({sortedWriteups.length})
        </button>
      {:else}
        <button
          on:click={hideAll}
          class="px-8 py-3 rounded-xl text-sm font-bold transition-all hover:bg-black/5 hover:-translate-y-1"
          style="background: var(--card); color: var(--text); border: 1px solid var(--border); box-shadow: 0 2px 5px rgba(0,0,0,0.02);"
        >
          Show Less
        </button>
      {/if}
    </div>

  </div>
</section>

<!-- MODAL -->
{#if selectedWriteup}
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
      style="max-width: 600px; max-height: 90vh; background: var(--card); border: 1px solid var(--border-hi); scrollbar-width: thin;"
      in:scale={{ duration: 220, start: 0.94 }}
      out:scale={{ duration: 180, start: 0.97 }}
    >
      <!-- Header -->
      <div class="sticky top-0 z-20 flex items-start justify-between gap-4 px-6 py-4 border-b"
        style="background: var(--card); border-color: var(--border); border-radius: 20px 20px 0 0;">
        <div>
          <h3 class="text-xl font-black leading-tight" style="color:var(--text);">{selectedWriteup.title}</h3>
          <div class="flex items-center gap-2 mt-2 flex-wrap">
            <span class="text-xs px-2.5 py-1 rounded-md font-bold" style="background:var(--warm-lo); color:var(--warm);">
              {selectedWriteup.tag}
            </span>
            <span class="text-xs px-2 py-0.5 rounded font-mono" style="background:var(--surface); color:var(--text-muted);">
              {selectedWriteup.date}
            </span>
          </div>
        </div>
        <button on:click={closeModal} class="flex-shrink-0 w-9 h-9 rounded-full flex items-center justify-center text-xl font-light hover:bg-black/5"
          style="color:var(--text-muted); background:var(--surface);">×</button>
      </div>

      <!-- Body -->
      <div class="p-6 space-y-7">
        
        <div>
          <p class="text-xs font-bold uppercase tracking-widest mb-2" style="color:var(--text-muted);">Summary</p>
          <p class="text-sm leading-relaxed" style="color:var(--text-muted);">{selectedWriteup.description}</p>
        </div>

        <!-- Call to Action -->
        <a href={selectedWriteup.url} target="_blank" rel="noopener noreferrer" 
          class="flex items-center justify-center gap-2 w-full py-3 rounded-xl font-bold transition-all hover:scale-[1.02]"
          style="background: var(--text); color: var(--card); border: 1px solid var(--border);">
          Read Full Log
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>

      </div>
    </div>
  </div>
{/if}
