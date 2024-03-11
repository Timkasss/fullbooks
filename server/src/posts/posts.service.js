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
exports.PostsService = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("mongoose");
var PostsService = function () {
    var _classDecorators = [(0, common_1.Injectable)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PostsService = _classThis = /** @class */ (function () {
        function PostsService_1(PostsModel, jwtService, imageService, generateDateService) {
            this.PostsModel = PostsModel;
            this.jwtService = jwtService;
            this.imageService = imageService;
            this.generateDateService = generateDateService;
        }
        PostsService_1.prototype.createPost = function (postDto, req) {
            return __awaiter(this, void 0, void 0, function () {
                var token, decodedToken, authorId, image, date, post, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 5, , 6]);
                            token = req.headers.authorization.split(' ')[1];
                            return [4 /*yield*/, this.jwtService.decode(token)];
                        case 1:
                            decodedToken = _a.sent();
                            authorId = new mongoose_1.Types.ObjectId(decodedToken._id || decodedToken.id);
                            return [4 /*yield*/, this.imageService.uploadImage(postDto.image)];
                        case 2:
                            image = _a.sent();
                            date = this.generateDateService.generateDate();
                            return [4 /*yield*/, new this.PostsModel(__assign(__assign({}, postDto), { author: authorId, image: image, date: date })).save()];
                        case 3:
                            post = _a.sent();
                            return [4 /*yield*/, post.populate([{ path: 'author', select: '-password' }])];
                        case 4:
                            _a.sent();
                            return [2 /*return*/, post];
                        case 5:
                            e_1 = _a.sent();
                            throw new common_1.HttpException(e_1.message, common_1.HttpStatus.BAD_REQUEST);
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        PostsService_1.prototype.getPosts = function () {
            return __awaiter(this, void 0, void 0, function () {
                var e_2;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.PostsModel.find().populate([
                                    { path: 'author', select: '-password' }
                                ])];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_2 = _a.sent();
                            throw new common_1.HttpException(e_2.message, common_1.HttpStatus.BAD_REQUEST);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PostsService_1.prototype.getPost = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var post, e_3;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.PostsModel.findByIdAndUpdate(id, {
                                    $inc: { views: 1 }
                                }).populate([{ path: 'author', select: '-password' }])];
                        case 1:
                            post = _a.sent();
                            if (!post) {
                                throw new common_1.HttpException('Post not found', 404);
                            }
                            return [2 /*return*/, post];
                        case 2:
                            e_3 = _a.sent();
                            throw new common_1.HttpException(e_3.message, e_3.status);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PostsService_1.prototype.deletePost = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var post, e_4;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.PostsModel.findByIdAndDelete(id)];
                        case 1:
                            post = _a.sent();
                            if (!post) {
                                throw new common_1.HttpException('Post not found', 404);
                            }
                            return [2 /*return*/, {
                                    message: 'Post has been removed'
                                }];
                        case 2:
                            e_4 = _a.sent();
                            throw new common_1.HttpException(e_4.message, e_4.status);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PostsService_1.prototype.getPostsByAuthor = function (authorId) {
            return __awaiter(this, void 0, void 0, function () {
                var post, e_5;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.PostsModel.findOne({
                                    author: authorId
                                }).populate([{ path: 'author', select: '-password' }])];
                        case 1:
                            post = _a.sent();
                            if (!post) {
                                throw new common_1.HttpException('Post not found', 404);
                            }
                            return [2 /*return*/, post];
                        case 2:
                            e_5 = _a.sent();
                            throw new common_1.HttpException(e_5.message, e_5.status);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PostsService_1.prototype.getPostsByTag = function (tags) {
            return __awaiter(this, void 0, void 0, function () {
                var posts, result, e_6;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            posts = this.PostsModel.find({
                                tags: { $all: tags }
                            })
                                .populate([{ path: 'author', select: '-password' }])
                                .exec();
                            return [4 /*yield*/, posts];
                        case 1:
                            result = _a.sent();
                            if (result.length === 0 || !result) {
                                throw new common_1.NotFoundException();
                            }
                            return [2 /*return*/, posts];
                        case 2:
                            e_6 = _a.sent();
                            throw new common_1.HttpException(e_6.message, e_6.status);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PostsService_1.prototype.getPostsByCategory = function (category) {
            return __awaiter(this, void 0, void 0, function () {
                var posts, e_7;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.PostsModel.find({
                                    category: category
                                }).populate([{ path: 'author', select: '-password' }])];
                        case 1:
                            posts = _a.sent();
                            if (!posts) {
                                throw new common_1.HttpException('Post not found', 404);
                            }
                            return [2 /*return*/, posts];
                        case 2:
                            e_7 = _a.sent();
                            throw new common_1.HttpException(e_7.message, e_7.status);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        PostsService_1.prototype.giveLike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var post;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.PostsModel.findOneAndUpdate({ _id: id }, {
                                $inc: { likes: 1 }
                            }, { new: true })];
                        case 1:
                            post = _a.sent();
                            console.log(post);
                            if (!post)
                                throw new common_1.NotFoundException();
                            return [2 /*return*/, post];
                    }
                });
            });
        };
        PostsService_1.prototype.giveDislike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var post;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.PostsModel.findOneAndUpdate({ _id: id }, {
                                $inc: { dislikes: 1 }
                            }, { new: true })];
                        case 1:
                            post = _a.sent();
                            if (!post)
                                throw new common_1.NotFoundException();
                            return [2 /*return*/, post];
                    }
                });
            });
        };
        PostsService_1.prototype.removeLike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var post;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.PostsModel.findOneAndUpdate({ _id: id, likes: { $gte: 1 } }, {
                                $inc: { likes: -1 }
                            }, { new: true })];
                        case 1:
                            post = _a.sent();
                            if (!post)
                                throw new common_1.NotFoundException();
                            return [2 /*return*/, post];
                    }
                });
            });
        };
        PostsService_1.prototype.removeDislike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var post;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.PostsModel.findOneAndUpdate({ _id: id, dislikes: { $gte: 1 } }, {
                                $inc: { dislikes: -1 }
                            }, { new: true })];
                        case 1:
                            post = _a.sent();
                            console.log(post);
                            if (!post)
                                throw new common_1.NotFoundException();
                            return [2 /*return*/, post];
                    }
                });
            });
        };
        return PostsService_1;
    }());
    __setFunctionName(_classThis, "PostsService");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PostsService = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PostsService = _classThis;
}();
exports.PostsService = PostsService;
