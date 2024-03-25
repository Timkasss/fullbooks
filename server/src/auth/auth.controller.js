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
exports.AuthController = void 0;
var common_1 = require("@nestjs/common");
var swagger_1 = require("@nestjs/swagger");
var passport_1 = require("@nestjs/passport");
var AuthController = function () {
    var _classDecorators = [(0, swagger_1.ApiTags)('auth'), (0, common_1.Controller)('auth')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _signIn_decorators;
    var _signUp_decorators;
    var _googleAuth_decorators;
    var _googleAuthRedirect_decorators;
    var AuthController = _classThis = /** @class */ (function () {
        function AuthController_1(authService, mailService, jwtService, userModel) {
            this.authService = (__runInitializers(this, _instanceExtraInitializers), authService);
            this.mailService = mailService;
            this.jwtService = jwtService;
            this.userModel = userModel;
        }
        AuthController_1.prototype.signIn = function (signInDto) {
            return __awaiter(this, void 0, void 0, function () {
                var password, email, userInUserModel, user, error_1;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 4, , 5]);
                            password = signInDto.password, email = signInDto.email;
                            if (!email || !password) {
                                throw new common_1.BadRequestException();
                            }
                            return [4 /*yield*/, this.userModel.findOne({ email: email })];
                        case 1:
                            userInUserModel = _b.sent();
                            if (!userInUserModel) {
                                throw new common_1.HttpException('Password or email not found', common_1.HttpStatus.NOT_FOUND);
                            }
                            return [4 /*yield*/, this.authService.signIn(signInDto.email, signInDto.password)];
                        case 2:
                            user = _b.sent();
                            _a = {};
                            return [4 /*yield*/, this.jwtService.signAsync({
                                    id: user._id,
                                    role: user.role
                                })];
                        case 3: return [2 /*return*/, (_a.access_token = _b.sent(),
                                _a)];
                        case 4:
                            error_1 = _b.sent();
                            console.error(error_1);
                            throw error_1;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AuthController_1.prototype.signUp = function (signUpDto) {
            return __awaiter(this, void 0, void 0, function () {
                var existingUserInUserModel, user, error_2;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 4, , 5]);
                            return [4 /*yield*/, this.userModel.findOne({
                                    email: signUpDto.email
                                })];
                        case 1:
                            existingUserInUserModel = _b.sent();
                            if (existingUserInUserModel) {
                                throw new common_1.HttpException('User already exists', common_1.HttpStatus.CONFLICT);
                            }
                            return [4 /*yield*/, this.authService.signUp(signUpDto)];
                        case 2:
                            user = _b.sent();
                            _a = {};
                            return [4 /*yield*/, this.jwtService.signAsync({
                                    id: user._id,
                                    role: user.role
                                })];
                        case 3: return [2 /*return*/, (_a.token = _b.sent(),
                                _a)];
                        case 4:
                            error_2 = _b.sent();
                            console.error(error_2);
                            throw error_2;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        AuthController_1.prototype.googleAuth = function (req) {
            return __awaiter(this, void 0, void 0, function () { return __generator(this, function (_a) {
                return [2 /*return*/];
            }); });
        };
        AuthController_1.prototype.googleAuthRedirect = function (req) {
            return __awaiter(this, void 0, void 0, function () {
                var generatedPass, user;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            generatedPass = this.passwordGeneration(10);
                            return [4 /*yield*/, this.authService.googleLogin(req, generatedPass)];
                        case 1:
                            user = _b.sent();
                            return [4 /*yield*/, this.mailService.sendEmail(generatedPass, user.email)];
                        case 2:
                            _b.sent();
                            _a = {};
                            return [4 /*yield*/, this.jwtService.signAsync({
                                    id: user._id,
                                    role: user.role
                                })];
                        case 3: return [2 /*return*/, (_a.token = _b.sent(),
                                _a)];
                    }
                });
            });
        };
        AuthController_1.prototype.passwordGeneration = function (length) {
            var charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
            var password = '';
            for (var i = 0; i < length; i++) {
                var randomIndex = Math.floor(Math.random() * charset.length);
                password += charset.charAt(randomIndex);
            }
            return password;
        };
        return AuthController_1;
    }());
    __setFunctionName(_classThis, "AuthController");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _signIn_decorators = [(0, common_1.HttpCode)(common_1.HttpStatus.OK), (0, swagger_1.ApiOperation)({ summary: 'Sign In' }), (0, swagger_1.ApiOkResponse)({
                description: 'User found successfully'
            }), (0, swagger_1.ApiNotFoundResponse)({ description: 'User not found' }), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized' }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }), (0, swagger_1.ApiBearerAuth)(), (0, common_1.Get)('signin')];
        _signUp_decorators = [(0, common_1.HttpCode)(common_1.HttpStatus.CREATED), (0, swagger_1.ApiOperation)({ summary: 'Sign Up' }), (0, swagger_1.ApiCreatedResponse)({
                description: 'User created successfully'
            }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad Request' }), (0, swagger_1.ApiBearerAuth)(), (0, common_1.Post)('signup')];
        _googleAuth_decorators = [(0, common_1.Get)('google'), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google'))];
        _googleAuthRedirect_decorators = [(0, common_1.Get)('google/redirect'), (0, common_1.UseGuards)((0, passport_1.AuthGuard)('google'))];
        __esDecorate(_classThis, null, _signIn_decorators, { kind: "method", name: "signIn", static: false, private: false, access: { has: function (obj) { return "signIn" in obj; }, get: function (obj) { return obj.signIn; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _signUp_decorators, { kind: "method", name: "signUp", static: false, private: false, access: { has: function (obj) { return "signUp" in obj; }, get: function (obj) { return obj.signUp; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _googleAuth_decorators, { kind: "method", name: "googleAuth", static: false, private: false, access: { has: function (obj) { return "googleAuth" in obj; }, get: function (obj) { return obj.googleAuth; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(_classThis, null, _googleAuthRedirect_decorators, { kind: "method", name: "googleAuthRedirect", static: false, private: false, access: { has: function (obj) { return "googleAuthRedirect" in obj; }, get: function (obj) { return obj.googleAuthRedirect; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        AuthController = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return AuthController = _classThis;
}();
exports.AuthController = AuthController;