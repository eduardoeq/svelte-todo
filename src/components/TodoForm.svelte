<script>
    let todo = '';

    import {addTodo} from "../stores/todoStore";

    const handleSubmit = () => {
        addTodo(todo);
        todo = '';
        console.log('submiting');
    }
</script>
<form class="my-6" on:submit|preventDefault={handleSubmit}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold mb-2 text-grey-800" for="todo"></label>
        <input 
            bind:value="{todo}"
            class="appearence-none shadow-sm border border-gray-200 
                   focus:outline-none focus:border-gray-500 rounded-lg p-2" 
            type="text" 
            name="todo" 
            placeholder="What do you have to do?"
        >
    </div>
    <button 
        type="submit"
        class="w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
    >Submit</button>
</form>
