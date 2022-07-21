<script>
    import {todos} from "../stores/todoStore.js";
    import Todo from "../components/Todo.svelte";
</script>

{#each $todos as todo }
    <Todo todo={todo} index{todo.id} />
{/each}