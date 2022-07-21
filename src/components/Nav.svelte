<script>
    export let page;
</script>

<nav class="flex justify-center w-full my-12">
    <a class="mx-4 text-lg { page == '' ? "font-semibold text-blue-600" : "" }" href="/">Home</a>
    <a class="mx-4 text-lg { page == 'about' ? "font-semibold text-blue-600" : "" }" href="/about">About</a>
</nav>