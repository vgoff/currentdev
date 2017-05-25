webpackJsonp([0],[
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\client.js';

  // Re-render the app when window.location changes
  var onLocationChange = function () {
    var _ref = (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee(location) {
      var route;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              // Remember the latest scroll position for the previous location
              scrollPositionsHistory[currentLocation.key] = {
                scrollX: window.pageXOffset,
                scrollY: window.pageYOffset
              };
              // Delete stored scroll position for next page if any
              if (_history2.default.action === 'PUSH') {
                delete scrollPositionsHistory[location.key];
              }
              currentLocation = location;

              _context.prev = 3;
              _context.next = 6;
              return _universalRouter2.default.resolve(routes, {
                path: location.pathname,
                query: _queryString2.default.parse(location.search)
              });

            case 6:
              route = _context.sent;

              if (!(currentLocation.key !== location.key)) {
                _context.next = 9;
                break;
              }

              return _context.abrupt('return');

            case 9:
              if (!route.redirect) {
                _context.next = 12;
                break;
              }

              _history2.default.replace(route.redirect);
              return _context.abrupt('return');

            case 12:

              appInstance = _reactDom2.default.render(_react2.default.createElement(
                _App2.default,
                { context: context, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 140
                  },
                  __self: this
                },
                route.component
              ), container, function () {
                return onRenderComplete(route, location);
              });
              _context.next = 26;
              break;

            case 15:
              _context.prev = 15;
              _context.t0 = _context['catch'](3);

              console.error(_context.t0); // eslint-disable-line no-console

              // Current url has been changed during navigation process, do nothing

              if (!(currentLocation.key !== location.key)) {
                _context.next = 20;
                break;
              }

              return _context.abrupt('return');

            case 20:
              if (false) {
                _context.next = 25;
                break;
              }

              appInstance = null;
              document.title = 'Error: ' + _context.t0.message;
              _reactDom2.default.render(_react2.default.createElement(_devUtils.ErrorReporter, { error: _context.t0, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 156
                },
                __self: this
              }), container);
              return _context.abrupt('return');

            case 25:

              // Avoid broken navigation in production mode by a full page reload on error
              window.location.reload();

            case 26:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, this, [[3, 15]]);
    }));

    return function onLocationChange(_x) {
      return _ref.apply(this, arguments);
    };
  }();

  // Handle client-side navigation by using HTML5 History API
  // For more information visit https://github.com/mjackson/history#readme


  __webpack_require__(70);

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(400);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _fastclick = __webpack_require__(546);

  var _fastclick2 = _interopRequireDefault(_fastclick);

  var _universalRouter = __webpack_require__(547);

  var _universalRouter2 = _interopRequireDefault(_universalRouter);

  var _queryString = __webpack_require__(572);

  var _queryString2 = _interopRequireDefault(_queryString);

  var _PathUtils = __webpack_require__(574);

  var _history = __webpack_require__(575);

  var _history2 = _interopRequireDefault(_history);

  var _App = __webpack_require__(584);

  var _App2 = _interopRequireDefault(_App);

  var _devUtils = __webpack_require__(615);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // Global (context) variables that can be easily accessed from any React component
  // https://facebook.github.io/react/docs/context.html
  var context = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: function insertCss() {
      for (var _len = arguments.length, styles = Array(_len), _key = 0; _key < _len; _key++) {
        styles[_key] = arguments[_key];
      }

      // eslint-disable-next-line no-underscore-dangle
      var removeCss = styles.map(function (x) {
        return x._insertCss();
      });
      return function () {
        removeCss.forEach(function (f) {
          return f();
        });
      };
    }
  };

  function updateTag(tagName, keyName, keyValue, attrName, attrValue) {
    var node = document.head.querySelector(tagName + '[' + keyName + '="' + keyValue + '"]');
    if (node && node.getAttribute(attrName) === attrValue) return;

    // Remove and create a new tag in order to make it work with bookmarks in Safari
    if (node) {
      node.parentNode.removeChild(node);
    }
    if (typeof attrValue === 'string') {
      var nextNode = document.createElement(tagName);
      nextNode.setAttribute(keyName, keyValue);
      nextNode.setAttribute(attrName, attrValue);
      document.head.appendChild(nextNode);
    }
  }
  function updateMeta(name, content) {
    updateTag('meta', 'name', name, 'content', content);
  }
  function updateCustomMeta(property, content) {
    // eslint-disable-line no-unused-vars
    updateTag('meta', 'property', property, 'content', content);
  }
  function updateLink(rel, href) {
    // eslint-disable-line no-unused-vars
    updateTag('link', 'rel', rel, 'href', href);
  }

  // Switch off the native scroll restoration behavior and handle it manually
  // https://developers.google.com/web/updates/2015/09/history-api-scroll-restoration
  var scrollPositionsHistory = {};
  if (window.history && 'scrollRestoration' in window.history) {
    window.history.scrollRestoration = 'manual';
  }

  var onRenderComplete = function initialRenderComplete() {
    var elem = document.getElementById('css');
    if (elem) elem.parentNode.removeChild(elem);
    onRenderComplete = function renderComplete(route, location) {
      document.title = route.title;

      updateMeta('description', route.description);
      // Update necessary tags in <head> at runtime here, ie:
      // updateMeta('keywords', route.keywords);
      // updateCustomMeta('og:url', route.canonicalUrl);
      // updateCustomMeta('og:image', route.imageUrl);
      // updateLink('canonical', route.canonicalUrl);
      // etc.

      var scrollX = 0;
      var scrollY = 0;
      var pos = scrollPositionsHistory[location.key];
      if (pos) {
        scrollX = pos.scrollX;
        scrollY = pos.scrollY;
      } else {
        var targetHash = location.hash.substr(1);
        if (targetHash) {
          var target = document.getElementById(targetHash);
          if (target) {
            scrollY = window.pageYOffset + target.getBoundingClientRect().top;
          }
        }
      }

      // Restore the scroll position if it was saved into the state
      // or scroll to the given #hash anchor
      // or scroll to top of the page
      window.scrollTo(scrollX, scrollY);

      // Google Analytics tracking. Don't send 'pageview' event after
      // the initial rendering, as it was already sent
      if (window.ga) {
        window.ga('send', 'pageview', (0, _PathUtils.createPath)(location));
      }
    };
  };

  // Make taps on links and buttons work fast on mobiles
  _fastclick2.default.attach(document.body);

  var container = document.getElementById('app');
  var appInstance = void 0;
  var currentLocation = _history2.default.location;
  var routes = __webpack_require__(623).default;_history2.default.listen(onLocationChange);
  onLocationChange(currentLocation);

  // Enable Hot Module Replacement (HMR)
  if (false) {
    module.hot.accept('./routes', function () {
      routes = require('./routes').default; // eslint-disable-line global-require

      if (appInstance) {
        try {
          // Force-update the whole tree, including components that refuse to update
          (0, _devUtils.deepForceUpdate)(appInstance);
        } catch (error) {
          appInstance = null;
          document.title = 'Hot Update Error: ' + error.message;
          _reactDom2.default.render(_react2.default.createElement(_devUtils.ErrorReporter, { error: error, __source: {
              fileName: _jsxFileName,
              lineNumber: 182
            },
            __self: undefined
          }), container);
          return;
        }
      }

      onLocationChange(currentLocation);
    });
  }

/***/ }),
/* 1 */,
/* 2 */,
/* 3 */,
/* 4 */,
/* 5 */,
/* 6 */,
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */,
/* 51 */,
/* 52 */,
/* 53 */,
/* 54 */,
/* 55 */,
/* 56 */,
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */,
/* 90 */,
/* 91 */,
/* 92 */,
/* 93 */,
/* 94 */,
/* 95 */,
/* 96 */,
/* 97 */,
/* 98 */,
/* 99 */,
/* 100 */,
/* 101 */,
/* 102 */,
/* 103 */,
/* 104 */,
/* 105 */,
/* 106 */,
/* 107 */,
/* 108 */,
/* 109 */,
/* 110 */,
/* 111 */,
/* 112 */,
/* 113 */,
/* 114 */,
/* 115 */,
/* 116 */,
/* 117 */,
/* 118 */,
/* 119 */,
/* 120 */,
/* 121 */,
/* 122 */,
/* 123 */,
/* 124 */,
/* 125 */,
/* 126 */,
/* 127 */,
/* 128 */,
/* 129 */,
/* 130 */,
/* 131 */,
/* 132 */,
/* 133 */,
/* 134 */,
/* 135 */,
/* 136 */,
/* 137 */,
/* 138 */,
/* 139 */,
/* 140 */,
/* 141 */,
/* 142 */,
/* 143 */,
/* 144 */,
/* 145 */,
/* 146 */,
/* 147 */,
/* 148 */,
/* 149 */,
/* 150 */,
/* 151 */,
/* 152 */,
/* 153 */,
/* 154 */,
/* 155 */,
/* 156 */,
/* 157 */,
/* 158 */,
/* 159 */,
/* 160 */,
/* 161 */,
/* 162 */,
/* 163 */,
/* 164 */,
/* 165 */,
/* 166 */,
/* 167 */,
/* 168 */,
/* 169 */,
/* 170 */,
/* 171 */,
/* 172 */,
/* 173 */,
/* 174 */,
/* 175 */,
/* 176 */,
/* 177 */,
/* 178 */,
/* 179 */,
/* 180 */,
/* 181 */,
/* 182 */,
/* 183 */,
/* 184 */,
/* 185 */,
/* 186 */,
/* 187 */,
/* 188 */,
/* 189 */,
/* 190 */,
/* 191 */,
/* 192 */,
/* 193 */,
/* 194 */,
/* 195 */,
/* 196 */,
/* 197 */,
/* 198 */,
/* 199 */,
/* 200 */,
/* 201 */,
/* 202 */,
/* 203 */,
/* 204 */,
/* 205 */,
/* 206 */,
/* 207 */,
/* 208 */,
/* 209 */,
/* 210 */,
/* 211 */,
/* 212 */,
/* 213 */,
/* 214 */,
/* 215 */,
/* 216 */,
/* 217 */,
/* 218 */,
/* 219 */,
/* 220 */,
/* 221 */,
/* 222 */,
/* 223 */,
/* 224 */,
/* 225 */,
/* 226 */,
/* 227 */,
/* 228 */,
/* 229 */,
/* 230 */,
/* 231 */,
/* 232 */,
/* 233 */,
/* 234 */,
/* 235 */,
/* 236 */,
/* 237 */,
/* 238 */,
/* 239 */,
/* 240 */,
/* 241 */,
/* 242 */,
/* 243 */,
/* 244 */,
/* 245 */,
/* 246 */,
/* 247 */,
/* 248 */,
/* 249 */,
/* 250 */,
/* 251 */,
/* 252 */,
/* 253 */,
/* 254 */,
/* 255 */,
/* 256 */,
/* 257 */,
/* 258 */,
/* 259 */,
/* 260 */,
/* 261 */,
/* 262 */,
/* 263 */,
/* 264 */,
/* 265 */,
/* 266 */,
/* 267 */,
/* 268 */,
/* 269 */,
/* 270 */,
/* 271 */,
/* 272 */,
/* 273 */,
/* 274 */,
/* 275 */,
/* 276 */,
/* 277 */,
/* 278 */,
/* 279 */,
/* 280 */,
/* 281 */,
/* 282 */,
/* 283 */,
/* 284 */,
/* 285 */,
/* 286 */,
/* 287 */,
/* 288 */,
/* 289 */,
/* 290 */,
/* 291 */,
/* 292 */,
/* 293 */,
/* 294 */,
/* 295 */,
/* 296 */,
/* 297 */,
/* 298 */,
/* 299 */,
/* 300 */,
/* 301 */,
/* 302 */,
/* 303 */,
/* 304 */,
/* 305 */,
/* 306 */,
/* 307 */,
/* 308 */,
/* 309 */,
/* 310 */,
/* 311 */,
/* 312 */,
/* 313 */,
/* 314 */,
/* 315 */,
/* 316 */,
/* 317 */,
/* 318 */,
/* 319 */,
/* 320 */,
/* 321 */,
/* 322 */,
/* 323 */,
/* 324 */,
/* 325 */,
/* 326 */,
/* 327 */,
/* 328 */,
/* 329 */,
/* 330 */,
/* 331 */,
/* 332 */,
/* 333 */,
/* 334 */,
/* 335 */,
/* 336 */,
/* 337 */,
/* 338 */,
/* 339 */,
/* 340 */,
/* 341 */,
/* 342 */,
/* 343 */,
/* 344 */,
/* 345 */,
/* 346 */,
/* 347 */,
/* 348 */,
/* 349 */,
/* 350 */,
/* 351 */,
/* 352 */,
/* 353 */,
/* 354 */,
/* 355 */,
/* 356 */,
/* 357 */,
/* 358 */,
/* 359 */,
/* 360 */,
/* 361 */,
/* 362 */,
/* 363 */,
/* 364 */,
/* 365 */,
/* 366 */,
/* 367 */,
/* 368 */,
/* 369 */,
/* 370 */,
/* 371 */,
/* 372 */,
/* 373 */,
/* 374 */,
/* 375 */,
/* 376 */,
/* 377 */,
/* 378 */,
/* 379 */,
/* 380 */,
/* 381 */,
/* 382 */,
/* 383 */,
/* 384 */,
/* 385 */,
/* 386 */,
/* 387 */,
/* 388 */,
/* 389 */,
/* 390 */,
/* 391 */,
/* 392 */,
/* 393 */,
/* 394 */,
/* 395 */,
/* 396 */,
/* 397 */,
/* 398 */,
/* 399 */,
/* 400 */,
/* 401 */,
/* 402 */,
/* 403 */,
/* 404 */,
/* 405 */,
/* 406 */,
/* 407 */,
/* 408 */,
/* 409 */,
/* 410 */,
/* 411 */,
/* 412 */,
/* 413 */,
/* 414 */,
/* 415 */,
/* 416 */,
/* 417 */,
/* 418 */,
/* 419 */,
/* 420 */,
/* 421 */,
/* 422 */,
/* 423 */,
/* 424 */,
/* 425 */,
/* 426 */,
/* 427 */,
/* 428 */,
/* 429 */,
/* 430 */,
/* 431 */,
/* 432 */,
/* 433 */,
/* 434 */,
/* 435 */,
/* 436 */,
/* 437 */,
/* 438 */,
/* 439 */,
/* 440 */,
/* 441 */,
/* 442 */,
/* 443 */,
/* 444 */,
/* 445 */,
/* 446 */,
/* 447 */,
/* 448 */,
/* 449 */,
/* 450 */,
/* 451 */,
/* 452 */,
/* 453 */,
/* 454 */,
/* 455 */,
/* 456 */,
/* 457 */,
/* 458 */,
/* 459 */,
/* 460 */,
/* 461 */,
/* 462 */,
/* 463 */,
/* 464 */,
/* 465 */,
/* 466 */,
/* 467 */,
/* 468 */,
/* 469 */,
/* 470 */,
/* 471 */,
/* 472 */,
/* 473 */,
/* 474 */,
/* 475 */,
/* 476 */,
/* 477 */,
/* 478 */,
/* 479 */,
/* 480 */,
/* 481 */,
/* 482 */,
/* 483 */,
/* 484 */,
/* 485 */,
/* 486 */,
/* 487 */,
/* 488 */,
/* 489 */,
/* 490 */,
/* 491 */,
/* 492 */,
/* 493 */,
/* 494 */,
/* 495 */,
/* 496 */,
/* 497 */,
/* 498 */,
/* 499 */,
/* 500 */,
/* 501 */,
/* 502 */,
/* 503 */,
/* 504 */,
/* 505 */,
/* 506 */,
/* 507 */,
/* 508 */,
/* 509 */,
/* 510 */,
/* 511 */,
/* 512 */,
/* 513 */,
/* 514 */,
/* 515 */,
/* 516 */,
/* 517 */,
/* 518 */,
/* 519 */,
/* 520 */,
/* 521 */,
/* 522 */,
/* 523 */,
/* 524 */,
/* 525 */,
/* 526 */,
/* 527 */,
/* 528 */,
/* 529 */,
/* 530 */,
/* 531 */,
/* 532 */,
/* 533 */,
/* 534 */,
/* 535 */,
/* 536 */,
/* 537 */,
/* 538 */,
/* 539 */,
/* 540 */,
/* 541 */,
/* 542 */,
/* 543 */,
/* 544 */,
/* 545 */,
/* 546 */,
/* 547 */,
/* 548 */,
/* 549 */,
/* 550 */,
/* 551 */,
/* 552 */,
/* 553 */,
/* 554 */,
/* 555 */,
/* 556 */,
/* 557 */,
/* 558 */,
/* 559 */,
/* 560 */,
/* 561 */,
/* 562 */,
/* 563 */,
/* 564 */,
/* 565 */,
/* 566 */,
/* 567 */,
/* 568 */,
/* 569 */,
/* 570 */,
/* 571 */,
/* 572 */,
/* 573 */,
/* 574 */,
/* 575 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createBrowserHistory = __webpack_require__(576);

  var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  // Navigation manager, e.g. history.push('/home')
  // https://github.com/mjackson/history
  exports.default = (true) && (0, _createBrowserHistory2.default)();

/***/ }),
/* 576 */,
/* 577 */,
/* 578 */,
/* 579 */,
/* 580 */,
/* 581 */,
/* 582 */,
/* 583 */,
/* 584 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ContextType = {
    // Enables critical path CSS rendering
    // https://github.com/kriasoft/isomorphic-style-loader
    insertCss: _react.PropTypes.func.isRequired
  };

  /**
   * The top-level React component setting context (global) variables
   * that can be accessed from all the child components.
   *
   * https://facebook.github.io/react/docs/context.html
   *
   * Usage example:
   *
   *   const context = {
   *     history: createBrowserHistory(),
   *     store: createStore(),
   *   };
   *
   *   ReactDOM.render(
   *     <App context={context}>
   *       <Layout>
   *         <LandingPage />
   *       </Layout>
   *     </App>,
   *     container,
   *   );
   */

  var App = function (_React$PureComponent) {
    (0, _inherits3.default)(App, _React$PureComponent);

    function App() {
      (0, _classCallCheck3.default)(this, App);
      return (0, _possibleConstructorReturn3.default)(this, (App.__proto__ || (0, _getPrototypeOf2.default)(App)).apply(this, arguments));
    }

    (0, _createClass3.default)(App, [{
      key: 'getChildContext',
      value: function getChildContext() {
        return this.props.context;
      }
    }, {
      key: 'render',
      value: function render() {
        // NOTE: If you need to add or modify header, footer etc. of the app,
        // please do that inside the Layout component.
        return _react2.default.Children.only(this.props.children);
      }
    }]);
    return App;
  }(_react2.default.PureComponent);

  App.propTypes = {
    context: _react.PropTypes.shape(ContextType).isRequired,
    children: _react.PropTypes.element.isRequired
  };
  App.childContextTypes = ContextType;
    exports.default = App;

/***/ }),
/* 585 */,
/* 586 */,
/* 587 */,
/* 588 */,
/* 589 */,
/* 590 */,
/* 591 */,
/* 592 */,
/* 593 */,
/* 594 */,
/* 595 */,
/* 596 */,
/* 597 */,
/* 598 */,
/* 599 */,
/* 600 */,
/* 601 */,
/* 602 */,
/* 603 */,
/* 604 */,
/* 605 */,
/* 606 */,
/* 607 */,
/* 608 */,
/* 609 */,
/* 610 */,
/* 611 */,
/* 612 */,
/* 613 */,
/* 614 */,
/* 615 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  /* eslint-disable global-require */

  if (true) {
    module.exports = {
      // The red box (aka red screen of death) component to display your errors
      // https://github.com/commissure/redbox-react
      ErrorReporter: __webpack_require__(616).default,

      // Force-updates React component tree recursively
      // https://github.com/gaearon/react-deep-force-update
      deepForceUpdate: __webpack_require__(622)
    };
    }

/***/ }),
/* 616 */,
/* 617 */,
/* 618 */,
/* 619 */,
/* 620 */,
/* 621 */,
/* 622 */,
/* 623 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  /* eslint-disable global-require */

  // The top-level (parent) route
  exports.default = {

    path: '/',

    // Keep in mind, routes are evaluated in order
    children: [__webpack_require__(624).default, __webpack_require__(1235).default, __webpack_require__(1239).default, __webpack_require__(1244).default, __webpack_require__(1398).default, __webpack_require__(1408).default, __webpack_require__(1421).default, __webpack_require__(1434).default, __webpack_require__(1444).default, __webpack_require__(1454).default, __webpack_require__(1467).default, __webpack_require__(1477).default, __webpack_require__(1490).default, __webpack_require__(1500).default, __webpack_require__(1513).default, __webpack_require__(1523).default, __webpack_require__(1536).default, __webpack_require__(1546).default, __webpack_require__(1559).default, __webpack_require__(1569).default, __webpack_require__(1582).default, __webpack_require__(1592).default,

    // Wildcard routes, e.g. { path: '*', ... } (must go last)
    __webpack_require__(1605).default],

    action: function action(_ref) {
      var _this = this;

      var next = _ref.next;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var route;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return next();

              case 2:
                route = _context.sent;


                // Provide default values for title, description etc.
                route.title = '' + (route.title || 'Untitled Page');
                route.description = route.description || '';

                return _context.abrupt('return', route);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 624 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\home\\index.js'; // Load the parent level Home component
  //import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Home = __webpack_require__(625);

  var _Home2 = _interopRequireDefault(_Home);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/',

    action: function action() {
      return {
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(_Home2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          })
        ) };
    }
    };

/***/ }),
/* 625 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\home\\Home.js'; // Get the actual homepage component

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Render = __webpack_require__(626);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Home = __webpack_require__(1197);

  var _Home2 = _interopRequireDefault(_Home);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var HomeWrapper = function (_React$Component) {
    (0, _inherits3.default)(HomeWrapper, _React$Component);

    function HomeWrapper() {
      (0, _classCallCheck3.default)(this, HomeWrapper);
      return (0, _possibleConstructorReturn3.default)(this, (HomeWrapper.__proto__ || (0, _getPrototypeOf2.default)(HomeWrapper)).apply(this, arguments));
    }

    (0, _createClass3.default)(HomeWrapper, [{
      key: 'render',
      // This is the homepage/parent level wrapper
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Home2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Home2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              },
              __self: this
            })
          )
        );
      }
    }]);
    return HomeWrapper;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Home2.default)(HomeWrapper);

/***/ }),
/* 626 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _extends2 = __webpack_require__(627);

  var _extends3 = _interopRequireDefault(_extends2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Home\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _reactSlick = __webpack_require__(1161);

  var _reactSlick2 = _interopRequireDefault(_reactSlick);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1184);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',
      value: function render() {

        var options = [{ text: 'All', value: 'all' }, { text: 'Articles', value: 'articles' }, { text: 'Products', value: 'products' }];

        var settings = {
          dots: true,
          infinite: false,
          speed: 500,
          slidesToShow: 4,
          initialSlide: 0,
          responsive: [{
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              //slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          }, {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              //slidesToScroll: 2,
              initialSlide: 2
            }
          }, {
            breakpoint: 480,
            settings: {
              slidesToShow: 1
            }
          }]
        };

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 48
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 49
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Render2.default.top, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 50
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Render2.default.filters, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 51
                  },
                  __self: this
                },
                _react2.default.createElement(
                  _semanticUiReact.Input,
                  { fluid: true, type: 'text', placeholder: 'Search...', action: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 52
                    },
                    __self: this
                  },
                  _react2.default.createElement('input', {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 53
                    },
                    __self: this
                  }),
                  _react2.default.createElement(_semanticUiReact.Select, { compact: true, options: options, defaultValue: 'articles', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 54
                    },
                    __self: this
                  }),
                  _react2.default.createElement(_semanticUiReact.Select, { compact: true, options: options, defaultValue: 'products', __source: {
                      fileName: _jsxFileName,
                      lineNumber: 55
                    },
                    __self: this
                  })
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Render2.default.bottom, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 59
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Render2.default.activity, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 60
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h2',
                  { className: _Render2.default.activityTitle, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: this
                  },
                  'New Events'
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Render2.default.sliderWrapper, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 62
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    _reactSlick2.default,
                    (0, _extends3.default)({}, settings, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 63
                      },
                      __self: this
                    }),
                    _react2.default.createElement(
                      'a',
                      { className: _Render2.default.sliderItem, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 64
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'div',
                        { className: _Render2.default.image, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'h3',
                          { className: _Render2.default.title, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 66
                            },
                            __self: this
                          },
                          'Event 1'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _Render2.default.meta, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 68
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'span',
                          { className: _Render2.default.childTitle, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 68
                            },
                            __self: this
                          },
                          'When:'
                        ),
                        '4:00PM'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _Render2.default.meta, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'span',
                          { className: _Render2.default.childTitle, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 69
                            },
                            __self: this
                          },
                          'Where:'
                        ),
                        'Ocean Springs'
                      )
                    ),
                    _react2.default.createElement(
                      'a',
                      { className: _Render2.default.sliderItem, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 71
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'div',
                        { className: _Render2.default.image, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 72
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'h3',
                          { className: _Render2.default.title, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 73
                            },
                            __self: this
                          },
                          'Another Event'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _Render2.default.meta, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 75
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'span',
                          { className: _Render2.default.childTitle, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 75
                            },
                            __self: this
                          },
                          'When:'
                        ),
                        '9:00AM'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _Render2.default.meta, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 76
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'span',
                          { className: _Render2.default.childTitle, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 76
                            },
                            __self: this
                          },
                          'Where:'
                        ),
                        'Biloxi'
                      )
                    ),
                    _react2.default.createElement(
                      'a',
                      { className: _Render2.default.sliderItem, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 78
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'div',
                        { className: _Render2.default.image, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 79
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'h3',
                          { className: _Render2.default.title, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 80
                            },
                            __self: this
                          },
                          'More'
                        )
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _Render2.default.meta, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 82
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'span',
                          { className: _Render2.default.childTitle, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 82
                            },
                            __self: this
                          },
                          'When:'
                        ),
                        '8:00PM'
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: _Render2.default.meta, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 83
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'span',
                          { className: _Render2.default.childTitle, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 83
                            },
                            __self: this
                          },
                          'Where:'
                        ),
                        'Ocean Springs'
                      )
                    )
                  )
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: _Render2.default.more, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 89
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Render2.default.titleWrapper, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 90
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h2',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 91
                    },
                    __self: this
                  },
                  'What are you looking for?'
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _Render2.default.moreOptions, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 93
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'div',
                  { className: _Render2.default.option, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 94
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'a',
                    { className: _Render2.default.inner, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 95
                      },
                      __self: this
                    },
                    _react2.default.createElement('div', { className: _Render2.default.moreImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 96
                      },
                      __self: this
                    }),
                    _react2.default.createElement(
                      'span',
                      { className: _Render2.default.optionName, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 97
                        },
                        __self: this
                      },
                      'Jobs'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Render2.default.option, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 100
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'a',
                    { className: _Render2.default.inner, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 101
                      },
                      __self: this
                    },
                    _react2.default.createElement('div', { className: _Render2.default.moreImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 102
                      },
                      __self: this
                    }),
                    _react2.default.createElement(
                      'span',
                      { className: _Render2.default.optionName, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 103
                        },
                        __self: this
                      },
                      'Lodging'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Render2.default.option, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 106
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'a',
                    { className: _Render2.default.inner, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 107
                      },
                      __self: this
                    },
                    _react2.default.createElement('div', { className: _Render2.default.moreImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 108
                      },
                      __self: this
                    }),
                    _react2.default.createElement(
                      'span',
                      { className: _Render2.default.optionName, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 109
                        },
                        __self: this
                      },
                      'Things to do'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Render2.default.option, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 112
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'a',
                    { className: _Render2.default.inner, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 113
                      },
                      __self: this
                    },
                    _react2.default.createElement('div', { className: _Render2.default.moreImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 114
                      },
                      __self: this
                    }),
                    _react2.default.createElement(
                      'span',
                      { className: _Render2.default.optionName, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 115
                        },
                        __self: this
                      },
                      'Events'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Render2.default.option, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 118
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'a',
                    { className: _Render2.default.inner, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 119
                      },
                      __self: this
                    },
                    _react2.default.createElement('div', { className: _Render2.default.moreImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 120
                      },
                      __self: this
                    }),
                    _react2.default.createElement(
                      'span',
                      { className: _Render2.default.optionName, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 121
                        },
                        __self: this
                      },
                      'Restaurants'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Render2.default.option, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 124
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'a',
                    { className: _Render2.default.inner, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 125
                      },
                      __self: this
                    },
                    _react2.default.createElement('div', { className: _Render2.default.moreImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 126
                      },
                      __self: this
                    }),
                    _react2.default.createElement(
                      'span',
                      { className: _Render2.default.optionName, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 127
                        },
                        __self: this
                      },
                      'Real Estate'
                    )
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Render2.default.option, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 130
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'a',
                    { className: _Render2.default.inner, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 131
                      },
                      __self: this
                    },
                    _react2.default.createElement('div', { className: _Render2.default.moreImg, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 132
                      },
                      __self: this
                    }),
                    _react2.default.createElement(
                      'span',
                      { className: _Render2.default.optionName, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 133
                        },
                        __self: this
                      },
                      'Classifieds'
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 627 */,
/* 628 */,
/* 629 */,
/* 630 */,
/* 631 */,
/* 632 */,
/* 633 */,
/* 634 */,
/* 635 */,
/* 636 */,
/* 637 */,
/* 638 */,
/* 639 */,
/* 640 */,
/* 641 */,
/* 642 */,
/* 643 */,
/* 644 */,
/* 645 */,
/* 646 */,
/* 647 */,
/* 648 */,
/* 649 */,
/* 650 */,
/* 651 */,
/* 652 */,
/* 653 */,
/* 654 */,
/* 655 */,
/* 656 */,
/* 657 */,
/* 658 */,
/* 659 */,
/* 660 */,
/* 661 */,
/* 662 */,
/* 663 */,
/* 664 */,
/* 665 */,
/* 666 */,
/* 667 */,
/* 668 */,
/* 669 */,
/* 670 */,
/* 671 */,
/* 672 */,
/* 673 */,
/* 674 */,
/* 675 */,
/* 676 */,
/* 677 */,
/* 678 */,
/* 679 */,
/* 680 */,
/* 681 */,
/* 682 */,
/* 683 */,
/* 684 */,
/* 685 */,
/* 686 */,
/* 687 */,
/* 688 */,
/* 689 */,
/* 690 */,
/* 691 */,
/* 692 */,
/* 693 */,
/* 694 */,
/* 695 */,
/* 696 */,
/* 697 */,
/* 698 */,
/* 699 */,
/* 700 */,
/* 701 */,
/* 702 */,
/* 703 */,
/* 704 */,
/* 705 */,
/* 706 */,
/* 707 */,
/* 708 */,
/* 709 */,
/* 710 */,
/* 711 */,
/* 712 */,
/* 713 */,
/* 714 */,
/* 715 */,
/* 716 */,
/* 717 */,
/* 718 */,
/* 719 */,
/* 720 */,
/* 721 */,
/* 722 */,
/* 723 */,
/* 724 */,
/* 725 */,
/* 726 */,
/* 727 */,
/* 728 */,
/* 729 */,
/* 730 */,
/* 731 */,
/* 732 */,
/* 733 */,
/* 734 */,
/* 735 */,
/* 736 */,
/* 737 */,
/* 738 */,
/* 739 */,
/* 740 */,
/* 741 */,
/* 742 */,
/* 743 */,
/* 744 */,
/* 745 */,
/* 746 */,
/* 747 */,
/* 748 */,
/* 749 */,
/* 750 */,
/* 751 */,
/* 752 */,
/* 753 */,
/* 754 */,
/* 755 */,
/* 756 */,
/* 757 */,
/* 758 */,
/* 759 */,
/* 760 */,
/* 761 */,
/* 762 */,
/* 763 */,
/* 764 */,
/* 765 */,
/* 766 */,
/* 767 */,
/* 768 */,
/* 769 */,
/* 770 */,
/* 771 */,
/* 772 */,
/* 773 */,
/* 774 */,
/* 775 */,
/* 776 */,
/* 777 */,
/* 778 */,
/* 779 */,
/* 780 */,
/* 781 */,
/* 782 */,
/* 783 */,
/* 784 */,
/* 785 */,
/* 786 */,
/* 787 */,
/* 788 */,
/* 789 */,
/* 790 */,
/* 791 */,
/* 792 */,
/* 793 */,
/* 794 */,
/* 795 */,
/* 796 */,
/* 797 */,
/* 798 */,
/* 799 */,
/* 800 */,
/* 801 */,
/* 802 */,
/* 803 */,
/* 804 */,
/* 805 */,
/* 806 */,
/* 807 */,
/* 808 */,
/* 809 */,
/* 810 */,
/* 811 */,
/* 812 */,
/* 813 */,
/* 814 */,
/* 815 */,
/* 816 */,
/* 817 */,
/* 818 */,
/* 819 */,
/* 820 */,
/* 821 */,
/* 822 */,
/* 823 */,
/* 824 */,
/* 825 */,
/* 826 */,
/* 827 */,
/* 828 */,
/* 829 */,
/* 830 */,
/* 831 */,
/* 832 */,
/* 833 */,
/* 834 */,
/* 835 */,
/* 836 */,
/* 837 */,
/* 838 */,
/* 839 */,
/* 840 */,
/* 841 */,
/* 842 */,
/* 843 */,
/* 844 */,
/* 845 */,
/* 846 */,
/* 847 */,
/* 848 */,
/* 849 */,
/* 850 */,
/* 851 */,
/* 852 */,
/* 853 */,
/* 854 */,
/* 855 */,
/* 856 */,
/* 857 */,
/* 858 */,
/* 859 */,
/* 860 */,
/* 861 */,
/* 862 */,
/* 863 */,
/* 864 */,
/* 865 */,
/* 866 */,
/* 867 */,
/* 868 */,
/* 869 */,
/* 870 */,
/* 871 */,
/* 872 */,
/* 873 */,
/* 874 */,
/* 875 */,
/* 876 */,
/* 877 */,
/* 878 */,
/* 879 */,
/* 880 */,
/* 881 */,
/* 882 */,
/* 883 */,
/* 884 */,
/* 885 */,
/* 886 */,
/* 887 */,
/* 888 */,
/* 889 */,
/* 890 */,
/* 891 */,
/* 892 */,
/* 893 */,
/* 894 */,
/* 895 */,
/* 896 */,
/* 897 */,
/* 898 */,
/* 899 */,
/* 900 */,
/* 901 */,
/* 902 */,
/* 903 */,
/* 904 */,
/* 905 */,
/* 906 */,
/* 907 */,
/* 908 */,
/* 909 */,
/* 910 */,
/* 911 */,
/* 912 */,
/* 913 */,
/* 914 */,
/* 915 */,
/* 916 */,
/* 917 */,
/* 918 */,
/* 919 */,
/* 920 */,
/* 921 */,
/* 922 */,
/* 923 */,
/* 924 */,
/* 925 */,
/* 926 */,
/* 927 */,
/* 928 */,
/* 929 */,
/* 930 */,
/* 931 */,
/* 932 */,
/* 933 */,
/* 934 */,
/* 935 */,
/* 936 */,
/* 937 */,
/* 938 */,
/* 939 */,
/* 940 */,
/* 941 */,
/* 942 */,
/* 943 */,
/* 944 */,
/* 945 */,
/* 946 */,
/* 947 */,
/* 948 */,
/* 949 */,
/* 950 */,
/* 951 */,
/* 952 */,
/* 953 */,
/* 954 */,
/* 955 */,
/* 956 */,
/* 957 */,
/* 958 */,
/* 959 */,
/* 960 */,
/* 961 */,
/* 962 */,
/* 963 */,
/* 964 */,
/* 965 */,
/* 966 */,
/* 967 */,
/* 968 */,
/* 969 */,
/* 970 */,
/* 971 */,
/* 972 */,
/* 973 */,
/* 974 */,
/* 975 */,
/* 976 */,
/* 977 */,
/* 978 */,
/* 979 */,
/* 980 */,
/* 981 */,
/* 982 */,
/* 983 */,
/* 984 */,
/* 985 */,
/* 986 */,
/* 987 */,
/* 988 */,
/* 989 */,
/* 990 */,
/* 991 */,
/* 992 */,
/* 993 */,
/* 994 */,
/* 995 */,
/* 996 */,
/* 997 */,
/* 998 */,
/* 999 */,
/* 1000 */,
/* 1001 */,
/* 1002 */,
/* 1003 */,
/* 1004 */,
/* 1005 */,
/* 1006 */,
/* 1007 */,
/* 1008 */,
/* 1009 */,
/* 1010 */,
/* 1011 */,
/* 1012 */,
/* 1013 */,
/* 1014 */,
/* 1015 */,
/* 1016 */,
/* 1017 */,
/* 1018 */,
/* 1019 */,
/* 1020 */,
/* 1021 */,
/* 1022 */,
/* 1023 */,
/* 1024 */,
/* 1025 */,
/* 1026 */,
/* 1027 */,
/* 1028 */,
/* 1029 */,
/* 1030 */,
/* 1031 */,
/* 1032 */,
/* 1033 */,
/* 1034 */,
/* 1035 */,
/* 1036 */,
/* 1037 */,
/* 1038 */,
/* 1039 */,
/* 1040 */,
/* 1041 */,
/* 1042 */,
/* 1043 */,
/* 1044 */,
/* 1045 */,
/* 1046 */,
/* 1047 */,
/* 1048 */,
/* 1049 */,
/* 1050 */,
/* 1051 */,
/* 1052 */,
/* 1053 */,
/* 1054 */,
/* 1055 */,
/* 1056 */,
/* 1057 */,
/* 1058 */,
/* 1059 */,
/* 1060 */,
/* 1061 */,
/* 1062 */,
/* 1063 */,
/* 1064 */,
/* 1065 */,
/* 1066 */,
/* 1067 */,
/* 1068 */,
/* 1069 */,
/* 1070 */,
/* 1071 */,
/* 1072 */,
/* 1073 */,
/* 1074 */,
/* 1075 */,
/* 1076 */,
/* 1077 */,
/* 1078 */,
/* 1079 */,
/* 1080 */,
/* 1081 */,
/* 1082 */,
/* 1083 */,
/* 1084 */,
/* 1085 */,
/* 1086 */,
/* 1087 */,
/* 1088 */,
/* 1089 */,
/* 1090 */,
/* 1091 */,
/* 1092 */,
/* 1093 */,
/* 1094 */,
/* 1095 */,
/* 1096 */,
/* 1097 */,
/* 1098 */,
/* 1099 */,
/* 1100 */,
/* 1101 */,
/* 1102 */,
/* 1103 */,
/* 1104 */,
/* 1105 */,
/* 1106 */,
/* 1107 */,
/* 1108 */,
/* 1109 */,
/* 1110 */,
/* 1111 */,
/* 1112 */,
/* 1113 */,
/* 1114 */,
/* 1115 */,
/* 1116 */,
/* 1117 */,
/* 1118 */,
/* 1119 */,
/* 1120 */,
/* 1121 */,
/* 1122 */,
/* 1123 */,
/* 1124 */,
/* 1125 */,
/* 1126 */,
/* 1127 */,
/* 1128 */,
/* 1129 */,
/* 1130 */,
/* 1131 */,
/* 1132 */,
/* 1133 */,
/* 1134 */,
/* 1135 */,
/* 1136 */,
/* 1137 */,
/* 1138 */,
/* 1139 */,
/* 1140 */,
/* 1141 */,
/* 1142 */,
/* 1143 */,
/* 1144 */,
/* 1145 */,
/* 1146 */,
/* 1147 */,
/* 1148 */,
/* 1149 */,
/* 1150 */,
/* 1151 */,
/* 1152 */,
/* 1153 */,
/* 1154 */,
/* 1155 */,
/* 1156 */,
/* 1157 */,
/* 1158 */,
/* 1159 */,
/* 1160 */,
/* 1161 */,
/* 1162 */,
/* 1163 */,
/* 1164 */,
/* 1165 */,
/* 1166 */,
/* 1167 */,
/* 1168 */,
/* 1169 */,
/* 1170 */,
/* 1171 */,
/* 1172 */,
/* 1173 */,
/* 1174 */,
/* 1175 */,
/* 1176 */,
/* 1177 */,
/* 1178 */,
/* 1179 */,
/* 1180 */,
/* 1181 */,
/* 1182 */,
/* 1183 */,
/* 1184 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1185);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1185 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-JyMb_ {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-1NvVk {\n}\n\n.Render-top-j4VZH {\n  min-height: 40vh;\n  width: 100%;\n  background: url('https://briangaynorphotography.files.wordpress.com/2015/10/the-bridge-to-biloxi.jpg');\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  position: relative;\n  z-index: 1;\n}\n\n.Render-filters-2CfjU {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  width: 80%;\n  box-shadow: 0px 0px 8px 1px black;\n  height: 4em\n}\n\n.Render-filters-2CfjU .dropdown {\n  min-width: 20% !important;\n  line-height: 2em !important;\n}\n\n.Render-filters-2CfjU .input {\n  height: 100% !important;\n}\n\n.Render-filters-2CfjU i {\n  position: absolute;\n  top: 50% !important;\n  -webkit-transform: translate(0, -30%) !important;\n      -ms-transform: translate(0, -30%) !important;\n          transform: translate(0, -30%) !important;\n}\n\n.Render-activity-CDFDZ {\n  padding: 1% 2% 2%;\n  box-shadow: 0px 0px 3px 3px rgba(9, 9, 9, 0.4);\n  border: 1px solid #c9c9c9;\n  width: 85%;\n  margin: 0 auto;\n  margin-top: -5em;\n  z-index: 2;\n  background: white;\n  //min-height: 50em;\n  border-radius: 3px;\n  position: relative;\n}\n\n.Render-activityTitle-2Q0_d {\n  display: inline-block;\n  padding-bottom: .4em;\n  position: relative\n}\n\n.Render-activityTitle-2Q0_d::after {\n  content: '';\n  height: 5px;\n  width: 110%;\n  left: 0;\n  background: #3d88e5;\n  bottom: 0;\n  position: absolute;\n}\n\n.Render-sliderItem-PoZvq {\n  margin: 10px;\n  overflow: hidden;\n  color: black !important;\n  cursor: pointer;\n  border: 1px solid grey;\n  box-shadow: 0 2px 1px -1px #464646\n}\n\n.Render-sliderItem-PoZvq:hover {\n}\n\n.Render-sliderItem-PoZvq:hover .Render-title-Ub8x_ {\n  width: 100%;\n  max-width: 100%;\n}\n\n.Render-sliderItem-PoZvq .Render-image-1Tkqi {\n  background: url('https://upload.wikimedia.org/wikipedia/commons/1/1c/BiloxiLightHouseandVisitorsCenter.jpg');\n  background-size: cover;\n  height: 9em;\n  width: 100%;\n  position: relative;\n}\n\n.Render-sliderItem-PoZvq .Render-title-Ub8x_ {\n  position: absolute;\n  right: 0;\n  bottom: 25%;\n  background: white;\n  padding: 1% 1% 1% 2%;\n  border: 1px solid black;\n  box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.49), inset 5px 0px 0px 0px #f9ff00, inset 7px 0px 0px 0px #000000;\n  //width: 40%;\n  min-width: 40%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  max-width: 40%;\n  //max-width: 999999px;\n  transition: all .3s ease-in-out;\n}\n\n.Render-sliderItem-PoZvq .Render-meta-M5tD2 {\n  padding: .4em;\n  background: whitesmoke;\n  font-size: 16.8px;\n  font-size: 1.05rem;\n}\n\n.Render-sliderItem-PoZvq .Render-meta-M5tD2:not(:last-child) {\n  border-bottom: 1px solid #d4d4d4;\n}\n\n.Render-sliderItem-PoZvq .Render-childTitle-32-ps {\n  font-size: 20.8px;\n  font-size: 1.3rem;\n  font-weight: 600;\n  margin-right: .7em;\n}\n\n.Render-titleWrapper-3GsSl {\n  text-align: center;\n  margin-bottom: 2em\n}\n\n.Render-titleWrapper-3GsSl h2 {\n  position: relative;\n  display: inline-block;\n}\n\n.Render-titleWrapper-3GsSl h2::before {\n  content: '';\n  position: absolute;\n  width: 25%;\n  height: 5px;\n  background: #3d88e5;\n  top: 50%;\n  left: -30%;\n  -webkit-transform: translate(0, -50%);\n      -ms-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n\n.Render-titleWrapper-3GsSl h2::after {\n  content: '';\n  position: absolute;\n  width: 25%;\n  height: 5px;\n  background: #3d88e5;\n  top: 50%;\n  right: -30%;\n  -webkit-transform: translate(0, -50%);\n      -ms-transform: translate(0, -50%);\n          transform: translate(0, -50%);\n}\n\n.Render-bottom-3YKhR {\n  background: #f5f5f599;\n}\n\n.Render-more-1ON6k {\n  padding: 2% 0;\n  background: #f5f5f599;\n}\n\n.Render-moreOptions-9ixDw {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n}\n\n.Render-option-oJtcm {\n  -ms-flex-preferred-size: 20%;\n      flex-basis: 20%;\n  text-align: center;\n  padding: 2%;\n  margin-bottom: 2em\n}\n\n.Render-option-oJtcm .Render-inner-3a-AA {\n  color: black !important;\n  cursor: pointer;\n  display: block;\n  min-height: 20em;\n  position: relative;\n  border: 1px solid black;\n  border-radius: 3px;\n  overflow: hidden;\n  min-width: 15em;\n}\n\n.Render-option-oJtcm .Render-inner-3a-AA:hover {\n}\n\n.Render-option-oJtcm .Render-inner-3a-AA:hover .Render-moreImg-3DnoL {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feColorMatrix type=\"matrix\" color-interpolation-filters=\"sRGB\" values=\"1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0\" /></filter></svg>#filter');\n  -webkit-filter: grayscale(0);\n          filter: grayscale(0);\n  -webkit-transform: scale(1.1);\n      -ms-transform: scale(1.1);\n          transform: scale(1.1);\n}\n\n.Render-option-oJtcm .Render-inner-3a-AA:hover .Render-moreImg-3DnoL::after {\n  background: rgba(0, 0, 0, 0);\n}\n\n.Render-option-oJtcm .Render-moreImg-3DnoL {\n  background: url('https://lh3.ggpht.com/-nim2k817X_o/WAboUAcvHaI/AAAAAAAAArU/E4aq4PC-y34vbPA0MqOTZgPniXOkXeiYQCLIB/s512/photo');\n  background-size: cover;\n  background-position: center center;\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  top: 0;\n  left: 0;\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feColorMatrix type=\"matrix\" color-interpolation-filters=\"sRGB\" values=\"0.72441 0.25032 0.02527 0 0 0.07441 0.90032 0.02527 0 0 0.07441 0.25032 0.67527 0 0 0 0 0 1 0\" /></filter></svg>#filter');\n  -webkit-filter: grayscale(35%);\n          filter: grayscale(35%);\n  transition: all .2s ease-in-out;\n}\n\n.Render-option-oJtcm .Render-moreImg-3DnoL::after {\n  content: '';\n  position: absolute;\n  top: 0;\n  right: 0;\n  height: 100%;\n  width: 100%;\n  background: rgba(0, 0, 0, 0.28);\n  transition: all .2s ease-in-out;\n}\n\n.Render-option-oJtcm span {\n  color: white;\n  font-weight: 600;\n  font-size: 32px;\n  font-size: 2rem;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n  text-shadow: 0px 0.5px 0.5px black,0px 0.5px 0.5px black,0px 0.5px 0.5px black,0px 0.5px 0.5px black,0px 0.5px 0.5px black,0px 0.5px 0.5px black;\n  line-height: 40px;\n  line-height: 2.5rem;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Home/Render/Render.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Home/Render/<no source>"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;CACC;;AAED;EACE,iBAAiB;EACjB,YAAY;EACZ,uGAAuG;EACvG,uBAAuB;EACvB,mCAAmC;EACnC,6BAA6B;EAC7B,mBAAmB;EACnB,WAAW;CACZ;;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,iCAAiC;EACjC,WAAW;EACX,kCAAkC;EAClC,WAAY;CAgBb;;AAdC;EACE,0BAA0B;EAC1B,4BAA4B;CAC7B;;AAED;EACE,wBAAwB;CACzB;;AAED;EACE,mBAAmB;EACnB,oBAAoB;EACpB,iDAAyC;MAAzC,6CAAyC;UAAzC,yCAAyC;CAC1C;;AAGH;EACE,kBAAkB;EAClB,+CAA+C;EAC/C,0BAA0B;EAC1B,WAAW;EACX,eAAe;EACf,iBAAiB;EACjB,WAAW;EACX,kBAAkB;EAClB,mBAAmB;EACnB,mBAAmB;EACnB,mBAAmB;CACpB;;AAED;EACE,sBAAsB;EACtB,qBAAqB;EACrB,kBAAmB;CAWpB;;AATC;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,QAAQ;EACR,oBAAoB;EACpB,UAAU;EACV,mBAAmB;CACpB;;AAGH;EACE,aAAa;EACb,iBAAiB;EACjB,wBAAwB;EACxB,gBAAgB;EAChB,uBAAuB;EACvB,kCAAmC;CAiDpC;;AA/CC;CAKC;;AAJC;EACE,YAAY;EACZ,gBAAgB;CACjB;;AAGH;EACE,6GAA6G;EAC7G,uBAAuB;EACvB,YAAY;EACZ,YAAY;EACZ,mBAAmB;CACpB;;AAED;EACE,mBAAmB;EACnB,SAAS;EACT,YAAY;EACZ,kBAAkB;EAClB,qBAAqB;EACrB,wBAAwB;EACxB,8GAA8G;EAC9G,aAAa;EACb,eAAe;EACf,iBAAiB;EACjB,wBAAwB;EACxB,eAAe;EACf,sBAAsB;EACtB,gCAAgC;CACjC;;AAED;EACE,cAAc;EACd,uBAAuB;EACvB,kBAAmB;EAAnB,mBAAmB;CAKpB;;AAHC;EACE,iCAAiC;CAClC;;AAGH;EACE,kBAAkB;EAAlB,kBAAkB;EAClB,iBAAiB;EACjB,mBAAmB;CACpB;;AAGH;EACE,mBAAmB;EACnB,kBAAmB;CA4BpB;;AA1BC;EACE,mBAAmB;EACnB,sBAAsB;CAuBvB;;AArBC;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,SAAS;EACT,WAAW;EACX,sCAA8B;MAA9B,kCAA8B;UAA9B,8BAA8B;CAC/B;;AAED;EACE,YAAY;EACZ,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,oBAAoB;EACpB,SAAS;EACT,YAAY;EACZ,sCAA8B;MAA9B,kCAA8B;UAA9B,8BAA8B;CAC/B;;AAIL;EACE,sBAAsB;CACvB;;AAED;EACE,cAAc;EACd,sBAAsB;CACvB;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,oBAAgB;MAAhB,gBAAgB;CACjB;;AAED;EACE,6BAAgB;MAAhB,gBAAgB;EAChB,mBAAmB;EACnB,YAAY;EACZ,kBAAmB;CA4DpB;;AA1DC;EACE,wBAAwB;EACxB,gBAAgB;EAChB,eAAe;EACf,iBAAiB;EACjB,mBAAmB;EACnB,wBAAwB;EACxB,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;CAYjB;;AAVC;CASC;;AARC;ECpMN,sPAAA;EDqMQ,6BAAqB;UAArB,qBAAqB;EACrB,8BAAsB;MAAtB,0BAAsB;UAAtB,sBAAsB;CAKvB;;AAHC;EACE,6BAA6B;CAC9B;;AAKP;EACE,+HAA+H;EAC/H,uBAAuB;EACvB,mCAAmC;EACnC,mBAAmB;EACnB,YAAY;EACZ,aAAa;EACb,OAAO;EACP,QAAQ;ECvNZ,4SAAA;EDwNI,+BAAuB;UAAvB,uBAAuB;EACvB,gCAAgC;CAYjC;;AAVC;EACE,YAAY;EACZ,mBAAmB;EACnB,OAAO;EACP,SAAS;EACT,aAAa;EACb,YAAY;EACZ,gCAAgC;EAChC,gCAAgC;CACjC;;AAGH;EACE,aAAa;EACb,iBAAiB;EACjB,gBAAgB;EAAhB,gBAAgB;EAChB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,iCAAiC;EACjC,iJAAiJ;EACjJ,kBAAoB;EAApB,oBAAoB;CACrB","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n}\n\n.top {\n  min-height: 40vh;\n  width: 100%;\n  background: url('https://briangaynorphotography.files.wordpress.com/2015/10/the-bridge-to-biloxi.jpg');\n  background-size: cover;\n  background-position: center center;\n  background-repeat: no-repeat;\n  position: relative;\n  z-index: 1;\n}\n\n.filters {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 80%;\n  box-shadow: 0px 0px 8px 1px black;\n  height: 4em;\n\n  & :global(.dropdown) {\n    min-width: 20% !important;\n    line-height: 2em !important;\n  }\n\n  & :global(.input) {\n    height: 100% !important;\n  }\n\n  & :global(i) {\n    position: absolute;\n    top: 50% !important;\n    transform: translate(0, -30%) !important;\n  }\n}\n\n.activity {\n  padding: 1% 2% 2%;\n  box-shadow: 0px 0px 3px 3px rgba(9, 9, 9, 0.4);\n  border: 1px solid #c9c9c9;\n  width: 85%;\n  margin: 0 auto;\n  margin-top: -5em;\n  z-index: 2;\n  background: white;\n  //min-height: 50em;\n  border-radius: 3px;\n  position: relative;\n}\n\n.activityTitle {\n  display: inline-block;\n  padding-bottom: .4em;\n  position: relative;\n\n  &::after {\n    content: '';\n    height: 5px;\n    width: 110%;\n    left: 0;\n    background: #3d88e5;\n    bottom: 0;\n    position: absolute;\n  }\n}\n\n.sliderItem {\n  margin: 10px;\n  overflow: hidden;\n  color: black !important;\n  cursor: pointer;\n  border: 1px solid grey;\n  box-shadow: 0 2px 1px -1px #464646;\n\n  &:hover {\n    & .title {\n      width: 100%;\n      max-width: 100%;\n    }\n  }\n\n  & .image {\n    background: url('https://upload.wikimedia.org/wikipedia/commons/1/1c/BiloxiLightHouseandVisitorsCenter.jpg');\n    background-size: cover;\n    height: 9em;\n    width: 100%;\n    position: relative;\n  }\n\n  & .title {\n    position: absolute;\n    right: 0;\n    bottom: 25%;\n    background: white;\n    padding: 1% 1% 1% 2%;\n    border: 1px solid black;\n    box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.49), inset 5px 0px 0px 0px #f9ff00, inset 7px 0px 0px 0px #000000;\n    //width: 40%;\n    min-width: 40%;\n    overflow: hidden;\n    text-overflow: ellipsis;\n    max-width: 40%;\n    //max-width: 999999px;\n    transition: all .3s ease-in-out;\n  }\n\n  & .meta {\n    padding: .4em;\n    background: whitesmoke;\n    font-size: 1.05rem;\n\n    &:not(:last-child) {\n      border-bottom: 1px solid #d4d4d4;\n    }\n  }\n\n  & .childTitle {\n    font-size: 1.3rem;\n    font-weight: 600;\n    margin-right: .7em;\n  }\n}\n\n.titleWrapper {\n  text-align: center;\n  margin-bottom: 2em;\n\n  & h2 {\n    position: relative;\n    display: inline-block;\n\n    &::before {\n      content: '';\n      position: absolute;\n      width: 25%;\n      height: 5px;\n      background: #3d88e5;\n      top: 50%;\n      left: -30%;\n      transform: translate(0, -50%);\n    }\n\n    &::after {\n      content: '';\n      position: absolute;\n      width: 25%;\n      height: 5px;\n      background: #3d88e5;\n      top: 50%;\n      right: -30%;\n      transform: translate(0, -50%);\n    }\n  }\n}\n\n.bottom {\n  background: #f5f5f599;\n}\n\n.more {\n  padding: 2% 0;\n  background: #f5f5f599;\n}\n\n.moreOptions {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.option {\n  flex-basis: 20%;\n  text-align: center;\n  padding: 2%;\n  margin-bottom: 2em;\n\n  & .inner {\n    color: black !important;\n    cursor: pointer;\n    display: block;\n    min-height: 20em;\n    position: relative;\n    border: 1px solid black;\n    border-radius: 3px;\n    overflow: hidden;\n    min-width: 15em;\n\n    &:hover {\n      & .moreImg {\n        filter: grayscale(0);\n        transform: scale(1.1);\n\n        &::after {\n          background: rgba(0, 0, 0, 0);\n        }\n      }\n    }\n  }\n\n  & .moreImg {\n    background: url('https://lh3.ggpht.com/-nim2k817X_o/WAboUAcvHaI/AAAAAAAAArU/E4aq4PC-y34vbPA0MqOTZgPniXOkXeiYQCLIB/s512/photo');\n    background-size: cover;\n    background-position: center center;\n    position: absolute;\n    width: 100%;\n    height: 100%;\n    top: 0;\n    left: 0;\n    filter: grayscale(35%);\n    transition: all .2s ease-in-out;\n\n    &::after {\n      content: '';\n      position: absolute;\n      top: 0;\n      right: 0;\n      height: 100%;\n      width: 100%;\n      background: rgba(0, 0, 0, 0.28);\n      transition: all .2s ease-in-out;\n    }\n  }\n\n  & span {\n    color: white;\n    font-weight: 600;\n    font-size: 2rem;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n    text-shadow: 0px 0.5px 0.5px black,0px 0.5px 0.5px black,0px 0.5px 0.5px black,0px 0.5px 0.5px black,0px 0.5px 0.5px black,0px 0.5px 0.5px black;\n    line-height: 2.5rem;\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-JyMb_",
  	"container": "Render-container-1NvVk",
  	"top": "Render-top-j4VZH",
  	"filters": "Render-filters-2CfjU",
  	"activity": "Render-activity-CDFDZ",
  	"activityTitle": "Render-activityTitle-2Q0_d",
  	"sliderItem": "Render-sliderItem-PoZvq",
  	"title": "Render-title-Ub8x_",
  	"image": "Render-image-1Tkqi",
  	"meta": "Render-meta-M5tD2",
  	"childTitle": "Render-childTitle-32-ps",
  	"titleWrapper": "Render-titleWrapper-3GsSl",
  	"bottom": "Render-bottom-3YKhR",
  	"more": "Render-more-1ON6k",
  	"moreOptions": "Render-moreOptions-9ixDw",
  	"option": "Render-option-oJtcm",
  	"inner": "Render-inner-3a-AA",
  	"moreImg": "Render-moreImg-3DnoL"
  };

/***/ }),
/* 1186 */,
/* 1187 */,
/* 1188 */,
/* 1189 */,
/* 1190 */,
/* 1191 */,
/* 1192 */,
/* 1193 */,
/* 1194 */,
/* 1195 */,
/* 1196 */,
/* 1197 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1198);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Home.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Home.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1198 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n\n    /*\n   * Typography\n   * ======================================================================== */\n\n    /*\n   * Layout\n   * ======================================================================== */\n\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n    /* Extra small screen / phone */\n\n    /* Small screen / tablet */\n\n    /* Medium screen / desktop */\n\n    /* Large screen / wide desktop */\n}\n\n.Home-root-3mfpA {\n}\n\n.Home-container-2ac9n {\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/home/Home.css"],"names":[],"mappings":"AAAA;;IACE;;gFAE8E;;IAI9E;;gFAE8E;;IAI9E;;gFAE8E;;IAErD,gCAAgC;;IAChC,2BAA2B;;IAC3B,6BAA6B;;IAC7B,iCAAiC;CAC3D;;ACnBD;CACC;;AAED;CACC","file":"Home.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n}\n\n.container {\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Home-root-3mfpA",
  	"container": "Home-container-2ac9n"
  };

/***/ }),
/* 1199 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Layout\\Layout.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Layout = __webpack_require__(1200);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Header = __webpack_require__(1202);

  var _Header2 = _interopRequireDefault(_Header);

  var _Footer = __webpack_require__(1232);

  var _Footer2 = _interopRequireDefault(_Footer);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Layout = function (_React$Component) {
    (0, _inherits3.default)(Layout, _React$Component);

    function Layout() {
      (0, _classCallCheck3.default)(this, Layout);
      return (0, _possibleConstructorReturn3.default)(this, (Layout.__proto__ || (0, _getPrototypeOf2.default)(Layout)).apply(this, arguments));
    }

    (0, _createClass3.default)(Layout, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          _react2.default.createElement(_Header2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 15
            },
            __self: this
          }),
          this.props.children,
          _react2.default.createElement(_Footer2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          })
        );
      }
    }]);
    return Layout;
  }(_react2.default.Component);

  Layout.propTypes = {
    children: _react.PropTypes.node.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Layout2.default)(Layout);

/***/ }),
/* 1200 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1201);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Layout.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1201 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif;\n\n  /* 1 */\n  line-height: 1.15;\n\n  /* 2 */\n  -ms-text-size-adjust: 100%;\n\n  /* 3 */\n  -webkit-text-size-adjust: 100%;\n\n  /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain {\n\n  /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box;\n\n  /* 1 */\n  height: 0;\n\n  /* 1 */\n  overflow: visible;\n\n  /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace;\n\n  /* 1 */\n  font-size: 1em;\n\n  /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent;\n\n  /* 1 */\n  -webkit-text-decoration-skip: objects;\n\n  /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none;\n\n  /* 1 */\n  text-decoration: underline;\n\n  /* 2 */\n  text-decoration: underline dotted;\n\n  /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace;\n\n  /* 1 */\n  font-size: 1em;\n\n  /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif;\n\n  /* 1 */\n  font-size: 100%;\n\n  /* 1 */\n  line-height: 1.15;\n\n  /* 1 */\n  margin: 0;\n\n  /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput {\n\n  /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect {\n\n  /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button;\n\n  /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box;\n\n  /* 1 */\n  color: inherit;\n\n  /* 2 */\n  display: table;\n\n  /* 1 */\n  max-width: 100%;\n\n  /* 1 */\n  padding: 0;\n\n  /* 3 */\n  white-space: normal;\n\n  /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block;\n\n  /* 1 */\n  vertical-align: baseline;\n\n  /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box;\n\n  /* 1 */\n  padding: 0;\n\n  /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield;\n\n  /* 1 */\n  outline-offset: -2px;\n\n  /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button;\n\n  /* 1 */\n  font: inherit;\n\n  /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n:root {\n\n  /*\n   * Typography\n   * ======================================================================== */\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  /* Extra small screen / phone */\n\n  /* Small screen / tablet */\n\n  /* Medium screen / desktop */\n\n  /* Large screen / wide desktop */\n}\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n.browserupgrade {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/node_modules/normalize.css/normalize.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Layout/Layout.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css"],"names":[],"mappings":"AAAA,4EAA4E;;AAE5E;;;;;GAKG;;AAEH;gFACgF;;AAEhF;EACE,wBAAwB;;EAAC,OAAO;EAChC,kBAAkB;;EAAC,OAAO;EAC1B,2BAA2B;;EAAC,OAAO;EACnC,+BAA+B;;EAAC,OAAO;CACxC;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,UAAU;CACX;;AAED;;GAEG;;AAEH;;;;;;EAME,eAAe;CAChB;;AAED;;;GAGG;;AAEH;EACE,eAAe;EACf,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;EAEO,OAAO;EACZ,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,wBAAwB;;EAAC,OAAO;EAChC,UAAU;;EAAC,OAAO;EAClB,kBAAkB;;EAAC,OAAO;CAC3B;;AAED;;;GAGG;;AAEH;EACE,kCAAkC;;EAAC,OAAO;EAC1C,eAAe;;EAAC,OAAO;CACxB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;EACE,8BAA8B;;EAAC,OAAO;EACtC,sCAAsC;;EAAC,OAAO;CAC/C;;AAED;;;GAGG;;AAEH;;EAEE,iBAAiB;CAClB;;AAED;;;GAGG;;AAEH;EACE,oBAAoB;;EAAC,OAAO;EAC5B,2BAA2B;;EAAC,OAAO;EACnC,kCAAkC;;EAAC,OAAO;CAC3C;;AAED;;GAEG;;AAEH;;EAEE,qBAAqB;CACtB;;AAED;;GAEG;;AAEH;;EAEE,oBAAoB;CACrB;;AAED;;;GAGG;;AAEH;;;EAGE,kCAAkC;;EAAC,OAAO;EAC1C,eAAe;;EAAC,OAAO;CACxB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,uBAAuB;EACvB,YAAY;CACb;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,eAAe;EACf,eAAe;EACf,mBAAmB;EACnB,yBAAyB;CAC1B;;AAED;EACE,gBAAgB;CACjB;;AAED;EACE,YAAY;CACb;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;;EAEE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;EACd,UAAU;CACX;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;;;;EAKE,wBAAwB;;EAAC,OAAO;EAChC,gBAAgB;;EAAC,OAAO;EACxB,kBAAkB;;EAAC,OAAO;EAC1B,UAAU;;EAAC,OAAO;CACnB;;AAED;;;GAGG;;AAEH;;;EACQ,OAAO;EACb,kBAAkB;CACnB;;AAED;;;GAGG;;AAEH;;;EACS,OAAO;EACd,qBAAqB;CACtB;;AAED;;;;GAIG;;AAEH;;;;EAIE,2BAA2B;;EAAC,OAAO;CACpC;;AAED;;GAEG;;AAEH;;;;EAIE,mBAAmB;EACnB,WAAW;CACZ;;AAED;;GAEG;;AAEH;;;;EAIE,+BAA+B;CAChC;;AAED;;GAEG;;AAEH;EACE,0BAA0B;EAC1B,cAAc;EACd,+BAA+B;CAChC;;AAED;;;;;GAKG;;AAEH;EACE,uBAAuB;;EAAC,OAAO;EAC/B,eAAe;;EAAC,OAAO;EACvB,eAAe;;EAAC,OAAO;EACvB,gBAAgB;;EAAC,OAAO;EACxB,WAAW;;EAAC,OAAO;EACnB,oBAAoB;;EAAC,OAAO;CAC7B;;AAED;;;GAGG;;AAEH;EACE,sBAAsB;;EAAC,OAAO;EAC9B,yBAAyB;;EAAC,OAAO;CAClC;;AAED;;GAEG;;AAEH;EACE,eAAe;CAChB;;AAED;;;GAGG;;AAEH;;EAEE,uBAAuB;;EAAC,OAAO;EAC/B,WAAW;;EAAC,OAAO;CACpB;;AAED;;GAEG;;AAEH;;EAEE,aAAa;CACd;;AAED;;;GAGG;;AAEH;EACE,8BAA8B;;EAAC,OAAO;EACtC,qBAAqB;;EAAC,OAAO;CAC9B;;AAED;;GAEG;;AAEH;;EAEE,yBAAyB;CAC1B;;AAED;;;GAGG;;AAEH;EACE,2BAA2B;;EAAC,OAAO;EACnC,cAAc;;EAAC,OAAO;CACvB;;AAED;gFACgF;;AAEhF;;;GAGG;;AAEH;;EAEE,eAAe;CAChB;;AAED;;GAEG;;AAEH;EACE,mBAAmB;CACpB;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,sBAAsB;CACvB;;AAED;;GAEG;;AAEH;EACE,cAAc;CACf;;AAED;gFACgF;;AAEhF;;GAEG;;AAEH;EACE,cAAc;CACf;;AC1cD,yEAAyE;;ACFzE;;EACE;;gFAE8E;;EAI9E;;gFAE8E;;EAI9E;;gFAE8E;;EAErD,gCAAgC;;EAChC,2BAA2B;;EAC3B,6BAA6B;;EAC7B,iCAAiC;CAC3D;;ADfD;;gFAEgF;;AAEhF;EACE,YAAY;EACZ,iBAAiB;EACjB,eAAe,CAAC,YAAY;EAC5B,2DAAqC;EACrC,mBAAmB,CAAC,WAAW;CAChC;;AAED;EACE,eAAe;CAChB;;AAED;;;;;;GAMG;;AAEH;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;EACE,oBAAoB;EACpB,kBAAkB;CACnB;;AAED;;GAEG;;AAEH;EACE,eAAe;EACf,YAAY;EACZ,UAAU;EACV,2BAA2B;EAC3B,cAAc;EACd,WAAW;CACZ;;AAED;;;;GAIG;;AAEH;;;;;;EAME,uBAAuB;CACxB;;AAED;;GAEG;;AAEH;EACE,UAAU;EACV,UAAU;EACV,WAAW;CACZ;;AAED;;GAEG;;AAEH;EACE,iBAAiB;CAClB;;AAED;;gFAEgF;;AAEhF;EACE,gBAAgB;EAChB,iBAAiB;EACjB,YAAY;EACZ,iBAAiB;CAClB;;AAED;;;;gFAIgF;;AAEhF;EACE;;;IAGE,mCAAmC;IACnC,uBAAuB,CAAC,+DAA+D;IACvF,4BAA4B;IAC5B,6BAA6B;GAC9B;;EAED;;IAEE,2BAA2B;GAC5B;;EAED;IACE,6BAA6B;GAC9B;;EAED;IACE,8BAA8B;GAC/B;;EAED;;;KAGG;;EAEH;;IAEE,YAAY;GACb;;EAED;;IAEE,uBAAuB;IACvB,yBAAyB;GAC1B;;EAED;;;KAGG;;EAEH;IACE,4BAA4B;GAC7B;;EAED;;IAEE,yBAAyB;GAC1B;;EAED;IACE,2BAA2B;GAC5B;;EAED;;;IAGE,WAAW;IACX,UAAU;GACX;;EAED;;IAEE,wBAAwB;GACzB;CACF","file":"Layout.css","sourcesContent":["/*! normalize.css v5.0.0 | MIT License | github.com/necolas/normalize.css */\n\n/**\n * 1. Change the default font family in all browsers (opinionated).\n * 2. Correct the line height in all browsers.\n * 3. Prevent adjustments of font size after orientation changes in\n *    IE on Windows Phone and in iOS.\n */\n\n/* Document\n   ========================================================================== */\n\nhtml {\n  font-family: sans-serif; /* 1 */\n  line-height: 1.15; /* 2 */\n  -ms-text-size-adjust: 100%; /* 3 */\n  -webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections\n   ========================================================================== */\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n  margin: 0;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n  display: block;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n  font-size: 2em;\n  margin: 0.67em 0;\n}\n\n/* Grouping content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n  display: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n  margin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n  box-sizing: content-box; /* 1 */\n  height: 0; /* 1 */\n  overflow: visible; /* 2 */\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/* Text-level semantics\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n  background-color: transparent; /* 1 */\n  -webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * Remove the outline on focused links when they are also active or hovered\n * in all browsers (opinionated).\n */\n\na:active,\na:hover {\n  outline-width: 0;\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n  border-bottom: none; /* 1 */\n  text-decoration: underline; /* 2 */\n  text-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n  font-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n  font-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n  font-family: monospace, monospace; /* 1 */\n  font-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n  font-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n  background-color: #ff0;\n  color: #000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n  font-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n  font-size: 75%;\n  line-height: 0;\n  position: relative;\n  vertical-align: baseline;\n}\n\nsub {\n  bottom: -0.25em;\n}\n\nsup {\n  top: -0.5em;\n}\n\n/* Embedded content\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n  display: none;\n  height: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n  border-style: none;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n  overflow: hidden;\n}\n\n/* Forms\n   ========================================================================== */\n\n/**\n * 1. Change the font styles in all browsers (opinionated).\n * 2. Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n  font-family: sans-serif; /* 1 */\n  font-size: 100%; /* 1 */\n  line-height: 1.15; /* 1 */\n  margin: 0; /* 2 */\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n  overflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n  text-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n  -webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n  border-style: none;\n  padding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n  outline: 1px dotted ButtonText;\n}\n\n/**\n * Change the border, margin, and padding in all browsers (opinionated).\n */\n\nfieldset {\n  border: 1px solid #c0c0c0;\n  margin: 0 2px;\n  padding: 0.35em 0.625em 0.75em;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n  box-sizing: border-box; /* 1 */\n  color: inherit; /* 2 */\n  display: table; /* 1 */\n  max-width: 100%; /* 1 */\n  padding: 0; /* 3 */\n  white-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n  display: inline-block; /* 1 */\n  vertical-align: baseline; /* 2 */\n}\n\n/**\n * Remove the default vertical scrollbar in IE.\n */\n\ntextarea {\n  overflow: auto;\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n  box-sizing: border-box; /* 1 */\n  padding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n  height: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n  -webkit-appearance: textfield; /* 1 */\n  outline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n  -webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n  -webkit-appearance: button; /* 1 */\n  font: inherit; /* 2 */\n}\n\n/* Interactive\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n  display: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n  display: list-item;\n}\n\n/* Scripting\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n  display: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n  display: none;\n}\n\n/* Hidden\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n  display: none;\n}\n","@import '../../../node_modules/normalize.css/normalize.css';\n\n/*! React Starter Kit | MIT License | https://www.reactstarterkit.com/ */\n\n@import '../variables.css';\n\n/*\n * Base styles\n * ========================================================================== */\n\nhtml {\n  color: #222;\n  font-weight: 100;\n  font-size: 1em; /* ~16px; */\n  font-family: var(--font-family-base);\n  line-height: 1.375; /* ~22px */\n}\n\na {\n  color: #0074c2;\n}\n\n/*\n * Remove text-shadow in selection highlight:\n * https://twitter.com/miketaylr/status/12228805301\n *\n * These selection rule sets have to be separate.\n * Customize the background color to match your design.\n */\n\n::-moz-selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n::selection {\n  background: #b3d4fc;\n  text-shadow: none;\n}\n\n/*\n * A better looking default horizontal rule\n */\n\nhr {\n  display: block;\n  height: 1px;\n  border: 0;\n  border-top: 1px solid #ccc;\n  margin: 1em 0;\n  padding: 0;\n}\n\n/*\n * Remove the gap between audio, canvas, iframes,\n * images, videos and the bottom of their containers:\n * https://github.com/h5bp/html5-boilerplate/issues/440\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n  vertical-align: middle;\n}\n\n/*\n * Remove default fieldset styles.\n */\n\nfieldset {\n  border: 0;\n  margin: 0;\n  padding: 0;\n}\n\n/*\n * Allow only vertical resizing of textareas.\n */\n\ntextarea {\n  resize: vertical;\n}\n\n/*\n * Browser upgrade prompt\n * ========================================================================== */\n\n:global(.browserupgrade) {\n  margin: 0.2em 0;\n  background: #ccc;\n  color: #000;\n  padding: 0.2em 0;\n}\n\n/*\n * Print styles\n * Inlined to avoid the additional HTTP request:\n * http://www.phpied.com/delay-loading-your-print-css/\n * ========================================================================== */\n\n@media print {\n  *,\n  *::before,\n  *::after {\n    background: transparent !important;\n    color: #000 !important; /* Black prints faster: http://www.sanbeiji.com/archives/953 */\n    box-shadow: none !important;\n    text-shadow: none !important;\n  }\n\n  a,\n  a:visited {\n    text-decoration: underline;\n  }\n\n  a[href]::after {\n    content: ' (' attr(href) ')';\n  }\n\n  abbr[title]::after {\n    content: ' (' attr(title) ')';\n  }\n\n  /*\n   * Don't show links that are fragment identifiers,\n   * or use the `javascript:` pseudo protocol\n   */\n\n  a[href^='#']::after,\n  a[href^='javascript:']::after {\n    content: '';\n  }\n\n  pre,\n  blockquote {\n    border: 1px solid #999;\n    page-break-inside: avoid;\n  }\n\n  /*\n   * Printing Tables:\n   * http://css-discuss.incutio.com/wiki/Printing_Tables\n   */\n\n  thead {\n    display: table-header-group;\n  }\n\n  tr,\n  img {\n    page-break-inside: avoid;\n  }\n\n  img {\n    max-width: 100% !important;\n  }\n\n  p,\n  h2,\n  h3 {\n    orphans: 3;\n    widows: 3;\n  }\n\n  h2,\n  h3 {\n    page-break-after: avoid;\n  }\n}\n",":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

  // exports


/***/ }),
/* 1202 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Header\\Header.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Header = __webpack_require__(1203);

  var _Header2 = _interopRequireDefault(_Header);

  var _semanticUiReact = __webpack_require__(628);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Header = function (_React$Component) {
    (0, _inherits3.default)(Header, _React$Component);

    function Header(props) {
      (0, _classCallCheck3.default)(this, Header);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (Header.__proto__ || (0, _getPrototypeOf2.default)(Header)).call(this, props));

      _this2.state = {
        cities: []
      };
      return _this2;
    }

    (0, _createClass3.default)(Header, [{
      key: 'handleItemClick',
      value: function handleItemClick() {}
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
        console.log("fetch starting");
        this.serverRequest = _axios2.default
        // Make a call to populate the cities in the nav.
        .get('http://www.southms.com/index.php/api/cities.json').then(function (result) {
          console.log("fetch ended", result.data.data);
          _this.setState({
            cities: result.data.data
          });
        });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'render',
      value: function render() {
        var activeItem = this.state.activeItem;


        return _react2.default.createElement(
          _semanticUiReact.Menu,
          { className: _Header2.default.header + ' nav', __source: {
              fileName: _jsxFileName,
              lineNumber: 49
            },
            __self: this
          },
          _react2.default.createElement(
            'a',
            { href: '/', className: _Header2.default.logo, __source: {
                fileName: _jsxFileName,
                lineNumber: 50
              },
              __self: this
            },
            'SouthMS'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'home',
              active: activeItem === 'home',
              onClick: this.handleItemClick,
              href: '/',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 51
              },
              __self: this
            },
            'Home'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'jobs',
              active: activeItem === 'jobs',
              onClick: this.handleItemClick,
              href: '/jobs',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            },
            'Jobs'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'events',
              active: activeItem === 'events',
              onClick: this.handleItemClick,
              href: '/events',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            },
            'Events'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'realState',
              active: activeItem === 'realEstate',
              onClick: this.handleItemClick,
              href: '/real-estates',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 78
              },
              __self: this
            },
            'Real Estate'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'thingsToDo',
              active: activeItem === 'thingsToDo',
              onClick: this.handleItemClick,
              href: '/things-to-do',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 87
              },
              __self: this
            },
            'Things To Do'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'golfCourses',
              active: activeItem === 'golfCourses',
              onClick: this.handleItemClick,
              href: '/golf-courses',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 96
              },
              __self: this
            },
            'Golf Courses'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'accommodations',
              active: activeItem === 'accommodations',
              onClick: this.handleItemClick,
              href: '/accommodations',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 105
              },
              __self: this
            },
            'Accommodations'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'restaurants',
              active: activeItem === 'restaurants',
              onClick: this.handleItemClick,
              href: '/restaurants',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 114
              },
              __self: this
            },
            'Restaurants'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'vehicles',
              active: activeItem === 'vehicles',
              onClick: this.handleItemClick,
              href: '/vehicles',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 123
              },
              __self: this
            },
            'Vehicles'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            {
              name: 'casinos',
              active: activeItem === 'casinos',
              onClick: this.handleItemClick,
              href: '/casinos',
              __source: {
                fileName: _jsxFileName,
                lineNumber: 132
              },
              __self: this
            },
            'Casinos'
          ),
          _react2.default.createElement(
            _semanticUiReact.Menu.Item,
            { as: _semanticUiReact.Dropdown, text: 'Cities', __source: {
                fileName: _jsxFileName,
                lineNumber: 141
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Dropdown.Menu,
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 142
                },
                __self: this
              },
              this.state.cities.map(function (city, i) {
                // Map through the cities
                return _react2.default.createElement(
                  _semanticUiReact.Dropdown.Item,
                  { key: i, href: '/city/' + city.value, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 144
                    },
                    __self: this
                  },
                  city.text
                );
              })
            )
          )
        );
      }
    }]);
    return Header;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Header2.default)(Header);

/***/ }),
/* 1203 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1204);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Header.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Header.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1204 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root { /*\n   * Typography\n   * ======================================================================== */ /*\n   * Layout\n   * ======================================================================== */ /*\n   * Media queries breakpoints\n   * ======================================================================== */ /* Extra small screen / phone */ /* Small screen / tablet */ /* Medium screen / desktop */ /* Large screen / wide desktop */\n}\n\n.nav .item {\n  color: white !important;\n  font-weight: 600 !important\n}\n\n.nav .item:first-child {\n  padding: .92857143em 1.14285714em 1.14285714em 3em !important\n}\n\n\nbody {\n  font-family: 'Lato', sans-serif !important;\n}\n\np {\n  font-size: 14.88px !important;\n  font-size: .93rem !important;\n}\n\n.Header-root-AA5IL {\n  background: #373277;\n  color: #fff;\n}\n\n.Header-container-2ArDX {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: 1000px;\n}\n\n.Header-brand-w2lzG {\n  color: rgb(146, 229, 252);\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.Header-brandTxt-Qj7O1 {\n  margin-left: 10px;\n}\n\n.Header-nav-2n3qz {\n  float: right;\n  margin-top: 6px;\n}\n\n.Header-banner-2t0Sc {\n  text-align: center;\n}\n\n.Header-bannerTitle-3HrPS {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.Header-bannerDesc-32d5W {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n\n.Header-header-qwX8T {\n  height: 3.5em !important;\n  border-radius: 0 !important;\n  margin-bottom: 0 !important;\n  background: rgba(5, 102, 222, 0.77) !important;\n  border: 0px !important;\n  border-bottom: 1px solid #6d6d6d !important;\n}\n\n.Header-logo-3bkMx {\n  /*\n  border-right: 0 !important;\n  padding: .5em 2em !important;\n  font-size: 1.5rem;\n  transition: all .3s ease-in-out !important;\n  */\n  background: black !important;\n  border-radius: 0 !important;\n  float: left;\n  margin: 0 2em 0 0;\n  width: 10em;\n  height: 110%;\n  position: relative;\n  z-index: 2;\n  color: black\n}\n\n.Header-logo-3bkMx:hover {\n  //background: rgba(235, 248, 29, 0.22) !important\n}\n\n.Header-logo-3bkMx::before {\n  background: #fff;\n  left: -10px;\n  width: 200px;\n  z-index: -1;\n  -webkit-transform: skewX(-30deg) skewY(0);\n  -ms-transform: skewX(-30deg) skewY(0);\n  transform: skewX(-30deg) skewY(0);\n  content: ' ';\n  display: block;\n  height: 100%;\n  position: absolute;\n  top: 0;\n  box-shadow: -4px 3px 6px 0px grey\n}\n\n.Header-logo-3bkMx::after {\n  -webkit-transform: skewX(-30deg) skewY(0);\n  -ms-transform: skewX(-30deg) skewY(0);\n  transform: skewX(-30deg) skewY(0);\n  content: ' ';\n  display: block;\n  height: 100%;\n  position: absolute;\n  top: 0\n}\n\n.Header-lineContainer-REtK7 {\n  display: none;\n  position: relative;\n  vertical-align: middle;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  padding: .92857143em 1.14285714em;\n  margin: 0;\n  width: 2.5em;\n  padding: 0;\n  margin-left: 5%;\n  margin-right: -1%;\n  margin-top: -.2em;\n  overflow: hidden;\n}\n\n.Header-line-3lhzi {\n  background:\n    linear-gradient(       to top left,       rgba(0,0,0,0) 0%,       rgba(0,0,0,0) calc(50% - 3px),       rgba(0,0,0,1) 50%,       rgba(0,0,0,0) calc(50% + 3px),       rgba(0,0,0,0) 100%);\n  height: 114%;\n}\n\n.Header-search-qNOZ1 {\n  border-radius: 0 !important;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Header/Header.css"],"names":[],"mappings":"AAAA,QACE;;gFAE8E,CAI9E;;gFAE8E,CAI9E;;gFAE8E,CAErD,gCAAgC,CAChC,2BAA2B,CAC3B,6BAA6B,CAC7B,iCAAiC;CAC3D;;ACfD;EACE,wBAAwB;EACxB,2BAA4B;CAK7B;;AAHC;EACE,6DAA8D;CAC/D;;;AAIH;EACE,2CAA2C;CAC5C;;AAED;EACE,8BAA6B;EAA7B,6BAA6B;CAC9B;;AAED;EACE,oBAAoB;EACpB,YAAY;CACb;;AAED;EACE,eAAe;EACf,gBAAgB;EAChB,kBAAoC;CACrC;;AAED;EACE,0BAAiD;EACjD,sBAAsB;EACtB,kBAAkB,CAAC,WAAW;CAC/B;;AAED;EACE,kBAAkB;CACnB;;AAED;EACE,aAAa;EACb,gBAAgB;CACjB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,UAAU;EACV,cAAc;EACd,oBAAoB;EACpB,eAAe;EACf,iBAAiB;CAClB;;AAED;EACE,WAAW;EACX,gCAAgC;EAChC,kBAAkB;EAClB,UAAU;CACX;;AAED;EACE,yBAAyB;EACzB,4BAA4B;EAC5B,4BAA4B;EAC5B,+CAA+C;EAC/C,uBAAuB;EACvB,4CAA4C;CAC7C;;AAED;EACE;;;;;IAKE;EACF,6BAA6B;EAC7B,4BAA4B;EAC5B,YAAY;EACZ,kBAAkB;EAClB,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,WAAW;EACX,YAAa;CAiCd;;AA/BC;EACE,iDAAkD;CACnD;;AAED;EACE,iBAAiB;EACjB,YAAY;EACZ,aAAa;EACb,YAAY;EACZ,0CAA0C;EAC1C,sCAAsC;EACtC,kCAAkC;EAClC,aAAa;EACb,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,OAAO;EACP,iCAAkC;CACnC;;AAED;EACE,0CAA0C;EAC1C,sCAAsC;EAEtC,kCAAkC;EAClC,aAAe;EACf,eAAe;EACf,aAAa;EACb,mBAAmB;EACnB,MAAO;CACR;;AAGH;EACE,cAAc;EACd,mBAAmB;EACnB,uBAAuB;EACvB,eAAe;EACf,sBAAsB;EACtB,yCAAyC;EACzC,oBAAoB;EACpB,uBAAuB;EACvB,mBAAmB;EACnB,0BAA0B;EAC1B,uBAAuB;EACvB,sBAAsB;EACtB,kCAAkC;EAClC,UAAU;EACV,aAAa;EACb,WAAW;EACX,gBAAgB;EAChB,kBAAkB;EAClB,kBAAkB;EAClB,iBAAiB;CAClB;;AAED;EACE;6LAOwB;EACxB,aAAa;CACd;;AAED;EACE,4BAA4B;CAC7B","file":"Header.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../variables.css';\n\n:root {\n  --brand-color: #61dafb;\n}\n\n:global(.nav .item) {\n  color: white !important;\n  font-weight: 600 !important;\n\n  &:first-child {\n    padding: .92857143em 1.14285714em 1.14285714em 3em !important;\n  }\n}\n\n\n:global(body) {\n  font-family: 'Lato', sans-serif !important;\n}\n\n:global(p) {\n  font-size: .93rem !important;\n}\n\n.root {\n  background: #373277;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 0;\n  max-width: var(--max-content-width);\n}\n\n.brand {\n  color: color(var(--brand-color) lightness(+10%));\n  text-decoration: none;\n  font-size: 1.75em; /* ~28px */\n}\n\n.brandTxt {\n  margin-left: 10px;\n}\n\n.nav {\n  float: right;\n  margin-top: 6px;\n}\n\n.banner {\n  text-align: center;\n}\n\n.bannerTitle {\n  margin: 0;\n  padding: 10px;\n  font-weight: normal;\n  font-size: 4em;\n  line-height: 1em;\n}\n\n.bannerDesc {\n  padding: 0;\n  color: rgba(255, 255, 255, 0.5);\n  font-size: 1.25em;\n  margin: 0;\n}\n\n.header {\n  height: 3.5em !important;\n  border-radius: 0 !important;\n  margin-bottom: 0 !important;\n  background: rgba(5, 102, 222, 0.77) !important;\n  border: 0px !important;\n  border-bottom: 1px solid #6d6d6d !important;\n}\n\n.logo {\n  /*\n  border-right: 0 !important;\n  padding: .5em 2em !important;\n  font-size: 1.5rem;\n  transition: all .3s ease-in-out !important;\n  */\n  background: black !important;\n  border-radius: 0 !important;\n  float: left;\n  margin: 0 2em 0 0;\n  width: 10em;\n  height: 110%;\n  position: relative;\n  z-index: 2;\n  color: black;\n\n  &:hover {\n    //background: rgba(235, 248, 29, 0.22) !important;\n  }\n\n  &::before {\n    background: #fff;\n    left: -10px;\n    width: 200px;\n    z-index: -1;\n    -webkit-transform: skewX(-30deg) skewY(0);\n    -ms-transform: skewX(-30deg) skewY(0);\n    transform: skewX(-30deg) skewY(0);\n    content: ' ';\n    display: block;\n    height: 100%;\n    position: absolute;\n    top: 0;\n    box-shadow: -4px 3px 6px 0px grey;\n  }\n\n  &::after {\n    -webkit-transform: skewX(-30deg) skewY(0);\n    -ms-transform: skewX(-30deg) skewY(0);\n    -o-transform: skewX(-30deg) skewY(0);\n    transform: skewX(-30deg) skewY(0);\n    content: '\\20';\n    display: block;\n    height: 100%;\n    position: absolute;\n    top: 0;\n  }\n}\n\n.lineContainer {\n  display: none;\n  position: relative;\n  vertical-align: middle;\n  line-height: 1;\n  text-decoration: none;\n  -webkit-tap-highlight-color: transparent;\n  -webkit-box-flex: 0;\n  -webkit-flex: 0 0 auto;\n  -ms-flex: 0 0 auto;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  padding: .92857143em 1.14285714em;\n  margin: 0;\n  width: 2.5em;\n  padding: 0;\n  margin-left: 5%;\n  margin-right: -1%;\n  margin-top: -.2em;\n  overflow: hidden;\n}\n\n.line {\n  background:\n    linear-gradient(\n      to top left,\n      rgba(0,0,0,0) 0%,\n      rgba(0,0,0,0) calc(50% - 3px),\n      rgba(0,0,0,1) 50%,\n      rgba(0,0,0,0) calc(50% + 3px),\n      rgba(0,0,0,0) 100%);\n  height: 114%;\n}\n\n.search {\n  border-radius: 0 !important;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Header-root-AA5IL",
  	"container": "Header-container-2ArDX",
  	"brand": "Header-brand-w2lzG",
  	"brandTxt": "Header-brandTxt-Qj7O1",
  	"nav": "Header-nav-2n3qz",
  	"banner": "Header-banner-2t0Sc",
  	"bannerTitle": "Header-bannerTitle-3HrPS",
  	"bannerDesc": "Header-bannerDesc-32d5W",
  	"header": "Header-header-qwX8T",
  	"logo": "Header-logo-3bkMx",
  	"lineContainer": "Header-lineContainer-REtK7",
  	"line": "Header-line-3lhzi",
  	"search": "Header-search-qNOZ1"
  };

/***/ }),
/* 1205 */,
/* 1206 */,
/* 1207 */,
/* 1208 */,
/* 1209 */,
/* 1210 */,
/* 1211 */,
/* 1212 */,
/* 1213 */,
/* 1214 */,
/* 1215 */,
/* 1216 */,
/* 1217 */,
/* 1218 */,
/* 1219 */,
/* 1220 */,
/* 1221 */,
/* 1222 */,
/* 1223 */,
/* 1224 */,
/* 1225 */,
/* 1226 */,
/* 1227 */,
/* 1228 */,
/* 1229 */,
/* 1230 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Response = exports.Request = exports.Headers = undefined;

  __webpack_require__(1231);

  exports.default = self.fetch.bind(self);
  var Headers = exports.Headers = self.Headers;
  var Request = exports.Request = self.Request;
  var Response = exports.Response = self.Response;

/***/ }),
/* 1231 */,
/* 1232 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Footer\\Footer.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Footer = __webpack_require__(1233);

  var _Footer2 = _interopRequireDefault(_Footer);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Footer = function (_React$Component) {
    (0, _inherits3.default)(Footer, _React$Component);

    function Footer() {
      (0, _classCallCheck3.default)(this, Footer);
      return (0, _possibleConstructorReturn3.default)(this, (Footer.__proto__ || (0, _getPrototypeOf2.default)(Footer)).apply(this, arguments));
    }

    (0, _createClass3.default)(Footer, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement('div', { className: _Footer2.default.root, __source: {
            fileName: _jsxFileName,
            lineNumber: 8
          },
          __self: this
        });
      }
    }]);
    return Footer;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Footer2.default)(Footer);

/***/ }),
/* 1233 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1234);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Footer.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1234 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Footer-root-3mW2N {\n  background: #333;\n  color: #fff;\n}\n\n.Footer-container-3k8Ku {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: 1000px;\n  text-align: center;\n}\n\n.Footer-text-jehzH {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.Footer-spacer-2eiJ2 {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.Footer-text-jehzH,\n.Footer-link-2Cgkt {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.Footer-link-2Cgkt,\n.Footer-link-2Cgkt:active,\n.Footer-link-2Cgkt:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.Footer-link-2Cgkt:hover {\n  color: rgba(255, 255, 255, 1);\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Footer/Footer.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,iBAAiB;EACjB,YAAY;CACb;;AAED;EACE,eAAe;EACf,mBAAmB;EACnB,kBAAoC;EACpC,mBAAmB;CACpB;;AAED;EACE,gCAAgC;CACjC;;AAED;EACE,gCAAgC;CACjC;;AAED;;EAEE,iBAAiB;EACjB,eAAe;CAChB;;AAED;;;EAGE,gCAAgC;EAChC,sBAAsB;CACvB;;AAED;EACE,8BAA8B;CAC/B","file":"Footer.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../variables.css';\n\n.root {\n  background: #333;\n  color: #fff;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 20px 15px;\n  max-width: var(--max-content-width);\n  text-align: center;\n}\n\n.text {\n  color: rgba(255, 255, 255, 0.5);\n}\n\n.spacer {\n  color: rgba(255, 255, 255, 0.3);\n}\n\n.text,\n.link {\n  padding: 2px 5px;\n  font-size: 1em;\n}\n\n.link,\n.link:active,\n.link:visited {\n  color: rgba(255, 255, 255, 0.6);\n  text-decoration: none;\n}\n\n.link:hover {\n  color: rgba(255, 255, 255, 1);\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Footer-root-3mW2N",
  	"container": "Footer-container-3k8Ku",
  	"text": "Footer-text-jehzH",
  	"spacer": "Footer-spacer-2eiJ2",
  	"link": "Footer-link-2Cgkt"
  };

/***/ }),
/* 1235 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\contact\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Contact = __webpack_require__(1236);

  var _Contact2 = _interopRequireDefault(_Contact);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Contact Us';

  exports.default = {

    path: '/contact',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          _react2.default.createElement(_Contact2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          })
        )
      };
    }
    };

/***/ }),
/* 1236 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\contact\\Contact.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Contact = __webpack_require__(1237);

  var _Contact2 = _interopRequireDefault(_Contact);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Contact = function (_React$Component) {
    (0, _inherits3.default)(Contact, _React$Component);

    function Contact() {
      (0, _classCallCheck3.default)(this, Contact);
      return (0, _possibleConstructorReturn3.default)(this, (Contact.__proto__ || (0, _getPrototypeOf2.default)(Contact)).apply(this, arguments));
    }

    (0, _createClass3.default)(Contact, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Contact2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Contact2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              '...'
            )
          )
        );
      }
    }]);
    return Contact;
  }(_react2.default.Component);

  Contact.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Contact2.default)(Contact);

/***/ }),
/* 1237 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1238);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Contact.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1238 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Contact-root-sD4Li {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Contact-container-PcAm2 {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/contact/Contact.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Contact.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Contact-root-sD4Li",
  	"container": "Contact-container-PcAm2"
  };

/***/ }),
/* 1239 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _extends2 = __webpack_require__(627);

  var _extends3 = _interopRequireDefault(_extends2);

  var _promise = __webpack_require__(5);

  var _promise2 = _interopRequireDefault(_promise);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\about\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _Page = __webpack_require__(1240);

  var _Page2 = _interopRequireDefault(_Page);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/about',

    action: function action() {
      var _this = this;

      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return new _promise2.default(function (resolve) {
                  __webpack_require__.e/* nsure */(1, function (require) {
                    resolve(__webpack_require__(1243));
                  });
                });

              case 2:
                data = _context.sent;
                return _context.abrupt('return', {
                  title: data.title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Page2.default, (0, _extends3.default)({}, data, {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: _this
                    }))
                  )
                });

              case 4:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1240 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Page\\Page.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Page = __webpack_require__(1241);

  var _Page2 = _interopRequireDefault(_Page);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Page = function (_React$Component) {
    (0, _inherits3.default)(Page, _React$Component);

    function Page() {
      (0, _classCallCheck3.default)(this, Page);
      return (0, _possibleConstructorReturn3.default)(this, (Page.__proto__ || (0, _getPrototypeOf2.default)(Page)).apply(this, arguments));
    }

    (0, _createClass3.default)(Page, [{
      key: 'render',
      value: function render() {
        var _props = this.props,
            title = _props.title,
            html = _props.html;

        return _react2.default.createElement(
          'div',
          { className: _Page2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Page2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            title && _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              title
            ),
            _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html }, __source: {
                fileName: _jsxFileName,
                lineNumber: 17
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Page;
  }(_react2.default.Component);

  Page.propTypes = {
    title: _react.PropTypes.string,
    html: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Page2.default)(Page);

/***/ }),
/* 1241 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1242);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Page.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Page.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1242 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Page-root-3A4gI {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Page-container-3bkIh {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Page/Page.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"Page.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Page-root-3A4gI",
  	"container": "Page-container-3bkIh"
  };

/***/ }),
/* 1243 */,
/* 1244 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\jobs\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Jobs = __webpack_require__(1245);

  var _Jobs2 = _interopRequireDefault(_Jobs);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Jobs';

  exports.default = {

    path: '/jobs',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var jobs, jobsData, jobInfo, jobInfoData, jobCities, jobCitiesData, jobInfoAll;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/jobs.json?type=*&category=*&city=*');

              case 2:
                jobs = _context.sent;
                _context.next = 5;
                return jobs.json();

              case 5:
                jobsData = _context.sent;
                _context.next = 8;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/job-info.json');

              case 8:
                jobInfo = _context.sent;
                _context.next = 11;
                return jobInfo.json();

              case 11:
                jobInfoData = _context.sent;
                _context.next = 14;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities.json');

              case 14:
                jobCities = _context.sent;
                _context.next = 17;
                return jobCities.json();

              case 17:
                jobCitiesData = _context.sent;


                /*
                const jobCategories = await fetch('http://www.southms.com/index.php/api/job-categories.json');
                const jobCategoriesData = await jobCategories.json();
                 const jobTypes = await fetch('http://www.southms.com/index.php/api/job-types.json');
                const jobTypesData = await jobTypes.json();
                */

                jobInfoAll = {
                  types: jobInfoData.types,
                  availabilities: jobInfoData.availabilities,
                  locations: jobCitiesData.data
                };

                console.log("Job Info:", jobInfoAll);
                //console.log("Got fetch!", jobs, jobInfo);
                return _context.abrupt('return', jobs && jobInfoData && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Jobs2.default, { title: title, jobs: jobsData, jobInfo: jobInfoAll, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 42
                      },
                      __self: _this
                    })
                  )
                });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1245 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\jobs\\Jobs.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _Render = __webpack_require__(1246);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Jobs = __webpack_require__(1396);

  var _Jobs2 = _interopRequireDefault(_Jobs);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Jobs = function (_React$Component) {
    (0, _inherits3.default)(Jobs, _React$Component);

    function Jobs(props) {
      (0, _classCallCheck3.default)(this, Jobs);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (Jobs.__proto__ || (0, _getPrototypeOf2.default)(Jobs)).call(this, props));

      _this2.state = {
        jobs: [],
        loading: true
      };
      return _this2;
    }
    /*
    static propTypes = {
      news: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        contentSnippet: PropTypes.string,
      })).isRequired,
    };
    */

    (0, _createClass3.default)(Jobs, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Jobs2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Jobs2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { loading: this.state.loading, jobs: this.props.jobs, jobInfo: this.props.jobInfo, pagination: this.props.jobs.meta.pagination, __source: {
                fileName: _jsxFileName,
                lineNumber: 41
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Jobs;
  }(_react2.default.Component);

  Jobs.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Jobs2.default)(Jobs);

/***/ }),
/* 1246 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(1247);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Jobs\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _geolocator = __webpack_require__(1248);

  var _geolocator2 = _interopRequireDefault(_geolocator);

  var _Loading = __webpack_require__(1249);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Loaded = __webpack_require__(1255);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _Filter = __webpack_require__(1391);

  var _Filter2 = _interopRequireDefault(_Filter);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1394);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render(props) {
      (0, _classCallCheck3.default)(this, Render);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, props));

      _this.state = {
        jobs: _this.props.jobs,
        type: '*',
        availability: '*',
        city: '*',
        search: '',
        order: 'asc',
        orderParam: 'dateCreated',
        url: 'http://www.southms.com/index.php/api/jobs.json?',
        urlSearch: 'http://www.southms.com/index.php/api/search.json?',
        urlPagination: _this.city,
        location: [],
        loading: false
      };
      return _this;
    }

    (0, _createClass3.default)(Render, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onLoadChange',
      value: function onLoadChange(load) {
        this.setState(load);
      }
    }, {
      key: 'changeJobs',
      value: function changeJobs(jobs) {
        this.setState({
          jobs: jobs
        });
      }
    }, {
      key: 'changeBasicFilter',
      value: function changeBasicFilter(order, orderParam) {
        this.setState({
          order: order,
          orderParam: orderParam
        });
      }
      // Later I'll need to figure out how way to consolidate these functions into as little as possible.

    }, {
      key: 'updateLocation',
      value: function updateLocation(city) {
        // var newArray = this.state.type.slice();
        // newArray.push(type);
        //this.setState({ type: newArray });
        this.setState({ city: city });
      }
    }, {
      key: 'updateType',
      value: function updateType(type) {
        // var newArray = this.state.type.slice();
        // newArray.push(type);
        //this.setState({ type: newArray });
        this.setState({ type: type });
      }
    }, {
      key: 'updateAvailability',
      value: function updateAvailability(availability) {
        console.log("Availability update");
        this.setState({ availability: availability });
      }
    }, {
      key: 'updateSearch',
      value: function updateSearch(search) {
        // var newArray = this.state.type.slice();
        // newArray.push(type);
        //this.setState({ type: newArray });
        this.setState({ search: search });
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        var render = null;
        if (typeof this.state.jobs.data == 'undefined' && !this.state.jobs.data.length > 0 || this.state.loading == true) {
          render = _react2.default.createElement(_Loading2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 72
            },
            __self: this
          });
        } else {
          render = _react2.default.createElement(_Loaded2.default, { jobs: this.state.jobs, pagination: this.props.pagination, data: this.state, onLoadChange: this.onLoadChange.bind(this), changeJobs: this.changeJobs.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 74
            },
            __self: this
          });
        }

        var city = {
          camelCase: this.state.city
        };

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 82
            },
            __self: this
          },
          _react2.default.createElement(_Filter2.default, (_React$createElement = { onLoadChange: this.onLoadChange.bind(this), updateSearch: this.updateSearch.bind(this), changeJobs: this.changeJobs.bind(this), changeBasicFilter: this.changeBasicFilter.bind(this), data: this.state, jobs: this.state.jobs, jobInfo: this.props.jobInfo, location: this.state.location }, (0, _defineProperty3.default)(_React$createElement, 'onLoadChange', this.onLoadChange.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'changeJobs', this.changeJobs.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'data', this.state), (0, _defineProperty3.default)(_React$createElement, 'updateAvailability', this.updateAvailability.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateType', this.updateType.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateLocation', this.updateLocation.bind(this)), (0, _defineProperty3.default)(_React$createElement, '__source', {
            fileName: _jsxFileName,
            lineNumber: 83
          }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement)),
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 84
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 85
                },
                __self: this
              },
              render
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 88
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1247 */,
/* 1248 */,
/* 1249 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Loading\\Loading.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Spinner = __webpack_require__(1250);

  var _Spinner2 = _interopRequireDefault(_Spinner);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loading = __webpack_require__(1253);

  var _Loading2 = _interopRequireDefault(_Loading);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loading = function (_React$Component) {
    (0, _inherits3.default)(Loading, _React$Component);

    function Loading() {
      (0, _classCallCheck3.default)(this, Loading);
      return (0, _possibleConstructorReturn3.default)(this, (Loading.__proto__ || (0, _getPrototypeOf2.default)(Loading)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loading, [{
      key: 'render',

      /*
      static propTypes = {
        news: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          contentSnippet: PropTypes.string,
        })).isRequired,
      };
      */

      value: function render() {
        return _react2.default.createElement(_Spinner2.default, {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 19
          },
          __self: this
        });
      }
    }]);
    return Loading;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loading2.default)(Loading);

/***/ }),
/* 1250 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Loading\\Spinner\\Spinner.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Spinner = __webpack_require__(1251);

  var _Spinner2 = _interopRequireDefault(_Spinner);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Spinner = function (_React$Component) {
    (0, _inherits3.default)(Spinner, _React$Component);

    function Spinner() {
      (0, _classCallCheck3.default)(this, Spinner);
      return (0, _possibleConstructorReturn3.default)(this, (Spinner.__proto__ || (0, _getPrototypeOf2.default)(Spinner)).apply(this, arguments));
    }

    (0, _createClass3.default)(Spinner, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Spinner2.default.spinner, __source: {
              fileName: _jsxFileName,
              lineNumber: 7
            },
            __self: this
          },
          _react2.default.createElement('div', { className: _Spinner2.default.rect1, __source: {
              fileName: _jsxFileName,
              lineNumber: 8
            },
            __self: this
          }),
          _react2.default.createElement('div', { className: _Spinner2.default.rect2, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          }),
          _react2.default.createElement('div', { className: _Spinner2.default.rect3, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: this
          }),
          _react2.default.createElement('div', { className: _Spinner2.default.rect4, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          }),
          _react2.default.createElement('div', { className: _Spinner2.default.rect5, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          })
        );
      }
    }]);
    return Spinner;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Spinner2.default)(Spinner);

/***/ }),
/* 1251 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1252);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Spinner.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Spinner.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1252 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Spinner-spinner-3XREy {\n  margin: 100px auto;\n  width: 6em;\n  height: 6em;\n  text-align: center;\n  font-size: 10px;\n}\n\n.Spinner-spinner-3XREy > div {\n  background-color: rgb(87, 154, 255);\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n\n  -webkit-animation: Spinner-sk-stretchdelay-3UUVI 1.2s infinite ease-in-out;\n  animation: Spinner-sk-stretchdelay-3UUVI 1.2s infinite ease-in-out;\n}\n\n.Spinner-spinner-3XREy .Spinner-rect2-2DkB4 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.Spinner-spinner-3XREy .Spinner-rect3-1_3sK {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n.Spinner-spinner-3XREy .Spinner-rect4-3ZB-R {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.Spinner-spinner-3XREy .Spinner-rect5-3xytv {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes Spinner-sk-stretchdelay-3UUVI {\n  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n  20% { -webkit-transform: scaleY(1.0) }\n}\n\n@keyframes Spinner-sk-stretchdelay-3UUVI {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }  20% {\n    transform: scaleY(1.0);\n    -webkit-transform: scaleY(1.0);\n  }\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Loading/Spinner/Spinner.css"],"names":[],"mappings":"AAAA;EACE,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,mBAAmB;EACnB,gBAAgB;CACjB;;AAED;EACE,oCAAoC;EACpC,aAAa;EACb,WAAW;EACX,sBAAsB;;EAEtB,2EAA6D;EAC7D,mEAAqD;CACtD;;AAED;EACE,+BAA+B;EAC/B,uBAAuB;CACxB;;AAED;EACE,+BAA+B;EAC/B,uBAAuB;CACxB;;AAED;EACE,+BAA+B;EAC/B,uBAAuB;CACxB;;AAED;EACE,+BAA+B;EAC/B,uBAAuB;CACxB;;AAED;EACE,gBAAgB,8BAA8B,EAAE;EAChD,MAAM,8BAA8B,EAAE;CACvC;;AAED;EACE;IACE,uBAAuB;IACvB,+BAA+B;GAChC,EAAE;IACD,uBAAuB;IACvB,+BAA+B;GAChC;CACF","file":"Spinner.css","sourcesContent":[".spinner {\n  margin: 100px auto;\n  width: 6em;\n  height: 6em;\n  text-align: center;\n  font-size: 10px;\n}\n\n.spinner > div {\n  background-color: rgb(87, 154, 255);\n  height: 100%;\n  width: 6px;\n  display: inline-block;\n\n  -webkit-animation: sk-stretchdelay 1.2s infinite ease-in-out;\n  animation: sk-stretchdelay 1.2s infinite ease-in-out;\n}\n\n.spinner .rect2 {\n  -webkit-animation-delay: -1.1s;\n  animation-delay: -1.1s;\n}\n\n.spinner .rect3 {\n  -webkit-animation-delay: -1.0s;\n  animation-delay: -1.0s;\n}\n\n.spinner .rect4 {\n  -webkit-animation-delay: -0.9s;\n  animation-delay: -0.9s;\n}\n\n.spinner .rect5 {\n  -webkit-animation-delay: -0.8s;\n  animation-delay: -0.8s;\n}\n\n@-webkit-keyframes sk-stretchdelay {\n  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }\n  20% { -webkit-transform: scaleY(1.0) }\n}\n\n@keyframes sk-stretchdelay {\n  0%, 40%, 100% {\n    transform: scaleY(0.4);\n    -webkit-transform: scaleY(0.4);\n  }  20% {\n    transform: scaleY(1.0);\n    -webkit-transform: scaleY(1.0);\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"spinner": "Spinner-spinner-3XREy",
  	"sk-stretchdelay": "Spinner-sk-stretchdelay-3UUVI",
  	"rect2": "Spinner-rect2-2DkB4",
  	"rect3": "Spinner-rect3-1_3sK",
  	"rect4": "Spinner-rect4-3ZB-R",
  	"rect5": "Spinner-rect5-3xytv"
  };

/***/ }),
/* 1253 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1254);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Loading.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Loading.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1254 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "", "", {"version":3,"sources":[],"names":[],"mappings":"","file":"Loading.css","sourceRoot":""}]);

  // exports


/***/ }),
/* 1255 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Jobs\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _striptags = __webpack_require__(1256);

  var _striptags2 = _interopRequireDefault(_striptags);

  var _Pagination = __webpack_require__(1257);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  var _Grid = __webpack_require__(1265);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1386);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Loaded);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        jobs: _this.props.jobs.data
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            this.state.jobs.map(function (job, i) {

              job.salary = (0, _numeral2.default)(job.salary).format('$0,0[.]00');
              //job.time = Moment(job.dateCreated.date).format("M/D - ha");
              job.time = (0, _moment2.default)(job.dateCreated).format("M/D");
              job.description = (0, _striptags2.default)(job.description, [], '\n');

              return _react2.default.createElement(
                _Grid2.default,
                { key: job.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 31
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { href: "/jobs/" + job.id, className: _Loaded2.default.job, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 32
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'div',
                    { className: _Loaded2.default.jobPosition, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 33
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'h3',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 34
                        },
                        __self: this
                      },
                      job.position
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _Loaded2.default.jobMeta, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 35
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 36
                          },
                          __self: this
                        }),
                        job.category
                      ),
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-money', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                          },
                          __self: this
                        }),
                        job.salary
                      ),
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                          },
                          __self: this
                        }),
                        job.city
                      ),
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-calendar', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          },
                          __self: this
                        }),
                        job.time
                      )
                    )
                  )
                )
              );
            }),
            _react2.default.createElement(_Pagination2.default, { pagination: this.props.pagination, data: this.props.data, onLoadChange: this.props.onLoadChange, changeData: this.props.changeJobs, __source: {
                fileName: _jsxFileName,
                lineNumber: 46
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1256 */,
/* 1257 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Pagination\\Pagination.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _reactPaginate = __webpack_require__(1258);

  var _reactPaginate2 = _interopRequireDefault(_reactPaginate);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Pagination = __webpack_require__(1263);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Pagination = function (_React$Component) {
    (0, _inherits3.default)(Pagination, _React$Component);

    function Pagination() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, Pagination);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Pagination.__proto__ || (0, _getPrototypeOf2.default)(Pagination)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        data: [],
        offset: 0,
        pageCount: _this2.props.pagination.total_pages
      }, _this2.handlePageClick = function (data) {
        var _this = _this2;
        _this.props.onLoadChange({ loading: true });
        var selected = data.selected + 1;
        console.log("Page click:", selected, data);

        _this2.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other
        .get(_this2.props.data.url + 'orderParam=' + _this2.props.data.orderParam + '&order=' + _this2.props.data.order + '&type=' + _this2.props.data.type + "&city=" + _this2.props.data.city + "&term=" + _this2.props.data.search + "&category=" + _this2.props.data.category + "&pg=" + selected).then(function (result) {
          console.log(result.data.meta.pagination.total_pages);
          _this.setState({ pageCount: result.data.meta.pagination.total_pages });
          _this.props.changeData(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }
    /*
    static propTypes = {
      news: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        contentSnippet: PropTypes.string,
      })).isRequired,
    };
    */

    (0, _createClass3.default)(Pagination, [{
      key: 'render',
      value: function render() {
        var _this = this;
        console.log("Test url thing:", this.props.data.urlPagination);
        /*
        const { activeItem } = this.state;
        var pages = [];
        var multiple;
         if(this.props.pagination.total_pages > 1) {
          multiple = true;
          for (var i = 0; i < this.props.pagination.total_pages; i++) {
            var index = i+1;
            var string = index.toString();
            pages.push(<Menu.Item name={string} active={activeItem === string} onClick={this.handleItemClick} key={i} />)
          }
        }
        */
        var paginate = '';
        if (this.props.pagination.total_pages > 1) {
          paginate = _react2.default.createElement(_reactPaginate2.default, { previousLabel: "previous",
            nextLabel: "next",
            breakLabel: _react2.default.createElement(
              'a',
              { href: '', __source: {
                  fileName: _jsxFileName,
                  lineNumber: 65
                },
                __self: this
              },
              '...'
            ),
            breakClassName: "break-me",
            pageCount: this.state.pageCount,
            marginPagesDisplayed: 2,
            pageRangeDisplayed: 5,
            onPageChange: this.handlePageClick,
            containerClassName: "pagination",
            subContainerClassName: "pages pagination",
            activeClassName: "active", __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          });
        }

        return _react2.default.createElement(
          'div',
          { className: _Pagination2.default.paginationWrapper, __source: {
              fileName: _jsxFileName,
              lineNumber: 78
            },
            __self: this
          },
          paginate
        );
      }
    }]);
    return Pagination;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Pagination2.default)(Pagination);

/***/ }),
/* 1258 */,
/* 1259 */,
/* 1260 */,
/* 1261 */,
/* 1262 */,
/* 1263 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1264);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Pagination.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Pagination.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1264 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Pagination-paginationWrapper-21xTk {\n  /*\n  position: absolute;\n  bottom: 0;\n  */\n  width: 100%;\n  margin-top: 3em;\n}\n\n\n.pagination {\n  list-style-type: none;\n  display: inline-block;\n  background: #d9d9d9;\n  border-radius: 3px;\n  padding: 0;\n  border: 1px solid #a2a2a2\n}\n\n\n.pagination li {\n  display: inline-block;\n}\n\n\n.pagination li:not(:last-child) {\n  border-right: 1px solid grey;\n}\n\n\n.pagination li.active {\n  background: rgb(61, 136, 229);\n}\n\n\n.pagination li.active a {\n  color: white !important;\n}\n\n\n.pagination a {\n  cursor: pointer;\n  color: black;\n  padding: 1em 1.5em;\n  display: block;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Pagination/Pagination.css"],"names":[],"mappings":"AAAA;EACE;;;IAGE;EACF,YAAY;EACZ,gBAAgB;CACjB;;;AAGD;EACE,sBAAsB;EACtB,sBAAsB;EACtB,oBAAoB;EACpB,mBAAmB;EACnB,WAAW;EACX,yBAA0B;CAwB3B;;;AAtBC;EACE,sBAAsB;CAavB;;;AAXC;EACE,6BAA6B;CAC9B;;;AAED;EACE,8BAA8B;CAK/B;;;AAHC;EACE,wBAAwB;CACzB;;;AAIL;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;EACnB,eAAe;CAChB","file":"Pagination.css","sourcesContent":[".paginationWrapper {\n  /*\n  position: absolute;\n  bottom: 0;\n  */\n  width: 100%;\n  margin-top: 3em;\n}\n\n\n:global(.pagination) {\n  list-style-type: none;\n  display: inline-block;\n  background: #d9d9d9;\n  border-radius: 3px;\n  padding: 0;\n  border: 1px solid #a2a2a2;\n\n  & :global(li) {\n    display: inline-block;\n\n    &:global(:not(:last-child)) {\n      border-right: 1px solid grey;\n    }\n\n    &:global(.active) {\n      background: rgb(61, 136, 229);\n\n      & :global(a) {\n        color: white !important;\n      }\n    }\n  }\n\n  & :global(a) {\n    cursor: pointer;\n    color: black;\n    padding: 1em 1.5em;\n    display: block;\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"paginationWrapper": "Pagination-paginationWrapper-21xTk"
  };

/***/ }),
/* 1265 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Grid\\Grid.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Grid = __webpack_require__(1266);

  var _Grid2 = _interopRequireDefault(_Grid);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Grid = function (_React$Component) {
    (0, _inherits3.default)(Grid, _React$Component);

    function Grid() {
      (0, _classCallCheck3.default)(this, Grid);
      return (0, _possibleConstructorReturn3.default)(this, (Grid.__proto__ || (0, _getPrototypeOf2.default)(Grid)).apply(this, arguments));
    }

    (0, _createClass3.default)(Grid, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Grid2.default.grid, __source: {
              fileName: _jsxFileName,
              lineNumber: 10
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Grid2.default.gridItem, __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              },
              __self: this
            },
            this.props.children
          )
        );
      }
    }]);
    return Grid;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Grid2.default)(Grid);

/***/ }),
/* 1266 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1267);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Grid.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Grid.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1267 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Grid-grid-3I6Sd {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.Grid-gridItem-drtJn {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Grid/Grid.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,iCAAiC;EACjC,YAAY;EACZ,cAAc;CACf;;AAED;EACE,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,8BAAiB;MAAjB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;CACjB","file":"Grid.css","sourcesContent":[".grid {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.gridItem {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"grid": "Grid-grid-3I6Sd",
  	"gridItem": "Grid-gridItem-drtJn"
  };

/***/ }),
/* 1268 */,
/* 1269 */,
/* 1270 */
/***/ (function(module, exports, __webpack_require__) {

  var map = {
  	"./af": 1271,
  	"./af.js": 1271,
  	"./ar": 1272,
  	"./ar-dz": 1273,
  	"./ar-dz.js": 1273,
  	"./ar-kw": 1274,
  	"./ar-kw.js": 1274,
  	"./ar-ly": 1275,
  	"./ar-ly.js": 1275,
  	"./ar-ma": 1276,
  	"./ar-ma.js": 1276,
  	"./ar-sa": 1277,
  	"./ar-sa.js": 1277,
  	"./ar-tn": 1278,
  	"./ar-tn.js": 1278,
  	"./ar.js": 1272,
  	"./az": 1279,
  	"./az.js": 1279,
  	"./be": 1280,
  	"./be.js": 1280,
  	"./bg": 1281,
  	"./bg.js": 1281,
  	"./bn": 1282,
  	"./bn.js": 1282,
  	"./bo": 1283,
  	"./bo.js": 1283,
  	"./br": 1284,
  	"./br.js": 1284,
  	"./bs": 1285,
  	"./bs.js": 1285,
  	"./ca": 1286,
  	"./ca.js": 1286,
  	"./cs": 1287,
  	"./cs.js": 1287,
  	"./cv": 1288,
  	"./cv.js": 1288,
  	"./cy": 1289,
  	"./cy.js": 1289,
  	"./da": 1290,
  	"./da.js": 1290,
  	"./de": 1291,
  	"./de-at": 1292,
  	"./de-at.js": 1292,
  	"./de-ch": 1293,
  	"./de-ch.js": 1293,
  	"./de.js": 1291,
  	"./dv": 1294,
  	"./dv.js": 1294,
  	"./el": 1295,
  	"./el.js": 1295,
  	"./en-au": 1296,
  	"./en-au.js": 1296,
  	"./en-ca": 1297,
  	"./en-ca.js": 1297,
  	"./en-gb": 1298,
  	"./en-gb.js": 1298,
  	"./en-ie": 1299,
  	"./en-ie.js": 1299,
  	"./en-nz": 1300,
  	"./en-nz.js": 1300,
  	"./eo": 1301,
  	"./eo.js": 1301,
  	"./es": 1302,
  	"./es-do": 1303,
  	"./es-do.js": 1303,
  	"./es.js": 1302,
  	"./et": 1304,
  	"./et.js": 1304,
  	"./eu": 1305,
  	"./eu.js": 1305,
  	"./fa": 1306,
  	"./fa.js": 1306,
  	"./fi": 1307,
  	"./fi.js": 1307,
  	"./fo": 1308,
  	"./fo.js": 1308,
  	"./fr": 1309,
  	"./fr-ca": 1310,
  	"./fr-ca.js": 1310,
  	"./fr-ch": 1311,
  	"./fr-ch.js": 1311,
  	"./fr.js": 1309,
  	"./fy": 1312,
  	"./fy.js": 1312,
  	"./gd": 1313,
  	"./gd.js": 1313,
  	"./gl": 1314,
  	"./gl.js": 1314,
  	"./gom-latn": 1315,
  	"./gom-latn.js": 1315,
  	"./he": 1316,
  	"./he.js": 1316,
  	"./hi": 1317,
  	"./hi.js": 1317,
  	"./hr": 1318,
  	"./hr.js": 1318,
  	"./hu": 1319,
  	"./hu.js": 1319,
  	"./hy-am": 1320,
  	"./hy-am.js": 1320,
  	"./id": 1321,
  	"./id.js": 1321,
  	"./is": 1322,
  	"./is.js": 1322,
  	"./it": 1323,
  	"./it.js": 1323,
  	"./ja": 1324,
  	"./ja.js": 1324,
  	"./jv": 1325,
  	"./jv.js": 1325,
  	"./ka": 1326,
  	"./ka.js": 1326,
  	"./kk": 1327,
  	"./kk.js": 1327,
  	"./km": 1328,
  	"./km.js": 1328,
  	"./kn": 1329,
  	"./kn.js": 1329,
  	"./ko": 1330,
  	"./ko.js": 1330,
  	"./ky": 1331,
  	"./ky.js": 1331,
  	"./lb": 1332,
  	"./lb.js": 1332,
  	"./lo": 1333,
  	"./lo.js": 1333,
  	"./lt": 1334,
  	"./lt.js": 1334,
  	"./lv": 1335,
  	"./lv.js": 1335,
  	"./me": 1336,
  	"./me.js": 1336,
  	"./mi": 1337,
  	"./mi.js": 1337,
  	"./mk": 1338,
  	"./mk.js": 1338,
  	"./ml": 1339,
  	"./ml.js": 1339,
  	"./mr": 1340,
  	"./mr.js": 1340,
  	"./ms": 1341,
  	"./ms-my": 1342,
  	"./ms-my.js": 1342,
  	"./ms.js": 1341,
  	"./my": 1343,
  	"./my.js": 1343,
  	"./nb": 1344,
  	"./nb.js": 1344,
  	"./ne": 1345,
  	"./ne.js": 1345,
  	"./nl": 1346,
  	"./nl-be": 1347,
  	"./nl-be.js": 1347,
  	"./nl.js": 1346,
  	"./nn": 1348,
  	"./nn.js": 1348,
  	"./pa-in": 1349,
  	"./pa-in.js": 1349,
  	"./pl": 1350,
  	"./pl.js": 1350,
  	"./pt": 1351,
  	"./pt-br": 1352,
  	"./pt-br.js": 1352,
  	"./pt.js": 1351,
  	"./ro": 1353,
  	"./ro.js": 1353,
  	"./ru": 1354,
  	"./ru.js": 1354,
  	"./sd": 1355,
  	"./sd.js": 1355,
  	"./se": 1356,
  	"./se.js": 1356,
  	"./si": 1357,
  	"./si.js": 1357,
  	"./sk": 1358,
  	"./sk.js": 1358,
  	"./sl": 1359,
  	"./sl.js": 1359,
  	"./sq": 1360,
  	"./sq.js": 1360,
  	"./sr": 1361,
  	"./sr-cyrl": 1362,
  	"./sr-cyrl.js": 1362,
  	"./sr.js": 1361,
  	"./ss": 1363,
  	"./ss.js": 1363,
  	"./sv": 1364,
  	"./sv.js": 1364,
  	"./sw": 1365,
  	"./sw.js": 1365,
  	"./ta": 1366,
  	"./ta.js": 1366,
  	"./te": 1367,
  	"./te.js": 1367,
  	"./tet": 1368,
  	"./tet.js": 1368,
  	"./th": 1369,
  	"./th.js": 1369,
  	"./tl-ph": 1370,
  	"./tl-ph.js": 1370,
  	"./tlh": 1371,
  	"./tlh.js": 1371,
  	"./tr": 1372,
  	"./tr.js": 1372,
  	"./tzl": 1373,
  	"./tzl.js": 1373,
  	"./tzm": 1374,
  	"./tzm-latn": 1375,
  	"./tzm-latn.js": 1375,
  	"./tzm.js": 1374,
  	"./uk": 1376,
  	"./uk.js": 1376,
  	"./ur": 1377,
  	"./ur.js": 1377,
  	"./uz": 1378,
  	"./uz-latn": 1379,
  	"./uz-latn.js": 1379,
  	"./uz.js": 1378,
  	"./vi": 1380,
  	"./vi.js": 1380,
  	"./x-pseudo": 1381,
  	"./x-pseudo.js": 1381,
  	"./yo": 1382,
  	"./yo.js": 1382,
  	"./zh-cn": 1383,
  	"./zh-cn.js": 1383,
  	"./zh-hk": 1384,
  	"./zh-hk.js": 1384,
  	"./zh-tw": 1385,
  	"./zh-tw.js": 1385
  };
  function webpackContext(req) {
  	return __webpack_require__(webpackContextResolve(req));
  };
  function webpackContextResolve(req) {
  	return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
  };
  webpackContext.keys = function webpackContextKeys() {
  	return Object.keys(map);
  };
  webpackContext.resolve = webpackContextResolve;
  module.exports = webpackContext;
  webpackContext.id = 1270;


/***/ }),
/* 1271 */,
/* 1272 */,
/* 1273 */,
/* 1274 */,
/* 1275 */,
/* 1276 */,
/* 1277 */,
/* 1278 */,
/* 1279 */,
/* 1280 */,
/* 1281 */,
/* 1282 */,
/* 1283 */,
/* 1284 */,
/* 1285 */,
/* 1286 */,
/* 1287 */,
/* 1288 */,
/* 1289 */,
/* 1290 */,
/* 1291 */,
/* 1292 */,
/* 1293 */,
/* 1294 */,
/* 1295 */,
/* 1296 */,
/* 1297 */,
/* 1298 */,
/* 1299 */,
/* 1300 */,
/* 1301 */,
/* 1302 */,
/* 1303 */,
/* 1304 */,
/* 1305 */,
/* 1306 */,
/* 1307 */,
/* 1308 */,
/* 1309 */,
/* 1310 */,
/* 1311 */,
/* 1312 */,
/* 1313 */,
/* 1314 */,
/* 1315 */,
/* 1316 */,
/* 1317 */,
/* 1318 */,
/* 1319 */,
/* 1320 */,
/* 1321 */,
/* 1322 */,
/* 1323 */,
/* 1324 */,
/* 1325 */,
/* 1326 */,
/* 1327 */,
/* 1328 */,
/* 1329 */,
/* 1330 */,
/* 1331 */,
/* 1332 */,
/* 1333 */,
/* 1334 */,
/* 1335 */,
/* 1336 */,
/* 1337 */,
/* 1338 */,
/* 1339 */,
/* 1340 */,
/* 1341 */,
/* 1342 */,
/* 1343 */,
/* 1344 */,
/* 1345 */,
/* 1346 */,
/* 1347 */,
/* 1348 */,
/* 1349 */,
/* 1350 */,
/* 1351 */,
/* 1352 */,
/* 1353 */,
/* 1354 */,
/* 1355 */,
/* 1356 */,
/* 1357 */,
/* 1358 */,
/* 1359 */,
/* 1360 */,
/* 1361 */,
/* 1362 */,
/* 1363 */,
/* 1364 */,
/* 1365 */,
/* 1366 */,
/* 1367 */,
/* 1368 */,
/* 1369 */,
/* 1370 */,
/* 1371 */,
/* 1372 */,
/* 1373 */,
/* 1374 */,
/* 1375 */,
/* 1376 */,
/* 1377 */,
/* 1378 */,
/* 1379 */,
/* 1380 */,
/* 1381 */,
/* 1382 */,
/* 1383 */,
/* 1384 */,
/* 1385 */,
/* 1386 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1387);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1387 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.Loaded-job-14u0O {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%\n}\n.Loaded-job-14u0O:hover {\n  box-shadow: 0px 0px 3px 0px #7f7f7f;\n  -webkit-transform: scale(1.025);\n  -ms-transform: scale(1.025);\n  transform: scale(1.025);\n  color: black;\n  border: 1px solid dimgrey\n}\n.Loaded-job-14u0O:hover .Loaded-description-pTsLg .Loaded-descriptionText-3Ig1A {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"0.8\" /></filter></svg>#filter');\n  -webkit-filter: blur(.8px);\n          filter: blur(.8px)\n}\n.Loaded-job-14u0O:hover .Loaded-viewFull-BhsJy {\n  opacity: 1\n}\n\n.Loaded-jobPosition-3XMVZ {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-3XMVZ h1,\n  .Loaded-jobPosition-3XMVZ h2,\n  .Loaded-jobPosition-3XMVZ h3,\n  .Loaded-jobPosition-3XMVZ h4,\n  .Loaded-jobPosition-3XMVZ h5,\n  .Loaded-jobPosition-3XMVZ h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-pTsLg {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.Loaded-jobMeta-1hdMl {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  color: #676767\n}\n\n.Loaded-jobMeta-1hdMl p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0\n}\n\n.Loaded-jobMeta-1hdMl p i {\n  margin-right: .5em\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.Loaded-viewFull-BhsJy {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 24px;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out\n}\n\n.Loaded-viewFull-BhsJy button {\n  font-weight: 600;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Jobs/Loaded/Loaded.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Jobs/Loaded/<no source>"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;EAkBE;AACF;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,iBAAkB;CAkBnB;AAhBC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,yBAA0B;CAS3B;AAPC;EClCJ,wKAAA;EDmCM,2BAAmB;UAAnB,kBAAmB;CACpB;AAED;EACE,UAAW;CACZ;;AAIL;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,gCAAgC;CACjC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,cAAe;CAWhB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,SAAU;CAKX;;AAHC;EACE,kBAAmB;CACpB;;AAIL;;;;;;;;;;;;;;;;EAgBE;;AAEF;EACE,WAAW;EACX,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,gBAAkB;EAAlB,kBAAkB;EAClB,+BAAgC;CASjC;;AAPC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,gCAAiC;CAClC","file":"Loaded.css","sourcesContent":["/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 0px #7f7f7f;\n    -webkit-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    transform: scale(1.025);\n    color: black;\n    border: 1px solid dimgrey;\n\n    & .description .descriptionText {\n      filter: blur(.8px);\n    }\n\n    & .viewFull {\n      opacity: 1;\n    }\n  }\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  color: #676767;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.viewFull {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out;\n\n  & button {\n    font-weight: 600;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"job": "Loaded-job-14u0O",
  	"description": "Loaded-description-pTsLg",
  	"descriptionText": "Loaded-descriptionText-3Ig1A",
  	"viewFull": "Loaded-viewFull-BhsJy",
  	"jobPosition": "Loaded-jobPosition-3XMVZ",
  	"jobMeta": "Loaded-jobMeta-1hdMl"
  };

/***/ }),
/* 1388 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\QuicklinksSidebar\\QuicklinksSidebar.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _QuicklinksSidebar = __webpack_require__(1389);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var QuicklinksSidebar = function (_React$Component) {
    (0, _inherits3.default)(QuicklinksSidebar, _React$Component);

    function QuicklinksSidebar(props) {
      (0, _classCallCheck3.default)(this, QuicklinksSidebar);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (QuicklinksSidebar.__proto__ || (0, _getPrototypeOf2.default)(QuicklinksSidebar)).call(this, props));

      _this2.state = {
        menu: [],
        citySlug: _this2.props.citySlug ? _this2.props.citySlug : 'default'
      };
      return _this2;
    }

    (0, _createClass3.default)(QuicklinksSidebar, [{
      key: 'componentDidMount',
      value: function componentDidMount() {

        var _this = this;
        this.serverRequest = _axios2.default.get('http://www.southms.com/index.php/api/quick-links.json?city=' + this.state.citySlug).then(function (result) {
          console.log("Got data:", result.data.data[0].menu);
          _this.setState({
            menu: result.data.data[0].menu
          });
        });
      }
    }, {
      key: 'handleItemClick',
      value: function handleItemClick() {}
    }, {
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _QuicklinksSidebar2.default.sidebar, __source: {
              fileName: _jsxFileName,
              lineNumber: 37
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Menu,
            { vertical: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 38
              },
              __self: this
            },
            this.state.menu.map(function (item, i) {
              console.log("Menu item:", item);
              return _react2.default.createElement(
                _semanticUiReact.Menu.Item,
                { key: i, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 42
                  },
                  __self: this
                },
                item.linkable == '1' ? _react2.default.createElement(
                  'a',
                  { href: item.link, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 42
                    },
                    __self: this
                  },
                  item.name
                ) : item.name,
                item.subSection == '1' ? _react2.default.createElement(
                  _semanticUiReact.Menu.Menu,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 43
                    },
                    __self: this
                  },
                  item.subSectionContent.map(function (sub, i2) {
                    return _react2.default.createElement(_semanticUiReact.Menu.Item, { name: sub.subSectionHeading, key: i2, href: sub.subSectionlink, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 44
                      },
                      __self: this
                    });
                  })
                ) : ''
              );
            })
          )
        );
      }
    }]);
    return QuicklinksSidebar;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_QuicklinksSidebar2.default)(QuicklinksSidebar);

/***/ }),
/* 1389 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1390);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./QuicklinksSidebar.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./QuicklinksSidebar.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1390 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".sidebar-dropdown {\n}\n\n.sidebar-dropdown .menu {\n  right: 100% !important;\n}\n\n.ui.vertical.menu {\n  width: 100% !important;\n}\n\n.QuicklinksSidebar-sidebar-1dD6B {\n  -ms-flex-preferred-size: 15%;\n      flex-basis: 15%;\n}\n\nmain {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/QuicklinksSidebar/QuicklinksSidebar.css"],"names":[],"mappings":"AAAA;CAIC;;AAHC;EACE,uBAAuB;CACxB;;AAGH;EACE,uBAAuB;CACxB;;AAED;EACE,6BAAgB;MAAhB,gBAAgB;CACjB;;AAED;EACE,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;CACT","file":"QuicklinksSidebar.css","sourcesContent":[":global(.sidebar-dropdown) {\n  & :global(.menu) {\n    right: 100% !important;\n  }\n}\n\n:global(.ui.vertical.menu) {\n  width: 100% !important;\n}\n\n.sidebar {\n  flex-basis: 15%;\n}\n\n:global(main) {\n  flex: 1;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"sidebar": "QuicklinksSidebar-sidebar-1dD6B"
  };

/***/ }),
/* 1391 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Jobs\\Filter\\Filter.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(400);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Filter = __webpack_require__(1392);

  var _Filter2 = _interopRequireDefault(_Filter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var JobsFilter = function (_React$Component) {
    (0, _inherits3.default)(JobsFilter, _React$Component);

    function JobsFilter() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, JobsFilter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = JobsFilter.__proto__ || (0, _getPrototypeOf2.default)(JobsFilter)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        order: _this2.props.data.order,
        orderParam: _this2.props.data.orderParam,
        availabilities: _this2.props.jobInfo.availabilities,
        types: _this2.props.jobInfo.types,
        locations: _this2.props.jobInfo.locations
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }

    (0, _createClass3.default)(JobsFilter, [{
      key: 'orderChanged',
      value: function orderChanged(event, data) {
        var _this = this;
        console.log("Sort changed", data.value);
        _this.props.onLoadChange({ loading: true });
        this.setState({
          order: data.value
        });
        this.props.changeBasicFilter(data.value, this.state.orderParam);
        this.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&availability=" + this.props.data.availability + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeJobs(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'orderParamChanged',
      value: function orderParamChanged(event, data) {
        var _this = this;
        console.log("Sort changed", data.value);
        _this.props.onLoadChange({ loading: true });
        this.setState({
          orderParam: data.value
        });
        this.props.changeBasicFilter(this.state.order, data.value);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&availability=" + this.props.data.availability + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeJobs(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log(this.state.categories, this.state.types, this.state.locations);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'locationChanged',
      value: function locationChanged(event, data) {
        var _this = this;
        console.log("Job Location changed", event.target, data);
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        /*
        var val = this.props.data.type;
        if(data.checked) {
          val.push(data.value);
        } else {
          // I'm sure there's a better way
            for(var i = val.length - 1; i >= 0; i--) {
                if(val[i] === data.value) {
                   val.splice(i, 1);
                }
            }
            console.log("Array now:", val);
        }
        */

        if (val.length > 0) {
          this.props.updateLocation(val);
          val = val.join();
        } else {
          this.props.updateLocation('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&availability=" + this.props.data.availability + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + val).then(function (result) {
          _this.props.changeJobs(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'typeChanged',
      value: function typeChanged(event, data) {
        var _this = this;
        // console.log("Job Type changed", event.target, data);
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        console.log("Job type value:", val);
        /*
        var val = this.props.data.type;
        if(data.checked) {
          val.push(data.value);
        } else {
          // I'm sure there's a better way
            for(var i = val.length - 1; i >= 0; i--) {
                if(val[i] === data.value) {
                   val.splice(i, 1);
                }
            }
            console.log("Array now:", val);
        }
        */
        if (val.length > 0) {
          this.props.updateType(val);
          val = val.join();
        } else {
          this.props.updateType('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&availability=" + this.props.data.availability + "&city=" + this.props.data.city + "&term=" + this.props.data.search + '&type=' + val).then(function (result) {
          _this.props.changeJobs(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'availabilityChanged',
      value: function availabilityChanged(event, data) {
        var _this = this;
        console.log("Job Availability changed", event.target, data.value);
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateAvailability(val);
          val = val.join();
        } else {
          this.props.updateAvailability('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&term=" + this.props.data.search + "&availability=" + val).then(function (result) {
          _this.props.changeJobs(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'searchChanged',
      value: function searchChanged(event, data) {
        var _this = this;
        console.log("Search changed", event.target, data.value);
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        this.props.updateSearch(val);
        console.log("Value is:", val);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&availability=" + this.props.data.availabilities + "&term=" + val).then(function (result) {
          _this.props.changeJobs(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var options = [{ text: 'Date Added', value: 'dateCreated' }, { text: 'Salary', value: 'jobSalary' }];

        var options2 = [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }];

        return _react2.default.createElement(
          'div',
          { className: _Filter2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 188
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.left, __source: {
                fileName: _jsxFileName,
                lineNumber: 189
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Categories', multiple: true, search: true, selection: true, scrolling: true, options: this.state.availabilities, onChange: this.availabilityChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 190
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Types', multiple: true, search: true, selection: true, scrolling: true, options: this.state.types, onChange: this.typeChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 191
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Locations', multiple: true, search: true, selection: true, scrolling: true, options: this.state.locations, onChange: this.locationChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 192
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.right, __source: {
                fileName: _jsxFileName,
                lineNumber: 194
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Input,
              { type: 'text', placeholder: 'Search...', action: true, onChange: this.searchChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 195
                },
                __self: this
              },
              _react2.default.createElement('input', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 196
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options, defaultValue: 'dateCreated', onChange: this.orderParamChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 197
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options2, defaultValue: 'asc', onChange: this.orderChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 198
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return JobsFilter;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Filter2.default)(JobsFilter);

/***/ }),
/* 1392 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1393);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1393 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Filter-container-2SUk9 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&.left .dropdown {\n  margin-right: .5em !important;\n}\n\n.Filter-left-t2Kg7 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-right: .5em\n}\n\n.Filter-left-t2Kg7 .ui.dropdown {\n  //margin-right: .5em !important;\n  border-radius: 0 !important;\n}\n\n.Filter-right-1-_fR {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Jobs/Filter/Filter.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,oBAAgB;MAAhB,gBAAgB;EAChB,sCAAsC;CACvC;;AAED;;;;;;EAME;;AAEF;EACE,8BAA8B;CAC/B;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAoB;CAMrB;;AAJC;EACE,gCAAgC;EAChC,4BAA4B;CAC7B;;AAGH;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB","file":"Filter.css","sourcesContent":[".container {\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&:global(.left .dropdown) {\n  margin-right: .5em !important;\n}\n\n.left {\n  display: flex;\n  align-items: flex-start;\n  padding-right: .5em;\n\n  & :global(.ui.dropdown) {\n    //margin-right: .5em !important;\n    border-radius: 0 !important;\n  }\n}\n\n.right {\n  display: flex;\n  margin-left: auto;\n  align-items: flex-start;\n  padding-left: .5em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Filter-container-2SUk9",
  	"left": "Filter-left-t2Kg7",
  	"right": "Filter-right-1-_fR"
  };

/***/ }),
/* 1394 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1395);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1395 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-ZPYs8 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-1kDF0 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Jobs/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-ZPYs8",
  	"container": "Render-container-1kDF0"
  };

/***/ }),
/* 1396 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1397);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Jobs.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Jobs.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1397 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n\n    /*\n   * Typography\n   * ======================================================================== */\n\n    /*\n   * Layout\n   * ======================================================================== */\n\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n    /* Extra small screen / phone */\n\n    /* Small screen / tablet */\n\n    /* Medium screen / desktop */\n\n    /* Large screen / wide desktop */\n}\n\n.Jobs-root-3jluv {\n}\n\n.Jobs-container-2n39A {\n  \n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/jobs/Jobs.css"],"names":[],"mappings":"AAAA;;IACE;;gFAE8E;;IAI9E;;gFAE8E;;IAI9E;;gFAE8E;;IAErD,gCAAgC;;IAChC,2BAA2B;;IAC3B,6BAA6B;;IAC7B,iCAAiC;CAC3D;;ACnBD;CACC;;AAED;;CAEC","file":"Jobs.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n}\n\n.container {\n  \n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Jobs-root-3jluv",
  	"container": "Jobs-container-2n39A"
  };

/***/ }),
/* 1398 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\job\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Job = __webpack_require__(1399);

  var _Job2 = _interopRequireDefault(_Job);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Job';

  exports.default = {

    path: '/jobs/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/jobs/' + params.id + '.json');

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                data = _context.sent;
                return _context.abrupt('return', data && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Job2.default, { title: title, job: data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                      },
                      __self: _this
                    })
                  )
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1399 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\job\\Job.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _RenderJob = __webpack_require__(1400);

  var _RenderJob2 = _interopRequireDefault(_RenderJob);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Job = __webpack_require__(1406);

  var _Job2 = _interopRequireDefault(_Job);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Job = function (_React$Component) {
    (0, _inherits3.default)(Job, _React$Component);

    function Job(props) {
      (0, _classCallCheck3.default)(this, Job);
      return (0, _possibleConstructorReturn3.default)(this, (Job.__proto__ || (0, _getPrototypeOf2.default)(Job)).call(this, props));
    }
    /*
    static propTypes = {
      news: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        contentSnippet: PropTypes.string,
      })).isRequired,
    };
    */

    (0, _createClass3.default)(Job, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Job2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Job2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            _react2.default.createElement(_RenderJob2.default, { job: this.props.job, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Job;
  }(_react2.default.Component);

  Job.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Job2.default)(Job);

/***/ }),
/* 1400 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Job\\RenderJob\\RenderJob.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _JobLoaded = __webpack_require__(1401);

  var _JobLoaded2 = _interopRequireDefault(_JobLoaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _RenderJob = __webpack_require__(1404);

  var _RenderJob2 = _interopRequireDefault(_RenderJob);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var RenderJob = function (_React$Component) {
    (0, _inherits3.default)(RenderJob, _React$Component);

    function RenderJob() {
      (0, _classCallCheck3.default)(this, RenderJob);
      return (0, _possibleConstructorReturn3.default)(this, (RenderJob.__proto__ || (0, _getPrototypeOf2.default)(RenderJob)).apply(this, arguments));
    }

    (0, _createClass3.default)(RenderJob, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _RenderJob2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _RenderJob2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(_JobLoaded2.default, { job: this.props.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            })
          )
        );
      }
    }]);
    return RenderJob;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_RenderJob2.default)(RenderJob);

/***/ }),
/* 1401 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Job\\JobLoaded\\JobLoaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _JobLoaded = __webpack_require__(1402);

  var _JobLoaded2 = _interopRequireDefault(_JobLoaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var JobLoaded = function (_React$Component) {
    (0, _inherits3.default)(JobLoaded, _React$Component);

    function JobLoaded() {
      (0, _classCallCheck3.default)(this, JobLoaded);
      return (0, _possibleConstructorReturn3.default)(this, (JobLoaded.__proto__ || (0, _getPrototypeOf2.default)(JobLoaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(JobLoaded, [{
      key: 'fileUpload',

      /*
      static propTypes = {
        news: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          contentSnippet: PropTypes.string,
        })).isRequired,
      };
      */

      value: function fileUpload() {
        console.log("Upload clicked.");
        document.getElementById("file-upload").click();
      }
    }, {
      key: 'fileChange',
      value: function fileChange(e) {
        console.log("File changed.");
        var name = '';

        for (var i = 0; i < e.target.files.length; i++) {
          name += e.target.files[i].name + ', ';
        }
        // remove trailing ","
        name = name.replace(/,\s*$/, '');

        document.getElementById("file-text").value = name;
      }
    }, {
      key: 'render',
      value: function render() {
        var data = this.props.job;

        data.salary = (0, _numeral2.default)(data.salary).format('$0,0[.]00');
        data.time = (0, _moment2.default)(data.dateCreated.date).format("M/D - ha");

        return _react2.default.createElement(
          'div',
          { className: _JobLoaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 44
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _JobLoaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 45
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _JobLoaded2.default.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 46
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _JobLoaded2.default.jobPosition, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 47
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 48
                    },
                    __self: this
                  },
                  data.position
                ),
                _react2.default.createElement(
                  'div',
                  { className: _JobLoaded2.default.jobMeta, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 49
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 50
                      },
                      __self: this
                    }),
                    data.category
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-money', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 51
                      },
                      __self: this
                    }),
                    data.salary
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 52
                      },
                      __self: this
                    }),
                    data.city
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-calendar', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 53
                      },
                      __self: this
                    }),
                    data.time
                  )
                )
              ),
              _react2.default.createElement('div', { className: _JobLoaded2.default.description, dangerouslySetInnerHTML: { __html: data.description }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 56
                },
                __self: this
              }),
              _react2.default.createElement(
                _semanticUiReact.Modal,
                { dimmer: "blurring", closeIcon: 'close', trigger: _react2.default.createElement(
                    _semanticUiReact.Button,
                    { className: _JobLoaded2.default.apply, color: 'blue', fluid: true, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 59
                      },
                      __self: this
                    },
                    'Contact Poster'
                  ), __source: {
                    fileName: _jsxFileName,
                    lineNumber: 59
                  },
                  __self: this
                },
                _react2.default.createElement(
                  _semanticUiReact.Modal.Header,
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 60
                    },
                    __self: this
                  },
                  'Applying to ',
                  data.position
                ),
                _react2.default.createElement(
                  _semanticUiReact.Modal.Content,
                  { image: true, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 61
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    _semanticUiReact.Modal.Description,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 62
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      _semanticUiReact.Form,
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 63
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        _semanticUiReact.Form.Group,
                        { widths: 'equal', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 64
                          },
                          __self: this
                        },
                        _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Input, label: 'First name', placeholder: 'First name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 65
                          },
                          __self: this
                        }),
                        _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Input, label: 'Last name', placeholder: 'Last name', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 66
                          },
                          __self: this
                        }),
                        _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.Input, label: 'Email', placeholder: 'Email@email.com', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 67
                          },
                          __self: this
                        })
                      ),
                      _react2.default.createElement(
                        _semanticUiReact.Form.Field,
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 69
                          },
                          __self: this
                        },
                        _react2.default.createElement(
                          'label',
                          { htmlFor: 'file-upload', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 70
                            },
                            __self: this
                          },
                          'Upload Resume'
                        ),
                        _react2.default.createElement(
                          'div',
                          { className: 'ui fluid file input action', __source: {
                              fileName: _jsxFileName,
                              lineNumber: 71
                            },
                            __self: this
                          },
                          _react2.default.createElement('input', { type: 'text', id: 'file-text', readOnly: true, onClick: this.fileUpload, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 72
                            },
                            __self: this
                          }),
                          _react2.default.createElement('input', { className: _JobLoaded2.default.fileInput, type: 'file', id: 'file-upload', name: 'files1', autoComplete: 'off', onChange: this.fileChange, __source: {
                              fileName: _jsxFileName,
                              lineNumber: 73
                            },
                            __self: this
                          }),
                          _react2.default.createElement(
                            'div',
                            { className: 'ui button', onClick: this.fileUpload, __source: {
                                fileName: _jsxFileName,
                                lineNumber: 74
                              },
                              __self: this
                            },
                            'Select...'
                          )
                        )
                      ),
                      _react2.default.createElement(_semanticUiReact.Form.Field, { control: _semanticUiReact.TextArea, label: 'Anything Else?', placeholder: 'Write anything else you need to...', __source: {
                          fileName: _jsxFileName,
                          lineNumber: 79
                        },
                        __self: this
                      }),
                      _react2.default.createElement(
                        _semanticUiReact.Form.Field,
                        { control: _semanticUiReact.Button, fluid: true, __source: {
                            fileName: _jsxFileName,
                            lineNumber: 80
                          },
                          __self: this
                        },
                        'Submit'
                      )
                    )
                  )
                )
              )
            )
          )
        );
      }
    }]);
    return JobLoaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_JobLoaded2.default)(JobLoaded);

/***/ }),
/* 1402 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1403);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./JobLoaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./JobLoaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1403 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".JobLoaded-container-37DHi {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.JobLoaded-job-aTrtG {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.JobLoaded-jobPosition-36SRk {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.JobLoaded-jobPosition-36SRk h1,\n  .JobLoaded-jobPosition-36SRk h2,\n  .JobLoaded-jobPosition-36SRk h3,\n  .JobLoaded-jobPosition-36SRk h4,\n  .JobLoaded-jobPosition-36SRk h5,\n  .JobLoaded-jobPosition-36SRk h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.JobLoaded-description-7EwI1 {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.JobLoaded-apply-3aFdW {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.JobLoaded-fileInput-3s-0l {\n    display: none !important;\n}\n\n.JobLoaded-jobMeta-2-7qb {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%\n}\n\n.JobLoaded-jobMeta-2-7qb p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.JobLoaded-jobMeta-2-7qb p i {\n  margin-right: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Job/JobLoaded/JobLoaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,gCAAgC;EAChC,oCAAoC;EACpC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;EACE,uCAAuC;EACvC,4BAA4B;EAC5B,8BAA8B;EAC9B,qBAAqB;CACtB;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,YAAQ;CAWT;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB","file":"JobLoaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.apply {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.fileInput {\n    display: none !important;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "JobLoaded-container-37DHi",
  	"job": "JobLoaded-job-aTrtG",
  	"jobPosition": "JobLoaded-jobPosition-36SRk",
  	"description": "JobLoaded-description-7EwI1",
  	"apply": "JobLoaded-apply-3aFdW",
  	"fileInput": "JobLoaded-fileInput-3s-0l",
  	"jobMeta": "JobLoaded-jobMeta-2-7qb"
  };

/***/ }),
/* 1404 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1405);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./RenderJob.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./RenderJob.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1405 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".RenderJob-description-1KtVW {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.RenderJob-container-1HOhL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Job/RenderJob/RenderJob.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"RenderJob.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "RenderJob-description-1KtVW",
  	"container": "RenderJob-container-1HOhL"
  };

/***/ }),
/* 1406 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1407);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Job.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Job.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1407 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Job-root-3JkSl {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Job-container-2G7Nz {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/job/Job.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,cAAc;EACd,WAAW;CACZ","file":"Job.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Job-root-3JkSl",
  	"container": "Job-container-2G7Nz"
  };

/***/ }),
/* 1408 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\events\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Events = __webpack_require__(1409);

  var _Events2 = _interopRequireDefault(_Events);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Events';

  exports.default = {

    path: '/events',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, events, eventTypes, eventTypesData, cities, citiesData, eventsInfo;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/events.json?city=*');

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                events = _context.sent;
                _context.next = 8;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/event-types.json');

              case 8:
                eventTypes = _context.sent;
                _context.next = 11;
                return eventTypes.json();

              case 11:
                eventTypesData = _context.sent;
                _context.next = 14;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities.json');

              case 14:
                cities = _context.sent;
                _context.next = 17;
                return cities.json();

              case 17:
                citiesData = _context.sent;
                eventsInfo = {
                  types: eventTypesData.types,
                  locations: citiesData.data
                };
                return _context.abrupt('return', events && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Events2.default, { title: title, events: events, eventsInfo: eventsInfo, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: _this
                    })
                  )
                });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1409 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\events\\Events.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Render = __webpack_require__(1410);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Events = __webpack_require__(1419);

  var _Events2 = _interopRequireDefault(_Events);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Events = function (_React$Component) {
    (0, _inherits3.default)(Events, _React$Component);

    function Events(props) {
      (0, _classCallCheck3.default)(this, Events);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (Events.__proto__ || (0, _getPrototypeOf2.default)(Events)).call(this, props));

      _this2.state = {
        events: [],
        loading: true
      };
      return _this2;
    }
    /*
    static propTypes = {
      news: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        contentSnippet: PropTypes.string,
      })).isRequired,
    };
    */

    (0, _createClass3.default)(Events, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Events2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Events2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { loading: this.state.loading, events: this.props.events, eventsInfo: this.props.eventsInfo, pagination: this.props.events.meta.pagination, __source: {
                fileName: _jsxFileName,
                lineNumber: 40
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Events;
  }(_react2.default.Component);

  Events.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Events2.default)(Events);

/***/ }),
/* 1410 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(1247);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Events\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loading = __webpack_require__(1249);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Loaded = __webpack_require__(1411);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _Filter = __webpack_require__(1414);

  var _Filter2 = _interopRequireDefault(_Filter);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1417);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Render);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        events: _this.props.events,
        type: '*',
        city: '*',
        search: '',
        order: 'asc',
        orderParam: 'dateCreated',
        url: 'http://www.southms.com/index.php/api/events.json?',
        location: [],
        loading: false
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Render, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onLoadChange',
      value: function onLoadChange(load) {
        this.setState(load);
      }
    }, {
      key: 'changeEvents',
      value: function changeEvents(events) {
        this.setState({
          events: events
        });
      }
    }, {
      key: 'changeFilter',
      value: function changeFilter(order, orderParam) {
        this.setState({
          order: order,
          orderParam: orderParam
        });
      }
    }, {
      key: 'updateLocation',
      value: function updateLocation(city) {
        this.setState({ city: city });
      }
    }, {
      key: 'updateType',
      value: function updateType(type) {
        this.setState({ type: type });
      }
    }, {
      key: 'updateSearch',
      value: function updateSearch(search) {
        this.setState({ search: search });
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        var render = null;
        if (typeof this.state.events.data == 'undefined' && !this.state.events.data.length > 0 || this.state.loading == true) {
          render = _react2.default.createElement(_Loading2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 52
            },
            __self: this
          });
        } else {
          render = _react2.default.createElement(_Loaded2.default, { events: this.state.events, pagination: this.props.pagination, data: this.state, onLoadChange: this.onLoadChange.bind(this), changeEvents: this.changeEvents.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 54
            },
            __self: this
          });
        }

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          },
          _react2.default.createElement(_Filter2.default, (_React$createElement = { events: this.state.events, updateSearch: this.updateSearch.bind(this), changeFilter: this.changeFilter.bind(this), data: this.state, eventsInfo: this.props.eventsInfo, location: this.state.location, onLoadChange: this.onLoadChange.bind(this), changeEvents: this.changeEvents.bind(this) }, (0, _defineProperty3.default)(_React$createElement, 'data', this.state), (0, _defineProperty3.default)(_React$createElement, 'updateType', this.updateType.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateLocation', this.updateLocation.bind(this)), (0, _defineProperty3.default)(_React$createElement, '__source', {
            fileName: _jsxFileName,
            lineNumber: 59
          }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement)),
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 60
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 61
                },
                __self: this
              },
              render
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 64
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1411 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Events\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _Pagination = __webpack_require__(1257);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  var _Grid = __webpack_require__(1265);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1412);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',

      /*
      static propTypes = {
        news: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          contentSnippet: PropTypes.string,
        })).isRequired,
      };
      */

      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            this.props.events.data.map(function (event, i) {

              event.time = (0, _moment2.default)(event.dateCreated.date).format("M/D - ha");

              return _react2.default.createElement(
                _Grid2.default,
                { key: event.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 32
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { href: "/events/" + event.id, className: _Loaded2.default.job, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 33
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'div',
                    { className: _Loaded2.default.jobPosition, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 34
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'h3',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 35
                        },
                        __self: this
                      },
                      event.title
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _Loaded2.default.jobMeta, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 36
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 37
                          },
                          __self: this
                        }),
                        event.type
                      ),
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 38
                          },
                          __self: this
                        }),
                        event.city
                      ),
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-calendar', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 39
                          },
                          __self: this
                        }),
                        event.time
                      )
                    )
                  )
                )
              );
            }),
            _react2.default.createElement(_Pagination2.default, { pagination: this.props.pagination, data: this.props.data, onLoadChange: this.props.onLoadChange, changeJobs: this.props.changeEvents, __source: {
                fileName: _jsxFileName,
                lineNumber: 57
              },
              __self: this
            }),
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.ad, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 58
                },
                __self: this
              },
              'Ad'
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1412 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1413);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1413 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.Loaded-job-ScXxK {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%\n}\n.Loaded-job-ScXxK:hover {\n  box-shadow: 0px 0px 3px 0px #7f7f7f;\n  -webkit-transform: scale(1.025);\n  -ms-transform: scale(1.025);\n  transform: scale(1.025);\n  color: black;\n  border: 1px solid dimgrey\n}\n.Loaded-job-ScXxK:hover .Loaded-description-1PeP8 .Loaded-descriptionText-1MXB1 {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"0.8\" /></filter></svg>#filter');\n  -webkit-filter: blur(.8px);\n          filter: blur(.8px)\n}\n.Loaded-job-ScXxK:hover .Loaded-viewFull-w_kpd {\n  opacity: 1\n}\n\n.Loaded-jobPosition-1gvTM {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-1gvTM h1,\n  .Loaded-jobPosition-1gvTM h2,\n  .Loaded-jobPosition-1gvTM h3,\n  .Loaded-jobPosition-1gvTM h4,\n  .Loaded-jobPosition-1gvTM h5,\n  .Loaded-jobPosition-1gvTM h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-1PeP8 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.Loaded-jobMeta-1G0uw {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  color: #676767\n}\n\n.Loaded-jobMeta-1G0uw p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0\n}\n\n.Loaded-jobMeta-1G0uw p i {\n  margin-right: .5em\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.Loaded-viewFull-w_kpd {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 24px;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out\n}\n\n.Loaded-viewFull-w_kpd button {\n  font-weight: 600;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Events/Loaded/Loaded.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Events/Loaded/<no source>"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;EAkBE;AACF;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,iBAAkB;CAkBnB;AAhBC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,yBAA0B;CAS3B;AAPC;EClCJ,wKAAA;EDmCM,2BAAmB;UAAnB,kBAAmB;CACpB;AAED;EACE,UAAW;CACZ;;AAIL;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,gCAAgC;CACjC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,cAAe;CAWhB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,SAAU;CAKX;;AAHC;EACE,kBAAmB;CACpB;;AAIL;;;;;;;;;;;;;;;;EAgBE;;AAEF;EACE,WAAW;EACX,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,gBAAkB;EAAlB,kBAAkB;EAClB,+BAAgC;CASjC;;AAPC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,gCAAiC;CAClC","file":"Loaded.css","sourcesContent":["/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 0px #7f7f7f;\n    -webkit-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    transform: scale(1.025);\n    color: black;\n    border: 1px solid dimgrey;\n\n    & .description .descriptionText {\n      filter: blur(.8px);\n    }\n\n    & .viewFull {\n      opacity: 1;\n    }\n  }\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  color: #676767;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.viewFull {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out;\n\n  & button {\n    font-weight: 600;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"job": "Loaded-job-ScXxK",
  	"description": "Loaded-description-1PeP8",
  	"descriptionText": "Loaded-descriptionText-1MXB1",
  	"viewFull": "Loaded-viewFull-w_kpd",
  	"jobPosition": "Loaded-jobPosition-1gvTM",
  	"jobMeta": "Loaded-jobMeta-1G0uw"
  };

/***/ }),
/* 1414 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Events\\Filter\\Filter.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Filter = __webpack_require__(1415);

  var _Filter2 = _interopRequireDefault(_Filter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Filter = function (_React$Component) {
    (0, _inherits3.default)(Filter, _React$Component);

    function Filter() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, Filter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        order: _this2.props.data.order,
        orderParam: _this2.props.data.orderParam,
        types: _this2.props.eventsInfo.types,
        locations: _this2.props.eventsInfo.locations
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }

    (0, _createClass3.default)(Filter, [{
      key: 'orderChanged',
      value: function orderChanged(event, data) {
        var _this = this;
        console.log("Sort changed", data.value);
        _this.props.onLoadChange({ loading: true });
        this.setState({
          order: data.value
        });
        this.props.changeFilter(data.value, this.state.orderParam);
        this.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + "&type=" + this.props.data.type + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeEvents(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'orderParamChanged',
      value: function orderParamChanged(event, data) {
        var _this = this;
        console.log("Sort changed", data.value);
        _this.props.onLoadChange({ loading: true });
        this.setState({
          orderParam: data.value
        });
        this.props.changeFilter(this.state.order, data.value);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&type=" + this.props.data.type).then(function (result) {
          _this.props.changeEvents(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'locationChanged',
      value: function locationChanged(event, data) {
        var _this = this;
        console.log("Location changed", event.target, data);
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateLocation(val);
          val = val.join();
        } else {
          this.props.updateLocation('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&type=" + this.props.data.type + "&city=" + val).then(function (result) {
          _this.props.changeEvents(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'typeChanged',
      value: function typeChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateType(val);
          val = val.join();
        } else {
          this.props.updateType('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&type=" + val + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeEvents(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'searchChanged',
      value: function searchChanged(event, data) {
        var _this = this;
        console.log("Search changed", event.target, data.value);
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        this.props.updateSearch(val);
        console.log("Value is:", val);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&type=" + this.props.data.type + "&term=" + val).then(function (result) {
          _this.props.changeEvents(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var options = [{ text: 'Date Added', value: 'dateCreated' }];

        var options2 = [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }];

        return _react2.default.createElement(
          'div',
          { className: _Filter2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 132
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.left, __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Types', multiple: true, search: true, selection: true, scrolling: true, options: this.state.types, onChange: this.typeChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 134
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Locations', multiple: true, search: true, selection: true, scrolling: true, options: this.state.locations, onChange: this.locationChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 135
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.right, __source: {
                fileName: _jsxFileName,
                lineNumber: 137
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Input,
              { type: 'text', placeholder: 'Search...', action: true, onChange: this.searchChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 138
                },
                __self: this
              },
              _react2.default.createElement('input', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 139
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options, defaultValue: 'dateCreated', onChange: this.orderParamChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 140
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options2, defaultValue: 'asc', onChange: this.orderChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 141
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Filter;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Filter2.default)(Filter);

/***/ }),
/* 1415 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1416);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1416 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Filter-container-dNbBD {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n.input {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n\n&.left .dropdown {\n  margin-right: .5em !important;\n}\n\n.Filter-left-2sylO {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-right: .5em\n}\n\n.Filter-left-2sylO .ui.dropdown {\n  //margin-right: .5em !important;\n  border-radius: 0 !important;\n}\n\n.Filter-right-3tSFw {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Events/Filter/Filter.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,oBAAgB;MAAhB,gBAAgB;EAChB,sCAAsC;CACvC;;AAED;EACE,aAAa;EACb,WAAW;EACX,gBAAgB;CACjB;;AAED;EACE,8BAA8B;CAC/B;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAoB;CAMrB;;AAJC;EACE,gCAAgC;EAChC,4BAA4B;CAC7B;;AAGH;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB","file":"Filter.css","sourcesContent":[".container {\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n\n&:global(.left .dropdown) {\n  margin-right: .5em !important;\n}\n\n.left {\n  display: flex;\n  align-items: flex-start;\n  padding-right: .5em;\n\n  & :global(.ui.dropdown) {\n    //margin-right: .5em !important;\n    border-radius: 0 !important;\n  }\n}\n\n.right {\n  display: flex;\n  margin-left: auto;\n  align-items: flex-start;\n  padding-left: .5em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Filter-container-dNbBD",
  	"left": "Filter-left-2sylO",
  	"right": "Filter-right-3tSFw"
  };

/***/ }),
/* 1417 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1418);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1418 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-2Xb7H {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-16BiJ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Events/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-2Xb7H",
  	"container": "Render-container-16BiJ"
  };

/***/ }),
/* 1419 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1420);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Events.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Events.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1420 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n\n    /*\n   * Typography\n   * ======================================================================== */\n\n    /*\n   * Layout\n   * ======================================================================== */\n\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n    /* Extra small screen / phone */\n\n    /* Small screen / tablet */\n\n    /* Medium screen / desktop */\n\n    /* Large screen / wide desktop */\n}\n\n.Events-root-2L_1Y {\n}\n\n.Events-container-26Ly1 {\n\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/events/Events.css"],"names":[],"mappings":"AAAA;;IACE;;gFAE8E;;IAI9E;;gFAE8E;;IAI9E;;gFAE8E;;IAErD,gCAAgC;;IAChC,2BAA2B;;IAC3B,6BAA6B;;IAC7B,iCAAiC;CAC3D;;ACnBD;CACC;;AAED;;CAEC","file":"Events.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n}\n\n.container {\n\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Events-root-2L_1Y",
  	"container": "Events-container-26Ly1"
  };

/***/ }),
/* 1421 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\event\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Event = __webpack_require__(1422);

  var _Event2 = _interopRequireDefault(_Event);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Event';

  exports.default = {

    path: '/events/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/events/' + params.id + '.json');

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                data = _context.sent;
                return _context.abrupt('return', data && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Event2.default, { title: title, event: data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 21
                      },
                      __self: _this
                    })
                  )
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1422 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\event\\Event.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1423);

  var _Render2 = _interopRequireDefault(_Render);

  var _Event = __webpack_require__(1432);

  var _Event2 = _interopRequireDefault(_Event);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Event = function (_React$Component) {
    (0, _inherits3.default)(Event, _React$Component);

    function Event(props) {
      (0, _classCallCheck3.default)(this, Event);
      return (0, _possibleConstructorReturn3.default)(this, (Event.__proto__ || (0, _getPrototypeOf2.default)(Event)).call(this, props));
    }
    /*
    static propTypes = {
      news: PropTypes.arrayOf(PropTypes.shape({
        title: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        contentSnippet: PropTypes.string,
      })).isRequired,
    };
    */

    (0, _createClass3.default)(Event, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Event2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 34
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Event2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 35
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { event: this.props.event, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Event;
  }(_react2.default.Component);

  Event.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Event2.default)(Event);

/***/ }),
/* 1423 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Event\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loaded = __webpack_require__(1424);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _Sidebar = __webpack_require__(1427);

  var _Sidebar2 = _interopRequireDefault(_Sidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1430);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',

      /*
      static propTypes = {
        news: PropTypes.arrayOf(PropTypes.shape({
          title: PropTypes.string.isRequired,
          link: PropTypes.string.isRequired,
          contentSnippet: PropTypes.string,
        })).isRequired,
      };
      */

      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 21
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 22
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Render2.default.jobs, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 23
                },
                __self: this
              },
              _react2.default.createElement(_Loaded2.default, { event: this.props.event, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 24
                },
                __self: this
              })
            ),
            _react2.default.createElement(_Sidebar2.default, { event: this.props.event, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1424 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Event\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1425);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {
        var data = this.props.event;
        var time = (0, _moment2.default)(data.time.date).format("h:mm A [on] MMMM Do");

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 13
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 14
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.jobPosition, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 16
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  data.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Loaded2.default.meta, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 18
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    'At ',
                    time,
                    ' in ',
                    data.city
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.image, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 22
                  },
                  __self: this
                },
                _react2.default.createElement('div', { className: _Loaded2.default.imageBackground, style: { background: 'url("https://upload.wikimedia.org/wikipedia/commons/1/1c/BiloxiLightHouseandVisitorsCenter.jpg")' }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 23
                  },
                  __self: this
                })
              ),
              _react2.default.createElement('div', { className: _Loaded2.default.description, dangerouslySetInnerHTML: { __html: data.eventDescription }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 27
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1425 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1426);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1426 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-27M2W {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.Loaded-job-3Qzs- {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.Loaded-jobPosition-1L8xo {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-1L8xo h1,\n  .Loaded-jobPosition-1L8xo h2,\n  .Loaded-jobPosition-1L8xo h3,\n  .Loaded-jobPosition-1L8xo h4,\n  .Loaded-jobPosition-1L8xo h5,\n  .Loaded-jobPosition-1L8xo h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-25SY6 {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n/*\n.image {\n  width: 100%;\n\n  & img {\n    max-width: 100%;\n  }\n}\n*/\n\n.Loaded-image-Q7sV- {\n  height: 40vh;\n}\n\n.Loaded-imageBackground-Y739g {\n  height: 100%;\n  width: 100%;\n  background-size: cover !important;\n  background-position: center center !important;\n}\n\n.Loaded-meta-11_19 {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  font-weight: 600;\n  color: #575757;\n  letter-spacing: 0.48px;\n  letter-spacing: .03rem\n}\n\n.Loaded-meta-11_19 p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.Loaded-meta-11_19 p i {\n  margin-right: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Event/Loaded/Loaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;;;;;;;;EAQE;;AAEF;EACE,aAAa;CACd;;AAED;EACE,aAAa;EACb,YAAY;EACZ,kCAAkC;EAClC,8CAA8C;CAC/C;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,iBAAiB;EACjB,eAAe;EACf,uBAAuB;EAAvB,sBAAuB;CAWxB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n/*\n.image {\n  width: 100%;\n\n  & img {\n    max-width: 100%;\n  }\n}\n*/\n\n.image {\n  height: 40vh;\n}\n\n.imageBackground {\n  height: 100%;\n  width: 100%;\n  background-size: cover !important;\n  background-position: center center !important;\n}\n\n.meta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  font-weight: 600;\n  color: #575757;\n  letter-spacing: .03rem;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-27M2W",
  	"job": "Loaded-job-3Qzs-",
  	"jobPosition": "Loaded-jobPosition-1L8xo",
  	"description": "Loaded-description-25SY6",
  	"image": "Loaded-image-Q7sV-",
  	"imageBackground": "Loaded-imageBackground-Y739g",
  	"meta": "Loaded-meta-11_19"
  };

/***/ }),
/* 1427 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Event\\Sidebar\\Sidebar.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Sidebar = __webpack_require__(1428);

  var _Sidebar2 = _interopRequireDefault(_Sidebar);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Sidebar = function (_React$Component) {
    (0, _inherits3.default)(Sidebar, _React$Component);

    function Sidebar() {
      (0, _classCallCheck3.default)(this, Sidebar);
      return (0, _possibleConstructorReturn3.default)(this, (Sidebar.__proto__ || (0, _getPrototypeOf2.default)(Sidebar)).apply(this, arguments));
    }

    (0, _createClass3.default)(Sidebar, [{
      key: 'render',
      value: function render() {
        var data = this.props.event;
        var time = (0, _moment2.default)(data.eventTime.date).format("MMMM Do, h:mm A");

        return _react2.default.createElement(
          'div',
          { className: _Sidebar2.default.sidebar, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          _react2.default.createElement(
            _semanticUiReact.Menu,
            { vertical: true, __source: {
                fileName: _jsxFileName,
                lineNumber: 15
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { name: 'location', onClick: this.handleItemClick, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 16
                },
                __self: this
              },
              _react2.default.createElement(
                'span',
                { className: _Sidebar2.default.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                },
                'Location:'
              ),
              ' ',
              _react2.default.createElement(
                'span',
                { className: _Sidebar2.default.description, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { target: '_blank', href: 'http://maps.google.com/?q=' + data.eventAddress, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  data.eventAddress
                )
              )
            ),
            _react2.default.createElement(
              _semanticUiReact.Menu.Item,
              { name: 'time', onClick: this.handleItemClick, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 20
                },
                __self: this
              },
              _react2.default.createElement(
                'span',
                { className: _Sidebar2.default.title, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: this
                },
                'Time:'
              ),
              ' ',
              _react2.default.createElement(
                'span',
                { className: _Sidebar2.default.description, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 21
                  },
                  __self: this
                },
                time
              )
            )
          )
        );
      }
    }]);
    return Sidebar;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Sidebar2.default)(Sidebar);

/***/ }),
/* 1428 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1429);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Sidebar.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Sidebar.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1429 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Sidebar-sidebar-16n5E {\n  -ms-flex-preferred-size: 15%;\n      flex-basis: 15%;\n}\n\n.Sidebar-sidebar-16n5E .Sidebar-item-30iUI {\n}\n\n.Sidebar-sidebar-16n5E .Sidebar-item-30iUI:hover {\n  background: rgba(245, 245, 245, 0.3) !important;\n}\n\n.Sidebar-title-2gmxN {\n  font-weight: 600;\n}\n\n.Sidebar-description-JwibK {\n  -webkit-user-select: auto !important;\n     -moz-user-select: auto !important;\n      -ms-user-select: auto !important;\n          user-select: auto !important;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Event/Sidebar/Sidebar.css"],"names":[],"mappings":"AAAA;EACE,6BAAgB;MAAhB,gBAAgB;CACjB;;AAED;CAIC;;AAHC;EACE,gDAAgD;CACjD;;AAGH;EACE,iBAAiB;CAClB;;AAED;EACE,qCAA6B;KAA7B,kCAA6B;MAA7B,iCAA6B;UAA7B,6BAA6B;CAC9B","file":"Sidebar.css","sourcesContent":[".sidebar {\n  flex-basis: 15%;\n}\n\n.sidebar .item {\n  &:hover {\n    background: rgba(245, 245, 245, 0.3) !important;\n  }\n}\n\n.title {\n  font-weight: 600;\n}\n\n.description {\n  user-select: auto !important;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"sidebar": "Sidebar-sidebar-16n5E",
  	"item": "Sidebar-item-30iUI",
  	"title": "Sidebar-title-2gmxN",
  	"description": "Sidebar-description-JwibK"
  };

/***/ }),
/* 1430 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1431);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1431 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-18PLf {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-3iCyr {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Render-jobs-3sICY {\n  -ms-flex-preferred-size: 85%;\n      flex-basis: 85%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Event/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;CACf;;AAED;EACE,6BAAgB;MAAhB,gBAAgB;CACjB","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n}\n\n.jobs {\n  flex-basis: 85%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-18PLf",
  	"container": "Render-container-3iCyr",
  	"jobs": "Render-jobs-3sICY"
  };

/***/ }),
/* 1432 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1433);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Event.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Event.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1433 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Event-root-2u0al {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Event-container-seYlp {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/event/Event.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,cAAc;EACd,WAAW;CACZ","file":"Event.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Event-root-2u0al",
  	"container": "Event-container-seYlp"
  };

/***/ }),
/* 1434 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\city\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _City = __webpack_require__(1435);

  var _City2 = _interopRequireDefault(_City);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  String.prototype.toCamelCase = function () {
    return this.replace(/^([A-Z])|[\s-_](\w)/g, function (match, p1, p2, offset) {
      if (p2) return p2.toUpperCase();
      return p1.toLowerCase();
    });
  };

  exports.default = {

    path: '/city/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var title, resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const route = await next();
                //console.log("Running fetch!", params, path, uri);
                title = "city page";
                //params.id = params.id.toCamelCase();

                console.log("City slug is:", params.id);
                _context.next = 4;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities/' + params.id + '.json');

              case 4:
                resp = _context.sent;
                _context.next = 7;
                return resp.json();

              case 7:
                data = _context.sent;

                console.log("Got city info!", data);
                return _context.abrupt('return', data && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_City2.default, { title: title, city: data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      },
                      __self: _this
                    })
                  )
                });

              case 10:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1435 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\city\\City.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1436);

  var _Render2 = _interopRequireDefault(_Render);

  var _City = __webpack_require__(1442);

  var _City2 = _interopRequireDefault(_City);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var City = function (_React$Component) {
    (0, _inherits3.default)(City, _React$Component);

    function City() {
      (0, _classCallCheck3.default)(this, City);
      return (0, _possibleConstructorReturn3.default)(this, (City.__proto__ || (0, _getPrototypeOf2.default)(City)).apply(this, arguments));
    }

    (0, _createClass3.default)(City, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _City2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 9
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _City2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 10
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { city: this.props.city, __source: {
                fileName: _jsxFileName,
                lineNumber: 11
              },
              __self: this
            })
          )
        );
      }
    }]);
    return City;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_City2.default)(City);

/***/ }),
/* 1436 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\City\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loaded = __webpack_require__(1437);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1440);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',
      value: function render() {
        console.log("The city object:", this.props.city);
        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(_Loaded2.default, { city: this.props.city, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, { citySlug: this.props.city.slug, __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1437 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\City\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1438);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.aboutContainer, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.aboutTitle, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 14
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h1',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 15
                    },
                    __self: this
                  },
                  'About ',
                  _react2.default.createElement(
                    'span',
                    { className: _Loaded2.default.city, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 15
                      },
                      __self: this
                    },
                    this.props.city.title
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.aboutDescription, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 17
                  },
                  __self: this
                },
                _react2.default.createElement('div', { className: _Loaded2.default.description, dangerouslySetInnerHTML: { __html: this.props.city.description }, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 18
                  },
                  __self: this
                })
              )
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1438 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1439);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1439 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-32lzF {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.Loaded-aboutTitle-3nzGV {\n  font-style: italic;\n}\n\n.Loaded-city-1q72s {\n  display: inline-block;\n  padding-bottom: .2em;\n  position: relative\n}\n\n.Loaded-city-1q72s::after {\n  content: '';\n  height: 5px;\n  width: 100%;\n  left: 0;\n  background: #3d88e5;\n  bottom: 0;\n  position: absolute;\n}\n\n.Loaded-aboutDescription-1ITmJ {\n  padding: 1%;\n}\n\nb {\n  font-weight: 600 !important;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/City/Loaded/Loaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,mBAAmB;CACpB;;AAED;EACE,sBAAsB;EACtB,qBAAqB;EACrB,kBAAmB;CAWpB;;AATC;EACE,YAAY;EACZ,YAAY;EACZ,YAAY;EACZ,QAAQ;EACR,oBAAoB;EACpB,UAAU;EACV,mBAAmB;CACpB;;AAGH;EACE,YAAY;CACb;;AAED;EACE,4BAA4B;CAC7B","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.aboutTitle {\n  font-style: italic;\n}\n\n.city {\n  display: inline-block;\n  padding-bottom: .2em;\n  position: relative;\n\n  &::after {\n    content: '';\n    height: 5px;\n    width: 100%;\n    left: 0;\n    background: #3d88e5;\n    bottom: 0;\n    position: absolute;\n  }\n}\n\n.aboutDescription {\n  padding: 1%;\n}\n\n:global(b) {\n  font-weight: 600 !important;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-32lzF",
  	"aboutTitle": "Loaded-aboutTitle-3nzGV",
  	"city": "Loaded-city-1q72s",
  	"aboutDescription": "Loaded-aboutDescription-1ITmJ"
  };

/***/ }),
/* 1440 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1441);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1441 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-1lnSy {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-1LXXu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/City/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-1lnSy",
  	"container": "Render-container-1LXXu"
  };

/***/ }),
/* 1442 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1443);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./City.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./City.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1443 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.City-root-x9LR9 {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.City-container-3H_SO {\n  margin: 0 auto;\n  padding: 2%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/city/City.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,YAAY;CACb","file":"City.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "City-root-x9LR9",
  	"container": "City-container-3H_SO"
  };

/***/ }),
/* 1444 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\realEstate\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _RealEstate = __webpack_require__(1445);

  var _RealEstate2 = _interopRequireDefault(_RealEstate);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Real Estate';

  exports.default = {

    path: '/real-estates/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var realEstate, realEstateData;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/real-estate/' + params.id + '.json');

              case 2:
                realEstate = _context.sent;
                _context.next = 5;
                return realEstate.json();

              case 5:
                realEstateData = _context.sent;
                return _context.abrupt('return', {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_RealEstate2.default, { title: title, realEstate: realEstateData, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: _this
                    })
                  )
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1445 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\realEstate\\RealEstate.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Render = __webpack_require__(1446);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _RealEstate = __webpack_require__(1452);

  var _RealEstate2 = _interopRequireDefault(_RealEstate);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var RealEstate = function (_React$Component) {
    (0, _inherits3.default)(RealEstate, _React$Component);

    function RealEstate(props) {
      (0, _classCallCheck3.default)(this, RealEstate);
      return (0, _possibleConstructorReturn3.default)(this, (RealEstate.__proto__ || (0, _getPrototypeOf2.default)(RealEstate)).call(this, props));
    }

    (0, _createClass3.default)(RealEstate, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _RealEstate2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _RealEstate2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { realEstate: this.props.realEstate, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return RealEstate;
  }(_react2.default.Component);

  RealEstate.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_RealEstate2.default)(RealEstate);

/***/ }),
/* 1446 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\RealEstate\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loaded = __webpack_require__(1447);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1450);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(_Loaded2.default, { realEstate: this.props.realEstate, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1447 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\RealEstate\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1448);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {
        var data = this.props.realEstate;

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.jobPosition, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: this
                  },
                  data.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Loaded2.default.jobMeta, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    }),
                    data.category
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    }),
                    data.city
                  )
                )
              ),
              _react2.default.createElement('div', { className: _Loaded2.default.description, dangerouslySetInnerHTML: { __html: data.description }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1448 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1449);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1449 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-2cSDf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.Loaded-job-3Yyjk {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.Loaded-jobPosition-1T1E- {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-1T1E- h1,\n  .Loaded-jobPosition-1T1E- h2,\n  .Loaded-jobPosition-1T1E- h3,\n  .Loaded-jobPosition-1T1E- h4,\n  .Loaded-jobPosition-1T1E- h5,\n  .Loaded-jobPosition-1T1E- h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-o4HuA {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.Loaded-apply-1dEPw {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.Loaded-fileInput-1akiR {\n    display: none !important;\n}\n\n.Loaded-jobMeta-TvX23 {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%\n}\n\n.Loaded-jobMeta-TvX23 p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.Loaded-jobMeta-TvX23 p i {\n  margin-right: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/RealEstate/Loaded/Loaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,gCAAgC;EAChC,oCAAoC;EACpC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;EACE,uCAAuC;EACvC,4BAA4B;EAC5B,8BAA8B;EAC9B,qBAAqB;CACtB;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,YAAQ;CAWT;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.apply {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.fileInput {\n    display: none !important;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-2cSDf",
  	"job": "Loaded-job-3Yyjk",
  	"jobPosition": "Loaded-jobPosition-1T1E-",
  	"description": "Loaded-description-o4HuA",
  	"apply": "Loaded-apply-1dEPw",
  	"fileInput": "Loaded-fileInput-1akiR",
  	"jobMeta": "Loaded-jobMeta-TvX23"
  };

/***/ }),
/* 1450 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1451);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1451 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-3XLLC {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-2Diw0 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/RealEstate/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-3XLLC",
  	"container": "Render-container-2Diw0"
  };

/***/ }),
/* 1452 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1453);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./RealEstate.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./RealEstate.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1453 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.RealEstate-root-1uwil {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.RealEstate-container-2xt-4 {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/realEstate/RealEstate.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,cAAc;EACd,WAAW;CACZ","file":"RealEstate.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "RealEstate-root-1uwil",
  	"container": "RealEstate-container-2xt-4"
  };

/***/ }),
/* 1454 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\realEstates\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _RealEstate = __webpack_require__(1455);

  var _RealEstate2 = _interopRequireDefault(_RealEstate);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Real Estate';

  exports.default = {

    path: '/real-estates',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var realEstates, realEstatesData, cities, citiesData, realEstateInfo, realEstateInfoData, info;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/real-estate.json');

              case 2:
                realEstates = _context.sent;
                _context.next = 5;
                return realEstates.json();

              case 5:
                realEstatesData = _context.sent;
                _context.next = 8;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities.json');

              case 8:
                cities = _context.sent;
                _context.next = 11;
                return cities.json();

              case 11:
                citiesData = _context.sent;
                _context.next = 14;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/real-estate-types.json');

              case 14:
                realEstateInfo = _context.sent;
                _context.next = 17;
                return realEstateInfo.json();

              case 17:
                realEstateInfoData = _context.sent;
                info = {
                  types: realEstateInfoData.types,
                  properties: realEstateInfoData.properties,
                  locations: citiesData.data
                };
                return _context.abrupt('return', {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_RealEstate2.default, { title: title, realEstates: realEstatesData, realEstateInfo: info, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      },
                      __self: _this
                    })
                  )
                });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1455 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\realEstates\\RealEstate.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _Render = __webpack_require__(1456);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _RealEstate = __webpack_require__(1465);

  var _RealEstate2 = _interopRequireDefault(_RealEstate);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var RealEstates = function (_React$Component) {
    (0, _inherits3.default)(RealEstates, _React$Component);

    function RealEstates(props) {
      (0, _classCallCheck3.default)(this, RealEstates);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (RealEstates.__proto__ || (0, _getPrototypeOf2.default)(RealEstates)).call(this, props));

      _this2.state = {
        realEstates: [],
        loading: true
      };
      return _this2;
    }

    (0, _createClass3.default)(RealEstates, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _RealEstate2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _RealEstate2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { loading: this.state.loading, realEstates: this.props.realEstates, realEstateInfo: this.props.realEstateInfo, pagination: this.props.realEstates.meta.pagination, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            })
          )
        );
      }
    }]);
    return RealEstates;
  }(_react2.default.Component);

  RealEstates.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_RealEstate2.default)(RealEstates);

/***/ }),
/* 1456 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(1247);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\RealEstates\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loading = __webpack_require__(1249);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Loaded = __webpack_require__(1457);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _Filter = __webpack_require__(1460);

  var _Filter2 = _interopRequireDefault(_Filter);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1463);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render(props) {
      (0, _classCallCheck3.default)(this, Render);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, props));

      _this.state = {
        realEstates: _this.props.realEstates,
        type: '*',
        property: '*',
        city: '*',
        search: '',
        order: 'asc',
        orderParam: 'dateCreated',
        url: 'http://www.southms.com/index.php/api/real-estate.json?',
        urlSearch: 'http://www.southms.com/index.php/api/search.json?',
        urlPagination: _this.city,
        location: [],
        loading: false
      };
      return _this;
    }

    (0, _createClass3.default)(Render, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onLoadChange',
      value: function onLoadChange(load) {
        this.setState(load);
      }
    }, {
      key: 'changeRealEstates',
      value: function changeRealEstates(realEstates) {
        this.setState({
          realEstates: realEstates
        });
      }
    }, {
      key: 'changeBasicFilter',
      value: function changeBasicFilter(order, orderParam) {
        this.setState({
          order: order,
          orderParam: orderParam
        });
      }
    }, {
      key: 'updateLocation',
      value: function updateLocation(city) {
        this.setState({ city: city });
      }
    }, {
      key: 'updateCategory',
      value: function updateCategory(category) {
        this.setState({ category: category });
      }
    }, {
      key: 'updateType',
      value: function updateType(type) {
        this.setState({ type: type });
      }
    }, {
      key: 'updateProperty',
      value: function updateProperty(property) {
        this.setState({ property: property });
      }
    }, {
      key: 'updateSearch',
      value: function updateSearch(search) {
        this.setState({ search: search });
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        var render = null;
        if (typeof this.state.realEstates.data == 'undefined' && !this.state.realEstates.data.length > 0 || this.state.loading == true) {
          render = _react2.default.createElement(_Loading2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 63
            },
            __self: this
          });
        } else {
          render = _react2.default.createElement(_Loaded2.default, { realEstates: this.state.realEstates, pagination: this.props.pagination, data: this.state, onLoadChange: this.onLoadChange.bind(this), changeRealEstates: this.changeRealEstates.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          });
        }

        var city = {
          camelCase: this.state.city
        };

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 73
            },
            __self: this
          },
          _react2.default.createElement(_Filter2.default, (_React$createElement = { onLoadChange: this.onLoadChange.bind(this), updateSearch: this.updateSearch.bind(this), changeRealEstates: this.changeRealEstates.bind(this), changeBasicFilter: this.changeBasicFilter.bind(this), data: this.state, realEstates: this.state.realEstates, realEstateInfo: this.props.realEstateInfo, location: this.state.location }, (0, _defineProperty3.default)(_React$createElement, 'onLoadChange', this.onLoadChange.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateProperty', this.updateProperty.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateType', this.updateType.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateLocation', this.updateLocation.bind(this)), (0, _defineProperty3.default)(_React$createElement, '__source', {
            fileName: _jsxFileName,
            lineNumber: 74
          }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement)),
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 75
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 76
                },
                __self: this
              },
              render
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 79
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1457 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\RealEstates\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _striptags = __webpack_require__(1256);

  var _striptags2 = _interopRequireDefault(_striptags);

  var _Pagination = __webpack_require__(1257);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  var _Grid = __webpack_require__(1265);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1458);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Loaded);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        realEstates: _this.props.realEstates.data
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            this.state.realEstates.map(function (estate, i) {
              return _react2.default.createElement(
                _Grid2.default,
                { key: estate.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { href: "/real-estates/" + estate.id, className: _Loaded2.default.job, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'div',
                    { className: _Loaded2.default.jobPosition, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'h3',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
                        },
                        __self: this
                      },
                      estate.title
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _Loaded2.default.jobMeta, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        }),
                        estate.city
                      )
                    )
                  )
                )
              );
            }),
            _react2.default.createElement(_Pagination2.default, { pagination: this.props.pagination, data: this.props.data, onLoadChange: this.props.onLoadChange, changeRealEstates: this.props.changeRealEstates, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1458 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1459);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1459 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.Loaded-job-1pVk- {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%\n}\n.Loaded-job-1pVk-:hover {\n  box-shadow: 0px 0px 3px 0px #7f7f7f;\n  -webkit-transform: scale(1.025);\n  -ms-transform: scale(1.025);\n  transform: scale(1.025);\n  color: black;\n  border: 1px solid dimgrey\n}\n.Loaded-job-1pVk-:hover .Loaded-description-Hq8y1 .Loaded-descriptionText-1rUU3 {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"0.8\" /></filter></svg>#filter');\n  -webkit-filter: blur(.8px);\n          filter: blur(.8px)\n}\n.Loaded-job-1pVk-:hover .Loaded-viewFull-1AwqL {\n  opacity: 1\n}\n\n.Loaded-jobPosition-2SKac {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-2SKac h1,\n  .Loaded-jobPosition-2SKac h2,\n  .Loaded-jobPosition-2SKac h3,\n  .Loaded-jobPosition-2SKac h4,\n  .Loaded-jobPosition-2SKac h5,\n  .Loaded-jobPosition-2SKac h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-Hq8y1 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.Loaded-jobMeta-1F2P6 {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  color: #676767\n}\n\n.Loaded-jobMeta-1F2P6 p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0\n}\n\n.Loaded-jobMeta-1F2P6 p i {\n  margin-right: .5em\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.Loaded-viewFull-1AwqL {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 24px;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out\n}\n\n.Loaded-viewFull-1AwqL button {\n  font-weight: 600;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/RealEstates/Loaded/Loaded.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/RealEstates/Loaded/<no source>"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;EAkBE;AACF;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,iBAAkB;CAkBnB;AAhBC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,yBAA0B;CAS3B;AAPC;EClCJ,wKAAA;EDmCM,2BAAmB;UAAnB,kBAAmB;CACpB;AAED;EACE,UAAW;CACZ;;AAIL;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,gCAAgC;CACjC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,cAAe;CAWhB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,SAAU;CAKX;;AAHC;EACE,kBAAmB;CACpB;;AAIL;;;;;;;;;;;;;;;;EAgBE;;AAEF;EACE,WAAW;EACX,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,gBAAkB;EAAlB,kBAAkB;EAClB,+BAAgC;CASjC;;AAPC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,gCAAiC;CAClC","file":"Loaded.css","sourcesContent":["/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 0px #7f7f7f;\n    -webkit-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    transform: scale(1.025);\n    color: black;\n    border: 1px solid dimgrey;\n\n    & .description .descriptionText {\n      filter: blur(.8px);\n    }\n\n    & .viewFull {\n      opacity: 1;\n    }\n  }\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  color: #676767;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.viewFull {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out;\n\n  & button {\n    font-weight: 600;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"job": "Loaded-job-1pVk-",
  	"description": "Loaded-description-Hq8y1",
  	"descriptionText": "Loaded-descriptionText-1rUU3",
  	"viewFull": "Loaded-viewFull-1AwqL",
  	"jobPosition": "Loaded-jobPosition-2SKac",
  	"jobMeta": "Loaded-jobMeta-1F2P6"
  };

/***/ }),
/* 1460 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\RealEstates\\Filter\\Filter.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(400);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Filter = __webpack_require__(1461);

  var _Filter2 = _interopRequireDefault(_Filter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Filter = function (_React$Component) {
    (0, _inherits3.default)(Filter, _React$Component);

    function Filter() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, Filter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        order: _this2.props.data.order,
        orderParam: _this2.props.data.orderParam,
        properties: _this2.props.realEstateInfo.properties,
        types: _this2.props.realEstateInfo.types,
        locations: _this2.props.realEstateInfo.locations
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }

    (0, _createClass3.default)(Filter, [{
      key: 'orderChanged',
      value: function orderChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          order: data.value
        });
        this.props.changeBasicFilter(data.value, this.state.orderParam);
        this.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&property=" + this.props.data.property + "&type=" + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeRealEstates(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'orderParamChanged',
      value: function orderParamChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          orderParam: data.value
        });
        this.props.changeBasicFilter(this.state.order, data.value);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&property=" + this.props.data.property + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeRealEstates(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log(this.state.categories, this.state.locations);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'locationChanged',
      value: function locationChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateLocation(val);
          val = val.join();
        } else {
          this.props.updateLocation('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&property=" + this.props.data.property + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeRealEstates(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'typeChanged',
      value: function typeChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateType(val);
          val = val.join();
        } else {
          this.props.updateType('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + val + "&property=" + this.props.data.property + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeRealEstates(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'propertyChanged',
      value: function propertyChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateProperty(val);
          val = val.join();
        } else {
          this.props.updateProperty('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&property=" + val + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeRealEstates(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'searchChanged',
      value: function searchChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        this.props.updateSearch(val);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&property=" + this.props.data.property + "&term=" + val + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeRealEstates(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var options = [{ text: 'Date Added', value: 'dateCreated' }];

        var options2 = [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }];

        return _react2.default.createElement(
          'div',
          { className: _Filter2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 151
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.left, __source: {
                fileName: _jsxFileName,
                lineNumber: 152
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Properties', multiple: true, search: true, selection: true, scrolling: true, options: this.state.properties, onChange: this.propertyChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 153
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Types', multiple: true, search: true, selection: true, scrolling: true, options: this.state.types, onChange: this.typeChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 154
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Locations', multiple: true, search: true, selection: true, scrolling: true, options: this.state.locations, onChange: this.locationChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 155
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.right, __source: {
                fileName: _jsxFileName,
                lineNumber: 157
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Input,
              { type: 'text', placeholder: 'Search...', action: true, onChange: this.searchChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 158
                },
                __self: this
              },
              _react2.default.createElement('input', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 159
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options, defaultValue: 'dateCreated', onChange: this.orderParamChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 160
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options2, defaultValue: 'asc', onChange: this.orderChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 161
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Filter;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Filter2.default)(Filter);

/***/ }),
/* 1461 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1462);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1462 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Filter-container-2vgkm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&.left .dropdown {\n  margin-right: .5em !important;\n}\n\n.Filter-left-145HD {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-right: .5em\n}\n\n.Filter-left-145HD .ui.dropdown {\n  //margin-right: .5em !important;\n  border-radius: 0 !important;\n}\n\n.Filter-right-1w2Sn {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/RealEstates/Filter/Filter.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,oBAAgB;MAAhB,gBAAgB;EAChB,sCAAsC;CACvC;;AAED;;;;;;EAME;;AAEF;EACE,8BAA8B;CAC/B;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAoB;CAMrB;;AAJC;EACE,gCAAgC;EAChC,4BAA4B;CAC7B;;AAGH;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB","file":"Filter.css","sourcesContent":[".container {\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&:global(.left .dropdown) {\n  margin-right: .5em !important;\n}\n\n.left {\n  display: flex;\n  align-items: flex-start;\n  padding-right: .5em;\n\n  & :global(.ui.dropdown) {\n    //margin-right: .5em !important;\n    border-radius: 0 !important;\n  }\n}\n\n.right {\n  display: flex;\n  margin-left: auto;\n  align-items: flex-start;\n  padding-left: .5em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Filter-container-2vgkm",
  	"left": "Filter-left-145HD",
  	"right": "Filter-right-1w2Sn"
  };

/***/ }),
/* 1463 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1464);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1464 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-2ipBY {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-1E58P {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/RealEstates/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-2ipBY",
  	"container": "Render-container-1E58P"
  };

/***/ }),
/* 1465 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1466);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./RealEstate.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./RealEstate.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1466 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n\n    /*\n   * Typography\n   * ======================================================================== */\n\n    /*\n   * Layout\n   * ======================================================================== */\n\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n    /* Extra small screen / phone */\n\n    /* Small screen / tablet */\n\n    /* Medium screen / desktop */\n\n    /* Large screen / wide desktop */\n}\n\n.RealEstate-root-3Znak {\n}\n\n.RealEstate-container-2Mr8f {\n  \n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/realEstates/RealEstate.css"],"names":[],"mappings":"AAAA;;IACE;;gFAE8E;;IAI9E;;gFAE8E;;IAI9E;;gFAE8E;;IAErD,gCAAgC;;IAChC,2BAA2B;;IAC3B,6BAA6B;;IAC7B,iCAAiC;CAC3D;;ACnBD;CACC;;AAED;;CAEC","file":"RealEstate.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n}\n\n.container {\n  \n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "RealEstate-root-3Znak",
  	"container": "RealEstate-container-2Mr8f"
  };

/***/ }),
/* 1467 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\accommodation\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Accommodation = __webpack_require__(1468);

  var _Accommodation2 = _interopRequireDefault(_Accommodation);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Accommodation';

  exports.default = {

    path: '/accommodations/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/accommodations/' + params.id + '.json');

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                data = _context.sent;
                return _context.abrupt('return', data && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Accommodation2.default, { title: title, accommodation: data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    })
                  )
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1468 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\accommodation\\Accommodation.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Render = __webpack_require__(1469);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Accommodation = __webpack_require__(1475);

  var _Accommodation2 = _interopRequireDefault(_Accommodation);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Accommodation = function (_React$Component) {
    (0, _inherits3.default)(Accommodation, _React$Component);

    function Accommodation(props) {
      (0, _classCallCheck3.default)(this, Accommodation);
      return (0, _possibleConstructorReturn3.default)(this, (Accommodation.__proto__ || (0, _getPrototypeOf2.default)(Accommodation)).call(this, props));
    }

    (0, _createClass3.default)(Accommodation, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Accommodation2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Accommodation2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { accommodation: this.props.accommodation, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Accommodation;
  }(_react2.default.Component);

  Accommodation.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Accommodation2.default)(Accommodation);

/***/ }),
/* 1469 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Accommodation\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loaded = __webpack_require__(1470);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1473);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(_Loaded2.default, { accommodation: this.props.accommodation, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1470 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Accommodation\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1471);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {
        var data = this.props.accommodation;

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.jobPosition, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: this
                  },
                  data.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Loaded2.default.jobMeta, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    }),
                    data.category
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    }),
                    data.city
                  )
                )
              ),
              _react2.default.createElement('div', { className: _Loaded2.default.description, dangerouslySetInnerHTML: { __html: data.description }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1471 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1472);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1472 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-2YOG_ {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.Loaded-job-1wyE2 {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.Loaded-jobPosition-cpFkg {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-cpFkg h1,\n  .Loaded-jobPosition-cpFkg h2,\n  .Loaded-jobPosition-cpFkg h3,\n  .Loaded-jobPosition-cpFkg h4,\n  .Loaded-jobPosition-cpFkg h5,\n  .Loaded-jobPosition-cpFkg h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-2af3I {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.Loaded-apply-1DHx0 {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.Loaded-fileInput-3yeBO {\n    display: none !important;\n}\n\n.Loaded-jobMeta-48lI7 {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%\n}\n\n.Loaded-jobMeta-48lI7 p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.Loaded-jobMeta-48lI7 p i {\n  margin-right: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Accommodation/Loaded/Loaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,gCAAgC;EAChC,oCAAoC;EACpC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;EACE,uCAAuC;EACvC,4BAA4B;EAC5B,8BAA8B;EAC9B,qBAAqB;CACtB;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,YAAQ;CAWT;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.apply {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.fileInput {\n    display: none !important;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-2YOG_",
  	"job": "Loaded-job-1wyE2",
  	"jobPosition": "Loaded-jobPosition-cpFkg",
  	"description": "Loaded-description-2af3I",
  	"apply": "Loaded-apply-1DHx0",
  	"fileInput": "Loaded-fileInput-3yeBO",
  	"jobMeta": "Loaded-jobMeta-48lI7"
  };

/***/ }),
/* 1473 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1474);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1474 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-W3ba9 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-3ptBk {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Accommodation/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-W3ba9",
  	"container": "Render-container-3ptBk"
  };

/***/ }),
/* 1475 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1476);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Accommodation.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Accommodation.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1476 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Accommodation-root-1v8EF {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Accommodation-container-2vmaV {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/accommodation/Accommodation.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,cAAc;EACd,WAAW;CACZ","file":"Accommodation.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Accommodation-root-1v8EF",
  	"container": "Accommodation-container-2vmaV"
  };

/***/ }),
/* 1477 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\accommodations\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Accommodations = __webpack_require__(1478);

  var _Accommodations2 = _interopRequireDefault(_Accommodations);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Accommodations';

  exports.default = {

    path: '/accommodations',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var accommodations, accommodationsData, cities, citiesData, accommodationTypes, accommodationTypesData, info;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/accommodations.json');

              case 2:
                accommodations = _context.sent;
                _context.next = 5;
                return accommodations.json();

              case 5:
                accommodationsData = _context.sent;
                _context.next = 8;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities.json');

              case 8:
                cities = _context.sent;
                _context.next = 11;
                return cities.json();

              case 11:
                citiesData = _context.sent;
                _context.next = 14;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/accommodation-types.json');

              case 14:
                accommodationTypes = _context.sent;
                _context.next = 17;
                return accommodationTypes.json();

              case 17:
                accommodationTypesData = _context.sent;
                info = {
                  types: accommodationTypesData.types,
                  locations: citiesData.data
                };
                return _context.abrupt('return', {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Accommodations2.default, { title: title, accommodations: accommodationsData, accommodationsInfo: info, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: _this
                    })
                  )
                });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1478 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\accommodations\\Accommodations.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _Render = __webpack_require__(1479);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Accommodations = __webpack_require__(1488);

  var _Accommodations2 = _interopRequireDefault(_Accommodations);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Accommodations = function (_React$Component) {
    (0, _inherits3.default)(Accommodations, _React$Component);

    function Accommodations(props) {
      (0, _classCallCheck3.default)(this, Accommodations);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (Accommodations.__proto__ || (0, _getPrototypeOf2.default)(Accommodations)).call(this, props));

      _this2.state = {
        accommodations: [],
        loading: true
      };
      return _this2;
    }

    (0, _createClass3.default)(Accommodations, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Accommodations2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Accommodations2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { loading: this.state.loading, accommodations: this.props.accommodations, accommodationsInfo: this.props.accommodationsInfo, pagination: this.props.accommodations.meta.pagination, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Accommodations;
  }(_react2.default.Component);

  Accommodations.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Accommodations2.default)(Accommodations);

/***/ }),
/* 1479 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(1247);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Accommodations\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loading = __webpack_require__(1249);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Loaded = __webpack_require__(1480);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _Filter = __webpack_require__(1483);

  var _Filter2 = _interopRequireDefault(_Filter);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1486);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render(props) {
      (0, _classCallCheck3.default)(this, Render);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, props));

      _this.state = {
        accommodations: _this.props.accommodations,
        type: '*',
        category: '*',
        city: '*',
        search: '',
        order: 'asc',
        orderParam: 'dateCreated',
        url: 'http://www.southms.com/index.php/api/accommodations.json?',
        urlSearch: 'http://www.southms.com/index.php/api/search.json?',
        urlPagination: _this.city,
        location: [],
        loading: false
      };
      return _this;
    }

    (0, _createClass3.default)(Render, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onLoadChange',
      value: function onLoadChange(load) {
        this.setState(load);
      }
    }, {
      key: 'changeAccommodations',
      value: function changeAccommodations(accommodations) {
        this.setState({
          accommodations: accommodations
        });
      }
    }, {
      key: 'changeBasicFilter',
      value: function changeBasicFilter(order, orderParam) {
        this.setState({
          order: order,
          orderParam: orderParam
        });
      }
    }, {
      key: 'updateLocation',
      value: function updateLocation(city) {
        this.setState({ city: city });
      }
    }, {
      key: 'updateType',
      value: function updateType(type) {
        this.setState({ type: type });
      }
    }, {
      key: 'updateSearch',
      value: function updateSearch(search) {
        this.setState({ search: search });
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        var render = null;
        if (typeof this.state.accommodations.data == 'undefined' && !this.state.accommodations.data.length > 0 || this.state.loading == true) {
          render = _react2.default.createElement(_Loading2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          });
        } else {
          render = _react2.default.createElement(_Loaded2.default, { accommodations: this.state.accommodations, pagination: this.props.pagination, data: this.state, onLoadChange: this.onLoadChange.bind(this), changeAccommodations: this.changeAccommodations.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          });
        }

        var city = {
          camelCase: this.state.city
        };

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          },
          _react2.default.createElement(_Filter2.default, (_React$createElement = { onLoadChange: this.onLoadChange.bind(this), updateSearch: this.updateSearch.bind(this), changeAccommodations: this.changeAccommodations.bind(this), changeBasicFilter: this.changeBasicFilter.bind(this), data: this.state, accommodations: this.state.accommodations, accommodationsInfo: this.props.accommodationsInfo, location: this.state.location }, (0, _defineProperty3.default)(_React$createElement, 'onLoadChange', this.onLoadChange.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateType', this.updateType.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateLocation', this.updateLocation.bind(this)), (0, _defineProperty3.default)(_React$createElement, '__source', {
            fileName: _jsxFileName,
            lineNumber: 68
          }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement)),
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                },
                __self: this
              },
              render
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1480 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Accommodations\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _striptags = __webpack_require__(1256);

  var _striptags2 = _interopRequireDefault(_striptags);

  var _Pagination = __webpack_require__(1257);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  var _Grid = __webpack_require__(1265);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1481);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Loaded);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        accommodations: _this.props.accommodations.data
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            this.state.accommodations.map(function (accommodation, i) {
              return _react2.default.createElement(
                _Grid2.default,
                { key: accommodation.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { href: "/accommodations/" + accommodation.id, className: _Loaded2.default.job, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'div',
                    { className: _Loaded2.default.jobPosition, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'h3',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
                        },
                        __self: this
                      },
                      accommodation.title
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _Loaded2.default.jobMeta, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        }),
                        accommodation.city
                      )
                    )
                  )
                )
              );
            }),
            _react2.default.createElement(_Pagination2.default, { pagination: this.props.pagination, data: this.props.data, onLoadChange: this.props.onLoadChange, changeAccommodations: this.props.changeAccommodations, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1481 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1482);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1482 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.Loaded-job-2bsM0 {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%\n}\n.Loaded-job-2bsM0:hover {\n  box-shadow: 0px 0px 3px 0px #7f7f7f;\n  -webkit-transform: scale(1.025);\n  -ms-transform: scale(1.025);\n  transform: scale(1.025);\n  color: black;\n  border: 1px solid dimgrey\n}\n.Loaded-job-2bsM0:hover .Loaded-description-1O48t .Loaded-descriptionText-2wAoe {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"0.8\" /></filter></svg>#filter');\n  -webkit-filter: blur(.8px);\n          filter: blur(.8px)\n}\n.Loaded-job-2bsM0:hover .Loaded-viewFull-sSXFx {\n  opacity: 1\n}\n\n.Loaded-jobPosition-3ZezO {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-3ZezO h1,\n  .Loaded-jobPosition-3ZezO h2,\n  .Loaded-jobPosition-3ZezO h3,\n  .Loaded-jobPosition-3ZezO h4,\n  .Loaded-jobPosition-3ZezO h5,\n  .Loaded-jobPosition-3ZezO h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-1O48t {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.Loaded-jobMeta-3-1OF {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  color: #676767\n}\n\n.Loaded-jobMeta-3-1OF p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0\n}\n\n.Loaded-jobMeta-3-1OF p i {\n  margin-right: .5em\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.Loaded-viewFull-sSXFx {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 24px;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out\n}\n\n.Loaded-viewFull-sSXFx button {\n  font-weight: 600;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Accommodations/Loaded/Loaded.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Accommodations/Loaded/<no source>"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;EAkBE;AACF;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,iBAAkB;CAkBnB;AAhBC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,yBAA0B;CAS3B;AAPC;EClCJ,wKAAA;EDmCM,2BAAmB;UAAnB,kBAAmB;CACpB;AAED;EACE,UAAW;CACZ;;AAIL;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,gCAAgC;CACjC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,cAAe;CAWhB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,SAAU;CAKX;;AAHC;EACE,kBAAmB;CACpB;;AAIL;;;;;;;;;;;;;;;;EAgBE;;AAEF;EACE,WAAW;EACX,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,gBAAkB;EAAlB,kBAAkB;EAClB,+BAAgC;CASjC;;AAPC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,gCAAiC;CAClC","file":"Loaded.css","sourcesContent":["/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 0px #7f7f7f;\n    -webkit-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    transform: scale(1.025);\n    color: black;\n    border: 1px solid dimgrey;\n\n    & .description .descriptionText {\n      filter: blur(.8px);\n    }\n\n    & .viewFull {\n      opacity: 1;\n    }\n  }\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  color: #676767;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.viewFull {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out;\n\n  & button {\n    font-weight: 600;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"job": "Loaded-job-2bsM0",
  	"description": "Loaded-description-1O48t",
  	"descriptionText": "Loaded-descriptionText-2wAoe",
  	"viewFull": "Loaded-viewFull-sSXFx",
  	"jobPosition": "Loaded-jobPosition-3ZezO",
  	"jobMeta": "Loaded-jobMeta-3-1OF"
  };

/***/ }),
/* 1483 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Accommodations\\Filter\\Filter.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(400);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Filter = __webpack_require__(1484);

  var _Filter2 = _interopRequireDefault(_Filter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Filter = function (_React$Component) {
    (0, _inherits3.default)(Filter, _React$Component);

    function Filter() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, Filter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        order: _this2.props.data.order,
        orderParam: _this2.props.data.orderParam,
        types: _this2.props.accommodationsInfo.types,
        locations: _this2.props.accommodationsInfo.locations
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }

    (0, _createClass3.default)(Filter, [{
      key: 'orderChanged',
      value: function orderChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          order: data.value
        });
        this.props.changeBasicFilter(data.value, this.state.orderParam);
        this.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeAccommodations(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'orderParamChanged',
      value: function orderParamChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          orderParam: data.value
        });
        this.props.changeBasicFilter(this.state.order, data.value);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&category=" + this.props.data.category + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeAccommodations(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log(this.state.categories, this.state.locations);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'locationChanged',
      value: function locationChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateLocation(val);
          val = val.join();
        } else {
          this.props.updateLocation('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + val).then(function (result) {
          _this.props.changeAccommodations(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'typeChanged',
      value: function typeChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateType(val);
          val = val.join();
        } else {
          this.props.updateType('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&term=" + this.props.data.search + "&type=" + val).then(function (result) {
          _this.props.changeAccommodations(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'searchChanged',
      value: function searchChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        this.props.updateSearch(val);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&term=" + val).then(function (result) {
          _this.props.changeAccommodations(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var options = [{ text: 'Date Added', value: 'dateCreated' }];

        var options2 = [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }];

        return _react2.default.createElement(
          'div',
          { className: _Filter2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.left, __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Types', multiple: true, search: true, selection: true, scrolling: true, options: this.state.types, onChange: this.typeChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Locations', multiple: true, search: true, selection: true, scrolling: true, options: this.state.locations, onChange: this.locationChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.right, __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Input,
              { type: 'text', placeholder: 'Search...', action: true, onChange: this.searchChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134
                },
                __self: this
              },
              _react2.default.createElement('input', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options, defaultValue: 'dateCreated', onChange: this.orderParamChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options2, defaultValue: 'asc', onChange: this.orderChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Filter;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Filter2.default)(Filter);

/***/ }),
/* 1484 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1485);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1485 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Filter-container-1j096 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&.left .dropdown {\n  margin-right: .5em !important;\n}\n\n.Filter-left-3S_fA {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-right: .5em\n}\n\n.Filter-left-3S_fA .ui.dropdown {\n  //margin-right: .5em !important;\n  border-radius: 0 !important;\n}\n\n.Filter-right-JMiJd {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Accommodations/Filter/Filter.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,oBAAgB;MAAhB,gBAAgB;EAChB,sCAAsC;CACvC;;AAED;;;;;;EAME;;AAEF;EACE,8BAA8B;CAC/B;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAoB;CAMrB;;AAJC;EACE,gCAAgC;EAChC,4BAA4B;CAC7B;;AAGH;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB","file":"Filter.css","sourcesContent":[".container {\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&:global(.left .dropdown) {\n  margin-right: .5em !important;\n}\n\n.left {\n  display: flex;\n  align-items: flex-start;\n  padding-right: .5em;\n\n  & :global(.ui.dropdown) {\n    //margin-right: .5em !important;\n    border-radius: 0 !important;\n  }\n}\n\n.right {\n  display: flex;\n  margin-left: auto;\n  align-items: flex-start;\n  padding-left: .5em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Filter-container-1j096",
  	"left": "Filter-left-3S_fA",
  	"right": "Filter-right-JMiJd"
  };

/***/ }),
/* 1486 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1487);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1487 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-TKOFG {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-hGE47 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Accommodations/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-TKOFG",
  	"container": "Render-container-hGE47"
  };

/***/ }),
/* 1488 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1489);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Accommodations.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Accommodations.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1489 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n\n    /*\n   * Typography\n   * ======================================================================== */\n\n    /*\n   * Layout\n   * ======================================================================== */\n\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n    /* Extra small screen / phone */\n\n    /* Small screen / tablet */\n\n    /* Medium screen / desktop */\n\n    /* Large screen / wide desktop */\n}\n\n.Accommodations-root-1Gnqv {\n}\n\n.Accommodations-container-3LygD {\n  \n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/accommodations/Accommodations.css"],"names":[],"mappings":"AAAA;;IACE;;gFAE8E;;IAI9E;;gFAE8E;;IAI9E;;gFAE8E;;IAErD,gCAAgC;;IAChC,2BAA2B;;IAC3B,6BAA6B;;IAC7B,iCAAiC;CAC3D;;ACnBD;CACC;;AAED;;CAEC","file":"Accommodations.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n}\n\n.container {\n  \n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Accommodations-root-1Gnqv",
  	"container": "Accommodations-container-3LygD"
  };

/***/ }),
/* 1490 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\casino\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Casino = __webpack_require__(1491);

  var _Casino2 = _interopRequireDefault(_Casino);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Accommodation';

  exports.default = {

    path: '/casinos/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/casinos/' + params.id + '.json');

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                data = _context.sent;
                return _context.abrupt('return', data && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Casino2.default, { title: title, casino: data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    })
                  )
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1491 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\casino\\Casino.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Render = __webpack_require__(1492);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Casino = __webpack_require__(1498);

  var _Casino2 = _interopRequireDefault(_Casino);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Casino = function (_React$Component) {
    (0, _inherits3.default)(Casino, _React$Component);

    function Casino(props) {
      (0, _classCallCheck3.default)(this, Casino);
      return (0, _possibleConstructorReturn3.default)(this, (Casino.__proto__ || (0, _getPrototypeOf2.default)(Casino)).call(this, props));
    }

    (0, _createClass3.default)(Casino, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Casino2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Casino2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { casino: this.props.casino, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Casino;
  }(_react2.default.Component);

  Casino.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Casino2.default)(Casino);

/***/ }),
/* 1492 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Casino\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loaded = __webpack_require__(1493);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1496);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(_Loaded2.default, { casino: this.props.casino, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1493 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Casino\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1494);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {
        var data = this.props.casino;

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.jobPosition, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: this
                  },
                  data.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Loaded2.default.jobMeta, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    }),
                    data.category
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    }),
                    data.city
                  )
                )
              ),
              _react2.default.createElement('div', { className: _Loaded2.default.description, dangerouslySetInnerHTML: { __html: data.description }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1494 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1495);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1495 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-1veKo {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.Loaded-job-nA7kC {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.Loaded-jobPosition-2qvcC {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-2qvcC h1,\n  .Loaded-jobPosition-2qvcC h2,\n  .Loaded-jobPosition-2qvcC h3,\n  .Loaded-jobPosition-2qvcC h4,\n  .Loaded-jobPosition-2qvcC h5,\n  .Loaded-jobPosition-2qvcC h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-MFgAO {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.Loaded-apply-1-SPS {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.Loaded-fileInput-2ND__ {\n    display: none !important;\n}\n\n.Loaded-jobMeta-2iZ_P {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%\n}\n\n.Loaded-jobMeta-2iZ_P p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.Loaded-jobMeta-2iZ_P p i {\n  margin-right: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Casino/Loaded/Loaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,gCAAgC;EAChC,oCAAoC;EACpC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;EACE,uCAAuC;EACvC,4BAA4B;EAC5B,8BAA8B;EAC9B,qBAAqB;CACtB;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,YAAQ;CAWT;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.apply {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.fileInput {\n    display: none !important;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-1veKo",
  	"job": "Loaded-job-nA7kC",
  	"jobPosition": "Loaded-jobPosition-2qvcC",
  	"description": "Loaded-description-MFgAO",
  	"apply": "Loaded-apply-1-SPS",
  	"fileInput": "Loaded-fileInput-2ND__",
  	"jobMeta": "Loaded-jobMeta-2iZ_P"
  };

/***/ }),
/* 1496 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1497);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1497 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-1X_0w {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-3d5fN {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Casino/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-1X_0w",
  	"container": "Render-container-3d5fN"
  };

/***/ }),
/* 1498 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1499);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Casino.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Casino.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1499 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Casino-root-3crJe {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Casino-container-3QDVj {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/casino/Casino.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,cAAc;EACd,WAAW;CACZ","file":"Casino.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Casino-root-3crJe",
  	"container": "Casino-container-3QDVj"
  };

/***/ }),
/* 1500 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\casinos\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Casinos = __webpack_require__(1501);

  var _Casinos2 = _interopRequireDefault(_Casinos);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Casinos';

  exports.default = {

    path: '/casinos',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var casinos, casinosData, cities, citiesData, info;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/casinos.json');

              case 2:
                casinos = _context.sent;
                _context.next = 5;
                return casinos.json();

              case 5:
                casinosData = _context.sent;
                _context.next = 8;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities.json');

              case 8:
                cities = _context.sent;
                _context.next = 11;
                return cities.json();

              case 11:
                citiesData = _context.sent;
                info = {
                  locations: citiesData.data
                };
                return _context.abrupt('return', {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Casinos2.default, { title: title, casinos: casinosData, casinosInfo: info, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: _this
                    })
                  )
                });

              case 14:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1501 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\casinos\\Casinos.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _Render = __webpack_require__(1502);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Casinos = __webpack_require__(1511);

  var _Casinos2 = _interopRequireDefault(_Casinos);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Casinos = function (_React$Component) {
    (0, _inherits3.default)(Casinos, _React$Component);

    function Casinos(props) {
      (0, _classCallCheck3.default)(this, Casinos);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (Casinos.__proto__ || (0, _getPrototypeOf2.default)(Casinos)).call(this, props));

      _this2.state = {
        casinos: [],
        loading: true
      };
      return _this2;
    }

    (0, _createClass3.default)(Casinos, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Casinos2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Casinos2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { loading: this.state.loading, casinos: this.props.casinos, casinosInfo: this.props.casinosInfo, pagination: this.props.casinos.meta.pagination, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Casinos;
  }(_react2.default.Component);

  Casinos.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Casinos2.default)(Casinos);

/***/ }),
/* 1502 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(1247);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Casinos\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loading = __webpack_require__(1249);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Loaded = __webpack_require__(1503);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _Filter = __webpack_require__(1506);

  var _Filter2 = _interopRequireDefault(_Filter);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1509);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render(props) {
      (0, _classCallCheck3.default)(this, Render);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, props));

      _this.state = {
        casinos: _this.props.casinos,
        type: '*',
        category: '*',
        city: '*',
        search: '',
        order: 'asc',
        orderParam: 'dateCreated',
        url: 'http://www.southms.com/index.php/api/casinos.json?',
        urlSearch: 'http://www.southms.com/index.php/api/search.json?',
        urlPagination: _this.city,
        location: [],
        loading: false
      };
      return _this;
    }

    (0, _createClass3.default)(Render, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onLoadChange',
      value: function onLoadChange(load) {
        this.setState(load);
      }
    }, {
      key: 'changeCasinos',
      value: function changeCasinos(casions) {
        this.setState({
          casions: casions
        });
      }
    }, {
      key: 'changeBasicFilter',
      value: function changeBasicFilter(order, orderParam) {
        this.setState({
          order: order,
          orderParam: orderParam
        });
      }
    }, {
      key: 'updateLocation',
      value: function updateLocation(city) {
        this.setState({ city: city });
      }
    }, {
      key: 'updateCategory',
      value: function updateCategory(category) {
        this.setState({ category: category });
      }
    }, {
      key: 'updateSearch',
      value: function updateSearch(search) {
        this.setState({ search: search });
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        var render = null;
        if (typeof this.state.casinos.data == 'undefined' && !this.state.casinos.data.length > 0 || this.state.loading == true) {
          render = _react2.default.createElement(_Loading2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          });
        } else {
          render = _react2.default.createElement(_Loaded2.default, { casinos: this.state.casinos, pagination: this.props.pagination, data: this.state, onLoadChange: this.onLoadChange.bind(this), changeCasinos: this.changeCasinos.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 59
            },
            __self: this
          });
        }

        var city = {
          camelCase: this.state.city
        };

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 67
            },
            __self: this
          },
          _react2.default.createElement(_Filter2.default, (_React$createElement = { onLoadChange: this.onLoadChange.bind(this), updateSearch: this.updateSearch.bind(this), changeCasinos: this.changeCasinos.bind(this), changeBasicFilter: this.changeBasicFilter.bind(this), data: this.state, casinos: this.state.casinos, casinoInfo: this.props.casinosInfo, location: this.state.location }, (0, _defineProperty3.default)(_React$createElement, 'onLoadChange', this.onLoadChange.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateCategory', this.updateCategory.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateLocation', this.updateLocation.bind(this)), (0, _defineProperty3.default)(_React$createElement, '__source', {
            fileName: _jsxFileName,
            lineNumber: 68
          }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement)),
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 69
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 70
                },
                __self: this
              },
              render
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 73
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1503 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Casinos\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _striptags = __webpack_require__(1256);

  var _striptags2 = _interopRequireDefault(_striptags);

  var _Pagination = __webpack_require__(1257);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  var _Grid = __webpack_require__(1265);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1504);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Loaded);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        casinos: _this.props.casinos.data
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            this.state.casinos.map(function (casino, i) {
              return _react2.default.createElement(
                _Grid2.default,
                { key: casino.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { href: "/casinos/" + casino.id, className: _Loaded2.default.job, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'div',
                    { className: _Loaded2.default.jobPosition, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'h3',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
                        },
                        __self: this
                      },
                      casino.position
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _Loaded2.default.jobMeta, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        }),
                        casino.city
                      )
                    )
                  )
                )
              );
            }),
            _react2.default.createElement(_Pagination2.default, { pagination: this.props.pagination, data: this.props.data, onLoadChange: this.props.onLoadChange, changeData: this.props.changeCasinos, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1504 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1505);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1505 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.Loaded-job-MCQvN {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%\n}\n.Loaded-job-MCQvN:hover {\n  box-shadow: 0px 0px 3px 0px #7f7f7f;\n  -webkit-transform: scale(1.025);\n  -ms-transform: scale(1.025);\n  transform: scale(1.025);\n  color: black;\n  border: 1px solid dimgrey\n}\n.Loaded-job-MCQvN:hover .Loaded-description-2lFcy .Loaded-descriptionText-3Awtz {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"0.8\" /></filter></svg>#filter');\n  -webkit-filter: blur(.8px);\n          filter: blur(.8px)\n}\n.Loaded-job-MCQvN:hover .Loaded-viewFull-38IFI {\n  opacity: 1\n}\n\n.Loaded-jobPosition-2w0fy {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-2w0fy h1,\n  .Loaded-jobPosition-2w0fy h2,\n  .Loaded-jobPosition-2w0fy h3,\n  .Loaded-jobPosition-2w0fy h4,\n  .Loaded-jobPosition-2w0fy h5,\n  .Loaded-jobPosition-2w0fy h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-2lFcy {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.Loaded-jobMeta-2t4j2 {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  color: #676767\n}\n\n.Loaded-jobMeta-2t4j2 p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0\n}\n\n.Loaded-jobMeta-2t4j2 p i {\n  margin-right: .5em\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.Loaded-viewFull-38IFI {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 24px;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out\n}\n\n.Loaded-viewFull-38IFI button {\n  font-weight: 600;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Casinos/Loaded/Loaded.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Casinos/Loaded/<no source>"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;EAkBE;AACF;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,iBAAkB;CAkBnB;AAhBC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,yBAA0B;CAS3B;AAPC;EClCJ,wKAAA;EDmCM,2BAAmB;UAAnB,kBAAmB;CACpB;AAED;EACE,UAAW;CACZ;;AAIL;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,gCAAgC;CACjC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,cAAe;CAWhB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,SAAU;CAKX;;AAHC;EACE,kBAAmB;CACpB;;AAIL;;;;;;;;;;;;;;;;EAgBE;;AAEF;EACE,WAAW;EACX,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,gBAAkB;EAAlB,kBAAkB;EAClB,+BAAgC;CASjC;;AAPC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,gCAAiC;CAClC","file":"Loaded.css","sourcesContent":["/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 0px #7f7f7f;\n    -webkit-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    transform: scale(1.025);\n    color: black;\n    border: 1px solid dimgrey;\n\n    & .description .descriptionText {\n      filter: blur(.8px);\n    }\n\n    & .viewFull {\n      opacity: 1;\n    }\n  }\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  color: #676767;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.viewFull {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out;\n\n  & button {\n    font-weight: 600;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"job": "Loaded-job-MCQvN",
  	"description": "Loaded-description-2lFcy",
  	"descriptionText": "Loaded-descriptionText-3Awtz",
  	"viewFull": "Loaded-viewFull-38IFI",
  	"jobPosition": "Loaded-jobPosition-2w0fy",
  	"jobMeta": "Loaded-jobMeta-2t4j2"
  };

/***/ }),
/* 1506 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Casinos\\Filter\\Filter.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(400);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Filter = __webpack_require__(1507);

  var _Filter2 = _interopRequireDefault(_Filter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Filter = function (_React$Component) {
    (0, _inherits3.default)(Filter, _React$Component);

    function Filter() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, Filter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        order: _this2.props.data.order,
        orderParam: _this2.props.data.orderParam,
        locations: _this2.props.casinoInfo.locations
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }

    (0, _createClass3.default)(Filter, [{
      key: 'orderChanged',
      value: function orderChanged(event, data) {
        var _this = this;
        console.log("Sort changed", data.value);
        _this.props.onLoadChange({ loading: true });
        this.setState({
          order: data.value
        });
        this.props.changeBasicFilter(data.value, this.state.orderParam);
        this.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeCasinos(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'orderParamChanged',
      value: function orderParamChanged(event, data) {
        var _this = this;
        console.log("Sort changed", data.value);
        _this.props.onLoadChange({ loading: true });
        this.setState({
          orderParam: data.value
        });
        this.props.changeBasicFilter(this.state.order, data.value);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeCasinos(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log(this.state.categories, this.state.types, this.state.locations);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'locationChanged',
      value: function locationChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateLocation(val);
          val = val.join();
        } else {
          this.props.updateLocation('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&term=" + this.props.data.search + "&city=" + val).then(function (result) {
          _this.props.changeCasinos(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'searchChanged',
      value: function searchChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        this.props.updateSearch(val);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&term=" + val).then(function (result) {
          _this.props.changeCasinos(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var options = [{ text: 'Date Added', value: 'dateCreated' }, { text: 'Salary', value: 'jobSalary' }];

        var options2 = [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }];

        return _react2.default.createElement(
          'div',
          { className: _Filter2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 109
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.left, __source: {
                fileName: _jsxFileName,
                lineNumber: 110
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Locations', multiple: true, search: true, selection: true, scrolling: true, options: this.state.locations, onChange: this.locationChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 111
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.right, __source: {
                fileName: _jsxFileName,
                lineNumber: 113
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Input,
              { type: 'text', placeholder: 'Search...', action: true, onChange: this.searchChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 114
                },
                __self: this
              },
              _react2.default.createElement('input', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 115
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options, defaultValue: 'dateCreated', onChange: this.orderParamChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 116
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options2, defaultValue: 'asc', onChange: this.orderChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 117
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Filter;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Filter2.default)(Filter);

/***/ }),
/* 1507 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1508);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1508 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Filter-container-3FUE1 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&.left .dropdown {\n  margin-right: .5em !important;\n}\n\n.Filter-left-2DPbf {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-right: .5em\n}\n\n.Filter-left-2DPbf .ui.dropdown {\n  //margin-right: .5em !important;\n  border-radius: 0 !important;\n}\n\n.Filter-right-3GZPm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Casinos/Filter/Filter.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,oBAAgB;MAAhB,gBAAgB;EAChB,sCAAsC;CACvC;;AAED;;;;;;EAME;;AAEF;EACE,8BAA8B;CAC/B;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAoB;CAMrB;;AAJC;EACE,gCAAgC;EAChC,4BAA4B;CAC7B;;AAGH;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB","file":"Filter.css","sourcesContent":[".container {\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&:global(.left .dropdown) {\n  margin-right: .5em !important;\n}\n\n.left {\n  display: flex;\n  align-items: flex-start;\n  padding-right: .5em;\n\n  & :global(.ui.dropdown) {\n    //margin-right: .5em !important;\n    border-radius: 0 !important;\n  }\n}\n\n.right {\n  display: flex;\n  margin-left: auto;\n  align-items: flex-start;\n  padding-left: .5em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Filter-container-3FUE1",
  	"left": "Filter-left-2DPbf",
  	"right": "Filter-right-3GZPm"
  };

/***/ }),
/* 1509 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1510);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1510 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-2LlGY {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-O6Ryz {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Casinos/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-2LlGY",
  	"container": "Render-container-O6Ryz"
  };

/***/ }),
/* 1511 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1512);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Casinos.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Casinos.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1512 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n\n    /*\n   * Typography\n   * ======================================================================== */\n\n    /*\n   * Layout\n   * ======================================================================== */\n\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n    /* Extra small screen / phone */\n\n    /* Small screen / tablet */\n\n    /* Medium screen / desktop */\n\n    /* Large screen / wide desktop */\n}\n\n.Casinos-root-1n0EF {\n}\n\n.Casinos-container-3lj7A {\n  \n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/casinos/Casinos.css"],"names":[],"mappings":"AAAA;;IACE;;gFAE8E;;IAI9E;;gFAE8E;;IAI9E;;gFAE8E;;IAErD,gCAAgC;;IAChC,2BAA2B;;IAC3B,6BAA6B;;IAC7B,iCAAiC;CAC3D;;ACnBD;CACC;;AAED;;CAEC","file":"Casinos.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n}\n\n.container {\n  \n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Casinos-root-1n0EF",
  	"container": "Casinos-container-3lj7A"
  };

/***/ }),
/* 1513 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\restaurant\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Restaurant = __webpack_require__(1514);

  var _Restaurant2 = _interopRequireDefault(_Restaurant);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Restaurant';

  exports.default = {

    path: '/restaurants/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/restaurants/' + params.id + '.json');

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                data = _context.sent;
                return _context.abrupt('return', data && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Restaurant2.default, { title: title, restaurant: data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    })
                  )
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1514 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\restaurant\\Restaurant.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Render = __webpack_require__(1515);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Restaurant = __webpack_require__(1521);

  var _Restaurant2 = _interopRequireDefault(_Restaurant);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Restaurant = function (_React$Component) {
    (0, _inherits3.default)(Restaurant, _React$Component);

    function Restaurant(props) {
      (0, _classCallCheck3.default)(this, Restaurant);
      return (0, _possibleConstructorReturn3.default)(this, (Restaurant.__proto__ || (0, _getPrototypeOf2.default)(Restaurant)).call(this, props));
    }

    (0, _createClass3.default)(Restaurant, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Restaurant2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Restaurant2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { restaurant: this.props.restaurant, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Restaurant;
  }(_react2.default.Component);

  Restaurant.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Restaurant2.default)(Restaurant);

/***/ }),
/* 1515 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Restaurant\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loaded = __webpack_require__(1516);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1519);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(_Loaded2.default, { restaurant: this.props.restaurant, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1516 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Restaurant\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1517);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {
        var data = this.props.restaurant;

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.jobPosition, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: this
                  },
                  data.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Loaded2.default.jobMeta, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    }),
                    data.category
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    }),
                    data.city
                  )
                )
              ),
              _react2.default.createElement('div', { className: _Loaded2.default.description, dangerouslySetInnerHTML: { __html: data.description }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1517 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1518);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1518 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-2NLCx {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.Loaded-job-3LNSm {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.Loaded-jobPosition-31raM {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-31raM h1,\n  .Loaded-jobPosition-31raM h2,\n  .Loaded-jobPosition-31raM h3,\n  .Loaded-jobPosition-31raM h4,\n  .Loaded-jobPosition-31raM h5,\n  .Loaded-jobPosition-31raM h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-2c5hn {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.Loaded-apply-1zNK4 {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.Loaded-fileInput-Mzws- {\n    display: none !important;\n}\n\n.Loaded-jobMeta-p61NQ {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%\n}\n\n.Loaded-jobMeta-p61NQ p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.Loaded-jobMeta-p61NQ p i {\n  margin-right: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Restaurant/Loaded/Loaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,gCAAgC;EAChC,oCAAoC;EACpC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;EACE,uCAAuC;EACvC,4BAA4B;EAC5B,8BAA8B;EAC9B,qBAAqB;CACtB;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,YAAQ;CAWT;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.apply {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.fileInput {\n    display: none !important;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-2NLCx",
  	"job": "Loaded-job-3LNSm",
  	"jobPosition": "Loaded-jobPosition-31raM",
  	"description": "Loaded-description-2c5hn",
  	"apply": "Loaded-apply-1zNK4",
  	"fileInput": "Loaded-fileInput-Mzws-",
  	"jobMeta": "Loaded-jobMeta-p61NQ"
  };

/***/ }),
/* 1519 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1520);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1520 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-1hkdg {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-3cJcB {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Restaurant/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-1hkdg",
  	"container": "Render-container-3cJcB"
  };

/***/ }),
/* 1521 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1522);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Restaurant.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Restaurant.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1522 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Restaurant-root-2y_Xh {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Restaurant-container-HbLvW {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/restaurant/Restaurant.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,cAAc;EACd,WAAW;CACZ","file":"Restaurant.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Restaurant-root-2y_Xh",
  	"container": "Restaurant-container-HbLvW"
  };

/***/ }),
/* 1523 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\restaurants\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Restaurants = __webpack_require__(1524);

  var _Restaurants2 = _interopRequireDefault(_Restaurants);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/restaurants',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var title, restaurants, restaurantsData, cities, citiesData, restaurantTypes, restaurantTypesData, info;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const route = await next();
                //console.log("Running fetch!", params, path, uri);
                title = "Restaurants page";
                _context.next = 3;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/restaurants.json');

              case 3:
                restaurants = _context.sent;
                _context.next = 6;
                return restaurants.json();

              case 6:
                restaurantsData = _context.sent;
                _context.next = 9;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities.json');

              case 9:
                cities = _context.sent;
                _context.next = 12;
                return cities.json();

              case 12:
                citiesData = _context.sent;
                _context.next = 15;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/restaurant-types.json');

              case 15:
                restaurantTypes = _context.sent;
                _context.next = 18;
                return restaurantTypes.json();

              case 18:
                restaurantTypesData = _context.sent;
                info = {
                  types: restaurantTypesData.types,
                  locations: citiesData.data
                };
                return _context.abrupt('return', {
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Restaurants2.default, { title: title, restaurants: restaurantsData, restaurantsInfo: info, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: _this
                    })
                  )
                });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1524 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\restaurants\\Restaurants.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1525);

  var _Render2 = _interopRequireDefault(_Render);

  var _Restaurants = __webpack_require__(1534);

  var _Restaurants2 = _interopRequireDefault(_Restaurants);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Restaurants = function (_React$Component) {
    (0, _inherits3.default)(Restaurants, _React$Component);

    function Restaurants(props) {
      (0, _classCallCheck3.default)(this, Restaurants);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Restaurants.__proto__ || (0, _getPrototypeOf2.default)(Restaurants)).call(this, props));

      _this.state = {
        restaurants: [],
        loading: true
      };
      return _this;
    }

    (0, _createClass3.default)(Restaurants, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Restaurants2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Restaurants2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { loading: this.state.loading, restaurants: this.props.restaurants, restaurantsInfo: this.props.restaurantsInfo, pagination: this.props.restaurants.meta.pagination, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Restaurants;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Restaurants2.default)(Restaurants);

/***/ }),
/* 1525 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(1247);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Restaurants\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loading = __webpack_require__(1249);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Loaded = __webpack_require__(1526);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _Filter = __webpack_require__(1529);

  var _Filter2 = _interopRequireDefault(_Filter);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1532);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render(props) {
      (0, _classCallCheck3.default)(this, Render);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, props));

      _this.state = {
        restaurants: _this.props.restaurants,
        type: '*',
        city: '*',
        search: '',
        order: 'asc',
        orderParam: 'dateCreated',
        url: 'http://www.southms.com/index.php/api/restaurants.json?',
        urlSearch: 'http://www.southms.com/index.php/api/search.json?',
        location: [],
        loading: false
      };
      return _this;
    }

    (0, _createClass3.default)(Render, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onLoadChange',
      value: function onLoadChange(load) {
        this.setState(load);
      }
    }, {
      key: 'changeRestaurants',
      value: function changeRestaurants(restaurants) {
        this.setState({
          restaurants: restaurants
        });
      }
    }, {
      key: 'changeBasicFilter',
      value: function changeBasicFilter(order, orderParam) {
        this.setState({
          order: order,
          orderParam: orderParam
        });
      }
    }, {
      key: 'updateLocation',
      value: function updateLocation(city) {
        this.setState({ city: city });
      }
    }, {
      key: 'updateType',
      value: function updateType(type) {
        this.setState({ type: type });
      }
    }, {
      key: 'updateSearch',
      value: function updateSearch(search) {
        this.setState({ search: search });
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        var render = null;
        if (typeof this.state.restaurants.data == 'undefined' && !this.state.restaurants.data.length > 0 || this.state.loading == true) {
          render = _react2.default.createElement(_Loading2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 55
            },
            __self: this
          });
        } else {
          render = _react2.default.createElement(_Loaded2.default, { restaurants: this.state.restaurants, pagination: this.props.pagination, data: this.state, onLoadChange: this.onLoadChange.bind(this), changeJobs: this.changeRestaurants.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 57
            },
            __self: this
          });
        }

        var city = {
          camelCase: this.state.city
        };

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 65
            },
            __self: this
          },
          _react2.default.createElement(_Filter2.default, (_React$createElement = { onLoadChange: this.onLoadChange.bind(this), updateSearch: this.updateSearch.bind(this), changeRestaurants: this.changeRestaurants.bind(this), changeBasicFilter: this.changeBasicFilter.bind(this), data: this.state, restaurants: this.state.restaurants, restaurantsInfo: this.props.restaurantsInfo, location: this.state.location }, (0, _defineProperty3.default)(_React$createElement, 'onLoadChange', this.onLoadChange.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateType', this.updateType.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateLocation', this.updateLocation.bind(this)), (0, _defineProperty3.default)(_React$createElement, '__source', {
            fileName: _jsxFileName,
            lineNumber: 66
          }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement)),
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 67
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 68
                },
                __self: this
              },
              render
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 71
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1526 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Restaurants\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _striptags = __webpack_require__(1256);

  var _striptags2 = _interopRequireDefault(_striptags);

  var _Pagination = __webpack_require__(1257);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1527);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Loaded);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        restaurants: _this.props.restaurants.data
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 19
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 20
              },
              __self: this
            },
            this.state.restaurants.map(function (restaurant, i) {
              restaurant.description = (0, _striptags2.default)(restaurant.description, [], '\n');;

              return _react2.default.createElement(
                'div',
                { className: _Loaded2.default.jobContainer, key: restaurant.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 26
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { href: "/restaurants/" + restaurant.id, className: _Loaded2.default.job, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 27
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'div',
                    { className: _Loaded2.default.jobPosition, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 28
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'h3',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 29
                        },
                        __self: this
                      },
                      restaurant.title
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _Loaded2.default.jobMeta, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 30
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 31
                          },
                          __self: this
                        }),
                        restaurant.type
                      ),
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 32
                          },
                          __self: this
                        }),
                        restaurant.city
                      )
                    )
                  )
                )
              );
            }),
            _react2.default.createElement(_Pagination2.default, { pagination: this.props.pagination, data: this.props.data, onLoadChange: this.props.onLoadChange, changeData: this.props.changeRestaurants, __source: {
                fileName: _jsxFileName,
                lineNumber: 39
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1527 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1528);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1528 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-1TGfu {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.Loaded-jobContainer-3Hg9Z {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  -ms-flex-preferred-size: 100%;\n      flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n\n.Loaded-job-3BZU1 {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%\n}\n\n.Loaded-job-3BZU1:hover {\n  box-shadow: 0px 0px 3px 0px #7f7f7f;\n  -webkit-transform: scale(1.025);\n  -ms-transform: scale(1.025);\n  transform: scale(1.025);\n  color: black;\n  border: 1px solid dimgrey;\n}\n\n.Loaded-job-3BZU1:hover .Loaded-description-3zho8 .Loaded-descriptionText-3EAIL {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"0.8\" /></filter></svg>#filter');\n  -webkit-filter: blur(.8px);\n          filter: blur(.8px);\n}\n\n.Loaded-job-3BZU1:hover .Loaded-viewFull-2B8QA {\n  opacity: 1;\n}\n\n.Loaded-jobPosition-1r6YD {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-1r6YD h1,\n  .Loaded-jobPosition-1r6YD h2,\n  .Loaded-jobPosition-1r6YD h3,\n  .Loaded-jobPosition-1r6YD h4,\n  .Loaded-jobPosition-1r6YD h5,\n  .Loaded-jobPosition-1r6YD h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-3zho8 {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.Loaded-jobMeta-cuPE1 {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  color: #676767\n}\n\n.Loaded-jobMeta-cuPE1 p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.Loaded-jobMeta-cuPE1 p i {\n  margin-right: .5em;\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.Loaded-viewFull-2B8QA {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 24px;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out\n}\n\n.Loaded-viewFull-2B8QA button {\n  font-weight: 600;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%);\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Restaurants/Loaded/Loaded.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Restaurants/Loaded/<no source>"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,iCAAiC;EACjC,YAAY;EACZ,cAAc;CACf;;AAED;EACE,WAAW;EACX,qBAAqB;EACrB,kBAAkB;EAClB,8BAAiB;MAAjB,iBAAiB;EACjB,sBAAsB;EACtB,gBAAgB;CACjB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,iBAAkB;CAkBnB;;AAhBC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,0BAA0B;CAS3B;;AAPC;ECjCJ,wKAAA;EDkCM,2BAAmB;UAAnB,mBAAmB;CACpB;;AAED;EACE,WAAW;CACZ;;AAIL;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,gCAAgC;CACjC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,cAAe;CAWhB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB;;AAIL;;;;;;;;;;;;;;;;EAgBE;;AAEF;EACE,WAAW;EACX,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,gBAAkB;EAAlB,kBAAkB;EAClB,+BAAgC;CASjC;;AAPC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,iCAAiC;CAClC","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 0px #7f7f7f;\n    -webkit-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    transform: scale(1.025);\n    color: black;\n    border: 1px solid dimgrey;\n\n    & .description .descriptionText {\n      filter: blur(.8px);\n    }\n\n    & .viewFull {\n      opacity: 1;\n    }\n  }\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  color: #676767;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.viewFull {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out;\n\n  & button {\n    font-weight: 600;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-1TGfu",
  	"jobContainer": "Loaded-jobContainer-3Hg9Z",
  	"job": "Loaded-job-3BZU1",
  	"description": "Loaded-description-3zho8",
  	"descriptionText": "Loaded-descriptionText-3EAIL",
  	"viewFull": "Loaded-viewFull-2B8QA",
  	"jobPosition": "Loaded-jobPosition-1r6YD",
  	"jobMeta": "Loaded-jobMeta-cuPE1"
  };

/***/ }),
/* 1529 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Restaurants\\Filter\\Filter.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(400);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Filter = __webpack_require__(1530);

  var _Filter2 = _interopRequireDefault(_Filter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Filter = function (_React$Component) {
    (0, _inherits3.default)(Filter, _React$Component);

    function Filter() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, Filter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        order: _this2.props.data.order,
        orderParam: _this2.props.data.orderParam,
        types: _this2.props.restaurantsInfo.types,
        locations: _this2.props.restaurantsInfo.locations
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }

    (0, _createClass3.default)(Filter, [{
      key: 'orderChanged',
      value: function orderChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          order: data.value
        });
        this.props.changeBasicFilter(data.value, this.state.orderParam);
        this.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeRestaurants(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'orderParamChanged',
      value: function orderParamChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          orderParam: data.value
        });
        this.props.changeBasicFilter(this.state.order, data.value);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeRestaurants(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'locationChanged',
      value: function locationChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateLocation(val);
          val = val.join();
        } else {
          this.props.updateLocation('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + val).then(function (result) {
          _this.props.changeRestaurants(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'typeChanged',
      value: function typeChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateType(val);
          val = val.join();
        } else {
          this.props.updateType('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&term=" + this.props.data.search + "&type=" + val).then(function (result) {
          _this.props.changeRestaurants(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'searchChanged',
      value: function searchChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        this.props.updateSearch(val);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&term=" + val).then(function (result) {
          _this.props.changeRestaurants(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var options = [{ text: 'Date Added', value: 'dateCreated' }];

        var options2 = [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }];

        return _react2.default.createElement(
          'div',
          { className: _Filter2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 126
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.left, __source: {
                fileName: _jsxFileName,
                lineNumber: 127
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Types', multiple: true, search: true, selection: true, scrolling: true, options: this.state.types, onChange: this.typeChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 128
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Locations', multiple: true, search: true, selection: true, scrolling: true, options: this.state.locations, onChange: this.locationChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.right, __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Input,
              { type: 'text', placeholder: 'Search...', action: true, onChange: this.searchChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 132
                },
                __self: this
              },
              _react2.default.createElement('input', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 133
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options, defaultValue: 'dateCreated', onChange: this.orderParamChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options2, defaultValue: 'asc', onChange: this.orderChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Filter;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Filter2.default)(Filter);

/***/ }),
/* 1530 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1531);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1531 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Filter-container-GCQvp {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&.left .dropdown {\n  margin-right: .5em !important;\n}\n\n.Filter-left-3iLzF {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-right: .5em\n}\n\n.Filter-left-3iLzF .ui.dropdown {\n  //margin-right: .5em !important;\n  border-radius: 0 !important;\n}\n\n.Filter-right-3139I {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Restaurants/Filter/Filter.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,oBAAgB;MAAhB,gBAAgB;EAChB,sCAAsC;CACvC;;AAED;;;;;;EAME;;AAEF;EACE,8BAA8B;CAC/B;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAoB;CAMrB;;AAJC;EACE,gCAAgC;EAChC,4BAA4B;CAC7B;;AAGH;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB","file":"Filter.css","sourcesContent":[".container {\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&:global(.left .dropdown) {\n  margin-right: .5em !important;\n}\n\n.left {\n  display: flex;\n  align-items: flex-start;\n  padding-right: .5em;\n\n  & :global(.ui.dropdown) {\n    //margin-right: .5em !important;\n    border-radius: 0 !important;\n  }\n}\n\n.right {\n  display: flex;\n  margin-left: auto;\n  align-items: flex-start;\n  padding-left: .5em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Filter-container-GCQvp",
  	"left": "Filter-left-3iLzF",
  	"right": "Filter-right-3139I"
  };

/***/ }),
/* 1532 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1533);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1533 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-3Zroa {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-3tGaN {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Restaurants/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-3Zroa",
  	"container": "Render-container-3tGaN"
  };

/***/ }),
/* 1534 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1535);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Restaurants.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Restaurants.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1535 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n    /*\n   * Typography\n   * ======================================================================== */\n    /*\n   * Layout\n   * ======================================================================== */\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n    /* Extra small screen / phone */\n    /* Small screen / tablet */\n    /* Medium screen / desktop */\n    /* Large screen / wide desktop */\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css"],"names":[],"mappings":"AAAA;IACE;;gFAE8E;IAI9E;;gFAE8E;IAI9E;;gFAE8E;IAErD,gCAAgC;IAChC,2BAA2B;IAC3B,6BAA6B;IAC7B,iCAAiC;CAC3D","file":"Restaurants.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

  // exports


/***/ }),
/* 1536 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\vehicle\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Vehicle = __webpack_require__(1537);

  var _Vehicle2 = _interopRequireDefault(_Vehicle);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Vehicle';

  exports.default = {

    path: '/vehicles/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/vehicles/' + params.id + '.json');

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                data = _context.sent;
                return _context.abrupt('return', data && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Vehicle2.default, { title: title, vehicle: data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    })
                  )
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1537 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\vehicle\\Vehicle.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Render = __webpack_require__(1538);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Vehicle = __webpack_require__(1544);

  var _Vehicle2 = _interopRequireDefault(_Vehicle);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Vehicle = function (_React$Component) {
    (0, _inherits3.default)(Vehicle, _React$Component);

    function Vehicle(props) {
      (0, _classCallCheck3.default)(this, Vehicle);
      return (0, _possibleConstructorReturn3.default)(this, (Vehicle.__proto__ || (0, _getPrototypeOf2.default)(Vehicle)).call(this, props));
    }

    (0, _createClass3.default)(Vehicle, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Vehicle2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Vehicle2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { vehicle: this.props.vehicle, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Vehicle;
  }(_react2.default.Component);

  Vehicle.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Vehicle2.default)(Vehicle);

/***/ }),
/* 1538 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Vehicle\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loaded = __webpack_require__(1539);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1542);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(_Loaded2.default, { vehicle: this.props.vehicle, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1539 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Vehicle\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1540);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {
        var data = this.props.vehicle;

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.jobPosition, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: this
                  },
                  data.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Loaded2.default.jobMeta, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    }),
                    data.category
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    }),
                    data.city
                  )
                )
              ),
              _react2.default.createElement('div', { className: _Loaded2.default.description, dangerouslySetInnerHTML: { __html: data.description }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1540 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1541);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1541 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-1-ELz {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.Loaded-job-bo5Tl {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.Loaded-jobPosition-3szyB {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-3szyB h1,\n  .Loaded-jobPosition-3szyB h2,\n  .Loaded-jobPosition-3szyB h3,\n  .Loaded-jobPosition-3szyB h4,\n  .Loaded-jobPosition-3szyB h5,\n  .Loaded-jobPosition-3szyB h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-1MUUM {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.Loaded-apply-1988G {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.Loaded-fileInput-1XFNd {\n    display: none !important;\n}\n\n.Loaded-jobMeta-2zUhY {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%\n}\n\n.Loaded-jobMeta-2zUhY p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.Loaded-jobMeta-2zUhY p i {\n  margin-right: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Vehicle/Loaded/Loaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,gCAAgC;EAChC,oCAAoC;EACpC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;EACE,uCAAuC;EACvC,4BAA4B;EAC5B,8BAA8B;EAC9B,qBAAqB;CACtB;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,YAAQ;CAWT;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.apply {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.fileInput {\n    display: none !important;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-1-ELz",
  	"job": "Loaded-job-bo5Tl",
  	"jobPosition": "Loaded-jobPosition-3szyB",
  	"description": "Loaded-description-1MUUM",
  	"apply": "Loaded-apply-1988G",
  	"fileInput": "Loaded-fileInput-1XFNd",
  	"jobMeta": "Loaded-jobMeta-2zUhY"
  };

/***/ }),
/* 1542 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1543);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1543 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-3ZX5l {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-2CO3G {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Vehicle/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-3ZX5l",
  	"container": "Render-container-2CO3G"
  };

/***/ }),
/* 1544 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1545);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Vehicle.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Vehicle.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1545 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.Vehicle-root-13K6W {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.Vehicle-container-yGrQb {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/vehicle/Vehicle.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,cAAc;EACd,WAAW;CACZ","file":"Vehicle.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Vehicle-root-13K6W",
  	"container": "Vehicle-container-yGrQb"
  };

/***/ }),
/* 1546 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\vehicles\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Vehicles = __webpack_require__(1547);

  var _Vehicles2 = _interopRequireDefault(_Vehicles);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Casinos';

  exports.default = {

    path: '/vehicles',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var vehicles, vehiclesData, vehicleTypes, vehicleTypesData, cities, citiesData, info;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/vehicles.json');

              case 2:
                vehicles = _context.sent;
                _context.next = 5;
                return vehicles.json();

              case 5:
                vehiclesData = _context.sent;
                _context.next = 8;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/vehicle-types.json');

              case 8:
                vehicleTypes = _context.sent;
                _context.next = 11;
                return vehicleTypes.json();

              case 11:
                vehicleTypesData = _context.sent;
                _context.next = 14;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities.json');

              case 14:
                cities = _context.sent;
                _context.next = 17;
                return cities.json();

              case 17:
                citiesData = _context.sent;
                info = {
                  types: vehicleTypesData.types,
                  locations: citiesData.data
                };
                return _context.abrupt('return', {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Vehicles2.default, { title: title, vehicles: vehiclesData, vehiclesInfo: info, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: _this
                    })
                  )
                });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1547 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\vehicles\\Vehicles.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _Render = __webpack_require__(1548);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Vehicles = __webpack_require__(1557);

  var _Vehicles2 = _interopRequireDefault(_Vehicles);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Vehicles = function (_React$Component) {
    (0, _inherits3.default)(Vehicles, _React$Component);

    function Vehicles(props) {
      (0, _classCallCheck3.default)(this, Vehicles);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (Vehicles.__proto__ || (0, _getPrototypeOf2.default)(Vehicles)).call(this, props));

      _this2.state = {
        vehicles: _this2.props.vehicles,
        loading: true
      };
      return _this2;
    }

    (0, _createClass3.default)(Vehicles, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Vehicles2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Vehicles2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { loading: this.state.loading, vehicles: this.props.vehicles, vehiclesInfo: this.props.vehiclesInfo, pagination: this.props.vehicles.meta.pagination, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Vehicles;
  }(_react2.default.Component);

  Vehicles.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Vehicles2.default)(Vehicles);

/***/ }),
/* 1548 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(1247);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Vehicles\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loading = __webpack_require__(1249);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Loaded = __webpack_require__(1549);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _Filter = __webpack_require__(1552);

  var _Filter2 = _interopRequireDefault(_Filter);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1555);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render(props) {
      (0, _classCallCheck3.default)(this, Render);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, props));

      _this.state = {
        vehicles: _this.props.vehicles,
        type: '*',
        city: '*',
        search: '',
        order: 'asc',
        orderParam: 'dateCreated',
        url: 'http://www.southms.com/index.php/api/vehicles.json?',
        urlSearch: 'http://www.southms.com/index.php/api/search.json?',
        urlPagination: _this.city,
        location: [],
        loading: false
      };
      return _this;
    }

    (0, _createClass3.default)(Render, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onLoadChange',
      value: function onLoadChange(load) {
        this.setState(load);
      }
    }, {
      key: 'changeVehicles',
      value: function changeVehicles(vehicles) {
        this.setState({
          vehicles: vehicles
        });
      }
    }, {
      key: 'changeBasicFilter',
      value: function changeBasicFilter(order, orderParam) {
        this.setState({
          order: order,
          orderParam: orderParam
        });
      }
    }, {
      key: 'updateLocation',
      value: function updateLocation(city) {
        this.setState({ city: city });
      }
    }, {
      key: 'updateType',
      value: function updateType(type) {
        this.setState({ type: type });
      }
    }, {
      key: 'updateSearch',
      value: function updateSearch(search) {
        this.setState({ search: search });
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        var render = null;
        if (typeof this.state.vehicles.data == 'undefined' && !this.state.vehicles.data.length > 0 || this.state.loading == true) {
          render = _react2.default.createElement(_Loading2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          });
        } else {
          render = _react2.default.createElement(_Loaded2.default, { vehicles: this.state.vehicles, pagination: this.props.pagination, data: this.state, onLoadChange: this.onLoadChange.bind(this), changeVehicles: this.changeVehicles.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          });
        }

        var city = {
          camelCase: this.state.city
        };

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          },
          _react2.default.createElement(_Filter2.default, (_React$createElement = { onLoadChange: this.onLoadChange.bind(this), updateSearch: this.updateSearch.bind(this), changeVehicles: this.changeVehicles.bind(this), changeBasicFilter: this.changeBasicFilter.bind(this), data: this.state, vehicles: this.state.vehicles, vehiclesInfo: this.props.vehiclesInfo, location: this.state.location }, (0, _defineProperty3.default)(_React$createElement, 'onLoadChange', this.onLoadChange.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateType', this.updateType.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateLocation', this.updateLocation.bind(this)), (0, _defineProperty3.default)(_React$createElement, '__source', {
            fileName: _jsxFileName,
            lineNumber: 67
          }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement)),
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              render
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1549 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Vehicles\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _striptags = __webpack_require__(1256);

  var _striptags2 = _interopRequireDefault(_striptags);

  var _Pagination = __webpack_require__(1257);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  var _Grid = __webpack_require__(1265);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1550);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Loaded);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        vehicles: _this.props.vehicles.data
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            this.state.vehicles.map(function (vehicle, i) {
              return _react2.default.createElement(
                _Grid2.default,
                { key: vehicle.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { href: "/vehicles/" + vehicle.id, className: _Loaded2.default.job, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'div',
                    { className: _Loaded2.default.jobPosition, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'h3',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
                        },
                        __self: this
                      },
                      vehicle.title
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _Loaded2.default.jobMeta, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        }),
                        vehicle.city
                      )
                    )
                  )
                )
              );
            }),
            _react2.default.createElement(_Pagination2.default, { pagination: this.props.pagination, data: this.props.data, onLoadChange: this.props.onLoadChange, changeVehicles: this.props.changeVehicles, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1550 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1551);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1551 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.Loaded-job-2ta4h {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%\n}\n.Loaded-job-2ta4h:hover {\n  box-shadow: 0px 0px 3px 0px #7f7f7f;\n  -webkit-transform: scale(1.025);\n  -ms-transform: scale(1.025);\n  transform: scale(1.025);\n  color: black;\n  border: 1px solid dimgrey\n}\n.Loaded-job-2ta4h:hover .Loaded-description-3ZCxn .Loaded-descriptionText-3ZEgD {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"0.8\" /></filter></svg>#filter');\n  -webkit-filter: blur(.8px);\n          filter: blur(.8px)\n}\n.Loaded-job-2ta4h:hover .Loaded-viewFull-2OW77 {\n  opacity: 1\n}\n\n.Loaded-jobPosition-3NFSP {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-3NFSP h1,\n  .Loaded-jobPosition-3NFSP h2,\n  .Loaded-jobPosition-3NFSP h3,\n  .Loaded-jobPosition-3NFSP h4,\n  .Loaded-jobPosition-3NFSP h5,\n  .Loaded-jobPosition-3NFSP h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-3ZCxn {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.Loaded-jobMeta-2FOxM {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  color: #676767\n}\n\n.Loaded-jobMeta-2FOxM p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0\n}\n\n.Loaded-jobMeta-2FOxM p i {\n  margin-right: .5em\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.Loaded-viewFull-2OW77 {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 24px;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out\n}\n\n.Loaded-viewFull-2OW77 button {\n  font-weight: 600;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Vehicles/Loaded/Loaded.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Vehicles/Loaded/<no source>"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;EAkBE;AACF;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,iBAAkB;CAkBnB;AAhBC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,yBAA0B;CAS3B;AAPC;EClCJ,wKAAA;EDmCM,2BAAmB;UAAnB,kBAAmB;CACpB;AAED;EACE,UAAW;CACZ;;AAIL;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,gCAAgC;CACjC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,cAAe;CAWhB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,SAAU;CAKX;;AAHC;EACE,kBAAmB;CACpB;;AAIL;;;;;;;;;;;;;;;;EAgBE;;AAEF;EACE,WAAW;EACX,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,gBAAkB;EAAlB,kBAAkB;EAClB,+BAAgC;CASjC;;AAPC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,gCAAiC;CAClC","file":"Loaded.css","sourcesContent":["/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 0px #7f7f7f;\n    -webkit-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    transform: scale(1.025);\n    color: black;\n    border: 1px solid dimgrey;\n\n    & .description .descriptionText {\n      filter: blur(.8px);\n    }\n\n    & .viewFull {\n      opacity: 1;\n    }\n  }\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  color: #676767;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.viewFull {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out;\n\n  & button {\n    font-weight: 600;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"job": "Loaded-job-2ta4h",
  	"description": "Loaded-description-3ZCxn",
  	"descriptionText": "Loaded-descriptionText-3ZEgD",
  	"viewFull": "Loaded-viewFull-2OW77",
  	"jobPosition": "Loaded-jobPosition-3NFSP",
  	"jobMeta": "Loaded-jobMeta-2FOxM"
  };

/***/ }),
/* 1552 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\Vehicles\\Filter\\Filter.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(400);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Filter = __webpack_require__(1553);

  var _Filter2 = _interopRequireDefault(_Filter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Filter = function (_React$Component) {
    (0, _inherits3.default)(Filter, _React$Component);

    function Filter() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, Filter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        order: _this2.props.data.order,
        orderParam: _this2.props.data.orderParam,
        types: _this2.props.vehiclesInfo.types,
        locations: _this2.props.vehiclesInfo.locations
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }

    (0, _createClass3.default)(Filter, [{
      key: 'orderChanged',
      value: function orderChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          order: data.value
        });
        this.props.changeBasicFilter(data.value, this.state.orderParam);
        this.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeVehicles(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'orderParamChanged',
      value: function orderParamChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          orderParam: data.value
        });
        this.props.changeBasicFilter(this.state.order, data.value);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeVehicles(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log(this.state.categories, this.state.locations);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'locationChanged',
      value: function locationChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateLocation(val);
          val = val.join();
        } else {
          this.props.updateLocation('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + val).then(function (result) {
          _this.props.changeVehicles(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'typeChanged',
      value: function typeChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateType(val);
          val = val.join();
        } else {
          this.props.updateCategory('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&term=" + this.props.data.search + "&type=" + val).then(function (result) {
          _this.props.changeVehicles(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'searchChanged',
      value: function searchChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        this.props.updateSearch(val);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&term=" + val).then(function (result) {
          _this.props.changeVehicles(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var options = [{ text: 'Date Added', value: 'dateCreated' }];

        var options2 = [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }];

        return _react2.default.createElement(
          'div',
          { className: _Filter2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.left, __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Types', multiple: true, search: true, selection: true, scrolling: true, options: this.state.types, onChange: this.typeChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Locations', multiple: true, search: true, selection: true, scrolling: true, options: this.state.locations, onChange: this.locationChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.right, __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Input,
              { type: 'text', placeholder: 'Search...', action: true, onChange: this.searchChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134
                },
                __self: this
              },
              _react2.default.createElement('input', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options, defaultValue: 'dateCreated', onChange: this.orderParamChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options2, defaultValue: 'asc', onChange: this.orderChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Filter;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Filter2.default)(Filter);

/***/ }),
/* 1553 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1554);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1554 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Filter-container-1Skyc {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&.left .dropdown {\n  margin-right: .5em !important;\n}\n\n.Filter-left-RZF5F {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-right: .5em\n}\n\n.Filter-left-RZF5F .ui.dropdown {\n  //margin-right: .5em !important;\n  border-radius: 0 !important;\n}\n\n.Filter-right-1TQ7a {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Vehicles/Filter/Filter.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,oBAAgB;MAAhB,gBAAgB;EAChB,sCAAsC;CACvC;;AAED;;;;;;EAME;;AAEF;EACE,8BAA8B;CAC/B;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAoB;CAMrB;;AAJC;EACE,gCAAgC;EAChC,4BAA4B;CAC7B;;AAGH;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB","file":"Filter.css","sourcesContent":[".container {\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&:global(.left .dropdown) {\n  margin-right: .5em !important;\n}\n\n.left {\n  display: flex;\n  align-items: flex-start;\n  padding-right: .5em;\n\n  & :global(.ui.dropdown) {\n    //margin-right: .5em !important;\n    border-radius: 0 !important;\n  }\n}\n\n.right {\n  display: flex;\n  margin-left: auto;\n  align-items: flex-start;\n  padding-left: .5em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Filter-container-1Skyc",
  	"left": "Filter-left-RZF5F",
  	"right": "Filter-right-1TQ7a"
  };

/***/ }),
/* 1555 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1556);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1556 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-3tSgz {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-1ii73 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/Vehicles/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-3tSgz",
  	"container": "Render-container-1ii73"
  };

/***/ }),
/* 1557 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1558);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Vehicles.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Vehicles.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1558 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n\n    /*\n   * Typography\n   * ======================================================================== */\n\n    /*\n   * Layout\n   * ======================================================================== */\n\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n    /* Extra small screen / phone */\n\n    /* Small screen / tablet */\n\n    /* Medium screen / desktop */\n\n    /* Large screen / wide desktop */\n}\n\n.Vehicles-root---GVq {\n}\n\n.Vehicles-container-1vaWf {\n  \n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/vehicles/Vehicles.css"],"names":[],"mappings":"AAAA;;IACE;;gFAE8E;;IAI9E;;gFAE8E;;IAI9E;;gFAE8E;;IAErD,gCAAgC;;IAChC,2BAA2B;;IAC3B,6BAA6B;;IAC7B,iCAAiC;CAC3D;;ACnBD;CACC;;AAED;;CAEC","file":"Vehicles.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n}\n\n.container {\n  \n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Vehicles-root---GVq",
  	"container": "Vehicles-container-1vaWf"
  };

/***/ }),
/* 1559 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\thingToDo\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _ThingToDo = __webpack_require__(1560);

  var _ThingToDo2 = _interopRequireDefault(_ThingToDo);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Restaurant';

  exports.default = {

    path: '/things-to-do/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/things-to-do/' + params.id + '.json');

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                data = _context.sent;
                return _context.abrupt('return', data && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_ThingToDo2.default, { title: title, thing: data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    })
                  )
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1560 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\thingToDo\\ThingToDo.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Render = __webpack_require__(1561);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _ThingToDo = __webpack_require__(1567);

  var _ThingToDo2 = _interopRequireDefault(_ThingToDo);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var ThingToDo = function (_React$Component) {
    (0, _inherits3.default)(ThingToDo, _React$Component);

    function ThingToDo(props) {
      (0, _classCallCheck3.default)(this, ThingToDo);
      return (0, _possibleConstructorReturn3.default)(this, (ThingToDo.__proto__ || (0, _getPrototypeOf2.default)(ThingToDo)).call(this, props));
    }

    (0, _createClass3.default)(ThingToDo, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _ThingToDo2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _ThingToDo2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { thing: this.props.thing, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return ThingToDo;
  }(_react2.default.Component);

  ThingToDo.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_ThingToDo2.default)(ThingToDo);

/***/ }),
/* 1561 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\ThingToDo\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loaded = __webpack_require__(1562);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1565);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(_Loaded2.default, { thing: this.props.thing, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1562 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\ThingToDo\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1563);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {
        var data = this.props.thing;

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.jobPosition, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: this
                  },
                  data.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Loaded2.default.jobMeta, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    }),
                    data.category
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    }),
                    data.city
                  )
                )
              ),
              _react2.default.createElement('div', { className: _Loaded2.default.description, dangerouslySetInnerHTML: { __html: data.description }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1563 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1564);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1564 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-U3pEM {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.Loaded-job-iMETY {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.Loaded-jobPosition-1iMrM {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-1iMrM h1,\n  .Loaded-jobPosition-1iMrM h2,\n  .Loaded-jobPosition-1iMrM h3,\n  .Loaded-jobPosition-1iMrM h4,\n  .Loaded-jobPosition-1iMrM h5,\n  .Loaded-jobPosition-1iMrM h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-1PBQK {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.Loaded-apply-qlUT1 {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.Loaded-fileInput-wxUDg {\n    display: none !important;\n}\n\n.Loaded-jobMeta-TY1xr {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%\n}\n\n.Loaded-jobMeta-TY1xr p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.Loaded-jobMeta-TY1xr p i {\n  margin-right: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/ThingToDo/Loaded/Loaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,gCAAgC;EAChC,oCAAoC;EACpC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;EACE,uCAAuC;EACvC,4BAA4B;EAC5B,8BAA8B;EAC9B,qBAAqB;CACtB;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,YAAQ;CAWT;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.apply {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.fileInput {\n    display: none !important;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-U3pEM",
  	"job": "Loaded-job-iMETY",
  	"jobPosition": "Loaded-jobPosition-1iMrM",
  	"description": "Loaded-description-1PBQK",
  	"apply": "Loaded-apply-qlUT1",
  	"fileInput": "Loaded-fileInput-wxUDg",
  	"jobMeta": "Loaded-jobMeta-TY1xr"
  };

/***/ }),
/* 1565 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1566);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1566 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-8Dwjo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-2GOvX {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/ThingToDo/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-8Dwjo",
  	"container": "Render-container-2GOvX"
  };

/***/ }),
/* 1567 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1568);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./ThingToDo.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./ThingToDo.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1568 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.ThingToDo-root-uSgkY {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.ThingToDo-container-1OFPY {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/thingToDo/ThingToDo.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,cAAc;EACd,WAAW;CACZ","file":"ThingToDo.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "ThingToDo-root-uSgkY",
  	"container": "ThingToDo-container-1OFPY"
  };

/***/ }),
/* 1569 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\thingsToDo\\index.js';
  // import fetch from '../../core/fetch';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Things = __webpack_require__(1570);

  var _Things2 = _interopRequireDefault(_Things);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Things To Do';

  exports.default = {

    path: '/things-to-do',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var things, thingsData, thingsTypes, thingsTypesData, cities, citiesData, info;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/things-to-do.json');

              case 2:
                things = _context.sent;
                _context.next = 5;
                return things.json();

              case 5:
                thingsData = _context.sent;
                _context.next = 8;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/things-to-do-types.json');

              case 8:
                thingsTypes = _context.sent;
                _context.next = 11;
                return thingsTypes.json();

              case 11:
                thingsTypesData = _context.sent;
                _context.next = 14;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities.json');

              case 14:
                cities = _context.sent;
                _context.next = 17;
                return cities.json();

              case 17:
                citiesData = _context.sent;
                info = {
                  types: thingsTypesData.types,
                  locations: citiesData.data
                };
                return _context.abrupt('return', {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_Things2.default, { title: title, things: thingsData, thingsInfo: info, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 29
                      },
                      __self: _this
                    })
                  )
                });

              case 20:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1570 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\thingsToDo\\Things.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _Render = __webpack_require__(1571);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Things = __webpack_require__(1580);

  var _Things2 = _interopRequireDefault(_Things);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Things = function (_React$Component) {
    (0, _inherits3.default)(Things, _React$Component);

    function Things(props) {
      (0, _classCallCheck3.default)(this, Things);

      var _this2 = (0, _possibleConstructorReturn3.default)(this, (Things.__proto__ || (0, _getPrototypeOf2.default)(Things)).call(this, props));

      _this2.state = {
        things: _this2.props.things,
        loading: true
      };
      return _this2;
    }

    (0, _createClass3.default)(Things, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _Things2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 29
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Things2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 30
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { loading: this.state.loading, things: this.props.things, thingsInfo: this.props.thingsInfo, pagination: this.props.things.meta.pagination, __source: {
                fileName: _jsxFileName,
                lineNumber: 31
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Things;
  }(_react2.default.Component);

  Things.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_Things2.default)(Things);

/***/ }),
/* 1571 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(1247);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\ThingsToDo\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loading = __webpack_require__(1249);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Loaded = __webpack_require__(1572);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _Filter = __webpack_require__(1575);

  var _Filter2 = _interopRequireDefault(_Filter);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1578);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render(props) {
      (0, _classCallCheck3.default)(this, Render);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, props));

      _this.state = {
        things: _this.props.things,
        type: '*',
        city: '*',
        search: '',
        order: 'asc',
        orderParam: 'dateCreated',
        url: 'http://www.southms.com/index.php/api/things-to-do.json?',
        urlSearch: 'http://www.southms.com/index.php/api/search.json?',
        urlPagination: _this.city,
        location: [],
        loading: false
      };
      return _this;
    }

    (0, _createClass3.default)(Render, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onLoadChange',
      value: function onLoadChange(load) {
        this.setState(load);
      }
    }, {
      key: 'changeThings',
      value: function changeThings(things) {
        this.setState({
          things: things
        });
      }
    }, {
      key: 'changeBasicFilter',
      value: function changeBasicFilter(order, orderParam) {
        this.setState({
          order: order,
          orderParam: orderParam
        });
      }
    }, {
      key: 'updateLocation',
      value: function updateLocation(city) {
        this.setState({ city: city });
      }
    }, {
      key: 'updateType',
      value: function updateType(category) {
        this.setState({ type: type });
      }
    }, {
      key: 'updateSearch',
      value: function updateSearch(search) {
        this.setState({ search: search });
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        var render = null;
        if (typeof this.state.things.data == 'undefined' && !this.state.things.data.length > 0 || this.state.loading == true) {
          render = _react2.default.createElement(_Loading2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          });
        } else {
          render = _react2.default.createElement(_Loaded2.default, { things: this.state.things, pagination: this.props.pagination, data: this.state, onLoadChange: this.onLoadChange.bind(this), changeThings: this.changeThings.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          });
        }

        var city = {
          camelCase: this.state.city
        };

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          },
          _react2.default.createElement(_Filter2.default, (_React$createElement = { onLoadChange: this.onLoadChange.bind(this), updateSearch: this.updateSearch.bind(this), changeThings: this.changeThings.bind(this), changeBasicFilter: this.changeBasicFilter.bind(this), data: this.state, things: this.state.things, thingsInfo: this.props.thingsInfo, location: this.state.location }, (0, _defineProperty3.default)(_React$createElement, 'onLoadChange', this.onLoadChange.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateType', this.updateType.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateLocation', this.updateLocation.bind(this)), (0, _defineProperty3.default)(_React$createElement, '__source', {
            fileName: _jsxFileName,
            lineNumber: 67
          }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement)),
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              render
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1572 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\ThingsToDo\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _striptags = __webpack_require__(1256);

  var _striptags2 = _interopRequireDefault(_striptags);

  var _Pagination = __webpack_require__(1257);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  var _Grid = __webpack_require__(1265);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1573);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Loaded);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        things: _this.props.things.data
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            this.state.things.map(function (thing, i) {
              return _react2.default.createElement(
                _Grid2.default,
                { key: thing.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { href: "/things-to-do/" + thing.id, className: _Loaded2.default.job, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'div',
                    { className: _Loaded2.default.jobPosition, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'h3',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
                        },
                        __self: this
                      },
                      thing.title
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _Loaded2.default.jobMeta, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        }),
                        thing.city
                      )
                    )
                  )
                )
              );
            }),
            _react2.default.createElement(_Pagination2.default, { pagination: this.props.pagination, data: this.props.data, onLoadChange: this.props.onLoadChange, changeThings: this.props.changeThings, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1573 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1574);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1574 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.Loaded-job-2jT4B {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%\n}\n.Loaded-job-2jT4B:hover {\n  box-shadow: 0px 0px 3px 0px #7f7f7f;\n  -webkit-transform: scale(1.025);\n  -ms-transform: scale(1.025);\n  transform: scale(1.025);\n  color: black;\n  border: 1px solid dimgrey\n}\n.Loaded-job-2jT4B:hover .Loaded-description-3TEWI .Loaded-descriptionText-27oG9 {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"0.8\" /></filter></svg>#filter');\n  -webkit-filter: blur(.8px);\n          filter: blur(.8px)\n}\n.Loaded-job-2jT4B:hover .Loaded-viewFull-1kllJ {\n  opacity: 1\n}\n\n.Loaded-jobPosition-3yDZ2 {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-3yDZ2 h1,\n  .Loaded-jobPosition-3yDZ2 h2,\n  .Loaded-jobPosition-3yDZ2 h3,\n  .Loaded-jobPosition-3yDZ2 h4,\n  .Loaded-jobPosition-3yDZ2 h5,\n  .Loaded-jobPosition-3yDZ2 h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-3TEWI {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.Loaded-jobMeta-3yUvS {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  color: #676767\n}\n\n.Loaded-jobMeta-3yUvS p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0\n}\n\n.Loaded-jobMeta-3yUvS p i {\n  margin-right: .5em\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.Loaded-viewFull-1kllJ {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 24px;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out\n}\n\n.Loaded-viewFull-1kllJ button {\n  font-weight: 600;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/ThingsToDo/Loaded/Loaded.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/ThingsToDo/Loaded/<no source>"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;EAkBE;AACF;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,iBAAkB;CAkBnB;AAhBC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,yBAA0B;CAS3B;AAPC;EClCJ,wKAAA;EDmCM,2BAAmB;UAAnB,kBAAmB;CACpB;AAED;EACE,UAAW;CACZ;;AAIL;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,gCAAgC;CACjC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,cAAe;CAWhB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,SAAU;CAKX;;AAHC;EACE,kBAAmB;CACpB;;AAIL;;;;;;;;;;;;;;;;EAgBE;;AAEF;EACE,WAAW;EACX,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,gBAAkB;EAAlB,kBAAkB;EAClB,+BAAgC;CASjC;;AAPC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,gCAAiC;CAClC","file":"Loaded.css","sourcesContent":["/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 0px #7f7f7f;\n    -webkit-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    transform: scale(1.025);\n    color: black;\n    border: 1px solid dimgrey;\n\n    & .description .descriptionText {\n      filter: blur(.8px);\n    }\n\n    & .viewFull {\n      opacity: 1;\n    }\n  }\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  color: #676767;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.viewFull {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out;\n\n  & button {\n    font-weight: 600;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"job": "Loaded-job-2jT4B",
  	"description": "Loaded-description-3TEWI",
  	"descriptionText": "Loaded-descriptionText-27oG9",
  	"viewFull": "Loaded-viewFull-1kllJ",
  	"jobPosition": "Loaded-jobPosition-3yDZ2",
  	"jobMeta": "Loaded-jobMeta-3yUvS"
  };

/***/ }),
/* 1575 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\ThingsToDo\\Filter\\Filter.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(400);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Filter = __webpack_require__(1576);

  var _Filter2 = _interopRequireDefault(_Filter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Filter = function (_React$Component) {
    (0, _inherits3.default)(Filter, _React$Component);

    function Filter() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, Filter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        order: _this2.props.data.order,
        orderParam: _this2.props.data.orderParam,
        types: _this2.props.thingsInfo.types,
        locations: _this2.props.thingsInfo.locations
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }

    (0, _createClass3.default)(Filter, [{
      key: 'orderChanged',
      value: function orderChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          order: data.value
        });
        this.props.changeBasicFilter(data.value, this.state.orderParam);
        this.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeThings(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'orderParamChanged',
      value: function orderParamChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          orderParam: data.value
        });
        this.props.changeBasicFilter(this.state.order, data.value);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeThings(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log(this.state.categories, this.state.locations);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'locationChanged',
      value: function locationChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateLocation(val);
          val = val.join();
        } else {
          this.props.updateLocation('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + val).then(function (result) {
          _this.props.changeThings(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'typeChanged',
      value: function typeChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateType(val);
          val = val.join();
        } else {
          this.props.updateType('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&term=" + this.props.data.search + "&type=" + val).then(function (result) {
          _this.props.changeThings(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'searchChanged',
      value: function searchChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        this.props.updateSearch(val);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&city=" + this.props.data.city + "&category=" + this.props.data.category + "&term=" + val).then(function (result) {
          _this.props.changeThings(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var options = [{ text: 'Date Added', value: 'dateCreated' }];

        var options2 = [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }];

        return _react2.default.createElement(
          'div',
          { className: _Filter2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.left, __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Types', multiple: true, search: true, selection: true, scrolling: true, options: this.state.types, onChange: this.typeChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Locations', multiple: true, search: true, selection: true, scrolling: true, options: this.state.locations, onChange: this.locationChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.right, __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Input,
              { type: 'text', placeholder: 'Search...', action: true, onChange: this.searchChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134
                },
                __self: this
              },
              _react2.default.createElement('input', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options, defaultValue: 'dateCreated', onChange: this.orderParamChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options2, defaultValue: 'asc', onChange: this.orderChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Filter;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Filter2.default)(Filter);

/***/ }),
/* 1576 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1577);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1577 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Filter-container-3Xdsq {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&.left .dropdown {\n  margin-right: .5em !important;\n}\n\n.Filter-left-kz_Qi {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-right: .5em\n}\n\n.Filter-left-kz_Qi .ui.dropdown {\n  //margin-right: .5em !important;\n  border-radius: 0 !important;\n}\n\n.Filter-right-1S1Ee {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/ThingsToDo/Filter/Filter.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,oBAAgB;MAAhB,gBAAgB;EAChB,sCAAsC;CACvC;;AAED;;;;;;EAME;;AAEF;EACE,8BAA8B;CAC/B;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAoB;CAMrB;;AAJC;EACE,gCAAgC;EAChC,4BAA4B;CAC7B;;AAGH;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB","file":"Filter.css","sourcesContent":[".container {\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&:global(.left .dropdown) {\n  margin-right: .5em !important;\n}\n\n.left {\n  display: flex;\n  align-items: flex-start;\n  padding-right: .5em;\n\n  & :global(.ui.dropdown) {\n    //margin-right: .5em !important;\n    border-radius: 0 !important;\n  }\n}\n\n.right {\n  display: flex;\n  margin-left: auto;\n  align-items: flex-start;\n  padding-left: .5em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Filter-container-3Xdsq",
  	"left": "Filter-left-kz_Qi",
  	"right": "Filter-right-1S1Ee"
  };

/***/ }),
/* 1578 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1579);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1579 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-1iq-v {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-3O43N {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/ThingsToDo/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-1iq-v",
  	"container": "Render-container-3O43N"
  };

/***/ }),
/* 1580 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1581);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Things.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./Things.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1581 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n\n    /*\n   * Typography\n   * ======================================================================== */\n\n    /*\n   * Layout\n   * ======================================================================== */\n\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n    /* Extra small screen / phone */\n\n    /* Small screen / tablet */\n\n    /* Medium screen / desktop */\n\n    /* Large screen / wide desktop */\n}\n\n.Things-root-Om8_7 {\n}\n\n.Things-container-12aSG {\n  \n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/thingsToDo/Things.css"],"names":[],"mappings":"AAAA;;IACE;;gFAE8E;;IAI9E;;gFAE8E;;IAI9E;;gFAE8E;;IAErD,gCAAgC;;IAChC,2BAA2B;;IAC3B,6BAA6B;;IAC7B,iCAAiC;CAC3D;;ACnBD;CACC;;AAED;;CAEC","file":"Things.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n}\n\n.container {\n  \n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "Things-root-Om8_7",
  	"container": "Things-container-12aSG"
  };

/***/ }),
/* 1582 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\golfCourse\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _GolfCourse = __webpack_require__(1583);

  var _GolfCourse2 = _interopRequireDefault(_GolfCourse);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Golf Course';

  exports.default = {

    path: '/golf-courses/:id',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var resp, data;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/golf-courses/' + params.id + '.json');

              case 2:
                resp = _context.sent;
                _context.next = 5;
                return resp.json();

              case 5:
                data = _context.sent;
                return _context.abrupt('return', data && {
                  title: title,
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_GolfCourse2.default, { title: title, course: data, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 20
                      },
                      __self: _this
                    })
                  )
                });

              case 7:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1583 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\golfCourse\\GolfCourse.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Render = __webpack_require__(1584);

  var _Render2 = _interopRequireDefault(_Render);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _GolfCourse = __webpack_require__(1590);

  var _GolfCourse2 = _interopRequireDefault(_GolfCourse);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Golf = function (_React$Component) {
    (0, _inherits3.default)(Golf, _React$Component);

    function Golf(props) {
      (0, _classCallCheck3.default)(this, Golf);
      return (0, _possibleConstructorReturn3.default)(this, (Golf.__proto__ || (0, _getPrototypeOf2.default)(Golf)).call(this, props));
    }

    (0, _createClass3.default)(Golf, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
        var _this = this;
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {}
    }, {
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _GolfCourse2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 24
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _GolfCourse2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 25
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { course: this.props.course, __source: {
                fileName: _jsxFileName,
                lineNumber: 26
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Golf;
  }(_react2.default.Component);

  Golf.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_GolfCourse2.default)(Golf);

/***/ }),
/* 1584 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\GolfCourse\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loaded = __webpack_require__(1585);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1588);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render() {
      (0, _classCallCheck3.default)(this, Render);
      return (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).apply(this, arguments));
    }

    (0, _createClass3.default)(Render, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 11
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 12
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 13
                },
                __self: this
              },
              _react2.default.createElement(_Loaded2.default, { course: this.props.course, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              })
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 16
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1585 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\GolfCourse\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1586);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      (0, _classCallCheck3.default)(this, Loaded);
      return (0, _possibleConstructorReturn3.default)(this, (Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).apply(this, arguments));
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {
        var data = this.props.course;

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'div',
              { className: _Loaded2.default.job, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              _react2.default.createElement(
                'div',
                { className: _Loaded2.default.jobPosition, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 15
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'h3',
                  {
                    __source: {
                      fileName: _jsxFileName,
                      lineNumber: 16
                    },
                    __self: this
                  },
                  data.title
                ),
                _react2.default.createElement(
                  'div',
                  { className: _Loaded2.default.jobMeta, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 17
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-tag', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 18
                      },
                      __self: this
                    }),
                    data.category
                  ),
                  _react2.default.createElement(
                    'p',
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    },
                    _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                        fileName: _jsxFileName,
                        lineNumber: 19
                      },
                      __self: this
                    }),
                    data.city
                  )
                )
              ),
              _react2.default.createElement('div', { className: _Loaded2.default.description, dangerouslySetInnerHTML: { __html: data.description }, __source: {
                  fileName: _jsxFileName,
                  lineNumber: 22
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1586 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1587);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1587 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Loaded-container-2qlTm {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: row;\n          flex-direction: row;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  -webkit-box-pack: justify;\n      -ms-flex-pack: justify;\n          justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.Loaded-job-JGTCY {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.Loaded-jobPosition-QAQzx {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-QAQzx h1,\n  .Loaded-jobPosition-QAQzx h2,\n  .Loaded-jobPosition-QAQzx h3,\n  .Loaded-jobPosition-QAQzx h4,\n  .Loaded-jobPosition-QAQzx h5,\n  .Loaded-jobPosition-QAQzx h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-3YOjj {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.Loaded-apply-wsx-M {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.Loaded-fileInput-1egO7 {\n    display: none !important;\n}\n\n.Loaded-jobMeta-3DFRC {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%\n}\n\n.Loaded-jobMeta-3DFRC p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0;\n}\n\n.Loaded-jobMeta-3DFRC p i {\n  margin-right: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/GolfCourse/Loaded/Loaded.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,+BAAoB;EAApB,8BAAoB;MAApB,wBAAoB;UAApB,oBAAoB;EACpB,oBAAgB;MAAhB,gBAAgB;EAChB,0BAA+B;MAA/B,uBAA+B;UAA/B,+BAA+B;EAC/B,eAAe;CAChB;;AAED;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,gBAAgB;EAChB,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;CACpB;;AAED;EACE,cAAc;EACd,gCAAgC;EAChC,oCAAoC;EACpC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,yBAAyB;CAC1B;;AAED;EACE,uCAAuC;EACvC,4BAA4B;EAC5B,8BAA8B;EAC9B,qBAAqB;CACtB;;AAED;IACI,yBAAyB;CAC5B;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,YAAQ;CAWT;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,UAAU;CAKX;;AAHC;EACE,mBAAmB;CACpB","file":"Loaded.css","sourcesContent":[".container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: space-between;\n  padding: 1% 2%;\n}\n\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  min-width: 27em;\n  width: 100%;\n  min-height: 15em;\n  position: relative;\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(252, 245, 36, 0.3);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  padding: 1em 1em 3em 1em;\n}\n\n.apply {\n  border-top: 1px solid black !important;\n  border-radius: 0 !important;\n  position: absolute !important;\n  bottom: 0 !important;\n}\n\n.fileInput {\n    display: none !important;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Loaded-container-2qlTm",
  	"job": "Loaded-job-JGTCY",
  	"jobPosition": "Loaded-jobPosition-QAQzx",
  	"description": "Loaded-description-3YOjj",
  	"apply": "Loaded-apply-wsx-M",
  	"fileInput": "Loaded-fileInput-1egO7",
  	"jobMeta": "Loaded-jobMeta-3DFRC"
  };

/***/ }),
/* 1588 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1589);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1589 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-3Zyip {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-3qyUM {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/GolfCourse/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-3Zyip",
  	"container": "Render-container-3qyUM"
  };

/***/ }),
/* 1590 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1591);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./GolfCourse.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./GolfCourse.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1591 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.GolfCourse-root--tm-T {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.GolfCourse-container-2yOz- {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/golfCourse/GolfCourse.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,cAAc;EACd,WAAW;CACZ","file":"GolfCourse.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 2% 0;\n  width: 95%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "GolfCourse-root--tm-T",
  	"container": "GolfCourse-container-2yOz-"
  };

/***/ }),
/* 1592 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _regenerator = __webpack_require__(1);

  var _regenerator2 = _interopRequireDefault(_regenerator);

  var _asyncToGenerator2 = __webpack_require__(4);

  var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\golfCourses\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _GolfCourses = __webpack_require__(1593);

  var _GolfCourses2 = _interopRequireDefault(_GolfCourses);

  var _fetch = __webpack_require__(1230);

  var _fetch2 = _interopRequireDefault(_fetch);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  exports.default = {

    path: '/golf-courses',

    action: function action(_ref) {
      var _this = this;

      var params = _ref.params,
          path = _ref.path,
          uri = _ref.uri;
      return (0, _asyncToGenerator3.default)(_regenerator2.default.mark(function _callee() {
        var title, courses, coursesData, courseTypes, courseTypesData, cities, citiesData, info;
        return _regenerator2.default.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                // const route = await next();
                //console.log("Running fetch!", params, path, uri);
                title = "Golf courses page";
                _context.next = 3;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/golf-courses.json');

              case 3:
                courses = _context.sent;
                _context.next = 6;
                return courses.json();

              case 6:
                coursesData = _context.sent;
                _context.next = 9;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/golf-course-types.json');

              case 9:
                courseTypes = _context.sent;
                _context.next = 12;
                return courseTypes.json();

              case 12:
                courseTypesData = _context.sent;
                _context.next = 15;
                return (0, _fetch2.default)('http://www.southms.com/index.php/api/cities.json');

              case 15:
                cities = _context.sent;
                _context.next = 18;
                return cities.json();

              case 18:
                citiesData = _context.sent;
                info = {
                  types: courseTypesData.types,
                  locations: citiesData.data
                };
                return _context.abrupt('return', {
                  component: _react2.default.createElement(
                    _Layout2.default,
                    {
                      __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: _this
                    },
                    _react2.default.createElement(_GolfCourses2.default, { title: title, courses: coursesData, coursesInfo: info, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: _this
                    })
                  )
                });

              case 21:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, _this);
      }))();
    }
    };

/***/ }),
/* 1593 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\golfCourses\\GolfCourses.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1594);

  var _Render2 = _interopRequireDefault(_Render);

  var _GolfCourses = __webpack_require__(1603);

  var _GolfCourses2 = _interopRequireDefault(_GolfCourses);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Courses = function (_React$Component) {
    (0, _inherits3.default)(Courses, _React$Component);

    function Courses(props) {
      (0, _classCallCheck3.default)(this, Courses);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Courses.__proto__ || (0, _getPrototypeOf2.default)(Courses)).call(this, props));

      _this.state = {
        courses: _this.props.courses,
        loading: true
      };
      return _this;
    }

    (0, _createClass3.default)(Courses, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _GolfCourses2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 17
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _GolfCourses2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 18
              },
              __self: this
            },
            _react2.default.createElement(_Render2.default, { loading: this.state.loading, courses: this.props.courses, coursesInfo: this.props.coursesInfo, pagination: this.props.courses.meta.pagination, __source: {
                fileName: _jsxFileName,
                lineNumber: 19
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Courses;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_GolfCourses2.default)(Courses);

/***/ }),
/* 1594 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _defineProperty2 = __webpack_require__(1247);

  var _defineProperty3 = _interopRequireDefault(_defineProperty2);

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\GolfCourses\\Render\\Render.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Loading = __webpack_require__(1249);

  var _Loading2 = _interopRequireDefault(_Loading);

  var _Loaded = __webpack_require__(1595);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  var _QuicklinksSidebar = __webpack_require__(1388);

  var _QuicklinksSidebar2 = _interopRequireDefault(_QuicklinksSidebar);

  var _Filter = __webpack_require__(1598);

  var _Filter2 = _interopRequireDefault(_Filter);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Render = __webpack_require__(1601);

  var _Render2 = _interopRequireDefault(_Render);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Render = function (_React$Component) {
    (0, _inherits3.default)(Render, _React$Component);

    function Render(props) {
      (0, _classCallCheck3.default)(this, Render);

      var _this = (0, _possibleConstructorReturn3.default)(this, (Render.__proto__ || (0, _getPrototypeOf2.default)(Render)).call(this, props));

      _this.state = {
        courses: _this.props.courses,
        type: '*',
        city: '*',
        search: '',
        order: 'asc',
        orderParam: 'dateCreated',
        url: 'http://www.southms.com/index.php/api/golf-courses.json?',
        urlSearch: 'http://www.southms.com/index.php/api/search.json?',
        urlPagination: _this.city,
        location: [],
        loading: false
      };
      return _this;
    }

    (0, _createClass3.default)(Render, [{
      key: 'componentDidMount',
      value: function componentDidMount() {}
    }, {
      key: 'onLoadChange',
      value: function onLoadChange(load) {
        this.setState(load);
      }
    }, {
      key: 'changeCourses',
      value: function changeCourses(courses) {
        this.setState({
          courses: courses
        });
      }
    }, {
      key: 'changeBasicFilter',
      value: function changeBasicFilter(order, orderParam) {
        this.setState({
          order: order,
          orderParam: orderParam
        });
      }
    }, {
      key: 'updateLocation',
      value: function updateLocation(city) {
        this.setState({ city: city });
      }
    }, {
      key: 'updateType',
      value: function updateType(type) {
        this.setState({ type: type });
      }
    }, {
      key: 'updateSearch',
      value: function updateSearch(search) {
        this.setState({ search: search });
      }
    }, {
      key: 'render',
      value: function render() {
        var _React$createElement;

        var render = null;
        if (typeof this.state.courses.data == 'undefined' && !this.state.courses.data.length > 0 || this.state.loading == true) {
          render = _react2.default.createElement(_Loading2.default, {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 56
            },
            __self: this
          });
        } else {
          render = _react2.default.createElement(_Loaded2.default, { courses: this.state.courses, pagination: this.props.pagination, data: this.state, onLoadChange: this.onLoadChange.bind(this), changeCourses: this.changeCourses.bind(this), __source: {
              fileName: _jsxFileName,
              lineNumber: 58
            },
            __self: this
          });
        }

        var city = {
          camelCase: this.state.city
        };

        return _react2.default.createElement(
          'div',
          { className: _Render2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 66
            },
            __self: this
          },
          _react2.default.createElement(_Filter2.default, (_React$createElement = { onLoadChange: this.onLoadChange.bind(this), updateSearch: this.updateSearch.bind(this), changeCourses: this.changeCourses.bind(this), changeBasicFilter: this.changeBasicFilter.bind(this), data: this.state, courses: this.state.courses, coursesInfo: this.props.coursesInfo, location: this.state.location }, (0, _defineProperty3.default)(_React$createElement, 'onLoadChange', this.onLoadChange.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateType', this.updateType.bind(this)), (0, _defineProperty3.default)(_React$createElement, 'updateLocation', this.updateLocation.bind(this)), (0, _defineProperty3.default)(_React$createElement, '__source', {
            fileName: _jsxFileName,
            lineNumber: 67
          }), (0, _defineProperty3.default)(_React$createElement, '__self', this), _React$createElement)),
          _react2.default.createElement(
            'div',
            { className: _Render2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 68
              },
              __self: this
            },
            _react2.default.createElement(
              'main',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 69
                },
                __self: this
              },
              render
            ),
            _react2.default.createElement(_QuicklinksSidebar2.default, {
              __source: {
                fileName: _jsxFileName,
                lineNumber: 72
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Render;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Render2.default)(Render);

/***/ }),
/* 1595 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\GolfCourses\\Loaded\\Loaded.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _semanticUiReact = __webpack_require__(628);

  var _striptags = __webpack_require__(1256);

  var _striptags2 = _interopRequireDefault(_striptags);

  var _Pagination = __webpack_require__(1257);

  var _Pagination2 = _interopRequireDefault(_Pagination);

  var _Grid = __webpack_require__(1265);

  var _Grid2 = _interopRequireDefault(_Grid);

  var _numeral = __webpack_require__(1268);

  var _numeral2 = _interopRequireDefault(_numeral);

  var _moment = __webpack_require__(1269);

  var _moment2 = _interopRequireDefault(_moment);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Loaded = __webpack_require__(1596);

  var _Loaded2 = _interopRequireDefault(_Loaded);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Loaded = function (_React$Component) {
    (0, _inherits3.default)(Loaded, _React$Component);

    function Loaded() {
      var _ref;

      var _temp, _this, _ret;

      (0, _classCallCheck3.default)(this, Loaded);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = (0, _possibleConstructorReturn3.default)(this, (_ref = Loaded.__proto__ || (0, _getPrototypeOf2.default)(Loaded)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
        courses: _this.props.courses.data
      }, _temp), (0, _possibleConstructorReturn3.default)(_this, _ret);
    }

    (0, _createClass3.default)(Loaded, [{
      key: 'render',
      value: function render() {

        return _react2.default.createElement(
          'div',
          { className: _Loaded2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 20
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Loaded2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 21
              },
              __self: this
            },
            this.state.courses.map(function (course, i) {
              return _react2.default.createElement(
                _Grid2.default,
                { key: course.id, __source: {
                    fileName: _jsxFileName,
                    lineNumber: 24
                  },
                  __self: this
                },
                _react2.default.createElement(
                  'a',
                  { href: "/golf-courses/" + course.id, className: _Loaded2.default.job, __source: {
                      fileName: _jsxFileName,
                      lineNumber: 25
                    },
                    __self: this
                  },
                  _react2.default.createElement(
                    'div',
                    { className: _Loaded2.default.jobPosition, __source: {
                        fileName: _jsxFileName,
                        lineNumber: 26
                      },
                      __self: this
                    },
                    _react2.default.createElement(
                      'h3',
                      {
                        __source: {
                          fileName: _jsxFileName,
                          lineNumber: 27
                        },
                        __self: this
                      },
                      course.title
                    ),
                    _react2.default.createElement(
                      'div',
                      { className: _Loaded2.default.jobMeta, __source: {
                          fileName: _jsxFileName,
                          lineNumber: 28
                        },
                        __self: this
                      },
                      _react2.default.createElement(
                        'p',
                        {
                          __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        },
                        _react2.default.createElement('i', { className: 'fa fa-map-marker', 'aria-hidden': 'true', __source: {
                            fileName: _jsxFileName,
                            lineNumber: 29
                          },
                          __self: this
                        }),
                        course.city
                      )
                    )
                  )
                )
              );
            }),
            _react2.default.createElement(_Pagination2.default, { pagination: this.props.pagination, data: this.props.data, onLoadChange: this.props.onLoadChange, changeCourses: this.props.changeCourses, __source: {
                fileName: _jsxFileName,
                lineNumber: 36
              },
              __self: this
            })
          )
        );
      }
    }]);
    return Loaded;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Loaded2.default)(Loaded);

/***/ }),
/* 1596 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1597);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Loaded.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1597 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, "/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.Loaded-job-1UJdt {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%\n}\n.Loaded-job-1UJdt:hover {\n  box-shadow: 0px 0px 3px 0px #7f7f7f;\n  -webkit-transform: scale(1.025);\n  -ms-transform: scale(1.025);\n  transform: scale(1.025);\n  color: black;\n  border: 1px solid dimgrey\n}\n.Loaded-job-1UJdt:hover .Loaded-description-1qWIo .Loaded-descriptionText-3H2Ml {\n  filter: url('data:image/svg+xml;charset=utf-8,<svg xmlns=\"http://www.w3.org/2000/svg\"><filter id=\"filter\"><feGaussianBlur stdDeviation=\"0.8\" /></filter></svg>#filter');\n  -webkit-filter: blur(.8px);\n          filter: blur(.8px)\n}\n.Loaded-job-1UJdt:hover .Loaded-viewFull-3cPSR {\n  opacity: 1\n}\n\n.Loaded-jobPosition-1C-g_ {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n}\n\n.Loaded-jobPosition-1C-g_ h1,\n  .Loaded-jobPosition-1C-g_ h2,\n  .Loaded-jobPosition-1C-g_ h3,\n  .Loaded-jobPosition-1C-g_ h4,\n  .Loaded-jobPosition-1C-g_ h5,\n  .Loaded-jobPosition-1C-g_ h6 {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  overflow: hidden;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  float: left;\n  margin: 0;\n  max-width: 17em;\n}\n\n.Loaded-description-1qWIo {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  -webkit-transform: translate3d( 0, 0, 0);\n          transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.Loaded-jobMeta-3ElAy {\n  text-align: right;\n  display: inline-block;\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 0%;\n          flex: 1 1 0%;\n  color: #676767\n}\n\n.Loaded-jobMeta-3ElAy p {\n  display: inline-block;\n  padding: .5% 2%;\n  margin: 0\n}\n\n.Loaded-jobMeta-3ElAy p i {\n  margin-right: .5em\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.Loaded-viewFull-3cPSR {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 24px;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out\n}\n\n.Loaded-viewFull-3cPSR button {\n  font-weight: 600;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  -webkit-transform: translate(-50%, -50%);\n      -ms-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%)\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/GolfCourses/Loaded/Loaded.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/GolfCourses/Loaded/<no source>"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;EAkBE;AACF;EACE,eAAe;EACf,aAAa;EACb,yBAAyB;EACzB,iCAAiC;EACjC,iBAAkB;CAkBnB;AAhBC;EACE,oCAAoC;EACpC,gCAAgC;EAChC,4BAA4B;EAC5B,wBAAwB;EACxB,aAAa;EACb,yBAA0B;CAS3B;AAPC;EClCJ,wKAAA;EDmCM,2BAAmB;UAAnB,kBAAmB;CACpB;AAED;EACE,UAAW;CACZ;;AAIL;EACE,cAAc;EACd,gCAAgC;EAChC,sCAAsC;EACtC,qBAAc;EAAd,qBAAc;EAAd,cAAc;CAiBf;;AAfC;;;;;;EAME,wBAAwB;EACxB,oBAAoB;EACpB,iBAAiB;EACjB,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,YAAY;EACZ,UAAU;EACV,gBAAgB;CACjB;;AAGH;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;EACd,aAAa;EACb,oCAAoC;EACpC,yCAAiC;UAAjC,iCAAiC;EACjC,gCAAgC;CACjC;;AAED;EACE,kBAAkB;EAClB,sBAAsB;EACtB,oBAAQ;MAAR,iBAAQ;UAAR,aAAQ;EACR,cAAe;CAWhB;;AATC;EACE,sBAAsB;EACtB,gBAAgB;EAChB,SAAU;CAKX;;AAHC;EACE,kBAAmB;CACpB;;AAIL;;;;;;;;;;;;;;;;EAgBE;;AAEF;EACE,WAAW;EACX,mBAAmB;EACnB,OAAO;EACP,QAAQ;EACR,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,iBAAiB;EACjB,gBAAkB;EAAlB,kBAAkB;EAClB,+BAAgC;CASjC;;AAPC;EACE,iBAAiB;EACjB,mBAAmB;EACnB,SAAS;EACT,UAAU;EACV,yCAAiC;MAAjC,qCAAiC;UAAjC,gCAAiC;CAClC","file":"Loaded.css","sourcesContent":["/*\n.container {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  //justify-content: space-between;\n  margin: -1%;\n  padding: 0 2%;\n}\n\n.jobContainer {\n  margin: 1%;\n  margin-bottom: 1.5em;\n  //flex-basis: 48%;\n  flex-basis: 100%;\n  padding: 0 !important;\n  min-width: 35em;\n}\n*/\n.job {\n  display: block;\n  color: black;\n  border: 1px solid silver;\n  transition: all .15s ease-in-out;\n  //flex-basis: 20%;\n\n  &:hover {\n    box-shadow: 0px 0px 3px 0px #7f7f7f;\n    -webkit-transform: scale(1.025);\n    -ms-transform: scale(1.025);\n    transform: scale(1.025);\n    color: black;\n    border: 1px solid dimgrey;\n\n    & .description .descriptionText {\n      filter: blur(.8px);\n    }\n\n    & .viewFull {\n      opacity: 1;\n    }\n  }\n}\n\n.jobPosition {\n  padding: .7em;\n  border-bottom: 1px solid silver;\n  background: rgba(189, 189, 189, 0.08);\n  display: flex;\n\n  & h1,\n  h2,\n  h3,\n  h4,\n  h5,\n  h6 {\n    text-overflow: ellipsis;\n    white-space: nowrap;\n    overflow: hidden;\n    -webkit-font-smoothing: antialiased;\n    transform: translate3d( 0, 0, 0);\n    float: left;\n    margin: 0;\n    max-width: 17em;\n  }\n}\n\n.description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 5.4em;\n  padding: 1em;\n  -webkit-font-smoothing: antialiased;\n  transform: translate3d( 0, 0, 0);\n  transition: .2s all ease-in-out;\n}\n\n.jobMeta {\n  text-align: right;\n  display: inline-block;\n  flex: 1;\n  color: #676767;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n\n/*\n.jobMeta {\n  background: rgba(251, 251, 251, 0.57);\n  border-bottom: 1px solid silver;\n  text-align: right;\n\n  & p {\n    display: inline-block;\n    padding: .5% 2%;\n    margin: 0;\n\n    & i {\n      margin-right: .5em;\n    }\n  }\n}\n*/\n\n.viewFull {\n  opacity: 0;\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(255, 255, 255, 0.75);\n  font-weight: 600;\n  font-size: 1.5rem;\n  transition: .2s all ease-in-out;\n\n  & button {\n    font-weight: 600;\n    position: absolute;\n    top: 50%;\n    left: 50%;\n    transform: translate(-50%, -50%);\n  }\n}\n",null],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"job": "Loaded-job-1UJdt",
  	"description": "Loaded-description-1qWIo",
  	"descriptionText": "Loaded-descriptionText-3H2Ml",
  	"viewFull": "Loaded-viewFull-3cPSR",
  	"jobPosition": "Loaded-jobPosition-1C-g_",
  	"jobMeta": "Loaded-jobMeta-3ElAy"
  };

/***/ }),
/* 1598 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\components\\GolfCourses\\Filter\\Filter.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _reactDom = __webpack_require__(400);

  var _reactDom2 = _interopRequireDefault(_reactDom);

  var _axios = __webpack_require__(1205);

  var _axios2 = _interopRequireDefault(_axios);

  var _semanticUiReact = __webpack_require__(628);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _Filter = __webpack_require__(1599);

  var _Filter2 = _interopRequireDefault(_Filter);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var Filter = function (_React$Component) {
    (0, _inherits3.default)(Filter, _React$Component);

    function Filter() {
      var _ref;

      var _temp, _this2, _ret;

      (0, _classCallCheck3.default)(this, Filter);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this2 = (0, _possibleConstructorReturn3.default)(this, (_ref = Filter.__proto__ || (0, _getPrototypeOf2.default)(Filter)).call.apply(_ref, [this].concat(args))), _this2), _this2.state = {
        order: _this2.props.data.order,
        orderParam: _this2.props.data.orderParam,
        types: _this2.props.coursesInfo.types,
        locations: _this2.props.coursesInfo.locations
      }, _temp), (0, _possibleConstructorReturn3.default)(_this2, _ret);
    }

    (0, _createClass3.default)(Filter, [{
      key: 'orderChanged',
      value: function orderChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          order: data.value
        });
        this.props.changeBasicFilter(data.value, this.state.orderParam);
        this.serverRequest = _axios2.default
        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other

        // I have to figure out some way to get the value from the other
        .get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + data.value + '&type=' + this.props.data.type + "&category=" + this.props.data.category + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeCourses(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'orderParamChanged',
      value: function orderParamChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        this.setState({
          orderParam: data.value
        });
        this.props.changeBasicFilter(this.state.order, data.value);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + data.value + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + this.props.data.city).then(function (result) {
          _this.props.changeCourses(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
        console.log(this.state.categories, this.state.locations);
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        this.serverRequest.abort();
      }
    }, {
      key: 'locationChanged',
      value: function locationChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateLocation(val);
          val = val.join();
        } else {
          this.props.updateLocation('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + '&type=' + this.props.data.type + "&term=" + this.props.data.search + "&city=" + val).then(function (result) {
          _this.props.changeCourses(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'typeChanged',
      value: function typeChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;

        if (val.length > 0) {
          this.props.updateType(val);
          val = val.join();
        } else {
          this.props.updateType('*');
          val = '*';
        }
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&term=" + this.props.data.search + "&type=" + val).then(function (result) {
          _this.props.changeCourses(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'searchChanged',
      value: function searchChanged(event, data) {
        var _this = this;
        _this.props.onLoadChange({ loading: true });
        var val = data.value;
        this.props.updateSearch(val);
        this.serverRequest = _axios2.default.get(this.props.data.url + 'orderParam=' + this.props.data.orderParam + '&order=' + this.props.data.order + "&city=" + this.props.data.city + "&type=" + this.props.data.type + "&term=" + val).then(function (result) {
          _this.props.changeCourses(result.data);
          _this.props.onLoadChange({ loading: false });
        });
      }
    }, {
      key: 'render',
      value: function render() {

        var options = [{ text: 'Date Added', value: 'dateCreated' }];

        var options2 = [{ text: 'Ascending', value: 'asc' }, { text: 'Descending', value: 'desc' }];

        return _react2.default.createElement(
          'div',
          { className: _Filter2.default.container, __source: {
              fileName: _jsxFileName,
              lineNumber: 128
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.left, __source: {
                fileName: _jsxFileName,
                lineNumber: 129
              },
              __self: this
            },
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Types', multiple: true, search: true, selection: true, scrolling: true, options: this.state.types, onChange: this.typeChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 130
              },
              __self: this
            }),
            _react2.default.createElement(_semanticUiReact.Dropdown, { placeholder: 'Choose Locations', multiple: true, search: true, selection: true, scrolling: true, options: this.state.locations, onChange: this.locationChanged.bind(this), __source: {
                fileName: _jsxFileName,
                lineNumber: 131
              },
              __self: this
            })
          ),
          _react2.default.createElement(
            'div',
            { className: _Filter2.default.right, __source: {
                fileName: _jsxFileName,
                lineNumber: 133
              },
              __self: this
            },
            _react2.default.createElement(
              _semanticUiReact.Input,
              { type: 'text', placeholder: 'Search...', action: true, onChange: this.searchChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 134
                },
                __self: this
              },
              _react2.default.createElement('input', {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 135
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options, defaultValue: 'dateCreated', onChange: this.orderParamChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 136
                },
                __self: this
              }),
              _react2.default.createElement(_semanticUiReact.Select, { options: options2, defaultValue: 'asc', onChange: this.orderChanged.bind(this), __source: {
                  fileName: _jsxFileName,
                  lineNumber: 137
                },
                __self: this
              })
            )
          )
        );
      }
    }]);
    return Filter;
  }(_react2.default.Component);

    exports.default = (0, _withStyles2.default)(_Filter2.default)(Filter);

/***/ }),
/* 1599 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1600);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Filter.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1600 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Filter-container-2p2YL {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  -ms-flex-wrap: wrap;\n      flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&.left .dropdown {\n  margin-right: .5em !important;\n}\n\n.Filter-left-3CCA8 {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-right: .5em\n}\n\n.Filter-left-3CCA8 .ui.dropdown {\n  //margin-right: .5em !important;\n  border-radius: 0 !important;\n}\n\n.Filter-right-mVJFA {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  margin-left: auto;\n  -webkit-box-align: start;\n      -ms-flex-align: start;\n          align-items: flex-start;\n  padding-left: .5em;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/GolfCourses/Filter/Filter.css"],"names":[],"mappings":"AAAA;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,YAAY;EACZ,cAAc;EACd,mBAAmB;EACnB,kCAAkC;EAClC,kBAAkB;EAClB,oBAAgB;MAAhB,gBAAgB;EAChB,sCAAsC;CACvC;;AAED;;;;;;EAME;;AAEF;EACE,8BAA8B;CAC/B;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAoB;CAMrB;;AAJC;EACE,gCAAgC;EAChC,4BAA4B;CAC7B;;AAGH;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,kBAAkB;EAClB,yBAAwB;MAAxB,sBAAwB;UAAxB,wBAAwB;EACxB,mBAAmB;CACpB","file":"Filter.css","sourcesContent":[".container {\n  display: flex;\n  width: 100%;\n  //height: 3em;\n  margin-bottom: 1em;\n  background: rgba(3, 37, 99, 0.45);\n  padding: 1.5em 4%;\n  flex-wrap: wrap;\n  box-shadow: 0px 3px 12px -2px #9b9b9b;\n}\n\n/*\n:global(.input) {\n  float: right;\n  width: 25%;\n  min-width: 27em;\n}\n*/\n\n&:global(.left .dropdown) {\n  margin-right: .5em !important;\n}\n\n.left {\n  display: flex;\n  align-items: flex-start;\n  padding-right: .5em;\n\n  & :global(.ui.dropdown) {\n    //margin-right: .5em !important;\n    border-radius: 0 !important;\n  }\n}\n\n.right {\n  display: flex;\n  margin-left: auto;\n  align-items: flex-start;\n  padding-left: .5em;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"container": "Filter-container-2p2YL",
  	"left": "Filter-left-3CCA8",
  	"right": "Filter-right-mVJFA"
  };

/***/ }),
/* 1601 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1602);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css", function() {
          content = require("!!../../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../../node_modules/postcss-loader/index.js?pack=default!./Render.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1602 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ".Render-description-3bEvL {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.Render-container-3UyqK {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding: 0 1%;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/GolfCourses/Render/Render.css"],"names":[],"mappings":"AAAA;EACE,iBAAiB;EACjB,wBAAwB;EACxB,cAAc;CACf;;AAED;EACE,qBAAc;EAAd,qBAAc;EAAd,cAAc;EACd,cAAc;CACf","file":"Render.css","sourcesContent":[".description {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  height: 3.6em;\n}\n\n.container {\n  display: flex;\n  padding: 0 1%;\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"description": "Render-description-3bEvL",
  	"container": "Render-container-3UyqK"
  };

/***/ }),
/* 1603 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1604);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./GolfCourses.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./GolfCourses.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1604 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n    /*\n   * Typography\n   * ======================================================================== */\n    /*\n   * Layout\n   * ======================================================================== */\n    /*\n   * Media queries breakpoints\n   * ======================================================================== */\n    /* Extra small screen / phone */\n    /* Small screen / tablet */\n    /* Medium screen / desktop */\n    /* Large screen / wide desktop */\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css"],"names":[],"mappings":"AAAA;IACE;;gFAE8E;IAI9E;;gFAE8E;IAI9E;;gFAE8E;IAErD,gCAAgC;IAChC,2BAA2B;IAC3B,6BAA6B;IAC7B,iCAAiC;CAC3D","file":"GolfCourses.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n"],"sourceRoot":""}]);

  // exports


/***/ }),
/* 1605 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\notFound\\index.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _Layout = __webpack_require__(1199);

  var _Layout2 = _interopRequireDefault(_Layout);

  var _NotFound = __webpack_require__(1606);

  var _NotFound2 = _interopRequireDefault(_NotFound);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var title = 'Page Not Found';

  exports.default = {

    path: '*',

    action: function action() {
      return {
        title: title,
        component: _react2.default.createElement(
          _Layout2.default,
          {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          },
          _react2.default.createElement(_NotFound2.default, { title: title, __source: {
              fileName: _jsxFileName,
              lineNumber: 14
            },
            __self: this
          })
        ),
        status: 404
      };
    }
    };

/***/ }),
/* 1606 */
/***/ (function(module, exports, __webpack_require__) {

  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _getPrototypeOf = __webpack_require__(585);

  var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

  var _classCallCheck2 = __webpack_require__(589);

  var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

  var _createClass2 = __webpack_require__(590);

  var _createClass3 = _interopRequireDefault(_createClass2);

  var _possibleConstructorReturn2 = __webpack_require__(594);

  var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

  var _inherits2 = __webpack_require__(610);

  var _inherits3 = _interopRequireDefault(_inherits2);

  var _jsxFileName = 'C:\\Users\\Victoria\\Downloads\\currentdev-master\\currentdev-master\\front\\src\\routes\\notFound\\NotFound.js';

  var _react = __webpack_require__(365);

  var _react2 = _interopRequireDefault(_react);

  var _withStyles = __webpack_require__(1182);

  var _withStyles2 = _interopRequireDefault(_withStyles);

  var _NotFound = __webpack_require__(1607);

  var _NotFound2 = _interopRequireDefault(_NotFound);

  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

  var NotFound = function (_React$Component) {
    (0, _inherits3.default)(NotFound, _React$Component);

    function NotFound() {
      (0, _classCallCheck3.default)(this, NotFound);
      return (0, _possibleConstructorReturn3.default)(this, (NotFound.__proto__ || (0, _getPrototypeOf2.default)(NotFound)).apply(this, arguments));
    }

    (0, _createClass3.default)(NotFound, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          'div',
          { className: _NotFound2.default.root, __source: {
              fileName: _jsxFileName,
              lineNumber: 12
            },
            __self: this
          },
          _react2.default.createElement(
            'div',
            { className: _NotFound2.default.container, __source: {
                fileName: _jsxFileName,
                lineNumber: 13
              },
              __self: this
            },
            _react2.default.createElement(
              'h1',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 14
                },
                __self: this
              },
              this.props.title
            ),
            _react2.default.createElement(
              'p',
              {
                __source: {
                  fileName: _jsxFileName,
                  lineNumber: 15
                },
                __self: this
              },
              'Sorry, the page you were trying to view does not exist.'
            )
          )
        );
      }
    }]);
    return NotFound;
  }(_react2.default.Component);

  NotFound.propTypes = {
    title: _react.PropTypes.string.isRequired
  };
    exports.default = (0, _withStyles2.default)(_NotFound2.default)(NotFound);

/***/ }),
/* 1607 */
/***/ (function(module, exports, __webpack_require__) {

  
      var content = __webpack_require__(1608);
      var insertCss = __webpack_require__(1187);

      if (typeof content === 'string') {
        content = [[module.id, content, '']];
      }

      module.exports = content.locals || {};
      module.exports._getContent = function() { return content; };
      module.exports._getCss = function() { return content.toString(); };
      module.exports._insertCss = function(options) { return insertCss(content, options) };
      
      // Hot Module Replacement
      // https://webpack.github.io/docs/hot-module-replacement
      // Only activated in browser context
      if (false) {
        var removeCss = function() {};
        module.hot.accept("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css", function() {
          content = require("!!../../../node_modules/css-loader/index.js?{\"importLoaders\":1,\"sourceMap\":true,\"modules\":true,\"localIdentName\":\"[name]-[local]-[hash:base64:5]\",\"minimize\":false,\"discardComments\":{\"removeAll\":true}}!../../../node_modules/postcss-loader/index.js?pack=default!./NotFound.css");

          if (typeof content === 'string') {
            content = [[module.id, content, '']];
          }

          removeCss = insertCss(content, { replace: true });
        });
        module.hot.dispose(function() { removeCss(); });
      }
    

/***/ }),
/* 1608 */
/***/ (function(module, exports, __webpack_require__) {

  exports = module.exports = __webpack_require__(1186)();
  // imports


  // module
  exports.push([module.id, ":root {\n  /*\n   * Typography\n   * ======================================================================== */\n  /*\n   * Layout\n   * ======================================================================== */\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n  /* Extra small screen / phone */\n  /* Small screen / tablet */\n  /* Medium screen / desktop */\n  /* Large screen / wide desktop */\n}\n\n.NotFound-root-3G9OW {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.NotFound-container-LOS0u {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: 1000px;\n}\n", "", {"version":3,"sources":["C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/components/variables.css","C:/Users/Victoria/Downloads/currentdev-master/currentdev-master/front/src/routes/notFound/NotFound.css"],"names":[],"mappings":"AAAA;EACE;;gFAE8E;EAI9E;;gFAE8E;EAI9E;;gFAE8E;EAErD,gCAAgC;EAChC,2BAA2B;EAC3B,6BAA6B;EAC7B,iCAAiC;CAC3D;;ACnBD;EACE,mBAAmB;EACnB,oBAAoB;CACrB;;AAED;EACE,eAAe;EACf,kBAAkB;EAClB,kBAAoC;CACrC","file":"NotFound.css","sourcesContent":[":root {\n  /*\n   * Typography\n   * ======================================================================== */\n\n  --font-family-base: 'Segoe UI', 'HelveticaNeue-Light', sans-serif;\n\n  /*\n   * Layout\n   * ======================================================================== */\n\n  --max-content-width: 1000px;\n\n  /*\n   * Media queries breakpoints\n   * ======================================================================== */\n\n  --screen-xs-min: 480px;  /* Extra small screen / phone */\n  --screen-sm-min: 768px;  /* Small screen / tablet */\n  --screen-md-min: 992px;  /* Medium screen / desktop */\n  --screen-lg-min: 1200px; /* Large screen / wide desktop */\n}\n","@import '../../components/variables.css';\n\n.root {\n  padding-left: 20px;\n  padding-right: 20px;\n}\n\n.container {\n  margin: 0 auto;\n  padding: 0 0 40px;\n  max-width: var(--max-content-width);\n}\n"],"sourceRoot":""}]);

  // exports
  exports.locals = {
  	"root": "NotFound-root-3G9OW",
  	"container": "NotFound-container-LOS0u"
  };

/***/ })
]);
//# sourceMappingURL=client.js.map