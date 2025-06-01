<script>
  let activeTab = "opensource";

  let openSourceProjects = [
    {
      title: "Box Cache Tester",
      description:
        "Box Cache Tester is a command-line tool built in Rust for testing web cache behavior, especially useful for detecting and testing cache poisoning vulnerabilities. It supports customizing request headers, stripping response headers, and detecting reflected content in HTML responses with colorized terminal output.",
      images: ["/box-cache-tester/test.png"],
      link: "https://github.com/boxgramer/box-cache-tester",
    },
    {
      title: "Box Downloader",
      description:
        "BOX Downloader is a parallel file downloader built with Rust, utilizing multiple threads to download a file in parts and then merging them into a complete file. This is useful for large files that can benefit from parallel downloading.",
      images: ["/box-downloader/testing.png"],
      link: "https://github.com/boxgramer/box-downloader",
    },
    {
      title: "Bruteforce Testing Auth System",
      description:
        "A simple Rust-based HTTP brute force tool that supports dynamic parameters, wordlist combinations, and high-performance concurrency using tokio.",
      images: ["/brutoforce-testing/brutforcepng.png"],
      link: "https://github.com/boxgramer/brutforce-testing",
    },
  ];

  let clientProjects = [
    {
      title: "Pos System Web and Mobile",
      description:
        "this system using laravel project and using rest architecture, this webapp purpose for managaging stock,user client pos , get report from multple branch my role in this project is optimize performace , review code , mangaging team",
      images: [
        "/pos/mobile_transaksi.png",
        "/pos/mobile_dashboard.png",
        "/pos/mobile_kas.png",
        "/pos/report.png",
        "/pos/barang.png",
        "/pos/stok.png",
        "/pos/dashboard.png",
        "/pos/pilih_cabang.png",
      ],
      demoLink: "https://wa.me/6281338209217?text=demopos",
    },
    {
      title: "Invoices System",
      description:
        "This system is used to record every incoming order, and to print invoices and monthly reports.",
      images: [
        "/trem/detail_booking.png",
        "/trem/booking.png",
        "/trem/transaksi.png",
        "/trem/dashboard.png",
        "/trem/login.png",
      ],
      demoLink: "https://wa.me/6281338209217?text=demoinvoice",
    },
    {
      title: "Exam System Android and Web ",
      description:
        "This is a computer-based test system using Android, built with Flutter for the mobile app and Laravel for the admin system.",
      images: [
        "/cbt/dashboardnew.png",
        "/cbt/login.png",
        "/cbt/mobile_score_test.png",
        "/cbt/mobile_run_test.png",
        "/cbt/mobile_start_test.png",
        "/cbt/report.png",
        "/cbt/dashboard.png",
        "/cbt/test.png",
      ],
      demoLink: "https://wa.me/6281338209217?text=demoexam",
    },
  ];
  let showAllOpenSource = false;
  let showAllClient = false;
</script>

<section id="projects" class="bg-white py-20">
  <div class="container mx-auto max-w-6xl px-6">
    <h2 class="text-4xl font-bold text-gray-900 mb-8">Projects</h2>

    <!-- Tabs -->
    <div class="flex space-x-4 mb-8">
      <button
        class={`px-4 py-2 rounded-full text-sm font-medium border transition ${activeTab === "opensource" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}
        on:click={() => (activeTab = "opensource")}
      >
        Open Source Tools
      </button>
      <button
        class={`px-4 py-2 rounded-full text-sm font-medium border transition ${activeTab === "client" ? "bg-indigo-600 text-white" : "bg-gray-100 text-gray-700"}`}
        on:click={() => (activeTab = "client")}
      >
        Best Freelance Project
      </button>
    </div>

    <!-- Open Source -->
    {#if activeTab === "opensource"}
      <div class="space-y-10">
        {#each showAllOpenSource ? openSourceProjects : openSourceProjects.slice(0, 3) as project}
          <div class="bg-indigo-50 flex gap-5 rounded-xl p-6 shadow-md">
            <div class="overflow-x-auto w-1/4 flex space-x-4 mb-4">
              {#each project.images as img}
                <img
                  src={img}
                  alt={project.title}
                  class="w-64 h-40 object-cover rounded-lg"
                />
              {/each}
            </div>
            <div class="flex-1/2">
              <h3 class="text-2xl font-bold text-indigo-800 mb-2">
                {project.title}
              </h3>
              <p class="text-gray-700 mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                class="text-indigo-600 hover:text-indigo-800 font-medium underline"
              >
                View on GitHub
              </a>
            </div>
          </div>
        {/each}
        <div class="text-center mt-6">
          {#if openSourceProjects.length > 3}
            {#if showAllOpenSource}
              <button
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full text-sm font-medium"
                on:click={() => (showAllOpenSource = false)}
              >
                Hide
              </button>
            {:else}
              <button
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm font-medium"
                on:click={() => (showAllOpenSource = true)}
              >
                Show All
              </button>
            {/if}
          {/if}
        </div>
      </div>
    {/if}

    <!-- Client Freelance -->
    {#if activeTab === "client"}
      <div class="space-y-10">
        {#each showAllClient ? clientProjects : clientProjects.slice(0, 3) as project}
          <div class="bg-gray-50 rounded-xl p-6 shadow-md">
            <div class="overflow-x-auto flex space-x-4 mb-4">
              {#each project.images as img}
                <img
                  src={img}
                  alt={project.title}
                  class="w-64 h-40 object-cover rounded-lg"
                />
              {/each}
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">
              {project.title}
            </h3>
            <p class="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.demoLink}
              class="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-full text-sm font-medium"
            >
              Request Demo
            </a>
          </div>
        {/each}
        <div class="text-center mt-6">
          {#if clientProjects.length > 3}
            {#if showAllClient}
              <button
                class="bg-gray-300 hover:bg-gray-400 text-gray-800 px-6 py-2 rounded-full text-sm font-medium"
                on:click={() => (showAllClient = false)}
              >
                Hide
              </button>
            {:else}
              <button
                class="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-2 rounded-full text-sm font-medium"
                on:click={() => (showAllClient = true)}
              >
                Show All
              </button>
            {/if}
          {/if}
        </div>
      </div>
    {/if}
  </div>
</section>
