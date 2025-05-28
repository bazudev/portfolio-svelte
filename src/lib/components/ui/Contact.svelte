<!-- Contact.svelte -->
<script>
  export let contactInfo = {
    email: 'your-email@example.com',
    phone: '+1 123 456 7890',
    address: '123 Main St, Anytown, USA'
  };
</script>

<div class="max-w-7xl mx-auto p-4 md:p-6 lg:p-8">
  <h2 class="text-3xl font-bold text-gray-900 mb-4">Get in Touch</h2>
  <p class="text-lg text-gray-600 mb-4">If you'd like to get in touch, please fill out the form below or contact me directly using the information provided.</p>
  <form class="w-full max-w-lg">
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
          First Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-first-name" type="text" placeholder="Jane">
      </div>
      <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
          Last Name
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-email">
          Email
        </label>
        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-email" type="email" placeholder="your-email@example.com">
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-message">
          Message
        </label>
        <textarea class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-message" placeholder="Your message..."></textarea>
      </div>
    </div>
    <div class="flex flex-wrap -mx-3 mb-6">
      <div class="w-full px-3 mb-6 md:mb-0">
        <button class="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded" type="submit">
          Send Message
        </button>
      </div>
    </div>
  </form>
  <h3 class="text-lg font-bold text-gray-900 mb-2">Contact Information</h3>
  <p class="text-sm text-gray-600 mb-2">Email: {contactInfo.email}</p>
  <p class="text-sm text-gray-600 mb-2">Phone: {contactInfo.phone}</p>
  <p class="text-sm text-gray-600 mb-2">Address: {contactInfo.address}</p>
</div>