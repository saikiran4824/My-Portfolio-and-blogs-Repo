"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/unist-util-visit-parents";
exports.ids = ["vendor-chunks/unist-util-visit-parents"];
exports.modules = {

/***/ "(rsc)/./node_modules/unist-util-visit-parents/lib/color.node.js":
/*!*****************************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/lib/color.node.js ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   color: () => (/* binding */ color)\n/* harmony export */ });\n/**\n * @param {string} d\n * @returns {string}\n */\nfunction color(d) {\n  return '\\u001B[33m' + d + '\\u001B[39m'\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2xpYi9jb2xvci5ub2RlLmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhO0FBQ2I7QUFDTztBQUNQO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2Vzb21lLXB3aC1ibG9nLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9saWIvY29sb3Iubm9kZS5qcz9kM2QyIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IGRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBjb2xvcihkKSB7XG4gIHJldHVybiAnXFx1MDAxQlszM20nICsgZCArICdcXHUwMDFCWzM5bSdcbn1cbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-visit-parents/lib/color.node.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/unist-util-visit-parents/lib/index.js":
/*!************************************************************!*\
  !*** ./node_modules/unist-util-visit-parents/lib/index.js ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   CONTINUE: () => (/* binding */ CONTINUE),\n/* harmony export */   EXIT: () => (/* binding */ EXIT),\n/* harmony export */   SKIP: () => (/* binding */ SKIP),\n/* harmony export */   visitParents: () => (/* binding */ visitParents)\n/* harmony export */ });\n/* harmony import */ var unist_util_is__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! unist-util-is */ \"(rsc)/./node_modules/unist-util-is/lib/index.js\");\n/* harmony import */ var unist_util_visit_parents_do_not_use_color__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! unist-util-visit-parents/do-not-use-color */ \"(rsc)/./node_modules/unist-util-visit-parents/lib/color.node.js\");\n/**\n * @typedef {import('unist').Node} UnistNode\n * @typedef {import('unist').Parent} UnistParent\n */\n\n/**\n * @typedef {Exclude<import('unist-util-is').Test, undefined> | undefined} Test\n *   Test from `unist-util-is`.\n *\n *   Note: we have remove and add `undefined`, because otherwise when generating\n *   automatic `.d.ts` files, TS tries to flatten paths from a local perspective,\n *   which doesn’t work when publishing on npm.\n */\n\n/**\n * @typedef {(\n *   Fn extends (value: any) => value is infer Thing\n *   ? Thing\n *   : Fallback\n * )} Predicate\n *   Get the value of a type guard `Fn`.\n * @template Fn\n *   Value; typically function that is a type guard (such as `(x): x is Y`).\n * @template Fallback\n *   Value to yield if `Fn` is not a type guard.\n */\n\n/**\n * @typedef {(\n *   Check extends null | undefined // No test.\n *   ? Value\n *   : Value extends {type: Check} // String (type) test.\n *   ? Value\n *   : Value extends Check // Partial test.\n *   ? Value\n *   : Check extends Function // Function test.\n *   ? Predicate<Check, Value> extends Value\n *     ? Predicate<Check, Value>\n *     : never\n *   : never // Some other test?\n * )} MatchesOne\n *   Check whether a node matches a primitive check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test, but not arrays.\n */\n\n/**\n * @typedef {(\n *   Check extends Array<any>\n *   ? MatchesOne<Value, Check[keyof Check]>\n *   : MatchesOne<Value, Check>\n * )} Matches\n *   Check whether a node matches a check in the type system.\n * @template Value\n *   Value; typically unist `Node`.\n * @template Check\n *   Value; typically `unist-util-is`-compatible test.\n */\n\n/**\n * @typedef {0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10} Uint\n *   Number; capped reasonably.\n */\n\n/**\n * @typedef {I extends 0 ? 1 : I extends 1 ? 2 : I extends 2 ? 3 : I extends 3 ? 4 : I extends 4 ? 5 : I extends 5 ? 6 : I extends 6 ? 7 : I extends 7 ? 8 : I extends 8 ? 9 : 10} Increment\n *   Increment a number in the type system.\n * @template {Uint} [I=0]\n *   Index.\n */\n\n/**\n * @typedef {(\n *   Node extends UnistParent\n *   ? Node extends {children: Array<infer Children>}\n *     ? Child extends Children ? Node : never\n *     : never\n *   : never\n * )} InternalParent\n *   Collect nodes that can be parents of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {InternalParent<InclusiveDescendant<Tree>, Child>} Parent\n *   Collect nodes in `Tree` that can be parents of `Child`.\n * @template {UnistNode} Tree\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {(\n *   Depth extends Max\n *   ? never\n *   :\n *     | InternalParent<Node, Child>\n *     | InternalAncestor<Node, InternalParent<Node, Child>, Max, Increment<Depth>>\n * )} InternalAncestor\n *   Collect nodes in `Tree` that can be ancestors of `Child`.\n * @template {UnistNode} Node\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */\n\n/**\n * @typedef {InternalAncestor<InclusiveDescendant<Tree>, Child>} Ancestor\n *   Collect nodes in `Tree` that can be ancestors of `Child`.\n * @template {UnistNode} Tree\n *   All node types in a tree.\n * @template {UnistNode} Child\n *   Node to search for.\n */\n\n/**\n * @typedef {(\n *   Tree extends UnistParent\n *     ? Depth extends Max\n *       ? Tree\n *       : Tree | InclusiveDescendant<Tree['children'][number], Max, Increment<Depth>>\n *     : Tree\n * )} InclusiveDescendant\n *   Collect all (inclusive) descendants of `Tree`.\n *\n *   > 👉 **Note**: for performance reasons, this seems to be the fastest way to\n *   > recurse without actually running into an infinite loop, which the\n *   > previous version did.\n *   >\n *   > Practically, a max of `2` is typically enough assuming a `Root` is\n *   > passed, but it doesn’t improve performance.\n *   > It gets higher with `List > ListItem > Table > TableRow > TableCell`.\n *   > Using up to `10` doesn’t hurt or help either.\n * @template {UnistNode} Tree\n *   Tree type.\n * @template {Uint} [Max=10]\n *   Max; searches up to this depth.\n * @template {Uint} [Depth=0]\n *   Current depth.\n */\n\n/**\n * @typedef {'skip' | boolean} Action\n *   Union of the action types.\n *\n * @typedef {number} Index\n *   Move to the sibling at `index` next (after node itself is completely\n *   traversed).\n *\n *   Useful if mutating the tree, such as removing the node the visitor is\n *   currently on, or any of its previous siblings.\n *   Results less than 0 or greater than or equal to `children.length` stop\n *   traversing the parent.\n *\n * @typedef {[(Action | null | undefined | void)?, (Index | null | undefined)?]} ActionTuple\n *   List with one or two values, the first an action, the second an index.\n *\n * @typedef {Action | ActionTuple | Index | null | undefined | void} VisitorResult\n *   Any value that can be returned from a visitor.\n */\n\n/**\n * @callback Visitor\n *   Handle a node (matching `test`, if given).\n *\n *   Visitors are free to transform `node`.\n *   They can also transform the parent of node (the last of `ancestors`).\n *\n *   Replacing `node` itself, if `SKIP` is not returned, still causes its\n *   descendants to be walked (which is a bug).\n *\n *   When adding or removing previous siblings of `node` (or next siblings, in\n *   case of reverse), the `Visitor` should return a new `Index` to specify the\n *   sibling to traverse after `node` is traversed.\n *   Adding or removing next siblings of `node` (or previous siblings, in case\n *   of reverse) is handled as expected without needing to return a new `Index`.\n *\n *   Removing the children property of an ancestor still results in them being\n *   traversed.\n * @param {Visited} node\n *   Found node.\n * @param {Array<VisitedParents>} ancestors\n *   Ancestors of `node`.\n * @returns {VisitorResult}\n *   What to do next.\n *\n *   An `Index` is treated as a tuple of `[CONTINUE, Index]`.\n *   An `Action` is treated as a tuple of `[Action]`.\n *\n *   Passing a tuple back only makes sense if the `Action` is `SKIP`.\n *   When the `Action` is `EXIT`, that action can be returned.\n *   When the `Action` is `CONTINUE`, `Index` can be returned.\n * @template {UnistNode} [Visited=UnistNode]\n *   Visited node type.\n * @template {UnistParent} [VisitedParents=UnistParent]\n *   Ancestor type.\n */\n\n/**\n * @typedef {Visitor<Matches<InclusiveDescendant<Tree>, Check>, Ancestor<Tree, Matches<InclusiveDescendant<Tree>, Check>>>} BuildVisitor\n *   Build a typed `Visitor` function from a tree and a test.\n *\n *   It will infer which values are passed as `node` and which as `parents`.\n * @template {UnistNode} [Tree=UnistNode]\n *   Tree type.\n * @template {Test} [Check=Test]\n *   Test type.\n */\n\n\n\n\n/** @type {Readonly<ActionTuple>} */\nconst empty = []\n\n/**\n * Continue traversing as normal.\n */\nconst CONTINUE = true\n\n/**\n * Stop traversing immediately.\n */\nconst EXIT = false\n\n/**\n * Do not traverse this node’s children.\n */\nconst SKIP = 'skip'\n\n/**\n * Visit nodes, with ancestral information.\n *\n * This algorithm performs *depth-first* *tree traversal* in *preorder*\n * (**NLR**) or if `reverse` is given, in *reverse preorder* (**NRL**).\n *\n * You can choose for which nodes `visitor` is called by passing a `test`.\n * For complex tests, you should test yourself in `visitor`, as it will be\n * faster and will have improved type information.\n *\n * Walking the tree is an intensive task.\n * Make use of the return values of the visitor when possible.\n * Instead of walking a tree multiple times, walk it once, use `unist-util-is`\n * to check if a node matches, and then perform different operations.\n *\n * You can change the tree.\n * See `Visitor` for more info.\n *\n * @overload\n * @param {Tree} tree\n * @param {Check} check\n * @param {BuildVisitor<Tree, Check>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @overload\n * @param {Tree} tree\n * @param {BuildVisitor<Tree>} visitor\n * @param {boolean | null | undefined} [reverse]\n * @returns {undefined}\n *\n * @param {UnistNode} tree\n *   Tree to traverse.\n * @param {Visitor | Test} test\n *   `unist-util-is`-compatible test\n * @param {Visitor | boolean | null | undefined} [visitor]\n *   Handle each node.\n * @param {boolean | null | undefined} [reverse]\n *   Traverse in reverse preorder (NRL) instead of the default preorder (NLR).\n * @returns {undefined}\n *   Nothing.\n *\n * @template {UnistNode} Tree\n *   Node type.\n * @template {Test} Check\n *   `unist-util-is`-compatible test.\n */\nfunction visitParents(tree, test, visitor, reverse) {\n  /** @type {Test} */\n  let check\n\n  if (typeof test === 'function' && typeof visitor !== 'function') {\n    reverse = visitor\n    // @ts-expect-error no visitor given, so `visitor` is test.\n    visitor = test\n  } else {\n    // @ts-expect-error visitor given, so `test` isn’t a visitor.\n    check = test\n  }\n\n  const is = (0,unist_util_is__WEBPACK_IMPORTED_MODULE_0__.convert)(check)\n  const step = reverse ? -1 : 1\n\n  factory(tree, undefined, [])()\n\n  /**\n   * @param {UnistNode} node\n   * @param {number | undefined} index\n   * @param {Array<UnistParent>} parents\n   */\n  function factory(node, index, parents) {\n    const value = /** @type {Record<string, unknown>} */ (\n      node && typeof node === 'object' ? node : {}\n    )\n\n    if (typeof value.type === 'string') {\n      const name =\n        // `hast`\n        typeof value.tagName === 'string'\n          ? value.tagName\n          : // `xast`\n          typeof value.name === 'string'\n          ? value.name\n          : undefined\n\n      Object.defineProperty(visit, 'name', {\n        value:\n          'node (' + (0,unist_util_visit_parents_do_not_use_color__WEBPACK_IMPORTED_MODULE_1__.color)(node.type + (name ? '<' + name + '>' : '')) + ')'\n      })\n    }\n\n    return visit\n\n    function visit() {\n      /** @type {Readonly<ActionTuple>} */\n      let result = empty\n      /** @type {Readonly<ActionTuple>} */\n      let subresult\n      /** @type {number} */\n      let offset\n      /** @type {Array<UnistParent>} */\n      let grandparents\n\n      if (!test || is(node, index, parents[parents.length - 1] || undefined)) {\n        // @ts-expect-error: `visitor` is now a visitor.\n        result = toResult(visitor(node, parents))\n\n        if (result[0] === EXIT) {\n          return result\n        }\n      }\n\n      if ('children' in node && node.children) {\n        const nodeAsParent = /** @type {UnistParent} */ (node)\n\n        if (nodeAsParent.children && result[0] !== SKIP) {\n          offset = (reverse ? nodeAsParent.children.length : -1) + step\n          grandparents = parents.concat(nodeAsParent)\n\n          while (offset > -1 && offset < nodeAsParent.children.length) {\n            const child = nodeAsParent.children[offset]\n\n            subresult = factory(child, offset, grandparents)()\n\n            if (subresult[0] === EXIT) {\n              return subresult\n            }\n\n            offset =\n              typeof subresult[1] === 'number' ? subresult[1] : offset + step\n          }\n        }\n      }\n\n      return result\n    }\n  }\n}\n\n/**\n * Turn a return value into a clean result.\n *\n * @param {VisitorResult} value\n *   Valid return values from visitors.\n * @returns {Readonly<ActionTuple>}\n *   Clean result.\n */\nfunction toResult(value) {\n  if (Array.isArray(value)) {\n    return value\n  }\n\n  if (typeof value === 'number') {\n    return [CONTINUE, value]\n  }\n\n  return value === null || value === undefined ? empty : [value]\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdW5pc3QtdXRpbC12aXNpdC1wYXJlbnRzL2xpYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBLGFBQWEsc0JBQXNCO0FBQ25DLGFBQWEsd0JBQXdCO0FBQ3JDOztBQUVBO0FBQ0EsYUFBYSw4REFBOEQ7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0Esc0JBQXNCLGFBQWE7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0EsWUFBWTtBQUNaOztBQUVBO0FBQ0EsYUFBYSw0Q0FBNEM7QUFDekQsYUFBYTtBQUNiOztBQUVBO0FBQ0EsYUFBYSxzS0FBc0s7QUFDbkw7QUFDQSxjQUFjLE1BQU07QUFDcEI7QUFDQTs7QUFFQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQSxjQUFjLFdBQVc7QUFDekI7QUFDQTs7QUFFQTtBQUNBLGFBQWEsa0RBQWtEO0FBQy9EO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0EsY0FBYyxXQUFXO0FBQ3pCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLGNBQWMsV0FBVztBQUN6QjtBQUNBLGNBQWMsTUFBTTtBQUNwQixVQUFVO0FB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QUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hd2Vzb21lLXB3aC1ibG9nLy4vbm9kZV9tb2R1bGVzL3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9saWIvaW5kZXguanM/MWQxZCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEB0eXBlZGVmIHtpbXBvcnQoJ3VuaXN0JykuTm9kZX0gVW5pc3ROb2RlXG4gKiBAdHlwZWRlZiB7aW1wb3J0KCd1bmlzdCcpLlBhcmVudH0gVW5pc3RQYXJlbnRcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtFeGNsdWRlPGltcG9ydCgndW5pc3QtdXRpbC1pcycpLlRlc3QsIHVuZGVmaW5lZD4gfCB1bmRlZmluZWR9IFRlc3RcbiAqICAgVGVzdCBmcm9tIGB1bmlzdC11dGlsLWlzYC5cbiAqXG4gKiAgIE5vdGU6IHdlIGhhdmUgcmVtb3ZlIGFuZCBhZGQgYHVuZGVmaW5lZGAsIGJlY2F1c2Ugb3RoZXJ3aXNlIHdoZW4gZ2VuZXJhdGluZ1xuICogICBhdXRvbWF0aWMgYC5kLnRzYCBmaWxlcywgVFMgdHJpZXMgdG8gZmxhdHRlbiBwYXRocyBmcm9tIGEgbG9jYWwgcGVyc3BlY3RpdmUsXG4gKiAgIHdoaWNoIGRvZXNu4oCZdCB3b3JrIHdoZW4gcHVibGlzaGluZyBvbiBucG0uXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBGbiBleHRlbmRzICh2YWx1ZTogYW55KSA9PiB2YWx1ZSBpcyBpbmZlciBUaGluZ1xuICogICA/IFRoaW5nXG4gKiAgIDogRmFsbGJhY2tcbiAqICl9IFByZWRpY2F0ZVxuICogICBHZXQgdGhlIHZhbHVlIG9mIGEgdHlwZSBndWFyZCBgRm5gLlxuICogQHRlbXBsYXRlIEZuXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgZnVuY3Rpb24gdGhhdCBpcyBhIHR5cGUgZ3VhcmQgKHN1Y2ggYXMgYCh4KTogeCBpcyBZYCkuXG4gKiBAdGVtcGxhdGUgRmFsbGJhY2tcbiAqICAgVmFsdWUgdG8geWllbGQgaWYgYEZuYCBpcyBub3QgYSB0eXBlIGd1YXJkLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgQ2hlY2sgZXh0ZW5kcyBudWxsIHwgdW5kZWZpbmVkIC8vIE5vIHRlc3QuXG4gKiAgID8gVmFsdWVcbiAqICAgOiBWYWx1ZSBleHRlbmRzIHt0eXBlOiBDaGVja30gLy8gU3RyaW5nICh0eXBlKSB0ZXN0LlxuICogICA/IFZhbHVlXG4gKiAgIDogVmFsdWUgZXh0ZW5kcyBDaGVjayAvLyBQYXJ0aWFsIHRlc3QuXG4gKiAgID8gVmFsdWVcbiAqICAgOiBDaGVjayBleHRlbmRzIEZ1bmN0aW9uIC8vIEZ1bmN0aW9uIHRlc3QuXG4gKiAgID8gUHJlZGljYXRlPENoZWNrLCBWYWx1ZT4gZXh0ZW5kcyBWYWx1ZVxuICogICAgID8gUHJlZGljYXRlPENoZWNrLCBWYWx1ZT5cbiAqICAgICA6IG5ldmVyXG4gKiAgIDogbmV2ZXIgLy8gU29tZSBvdGhlciB0ZXN0P1xuICogKX0gTWF0Y2hlc09uZVxuICogICBDaGVjayB3aGV0aGVyIGEgbm9kZSBtYXRjaGVzIGEgcHJpbWl0aXZlIGNoZWNrIGluIHRoZSB0eXBlIHN5c3RlbS5cbiAqIEB0ZW1wbGF0ZSBWYWx1ZVxuICogICBWYWx1ZTsgdHlwaWNhbGx5IHVuaXN0IGBOb2RlYC5cbiAqIEB0ZW1wbGF0ZSBDaGVja1xuICogICBWYWx1ZTsgdHlwaWNhbGx5IGB1bmlzdC11dGlsLWlzYC1jb21wYXRpYmxlIHRlc3QsIGJ1dCBub3QgYXJyYXlzLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgQ2hlY2sgZXh0ZW5kcyBBcnJheTxhbnk+XG4gKiAgID8gTWF0Y2hlc09uZTxWYWx1ZSwgQ2hlY2tba2V5b2YgQ2hlY2tdPlxuICogICA6IE1hdGNoZXNPbmU8VmFsdWUsIENoZWNrPlxuICogKX0gTWF0Y2hlc1xuICogICBDaGVjayB3aGV0aGVyIGEgbm9kZSBtYXRjaGVzIGEgY2hlY2sgaW4gdGhlIHR5cGUgc3lzdGVtLlxuICogQHRlbXBsYXRlIFZhbHVlXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgdW5pc3QgYE5vZGVgLlxuICogQHRlbXBsYXRlIENoZWNrXG4gKiAgIFZhbHVlOyB0eXBpY2FsbHkgYHVuaXN0LXV0aWwtaXNgLWNvbXBhdGlibGUgdGVzdC5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHswIHwgMSB8IDIgfCAzIHwgNCB8IDUgfCA2IHwgNyB8IDggfCA5IHwgMTB9IFVpbnRcbiAqICAgTnVtYmVyOyBjYXBwZWQgcmVhc29uYWJseS5cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtJIGV4dGVuZHMgMCA/IDEgOiBJIGV4dGVuZHMgMSA/IDIgOiBJIGV4dGVuZHMgMiA/IDMgOiBJIGV4dGVuZHMgMyA/IDQgOiBJIGV4dGVuZHMgNCA/IDUgOiBJIGV4dGVuZHMgNSA/IDYgOiBJIGV4dGVuZHMgNiA/IDcgOiBJIGV4dGVuZHMgNyA/IDggOiBJIGV4dGVuZHMgOCA/IDkgOiAxMH0gSW5jcmVtZW50XG4gKiAgIEluY3JlbWVudCBhIG51bWJlciBpbiB0aGUgdHlwZSBzeXN0ZW0uXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtJPTBdXG4gKiAgIEluZGV4LlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYgeyhcbiAqICAgTm9kZSBleHRlbmRzIFVuaXN0UGFyZW50XG4gKiAgID8gTm9kZSBleHRlbmRzIHtjaGlsZHJlbjogQXJyYXk8aW5mZXIgQ2hpbGRyZW4+fVxuICogICAgID8gQ2hpbGQgZXh0ZW5kcyBDaGlsZHJlbiA/IE5vZGUgOiBuZXZlclxuICogICAgIDogbmV2ZXJcbiAqICAgOiBuZXZlclxuICogKX0gSW50ZXJuYWxQYXJlbnRcbiAqICAgQ29sbGVjdCBub2RlcyB0aGF0IGNhbiBiZSBwYXJlbnRzIG9mIGBDaGlsZGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gTm9kZVxuICogICBBbGwgbm9kZSB0eXBlcyBpbiBhIHRyZWUuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gQ2hpbGRcbiAqICAgTm9kZSB0byBzZWFyY2ggZm9yLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0ludGVybmFsUGFyZW50PEluY2x1c2l2ZURlc2NlbmRhbnQ8VHJlZT4sIENoaWxkPn0gUGFyZW50XG4gKiAgIENvbGxlY3Qgbm9kZXMgaW4gYFRyZWVgIHRoYXQgY2FuIGJlIHBhcmVudHMgb2YgYENoaWxkYC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBUcmVlXG4gKiAgIEFsbCBub2RlIHR5cGVzIGluIGEgdHJlZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBDaGlsZFxuICogICBOb2RlIHRvIHNlYXJjaCBmb3IuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBEZXB0aCBleHRlbmRzIE1heFxuICogICA/IG5ldmVyXG4gKiAgIDpcbiAqICAgICB8IEludGVybmFsUGFyZW50PE5vZGUsIENoaWxkPlxuICogICAgIHwgSW50ZXJuYWxBbmNlc3RvcjxOb2RlLCBJbnRlcm5hbFBhcmVudDxOb2RlLCBDaGlsZD4sIE1heCwgSW5jcmVtZW50PERlcHRoPj5cbiAqICl9IEludGVybmFsQW5jZXN0b3JcbiAqICAgQ29sbGVjdCBub2RlcyBpbiBgVHJlZWAgdGhhdCBjYW4gYmUgYW5jZXN0b3JzIG9mIGBDaGlsZGAuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gTm9kZVxuICogICBBbGwgbm9kZSB0eXBlcyBpbiBhIHRyZWUuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gQ2hpbGRcbiAqICAgTm9kZSB0byBzZWFyY2ggZm9yLlxuICogQHRlbXBsYXRlIHtVaW50fSBbTWF4PTEwXVxuICogICBNYXg7IHNlYXJjaGVzIHVwIHRvIHRoaXMgZGVwdGguXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtEZXB0aD0wXVxuICogICBDdXJyZW50IGRlcHRoLlxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge0ludGVybmFsQW5jZXN0b3I8SW5jbHVzaXZlRGVzY2VuZGFudDxUcmVlPiwgQ2hpbGQ+fSBBbmNlc3RvclxuICogICBDb2xsZWN0IG5vZGVzIGluIGBUcmVlYCB0aGF0IGNhbiBiZSBhbmNlc3RvcnMgb2YgYENoaWxkYC5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBUcmVlXG4gKiAgIEFsbCBub2RlIHR5cGVzIGluIGEgdHJlZS5cbiAqIEB0ZW1wbGF0ZSB7VW5pc3ROb2RlfSBDaGlsZFxuICogICBOb2RlIHRvIHNlYXJjaCBmb3IuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7KFxuICogICBUcmVlIGV4dGVuZHMgVW5pc3RQYXJlbnRcbiAqICAgICA/IERlcHRoIGV4dGVuZHMgTWF4XG4gKiAgICAgICA/IFRyZWVcbiAqICAgICAgIDogVHJlZSB8IEluY2x1c2l2ZURlc2NlbmRhbnQ8VHJlZVsnY2hpbGRyZW4nXVtudW1iZXJdLCBNYXgsIEluY3JlbWVudDxEZXB0aD4+XG4gKiAgICAgOiBUcmVlXG4gKiApfSBJbmNsdXNpdmVEZXNjZW5kYW50XG4gKiAgIENvbGxlY3QgYWxsIChpbmNsdXNpdmUpIGRlc2NlbmRhbnRzIG9mIGBUcmVlYC5cbiAqXG4gKiAgID4g8J+RiSAqKk5vdGUqKjogZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMsIHRoaXMgc2VlbXMgdG8gYmUgdGhlIGZhc3Rlc3Qgd2F5IHRvXG4gKiAgID4gcmVjdXJzZSB3aXRob3V0IGFjdHVhbGx5IHJ1bm5pbmcgaW50byBhbiBpbmZpbml0ZSBsb29wLCB3aGljaCB0aGVcbiAqICAgPiBwcmV2aW91cyB2ZXJzaW9uIGRpZC5cbiAqICAgPlxuICogICA+IFByYWN0aWNhbGx5LCBhIG1heCBvZiBgMmAgaXMgdHlwaWNhbGx5IGVub3VnaCBhc3N1bWluZyBhIGBSb290YCBpc1xuICogICA+IHBhc3NlZCwgYnV0IGl0IGRvZXNu4oCZdCBpbXByb3ZlIHBlcmZvcm1hbmNlLlxuICogICA+IEl0IGdldHMgaGlnaGVyIHdpdGggYExpc3QgPiBMaXN0SXRlbSA+IFRhYmxlID4gVGFibGVSb3cgPiBUYWJsZUNlbGxgLlxuICogICA+IFVzaW5nIHVwIHRvIGAxMGAgZG9lc27igJl0IGh1cnQgb3IgaGVscCBlaXRoZXIuXG4gKiBAdGVtcGxhdGUge1VuaXN0Tm9kZX0gVHJlZVxuICogICBUcmVlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1VpbnR9IFtNYXg9MTBdXG4gKiAgIE1heDsgc2VhcmNoZXMgdXAgdG8gdGhpcyBkZXB0aC5cbiAqIEB0ZW1wbGF0ZSB7VWludH0gW0RlcHRoPTBdXG4gKiAgIEN1cnJlbnQgZGVwdGguXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7J3NraXAnIHwgYm9vbGVhbn0gQWN0aW9uXG4gKiAgIFVuaW9uIG9mIHRoZSBhY3Rpb24gdHlwZXMuXG4gKlxuICogQHR5cGVkZWYge251bWJlcn0gSW5kZXhcbiAqICAgTW92ZSB0byB0aGUgc2libGluZyBhdCBgaW5kZXhgIG5leHQgKGFmdGVyIG5vZGUgaXRzZWxmIGlzIGNvbXBsZXRlbHlcbiAqICAgdHJhdmVyc2VkKS5cbiAqXG4gKiAgIFVzZWZ1bCBpZiBtdXRhdGluZyB0aGUgdHJlZSwgc3VjaCBhcyByZW1vdmluZyB0aGUgbm9kZSB0aGUgdmlzaXRvciBpc1xuICogICBjdXJyZW50bHkgb24sIG9yIGFueSBvZiBpdHMgcHJldmlvdXMgc2libGluZ3MuXG4gKiAgIFJlc3VsdHMgbGVzcyB0aGFuIDAgb3IgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIGBjaGlsZHJlbi5sZW5ndGhgIHN0b3BcbiAqICAgdHJhdmVyc2luZyB0aGUgcGFyZW50LlxuICpcbiAqIEB0eXBlZGVmIHtbKEFjdGlvbiB8IG51bGwgfCB1bmRlZmluZWQgfCB2b2lkKT8sIChJbmRleCB8IG51bGwgfCB1bmRlZmluZWQpP119IEFjdGlvblR1cGxlXG4gKiAgIExpc3Qgd2l0aCBvbmUgb3IgdHdvIHZhbHVlcywgdGhlIGZpcnN0IGFuIGFjdGlvbiwgdGhlIHNlY29uZCBhbiBpbmRleC5cbiAqXG4gKiBAdHlwZWRlZiB7QWN0aW9uIHwgQWN0aW9uVHVwbGUgfCBJbmRleCB8IG51bGwgfCB1bmRlZmluZWQgfCB2b2lkfSBWaXNpdG9yUmVzdWx0XG4gKiAgIEFueSB2YWx1ZSB0aGF0IGNhbiBiZSByZXR1cm5lZCBmcm9tIGEgdmlzaXRvci5cbiAqL1xuXG4vKipcbiAqIEBjYWxsYmFjayBWaXNpdG9yXG4gKiAgIEhhbmRsZSBhIG5vZGUgKG1hdGNoaW5nIGB0ZXN0YCwgaWYgZ2l2ZW4pLlxuICpcbiAqICAgVmlzaXRvcnMgYXJlIGZyZWUgdG8gdHJhbnNmb3JtIGBub2RlYC5cbiAqICAgVGhleSBjYW4gYWxzbyB0cmFuc2Zvcm0gdGhlIHBhcmVudCBvZiBub2RlICh0aGUgbGFzdCBvZiBgYW5jZXN0b3JzYCkuXG4gKlxuICogICBSZXBsYWNpbmcgYG5vZGVgIGl0c2VsZiwgaWYgYFNLSVBgIGlzIG5vdCByZXR1cm5lZCwgc3RpbGwgY2F1c2VzIGl0c1xuICogICBkZXNjZW5kYW50cyB0byBiZSB3YWxrZWQgKHdoaWNoIGlzIGEgYnVnKS5cbiAqXG4gKiAgIFdoZW4gYWRkaW5nIG9yIHJlbW92aW5nIHByZXZpb3VzIHNpYmxpbmdzIG9mIGBub2RlYCAob3IgbmV4dCBzaWJsaW5ncywgaW5cbiAqICAgY2FzZSBvZiByZXZlcnNlKSwgdGhlIGBWaXNpdG9yYCBzaG91bGQgcmV0dXJuIGEgbmV3IGBJbmRleGAgdG8gc3BlY2lmeSB0aGVcbiAqICAgc2libGluZyB0byB0cmF2ZXJzZSBhZnRlciBgbm9kZWAgaXMgdHJhdmVyc2VkLlxuICogICBBZGRpbmcgb3IgcmVtb3ZpbmcgbmV4dCBzaWJsaW5ncyBvZiBgbm9kZWAgKG9yIHByZXZpb3VzIHNpYmxpbmdzLCBpbiBjYXNlXG4gKiAgIG9mIHJldmVyc2UpIGlzIGhhbmRsZWQgYXMgZXhwZWN0ZWQgd2l0aG91dCBuZWVkaW5nIHRvIHJldHVybiBhIG5ldyBgSW5kZXhgLlxuICpcbiAqICAgUmVtb3ZpbmcgdGhlIGNoaWxkcmVuIHByb3BlcnR5IG9mIGFuIGFuY2VzdG9yIHN0aWxsIHJlc3VsdHMgaW4gdGhlbSBiZWluZ1xuICogICB0cmF2ZXJzZWQuXG4gKiBAcGFyYW0ge1Zpc2l0ZWR9IG5vZGVcbiAqICAgRm91bmQgbm9kZS5cbiAqIEBwYXJhbSB7QXJyYXk8VmlzaXRlZFBhcmVudHM+fSBhbmNlc3RvcnNcbiAqICAgQW5jZXN0b3JzIG9mIGBub2RlYC5cbiAqIEByZXR1cm5zIHtWaXNpdG9yUmVzdWx0fVxuICogICBXaGF0IHRvIGRvIG5leHQuXG4gKlxuICogICBBbiBgSW5kZXhgIGlzIHRyZWF0ZWQgYXMgYSB0dXBsZSBvZiBgW0NPTlRJTlVFLCBJbmRleF1gLlxuICogICBBbiBgQWN0aW9uYCBpcyB0cmVhdGVkIGFzIGEgdHVwbGUgb2YgYFtBY3Rpb25dYC5cbiAqXG4gKiAgIFBhc3NpbmcgYSB0dXBsZSBiYWNrIG9ubHkgbWFrZXMgc2Vuc2UgaWYgdGhlIGBBY3Rpb25gIGlzIGBTS0lQYC5cbiAqICAgV2hlbiB0aGUgYEFjdGlvbmAgaXMgYEVYSVRgLCB0aGF0IGFjdGlvbiBjYW4gYmUgcmV0dXJuZWQuXG4gKiAgIFdoZW4gdGhlIGBBY3Rpb25gIGlzIGBDT05USU5VRWAsIGBJbmRleGAgY2FuIGJlIHJldHVybmVkLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFtWaXNpdGVkPVVuaXN0Tm9kZV1cbiAqICAgVmlzaXRlZCBub2RlIHR5cGUuXG4gKiBAdGVtcGxhdGUge1VuaXN0UGFyZW50fSBbVmlzaXRlZFBhcmVudHM9VW5pc3RQYXJlbnRdXG4gKiAgIEFuY2VzdG9yIHR5cGUuXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7VmlzaXRvcjxNYXRjaGVzPEluY2x1c2l2ZURlc2NlbmRhbnQ8VHJlZT4sIENoZWNrPiwgQW5jZXN0b3I8VHJlZSwgTWF0Y2hlczxJbmNsdXNpdmVEZXNjZW5kYW50PFRyZWU+LCBDaGVjaz4+Pn0gQnVpbGRWaXNpdG9yXG4gKiAgIEJ1aWxkIGEgdHlwZWQgYFZpc2l0b3JgIGZ1bmN0aW9uIGZyb20gYSB0cmVlIGFuZCBhIHRlc3QuXG4gKlxuICogICBJdCB3aWxsIGluZmVyIHdoaWNoIHZhbHVlcyBhcmUgcGFzc2VkIGFzIGBub2RlYCBhbmQgd2hpY2ggYXMgYHBhcmVudHNgLlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFtUcmVlPVVuaXN0Tm9kZV1cbiAqICAgVHJlZSB0eXBlLlxuICogQHRlbXBsYXRlIHtUZXN0fSBbQ2hlY2s9VGVzdF1cbiAqICAgVGVzdCB0eXBlLlxuICovXG5cbmltcG9ydCB7Y29udmVydH0gZnJvbSAndW5pc3QtdXRpbC1pcydcbmltcG9ydCB7Y29sb3J9IGZyb20gJ3VuaXN0LXV0aWwtdmlzaXQtcGFyZW50cy9kby1ub3QtdXNlLWNvbG9yJ1xuXG4vKiogQHR5cGUge1JlYWRvbmx5PEFjdGlvblR1cGxlPn0gKi9cbmNvbnN0IGVtcHR5ID0gW11cblxuLyoqXG4gKiBDb250aW51ZSB0cmF2ZXJzaW5nIGFzIG5vcm1hbC5cbiAqL1xuZXhwb3J0IGNvbnN0IENPTlRJTlVFID0gdHJ1ZVxuXG4vKipcbiAqIFN0b3AgdHJhdmVyc2luZyBpbW1lZGlhdGVseS5cbiAqL1xuZXhwb3J0IGNvbnN0IEVYSVQgPSBmYWxzZVxuXG4vKipcbiAqIERvIG5vdCB0cmF2ZXJzZSB0aGlzIG5vZGXigJlzIGNoaWxkcmVuLlxuICovXG5leHBvcnQgY29uc3QgU0tJUCA9ICdza2lwJ1xuXG4vKipcbiAqIFZpc2l0IG5vZGVzLCB3aXRoIGFuY2VzdHJhbCBpbmZvcm1hdGlvbi5cbiAqXG4gKiBUaGlzIGFsZ29yaXRobSBwZXJmb3JtcyAqZGVwdGgtZmlyc3QqICp0cmVlIHRyYXZlcnNhbCogaW4gKnByZW9yZGVyKlxuICogKCoqTkxSKiopIG9yIGlmIGByZXZlcnNlYCBpcyBnaXZlbiwgaW4gKnJldmVyc2UgcHJlb3JkZXIqICgqKk5STCoqKS5cbiAqXG4gKiBZb3UgY2FuIGNob29zZSBmb3Igd2hpY2ggbm9kZXMgYHZpc2l0b3JgIGlzIGNhbGxlZCBieSBwYXNzaW5nIGEgYHRlc3RgLlxuICogRm9yIGNvbXBsZXggdGVzdHMsIHlvdSBzaG91bGQgdGVzdCB5b3Vyc2VsZiBpbiBgdmlzaXRvcmAsIGFzIGl0IHdpbGwgYmVcbiAqIGZhc3RlciBhbmQgd2lsbCBoYXZlIGltcHJvdmVkIHR5cGUgaW5mb3JtYXRpb24uXG4gKlxuICogV2Fsa2luZyB0aGUgdHJlZSBpcyBhbiBpbnRlbnNpdmUgdGFzay5cbiAqIE1ha2UgdXNlIG9mIHRoZSByZXR1cm4gdmFsdWVzIG9mIHRoZSB2aXNpdG9yIHdoZW4gcG9zc2libGUuXG4gKiBJbnN0ZWFkIG9mIHdhbGtpbmcgYSB0cmVlIG11bHRpcGxlIHRpbWVzLCB3YWxrIGl0IG9uY2UsIHVzZSBgdW5pc3QtdXRpbC1pc2BcbiAqIHRvIGNoZWNrIGlmIGEgbm9kZSBtYXRjaGVzLCBhbmQgdGhlbiBwZXJmb3JtIGRpZmZlcmVudCBvcGVyYXRpb25zLlxuICpcbiAqIFlvdSBjYW4gY2hhbmdlIHRoZSB0cmVlLlxuICogU2VlIGBWaXNpdG9yYCBmb3IgbW9yZSBpbmZvLlxuICpcbiAqIEBvdmVybG9hZFxuICogQHBhcmFtIHtUcmVlfSB0cmVlXG4gKiBAcGFyYW0ge0NoZWNrfSBjaGVja1xuICogQHBhcmFtIHtCdWlsZFZpc2l0b3I8VHJlZSwgQ2hlY2s+fSB2aXNpdG9yXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbcmV2ZXJzZV1cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKlxuICogQG92ZXJsb2FkXG4gKiBAcGFyYW0ge1RyZWV9IHRyZWVcbiAqIEBwYXJhbSB7QnVpbGRWaXNpdG9yPFRyZWU+fSB2aXNpdG9yXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCBudWxsIHwgdW5kZWZpbmVkfSBbcmV2ZXJzZV1cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKlxuICogQHBhcmFtIHtVbmlzdE5vZGV9IHRyZWVcbiAqICAgVHJlZSB0byB0cmF2ZXJzZS5cbiAqIEBwYXJhbSB7VmlzaXRvciB8IFRlc3R9IHRlc3RcbiAqICAgYHVuaXN0LXV0aWwtaXNgLWNvbXBhdGlibGUgdGVzdFxuICogQHBhcmFtIHtWaXNpdG9yIHwgYm9vbGVhbiB8IG51bGwgfCB1bmRlZmluZWR9IFt2aXNpdG9yXVxuICogICBIYW5kbGUgZWFjaCBub2RlLlxuICogQHBhcmFtIHtib29sZWFuIHwgbnVsbCB8IHVuZGVmaW5lZH0gW3JldmVyc2VdXG4gKiAgIFRyYXZlcnNlIGluIHJldmVyc2UgcHJlb3JkZXIgKE5STCkgaW5zdGVhZCBvZiB0aGUgZGVmYXVsdCBwcmVvcmRlciAoTkxSKS5cbiAqIEByZXR1cm5zIHt1bmRlZmluZWR9XG4gKiAgIE5vdGhpbmcuXG4gKlxuICogQHRlbXBsYXRlIHtVbmlzdE5vZGV9IFRyZWVcbiAqICAgTm9kZSB0eXBlLlxuICogQHRlbXBsYXRlIHtUZXN0fSBDaGVja1xuICogICBgdW5pc3QtdXRpbC1pc2AtY29tcGF0aWJsZSB0ZXN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gdmlzaXRQYXJlbnRzKHRyZWUsIHRlc3QsIHZpc2l0b3IsIHJldmVyc2UpIHtcbiAgLyoqIEB0eXBlIHtUZXN0fSAqL1xuICBsZXQgY2hlY2tcblxuICBpZiAodHlwZW9mIHRlc3QgPT09ICdmdW5jdGlvbicgJiYgdHlwZW9mIHZpc2l0b3IgIT09ICdmdW5jdGlvbicpIHtcbiAgICByZXZlcnNlID0gdmlzaXRvclxuICAgIC8vIEB0cy1leHBlY3QtZXJyb3Igbm8gdmlzaXRvciBnaXZlbiwgc28gYHZpc2l0b3JgIGlzIHRlc3QuXG4gICAgdmlzaXRvciA9IHRlc3RcbiAgfSBlbHNlIHtcbiAgICAvLyBAdHMtZXhwZWN0LWVycm9yIHZpc2l0b3IgZ2l2ZW4sIHNvIGB0ZXN0YCBpc27igJl0IGEgdmlzaXRvci5cbiAgICBjaGVjayA9IHRlc3RcbiAgfVxuXG4gIGNvbnN0IGlzID0gY29udmVydChjaGVjaylcbiAgY29uc3Qgc3RlcCA9IHJldmVyc2UgPyAtMSA6IDFcblxuICBmYWN0b3J5KHRyZWUsIHVuZGVmaW5lZCwgW10pKClcblxuICAvKipcbiAgICogQHBhcmFtIHtVbmlzdE5vZGV9IG5vZGVcbiAgICogQHBhcmFtIHtudW1iZXIgfCB1bmRlZmluZWR9IGluZGV4XG4gICAqIEBwYXJhbSB7QXJyYXk8VW5pc3RQYXJlbnQ+fSBwYXJlbnRzXG4gICAqL1xuICBmdW5jdGlvbiBmYWN0b3J5KG5vZGUsIGluZGV4LCBwYXJlbnRzKSB7XG4gICAgY29uc3QgdmFsdWUgPSAvKiogQHR5cGUge1JlY29yZDxzdHJpbmcsIHVua25vd24+fSAqLyAoXG4gICAgICBub2RlICYmIHR5cGVvZiBub2RlID09PSAnb2JqZWN0JyA/IG5vZGUgOiB7fVxuICAgIClcblxuICAgIGlmICh0eXBlb2YgdmFsdWUudHlwZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIGNvbnN0IG5hbWUgPVxuICAgICAgICAvLyBgaGFzdGBcbiAgICAgICAgdHlwZW9mIHZhbHVlLnRhZ05hbWUgPT09ICdzdHJpbmcnXG4gICAgICAgICAgPyB2YWx1ZS50YWdOYW1lXG4gICAgICAgICAgOiAvLyBgeGFzdGBcbiAgICAgICAgICB0eXBlb2YgdmFsdWUubmFtZSA9PT0gJ3N0cmluZydcbiAgICAgICAgICA/IHZhbHVlLm5hbWVcbiAgICAgICAgICA6IHVuZGVmaW5lZFxuXG4gICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodmlzaXQsICduYW1lJywge1xuICAgICAgICB2YWx1ZTpcbiAgICAgICAgICAnbm9kZSAoJyArIGNvbG9yKG5vZGUudHlwZSArIChuYW1lID8gJzwnICsgbmFtZSArICc+JyA6ICcnKSkgKyAnKSdcbiAgICAgIH0pXG4gICAgfVxuXG4gICAgcmV0dXJuIHZpc2l0XG5cbiAgICBmdW5jdGlvbiB2aXNpdCgpIHtcbiAgICAgIC8qKiBAdHlwZSB7UmVhZG9ubHk8QWN0aW9uVHVwbGU+fSAqL1xuICAgICAgbGV0IHJlc3VsdCA9IGVtcHR5XG4gICAgICAvKiogQHR5cGUge1JlYWRvbmx5PEFjdGlvblR1cGxlPn0gKi9cbiAgICAgIGxldCBzdWJyZXN1bHRcbiAgICAgIC8qKiBAdHlwZSB7bnVtYmVyfSAqL1xuICAgICAgbGV0IG9mZnNldFxuICAgICAgLyoqIEB0eXBlIHtBcnJheTxVbmlzdFBhcmVudD59ICovXG4gICAgICBsZXQgZ3JhbmRwYXJlbnRzXG5cbiAgICAgIGlmICghdGVzdCB8fCBpcyhub2RlLCBpbmRleCwgcGFyZW50c1twYXJlbnRzLmxlbmd0aCAtIDFdIHx8IHVuZGVmaW5lZCkpIHtcbiAgICAgICAgLy8gQHRzLWV4cGVjdC1lcnJvcjogYHZpc2l0b3JgIGlzIG5vdyBhIHZpc2l0b3IuXG4gICAgICAgIHJlc3VsdCA9IHRvUmVzdWx0KHZpc2l0b3Iobm9kZSwgcGFyZW50cykpXG5cbiAgICAgICAgaWYgKHJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgIHJldHVybiByZXN1bHRcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoJ2NoaWxkcmVuJyBpbiBub2RlICYmIG5vZGUuY2hpbGRyZW4pIHtcbiAgICAgICAgY29uc3Qgbm9kZUFzUGFyZW50ID0gLyoqIEB0eXBlIHtVbmlzdFBhcmVudH0gKi8gKG5vZGUpXG5cbiAgICAgICAgaWYgKG5vZGVBc1BhcmVudC5jaGlsZHJlbiAmJiByZXN1bHRbMF0gIT09IFNLSVApIHtcbiAgICAgICAgICBvZmZzZXQgPSAocmV2ZXJzZSA/IG5vZGVBc1BhcmVudC5jaGlsZHJlbi5sZW5ndGggOiAtMSkgKyBzdGVwXG4gICAgICAgICAgZ3JhbmRwYXJlbnRzID0gcGFyZW50cy5jb25jYXQobm9kZUFzUGFyZW50KVxuXG4gICAgICAgICAgd2hpbGUgKG9mZnNldCA+IC0xICYmIG9mZnNldCA8IG5vZGVBc1BhcmVudC5jaGlsZHJlbi5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gbm9kZUFzUGFyZW50LmNoaWxkcmVuW29mZnNldF1cblxuICAgICAgICAgICAgc3VicmVzdWx0ID0gZmFjdG9yeShjaGlsZCwgb2Zmc2V0LCBncmFuZHBhcmVudHMpKClcblxuICAgICAgICAgICAgaWYgKHN1YnJlc3VsdFswXSA9PT0gRVhJVCkge1xuICAgICAgICAgICAgICByZXR1cm4gc3VicmVzdWx0XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9mZnNldCA9XG4gICAgICAgICAgICAgIHR5cGVvZiBzdWJyZXN1bHRbMV0gPT09ICdudW1iZXInID8gc3VicmVzdWx0WzFdIDogb2Zmc2V0ICsgc3RlcFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcmVzdWx0XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogVHVybiBhIHJldHVybiB2YWx1ZSBpbnRvIGEgY2xlYW4gcmVzdWx0LlxuICpcbiAqIEBwYXJhbSB7VmlzaXRvclJlc3VsdH0gdmFsdWVcbiAqICAgVmFsaWQgcmV0dXJuIHZhbHVlcyBmcm9tIHZpc2l0b3JzLlxuICogQHJldHVybnMge1JlYWRvbmx5PEFjdGlvblR1cGxlPn1cbiAqICAgQ2xlYW4gcmVzdWx0LlxuICovXG5mdW5jdGlvbiB0b1Jlc3VsdCh2YWx1ZSkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh2YWx1ZSkpIHtcbiAgICByZXR1cm4gdmFsdWVcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFsdWUgPT09ICdudW1iZXInKSB7XG4gICAgcmV0dXJuIFtDT05USU5VRSwgdmFsdWVdXG4gIH1cblxuICByZXR1cm4gdmFsdWUgPT09IG51bGwgfHwgdmFsdWUgPT09IHVuZGVmaW5lZCA/IGVtcHR5IDogW3ZhbHVlXVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/unist-util-visit-parents/lib/index.js\n");

/***/ })

};
;