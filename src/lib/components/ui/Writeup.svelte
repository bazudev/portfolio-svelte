<!-- WriteupThumbnailList.svelte -->
<script>
  export let writeups = [
    {
      id: 1,
      title: 'My First Writeup',
      date: '2022-01-01',
      image: 'src/lib/assets/writeup1.png',
      summary: 'This is a summary of my first writeup.'
    },
    {
      id: 2,
      title: 'My Second Writeup',
      date: '2022-01-15',
      image: 'src/lib/assets/writeup2.png',
      summary: 'This is a summary of my second writeup.'
    },
    {
      id: 3,
      title: 'My Third Writeup',
      date: '2022-02-01',
      image: 'src/lib/assets/writeup3.png',
      summary: 'This is a summary of my third writeup.'
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each writeups as writeup}
    <div class="bg-white shadow-md p-4">
      <img src={writeup.image} alt={writeup.title} class="w-full h-48 object-cover" />
      <h3 class="text-lg font-bold text-gray-900 mt-4">{writeup.title}</h3>
      <p class="text-sm text-gray-600">{writeup.date}</p>
      <p class="text-sm text-gray-600">{writeup.summary}</p>
    </div>
  {/each}
</div>