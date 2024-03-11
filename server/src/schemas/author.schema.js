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
exports.AuthorSchema = exports.Author = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var Author = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _fullname_decorators;
    var _fullname_initializers = [];
    var _birthday_decorators;
    var _birthday_initializers = [];
    var _placeofbirth_decorators;
    var _placeofbirth_initializers = [];
    var _deathdate_decorators;
    var _deathdate_initializers = [];
    var _placeofdeath_decorators;
    var _placeofdeath_initializers = [];
    var _typeactivity_decorators;
    var _typeactivity_initializers = [];
    var _direction_decorators;
    var _direction_initializers = [];
    var _languageworks_decorators;
    var _languageworks_initializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var Author = _classThis = /** @class */ (function () {
        function Author_1() {
            this.fullname = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _fullname_initializers, void 0));
            this.birthday = __runInitializers(this, _birthday_initializers, void 0);
            this.placeofbirth = __runInitializers(this, _placeofbirth_initializers, void 0);
            this.deathdate = __runInitializers(this, _deathdate_initializers, void 0);
            this.placeofdeath = __runInitializers(this, _placeofdeath_initializers, void 0);
            this.typeactivity = __runInitializers(this, _typeactivity_initializers, void 0);
            this.direction = __runInitializers(this, _direction_initializers, void 0);
            this.languageworks = __runInitializers(this, _languageworks_initializers, void 0);
            this.image = __runInitializers(this, _image_initializers, void 0);
        }
        return Author_1;
    }());
    __setFunctionName(_classThis, "Author");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _fullname_decorators = [(0, mongoose_1.Prop)({ unique: true, required: true, type: String })];
        _birthday_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _placeofbirth_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _deathdate_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _placeofdeath_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _typeactivity_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _direction_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _languageworks_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _image_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        __esDecorate(null, null, _fullname_decorators, { kind: "field", name: "fullname", static: false, private: false, access: { has: function (obj) { return "fullname" in obj; }, get: function (obj) { return obj.fullname; }, set: function (obj, value) { obj.fullname = value; } }, metadata: _metadata }, _fullname_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _birthday_decorators, { kind: "field", name: "birthday", static: false, private: false, access: { has: function (obj) { return "birthday" in obj; }, get: function (obj) { return obj.birthday; }, set: function (obj, value) { obj.birthday = value; } }, metadata: _metadata }, _birthday_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _placeofbirth_decorators, { kind: "field", name: "placeofbirth", static: false, private: false, access: { has: function (obj) { return "placeofbirth" in obj; }, get: function (obj) { return obj.placeofbirth; }, set: function (obj, value) { obj.placeofbirth = value; } }, metadata: _metadata }, _placeofbirth_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _deathdate_decorators, { kind: "field", name: "deathdate", static: false, private: false, access: { has: function (obj) { return "deathdate" in obj; }, get: function (obj) { return obj.deathdate; }, set: function (obj, value) { obj.deathdate = value; } }, metadata: _metadata }, _deathdate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _placeofdeath_decorators, { kind: "field", name: "placeofdeath", static: false, private: false, access: { has: function (obj) { return "placeofdeath" in obj; }, get: function (obj) { return obj.placeofdeath; }, set: function (obj, value) { obj.placeofdeath = value; } }, metadata: _metadata }, _placeofdeath_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _typeactivity_decorators, { kind: "field", name: "typeactivity", static: false, private: false, access: { has: function (obj) { return "typeactivity" in obj; }, get: function (obj) { return obj.typeactivity; }, set: function (obj, value) { obj.typeactivity = value; } }, metadata: _metadata }, _typeactivity_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _direction_decorators, { kind: "field", name: "direction", static: false, private: false, access: { has: function (obj) { return "direction" in obj; }, get: function (obj) { return obj.direction; }, set: function (obj, value) { obj.direction = value; } }, metadata: _metadata }, _direction_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _languageworks_decorators, { kind: "field", name: "languageworks", static: false, private: false, access: { has: function (obj) { return "languageworks" in obj; }, get: function (obj) { return obj.languageworks; }, set: function (obj, value) { obj.languageworks = value; } }, metadata: _metadata }, _languageworks_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Author = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Author = _classThis;
}();
exports.Author = Author;
exports.AuthorSchema = mongoose_1.SchemaFactory.createForClass(Author);
