<script lang="ts">
  import { goto } from "$app/navigation";
  import { Icon, ArrowLeft, ArrowRight } from "svelte-hero-icons";
  import logo from "$lib/assets/avatar.png";
  import { onMount } from "svelte";

  export let title: string | null = null;
  export let nextUrl: string | null = null;
  export let prevUrl: string | null = null;

  let currentSection = "";
  let scrolled = false;

  const navLinks = [
    { label: "Home",       href: "#home" },
    { label: "Projects",   href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "About",      href: "#about" },
    { label: "Contact",    href: "#contact" },
  ];

  const updateCurrentSection = () => {
    currentSection = window.location.hash || "#home";
  };

  onMount(() => {
    updateCurrentSection();
    window.addEventListener("hashchange", updateCurrentSection);
    window.addEventListener("scroll", () => { scrolled = window.scrollY > 20; });
    return () => {
      window.removeEventListener("hashchange", updateCurrentSection);
    };
  });
</script>

<header
  class="sticky top-0 left-0 right-0 z-50 h-16 flex justify-center items-center w-full transition-all duration-300"
  style="background: {scrolled ? 'rgba(255, 255, 255, 0.85)' : 'transparent'};
         backdrop-filter: {scrolled ? 'blur(12px)' : 'none'};
         border-bottom: 1px solid {scrolled ? 'var(--border)' : 'transparent'};
         transition: all 0.3s ease;"
>
  <nav
    class="container mx-auto max-w-6xl px-6 flex justify-between items-center"
    aria-label="Main navigation"
  >
    <!-- Logo -->
    <div
      class="flex gap-3 items-center cursor-pointer group"
      on:click={() => goto("/")}
      role="button"
      tabindex="0"
      on:keydown={(e) => e.key === 'Enter' && goto("/")}
    >
      <img src={logo} alt="Boxgramer logo" class="h-9 w-9 rounded-lg ring-1 ring-white/10 group-hover:ring-[var(--accent)] transition-all duration-200" />
      <span class="text-base font-bold tracking-wide hidden sm:block transition-colors" style="color:var(--text);">Boxgramer</span>
    </div>

    <!-- Writeup nav (title + prev/next) -->
    {#if title}
      <p class="text-sm font-medium text-[var(--text-muted)] truncate max-w-xs hidden md:block">{title}</p>
      <div class="flex items-center gap-3">
        {#if prevUrl}
          <a href={prevUrl} class="flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors px-3 py-1.5 rounded-lg hover:bg-black/5">
            <Icon src={ArrowLeft} size="16" /> Prev
          </a>
        {/if}
        {#if nextUrl}
          <a href={nextUrl} class="flex items-center gap-1 text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors px-3 py-1.5 rounded-lg hover:bg-black/5">
            Next <Icon src={ArrowRight} size="16" />
          </a>
        {/if}
      </div>

    <!-- Main nav -->
    {:else}
      <ul class="hidden md:flex items-center gap-1" role="list">
        {#each navLinks as link}
          <li>
            <a
              href={link.href}
              class="relative px-3 py-1.5 text-sm font-bold rounded-lg transition-all duration-200"
              style="color: {currentSection === link.href ? 'var(--text)' : 'var(--text-muted)'}; background: {currentSection === link.href ? 'rgba(0,0,0,0.05)' : 'transparent'};"
              on:mouseenter={(e) => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
              on:mouseleave={(e) => { if (currentSection !== link.href) e.currentTarget.style.background = 'transparent'; }}
            >
              {link.label}
              {#if currentSection === link.href}
                <span class="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[var(--accent)]"></span>
              {/if}
            </a>
          </li>
        {/each}
      </ul>

      <a
        href="#contact"
        class="hidden md:block text-sm font-bold px-4 py-1.5 rounded-lg transition-all duration-200 hover:scale-105"
        style="background: var(--accent); color: white; box-shadow: 0 4px 10px rgba(251,113,133,0.15);"
      >
        Hire Me
      </a>
    {/if}
  </nav>
</header>
