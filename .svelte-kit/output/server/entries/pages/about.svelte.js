import { c as create_ssr_component, b as each, e as escape } from "../../_app/immutable/chunks/index-9f74355f.js";
const About = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let things = ["Forms", "Svelte stores", "Tailwind css"];
  return `${$$result.head += `${$$result.title = `<title>About</title>`, ""}`, ""}
<h1 class="${"text-4xl text-center my-8 uppercase"}">About</h1>
<p class="${"my-4"}">This is a SvelteKit Demo.</p>
<p class="${"my-4"}">Some of the tools used in this project are:</p>
<ul class="${"list-disc px-6 text-gray-800"}">${each(things, (thing) => {
    return `<li class="${"my-1"}">${escape(thing)}</li>`;
  })}</ul>
<p class="${"my-8 text-center"}">Built by <a class="${"text-blue-600 font-bold"}" href="${"https://github.com/eduardoeq"}" target="${"_blank"}">Eduardo Raizer</a></p>`;
});
export {
  About as default
};
