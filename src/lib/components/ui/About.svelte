<script>
  const aboutPoints = [
    { icon: "🎮", text: "Over 5 years of professional software development combined with commercial gameplay programming experience since 2020 building core features for shipped titles." },
    { icon: "🌐", text: "Currently building toward a multiplayer specialization — studying networking, matchmaking, and backend integration with Nakama." },
    { icon: "⚡", text: "Comfortable across the full stack: Godot/Unity gameplay systems, Laravel APIs, and Flutter mobile apps." },
    { icon: "🤝", text: "Experienced working in small programmer teams, comfortable with fast iteration and collaborative game development workflows." },
  ];
</script>

<section id="about" style="background: var(--bg); padding: 7rem 0; border-top: 1px solid var(--border);">
  <div class="container mx-auto max-w-6xl px-6">

    <div class="max-w-3xl mx-auto">

      <!-- Text -->
      <div class="space-y-8">
        <div>
          <div class="flex items-center gap-3 mb-3">
            <span style="width:2px;height:28px;background:var(--warm);border-radius:2px;display:block;"></span>
            <span class="text-xs font-bold tracking-widest uppercase" style="color:var(--warm);">About Me</span>
          </div>
          <h2 class="text-4xl font-black leading-tight" style="color:var(--text);">
            Building games.<br />
            <span style="color:var(--accent);">Solving problems.</span>
          </h2>
        </div>

        <p class="text-base leading-relaxed" style="color:var(--text-muted);">
          I'm <strong style="color:var(--text);">Bazudewa</strong> (Boxgramer) — a Gameplay Programmer
          and Software Engineer based in Bali, Indonesia. I build gameplay features, game mechanics,
          and production-ready systems for commercial games using Godot, Unity, and Roblox.
        </p>

        <p class="text-base leading-relaxed" style="color:var(--text-muted);">
          My background spans game development and full-stack software engineering, giving me the
          ability to connect gameplay systems with solid backend architecture.
        </p>

        <ul class="space-y-4">
          {#each aboutPoints as point}
            <li class="flex items-start gap-4">
              <span class="text-xl mt-0.5 flex-shrink-0">{point.icon}</span>
              <span class="text-sm leading-relaxed" style="color:var(--text-muted);">{point.text}</span>
            </li>
          {/each}
        </ul>

        <div class="flex flex-wrap gap-3 pt-2">
          <a
            href="https://wa.me/6281338209217?text=Hi%20Bazudewa!"
            target="_blank"
            class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
            style="background:var(--accent); color:#080c10; box-shadow:0 0 20px var(--accent-lo);"
          >
            Get in Touch
          </a>
          <a
            href="https://github.com/boxgramer"
            target="_blank"
            class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
            style="background:var(--card); color:var(--text); border:1px solid var(--border-hi);"
          >
            GitHub (Boxgramer)
          </a>
          <a
            href="https://github.com/bazudev"
            target="_blank"
            class="px-5 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 hover:scale-105"
            style="background:var(--card); color:var(--text); border:1px solid var(--border-hi);"
          >
            GitHub (Bazudev)
          </a>
        </div>
      </div>



    </div>
  </div>
</section>
