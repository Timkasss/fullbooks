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
exports.AuthorsModule = void 0;
var common_1 = require("@nestjs/common");
var mongoose_1 = require("@nestjs/mongoose");
var author_schema_1 = require("../../../../../../../../../../src/schemas/author.schema");
var authors_service_1 = require("./authors.service");
var authors_controller_1 = require("./authors.controller");
var nestjs_form_data_1 = require("nestjs-form-data");
var imageService_service_1 = require("../../../../../../../../../../src/utils/imageService.service");
var axios_1 = require("@nestjs/axios");
var shared_module_1 = require("../../../../../../../../../../src/shared/shared.module");
var access_contol_service_1 = require("../../../../../../../../../../src/shared/access-contol.service");
var AuthorsModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([{ name: 'Auhtors', schema: author_schema_1.AuthorSchema }]),
                nestjs_form_data_1.NestjsFormDataModule.config({
                    storage: nestjs_form_data_1.MemoryStoredFile
                }),
                axios_1.HttpModule,
                shared_module_1.SharedModule
            ],
            providers: [authors_service_1.AuthorsService, imageService_service_1.ImageService, access_contol_service_1.AccessControlService],
            controllers: [authors_controller_1.AuthorsController]
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuthorsModule = _classThis = /** @class */ (function () {
        function AuthorsModule_1() {
        }
        return AuthorsModule_1;
    }());
    __setFunctionName(_classThis, "AuthorsModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthorsModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthorsModule = _classThis;
}();
exports.AuthorsModule = AuthorsModule;
