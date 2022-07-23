<script>
    import {supabase} from "../supabase";

    let loading = false;
    let email;

    const handleLogin = async () => {
        try {
            loading = true;
            const {error} = await supabase.auth.signIn({email});

            if(error) throw error
            alert('Check your email for the login link!');
        } catch(err) {
            console.error(err);
            alert(err.error_description || err.message);
        } finally {
            loading = false;
        }
    }
</script>

<h1 class="text-2xl font-bold text-center text-gray-800 md:text-3xl">Log in</h1>
<p class="text-center mt-2">Sign in via magic link with your email below.</p>

<form on:submit|preventDefault={handleLogin}>
    <div class="flex flex-col text-sm mb-2">
        <label class="font-bold mb-2 text-grey-800" for="email"></label>
        <input 
            class="appearance-none shadow-sm border border-gray-200 p-2
                focus:outline-none focus:border-grey-500 rounded-lg" 
            type="text" 
            name="email" 
            placeholder="Your email"
            bind:value={email}
        />
    </div>
    <button
        type="submit"
        class="w-full shadow-sm bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"
    >
        Log in
    </button>
</form>