<script>
    import "../app.css";
    import Nav from "../components/Nav.svelte";
    import { page } from '$app/stores';
</script>

<div class="container mx-auto my-6 max-w-lg">
    <Nav page={$page.routeId} />
    <slot></slot>
</div>