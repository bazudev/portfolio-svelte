<script>
  import { page } from '$app/stores';
  import Header from '$lib/components/layout/Header.svelte';
</script>

<Header />
<main>
  <div class="container mx-auto p-4 pt-6">
    <h1 class="text-3xl font-bold mb-4">Portfolio</h1>
    <p class="text-lg">Berikut adalah beberapa contoh proyek yang telah saya kerjakan:</p>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      <div class="bg-white rounded shadow-md p-4">
        <h2 class="text-lg font-bold mb-2">Proyek 1</h2>
        <p class="text-sm">Deskripsi proyek 1</p>
      </div>
      <div class="bg-white rounded shadow-md p-4">
        <h2 class="text-lg font-bold mb-2">Proyek 2</h2>
        <p class="text-sm">Deskripsi proyek 2</p>
      </div>
      <div class="bg-white rounded shadow-md p-4">
        <h2 class="text-lg font-bold mb-2">Proyek 3</h2>
        <p class="text-sm">Deskripsi proyek 3</p>
      </div>
    </div>
  </div>
</main>
