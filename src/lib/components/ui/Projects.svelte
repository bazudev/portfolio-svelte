<script>
  let activeTab = 'opensource';

  let openSourceProjects = [
    {
      title: 'Rust Proxy Tool',
      description: 'An HTTP proxy built in Rust for debugging and MITM attacks.',
      images: [
        '/images/proxy1.png',
        '/images/proxy2.png',
        '/images/proxy3.png'
      ],
      link: 'https://github.com/yourgithub/proxy-tool'
    },
    {
      title: 'Bug Replay',
      description: 'A browser extension to record and replay bugs easily.',
      images: [
        '/images/bug1.png',
        '/images/bug2.png'
      ],
      link: 'https://github.com/yourgithub/bug-replay'
    },
    {
      title: 'Static Code Analyzer',
      description: 'A tool to find bugs and security flaws in source code.',
      images: [
        '/images/analyzer1.png'
      ],
      link: 'https://github.com/yourgithub/static-analyzer'
    },
    {
      title: 'API Request Logger',
      description: 'Middleware to log and analyze API requests and responses.',
      images: [
        '/images/api-logger1.png',
        '/images/api-logger2.png'
      ],
      link: 'https://github.com/yourgithub/api-logger'
    },
    {
      title: 'WebSocket Debugger',
      description: 'A debugging tool for WebSocket communications in real time.',
      images: [
        '/images/ws-debug1.png'
      ],
      link: 'https://github.com/yourgithub/ws-debugger'
    }
  ];

  let clientProjects = [
    {
      title: 'E-commerce Admin Panel',
      description: 'A full-featured admin dashboard built with Laravel and Vue.',
      images: [
        '/images/adminpanel1.png',
        '/images/adminpanel2.png'
      ],
      demoLink: '#contact'
    },
    {
      title: 'Booking System',
      description: 'Custom booking system with calendar and client-side auth.',
      images: [
        '/images/booking1.png',
        '/images/booking2.png'
      ],
      demoLink: '#contact'
    },
    {
      title: 'Portfolio Website',
      description: 'Responsive portfolio website with CMS integration.',
      images: [
        '/images/portfolio1.png'
      ],
      demoLink: '#contact'
    },
    {
      title: 'Event Management App',
      description: 'Mobile-friendly app to manage events and registrations.',
      images: [
        '/images/event1.png',
        '/images/event2.png'
      ],
      demoLink: '#contact'
    },
    {
      title: 'Customer Support Dashboard',
      description: 'Dashboard for customer support tickets and chat integration.',
      images: [
        '/images/support1.png'
      ],
      demoLink: '#contact'
    }
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
        class={`px-4 py-2 rounded-full text-sm font-medium border transition ${activeTab === 'opensource' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
        on:click={() => (activeTab = 'opensource')}
      >
        Open Source Tools
      </button>
      <button
        class={`px-4 py-2 rounded-full text-sm font-medium border transition ${activeTab === 'client' ? 'bg-indigo-600 text-white' : 'bg-gray-100 text-gray-700'}`}
        on:click={() => (activeTab = 'client')}
      >
        Client Freelance Tools
      </button>
    </div>

    <!-- Open Source -->
    {#if activeTab === 'opensource'}
      <div class="space-y-10">
        {#each (showAllOpenSource ? openSourceProjects : openSourceProjects.slice(0, 3)) as project}
          <div class="bg-indigo-50 rounded-xl p-6 shadow-md">
            <div class="overflow-x-auto flex space-x-4 mb-4">
              {#each project.images as img}
                <img src={img} alt={project.title} class="w-64 h-40 object-cover rounded-lg" />
              {/each}
            </div>
            <h3 class="text-2xl font-bold text-indigo-800 mb-2">{project.title}</h3>
            <p class="text-gray-700 mb-4">{project.description}</p>
            <a
              href={project.link}
              target="_blank"
              class="text-indigo-600 hover:text-indigo-800 font-medium underline"
            >
              View on GitHub
            </a>
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
    {#if activeTab === 'client'}
      <div class="space-y-10">
        {#each (showAllClient ? clientProjects : clientProjects.slice(0, 3)) as project}
          <div class="bg-gray-50 rounded-xl p-6 shadow-md">
            <div class="overflow-x-auto flex space-x-4 mb-4">
              {#each project.images as img}
                <img src={img} alt={project.title} class="w-64 h-40 object-cover rounded-lg" />
              {/each}
            </div>
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
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
