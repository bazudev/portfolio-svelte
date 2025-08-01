<script lang="ts">
  import { goto } from "$app/navigation";
  import { Icon, ArrowLeft, ArrowRight } from "svelte-hero-icons";
  import logo from "$assets/avatar.png";
  import { onMount } from "svelte";
  export let title: string | null = null;
  export let nextUrl: string | null = null;
  export let prevUrl: string | null = null;

  let currentSection = "";

  const updateCurrentSection = () => {
    currentSection = window.location.hash || "#home";
  };

  onMount(() => {
    updateCurrentSection();
    window.addEventListener("hashchange", updateCurrentSection);
    return () => window.removeEventListener("hashchange", updateCurrentSection);
  });
  console.log(currentSection);
</script>

<header
  class="sticky top-0 left-0 right-0 z-50 max-h-80 h-20 bg-white shadow-md flex justify-center items-center w-full"
>
  <nav
    class="container mx-auto flex justify-between items-center"
    aria-label="Main navigation"
  >
    <div
      class="mx-6 flex gap-5 items-center cursor-pointer"
      on:click={() => goto("/")}
    >
      <img src={logo} alt="Logo" class="h-12 w-12 rounded-lg" />
      <h1 class="text-2xl font-bold uppercase sm:block hidden">Boxgramer</h1>
    </div>
    {#if title}
      <h1 class="text-md font-bold uppercase block p-2">{title}</h1>
    {/if}

    {#if title}
      <div class="flex justify-center items-center gap-4">
        {#if prevUrl}
          <a
            href={prevUrl}
            class="text-gray-600 hover:text-gray-900 transition duration-200"
          >
            <Icon src={ArrowLeft} size="24" />
          </a>
        {/if}

        {#if nextUrl}
          <a
            href={nextUrl}
            class="text-gray-600 hover:text-gray-900 transition duration-200"
          >
            <Icon src={ArrowRight} size="24" />
          </a>
        {/if}
      </div>
    {:else}
      <ul class="flex justify-center items-center">
        <li class="mr-6">
          <a
            href="#home"
            class="relative text-lg font-bold text-gray-600 hover:text-gray-900 transition duration-200
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[5px] after:w-0
            hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300"
            class:after:w-full={currentSection === "#home"}
          >
            Home
          </a>
        </li>
        <li class="mr-6">
          <a
            href="#writeups"
            class="relative text-lg font-bold text-gray-600 hover:text-gray-900 transition duration-200
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[5px] after:w-0
            hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300"
            class:after:w-full={currentSection === "#writeups"}
          >
            Writeup
          </a>
        </li>
        <li class="mr-6">
          <a
            href="#projects"
            class="relative text-lg font-bold text-gray-600 hover:text-gray-900 transition duration-200
            after:content-[''] after:absolute after:left-0 after:-bottom-1 after:h-[5px] after:w-0
            hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300"
            class:after:w-full={currentSection === "#projects"}
          >
            Project
          </a>
        </li>
      </ul>
    {/if}
  </nav>
</header>
