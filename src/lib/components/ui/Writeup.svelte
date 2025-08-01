<script>
  import { writeups } from "../../../data/writeups";

  const sortedWriteups = [...writeups].sort(
    (a, b) => Number(a.id) - Number(b.id),
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
    <h2 class="text-4xl font-bold text-indigo-900 mb-12">
      Writeups & Research Logs
    </h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {#each sortedWriteups.slice(0, visibleCount) as writeup}
        <div
          class="bg-white rounded-xl shadow-md p-6 border border-indigo-100 hover:shadow-lg transition duration-300 group"
        >
          <p class="text-sm text-indigo-500 font-medium mb-1">{writeup.date}</p>
          <a
            href={writeup.url}
            target="_blank"
            class="text-xl font-semibold text-indigo-900 group-hover:text-indigo-600 transition mb-2"
          >
            {writeup.title}
          </a>
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
