"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = exports.User = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var User = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _firstName_decorators;
    var _firstName_initializers = [];
    var _lastName_decorators;
    var _lastName_initializers = [];
    var _email_decorators;
    var _email_initializers = [];
    var _password_decorators;
    var _password_initializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _picture_decorators;
    var _picture_initializers = [];
    var _locale_decorators;
    var _locale_initializers = [];
    var _role_decorators;
    var _role_initializers = [];
    var User = _classThis = /** @class */ (function () {
        function User_1() {
            this.firstName = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _firstName_initializers, void 0));
            this.lastName = __runInitializers(this, _lastName_initializers, void 0);
            this.email = __runInitializers(this, _email_initializers, void 0);
            this.password = __runInitializers(this, _password_initializers, void 0);
            this.date = __runInitializers(this, _date_initializers, void 0);
            this.picture = __runInitializers(this, _picture_initializers, void 0);
            this.locale = __runInitializers(this, _locale_initializers, void 0);
            this.role = __runInitializers(this, _role_initializers, void 0);
        }
        return User_1;
    }());
    __setFunctionName(_classThis, "User");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _firstName_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _lastName_decorators = [(0, mongoose_1.Prop)({ type: String, required: true })];
        _email_decorators = [(0, mongoose_1.Prop)({ unique: true, required: true, type: String })];
        _password_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _date_decorators = [(0, mongoose_1.Prop)()];
        _picture_decorators = [(0, mongoose_1.Prop)({
                type: String,
                default: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/Missing_avatar.svg/1024px-Missing_avatar.svg.png'
            })];
        _locale_decorators = [(0, mongoose_1.Prop)({ type: String, required: true, default: 'en' })];
        _role_decorators = [(0, mongoose_1.Prop)({ default: 'USER' })];
        __esDecorate(null, null, _firstName_decorators, { kind: "field", name: "firstName", static: false, private: false, access: { has: function (obj) { return "firstName" in obj; }, get: function (obj) { return obj.firstName; }, set: function (obj, value) { obj.firstName = value; } }, metadata: _metadata }, _firstName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _lastName_decorators, { kind: "field", name: "lastName", static: false, private: false, access: { has: function (obj) { return "lastName" in obj; }, get: function (obj) { return obj.lastName; }, set: function (obj, value) { obj.lastName = value; } }, metadata: _metadata }, _lastName_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _email_decorators, { kind: "field", name: "email", static: false, private: false, access: { has: function (obj) { return "email" in obj; }, get: function (obj) { return obj.email; }, set: function (obj, value) { obj.email = value; } }, metadata: _metadata }, _email_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _password_decorators, { kind: "field", name: "password", static: false, private: false, access: { has: function (obj) { return "password" in obj; }, get: function (obj) { return obj.password; }, set: function (obj, value) { obj.password = value; } }, metadata: _metadata }, _password_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _picture_decorators, { kind: "field", name: "picture", static: false, private: false, access: { has: function (obj) { return "picture" in obj; }, get: function (obj) { return obj.picture; }, set: function (obj, value) { obj.picture = value; } }, metadata: _metadata }, _picture_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _locale_decorators, { kind: "field", name: "locale", static: false, private: false, access: { has: function (obj) { return "locale" in obj; }, get: function (obj) { return obj.locale; }, set: function (obj, value) { obj.locale = value; } }, metadata: _metadata }, _locale_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _role_decorators, { kind: "field", name: "role", static: false, private: false, access: { has: function (obj) { return "role" in obj; }, get: function (obj) { return obj.role; }, set: function (obj, value) { obj.role = value; } }, metadata: _metadata }, _role_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        User = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return User = _classThis;
}();
exports.User = User;
exports.UserSchema = mongoose_1.SchemaFactory.createForClass(User);
