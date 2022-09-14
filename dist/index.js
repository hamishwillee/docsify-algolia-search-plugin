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

},{"algoliasearch":"iyQxX","deepmerge":"bo72L","./component":"bNIKI","./utils":"en4he","./render":"lPFSt","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"iyQxX":[function(require,module,exports) {
"use strict";
var AlgoliaSearch = require("../../AlgoliaSearch.js");
var createAlgoliasearch = require("../createAlgoliasearch.js");
module.exports = createAlgoliasearch(AlgoliaSearch, "Browser");

},{"../../AlgoliaSearch.js":"e9qyd","../createAlgoliasearch.js":"eKeLV"}],"e9qyd":[function(require,module,exports) {
module.exports = AlgoliaSearch;
var Index = require("./Index.js");
var deprecate = require("./deprecate.js");
var deprecatedMessage = require("./deprecatedMessage.js");
var AlgoliaSearchCore = require("./AlgoliaSearchCore.js");
var inherits = require("inherits");
var errors = require("./errors");
function AlgoliaSearch() {
    AlgoliaSearchCore.apply(this, arguments);
}
inherits(AlgoliaSearch, AlgoliaSearchCore);
/*
 * Delete an index
 *
 * @param indexName the name of index to delete
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */ AlgoliaSearch.prototype.deleteIndex = function(indexName, callback) {
    return this._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(indexName),
        hostType: "write",
        callback: callback
    });
};
/**
 * Move an existing index.
 * @param srcIndexName the name of index to copy.
 * @param dstIndexName the new index name that will contains a copy of
 * srcIndexName (destination will be overriten if it already exist).
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */ AlgoliaSearch.prototype.moveIndex = function(srcIndexName, dstIndexName, callback) {
    var postObj = {
        operation: "move",
        destination: dstIndexName
    };
    return this._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(srcIndexName) + "/operation",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/**
 * Copy an existing index.
 * @param srcIndexName the name of index to copy.
 * @param dstIndexName the new index name that will contains a copy
 * of srcIndexName (destination will be overriten if it already exist).
 * @param scope an array of scopes to copy: ['settings', 'synonyms', 'rules']
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */ AlgoliaSearch.prototype.copyIndex = function(srcIndexName, dstIndexName, scopeOrCallback, _callback) {
    var postObj = {
        operation: "copy",
        destination: dstIndexName
    };
    var callback = _callback;
    if (typeof scopeOrCallback === "function") // oops, old behaviour of third argument being a function
    callback = scopeOrCallback;
    else if (Array.isArray(scopeOrCallback) && scopeOrCallback.length > 0) postObj.scope = scopeOrCallback;
    else if (typeof scopeOrCallback !== "undefined") throw new Error("the scope given to `copyIndex` was not an array with settings, synonyms or rules");
    return this._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(srcIndexName) + "/operation",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/**
 * Return last log entries.
 * @param offset Specify the first entry to retrieve (0-based, 0 is the most recent log entry).
 * @param length Specify the maximum number of entries to retrieve starting
 * at offset. Maximum allowed value: 1000.
 * @param type Specify the maximum number of entries to retrieve starting
 * at offset. Maximum allowed value: 1000.
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer that contains the task ID
 */ AlgoliaSearch.prototype.getLogs = function(offset, length, callback) {
    var clone = require("./clone.js");
    var params = {};
    if (typeof offset === "object") {
        // getLogs(params)
        params = clone(offset);
        callback = length;
    } else if (arguments.length === 0 || typeof offset === "function") // getLogs([cb])
    callback = offset;
    else if (arguments.length === 1 || typeof length === "function") {
        // getLogs(1, [cb)]
        callback = length;
        params.offset = offset;
    } else {
        // getLogs(1, 2, [cb])
        params.offset = offset;
        params.length = length;
    }
    if (params.offset === undefined) params.offset = 0;
    if (params.length === undefined) params.length = 10;
    return this._jsonRequest({
        method: "GET",
        url: "/1/logs?" + this._getSearchParams(params, ""),
        hostType: "read",
        callback: callback
    });
};
/*
 * List all existing indexes (paginated)
 *
 * @param page The page to retrieve, starting at 0.
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with index list
 */ AlgoliaSearch.prototype.listIndexes = function(page, callback) {
    var params = "";
    if (page === undefined || typeof page === "function") callback = page;
    else params = "?page=" + page;
    return this._jsonRequest({
        method: "GET",
        url: "/1/indexes" + params,
        hostType: "read",
        callback: callback
    });
};
/*
 * Get the index object initialized
 *
 * @param indexName the name of index
 * @param callback the result callback with one argument (the Index instance)
 */ AlgoliaSearch.prototype.initIndex = function(indexName) {
    return new Index(this, indexName);
};
AlgoliaSearch.prototype.initAnalytics = function(opts) {
    // the actual require must be inside the function, when put outside then you have a cyclic dependency
    // not well resolved that ends up making the main "./index.js" (main module, the agloliasearch function)
    // export an object instead of a function
    // Other workarounds:
    // - rewrite the lib in ES6, cyclic dependencies may be better supported
    // - move initAnalytics to a property on the main module (algoliasearch.initAnalytics),
    // same as places.
    // The current API was made mostly to mimic the one made in PHP
    var createAnalyticsClient = require("./createAnalyticsClient.js");
    return createAnalyticsClient(this.applicationID, this.apiKey, opts);
};
/*
 * @deprecated use client.listApiKeys
 */ AlgoliaSearch.prototype.listUserKeys = deprecate(function(callback) {
    return this.listApiKeys(callback);
}, deprecatedMessage("client.listUserKeys()", "client.listApiKeys()"));
/*
 * List all existing api keys with their associated ACLs
 *
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with api keys list
 */ AlgoliaSearch.prototype.listApiKeys = function(callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/keys",
        hostType: "read",
        callback: callback
    });
};
/*
 * @deprecated see client.getApiKey
 */ AlgoliaSearch.prototype.getUserKeyACL = deprecate(function(key, callback) {
    return this.getApiKey(key, callback);
}, deprecatedMessage("client.getUserKeyACL()", "client.getApiKey()"));
/*
 * Get an API key
 *
 * @param key
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with the right API key
 */ AlgoliaSearch.prototype.getApiKey = function(key, callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/keys/" + key,
        hostType: "read",
        callback: callback
    });
};
/*
 * @deprecated see client.deleteApiKey
 */ AlgoliaSearch.prototype.deleteUserKey = deprecate(function(key, callback) {
    return this.deleteApiKey(key, callback);
}, deprecatedMessage("client.deleteUserKey()", "client.deleteApiKey()"));
/*
 * Delete an existing API key
 * @param key
 * @param callback the result callback called with two arguments
 *  error: null or Error('message')
 *  content: the server answer with the date of deletion
 */ AlgoliaSearch.prototype.deleteApiKey = function(key, callback) {
    return this._jsonRequest({
        method: "DELETE",
        url: "/1/keys/" + key,
        hostType: "write",
        callback: callback
    });
};
/**
 * Restore a deleted API key
 *
 * @param {String} key - The key to restore
 * @param {Function} callback - The result callback called with two arguments
 *   error: null or Error('message')
 *   content: the server answer with the restored API key
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.restoreApiKey('APIKEY')
 * @see {@link https://www.algolia.com/doc/rest-api/search/#restore-api-key|Algolia REST API Documentation}
 */ AlgoliaSearch.prototype.restoreApiKey = function(key, callback) {
    return this._jsonRequest({
        method: "POST",
        url: "/1/keys/" + key + "/restore",
        hostType: "write",
        callback: callback
    });
};
/*
 @deprecated see client.addApiKey
 */ AlgoliaSearch.prototype.addUserKey = deprecate(function(acls, params, callback) {
    return this.addApiKey(acls, params, callback);
}, deprecatedMessage("client.addUserKey()", "client.addApiKey()"));
/*
 * Add a new global API key
 *
 * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
 *   can contains the following values:
 *     - search: allow to search (https and http)
 *     - addObject: allows to add/update an object in the index (https only)
 *     - deleteObject : allows to delete an existing object (https only)
 *     - deleteIndex : allows to delete index content (https only)
 *     - settings : allows to get index settings (https only)
 *     - editSettings : allows to change index settings (https only)
 * @param {Object} [params] - Optionnal parameters to set for the key
 * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
 * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
 * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
 * @param {string[]} params.indexes - Allowed targeted indexes for this key
 * @param {string} params.description - A description for your key
 * @param {string[]} params.referers - A list of authorized referers
 * @param {Object} params.queryParameters - Force the key to use specific query parameters
 * @param {Function} callback - The result callback called with two arguments
 *   error: null or Error('message')
 *   content: the server answer with the added API key
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.addApiKey(['search'], {
 *   validity: 300,
 *   maxQueriesPerIPPerHour: 2000,
 *   maxHitsPerQuery: 3,
 *   indexes: ['fruits'],
 *   description: 'Eat three fruits',
 *   referers: ['*.algolia.com'],
 *   queryParameters: {
 *     tagFilters: ['public'],
 *   }
 * })
 * @see {@link https://www.algolia.com/doc/rest_api#AddKey|Algolia REST API Documentation}
 */ AlgoliaSearch.prototype.addApiKey = function(acls, params, callback) {
    var isArray = require("isarray");
    var usage = "Usage: client.addApiKey(arrayOfAcls[, params, callback])";
    if (!isArray(acls)) throw new Error(usage);
    if (arguments.length === 1 || typeof params === "function") {
        callback = params;
        params = null;
    }
    var postObj = {
        acl: acls
    };
    if (params) {
        postObj.validity = params.validity;
        postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
        postObj.maxHitsPerQuery = params.maxHitsPerQuery;
        postObj.indexes = params.indexes;
        postObj.description = params.description;
        if (params.queryParameters) postObj.queryParameters = this._getSearchParams(params.queryParameters, "");
        postObj.referers = params.referers;
    }
    return this._jsonRequest({
        method: "POST",
        url: "/1/keys",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/**
 * @deprecated Please use client.addApiKey()
 */ AlgoliaSearch.prototype.addUserKeyWithValidity = deprecate(function(acls, params, callback) {
    return this.addApiKey(acls, params, callback);
}, deprecatedMessage("client.addUserKeyWithValidity()", "client.addApiKey()"));
/**
 * @deprecated Please use client.updateApiKey()
 */ AlgoliaSearch.prototype.updateUserKey = deprecate(function(key, acls, params, callback) {
    return this.updateApiKey(key, acls, params, callback);
}, deprecatedMessage("client.updateUserKey()", "client.updateApiKey()"));
/**
 * Update an existing API key
 * @param {string} key - The key to update
 * @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
 *   can contains the following values:
 *     - search: allow to search (https and http)
 *     - addObject: allows to add/update an object in the index (https only)
 *     - deleteObject : allows to delete an existing object (https only)
 *     - deleteIndex : allows to delete index content (https only)
 *     - settings : allows to get index settings (https only)
 *     - editSettings : allows to change index settings (https only)
 * @param {Object} [params] - Optionnal parameters to set for the key
 * @param {number} params.validity - Number of seconds after which the key will be automatically removed (0 means no time limit for this key)
 * @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
 * @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
 * @param {string[]} params.indexes - Allowed targeted indexes for this key
 * @param {string} params.description - A description for your key
 * @param {string[]} params.referers - A list of authorized referers
 * @param {Object} params.queryParameters - Force the key to use specific query parameters
 * @param {Function} callback - The result callback called with two arguments
 *   error: null or Error('message')
 *   content: the server answer with the modified API key
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.updateApiKey('APIKEY', ['search'], {
 *   validity: 300,
 *   maxQueriesPerIPPerHour: 2000,
 *   maxHitsPerQuery: 3,
 *   indexes: ['fruits'],
 *   description: 'Eat three fruits',
 *   referers: ['*.algolia.com'],
 *   queryParameters: {
 *     tagFilters: ['public'],
 *   }
 * })
 * @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}
 */ AlgoliaSearch.prototype.updateApiKey = function(key, acls, params, callback) {
    var isArray = require("isarray");
    var usage = "Usage: client.updateApiKey(key, arrayOfAcls[, params, callback])";
    if (!isArray(acls)) throw new Error(usage);
    if (arguments.length === 2 || typeof params === "function") {
        callback = params;
        params = null;
    }
    var putObj = {
        acl: acls
    };
    if (params) {
        putObj.validity = params.validity;
        putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
        putObj.maxHitsPerQuery = params.maxHitsPerQuery;
        putObj.indexes = params.indexes;
        putObj.description = params.description;
        if (params.queryParameters) putObj.queryParameters = this._getSearchParams(params.queryParameters, "");
        putObj.referers = params.referers;
    }
    return this._jsonRequest({
        method: "PUT",
        url: "/1/keys/" + key,
        body: putObj,
        hostType: "write",
        callback: callback
    });
};
/**
 * Initialize a new batch of search queries
 * @deprecated use client.search()
 */ AlgoliaSearch.prototype.startQueriesBatch = deprecate(function startQueriesBatchDeprecated() {
    this._batch = [];
}, deprecatedMessage("client.startQueriesBatch()", "client.search()"));
/**
 * Add a search query in the batch
 * @deprecated use client.search()
 */ AlgoliaSearch.prototype.addQueryInBatch = deprecate(function addQueryInBatchDeprecated(indexName, query, args) {
    this._batch.push({
        indexName: indexName,
        query: query,
        params: args
    });
}, deprecatedMessage("client.addQueryInBatch()", "client.search()"));
/**
 * Launch the batch of queries using XMLHttpRequest.
 * @deprecated use client.search()
 */ AlgoliaSearch.prototype.sendQueriesBatch = deprecate(function sendQueriesBatchDeprecated(callback) {
    return this.search(this._batch, callback);
}, deprecatedMessage("client.sendQueriesBatch()", "client.search()"));
/**
 * Perform write operations across multiple indexes.
 *
 * To reduce the amount of time spent on network round trips,
 * you can create, update, or delete several objects in one call,
 * using the batch endpoint (all operations are done in the given order).
 *
 * Available actions:
 *   - addObject
 *   - updateObject
 *   - partialUpdateObject
 *   - partialUpdateObjectNoCreate
 *   - deleteObject
 *
 * https://www.algolia.com/doc/rest_api#Indexes
 * @param  {Object[]} operations An array of operations to perform
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.batch([{
 *   action: 'addObject',
 *   indexName: 'clients',
 *   body: {
 *     name: 'Bill'
 *   }
 * }, {
 *   action: 'udpateObject',
 *   indexName: 'fruits',
 *   body: {
 *     objectID: '29138',
 *     name: 'banana'
 *   }
 * }], cb)
 */ AlgoliaSearch.prototype.batch = function(operations, callback) {
    var isArray = require("isarray");
    var usage = "Usage: client.batch(operations[, callback])";
    if (!isArray(operations)) throw new Error(usage);
    return this._jsonRequest({
        method: "POST",
        url: "/1/indexes/*/batch",
        body: {
            requests: operations
        },
        hostType: "write",
        callback: callback
    });
};
/**
 * Assign or Move a userID to a cluster
 *
 * @param {string} data.userID The userID to assign to a new cluster
 * @param {string} data.cluster The cluster to assign the user to
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.assignUserID({ cluster: 'c1-test', userID: 'some-user' });
 */ AlgoliaSearch.prototype.assignUserID = function(data, callback) {
    if (!data.userID || !data.cluster) throw new errors.AlgoliaSearchError("You have to provide both a userID and cluster", data);
    return this._jsonRequest({
        method: "POST",
        url: "/1/clusters/mapping",
        hostType: "write",
        body: {
            cluster: data.cluster
        },
        callback: callback,
        headers: {
            "x-algolia-user-id": data.userID
        }
    });
};
/**
 * Assign a array of userIDs to a cluster.
 *
 * @param {Array} data.userIDs The array of userIDs to assign to a new cluster
 * @param {string} data.cluster The cluster to assign the user to
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.assignUserIDs({ cluster: 'c1-test', userIDs: ['some-user-1', 'some-user-2'] });
 */ AlgoliaSearch.prototype.assignUserIDs = function(data, callback) {
    if (!data.userIDs || !data.cluster) throw new errors.AlgoliaSearchError("You have to provide both an array of userIDs and cluster", data);
    return this._jsonRequest({
        method: "POST",
        url: "/1/clusters/mapping/batch",
        hostType: "write",
        body: {
            cluster: data.cluster,
            users: data.userIDs
        },
        callback: callback
    });
};
/**
 * Get the top userIDs
 *
 * (the callback is the second argument)
 *
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.getTopUserID();
 */ AlgoliaSearch.prototype.getTopUserID = function(callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/clusters/mapping/top",
        hostType: "read",
        callback: callback
    });
};
/**
 * Get userID
 *
 * @param {string} data.userID The userID to get info about
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.getUserID({ userID: 'some-user' });
 */ AlgoliaSearch.prototype.getUserID = function(data, callback) {
    if (!data.userID) throw new errors.AlgoliaSearchError("You have to provide a userID", {
        debugData: data
    });
    return this._jsonRequest({
        method: "GET",
        url: "/1/clusters/mapping/" + data.userID,
        hostType: "read",
        callback: callback
    });
};
/**
 * List all the clusters
 *
 * (the callback is the second argument)
 *
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.listClusters();
 */ AlgoliaSearch.prototype.listClusters = function(callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/clusters",
        hostType: "read",
        callback: callback
    });
};
/**
 * List the userIDs
 *
 * (the callback is the second argument)
 *
 * @param {string} data.hitsPerPage How many hits on every page
 * @param {string} data.page The page to retrieve
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.listClusters();
 * client.listClusters({ page: 3, hitsPerPage: 30});
 */ AlgoliaSearch.prototype.listUserIDs = function(data, callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/clusters/mapping",
        body: data,
        hostType: "read",
        callback: callback
    });
};
/**
 * Remove an userID
 *
 * @param {string} data.userID The userID to assign to a new cluster
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.removeUserID({ userID: 'some-user' });
 */ AlgoliaSearch.prototype.removeUserID = function(data, callback) {
    if (!data.userID) throw new errors.AlgoliaSearchError("You have to provide a userID", {
        debugData: data
    });
    return this._jsonRequest({
        method: "DELETE",
        url: "/1/clusters/mapping",
        hostType: "write",
        callback: callback,
        headers: {
            "x-algolia-user-id": data.userID
        }
    });
};
/**
 * Search for userIDs
 *
 * @param {string} data.cluster The cluster to target
 * @param {string} data.query The query to execute
 * @param {string} data.hitsPerPage How many hits on every page
 * @param {string} data.page The page to retrieve
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.searchUserIDs({ cluster: 'c1-test', query: 'some-user' });
 * client.searchUserIDs({
 *   cluster: "c1-test",
 *   query: "some-user",
 *   page: 3,
 *   hitsPerPage: 2
 * });
 */ AlgoliaSearch.prototype.searchUserIDs = function(data, callback) {
    return this._jsonRequest({
        method: "POST",
        url: "/1/clusters/mapping/search",
        body: data,
        hostType: "read",
        callback: callback
    });
};
/**
 * Set strategy for personalization
 *
 * @param {Object} data
 * @param {Object} data.eventsScoring Associate a score to an event
 * @param {Object} data.eventsScoring.<eventName> The name of the event
 * @param {Number} data.eventsScoring.<eventName>.score The score to associate to <eventName>
 * @param {String} data.eventsScoring.<eventName>.type Either "click", "conversion" or "view"
 * @param {Object} data.facetsScoring Associate a score to a facet
 * @param {Object} data.facetsScoring.<facetName> The name of the facet
 * @param {Number} data.facetsScoring.<facetName>.score The score to associate to <facetName>
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.setPersonalizationStrategy({
 *   eventsScoring: {
 *      "Add to cart": { score: 50, type: "conversion" },
 *      Purchase: { score: 100, type: "conversion" }
 *   },
 *   facetsScoring: {
 *      brand: { score: 100 },
 *      categories: { score: 10 }
 *   }
 * });
 */ AlgoliaSearch.prototype.setPersonalizationStrategy = function(data, callback) {
    return this._jsonRequest({
        method: "POST",
        url: "/1/recommendation/personalization/strategy",
        body: data,
        hostType: "write",
        callback: callback
    });
};
/**
 * Get strategy for personalization
 *
 * @return {Promise|undefined} Returns a promise if no callback given
 * @example
 * client.getPersonalizationStrategy();
 */ AlgoliaSearch.prototype.getPersonalizationStrategy = function(callback) {
    return this._jsonRequest({
        method: "GET",
        url: "/1/recommendation/personalization/strategy",
        hostType: "read",
        callback: callback
    });
};
// environment specific methods
AlgoliaSearch.prototype.destroy = notImplemented;
AlgoliaSearch.prototype.enableRateLimitForward = notImplemented;
AlgoliaSearch.prototype.disableRateLimitForward = notImplemented;
AlgoliaSearch.prototype.useSecuredAPIKey = notImplemented;
AlgoliaSearch.prototype.disableSecuredAPIKey = notImplemented;
AlgoliaSearch.prototype.generateSecuredApiKey = notImplemented;
AlgoliaSearch.prototype.getSecuredApiKeyRemainingValidity = notImplemented;
function notImplemented() {
    var message = "Not implemented in this environment.\nIf you feel this is a mistake, write to support@algolia.com";
    throw new errors.AlgoliaSearchError(message);
}

},{"./Index.js":"fCYhk","./deprecate.js":"5Uvjk","./deprecatedMessage.js":"1AM6r","./AlgoliaSearchCore.js":"53JcR","inherits":"bRL3M","./errors":"6bEkW","./clone.js":"cxc5w","./createAnalyticsClient.js":"a11WD","isarray":"hk7XJ"}],"fCYhk":[function(require,module,exports) {
var inherits = require("inherits");
var IndexCore = require("./IndexCore.js");
var deprecate = require("./deprecate.js");
var deprecatedMessage = require("./deprecatedMessage.js");
var exitPromise = require("./exitPromise.js");
var errors = require("./errors");
var deprecateForwardToSlaves = deprecate(function() {}, deprecatedMessage("forwardToSlaves", "forwardToReplicas"));
module.exports = Index;
function Index() {
    IndexCore.apply(this, arguments);
}
inherits(Index, IndexCore);
/*
* Add an object in this index
*
* @param content contains the javascript object to add inside the index
* @param objectID (optional) an objectID you want to attribute to this object
* (if the attribute already exist the old object will be overwrite)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/ Index.prototype.addObject = function(content, objectID, callback) {
    var indexObj = this;
    if (arguments.length === 1 || typeof objectID === "function") {
        callback = objectID;
        objectID = undefined;
    }
    return this.as._jsonRequest({
        method: objectID !== undefined ? "PUT" : "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + (objectID !== undefined ? "/" + encodeURIComponent(objectID) : ""),
        body: content,
        hostType: "write",
        callback: callback
    });
};
/*
* Add several objects
*
* @param objects contains an array of objects to add
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/ Index.prototype.addObjects = function(objects, callback) {
    var isArray = require("isarray");
    var usage = "Usage: index.addObjects(arrayOfObjects[, callback])";
    if (!isArray(objects)) throw new Error(usage);
    var indexObj = this;
    var postObj = {
        requests: []
    };
    for(var i = 0; i < objects.length; ++i){
        var request = {
            action: "addObject",
            body: objects[i]
        };
        postObj.requests.push(request);
    }
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/batch",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/*
* Update partially an object (only update attributes passed in argument)
*
* @param partialObject contains the javascript attributes to override, the
*  object must contains an objectID attribute
* @param createIfNotExists (optional) if false, avoid an automatic creation of the object
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/ Index.prototype.partialUpdateObject = function(partialObject, createIfNotExists, callback) {
    if (arguments.length === 1 || typeof createIfNotExists === "function") {
        callback = createIfNotExists;
        createIfNotExists = undefined;
    }
    var indexObj = this;
    var url = "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/" + encodeURIComponent(partialObject.objectID) + "/partial";
    if (createIfNotExists === false) url += "?createIfNotExists=false";
    return this.as._jsonRequest({
        method: "POST",
        url: url,
        body: partialObject,
        hostType: "write",
        callback: callback
    });
};
/*
* Partially Override the content of several objects
*
* @param objects contains an array of objects to update (each object must contains a objectID attribute)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/ Index.prototype.partialUpdateObjects = function(objects, createIfNotExists, callback) {
    if (arguments.length === 1 || typeof createIfNotExists === "function") {
        callback = createIfNotExists;
        createIfNotExists = true;
    }
    var isArray = require("isarray");
    var usage = "Usage: index.partialUpdateObjects(arrayOfObjects[, callback])";
    if (!isArray(objects)) throw new Error(usage);
    var indexObj = this;
    var postObj = {
        requests: []
    };
    for(var i = 0; i < objects.length; ++i){
        var request = {
            action: createIfNotExists === true ? "partialUpdateObject" : "partialUpdateObjectNoCreate",
            objectID: objects[i].objectID,
            body: objects[i]
        };
        postObj.requests.push(request);
    }
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/batch",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/*
* Override the content of object
*
* @param object contains the javascript object to save, the object must contains an objectID attribute
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/ Index.prototype.saveObject = function(object, callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/" + encodeURIComponent(object.objectID),
        body: object,
        hostType: "write",
        callback: callback
    });
};
/*
* Override the content of several objects
*
* @param objects contains an array of objects to update (each object must contains a objectID attribute)
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that updateAt and taskID
*/ Index.prototype.saveObjects = function(objects, callback) {
    var isArray = require("isarray");
    var usage = "Usage: index.saveObjects(arrayOfObjects[, callback])";
    if (!isArray(objects)) throw new Error(usage);
    var indexObj = this;
    var postObj = {
        requests: []
    };
    for(var i = 0; i < objects.length; ++i){
        var request = {
            action: "updateObject",
            objectID: objects[i].objectID,
            body: objects[i]
        };
        postObj.requests.push(request);
    }
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/batch",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/*
* Delete an object from the index
*
* @param objectID the unique identifier of object to delete
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/ Index.prototype.deleteObject = function(objectID, callback) {
    if (typeof objectID === "function" || typeof objectID !== "string" && typeof objectID !== "number") {
        var err = new errors.AlgoliaSearchError(objectID && typeof objectID !== "function" ? "ObjectID must be a string" : "Cannot delete an object without an objectID");
        callback = objectID;
        if (typeof callback === "function") return callback(err);
        return this.as._promise.reject(err);
    }
    var indexObj = this;
    return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/" + encodeURIComponent(objectID),
        hostType: "write",
        callback: callback
    });
};
/*
* Delete several objects from an index
*
* @param objectIDs contains an array of objectID to delete
* @param callback (optional) the result callback called with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains 3 elements: createAt, taskId and objectID
*/ Index.prototype.deleteObjects = function(objectIDs, callback) {
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: index.deleteObjects(arrayOfObjectIDs[, callback])";
    if (!isArray(objectIDs)) throw new Error(usage);
    var indexObj = this;
    var postObj = {
        requests: map(objectIDs, function prepareRequest(objectID) {
            return {
                action: "deleteObject",
                objectID: objectID,
                body: {
                    objectID: objectID
                }
            };
        })
    };
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/batch",
        body: postObj,
        hostType: "write",
        callback: callback
    });
};
/*
* Delete all objects matching a query
*
* @param query the query string
* @param params the optional query parameters
* @param callback (optional) the result callback called with one argument
*  error: null or Error('message')
* @deprecated see index.deleteBy
*/ Index.prototype.deleteByQuery = deprecate(function(query, params, callback) {
    var clone = require("./clone.js");
    var map = require("./map.js");
    var indexObj = this;
    var client = indexObj.as;
    if (arguments.length === 1 || typeof params === "function") {
        callback = params;
        params = {};
    } else params = clone(params);
    params.attributesToRetrieve = "objectID";
    params.hitsPerPage = 1000;
    params.distinct = false;
    // when deleting, we should never use cache to get the
    // search results
    this.clearCache();
    // there's a problem in how we use the promise chain,
    // see how waitTask is done
    var promise = this.search(query, params).then(stopOrDelete);
    function stopOrDelete(searchContent) {
        // stop here
        if (searchContent.nbHits === 0) // return indexObj.as._request.resolve();
        return searchContent;
        // continue and do a recursive call
        var objectIDs = map(searchContent.hits, function getObjectID(object) {
            return object.objectID;
        });
        return indexObj.deleteObjects(objectIDs).then(waitTask).then(doDeleteByQuery);
    }
    function waitTask(deleteObjectsContent) {
        return indexObj.waitTask(deleteObjectsContent.taskID);
    }
    function doDeleteByQuery() {
        return indexObj.deleteByQuery(query, params);
    }
    if (!callback) return promise;
    promise.then(success, failure);
    function success() {
        exitPromise(function exit() {
            callback(null);
        }, client._setTimeout || setTimeout);
    }
    function failure(err) {
        exitPromise(function exit() {
            callback(err);
        }, client._setTimeout || setTimeout);
    }
}, deprecatedMessage("index.deleteByQuery()", "index.deleteBy()"));
/**
* Delete all objects matching a query
*
* the query parameters that can be used are:
* - filters (numeric, facet, tag)
* - geo
*
* you can not send an empty query or filters
*
* @param params the optional query parameters
* @param callback (optional) the result callback called with one argument
*  error: null or Error('message')
*/ Index.prototype.deleteBy = function(params, callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/deleteByQuery",
        body: {
            params: indexObj.as._getSearchParams(params, "")
        },
        hostType: "write",
        callback: callback
    });
};
/*
* Browse all content from an index using events. Basically this will do
* .browse() -> .browseFrom -> .browseFrom -> .. until all the results are returned
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @return {EventEmitter}
* @example
* var browser = index.browseAll('cool songs', {
*   tagFilters: 'public,comments',
*   hitsPerPage: 500
* });
*
* browser.on('result', function resultCallback(content) {
*   console.log(content.hits);
* });
*
* // if any error occurs, you get it
* browser.on('error', function(err) {
*   throw err;
* });
*
* // when you have browsed the whole index, you get this event
* browser.on('end', function() {
*   console.log('finished');
* });
*
* // at any point if you want to stop the browsing process, you can stop it manually
* // otherwise it will go on and on
* browser.stop();
*
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/ Index.prototype.browseAll = function(query, queryParameters) {
    if (typeof query === "object") {
        queryParameters = query;
        query = undefined;
    }
    var merge = require("./merge.js");
    var IndexBrowser = require("./IndexBrowser");
    var browser = new IndexBrowser();
    var client = this.as;
    var index = this;
    var params = client._getSearchParams(merge({}, queryParameters || {}, {
        query: query
    }), "");
    // start browsing
    browseLoop();
    function browseLoop(cursor) {
        if (browser._stopped) return;
        var body;
        if (cursor !== undefined) body = {
            cursor: cursor
        };
        else body = {
            params: params
        };
        client._jsonRequest({
            method: "POST",
            url: "/1/indexes/" + encodeURIComponent(index.indexName) + "/browse",
            hostType: "read",
            body: body,
            callback: browseCallback
        });
    }
    function browseCallback(err, content) {
        if (browser._stopped) return;
        if (err) {
            browser._error(err);
            return;
        }
        browser._result(content);
        // no cursor means we are finished browsing
        if (content.cursor === undefined) {
            browser._end();
            return;
        }
        browseLoop(content.cursor);
    }
    return browser;
};
/*
* Get a Typeahead.js adapter
* @param searchParams contains an object with query parameters (see search for details)
*/ Index.prototype.ttAdapter = deprecate(function(params) {
    var self = this;
    return function ttAdapter(query, syncCb, asyncCb) {
        var cb;
        if (typeof asyncCb === "function") // typeahead 0.11
        cb = asyncCb;
        else // pre typeahead 0.11
        cb = syncCb;
        self.search(query, params, function searchDone(err, content) {
            if (err) {
                cb(err);
                return;
            }
            cb(content.hits);
        });
    };
}, "ttAdapter is not necessary anymore and will be removed in the next version,\nhave a look at autocomplete.js (https://github.com/algolia/autocomplete.js)");
/*
* Wait the publication of a task on the server.
* All server task are asynchronous and you can check with this method that the task is published.
*
* @param taskID the id of the task returned by server
* @param callback the result callback with with two arguments:
*  error: null or Error('message')
*  content: the server answer that contains the list of results
*/ Index.prototype.waitTask = function(taskID, callback) {
    // wait minimum 100ms before retrying
    var baseDelay = 100;
    // wait maximum 5s before retrying
    var maxDelay = 5000;
    var loop = 0;
    // waitTask() must be handled differently from other methods,
    // it's a recursive method using a timeout
    var indexObj = this;
    var client = indexObj.as;
    var promise = retryLoop();
    function retryLoop() {
        return client._jsonRequest({
            method: "GET",
            hostType: "read",
            url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/task/" + taskID
        }).then(function success(content) {
            loop++;
            var delay = baseDelay * loop * loop;
            if (delay > maxDelay) delay = maxDelay;
            if (content.status !== "published") return client._promise.delay(delay).then(retryLoop);
            return content;
        });
    }
    if (!callback) return promise;
    promise.then(successCb, failureCb);
    function successCb(content) {
        exitPromise(function exit() {
            callback(null, content);
        }, client._setTimeout || setTimeout);
    }
    function failureCb(err) {
        exitPromise(function exit() {
            callback(err);
        }, client._setTimeout || setTimeout);
    }
};
/*
* This function deletes the index content. Settings and index specific API keys are kept untouched.
*
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the settings object or the error message if a failure occurred
*/ Index.prototype.clearIndex = function(callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/clear",
        hostType: "write",
        callback: callback
    });
};
/*
* Get settings of this index
*
* @param opts an object of options to add
* @param opts.advanced get more settings like nbShards (useful for Enterprise)
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the settings object or the error message if a failure occurred
*/ Index.prototype.getSettings = function(opts, callback) {
    if (arguments.length === 1 && typeof opts === "function") {
        callback = opts;
        opts = {};
    }
    opts = opts || {};
    var indexName = encodeURIComponent(this.indexName);
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + indexName + "/settings?getVersion=2" + (opts.advanced ? "&advanced=" + opts.advanced : ""),
        hostType: "read",
        callback: callback
    });
};
Index.prototype.searchSynonyms = function(params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    } else if (params === undefined) params = {};
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/search",
        body: params,
        hostType: "read",
        callback: callback
    });
};
function exportData(method, _hitsPerPage, callback) {
    function search(page, _previous) {
        var options = {
            page: page || 0,
            hitsPerPage: _hitsPerPage || 100
        };
        var previous = _previous || [];
        return method(options).then(function(result) {
            var hits = result.hits;
            var nbHits = result.nbHits;
            var current = hits.map(function(s) {
                delete s._highlightResult;
                return s;
            });
            var synonyms = previous.concat(current);
            if (synonyms.length < nbHits) return search(options.page + 1, synonyms);
            return synonyms;
        });
    }
    return search().then(function(data) {
        if (typeof callback === "function") {
            callback(data);
            return undefined;
        }
        return data;
    });
}
/**
 * Retrieve all the synonyms in an index
 * @param [number=100] hitsPerPage The amount of synonyms to retrieve per batch
 * @param [function] callback will be called after all synonyms are retrieved
 */ Index.prototype.exportSynonyms = function(hitsPerPage, callback) {
    return exportData(this.searchSynonyms.bind(this), hitsPerPage, callback);
};
Index.prototype.saveSynonym = function(synonym, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(synonym.objectID) + "?forwardToReplicas=" + forwardToReplicas,
        body: synonym,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.getSynonym = function(objectID, callback) {
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(objectID),
        hostType: "read",
        callback: callback
    });
};
Index.prototype.deleteSynonym = function(objectID, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/" + encodeURIComponent(objectID) + "?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.clearSynonyms = function(opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/clear" + "?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.batchSynonyms = function(synonyms, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/synonyms/batch" + "?forwardToReplicas=" + forwardToReplicas + "&replaceExistingSynonyms=" + (opts.replaceExistingSynonyms ? "true" : "false"),
        hostType: "write",
        body: synonyms,
        callback: callback
    });
};
Index.prototype.searchRules = function(params, callback) {
    if (typeof params === "function") {
        callback = params;
        params = {};
    } else if (params === undefined) params = {};
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/search",
        body: params,
        hostType: "read",
        callback: callback
    });
};
/**
 * Retrieve all the query rules in an index
 * @param [number=100] hitsPerPage The amount of query rules to retrieve per batch
 * @param [function] callback will be called after all query rules are retrieved
 *  error: null or Error('message')
 */ Index.prototype.exportRules = function(hitsPerPage, callback) {
    return exportData(this.searchRules.bind(this), hitsPerPage, callback);
};
Index.prototype.saveRule = function(rule, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    if (!rule.objectID) throw new errors.AlgoliaSearchError("Missing or empty objectID field for rule");
    var forwardToReplicas = opts.forwardToReplicas === true ? "true" : "false";
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(rule.objectID) + "?forwardToReplicas=" + forwardToReplicas,
        body: rule,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.getRule = function(objectID, callback) {
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(objectID),
        hostType: "read",
        callback: callback
    });
};
Index.prototype.deleteRule = function(objectID, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    var forwardToReplicas = opts.forwardToReplicas === true ? "true" : "false";
    return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/" + encodeURIComponent(objectID) + "?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.clearRules = function(opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    var forwardToReplicas = opts.forwardToReplicas === true ? "true" : "false";
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/clear" + "?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        callback: callback
    });
};
Index.prototype.batchRules = function(rules, opts, callback) {
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    var forwardToReplicas = opts.forwardToReplicas === true ? "true" : "false";
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/rules/batch" + "?forwardToReplicas=" + forwardToReplicas + "&clearExistingRules=" + (opts.clearExistingRules === true ? "true" : "false"),
        hostType: "write",
        body: rules,
        callback: callback
    });
};
Index.prototype.exists = function(callback) {
    var result = this.getSettings().then(function() {
        return true;
    }).catch(function(err) {
        if (err instanceof errors.AlgoliaSearchError && err.statusCode === 404) return false;
        throw err;
    });
    if (typeof callback !== "function") return result;
    result.then(function(res) {
        callback(null, res);
    }).catch(function(err) {
        callback(err);
    });
};
Index.prototype.findObject = function(findCallback, requestOptions, callback) {
    requestOptions = requestOptions === undefined ? {} : requestOptions;
    var paginate = requestOptions.paginate !== undefined ? requestOptions.paginate : true;
    var query = requestOptions.query !== undefined ? requestOptions.query : "";
    var that = this;
    var page = 0;
    var paginateLoop = function() {
        requestOptions.page = page;
        return that.search(query, requestOptions).then(function(result) {
            var hits = result.hits;
            for(var position = 0; position < hits.length; position++){
                var hit = hits[position];
                if (findCallback(hit)) return {
                    object: hit,
                    position: position,
                    page: page
                };
            }
            page += 1;
            // paginate if option was set and has next page
            if (!paginate || page >= result.nbPages) throw new errors.ObjectNotFound("Object not found");
            return paginateLoop();
        });
    };
    var promise = paginateLoop(page);
    if (callback === undefined) return promise;
    promise.then(function(res) {
        callback(null, res);
    }).catch(function(err) {
        callback(err);
    });
};
Index.prototype.getObjectPosition = function(result, objectID) {
    var hits = result.hits;
    for(var position = 0; position < hits.length; position++){
        if (hits[position].objectID === objectID) return position;
    }
    return -1;
};
/*
* Set settings for this index
*
* @param settings the settings object that can contains :
* - minWordSizefor1Typo: (integer) the minimum number of characters to accept one typo (default = 3).
* - minWordSizefor2Typos: (integer) the minimum number of characters to accept two typos (default = 7).
* - hitsPerPage: (integer) the number of hits per page (default = 10).
* - attributesToRetrieve: (array of strings) default list of attributes to retrieve in objects.
*   If set to null, all attributes are retrieved.
* - attributesToHighlight: (array of strings) default list of attributes to highlight.
*   If set to null, all indexed attributes are highlighted.
* - attributesToSnippet**: (array of strings) default list of attributes to snippet alongside the number
* of words to return (syntax is attributeName:nbWords).
*   By default no snippet is computed. If set to null, no snippet is computed.
* - attributesToIndex: (array of strings) the list of fields you want to index.
*   If set to null, all textual and numerical attributes of your objects are indexed,
*   but you should update it to get optimal results.
*   This parameter has two important uses:
*     - Limit the attributes to index: For example if you store a binary image in base64,
*     you want to store it and be able to
*       retrieve it but you don't want to search in the base64 string.
*     - Control part of the ranking*: (see the ranking parameter for full explanation)
*     Matches in attributes at the beginning of
*       the list will be considered more important than matches in attributes further down the list.
*       In one attribute, matching text at the beginning of the attribute will be
*       considered more important than text after, you can disable
*       this behavior if you add your attribute inside `unordered(AttributeName)`,
*       for example attributesToIndex: ["title", "unordered(text)"].
* - attributesForFaceting: (array of strings) The list of fields you want to use for faceting.
*   All strings in the attribute selected for faceting are extracted and added as a facet.
*   If set to null, no attribute is used for faceting.
* - attributeForDistinct: (string) The attribute name used for the Distinct feature.
* This feature is similar to the SQL "distinct" keyword: when enabled
*   in query with the distinct=1 parameter, all hits containing a duplicate
*   value for this attribute are removed from results.
*   For example, if the chosen attribute is show_name and several hits have
*   the same value for show_name, then only the best one is kept and others are removed.
* - ranking: (array of strings) controls the way results are sorted.
*   We have six available criteria:
*    - typo: sort according to number of typos,
*    - geo: sort according to decreassing distance when performing a geo-location based search,
*    - proximity: sort according to the proximity of query words in hits,
*    - attribute: sort according to the order of attributes defined by attributesToIndex,
*    - exact:
*        - if the user query contains one word: sort objects having an attribute
*        that is exactly the query word before others.
*          For example if you search for the "V" TV show, you want to find it
*          with the "V" query and avoid to have all popular TV
*          show starting by the v letter before it.
*        - if the user query contains multiple words: sort according to the
*        number of words that matched exactly (and not as a prefix).
*    - custom: sort according to a user defined formula set in **customRanking** attribute.
*   The standard order is ["typo", "geo", "proximity", "attribute", "exact", "custom"]
* - customRanking: (array of strings) lets you specify part of the ranking.
*   The syntax of this condition is an array of strings containing attributes
*   prefixed by asc (ascending order) or desc (descending order) operator.
*   For example `"customRanking" => ["desc(population)", "asc(name)"]`
* - queryType: Select how the query words are interpreted, it can be one of the following value:
*   - prefixAll: all query words are interpreted as prefixes,
*   - prefixLast: only the last word is interpreted as a prefix (default behavior),
*   - prefixNone: no query word is interpreted as a prefix. This option is not recommended.
* - highlightPreTag: (string) Specify the string that is inserted before
* the highlighted parts in the query result (default to "<em>").
* - highlightPostTag: (string) Specify the string that is inserted after
* the highlighted parts in the query result (default to "</em>").
* - optionalWords: (array of strings) Specify a list of words that should
* be considered as optional when found in the query.
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer or the error message if a failure occurred
*/ Index.prototype.setSettings = function(settings, opts, callback) {
    if (arguments.length === 1 || typeof opts === "function") {
        callback = opts;
        opts = {};
    }
    if (opts.forwardToSlaves !== undefined) deprecateForwardToSlaves();
    var forwardToReplicas = opts.forwardToSlaves || opts.forwardToReplicas ? "true" : "false";
    var indexObj = this;
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/settings?forwardToReplicas=" + forwardToReplicas,
        hostType: "write",
        body: settings,
        callback: callback
    });
};
/*
* @deprecated see client.listApiKeys()
*/ Index.prototype.listUserKeys = deprecate(function(callback) {
    return this.listApiKeys(callback);
}, deprecatedMessage("index.listUserKeys()", "client.listApiKeys()"));
/*
* List all existing API keys to this index
*
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with API keys belonging to the index
*
* @deprecated see client.listApiKeys()
*/ Index.prototype.listApiKeys = deprecate(function(callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/keys",
        hostType: "read",
        callback: callback
    });
}, deprecatedMessage("index.listApiKeys()", "client.listApiKeys()"));
/*
* @deprecated see client.getApiKey()
*/ Index.prototype.getUserKeyACL = deprecate(function(key, callback) {
    return this.getApiKey(key, callback);
}, deprecatedMessage("index.getUserKeyACL()", "client.getApiKey()"));
/*
* Get an API key from this index
*
* @param key
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with the right API key
*
* @deprecated see client.getApiKey()
*/ Index.prototype.getApiKey = deprecate(function(key, callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/keys/" + key,
        hostType: "read",
        callback: callback
    });
}, deprecatedMessage("index.getApiKey()", "client.getApiKey()"));
/*
* @deprecated see client.deleteApiKey()
*/ Index.prototype.deleteUserKey = deprecate(function(key, callback) {
    return this.deleteApiKey(key, callback);
}, deprecatedMessage("index.deleteUserKey()", "client.deleteApiKey()"));
/*
* Delete an existing API key associated to this index
*
* @param key
* @param callback the result callback called with two arguments
*  error: null or Error('message')
*  content: the server answer with the deletion date
*
* @deprecated see client.deleteApiKey()
*/ Index.prototype.deleteApiKey = deprecate(function(key, callback) {
    var indexObj = this;
    return this.as._jsonRequest({
        method: "DELETE",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/keys/" + key,
        hostType: "write",
        callback: callback
    });
}, deprecatedMessage("index.deleteApiKey()", "client.deleteApiKey()"));
/*
* @deprecated see client.addApiKey()
*/ Index.prototype.addUserKey = deprecate(function(acls, params, callback) {
    return this.addApiKey(acls, params, callback);
}, deprecatedMessage("index.addUserKey()", "client.addApiKey()"));
/*
* Add a new API key to this index
*
* @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
*   can contains the following values:
*     - search: allow to search (https and http)
*     - addObject: allows to add/update an object in the index (https only)
*     - deleteObject : allows to delete an existing object (https only)
*     - deleteIndex : allows to delete index content (https only)
*     - settings : allows to get index settings (https only)
*     - editSettings : allows to change index settings (https only)
* @param {Object} [params] - Optionnal parameters to set for the key
* @param {number} params.validity - Number of seconds after which the key will
* be automatically removed (0 means no time limit for this key)
* @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
* @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
* @param {string} params.description - A description for your key
* @param {string[]} params.referers - A list of authorized referers
* @param {Object} params.queryParameters - Force the key to use specific query parameters
* @param {Function} callback - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the added API key
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.addUserKey(['search'], {
*   validity: 300,
*   maxQueriesPerIPPerHour: 2000,
*   maxHitsPerQuery: 3,
*   description: 'Eat three fruits',
*   referers: ['*.algolia.com'],
*   queryParameters: {
*     tagFilters: ['public'],
*   }
* })
* @see {@link https://www.algolia.com/doc/rest_api#AddIndexKey|Algolia REST API Documentation}
*
* @deprecated see client.addApiKey()
*/ Index.prototype.addApiKey = deprecate(function(acls, params, callback) {
    var isArray = require("isarray");
    var usage = "Usage: index.addApiKey(arrayOfAcls[, params, callback])";
    if (!isArray(acls)) throw new Error(usage);
    if (arguments.length === 1 || typeof params === "function") {
        callback = params;
        params = null;
    }
    var postObj = {
        acl: acls
    };
    if (params) {
        postObj.validity = params.validity;
        postObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
        postObj.maxHitsPerQuery = params.maxHitsPerQuery;
        postObj.description = params.description;
        if (params.queryParameters) postObj.queryParameters = this.as._getSearchParams(params.queryParameters, "");
        postObj.referers = params.referers;
    }
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys",
        body: postObj,
        hostType: "write",
        callback: callback
    });
}, deprecatedMessage("index.addApiKey()", "client.addApiKey()"));
/**
* @deprecated use client.addApiKey()
*/ Index.prototype.addUserKeyWithValidity = deprecate(function deprecatedAddUserKeyWithValidity(acls, params, callback) {
    return this.addApiKey(acls, params, callback);
}, deprecatedMessage("index.addUserKeyWithValidity()", "client.addApiKey()"));
/*
* @deprecated see client.updateApiKey()
*/ Index.prototype.updateUserKey = deprecate(function(key, acls, params, callback) {
    return this.updateApiKey(key, acls, params, callback);
}, deprecatedMessage("index.updateUserKey()", "client.updateApiKey()"));
/**
* Update an existing API key of this index
* @param {string} key - The key to update
* @param {string[]} acls - The list of ACL for this key. Defined by an array of strings that
*   can contains the following values:
*     - search: allow to search (https and http)
*     - addObject: allows to add/update an object in the index (https only)
*     - deleteObject : allows to delete an existing object (https only)
*     - deleteIndex : allows to delete index content (https only)
*     - settings : allows to get index settings (https only)
*     - editSettings : allows to change index settings (https only)
* @param {Object} [params] - Optionnal parameters to set for the key
* @param {number} params.validity - Number of seconds after which the key will
* be automatically removed (0 means no time limit for this key)
* @param {number} params.maxQueriesPerIPPerHour - Number of API calls allowed from an IP address per hour
* @param {number} params.maxHitsPerQuery - Number of hits this API key can retrieve in one call
* @param {string} params.description - A description for your key
* @param {string[]} params.referers - A list of authorized referers
* @param {Object} params.queryParameters - Force the key to use specific query parameters
* @param {Function} callback - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with user keys list
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.updateApiKey('APIKEY', ['search'], {
*   validity: 300,
*   maxQueriesPerIPPerHour: 2000,
*   maxHitsPerQuery: 3,
*   description: 'Eat three fruits',
*   referers: ['*.algolia.com'],
*   queryParameters: {
*     tagFilters: ['public'],
*   }
* })
* @see {@link https://www.algolia.com/doc/rest_api#UpdateIndexKey|Algolia REST API Documentation}
*
* @deprecated see client.updateApiKey()
*/ Index.prototype.updateApiKey = deprecate(function(key, acls, params, callback) {
    var isArray = require("isarray");
    var usage = "Usage: index.updateApiKey(key, arrayOfAcls[, params, callback])";
    if (!isArray(acls)) throw new Error(usage);
    if (arguments.length === 2 || typeof params === "function") {
        callback = params;
        params = null;
    }
    var putObj = {
        acl: acls
    };
    if (params) {
        putObj.validity = params.validity;
        putObj.maxQueriesPerIPPerHour = params.maxQueriesPerIPPerHour;
        putObj.maxHitsPerQuery = params.maxHitsPerQuery;
        putObj.description = params.description;
        if (params.queryParameters) putObj.queryParameters = this.as._getSearchParams(params.queryParameters, "");
        putObj.referers = params.referers;
    }
    return this.as._jsonRequest({
        method: "PUT",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/keys/" + key,
        body: putObj,
        hostType: "write",
        callback: callback
    });
}, deprecatedMessage("index.updateApiKey()", "client.updateApiKey()"));

},{"inherits":"bRL3M","./IndexCore.js":"5Q5cC","./deprecate.js":"5Uvjk","./deprecatedMessage.js":"1AM6r","./exitPromise.js":"iOCHq","./errors":"6bEkW","isarray":"hk7XJ","./map.js":"c7pKt","./clone.js":"cxc5w","./merge.js":"SSEzJ","./IndexBrowser":"cO7L9"}],"bRL3M":[function(require,module,exports) {
if (typeof Object.create === "function") // implementation from standard node.js 'util' module
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        ctor.prototype = Object.create(superCtor.prototype, {
            constructor: {
                value: ctor,
                enumerable: false,
                writable: true,
                configurable: true
            }
        });
    }
};
else // old school shim for old browsers
module.exports = function inherits(ctor, superCtor) {
    if (superCtor) {
        ctor.super_ = superCtor;
        var TempCtor = function() {};
        TempCtor.prototype = superCtor.prototype;
        ctor.prototype = new TempCtor();
        ctor.prototype.constructor = ctor;
    }
};

},{}],"5Q5cC":[function(require,module,exports) {
var buildSearchMethod = require("./buildSearchMethod.js");
var deprecate = require("./deprecate.js");
var deprecatedMessage = require("./deprecatedMessage.js");
module.exports = IndexCore;
/*
* Index class constructor.
* You should not use this method directly but use initIndex() function
*/ function IndexCore(algoliasearch, indexName) {
    this.indexName = indexName;
    this.as = algoliasearch;
    this.typeAheadArgs = null;
    this.typeAheadValueOption = null;
    // make sure every index instance has it's own cache
    this.cache = {};
}
/*
* Clear all queries in cache
*/ IndexCore.prototype.clearCache = function() {
    this.cache = {};
};
/*
* Search inside the index using XMLHttpRequest request (Using a POST query to
* minimize number of OPTIONS queries: Cross-Origin Resource Sharing).
*
* @param {string} [query] the full text query
* @param {object} [args] (optional) if set, contains an object with query parameters:
* - page: (integer) Pagination parameter used to select the page to retrieve.
*                   Page is zero-based and defaults to 0. Thus,
*                   to retrieve the 10th page you need to set page=9
* - hitsPerPage: (integer) Pagination parameter used to select the number of hits per page. Defaults to 20.
* - attributesToRetrieve: a string that contains the list of object attributes
* you want to retrieve (let you minimize the answer size).
*   Attributes are separated with a comma (for example "name,address").
*   You can also use an array (for example ["name","address"]).
*   By default, all attributes are retrieved. You can also use '*' to retrieve all
*   values when an attributesToRetrieve setting is specified for your index.
* - attributesToHighlight: a string that contains the list of attributes you
*   want to highlight according to the query.
*   Attributes are separated by a comma. You can also use an array (for example ["name","address"]).
*   If an attribute has no match for the query, the raw value is returned.
*   By default all indexed text attributes are highlighted.
*   You can use `*` if you want to highlight all textual attributes.
*   Numerical attributes are not highlighted.
*   A matchLevel is returned for each highlighted attribute and can contain:
*      - full: if all the query terms were found in the attribute,
*      - partial: if only some of the query terms were found,
*      - none: if none of the query terms were found.
* - attributesToSnippet: a string that contains the list of attributes to snippet alongside
* the number of words to return (syntax is `attributeName:nbWords`).
*    Attributes are separated by a comma (Example: attributesToSnippet=name:10,content:10).
*    You can also use an array (Example: attributesToSnippet: ['name:10','content:10']).
*    By default no snippet is computed.
* - minWordSizefor1Typo: the minimum number of characters in a query word to accept one typo in this word.
* Defaults to 3.
* - minWordSizefor2Typos: the minimum number of characters in a query word
* to accept two typos in this word. Defaults to 7.
* - getRankingInfo: if set to 1, the result hits will contain ranking
* information in _rankingInfo attribute.
* - aroundLatLng: search for entries around a given
* latitude/longitude (specified as two floats separated by a comma).
*   For example aroundLatLng=47.316669,5.016670).
*   You can specify the maximum distance in meters with the aroundRadius parameter (in meters)
*   and the precision for ranking with aroundPrecision
*   (for example if you set aroundPrecision=100, two objects that are distant of
*   less than 100m will be considered as identical for "geo" ranking parameter).
*   At indexing, you should specify geoloc of an object with the _geoloc attribute
*   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})
* - insideBoundingBox: search entries inside a given area defined by the two extreme points
* of a rectangle (defined by 4 floats: p1Lat,p1Lng,p2Lat,p2Lng).
*   For example insideBoundingBox=47.3165,4.9665,47.3424,5.0201).
*   At indexing, you should specify geoloc of an object with the _geoloc attribute
*   (in the form {"_geoloc":{"lat":48.853409, "lng":2.348800}})
* - numericFilters: a string that contains the list of numeric filters you want to
* apply separated by a comma.
*   The syntax of one filter is `attributeName` followed by `operand` followed by `value`.
*   Supported operands are `<`, `<=`, `=`, `>` and `>=`.
*   You can have multiple conditions on one attribute like for example numericFilters=price>100,price<1000.
*   You can also use an array (for example numericFilters: ["price>100","price<1000"]).
* - tagFilters: filter the query by a set of tags. You can AND tags by separating them by commas.
*   To OR tags, you must add parentheses. For example, tags=tag1,(tag2,tag3) means tag1 AND (tag2 OR tag3).
*   You can also use an array, for example tagFilters: ["tag1",["tag2","tag3"]]
*   means tag1 AND (tag2 OR tag3).
*   At indexing, tags should be added in the _tags** attribute
*   of objects (for example {"_tags":["tag1","tag2"]}).
* - facetFilters: filter the query by a list of facets.
*   Facets are separated by commas and each facet is encoded as `attributeName:value`.
*   For example: `facetFilters=category:Book,author:John%20Doe`.
*   You can also use an array (for example `["category:Book","author:John%20Doe"]`).
* - facets: List of object attributes that you want to use for faceting.
*   Comma separated list: `"category,author"` or array `['category','author']`
*   Only attributes that have been added in **attributesForFaceting** index setting
*   can be used in this parameter.
*   You can also use `*` to perform faceting on all attributes specified in **attributesForFaceting**.
* - queryType: select how the query words are interpreted, it can be one of the following value:
*    - prefixAll: all query words are interpreted as prefixes,
*    - prefixLast: only the last word is interpreted as a prefix (default behavior),
*    - prefixNone: no query word is interpreted as a prefix. This option is not recommended.
* - optionalWords: a string that contains the list of words that should
* be considered as optional when found in the query.
*   Comma separated and array are accepted.
* - distinct: If set to 1, enable the distinct feature (disabled by default)
* if the attributeForDistinct index setting is set.
*   This feature is similar to the SQL "distinct" keyword: when enabled
*   in a query with the distinct=1 parameter,
*   all hits containing a duplicate value for the attributeForDistinct attribute are removed from results.
*   For example, if the chosen attribute is show_name and several hits have
*   the same value for show_name, then only the best
*   one is kept and others are removed.
* - restrictSearchableAttributes: List of attributes you want to use for
* textual search (must be a subset of the attributesToIndex index setting)
* either comma separated or as an array
* @param {function} [callback] the result callback called with two arguments:
*  error: null or Error('message'). If false, the content contains the error.
*  content: the server answer that contains the list of results.
*/ IndexCore.prototype.search = buildSearchMethod("query");
/*
* -- BETA --
* Search a record similar to the query inside the index using XMLHttpRequest request (Using a POST query to
* minimize number of OPTIONS queries: Cross-Origin Resource Sharing).
*
* @param {string} [query] the similar query
* @param {object} [args] (optional) if set, contains an object with query parameters.
*   All search parameters are supported (see search function), restrictSearchableAttributes and facetFilters
*   are the two most useful to restrict the similar results and get more relevant content
*/ IndexCore.prototype.similarSearch = deprecate(buildSearchMethod("similarQuery"), deprecatedMessage("index.similarSearch(query[, callback])", "index.search({ similarQuery: query }[, callback])"));
/*
* Browse index content. The response content will have a `cursor` property that you can use
* to browse subsequent pages for this query. Use `index.browseFrom(cursor)` when you want.
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @param {Function} [callback] - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the browse result
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.browse('cool songs', {
*   tagFilters: 'public,comments',
*   hitsPerPage: 500
* }, callback);
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/ IndexCore.prototype.browse = function(query, queryParameters, callback) {
    var merge = require("./merge.js");
    var indexObj = this;
    var page;
    var hitsPerPage;
    // we check variadic calls that are not the one defined
    // .browse()/.browse(fn)
    // => page = 0
    if (arguments.length === 0 || arguments.length === 1 && typeof arguments[0] === "function") {
        page = 0;
        callback = arguments[0];
        query = undefined;
    } else if (typeof arguments[0] === "number") {
        // .browse(2)/.browse(2, 10)/.browse(2, fn)/.browse(2, 10, fn)
        page = arguments[0];
        if (typeof arguments[1] === "number") hitsPerPage = arguments[1];
        else if (typeof arguments[1] === "function") {
            callback = arguments[1];
            hitsPerPage = undefined;
        }
        query = undefined;
        queryParameters = undefined;
    } else if (typeof arguments[0] === "object") {
        // .browse(queryParameters)/.browse(queryParameters, cb)
        if (typeof arguments[1] === "function") callback = arguments[1];
        queryParameters = arguments[0];
        query = undefined;
    } else if (typeof arguments[0] === "string" && typeof arguments[1] === "function") {
        // .browse(query, cb)
        callback = arguments[1];
        queryParameters = undefined;
    }
    // otherwise it's a .browse(query)/.browse(query, queryParameters)/.browse(query, queryParameters, cb)
    // get search query parameters combining various possible calls
    // to .browse();
    queryParameters = merge({}, queryParameters || {}, {
        page: page,
        hitsPerPage: hitsPerPage,
        query: query
    });
    var params = this.as._getSearchParams(queryParameters, "");
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/browse",
        body: {
            params: params
        },
        hostType: "read",
        callback: callback
    });
};
/*
* Continue browsing from a previous position (cursor), obtained via a call to `.browse()`.
*
* @param {string} query - The full text query
* @param {Object} [queryParameters] - Any search query parameter
* @param {Function} [callback] - The result callback called with two arguments
*   error: null or Error('message')
*   content: the server answer with the browse result
* @return {Promise|undefined} Returns a promise if no callback given
* @example
* index.browseFrom('14lkfsakl32', callback);
* @see {@link https://www.algolia.com/doc/rest_api#Browse|Algolia REST API Documentation}
*/ IndexCore.prototype.browseFrom = function(cursor, callback) {
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/browse",
        body: {
            cursor: cursor
        },
        hostType: "read",
        callback: callback
    });
};
/*
* Search for facet values
* https://www.algolia.com/doc/rest-api/search#search-for-facet-values
*
* @param {string} params.facetName Facet name, name of the attribute to search for values in.
* Must be declared as a facet
* @param {string} params.facetQuery Query for the facet search
* @param {string} [params.*] Any search parameter of Algolia,
* see https://www.algolia.com/doc/api-client/javascript/search#search-parameters
* Pagination is not supported. The page and hitsPerPage parameters will be ignored.
* @param callback (optional)
*/ IndexCore.prototype.searchForFacetValues = function(params, callback) {
    var clone = require("./clone.js");
    var omit = require("./omit.js");
    var usage = "Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])";
    if (params.facetName === undefined || params.facetQuery === undefined) throw new Error(usage);
    var facetName = params.facetName;
    var filteredParams = omit(clone(params), function(keyName) {
        return keyName === "facetName";
    });
    var searchParameters = this.as._getSearchParams(filteredParams, "");
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/" + encodeURIComponent(this.indexName) + "/facets/" + encodeURIComponent(facetName) + "/query",
        hostType: "read",
        body: {
            params: searchParameters
        },
        callback: callback
    });
};
IndexCore.prototype.searchFacet = deprecate(function(params, callback) {
    return this.searchForFacetValues(params, callback);
}, deprecatedMessage("index.searchFacet(params[, callback])", "index.searchForFacetValues(params[, callback])"));
IndexCore.prototype._search = function(params, url, callback, additionalUA) {
    return this.as._jsonRequest({
        cache: this.cache,
        method: "POST",
        url: url || "/1/indexes/" + encodeURIComponent(this.indexName) + "/query",
        body: {
            params: params
        },
        hostType: "read",
        fallback: {
            method: "GET",
            url: "/1/indexes/" + encodeURIComponent(this.indexName),
            body: {
                params: params
            }
        },
        callback: callback,
        additionalUA: additionalUA
    });
};
/*
* Get an object from this index
*
* @param objectID the unique identifier of the object to retrieve
* @param attrs (optional) if set, contains the array of attribute names to retrieve
* @param callback (optional) the result callback called with two arguments
*  error: null or Error('message')
*  content: the object to retrieve or the error message if a failure occurred
*/ IndexCore.prototype.getObject = function(objectID, attrs, callback) {
    var indexObj = this;
    if (arguments.length === 1 || typeof attrs === "function") {
        callback = attrs;
        attrs = undefined;
    }
    var params = "";
    if (attrs !== undefined) {
        params = "?attributes=";
        for(var i = 0; i < attrs.length; ++i){
            if (i !== 0) params += ",";
            params += attrs[i];
        }
    }
    return this.as._jsonRequest({
        method: "GET",
        url: "/1/indexes/" + encodeURIComponent(indexObj.indexName) + "/" + encodeURIComponent(objectID) + params,
        hostType: "read",
        callback: callback
    });
};
/*
* Get several objects from this index
*
* @param objectIDs the array of unique identifier of objects to retrieve
*/ IndexCore.prototype.getObjects = function(objectIDs, attributesToRetrieve, callback) {
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: index.getObjects(arrayOfObjectIDs[, callback])";
    if (!isArray(objectIDs)) throw new Error(usage);
    var indexObj = this;
    if (arguments.length === 1 || typeof attributesToRetrieve === "function") {
        callback = attributesToRetrieve;
        attributesToRetrieve = undefined;
    }
    var body = {
        requests: map(objectIDs, function prepareRequest(objectID) {
            var request = {
                indexName: indexObj.indexName,
                objectID: objectID
            };
            if (attributesToRetrieve) request.attributesToRetrieve = attributesToRetrieve.join(",");
            return request;
        })
    };
    return this.as._jsonRequest({
        method: "POST",
        url: "/1/indexes/*/objects",
        hostType: "read",
        body: body,
        callback: callback
    });
};
IndexCore.prototype.as = null;
IndexCore.prototype.indexName = null;
IndexCore.prototype.typeAheadArgs = null;
IndexCore.prototype.typeAheadValueOption = null;

},{"./buildSearchMethod.js":"fGbut","./deprecate.js":"5Uvjk","./deprecatedMessage.js":"1AM6r","./merge.js":"SSEzJ","./clone.js":"cxc5w","./omit.js":"8B7BN","isarray":"hk7XJ","./map.js":"c7pKt"}],"fGbut":[function(require,module,exports) {
module.exports = buildSearchMethod;
var errors = require("./errors.js");
/**
 * Creates a search method to be used in clients
 * @param {string} queryParam the name of the attribute used for the query
 * @param {string} url the url
 * @return {function} the search method
 */ function buildSearchMethod(queryParam, url) {
    /**
   * The search method. Prepares the data and send the query to Algolia.
   * @param {string} query the string used for query search
   * @param {object} args additional parameters to send with the search
   * @param {function} [callback] the callback to be called with the client gets the answer
   * @return {undefined|Promise} If the callback is not provided then this methods returns a Promise
   */ return function search(query, args, callback) {
        // warn V2 users on how to search
        if (typeof query === "function" && typeof args === "object" || typeof callback === "object") // .search(query, params, cb)
        // .search(cb, params)
        throw new errors.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");
        // Normalizing the function signature
        if (arguments.length === 0 || typeof query === "function") {
            // Usage : .search(), .search(cb)
            callback = query;
            query = "";
        } else if (arguments.length === 1 || typeof args === "function") {
            // Usage : .search(query/args), .search(query, cb)
            callback = args;
            args = undefined;
        }
        // At this point we have 3 arguments with values
        // Usage : .search(args) // careful: typeof null === 'object'
        if (typeof query === "object" && query !== null) {
            args = query;
            query = undefined;
        } else if (query === undefined || query === null) query = "";
        var params = "";
        if (query !== undefined) params += queryParam + "=" + encodeURIComponent(query);
        var additionalUA;
        if (args !== undefined) {
            if (args.additionalUA) {
                additionalUA = args.additionalUA;
                delete args.additionalUA;
            }
            // `_getSearchParams` will augment params, do not be fooled by the = versus += from previous if
            params = this.as._getSearchParams(args, params);
        }
        return this._search(params, url, callback, additionalUA);
    };
}

},{"./errors.js":"6bEkW"}],"6bEkW":[function(require,module,exports) {
"use strict";
// This file hosts our error definitions
// We use custom error "types" so that we can act on them when we need it
// e.g.: if error instanceof errors.UnparsableJSON then..
var inherits = require("inherits");
function AlgoliaSearchError(message, extraProperties) {
    var forEach = require("foreach");
    var error = this;
    // try to get a stacktrace
    if (typeof Error.captureStackTrace === "function") Error.captureStackTrace(this, this.constructor);
    else error.stack = new Error().stack || "Cannot get a stacktrace, browser is too old";
    this.name = "AlgoliaSearchError";
    this.message = message || "Unknown error";
    if (extraProperties) forEach(extraProperties, function addToErrorObject(value, key) {
        error[key] = value;
    });
}
inherits(AlgoliaSearchError, Error);
function createCustomError(name, message) {
    function AlgoliaSearchCustomError() {
        var args = Array.prototype.slice.call(arguments, 0);
        // custom message not set, use default
        if (typeof args[0] !== "string") args.unshift(message);
        AlgoliaSearchError.apply(this, args);
        this.name = "AlgoliaSearch" + name + "Error";
    }
    inherits(AlgoliaSearchCustomError, AlgoliaSearchError);
    return AlgoliaSearchCustomError;
}
// late exports to let various fn defs and inherits take place
module.exports = {
    AlgoliaSearchError: AlgoliaSearchError,
    UnparsableJSON: createCustomError("UnparsableJSON", "Could not parse the incoming response as JSON, see err.more for details"),
    RequestTimeout: createCustomError("RequestTimeout", "Request timed out before getting a response"),
    Network: createCustomError("Network", "Network issue, see err.more for details"),
    JSONPScriptFail: createCustomError("JSONPScriptFail", "<script> was loaded but did not call our provided callback"),
    ValidUntilNotFound: createCustomError("ValidUntilNotFound", "The SecuredAPIKey does not have a validUntil parameter."),
    JSONPScriptError: createCustomError("JSONPScriptError", "<script> unable to load due to an `error` event on it"),
    ObjectNotFound: createCustomError("ObjectNotFound", "Object not found"),
    Unknown: createCustomError("Unknown", "Unknown error occured")
};

},{"inherits":"bRL3M","foreach":"3ZSmQ"}],"3ZSmQ":[function(require,module,exports) {
var hasOwn = Object.prototype.hasOwnProperty;
var toString = Object.prototype.toString;
module.exports = function forEach(obj, fn, ctx) {
    if (toString.call(fn) !== "[object Function]") throw new TypeError("iterator must be a function");
    var l = obj.length;
    if (l === +l) for(var i = 0; i < l; i++)fn.call(ctx, obj[i], i, obj);
    else {
        for(var k in obj)if (hasOwn.call(obj, k)) fn.call(ctx, obj[k], k, obj);
    }
};

},{}],"5Uvjk":[function(require,module,exports) {
module.exports = function deprecate(fn, message) {
    var warned = false;
    function deprecated() {
        if (!warned) {
            /* eslint no-console:0 */ console.warn(message);
            warned = true;
        }
        return fn.apply(this, arguments);
    }
    return deprecated;
};

},{}],"1AM6r":[function(require,module,exports) {
module.exports = function deprecatedMessage(previousUsage, newUsage) {
    var githubAnchorLink = previousUsage.toLowerCase().replace(/[\.\(\)]/g, "");
    return "algoliasearch: `" + previousUsage + "` was replaced by `" + newUsage + "`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#" + githubAnchorLink;
};

},{}],"SSEzJ":[function(require,module,exports) {
var foreach = require("foreach");
module.exports = function merge(destination /* , sources */ ) {
    var sources = Array.prototype.slice.call(arguments);
    foreach(sources, function(source) {
        for(var keyName in source)if (source.hasOwnProperty(keyName)) {
            if (typeof destination[keyName] === "object" && typeof source[keyName] === "object") destination[keyName] = merge({}, destination[keyName], source[keyName]);
            else if (source[keyName] !== undefined) destination[keyName] = source[keyName];
        }
    });
    return destination;
};

},{"foreach":"3ZSmQ"}],"cxc5w":[function(require,module,exports) {
module.exports = function clone(obj) {
    return JSON.parse(JSON.stringify(obj));
};

},{}],"8B7BN":[function(require,module,exports) {
module.exports = function omit(obj, test) {
    var keys = require("object-keys");
    var foreach = require("foreach");
    var filtered = {};
    foreach(keys(obj), function doFilter(keyName) {
        if (test(keyName) !== true) filtered[keyName] = obj[keyName];
    });
    return filtered;
};

},{"object-keys":"eNyf4","foreach":"3ZSmQ"}],"eNyf4":[function(require,module,exports) {
"use strict";
var slice = Array.prototype.slice;
var isArgs = require("./isArguments");
var origKeys = Object.keys;
var keysShim = origKeys ? function keys(o) {
    return origKeys(o);
} : require("./implementation");
var originalKeys = Object.keys;
keysShim.shim = function shimObjectKeys() {
    if (Object.keys) {
        var keysWorksWithArguments = function() {
            // Safari 5.0 bug
            var args = Object.keys(arguments);
            return args && args.length === arguments.length;
        }(1, 2);
        if (!keysWorksWithArguments) Object.keys = function keys(object) {
            if (isArgs(object)) return originalKeys(slice.call(object));
            return originalKeys(object);
        };
    } else Object.keys = keysShim;
    return Object.keys || keysShim;
};
module.exports = keysShim;

},{"./isArguments":"1HhOq","./implementation":"aV01q"}],"1HhOq":[function(require,module,exports) {
"use strict";
var toStr = Object.prototype.toString;
module.exports = function isArguments(value) {
    var str = toStr.call(value);
    var isArgs = str === "[object Arguments]";
    if (!isArgs) isArgs = str !== "[object Array]" && value !== null && typeof value === "object" && typeof value.length === "number" && value.length >= 0 && toStr.call(value.callee) === "[object Function]";
    return isArgs;
};

},{}],"aV01q":[function(require,module,exports) {
"use strict";
var keysShim;
if (!Object.keys) {
    // modified from https://github.com/es-shims/es5-shim
    var has = Object.prototype.hasOwnProperty;
    var toStr = Object.prototype.toString;
    var isArgs = require("./isArguments"); // eslint-disable-line global-require
    var isEnumerable = Object.prototype.propertyIsEnumerable;
    var hasDontEnumBug = !isEnumerable.call({
        toString: null
    }, "toString");
    var hasProtoEnumBug = isEnumerable.call(function() {}, "prototype");
    var dontEnums = [
        "toString",
        "toLocaleString",
        "valueOf",
        "hasOwnProperty",
        "isPrototypeOf",
        "propertyIsEnumerable",
        "constructor"
    ];
    var equalsConstructorPrototype = function(o) {
        var ctor = o.constructor;
        return ctor && ctor.prototype === o;
    };
    var excludedKeys = {
        $applicationCache: true,
        $console: true,
        $external: true,
        $frame: true,
        $frameElement: true,
        $frames: true,
        $innerHeight: true,
        $innerWidth: true,
        $onmozfullscreenchange: true,
        $onmozfullscreenerror: true,
        $outerHeight: true,
        $outerWidth: true,
        $pageXOffset: true,
        $pageYOffset: true,
        $parent: true,
        $scrollLeft: true,
        $scrollTop: true,
        $scrollX: true,
        $scrollY: true,
        $self: true,
        $webkitIndexedDB: true,
        $webkitStorageInfo: true,
        $window: true
    };
    var hasAutomationEqualityBug = function() {
        /* global window */ if (typeof window === "undefined") return false;
        for(var k in window)try {
            if (!excludedKeys["$" + k] && has.call(window, k) && window[k] !== null && typeof window[k] === "object") try {
                equalsConstructorPrototype(window[k]);
            } catch (e) {
                return true;
            }
        } catch (e1) {
            return true;
        }
        return false;
    }();
    var equalsConstructorPrototypeIfNotBuggy = function(o) {
        /* global window */ if (typeof window === "undefined" || !hasAutomationEqualityBug) return equalsConstructorPrototype(o);
        try {
            return equalsConstructorPrototype(o);
        } catch (e) {
            return false;
        }
    };
    keysShim = function keys(object) {
        var isObject = object !== null && typeof object === "object";
        var isFunction = toStr.call(object) === "[object Function]";
        var isArguments = isArgs(object);
        var isString = isObject && toStr.call(object) === "[object String]";
        var theKeys = [];
        if (!isObject && !isFunction && !isArguments) throw new TypeError("Object.keys called on a non-object");
        var skipProto = hasProtoEnumBug && isFunction;
        if (isString && object.length > 0 && !has.call(object, 0)) for(var i = 0; i < object.length; ++i)theKeys.push(String(i));
        if (isArguments && object.length > 0) for(var j = 0; j < object.length; ++j)theKeys.push(String(j));
        else {
            for(var name in object)if (!(skipProto && name === "prototype") && has.call(object, name)) theKeys.push(String(name));
        }
        if (hasDontEnumBug) {
            var skipConstructor = equalsConstructorPrototypeIfNotBuggy(object);
            for(var k = 0; k < dontEnums.length; ++k)if (!(skipConstructor && dontEnums[k] === "constructor") && has.call(object, dontEnums[k])) theKeys.push(dontEnums[k]);
        }
        return theKeys;
    };
}
module.exports = keysShim;

},{"./isArguments":"1HhOq"}],"hk7XJ":[function(require,module,exports) {
var toString = {}.toString;
module.exports = Array.isArray || function(arr) {
    return toString.call(arr) == "[object Array]";
};

},{}],"c7pKt":[function(require,module,exports) {
var foreach = require("foreach");
module.exports = function map(arr, fn) {
    var newArr = [];
    foreach(arr, function(item, itemIndex) {
        newArr.push(fn(item, itemIndex, arr));
    });
    return newArr;
};

},{"foreach":"3ZSmQ"}],"iOCHq":[function(require,module,exports) {
// Parse cloud does not supports setTimeout
// We do not store a setTimeout reference in the client everytime
// We only fallback to a fake setTimeout when not available
// setTimeout cannot be override globally sadly
module.exports = function exitPromise(fn, _setTimeout) {
    _setTimeout(fn, 0);
};

},{}],"cO7L9":[function(require,module,exports) {
"use strict";
// This is the object returned by the `index.browseAll()` method
module.exports = IndexBrowser;
var inherits = require("inherits");
var EventEmitter = require("events").EventEmitter;
function IndexBrowser() {}
inherits(IndexBrowser, EventEmitter);
IndexBrowser.prototype.stop = function() {
    this._stopped = true;
    this._clean();
};
IndexBrowser.prototype._end = function() {
    this.emit("end");
    this._clean();
};
IndexBrowser.prototype._error = function(err) {
    this.emit("error", err);
    this._clean();
};
IndexBrowser.prototype._result = function(content) {
    this.emit("result", content);
};
IndexBrowser.prototype._clean = function() {
    this.removeAllListeners("stop");
    this.removeAllListeners("end");
    this.removeAllListeners("error");
    this.removeAllListeners("result");
};

},{"inherits":"bRL3M","events":"1VQLm"}],"1VQLm":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
function EventEmitter() {
    this._events = this._events || {};
    this._maxListeners = this._maxListeners || undefined;
}
module.exports = EventEmitter;
// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;
EventEmitter.prototype._events = undefined;
EventEmitter.prototype._maxListeners = undefined;
// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
EventEmitter.defaultMaxListeners = 10;
// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function(n) {
    if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
    this._maxListeners = n;
    return this;
};
EventEmitter.prototype.emit = function(type) {
    var er, handler, len, args, i, listeners;
    if (!this._events) this._events = {};
    // If there is no 'error' event listener then throw.
    if (type === "error") {
        if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
            er = arguments[1];
            if (er instanceof Error) throw er; // Unhandled 'error' event
            else {
                // At least give some kind of context to the user
                var err = new Error('Uncaught, unspecified "error" event. (' + er + ")");
                err.context = er;
                throw err;
            }
        }
    }
    handler = this._events[type];
    if (isUndefined(handler)) return false;
    if (isFunction(handler)) switch(arguments.length){
        // fast cases
        case 1:
            handler.call(this);
            break;
        case 2:
            handler.call(this, arguments[1]);
            break;
        case 3:
            handler.call(this, arguments[1], arguments[2]);
            break;
        // slower
        default:
            args = Array.prototype.slice.call(arguments, 1);
            handler.apply(this, args);
    }
    else if (isObject(handler)) {
        args = Array.prototype.slice.call(arguments, 1);
        listeners = handler.slice();
        len = listeners.length;
        for(i = 0; i < len; i++)listeners[i].apply(this, args);
    }
    return true;
};
EventEmitter.prototype.addListener = function(type, listener) {
    var m;
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    if (!this._events) this._events = {};
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (this._events.newListener) this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener);
    if (!this._events[type]) // Optimize the case of one listener. Don't need the extra array object.
    this._events[type] = listener;
    else if (isObject(this._events[type])) // If we've already got an array, just append.
    this._events[type].push(listener);
    else // Adding the second element, need to change to array.
    this._events[type] = [
        this._events[type],
        listener
    ];
    // Check for listener leak
    if (isObject(this._events[type]) && !this._events[type].warned) {
        if (!isUndefined(this._maxListeners)) m = this._maxListeners;
        else m = EventEmitter.defaultMaxListeners;
        if (m && m > 0 && this._events[type].length > m) {
            this._events[type].warned = true;
            console.error("(node) warning: possible EventEmitter memory leak detected. %d listeners added. Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
            if (typeof console.trace === "function") // not supported in IE 10
            console.trace();
        }
    }
    return this;
};
EventEmitter.prototype.on = EventEmitter.prototype.addListener;
EventEmitter.prototype.once = function(type, listener) {
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    var fired = false;
    function g() {
        this.removeListener(type, g);
        if (!fired) {
            fired = true;
            listener.apply(this, arguments);
        }
    }
    g.listener = listener;
    this.on(type, g);
    return this;
};
// emits a 'removeListener' event iff the listener was removed
EventEmitter.prototype.removeListener = function(type, listener) {
    var list, position, length, i;
    if (!isFunction(listener)) throw TypeError("listener must be a function");
    if (!this._events || !this._events[type]) return this;
    list = this._events[type];
    length = list.length;
    position = -1;
    if (list === listener || isFunction(list.listener) && list.listener === listener) {
        delete this._events[type];
        if (this._events.removeListener) this.emit("removeListener", type, listener);
    } else if (isObject(list)) {
        for(i = length; i-- > 0;)if (list[i] === listener || list[i].listener && list[i].listener === listener) {
            position = i;
            break;
        }
        if (position < 0) return this;
        if (list.length === 1) {
            list.length = 0;
            delete this._events[type];
        } else list.splice(position, 1);
        if (this._events.removeListener) this.emit("removeListener", type, listener);
    }
    return this;
};
EventEmitter.prototype.removeAllListeners = function(type) {
    var key, listeners;
    if (!this._events) return this;
    // not listening for removeListener, no need to emit
    if (!this._events.removeListener) {
        if (arguments.length === 0) this._events = {};
        else if (this._events[type]) delete this._events[type];
        return this;
    }
    // emit removeListener for all listeners on all events
    if (arguments.length === 0) {
        for(key in this._events){
            if (key === "removeListener") continue;
            this.removeAllListeners(key);
        }
        this.removeAllListeners("removeListener");
        this._events = {};
        return this;
    }
    listeners = this._events[type];
    if (isFunction(listeners)) this.removeListener(type, listeners);
    else if (listeners) // LIFO order
    while(listeners.length)this.removeListener(type, listeners[listeners.length - 1]);
    delete this._events[type];
    return this;
};
EventEmitter.prototype.listeners = function(type) {
    var ret;
    if (!this._events || !this._events[type]) ret = [];
    else if (isFunction(this._events[type])) ret = [
        this._events[type]
    ];
    else ret = this._events[type].slice();
    return ret;
};
EventEmitter.prototype.listenerCount = function(type) {
    if (this._events) {
        var evlistener = this._events[type];
        if (isFunction(evlistener)) return 1;
        else if (evlistener) return evlistener.length;
    }
    return 0;
};
EventEmitter.listenerCount = function(emitter, type) {
    return emitter.listenerCount(type);
};
function isFunction(arg) {
    return typeof arg === "function";
}
function isNumber(arg) {
    return typeof arg === "number";
}
function isObject(arg) {
    return typeof arg === "object" && arg !== null;
}
function isUndefined(arg) {
    return arg === void 0;
}

},{}],"53JcR":[function(require,module,exports) {
module.exports = AlgoliaSearchCore;
var errors = require("./errors");
var exitPromise = require("./exitPromise.js");
var IndexCore = require("./IndexCore.js");
var store = require("./store.js");
// We will always put the API KEY in the JSON body in case of too long API KEY,
// to avoid query string being too long and failing in various conditions (our server limit, browser limit,
// proxies limit)
var MAX_API_KEY_LENGTH = 500;
var RESET_APP_DATA_TIMER = 120000; // after 2 minutes reset to first host
/*
 * Algolia Search library initialization
 * https://www.algolia.com/
 *
 * @param {string} applicationID - Your applicationID, found in your dashboard
 * @param {string} apiKey - Your API key, found in your dashboard
 * @param {Object} [opts]
 * @param {number} [opts.timeout=2000] - The request timeout set in milliseconds,
 * another request will be issued after this timeout
 * @param {string} [opts.protocol='https:'] - The protocol used to query Algolia Search API.
 *                                        Set to 'http:' to force using http.
 * @param {Object|Array} [opts.hosts={
 *           read: [this.applicationID + '-dsn.algolia.net'].concat([
 *             this.applicationID + '-1.algolianet.com',
 *             this.applicationID + '-2.algolianet.com',
 *             this.applicationID + '-3.algolianet.com']
 *           ]),
 *           write: [this.applicationID + '.algolia.net'].concat([
 *             this.applicationID + '-1.algolianet.com',
 *             this.applicationID + '-2.algolianet.com',
 *             this.applicationID + '-3.algolianet.com']
 *           ]) - The hosts to use for Algolia Search API.
 *           If you provide them, you will less benefit from our HA implementation
 */ function AlgoliaSearchCore(applicationID, apiKey, opts) {
    var debug = require("debug")("algoliasearch");
    var clone = require("./clone.js");
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: algoliasearch(applicationID, apiKey, opts)";
    if (opts._allowEmptyCredentials !== true && !applicationID) throw new errors.AlgoliaSearchError("Please provide an application ID. " + usage);
    if (opts._allowEmptyCredentials !== true && !apiKey) throw new errors.AlgoliaSearchError("Please provide an API key. " + usage);
    this.applicationID = applicationID;
    this.apiKey = apiKey;
    this.hosts = {
        read: [],
        write: []
    };
    opts = opts || {};
    this._timeouts = opts.timeouts || {
        connect: 1000,
        read: 2000,
        write: 30000
    };
    // backward compat, if opts.timeout is passed, we use it to configure all timeouts like before
    if (opts.timeout) this._timeouts.connect = this._timeouts.read = this._timeouts.write = opts.timeout;
    var protocol = opts.protocol || "https:";
    // while we advocate for colon-at-the-end values: 'http:' for `opts.protocol`
    // we also accept `http` and `https`. It's a common error.
    if (!/:$/.test(protocol)) protocol = protocol + ":";
    if (protocol !== "http:" && protocol !== "https:") throw new errors.AlgoliaSearchError("protocol must be `http:` or `https:` (was `" + opts.protocol + "`)");
    this._checkAppIdData();
    if (!opts.hosts) {
        var defaultHosts = map(this._shuffleResult, function(hostNumber) {
            return applicationID + "-" + hostNumber + ".algolianet.com";
        });
        // no hosts given, compute defaults
        var mainSuffix = (opts.dsn === false ? "" : "-dsn") + ".algolia.net";
        this.hosts.read = [
            this.applicationID + mainSuffix
        ].concat(defaultHosts);
        this.hosts.write = [
            this.applicationID + ".algolia.net"
        ].concat(defaultHosts);
    } else if (isArray(opts.hosts)) {
        // when passing custom hosts, we need to have a different host index if the number
        // of write/read hosts are different.
        this.hosts.read = clone(opts.hosts);
        this.hosts.write = clone(opts.hosts);
    } else {
        this.hosts.read = clone(opts.hosts.read);
        this.hosts.write = clone(opts.hosts.write);
    }
    // add protocol and lowercase hosts
    this.hosts.read = map(this.hosts.read, prepareHost(protocol));
    this.hosts.write = map(this.hosts.write, prepareHost(protocol));
    this.extraHeaders = {};
    // In some situations you might want to warm the cache
    this.cache = opts._cache || {};
    this._ua = opts._ua;
    this._useCache = opts._useCache === undefined || opts._cache ? true : opts._useCache;
    this._useRequestCache = this._useCache && opts._useRequestCache;
    this._useFallback = opts.useFallback === undefined ? true : opts.useFallback;
    this._setTimeout = opts._setTimeout;
    debug("init done, %j", this);
}
/*
 * Get the index object initialized
 *
 * @param indexName the name of index
 * @param callback the result callback with one argument (the Index instance)
 */ AlgoliaSearchCore.prototype.initIndex = function(indexName) {
    return new IndexCore(this, indexName);
};
/**
* Add an extra field to the HTTP request
*
* @param name the header field name
* @param value the header field value
*/ AlgoliaSearchCore.prototype.setExtraHeader = function(name, value) {
    this.extraHeaders[name.toLowerCase()] = value;
};
/**
* Get the value of an extra HTTP header
*
* @param name the header field name
*/ AlgoliaSearchCore.prototype.getExtraHeader = function(name) {
    return this.extraHeaders[name.toLowerCase()];
};
/**
* Remove an extra field from the HTTP request
*
* @param name the header field name
*/ AlgoliaSearchCore.prototype.unsetExtraHeader = function(name) {
    delete this.extraHeaders[name.toLowerCase()];
};
/**
* Augment sent x-algolia-agent with more data, each agent part
* is automatically separated from the others by a semicolon;
*
* @param algoliaAgent the agent to add
*/ AlgoliaSearchCore.prototype.addAlgoliaAgent = function(algoliaAgent) {
    var algoliaAgentWithDelimiter = "; " + algoliaAgent;
    if (this._ua.indexOf(algoliaAgentWithDelimiter) === -1) this._ua += algoliaAgentWithDelimiter;
};
/*
 * Wrapper that try all hosts to maximize the quality of service
 */ AlgoliaSearchCore.prototype._jsonRequest = function(initialOpts) {
    this._checkAppIdData();
    var requestDebug = require("debug")("algoliasearch:" + initialOpts.url);
    var body;
    var cacheID;
    var additionalUA = initialOpts.additionalUA || "";
    var cache = initialOpts.cache;
    var client = this;
    var tries = 0;
    var usingFallback = false;
    var hasFallback = client._useFallback && client._request.fallback && initialOpts.fallback;
    var headers;
    if (this.apiKey.length > MAX_API_KEY_LENGTH && initialOpts.body !== undefined && (initialOpts.body.params !== undefined || initialOpts.body.requests !== undefined // client.search()
    )) {
        initialOpts.body.apiKey = this.apiKey;
        headers = this._computeRequestHeaders({
            additionalUA: additionalUA,
            withApiKey: false,
            headers: initialOpts.headers
        });
    } else headers = this._computeRequestHeaders({
        additionalUA: additionalUA,
        headers: initialOpts.headers
    });
    if (initialOpts.body !== undefined) body = safeJSONStringify(initialOpts.body);
    requestDebug("request start");
    var debugData = [];
    function doRequest(requester, reqOpts) {
        client._checkAppIdData();
        var startTime = new Date();
        if (client._useCache && !client._useRequestCache) cacheID = initialOpts.url;
        // as we sometime use POST requests to pass parameters (like query='aa'),
        // the cacheID must also include the body to be different between calls
        if (client._useCache && !client._useRequestCache && body) cacheID += "_body_" + reqOpts.body;
        // handle cache existence
        if (isCacheValidWithCurrentID(!client._useRequestCache, cache, cacheID)) {
            requestDebug("serving response from cache");
            var responseText = cache[cacheID];
            // Cache response must match the type of the original one
            return client._promise.resolve({
                body: JSON.parse(responseText),
                responseText: responseText
            });
        }
        // if we reached max tries
        if (tries >= client.hosts[initialOpts.hostType].length) {
            if (!hasFallback || usingFallback) {
                requestDebug("could not get any response");
                // then stop
                return client._promise.reject(new errors.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: " + client.applicationID, {
                    debugData: debugData
                }));
            }
            requestDebug("switching to fallback");
            // let's try the fallback starting from here
            tries = 0;
            // method, url and body are fallback dependent
            reqOpts.method = initialOpts.fallback.method;
            reqOpts.url = initialOpts.fallback.url;
            reqOpts.jsonBody = initialOpts.fallback.body;
            if (reqOpts.jsonBody) reqOpts.body = safeJSONStringify(reqOpts.jsonBody);
            // re-compute headers, they could be omitting the API KEY
            headers = client._computeRequestHeaders({
                additionalUA: additionalUA,
                headers: initialOpts.headers
            });
            reqOpts.timeouts = client._getTimeoutsForRequest(initialOpts.hostType);
            client._setHostIndexByType(0, initialOpts.hostType);
            usingFallback = true; // the current request is now using fallback
            return doRequest(client._request.fallback, reqOpts);
        }
        var currentHost = client._getHostByType(initialOpts.hostType);
        var url = currentHost + reqOpts.url;
        var options = {
            body: reqOpts.body,
            jsonBody: reqOpts.jsonBody,
            method: reqOpts.method,
            headers: headers,
            timeouts: reqOpts.timeouts,
            debug: requestDebug,
            forceAuthHeaders: reqOpts.forceAuthHeaders
        };
        requestDebug("method: %s, url: %s, headers: %j, timeouts: %d", options.method, url, options.headers, options.timeouts);
        if (requester === client._request.fallback) requestDebug("using fallback");
        // `requester` is any of this._request or this._request.fallback
        // thus it needs to be called using the client as context
        return requester.call(client, url, options).then(success, tryFallback);
        function success(httpResponse) {
            // compute the status of the response,
            //
            // When in browser mode, using XDR or JSONP, we have no statusCode available
            // So we rely on our API response `status` property.
            // But `waitTask` can set a `status` property which is not the statusCode (it's the task status)
            // So we check if there's a `message` along `status` and it means it's an error
            //
            // That's the only case where we have a response.status that's not the http statusCode
            var status = httpResponse && httpResponse.body && httpResponse.body.message && httpResponse.body.status || // this is important to check the request statusCode AFTER the body eventual
            // statusCode because some implementations (jQuery XDomainRequest transport) may
            // send statusCode 200 while we had an error
            httpResponse.statusCode || // When in browser mode, using XDR or JSONP
            // we default to success when no error (no response.status && response.message)
            // If there was a JSON.parse() error then body is null and it fails
            httpResponse && httpResponse.body && 200;
            requestDebug("received response: statusCode: %s, computed statusCode: %d, headers: %j", httpResponse.statusCode, status, httpResponse.headers);
            var httpResponseOk = Math.floor(status / 100) === 2;
            var endTime = new Date();
            debugData.push({
                currentHost: currentHost,
                headers: removeCredentials(headers),
                content: body || null,
                contentLength: body !== undefined ? body.length : null,
                method: reqOpts.method,
                timeouts: reqOpts.timeouts,
                url: reqOpts.url,
                startTime: startTime,
                endTime: endTime,
                duration: endTime - startTime,
                statusCode: status
            });
            if (httpResponseOk) {
                if (client._useCache && !client._useRequestCache && cache) {
                    cache[cacheID] = httpResponse.responseText;
                }
                return {
                    responseText: httpResponse.responseText,
                    body: httpResponse.body
                };
            }
            var shouldRetry = Math.floor(status / 100) !== 4;
            if (shouldRetry) {
                tries += 1;
                return retryRequest();
            }
            requestDebug("unrecoverable error");
            // no success and no retry => fail
            var unrecoverableError = new errors.AlgoliaSearchError(httpResponse.body && httpResponse.body.message, {
                debugData: debugData,
                statusCode: status
            });
            return client._promise.reject(unrecoverableError);
        }
        function tryFallback(err) {
            // error cases:
            //  While not in fallback mode:
            //    - CORS not supported
            //    - network error
            //  While in fallback mode:
            //    - timeout
            //    - network error
            //    - badly formatted JSONP (script loaded, did not call our callback)
            //  In both cases:
            //    - uncaught exception occurs (TypeError)
            requestDebug("error: %s, stack: %s", err.message, err.stack);
            var endTime = new Date();
            debugData.push({
                currentHost: currentHost,
                headers: removeCredentials(headers),
                content: body || null,
                contentLength: body !== undefined ? body.length : null,
                method: reqOpts.method,
                timeouts: reqOpts.timeouts,
                url: reqOpts.url,
                startTime: startTime,
                endTime: endTime,
                duration: endTime - startTime
            });
            if (!(err instanceof errors.AlgoliaSearchError)) {
                err = new errors.Unknown(err && err.message, err);
            }
            tries += 1;
            // stop the request implementation when:
            if (// we did not generate this error,
            // it comes from a throw in some other piece of code
            err instanceof errors.Unknown || // server sent unparsable JSON
            err instanceof errors.UnparsableJSON || // max tries and already using fallback or no fallback
            tries >= client.hosts[initialOpts.hostType].length && (usingFallback || !hasFallback)) {
                // stop request implementation for this command
                err.debugData = debugData;
                return client._promise.reject(err);
            }
            // When a timeout occurred, retry by raising timeout
            if (err instanceof errors.RequestTimeout) {
                return retryRequestWithHigherTimeout();
            }
            return retryRequest();
        }
        function retryRequest() {
            requestDebug("retrying request");
            client._incrementHostIndex(initialOpts.hostType);
            return doRequest(requester, reqOpts);
        }
        function retryRequestWithHigherTimeout() {
            requestDebug("retrying request with higher timeout");
            client._incrementHostIndex(initialOpts.hostType);
            client._incrementTimeoutMultipler();
            reqOpts.timeouts = client._getTimeoutsForRequest(initialOpts.hostType);
            return doRequest(requester, reqOpts);
        }
    }
    function isCacheValidWithCurrentID(useRequestCache, currentCache, currentCacheID) {
        return client._useCache && useRequestCache && currentCache && currentCache[currentCacheID] !== undefined;
    }
    function interopCallbackReturn(request, callback) {
        if (isCacheValidWithCurrentID(client._useRequestCache, cache, cacheID)) request.catch(function() {
            // Release the cache on error
            delete cache[cacheID];
        });
        if (typeof initialOpts.callback === "function") // either we have a callback
        request.then(function okCb(content) {
            exitPromise(function() {
                initialOpts.callback(null, callback(content));
            }, client._setTimeout || setTimeout);
        }, function nookCb(err) {
            exitPromise(function() {
                initialOpts.callback(err);
            }, client._setTimeout || setTimeout);
        });
        else // either we are using promises
        return request.then(callback);
    }
    if (client._useCache && client._useRequestCache) cacheID = initialOpts.url;
    // as we sometime use POST requests to pass parameters (like query='aa'),
    // the cacheID must also include the body to be different between calls
    if (client._useCache && client._useRequestCache && body) cacheID += "_body_" + body;
    if (isCacheValidWithCurrentID(client._useRequestCache, cache, cacheID)) {
        requestDebug("serving request from cache");
        var maybePromiseForCache = cache[cacheID];
        // In case the cache is warmup with value that is not a promise
        var promiseForCache = typeof maybePromiseForCache.then !== "function" ? client._promise.resolve({
            responseText: maybePromiseForCache
        }) : maybePromiseForCache;
        return interopCallbackReturn(promiseForCache, function(content) {
            // In case of the cache request, return the original value
            return JSON.parse(content.responseText);
        });
    }
    var request = doRequest(client._request, {
        url: initialOpts.url,
        method: initialOpts.method,
        body: body,
        jsonBody: initialOpts.body,
        timeouts: client._getTimeoutsForRequest(initialOpts.hostType),
        forceAuthHeaders: initialOpts.forceAuthHeaders
    });
    if (client._useCache && client._useRequestCache && cache) cache[cacheID] = request;
    return interopCallbackReturn(request, function(content) {
        // In case of the first request, return the JSON value
        return content.body;
    });
};
/*
* Transform search param object in query string
* @param {object} args arguments to add to the current query string
* @param {string} params current query string
* @return {string} the final query string
*/ AlgoliaSearchCore.prototype._getSearchParams = function(args, params) {
    if (args === undefined || args === null) return params;
    for(var key in args)if (key !== null && args[key] !== undefined && args.hasOwnProperty(key)) {
        params += params === "" ? "" : "&";
        params += key + "=" + encodeURIComponent(Object.prototype.toString.call(args[key]) === "[object Array]" ? safeJSONStringify(args[key]) : args[key]);
    }
    return params;
};
/**
 * Compute the headers for a request
 *
 * @param [string] options.additionalUA semi-colon separated string with other user agents to add
 * @param [boolean=true] options.withApiKey Send the api key as a header
 * @param [Object] options.headers Extra headers to send
 */ AlgoliaSearchCore.prototype._computeRequestHeaders = function(options) {
    var forEach = require("foreach");
    var ua = options.additionalUA ? this._ua + "; " + options.additionalUA : this._ua;
    var requestHeaders = {
        "x-algolia-agent": ua,
        "x-algolia-application-id": this.applicationID
    };
    // browser will inline headers in the url, node.js will use http headers
    // but in some situations, the API KEY will be too long (big secured API keys)
    // so if the request is a POST and the KEY is very long, we will be asked to not put
    // it into headers but in the JSON body
    if (options.withApiKey !== false) requestHeaders["x-algolia-api-key"] = this.apiKey;
    if (this.userToken) requestHeaders["x-algolia-usertoken"] = this.userToken;
    if (this.securityTags) requestHeaders["x-algolia-tagfilters"] = this.securityTags;
    forEach(this.extraHeaders, function addToRequestHeaders(value, key) {
        requestHeaders[key] = value;
    });
    if (options.headers) forEach(options.headers, function addToRequestHeaders(value, key) {
        requestHeaders[key] = value;
    });
    return requestHeaders;
};
/**
 * Search through multiple indices at the same time
 * @param  {Object[]}   queries  An array of queries you want to run.
 * @param {string} queries[].indexName The index name you want to target
 * @param {string} [queries[].query] The query to issue on this index. Can also be passed into `params`
 * @param {Object} queries[].params Any search param like hitsPerPage, ..
 * @param  {Function} callback Callback to be called
 * @return {Promise|undefined} Returns a promise if no callback given
 */ AlgoliaSearchCore.prototype.search = function(queries, opts, callback) {
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: client.search(arrayOfQueries[, callback])";
    if (!isArray(queries)) throw new Error(usage);
    if (typeof opts === "function") {
        callback = opts;
        opts = {};
    } else if (opts === undefined) opts = {};
    var client = this;
    var postObj = {
        requests: map(queries, function prepareRequest(query) {
            var params = "";
            // allow query.query
            // so we are mimicing the index.search(query, params) method
            // {indexName:, query:, params:}
            if (query.query !== undefined) params += "query=" + encodeURIComponent(query.query);
            return {
                indexName: query.indexName,
                params: client._getSearchParams(query.params, params)
            };
        })
    };
    var JSONPParams = map(postObj.requests, function prepareJSONPParams(request, requestId) {
        return requestId + "=" + encodeURIComponent("/1/indexes/" + encodeURIComponent(request.indexName) + "?" + request.params);
    }).join("&");
    var url = "/1/indexes/*/queries";
    if (opts.strategy !== undefined) postObj.strategy = opts.strategy;
    return this._jsonRequest({
        cache: this.cache,
        method: "POST",
        url: url,
        body: postObj,
        hostType: "read",
        fallback: {
            method: "GET",
            url: "/1/indexes/*",
            body: {
                params: JSONPParams
            }
        },
        callback: callback
    });
};
/**
* Search for facet values
* https://www.algolia.com/doc/rest-api/search#search-for-facet-values
* This is the top-level API for SFFV.
*
* @param {object[]} queries An array of queries to run.
* @param {string} queries[].indexName Index name, name of the index to search.
* @param {object} queries[].params Query parameters.
* @param {string} queries[].params.facetName Facet name, name of the attribute to search for values in.
* Must be declared as a facet
* @param {string} queries[].params.facetQuery Query for the facet search
* @param {string} [queries[].params.*] Any search parameter of Algolia,
* see https://www.algolia.com/doc/api-client/javascript/search#search-parameters
* Pagination is not supported. The page and hitsPerPage parameters will be ignored.
*/ AlgoliaSearchCore.prototype.searchForFacetValues = function(queries) {
    var isArray = require("isarray");
    var map = require("./map.js");
    var usage = "Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])"; // eslint-disable-line max-len
    if (!isArray(queries)) throw new Error(usage);
    var client = this;
    return client._promise.all(map(queries, function performQuery(query) {
        if (!query || query.indexName === undefined || query.params.facetName === undefined || query.params.facetQuery === undefined) throw new Error(usage);
        var clone = require("./clone.js");
        var omit = require("./omit.js");
        var indexName = query.indexName;
        var params = query.params;
        var facetName = params.facetName;
        var filteredParams = omit(clone(params), function(keyName) {
            return keyName === "facetName";
        });
        var searchParameters = client._getSearchParams(filteredParams, "");
        return client._jsonRequest({
            cache: client.cache,
            method: "POST",
            url: "/1/indexes/" + encodeURIComponent(indexName) + "/facets/" + encodeURIComponent(facetName) + "/query",
            hostType: "read",
            body: {
                params: searchParameters
            }
        });
    }));
};
/**
 * Set the extra security tagFilters header
 * @param {string|array} tags The list of tags defining the current security filters
 */ AlgoliaSearchCore.prototype.setSecurityTags = function(tags) {
    if (Object.prototype.toString.call(tags) === "[object Array]") {
        var strTags = [];
        for(var i = 0; i < tags.length; ++i)if (Object.prototype.toString.call(tags[i]) === "[object Array]") {
            var oredTags = [];
            for(var j = 0; j < tags[i].length; ++j)oredTags.push(tags[i][j]);
            strTags.push("(" + oredTags.join(",") + ")");
        } else strTags.push(tags[i]);
        tags = strTags.join(",");
    }
    this.securityTags = tags;
};
/**
 * Set the extra user token header
 * @param {string} userToken The token identifying a uniq user (used to apply rate limits)
 */ AlgoliaSearchCore.prototype.setUserToken = function(userToken) {
    this.userToken = userToken;
};
/**
 * Clear all queries in client's cache
 * @return undefined
 */ AlgoliaSearchCore.prototype.clearCache = function() {
    this.cache = {};
};
/**
* Set the number of milliseconds a request can take before automatically being terminated.
* @deprecated
* @param {Number} milliseconds
*/ AlgoliaSearchCore.prototype.setRequestTimeout = function(milliseconds) {
    if (milliseconds) this._timeouts.connect = this._timeouts.read = this._timeouts.write = milliseconds;
};
/**
* Set the three different (connect, read, write) timeouts to be used when requesting
* @param {Object} timeouts
*/ AlgoliaSearchCore.prototype.setTimeouts = function(timeouts) {
    this._timeouts = timeouts;
};
/**
* Get the three different (connect, read, write) timeouts to be used when requesting
* @param {Object} timeouts
*/ AlgoliaSearchCore.prototype.getTimeouts = function() {
    return this._timeouts;
};
AlgoliaSearchCore.prototype._getAppIdData = function() {
    var data = store.get(this.applicationID);
    if (data !== null) this._cacheAppIdData(data);
    return data;
};
AlgoliaSearchCore.prototype._setAppIdData = function(data) {
    data.lastChange = new Date().getTime();
    this._cacheAppIdData(data);
    return store.set(this.applicationID, data);
};
AlgoliaSearchCore.prototype._checkAppIdData = function() {
    var data = this._getAppIdData();
    var now = new Date().getTime();
    if (data === null || now - data.lastChange > RESET_APP_DATA_TIMER) return this._resetInitialAppIdData(data);
    return data;
};
AlgoliaSearchCore.prototype._resetInitialAppIdData = function(data) {
    var newData = data || {};
    newData.hostIndexes = {
        read: 0,
        write: 0
    };
    newData.timeoutMultiplier = 1;
    newData.shuffleResult = newData.shuffleResult || shuffle([
        1,
        2,
        3
    ]);
    return this._setAppIdData(newData);
};
AlgoliaSearchCore.prototype._cacheAppIdData = function(data) {
    this._hostIndexes = data.hostIndexes;
    this._timeoutMultiplier = data.timeoutMultiplier;
    this._shuffleResult = data.shuffleResult;
};
AlgoliaSearchCore.prototype._partialAppIdDataUpdate = function(newData) {
    var foreach = require("foreach");
    var currentData = this._getAppIdData();
    foreach(newData, function(value, key) {
        currentData[key] = value;
    });
    return this._setAppIdData(currentData);
};
AlgoliaSearchCore.prototype._getHostByType = function(hostType) {
    return this.hosts[hostType][this._getHostIndexByType(hostType)];
};
AlgoliaSearchCore.prototype._getTimeoutMultiplier = function() {
    return this._timeoutMultiplier;
};
AlgoliaSearchCore.prototype._getHostIndexByType = function(hostType) {
    return this._hostIndexes[hostType];
};
AlgoliaSearchCore.prototype._setHostIndexByType = function(hostIndex, hostType) {
    var clone = require("./clone");
    var newHostIndexes = clone(this._hostIndexes);
    newHostIndexes[hostType] = hostIndex;
    this._partialAppIdDataUpdate({
        hostIndexes: newHostIndexes
    });
    return hostIndex;
};
AlgoliaSearchCore.prototype._incrementHostIndex = function(hostType) {
    return this._setHostIndexByType((this._getHostIndexByType(hostType) + 1) % this.hosts[hostType].length, hostType);
};
AlgoliaSearchCore.prototype._incrementTimeoutMultipler = function() {
    var timeoutMultiplier = Math.max(this._timeoutMultiplier + 1, 4);
    return this._partialAppIdDataUpdate({
        timeoutMultiplier: timeoutMultiplier
    });
};
AlgoliaSearchCore.prototype._getTimeoutsForRequest = function(hostType) {
    return {
        connect: this._timeouts.connect * this._timeoutMultiplier,
        complete: this._timeouts[hostType] * this._timeoutMultiplier
    };
};
function prepareHost(protocol) {
    return function prepare(host) {
        return protocol + "//" + host.toLowerCase();
    };
}
// Prototype.js < 1.7, a widely used library, defines a weird
// Array.prototype.toJSON function that will fail to stringify our content
// appropriately
// refs:
//   - https://groups.google.com/forum/#!topic/prototype-core/E-SAVvV_V9Q
//   - https://github.com/sstephenson/prototype/commit/038a2985a70593c1a86c230fadbdfe2e4898a48c
//   - http://stackoverflow.com/a/3148441/147079
function safeJSONStringify(obj) {
    /* eslint no-extend-native:0 */ if (Array.prototype.toJSON === undefined) return JSON.stringify(obj);
    var toJSON = Array.prototype.toJSON;
    delete Array.prototype.toJSON;
    var out = JSON.stringify(obj);
    Array.prototype.toJSON = toJSON;
    return out;
}
function shuffle(array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;
    // While there remain elements to shuffle...
    while(currentIndex !== 0){
        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}
function removeCredentials(headers) {
    var newHeaders = {};
    for(var headerName in headers)if (Object.prototype.hasOwnProperty.call(headers, headerName)) {
        var value;
        if (headerName === "x-algolia-api-key" || headerName === "x-algolia-application-id") value = "**hidden for security purposes**";
        else value = headers[headerName];
        newHeaders[headerName] = value;
    }
    return newHeaders;
}

},{"./errors":"6bEkW","./exitPromise.js":"iOCHq","./IndexCore.js":"5Q5cC","./store.js":"kC6yK","debug":"l0oUb","./clone.js":"cxc5w","isarray":"hk7XJ","./map.js":"c7pKt","foreach":"3ZSmQ","./omit.js":"8B7BN","./clone":"cxc5w"}],"kC6yK":[function(require,module,exports) {
var global = arguments[3];
var debug = require("debug")("algoliasearch:src/hostIndexState.js");
var localStorageNamespace = "algoliasearch-client-js";
var store;
var moduleStore = {
    state: {},
    set: function(key, data) {
        this.state[key] = data;
        return this.state[key];
    },
    get: function(key) {
        return this.state[key] || null;
    }
};
var localStorageStore = {
    set: function(key, data) {
        moduleStore.set(key, data); // always replicate localStorageStore to moduleStore in case of failure
        try {
            var namespace = JSON.parse(global.localStorage[localStorageNamespace]);
            namespace[key] = data;
            global.localStorage[localStorageNamespace] = JSON.stringify(namespace);
            return namespace[key];
        } catch (e) {
            return localStorageFailure(key, e);
        }
    },
    get: function(key) {
        try {
            return JSON.parse(global.localStorage[localStorageNamespace])[key] || null;
        } catch (e) {
            return localStorageFailure(key, e);
        }
    }
};
function localStorageFailure(key, e) {
    debug("localStorage failed with", e);
    cleanup();
    store = moduleStore;
    return store.get(key);
}
store = supportsLocalStorage() ? localStorageStore : moduleStore;
module.exports = {
    get: getOrSet,
    set: getOrSet,
    supportsLocalStorage: supportsLocalStorage
};
function getOrSet(key, data) {
    if (arguments.length === 1) return store.get(key);
    return store.set(key, data);
}
function supportsLocalStorage() {
    try {
        if ("localStorage" in global && global.localStorage !== null) {
            if (!global.localStorage[localStorageNamespace]) // actual creation of the namespace
            global.localStorage.setItem(localStorageNamespace, JSON.stringify({}));
            return true;
        }
        return false;
    } catch (_) {
        return false;
    }
}
// In case of any error on localStorage, we clean our own namespace, this should handle
// quota errors when a lot of keys + data are used
function cleanup() {
    try {
        global.localStorage.removeItem(localStorageNamespace);
    } catch (_) {
    // nothing to do
    }
}

},{"debug":"l0oUb"}],"l0oUb":[function(require,module,exports) {
var process = require("process");
/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */ exports = module.exports = require("./debug");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = "undefined" != typeof chrome && "undefined" != typeof chrome.storage ? chrome.storage.local : localstorage();
/**
 * Colors.
 */ exports.colors = [
    "lightseagreen",
    "forestgreen",
    "goldenrod",
    "dodgerblue",
    "darkorchid",
    "crimson"
];
/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */ function useColors() {
    // NB: In an Electron preload script, document will be defined but not fully
    // initialized. Since we know we're in Chrome, we'll just detect this case
    // explicitly
    if (typeof window !== "undefined" && window.process && window.process.type === "renderer") return true;
    // is webkit? http://stackoverflow.com/a/16459606/376773
    // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    return typeof document !== "undefined" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window !== "undefined" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator !== "undefined" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
}
/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */ exports.formatters.j = function(v) {
    try {
        return JSON.stringify(v);
    } catch (err) {
        return "[UnexpectedJSONParseError]: " + err.message;
    }
};
/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */ function formatArgs(args) {
    var useColors = this.useColors;
    args[0] = (useColors ? "%c" : "") + this.namespace + (useColors ? " %c" : " ") + args[0] + (useColors ? "%c " : " ") + "+" + exports.humanize(this.diff);
    if (!useColors) return;
    var c = "color: " + this.color;
    args.splice(1, 0, c, "color: inherit");
    // the final "%c" is somewhat tricky, because there could be other
    // arguments passed either before or after the %c, so we need to
    // figure out the correct index to insert the CSS into
    var index = 0;
    var lastC = 0;
    args[0].replace(/%[a-zA-Z%]/g, function(match) {
        if ("%%" === match) return;
        index++;
        if ("%c" === match) // we only are interested in the *last* %c
        // (the user may have provided their own)
        lastC = index;
    });
    args.splice(lastC, 0, c);
}
/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */ function log() {
    // this hackery is required for IE8/9, where
    // the `console.log` function doesn't have 'apply'
    return "object" === typeof console && console.log && Function.prototype.apply.call(console.log, console, arguments);
}
/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */ function save(namespaces) {
    try {
        if (null == namespaces) exports.storage.removeItem("debug");
        else exports.storage.debug = namespaces;
    } catch (e) {}
}
/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */ function load() {
    var r;
    try {
        r = exports.storage.debug;
    } catch (e) {}
    // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    if (!r && typeof process !== "undefined" && "env" in process) r = undefined;
    return r;
}
/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */ exports.enable(load());
/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */ function localstorage() {
    try {
        return window.localStorage;
    } catch (e) {}
}

},{"process":"d5jf4","./debug":"W9ObK"}],"d5jf4":[function(require,module,exports) {
// shim for using process in browser
var process = module.exports = {};
// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.
var cachedSetTimeout;
var cachedClearTimeout;
function defaultSetTimout() {
    throw new Error("setTimeout has not been defined");
}
function defaultClearTimeout() {
    throw new Error("clearTimeout has not been defined");
}
(function() {
    try {
        if (typeof setTimeout === "function") cachedSetTimeout = setTimeout;
        else cachedSetTimeout = defaultSetTimout;
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === "function") cachedClearTimeout = clearTimeout;
        else cachedClearTimeout = defaultClearTimeout;
    } catch (e1) {
        cachedClearTimeout = defaultClearTimeout;
    }
})();
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) //normal enviroments in sane situations
    return setTimeout(fun, 0);
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }
}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) //normal enviroments in sane situations
    return clearTimeout(marker);
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e) {
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e1) {
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }
}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;
function cleanUpNextTick() {
    if (!draining || !currentQueue) return;
    draining = false;
    if (currentQueue.length) queue = currentQueue.concat(queue);
    else queueIndex = -1;
    if (queue.length) drainQueue();
}
function drainQueue() {
    if (draining) return;
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;
    var len = queue.length;
    while(len){
        currentQueue = queue;
        queue = [];
        while(++queueIndex < len)if (currentQueue) currentQueue[queueIndex].run();
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}
process.nextTick = function(fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) for(var i = 1; i < arguments.length; i++)args[i - 1] = arguments[i];
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) runTimeout(drainQueue);
};
// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function() {
    this.fun.apply(null, this.array);
};
process.title = "browser";
process.browser = true;
process.env = {};
process.argv = [];
process.version = ""; // empty string to avoid regexp issues
process.versions = {};
function noop() {}
process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;
process.listeners = function(name) {
    return [];
};
process.binding = function(name) {
    throw new Error("process.binding is not supported");
};
process.cwd = function() {
    return "/";
};
process.chdir = function(dir) {
    throw new Error("process.chdir is not supported");
};
process.umask = function() {
    return 0;
};

},{}],"W9ObK":[function(require,module,exports) {
/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */ exports = module.exports = createDebug.debug = createDebug["default"] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = require("ms");
/**
 * The currently active debug mode names, and names to skip.
 */ exports.names = [];
exports.skips = [];
/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */ exports.formatters = {};
/**
 * Previous log timestamp.
 */ var prevTime;
/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */ function selectColor(namespace) {
    var hash = 0, i;
    for(i in namespace){
        hash = (hash << 5) - hash + namespace.charCodeAt(i);
        hash |= 0; // Convert to 32bit integer
    }
    return exports.colors[Math.abs(hash) % exports.colors.length];
}
/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */ function createDebug(namespace) {
    function debug() {
        // disabled?
        if (!debug.enabled) return;
        var self = debug;
        // set `diff` timestamp
        var curr = +new Date();
        var ms = curr - (prevTime || curr);
        self.diff = ms;
        self.prev = prevTime;
        self.curr = curr;
        prevTime = curr;
        // turn the `arguments` into a proper Array
        var args = new Array(arguments.length);
        for(var i = 0; i < args.length; i++)args[i] = arguments[i];
        args[0] = exports.coerce(args[0]);
        if ("string" !== typeof args[0]) // anything else let's inspect with %O
        args.unshift("%O");
        // apply any `formatters` transformations
        var index = 0;
        args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
            // if we encounter an escaped % then don't increase the array index
            if (match === "%%") return match;
            index++;
            var formatter = exports.formatters[format];
            if ("function" === typeof formatter) {
                var val = args[index];
                match = formatter.call(self, val);
                // now we need to remove `args[index]` since it's inlined in the `format`
                args.splice(index, 1);
                index--;
            }
            return match;
        });
        // apply env-specific formatting (colors, etc.)
        exports.formatArgs.call(self, args);
        var logFn = debug.log || exports.log || console.log.bind(console);
        logFn.apply(self, args);
    }
    debug.namespace = namespace;
    debug.enabled = exports.enabled(namespace);
    debug.useColors = exports.useColors();
    debug.color = selectColor(namespace);
    // env-specific initialization logic for debug instances
    if ("function" === typeof exports.init) exports.init(debug);
    return debug;
}
/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */ function enable(namespaces) {
    exports.save(namespaces);
    exports.names = [];
    exports.skips = [];
    var split = (typeof namespaces === "string" ? namespaces : "").split(/[\s,]+/);
    var len = split.length;
    for(var i = 0; i < len; i++){
        if (!split[i]) continue; // ignore empty strings
        namespaces = split[i].replace(/\*/g, ".*?");
        if (namespaces[0] === "-") exports.skips.push(new RegExp("^" + namespaces.substr(1) + "$"));
        else exports.names.push(new RegExp("^" + namespaces + "$"));
    }
}
/**
 * Disable debug output.
 *
 * @api public
 */ function disable() {
    exports.enable("");
}
/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */ function enabled(name) {
    var i, len;
    for(i = 0, len = exports.skips.length; i < len; i++){
        if (exports.skips[i].test(name)) return false;
    }
    for(i = 0, len = exports.names.length; i < len; i++){
        if (exports.names[i].test(name)) return true;
    }
    return false;
}
/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */ function coerce(val) {
    if (val instanceof Error) return val.stack || val.message;
    return val;
}

},{"ms":"jauEe"}],"jauEe":[function(require,module,exports) {
/**
 * Helpers.
 */ var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;
/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */ module.exports = function(val, options) {
    options = options || {};
    var type = typeof val;
    if (type === "string" && val.length > 0) return parse(val);
    else if (type === "number" && isNaN(val) === false) return options.long ? fmtLong(val) : fmtShort(val);
    throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(val));
};
/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */ function parse(str) {
    str = String(str);
    if (str.length > 100) return;
    var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(str);
    if (!match) return;
    var n = parseFloat(match[1]);
    var type = (match[2] || "ms").toLowerCase();
    switch(type){
        case "years":
        case "year":
        case "yrs":
        case "yr":
        case "y":
            return n * y;
        case "days":
        case "day":
        case "d":
            return n * d;
        case "hours":
        case "hour":
        case "hrs":
        case "hr":
        case "h":
            return n * h;
        case "minutes":
        case "minute":
        case "mins":
        case "min":
        case "m":
            return n * m;
        case "seconds":
        case "second":
        case "secs":
        case "sec":
        case "s":
            return n * s;
        case "milliseconds":
        case "millisecond":
        case "msecs":
        case "msec":
        case "ms":
            return n;
        default:
            return undefined;
    }
}
/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtShort(ms) {
    if (ms >= d) return Math.round(ms / d) + "d";
    if (ms >= h) return Math.round(ms / h) + "h";
    if (ms >= m) return Math.round(ms / m) + "m";
    if (ms >= s) return Math.round(ms / s) + "s";
    return ms + "ms";
}
/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */ function fmtLong(ms) {
    return plural(ms, d, "day") || plural(ms, h, "hour") || plural(ms, m, "minute") || plural(ms, s, "second") || ms + " ms";
}
/**
 * Pluralization helper.
 */ function plural(ms, n, name) {
    if (ms < n) return;
    if (ms < n * 1.5) return Math.floor(ms / n) + " " + name;
    return Math.ceil(ms / n) + " " + name + "s";
}

},{}],"a11WD":[function(require,module,exports) {
module.exports = createAnalyticsClient;
var algoliasearch = require("../index.js");
function createAnalyticsClient(appId, apiKey, opts) {
    var analytics = {};
    opts = opts || {};
    // there need to be 4 hosts, like on the client, since if requests fail,
    // the counter goes up by 1, so we need to have the same amount of hosts
    // 4 because: -dsn, -1, -2, -3
    // This is done because the APPID used for search will be the same for the analytics client created,
    // and since the state of available hosts is shared by APPID globally for the module, we had issues
    // where the hostIndex would be 1 while the array was only one entry (you got an empty host)
    opts.hosts = opts.hosts || [
        "analytics.algolia.com",
        "analytics.algolia.com",
        "analytics.algolia.com",
        "analytics.algolia.com"
    ];
    opts.protocol = opts.protocol || "https:";
    analytics.as = algoliasearch(appId, apiKey, opts);
    analytics.getABTests = function(_params, callback) {
        var params = params || {};
        var offset = params.offset || 0;
        var limit = params.limit || 10;
        return this.as._jsonRequest({
            method: "GET",
            url: "/2/abtests?offset=" + encodeURIComponent(offset) + "&limit=" + encodeURIComponent(limit),
            hostType: "read",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.getABTest = function(abTestID, callback) {
        return this.as._jsonRequest({
            method: "GET",
            url: "/2/abtests/" + encodeURIComponent(abTestID),
            hostType: "read",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.addABTest = function(abTest, callback) {
        return this.as._jsonRequest({
            method: "POST",
            url: "/2/abtests",
            body: abTest,
            hostType: "read",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.stopABTest = function(abTestID, callback) {
        return this.as._jsonRequest({
            method: "POST",
            url: "/2/abtests/" + encodeURIComponent(abTestID) + "/stop",
            hostType: "read",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.deleteABTest = function(abTestID, callback) {
        return this.as._jsonRequest({
            method: "DELETE",
            url: "/2/abtests/" + encodeURIComponent(abTestID),
            hostType: "write",
            forceAuthHeaders: true,
            callback: callback
        });
    };
    analytics.waitTask = function(indexName, taskID, callback) {
        return this.as.initIndex(indexName).waitTask(taskID, callback);
    };
    return analytics;
}

},{"../index.js":"iyQxX"}],"eKeLV":[function(require,module,exports) {
"use strict";
var global = require("global");
var Promise = global.Promise || require("es6-promise").Promise;
// This is the standalone browser build entry point
// Browser implementation of the Algolia Search JavaScript client,
// using XMLHttpRequest, XDomainRequest and JSONP as fallback
module.exports = function createAlgoliasearch(AlgoliaSearch, uaSuffix) {
    var inherits = require("inherits");
    var errors = require("../errors");
    var inlineHeaders = require("./inline-headers");
    var jsonpRequest = require("./jsonp-request");
    var places = require("../places.js");
    uaSuffix = uaSuffix || "";
    function algoliasearch(applicationID, apiKey, opts) {
        var cloneDeep = require("../clone.js");
        opts = cloneDeep(opts || {});
        opts._ua = opts._ua || algoliasearch.ua;
        return new AlgoliaSearchBrowser(applicationID, apiKey, opts);
    }
    algoliasearch.version = require("../version.js");
    algoliasearch.ua = "Algolia for JavaScript (" + algoliasearch.version + "); " + uaSuffix;
    algoliasearch.initPlaces = places(algoliasearch);
    // we expose into window no matter how we are used, this will allow
    // us to easily debug any website running algolia
    global.__algolia = {
        debug: require("debug"),
        algoliasearch: algoliasearch
    };
    var support = {
        hasXMLHttpRequest: "XMLHttpRequest" in global,
        hasXDomainRequest: "XDomainRequest" in global
    };
    if (support.hasXMLHttpRequest) support.cors = "withCredentials" in new XMLHttpRequest();
    function AlgoliaSearchBrowser() {
        // call AlgoliaSearch constructor
        AlgoliaSearch.apply(this, arguments);
    }
    inherits(AlgoliaSearchBrowser, AlgoliaSearch);
    AlgoliaSearchBrowser.prototype._request = function request(url, opts) {
        return new Promise(function wrapRequest(resolve, reject) {
            // no cors or XDomainRequest, no request
            if (!support.cors && !support.hasXDomainRequest) {
                // very old browser, not supported
                reject(new errors.Network("CORS not supported"));
                return;
            }
            url = inlineHeaders(url, opts.headers);
            var body = opts.body;
            var req = support.cors ? new XMLHttpRequest() : new XDomainRequest();
            var reqTimeout;
            var timedOut;
            var connected = false;
            reqTimeout = setTimeout(onTimeout, opts.timeouts.connect);
            // we set an empty onprogress listener
            // so that XDomainRequest on IE9 is not aborted
            // refs:
            //  - https://github.com/algolia/algoliasearch-client-js/issues/76
            //  - https://social.msdn.microsoft.com/Forums/ie/en-US/30ef3add-767c-4436-b8a9-f1ca19b4812e/ie9-rtm-xdomainrequest-issued-requests-may-abort-if-all-event-handlers-not-specified?forum=iewebdevelopment
            req.onprogress = onProgress;
            if ("onreadystatechange" in req) req.onreadystatechange = onReadyStateChange;
            req.onload = onLoad;
            req.onerror = onError;
            // do not rely on default XHR async flag, as some analytics code like hotjar
            // breaks it and set it to false by default
            if (req instanceof XMLHttpRequest) {
                req.open(opts.method, url, true);
                // The Analytics API never accepts Auth headers as query string
                // this option exists specifically for them.
                if (opts.forceAuthHeaders) {
                    req.setRequestHeader("x-algolia-application-id", opts.headers["x-algolia-application-id"]);
                    req.setRequestHeader("x-algolia-api-key", opts.headers["x-algolia-api-key"]);
                }
            } else req.open(opts.method, url);
            // headers are meant to be sent after open
            if (support.cors) {
                if (body) {
                    if (opts.method === "POST") // https://developer.mozilla.org/en-US/docs/Web/HTTP/Access_control_CORS#Simple_requests
                    req.setRequestHeader("content-type", "application/x-www-form-urlencoded");
                    else req.setRequestHeader("content-type", "application/json");
                }
                req.setRequestHeader("accept", "application/json");
            }
            if (body) req.send(body);
            else req.send();
            // event object not received in IE8, at least
            // but we do not use it, still important to note
            function onLoad() {
                // When browser does not supports req.timeout, we can
                // have both a load and timeout event, since handled by a dumb setTimeout
                if (timedOut) return;
                clearTimeout(reqTimeout);
                var out;
                try {
                    out = {
                        body: JSON.parse(req.responseText),
                        responseText: req.responseText,
                        statusCode: req.status,
                        // XDomainRequest does not have any response headers
                        headers: req.getAllResponseHeaders && req.getAllResponseHeaders() || {}
                    };
                } catch (e) {
                    out = new errors.UnparsableJSON({
                        more: req.responseText
                    });
                }
                if (out instanceof errors.UnparsableJSON) reject(out);
                else resolve(out);
            }
            function onError(event) {
                if (timedOut) return;
                clearTimeout(reqTimeout);
                // error event is trigerred both with XDR/XHR on:
                //   - DNS error
                //   - unallowed cross domain request
                reject(new errors.Network({
                    more: event
                }));
            }
            function onTimeout() {
                timedOut = true;
                req.abort();
                reject(new errors.RequestTimeout());
            }
            function onConnect() {
                connected = true;
                clearTimeout(reqTimeout);
                reqTimeout = setTimeout(onTimeout, opts.timeouts.complete);
            }
            function onProgress() {
                if (!connected) onConnect();
            }
            function onReadyStateChange() {
                if (!connected && req.readyState > 1) onConnect();
            }
        });
    };
    AlgoliaSearchBrowser.prototype._request.fallback = function requestFallback(url, opts) {
        url = inlineHeaders(url, opts.headers);
        return new Promise(function wrapJsonpRequest(resolve, reject) {
            jsonpRequest(url, opts, function jsonpRequestDone(err, content) {
                if (err) {
                    reject(err);
                    return;
                }
                resolve(content);
            });
        });
    };
    AlgoliaSearchBrowser.prototype._promise = {
        reject: function rejectPromise(val) {
            return Promise.reject(val);
        },
        resolve: function resolvePromise(val) {
            return Promise.resolve(val);
        },
        delay: function delayPromise(ms) {
            return new Promise(function resolveOnTimeout(resolve /* , reject*/ ) {
                setTimeout(resolve, ms);
            });
        },
        all: function all(promises) {
            return Promise.all(promises);
        }
    };
    return algoliasearch;
};

},{"global":"iU6IE","es6-promise":"kDkOs","inherits":"bRL3M","../errors":"6bEkW","./inline-headers":"b8qTb","./jsonp-request":"8dvCX","../places.js":"04eK8","../clone.js":"cxc5w","../version.js":"35Y2H","debug":"l0oUb"}],"iU6IE":[function(require,module,exports) {
var global = arguments[3];
var win;
if (typeof window !== "undefined") win = window;
else if (typeof global !== "undefined") win = global;
else if (typeof self !== "undefined") win = self;
else win = {};
module.exports = win;

},{}],"kDkOs":[function(require,module,exports) {
var global = arguments[3];
var process = require("process");
/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function objectOrFunction(x) {
        var type = typeof x;
        return x !== null && (type === "object" || type === "function");
    }
    function isFunction(x) {
        return typeof x === "function";
    }
    var _isArray = void 0;
    if (Array.isArray) _isArray = Array.isArray;
    else _isArray = function(x) {
        return Object.prototype.toString.call(x) === "[object Array]";
    };
    var isArray = _isArray;
    var len = 0;
    var vertxNext = void 0;
    var customSchedulerFn = void 0;
    var asap = function asap(callback, arg) {
        queue[len] = callback;
        queue[len + 1] = arg;
        len += 2;
        if (len === 2) {
            // If len is 2, that means that we need to schedule an async flush.
            // If additional callbacks are queued before the queue is flushed, they
            // will be processed by this flush that we are scheduling.
            if (customSchedulerFn) customSchedulerFn(flush);
            else scheduleFlush();
        }
    };
    function setScheduler(scheduleFn) {
        customSchedulerFn = scheduleFn;
    }
    function setAsap(asapFn) {
        asap = asapFn;
    }
    var browserWindow = typeof window !== "undefined" ? window : undefined;
    var browserGlobal = browserWindow || {};
    var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
    var isNode = typeof self === "undefined" && typeof process !== "undefined" && ({}).toString.call(process) === "[object process]";
    // test for web worker but not in IE10
    var isWorker = typeof Uint8ClampedArray !== "undefined" && typeof importScripts !== "undefined" && typeof MessageChannel !== "undefined";
    // node
    function useNextTick() {
        // node version 0.10.x displays a deprecation warning when nextTick is used recursively
        // see https://github.com/cujojs/when/issues/410 for details
        return function() {
            return process.nextTick(flush);
        };
    }
    // vertx
    function useVertxTimer() {
        if (typeof vertxNext !== "undefined") return function() {
            vertxNext(flush);
        };
        return useSetTimeout();
    }
    function useMutationObserver() {
        var iterations = 0;
        var observer = new BrowserMutationObserver(flush);
        var node = document.createTextNode("");
        observer.observe(node, {
            characterData: true
        });
        return function() {
            node.data = iterations = ++iterations % 2;
        };
    }
    // web worker
    function useMessageChannel() {
        var channel = new MessageChannel();
        channel.port1.onmessage = flush;
        return function() {
            return channel.port2.postMessage(0);
        };
    }
    function useSetTimeout() {
        // Store setTimeout reference so es6-promise will be unaffected by
        // other code modifying setTimeout (like sinon.useFakeTimers())
        var globalSetTimeout = setTimeout;
        return function() {
            return globalSetTimeout(flush, 1);
        };
    }
    var queue = new Array(1000);
    function flush() {
        for(var i = 0; i < len; i += 2){
            var callback = queue[i];
            var arg = queue[i + 1];
            callback(arg);
            queue[i] = undefined;
            queue[i + 1] = undefined;
        }
        len = 0;
    }
    function attemptVertx() {
        try {
            var vertx = Function("return this")().require("vertx");
            vertxNext = vertx.runOnLoop || vertx.runOnContext;
            return useVertxTimer();
        } catch (e) {
            return useSetTimeout();
        }
    }
    var scheduleFlush = void 0;
    // Decide what async method to use to triggering processing of queued callbacks:
    if (isNode) scheduleFlush = useNextTick();
    else if (BrowserMutationObserver) scheduleFlush = useMutationObserver();
    else if (isWorker) scheduleFlush = useMessageChannel();
    else if (browserWindow === undefined && true) scheduleFlush = attemptVertx();
    else scheduleFlush = useSetTimeout();
    function then(onFulfillment, onRejection) {
        var parent = this;
        var child = new this.constructor(noop);
        if (child[PROMISE_ID] === undefined) makePromise(child);
        var _state = parent._state;
        if (_state) {
            var callback = arguments[_state - 1];
            asap(function() {
                return invokeCallback(_state, child, callback, parent._result);
            });
        } else subscribe(parent, child, onFulfillment, onRejection);
        return child;
    }
    /**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/ function resolve$1(object) {
        /*jshint validthis:true */ var Constructor = this;
        if (object && typeof object === "object" && object.constructor === Constructor) return object;
        var promise = new Constructor(noop);
        resolve(promise, object);
        return promise;
    }
    var PROMISE_ID = Math.random().toString(36).substring(2);
    function noop() {}
    var PENDING = void 0;
    var FULFILLED = 1;
    var REJECTED = 2;
    function selfFulfillment() {
        return new TypeError("You cannot resolve a promise with itself");
    }
    function cannotReturnOwn() {
        return new TypeError("A promises callback cannot return that same promise.");
    }
    function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
        try {
            then$$1.call(value, fulfillmentHandler, rejectionHandler);
        } catch (e) {
            return e;
        }
    }
    function handleForeignThenable(promise, thenable, then$$1) {
        asap(function(promise) {
            var sealed = false;
            var error = tryThen(then$$1, thenable, function(value) {
                if (sealed) return;
                sealed = true;
                if (thenable !== value) resolve(promise, value);
                else fulfill(promise, value);
            }, function(reason) {
                if (sealed) return;
                sealed = true;
                reject(promise, reason);
            }, "Settle: " + (promise._label || " unknown promise"));
            if (!sealed && error) {
                sealed = true;
                reject(promise, error);
            }
        }, promise);
    }
    function handleOwnThenable(promise, thenable) {
        if (thenable._state === FULFILLED) fulfill(promise, thenable._result);
        else if (thenable._state === REJECTED) reject(promise, thenable._result);
        else subscribe(thenable, undefined, function(value) {
            return resolve(promise, value);
        }, function(reason) {
            return reject(promise, reason);
        });
    }
    function handleMaybeThenable(promise, maybeThenable, then$$1) {
        if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) handleOwnThenable(promise, maybeThenable);
        else {
            if (then$$1 === undefined) fulfill(promise, maybeThenable);
            else if (isFunction(then$$1)) handleForeignThenable(promise, maybeThenable, then$$1);
            else fulfill(promise, maybeThenable);
        }
    }
    function resolve(promise, value) {
        if (promise === value) reject(promise, selfFulfillment());
        else if (objectOrFunction(value)) {
            var then$$1 = void 0;
            try {
                then$$1 = value.then;
            } catch (error) {
                reject(promise, error);
                return;
            }
            handleMaybeThenable(promise, value, then$$1);
        } else fulfill(promise, value);
    }
    function publishRejection(promise) {
        if (promise._onerror) promise._onerror(promise._result);
        publish(promise);
    }
    function fulfill(promise, value) {
        if (promise._state !== PENDING) return;
        promise._result = value;
        promise._state = FULFILLED;
        if (promise._subscribers.length !== 0) asap(publish, promise);
    }
    function reject(promise, reason) {
        if (promise._state !== PENDING) return;
        promise._state = REJECTED;
        promise._result = reason;
        asap(publishRejection, promise);
    }
    function subscribe(parent, child, onFulfillment, onRejection) {
        var _subscribers = parent._subscribers;
        var length = _subscribers.length;
        parent._onerror = null;
        _subscribers[length] = child;
        _subscribers[length + FULFILLED] = onFulfillment;
        _subscribers[length + REJECTED] = onRejection;
        if (length === 0 && parent._state) asap(publish, parent);
    }
    function publish(promise) {
        var subscribers = promise._subscribers;
        var settled = promise._state;
        if (subscribers.length === 0) return;
        var child = void 0, callback = void 0, detail = promise._result;
        for(var i = 0; i < subscribers.length; i += 3){
            child = subscribers[i];
            callback = subscribers[i + settled];
            if (child) invokeCallback(settled, child, callback, detail);
            else callback(detail);
        }
        promise._subscribers.length = 0;
    }
    function invokeCallback(settled, promise, callback, detail) {
        var hasCallback = isFunction(callback), value = void 0, error = void 0, succeeded = true;
        if (hasCallback) {
            try {
                value = callback(detail);
            } catch (e) {
                succeeded = false;
                error = e;
            }
            if (promise === value) {
                reject(promise, cannotReturnOwn());
                return;
            }
        } else value = detail;
        if (promise._state !== PENDING) ;
        else if (hasCallback && succeeded) resolve(promise, value);
        else if (succeeded === false) reject(promise, error);
        else if (settled === FULFILLED) fulfill(promise, value);
        else if (settled === REJECTED) reject(promise, value);
    }
    function initializePromise(promise, resolver) {
        try {
            resolver(function resolvePromise(value) {
                resolve(promise, value);
            }, function rejectPromise(reason) {
                reject(promise, reason);
            });
        } catch (e) {
            reject(promise, e);
        }
    }
    var id = 0;
    function nextId() {
        return id++;
    }
    function makePromise(promise) {
        promise[PROMISE_ID] = id++;
        promise._state = undefined;
        promise._result = undefined;
        promise._subscribers = [];
    }
    function validationError() {
        return new Error("Array Methods must be provided an Array");
    }
    var Enumerator = function() {
        function Enumerator(Constructor, input) {
            this._instanceConstructor = Constructor;
            this.promise = new Constructor(noop);
            if (!this.promise[PROMISE_ID]) makePromise(this.promise);
            if (isArray(input)) {
                this.length = input.length;
                this._remaining = input.length;
                this._result = new Array(this.length);
                if (this.length === 0) fulfill(this.promise, this._result);
                else {
                    this.length = this.length || 0;
                    this._enumerate(input);
                    if (this._remaining === 0) fulfill(this.promise, this._result);
                }
            } else reject(this.promise, validationError());
        }
        Enumerator.prototype._enumerate = function _enumerate(input) {
            for(var i = 0; this._state === PENDING && i < input.length; i++)this._eachEntry(input[i], i);
        };
        Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
            var c = this._instanceConstructor;
            var resolve$$1 = c.resolve;
            if (resolve$$1 === resolve$1) {
                var _then = void 0;
                var error = void 0;
                var didError = false;
                try {
                    _then = entry.then;
                } catch (e) {
                    didError = true;
                    error = e;
                }
                if (_then === then && entry._state !== PENDING) this._settledAt(entry._state, i, entry._result);
                else if (typeof _then !== "function") {
                    this._remaining--;
                    this._result[i] = entry;
                } else if (c === Promise$1) {
                    var promise = new c(noop);
                    if (didError) reject(promise, error);
                    else handleMaybeThenable(promise, entry, _then);
                    this._willSettleAt(promise, i);
                } else this._willSettleAt(new c(function(resolve$$1) {
                    return resolve$$1(entry);
                }), i);
            } else this._willSettleAt(resolve$$1(entry), i);
        };
        Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
            var promise = this.promise;
            if (promise._state === PENDING) {
                this._remaining--;
                if (state === REJECTED) reject(promise, value);
                else this._result[i] = value;
            }
            if (this._remaining === 0) fulfill(promise, this._result);
        };
        Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
            var enumerator = this;
            subscribe(promise, undefined, function(value) {
                return enumerator._settledAt(FULFILLED, i, value);
            }, function(reason) {
                return enumerator._settledAt(REJECTED, i, reason);
            });
        };
        return Enumerator;
    }();
    /**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/ function all(entries) {
        return new Enumerator(this, entries).promise;
    }
    /**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/ function race(entries) {
        /*jshint validthis:true */ var Constructor = this;
        if (!isArray(entries)) return new Constructor(function(_, reject) {
            return reject(new TypeError("You must pass an array to race."));
        });
        else return new Constructor(function(resolve, reject) {
            var length = entries.length;
            for(var i = 0; i < length; i++)Constructor.resolve(entries[i]).then(resolve, reject);
        });
    }
    /**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/ function reject$1(reason) {
        /*jshint validthis:true */ var Constructor = this;
        var promise = new Constructor(noop);
        reject(promise, reason);
        return promise;
    }
    function needsResolver() {
        throw new TypeError("You must pass a resolver function as the first argument to the promise constructor");
    }
    function needsNew() {
        throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
    }
    /**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/ var Promise$1 = function() {
        function Promise(resolver) {
            this[PROMISE_ID] = nextId();
            this._result = this._state = undefined;
            this._subscribers = [];
            if (noop !== resolver) {
                typeof resolver !== "function" && needsResolver();
                this instanceof Promise ? initializePromise(this, resolver) : needsNew();
            }
        }
        /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */ /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */ Promise.prototype.catch = function _catch(onRejection) {
            return this.then(null, onRejection);
        };
        /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */ Promise.prototype.finally = function _finally(callback) {
            var promise = this;
            var constructor = promise.constructor;
            if (isFunction(callback)) return promise.then(function(value) {
                return constructor.resolve(callback()).then(function() {
                    return value;
                });
            }, function(reason) {
                return constructor.resolve(callback()).then(function() {
                    throw reason;
                });
            });
            return promise.then(callback, callback);
        };
        return Promise;
    }();
    Promise$1.prototype.then = then;
    Promise$1.all = all;
    Promise$1.race = race;
    Promise$1.resolve = resolve$1;
    Promise$1.reject = reject$1;
    Promise$1._setScheduler = setScheduler;
    Promise$1._setAsap = setAsap;
    Promise$1._asap = asap;
    /*global self*/ function polyfill() {
        var local = void 0;
        if (typeof global !== "undefined") local = global;
        else if (typeof self !== "undefined") local = self;
        else try {
            local = Function("return this")();
        } catch (e) {
            throw new Error("polyfill failed because global object is unavailable in this environment");
        }
        var P = local.Promise;
        if (P) {
            var promiseToString = null;
            try {
                promiseToString = Object.prototype.toString.call(P.resolve());
            } catch (e1) {
            // silently ignored
            }
            if (promiseToString === "[object Promise]" && !P.cast) return;
        }
        local.Promise = Promise$1;
    }
    // Strange compat..
    Promise$1.polyfill = polyfill;
    Promise$1.Promise = Promise$1;
    return Promise$1;
});

},{"process":"d5jf4"}],"b8qTb":[function(require,module,exports) {
"use strict";
module.exports = inlineHeaders;
var encode = require("querystring-es3/encode");
function inlineHeaders(url, headers) {
    if (/\?/.test(url)) url += "&";
    else url += "?";
    return url + encode(headers);
}

},{"querystring-es3/encode":"i5gNM"}],"i5gNM":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
var stringifyPrimitive = function(v) {
    switch(typeof v){
        case "string":
            return v;
        case "boolean":
            return v ? "true" : "false";
        case "number":
            return isFinite(v) ? v : "";
        default:
            return "";
    }
};
module.exports = function(obj, sep, eq, name) {
    sep = sep || "&";
    eq = eq || "=";
    if (obj === null) obj = undefined;
    if (typeof obj === "object") return map(objectKeys(obj), function(k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (isArray(obj[k])) return map(obj[k], function(v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
        }).join(sep);
        else return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
    }).join(sep);
    if (!name) return "";
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === "[object Array]";
};
function map(xs, f) {
    if (xs.map) return xs.map(f);
    var res = [];
    for(var i = 0; i < xs.length; i++)res.push(f(xs[i], i));
    return res;
}
var objectKeys = Object.keys || function(obj) {
    var res = [];
    for(var key in obj)if (Object.prototype.hasOwnProperty.call(obj, key)) res.push(key);
    return res;
};

},{}],"8dvCX":[function(require,module,exports) {
"use strict";
module.exports = jsonpRequest;
var errors = require("../errors");
var JSONPCounter = 0;
function jsonpRequest(url, opts, cb) {
    if (opts.method !== "GET") {
        cb(new Error("Method " + opts.method + " " + url + " is not supported by JSONP."));
        return;
    }
    opts.debug("JSONP: start");
    var cbCalled = false;
    var timedOut = false;
    JSONPCounter += 1;
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    var cbName = "algoliaJSONP_" + JSONPCounter;
    var done = false;
    window[cbName] = function(data) {
        removeGlobals();
        if (timedOut) {
            opts.debug("JSONP: Late answer, ignoring");
            return;
        }
        cbCalled = true;
        clean();
        cb(null, {
            body: data,
            responseText: JSON.stringify(data)
        });
    };
    // add callback by hand
    url += "&callback=" + cbName;
    // add body params manually
    if (opts.jsonBody && opts.jsonBody.params) url += "&" + opts.jsonBody.params;
    var ontimeout = setTimeout(timeout, opts.timeouts.complete);
    // script onreadystatechange needed only for
    // <= IE8
    // https://github.com/angular/angular.js/issues/4523
    script.onreadystatechange = readystatechange;
    script.onload = success;
    script.onerror = error;
    script.async = true;
    script.defer = true;
    script.src = url;
    head.appendChild(script);
    function success() {
        opts.debug("JSONP: success");
        if (done || timedOut) return;
        done = true;
        // script loaded but did not call the fn => script loading error
        if (!cbCalled) {
            opts.debug("JSONP: Fail. Script loaded but did not call the callback");
            clean();
            cb(new errors.JSONPScriptFail());
        }
    }
    function readystatechange() {
        if (this.readyState === "loaded" || this.readyState === "complete") success();
    }
    function clean() {
        clearTimeout(ontimeout);
        script.onload = null;
        script.onreadystatechange = null;
        script.onerror = null;
        head.removeChild(script);
    }
    function removeGlobals() {
        try {
            delete window[cbName];
            delete window[cbName + "_loaded"];
        } catch (e) {
            window[cbName] = window[cbName + "_loaded"] = undefined;
        }
    }
    function timeout() {
        opts.debug("JSONP: Script timeout");
        timedOut = true;
        clean();
        cb(new errors.RequestTimeout());
    }
    function error() {
        opts.debug("JSONP: Script error");
        if (done || timedOut) return;
        clean();
        cb(new errors.JSONPScriptError());
    }
}

},{"../errors":"6bEkW"}],"04eK8":[function(require,module,exports) {
module.exports = createPlacesClient;
var qs3 = require("querystring-es3");
var buildSearchMethod = require("./buildSearchMethod.js");
function createPlacesClient(algoliasearch) {
    return function places(appID, apiKey, opts) {
        var cloneDeep = require("./clone.js");
        opts = opts && cloneDeep(opts) || {};
        opts.hosts = opts.hosts || [
            "places-dsn.algolia.net",
            "places-1.algolianet.com",
            "places-2.algolianet.com",
            "places-3.algolianet.com"
        ];
        // allow initPlaces() no arguments => community rate limited
        if (arguments.length === 0 || typeof appID === "object" || appID === undefined) {
            appID = "";
            apiKey = "";
            opts._allowEmptyCredentials = true;
        }
        var client = algoliasearch(appID, apiKey, opts);
        var index = client.initIndex("places");
        index.search = buildSearchMethod("query", "/1/places/query");
        index.reverse = function(options, callback) {
            var encoded = qs3.encode(options);
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/places/reverse?" + encoded,
                hostType: "read",
                callback: callback
            });
        };
        index.getObject = function(objectID, callback) {
            return this.as._jsonRequest({
                method: "GET",
                url: "/1/places/" + encodeURIComponent(objectID),
                hostType: "read",
                callback: callback
            });
        };
        return index;
    };
}

},{"querystring-es3":"7oCJH","./buildSearchMethod.js":"fGbut","./clone.js":"cxc5w"}],"7oCJH":[function(require,module,exports) {
"use strict";
exports.decode = exports.parse = require("./decode");
exports.encode = exports.stringify = require("./encode");

},{"./decode":"3WtwQ","./encode":"i5gNM"}],"3WtwQ":[function(require,module,exports) {
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.
"use strict";
// If obj.hasOwnProperty has been overridden, then calling
// obj.hasOwnProperty(prop) will break.
// See: https://github.com/joyent/node/issues/1707
function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
}
module.exports = function(qs, sep, eq, options) {
    sep = sep || "&";
    eq = eq || "=";
    var obj = {};
    if (typeof qs !== "string" || qs.length === 0) return obj;
    var regexp = /\+/g;
    qs = qs.split(sep);
    var maxKeys = 1000;
    if (options && typeof options.maxKeys === "number") maxKeys = options.maxKeys;
    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) len = maxKeys;
    for(var i = 0; i < len; ++i){
        var x = qs[i].replace(regexp, "%20"), idx = x.indexOf(eq), kstr, vstr, k, v;
        if (idx >= 0) {
            kstr = x.substr(0, idx);
            vstr = x.substr(idx + 1);
        } else {
            kstr = x;
            vstr = "";
        }
        k = decodeURIComponent(kstr);
        v = decodeURIComponent(vstr);
        if (!hasOwnProperty(obj, k)) obj[k] = v;
        else if (isArray(obj[k])) obj[k].push(v);
        else obj[k] = [
            obj[k],
            v
        ];
    }
    return obj;
};
var isArray = Array.isArray || function(xs) {
    return Object.prototype.toString.call(xs) === "[object Array]";
};

},{}],"35Y2H":[function(require,module,exports) {
"use strict";
module.exports = "3.35.1";

},{}],"bo72L":[function(require,module,exports) {
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
    function getEnumerableOwnPropertySymbols(target) {
        return Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols(target).filter(function(symbol) {
            return target.propertyIsEnumerable(symbol);
        }) : [];
    }
    function getKeys(target) {
        return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target));
    }
    function mergeObject(target, source, options) {
        var destination = {};
        if (options.isMergeableObject(target)) getKeys(target).forEach(function(key) {
            destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
        });
        getKeys(source).forEach(function(key) {
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
    searchClient.search(query, algolia.indexes.settings) //This is just test. Need to make the settings conditional
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

},{"./utils":"en4he","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"en4he":[function(require,module,exports) {
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

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
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

},{}],"lPFSt":[function(require,module,exports) {
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
