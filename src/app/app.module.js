"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var common_1 = require('@angular/common');
var app_component_1 = require('./app.component');
var dropdown_1 = require('ng2-bootstrap/dropdown');
var tabs_1 = require('ng2-bootstrap/tabs');
var nav_dropdown_directive_1 = require('./shared/nav-dropdown.directive');
var ng2_charts_1 = require('ng2-charts/ng2-charts');
var sidebar_directive_1 = require('./shared/sidebar.directive');
var aside_directive_1 = require('./shared/aside.directive');
var breadcrumb_component_1 = require('./shared/breadcrumb.component');
// Routing Module
var app_routing_1 = require('./app.routing');
// Layouts
var full_layout_component_1 = require('./layouts/full-layout.component');
var simple_layout_component_1 = require('./layouts/simple-layout.component');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.AppRoutingModule,
                dropdown_1.DropdownModule.forRoot(),
                tabs_1.TabsModule.forRoot(),
                ng2_charts_1.ChartsModule
            ],
            declarations: [
                app_component_1.AppComponent,
                full_layout_component_1.FullLayoutComponent,
                simple_layout_component_1.SimpleLayoutComponent,
                nav_dropdown_directive_1.NAV_DROPDOWN_DIRECTIVES,
                breadcrumb_component_1.BreadcrumbsComponent,
                sidebar_directive_1.SIDEBAR_TOGGLE_DIRECTIVES,
                aside_directive_1.AsideToggleDirective,
            ],
            providers: [{
                    provide: common_1.LocationStrategy,
                    useClass: common_1.HashLocationStrategy
                }],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map