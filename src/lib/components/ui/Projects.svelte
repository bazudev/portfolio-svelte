<!-- ProjectList.svelte -->
<script>
  import avatar from '$lib/assets/avatar.png';

  export let projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description of project 1.',
      image: avatar,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      link: 'https://project1.com'
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is a description of project 2.',
      image: avatar,
      technologies: ['React', 'Node.js', 'MongoDB'],
      link: 'https://project2.com'
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is a description of project 3.',
      image: avatar,
      technologies: ['Angular', 'Ruby on Rails', 'PostgreSQL'],
      link: 'https://project3.com'
    }
  ];
</script>

<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
  {#each projects as project}
    <div class="bg-white shadow-md p-4">
      <img src={project.image} alt={project.title} class="w-full h-48 object-cover" />
      <h3 class="text-lg font-bold text-gray-900 mt-4">{project.title}</h3>
      <p class="text-sm text-gray-600">{project.description}</p>
      <p class="text-sm text-gray-600">Technologies: {project.technologies.join(', ')}</p>
      <a href={project.link} class="text-sm text-blue-600 hover:text-blue-900">Visit Project</a>
    </div>
  {/each}
</div>