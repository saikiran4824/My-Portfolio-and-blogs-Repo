"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/vfile-location";
exports.ids = ["vendor-chunks/vfile-location"];
exports.modules = {

/***/ "(rsc)/./node_modules/vfile-location/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/vfile-location/lib/index.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   location: () => (/* binding */ location)\n/* harmony export */ });\n/**\n * @import {VFile, Value} from 'vfile'\n * @import {Location} from 'vfile-location'\n */\n\n/**\n * Create an index of the given document to translate between line/column and\n * offset based positional info.\n *\n * Also implemented in Rust in [`wooorm/markdown-rs`][markdown-rs].\n *\n * [markdown-rs]: https://github.com/wooorm/markdown-rs/blob/main/src/util/location.rs\n *\n * @param {VFile | Value} file\n *   File to index.\n * @returns {Location}\n *   Accessors for index.\n */\nfunction location(file) {\n  const value = String(file)\n  /**\n   * List, where each index is a line number (0-based), and each value is the\n   * byte index *after* where the line ends.\n   *\n   * @type {Array<number>}\n   */\n  const indices = []\n\n  return {toOffset, toPoint}\n\n  /** @type {Location['toPoint']} */\n  function toPoint(offset) {\n    if (typeof offset === 'number' && offset > -1 && offset <= value.length) {\n      let index = 0\n\n      while (true) {\n        let end = indices[index]\n\n        if (end === undefined) {\n          const eol = next(value, indices[index - 1])\n          end = eol === -1 ? value.length + 1 : eol + 1\n          indices[index] = end\n        }\n\n        if (end > offset) {\n          return {\n            line: index + 1,\n            column: offset - (index > 0 ? indices[index - 1] : 0) + 1,\n            offset\n          }\n        }\n\n        index++\n      }\n    }\n  }\n\n  /** @type {Location['toOffset']} */\n  function toOffset(point) {\n    if (\n      point &&\n      typeof point.line === 'number' &&\n      typeof point.column === 'number' &&\n      !Number.isNaN(point.line) &&\n      !Number.isNaN(point.column)\n    ) {\n      while (indices.length < point.line) {\n        const from = indices[indices.length - 1]\n        const eol = next(value, from)\n        const end = eol === -1 ? value.length + 1 : eol + 1\n        if (from === end) break\n        indices.push(end)\n      }\n\n      const offset =\n        (point.line > 1 ? indices[point.line - 2] : 0) + point.column - 1\n      // The given `column` could not exist on this line.\n      if (offset < indices[point.line - 1]) return offset\n    }\n  }\n}\n\n/**\n * @param {string} value\n * @param {number} from\n */\nfunction next(value, from) {\n  const cr = value.indexOf('\\r', from)\n  const lf = value.indexOf('\\n', from)\n  if (lf === -1) return cr\n  if (cr === -1 || cr + 1 === lf) return lf\n  return cr < lf ? cr : lf\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvdmZpbGUtbG9jYXRpb24vbGliL2luZGV4LmpzIiwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUNBLFlBQVksY0FBYztBQUMxQixZQUFZLFVBQVU7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsZUFBZTtBQUMxQjtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7O0FBRUEsVUFBVTs7QUFFVixhQUFhLHFCQUFxQjtBQUNsQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGFBQWEsc0JBQXNCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixXQUFXLFFBQVE7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2F3ZXNvbWUtcHdoLWJsb2cvLi9ub2RlX21vZHVsZXMvdmZpbGUtbG9jYXRpb24vbGliL2luZGV4LmpzPzg5NjgiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAaW1wb3J0IHtWRmlsZSwgVmFsdWV9IGZyb20gJ3ZmaWxlJ1xuICogQGltcG9ydCB7TG9jYXRpb259IGZyb20gJ3ZmaWxlLWxvY2F0aW9uJ1xuICovXG5cbi8qKlxuICogQ3JlYXRlIGFuIGluZGV4IG9mIHRoZSBnaXZlbiBkb2N1bWVudCB0byB0cmFuc2xhdGUgYmV0d2VlbiBsaW5lL2NvbHVtbiBhbmRcbiAqIG9mZnNldCBiYXNlZCBwb3NpdGlvbmFsIGluZm8uXG4gKlxuICogQWxzbyBpbXBsZW1lbnRlZCBpbiBSdXN0IGluIFtgd29vb3JtL21hcmtkb3duLXJzYF1bbWFya2Rvd24tcnNdLlxuICpcbiAqIFttYXJrZG93bi1yc106IGh0dHBzOi8vZ2l0aHViLmNvbS93b29vcm0vbWFya2Rvd24tcnMvYmxvYi9tYWluL3NyYy91dGlsL2xvY2F0aW9uLnJzXG4gKlxuICogQHBhcmFtIHtWRmlsZSB8IFZhbHVlfSBmaWxlXG4gKiAgIEZpbGUgdG8gaW5kZXguXG4gKiBAcmV0dXJucyB7TG9jYXRpb259XG4gKiAgIEFjY2Vzc29ycyBmb3IgaW5kZXguXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBsb2NhdGlvbihmaWxlKSB7XG4gIGNvbnN0IHZhbHVlID0gU3RyaW5nKGZpbGUpXG4gIC8qKlxuICAgKiBMaXN0LCB3aGVyZSBlYWNoIGluZGV4IGlzIGEgbGluZSBudW1iZXIgKDAtYmFzZWQpLCBhbmQgZWFjaCB2YWx1ZSBpcyB0aGVcbiAgICogYnl0ZSBpbmRleCAqYWZ0ZXIqIHdoZXJlIHRoZSBsaW5lIGVuZHMuXG4gICAqXG4gICAqIEB0eXBlIHtBcnJheTxudW1iZXI+fVxuICAgKi9cbiAgY29uc3QgaW5kaWNlcyA9IFtdXG5cbiAgcmV0dXJuIHt0b09mZnNldCwgdG9Qb2ludH1cblxuICAvKiogQHR5cGUge0xvY2F0aW9uWyd0b1BvaW50J119ICovXG4gIGZ1bmN0aW9uIHRvUG9pbnQob2Zmc2V0KSB7XG4gICAgaWYgKHR5cGVvZiBvZmZzZXQgPT09ICdudW1iZXInICYmIG9mZnNldCA+IC0xICYmIG9mZnNldCA8PSB2YWx1ZS5sZW5ndGgpIHtcbiAgICAgIGxldCBpbmRleCA9IDBcblxuICAgICAgd2hpbGUgKHRydWUpIHtcbiAgICAgICAgbGV0IGVuZCA9IGluZGljZXNbaW5kZXhdXG5cbiAgICAgICAgaWYgKGVuZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc3QgZW9sID0gbmV4dCh2YWx1ZSwgaW5kaWNlc1tpbmRleCAtIDFdKVxuICAgICAgICAgIGVuZCA9IGVvbCA9PT0gLTEgPyB2YWx1ZS5sZW5ndGggKyAxIDogZW9sICsgMVxuICAgICAgICAgIGluZGljZXNbaW5kZXhdID0gZW5kXG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZW5kID4gb2Zmc2V0KSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGxpbmU6IGluZGV4ICsgMSxcbiAgICAgICAgICAgIGNvbHVtbjogb2Zmc2V0IC0gKGluZGV4ID4gMCA/IGluZGljZXNbaW5kZXggLSAxXSA6IDApICsgMSxcbiAgICAgICAgICAgIG9mZnNldFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGluZGV4KytcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICAvKiogQHR5cGUge0xvY2F0aW9uWyd0b09mZnNldCddfSAqL1xuICBmdW5jdGlvbiB0b09mZnNldChwb2ludCkge1xuICAgIGlmIChcbiAgICAgIHBvaW50ICYmXG4gICAgICB0eXBlb2YgcG9pbnQubGluZSA9PT0gJ251bWJlcicgJiZcbiAgICAgIHR5cGVvZiBwb2ludC5jb2x1bW4gPT09ICdudW1iZXInICYmXG4gICAgICAhTnVtYmVyLmlzTmFOKHBvaW50LmxpbmUpICYmXG4gICAgICAhTnVtYmVyLmlzTmFOKHBvaW50LmNvbHVtbilcbiAgICApIHtcbiAgICAgIHdoaWxlIChpbmRpY2VzLmxlbmd0aCA8IHBvaW50LmxpbmUpIHtcbiAgICAgICAgY29uc3QgZnJvbSA9IGluZGljZXNbaW5kaWNlcy5sZW5ndGggLSAxXVxuICAgICAgICBjb25zdCBlb2wgPSBuZXh0KHZhbHVlLCBmcm9tKVxuICAgICAgICBjb25zdCBlbmQgPSBlb2wgPT09IC0xID8gdmFsdWUubGVuZ3RoICsgMSA6IGVvbCArIDFcbiAgICAgICAgaWYgKGZyb20gPT09IGVuZCkgYnJlYWtcbiAgICAgICAgaW5kaWNlcy5wdXNoKGVuZClcbiAgICAgIH1cblxuICAgICAgY29uc3Qgb2Zmc2V0ID1cbiAgICAgICAgKHBvaW50LmxpbmUgPiAxID8gaW5kaWNlc1twb2ludC5saW5lIC0gMl0gOiAwKSArIHBvaW50LmNvbHVtbiAtIDFcbiAgICAgIC8vIFRoZSBnaXZlbiBgY29sdW1uYCBjb3VsZCBub3QgZXhpc3Qgb24gdGhpcyBsaW5lLlxuICAgICAgaWYgKG9mZnNldCA8IGluZGljZXNbcG9pbnQubGluZSAtIDFdKSByZXR1cm4gb2Zmc2V0XG4gICAgfVxuICB9XG59XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHZhbHVlXG4gKiBAcGFyYW0ge251bWJlcn0gZnJvbVxuICovXG5mdW5jdGlvbiBuZXh0KHZhbHVlLCBmcm9tKSB7XG4gIGNvbnN0IGNyID0gdmFsdWUuaW5kZXhPZignXFxyJywgZnJvbSlcbiAgY29uc3QgbGYgPSB2YWx1ZS5pbmRleE9mKCdcXG4nLCBmcm9tKVxuICBpZiAobGYgPT09IC0xKSByZXR1cm4gY3JcbiAgaWYgKGNyID09PSAtMSB8fCBjciArIDEgPT09IGxmKSByZXR1cm4gbGZcbiAgcmV0dXJuIGNyIDwgbGYgPyBjciA6IGxmXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/vfile-location/lib/index.js\n");

/***/ })

};
;