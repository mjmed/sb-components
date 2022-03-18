"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var jsx_runtime_1 = require("react/jsx-runtime");
var MyLabel_1 = require("../../components/MyLabel");
exports.default = {
    title: 'UI/MyLabel',
    component: MyLabel_1.MyLabel,
    argTypes: {
        size: { control: 'select' },
        color: { control: 'select', options: ['primary', 'secondary', 'tertiary'] },
        fontColor: { control: 'color' },
    }
};
var Template = function (args) { return (0, jsx_runtime_1.jsx)(MyLabel_1.MyLabel, __assign({}, args)); };
// Crea las páginas de la historia
// con el .bind crea una copia para no mutar el objeto
exports.Basic = Template.bind({});
exports.Basic.args = {
    allCaps: false,
    size: 'normal',
};
exports.AllCaps = Template.bind({});
exports.AllCaps.args = {
    allCaps: true,
    size: 'normal',
};
exports.Secondary = Template.bind({});
exports.Secondary.args = {
    color: 'secondary',
    size: 'normal',
};
exports.Tertiary = Template.bind({});
exports.Tertiary.args = {
    color: 'tertiary',
    size: 'normal',
};
exports.CustomFontColor = Template.bind({});
exports.CustomFontColor.args = {
    fontColor: '#9333ea',
    size: 'h1',
};
exports.CustomBackgroundColor = Template.bind({});
exports.CustomBackgroundColor.args = {
    backgroundColor: '#9333ea',
    fontColor: '#ffffff',
    size: 'h1',
};
