<script>
  const aboutPoints = [
    { icon: "🎮", text: "5+ years of professional software development, with commercial gameplay programming experience since 2025 — building real features for shipped games." },
    { icon: "🌐", text: "Currently building toward a multiplayer specialization — studying networking, matchmaking, and backend integration with Nakama." },
    { icon: "🔒", text: "Security-curious engineer with hands-on experience in web vulnerability research (cache poisoning, file upload bypass attacks)." },
    { icon: "⚡", text: "Comfortable across the full stack: Godot/Unity gameplay systems, Laravel APIs, and Flutter mobile apps." },
    { icon: "🤝", text: "Experienced working in small programmer teams, comfortable with fast iteration and collaborative game development workflows." },
  ];
</script>

<section id="about" style="background: var(--bg); padding: 7rem 0; border-top: 1px solid var(--border);">
  <div class="container mx-auto max-w-6xl px-6">

    <div class="grid lg:grid-cols-2 gap-16 items-center">

      <!-- Left: Text -->
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
            GitHub Profile
          </a>
        </div>
      </div>

      <!-- Right: Quick facts -->
      <div class="rounded-3xl p-8 relative overflow-hidden"
           style="background: var(--card); border: 1px solid var(--border); box-shadow: 0 4px 15px rgba(0,0,0,0.02);">
        <h3 class="text-lg font-bold" style="color:var(--text);">Quick Facts</h3>

        <div class="space-y-1">
          {#each [
            { label: "Primary Identity",      value: "Gameplay Programmer",          color: "var(--accent)" },
            { label: "Secondary Identity",    value: "Software Engineer",             color: "var(--green)" },
            { label: "Based in",              value: "Indonesia (WITA)",             color: "var(--accent)" },
            { label: "Experience",            value: "5+ Years",                     color: "var(--green)" },
            { label: "Open To",               value: "Remote / Onsite Roles",        color: "var(--warm)" },
          ] as detail}
            <div class="flex justify-between items-start gap-4 py-3 border-b" style="border-color:var(--border);">
              <span class="text-sm" style="color:var(--text-muted);">{detail.label}</span>
              <span class="text-sm font-semibold text-right" style="color:{detail.color};">{detail.value}</span>
            </div>
          {/each}
        </div>

        <div class="pt-2">
          <p class="text-xs mb-3" style="color: var(--text-muted);">Connect with me</p>
          <div class="flex gap-2 flex-wrap">
            {#each [
              { label: "GitHub",   href: "https://github.com/boxgramer" },
              { label: "LinkedIn", href: "https://id.linkedin.com/in/boxgramer/en" },
              { label: "X",       href: "https://x.com/BoxGramer" },
              { label: "WhatsApp",href: "https://wa.me/6281338209217" },
            ] as link}
              <a href={link.href} target="_blank"
                class="text-xs px-3 py-1.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:border-white/20"
                style="background:var(--surface); color:var(--text-muted); border:1px solid var(--border);">
                {link.label}
              </a>
            {/each}
          </div>
        </div>
      </div>

    </div>
  </div>
</section>
