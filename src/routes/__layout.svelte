<script>
    import { page } from '$app/stores';
    import "../app.css";

    import { supabase } from '../supabase';
    import { user } from '../stores/authStore';
    import { loadTodos } from '../stores/todoStore';

    import Navbar from "../components/Navbar.svelte";
    import Auth from "../components/Auth.svelte";
    
    

    console.log(supabase);;
    console.log(supabase.auth.user());

    user.set(supabase.auth.user());

    supabase.auth.onAuthStateChange((_, session) => {
        user.set(session?.user);
        if(session?.user) {
            loadTodos();
        }
    });
</script>

<div class="container mx-auto my-6 max-w-lg">
    {#if $user || $page.routeId == 'about'}
        <Navbar page={$page.routeId} />
        <slot></slot>
    {:else}
        <Navbar page={$page.routeId} />
        <Auth />
    {/if}
    
</div>