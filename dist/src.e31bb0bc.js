// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
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

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
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
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"questions.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animeQuestions = void 0;
var animeQuestions = [{
  img: "https://static3.srcdn.com/wordpress/wp-content/uploads/2020/07/Dragon-Ball-Z-Z-Warriors.jpg?q=50&fit=crop&w=960&h=500&dpr=1.5",
  number: 1,
  question: "Can you name this anime/manga?",
  answers: {
    a: "Goku",
    b: "Super Saiyan",
    c: "Dragon Ball Z",
    d: "Omae Wa"
  },
  correctAnswer: "Dragon Ball Z"
}, {
  img: "https://3.bp.blogspot.com/-ES8-7q_Hc8Q/XYr3JrjyypI/AAAAAAAAmu0/KUppRKNd7qMRDiwqtHb8DDSTHMWWs_e-wCLcBGAsYHQ/s1600/Naruto_Shippuden_Filler_List.png",
  number: 2,
  question: "What is the name of this anime/manga?",
  answers: {
    a: "Naruto",
    b: "Shippuden",
    c: "Ninja",
    d: "Mou Shindeiru"
  },
  correctAnswer: "Naruto"
}, {
  img: "https://www.funimation.com/blog/wp-content/uploads/2020/01/One-Piece-Netflix-Header-1024x707.jpg",
  number: 3,
  question: "Who is this crew led by?",
  answers: {
    a: "Pirate Hunters",
    b: "One Peice",
    c: "Treasure Hunt",
    d: "Monkey D. Luffy"
  },
  correctAnswer: "Monkey D. Luffy"
}, {
  img: "https://static.zerochan.net/Horimiya.full.3074874.jpg",
  number: 4,
  question: "What is the name of this manga?",
  answers: {
    a: "Miyamura",
    b: "Shoujo",
    c: "Watashi wa nihongo wo hanashimasen",
    d: "Horimiya"
  },
  correctAnswer: "Horimiya"
}, {
  img: "https://images.alphacoders.com/605/thumb-1920-605582.png",
  number: 5,
  question: "What is the name of the teacher in this anime?",
  answers: {
    a: "Assasination Classroom",
    b: "Nagisa",
    c: "Koro sensei",
    d: "Octo sensei"
  },
  correctAnswer: "Koro sensei"
}, {
  img: "https://2.bp.blogspot.com/-cEa474kVTHg/XEWWXKmK0zI/AAAAAAAAAf4/w3nD1IQUKaQFqXVnPvwUwumXHZcefCydACLcBGAs/s1600/BF.jpg",
  number: 6,
  question: "What is the name of this anime?",
  answers: {
    a: "Chiken wing",
    b: "Hot dog and baloney",
    c: "Chicken and Macaroni",
    d: "Banana Fish"
  },
  correctAnswer: "Banana Fish"
}, {
  img: "http://res.dilidili8.com/41/91d/4191dc4aa2a67d58c4dda13e7662b01f.jpg",
  number: 7,
  question: "Name the anime/manga.",
  answers: {
    a: "Gomennasai",
    b: "Baccano",
    c: "Miria Harvent",
    d: "Isaac Dian"
  },
  correctAnswer: "Baccano"
}, {
  img: "https://i.pinimg.com/originals/bb/86/de/bb86de85b25973d55e61a755d3f32bb1.jpg",
  number: 8,
  question: "Name the main female character.",
  answers: {
    a: "Kotarou",
    b: "Akane",
    c: "Tsuki ga Kirei",
    d: "Chinatsu"
  },
  correctAnswer: "Akane"
}, {
  img: "https://www.cockburnlibraries.com.au/wp-content/uploads/2020/06/princess-mononoke.jpg",
  number: 9,
  question: "Name the anime.",
  answers: {
    a: "Momonoke",
    b: "Souken",
    c: "Genkai",
    d: "Tokuji"
  },
  correctAnswer: "Momonoke"
}, {
  img: "https://thedeadtoons.com/wp-content/uploads/2020/09/log-horizon-season-3-cast.jpg",
  number: 10,
  question: "Name the anime.",
  answers: {
    a: "Log Horizon",
    b: "Ma rio",
    c: "Camelot",
    d: "Save the Princess!!"
  },
  correctAnswer: "Log Horizon"
}];
exports.animeQuestions = animeQuestions;
},{}],"index.js":[function(require,module,exports) {
"use strict";

var _questions = require("./questions");

var DOMSelectors = {
  quizContainer: document.getElementById('quiz'),
  resultsContainer: document.getElementById('results'),
  submitButton: document.getElementById('submit')
};

var buildQuiz = function buildQuiz() {
  _questions.animeQuestions.forEach(function (item) {
    return DOMSelectors.quizContainer.insertAdjacentHTML("beforeend", "<ul class=\"container\">\n    <li class=\"anime-image\"><img  src=\"".concat(item.img, "\" alt=\"\"></li>\n    <ul class=\"anime-list\">\n      <li class=\"anime-question anime\">Question: ").concat(item.question, "</li>\n    </ul>\n    <ul class=\"anime anime-answers\">Answers:\n      <li>\n        <input type=\"radio\" name=\"").concat(item.number, "\" value=\"").concat(item.answers.a, "\">\n        <label for=\"").concat(item.answers, "\">").concat(item.answers.a, "</label>\n      </li>\n      <li>\n        <input type=\"radio\" name=\"").concat(item.number, "\" value=\"").concat(item.answers.b, "\">\n        <label for=\"").concat(item.answers, "\">").concat(item.answers.b, "</label>\n      </li>\n      <li>\n        <input type=\"radio\" name=\"").concat(item.number, "\" value=\"").concat(item.answers.c, "\">\n        <label for=\"").concat(item.answers, "\">").concat(item.answers.c, "</label>  \n      </li>\n      <li>\n        <input type=\"radio\" name=\"").concat(item.number, "\" value=\"").concat(item.answers.d, "\">\n        <label for=\"").concat(item.answers, "\">").concat(item.answers.d, "</label>  \n      </li>\n    </ul>\n    </ul>"));
  });
};

var showResults = function showResults() {
  var numCorrect = 0;

  _questions.animeQuestions.forEach(function (ques) {
    var userAnswer = document.querySelector("input[name=\"".concat(ques.number, "\"]:checked")).value;

    if (userAnswer === "".concat(ques.correctAnswer)) {
      numCorrect++;
      document.getElementsByClassName("".concat(ques.number)).style.color = "green";
    } else {
      document.getElementsByClassName("".concat(ques.number)).style.color = "red";
    }

    console.log(numCorrect);
    DOMSelectors.resultsContainer.insertAdjacentHTML("beforeend", "<li>".concat(numCorrect, " out of ").concat(_questions.animeQuestions.length, "</li>"));
  });
};
/* const showResults = function(){
  let numCorrect = 0;
  animeQuestions.forEach((ques) => {
    if (document.querySelector(`input[name="${ques.number}"]:checked`)) {
      const userAnswer = document.querySelector(
        `input[name="${ques.number}"]:checked`
      ).value;
      if (userAnswer == `${ques.correctAnswer}`) {
        numCorrect++;
        document.getElementsByClassName(`${ques.number}`).style.color = "green";
      } /* else if (userAnswer != `${ques.correctAnswer}`) {
        document.getElementsByClassName(`${ques.number}`).style.color = "red";
      console.log(ques.number);
      } 
    
    };
  DOMSelectors.resultsContainer.insertAdjacentHTML(
    "beforeend", `<li>${numCorrect} out of ${animeQuestions.length}</li>`);
});
} */


DOMSelectors.submitButton.addEventListener('click', showResults);
buildQuiz();
},{"./questions":"questions.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "1977" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map