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
exports.AuthorsAwardsModule = void 0;
var common_1 = require("@nestjs/common");
var authors_awards_controller_1 = require("./authors-awards.controller");
var mongoose_1 = require("@nestjs/mongoose");
var authors_awards_schema_1 = require("../../../../../../../../../../src/schemas/authors-awards.schema");
var authors_awards_service_1 = require("./authors-awards.service");
var axios_1 = require("@nestjs/axios");
var imageService_service_1 = require("../../../../../../../../../../src/utils/imageService.service");
var nestjs_form_data_1 = require("nestjs-form-data");
var AuthorsAwardsModule = function () {
    var _classDecorators = [(0, common_1.Module)({
            imports: [
                mongoose_1.MongooseModule.forFeature([
                    { name: 'Awards', schema: authors_awards_schema_1.AuthorsAwardsSchema }
                ]),
                nestjs_form_data_1.NestjsFormDataModule.config({ storage: nestjs_form_data_1.MemoryStoredFile }),
                axios_1.HttpModule
            ],
            providers: [authors_awards_service_1.AuthorsAwardsService, imageService_service_1.ImageService],
            controllers: [authors_awards_controller_1.AuthorsAwardsController]
        })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var AuthorsAwardsModule = _classThis = /** @class */ (function () {
        function AuthorsAwardsModule_1() {
        }
        return AuthorsAwardsModule_1;
    }());
    __setFunctionName(_classThis, "AuthorsAwardsModule");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthorsAwardsModule = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthorsAwardsModule = _classThis;
}();
exports.AuthorsAwardsModule = AuthorsAwardsModule;
