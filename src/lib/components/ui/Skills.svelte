<script>
  const skillGroups = [
    {
      label: "Gameplay Programming",
      color: "#93c5fd",
      icon: "🎮",
      skills: ["Unity", "Godot", "Roblox / Lua", "C# (.NET)", "GDScript"],
    },
    {
      label: "Multiplayer & Networking",
      color: "#86efac",
      icon: "🌐",
      skills: ["Nakama Server", "REST APIs", "Authentication", "Matchmaking", "Networking Concepts"],
    },
    {
      label: "Programming Languages",
      color: "#fde68a",
      icon: "💻",
      skills: ["C#", "GDScript", "PHP", "JavaScript / TypeScript", "Lua"],
    },
    {
      label: "Software Engineering",
      color: "#fca5a5",
      icon: "⚙️",
      skills: ["Laravel", "MySQL", "PostgreSQL", "Git / GitHub", "REST Architecture"],
    },
    {
      label: "Additional Skills",
      color: "#c4b5fd",
      icon: "🔒",
      skills: ["Security Concepts", "Performance Optimization", "Code Review", "Flutter / Dart", "Web Vulnerabilities"],
    },
  ];
</script>

<section style="background: var(--bg); padding: 7rem 0; border-top: 1px solid var(--border);">
  <div class="container mx-auto max-w-6xl px-6">

    <div class="mb-14">
      <div class="flex items-center gap-3 mb-3">
        <span style="width:2px;height:28px;background:var(--warm);border-radius:2px;display:block;"></span>
        <span class="text-xs font-bold tracking-widest uppercase" style="color:var(--warm);">Toolkit</span>
      </div>
      <h2 class="text-4xl font-black" style="color:var(--text);">Technical Skills</h2>
      <p class="mt-3 text-base max-w-xl" style="color:var(--text-muted);">
        Gameplay programming at the core, with full-stack engineering depth.
      </p>
    </div>

    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
      {#each skillGroups as group}
        <div
          class="rounded-2xl p-6 transition-all duration-300 hover:-translate-y-2 group"
          style="background: var(--card); border: 1px solid var(--border); box-shadow: 0 4px 6px rgba(0,0,0,0.02);"
        >
          <div class="flex items-center gap-3 mb-4">
            <span class="text-2xl">{group.icon}</span>
            <h3 class="font-bold text-sm tracking-wide" style="color:var(--text);">{group.label}</h3>
          </div>
          <ul class="space-y-2">
            {#each group.skills as skill}
                <li class="flex items-center gap-2 text-sm font-medium" style="color:var(--text-muted);">
                  <span class="w-1.5 h-1.5 rounded-full" style="background:{group.color};"></span>
                  {skill}
                </li>
            {/each}
          </ul>
        </div>
      {/each}
    </div>

  </div>
</section>
