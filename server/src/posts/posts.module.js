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
exports.PostsModule = void 0;
var common_1 = require("@nestjs/common");
var posts_service_1 = require("./posts.service");
var nestjs_form_data_1 = require("nestjs-form-data");
var axios_1 = require("@nestjs/axios");
var posts_controller_1 = require("./posts.controller");
var mongoose_1 = require("@nestjs/mongoose");
var post_schema_1 = require("../schemas/post.schema");
var access_contol_service_1 = require("../shared/access-contol.service");
var user_schema_1 = require("../schemas/user.schema");
var imageService_service_1 = require("../utils/imageService.service");
var generateDate_service_1 = require("../utils/generateDate.service");
var PostsModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: 'Posts', schema: post_schema_1.PostSchema }]),
                mongoose_1.MongooseModule.forFeature([{ name: 'Users', schema: user_schema_1.UserSchema }]),
                nestjs_form_data_1.NestjsFormDataModule.config({ storage: nestjs_form_data_1.MemoryStoredFile }),
                axios_1.HttpModule
            ],
            exports: [],
            providers: [
                posts_service_1.PostsService,
                access_contol_service_1.AccessControlService,
                imageService_service_1.ImageService,
                generateDate_service_1.GenerateDateService
            ],
            controllers: [posts_controller_1.PostsController]
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var PostsModule = _classThis = /** @class */ (function () {
        function PostsModule_1() {
        }
        return PostsModule_1;
    }());
    __setFunctionName(_classThis, "PostsModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        PostsModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return PostsModule = _classThis;
}();
exports.PostsModule = PostsModule;
