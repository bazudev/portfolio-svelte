<script>
  import { onMount, onDestroy } from "svelte";
  import bigPicture from "$lib/assets/rimba.png";

  const roles = [
    "Gameplay Programmer",
    "Game Systems Engineer",
    "Multiplayer Systems Dev",
    "Software Engineer",
    "Security Researcher",
  ];

  let displayedRole = "";
  let roleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeoutId;

  function typeRole() {
    const current = roles[roleIndex];
    if (!isDeleting) {
      displayedRole = current.slice(0, charIndex + 1);
      charIndex++;
      if (charIndex === current.length) {
        isDeleting = true;
        timeoutId = setTimeout(typeRole, 2000);
        return;
      }
    } else {
      displayedRole = current.slice(0, charIndex - 1);
      charIndex--;
      if (charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    timeoutId = setTimeout(typeRole, isDeleting ? 50 : 85);
  }

  onMount(() => { timeoutId = setTimeout(typeRole, 600); });
  onDestroy(() => clearTimeout(timeoutId));

  const stats = [
    { value: "4+",  label: "Commercial Games", color: "var(--accent)" },
    { value: "5+",  label: "Years Experience", color: "var(--warm)" },
    { value: "3",   label: "Game Engines",     color: "var(--green)" },
    { value: "5+",  label: "Tech Stacks",      color: "var(--blue)" },
  ];
</script>

<section
  id="home"
  style="background: var(--bg); min-height: 100svh; display: flex; align-items: center; position: relative; overflow: hidden;"
>
  <!-- Pastel pink glow top-right -->
  <div style="
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 55% 60% at 80% 20%, rgba(251,113,133,0.08) 0%, transparent 70%);
  "></div>
  <!-- Pastel blue glow bottom-left -->
  <div style="
    position: absolute; inset: 0; pointer-events: none;
    background: radial-gradient(ellipse 40% 40% at 10% 90%, rgba(147,197,253,0.08) 0%, transparent 70%);
  "></div>
  <!-- Dot grid (subtle gray) -->
  <div style="
    position: absolute; inset: 0; pointer-events: none; opacity: 0.4;
    background-image: radial-gradient(circle, rgba(0,0,0,0.05) 1px, transparent 1px);
    background-size: 32px 32px;
  "></div>

  <div class="container mx-auto max-w-6xl px-6 py-24 relative z-10">
    <div class="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">

      <!-- Left: Text -->
      <div class="flex-1 space-y-8 text-center lg:text-left">

        <!-- Eyebrow badge -->
        <div class="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase"
          style="background: var(--green-lo); color: #059669; border: 1px solid rgba(110,231,183,0.3);">
          <span style="width:6px;height:6px;border-radius:50%;background:#059669;display:inline-block;animation:pulse 2s infinite;"></span>
          Bazudev
        </div>

        <!-- Headline -->
        <div class="space-y-3">
          <h1 class="font-black leading-none tracking-tight" style="font-size: clamp(2.6rem, 6vw, 4.8rem); color: var(--text);">
            Gameplay<br />
            <span style="color: var(--accent);">Programmer</span>
          </h1>

          <!-- Animated sub-role -->
          <div class="flex items-center justify-center lg:justify-start gap-2 pt-1" style="min-height: 2rem;">
            <span class="w-1.5 h-1.5 rounded-full shrink-0" style="background: var(--warm);"></span>
            <span class="text-lg font-bold" style="color: var(--text-muted);" aria-live="polite">
              {displayedRole}<span style="
                display:inline-block; width:2px; height:1.1em; background:var(--accent);
                margin-left:2px; vertical-align:middle; animation:blink 1s step-end infinite;
              "></span>
            </span>
          </div>
        </div>

        <!-- Description -->
        <p class="text-base leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium" style="color: var(--text-muted);">
          I specialize in gameplay programming and multiplayer systems, building robust mechanics for commercial titles using Unity, Godot, and Roblox. As a secondary focus, I apply my strong software engineering background to full-stack web development and security research.
        </p>

        <!-- CTAs -->
        <div class="flex flex-wrap gap-3 justify-center lg:justify-start">
          <a
            href="#projects"
            class="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105 hover:shadow-lg"
            style="background: var(--accent); color: #ffffff;"
          >
            View Projects
          </a>
          <a
            href="https://wa.me/6281338209217?text=Hi%20Bazudewa!%20I%20want%20to%20download%20your%20resume."
            target="_blank"
            class="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
            style="background: var(--card); color: var(--text); border: 2px solid var(--border-hi);"
          >
            Get Resume
          </a>
          <a
            href="#contact"
            class="px-6 py-3 rounded-xl font-bold text-sm transition-all duration-200 hover:scale-105"
            style="color: var(--text-muted); border: 2px solid var(--border);"
          >
            Contact
          </a>
        </div>

        <!-- Stats -->
        <div class="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2 max-w-lg mx-auto lg:mx-0">
          {#each stats as stat}
            <div class="rounded-xl p-4 text-center lg:text-left transition-transform hover:-translate-y-1"
              style="background: var(--card); border: 1px solid var(--border); box-shadow: 0 4px 6px rgba(0,0,0,0.02);">
              <div class="text-2xl font-black" style="color: {stat.color};">{stat.value}</div>
              <div class="text-xs mt-0.5 font-semibold" style="color: var(--text-muted);">{stat.label}</div>
            </div>
          {/each}
        </div>
      </div>

      <!-- Right: Photo -->
      <div class="flex-shrink-0 flex flex-col items-center gap-5">

        <div style="position: relative; width: clamp(240px, 28vw, 340px);">
          <!-- Glow border gradient wrapper -->
          <div style="
            padding: 4px;
            border-radius: 24px;
            background: linear-gradient(135deg, var(--accent) 0%, var(--warm) 50%, var(--blue) 100%);
            box-shadow: 0 10px 25px rgba(251,113,133,0.15);
          ">
            <div style="
              border-radius: 20px;
              overflow: hidden;
              aspect-ratio: 3 / 4;
              background: var(--card);
            ">
              <img
                src={bigPicture}
                alt="Bazudewa — Gameplay Programmer"
                style="
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                  object-position: top center;
                  display: block;
                "
              />
            </div>
          </div>

          <!-- Floating tag -->
          <div style="
            position: absolute; bottom: -14px; left: 50%; transform: translateX(-50%);
            background: var(--card); border: 1px solid var(--border-hi);
            border-radius: 12px; padding: 8px 16px;
            white-space: nowrap; font-size: 12px; font-weight: 800;
            color: var(--accent); box-shadow: 0 4px 12px rgba(0,0,0,0.05);
          ">
            Rimba Bazudewa
          </div>
        </div>

        <!-- Social links -->
        <div class="flex gap-3 mt-6 shadow-sm" style="padding: 10px 18px; background: var(--card); border: 1px solid var(--border); border-radius: 12px;">
          {#each [
            { href: "https://github.com/boxgramer",                    label: "GitHub",   vb: "0 0 496 512", path: "M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8z" },
            { href: "https://id.linkedin.com/in/boxgramer/en",          label: "LinkedIn", vb: "0 0 448 512", path: "M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" },
            { href: "https://x.com/BoxGramer",                          label: "X",        vb: "0 0 512 512", path: "M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z" },
          ] as s}
            <a href={s.href} target="_blank" aria-label={s.label}
              class="transition-all duration-200 hover:scale-110"
              style="color: var(--text-muted);"
              on:mouseenter={(e) => e.currentTarget.style.color = 'var(--accent)'}
              on:mouseleave={(e) => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox={s.vb} fill="currentColor" style="width:18px;height:18px;">
                <path d={s.path}/>
              </svg>
            </a>
          {/each}
        </div>
      </div>

    </div>
  </div>
</section>

<style>
  @keyframes pulse {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0.35; }
  }
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50%       { opacity: 0; }
  }
</style>
