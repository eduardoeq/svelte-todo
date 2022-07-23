
<script>
    let things = [
        "Forms",
        "Svelte stores",
        "Tailwind CSS",
        "Supabase authentication",
        "Supabase PostgreSQL database"
    ];
</script>
<svelte:head>
    <title>About</title>
</svelte:head>
<h1 class="text-4xl text-center my-8 uppercase">About</h1>
<p class="my-4">This is a SvelteKit Demo.</p>
<p class="my-4">Some of the tools used in this project are:</p>
<ul class="list-disc px-6 text-gray-800">
    {#each things as thing}
        <li class="my-1">{thing}</li>
    {/each}
</ul>
<p class="my-8 text-center">Built by <a class="text-blue-600 font-bold" href="https://github.com/eduardoeq" target="_blank">Eduardo Raizer</a></p>