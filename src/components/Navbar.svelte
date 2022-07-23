<script>
    import { supabase } from '../supabase';
    import { user } from '../stores/authStore';
    export let page;

    const logout = () => {
        console.log('click')
        supabase.auth.signOut();
    }
</script>

<nav class="my-12 w-full grid grid-cols-6 justify-center">
    <div class="col-span-2"></div>
    <a class="mx-4 text-lg { page == '' ? "font-semibold text-blue-600" : "" }" href="/">Home</a>
    <a class="mx-4 text-lg { page == 'about' ? "font-semibold text-blue-600" : "" }" href="/about">About</a>
    {#if $user}
        <div class="col-span-1"></div>
        <button 
            class="shadow-sm bg-blue-500 hover:bg-blue-600 text-white rounded py-1 px-2"
            on:click={logout}
        >
            Log out
        </button>
    {/if}
</nav>
