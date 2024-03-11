"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Roles = exports.ROLE_KEY = void 0;
var common_1 = require("@nestjs/common");
exports.ROLE_KEY = 'role';
var Roles = function () {
    var role = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        role[_i] = arguments[_i];
    }
    return (0, common_1.SetMetadata)(exports.ROLE_KEY, role);
};
exports.Roles = Roles;
