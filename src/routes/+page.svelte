<script>
  import Footer              from '$lib/components/layout/Footer.svelte';
  import Header              from '$lib/components/layout/Header.svelte';
  import Home                from '$lib/components/ui/Home.svelte';
  import GameProjects        from '$lib/components/ui/GameProjects.svelte';
  import TechnicalShowcase   from '$lib/components/ui/TechnicalShowcase.svelte';
  import Skills              from '$lib/components/ui/Skills.svelte';
  import ExperienceTimeline  from '$lib/components/ui/ExperienceTimeline.svelte';
  import About               from '$lib/components/ui/About.svelte';
  import Projects            from '$lib/components/ui/Projects.svelte';
  import Writeup             from '$lib/components/ui/Writeup.svelte';
  import Contact             from '$lib/components/ui/Contact.svelte';
</script>

<svelte:head>
  <title>Boxgramer — Commercial Gameplay Programmer</title>
  <meta name="description" content="Bazudewa (Boxgramer) — Commercial Gameplay Programmer. Building gameplay systems, game architecture, and production-ready features for commercial games using Unity, Godot, and modern engineering practices." />
</svelte:head>

<Header />
<main>
  <!-- 1. Hero -->
  <Home />
  <!-- 2. Featured Commercial Game Projects (PRIMARY) -->
  <GameProjects />
  <!-- 3. Personal / Technical Showcase -->
  <TechnicalShowcase />
  <!-- 4. Skills -->
  <Skills />
  <!-- 5. Experience Timeline -->
  <ExperienceTimeline />
  <!-- 6. About (inline) -->
  <About />
  <!-- 7. Software Engineering / Freelance Work (demoted) -->
  <Projects />
  <!-- 8. Writeups & Research (secondary interest) -->
  <Writeup />
  <!-- 9. Contact -->
  <Contact />
</main>
<Footer />
