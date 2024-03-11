"use strict";
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostsController = void 0;
var common_1 = require("@nestjs/common");
var nestjs_form_data_1 = require("nestjs-form-data");
var swagger_1 = require("@nestjs/swagger");
var PostsController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('Posts'), (0, common_1.Controller)('posts')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createPost_decorators;
    var _getPosts_decorators;
    var _getPost_decorators;
    var _deletePost_decorators;
    var _getPostsByAuthor_decorators;
    var _getPostsByTag_decorators;
    var _getPostsByCategory_decorators;
    var _giveLike_decorators;
    var _giveDisLike_decorators;
    var _removeLike_decorators;
    var _removeDislike_decorators;
    var PostsController = _classThis = /** @class */ (function () {
        function PostsController_1(PostService) {
            this.PostService = (__runInitializers(this, _instanceExtraInitializers), PostService);
        }
        // example of using Roles Guard
        // @UseGuards(RoleGuard)
        // @Roles(Role.USER)
        PostsController_1.prototype.createPost = function (createPostDto, req) {
            return __awaiter(this, void 0, void 0, function () {
                var post;
                return __generator(this, function (_a) {
                    try {
                        post = this.PostService.createPost(createPostDto, req);
                        return [2 /*return*/, post];
                    }
                    catch (error) {
                        console.error(error);
                        throw error;
                    }
                    return [2 /*return*/];
                });
            });
        };
        PostsController_1.prototype.getPosts = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.PostService.getPosts()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostsController_1.prototype.getPost = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.PostService.getPost(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostsController_1.prototype.deletePost = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.PostService.deletePost(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostsController_1.prototype.getPostsByAuthor = function (authorId) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.PostService.getPostsByAuthor(authorId)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostsController_1.prototype.getPostsByTag = function (tags) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.PostService.getPostsByTag(tags)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        PostsController_1.prototype.getPostsByCategory = function (category) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.PostService.getPostsByCategory(category)];
                });
            });
        };
        PostsController_1.prototype.giveLike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.PostService.giveLike(id)];
                });
            });
        };
        PostsController_1.prototype.giveDisLike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.PostService.giveDislike(id)];
                });
            });
        };
        PostsController_1.prototype.removeLike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.PostService.removeLike(id)];
                });
            });
        };
        PostsController_1.prototype.removeDislike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.PostService.removeDislike(id)];
                });
            });
        };
        return PostsController_1;
    }());
    __setFunctionName(_classThis, "PostsController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createPost_decorators = [(0, nestjs_form_data_1.FormDataRequest)({ storage: nestjs_form_data_1.MemoryStoredFile }), (0, common_1.Post)('create')];
        _getPosts_decorators = [(0, common_1.Get)()];
        _getPost_decorators = [(0, common_1.Get)('post/:id')];
        _deletePost_decorators = [(0, common_1.Delete)('/:id')];
        _getPostsByAuthor_decorators = [(0, common_1.Get)('author')];
        _getPostsByTag_decorators = [(0, common_1.Get)('tag')];
        _getPostsByCategory_decorators = [(0, common_1.Get)('category')];
        _giveLike_decorators = [(0, common_1.Post)('givelike/:id')];
        _giveDisLike_decorators = [(0, common_1.Post)('givedislike/:id')];
        _removeLike_decorators = [(0, common_1.Post)('removelike/:id')];
        _removeDislike_decorators = [(0, common_1.Post)('removedislike/:id')];
        __esDecorate(_classThis, null, _createPost_decorators, { kind: "method", name: "createPost", static: false, private: false, access: { has: function (obj) { return "createPost" in obj; }, get: function (obj) { return obj.createPost; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPosts_decorators, { kind: "method", name: "getPosts", static: false, private: false, access: { has: function (obj) { return "getPosts" in obj; }, get: function (obj) { return obj.getPosts; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPost_decorators, { kind: "method", name: "getPost", static: false, private: false, access: { has: function (obj) { return "getPost" in obj; }, get: function (obj) { return obj.getPost; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deletePost_decorators, { kind: "method", name: "deletePost", static: false, private: false, access: { has: function (obj) { return "deletePost" in obj; }, get: function (obj) { return obj.deletePost; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPostsByAuthor_decorators, { kind: "method", name: "getPostsByAuthor", static: false, private: false, access: { has: function (obj) { return "getPostsByAuthor" in obj; }, get: function (obj) { return obj.getPostsByAuthor; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPostsByTag_decorators, { kind: "method", name: "getPostsByTag", static: false, private: false, access: { has: function (obj) { return "getPostsByTag" in obj; }, get: function (obj) { return obj.getPostsByTag; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getPostsByCategory_decorators, { kind: "method", name: "getPostsByCategory", static: false, private: false, access: { has: function (obj) { return "getPostsByCategory" in obj; }, get: function (obj) { return obj.getPostsByCategory; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _giveLike_decorators, { kind: "method", name: "giveLike", static: false, private: false, access: { has: function (obj) { return "giveLike" in obj; }, get: function (obj) { return obj.giveLike; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _giveDisLike_decorators, { kind: "method", name: "giveDisLike", static: false, private: false, access: { has: function (obj) { return "giveDisLike" in obj; }, get: function (obj) { return obj.giveDisLike; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeLike_decorators, { kind: "method", name: "removeLike", static: false, private: false, access: { has: function (obj) { return "removeLike" in obj; }, get: function (obj) { return obj.removeLike; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeDislike_decorators, { kind: "method", name: "removeDislike", static: false, private: false, access: { has: function (obj) { return "removeDislike" in obj; }, get: function (obj) { return obj.removeDislike; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PostsController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PostsController = _classThis;
}();
exports.PostsController = PostsController;
