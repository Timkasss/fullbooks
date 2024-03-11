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
exports.BooksController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var nestjs_form_data_1 = require("nestjs-form-data");
var BooksController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('books'), (0, common_1.Controller)('books')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _createBook_decorators;
    var _getBooks_decorators;
    var _getBook_decorators;
    var _deleteBook_decorators;
    var _updateBook_decorators;
    var _giveLike_decorators;
    var _giveDislike_decorators;
    var _removeLike_decorators;
    var _removeDislike_decorators;
    var _getBooksByAuthor_decorators;
    var BooksController = _classThis = /** @class */ (function () {
        function BooksController_1(booksService) {
            this.booksService = (__runInitializers(this, _instanceExtraInitializers), booksService);
        }
        BooksController_1.prototype.createBook = function (createBookDto, res) {
            return __awaiter(this, void 0, void 0, function () {
                var newBook, error_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.booksService.createBook(createBookDto)];
                        case 1:
                            newBook = _a.sent();
                            return [2 /*return*/, res.json(newBook)];
                        case 2:
                            error_1 = _a.sent();
                            console.error(error_1);
                            if (error_1.code === 11000) {
                                throw new common_1.HttpException('Book already exists', common_1.HttpStatus.CONFLICT);
                            }
                            else {
                                throw new common_1.HttpException('Failed to create book', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
                            }
                            return [3 /*break*/, 3];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        BooksController_1.prototype.getBooks = function () {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.booksService.getBooks()];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        BooksController_1.prototype.getBook = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var book;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.booksService.getBook(id)];
                        case 1:
                            book = _a.sent();
                            return [2 /*return*/, book];
                    }
                });
            });
        };
        BooksController_1.prototype.deleteBook = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                var book;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.booksService.deleteBook(id)];
                        case 1:
                            book = _a.sent();
                            if (!book)
                                throw new common_1.HttpException('Book not found', common_1.HttpStatus.NOT_FOUND);
                            return [2 /*return*/, book];
                    }
                });
            });
        };
        BooksController_1.prototype.updateBook = function (id, updateBookDto) {
            return __awaiter(this, void 0, void 0, function () {
                var book;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.booksService.updateBook(id, updateBookDto)];
                        case 1:
                            book = _a.sent();
                            return [2 /*return*/, book];
                    }
                });
            });
        };
        BooksController_1.prototype.giveLike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.booksService.giveLike(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        BooksController_1.prototype.giveDislike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.booksService.giveDislike(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        BooksController_1.prototype.removeLike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.booksService.removeLike(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        BooksController_1.prototype.removeDislike = function (id) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.booksService.removeDislike(id)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        BooksController_1.prototype.getBooksByAuthor = function (name) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.booksService.getBooksByAuthor(name)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return BooksController_1;
    }());
    __setFunctionName(_classThis, "BooksController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _createBook_decorators = [(0, nestjs_form_data_1.FormDataRequest)({ storage: nestjs_form_data_1.MemoryStoredFile }), (0, common_1.Post)(), (0, swagger_1.ApiOperation)({ summary: 'Create Book' }), (0, swagger_1.ApiCreatedResponse)({
                description: 'Book created successfully'
            }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' })];
        _getBooks_decorators = [(0, swagger_1.ApiOkResponse)({
                description: 'List of books retrieved successfully'
            }), (0, swagger_1.ApiOperation)({ summary: 'Get all Books' }), (0, common_1.Get)()];
        _getBook_decorators = [(0, swagger_1.ApiOkResponse)({
                description: 'Book retrieved successfully'
            }), (0, swagger_1.ApiOperation)({ summary: 'Get Book by id' }), (0, swagger_1.ApiNotFoundResponse)({ description: 'Book not found' }), (0, swagger_1.ApiParam)({ name: 'id', description: 'Book ID', required: true }), (0, common_1.Get)(':id')];
        _deleteBook_decorators = [(0, swagger_1.ApiOkResponse)({
                description: 'Book deleted successfully'
            }), (0, swagger_1.ApiNotFoundResponse)({ description: 'Book not found' }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }), (0, swagger_1.ApiOperation)({ summary: 'Delete Book by id' }), (0, swagger_1.ApiParam)({ name: 'id', description: 'Book ID', required: true }), (0, common_1.Delete)(':id')];
        _updateBook_decorators = [(0, swagger_1.ApiOkResponse)({
                description: 'Book updated successfully'
            }), (0, swagger_1.ApiNotFoundResponse)({ description: 'Book not found' }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }), (0, swagger_1.ApiOperation)({ summary: 'Update Book by id' }), (0, swagger_1.ApiParam)({ name: 'id', description: 'Book ID', required: true }), (0, nestjs_form_data_1.FormDataRequest)({ storage: nestjs_form_data_1.MemoryStoredFile }), (0, common_1.Patch)(':id')];
        _giveLike_decorators = [(0, common_1.Post)('/like/:id')];
        _giveDislike_decorators = [(0, common_1.Post)('/dislike/:id')];
        _removeLike_decorators = [(0, common_1.Post)('/remove-like/:id')];
        _removeDislike_decorators = [(0, common_1.Post)('/remove-dislike/:id')];
        _getBooksByAuthor_decorators = [(0, common_1.Get)('/author/getbooks')];
        __esDecorate(_classThis, null, _createBook_decorators, { kind: "method", name: "createBook", static: false, private: false, access: { has: function (obj) { return "createBook" in obj; }, get: function (obj) { return obj.createBook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getBooks_decorators, { kind: "method", name: "getBooks", static: false, private: false, access: { has: function (obj) { return "getBooks" in obj; }, get: function (obj) { return obj.getBooks; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getBook_decorators, { kind: "method", name: "getBook", static: false, private: false, access: { has: function (obj) { return "getBook" in obj; }, get: function (obj) { return obj.getBook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _deleteBook_decorators, { kind: "method", name: "deleteBook", static: false, private: false, access: { has: function (obj) { return "deleteBook" in obj; }, get: function (obj) { return obj.deleteBook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _updateBook_decorators, { kind: "method", name: "updateBook", static: false, private: false, access: { has: function (obj) { return "updateBook" in obj; }, get: function (obj) { return obj.updateBook; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _giveLike_decorators, { kind: "method", name: "giveLike", static: false, private: false, access: { has: function (obj) { return "giveLike" in obj; }, get: function (obj) { return obj.giveLike; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _giveDislike_decorators, { kind: "method", name: "giveDislike", static: false, private: false, access: { has: function (obj) { return "giveDislike" in obj; }, get: function (obj) { return obj.giveDislike; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeLike_decorators, { kind: "method", name: "removeLike", static: false, private: false, access: { has: function (obj) { return "removeLike" in obj; }, get: function (obj) { return obj.removeLike; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _removeDislike_decorators, { kind: "method", name: "removeDislike", static: false, private: false, access: { has: function (obj) { return "removeDislike" in obj; }, get: function (obj) { return obj.removeDislike; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _getBooksByAuthor_decorators, { kind: "method", name: "getBooksByAuthor", static: false, private: false, access: { has: function (obj) { return "getBooksByAuthor" in obj; }, get: function (obj) { return obj.getBooksByAuthor; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        BooksController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return BooksController = _classThis;
}();
exports.BooksController = BooksController;
