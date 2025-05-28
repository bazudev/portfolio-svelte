<!-- Hero.svelte -->
<script>
  import avatar from '$lib/assets/avatar.png';
</script>

<section class="bg-gray-100 py-12 flex justify-center items-center">
  <div class="container mx-auto flex flex-wrap justify-center items-center">
    <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
      <h2 class="text-3xl font-bold text-gray-900 mb-4">My Story</h2>
      <p class="text-lg text-gray-600 mb-4">I'm a highly motivated and experienced developer with a strong passion for building innovative solutions.</p>
      <h3 class="text-2xl font-bold text-gray-900 mb-2">Experience</h3>
      <ul class="list-none mb-4">
        <li class="mb-2">2018-2020: Software Engineer at ABC Company</li>
        <li class="mb-2">2020-2022: Senior Software Engineer at DEF Company</li>
        <li class="mb-2">2022-Present: Freelance Software Engineer</li>
      </ul>
    </div>
    <div class="w-full md:w-1/2 lg:w-1/2 xl:w-1/2 p-4">
      <img src={avatar} alt="My Photo" class="rounded-full w-48 h-48 object-cover" />
    </div>
  </div>
</section>