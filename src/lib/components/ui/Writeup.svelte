<script>
  export let writeups = [
    {
      id: 1,
      title: 'Web shell upload via obfuscated file extentiony First Writeup',
      date: '2025-04-22',
      summary: 'Bypassed file upload filter using null byte (%00) to upload a PHP web shell, causing Remote Code Execution (RCE) due to weak server-side validation.',
      url : "https://github.com/boxgramer/writeup/blob/main/writeup-20250422.md"
    },
    {
      id: 2,
      title: ' Web Cache Poisoning with multiple headers',
      date: '2025-04-25',
      summary: 'Web cache poisoning via X-Forwarded headers enables injecting malicious scripts by poisoning cached responses, risking credential theft and session hijacking.',
      url: 'https://github.com/boxgramer/writeup/blob/main/writeup-20250425.md'
    },
    {
      id: 3,
      title: 'Targeted web cache poisoning using an unknown header',
      date: '2025-04-26',
      summary: 'Targeted web cache poisoning via unvalidated X-Host header enables delivering malicious JavaScript to specific users, risking session hijacking and data theft.',
      url: 'https://github.com/boxgramer/writeup/blob/main/writeup-20250426.md'
    },
    {
      id: 4,
      title: 'Web cache poisoning via an unkeyed query parameter',
      date: '2025-04-27',
      summary: 'Web cache poisoning via unkeyed UTM query parameter allows injecting malicious JavaScript into cached pages, risking stored XSS attacks on users.',
      url: 'https://github.com/boxgramer/writeup/blob/main/writeup-20250427.md'
    },
    {
      id: 5,
      title: 'Parameter Cloaking',
      date: '2025-04-29',
      summary: 'Parameter cloaking with unkeyed UTM and ‘;’ separator enables cache poisoning, allowing attackers to inject scripts that execute on victim browsers.',
      url: 'https://github.com/boxgramer/writeup/blob/main/writeup-20250429.md'
    },
    {
      id: 6,
      title: ' Web cache poisoning via a fat GET request',
      date: '2025-04-30',
      summary: 'Web cache poisoning via fat GET request with body allows script injection due to improper parameter parsing, enabling XSS and session hijacking risks.',
      url: 'https://github.com/boxgramer/writeup/blob/main/writeup-20250430.md'
    },
    {
      id: 7,
      title: 'Web cache poisoning to exploit a DOM vulnerability via a cache with strict cacheability criteria',
      date: '2025-05-10',
      summary: 'Web cache poisoning exploits DOM vulnerability via poisoned geolocate.json, enabling script injection and cookie theft through unsafe content rendering.',
      url: 'https://github.com/boxgramer/writeup/blob/main/writeup-20250510.md'
      
    }
    
  ];

  const sortedWriteups = [...writeups].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  let visibleCount = 6;

  function showAll() {
    visibleCount = sortedWriteups.length;
  }

  function hideAll() {
    visibleCount = 6;
  }
</script>

<section id="writeups" class="bg-gradient-to-br from-white to-indigo-50 py-20">
  <div class="container mx-auto max-w-6xl px-6">
    <h2 class="text-4xl font-bold text-indigo-900 mb-12">Writeups & Research Logs</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {#each sortedWriteups.slice(0, visibleCount) as writeup}
        <div class="bg-white rounded-xl shadow-md p-6 border border-indigo-100 hover:shadow-lg transition duration-300 group">
          <p class="text-sm text-indigo-500 font-medium mb-1">{writeup.date}</p>
          <h3 class="text-xl font-semibold text-indigo-900 group-hover:text-indigo-600 transition mb-2">
            {writeup.title}
          </h3>
          <p class="text-sm text-gray-700">{writeup.summary}</p>
        </div>
      {/each}
    </div>

    <div class="text-center">
      {#if visibleCount < sortedWriteups.length}
        <button
          on:click={showAll}
          class="bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium px-6 py-3 rounded-full shadow transition"
        >
          Show All Writeups
        </button>
      {:else}
        <button
          on:click={hideAll}
          class="bg-gray-300 hover:bg-gray-400 text-gray-800 text-sm font-medium px-6 py-3 rounded-full shadow transition"
        >
          Hide
        </button>
      {/if}
    </div>
  </div>
</section>
