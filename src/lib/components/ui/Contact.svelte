<script>
  const whatsappNumber = '6281338209217';
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=Hello!%20I%20would%20like%20to%20contact%20you.`;
</script>

<section id="contact" style="background: var(--surface); padding: 7rem 0; border-top: 1px solid var(--border);">
  <div class="container mx-auto max-w-4xl px-6 text-center">

    <div class="flex items-center justify-center gap-3 mb-4">
      <span style="width:2px; height:28px; background:var(--accent); border-radius:2px; display:block;"></span>
      <span class="text-xs font-bold tracking-widest uppercase" style="color:var(--accent);">Contact</span>
      <span style="width:2px; height:28px; background:var(--accent); border-radius:2px; display:block;"></span>
    </div>

    <h2 class="text-4xl font-black mb-4" style="color:var(--text);">Let's Build Something</h2>
    <p class="text-base max-w-xl mx-auto mb-12" style="color:var(--text-muted);">
      Open to onsite game studio roles, remote opportunities, and freelance game development contracts.
      Reach out — I respond fast.
    </p>

    <div class="grid sm:grid-cols-3 gap-4 mb-10 max-w-2xl mx-auto">
      {#each [
        { icon: "📧", label: "Email", value: "boxgramer@gmail.com", href: "mailto:boxgramer@gmail.com" },
        { icon: "💬", label: "WhatsApp", value: "+62 813-3820-9217", href: whatsappLink },
        { icon: "💼", label: "LinkedIn", value: "in/boxgramer", href: "https://id.linkedin.com/in/boxgramer/en" },
      ] as method}
        <a href={method.href} target="_blank"
          class="w-full sm:w-auto px-8 py-4 rounded-xl font-bold transition-all duration-200 hover:-translate-y-1 hover:shadow-xl"
          style="background: #f3f4f6; color: #111827; border: 1px solid #e5e7eb; text-decoration:none;">
          <span class="text-3xl">{method.icon}</span>
          <div>
            <p class="text-xs font-semibold uppercase tracking-widest mb-1" style="color:#6b7280;">{method.label}</p>
            <p class="text-sm font-medium" style="color:#111827;">{method.value}</p>
          </div>
        </a>
      {/each}
    </div>

    <a
      href={whatsappLink}
      target="_blank"
      class="inline-flex items-center gap-2 px-8 py-4 rounded-xl text-base font-bold text-white transition-all duration-200 hover:scale-105"
      style="background:var(--accent); box-shadow: 0 0 32px var(--accent-lo);"
    >
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" style="width:20px;height:20px;">
        <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
      </svg>
      Start a Conversation
    </a>
  </div>
</section>

<!-- Floating WhatsApp button -->
<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  class="fixed bottom-6 right-6 p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 hover:shadow-green-500/30 z-50"
  style="background:#25d366; color:white;"
>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" fill="currentColor" style="width:22px;height:22px;">
    <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
  </svg>
</a>
