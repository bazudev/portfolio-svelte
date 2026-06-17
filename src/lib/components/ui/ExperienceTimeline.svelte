<script>
  const experience = [
    {
      number: "01",
      period: "Apr 2025 – Present",
      role: "Game Programmer",
      company: "SLAB Game",
      companyUrl: "https://slabgames.com/",
      type: "Freelance",
      typeColor: "var(--green)",
      description:
        "Freelance game programmer working on commercial game titles for the studio. Building gameplay systems and features using Godot Engine and Roblox scripting (Lua).",
      tags: ["Godot", "Roblox", "Lua", "GDScript"],
    },
    {
      number: "02",
      period: "2021 – Present",
      role: "Freelance Software Engineer",
      company: "Independent",
      companyUrl: null,
      type: "Freelance",
      typeColor: "var(--green)",
      description:
        "Delivering client projects ranging from web applications to automation tools. Primarily working with the TALL stack (TailwindCSS, AlpineJS, Laravel, Livewire) and Flutter for mobile.",
      tags: ["Laravel", "Flutter", "MySQL", "TailwindCSS"],
    },
    {
      number: "03",
      period: "2020 – 2021",
      role: "Full Stack Developer",
      company: "Primakara College",
      companyUrl: "https://primakara.ac.id/",
      type: "Full-time",
      typeColor: "var(--gold)",
      description:
        "Built and maintained internal web applications for the university using the Laravel framework.",
      tags: ["Laravel", "MySQL", "PHP"],
    },
  ];
</script>

<section id="experience" style="background: var(--surface); padding: 7rem 0;">
  <div class="container mx-auto max-w-4xl px-6">
    <div class="mb-14 text-center">
      <div class="flex items-center justify-center gap-3 mb-3">
        <span style="width:2px; height:28px; background:var(--warm); border-radius:2px; display:block;"></span>
        <span class="text-xs font-bold tracking-widest uppercase" style="color:var(--warm);">Career</span>
        <span style="width:2px; height:28px; background:var(--warm); border-radius:2px; display:block;"></span>
      </div>
      <h2 class="text-4xl font-black" style="color:var(--text);">Experience</h2>
    </div>

    <div class="relative">
      <!-- Vertical line -->
      <div class="hidden md:block absolute top-0 bottom-0 w-px" style="left: 120px; background:var(--border-hi);"></div>

      <div class="space-y-8">
        {#each experience as exp}
          <div class="relative flex flex-col md:flex-row gap-4 md:gap-0 items-start">
            
            <!-- Date -->
            <div class="hidden md:block shrink-0 text-right mt-1.5 pr-8" style="width: 120px;">
              <div class="text-sm font-bold" style="color:var(--text-muted);">{exp.period.split(" ")[0]}<br/>{exp.period.split(" ").pop()}</div>
            </div>

            <!-- Dot perfectly centered on the line -->
            <div class="hidden md:block absolute top-[14px] -translate-x-1/2 w-4 h-4 rounded-full border-[3px] z-10"
              style="left: 120px; background:var(--card); border-color:{exp.typeColor}; box-shadow: 0 0 0 4px var(--surface);">
            </div>

            <!-- Card -->
            <div class="flex-1 w-full rounded-2xl p-6 md:p-8 transition-all duration-300 hover:-translate-x-1 group md:ml-10"
              style="background: var(--card); border: 1px solid var(--border); box-shadow: 0 4px 10px rgba(0,0,0,0.02);">
              
              <div class="flex flex-wrap items-start justify-between gap-3 mb-3">
                <div>
                  <div class="flex items-center gap-2 flex-wrap mb-1">
                    <h3 class="text-lg font-bold" style="color:var(--text);">{exp.role}</h3>
                    <span class="text-[10px] font-bold uppercase px-2 py-0.5 rounded"
                      style="background:var(--surface); color:{exp.typeColor};">
                      {exp.type}
                    </span>
                  </div>
                  
                  {#if exp.companyUrl}
                    <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" 
                      class="text-sm font-bold hover:underline" style="color:var(--text-muted);">
                      @ {exp.company}
                    </a>
                  {:else}
                    <span class="text-sm font-bold" style="color:var(--text-muted);">@ {exp.company}</span>
                  {/if}
                </div>
                
                <div class="md:hidden text-xs font-bold px-2 py-1 rounded" style="background:var(--surface); color:var(--text-muted);">
                  {exp.period}
                </div>
              </div>

              <p class="text-sm leading-relaxed mb-5" style="color:var(--text-muted);">
                {exp.description}
              </p>

              <div class="flex flex-wrap gap-2">
                {#each exp.tags as tag}
                  <span class="text-xs px-2.5 py-1 rounded-md transition-colors group-hover:bg-black/5"
                    style="background:var(--surface); color:var(--text-muted); border:1px solid var(--border);">
                    {tag}
                  </span>
                {/each}
              </div>

            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
</section>
