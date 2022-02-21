/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appComponent\": () => (/* binding */ appComponent)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework */ \"./src/framework/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar AppComponent = /** @class */ (function (_super) {\n    __extends(AppComponent, _super);\n    function AppComponent(config) {\n        return _super.call(this, config) || this;\n    }\n    return AppComponent;\n}(_framework__WEBPACK_IMPORTED_MODULE_0__.CoreComponent));\nvar appComponent = new AppComponent({\n    selector: 'app-root',\n    template: \"\\n        <app-header></app-header>\\n\\n        <router-outlet></router-outlet>\\n\\n        \\n    \"\n});\n\n\n//# sourceURL=webpack://tren-ts/./src/app/app.component.ts?");

/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appModule\": () => (/* binding */ appModule)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../framework */ \"./src/framework/index.ts\");\n/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ \"./src/app/app.component.ts\");\n/* harmony import */ var _app_routes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.routes */ \"./src/app/app.routes.ts\");\n/* harmony import */ var _common_app_header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/app.header */ \"./src/app/common/app.header.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\n\n\n\nvar AppModule = /** @class */ (function (_super) {\n    __extends(AppModule, _super);\n    function AppModule(config) {\n        return _super.call(this, config) || this;\n    }\n    return AppModule;\n}(_framework__WEBPACK_IMPORTED_MODULE_0__.CoreModule));\nvar appModule = new AppModule({\n    components: [\n        _common_app_header__WEBPACK_IMPORTED_MODULE_3__.appHeader\n    ],\n    bootstrap: _app_component__WEBPACK_IMPORTED_MODULE_1__.appComponent,\n    routes: _app_routes__WEBPACK_IMPORTED_MODULE_2__.appRoutes\n});\n\n\n//# sourceURL=webpack://tren-ts/./src/app/app.module.ts?");

/***/ }),

/***/ "./src/app/app.routes.ts":
/*!*******************************!*\
  !*** ./src/app/app.routes.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appRoutes\": () => (/* binding */ appRoutes)\n/* harmony export */ });\n/* harmony import */ var _common_not_found_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/not-found.component */ \"./src/app/common/not-found.component.ts\");\n/* harmony import */ var _pages_home_page_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/home-page.component */ \"./src/app/pages/home-page.component.ts\");\n/* harmony import */ var _pages_tabs_pages_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/tabs-pages.component */ \"./src/app/pages/tabs-pages.component.ts\");\n\n\n\nvar appRoutes = [\n    { path: '', component: _pages_home_page_component__WEBPACK_IMPORTED_MODULE_1__.homePageComponent },\n    { path: 'tabs', component: _pages_tabs_pages_component__WEBPACK_IMPORTED_MODULE_2__.tabsPageComponent },\n    { path: '**', component: _common_not_found_component__WEBPACK_IMPORTED_MODULE_0__.notFound }\n];\n\n\n//# sourceURL=webpack://tren-ts/./src/app/app.routes.ts?");

/***/ }),

/***/ "./src/app/common/app.header.ts":
/*!**************************************!*\
  !*** ./src/app/common/app.header.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"appHeader\": () => (/* binding */ appHeader)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework */ \"./src/framework/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar AppHeader = /** @class */ (function (_super) {\n    __extends(AppHeader, _super);\n    function AppHeader(config) {\n        return _super.call(this, config) || this;\n    }\n    return AppHeader;\n}(_framework__WEBPACK_IMPORTED_MODULE_0__.CoreComponent));\nvar appHeader = new AppHeader({\n    selector: 'app-header',\n    template: \"\\n        <nav class=\\\"navbar navbar-expand-lg navbar-light bg-light\\\">\\n            <div class=\\\"container-fluid\\\">\\n            <a class=\\\"navbar-brand\\\" href=\\\"#\\\">TS Framework</a>\\n            <button class=\\\"navbar-toggler\\\" type=\\\"button\\\" data-bs-toggle=\\\"collapse\\\" data-bs-target=\\\"#navbarNav\\\" aria-controls=\\\"navbarNav\\\" aria-expanded=\\\"false\\\" aria-label=\\\"Toggle navigation\\\">\\n                <span class=\\\"navbar-toggler-icon\\\"></span>\\n            </button>\\n            <div class=\\\"collapse navbar-collapse\\\" id=\\\"navbarNav\\\">\\n                <ul class=\\\"navbar-nav\\\">\\n                    <li class=\\\"nav-item\\\">\\n                        <a class=\\\"nav-link \\\"  href=\\\"#\\\">Home</a>\\n                    </li>\\n                    <li class=\\\"nav-item\\\">\\n                        <a class=\\\"nav-link active\\\" href=\\\"#tabs\\\">Tabs</a>\\n                    </li>\\n                    \\n                </ul>\\n            </div>\\n            </div>\\n        </nav>\\n    \"\n});\n\n\n//# sourceURL=webpack://tren-ts/./src/app/common/app.header.ts?");

/***/ }),

/***/ "./src/app/common/not-found.component.ts":
/*!***********************************************!*\
  !*** ./src/app/common/not-found.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"notFound\": () => (/* binding */ notFound)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework */ \"./src/framework/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar NotFound = /** @class */ (function (_super) {\n    __extends(NotFound, _super);\n    function NotFound(config) {\n        return _super.call(this, config) || this;\n    }\n    return NotFound;\n}(_framework__WEBPACK_IMPORTED_MODULE_0__.CoreComponent));\nvar notFound = new NotFound({\n    selector: 'app-not-found',\n    template: \"\\n        <div>\\n            <h2>\\u0421\\u0442\\u0440\\u0430\\u043D\\u0438\\u0446\\u0430 \\u043D\\u0435 \\u043D\\u0430\\u0439\\u0434\\u0435\\u043D\\u0430</h2>\\n            <a href=\\\"#\\\">\\u041F\\u0435\\u0440\\u0435\\u0439\\u0442\\u0438 \\u043D\\u0430 \\u0433\\u043B\\u0430\\u0432\\u043D\\u0443\\u044E</a>\\n        </div>\\n    \"\n});\n\n\n//# sourceURL=webpack://tren-ts/./src/app/common/not-found.component.ts?");

/***/ }),

/***/ "./src/app/pages/home-page.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home-page.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"homePageComponent\": () => (/* binding */ homePageComponent)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework */ \"./src/framework/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar HomePageComponent = /** @class */ (function (_super) {\n    __extends(HomePageComponent, _super);\n    function HomePageComponent(config) {\n        return _super.call(this, config) || this;\n    }\n    return HomePageComponent;\n}(_framework__WEBPACK_IMPORTED_MODULE_0__.CoreComponent));\nvar homePageComponent = new HomePageComponent({\n    selector: 'app-home-page',\n    template: \"\\n        <h1>Home Page</h1>\\n        <div class=\\\"main\\\">\\n            <div class=\\\"card\\\" style=\\\"width: 18rem;\\\">\\n                <img src=\\\"...\\\" class=\\\"card-img-top\\\" alt=\\\"...\\\">\\n                <div class=\\\"card-body\\\">\\n                <h5 class=\\\"card-title\\\">Card title</h5>\\n                <p class=\\\"card-text\\\">Some quick example text to build on the card title and make up the bulk of the card's content.</p>\\n                <a href=\\\"#\\\" class=\\\"btn btn-primary\\\">Go somewhere</a>\\n                </div>\\n            </div>\\n            \\n        </div>    \\n    \"\n});\n\n\n//# sourceURL=webpack://tren-ts/./src/app/pages/home-page.component.ts?");

/***/ }),

/***/ "./src/app/pages/tabs-pages.component.ts":
/*!***********************************************!*\
  !*** ./src/app/pages/tabs-pages.component.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"tabsPageComponent\": () => (/* binding */ tabsPageComponent)\n/* harmony export */ });\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../framework */ \"./src/framework/index.ts\");\nvar __extends = (undefined && undefined.__extends) || (function () {\n    var extendStatics = function (d, b) {\n        extendStatics = Object.setPrototypeOf ||\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\n        return extendStatics(d, b);\n    };\n    return function (d, b) {\n        if (typeof b !== \"function\" && b !== null)\n            throw new TypeError(\"Class extends value \" + String(b) + \" is not a constructor or null\");\n        extendStatics(d, b);\n        function __() { this.constructor = d; }\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\n    };\n})();\n\nvar TabsPageComponent = /** @class */ (function (_super) {\n    __extends(TabsPageComponent, _super);\n    function TabsPageComponent(config) {\n        return _super.call(this, config) || this;\n    }\n    return TabsPageComponent;\n}(_framework__WEBPACK_IMPORTED_MODULE_0__.CoreComponent));\nvar tabsPageComponent = new TabsPageComponent({\n    selector: 'app-tabs-page',\n    template: '<h1>Tabs Page</h1>'\n});\n\n\n//# sourceURL=webpack://tren-ts/./src/app/pages/tabs-pages.component.ts?");

/***/ }),

/***/ "./src/framework/core/bootstrap.ts":
/*!*****************************************!*\
  !*** ./src/framework/core/bootstrap.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"boorstrap\": () => (/* binding */ boorstrap)\n/* harmony export */ });\nvar boorstrap = function (module) {\n    module.start();\n};\n\n\n//# sourceURL=webpack://tren-ts/./src/framework/core/bootstrap.ts?");

/***/ }),

/***/ "./src/framework/core/component.ts":
/*!*****************************************!*\
  !*** ./src/framework/core/component.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Component\": () => (/* binding */ Component)\n/* harmony export */ });\nvar Component = /** @class */ (function () {\n    function Component(config) {\n        this.template = config.template;\n        this.selector = config.selector;\n        this.el = null;\n    }\n    Component.prototype.render = function () {\n        this.el = document.querySelector(this.selector);\n        if (!this.el)\n            throw new Error(\"Component with selector \".concat(this.selector, \" wasn't found\"));\n        this.el.innerHTML = this.template;\n    };\n    return Component;\n}());\n\n\n\n//# sourceURL=webpack://tren-ts/./src/framework/core/component.ts?");

/***/ }),

/***/ "./src/framework/core/module.ts":
/*!**************************************!*\
  !*** ./src/framework/core/module.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Module\": () => (/* binding */ Module)\n/* harmony export */ });\n/* harmony import */ var _tools_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tools/router */ \"./src/framework/tools/router.ts\");\n/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tools/util */ \"./src/framework/tools/util.ts\");\n\n\nvar Module = /** @class */ (function () {\n    function Module(config) {\n        this.components = config.components;\n        this.botstrapComponent = config.bootstrap;\n        this.routes = config.routes;\n    }\n    Module.prototype.start = function () {\n        this.initComponents();\n        if (this.routes)\n            this.initRoutes();\n    };\n    Module.prototype.initComponents = function () {\n        this.botstrapComponent.render();\n        this.components.forEach(this.renderComponent.bind(this));\n    };\n    Module.prototype.initRoutes = function () {\n        window.addEventListener('hashchange', this.renderRoute.bind(this));\n        this.renderRoute();\n    };\n    Module.prototype.renderRoute = function () {\n        var url = _tools_router__WEBPACK_IMPORTED_MODULE_0__.router.getUrl();\n        var route = this.routes.find(function (r) { return r.path === url; });\n        if ((0,_tools_util__WEBPACK_IMPORTED_MODULE_1__.isUndefined)(route)) {\n            route = this.routes.find(function (r) { return r.path === '**'; });\n        }\n        document.querySelector('router-outlet').innerHTML = \"<\".concat(route.component.selector, \"></\").concat(route.component.selector, \">\");\n        this.renderComponent(route.component);\n    };\n    Module.prototype.renderComponent = function (c) {\n        c.render();\n    };\n    return Module;\n}());\n\n\n\n//# sourceURL=webpack://tren-ts/./src/framework/core/module.ts?");

/***/ }),

/***/ "./src/framework/index.ts":
/*!********************************!*\
  !*** ./src/framework/index.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CoreModule\": () => (/* reexport safe */ _core_module__WEBPACK_IMPORTED_MODULE_0__.Module),\n/* harmony export */   \"CoreComponent\": () => (/* reexport safe */ _core_component__WEBPACK_IMPORTED_MODULE_1__.Component),\n/* harmony export */   \"boorstrap\": () => (/* reexport safe */ _core_bootstrap__WEBPACK_IMPORTED_MODULE_2__.boorstrap),\n/* harmony export */   \"delay\": () => (/* reexport safe */ _tools_util__WEBPACK_IMPORTED_MODULE_3__.delay),\n/* harmony export */   \"router\": () => (/* reexport safe */ _tools_router__WEBPACK_IMPORTED_MODULE_4__.router)\n/* harmony export */ });\n/* harmony import */ var _core_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/module */ \"./src/framework/core/module.ts\");\n/* harmony import */ var _core_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/component */ \"./src/framework/core/component.ts\");\n/* harmony import */ var _core_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/bootstrap */ \"./src/framework/core/bootstrap.ts\");\n/* harmony import */ var _tools_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools/util */ \"./src/framework/tools/util.ts\");\n/* harmony import */ var _tools_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./tools/router */ \"./src/framework/tools/router.ts\");\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://tren-ts/./src/framework/index.ts?");

/***/ }),

/***/ "./src/framework/tools/router.ts":
/*!***************************************!*\
  !*** ./src/framework/tools/router.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"router\": () => (/* binding */ router)\n/* harmony export */ });\nvar router = {\n    getUrl: function () {\n        return window.location.hash.slice(1);\n    }\n};\n\n\n//# sourceURL=webpack://tren-ts/./src/framework/tools/router.ts?");

/***/ }),

/***/ "./src/framework/tools/util.ts":
/*!*************************************!*\
  !*** ./src/framework/tools/util.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"delay\": () => (/* binding */ delay),\n/* harmony export */   \"isUndefined\": () => (/* binding */ isUndefined)\n/* harmony export */ });\nvar delay = function (ms) {\n    if (ms === void 0) { ms = 1000; }\n    return new Promise(function (resolve, reject) {\n        setTimeout(function () {\n            resolve();\n        }, ms);\n    });\n};\nvar isUndefined = function (d) {\n    return typeof d === 'undefined';\n};\n\n\n//# sourceURL=webpack://tren-ts/./src/framework/tools/util.ts?");

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ \"./src/app/app.module.ts\");\n/* harmony import */ var _framework__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./framework */ \"./src/framework/index.ts\");\n/* harmony import */ var _framework_tools_util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./framework/tools/util */ \"./src/framework/tools/util.ts\");\n\n\n\n(0,_framework_tools_util__WEBPACK_IMPORTED_MODULE_2__.delay)(500).then(function () {\n    (0,_framework__WEBPACK_IMPORTED_MODULE_1__.boorstrap)(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.appModule);\n});\n\n\n//# sourceURL=webpack://tren-ts/./src/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;