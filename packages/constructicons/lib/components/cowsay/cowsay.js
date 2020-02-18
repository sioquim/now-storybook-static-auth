"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var react_1 = tslib_1.__importDefault(require("react"));
var cowsay_browser_1 = tslib_1.__importDefault(require("cowsay-browser"));
var styled_components_1 = tslib_1.__importDefault(require("styled-components"));
var StyledCowsay = styled_components_1.default.div(templateObject_1 || (templateObject_1 = tslib_1.__makeTemplateObject(["\n  color: pink;\n"], ["\n  color: pink;\n"])));
exports.Cowsay = function (_a) {
    var message = _a.message;
    return (react_1.default.createElement(StyledCowsay, null,
        react_1.default.createElement("pre", null, cowsay_browser_1.default.say({ text: message || 'hi there!' }))));
};
exports.default = exports.Cowsay;
var templateObject_1;
//# sourceMappingURL=cowsay.js.map