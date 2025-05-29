<script>
  export let whatsappNumber = '+11234567890';
  const whatsappLink = `https://wa.me/${whatsappNumber.replace(/\D/g, '')}?text=Hello!%20I%20would%20like%20to%20contact%20you.`;
</script>

<!-- Floating WhatsApp button -->
<a
  href={whatsappLink}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  class="fixed bottom-6 right-6 bg-green-600 hover:bg-green-700 text-white p-4 rounded-full shadow-lg transition-shadow duration-300"
  style="z-index: 1000;"
>
  <svg xmlns="http://www.w3.org/2000/svg" class="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 10.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
    <path stroke-linecap="round" stroke-linejoin="round" d="M17.664 15.318c-.778.778-2.333 1.393-4.164 1.386-3.03-.011-5.761-2.734-5.776-5.756-.009-1.65.65-3.21 1.434-4.02m8.545 8.544l3.237 3.238m-4.13-2.912l2.678 2.677" />
  </svg>
</a>
