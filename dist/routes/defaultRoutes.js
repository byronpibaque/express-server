"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultRoute = void 0;
const express_1 = require("express");
const helloController_1 = require("../controllers/helloController");
exports.defaultRoute = (0, express_1.Router)();
exports.defaultRoute.get('/', helloController_1.getHolaMundo);
