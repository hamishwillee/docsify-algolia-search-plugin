// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"ShInH":[function(require,module,exports) {
"use strict";
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "890e741a975ef6c8";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"8lqZg":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _algoliasearch = require("algoliasearch");
var _algoliasearchDefault = parcelHelpers.interopDefault(_algoliasearch);
var _deepmerge = require("deepmerge");
var _deepmergeDefault = parcelHelpers.interopDefault(_deepmerge);
var _component = require("./component");
var _utils = require("./utils");
var _render = require("./render");
var _renderDefault = parcelHelpers.interopDefault(_render);
const DEFAULT_CONFIG = {
    placeholder: "Type to search",
    noData: "No Results!",
    hideOtherSidebarContent: false,
    namespace: undefined,
    templates: {
        base: (0, _renderDefault.default).base,
        style: (0, _renderDefault.default).style,
        resultItem: (0, _renderDefault.default).resultItem,
        resultSet: (0, _renderDefault.default).resultSet
    },
    algolia: {
        multi: undefined,
        token: undefined,
        appId: undefined,
        indexes: undefined,
        defaultIndex: undefined,
        indexMap: {},
        currentIndex () {
            return this.defaultIndex;
        }
    }
};
let CONFIG;
const install = function(hook, vm) {
    const opts = vm.config.search;
    // Merge user options with default
    if ((0, _utils.isObject)(opts)) CONFIG = (0, _deepmergeDefault.default)(DEFAULT_CONFIG, opts);
    else CONFIG = DEFAUlT_CONFIG;
    // Set up algolia client
    CONFIG.algolia.client = (0, _algoliasearchDefault.default)(CONFIG.algolia.appId, CONFIG.algolia.token);
    // Create search client and configure indexes if necessary
    if ((0, _utils.isArray)(CONFIG.algolia.indexes)) CONFIG.algolia.indexes.forEach((index)=>{
        if ((0, _utils.isObject)(index)) {
            const client = CONFIG.algolia.client.initIndex(index.index);
            client.setSettings(index.settings);
            CONFIG.algolia.indexMap[index.index] = client;
        } else {
            const client1 = CONFIG.algolia.client.initIndex(index);
            CONFIG.algolia.indexMap[index] = client1;
        }
    });
    else if ((0, _utils.isObject)(CONFIG.algolia.indexes)) {
        const index = CONFIG.algolia.indexes;
        const client = CONFIG.algolia.client.initIndex(index.index);
        client.setSettings(index.settings);
        CONFIG.algolia.indexMap[index.index] = client;
    } else if ((0, _utils.isString)(CONFIG.algolia.indexes)) {
        const index1 = CONFIG.algolia.indexes;
        const client1 = CONFIG.algolia.client.initIndex(index1);
        CONFIG.algolia.indexMap[index1] = client1;
    } else {
        console.error("Invalid configuration");
        return;
    }
    hook.mounted(()=>{
        (0, _component.init)(CONFIG, vm);
    });
    hook.doneEach(()=>{
        (0, _component.update)(CONFIG, vm);
    });
    window.DocsifyAlgoliaSearchPlugin = {
        config: CONFIG
    };
};
$docsify.plugins = [].concat(install, $docsify.plugins);

},{"deepmerge":"bo72L","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./utils":"en4he","algoliasearch":"jU9w3","./component":"bNIKI","./render":"lPFSt"}],"bo72L":[function(require,module,exports) {
(function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    var isMergeableObject = function isMergeableObject(value) {
        return isNonNullObject(value) && !isSpecial(value);
    };
    function isNonNullObject(value) {
        return !!value && typeof value === "object";
    }
    function isSpecial(value) {
        var stringValue = Object.prototype.toString.call(value);
        return stringValue === "[object RegExp]" || stringValue === "[object Date]" || isReactElement(value);
    }
    // see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
    var canUseSymbol = typeof Symbol === "function" && Symbol.for;
    var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for("react.element") : 0xeac7;
    function isReactElement(value) {
        return value.$$typeof === REACT_ELEMENT_TYPE;
    }
    function emptyTarget(val) {
        return Array.isArray(val) ? [] : {};
    }
    function cloneUnlessOtherwiseSpecified(value, options) {
        return options.clone !== false && options.isMergeableObject(value) ? deepmerge(emptyTarget(value), value, options) : value;
    }
    function defaultArrayMerge(target, source, options) {
        return target.concat(source).map(function(element) {
            return cloneUnlessOtherwiseSpecified(element, options);
        });
    }
    function getMergeFunction(key, options) {
        if (!options.customMerge) return deepmerge;
        var customMerge = options.customMerge(key);
        return typeof customMerge === "function" ? customMerge : deepmerge;
    }
    function mergeObject(target, source, options) {
        var destination = {};
        if (options.isMergeableObject(target)) Object.keys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
        Object.keys(source).forEach(function(key) {
            if (!options.isMergeableObject(source[key]) || !target[key]) destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
            else destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
        });
        return destination;
    }
    function deepmerge(target, source, options) {
        options = options || {};
        options.arrayMerge = options.arrayMerge || defaultArrayMerge;
        options.isMergeableObject = options.isMergeableObject || isMergeableObject;
        var sourceIsArray = Array.isArray(source);
        var targetIsArray = Array.isArray(target);
        var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;
        if (!sourceAndTargetTypesMatch) return cloneUnlessOtherwiseSpecified(source, options);
        else if (sourceIsArray) return options.arrayMerge(target, source, options);
        else return mergeObject(target, source, options);
    }
    deepmerge.all = function deepmergeAll(array, options) {
        if (!Array.isArray(array)) throw new Error("first argument should be an array");
        return array.reduce(function(prev, next) {
            return deepmerge(prev, next, options);
        }, {});
    };
    var deepmerge_1 = deepmerge;
    return deepmerge_1;
});

},{}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"en4he":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/**
 * Check if value is a string
 *
 * @param {*} value
 */ parcelHelpers.export(exports, "isString", ()=>isString);
/**
 * Check if value is a number
 *
 * @param {*} value
 */ parcelHelpers.export(exports, "isNumber", ()=>isNumber);
/**
 * Check if value is an array
 *
 * @param {*} value
 */ parcelHelpers.export(exports, "isArray", ()=>isArray);
/**
 * Check if value is a function
 *
 * @param {*} value
 */ parcelHelpers.export(exports, "isFunction", ()=>isFunction);
/**
 * Check if value is an object
 *
 * @param {*} value
 */ parcelHelpers.export(exports, "isObject", ()=>isObject);
function isString(value) {
    return typeof value === "string" || value instanceof String;
}
function isNumber(value) {
    return typeof value === "number" && isFinite(value);
}
function isArray(value) {
    return Array.isArray(value);
}
function isFunction(value) {
    return typeof value === "function";
}
function isObject(value) {
    return value && typeof value === "object" && value.constructor === Object;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"jU9w3":[function(require,module,exports) {
/*! algoliasearch.umd.js | 4.14.2 | © Algolia, inc. | https://github.com/algolia/algoliasearch-client-javascript */ !function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    function t(t, e, r) {
        return e in t ? Object.defineProperty(t, e, {
            value: r,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[e] = r, t;
    }
    function e(t, e) {
        var r = Object.keys(t);
        if (Object.getOwnPropertySymbols) {
            var n = Object.getOwnPropertySymbols(t);
            e && (n = n.filter(function(e) {
                return Object.getOwnPropertyDescriptor(t, e).enumerable;
            })), r.push.apply(r, n);
        }
        return r;
    }
    function r(r) {
        for(var n = 1; n < arguments.length; n++){
            var a = null != arguments[n] ? arguments[n] : {};
            n % 2 ? e(Object(a), !0).forEach(function(e) {
                t(r, e, a[e]);
            }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(a)) : e(Object(a)).forEach(function(t) {
                Object.defineProperty(r, t, Object.getOwnPropertyDescriptor(a, t));
            });
        }
        return r;
    }
    function n(t, e) {
        if (null == t) return {};
        var r, n, a = function(t, e) {
            if (null == t) return {};
            var r, n, a = {}, o = Object.keys(t);
            for(n = 0; n < o.length; n++)r = o[n], e.indexOf(r) >= 0 || (a[r] = t[r]);
            return a;
        }(t, e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(t);
            for(n = 0; n < o.length; n++)r = o[n], e.indexOf(r) >= 0 || Object.prototype.propertyIsEnumerable.call(t, r) && (a[r] = t[r]);
        }
        return a;
    }
    function a(t, e) {
        return function(t) {
            if (Array.isArray(t)) return t;
        }(t) || function(t, e) {
            if (!(Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t))) return;
            var r = [], n = !0, a = !1, o = void 0;
            try {
                for(var i, u = t[Symbol.iterator](); !(n = (i = u.next()).done) && (r.push(i.value), !e || r.length !== e); n = !0);
            } catch (t1) {
                a = !0, o = t1;
            } finally{
                try {
                    n || null == u.return || u.return();
                } finally{
                    if (a) throw o;
                }
            }
            return r;
        }(t, e) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
        }();
    }
    function o(t) {
        return function(t) {
            if (Array.isArray(t)) {
                for(var e = 0, r = new Array(t.length); e < t.length; e++)r[e] = t[e];
                return r;
            }
        }(t) || function(t) {
            if (Symbol.iterator in Object(t) || "[object Arguments]" === Object.prototype.toString.call(t)) return Array.from(t);
        }(t) || function() {
            throw new TypeError("Invalid attempt to spread non-iterable instance");
        }();
    }
    function i(t) {
        var e, r = "algoliasearch-client-js-".concat(t.key), n = function() {
            return void 0 === e && (e = t.localStorage || window.localStorage), e;
        }, o = function() {
            return JSON.parse(n().getItem(r) || "{}");
        };
        return {
            get: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return Promise.resolve().then(function() {
                    var r = JSON.stringify(t), n = o()[r];
                    return Promise.all([
                        n || e(),
                        void 0 !== n
                    ]);
                }).then(function(t) {
                    var e = a(t, 2), n = e[0], o = e[1];
                    return Promise.all([
                        n,
                        o || r.miss(n)
                    ]);
                }).then(function(t) {
                    return a(t, 1)[0];
                });
            },
            set: function(t, e) {
                return Promise.resolve().then(function() {
                    var a = o();
                    return a[JSON.stringify(t)] = e, n().setItem(r, JSON.stringify(a)), e;
                });
            },
            delete: function(t) {
                return Promise.resolve().then(function() {
                    var e = o();
                    delete e[JSON.stringify(t)], n().setItem(r, JSON.stringify(e));
                });
            },
            clear: function() {
                return Promise.resolve().then(function() {
                    n().removeItem(r);
                });
            }
        };
    }
    function u(t) {
        var e = o(t.caches), r = e.shift();
        return void 0 === r ? {
            get: function(t, e) {
                var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, n = e();
                return n.then(function(t) {
                    return Promise.all([
                        t,
                        r.miss(t)
                    ]);
                }).then(function(t) {
                    return a(t, 1)[0];
                });
            },
            set: function(t, e) {
                return Promise.resolve(e);
            },
            delete: function(t) {
                return Promise.resolve();
            },
            clear: function() {
                return Promise.resolve();
            }
        } : {
            get: function(t, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                };
                return r.get(t, n, a).catch(function() {
                    return u({
                        caches: e
                    }).get(t, n, a);
                });
            },
            set: function(t, n) {
                return r.set(t, n).catch(function() {
                    return u({
                        caches: e
                    }).set(t, n);
                });
            },
            delete: function(t) {
                return r.delete(t).catch(function() {
                    return u({
                        caches: e
                    }).delete(t);
                });
            },
            clear: function() {
                return r.clear().catch(function() {
                    return u({
                        caches: e
                    }).clear();
                });
            }
        };
    }
    function s() {
        var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {
            serializable: !0
        }, e = {};
        return {
            get: function(r, n) {
                var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
                    miss: function() {
                        return Promise.resolve();
                    }
                }, o = JSON.stringify(r);
                if (o in e) return Promise.resolve(t.serializable ? JSON.parse(e[o]) : e[o]);
                var i = n(), u = a && a.miss || function() {
                    return Promise.resolve();
                };
                return i.then(function(t) {
                    return u(t);
                }).then(function() {
                    return i;
                });
            },
            set: function(r, n) {
                return e[JSON.stringify(r)] = t.serializable ? JSON.stringify(n) : n, Promise.resolve(n);
            },
            delete: function(t) {
                return delete e[JSON.stringify(t)], Promise.resolve();
            },
            clear: function() {
                return e = {}, Promise.resolve();
            }
        };
    }
    function c(t, e, r) {
        var n = {
            "x-algolia-api-key": r,
            "x-algolia-application-id": e
        };
        return {
            headers: function() {
                return t === m.WithinHeaders ? n : {};
            },
            queryParameters: function() {
                return t === m.WithinQueryParameters ? n : {};
            }
        };
    }
    function f(t) {
        var e = 0;
        return t(function r() {
            return e++, new Promise(function(n) {
                setTimeout(function() {
                    n(t(r));
                }, Math.min(100 * e, 1e3));
            });
        });
    }
    function d(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : function(t, e) {
            return Promise.resolve();
        };
        return Object.assign(t, {
            wait: function(r) {
                return d(t.then(function(t) {
                    return Promise.all([
                        e(t, r),
                        t
                    ]);
                }).then(function(t) {
                    return t[1];
                }));
            }
        });
    }
    function l(t) {
        for(var e = t.length - 1; e > 0; e--){
            var r = Math.floor(Math.random() * (e + 1)), n = t[e];
            t[e] = t[r], t[r] = n;
        }
        return t;
    }
    function p(t, e) {
        return e ? (Object.keys(e).forEach(function(r) {
            t[r] = e[r](t);
        }), t) : t;
    }
    function h(t) {
        for(var e = arguments.length, r = new Array(e > 1 ? e - 1 : 0), n = 1; n < e; n++)r[n - 1] = arguments[n];
        var a = 0;
        return t.replace(/%s/g, function() {
            return encodeURIComponent(r[a++]);
        });
    }
    var m = {
        WithinQueryParameters: 0,
        WithinHeaders: 1
    };
    function y(t, e) {
        var r = t || {}, n = r.data || {};
        return Object.keys(r).forEach(function(t) {
            -1 === [
                "timeout",
                "headers",
                "queryParameters",
                "data",
                "cacheable"
            ].indexOf(t) && (n[t] = r[t]);
        }), {
            data: Object.entries(n).length > 0 ? n : void 0,
            timeout: r.timeout || e,
            headers: r.headers || {},
            queryParameters: r.queryParameters || {},
            cacheable: r.cacheable
        };
    }
    var g = {
        Read: 1,
        Write: 2,
        Any: 3
    }, v = 1, b = 2, P = 3;
    function w(t) {
        var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : v;
        return r(r({}, t), {}, {
            status: e,
            lastUpdate: Date.now()
        });
    }
    function O(t) {
        return "string" == typeof t ? {
            protocol: "https",
            url: t,
            accept: g.Any
        } : {
            protocol: t.protocol || "https",
            url: t.url,
            accept: t.accept || g.Any
        };
    }
    var I = "DELETE", x = "GET", j = "POST", D = "PUT";
    function q(t, e) {
        return Promise.all(e.map(function(e) {
            return t.get(e, function() {
                return Promise.resolve(w(e));
            });
        })).then(function(t) {
            var r = t.filter(function(t) {
                return function(t) {
                    return t.status === v || Date.now() - t.lastUpdate > 12e4;
                }(t);
            }), n = t.filter(function(t) {
                return function(t) {
                    return t.status === P && Date.now() - t.lastUpdate <= 12e4;
                }(t);
            }), a = [].concat(o(r), o(n));
            return {
                getTimeout: function(t, e) {
                    return (0 === n.length && 0 === t ? 1 : n.length + 3 + t) * e;
                },
                statelessHosts: a.length > 0 ? a.map(function(t) {
                    return O(t);
                }) : e
            };
        });
    }
    function S(t, e, n, a) {
        var i = [], u = function(t, e) {
            if (t.method === x || void 0 === t.data && void 0 === e.data) return;
            var n = Array.isArray(t.data) ? t.data : r(r({}, t.data), e.data);
            return JSON.stringify(n);
        }(n, a), s = function(t, e) {
            var n = r(r({}, t.headers), e.headers), a = {};
            return Object.keys(n).forEach(function(t) {
                var e = n[t];
                a[t.toLowerCase()] = e;
            }), a;
        }(t, a), c = n.method, f = n.method !== x ? {} : r(r({}, n.data), a.data), d = r(r(r({
            "x-algolia-agent": t.userAgent.value
        }, t.queryParameters), f), a.queryParameters), l = 0, p = function e(r, o) {
            var f = r.pop();
            if (void 0 === f) throw {
                name: "RetryError",
                message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.",
                transporterStackTrace: R(i)
            };
            var p = {
                data: u,
                headers: s,
                method: c,
                url: N(f, n.path, d),
                connectTimeout: o(l, t.timeouts.connect),
                responseTimeout: o(l, a.timeout)
            }, h = function(t) {
                var e = {
                    request: p,
                    response: t,
                    host: f,
                    triesLeft: r.length
                };
                return i.push(e), e;
            }, m = {
                onSuccess: function(t) {
                    return function(t) {
                        try {
                            return JSON.parse(t.content);
                        } catch (e) {
                            throw function(t, e) {
                                return {
                                    name: "DeserializationError",
                                    message: t,
                                    response: e
                                };
                            }(e.message, t);
                        }
                    }(t);
                },
                onRetry: function(n) {
                    var a = h(n);
                    return n.isTimedOut && l++, Promise.all([
                        t.logger.info("Retryable failure", A(a)),
                        t.hostsCache.set(f, w(f, n.isTimedOut ? P : b))
                    ]).then(function() {
                        return e(r, o);
                    });
                },
                onFail: function(t) {
                    throw h(t), function(t, e) {
                        var r = t.content, n = t.status, a = r;
                        try {
                            a = JSON.parse(r).message;
                        } catch (t1) {}
                        return function(t, e, r) {
                            return {
                                name: "ApiError",
                                message: t,
                                status: e,
                                transporterStackTrace: r
                            };
                        }(a, n, e);
                    }(t, R(i));
                }
            };
            return t.requester.send(p).then(function(t) {
                return function(t, e) {
                    return function(t) {
                        var e = t.status;
                        return t.isTimedOut || function(t) {
                            var e = t.isTimedOut, r = t.status;
                            return !e && 0 == ~~r;
                        }(t) || 2 != ~~(e / 100) && 4 != ~~(e / 100);
                    }(t) ? e.onRetry(t) : 2 == ~~(t.status / 100) ? e.onSuccess(t) : e.onFail(t);
                }(t, m);
            });
        };
        return q(t.hostsCache, e).then(function(t) {
            return p(o(t.statelessHosts).reverse(), t.getTimeout);
        });
    }
    function k(t) {
        var e = t.hostsCache, r = t.logger, n = t.requester, o = t.requestsCache, i = t.responsesCache, u = t.timeouts, s = t.userAgent, c = t.hosts, f = t.queryParameters, d = {
            hostsCache: e,
            logger: r,
            requester: n,
            requestsCache: o,
            responsesCache: i,
            timeouts: u,
            userAgent: s,
            headers: t.headers,
            queryParameters: f,
            hosts: c.map(function(t) {
                return O(t);
            }),
            read: function(t, e) {
                var r = y(e, d.timeouts.read), n = function() {
                    return S(d, d.hosts.filter(function(t) {
                        return 0 != (t.accept & g.Read);
                    }), t, r);
                };
                if (!0 !== (void 0 !== r.cacheable ? r.cacheable : t.cacheable)) return n();
                var o = {
                    request: t,
                    mappedRequestOptions: r,
                    transporter: {
                        queryParameters: d.queryParameters,
                        headers: d.headers
                    }
                };
                return d.responsesCache.get(o, function() {
                    return d.requestsCache.get(o, function() {
                        return d.requestsCache.set(o, n()).then(function(t) {
                            return Promise.all([
                                d.requestsCache.delete(o),
                                t
                            ]);
                        }, function(t) {
                            return Promise.all([
                                d.requestsCache.delete(o),
                                Promise.reject(t)
                            ]);
                        }).then(function(t) {
                            var e = a(t, 2);
                            e[0];
                            return e[1];
                        });
                    });
                }, {
                    miss: function(t) {
                        return d.responsesCache.set(o, t);
                    }
                });
            },
            write: function(t, e) {
                return S(d, d.hosts.filter(function(t) {
                    return 0 != (t.accept & g.Write);
                }), t, y(e, d.timeouts.write));
            }
        };
        return d;
    }
    function T(t) {
        var e = {
            value: "Algolia for JavaScript (".concat(t, ")"),
            add: function(t) {
                var r = "; ".concat(t.segment).concat(void 0 !== t.version ? " (".concat(t.version, ")") : "");
                return -1 === e.value.indexOf(r) && (e.value = "".concat(e.value).concat(r)), e;
            }
        };
        return e;
    }
    function N(t, e, r) {
        var n = E(r), a = "".concat(t.protocol, "://").concat(t.url, "/").concat("/" === e.charAt(0) ? e.substr(1) : e);
        return n.length && (a += "?".concat(n)), a;
    }
    function E(t) {
        return Object.keys(t).map(function(e) {
            var r;
            return h("%s=%s", e, (r = t[e], "[object Object]" === Object.prototype.toString.call(r) || "[object Array]" === Object.prototype.toString.call(r) ? JSON.stringify(t[e]) : t[e]));
        }).join("&");
    }
    function R(t) {
        return t.map(function(t) {
            return A(t);
        });
    }
    function A(t) {
        var e = t.request.headers["x-algolia-api-key"] ? {
            "x-algolia-api-key": "*****"
        } : {};
        return r(r({}, t), {}, {
            request: r(r({}, t.request), {}, {
                headers: r(r({}, t.request.headers), e)
            })
        });
    }
    var C = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: j,
                path: "2/abtests",
                data: e
            }, r);
        };
    }, U = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: I,
                path: h("2/abtests/%s", e)
            }, r);
        };
    }, z = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("2/abtests/%s", e)
            }, r);
        };
    }, J = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "2/abtests"
            }, e);
        };
    }, F = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: j,
                path: h("2/abtests/%s/stop", e)
            }, r);
        };
    }, H = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/strategies/personalization"
            }, e);
        };
    }, M = function(t) {
        return function(e, r) {
            return t.transporter.write({
                method: j,
                path: "1/strategies/personalization",
                data: e
            }, r);
        };
    };
    function K(t) {
        return function e(r) {
            return t.request(r).then(function(n) {
                if (void 0 !== t.batch && t.batch(n.hits), !t.shouldStop(n)) return n.cursor ? e({
                    cursor: n.cursor
                }) : e({
                    page: (r.page || 0) + 1
                });
            });
        }({});
    }
    var W = function(t) {
        return function(e, a) {
            var o = a || {}, i = o.queryParameters, u = n(o, [
                "queryParameters"
            ]), s = r({
                acl: e
            }, void 0 !== i ? {
                queryParameters: i
            } : {});
            return d(t.transporter.write({
                method: j,
                path: "1/keys",
                data: s
            }, u), function(e, r) {
                return f(function(n) {
                    return tt(t)(e.key, r).catch(function(t) {
                        if (404 !== t.status) throw t;
                        return n();
                    });
                });
            });
        };
    }, B = function(t) {
        return function(e, r, n) {
            var a = y(n);
            return a.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                method: j,
                path: "1/clusters/mapping",
                data: {
                    cluster: r
                }
            }, a);
        };
    }, Q = function(t) {
        return function(e, r, n) {
            return t.transporter.write({
                method: j,
                path: "1/clusters/mapping/batch",
                data: {
                    users: e,
                    cluster: r
                }
            }, n);
        };
    }, G = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: j,
                path: h("/1/dictionaries/%s/batch", e),
                data: {
                    clearExistingDictionaryEntries: !0,
                    requests: {
                        action: "addEntry",
                        body: []
                    }
                }
            }, r), function(e, r) {
                return jt(t)(e.taskID, r);
            });
        };
    }, L = function(t) {
        return function(e, r, n) {
            return d(t.transporter.write({
                method: j,
                path: h("1/indexes/%s/operation", e),
                data: {
                    operation: "copy",
                    destination: r
                }
            }, n), function(r, n) {
                return ut(t)(e, {
                    methods: {
                        waitTask: de
                    }
                }).waitTask(r.taskID, n);
            });
        };
    }, V = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r(r({}, a), {}, {
                scope: [
                    pe.Rules
                ]
            }));
        };
    }, _ = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r(r({}, a), {}, {
                scope: [
                    pe.Settings
                ]
            }));
        };
    }, X = function(t) {
        return function(e, n, a) {
            return L(t)(e, n, r(r({}, a), {}, {
                scope: [
                    pe.Synonyms
                ]
            }));
        };
    }, Y = function(t) {
        return function(e, r) {
            return e.method === x ? t.transporter.read(e, r) : t.transporter.write(e, r);
        };
    }, Z = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: I,
                path: h("1/keys/%s", e)
            }, r), function(r, n) {
                return f(function(r) {
                    return tt(t)(e, n).then(r).catch(function(t) {
                        if (404 !== t.status) throw t;
                    });
                });
            });
        };
    }, $ = function(t) {
        return function(e, r, n) {
            var a = r.map(function(t) {
                return {
                    action: "deleteEntry",
                    body: {
                        objectID: t
                    }
                };
            });
            return d(t.transporter.write({
                method: j,
                path: h("/1/dictionaries/%s/batch", e),
                data: {
                    clearExistingDictionaryEntries: !1,
                    requests: a
                }
            }, n), function(e, r) {
                return jt(t)(e.taskID, r);
            });
        };
    }, tt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("1/keys/%s", e)
            }, r);
        };
    }, et = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("1/task/%s", e.toString())
            }, r);
        };
    }, rt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "/1/dictionaries/*/settings"
            }, e);
        };
    }, nt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/logs"
            }, e);
        };
    }, at = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/clusters/mapping/top"
            }, e);
        };
    }, ot = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("1/clusters/mapping/%s", e)
            }, r);
        };
    }, it = function(t) {
        return function(e) {
            var r = e || {}, a = r.retrieveMappings, o = n(r, [
                "retrieveMappings"
            ]);
            return !0 === a && (o.getClusters = !0), t.transporter.read({
                method: x,
                path: "1/clusters/mapping/pending"
            }, o);
        };
    }, ut = function(t) {
        return function(e) {
            var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, n = {
                transporter: t.transporter,
                appId: t.appId,
                indexName: e
            };
            return p(n, r.methods);
        };
    }, st = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/keys"
            }, e);
        };
    }, ct = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/clusters"
            }, e);
        };
    }, ft = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/indexes"
            }, e);
        };
    }, dt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: "1/clusters/mapping"
            }, e);
        };
    }, lt = function(t) {
        return function(e, r, n) {
            return d(t.transporter.write({
                method: j,
                path: h("1/indexes/%s/operation", e),
                data: {
                    operation: "move",
                    destination: r
                }
            }, n), function(r, n) {
                return ut(t)(e, {
                    methods: {
                        waitTask: de
                    }
                }).waitTask(r.taskID, n);
            });
        };
    }, pt = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: j,
                path: "1/indexes/*/batch",
                data: {
                    requests: e
                }
            }, r), function(e, r) {
                return Promise.all(Object.keys(e.taskID).map(function(n) {
                    return ut(t)(n, {
                        methods: {
                            waitTask: de
                        }
                    }).waitTask(e.taskID[n], r);
                }));
            });
        };
    }, ht = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: "1/indexes/*/objects",
                data: {
                    requests: e
                }
            }, r);
        };
    }, mt = function(t) {
        return function(e, n) {
            var a = e.map(function(t) {
                return r(r({}, t), {}, {
                    params: E(t.params || {})
                });
            });
            return t.transporter.read({
                method: j,
                path: "1/indexes/*/queries",
                data: {
                    requests: a
                },
                cacheable: !0
            }, n);
        };
    }, yt = function(t) {
        return function(e, a) {
            return Promise.all(e.map(function(e) {
                var o = e.params, i = o.facetName, u = o.facetQuery, s = n(o, [
                    "facetName",
                    "facetQuery"
                ]);
                return ut(t)(e.indexName, {
                    methods: {
                        searchForFacetValues: ue
                    }
                }).searchForFacetValues(i, u, r(r({}, a), s));
            }));
        };
    }, gt = function(t) {
        return function(e, r) {
            var n = y(r);
            return n.queryParameters["X-Algolia-User-ID"] = e, t.transporter.write({
                method: I,
                path: "1/clusters/mapping"
            }, n);
        };
    }, vt = function(t) {
        return function(e, r, n) {
            var a = r.map(function(t) {
                return {
                    action: "addEntry",
                    body: t
                };
            });
            return d(t.transporter.write({
                method: j,
                path: h("/1/dictionaries/%s/batch", e),
                data: {
                    clearExistingDictionaryEntries: !0,
                    requests: a
                }
            }, n), function(e, r) {
                return jt(t)(e.taskID, r);
            });
        };
    }, bt = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: j,
                path: h("1/keys/%s/restore", e)
            }, r), function(r, n) {
                return f(function(r) {
                    return tt(t)(e, n).catch(function(t) {
                        if (404 !== t.status) throw t;
                        return r();
                    });
                });
            });
        };
    }, Pt = function(t) {
        return function(e, r, n) {
            var a = r.map(function(t) {
                return {
                    action: "addEntry",
                    body: t
                };
            });
            return d(t.transporter.write({
                method: j,
                path: h("/1/dictionaries/%s/batch", e),
                data: {
                    clearExistingDictionaryEntries: !1,
                    requests: a
                }
            }, n), function(e, r) {
                return jt(t)(e.taskID, r);
            });
        };
    }, wt = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: j,
                path: h("/1/dictionaries/%s/search", e),
                data: {
                    query: r
                },
                cacheable: !0
            }, n);
        };
    }, Ot = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: "1/clusters/mapping/search",
                data: {
                    query: e
                }
            }, r);
        };
    }, It = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: D,
                path: "/1/dictionaries/*/settings",
                data: e
            }, r), function(e, r) {
                return jt(t)(e.taskID, r);
            });
        };
    }, xt = function(t) {
        return function(e, r) {
            var a = Object.assign({}, r), o = r || {}, i = o.queryParameters, u = n(o, [
                "queryParameters"
            ]), s = i ? {
                queryParameters: i
            } : {}, c = [
                "acl",
                "indexes",
                "referers",
                "restrictSources",
                "queryParameters",
                "description",
                "maxQueriesPerIPPerHour",
                "maxHitsPerQuery"
            ];
            return d(t.transporter.write({
                method: D,
                path: h("1/keys/%s", e),
                data: s
            }, u), function(r, n) {
                return f(function(r) {
                    return tt(t)(e, n).then(function(t) {
                        return function(t) {
                            return Object.keys(a).filter(function(t) {
                                return -1 !== c.indexOf(t);
                            }).every(function(e) {
                                return t[e] === a[e];
                            });
                        }(t) ? Promise.resolve() : r();
                    });
                });
            });
        };
    }, jt = function(t) {
        return function(e, r) {
            return f(function(n) {
                return et(t)(e, r).then(function(t) {
                    return "published" !== t.status ? n() : void 0;
                });
            });
        };
    }, Dt = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: j,
                path: h("1/indexes/%s/batch", t.indexName),
                data: {
                    requests: e
                }
            }, r), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, qt = function(t) {
        return function(e) {
            return K(r(r({
                shouldStop: function(t) {
                    return void 0 === t.cursor;
                }
            }, e), {}, {
                request: function(r) {
                    return t.transporter.read({
                        method: j,
                        path: h("1/indexes/%s/browse", t.indexName),
                        data: r
                    }, e);
                }
            }));
        };
    }, St = function(t) {
        return function(e) {
            var n = r({
                hitsPerPage: 1e3
            }, e);
            return K(r(r({
                shouldStop: function(t) {
                    return t.hits.length < n.hitsPerPage;
                }
            }, n), {}, {
                request: function(e) {
                    return se(t)("", r(r({}, n), e)).then(function(t) {
                        return r(r({}, t), {}, {
                            hits: t.hits.map(function(t) {
                                return delete t._highlightResult, t;
                            })
                        });
                    });
                }
            }));
        };
    }, kt = function(t) {
        return function(e) {
            var n = r({
                hitsPerPage: 1e3
            }, e);
            return K(r(r({
                shouldStop: function(t) {
                    return t.hits.length < n.hitsPerPage;
                }
            }, n), {}, {
                request: function(e) {
                    return ce(t)("", r(r({}, n), e)).then(function(t) {
                        return r(r({}, t), {}, {
                            hits: t.hits.map(function(t) {
                                return delete t._highlightResult, t;
                            })
                        });
                    });
                }
            }));
        };
    }, Tt = function(t) {
        return function(e, r, a) {
            var o = a || {}, i = o.batchSize, u = n(o, [
                "batchSize"
            ]), s = {
                taskIDs: [],
                objectIDs: []
            };
            return d(function n() {
                var a, o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, c = [];
                for(a = o; a < e.length && (c.push(e[a]), c.length !== (i || 1e3)); a++);
                return 0 === c.length ? Promise.resolve(s) : Dt(t)(c.map(function(t) {
                    return {
                        action: r,
                        body: t
                    };
                }), u).then(function(t) {
                    return s.objectIDs = s.objectIDs.concat(t.objectIDs), s.taskIDs.push(t.taskID), a++, n(a);
                });
            }(), function(e, r) {
                return Promise.all(e.taskIDs.map(function(e) {
                    return de(t)(e, r);
                }));
            });
        };
    }, Nt = function(t) {
        return function(e) {
            return d(t.transporter.write({
                method: j,
                path: h("1/indexes/%s/clear", t.indexName)
            }, e), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Et = function(t) {
        return function(e) {
            var r = e || {}, a = r.forwardToReplicas, o = y(n(r, [
                "forwardToReplicas"
            ]));
            return a && (o.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: j,
                path: h("1/indexes/%s/rules/clear", t.indexName)
            }, o), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Rt = function(t) {
        return function(e) {
            var r = e || {}, a = r.forwardToReplicas, o = y(n(r, [
                "forwardToReplicas"
            ]));
            return a && (o.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: j,
                path: h("1/indexes/%s/synonyms/clear", t.indexName)
            }, o), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, At = function(t) {
        return function(e, r) {
            return d(t.transporter.write({
                method: j,
                path: h("1/indexes/%s/deleteByQuery", t.indexName),
                data: e
            }, r), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ct = function(t) {
        return function(e) {
            return d(t.transporter.write({
                method: I,
                path: h("1/indexes/%s", t.indexName)
            }, e), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ut = function(t) {
        return function(e, r) {
            return d(zt(t)([
                e
            ], r).then(function(t) {
                return {
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, zt = function(t) {
        return function(e, r) {
            var n = e.map(function(t) {
                return {
                    objectID: t
                };
            });
            return Tt(t)(n, le.DeleteObject, r);
        };
    }, Jt = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = y(n(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: I,
                path: h("1/indexes/%s/rules/%s", t.indexName, e)
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ft = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = y(n(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: I,
                path: h("1/indexes/%s/synonyms/%s", t.indexName, e)
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Ht = function(t) {
        return function(e) {
            return Lt(t)(e).then(function() {
                return !0;
            }).catch(function(t) {
                if (404 !== t.status) throw t;
                return !1;
            });
        };
    }, Mt = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: j,
                path: h("1/answers/%s/prediction", t.indexName),
                data: {
                    query: e,
                    queryLanguages: r
                },
                cacheable: !0
            }, n);
        };
    }, Kt = function(t) {
        return function(e, o) {
            var i = o || {}, u = i.query, s = i.paginate, c = n(i, [
                "query",
                "paginate"
            ]), f = 0;
            return function n() {
                return ie(t)(u || "", r(r({}, c), {}, {
                    page: f
                })).then(function(t) {
                    for(var r = 0, o = Object.entries(t.hits); r < o.length; r++){
                        var i = a(o[r], 2), u = i[0], c = i[1];
                        if (e(c)) return {
                            object: c,
                            position: parseInt(u, 10),
                            page: f
                        };
                    }
                    if (f++, !1 === s || f >= t.nbPages) throw {
                        name: "ObjectNotFoundError",
                        message: "Object not found."
                    };
                    return n();
                });
            }();
        };
    }, Wt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("1/indexes/%s/%s", t.indexName, e)
            }, r);
        };
    }, Bt = function() {
        return function(t, e) {
            for(var r = 0, n = Object.entries(t.hits); r < n.length; r++){
                var o = a(n[r], 2), i = o[0];
                if (o[1].objectID === e) return parseInt(i, 10);
            }
            return -1;
        };
    }, Qt = function(t) {
        return function(e, a) {
            var o = a || {}, i = o.attributesToRetrieve, u = n(o, [
                "attributesToRetrieve"
            ]), s = e.map(function(e) {
                return r({
                    indexName: t.indexName,
                    objectID: e
                }, i ? {
                    attributesToRetrieve: i
                } : {});
            });
            return t.transporter.read({
                method: j,
                path: "1/indexes/*/objects",
                data: {
                    requests: s
                }
            }, u);
        };
    }, Gt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("1/indexes/%s/rules/%s", t.indexName, e)
            }, r);
        };
    }, Lt = function(t) {
        return function(e) {
            return t.transporter.read({
                method: x,
                path: h("1/indexes/%s/settings", t.indexName),
                data: {
                    getVersion: 2
                }
            }, e);
        };
    }, Vt = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: x,
                path: h("1/indexes/%s/synonyms/%s", t.indexName, e)
            }, r);
        };
    }, _t = function(t) {
        return function(e, r) {
            return d(Xt(t)([
                e
            ], r).then(function(t) {
                return {
                    objectID: t.objectIDs[0],
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, Xt = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.createIfNotExists, i = n(a, [
                "createIfNotExists"
            ]), u = o ? le.PartialUpdateObject : le.PartialUpdateObjectNoCreate;
            return Tt(t)(e, u, i);
        };
    }, Yt = function(t) {
        return function(e, i) {
            var u = i || {}, s = u.safe, c = u.autoGenerateObjectIDIfNotExist, f = u.batchSize, l = n(u, [
                "safe",
                "autoGenerateObjectIDIfNotExist",
                "batchSize"
            ]), p = function(e, r, n, a) {
                return d(t.transporter.write({
                    method: j,
                    path: h("1/indexes/%s/operation", e),
                    data: {
                        operation: n,
                        destination: r
                    }
                }, a), function(e, r) {
                    return de(t)(e.taskID, r);
                });
            }, m = Math.random().toString(36).substring(7), y = "".concat(t.indexName, "_tmp_").concat(m), g = ee({
                appId: t.appId,
                transporter: t.transporter,
                indexName: y
            }), v = [], b = p(t.indexName, y, "copy", r(r({}, l), {}, {
                scope: [
                    "settings",
                    "synonyms",
                    "rules"
                ]
            }));
            return v.push(b), d((s ? b.wait(l) : b).then(function() {
                var t = g(e, r(r({}, l), {}, {
                    autoGenerateObjectIDIfNotExist: c,
                    batchSize: f
                }));
                return v.push(t), s ? t.wait(l) : t;
            }).then(function() {
                var e = p(y, t.indexName, "move", l);
                return v.push(e), s ? e.wait(l) : e;
            }).then(function() {
                return Promise.all(v);
            }).then(function(t) {
                var e = a(t, 3), r = e[0], n = e[1], i = e[2];
                return {
                    objectIDs: n.objectIDs,
                    taskIDs: [
                        r.taskID
                    ].concat(o(n.taskIDs), [
                        i.taskID
                    ])
                };
            }), function(t, e) {
                return Promise.all(v.map(function(t) {
                    return t.wait(e);
                }));
            });
        };
    }, Zt = function(t) {
        return function(e, n) {
            return ne(t)(e, r(r({}, n), {}, {
                clearExistingRules: !0
            }));
        };
    }, $t = function(t) {
        return function(e, n) {
            return oe(t)(e, r(r({}, n), {}, {
                clearExistingSynonyms: !0
            }));
        };
    }, te = function(t) {
        return function(e, r) {
            return d(ee(t)([
                e
            ], r).then(function(t) {
                return {
                    objectID: t.objectIDs[0],
                    taskID: t.taskIDs[0]
                };
            }), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ee = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.autoGenerateObjectIDIfNotExist, i = n(a, [
                "autoGenerateObjectIDIfNotExist"
            ]), u = o ? le.AddObject : le.UpdateObject;
            if (u === le.UpdateObject) {
                var s = !0, c = !1, f = void 0;
                try {
                    for(var l, p = e[Symbol.iterator](); !(s = (l = p.next()).done); s = !0){
                        if (void 0 === l.value.objectID) return d(Promise.reject({
                            name: "MissingObjectIDError",
                            message: "All objects must have an unique objectID (like a primary key) to be valid. Algolia is also able to generate objectIDs automatically but *it's not recommended*. To do it, use the `{'autoGenerateObjectIDIfNotExist': true}` option."
                        }));
                    }
                } catch (t1) {
                    c = !0, f = t1;
                } finally{
                    try {
                        s || null == p.return || p.return();
                    } finally{
                        if (c) throw f;
                    }
                }
            }
            return Tt(t)(e, u, i);
        };
    }, re = function(t) {
        return function(e, r) {
            return ne(t)([
                e
            ], r);
        };
    }, ne = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = a.clearExistingRules, u = y(n(a, [
                "forwardToReplicas",
                "clearExistingRules"
            ]));
            return o && (u.queryParameters.forwardToReplicas = 1), i && (u.queryParameters.clearExistingRules = 1), d(t.transporter.write({
                method: j,
                path: h("1/indexes/%s/rules/batch", t.indexName),
                data: e
            }, u), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ae = function(t) {
        return function(e, r) {
            return oe(t)([
                e
            ], r);
        };
    }, oe = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = a.clearExistingSynonyms, u = a.replaceExistingSynonyms, s = y(n(a, [
                "forwardToReplicas",
                "clearExistingSynonyms",
                "replaceExistingSynonyms"
            ]));
            return o && (s.queryParameters.forwardToReplicas = 1), (u || i) && (s.queryParameters.replaceExistingSynonyms = 1), d(t.transporter.write({
                method: j,
                path: h("1/indexes/%s/synonyms/batch", t.indexName),
                data: e
            }, s), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, ie = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("1/indexes/%s/query", t.indexName),
                data: {
                    query: e
                },
                cacheable: !0
            }, r);
        };
    }, ue = function(t) {
        return function(e, r, n) {
            return t.transporter.read({
                method: j,
                path: h("1/indexes/%s/facets/%s/query", t.indexName, e),
                data: {
                    facetQuery: r
                },
                cacheable: !0
            }, n);
        };
    }, se = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("1/indexes/%s/rules/search", t.indexName),
                data: {
                    query: e
                }
            }, r);
        };
    }, ce = function(t) {
        return function(e, r) {
            return t.transporter.read({
                method: j,
                path: h("1/indexes/%s/synonyms/search", t.indexName),
                data: {
                    query: e
                }
            }, r);
        };
    }, fe = function(t) {
        return function(e, r) {
            var a = r || {}, o = a.forwardToReplicas, i = y(n(a, [
                "forwardToReplicas"
            ]));
            return o && (i.queryParameters.forwardToReplicas = 1), d(t.transporter.write({
                method: D,
                path: h("1/indexes/%s/settings", t.indexName),
                data: e
            }, i), function(e, r) {
                return de(t)(e.taskID, r);
            });
        };
    }, de = function(t) {
        return function(e, r) {
            return f(function(n) {
                return (function(t) {
                    return function(e, r) {
                        return t.transporter.read({
                            method: x,
                            path: h("1/indexes/%s/task/%s", t.indexName, e.toString())
                        }, r);
                    };
                })(t)(e, r).then(function(t) {
                    return "published" !== t.status ? n() : void 0;
                });
            });
        };
    }, le = {
        AddObject: "addObject",
        UpdateObject: "updateObject",
        PartialUpdateObject: "partialUpdateObject",
        PartialUpdateObjectNoCreate: "partialUpdateObjectNoCreate",
        DeleteObject: "deleteObject",
        DeleteIndex: "delete",
        ClearIndex: "clear"
    }, pe = {
        Settings: "settings",
        Synonyms: "synonyms",
        Rules: "rules"
    }, he = 1, me = 2, ye = 3;
    function ge(t, e, n) {
        var a, o = {
            appId: t,
            apiKey: e,
            timeouts: {
                connect: 1,
                read: 2,
                write: 30
            },
            requester: {
                send: function(t) {
                    return new Promise(function(e) {
                        var r = new XMLHttpRequest;
                        r.open(t.method, t.url, !0), Object.keys(t.headers).forEach(function(e) {
                            return r.setRequestHeader(e, t.headers[e]);
                        });
                        var n, a = function(t, n) {
                            return setTimeout(function() {
                                r.abort(), e({
                                    status: 0,
                                    content: n,
                                    isTimedOut: !0
                                });
                            }, 1e3 * t);
                        }, o = a(t.connectTimeout, "Connection timeout");
                        r.onreadystatechange = function() {
                            r.readyState > r.OPENED && void 0 === n && (clearTimeout(o), n = a(t.responseTimeout, "Socket timeout"));
                        }, r.onerror = function() {
                            0 === r.status && (clearTimeout(o), clearTimeout(n), e({
                                content: r.responseText || "Network request failed",
                                status: r.status,
                                isTimedOut: !1
                            }));
                        }, r.onload = function() {
                            clearTimeout(o), clearTimeout(n), e({
                                content: r.responseText,
                                status: r.status,
                                isTimedOut: !1
                            });
                        }, r.send(t.data);
                    });
                }
            },
            logger: (a = ye, {
                debug: function(t, e) {
                    return he >= a && console.debug(t, e), Promise.resolve();
                },
                info: function(t, e) {
                    return me >= a && console.info(t, e), Promise.resolve();
                },
                error: function(t, e) {
                    return console.error(t, e), Promise.resolve();
                }
            }),
            responsesCache: s(),
            requestsCache: s({
                serializable: !1
            }),
            hostsCache: u({
                caches: [
                    i({
                        key: "".concat("4.14.2", "-").concat(t)
                    }),
                    s()
                ]
            }),
            userAgent: T("4.14.2").add({
                segment: "Browser"
            })
        }, f = r(r({}, o), n), d = function() {
            return function(t) {
                return function(t) {
                    var e = t.region || "us", n = c(m.WithinHeaders, t.appId, t.apiKey), a = k(r(r({
                        hosts: [
                            {
                                url: "personalization.".concat(e, ".algolia.com")
                            }
                        ]
                    }, t), {}, {
                        headers: r(r(r({}, n.headers()), {
                            "content-type": "application/json"
                        }), t.headers),
                        queryParameters: r(r({}, n.queryParameters()), t.queryParameters)
                    }));
                    return p({
                        appId: t.appId,
                        transporter: a
                    }, t.methods);
                }(r(r(r({}, o), t), {}, {
                    methods: {
                        getPersonalizationStrategy: H,
                        setPersonalizationStrategy: M
                    }
                }));
            };
        };
        return function(t) {
            var e = t.appId, n = c(void 0 !== t.authMode ? t.authMode : m.WithinHeaders, e, t.apiKey), a = k(r(r({
                hosts: [
                    {
                        url: "".concat(e, "-dsn.algolia.net"),
                        accept: g.Read
                    },
                    {
                        url: "".concat(e, ".algolia.net"),
                        accept: g.Write
                    }
                ].concat(l([
                    {
                        url: "".concat(e, "-1.algolianet.com")
                    },
                    {
                        url: "".concat(e, "-2.algolianet.com")
                    },
                    {
                        url: "".concat(e, "-3.algolianet.com")
                    }
                ]))
            }, t), {}, {
                headers: r(r(r({}, n.headers()), {
                    "content-type": "application/x-www-form-urlencoded"
                }), t.headers),
                queryParameters: r(r({}, n.queryParameters()), t.queryParameters)
            }));
            return p({
                transporter: a,
                appId: e,
                addAlgoliaAgent: function(t, e) {
                    a.userAgent.add({
                        segment: t,
                        version: e
                    });
                },
                clearCache: function() {
                    return Promise.all([
                        a.requestsCache.clear(),
                        a.responsesCache.clear()
                    ]).then(function() {});
                }
            }, t.methods);
        }(r(r({}, f), {}, {
            methods: {
                search: mt,
                searchForFacetValues: yt,
                multipleBatch: pt,
                multipleGetObjects: ht,
                multipleQueries: mt,
                copyIndex: L,
                copySettings: _,
                copySynonyms: X,
                copyRules: V,
                moveIndex: lt,
                listIndices: ft,
                getLogs: nt,
                listClusters: ct,
                multipleSearchForFacetValues: yt,
                getApiKey: tt,
                addApiKey: W,
                listApiKeys: st,
                updateApiKey: xt,
                deleteApiKey: Z,
                restoreApiKey: bt,
                assignUserID: B,
                assignUserIDs: Q,
                getUserID: ot,
                searchUserIDs: Ot,
                listUserIDs: dt,
                getTopUserIDs: at,
                removeUserID: gt,
                hasPendingMappings: it,
                clearDictionaryEntries: G,
                deleteDictionaryEntries: $,
                getDictionarySettings: rt,
                getAppTask: et,
                replaceDictionaryEntries: vt,
                saveDictionaryEntries: Pt,
                searchDictionaryEntries: wt,
                setDictionarySettings: It,
                waitAppTask: jt,
                customRequest: Y,
                initIndex: function(t) {
                    return function(e) {
                        return ut(t)(e, {
                            methods: {
                                batch: Dt,
                                delete: Ct,
                                findAnswers: Mt,
                                getObject: Wt,
                                getObjects: Qt,
                                saveObject: te,
                                saveObjects: ee,
                                search: ie,
                                searchForFacetValues: ue,
                                waitTask: de,
                                setSettings: fe,
                                getSettings: Lt,
                                partialUpdateObject: _t,
                                partialUpdateObjects: Xt,
                                deleteObject: Ut,
                                deleteObjects: zt,
                                deleteBy: At,
                                clearObjects: Nt,
                                browseObjects: qt,
                                getObjectPosition: Bt,
                                findObject: Kt,
                                exists: Ht,
                                saveSynonym: ae,
                                saveSynonyms: oe,
                                getSynonym: Vt,
                                searchSynonyms: ce,
                                browseSynonyms: kt,
                                deleteSynonym: Ft,
                                clearSynonyms: Rt,
                                replaceAllObjects: Yt,
                                replaceAllSynonyms: $t,
                                searchRules: se,
                                getRule: Gt,
                                deleteRule: Jt,
                                saveRule: re,
                                saveRules: ne,
                                replaceAllRules: Zt,
                                browseRules: St,
                                clearRules: Et
                            }
                        });
                    };
                },
                initAnalytics: function() {
                    return function(t) {
                        return function(t) {
                            var e = t.region || "us", n = c(m.WithinHeaders, t.appId, t.apiKey), a = k(r(r({
                                hosts: [
                                    {
                                        url: "analytics.".concat(e, ".algolia.com")
                                    }
                                ]
                            }, t), {}, {
                                headers: r(r(r({}, n.headers()), {
                                    "content-type": "application/json"
                                }), t.headers),
                                queryParameters: r(r({}, n.queryParameters()), t.queryParameters)
                            }));
                            return p({
                                appId: t.appId,
                                transporter: a
                            }, t.methods);
                        }(r(r(r({}, o), t), {}, {
                            methods: {
                                addABTest: C,
                                getABTest: z,
                                getABTests: J,
                                stopABTest: F,
                                deleteABTest: U
                            }
                        }));
                    };
                },
                initPersonalization: d,
                initRecommendation: function() {
                    return function(t) {
                        return f.logger.info("The `initRecommendation` method is deprecated. Use `initPersonalization` instead."), d()(t);
                    };
                }
            }
        }));
    }
    return ge.version = "4.14.2", ge;
});

},{}],"bNIKI":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "init", ()=>init);
parcelHelpers.export(exports, "update", ()=>update);
var _utils = require("./utils");
let NO_DATA_TEXT = "";
let options;
function renderBase(defaultValue = "") {
    const html = options.templates.base(defaultValue, options);
    const el = Docsify.dom.create("div", html);
    const aside = Docsify.dom.find("aside");
    Docsify.dom.toggleClass(el, "search");
    Docsify.dom.before(aside, el);
}
function renderResponse(response) {
    const { algolia  } = options;
    const { resultSet , resultItem  } = options.templates;
    if (algolia.multi) {
        const { results  } = response;
        return results.map((results)=>resultSet(results, response, NO_DATA_TEXT, options)).join("");
    } else {
        const { hits  } = response;
        return hits.map((result)=>resultItem(result, response, options)).join("");
    }
}
function doSearch(value, clearInput = false) {
    const $search = Docsify.dom.find("div.search");
    const $input = Docsify.dom.find($search, "input");
    const $panel = Docsify.dom.find($search, ".results-panel");
    const $clearBtn = Docsify.dom.find($search, ".clear-button");
    const $sidebarNav = Docsify.dom.find(".sidebar-nav");
    const $appName = Docsify.dom.find(".app-name");
    let query;
    if (!value) {
        $panel.classList.remove("show");
        $clearBtn.classList.remove("show");
        $panel.innerHTML = "";
        if (options.hideOtherSidebarContent) {
            $sidebarNav.classList.remove("hide");
            $appName.classList.remove("hide");
        }
        if (clearInput) $input.value = "";
        return;
    }
    const { algolia  } = options;
    const searchClient = algolia.multi ? algolia.client : algolia.indexMap[algolia.currentIndex(algolia.indexMap)];
    if (!(0, _utils.isArray)(algolia.indexes) && algolia.multi) {
        console.error("Algolia Search Plugin: When multi search is enabled, you must provided more than one index");
        return;
    }
    if (algolia.multi) query = algolia.indexes.map(({ index  })=>({
            indexName: index,
            query: value
        }));
    else query = value;
    searchClient.search(query, "" /*algolia.indexes.settings */ ) //This is just test - settings hard coded in using code. Need to make the settings conditional
    //searchClient.search(query)
    .then(renderResponse).then((html)=>{
        $panel.classList.add("show");
        $clearBtn.classList.add("show");
        $panel.innerHTML = html || `<p class="empty">${NO_DATA_TEXT}</p>`;
        if (options.hideOtherSidebarContent) {
            $sidebarNav.classList.add("hide");
            $appName.classList.add("hide");
        }
    });
}
function bindEvents(indexMap) {
    const $search = Docsify.dom.find("div.search");
    const $input = Docsify.dom.find($search, "input");
    const $inputWrap = Docsify.dom.find($search, ".input-wrap");
    let timeId;
    // Prevent to Fold sidebar
    Docsify.dom.on($search, "click", (e)=>e.target.tagName !== "A" && e.stopPropagation());
    Docsify.dom.on($input, "input", (e)=>{
        clearTimeout(timeId), timeId = setTimeout(()=>doSearch(e.target.value.trim(), indexMap), 100);
    });
    Docsify.dom.on($inputWrap, "click", (e)=>{
        // Click input outside
        if (e.target.tagName !== "INPUT") {
            $input.value = "";
            doSearch();
        }
    });
    window.DocsifyAlgoliaSearchPlugin.clearResults = function(clearResults = true) {
        doSearch(null, clearResults);
    };
}
function updatePlaceholder(text, path) {
    const $input = Docsify.dom.getNode('.search input[type="search"]');
    if (!$input) return;
    if ((0, _utils.isString)(text)) $input.placeholder = text;
    else {
        const match = Object.keys(text).filter((key)=>path.indexOf(key) > -1)[0];
        $input.placeholder = text[match];
    }
}
function updateNoData(text, path) {
    if ((0, _utils.isString)(text)) NO_DATA_TEXT = text;
    else {
        const match = Object.keys(text).filter((key)=>path.indexOf(key) > -1)[0];
        NO_DATA_TEXT = text[match];
    }
}
function updateOptions(opts) {
    options = opts;
}
function init(opts, vm) {
    const keywords = vm.router.parse().query.s;
    updateOptions(opts);
    Docsify.dom.style(options.templates.style(options));
    renderBase(keywords);
    bindEvents();
    keywords && setTimeout(()=>doSearch(keywords), 500);
}
function update(opts, vm) {
    updatePlaceholder(opts.placeholder, vm.route.path);
    updateNoData(opts.noData, vm.route.path);
}

},{"./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lPFSt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _utils = require("./utils");
const style = (options)=>`
    :root {
        --search-link-hover-color: #fff;
        --search-results-heading-font-size: 17px;
        --search-results-heading-padding: .5em 0;
    }

    .sidebar {
        padding-top: 0;
    }

    .search {
        margin-bottom: 20px;
        padding: 6px;
        border-bottom: 1px solid #eee;
    }

    .search .results-attribution {
        width: 150px;
        margin-top: 15px;
        display: block;
    }

    .search .results-attribution svg {
        width: 100%;
    }

    .search .input-wrap {
        display: flex;
        align-items: center;
    }

    .search .results-panel {
        display: none;
    }

    .search .results-panel.show {
        display: block;
    }

    .search a:hover {
        color: var(--search-link-hover-color);
    }

    .search input {
        outline: none;
        border: none;
        width: 100%;
        padding: 0 7px;
        line-height: 36px;
        font-size: 14px;
    }

    .search input::-webkit-search-decoration,
    .search input::-webkit-search-cancel-button,
    .search input {
        -webkit-appearance: none;
        -moz-appearance: none;
        appearance: none;
    }
    .search .clear-button {
        width: 36px;
        text-align: right;
        display: none;
    }

    .search .clear-button.show {
        display: block;
    }

    .search .clear-button svg {
        transform: scale(.5);
    }

    .search h2 {
        font-size: 17px;
        margin: 10px 0;
    }

    .search a {
        text-decoration: none;
        color: inherit;
    }

    .search .matching-post {
        border-bottom: 1px solid #eee;
    }

    .search h2.matching-set-heading {
        background-color: var(--mono-base);
        position: relative;
        display: block;
        padding: var(--search-results-heading-padding);
        font-size: var(--search-results-heading-font-size);
        border-bottom: 1px solid var(--sidebar-border-color);
    }

    .search .matching-set-heading::before,
    .search .matching-set-heading::after {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: var(--mono-base);
        border-bottom: 1px solid var(--sidebar-border-color);
    }

    .search .matching-set-heading::before {
        left: 100%;
    }

    .search .matching-set-heading::after {
        right: 100%;
    }

    .search .matching-post:last-child {
        border-bottom: 0;
    }

    .search p {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
    }

    .search p.empty {
        text-align: center;
    }

    .app-name.hide, .sidebar-nav.hide {
        display: none;
    }
`;
const base = (defaultValue = "", options)=>`
    <div class="input-wrap">
        <input type="search" value="${defaultValue}" />
        <div class="clear-button">
            <svg width="26" height="24">
                <circle cx="12" cy="12" r="11" fill="#ccc" />
                <path stroke="white" stroke-width="2" d="M8.25,8.25,15.75,15.75" />
                <path stroke="white" stroke-width="2"d="M8.25,15.75,15.75,8.25" />
            </svg>
        </div>
    </div>
    <div class="results-panel"></div>
    <a href="https://www.algolia.com/" class="results-attribution" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 168 24"><g fill="none"><path fill="#FFF" d="M120.925 18.804c-4.386.02-4.386-3.54-4.386-4.106l-.007-13.336 2.675-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-10.846-2.18c.821 0 1.43-.047 1.855-.129v-2.719a6.334 6.334 0 0 0-1.574-.199 5.7 5.7 0 0 0-.897.069 2.699 2.699 0 0 0-.814.24c-.24.116-.439.28-.582.491-.15.212-.219.335-.219.656 0 .628.219.991.616 1.23s.938.362 1.615.362zm-.233-9.7c.883 0 1.629.109 2.231.328.602.218 1.088.525 1.444.915.363.396.609.922.76 1.483.157.56.232 1.175.232 1.85v6.874a32.5 32.5 0 0 1-1.868.314c-.834.123-1.772.185-2.813.185-.69 0-1.327-.069-1.895-.198a4.001 4.001 0 0 1-1.471-.636 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.803 0-.656.13-1.073.384-1.525a3.24 3.24 0 0 1 1.047-1.106c.445-.287.95-.492 1.532-.615a8.8 8.8 0 0 1 1.82-.185 8.404 8.404 0 0 1 1.972.24v-.438c0-.307-.035-.6-.11-.874a1.88 1.88 0 0 0-.384-.73 1.784 1.784 0 0 0-.724-.493 3.164 3.164 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.735 7.735 0 0 0-1.26.307l-.321-2.192c.335-.117.834-.233 1.478-.349a10.98 10.98 0 0 1 2.073-.178zm52.842 9.626c.822 0 1.43-.048 1.854-.13V13.7a6.347 6.347 0 0 0-1.574-.199c-.294 0-.595.021-.896.069a2.7 2.7 0 0 0-.814.24 1.46 1.46 0 0 0-.582.491c-.15.212-.218.335-.218.656 0 .628.218.991.615 1.23.404.245.938.362 1.615.362zm-.226-9.694c.883 0 1.629.108 2.231.327.602.219 1.088.526 1.444.915.355.39.609.923.759 1.483a6.8 6.8 0 0 1 .233 1.852v6.873c-.41.088-1.034.19-1.868.314-.834.123-1.772.184-2.813.184-.69 0-1.327-.068-1.895-.198a4.001 4.001 0 0 1-1.471-.635 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.804 0-.656.13-1.073.384-1.524.26-.45.608-.82 1.047-1.107.445-.286.95-.491 1.532-.614a8.803 8.803 0 0 1 2.751-.13c.329.034.671.096 1.04.185v-.437a3.3 3.3 0 0 0-.109-.875 1.873 1.873 0 0 0-.384-.731 1.784 1.784 0 0 0-.724-.492 3.165 3.165 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.75 7.75 0 0 0-1.26.307l-.321-2.193c.335-.116.834-.232 1.478-.348a11.633 11.633 0 0 1 2.073-.177zm-8.034-1.271a1.626 1.626 0 0 1-1.628-1.62c0-.895.725-1.62 1.628-1.62.904 0 1.63.725 1.63 1.62 0 .895-.733 1.62-1.63 1.62zm1.348 13.22h-2.689V7.27l2.69-.423v11.956zm-4.714 0c-4.386.02-4.386-3.54-4.386-4.107l-.008-13.336 2.676-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-8.698-5.903c0-1.156-.253-2.119-.746-2.788-.493-.677-1.183-1.01-2.067-1.01-.882 0-1.574.333-2.065 1.01-.493.676-.733 1.632-.733 2.788 0 1.168.246 1.953.74 2.63.492.683 1.183 1.018 2.066 1.018.882 0 1.574-.342 2.067-1.019.492-.683.738-1.46.738-2.63zm2.737-.007c0 .902-.13 1.584-.397 2.33a5.52 5.52 0 0 1-1.128 1.906 4.986 4.986 0 0 1-1.752 1.223c-.685.286-1.739.45-2.265.45-.528-.006-1.574-.157-2.252-.45a5.096 5.096 0 0 1-1.744-1.223c-.487-.527-.863-1.162-1.137-1.906a6.345 6.345 0 0 1-.41-2.33c0-.902.123-1.77.397-2.508a5.554 5.554 0 0 1 1.15-1.892 5.133 5.133 0 0 1 1.75-1.216c.679-.287 1.425-.423 2.232-.423.808 0 1.553.142 2.237.423a4.88 4.88 0 0 1 1.753 1.216 5.644 5.644 0 0 1 1.135 1.892c.287.738.431 1.606.431 2.508zm-20.138 0c0 1.12.246 2.363.738 2.882.493.52 1.13.78 1.91.78.424 0 .828-.062 1.204-.178.377-.116.677-.253.917-.417V9.33a10.476 10.476 0 0 0-1.766-.226c-.971-.028-1.71.37-2.23 1.004-.513.636-.773 1.75-.773 2.788zm7.438 5.274c0 1.824-.466 3.156-1.404 4.004-.936.846-2.367 1.27-4.296 1.27-.705 0-2.17-.137-3.34-.396l.431-2.118c.98.205 2.272.26 2.95.26 1.074 0 1.84-.219 2.299-.656.459-.437.684-1.086.684-1.948v-.437a8.07 8.07 0 0 1-1.047.397c-.43.13-.93.198-1.492.198-.739 0-1.41-.116-2.018-.349a4.206 4.206 0 0 1-1.567-1.025c-.431-.45-.774-1.017-1.013-1.694-.24-.677-.363-1.885-.363-2.773 0-.834.13-1.88.384-2.577.26-.696.629-1.298 1.129-1.796.493-.498 1.095-.881 1.8-1.162a6.605 6.605 0 0 1 2.428-.457c.87 0 1.67.109 2.45.24.78.129 1.444.265 1.985.415V18.17zM6.972 6.677v1.627c-.712-.446-1.52-.67-2.425-.67-.585 0-1.045.13-1.38.391a1.24 1.24 0 0 0-.502 1.03c0 .425.164.765.494 1.02.33.256.835.532 1.516.83.447.192.795.356 1.045.495.25.138.537.332.862.582.324.25.563.548.718.894.154.345.23.741.23 1.188 0 .947-.334 1.691-1.004 2.234-.67.542-1.537.814-2.601.814-1.18 0-2.16-.229-2.936-.686v-1.708c.84.628 1.814.942 2.92.942.585 0 1.048-.136 1.388-.407.34-.271.51-.646.51-1.125 0-.287-.1-.55-.302-.79-.203-.24-.42-.42-.655-.542-.234-.123-.585-.29-1.053-.503a61.27 61.27 0 0 1-.582-.271 13.67 13.67 0 0 1-.55-.287 4.275 4.275 0 0 1-.567-.351 6.92 6.92 0 0 1-.455-.4c-.18-.17-.31-.34-.39-.51-.08-.17-.155-.37-.224-.598a2.553 2.553 0 0 1-.104-.742c0-.915.333-1.638.998-2.17.664-.532 1.523-.798 2.576-.798.968 0 1.793.17 2.473.51zm7.468 5.696v-.287c-.022-.607-.187-1.088-.495-1.444-.309-.357-.75-.535-1.324-.535-.532 0-.99.194-1.373.583-.382.388-.622.949-.717 1.683h3.909zm1.005 2.792v1.404c-.596.34-1.383.51-2.362.51-1.255 0-2.255-.377-3-1.132-.744-.755-1.116-1.744-1.116-2.968 0-1.297.34-2.316 1.021-3.055.68-.74 1.548-1.11 2.6-1.11 1.033 0 1.852.323 2.458.966.606.644.91 1.572.91 2.784 0 .33-.033.676-.096 1.038h-5.314c.107.702.405 1.239.894 1.611.49.372 1.106.558 1.85.558.862 0 1.58-.202 2.155-.606zm6.605-1.77h-1.212c-.596 0-1.045.116-1.349.35-.303.234-.454.532-.454.894 0 .372.117.664.35.877.235.213.575.32 1.022.32.51 0 .912-.142 1.204-.424.293-.281.44-.651.44-1.108v-.91zm-4.068-2.554V9.325c.627-.361 1.457-.542 2.489-.542 2.116 0 3.175 1.026 3.175 3.08V17h-1.548v-.957c-.415.68-1.143 1.02-2.186 1.02-.766 0-1.38-.22-1.843-.661-.462-.442-.694-1.003-.694-1.684 0-.776.293-1.38.878-1.81.585-.431 1.404-.647 2.457-.647h1.34V11.8c0-.554-.133-.971-.399-1.253-.266-.282-.707-.423-1.324-.423a4.07 4.07 0 0 0-2.345.718zm9.333-1.93v1.42c.394-1 1.101-1.5 2.123-1.5.148 0 .313.016.494.048v1.531a1.885 1.885 0 0 0-.75-.143c-.542 0-.989.24-1.34.718-.351.479-.527 1.048-.527 1.707V17h-1.563V8.91h1.563zm5.01 4.084c.022.82.272 1.492.75 2.019.479.526 1.15.79 2.01.79.639 0 1.235-.176 1.788-.527v1.404c-.521.319-1.186.479-1.995.479-1.265 0-2.276-.4-3.031-1.197-.755-.798-1.133-1.792-1.133-2.984 0-1.16.38-2.151 1.14-2.975.761-.825 1.79-1.237 3.088-1.237.702 0 1.346.149 1.93.447v1.436a3.242 3.242 0 0 0-1.77-.495c-.84 0-1.513.266-2.019.798-.505.532-.758 1.213-.758 2.042zM40.24 5.72v4.579c.458-1 1.293-1.5 2.505-1.5.787 0 1.42.245 1.899.734.479.49.718 1.17.718 2.042V17h-1.564v-5.106c0-.553-.14-.98-.422-1.284-.282-.303-.652-.455-1.11-.455-.531 0-1.002.202-1.411.606-.41.405-.615 1.022-.615 1.851V17h-1.563V5.72h1.563zm14.966 10.02c.596 0 1.096-.253 1.5-.758.404-.506.606-1.157.606-1.955 0-.915-.202-1.62-.606-2.114-.404-.495-.92-.742-1.548-.742-.553 0-1.05.224-1.491.67-.442.447-.662 1.133-.662 2.058 0 .958.212 1.67.638 2.138.425.469.946.703 1.563.703zM53.004 5.72v4.42c.574-.894 1.388-1.341 2.44-1.341 1.022 0 1.857.383 2.506 1.149.649.766.973 1.781.973 3.047 0 1.138-.309 2.109-.925 2.912-.617.803-1.463 1.205-2.537 1.205-1.075 0-1.894-.447-2.457-1.34V17h-1.58V5.72h1.58zm9.908 11.104l-3.223-7.913h1.739l1.005 2.632 1.26 3.415c.096-.32.48-1.458 1.15-3.415l.909-2.632h1.66l-2.92 7.866c-.777 2.074-1.963 3.11-3.559 3.11a2.92 2.92 0 0 1-.734-.079v-1.34c.17.042.351.064.543.064 1.032 0 1.755-.57 2.17-1.708z"/><path fill="#5468FF" d="M78.988.938h16.594a2.968 2.968 0 0 1 2.966 2.966V20.5a2.967 2.967 0 0 1-2.966 2.964H78.988a2.967 2.967 0 0 1-2.966-2.964V3.897A2.961 2.961 0 0 1 78.988.938z"/><path fill="#FFF" d="M89.632 5.967v-.772a.978.978 0 0 0-.978-.977h-2.28a.978.978 0 0 0-.978.977v.793c0 .088.082.15.171.13a7.127 7.127 0 0 1 1.984-.28c.65 0 1.295.088 1.917.259.082.02.164-.04.164-.13m-6.248 1.01l-.39-.389a.977.977 0 0 0-1.382 0l-.465.465a.973.973 0 0 0 0 1.38l.383.383c.062.061.15.047.205-.014.226-.307.472-.601.746-.874.281-.28.568-.526.883-.751.068-.042.075-.137.02-.2m4.16 2.453v3.341c0 .096.104.165.192.117l2.97-1.537c.068-.034.089-.117.055-.184a3.695 3.695 0 0 0-3.08-1.866c-.068 0-.136.054-.136.13m0 8.048a4.489 4.489 0 0 1-4.49-4.482 4.488 4.488 0 0 1 4.49-4.482 4.488 4.488 0 0 1 4.489 4.482 4.484 4.484 0 0 1-4.49 4.482m0-10.85a6.363 6.363 0 1 0 0 12.729 6.37 6.37 0 0 0 6.372-6.368 6.358 6.358 0 0 0-6.371-6.36"/></g></svg>
    </a>
`;
const resultItem = (result)=>{
    const { title  } = result._highlightResult;
    const { body  } = result._snippetResult;
    return `
        <div class="matching-post">
            <a href="${result.slug}">
                <h2>${title.value}</h2>
                <p>${body.value}</p>
            </a>
        </div>
    `;
};
const resultSet = (set, response, noData, options)=>{
    const { hits , index  } = set;
    const { templates , algolia: { multi  }  } = options;
    let innerHTML = `<p>${noData}</p>`;
    let label = index;
    if (hits.length) innerHTML = hits.map((result)=>templates.resultItem(result, response, options)).join("");
    if ((0, _utils.isObject)(multi)) label = multi[index];
    return `
        <div class="matching-set">
            <h2 class="matching-set-heading">${label}</h2>
            ${innerHTML}
        </div>
    `;
};
exports.default = {
    base,
    style,
    resultItem,
    resultSet
};

},{"./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["ShInH","8lqZg"], "8lqZg", "parcelRequiree6f3")

//# sourceMappingURL=index.js.map
