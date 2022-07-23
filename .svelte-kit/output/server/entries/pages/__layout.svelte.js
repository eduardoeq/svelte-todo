import { c as create_ssr_component, e as escape, g as getContext, a as subscribe, v as validate_component } from "../../_app/immutable/chunks/index-9f74355f.js";
const app = "";
const Nav = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { page: page2 } = $$props;
  if ($$props.page === void 0 && $$bindings.page && page2 !== void 0)
    $$bindings.page(page2);
  return `<nav class="${"flex justify-center w-full my-12"}"><a class="${"mx-4 text-lg " + escape(page2 == "" ? "font-semibold text-blue-600" : "", true)}" href="${"/"}">Home</a>
    <a class="${"mx-4 text-lg " + escape(page2 == "about" ? "font-semibold text-blue-600" : "", true)}" href="${"/about"}">About</a></nav>`;
});
const getStores = () => {
  const stores = getContext("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = subscribe(page, (value) => $page = value);
  $$unsubscribe_page();
  return `<div class="${"container mx-auto my-6 max-w-lg"}">${validate_component(Nav, "Nav").$$render($$result, { page: $page.routeId }, {}, {})}
    ${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  _layout as default
};
