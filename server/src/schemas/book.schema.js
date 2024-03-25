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
exports.BookSchema = exports.Book = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var class_validator_1 = require("class-validator");
var Book = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _subTitle_decorators;
    var _subTitle_initializers = [];
    var _authors_decorators;
    var _authors_initializers = [];
    var _genre_decorators;
    var _genre_initializers = [];
    var _grade_decorators;
    var _grade_initializers = [];
    var _language_decorators;
    var _language_initializers = [];
    var _publishedDate_decorators;
    var _publishedDate_initializers = [];
    var _publisher_decorators;
    var _publisher_initializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _pages_decorators;
    var _pages_initializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _pdf_decorators;
    var _pdf_initializers = [];
    var Book = _classThis = /** @class */ (function () {
        function Book_1() {
            this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.subTitle = __runInitializers(this, _subTitle_initializers, void 0);
            this.authors = __runInitializers(this, _authors_initializers, void 0);
            this.genre = __runInitializers(this, _genre_initializers, void 0);
            this.grade = __runInitializers(this, _grade_initializers, void 0);
            this.language = __runInitializers(this, _language_initializers, void 0);
            this.publishedDate = __runInitializers(this, _publishedDate_initializers, void 0);
            this.publisher = __runInitializers(this, _publisher_initializers, void 0);
            this.description = __runInitializers(this, _description_initializers, void 0);
            this.pages = __runInitializers(this, _pages_initializers, void 0);
            this.image = __runInitializers(this, _image_initializers, void 0);
            this.pdf = __runInitializers(this, _pdf_initializers, void 0);
        }
        return Book_1;
    }());
    __setFunctionName(_classThis, "Book");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _title_decorators = [(0, mongoose_1.Prop)({ unique: true, required: true, type: String })];
        _subTitle_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _authors_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _genre_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _grade_decorators = [(0, mongoose_1.Prop)({
                required: true,
                type: {},
                default: {
                    rating: 0,
                    likes: 0,
                    dislikes: 0,
                    views: 0
                }
            }), (0, class_validator_1.IsOptional)()];
        _language_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _publishedDate_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _publisher_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _description_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _pages_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _image_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _pdf_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _subTitle_decorators, { kind: "field", name: "subTitle", static: false, private: false, access: { has: function (obj) { return "subTitle" in obj; }, get: function (obj) { return obj.subTitle; }, set: function (obj, value) { obj.subTitle = value; } }, metadata: _metadata }, _subTitle_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _authors_decorators, { kind: "field", name: "authors", static: false, private: false, access: { has: function (obj) { return "authors" in obj; }, get: function (obj) { return obj.authors; }, set: function (obj, value) { obj.authors = value; } }, metadata: _metadata }, _authors_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _genre_decorators, { kind: "field", name: "genre", static: false, private: false, access: { has: function (obj) { return "genre" in obj; }, get: function (obj) { return obj.genre; }, set: function (obj, value) { obj.genre = value; } }, metadata: _metadata }, _genre_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _grade_decorators, { kind: "field", name: "grade", static: false, private: false, access: { has: function (obj) { return "grade" in obj; }, get: function (obj) { return obj.grade; }, set: function (obj, value) { obj.grade = value; } }, metadata: _metadata }, _grade_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _language_decorators, { kind: "field", name: "language", static: false, private: false, access: { has: function (obj) { return "language" in obj; }, get: function (obj) { return obj.language; }, set: function (obj, value) { obj.language = value; } }, metadata: _metadata }, _language_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _publishedDate_decorators, { kind: "field", name: "publishedDate", static: false, private: false, access: { has: function (obj) { return "publishedDate" in obj; }, get: function (obj) { return obj.publishedDate; }, set: function (obj, value) { obj.publishedDate = value; } }, metadata: _metadata }, _publishedDate_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _publisher_decorators, { kind: "field", name: "publisher", static: false, private: false, access: { has: function (obj) { return "publisher" in obj; }, get: function (obj) { return obj.publisher; }, set: function (obj, value) { obj.publisher = value; } }, metadata: _metadata }, _publisher_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pages_decorators, { kind: "field", name: "pages", static: false, private: false, access: { has: function (obj) { return "pages" in obj; }, get: function (obj) { return obj.pages; }, set: function (obj, value) { obj.pages = value; } }, metadata: _metadata }, _pages_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _pdf_decorators, { kind: "field", name: "pdf", static: false, private: false, access: { has: function (obj) { return "pdf" in obj; }, get: function (obj) { return obj.pdf; }, set: function (obj, value) { obj.pdf = value; } }, metadata: _metadata }, _pdf_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Book = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Book = _classThis;
}();
exports.Book = Book;
exports.BookSchema = mongoose_1.SchemaFactory.createForClass(Book);