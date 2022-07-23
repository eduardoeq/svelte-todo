import { n as noop, d as safe_not_equal, c as create_ssr_component, f as add_attribute, e as escape, a as subscribe, b as each, v as validate_component } from "../../_app/immutable/chunks/index-9f74355f.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
const todos = writable([]);
const TodoForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let todo = "";
  return `<form class="${"my-6"}"><div class="${"flex flex-col text-sm mb-2"}"><label class="${"font-bold mb-2 text-grey-800"}" for="${"todo"}"></label>
        <input class="${"appearence-none shadow-sm border border-gray-200 focus:outline-none focus:border-gray-500 rounded-lg p-2"}" type="${"text"}" name="${"todo"}" placeholder="${"What do you have to do?"}"${add_attribute("value", todo, 0)}></div>
    <button type="${"submit"}" class="${"w-full shadow-sm rounded bg-blue-500 hover:bg-blue-600 text-white py-2 px-4"}">Submit</button></form>`;
});
const Todo = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { todo } = $$props;
  if ($$props.todo === void 0 && $$bindings.todo && todo !== void 0)
    $$bindings.todo(todo);
  return `<li class="${"bg-white flex items-center shadow-sm border border-gray-200 rounder-lg my-2 py-2 px-4"}"><input name="${"completed"}" type="${"checkbox"}" ${todo.completed ? "checked" : ""} class="${"mr-2 form-checkbox h-5 w-5"}">
    <span${add_attribute("class", `flex-1 text-fgray-800 ${todo.completed ? "line-through" : ""}`, 0)}>${escape(todo.text)}</span>
    <button type="${"button"}" class="${"text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded focus:outline-none focus:shadow-outline"}">Delete
    </button></li>`;
});
const TodoList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $todos, $$unsubscribe_todos;
  $$unsubscribe_todos = subscribe(todos, (value) => $todos = value);
  $$unsubscribe_todos();
  return `${each($todos, (todo) => {
    return `${validate_component(Todo, "Todo").$$render($$result, { todo, "index{todo.id}": true }, {}, {})}`;
  })}`;
});
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main><h1 class="${"text-2xl font-bold text-center text-gray-800 md:text-3xl"}">My ToDos
    </h1>
    ${validate_component(TodoForm, "TodoForm").$$render($$result, {}, {}, {})}
    ${validate_component(TodoList, "TodoList").$$render($$result, {}, {}, {})}</main>`;
});
export {
  Routes as default
};
