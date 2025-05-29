<script>
  export let writeups = [
    {
      id: 1,
      title: 'My First Writeup',
      date: '2022-01-01',
      summary: 'A detailed walkthrough of my first bug bounty experience and how I approached it.'
    },
    {
      id: 2,
      title: 'My Second Writeup',
      date: '2022-01-15',
      summary: 'Exploring an IDOR vulnerability I found on a public VDP and how it was fixed.'
    },
    {
      id: 3,
      title: 'My Third Writeup',
      date: '2022-02-01',
      summary: 'How I chained a misconfigured CORS with token leakage to gain account access.'
    },
    {
      id: 4,
      title: 'My Fourth Writeup',
      date: '2022-03-01',
      summary: 'Found a subdomain takeover in a forgotten staging environment.'
    },
    {
      id: 5,
      title: 'My Fifth Writeup',
      date: '2022-04-10',
      summary: 'Reflected XSS in a React SPA using a clever bypass.'
    },
    {
      id: 6,
      title: 'My Sixth Writeup',
      date: '2022-05-21',
      summary: 'Chained CSRF + misconfigured CORS to escalate privileges.'
    },
    {
      id: 7,
      title: 'My Seventh Writeup',
      date: '2022-06-30',
      summary: 'Advanced SSRF chaining on an internal API endpoint.'
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
