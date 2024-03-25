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
exports.PostSchema = exports.Post = void 0;
var mongoose_1 = require("@nestjs/mongoose");
var mongoose_2 = require("mongoose");
var Post = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _content_decorators;
    var _content_initializers = [];
    var _image_decorators;
    var _image_initializers = [];
    var _author_decorators;
    var _author_initializers = [];
    var _date_decorators;
    var _date_initializers = [];
    var _category_decorators;
    var _category_initializers = [];
    var _tags_decorators;
    var _tags_initializers = [];
    var _views_decorators;
    var _views_initializers = [];
    var _likes_decorators;
    var _likes_initializers = [];
    var _dislikes_decorators;
    var _dislikes_initializers = [];
    var _comments_decorators;
    var _comments_initializers = [];
    var _video_decorators;
    var _video_initializers = [];
    var Post = _classThis = /** @class */ (function () {
        function Post_1() {
            this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
            this.content = __runInitializers(this, _content_initializers, void 0);
            this.image = __runInitializers(this, _image_initializers, void 0);
            this.author = __runInitializers(this, _author_initializers, void 0);
            this.date = __runInitializers(this, _date_initializers, void 0);
            this.category = __runInitializers(this, _category_initializers, void 0);
            this.tags = __runInitializers(this, _tags_initializers, void 0);
            this.views = __runInitializers(this, _views_initializers, void 0);
            this.likes = __runInitializers(this, _likes_initializers, void 0);
            this.dislikes = __runInitializers(this, _dislikes_initializers, void 0);
            this.comments = __runInitializers(this, _comments_initializers, void 0);
            this.video = __runInitializers(this, _video_initializers, void 0);
        }
        return Post_1;
    }());
    __setFunctionName(_classThis, "Post");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _title_decorators = [(0, mongoose_1.Prop)({ unique: true, required: true, type: String })];
        _content_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _image_decorators = [(0, mongoose_1.Prop)({ type: String })];
        _author_decorators = [(0, mongoose_1.Prop)({ type: mongoose_2.SchemaTypes.ObjectId, ref: 'Users' })];
        _date_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _category_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        _tags_decorators = [(0, mongoose_1.Prop)({ type: [String], default: [] })];
        _views_decorators = [(0, mongoose_1.Prop)({ required: true, type: Number, default: 0 })];
        _likes_decorators = [(0, mongoose_1.Prop)({ required: true, type: Number, default: 0 })];
        _dislikes_decorators = [(0, mongoose_1.Prop)({ required: true, type: Number, default: 0 })];
        _comments_decorators = [(0, mongoose_1.Prop)({ type: [String], default: [] })];
        _video_decorators = [(0, mongoose_1.Prop)({ required: true, type: String })];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _content_decorators, { kind: "field", name: "content", static: false, private: false, access: { has: function (obj) { return "content" in obj; }, get: function (obj) { return obj.content; }, set: function (obj, value) { obj.content = value; } }, metadata: _metadata }, _content_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _image_decorators, { kind: "field", name: "image", static: false, private: false, access: { has: function (obj) { return "image" in obj; }, get: function (obj) { return obj.image; }, set: function (obj, value) { obj.image = value; } }, metadata: _metadata }, _image_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _author_decorators, { kind: "field", name: "author", static: false, private: false, access: { has: function (obj) { return "author" in obj; }, get: function (obj) { return obj.author; }, set: function (obj, value) { obj.author = value; } }, metadata: _metadata }, _author_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _date_decorators, { kind: "field", name: "date", static: false, private: false, access: { has: function (obj) { return "date" in obj; }, get: function (obj) { return obj.date; }, set: function (obj, value) { obj.date = value; } }, metadata: _metadata }, _date_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _category_decorators, { kind: "field", name: "category", static: false, private: false, access: { has: function (obj) { return "category" in obj; }, get: function (obj) { return obj.category; }, set: function (obj, value) { obj.category = value; } }, metadata: _metadata }, _category_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _tags_decorators, { kind: "field", name: "tags", static: false, private: false, access: { has: function (obj) { return "tags" in obj; }, get: function (obj) { return obj.tags; }, set: function (obj, value) { obj.tags = value; } }, metadata: _metadata }, _tags_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _views_decorators, { kind: "field", name: "views", static: false, private: false, access: { has: function (obj) { return "views" in obj; }, get: function (obj) { return obj.views; }, set: function (obj, value) { obj.views = value; } }, metadata: _metadata }, _views_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _likes_decorators, { kind: "field", name: "likes", static: false, private: false, access: { has: function (obj) { return "likes" in obj; }, get: function (obj) { return obj.likes; }, set: function (obj, value) { obj.likes = value; } }, metadata: _metadata }, _likes_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _dislikes_decorators, { kind: "field", name: "dislikes", static: false, private: false, access: { has: function (obj) { return "dislikes" in obj; }, get: function (obj) { return obj.dislikes; }, set: function (obj, value) { obj.dislikes = value; } }, metadata: _metadata }, _dislikes_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _comments_decorators, { kind: "field", name: "comments", static: false, private: false, access: { has: function (obj) { return "comments" in obj; }, get: function (obj) { return obj.comments; }, set: function (obj, value) { obj.comments = value; } }, metadata: _metadata }, _comments_initializers, _instanceExtraInitializers);
        __esDecorate(null, null, _video_decorators, { kind: "field", name: "video", static: false, private: false, access: { has: function (obj) { return "video" in obj; }, get: function (obj) { return obj.video; }, set: function (obj, value) { obj.video = value; } }, metadata: _metadata }, _video_initializers, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Post = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Post = _classThis;
}();
exports.Post = Post;
exports.PostSchema = mongoose_1.SchemaFactory.createForClass(Post);