<script>
  import { page } from '$app/stores';
    import Footer from '$lib/components/layout/Footer.svelte';
  import Header from '$lib/components/layout/Header.svelte';
    import Contact from '$lib/components/ui/Contact.svelte';
    import Home from '$lib/components/ui/Home.svelte';
    import Projects from '$lib/components/ui/Projects.svelte';
    import Writeup from '$lib/components/ui/Writeup.svelte';
</script>

<Header />
<main>
  <Home />
  <Writeup />
  <Projects />
  <Contact />
</main>
<Footer />
