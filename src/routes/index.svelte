<script>
    import TodoForm from "../components/TodoForm.svelte";
    import TodoList from "../components/TodoList.svelte";

</script>

<main>
    <h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">
        My ToDos
    </h1>
    <TodoForm />
    <TodoList />
</main>