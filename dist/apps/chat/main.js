/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/chat/app.module.ts":
/*!*********************************!*\
  !*** ./apps/chat/app.module.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AppModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/chat/auth/auth.module.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/chat/users/users.module.ts");
const conversations_module_1 = __webpack_require__(/*! ./conversations/src/conversations.module */ "./apps/chat/conversations/src/conversations.module.ts");
const messages_module_1 = __webpack_require__(/*! ./messages/src/messages.module */ "./apps/chat/messages/src/messages.module.ts");
const gateway_module_1 = __webpack_require__(/*! ./gateway/gateway.module */ "./apps/chat/gateway/gateway.module.ts");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const group_module_1 = __webpack_require__(/*! ./groups/group.module */ "./apps/chat/groups/group.module.ts");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const friend_requests_module_1 = __webpack_require__(/*! ./friend-requests/friend-requests.module */ "./apps/chat/friend-requests/friend-requests.module.ts");
const friends_module_1 = __webpack_require__(/*! ./friends/friends.module */ "./apps/chat/friends/friends.module.ts");
const events_module_1 = __webpack_require__(/*! ./events/events.module */ "./apps/chat/events/events.module.ts");
const exists_module_1 = __webpack_require__(/*! ./exists/exists.module */ "./apps/chat/exists/exists.module.ts");
const message_attachments_module_1 = __webpack_require__(/*! ./message-attachments/message-attachments.module */ "./apps/chat/message-attachments/message-attachments.module.ts");
const envFilePath = '.env';
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_module_1.AuthModule,
            users_module_1.UsersModule,
            config_1.ConfigModule.forRoot({ envFilePath }),
            passport_1.PassportModule.register({ session: true }),
            conversations_module_1.ConversationsModule,
            messages_module_1.MessagesModule,
            gateway_module_1.GatewayModule,
            event_emitter_1.EventEmitterModule.forRoot(),
            group_module_1.GroupModule,
            friend_requests_module_1.FriendRequestsModule,
            friends_module_1.FriendsModule,
            events_module_1.EventsModule,
            exists_module_1.ExistsModule,
            throttler_1.ThrottlerModule.forRoot({
                ttl: 10,
                limit: 10,
            }),
            message_attachments_module_1.MessageAttachmentsModule,
        ],
        controllers: [],
    })
], AppModule);
exports.AppModule = AppModule;


/***/ }),

/***/ "./apps/chat/auth/auth.controller.ts":
/*!*******************************************!*\
  !*** ./apps/chat/auth/auth.controller.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const user_1 = __webpack_require__(/*! ../users/interfaces/user */ "./apps/chat/users/interfaces/user.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const auth_1 = __webpack_require__(/*! ./auth */ "./apps/chat/auth/auth.ts");
const CreateUser_dto_1 = __webpack_require__(/*! ./dtos/CreateUser.dto */ "./apps/chat/auth/dtos/CreateUser.dto.ts");
let AuthController = class AuthController {
    constructor(authService, userService, jwtService, http, config) {
        this.authService = authService;
        this.userService = userService;
        this.jwtService = jwtService;
        this.http = http;
        this.config = config;
    }
    async registerUser(createUserDto) {
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'auth.REGISTER_SUCCESS', (0, class_transformer_1.instanceToPlain)((await this.userService.createUser(createUserDto)).data));
    }
    async login(data) {
        return this.authService.login(data);
    }
    async status(token) {
        const payload = this.jwtService.verify(token, {
            secret: this.config.getOrThrow('JWT_SECRET'),
        });
        const username = payload.username;
        const user = await this.userService.findUser(username);
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'auth.GET_STATUS_SUCCESS', user.data);
    }
    logout({ req, res }) {
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'auth.LOGOUT_SUCCESS', req.logout(err => {
            return err ? 400 : 200;
        }));
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('register'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof CreateUser_dto_1.CreateUserDto !== "undefined" && CreateUser_dto_1.CreateUserDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, microservices_1.MessagePattern)('login'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "login", null);
__decorate([
    (0, microservices_1.MessagePattern)('status'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "status", null);
__decorate([
    (0, microservices_1.MessagePattern)('logout'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.AUTH),
    __param(0, (0, common_1.Inject)(constants_1.Services.AUTH)),
    __param(1, (0, common_1.Inject)(constants_1.Services.USERS)),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_1.IAuthService !== "undefined" && auth_1.IAuthService) === "function" ? _a : Object, typeof (_b = typeof user_1.IUserService !== "undefined" && user_1.IUserService) === "function" ? _b : Object, typeof (_c = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _c : Object, typeof (_d = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _d : Object, typeof (_e = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _e : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/chat/auth/auth.module.ts":
/*!***************************************!*\
  !*** ./apps/chat/auth/auth.module.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/chat/users/users.module.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/chat/auth/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/chat/auth/auth.service.ts");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const prisma_1 = __webpack_require__(/*! @common/auth/prisma */ "./libs/common/auth/prisma/index.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [users_module_1.UsersModule],
        controllers: [auth_controller_1.AuthController],
        providers: [
            jwt_1.JwtService,
            config_1.ConfigService,
            prisma_1.PrismaServiceAuth,
            http_1.HTTP,
            {
                provide: constants_1.Services.AUTH,
                useClass: auth_service_1.AuthService,
            },
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/chat/auth/auth.service.ts":
/*!****************************************!*\
  !*** ./apps/chat/auth/auth.service.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const user_1 = __webpack_require__(/*! ../users/interfaces/user */ "./apps/chat/users/interfaces/user.ts");
const crypto_1 = __importDefault(__webpack_require__(/*! crypto */ "crypto"));
const prisma_1 = __webpack_require__(/*! @common/auth/prisma */ "./libs/common/auth/prisma/index.ts");
let AuthService = class AuthService extends http_1.HTTP {
    constructor(userService, jwt, config, http, prisma) {
        super();
        this.userService = userService;
        this.jwt = jwt;
        this.config = config;
        this.http = http;
        this.prisma = prisma;
    }
    async login(data) {
        const user = (await this.userService.findUser({ username: data.username }))
            .data;
        if (!user) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'common.INCORRECT_CREDENTIALS');
        }
        else if (user.deletedDate) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.NOT_EXISTED');
        }
        const [accessToken, refreshToken] = await Promise.all([
            this.signToken(user.id, user.username),
            this.signRefreshToken(user.id, user.username),
        ]);
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'auth.LOGIN_SUCCESS', Object.assign(Object.assign({}, user), { accessToken,
            refreshToken }));
    }
    async signToken(userId, username) {
        const payload = { id: userId, username };
        const secret = this.config.getOrThrow('JWT_SECRET');
        const accessToken = await this.jwt.signAsync(payload, {
            expiresIn: this.config.getOrThrow('JWT_ACCESS_TOKEN_EXPIRE'),
            secret: secret,
        });
        return accessToken;
    }
    async signRefreshToken(userId, username) {
        const payload = { id: userId, username };
        const secret = this.config.getOrThrow('JWT_REFRESH_TOKEN_SECRET');
        const refreshToken = await this.jwt.signAsync(payload, {
            expiresIn: this.config.getOrThrow('JWT_REFRESH_TOKEN_EXPIRE'),
            secret: secret,
        });
        const refreshTokenSha1 = crypto_1.default
            .createHash('sha1')
            .update(refreshToken)
            .digest('hex');
        await this.createToken(userId, refreshTokenSha1);
        return refreshToken;
    }
    async createToken(userId, hashedToken) {
        const token = await this.prisma.tokens.findFirst({
            where: {
                userId,
            },
        });
        if (!token) {
            return this.prisma.tokens.create({
                data: {
                    userId,
                    refreshTokenSha1: hashedToken,
                },
            });
        }
        return await this.prisma.tokens.update({
            where: {
                userId,
            },
            data: {
                userId,
                refreshTokenSha1: hashedToken,
            },
        });
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.Services.USERS)),
    __metadata("design:paramtypes", [typeof (_a = typeof user_1.IUserService !== "undefined" && user_1.IUserService) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _d : Object, typeof (_e = typeof prisma_1.PrismaServiceAuth !== "undefined" && prisma_1.PrismaServiceAuth) === "function" ? _e : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/chat/auth/auth.ts":
/*!********************************!*\
  !*** ./apps/chat/auth/auth.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/auth/dtos/CreateUser.dto.ts":
/*!***********************************************!*\
  !*** ./apps/chat/auth/dtos/CreateUser.dto.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(3),
    (0, class_validator_1.MaxLength)(16),
    __metadata("design:type", String)
], CreateUserDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(32),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(2),
    (0, class_validator_1.MaxLength)(32),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.MinLength)(8),
    (0, class_validator_1.MaxLength)(32),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./apps/chat/conversations/src/conversations.controller.ts":
/*!*****************************************************************!*\
  !*** ./apps/chat/conversations/src/conversations.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const conversations_1 = __webpack_require__(/*! ./conversations */ "./apps/chat/conversations/src/conversations.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./apps/chat/conversations/src/dto/index.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const user_1 = __webpack_require__(/*! ../../users/interfaces/user */ "./apps/chat/users/interfaces/user.ts");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
let ConversationsController = class ConversationsController {
    constructor(conversationsService, userService, eventEmitter) {
        this.conversationsService = conversationsService;
        this.userService = userService;
        this.eventEmitter = eventEmitter;
    }
    async getCustomers(query) {
        return await this.conversationsService.getConversations(query);
    }
    async getConversationById(query) {
        return await this.conversationsService.getConversationById(query);
    }
    async addConversation(dto) {
        const conversation = await this.conversationsService.addConversation(dto);
        conversation.code === 200 && this.eventEmitter.emit('conversation.create', conversation.data);
        return conversation;
    }
    async checkConversationExists(payload) {
        const { userId, recipientId } = payload;
        const conversation = await this.conversationsService.isCreated(recipientId, userId);
        if (conversation)
            return conversation;
        const recipient = await this.userService.findUser({ id: recipientId });
        if (!recipient)
            throw new common_1.HttpException('Recipient Not Found', common_1.HttpStatus.NOT_FOUND);
        const newConversation = await this.conversationsService.addConversation({
            createdBy: userId,
            username: recipient.username,
            messages: [
                {
                    createdBy: userId,
                    authorId: userId,
                    content: 'hello',
                },
            ],
        });
        this.eventEmitter.emit('conversation.create', newConversation);
        return newConversation;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_conversations' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "getCustomers", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_conversation_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "getConversationById", null);
__decorate([
    (0, microservices_1.MessagePattern)('add_conversation'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, microservices_1.Payload)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.ConversationDto !== "undefined" && dto_1.ConversationDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "addConversation", null);
__decorate([
    (0, microservices_1.MessagePattern)('recipient_exist'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "checkConversationExists", null);
ConversationsController = __decorate([
    (0, common_1.Controller)('conversations'),
    __param(0, (0, common_1.Inject)(constants_1.Services.CONVERSATIONS)),
    __param(1, (0, common_1.Inject)(constants_1.Services.USERS)),
    __metadata("design:paramtypes", [typeof (_a = typeof conversations_1.IConversationsService !== "undefined" && conversations_1.IConversationsService) === "function" ? _a : Object, typeof (_b = typeof user_1.IUserService !== "undefined" && user_1.IUserService) === "function" ? _b : Object, typeof (_c = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _c : Object])
], ConversationsController);
exports.ConversationsController = ConversationsController;


/***/ }),

/***/ "./apps/chat/conversations/src/conversations.module.ts":
/*!*************************************************************!*\
  !*** ./apps/chat/conversations/src/conversations.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const conversations_controller_1 = __webpack_require__(/*! ./conversations.controller */ "./apps/chat/conversations/src/conversations.controller.ts");
const conversations_service_1 = __webpack_require__(/*! ./conversations.service */ "./apps/chat/conversations/src/conversations.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/chat/conversations/src/prisma/prisma.module.ts");
const query_prisma_1 = __webpack_require__(/*! @common/utils/dto/query.prisma */ "./libs/common/utils/dto/query.prisma.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const users_module_1 = __webpack_require__(/*! @apps/chat/users/users.module */ "./apps/chat/users/users.module.ts");
let ConversationsModule = class ConversationsModule {
};
ConversationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            users_module_1.UsersModule,
            prisma_module_1.PrismaModuleConversations,
        ],
        controllers: [conversations_controller_1.ConversationsController],
        providers: [
            query_prisma_1.PrismaQuery,
            http_1.HTTP,
            {
                provide: constants_1.Services.CONVERSATIONS,
                useClass: conversations_service_1.ConversationsService,
            },
        ],
        exports: [
            {
                provide: constants_1.Services.CONVERSATIONS,
                useClass: conversations_service_1.ConversationsService,
            },
        ],
    })
], ConversationsModule);
exports.ConversationsModule = ConversationsModule;


/***/ }),

/***/ "./apps/chat/conversations/src/conversations.service.ts":
/*!**************************************************************!*\
  !*** ./apps/chat/conversations/src/conversations.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationsService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/chat/conversations/src/prisma/prisma.service.ts");
const requets_util_1 = __webpack_require__(/*! @common/utils/requets.util */ "./libs/common/utils/requets.util.ts");
const utils_1 = __webpack_require__(/*! @common/utils */ "./libs/common/utils/index.ts");
const lodash_1 = __webpack_require__(/*! lodash */ "lodash");
let ConversationsService = class ConversationsService extends requets_util_1.RESTfulService {
    constructor(prisma, prismaquery, http) {
        super();
        this.prisma = prisma;
        this.prismaquery = prismaquery;
        this.http = http;
        this.params = {
            list: {
                filterFields: [],
                searchFields: [],
                orderFields: [],
            },
        };
    }
    getDb() {
        const query = this.prismaquery.where({ deletedDate: null });
        return query;
    }
    async getConversations(query) {
        const pagination = await this.getLists(query);
        const where = {
            OR: [
                { creator: Number(query.userId) },
                { recipient: Number(query.userId) }
            ]
        };
        const [total, results] = await Promise.all([
            this.prisma.conversation.count({
                where
            }),
            this.prisma.conversation.findMany({
                take: pagination.take,
                skip: pagination.skip,
                where,
                orderBy: { lastMessageSentAt: 'desc' },
                include: {
                    lastMessageSent: true,
                    userCreator: true,
                    userRecipient: true,
                    messages: {
                        select: { content: true, authorId: true, conversationId: true, attachments: true }
                    }
                },
            }),
        ]);
        const conversations = this.compactConversationList((0, lodash_1.cloneDeep)(results));
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Get conversations successfully', conversations, total);
    }
    async getConversationById(query) {
        try {
            const { id, userId } = query;
            const isReadable = await this.hasAccess({ id: Number(id), userId: userId });
            if (!isReadable) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'You cannot view this conversation');
            }
            const data = await this.findById(id);
            const conversation = this.compactConversationList((0, lodash_1.cloneDeep)([data]))[0];
            if (!conversation) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The conversation does not existed');
            }
            else if (conversation.deletedDate) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The conversation has been deleted');
            }
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Get the conversation item successfully', conversation);
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Get the conversation item unsuccessfully', error);
        }
    }
    async findById(id) {
        return await this.prisma.conversation.findUnique({
            where: {
                id,
            },
            include: {
                lastMessageSent: true,
                userCreator: true,
                userRecipient: true,
                messages: {
                    select: { content: true, authorId: true, conversationId: true, attachments: true }
                }
            },
        });
    }
    async addConversation(dto) {
        var _a;
        try {
            const recipient = await this.prisma.user.findFirst({
                where: {
                    email: dto.username,
                },
            });
            if (!recipient) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The recipient does not existed', null);
            }
            else if (recipient.deletedDate) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The recipient has been deleted');
            }
            if (dto.createdBy === recipient.id) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Cannot create conversation with yourself', null);
            }
            const isFriends = await this.isFriends(dto.createdBy, recipient.id);
            if (!isFriends) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Friend Not Found', null);
            }
            const isExist = await this.isCreated(dto.createdBy, recipient.id);
            if (isExist) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Conversation already exists', null);
            }
            const conversationData = {
                createdBy: dto.createdBy,
                creator: dto.createdBy,
                recipient: recipient.id,
                lastMessageSentAt: new Date(),
                messages: {
                    create: dto.messages,
                }
            };
            let result = await this.prisma.conversation.create({
                data: conversationData,
                include: { messages: true }
            });
            await this.prisma.conversation_Message.create({
                data: {
                    conversationId: result.id,
                    messageId: (_a = result.messages[0]) === null || _a === void 0 ? void 0 : _a.id
                }
            });
            const data = await this.prisma.conversation.findUnique({
                where: {
                    id: result.id,
                },
                include: {
                    userCreator: {
                        include: {
                            Peer: true,
                            presence: true,
                            UserProfile: true
                        }
                    },
                    userRecipient: true,
                    messages: {
                        select: { content: true, authorId: true, conversationId: true, attachments: true }
                    }
                }
            });
            let conversation = (0, lodash_1.cloneDeep)(data);
            conversation['createdAt'] = conversation['createdDate'];
            conversation['creator'] = this.reduceProps(conversation['userCreator']);
            conversation['recipient'] = this.reduceProps(conversation['userRecipient']);
            delete conversation['createdDate'];
            delete conversation['userCreator'];
            delete conversation['userRecipient'];
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Create the conversation successfully', conversation);
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Create the conversation unsuccessfully', error);
        }
    }
    async isCreated(userId, recipientId) {
        const results = await this.prisma.conversation.findMany({
            where: {
                OR: [
                    {
                        creator: userId,
                        recipient: recipientId,
                    },
                    {
                        creator: recipientId,
                        recipient: userId,
                    }
                ]
            }
        });
        return results.length > 0 ? true : false;
    }
    async hasAccess({ id, userId }) {
        var _a, _b;
        const conversation = await this.findById(id);
        if (!conversation) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The conversation does not existed');
        }
        else if (conversation.deletedDate) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'This conversation has been deleted');
        }
        return (((_a = conversation.userCreator) === null || _a === void 0 ? void 0 : _a.id) === userId || ((_b = conversation.userRecipient) === null || _b === void 0 ? void 0 : _b.id) === userId);
    }
    async isFriends(creator, recipient) {
        const response = await this.prisma.friend.findMany({
            where: {
                OR: [
                    {
                        senderId: creator,
                        receiverId: recipient
                    },
                    {
                        senderId: recipient,
                        receiverId: creator
                    }
                ]
            }
        });
        return response.length > 0 ? true : false;
    }
    compactConversationList(conversations) {
        let list = [];
        conversations.forEach(conversation => {
            var _a, _b;
            conversation['lastMessageSent'] = conversation['lastMessageSent'].pop();
            conversation['creator'] = this.reduceProps(conversation['userCreator']);
            conversation['recipient'] = this.reduceProps(conversation['userRecipient']);
            conversation['creatorPeer'] = (_a = this.reduceProps(conversation['userCreator'])) === null || _a === void 0 ? void 0 : _a.peer;
            conversation['recipientPeer'] = (_b = this.reduceProps(conversation['userRecipient'])) === null || _b === void 0 ? void 0 : _b.peer;
            delete conversation['userCreator'];
            delete conversation['userRecipient'];
            list.push(conversation);
        });
        return list;
    }
    reduceProps(obj) {
        return {
            id: obj.id,
            firstName: obj.firstName,
            lastName: obj.lastName,
            email: obj.email,
            username: obj.username,
            peer: obj === null || obj === void 0 ? void 0 : obj.Peer,
            profile: obj === null || obj === void 0 ? void 0 : obj.UserProfile,
            presence: obj === null || obj === void 0 ? void 0 : obj.presence,
        };
    }
};
ConversationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceConversations !== "undefined" && prisma_service_1.PrismaServiceConversations) === "function" ? _a : Object, typeof (_b = typeof utils_1.PrismaQuery !== "undefined" && utils_1.PrismaQuery) === "function" ? _b : Object, typeof (_c = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _c : Object])
], ConversationsService);
exports.ConversationsService = ConversationsService;


/***/ }),

/***/ "./apps/chat/conversations/src/conversations.ts":
/*!******************************************************!*\
  !*** ./apps/chat/conversations/src/conversations.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/conversations/src/dto/attachment.dto.ts":
/*!***********************************************************!*\
  !*** ./apps/chat/conversations/src/dto/attachment.dto.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttachmentDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const index_1 = __webpack_require__(/*! ./index */ "./apps/chat/conversations/src/dto/index.ts");
class AttachmentDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AttachmentDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AttachmentDto.prototype, "messageId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => index_1.FileAttachedDto),
    __metadata("design:type", Object)
], AttachmentDto.prototype, "attachments", void 0);
exports.AttachmentDto = AttachmentDto;


/***/ }),

/***/ "./apps/chat/conversations/src/dto/conversation.dto.ts":
/*!*************************************************************!*\
  !*** ./apps/chat/conversations/src/dto/conversation.dto.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ConversationDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const index_1 = __webpack_require__(/*! ./index */ "./apps/chat/conversations/src/dto/index.ts");
class ConversationDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], ConversationDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ConversationDto.prototype, "username", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => index_1.MessageDto),
    __metadata("design:type", Object)
], ConversationDto.prototype, "messages", void 0);
exports.ConversationDto = ConversationDto;


/***/ }),

/***/ "./apps/chat/conversations/src/dto/file_attached.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/chat/conversations/src/dto/file_attached.dto.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileAttachedDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class FileAttachedDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FileAttachedDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FileAttachedDto.prototype, "fileName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FileAttachedDto.prototype, "baseUrl", void 0);
exports.FileAttachedDto = FileAttachedDto;


/***/ }),

/***/ "./apps/chat/conversations/src/dto/index.ts":
/*!**************************************************!*\
  !*** ./apps/chat/conversations/src/dto/index.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./attachment.dto */ "./apps/chat/conversations/src/dto/attachment.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./conversation.dto */ "./apps/chat/conversations/src/dto/conversation.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./file_attached.dto */ "./apps/chat/conversations/src/dto/file_attached.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./message.dto */ "./apps/chat/conversations/src/dto/message.dto.ts"), exports);


/***/ }),

/***/ "./apps/chat/conversations/src/dto/message.dto.ts":
/*!********************************************************!*\
  !*** ./apps/chat/conversations/src/dto/message.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const index_1 = __webpack_require__(/*! ./index */ "./apps/chat/conversations/src/dto/index.ts");
class MessageDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MessageDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MessageDto.prototype, "authorId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MessageDto.prototype, "conversationId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MessageDto.prototype, "lastMessageId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => index_1.AttachmentDto),
    __metadata("design:type", Object)
], MessageDto.prototype, "attachments", void 0);
exports.MessageDto = MessageDto;


/***/ }),

/***/ "./apps/chat/conversations/src/prisma/prisma.module.ts":
/*!*************************************************************!*\
  !*** ./apps/chat/conversations/src/prisma/prisma.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleConversations = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/chat/conversations/src/prisma/prisma.service.ts");
let PrismaModuleConversations = class PrismaModuleConversations {
};
PrismaModuleConversations = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceConversations],
        exports: [prisma_service_1.PrismaServiceConversations],
    })
], PrismaModuleConversations);
exports.PrismaModuleConversations = PrismaModuleConversations;


/***/ }),

/***/ "./apps/chat/conversations/src/prisma/prisma.service.ts":
/*!**************************************************************!*\
  !*** ./apps/chat/conversations/src/prisma/prisma.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceConversations = void 0;
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let PrismaServiceConversations = class PrismaServiceConversations extends mysql_1.PrismaClient {
    constructor(config) {
        super({
            datasources: {
                db: {
                    url: config.getOrThrow('MYSQL_DATABASE_URL'),
                },
            },
        });
    }
    cleanDatabase() {
        return this.$transaction([this.conversation.deleteMany()]);
    }
};
PrismaServiceConversations = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], PrismaServiceConversations);
exports.PrismaServiceConversations = PrismaServiceConversations;


/***/ }),

/***/ "./apps/chat/events/events.module.ts":
/*!*******************************************!*\
  !*** ./apps/chat/events/events.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EventsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const gateway_module_1 = __webpack_require__(/*! ../gateway/gateway.module */ "./apps/chat/gateway/gateway.module.ts");
const friend_requests_events_1 = __webpack_require__(/*! ./friend-requests.events */ "./apps/chat/events/friend-requests.events.ts");
const friends_events_1 = __webpack_require__(/*! ./friends.events */ "./apps/chat/events/friends.events.ts");
let EventsModule = class EventsModule {
};
EventsModule = __decorate([
    (0, common_1.Module)({
        imports: [gateway_module_1.GatewayModule],
        providers: [friend_requests_events_1.FriendRequestsEvents, friends_events_1.FriendEvents],
    })
], EventsModule);
exports.EventsModule = EventsModule;


/***/ }),

/***/ "./apps/chat/events/friend-requests.events.ts":
/*!****************************************************!*\
  !*** ./apps/chat/events/friend-requests.events.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendRequestsEvents = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const gateway_1 = __webpack_require__(/*! ../gateway/gateway */ "./apps/chat/gateway/gateway.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const typeorm_1 = __webpack_require__(/*! ../utils/typeorm */ "./apps/chat/utils/typeorm/index.ts");
const types_1 = __webpack_require__(/*! ../utils/types */ "./apps/chat/utils/types.ts");
let FriendRequestsEvents = class FriendRequestsEvents {
    constructor(gateway) {
        this.gateway = gateway;
    }
    friendRequestCreate(payload) {
        console.log('friendrequest.create');
        const receiverSocket = this.gateway.sessions.getUserSocket(payload.receiver.id);
        receiverSocket && receiverSocket.emit('onFriendRequestReceived', payload);
    }
    handleFriendRequestCancel(payload) {
        console.log('friendrequest.cancel');
        const receiverSocket = this.gateway.sessions.getUserSocket(payload.receiver.id);
        receiverSocket && receiverSocket.emit('onFriendRequestCancelled', payload);
    }
    handleFriendRequestAccepted(payload) {
        console.log(constants_1.ServerEvents.FRIEND_REQUEST_ACCEPTED);
        const senderSocket = this.gateway.sessions.getUserSocket(payload.friendRequest.sender.id);
        senderSocket &&
            senderSocket.emit(constants_1.WebsocketEvents.FRIEND_REQUEST_ACCEPTED, payload);
    }
    handleFriendRequestRejected(payload) {
        console.log(constants_1.ServerEvents.FRIEND_REQUEST_REJECTED);
        const senderSocket = this.gateway.sessions.getUserSocket(payload.sender.id);
        senderSocket &&
            senderSocket.emit(constants_1.WebsocketEvents.FRIEND_REQUEST_REJECTED, payload);
    }
};
__decorate([
    (0, event_emitter_1.OnEvent)('friendrequest.create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof typeorm_1.FriendRequest !== "undefined" && typeorm_1.FriendRequest) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FriendRequestsEvents.prototype, "friendRequestCreate", null);
__decorate([
    (0, event_emitter_1.OnEvent)('friendrequest.cancel'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.FriendRequest !== "undefined" && typeorm_1.FriendRequest) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], FriendRequestsEvents.prototype, "handleFriendRequestCancel", null);
__decorate([
    (0, event_emitter_1.OnEvent)(constants_1.ServerEvents.FRIEND_REQUEST_ACCEPTED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof types_1.AcceptFriendRequestResponse !== "undefined" && types_1.AcceptFriendRequestResponse) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], FriendRequestsEvents.prototype, "handleFriendRequestAccepted", null);
__decorate([
    (0, event_emitter_1.OnEvent)(constants_1.ServerEvents.FRIEND_REQUEST_REJECTED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof typeorm_1.FriendRequest !== "undefined" && typeorm_1.FriendRequest) === "function" ? _e : Object]),
    __metadata("design:returntype", void 0)
], FriendRequestsEvents.prototype, "handleFriendRequestRejected", null);
FriendRequestsEvents = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof gateway_1.MessagingGateway !== "undefined" && gateway_1.MessagingGateway) === "function" ? _a : Object])
], FriendRequestsEvents);
exports.FriendRequestsEvents = FriendRequestsEvents;


/***/ }),

/***/ "./apps/chat/events/friends.events.ts":
/*!********************************************!*\
  !*** ./apps/chat/events/friends.events.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendEvents = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const gateway_1 = __webpack_require__(/*! ../gateway/gateway */ "./apps/chat/gateway/gateway.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const types_1 = __webpack_require__(/*! ../utils/types */ "./apps/chat/utils/types.ts");
let FriendEvents = class FriendEvents {
    constructor(gateway) {
        this.gateway = gateway;
    }
    handleFriendRemoved({ userId, friend }) {
        var _a;
        const { sender, receiver } = friend;
        console.log(constants_1.ServerEvents.FRIEND_REMOVED);
        const socket = this.gateway.sessions.getUserSocket(receiver.id === userId ? sender.id : receiver.id);
        console.log(`Emitting Event for ${(_a = socket === null || socket === void 0 ? void 0 : socket.user) === null || _a === void 0 ? void 0 : _a.username}`);
        socket === null || socket === void 0 ? void 0 : socket.emit('onFriendRemoved', friend);
    }
};
__decorate([
    (0, event_emitter_1.OnEvent)(constants_1.ServerEvents.FRIEND_REMOVED),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof types_1.RemoveFriendEventPayload !== "undefined" && types_1.RemoveFriendEventPayload) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FriendEvents.prototype, "handleFriendRemoved", null);
FriendEvents = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof gateway_1.MessagingGateway !== "undefined" && gateway_1.MessagingGateway) === "function" ? _a : Object])
], FriendEvents);
exports.FriendEvents = FriendEvents;


/***/ }),

/***/ "./apps/chat/exists/exists.controller.ts":
/*!***********************************************!*\
  !*** ./apps/chat/exists/exists.controller.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExistsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const conversations_1 = __webpack_require__(/*! ../conversations/src/conversations */ "./apps/chat/conversations/src/conversations.ts");
const user_1 = __webpack_require__(/*! ../users/interfaces/user */ "./apps/chat/users/interfaces/user.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
let ExistsController = class ExistsController {
    constructor(conversationsService, userService, events) {
        this.conversationsService = conversationsService;
        this.userService = userService;
        this.events = events;
    }
    async checkConversationExists(payload) {
        const { userId, recipientId } = payload;
        const conversation = await this.conversationsService.isCreated(recipientId, userId);
        if (conversation)
            return conversation;
        const recipient = await this.userService.findUser({ id: recipientId });
        if (!recipient)
            throw new common_1.HttpException('Recipient Not Found', common_1.HttpStatus.NOT_FOUND);
        const newConversation = await this.conversationsService.addConversation({
            createdBy: userId,
            username: recipient.username,
            messages: [
                {
                    createdBy: userId,
                    authorId: userId,
                    content: 'hello',
                },
            ],
        });
        this.events.emit('conversation.create', newConversation);
        return newConversation;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('recipient_exist'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], ExistsController.prototype, "checkConversationExists", null);
ExistsController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.EXISTS),
    __param(0, (0, common_1.Inject)(constants_1.Services.CONVERSATIONS)),
    __param(1, (0, common_1.Inject)(constants_1.Services.USERS)),
    __metadata("design:paramtypes", [typeof (_a = typeof conversations_1.IConversationsService !== "undefined" && conversations_1.IConversationsService) === "function" ? _a : Object, typeof (_b = typeof user_1.IUserService !== "undefined" && user_1.IUserService) === "function" ? _b : Object, typeof (_c = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _c : Object])
], ExistsController);
exports.ExistsController = ExistsController;


/***/ }),

/***/ "./apps/chat/exists/exists.module.ts":
/*!*******************************************!*\
  !*** ./apps/chat/exists/exists.module.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ExistsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const conversations_module_1 = __webpack_require__(/*! ../conversations/src/conversations.module */ "./apps/chat/conversations/src/conversations.module.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/chat/users/users.module.ts");
const exists_controller_1 = __webpack_require__(/*! ./exists.controller */ "./apps/chat/exists/exists.controller.ts");
let ExistsModule = class ExistsModule {
};
ExistsModule = __decorate([
    (0, common_1.Module)({
        imports: [conversations_module_1.ConversationsModule, users_module_1.UsersModule],
        controllers: [exists_controller_1.ExistsController],
        providers: [],
    })
], ExistsModule);
exports.ExistsModule = ExistsModule;


/***/ }),

/***/ "./apps/chat/friend-requests/dtos/CreateFriend.dto.ts":
/*!************************************************************!*\
  !*** ./apps/chat/friend-requests/dtos/CreateFriend.dto.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateFriendDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateFriendDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateFriendDto.prototype, "username", void 0);
exports.CreateFriendDto = CreateFriendDto;


/***/ }),

/***/ "./apps/chat/friend-requests/friend-requests.controller.ts":
/*!*****************************************************************!*\
  !*** ./apps/chat/friend-requests/friend-requests.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendRequestController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const typeorm_1 = __webpack_require__(/*! ../utils/typeorm */ "./apps/chat/utils/typeorm/index.ts");
const CreateFriend_dto_1 = __webpack_require__(/*! ./dtos/CreateFriend.dto */ "./apps/chat/friend-requests/dtos/CreateFriend.dto.ts");
const friend_requests_1 = __webpack_require__(/*! ./friend-requests */ "./apps/chat/friend-requests/friend-requests.ts");
let FriendRequestController = class FriendRequestController {
    constructor(friendRequestService, event) {
        this.friendRequestService = friendRequestService;
        this.event = event;
    }
    async createGroupMessage(user) {
        return this.friendRequestService.getFriendRequests(user.id);
    }
    async createFriendRequest(user, { username }) {
        const params = { user, username };
        const friendRequest = await this.friendRequestService.create(params);
        this.event.emit(constants_1.ServerEvents.FRIEND_REQUEST_CREATED, friendRequest);
        return friendRequest;
    }
    async acceptFriendRequest(dto) {
        const response = await this.friendRequestService.accept(dto);
        this.event.emit(constants_1.ServerEvents.FRIEND_REQUEST_ACCEPTED, response);
        return response;
    }
    async cancelFriendRequest(dto) {
        const response = await this.friendRequestService.cancel(dto);
        this.event.emit(constants_1.ServerEvents.FRIEND_REQUEST_CANCELLED, response);
        return response;
    }
    async rejectFriendRequest(dto) {
        const response = await this.friendRequestService.reject(dto);
        this.event.emit(constants_1.ServerEvents.FRIEND_REQUEST_REJECTED, response);
        return response;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_friend_requests'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], FriendRequestController.prototype, "createGroupMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)('create_friend_request'),
    __param(0, (0, common_1.Body)('user')),
    __param(1, (0, common_1.Body)('dto')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _d : Object, typeof (_e = typeof CreateFriend_dto_1.CreateFriendDto !== "undefined" && CreateFriend_dto_1.CreateFriendDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], FriendRequestController.prototype, "createFriendRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('accept_friend_request'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FriendRequestController.prototype, "acceptFriendRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('cancel_friend_request'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FriendRequestController.prototype, "cancelFriendRequest", null);
__decorate([
    (0, microservices_1.MessagePattern)('reject_friend_request'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FriendRequestController.prototype, "rejectFriendRequest", null);
FriendRequestController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.FRIEND_REQUESTS),
    __param(0, (0, common_1.Inject)(constants_1.Services.FRIENDS_REQUESTS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof friend_requests_1.IFriendRequestService !== "undefined" && friend_requests_1.IFriendRequestService) === "function" ? _a : Object, typeof (_b = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _b : Object])
], FriendRequestController);
exports.FriendRequestController = FriendRequestController;


/***/ }),

/***/ "./apps/chat/friend-requests/friend-requests.module.ts":
/*!*************************************************************!*\
  !*** ./apps/chat/friend-requests/friend-requests.module.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendRequestsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const friends_module_1 = __webpack_require__(/*! ../friends/friends.module */ "./apps/chat/friends/friends.module.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/chat/users/users.module.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const friend_requests_controller_1 = __webpack_require__(/*! ./friend-requests.controller */ "./apps/chat/friend-requests/friend-requests.controller.ts");
const friend_requests_service_1 = __webpack_require__(/*! ./friend-requests.service */ "./apps/chat/friend-requests/friend-requests.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/chat/friend-requests/prisma/prisma.module.ts");
let FriendRequestsModule = class FriendRequestsModule {
};
FriendRequestsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            users_module_1.UsersModule,
            friends_module_1.FriendsModule,
            prisma_module_1.PrismaModuleFriendRequests,
        ],
        controllers: [friend_requests_controller_1.FriendRequestController],
        providers: [
            {
                provide: constants_1.Services.FRIENDS_REQUESTS_SERVICE,
                useClass: friend_requests_service_1.FriendRequestService,
            },
        ],
    })
], FriendRequestsModule);
exports.FriendRequestsModule = FriendRequestsModule;


/***/ }),

/***/ "./apps/chat/friend-requests/friend-requests.service.ts":
/*!**************************************************************!*\
  !*** ./apps/chat/friend-requests/friend-requests.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendRequestService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const friends_1 = __webpack_require__(/*! ../friends/friends */ "./apps/chat/friends/friends.ts");
const user_1 = __webpack_require__(/*! ../users/interfaces/user */ "./apps/chat/users/interfaces/user.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/chat/friend-requests/prisma/prisma.service.ts");
let FriendRequestService = class FriendRequestService extends http_1.HTTP {
    constructor(userService, friendsService, prisma) {
        super();
        this.userService = userService;
        this.friendsService = friendsService;
        this.prisma = prisma;
    }
    async getFriendRequests(id) {
        try {
            const status = 'pending';
            const friendRequest = await this.prisma.friendRequest.findMany({
                where: {
                    OR: [
                        {
                            senderId: id,
                            status: status
                        },
                        {
                            receiverId: id,
                            status: status
                        }
                    ]
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'friendRequests.GET_LIST_SUCCESS', friendRequest);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async cancel({ id, userId }) {
        try {
            const friendRequest = await this.prisma.friendRequest.findFirst({
                where: {
                    id: id,
                }
            });
            if (!friendRequest || friendRequest.senderId !== userId) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friendRequests.NOT_FOUND');
            }
            await this.prisma.friendRequest.deleteMany({
                where: {
                    id: id,
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'friendRequests.DELETE_SUCCESS');
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async create({ user: sender, username }) {
        try {
            const receiver = await this.userService.findUser({ username });
            if (!receiver) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friendRequests.NOT_FOUND');
            }
            const exists = await this.isPending(sender.id, receiver.id);
            if (exists) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friendRequests.IS_PENDING');
            }
            if (receiver.id === sender.id) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friendRequests.CANT_ADD_YOURSELF');
            }
            const isFriends = await this.friendsService.isFriends(sender.id, receiver.id);
            if (isFriends) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friendRequests.ALREADY_FRIEND');
            }
            const friend = await this.prisma.friendRequest.create({
                data: {
                    senderId: sender.id,
                    receiverId: receiver.id,
                    status: 'pending'
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'friendRequests.CREATE_SUCCESS', friend);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async accept({ id, userId }) {
        try {
            const friendRequest = await this.findById(id);
            if (!friendRequest || friendRequest.receiverId !== userId) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friendRequests.NOT_FOUND');
            }
            if (friendRequest.status === 'accepted') {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friendRequests.ACCEPTED');
            }
            const updatedFriendRequest = await this.prisma.friendRequest.updateMany({
                where: {
                    id: id,
                },
                data: {
                    status: 'accepted',
                }
            });
            const newFriend = await this.prisma.friend.create({
                data: {
                    senderId: friendRequest.senderId,
                    receiverId: friendRequest.receiverId
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'friendRequests.ACCEPT_SUCCESS', newFriend);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async reject({ id, userId }) {
        try {
            const friendRequest = await this.findById(id);
            if (!friendRequest || friendRequest.receiver.id !== userId) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friendRequests.NOT_FOUND');
            }
            if (friendRequest.status === 'accepted') {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friendRequests.ACCEPTED');
            }
            const updateRequest = await this.prisma.friendRequest.updateMany({
                where: {
                    id: id,
                },
                data: {
                    status: 'rejected',
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'friendRequests.REJECT_SUCCESS', updateRequest);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async isPending(userOneId, userTwoId) {
        try {
            return await this.prisma.friendRequest.findFirst({
                where: {
                    OR: [
                        {
                            senderId: userOneId,
                            receiverId: userTwoId,
                            status: 'pending',
                        },
                        {
                            senderId: userTwoId,
                            receiverId: userOneId,
                            status: 'pending',
                        }
                    ],
                }
            });
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async findById(id) {
        try {
            return this.prisma.friendRequest.findFirst({
                where: {
                    id: id,
                }
            });
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
};
FriendRequestService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.Services.USERS)),
    __param(1, (0, common_1.Inject)(constants_1.Services.FRIENDS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof user_1.IUserService !== "undefined" && user_1.IUserService) === "function" ? _a : Object, typeof (_b = typeof friends_1.IFriendsService !== "undefined" && friends_1.IFriendsService) === "function" ? _b : Object, typeof (_c = typeof prisma_service_1.PrismaServiceFriendReuests !== "undefined" && prisma_service_1.PrismaServiceFriendReuests) === "function" ? _c : Object])
], FriendRequestService);
exports.FriendRequestService = FriendRequestService;


/***/ }),

/***/ "./apps/chat/friend-requests/friend-requests.ts":
/*!******************************************************!*\
  !*** ./apps/chat/friend-requests/friend-requests.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/friend-requests/prisma/prisma.module.ts":
/*!***********************************************************!*\
  !*** ./apps/chat/friend-requests/prisma/prisma.module.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleFriendRequests = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/chat/friend-requests/prisma/prisma.service.ts");
let PrismaModuleFriendRequests = class PrismaModuleFriendRequests {
};
PrismaModuleFriendRequests = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceFriendReuests],
        exports: [prisma_service_1.PrismaServiceFriendReuests],
    })
], PrismaModuleFriendRequests);
exports.PrismaModuleFriendRequests = PrismaModuleFriendRequests;


/***/ }),

/***/ "./apps/chat/friend-requests/prisma/prisma.service.ts":
/*!************************************************************!*\
  !*** ./apps/chat/friend-requests/prisma/prisma.service.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceFriendReuests = void 0;
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PrismaServiceFriendReuests = class PrismaServiceFriendReuests extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([]);
    }
};
PrismaServiceFriendReuests = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceFriendReuests);
exports.PrismaServiceFriendReuests = PrismaServiceFriendReuests;


/***/ }),

/***/ "./apps/chat/friends/friends.controller.ts":
/*!*************************************************!*\
  !*** ./apps/chat/friends/friends.controller.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const friends_1 = __webpack_require__(/*! ./friends */ "./apps/chat/friends/friends.ts");
let FriendsController = class FriendsController {
    constructor(friendsService, event) {
        this.friendsService = friendsService;
        this.event = event;
    }
    async getFriends(user) {
        console.log('Fetching Friends');
        return this.friendsService.getFriends(user.id);
    }
    async deleteFriend(dto) {
        console.log('Getting delete friend');
        const friend = await this.friendsService.deleteFriend(dto);
        this.event.emit(constants_1.ServerEvents.FRIEND_REMOVED, { friend, userId: dto.userId });
        return friend;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get-friends'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "getFriends", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete-friend'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], FriendsController.prototype, "deleteFriend", null);
FriendsController = __decorate([
    (0, throttler_1.SkipThrottle)(),
    (0, common_1.Controller)(constants_1.Routes.FRIENDS),
    __param(0, (0, common_1.Inject)(constants_1.Services.FRIENDS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof friends_1.IFriendsService !== "undefined" && friends_1.IFriendsService) === "function" ? _a : Object, typeof (_b = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _b : Object])
], FriendsController);
exports.FriendsController = FriendsController;


/***/ }),

/***/ "./apps/chat/friends/friends.module.ts":
/*!*********************************************!*\
  !*** ./apps/chat/friends/friends.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const friends_controller_1 = __webpack_require__(/*! ./friends.controller */ "./apps/chat/friends/friends.controller.ts");
const friends_service_1 = __webpack_require__(/*! ./friends.service */ "./apps/chat/friends/friends.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/chat/friends/prisma/prisma.module.ts");
let FriendsModule = class FriendsModule {
};
FriendsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModuleFriends
        ],
        providers: [
            {
                provide: constants_1.Services.FRIENDS_SERVICE,
                useClass: friends_service_1.FriendsService,
            },
        ],
        controllers: [friends_controller_1.FriendsController],
        exports: [
            {
                provide: constants_1.Services.FRIENDS_SERVICE,
                useClass: friends_service_1.FriendsService,
            },
        ],
    })
], FriendsModule);
exports.FriendsModule = FriendsModule;


/***/ }),

/***/ "./apps/chat/friends/friends.service.ts":
/*!**********************************************!*\
  !*** ./apps/chat/friends/friends.service.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendsService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/chat/friends/prisma/prisma.service.ts");
let FriendsService = class FriendsService extends http_1.HTTP {
    constructor(prisma) {
        super();
        this.prisma = prisma;
    }
    async getFriends(id) {
        try {
            const response = await this.prisma.friend.findMany({
                where: {
                    OR: [
                        {
                            senderId: id,
                        },
                        {
                            receiverId: id
                        }
                    ]
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'friends.GET_LIST_SUCCESS', response, 1);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async findFriendById(id) {
        try {
            const response = await this.prisma.friend.findFirst({
                where: {
                    id: id,
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'friends.GET_SUCCESS', response, 1);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async deleteFriend({ id, userId }) {
        try {
            const friend = await this.findFriendById(id);
            if (!friend) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friends.NOT_FOUND');
            }
            if (friend.receiverId !== userId && friend.senderId !== userId) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'friends.NOT_FRIEND');
            }
            await this.prisma.friend.delete({
                where: {
                    id: id,
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'friends.DELETE_SUCCESS');
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async isFriends(userOneId, userTwoId) {
        try {
            const response = await this.prisma.friend.findMany({
                where: {
                    OR: [
                        {
                            senderId: userOneId,
                            receiverId: userTwoId
                        },
                        {
                            senderId: userTwoId,
                            receiverId: userOneId
                        }
                    ]
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'friends.IS_FRIEND', response, 1);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
};
FriendsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceFriends !== "undefined" && prisma_service_1.PrismaServiceFriends) === "function" ? _a : Object])
], FriendsService);
exports.FriendsService = FriendsService;


/***/ }),

/***/ "./apps/chat/friends/friends.ts":
/*!**************************************!*\
  !*** ./apps/chat/friends/friends.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/friends/prisma/prisma.module.ts":
/*!***************************************************!*\
  !*** ./apps/chat/friends/prisma/prisma.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleFriends = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/chat/friends/prisma/prisma.service.ts");
let PrismaModuleFriends = class PrismaModuleFriends {
};
PrismaModuleFriends = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceFriends],
        exports: [prisma_service_1.PrismaServiceFriends],
    })
], PrismaModuleFriends);
exports.PrismaModuleFriends = PrismaModuleFriends;


/***/ }),

/***/ "./apps/chat/friends/prisma/prisma.service.ts":
/*!****************************************************!*\
  !*** ./apps/chat/friends/prisma/prisma.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceFriends = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
let PrismaServiceFriends = class PrismaServiceFriends extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([]);
    }
};
PrismaServiceFriends = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceFriends);
exports.PrismaServiceFriends = PrismaServiceFriends;


/***/ }),

/***/ "./apps/chat/gateway/dtos/CreateCallDto.ts":
/*!*************************************************!*\
  !*** ./apps/chat/gateway/dtos/CreateCallDto.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateCallDto = void 0;
class CreateCallDto {
}
exports.CreateCallDto = CreateCallDto;


/***/ }),

/***/ "./apps/chat/gateway/gateway.module.ts":
/*!*********************************************!*\
  !*** ./apps/chat/gateway/gateway.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewayModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const conversations_module_1 = __webpack_require__(/*! ../conversations/src/conversations.module */ "./apps/chat/conversations/src/conversations.module.ts");
const friends_module_1 = __webpack_require__(/*! ../friends/friends.module */ "./apps/chat/friends/friends.module.ts");
const group_module_1 = __webpack_require__(/*! ../groups/group.module */ "./apps/chat/groups/group.module.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const gateway_1 = __webpack_require__(/*! ./gateway */ "./apps/chat/gateway/gateway.ts");
const gateway_session_1 = __webpack_require__(/*! ./gateway.session */ "./apps/chat/gateway/gateway.session.ts");
let GatewayModule = class GatewayModule {
};
GatewayModule = __decorate([
    (0, common_1.Module)({
        imports: [conversations_module_1.ConversationsModule, group_module_1.GroupModule, friends_module_1.FriendsModule],
        providers: [
            gateway_1.MessagingGateway,
            {
                provide: constants_1.Services.GATEWAY_SESSION_MANAGER,
                useClass: gateway_session_1.GatewaySessionManager,
            },
            {
                provide: constants_1.Services.FRIENDS_SERVICE,
                useClass: gateway_session_1.GatewaySessionManager,
            },
        ],
        exports: [
            gateway_1.MessagingGateway,
            {
                provide: constants_1.Services.GATEWAY_SESSION_MANAGER,
                useClass: gateway_session_1.GatewaySessionManager,
            },
            {
                provide: constants_1.Services.FRIENDS_SERVICE,
                useClass: gateway_session_1.GatewaySessionManager,
            },
        ],
    })
], GatewayModule);
exports.GatewayModule = GatewayModule;


/***/ }),

/***/ "./apps/chat/gateway/gateway.session.ts":
/*!**********************************************!*\
  !*** ./apps/chat/gateway/gateway.session.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GatewaySessionManager = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let GatewaySessionManager = class GatewaySessionManager {
    constructor() {
        this.sessions = new Map();
    }
    getUserSocket(id) {
        return this.sessions.get(id);
    }
    setUserSocket(userId, socket) {
        this.sessions.set(userId, socket);
    }
    removeUserSocket(userId) {
        this.sessions.delete(userId);
    }
    getSockets() {
        return this.sessions;
    }
};
GatewaySessionManager = __decorate([
    (0, common_1.Injectable)()
], GatewaySessionManager);
exports.GatewaySessionManager = GatewaySessionManager;


/***/ }),

/***/ "./apps/chat/gateway/gateway.ts":
/*!**************************************!*\
  !*** ./apps/chat/gateway/gateway.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _0, _1, _2, _3, _4, _5, _6, _7, _8;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagingGateway = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const websockets_1 = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
const socket_io_1 = __webpack_require__(/*! socket.io */ "socket.io");
const conversations_1 = __webpack_require__(/*! ../conversations/src/conversations */ "./apps/chat/conversations/src/conversations.ts");
const friends_1 = __webpack_require__(/*! ../friends/friends */ "./apps/chat/friends/friends.ts");
const group_1 = __webpack_require__(/*! ../groups/interfaces/group */ "./apps/chat/groups/interfaces/group.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const interfaces_1 = __webpack_require__(/*! ../utils/interfaces */ "./apps/chat/utils/interfaces.ts");
const typeorm_1 = __webpack_require__(/*! ../utils/typeorm */ "./apps/chat/utils/typeorm/index.ts");
const types_1 = __webpack_require__(/*! ../utils/types */ "./apps/chat/utils/types.ts");
const CreateCallDto_1 = __webpack_require__(/*! ./dtos/CreateCallDto */ "./apps/chat/gateway/dtos/CreateCallDto.ts");
const gateway_session_1 = __webpack_require__(/*! ./gateway.session */ "./apps/chat/gateway/gateway.session.ts");
let MessagingGateway = class MessagingGateway {
    constructor(sessions, conversationService, groupsService, friendsService) {
        this.sessions = sessions;
        this.conversationService = conversationService;
        this.groupsService = groupsService;
        this.friendsService = friendsService;
    }
    handleConnection(socket, ...args) {
        console.log('Incoming Connection');
        this.sessions.setUserSocket(socket.user.id, socket);
        socket.emit('connected', {});
    }
    handleDisconnect(socket) {
        console.log('handleDisconnect');
        console.log(`${socket.user.username} disconnected.`);
        this.sessions.removeUserSocket(socket.user.id);
    }
    async handleGetOnlineGroupUsers(data, socket) {
        const group = await this.groupsService.findGroupById(parseInt(data.groupId));
        if (!group)
            return;
        const onlineUsers = [];
        const offlineUsers = [];
        group.users.forEach(user => {
            const socket = this.sessions.getUserSocket(user.id);
            socket ? onlineUsers.push(user) : offlineUsers.push(user);
        });
        socket.emit('onlineGroupUsersReceived', { onlineUsers, offlineUsers });
    }
    handleCreateMessage(data) {
        console.log('Create Message');
    }
    onConversationJoin(data, client) {
        var _a;
        console.log(`${(_a = client.user) === null || _a === void 0 ? void 0 : _a.id} joined a Conversation of ID: ${data.conversationId}`);
        client.join(`conversation-${data.conversationId}`);
        console.log(client.rooms);
        client.to(`conversation-${data.conversationId}`).emit('userJoin');
    }
    onConversationLeave(data, client) {
        console.log('onConversationLeave');
        client.leave(`conversation-${data.conversationId}`);
        console.log(client.rooms);
        client.to(`conversation-${data.conversationId}`).emit('userLeave');
    }
    onGroupJoin(data, client) {
        console.log('onGroupJoin');
        client.join(`group-${data.groupId}`);
        console.log(client.rooms);
        client.to(`group-${data.groupId}`).emit('userGroupJoin');
    }
    onGroupLeave(data, client) {
        console.log('onGroupLeave');
        client.leave(`group-${data.groupId}`);
        console.log(client.rooms);
        client.to(`group-${data.groupId}`).emit('userGroupLeave');
    }
    onTypingStart(data, client) {
        console.log('onTypingStart');
        console.log(data.conversationId);
        console.log(client.rooms);
        client.to(`conversation-${data.conversationId}`).emit('onTypingStart');
    }
    onTypingStop(data, client) {
        console.log('onTypingStop');
        console.log(data.conversationId);
        console.log(client.rooms);
        client.to(`conversation-${data.conversationId}`).emit('onTypingStop');
    }
    handleMessageCreateEvent(payload) {
        console.log('Inside message.create');
        const { author, conversation: { creator, recipient }, } = payload.message;
        const authorSocket = this.sessions.getUserSocket(author.id);
        const recipientSocket = author.id === creator.id
            ? this.sessions.getUserSocket(recipient.id)
            : this.sessions.getUserSocket(creator.id);
        if (authorSocket)
            authorSocket.emit('onMessage', payload);
        if (recipientSocket)
            recipientSocket.emit('onMessage', payload);
    }
    handleConversationCreateEvent(payload) {
        console.log('Inside conversation.create');
        const recipientSocket = this.sessions.getUserSocket(payload.recipient.id);
        if (recipientSocket)
            recipientSocket.emit('onConversation', payload);
    }
    async handleMessageDelete(payload) {
        console.log('Inside message.delete');
        console.log(payload);
        const conversation = await this.conversationService.findById(payload.conversationId);
        if (!conversation)
            return;
        const { creator, recipient } = conversation;
        const recipientSocket = creator.id === payload.userId
            ? this.sessions.getUserSocket(recipient.id)
            : this.sessions.getUserSocket(creator.id);
        if (recipientSocket)
            recipientSocket.emit('onMessageDelete', payload);
    }
    async handleMessageUpdate(message) {
        console.log(message);
        const { author, conversation: { creator, recipient }, } = message;
        console.log(message);
        const recipientSocket = author.id === creator.id
            ? this.sessions.getUserSocket(recipient.id)
            : this.sessions.getUserSocket(creator.id);
        if (recipientSocket)
            recipientSocket.emit('onMessageUpdate', message);
    }
    async handleGroupMessageCreate(payload) {
        const { id } = payload.group;
        console.log('Inside group.message.create');
        this.server.to(`group-${id}`).emit('onGroupMessage', payload);
    }
    handleGroupCreate(payload) {
        console.log('group.create event');
        payload.users.forEach(user => {
            const socket = this.sessions.getUserSocket(user.id);
            socket && socket.emit('onGroupCreate', payload);
        });
    }
    handleGroupMessageUpdate(payload) {
        const room = `group-${payload.group.id}`;
        console.log(room);
        this.server.to(room).emit('onGroupMessageUpdate', payload);
    }
    handleGroupUserAdd(payload) {
        const recipientSocket = this.sessions.getUserSocket(payload.user.id);
        console.log('inside group.user.add');
        console.log(`group-${payload.group.id}`);
        this.server
            .to(`group-${payload.group.id}`)
            .emit('onGroupReceivedNewUser', payload);
        recipientSocket && recipientSocket.emit('onGroupUserAdd', payload);
    }
    handleGroupUserRemove(payload) {
        const { group, user } = payload;
        const ROOM_NAME = `group-${payload.group.id}`;
        const removedUserSocket = this.sessions.getUserSocket(payload.user.id);
        console.log(payload);
        console.log('Inside group.user.remove');
        if (removedUserSocket) {
            console.log('Emitting onGroupRemoved');
            removedUserSocket.emit('onGroupRemoved', payload);
            removedUserSocket.leave(ROOM_NAME);
        }
        this.server.to(ROOM_NAME).emit('onGroupRecipientRemoved', payload);
        const onlineUsers = group.users
            .map(user => this.sessions.getUserSocket(user.id) && user)
            .filter(user => user);
    }
    handleGroupOwnerUpdate(payload) {
        const ROOM_NAME = `group-${payload.id}`;
        const newOwnerSocket = this.sessions.getUserSocket(payload.owner.id);
        console.log('Inside group.owner.update');
        const { rooms } = this.server.sockets.adapter;
        console.log(rooms.get(ROOM_NAME));
        const socketsInRoom = rooms.get(ROOM_NAME);
        console.log('Sockets In Room');
        console.log(socketsInRoom);
        console.log(newOwnerSocket);
        this.server.to(ROOM_NAME).emit('onGroupOwnerUpdate', payload);
        if (newOwnerSocket && !socketsInRoom.has(newOwnerSocket.id)) {
            console.log('The new owner is not in the room...');
            newOwnerSocket.emit('onGroupOwnerUpdate', payload);
        }
    }
    handleGroupUserLeave(payload) {
        console.log('inside group.user.leave');
        const ROOM_NAME = `group-${payload.group.id}`;
        const { rooms } = this.server.sockets.adapter;
        const socketsInRoom = rooms.get(ROOM_NAME);
        const leftUserSocket = this.sessions.getUserSocket(payload.userId);
        console.log(socketsInRoom);
        console.log(leftUserSocket);
        if (leftUserSocket && socketsInRoom) {
            console.log('user is online, at least 1 person is in the room');
            if (socketsInRoom.has(leftUserSocket.id)) {
                console.log('User is in room... room set has socket id');
                return this.server
                    .to(ROOM_NAME)
                    .emit('onGroupParticipantLeft', payload);
            }
            else {
                console.log('User is not in room, but someone is there');
                leftUserSocket.emit('onGroupParticipantLeft', payload);
                this.server.to(ROOM_NAME).emit('onGroupParticipantLeft', payload);
                return;
            }
        }
        if (leftUserSocket && !socketsInRoom) {
            console.log('User is online but there are no sockets in the room');
            return leftUserSocket.emit('onGroupParticipantLeft', payload);
        }
    }
    async handleFriendListRetrieve(data, socket) {
        const { user } = socket;
        if (user) {
            console.log('user is authenticated');
            console.log(`fetching ${user.username}'s friends`);
            const friends = await this.friendsService.getFriends(user.id);
            const onlineFriends = friends.filter(friend => this.sessions.getUserSocket(user.id === friend.receiver.id
                ? friend.sender.id
                : friend.receiver.id));
            socket.emit('getOnlineFriends', onlineFriends);
        }
    }
    async handleVideoCall(data, socket) {
        console.log('onVideoCallInitiate');
        const caller = socket.user;
        const receiverSocket = this.sessions.getUserSocket(data.recipientId);
        if (!receiverSocket)
            socket.emit('onUserUnavailable');
        receiverSocket.emit('onVideoCall', Object.assign(Object.assign({}, data), { caller }));
    }
    async handleVideoCallAccepted(data, socket) {
        const callerSocket = this.sessions.getUserSocket(data.caller.id);
        const conversation = await this.conversationService.isCreated(data.caller.id, socket.user.id);
        if (!conversation)
            return console.log('No conversation found');
        if (callerSocket) {
            console.log('Emitting onVideoCallAccept event');
            const payload = Object.assign(Object.assign({}, data), { conversation, acceptor: socket.user });
            callerSocket.emit('onVideoCallAccept', payload);
            socket.emit('onVideoCallAccept', payload);
        }
    }
    async handleVideoCallRejected(data, socket) {
        console.log('inside videoCallRejected event');
        const receiver = socket.user;
        const callerSocket = this.sessions.getUserSocket(data.caller.id);
        callerSocket &&
            callerSocket.emit(constants_1.WebsocketEvents.VIDEO_CALL_REJECTED, { receiver });
        socket.emit(constants_1.WebsocketEvents.VIDEO_CALL_REJECTED, { receiver });
    }
    async handleVideoCallHangUp({ caller, receiver }, socket) {
        console.log('inside videoCallHangup event');
        if (socket.user.id === caller.id) {
            const receiverSocket = this.sessions.getUserSocket(receiver.id);
            socket.emit('onVideoCallHangUp');
            return receiverSocket && receiverSocket.emit('onVideoCallHangUp');
        }
        socket.emit('onVideoCallHangUp');
        const callerSocket = this.sessions.getUserSocket(caller.id);
        callerSocket && callerSocket.emit('onVideoCallHangUp');
    }
    async handleVoiceCallInitiate(payload, socket) {
        const caller = socket.user;
        const receiverSocket = this.sessions.getUserSocket(payload.recipientId);
        if (!receiverSocket)
            socket.emit('onUserUnavailable');
        receiverSocket.emit('onVoiceCall', Object.assign(Object.assign({}, payload), { caller }));
    }
    async handleVoiceCallAccepted(payload, socket) {
        console.log('Inside onVoiceCallAccepted event');
        const callerSocket = this.sessions.getUserSocket(payload.caller.id);
        const conversation = await this.conversationService.isCreated(payload.caller.id, socket.user.id);
        if (!conversation)
            return console.log('No conversation found');
        if (callerSocket) {
            console.log('Emitting onVoiceCallAccepted event');
            const callPayload = Object.assign(Object.assign({}, payload), { conversation, acceptor: socket.user });
            callerSocket.emit(constants_1.WebsocketEvents.VOICE_CALL_ACCEPTED, callPayload);
            socket.emit(constants_1.WebsocketEvents.VOICE_CALL_ACCEPTED, callPayload);
        }
    }
    async handleVoiceCallHangUp({ caller, receiver }, socket) {
        console.log('inside onVoiceCallHangUp event');
        if (socket.user.id === caller.id) {
            const receiverSocket = this.sessions.getUserSocket(receiver.id);
            socket.emit(constants_1.WebsocketEvents.VOICE_CALL_HANG_UP);
            return (receiverSocket &&
                receiverSocket.emit(constants_1.WebsocketEvents.VOICE_CALL_HANG_UP));
        }
        socket.emit(constants_1.WebsocketEvents.VOICE_CALL_HANG_UP);
        const callerSocket = this.sessions.getUserSocket(caller.id);
        callerSocket && callerSocket.emit(constants_1.WebsocketEvents.VOICE_CALL_HANG_UP);
    }
    async handleVoiceCallRejected(data, socket) {
        console.log('inside onVoiceCallRejected event');
        const receiver = socket.user;
        const callerSocket = this.sessions.getUserSocket(data.caller.id);
        callerSocket &&
            callerSocket.emit(constants_1.WebsocketEvents.VOICE_CALL_REJECTED, { receiver });
        socket.emit(constants_1.WebsocketEvents.VOICE_CALL_REJECTED, { receiver });
    }
};
__decorate([
    (0, websockets_1.WebSocketServer)(),
    __metadata("design:type", typeof (_e = typeof socket_io_1.Server !== "undefined" && socket_io_1.Server) === "function" ? _e : Object)
], MessagingGateway.prototype, "server", void 0);
__decorate([
    (0, websockets_1.SubscribeMessage)('getOnlineGroupUsers'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_f = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleGetOnlineGroupUsers", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('createMessage'),
    __param(0, (0, websockets_1.MessageBody)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleCreateMessage", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('onConversationJoin'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_g = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _g : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "onConversationJoin", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('onConversationLeave'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_h = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _h : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "onConversationLeave", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('onGroupJoin'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_j = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _j : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "onGroupJoin", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('onGroupLeave'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_k = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _k : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "onGroupLeave", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('onTypingStart'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_l = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _l : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "onTypingStart", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('onTypingStop'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_m = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _m : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "onTypingStop", null);
__decorate([
    (0, event_emitter_1.OnEvent)('message.create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleMessageCreateEvent", null);
__decorate([
    (0, event_emitter_1.OnEvent)('conversation.create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleConversationCreateEvent", null);
__decorate([
    (0, event_emitter_1.OnEvent)('message.delete'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleMessageDelete", null);
__decorate([
    (0, event_emitter_1.OnEvent)('message.update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleMessageUpdate", null);
__decorate([
    (0, event_emitter_1.OnEvent)('group.message.create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_o = typeof types_1.CreateGroupMessageResponse !== "undefined" && types_1.CreateGroupMessageResponse) === "function" ? _o : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleGroupMessageCreate", null);
__decorate([
    (0, event_emitter_1.OnEvent)('group.create'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_p = typeof typeorm_1.Group !== "undefined" && typeorm_1.Group) === "function" ? _p : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleGroupCreate", null);
__decorate([
    (0, event_emitter_1.OnEvent)('group.message.update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_q = typeof typeorm_1.GroupMessage !== "undefined" && typeorm_1.GroupMessage) === "function" ? _q : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleGroupMessageUpdate", null);
__decorate([
    (0, event_emitter_1.OnEvent)('group.user.add'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_r = typeof types_1.AddGroupUserResponse !== "undefined" && types_1.AddGroupUserResponse) === "function" ? _r : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleGroupUserAdd", null);
__decorate([
    (0, event_emitter_1.OnEvent)('group.user.remove'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_s = typeof types_1.RemoveGroupUserResponse !== "undefined" && types_1.RemoveGroupUserResponse) === "function" ? _s : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleGroupUserRemove", null);
__decorate([
    (0, event_emitter_1.OnEvent)('group.owner.update'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_t = typeof typeorm_1.Group !== "undefined" && typeorm_1.Group) === "function" ? _t : Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleGroupOwnerUpdate", null);
__decorate([
    (0, event_emitter_1.OnEvent)('group.user.leave'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], MessagingGateway.prototype, "handleGroupUserLeave", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('getOnlineFriends'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_u = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _u : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleFriendListRetrieve", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('onVideoCallInitiate'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_v = typeof CreateCallDto_1.CreateCallDto !== "undefined" && CreateCallDto_1.CreateCallDto) === "function" ? _v : Object, typeof (_w = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _w : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleVideoCall", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('videoCallAccepted'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_x = typeof types_1.CallAcceptedPayload !== "undefined" && types_1.CallAcceptedPayload) === "function" ? _x : Object, typeof (_y = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _y : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleVideoCallAccepted", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(constants_1.WebsocketEvents.VIDEO_CALL_REJECTED),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_z = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _z : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleVideoCallRejected", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('videoCallHangUp'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_0 = typeof types_1.CallHangUpPayload !== "undefined" && types_1.CallHangUpPayload) === "function" ? _0 : Object, typeof (_1 = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _1 : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleVideoCallHangUp", null);
__decorate([
    (0, websockets_1.SubscribeMessage)('onVoiceCallInitiate'),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_2 = typeof types_1.VoiceCallPayload !== "undefined" && types_1.VoiceCallPayload) === "function" ? _2 : Object, typeof (_3 = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _3 : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleVoiceCallInitiate", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(constants_1.WebsocketEvents.VOICE_CALL_ACCEPTED),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_4 = typeof types_1.CallAcceptedPayload !== "undefined" && types_1.CallAcceptedPayload) === "function" ? _4 : Object, typeof (_5 = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _5 : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleVoiceCallAccepted", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(constants_1.WebsocketEvents.VOICE_CALL_HANG_UP),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_6 = typeof types_1.CallHangUpPayload !== "undefined" && types_1.CallHangUpPayload) === "function" ? _6 : Object, typeof (_7 = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _7 : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleVoiceCallHangUp", null);
__decorate([
    (0, websockets_1.SubscribeMessage)(constants_1.WebsocketEvents.VOICE_CALL_REJECTED),
    __param(0, (0, websockets_1.MessageBody)()),
    __param(1, (0, websockets_1.ConnectedSocket)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, typeof (_8 = typeof interfaces_1.AuthenticatedSocket !== "undefined" && interfaces_1.AuthenticatedSocket) === "function" ? _8 : Object]),
    __metadata("design:returntype", Promise)
], MessagingGateway.prototype, "handleVoiceCallRejected", null);
MessagingGateway = __decorate([
    (0, websockets_1.WebSocketGateway)(3000, {
        cors: {
            origin: ['http://localhost:3000'],
            credentials: true,
        },
        pingInterval: 10000,
        pingTimeout: 15000,
    }),
    __param(0, (0, common_1.Inject)(constants_1.Services.GATEWAY_SESSION_MANAGER)),
    __param(1, (0, common_1.Inject)(constants_1.Services.CONVERSATIONS)),
    __param(2, (0, common_1.Inject)(constants_1.Services.GROUPS)),
    __param(3, (0, common_1.Inject)(constants_1.Services.FRIENDS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof gateway_session_1.IGatewaySessionManager !== "undefined" && gateway_session_1.IGatewaySessionManager) === "function" ? _a : Object, typeof (_b = typeof conversations_1.IConversationsService !== "undefined" && conversations_1.IConversationsService) === "function" ? _b : Object, typeof (_c = typeof group_1.IGroupService !== "undefined" && group_1.IGroupService) === "function" ? _c : Object, typeof (_d = typeof friends_1.IFriendsService !== "undefined" && friends_1.IFriendsService) === "function" ? _d : Object])
], MessagingGateway);
exports.MessagingGateway = MessagingGateway;


/***/ }),

/***/ "./apps/chat/groups/controllers/group-messages.controller.ts":
/*!*******************************************************************!*\
  !*** ./apps/chat/groups/controllers/group-messages.controller.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupMessageController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const types_1 = __webpack_require__(/*! ../../utils/types */ "./apps/chat/utils/types.ts");
const group_messages_1 = __webpack_require__(/*! ../interfaces/group-messages */ "./apps/chat/groups/interfaces/group-messages.ts");
let GroupMessageController = class GroupMessageController {
    constructor(groupMessageService, eventEmitter) {
        this.groupMessageService = groupMessageService;
        this.eventEmitter = eventEmitter;
    }
    async createGroupMessage(payload) {
        const response = await this.groupMessageService.createGroupMessage(payload);
        this.eventEmitter.emit('group.message.create', response);
        return response;
    }
    async getGroupMessages(groupId) {
        console.log(`Fetching GroupMessages for Group Id: `);
        const messages = await this.groupMessageService.getGroupMessages(groupId);
        return messages;
    }
    async deleteGroupMessage(payload) {
        await this.groupMessageService.deleteGroupMessage(payload);
        this.eventEmitter.emit('group.message.delete', payload);
        return { groupId: payload.groupId, messageId: payload.messageId };
    }
    async editGroupMessage(payload) {
        const message = await this.groupMessageService.editGroupMessage(payload);
        this.eventEmitter.emit('group.message.update', message);
        return message;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('create_group_message'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof types_1.CreateGroupMessageParams !== "undefined" && types_1.CreateGroupMessageParams) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], GroupMessageController.prototype, "createGroupMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_group_messages'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupMessageController.prototype, "getGroupMessages", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_group_message'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupMessageController.prototype, "deleteGroupMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)('edit_group_message'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupMessageController.prototype, "editGroupMessage", null);
GroupMessageController = __decorate([
    __param(0, (0, common_1.Inject)(constants_1.Services.GROUP_MESSAGES)),
    __metadata("design:paramtypes", [typeof (_a = typeof group_messages_1.IGroupMessageService !== "undefined" && group_messages_1.IGroupMessageService) === "function" ? _a : Object, typeof (_b = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _b : Object])
], GroupMessageController);
exports.GroupMessageController = GroupMessageController;


/***/ }),

/***/ "./apps/chat/groups/controllers/group-recipients.controller.ts":
/*!*********************************************************************!*\
  !*** ./apps/chat/groups/controllers/group-recipients.controller.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupRecipientsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const types_1 = __webpack_require__(/*! ../../utils/types */ "./apps/chat/utils/types.ts");
const group_recipient_1 = __webpack_require__(/*! ../interfaces/group-recipient */ "./apps/chat/groups/interfaces/group-recipient.ts");
let GroupRecipientsController = class GroupRecipientsController {
    constructor(groupRecipientService, eventEmitter) {
        this.groupRecipientService = groupRecipientService;
        this.eventEmitter = eventEmitter;
    }
    async addGroupRecipient(payload) {
        const response = await this.groupRecipientService.addGroupRecipient(payload);
        this.eventEmitter.emit('group.user.add', response);
        return response;
    }
    async leaveGroup(payload) {
        const group = await this.groupRecipientService.leaveGroup(payload);
        this.eventEmitter.emit('group.user.leave', {
            group,
            userId: payload.userId,
        });
        return group;
    }
    async removeGroupRecipient(payload) {
        const response = await this.groupRecipientService.removeGroupRecipient(payload);
        this.eventEmitter.emit('group.user.remove', response);
        return response.group;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('add_group_recipient'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof types_1.AddGroupRecipientParams !== "undefined" && types_1.AddGroupRecipientParams) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], GroupRecipientsController.prototype, "addGroupRecipient", null);
__decorate([
    (0, microservices_1.MessagePattern)('recipient_leave'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupRecipientsController.prototype, "leaveGroup", null);
__decorate([
    (0, microservices_1.MessagePattern)('remove_group_recipient'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupRecipientsController.prototype, "removeGroupRecipient", null);
GroupRecipientsController = __decorate([
    __param(0, (0, common_1.Inject)(constants_1.Services.GROUP_RECIPIENTS)),
    __metadata("design:paramtypes", [typeof (_a = typeof group_recipient_1.IGroupRecipientService !== "undefined" && group_recipient_1.IGroupRecipientService) === "function" ? _a : Object, typeof (_b = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _b : Object])
], GroupRecipientsController);
exports.GroupRecipientsController = GroupRecipientsController;


/***/ }),

/***/ "./apps/chat/groups/controllers/group.controller.ts":
/*!**********************************************************!*\
  !*** ./apps/chat/groups/controllers/group.controller.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const CreateGroup_dto_1 = __webpack_require__(/*! ../dtos/CreateGroup.dto */ "./apps/chat/groups/dtos/CreateGroup.dto.ts");
const group_1 = __webpack_require__(/*! ../interfaces/group */ "./apps/chat/groups/interfaces/group.ts");
let GroupController = class GroupController {
    constructor(groupService, eventEmitter) {
        this.groupService = groupService;
        this.eventEmitter = eventEmitter;
    }
    async createGroup(payload) {
        const group = await this.groupService.createGroup(Object.assign(Object.assign({}, payload), { creator: '1' }));
        return group;
    }
    getGroups(payload) {
        return this.groupService.getGroups(payload);
    }
    getGroup(id) {
        return this.groupService.findGroupById(id);
    }
    async updateGroupOwner(payload) {
        const group = await this.groupService.transferGroupOwner(payload);
        this.eventEmitter.emit('group.owner.update', group);
        return group;
    }
    async updateGroupDetails(payload) {
        return this.groupService.updateDetails(payload);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('create_group_chat'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof CreateGroup_dto_1.CreateGroupDto !== "undefined" && CreateGroup_dto_1.CreateGroupDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "createGroup", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_groups_chat'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "getGroups", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_single_group'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "getGroup", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_group_owner'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "updateGroupOwner", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_group_details'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "updateGroupDetails", null);
GroupController = __decorate([
    __param(0, (0, common_1.Inject)(constants_1.Services.GROUPS)),
    __metadata("design:paramtypes", [typeof (_a = typeof group_1.IGroupService !== "undefined" && group_1.IGroupService) === "function" ? _a : Object, typeof (_b = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _b : Object])
], GroupController);
exports.GroupController = GroupController;


/***/ }),

/***/ "./apps/chat/groups/dtos/CreateGroup.dto.ts":
/*!**************************************************!*\
  !*** ./apps/chat/groups/dtos/CreateGroup.dto.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreateGroupDto = void 0;
class CreateGroupDto {
}
exports.CreateGroupDto = CreateGroupDto;


/***/ }),

/***/ "./apps/chat/groups/exceptions/GroupNotFound.ts":
/*!******************************************************!*\
  !*** ./apps/chat/groups/exceptions/GroupNotFound.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupNotFoundException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class GroupNotFoundException extends common_1.HttpException {
    constructor() {
        super('Group Not Found', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.GroupNotFoundException = GroupNotFoundException;


/***/ }),

/***/ "./apps/chat/groups/exceptions/GroupOwnerTransfer.ts":
/*!***********************************************************!*\
  !*** ./apps/chat/groups/exceptions/GroupOwnerTransfer.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupOwnerTransferException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class GroupOwnerTransferException extends common_1.HttpException {
    constructor(msg) {
        const defaultMessage = 'Group Owner Transfer Exception';
        const errorMessage = msg
            ? defaultMessage.concat(': ', msg)
            : defaultMessage;
        super(errorMessage, common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.GroupOwnerTransferException = GroupOwnerTransferException;


/***/ }),

/***/ "./apps/chat/groups/exceptions/GroupParticipantNotFound.ts":
/*!*****************************************************************!*\
  !*** ./apps/chat/groups/exceptions/GroupParticipantNotFound.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupParticipantNotFound = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class GroupParticipantNotFound extends common_1.HttpException {
    constructor() {
        super('Group Participant Not Found', common_1.HttpStatus.NOT_FOUND);
    }
}
exports.GroupParticipantNotFound = GroupParticipantNotFound;


/***/ }),

/***/ "./apps/chat/groups/exceptions/InvalidGroup.ts":
/*!*****************************************************!*\
  !*** ./apps/chat/groups/exceptions/InvalidGroup.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvalidGroupException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class InvalidGroupException extends common_1.HttpException {
    constructor() {
        super('Invalid Group Id', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.InvalidGroupException = InvalidGroupException;


/***/ }),

/***/ "./apps/chat/groups/exceptions/NotGroupOwner.ts":
/*!******************************************************!*\
  !*** ./apps/chat/groups/exceptions/NotGroupOwner.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotGroupOwnerException = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class NotGroupOwnerException extends common_1.HttpException {
    constructor() {
        super('Not a Group Owner', common_1.HttpStatus.BAD_REQUEST);
    }
}
exports.NotGroupOwnerException = NotGroupOwnerException;


/***/ }),

/***/ "./apps/chat/groups/group.module.ts":
/*!******************************************!*\
  !*** ./apps/chat/groups/group.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const image_storage_module_1 = __webpack_require__(/*! ../image-storage/image-storage.module */ "./apps/chat/image-storage/image-storage.module.ts");
const message_attachments_module_1 = __webpack_require__(/*! ../message-attachments/message-attachments.module */ "./apps/chat/message-attachments/message-attachments.module.ts");
const users_module_1 = __webpack_require__(/*! ../users/users.module */ "./apps/chat/users/users.module.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./apps/chat/utils/helpers.ts");
const group_messages_controller_1 = __webpack_require__(/*! ./controllers/group-messages.controller */ "./apps/chat/groups/controllers/group-messages.controller.ts");
const group_recipients_controller_1 = __webpack_require__(/*! ./controllers/group-recipients.controller */ "./apps/chat/groups/controllers/group-recipients.controller.ts");
const group_controller_1 = __webpack_require__(/*! ./controllers/group.controller */ "./apps/chat/groups/controllers/group.controller.ts");
const group_middleware_1 = __webpack_require__(/*! ./middlewares/group.middleware */ "./apps/chat/groups/middlewares/group.middleware.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/chat/groups/prisma/prisma.module.ts");
const group_messages_service_1 = __webpack_require__(/*! ./services/group-messages.service */ "./apps/chat/groups/services/group-messages.service.ts");
const group_recipient_service_1 = __webpack_require__(/*! ./services/group-recipient.service */ "./apps/chat/groups/services/group-recipient.service.ts");
const group_service_1 = __webpack_require__(/*! ./services/group.service */ "./apps/chat/groups/services/group.service.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
let GroupModule = class GroupModule {
    configure(consumer) {
        consumer.apply(helpers_1.isAuthorized, group_middleware_1.GroupMiddleware).forRoutes('groups/:id');
    }
};
GroupModule = __decorate([
    (0, common_1.Module)({
        imports: [
            users_module_1.UsersModule,
            message_attachments_module_1.MessageAttachmentsModule,
            image_storage_module_1.ImageStorageModule,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModuleGroup,
        ],
        controllers: [
            group_controller_1.GroupController,
            group_messages_controller_1.GroupMessageController,
            group_recipients_controller_1.GroupRecipientsController,
        ],
        providers: [
            {
                provide: constants_1.Services.GROUPS,
                useClass: group_service_1.GroupService,
            },
            {
                provide: constants_1.Services.GROUP_MESSAGES,
                useClass: group_messages_service_1.GroupMessageService,
            },
            {
                provide: constants_1.Services.GROUP_RECIPIENTS,
                useClass: group_recipient_service_1.GroupRecipientService,
            },
            http_1.HTTP,
        ],
        exports: [
            {
                provide: constants_1.Services.GROUPS,
                useClass: group_service_1.GroupService,
            },
        ],
    })
], GroupModule);
exports.GroupModule = GroupModule;


/***/ }),

/***/ "./apps/chat/groups/interfaces/group-messages.ts":
/*!*******************************************************!*\
  !*** ./apps/chat/groups/interfaces/group-messages.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/groups/interfaces/group-recipient.ts":
/*!********************************************************!*\
  !*** ./apps/chat/groups/interfaces/group-recipient.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/groups/interfaces/group.ts":
/*!**********************************************!*\
  !*** ./apps/chat/groups/interfaces/group.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/groups/middlewares/group.middleware.ts":
/*!**********************************************************!*\
  !*** ./apps/chat/groups/middlewares/group.middleware.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupMiddleware = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const GroupNotFound_1 = __webpack_require__(/*! ../exceptions/GroupNotFound */ "./apps/chat/groups/exceptions/GroupNotFound.ts");
const InvalidGroup_1 = __webpack_require__(/*! ../exceptions/InvalidGroup */ "./apps/chat/groups/exceptions/InvalidGroup.ts");
const group_1 = __webpack_require__(/*! ../interfaces/group */ "./apps/chat/groups/interfaces/group.ts");
let GroupMiddleware = class GroupMiddleware {
    constructor(groupService) {
        this.groupService = groupService;
    }
    async use(req, res, next) {
        const { id: userId } = req.user;
        const id = parseInt(req.params['id']);
        if (isNaN(id))
            throw new InvalidGroup_1.InvalidGroupException();
        const params = { id, userId };
        const user = await this.groupService.hasAccess(params);
        console.log(user);
        if (user)
            next();
        else
            throw new GroupNotFound_1.GroupNotFoundException();
    }
};
GroupMiddleware = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.Services.GROUPS)),
    __metadata("design:paramtypes", [typeof (_a = typeof group_1.IGroupService !== "undefined" && group_1.IGroupService) === "function" ? _a : Object])
], GroupMiddleware);
exports.GroupMiddleware = GroupMiddleware;


/***/ }),

/***/ "./apps/chat/groups/prisma/prisma.module.ts":
/*!**************************************************!*\
  !*** ./apps/chat/groups/prisma/prisma.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleGroup = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/chat/groups/prisma/prisma.service.ts");
let PrismaModuleGroup = class PrismaModuleGroup {
};
PrismaModuleGroup = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceGroup],
        exports: [prisma_service_1.PrismaServiceGroup],
    })
], PrismaModuleGroup);
exports.PrismaModuleGroup = PrismaModuleGroup;


/***/ }),

/***/ "./apps/chat/groups/prisma/prisma.service.ts":
/*!***************************************************!*\
  !*** ./apps/chat/groups/prisma/prisma.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceGroup = void 0;
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PrismaServiceGroup = class PrismaServiceGroup extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([]);
    }
};
PrismaServiceGroup = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceGroup);
exports.PrismaServiceGroup = PrismaServiceGroup;


/***/ }),

/***/ "./apps/chat/groups/services/group-messages.service.ts":
/*!*************************************************************!*\
  !*** ./apps/chat/groups/services/group-messages.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupMessageService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/chat/groups/prisma/prisma.service.ts");
let GroupMessageService = class GroupMessageService {
    constructor(prisma, http) {
        this.prisma = prisma;
        this.http = http;
    }
    async createGroupMessage(payload) {
        const { groupId, content, authorId } = payload;
        const group = await this.prisma.groups.findUnique({
            where: {
                id: groupId,
            },
            include: {
                users_groups: {
                    select: {
                        users: true,
                        groups: true,
                    },
                },
            },
        });
        if (!group)
            throw new common_1.HttpException('No Group Found', common_1.HttpStatus.BAD_REQUEST);
        const findUser = group.users_groups.find(u => u.users.id === authorId);
        if (!findUser)
            throw new common_1.HttpException('User not in group', common_1.HttpStatus.BAD_REQUEST);
        return await this.prisma.$transaction(async (tx) => {
            const groupMessage = await tx.groupMessages.create({
                data: {
                    content,
                    groupId: group.id,
                    authorId: authorId,
                },
            });
            const [groupMessageAttachment, updatedGroup] = await Promise.all([
                tx.groupMessageAttachments.create({
                    data: {
                        messageId: groupMessage.id,
                        key: Date.now().toString(),
                    },
                }),
                tx.groups.update({
                    where: {
                        id: group.id,
                    },
                    data: {
                        last_message_sent_id: groupMessage.id,
                    },
                }),
            ]);
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Create message successfully', { message: groupMessage, group: updatedGroup });
        });
    }
    async getGroupMessages(id) {
        const messages = await this.prisma.groupMessages.findMany({
            where: { groupId: id },
        });
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Create message successfully', messages);
    }
    async deleteGroupMessage(params) {
        const group = await this.prisma.groups.findUnique({
            where: {
                id: params.groupId,
            },
            include: {
                group_messages: true,
            },
        });
        if (!group)
            throw new common_1.HttpException('Group not found', common_1.HttpStatus.BAD_REQUEST);
        const message = await this.prisma.groupMessages.findFirst({
            where: {
                id: params.messageId,
            },
        });
        if (!message)
            throw new common_1.HttpException('Cannot delete message', common_1.HttpStatus.BAD_REQUEST);
        if (group.last_message_sent_id !== message.id)
            return this.prisma.groupMessages.delete({ where: { id: message.id } });
        const size = group.group_messages.length;
        const SECOND_MESSAGE_INDEX = 1;
        if (size <= 1) {
            console.log('Last Message Sent is deleted');
            await this.prisma.groups.update({
                where: {
                    id: params.groupId,
                },
                data: {
                    last_message_sent_id: null,
                },
            });
        }
        else {
            console.log('There are more than 1 message');
            const newLastMessage = group.group_messages[SECOND_MESSAGE_INDEX];
            await this.prisma.groups.update({
                where: { id: params.groupId },
                data: { last_message_sent_id: newLastMessage.id },
            });
        }
        const res = await this.prisma.groupMessages.delete({
            where: { id: message.id },
        });
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Delete message successfully');
    }
    async editGroupMessage(params) {
        const messageDB = await this.prisma.groupMessages.findFirst({
            where: {
                id: params.messageId,
                authorId: params.userId,
            },
        });
        if (!messageDB)
            throw new common_1.HttpException('Cannot Edit Message', common_1.HttpStatus.BAD_REQUEST);
        const res = await this.prisma.groupMessages.update({
            where: {
                id: params.messageId,
            },
            data: {
                content: params.content,
            },
        });
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Update message successfully', res);
    }
};
GroupMessageService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceGroup !== "undefined" && prisma_service_1.PrismaServiceGroup) === "function" ? _a : Object, typeof (_b = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _b : Object])
], GroupMessageService);
exports.GroupMessageService = GroupMessageService;


/***/ }),

/***/ "./apps/chat/groups/services/group-recipient.service.ts":
/*!**************************************************************!*\
  !*** ./apps/chat/groups/services/group-recipient.service.ts ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupRecipientService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_1 = __webpack_require__(/*! ../../users/interfaces/user */ "./apps/chat/users/interfaces/user.ts");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const GroupNotFound_1 = __webpack_require__(/*! ../exceptions/GroupNotFound */ "./apps/chat/groups/exceptions/GroupNotFound.ts");
const GroupParticipantNotFound_1 = __webpack_require__(/*! ../exceptions/GroupParticipantNotFound */ "./apps/chat/groups/exceptions/GroupParticipantNotFound.ts");
const NotGroupOwner_1 = __webpack_require__(/*! ../exceptions/NotGroupOwner */ "./apps/chat/groups/exceptions/NotGroupOwner.ts");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/chat/groups/prisma/prisma.service.ts");
let GroupRecipientService = class GroupRecipientService {
    constructor(prisma, userService, http) {
        this.prisma = prisma;
        this.userService = userService;
        this.http = http;
    }
    async addGroupRecipient(params) {
        const group = await this.prisma.groups.findUnique({
            where: {
                id: params.id,
            },
        });
        if (!group)
            throw new GroupNotFound_1.GroupNotFoundException();
        if (group.ownerId !== params.userId)
            throw new common_1.HttpException('Insufficient Permissions', common_1.HttpStatus.FORBIDDEN);
        const recipient = await this.userService.findUser({
            username: params.username,
        });
        if (!recipient) {
            throw new common_1.HttpException('Cannot Add User', common_1.HttpStatus.BAD_REQUEST);
        }
        const userInGroup = await this.isUserInGroup({
            id: group.id,
            userId: recipient.id,
        });
        if (userInGroup) {
            throw new common_1.HttpException('User already in group', common_1.HttpStatus.BAD_REQUEST);
        }
        const savedGroup = await this.prisma.usersGroups.create({
            data: {
                groupsId: group.id,
                usersId: recipient.id,
            },
            select: {
                users: true,
                groups: true,
            },
        });
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Add recipient successfully', { group: savedGroup.groups, user: savedGroup.users });
    }
    async removeGroupRecipient(params) {
        const { issuerId, removeUserId, id } = params;
        const userToBeRemoved = await this.userService.findUser({
            id: removeUserId,
        });
        if (!userToBeRemoved)
            throw new common_1.HttpException('User cannot be removed', common_1.HttpStatus.BAD_REQUEST);
        const group = await this.prisma.groups.findUnique({
            where: {
                id,
            },
            include: {
                users_groups: {
                    select: {
                        users: true,
                    },
                },
            },
        });
        if (!group)
            throw new GroupNotFound_1.GroupNotFoundException();
        if (group.ownerId !== issuerId)
            throw new NotGroupOwner_1.NotGroupOwnerException();
        if (group.ownerId === removeUserId)
            throw new common_1.HttpException('Cannot remove yourself as owner', common_1.HttpStatus.BAD_REQUEST);
        const savedGroup = await this.prisma.usersGroups.delete({
            where: {
                groupsId_usersId: {
                    groupsId: group.id,
                    usersId: removeUserId,
                },
            },
        });
        const groupUpdated = await this.prisma.groups.findUnique({
            where: { id },
            include: {
                users_groups: {
                    select: {
                        users: true,
                    },
                },
                owner: true,
                creator: true,
                last_message_sent: true,
            },
        });
        const group_user = groupUpdated.users_groups.map(user => Object.values(user)[0]);
        groupUpdated.users_groups = undefined;
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Add recipient successfully', Object.assign(Object.assign({}, groupUpdated), { users: group_user }));
    }
    async isUserInGroup({ id, userId }) {
        const group = await this.prisma.groups.findUnique({
            where: {
                id,
            },
            select: {
                users_groups: {
                    select: {
                        users: true,
                    },
                },
            },
        });
        if (!group)
            throw new GroupNotFound_1.GroupNotFoundException();
        const user = group.users_groups.find(userGroup => userGroup.users.id === userId);
        if (!user)
            throw new GroupParticipantNotFound_1.GroupParticipantNotFound();
        return group;
    }
    async leaveGroup({ id, userId }) {
        const group = await this.isUserInGroup({ id, userId });
        console.log(`Updating Groups`);
        if (group.ownerId === userId)
            throw new common_1.HttpException('Cannot leave group as owner', common_1.HttpStatus.BAD_REQUEST);
        console.log('New Users in Group after leaving...');
        const savedGroup = await this.prisma.usersGroups.delete({
            where: {
                groupsId_usersId: {
                    groupsId: group.id,
                    usersId: userId,
                },
            },
        });
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Leave group successfully');
    }
};
GroupRecipientService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(constants_1.Services.USERS)),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceGroup !== "undefined" && prisma_service_1.PrismaServiceGroup) === "function" ? _a : Object, typeof (_b = typeof user_1.IUserService !== "undefined" && user_1.IUserService) === "function" ? _b : Object, typeof (_c = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _c : Object])
], GroupRecipientService);
exports.GroupRecipientService = GroupRecipientService;


/***/ }),

/***/ "./apps/chat/groups/services/group.service.ts":
/*!****************************************************!*\
  !*** ./apps/chat/groups/services/group.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const image_storage_1 = __webpack_require__(/*! ../../image-storage/image-storage */ "./apps/chat/image-storage/image-storage.ts");
const user_1 = __webpack_require__(/*! ../../users/interfaces/user */ "./apps/chat/users/interfaces/user.ts");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const helpers_1 = __webpack_require__(/*! ../../utils/helpers */ "./apps/chat/utils/helpers.ts");
const GroupNotFound_1 = __webpack_require__(/*! ../exceptions/GroupNotFound */ "./apps/chat/groups/exceptions/GroupNotFound.ts");
const GroupOwnerTransfer_1 = __webpack_require__(/*! ../exceptions/GroupOwnerTransfer */ "./apps/chat/groups/exceptions/GroupOwnerTransfer.ts");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/chat/groups/prisma/prisma.service.ts");
let GroupService = class GroupService {
    constructor(prisma, userService, imageStorageService, http) {
        this.prisma = prisma;
        this.userService = userService;
        this.imageStorageService = imageStorageService;
        this.http = http;
    }
    async createGroup(params) {
        const { creator, title, users } = params;
        users.push(creator);
        return await this.prisma.$transaction(async (tx) => {
            const groupCreated = await tx.groups.create({
                data: { ownerId: +creator, creatorId: +creator, title },
            });
            const filterUser = users.map(user => ({
                groupsId: groupCreated.id,
                usersId: +user,
            }));
            const addUserToGroup = await tx.usersGroups.createMany({
                data: filterUser,
            });
            const group_users = await tx.groups.findFirst({
                where: { id: groupCreated.id },
                select: {
                    users_groups: {
                        select: {
                            users: true,
                        },
                    },
                },
            });
            const filterGroupUsers = group_users.users_groups.map(user => `${user.users.firstName} ${user.users.lastName}`);
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Create group succesfully', {
                title: groupCreated.title,
                users: filterGroupUsers,
            });
        });
    }
    async getGroups(payload) {
        try {
            const groups = await this.prisma.groups.findMany({
                where: {
                    users_groups: {
                        some: {
                            usersId: payload.userId,
                        },
                    },
                },
                include: {
                    users_groups: {
                        select: {
                            users: true,
                        },
                    },
                    owner: true,
                    creator: true,
                    last_message_sent: true,
                },
            });
            const renameGroupProperties = groups.map(group => {
                group['users'] = group.users_groups;
                delete group.users_groups;
                return group;
            });
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Create group succesfully', renameGroupProperties);
        }
        catch (err) {
            console.log(err);
        }
    }
    async findGroupById(id) {
        const group = await this.prisma.groups.findUnique({
            where: { id },
            include: {
                users_groups: {
                    select: {
                        users: true,
                    },
                },
                owner: true,
                creator: true,
                last_message_sent: true,
            },
        });
        const group_user = group.users_groups.map(user => Object.values(user)[0]);
        group.users_groups = undefined;
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Create group succesfully', Object.assign(Object.assign({}, group), { users: group_user }));
    }
    async saveGroup(group) {
        return await this.prisma.groups.create({ data: group });
    }
    async hasAccess({ id, userId }) {
        const group = await this.findGroupById(id);
        if (!group)
            throw new GroupNotFound_1.GroupNotFoundException();
        return group.users.find(user => user.id === userId);
    }
    async transferGroupOwner({ userId, groupId, newOwnerId, }) {
        const group = await this.findGroupById(groupId);
        if (!group)
            throw new GroupNotFound_1.GroupNotFoundException();
        if (group.ownerId !== userId)
            throw new GroupOwnerTransfer_1.GroupOwnerTransferException('Insufficient Permissions');
        if (group.ownerId === newOwnerId)
            throw new GroupOwnerTransfer_1.GroupOwnerTransferException('Cannot Transfer Owner to yourself');
        const res = await this.prisma.groups.update({
            where: {
                id: group.id,
            },
            data: {
                ownerId: newOwnerId,
            },
            include: {
                users_groups: {
                    select: {
                        users: true,
                    },
                },
                owner: true,
                creator: true,
                last_message_sent: true,
            },
        });
        const group_user = res.users_groups.map(user => Object.values(user)[0]);
        res.users_groups = undefined;
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Transfer group owner succesfully', Object.assign(Object.assign({}, res), { users: group_user }));
    }
    async updateDetails(params) {
        var _a;
        const group = await this.findGroupById(params.id);
        if (!group)
            throw new GroupNotFound_1.GroupNotFoundException();
        if (params.avatar) {
            const key = (0, helpers_1.generateUUIDV4)();
            await this.imageStorageService.upload({ key, file: params.avatar });
            group.avatar = key;
        }
        group.title = (_a = params.title) !== null && _a !== void 0 ? _a : group.title;
        const res = await this.prisma.groups.update({
            where: {
                id: group.id,
            },
            data: {
                title: group.title,
            },
            include: {
                users_groups: {
                    select: {
                        users: true,
                    },
                },
                owner: true,
                creator: true,
                last_message_sent: true,
            },
        });
        const group_user = res.users_groups.map(user => Object.values(user)[0]);
        res.users_groups = undefined;
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Update group succesfully', Object.assign(Object.assign({}, res), { users: group_user }));
    }
};
GroupService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(constants_1.Services.USERS)),
    __param(2, (0, common_1.Inject)(constants_1.Services.IMAGE_UPLOAD_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceGroup !== "undefined" && prisma_service_1.PrismaServiceGroup) === "function" ? _a : Object, typeof (_b = typeof user_1.IUserService !== "undefined" && user_1.IUserService) === "function" ? _b : Object, typeof (_c = typeof image_storage_1.IImageStorageService !== "undefined" && image_storage_1.IImageStorageService) === "function" ? _c : Object, typeof (_d = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _d : Object])
], GroupService);
exports.GroupService = GroupService;


/***/ }),

/***/ "./apps/chat/image-storage/image-storage.module.ts":
/*!*********************************************************!*\
  !*** ./apps/chat/image-storage/image-storage.module.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageStorageModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const client_s3_1 = __webpack_require__(/*! @aws-sdk/client-s3 */ "@aws-sdk/client-s3");
const image_storage_service_1 = __webpack_require__(/*! ./image-storage.service */ "./apps/chat/image-storage/image-storage.service.ts");
let ImageStorageModule = class ImageStorageModule {
};
ImageStorageModule = __decorate([
    (0, common_1.Module)({
        providers: [
            {
                provide: constants_1.Services.SPACES_CLIENT,
                useValue: new client_s3_1.S3({
                    credentials: {
                        accessKeyId: process.env['SPACES_KEY'],
                        secretAccessKey: process.env['SPACES_SECRET_KEY'],
                    },
                    endpoint: 'https://ams3.digitaloceanspaces.com',
                    region: 'ams3',
                }),
            },
            {
                provide: constants_1.Services.IMAGE_UPLOAD_SERVICE,
                useClass: image_storage_service_1.ImageStorageService,
            },
        ],
        exports: [
            {
                provide: constants_1.Services.SPACES_CLIENT,
                useValue: new client_s3_1.S3({
                    credentials: {
                        accessKeyId: process.env['SPACES_KEY'],
                        secretAccessKey: process.env['SPACES_SECRET_KEY'],
                    },
                    endpoint: 'https://ams3.digitaloceanspaces.com',
                    region: 'ams3',
                }),
            },
            {
                provide: constants_1.Services.IMAGE_UPLOAD_SERVICE,
                useClass: image_storage_service_1.ImageStorageService,
            },
        ],
    })
], ImageStorageModule);
exports.ImageStorageModule = ImageStorageModule;


/***/ }),

/***/ "./apps/chat/image-storage/image-storage.service.ts":
/*!**********************************************************!*\
  !*** ./apps/chat/image-storage/image-storage.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ImageStorageService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const client_s3_1 = __webpack_require__(/*! @aws-sdk/client-s3 */ "@aws-sdk/client-s3");
const helpers_1 = __webpack_require__(/*! ../utils/helpers */ "./apps/chat/utils/helpers.ts");
let ImageStorageService = class ImageStorageService {
    constructor(spacesClient) {
        this.spacesClient = spacesClient;
    }
    upload(params) {
        return this.spacesClient.putObject({
            Bucket: 'chuachat',
            Key: params.key,
            Body: params.file.buffer,
            ACL: 'public-read',
            ContentType: params.file.mimetype,
        });
    }
    async uploadMessageAttachment(params) {
        this.spacesClient.putObject({
            Bucket: 'chuachat',
            Key: `original/${params.messageAttachment.key}`,
            Body: params.file.buffer,
            ACL: 'public-read',
            ContentType: params.file.mimetype,
        });
        await this.spacesClient.putObject({
            Bucket: 'chuachat',
            Key: `preview/${params.messageAttachment.key}`,
            Body: await (0, helpers_1.compressImage)(params.file),
            ACL: 'public-read',
            ContentType: params.file.mimetype,
        });
        return params.messageAttachment;
    }
    async uploadGroupMessageAttachment(params) {
        this.spacesClient.putObject({
            Bucket: 'chuachat',
            Key: `original/${params.messageAttachment.key}`,
            Body: params.file.buffer,
            ACL: 'public-read',
            ContentType: params.file.mimetype,
        });
        await this.spacesClient.putObject({
            Bucket: 'chuachat',
            Key: `preview/${params.messageAttachment.key}`,
            Body: await (0, helpers_1.compressImage)(params.file),
            ACL: 'public-read',
            ContentType: params.file.mimetype,
        });
        return params.messageAttachment;
    }
};
ImageStorageService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constants_1.Services.SPACES_CLIENT)),
    __metadata("design:paramtypes", [typeof (_a = typeof client_s3_1.S3 !== "undefined" && client_s3_1.S3) === "function" ? _a : Object])
], ImageStorageService);
exports.ImageStorageService = ImageStorageService;


/***/ }),

/***/ "./apps/chat/image-storage/image-storage.ts":
/*!**************************************************!*\
  !*** ./apps/chat/image-storage/image-storage.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/message-attachments/message-attachments.module.ts":
/*!*********************************************************************!*\
  !*** ./apps/chat/message-attachments/message-attachments.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageAttachmentsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const image_storage_module_1 = __webpack_require__(/*! ../image-storage/image-storage.module */ "./apps/chat/image-storage/image-storage.module.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const message_attachments_service_1 = __webpack_require__(/*! ./message-attachments.service */ "./apps/chat/message-attachments/message-attachments.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/chat/message-attachments/prisma/prisma.module.ts");
let MessageAttachmentsModule = class MessageAttachmentsModule {
};
MessageAttachmentsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            image_storage_module_1.ImageStorageModule,
        ],
        providers: [
            prisma_module_1.PrismaModuleMessageAttachments,
            {
                provide: constants_1.Services.MESSAGE_ATTACHMENTS,
                useClass: message_attachments_service_1.MessageAttachmentsService,
            },
        ],
        exports: [
            {
                provide: constants_1.Services.MESSAGE_ATTACHMENTS,
                useClass: message_attachments_service_1.MessageAttachmentsService,
            },
        ],
    })
], MessageAttachmentsModule);
exports.MessageAttachmentsModule = MessageAttachmentsModule;


/***/ }),

/***/ "./apps/chat/message-attachments/message-attachments.service.ts":
/*!**********************************************************************!*\
  !*** ./apps/chat/message-attachments/message-attachments.service.ts ***!
  \**********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageAttachmentsService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const image_storage_1 = __webpack_require__(/*! ../image-storage/image-storage */ "./apps/chat/image-storage/image-storage.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/chat/message-attachments/prisma/prisma.module.ts");
let MessageAttachmentsService = class MessageAttachmentsService {
    constructor(prisma, imageUploadService) {
        this.prisma = prisma;
        this.imageUploadService = imageUploadService;
    }
    create(attachments) {
        return Promise.all(undefined);
    }
    createGroupAttachments(attachments) {
        return Promise.all(undefined);
    }
    deleteAllAttachments(attachments) {
        return Promise.all(undefined);
    }
};
MessageAttachmentsService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(constants_1.Services.IMAGE_UPLOAD_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_module_1.PrismaModuleMessageAttachments !== "undefined" && prisma_module_1.PrismaModuleMessageAttachments) === "function" ? _a : Object, typeof (_b = typeof image_storage_1.IImageStorageService !== "undefined" && image_storage_1.IImageStorageService) === "function" ? _b : Object])
], MessageAttachmentsService);
exports.MessageAttachmentsService = MessageAttachmentsService;


/***/ }),

/***/ "./apps/chat/message-attachments/prisma/prisma.module.ts":
/*!***************************************************************!*\
  !*** ./apps/chat/message-attachments/prisma/prisma.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleMessageAttachments = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/chat/message-attachments/prisma/prisma.service.ts");
let PrismaModuleMessageAttachments = class PrismaModuleMessageAttachments {
};
PrismaModuleMessageAttachments = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceMessageAttachments],
        exports: [prisma_service_1.PrismaServiceMessageAttachments],
    })
], PrismaModuleMessageAttachments);
exports.PrismaModuleMessageAttachments = PrismaModuleMessageAttachments;


/***/ }),

/***/ "./apps/chat/message-attachments/prisma/prisma.service.ts":
/*!****************************************************************!*\
  !*** ./apps/chat/message-attachments/prisma/prisma.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceMessageAttachments = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
let PrismaServiceMessageAttachments = class PrismaServiceMessageAttachments extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([]);
    }
};
PrismaServiceMessageAttachments = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceMessageAttachments);
exports.PrismaServiceMessageAttachments = PrismaServiceMessageAttachments;


/***/ }),

/***/ "./apps/chat/messages/src/dto/attachment.dto.ts":
/*!******************************************************!*\
  !*** ./apps/chat/messages/src/dto/attachment.dto.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AttachmentDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const file_attached_dto_1 = __webpack_require__(/*! ./file_attached.dto */ "./apps/chat/messages/src/dto/file_attached.dto.ts");
class AttachmentDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], AttachmentDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], AttachmentDto.prototype, "messageId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => file_attached_dto_1.FileAttachedDto),
    __metadata("design:type", Object)
], AttachmentDto.prototype, "attachments", void 0);
exports.AttachmentDto = AttachmentDto;


/***/ }),

/***/ "./apps/chat/messages/src/dto/delete_message.dto.ts":
/*!**********************************************************!*\
  !*** ./apps/chat/messages/src/dto/delete_message.dto.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteMessageDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class DeleteMessageDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], DeleteMessageDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DeleteMessageDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DeleteMessageDto.prototype, "authorId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], DeleteMessageDto.prototype, "conversationId", void 0);
exports.DeleteMessageDto = DeleteMessageDto;


/***/ }),

/***/ "./apps/chat/messages/src/dto/edit_message.dto.ts":
/*!********************************************************!*\
  !*** ./apps/chat/messages/src/dto/edit_message.dto.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditMessageDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class EditMessageDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditMessageDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], EditMessageDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], EditMessageDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], EditMessageDto.prototype, "authorId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], EditMessageDto.prototype, "conversationId", void 0);
exports.EditMessageDto = EditMessageDto;


/***/ }),

/***/ "./apps/chat/messages/src/dto/file_attached.dto.ts":
/*!*********************************************************!*\
  !*** ./apps/chat/messages/src/dto/file_attached.dto.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FileAttachedDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class FileAttachedDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FileAttachedDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FileAttachedDto.prototype, "fileName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], FileAttachedDto.prototype, "baseUrl", void 0);
exports.FileAttachedDto = FileAttachedDto;


/***/ }),

/***/ "./apps/chat/messages/src/dto/index.ts":
/*!*********************************************!*\
  !*** ./apps/chat/messages/src/dto/index.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./attachment.dto */ "./apps/chat/messages/src/dto/attachment.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./message.dto */ "./apps/chat/messages/src/dto/message.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./file_attached.dto */ "./apps/chat/messages/src/dto/file_attached.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./message.dto */ "./apps/chat/messages/src/dto/message.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete_message.dto */ "./apps/chat/messages/src/dto/delete_message.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./edit_message.dto */ "./apps/chat/messages/src/dto/edit_message.dto.ts"), exports);


/***/ }),

/***/ "./apps/chat/messages/src/dto/message.dto.ts":
/*!***************************************************!*\
  !*** ./apps/chat/messages/src/dto/message.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const index_1 = __webpack_require__(/*! ./index */ "./apps/chat/messages/src/dto/index.ts");
class MessageDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], MessageDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], MessageDto.prototype, "content", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MessageDto.prototype, "authorId", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], MessageDto.prototype, "conversationId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => index_1.AttachmentDto),
    __metadata("design:type", Object)
], MessageDto.prototype, "attachments", void 0);
exports.MessageDto = MessageDto;


/***/ }),

/***/ "./apps/chat/messages/src/messages.controller.ts":
/*!*******************************************************!*\
  !*** ./apps/chat/messages/src/messages.controller.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d, _e;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const messages_1 = __webpack_require__(/*! ./messages */ "./apps/chat/messages/src/messages.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./apps/chat/messages/src/dto/index.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const event_emitter_1 = __webpack_require__(/*! @nestjs/event-emitter */ "@nestjs/event-emitter");
let MessagesController = class MessagesController {
    constructor(messagesService, eventEmitter) {
        this.messagesService = messagesService;
        this.eventEmitter = eventEmitter;
    }
    async getMessagesFromConversation(query) {
        return await this.messagesService.getMessages(query);
    }
    async addMessage(dto) {
        const message = await this.messagesService.addMessage(dto);
        message.code === 200 && this.eventEmitter.emit('message.create', message.data);
        return message;
    }
    async editeMessage(dto) {
        const response = await this.messagesService.editMessage(dto);
        response.code === 200 && this.eventEmitter.emit('message.update', response.data.message);
        return response;
    }
    async deleteMessage(dto) {
        const params = { userId: dto.createdBy, conversationId: dto.conversationId, messageId: dto.id };
        const message = await this.messagesService.deleteMessage(dto);
        message.code === 200 && this.eventEmitter.emit('message.delete', params);
        return message;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_messages_from_conversation' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "getMessagesFromConversation", null);
__decorate([
    (0, microservices_1.MessagePattern)('add_message'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, microservices_1.Payload)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.MessageDto !== "undefined" && dto_1.MessageDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "addMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)('edit_message'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, microservices_1.Payload)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.EditMessageDto !== "undefined" && dto_1.EditMessageDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "editeMessage", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_message'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, microservices_1.Payload)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dto_1.DeleteMessageDto !== "undefined" && dto_1.DeleteMessageDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "deleteMessage", null);
MessagesController = __decorate([
    (0, common_1.Controller)('messages'),
    __param(0, (0, common_1.Inject)(constants_1.Services.MESSAGES)),
    __metadata("design:paramtypes", [typeof (_a = typeof messages_1.IMessagesService !== "undefined" && messages_1.IMessagesService) === "function" ? _a : Object, typeof (_b = typeof event_emitter_1.EventEmitter2 !== "undefined" && event_emitter_1.EventEmitter2) === "function" ? _b : Object])
], MessagesController);
exports.MessagesController = MessagesController;


/***/ }),

/***/ "./apps/chat/messages/src/messages.module.ts":
/*!***************************************************!*\
  !*** ./apps/chat/messages/src/messages.module.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const messages_controller_1 = __webpack_require__(/*! ./messages.controller */ "./apps/chat/messages/src/messages.controller.ts");
const conversations_module_1 = __webpack_require__(/*! ../../conversations/src/conversations.module */ "./apps/chat/conversations/src/conversations.module.ts");
const messages_service_1 = __webpack_require__(/*! ./messages.service */ "./apps/chat/messages/src/messages.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/chat/messages/src/prisma/prisma.module.ts");
const query_prisma_1 = __webpack_require__(/*! @common/utils/dto/query.prisma */ "./libs/common/utils/dto/query.prisma.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModuleMessages,
            conversations_module_1.ConversationsModule,
        ],
        controllers: [messages_controller_1.MessagesController],
        providers: [
            query_prisma_1.PrismaQuery,
            http_1.HTTP,
            {
                provide: constants_1.Services.MESSAGES,
                useClass: messages_service_1.MessagesService,
            },
        ],
        exports: [
            {
                provide: constants_1.Services.MESSAGES,
                useClass: messages_service_1.MessagesService,
            },
        ],
    })
], MessagesModule);
exports.MessagesModule = MessagesModule;


/***/ }),

/***/ "./apps/chat/messages/src/messages.service.ts":
/*!****************************************************!*\
  !*** ./apps/chat/messages/src/messages.service.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/chat/messages/src/prisma/prisma.service.ts");
const requets_util_1 = __webpack_require__(/*! @common/utils/requets.util */ "./libs/common/utils/requets.util.ts");
const utils_1 = __webpack_require__(/*! @common/utils */ "./libs/common/utils/index.ts");
const conversations_1 = __webpack_require__(/*! @apps/chat/conversations/src/conversations */ "./apps/chat/conversations/src/conversations.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
let MessagesService = class MessagesService extends requets_util_1.RESTfulService {
    constructor(prisma, prismaquery, http, conversationService) {
        super();
        this.prisma = prisma;
        this.prismaquery = prismaquery;
        this.http = http;
        this.conversationService = conversationService;
        this.params = {
            list: {
                filterFields: [],
                searchFields: [],
                orderFields: [],
            },
        };
    }
    getDb() {
        const query = this.prismaquery.where({ deletedDate: null });
        return query;
    }
    async getMessages(query) {
        const pagination = await this.getLists(query);
        const messages = await this.prisma.message.findMany({
            take: pagination.take,
            skip: pagination.skip,
            where: {
                conversationId: Number(query.conversationId)
            },
            orderBy: { createdDate: 'desc' }
        });
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Get messages successfully', messages);
    }
    async addMessage(dto) {
        try {
            const { createdBy, authorId, content, conversationId } = dto;
            const conversation = await this.prisma.conversation.findUnique({
                where: { id: conversationId }
            });
            if (!conversation) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The conversation does not existed', null);
            }
            else if (conversation.deletedDate) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The conversation has been deleted');
            }
            const { creator, recipient } = conversation;
            if (!await this.conversationService.isFriends(creator, recipient)) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Friend not found', null);
            }
            const addedData = await this.prisma.message.create({ data: dto });
            await Promise.all([
                this.prisma.conversation.update({
                    where: {
                        id: conversationId
                    },
                    data: {
                        lastMessageSentAt: new Date()
                    }
                }),
                this.prisma.conversation_Message.create({
                    data: {
                        conversationId: conversationId,
                        messageId: addedData.id
                    }
                })
            ]);
            const data = await this.prisma.conversation_Message.findMany({
                where: {
                    conversationId,
                    messageId: addedData.id
                },
                include: {
                    conversation: {
                        include: { userCreator: true, userRecipient: true, lastMessageSent: true }
                    },
                    message: {
                        include: { user: {
                                include: {
                                    Peer: true,
                                    presence: true,
                                    UserProfile: true
                                }
                            } }
                    }
                }
            });
            const lastMessageSent = data[0].conversation.lastMessageSent.find(msg => msg.messageId === data[0].messageId);
            const conversationObj = {
                createdAt: data[0].conversation.createdDate,
                id: data[0].conversation.id,
                lastMessageSentAt: lastMessageSent.createdDate,
                lastMessageSent,
                creator: this.reduceProps(data[0].conversation.userCreator),
                recipient: this.reduceProps(data[0].conversation.userRecipient),
            };
            const messageObj = {
                id: data[0].messageId,
                attachments: [],
                content: data[0].message.content,
                createdAt: data[0].message.createdDate,
                author: this.reduceProps(data[0].message.user),
                conversation: conversationObj
            };
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Create the message successfully', { message: messageObj, conversation: conversationObj });
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Create the message unsuccessfully', error);
        }
    }
    async deleteMessage(dto) {
        try {
            const message = await this.prisma.message.findUnique({
                where: {
                    id: dto.id
                }
            });
            if (!message) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The message does not existed', null);
            }
            else if (message.deletedDate) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The message has been deleted');
            }
            if (message.authorId !== dto.authorId || message.conversationId !== dto.conversationId) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Cannot delete this message', null);
            }
            await this.prisma.message.delete({
                where: {
                    id: dto.id
                },
            });
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Delete the message item successfully', { conversationId: dto.conversationId, messageId: dto.id });
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Delete the message item unsuccessfully', error);
        }
    }
    async editMessage(dto) {
        try {
            const message = await this.prisma.message.findUnique({
                where: {
                    id: dto.id
                }
            });
            if (!message) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The message does not existed', null);
            }
            else if (message.deletedDate) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The message has been deleted');
            }
            if (message.authorId !== dto.authorId || message.conversationId !== dto.conversationId) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Cannot edit this message', null);
            }
            const data = await this.prisma.message.update({
                where: {
                    id: dto.id
                },
                data: {
                    updatedBy: dto.updatedBy,
                    updatedDate: new Date(),
                    content: dto.content
                },
                select: {
                    id: true, content: true, createdDate: true, user: true, conversation: {
                        include: { userCreator: true, userRecipient: true }
                    }
                }
            });
            const messageObj = {
                id: data.id,
                content: data.content,
                createdAt: data.createdDate,
                author: this.reduceProps(data.user),
                conversation: {
                    creator: this.reduceProps(data.conversation.userCreator),
                    recipient: this.reduceProps(data.conversation.userRecipient)
                }
            };
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Edit the message item successfully', { message: messageObj });
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Edit the message item unsuccessfully', error);
        }
    }
    reduceProps(obj) {
        return {
            id: obj.id,
            firstName: obj.firstName,
            lastName: obj.lastName,
            email: obj.email,
            username: obj.username,
            peer: obj === null || obj === void 0 ? void 0 : obj.Peer,
            profile: obj === null || obj === void 0 ? void 0 : obj.UserProfile,
            presence: obj === null || obj === void 0 ? void 0 : obj.presence,
        };
    }
};
MessagesService = __decorate([
    (0, common_1.Injectable)(),
    __param(3, (0, common_1.Inject)(constants_1.Services.CONVERSATIONS)),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceMessages !== "undefined" && prisma_service_1.PrismaServiceMessages) === "function" ? _a : Object, typeof (_b = typeof utils_1.PrismaQuery !== "undefined" && utils_1.PrismaQuery) === "function" ? _b : Object, typeof (_c = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _c : Object, typeof (_d = typeof conversations_1.IConversationsService !== "undefined" && conversations_1.IConversationsService) === "function" ? _d : Object])
], MessagesService);
exports.MessagesService = MessagesService;


/***/ }),

/***/ "./apps/chat/messages/src/messages.ts":
/*!********************************************!*\
  !*** ./apps/chat/messages/src/messages.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/messages/src/prisma/prisma.module.ts":
/*!********************************************************!*\
  !*** ./apps/chat/messages/src/prisma/prisma.module.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleMessages = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/chat/messages/src/prisma/prisma.service.ts");
let PrismaModuleMessages = class PrismaModuleMessages {
};
PrismaModuleMessages = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceMessages],
        exports: [prisma_service_1.PrismaServiceMessages],
    })
], PrismaModuleMessages);
exports.PrismaModuleMessages = PrismaModuleMessages;


/***/ }),

/***/ "./apps/chat/messages/src/prisma/prisma.service.ts":
/*!*********************************************************!*\
  !*** ./apps/chat/messages/src/prisma/prisma.service.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceMessages = void 0;
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let PrismaServiceMessages = class PrismaServiceMessages extends mysql_1.PrismaClient {
    constructor(config) {
        super({
            datasources: {
                db: {
                    url: config.getOrThrow('MYSQL_DATABASE_URL'),
                },
            },
        });
    }
    cleanDatabase() {
        return this.$transaction([this.message.deleteMany()]);
    }
};
PrismaServiceMessages = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], PrismaServiceMessages);
exports.PrismaServiceMessages = PrismaServiceMessages;


/***/ }),

/***/ "./apps/chat/users/controllers/user-presence.controller.ts":
/*!*****************************************************************!*\
  !*** ./apps/chat/users/controllers/user-presence.controller.ts ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPresenceController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const decorators_1 = __webpack_require__(/*! ../../utils/decorators */ "./apps/chat/utils/decorators.ts");
const typeorm_1 = __webpack_require__(/*! ../../utils/typeorm */ "./apps/chat/utils/typeorm/index.ts");
const user_presence_dto_1 = __webpack_require__(/*! ../dtos/user-presence.dto */ "./apps/chat/users/dtos/user-presence.dto.ts");
const user_presence_1 = __webpack_require__(/*! ../interfaces/user-presence */ "./apps/chat/users/interfaces/user-presence.ts");
let UserPresenceController = class UserPresenceController {
    constructor(userPresenceService) {
        this.userPresenceService = userPresenceService;
    }
    async createPresence(dto) {
        return await this.userPresenceService.createPresence(dto);
    }
    updateStatus(user, id, dto) {
        return this.userPresenceService.updateStatus({ user, id, dto });
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('create-presence'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof user_presence_dto_1.UserPresenceDto !== "undefined" && user_presence_dto_1.UserPresenceDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserPresenceController.prototype, "createPresence", null);
__decorate([
    (0, microservices_1.MessagePattern)('update-status'),
    __param(0, (0, decorators_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _c : Object, Number, typeof (_d = typeof user_presence_dto_1.UserPresenceDto !== "undefined" && user_presence_dto_1.UserPresenceDto) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], UserPresenceController.prototype, "updateStatus", null);
UserPresenceController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.USER_PRESENCE),
    __param(0, (0, common_1.Inject)(constants_1.Services.USER_PRESENCE)),
    __metadata("design:paramtypes", [typeof (_a = typeof user_presence_1.IUserPresenceService !== "undefined" && user_presence_1.IUserPresenceService) === "function" ? _a : Object])
], UserPresenceController);
exports.UserPresenceController = UserPresenceController;


/***/ }),

/***/ "./apps/chat/users/controllers/user-profile.controller.ts":
/*!****************************************************************!*\
  !*** ./apps/chat/users/controllers/user-profile.controller.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProfilesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const typeorm_1 = __webpack_require__(/*! ../../utils/typeorm */ "./apps/chat/utils/typeorm/index.ts");
const types_1 = __webpack_require__(/*! ../../utils/types */ "./apps/chat/utils/types.ts");
const UpdateUserProfile_dto_1 = __webpack_require__(/*! ../dtos/UpdateUserProfile.dto */ "./apps/chat/users/dtos/UpdateUserProfile.dto.ts");
const user_profile_1 = __webpack_require__(/*! ../interfaces/user-profile */ "./apps/chat/users/interfaces/user-profile.ts");
let UserProfilesController = class UserProfilesController {
    constructor(userProfileService) {
        this.userProfileService = userProfileService;
    }
    async updateUserProfile(user, files, updateUserProfileDto) {
        console.log('Inside Users/Profiles Controller');
        const params = {};
        updateUserProfileDto.about && (params.about = updateUserProfileDto.about);
        files.banner && (params.banner = files.banner[0]);
        files.avatar && (params.avatar = files.avatar[0]);
        return this.userProfileService.createProfileOrUpdate(user.id, params);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('update-user-profile'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _b : Object, typeof (_c = typeof types_1.UserProfileFiles !== "undefined" && types_1.UserProfileFiles) === "function" ? _c : Object, typeof (_d = typeof UpdateUserProfile_dto_1.UpdateUserProfileDto !== "undefined" && UpdateUserProfile_dto_1.UpdateUserProfileDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], UserProfilesController.prototype, "updateUserProfile", null);
UserProfilesController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.USERS_PROFILES),
    __param(0, (0, common_1.Inject)(constants_1.Services.USERS_PROFILES)),
    __metadata("design:paramtypes", [typeof (_a = typeof user_profile_1.IUserProfile !== "undefined" && user_profile_1.IUserProfile) === "function" ? _a : Object])
], UserProfilesController);
exports.UserProfilesController = UserProfilesController;


/***/ }),

/***/ "./apps/chat/users/controllers/user.controller.ts":
/*!********************************************************!*\
  !*** ./apps/chat/users/controllers/user.controller.ts ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const UserAlreadyExists_1 = __webpack_require__(/*! ../exceptions/UserAlreadyExists */ "./apps/chat/users/exceptions/UserAlreadyExists.ts");
const user_1 = __webpack_require__(/*! ../interfaces/user */ "./apps/chat/users/interfaces/user.ts");
let UsersController = class UsersController {
    constructor(userService) {
        this.userService = userService;
    }
    searchUsers(query) {
        if (!query)
            throw new common_1.HttpException('Provide a valid query', common_1.HttpStatus.BAD_REQUEST);
        return this.userService.searchUsers(query);
    }
    async checkUsername({ username }) {
        if (!username)
            throw new common_1.HttpException('Invalid Query', common_1.HttpStatus.BAD_REQUEST);
        const user = await this.userService.findUser({ username });
        if (user.data)
            throw new UserAlreadyExists_1.UserAlreadyExists();
        return common_1.HttpStatus.OK;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('search-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "searchUsers", null);
__decorate([
    (0, microservices_1.MessagePattern)('check-user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "checkUsername", null);
UsersController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.USERS),
    __param(0, (0, common_1.Inject)(constants_1.Services.USERS)),
    __metadata("design:paramtypes", [typeof (_a = typeof user_1.IUserService !== "undefined" && user_1.IUserService) === "function" ? _a : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/chat/users/dtos/UpdateUserProfile.dto.ts":
/*!*******************************************************!*\
  !*** ./apps/chat/users/dtos/UpdateUserProfile.dto.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateUserProfileDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateUserProfileDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(200),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateUserProfileDto.prototype, "about", void 0);
exports.UpdateUserProfileDto = UpdateUserProfileDto;


/***/ }),

/***/ "./apps/chat/users/dtos/user-presence.dto.ts":
/*!***************************************************!*\
  !*** ./apps/chat/users/dtos/user-presence.dto.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPresenceDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UserPresenceDto {
    constructor() {
        this.showOffline = false;
    }
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserPresenceDto.prototype, "statusMessage", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], UserPresenceDto.prototype, "showOffline", void 0);
exports.UserPresenceDto = UserPresenceDto;


/***/ }),

/***/ "./apps/chat/users/exceptions/UserAlreadyExists.ts":
/*!*********************************************************!*\
  !*** ./apps/chat/users/exceptions/UserAlreadyExists.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserAlreadyExists = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
class UserAlreadyExists extends common_1.HttpException {
    constructor() {
        super('User already exists', common_1.HttpStatus.CONFLICT);
    }
}
exports.UserAlreadyExists = UserAlreadyExists;


/***/ }),

/***/ "./apps/chat/users/interfaces/user-presence.ts":
/*!*****************************************************!*\
  !*** ./apps/chat/users/interfaces/user-presence.ts ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/users/interfaces/user-profile.ts":
/*!****************************************************!*\
  !*** ./apps/chat/users/interfaces/user-profile.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/users/interfaces/user.ts":
/*!********************************************!*\
  !*** ./apps/chat/users/interfaces/user.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/users/prisma/prisma.module.ts":
/*!*************************************************!*\
  !*** ./apps/chat/users/prisma/prisma.module.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleUserPresence = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/chat/users/prisma/prisma.service.ts");
let PrismaModuleUserPresence = class PrismaModuleUserPresence {
};
PrismaModuleUserPresence = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceUserPresence, config_1.ConfigService],
        exports: [prisma_service_1.PrismaServiceUserPresence],
    })
], PrismaModuleUserPresence);
exports.PrismaModuleUserPresence = PrismaModuleUserPresence;


/***/ }),

/***/ "./apps/chat/users/prisma/prisma.service.ts":
/*!**************************************************!*\
  !*** ./apps/chat/users/prisma/prisma.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceUserPresence = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
let PrismaServiceUserPresence = class PrismaServiceUserPresence extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([this.userPresence.deleteMany()]);
    }
};
PrismaServiceUserPresence = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceUserPresence);
exports.PrismaServiceUserPresence = PrismaServiceUserPresence;


/***/ }),

/***/ "./apps/chat/users/services/user-presence.service.ts":
/*!***********************************************************!*\
  !*** ./apps/chat/users/services/user-presence.service.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPresenceService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/chat/users/prisma/prisma.service.ts");
let UserPresenceService = class UserPresenceService extends http_1.HTTP {
    constructor(prisma) {
        super();
        this.prisma = prisma;
    }
    async createPresence(dto) {
        try {
            const response = await this.prisma.userPresence.create({
                data: dto,
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'users.USER_PRESENCE.CREATED', response, 1);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async updateStatus({ user, id, dto, }) {
        try {
            if (!user) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'users.USER_PRESENCE.NOT_FOUND_CURRENT_USER');
            }
            if (!user.presence) {
                user.presence = await this.createPresence(dto);
            }
            const updated = await this.prisma.user.update({
                data: { presence: { create: { statusMessage: dto.statusMessage } } },
                where: { id: id },
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'users.USER_PRESENCE.UPDATED', updated, 1);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
};
UserPresenceService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceUserPresence !== "undefined" && prisma_service_1.PrismaServiceUserPresence) === "function" ? _a : Object])
], UserPresenceService);
exports.UserPresenceService = UserPresenceService;


/***/ }),

/***/ "./apps/chat/users/services/user-profile.service.ts":
/*!**********************************************************!*\
  !*** ./apps/chat/users/services/user-profile.service.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProfileService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const image_storage_1 = __webpack_require__(/*! ../../image-storage/image-storage */ "./apps/chat/image-storage/image-storage.ts");
const constants_1 = __webpack_require__(/*! ../../utils/constants */ "./apps/chat/utils/constants.ts");
const helpers_1 = __webpack_require__(/*! ../../utils/helpers */ "./apps/chat/utils/helpers.ts");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/chat/users/prisma/prisma.service.ts");
let UserProfileService = class UserProfileService {
    constructor(prisma, imageStorageService, http) {
        this.prisma = prisma;
        this.imageStorageService = imageStorageService;
        this.http = http;
    }
    async createProfile() {
        return await this.prisma.userProfile.create({
            data: {},
        });
    }
    async createProfileOrUpdate(userId, params) {
        const user = await this.prisma.user.findFirst({
            where: {
                id: userId,
            },
        });
        if (!user) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'users.USER.NOT_FOUND');
        }
        if (!user.profileId) {
            user.profileId = (await this.createProfile()).id;
            return this.updateProfile(user, params);
        }
        return this.updateProfile(user, params);
    }
    async updateProfile(user, params) {
        if (params.avatar) {
            user.profile.avatar = await this.updateAvatar(params.avatar);
        }
        if (params.banner) {
            user.profile.banner = await this.updateBanner(params.banner);
        }
        if (params.about) {
            user.profile.about = params.about;
        }
        const userId = user.id;
        delete user.id;
        return await this.prisma.user.update({
            data: Object.assign({}, user),
            where: { id: userId },
        });
    }
    async updateBanner(file) {
        console.log('Updating Banner');
        const key = (0, helpers_1.generateUUIDV4)();
        await this.imageStorageService.upload({ key, file });
        return key;
    }
    async updateAvatar(file) {
        console.log('Updating Avatar');
        const key = (0, helpers_1.generateUUIDV4)();
        await this.imageStorageService.upload({ key, file });
        return key;
    }
};
UserProfileService = __decorate([
    (0, common_1.Injectable)(),
    __param(1, (0, common_1.Inject)(constants_1.Services.IMAGE_UPLOAD_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceUserPresence !== "undefined" && prisma_service_1.PrismaServiceUserPresence) === "function" ? _a : Object, typeof (_b = typeof image_storage_1.IImageStorageService !== "undefined" && image_storage_1.IImageStorageService) === "function" ? _b : Object, typeof (_c = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _c : Object])
], UserProfileService);
exports.UserProfileService = UserProfileService;


/***/ }),

/***/ "./apps/chat/users/services/user.service.ts":
/*!**************************************************!*\
  !*** ./apps/chat/users/services/user.service.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const helpers_1 = __webpack_require__(/*! ../../utils/helpers */ "./apps/chat/utils/helpers.ts");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./apps/chat/users/prisma/prisma.service.ts");
let UserService = class UserService extends http_1.HTTP {
    constructor(prisma) {
        super();
        this.prisma = prisma;
    }
    async createUser(userDetails) {
        try {
            const existingUser = await this.prisma.user.findFirst({
                where: {
                    username: userDetails.username,
                },
            });
            if (existingUser)
                return this.setHttpRequest(common_1.HttpStatus.CONFLICT, 'users.USER.EXISTED');
            const password = await (0, helpers_1.hashPassword)(userDetails.password);
            const peer = this.prisma.peer.create({ data: {} });
            const params = Object.assign(Object.assign({}, userDetails), { password, peerId: (await peer).id });
            const newUser = await this.prisma.user.create({ data: Object.assign({}, params) });
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'users.USER.CREATED', newUser);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async findUser({ username }) {
        try {
            const response = await this.prisma.user.findFirst({
                select: {
                    username: true,
                    firstName: true,
                    lastName: true,
                    id: true,
                },
                where: {
                    username: username,
                },
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'users.USER.FIND_USER_SUCCESS', response);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
    async searchUsers(params) {
        try {
            let page = -1, limit = -1;
            const data = {};
            if (params.username) {
                data.username = { contains: params.username };
            }
            if (params.firstname) {
                data.firstName = { contains: params.firstname };
            }
            if (params.lastname) {
                data.lastName = { contains: params.lastname };
            }
            if (params.page) {
                page = parseInt(params.page);
            }
            if (params.limit) {
                limit = parseInt(params.page);
            }
            const response = await this.prisma.user.findMany({
                where: data,
                take: limit,
                skip: page * limit,
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'users.USER.SEARCH_USER_SUCCESS', response);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'systems.INTERNAL_SERVER_ERROR');
        }
    }
};
UserService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceUserPresence !== "undefined" && prisma_service_1.PrismaServiceUserPresence) === "function" ? _a : Object])
], UserService);
exports.UserService = UserService;


/***/ }),

/***/ "./apps/chat/users/users.module.ts":
/*!*****************************************!*\
  !*** ./apps/chat/users/users.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersModule = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const image_storage_module_1 = __webpack_require__(/*! ../image-storage/image-storage.module */ "./apps/chat/image-storage/image-storage.module.ts");
const constants_1 = __webpack_require__(/*! ../utils/constants */ "./apps/chat/utils/constants.ts");
const user_presence_controller_1 = __webpack_require__(/*! ./controllers/user-presence.controller */ "./apps/chat/users/controllers/user-presence.controller.ts");
const user_profile_controller_1 = __webpack_require__(/*! ./controllers/user-profile.controller */ "./apps/chat/users/controllers/user-profile.controller.ts");
const user_controller_1 = __webpack_require__(/*! ./controllers/user.controller */ "./apps/chat/users/controllers/user.controller.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/chat/users/prisma/prisma.module.ts");
const user_presence_service_1 = __webpack_require__(/*! ./services/user-presence.service */ "./apps/chat/users/services/user-presence.service.ts");
const user_profile_service_1 = __webpack_require__(/*! ./services/user-profile.service */ "./apps/chat/users/services/user-profile.service.ts");
const user_service_1 = __webpack_require__(/*! ./services/user.service */ "./apps/chat/users/services/user.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            image_storage_module_1.ImageStorageModule,
            prisma_module_1.PrismaModuleUserPresence,
        ],
        controllers: [
            user_controller_1.UsersController,
            user_profile_controller_1.UserProfilesController,
            user_presence_controller_1.UserPresenceController,
        ],
        providers: [
            http_1.HTTP,
            {
                provide: constants_1.Services.USERS,
                useClass: user_service_1.UserService,
            },
            {
                provide: constants_1.Services.USERS_PROFILES,
                useClass: user_profile_service_1.UserProfileService,
            },
            {
                provide: constants_1.Services.USER_PRESENCE,
                useClass: user_presence_service_1.UserPresenceService,
            },
        ],
        exports: [
            {
                provide: constants_1.Services.USERS,
                useClass: user_service_1.UserService,
            },
            {
                provide: constants_1.Services.USERS_PROFILES,
                useClass: user_profile_service_1.UserProfileService,
            },
            {
                provide: constants_1.Services.USER_PRESENCE,
                useClass: user_presence_service_1.UserPresenceService,
            },
        ],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/chat/utils/constants.ts":
/*!**************************************!*\
  !*** ./apps/chat/utils/constants.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProfileFileFields = exports.WebsocketEvents = exports.ServerEvents = exports.Services = exports.Routes = void 0;
var Routes;
(function (Routes) {
    Routes["AUTH"] = "auth";
    Routes["USERS"] = "users";
    Routes["USERS_PROFILES"] = "users/profiles";
    Routes["CONVERSATIONS"] = "conversations";
    Routes["MESSAGES"] = "conversations/:id/messages";
    Routes["GROUPS"] = "groups";
    Routes["GROUP_MESSAGES"] = "groups/:id/messages";
    Routes["GROUP_RECIPIENTS"] = "groups/:id/recipients";
    Routes["EXISTS"] = "exists";
    Routes["FRIENDS"] = "friends";
    Routes["FRIEND_REQUESTS"] = "friends/requests";
    Routes["USER_PRESENCE"] = "users/presence";
})(Routes = exports.Routes || (exports.Routes = {}));
var Services;
(function (Services) {
    Services["AUTH"] = "AUTH_SERVICE";
    Services["USERS"] = "USERS_SERVICE";
    Services["USERS_PROFILES"] = "USERS_PROFILES_SERVICE";
    Services["USER_PRESENCE"] = "USER_PRESENCE_SERVICE";
    Services["CONVERSATIONS"] = "CONVERSATIONS_SERVICE";
    Services["MESSAGES"] = "MESSAGE_SERVICE";
    Services["MESSAGE_ATTACHMENTS"] = "MESSAGE_ATTACHMENTS_SERVICE";
    Services["GATEWAY_SESSION_MANAGER"] = "GATEWAY_SESSION_MANAGER";
    Services["GROUPS"] = "GROUPS_SERVICE";
    Services["GROUP_MESSAGES"] = "GROUP_MESSAGES_SERVICE";
    Services["GROUP_RECIPIENTS"] = "GROUP_RECIPIENTS_SERVICE";
    Services["FRIENDS_SERVICE"] = "FRIENDS_SERVICE";
    Services["FRIENDS_REQUESTS_SERVICE"] = "FRIEND_REQUEST_SERVICE";
    Services["SPACES_CLIENT"] = "SPACES_CLIENT";
    Services["IMAGE_UPLOAD_SERVICE"] = "IMAGE_UPLOAD_SERVICE";
})(Services = exports.Services || (exports.Services = {}));
var ServerEvents;
(function (ServerEvents) {
    ServerEvents["FRIEND_REQUEST_CREATED"] = "friendrequest.create";
    ServerEvents["FRIEND_REQUEST_ACCEPTED"] = "friendrequest.accepted";
    ServerEvents["FRIEND_REQUEST_REJECTED"] = "friendrequest.rejected";
    ServerEvents["FRIEND_REQUEST_CANCELLED"] = "friendrequest.cancelled";
    ServerEvents["FRIEND_REMOVED"] = "friend.removed";
})(ServerEvents = exports.ServerEvents || (exports.ServerEvents = {}));
var WebsocketEvents;
(function (WebsocketEvents) {
    WebsocketEvents["FRIEND_REQUEST_ACCEPTED"] = "onFriendRequestAccepted";
    WebsocketEvents["FRIEND_REQUEST_REJECTED"] = "onFriendRequestRejected";
    WebsocketEvents["VIDEO_CALL_REJECTED"] = "onVideoCallRejected";
    WebsocketEvents["VOICE_CALL_ACCEPTED"] = "onVoiceCallAccepted";
    WebsocketEvents["VOICE_CALL_HANG_UP"] = "onVoiceCallHangUp";
    WebsocketEvents["VOICE_CALL_REJECTED"] = "onVoiceCallRejected";
})(WebsocketEvents = exports.WebsocketEvents || (exports.WebsocketEvents = {}));
exports.UserProfileFileFields = [
    {
        name: 'banner',
        maxCount: 1,
    },
    {
        name: 'avatar',
        maxCount: 1,
    },
];


/***/ }),

/***/ "./apps/chat/utils/decorators.ts":
/*!***************************************!*\
  !*** ./apps/chat/utils/decorators.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.AuthUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user;
});


/***/ }),

/***/ "./apps/chat/utils/helpers.ts":
/*!************************************!*\
  !*** ./apps/chat/utils/helpers.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.compressImage = exports.generateUUIDV4 = exports.isAuthorized = exports.compareHash = exports.hashPassword = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
const uuid_1 = __webpack_require__(/*! uuid */ "uuid");
const sharp_1 = __importDefault(__webpack_require__(/*! sharp */ "sharp"));
async function hashPassword(rawPassword) {
    const salt = await bcrypt.genSalt();
    return bcrypt.hash(rawPassword, salt);
}
exports.hashPassword = hashPassword;
async function compareHash(rawPassword, hashedPassword) {
    return bcrypt.compare(rawPassword, hashedPassword);
}
exports.compareHash = compareHash;
function isAuthorized(req, res, next) {
    console.log('isAuthorized');
    if (req.user)
        next();
    else
        throw new common_1.HttpException('Forbidden', common_1.HttpStatus.UNAUTHORIZED);
}
exports.isAuthorized = isAuthorized;
const generateUUIDV4 = () => (0, uuid_1.v4)();
exports.generateUUIDV4 = generateUUIDV4;
const compressImage = (attachment) => (0, sharp_1.default)(attachment.buffer).resize(300).jpeg().toBuffer();
exports.compressImage = compressImage;


/***/ }),

/***/ "./apps/chat/utils/interfaces.ts":
/*!***************************************!*\
  !*** ./apps/chat/utils/interfaces.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/BaseMessage.ts":
/*!*********************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/BaseMessage.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseMessage = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const User_1 = __webpack_require__(/*! ./User */ "./apps/chat/utils/typeorm/entities/User.ts");
class BaseMessage {
}
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], BaseMessage.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text', { nullable: true }),
    __metadata("design:type", String)
], BaseMessage.prototype, "content", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Number)
], BaseMessage.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => User_1.User, (user) => user.messages),
    __metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], BaseMessage.prototype, "author", void 0);
exports.BaseMessage = BaseMessage;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/Conversation.ts":
/*!**********************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/Conversation.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Conversation = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const Message_1 = __webpack_require__(/*! ./Message */ "./apps/chat/utils/typeorm/entities/Message.ts");
const User_1 = __webpack_require__(/*! ./User */ "./apps/chat/utils/typeorm/entities/User.ts");
let Conversation = class Conversation {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Conversation.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, { createForeignKeyConstraints: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], Conversation.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, { createForeignKeyConstraints: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_b = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _b : Object)
], Conversation.prototype, "recipient", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Message_1.Message, (message) => message.conversation, {
        cascade: ['insert', 'remove', 'update'],
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Conversation.prototype, "messages", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Number)
], Conversation.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Message_1.Message),
    (0, typeorm_1.JoinColumn)({ name: 'last_message_sent' }),
    __metadata("design:type", typeof (_c = typeof Message_1.Message !== "undefined" && Message_1.Message) === "function" ? _c : Object)
], Conversation.prototype, "lastMessageSent", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Conversation.prototype, "lastMessageSentAt", void 0);
Conversation = __decorate([
    (0, typeorm_1.Entity)({ name: 'conversations' }),
    (0, typeorm_1.Index)(['creator.id', 'recipient.id'], { unique: true })
], Conversation);
exports.Conversation = Conversation;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/Friend.ts":
/*!****************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/Friend.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Friend = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const User_1 = __webpack_require__(/*! ./User */ "./apps/chat/utils/typeorm/entities/User.ts");
let Friend = class Friend {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Friend.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, { createForeignKeyConstraints: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], Friend.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, { createForeignKeyConstraints: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_b = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _b : Object)
], Friend.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Number)
], Friend.prototype, "createdAt", void 0);
Friend = __decorate([
    (0, typeorm_1.Entity)({ name: 'friends' })
], Friend);
exports.Friend = Friend;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/FriendRequest.ts":
/*!***********************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/FriendRequest.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendRequest = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const User_1 = __webpack_require__(/*! ./User */ "./apps/chat/utils/typeorm/entities/User.ts");
let FriendRequest = class FriendRequest {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], FriendRequest.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, { createForeignKeyConstraints: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], FriendRequest.prototype, "sender", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, { createForeignKeyConstraints: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_b = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _b : Object)
], FriendRequest.prototype, "receiver", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)(),
    __metadata("design:type", Number)
], FriendRequest.prototype, "createdAt", void 0);
FriendRequest = __decorate([
    (0, typeorm_1.Entity)({ name: 'friend_requests' })
], FriendRequest);
exports.FriendRequest = FriendRequest;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/Group.ts":
/*!***************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/Group.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Group = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const GroupMessage_1 = __webpack_require__(/*! ./GroupMessage */ "./apps/chat/utils/typeorm/entities/GroupMessage.ts");
const User_1 = __webpack_require__(/*! ./User */ "./apps/chat/utils/typeorm/entities/User.ts");
let Group = class Group {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Group.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Group.prototype, "title", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => User_1.User, user => user.groups),
    (0, typeorm_1.JoinTable)(),
    __metadata("design:type", Array)
], Group.prototype, "users", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, { createForeignKeyConstraints: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], Group.prototype, "creator", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, { createForeignKeyConstraints: false }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_b = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _b : Object)
], Group.prototype, "owner", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GroupMessage_1.GroupMessage, message => message.group, {
        cascade: ['insert', 'remove', 'update'],
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Group.prototype, "messages", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ name: 'created_at' }),
    __metadata("design:type", Number)
], Group.prototype, "createdAt", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => GroupMessage_1.GroupMessage),
    (0, typeorm_1.JoinColumn)({ name: 'last_message_sent' }),
    __metadata("design:type", typeof (_c = typeof GroupMessage_1.GroupMessage !== "undefined" && GroupMessage_1.GroupMessage) === "function" ? _c : Object)
], Group.prototype, "lastMessageSent", void 0);
__decorate([
    (0, typeorm_1.UpdateDateColumn)({ name: 'updated_at' }),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], Group.prototype, "lastMessageSentAt", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Group.prototype, "avatar", void 0);
Group = __decorate([
    (0, typeorm_1.Entity)({ name: 'groups' })
], Group);
exports.Group = Group;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/GroupMessage.ts":
/*!**********************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/GroupMessage.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupMessage = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const BaseMessage_1 = __webpack_require__(/*! ./BaseMessage */ "./apps/chat/utils/typeorm/entities/BaseMessage.ts");
const Group_1 = __webpack_require__(/*! ./Group */ "./apps/chat/utils/typeorm/entities/Group.ts");
const GroupMessageAttachment_1 = __webpack_require__(/*! ./GroupMessageAttachment */ "./apps/chat/utils/typeorm/entities/GroupMessageAttachment.ts");
let GroupMessage = class GroupMessage extends BaseMessage_1.BaseMessage {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => Group_1.Group, (group) => group.messages),
    __metadata("design:type", typeof (_a = typeof Group_1.Group !== "undefined" && Group_1.Group) === "function" ? _a : Object)
], GroupMessage.prototype, "group", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => GroupMessageAttachment_1.GroupMessageAttachment, (attachment) => attachment.message),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], GroupMessage.prototype, "attachments", void 0);
GroupMessage = __decorate([
    (0, typeorm_1.Entity)({ name: 'group_messages' })
], GroupMessage);
exports.GroupMessage = GroupMessage;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/GroupMessageAttachment.ts":
/*!********************************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/GroupMessageAttachment.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupMessageAttachment = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const GroupMessage_1 = __webpack_require__(/*! ./GroupMessage */ "./apps/chat/utils/typeorm/entities/GroupMessage.ts");
let GroupMessageAttachment = class GroupMessageAttachment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], GroupMessageAttachment.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => GroupMessage_1.GroupMessage, (message) => message.attachments, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", typeof (_a = typeof GroupMessage_1.GroupMessage !== "undefined" && GroupMessage_1.GroupMessage) === "function" ? _a : Object)
], GroupMessageAttachment.prototype, "message", void 0);
GroupMessageAttachment = __decorate([
    (0, typeorm_1.Entity)({ name: 'group_message_attachments' })
], GroupMessageAttachment);
exports.GroupMessageAttachment = GroupMessageAttachment;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/Message.ts":
/*!*****************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/Message.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Message = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const BaseMessage_1 = __webpack_require__(/*! ./BaseMessage */ "./apps/chat/utils/typeorm/entities/BaseMessage.ts");
const Conversation_1 = __webpack_require__(/*! ./Conversation */ "./apps/chat/utils/typeorm/entities/Conversation.ts");
const MessageAttachment_1 = __webpack_require__(/*! ./MessageAttachment */ "./apps/chat/utils/typeorm/entities/MessageAttachment.ts");
let Message = class Message extends BaseMessage_1.BaseMessage {
};
__decorate([
    (0, typeorm_1.ManyToOne)(() => Conversation_1.Conversation, (conversation) => conversation.messages),
    __metadata("design:type", typeof (_a = typeof Conversation_1.Conversation !== "undefined" && Conversation_1.Conversation) === "function" ? _a : Object)
], Message.prototype, "conversation", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => MessageAttachment_1.MessageAttachment, (attachment) => attachment.message),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], Message.prototype, "attachments", void 0);
Message = __decorate([
    (0, typeorm_1.Entity)({ name: 'messages' })
], Message);
exports.Message = Message;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/MessageAttachment.ts":
/*!***************************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/MessageAttachment.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessageAttachment = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const Message_1 = __webpack_require__(/*! ./Message */ "./apps/chat/utils/typeorm/entities/Message.ts");
let MessageAttachment = class MessageAttachment {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], MessageAttachment.prototype, "key", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => Message_1.Message, (message) => message.attachments, {
        onDelete: 'CASCADE',
    }),
    __metadata("design:type", typeof (_a = typeof Message_1.Message !== "undefined" && Message_1.Message) === "function" ? _a : Object)
], MessageAttachment.prototype, "message", void 0);
MessageAttachment = __decorate([
    (0, typeorm_1.Entity)({ name: 'message_attachments' })
], MessageAttachment);
exports.MessageAttachment = MessageAttachment;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/Peer.ts":
/*!**************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/Peer.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Peer = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const User_1 = __webpack_require__(/*! ./User */ "./apps/chat/utils/typeorm/entities/User.ts");
let Peer = class Peer {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('uuid'),
    __metadata("design:type", String)
], Peer.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User, (user) => user.peer),
    __metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], Peer.prototype, "user", void 0);
Peer = __decorate([
    (0, typeorm_1.Entity)()
], Peer);
exports.Peer = Peer;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/Profile.ts":
/*!*****************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/Profile.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Profile = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const User_1 = __webpack_require__(/*! ./User */ "./apps/chat/utils/typeorm/entities/User.ts");
let Profile = class Profile {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], Profile.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: '' }),
    __metadata("design:type", String)
], Profile.prototype, "about", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "avatar", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], Profile.prototype, "banner", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => User_1.User),
    __metadata("design:type", typeof (_a = typeof User_1.User !== "undefined" && User_1.User) === "function" ? _a : Object)
], Profile.prototype, "user", void 0);
Profile = __decorate([
    (0, typeorm_1.Entity)({ name: 'profiles' })
], Profile);
exports.Profile = Profile;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/Session.ts":
/*!*****************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/Session.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Session = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let Session = class Session {
    constructor() {
        this.expiredAt = Date.now();
    }
};
__decorate([
    (0, typeorm_1.Index)(),
    (0, typeorm_1.Column)('bigint'),
    __metadata("design:type", Number)
], Session.prototype, "expiredAt", void 0);
__decorate([
    (0, typeorm_1.PrimaryColumn)('varchar', { length: 255 }),
    __metadata("design:type", String)
], Session.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)('text'),
    __metadata("design:type", String)
], Session.prototype, "json", void 0);
__decorate([
    (0, typeorm_1.DeleteDateColumn)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], Session.prototype, "destroyedAt", void 0);
Session = __decorate([
    (0, typeorm_1.Entity)({ name: 'sessions' })
], Session);
exports.Session = Session;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/User.ts":
/*!**************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/User.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.User = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
const Group_1 = __webpack_require__(/*! ./Group */ "./apps/chat/utils/typeorm/entities/Group.ts");
const Message_1 = __webpack_require__(/*! ./Message */ "./apps/chat/utils/typeorm/entities/Message.ts");
const Peer_1 = __webpack_require__(/*! ./Peer */ "./apps/chat/utils/typeorm/entities/Peer.ts");
const Profile_1 = __webpack_require__(/*! ./Profile */ "./apps/chat/utils/typeorm/entities/Profile.ts");
const UserPresence_1 = __webpack_require__(/*! ./UserPresence */ "./apps/chat/utils/typeorm/entities/UserPresence.ts");
let User = class User {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], User.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ unique: true }),
    __metadata("design:type", String)
], User.prototype, "username", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], User.prototype, "email", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "firstName", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], User.prototype, "lastName", void 0);
__decorate([
    (0, typeorm_1.Column)({ select: false }),
    (0, class_transformer_1.Exclude)(),
    __metadata("design:type", String)
], User.prototype, "password", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => Message_1.Message, (message) => message.author),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", Array)
], User.prototype, "messages", void 0);
__decorate([
    (0, typeorm_1.ManyToMany)(() => Group_1.Group, (group) => group.users),
    __metadata("design:type", Array)
], User.prototype, "groups", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Profile_1.Profile, { cascade: ['insert', 'update'] }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_a = typeof Profile_1.Profile !== "undefined" && Profile_1.Profile) === "function" ? _a : Object)
], User.prototype, "profile", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => UserPresence_1.UserPresence, { cascade: ['insert', 'update'] }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_b = typeof UserPresence_1.UserPresence !== "undefined" && UserPresence_1.UserPresence) === "function" ? _b : Object)
], User.prototype, "presence", void 0);
__decorate([
    (0, typeorm_1.OneToOne)(() => Peer_1.Peer, (peer) => peer.user, {
        cascade: ['insert', 'remove', 'update'],
    }),
    (0, typeorm_1.JoinColumn)(),
    __metadata("design:type", typeof (_c = typeof Peer_1.Peer !== "undefined" && Peer_1.Peer) === "function" ? _c : Object)
], User.prototype, "peer", void 0);
User = __decorate([
    (0, typeorm_1.Entity)({ name: 'users' })
], User);
exports.User = User;


/***/ }),

/***/ "./apps/chat/utils/typeorm/entities/UserPresence.ts":
/*!**********************************************************!*\
  !*** ./apps/chat/utils/typeorm/entities/UserPresence.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPresence = void 0;
const typeorm_1 = __webpack_require__(/*! typeorm */ "typeorm");
let UserPresence = class UserPresence {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], UserPresence.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ nullable: true }),
    __metadata("design:type", String)
], UserPresence.prototype, "statusMessage", void 0);
__decorate([
    (0, typeorm_1.Column)({ default: false }),
    __metadata("design:type", Boolean)
], UserPresence.prototype, "showOffline", void 0);
UserPresence = __decorate([
    (0, typeorm_1.Entity)({ name: 'user_presence' })
], UserPresence);
exports.UserPresence = UserPresence;


/***/ }),

/***/ "./apps/chat/utils/typeorm/index.ts":
/*!******************************************!*\
  !*** ./apps/chat/utils/typeorm/index.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Peer = exports.UserPresence = exports.GroupMessageAttachment = exports.MessageAttachment = exports.Profile = exports.Friend = exports.FriendRequest = exports.GroupMessage = exports.Group = exports.Message = exports.Conversation = exports.Session = exports.User = void 0;
const User_1 = __webpack_require__(/*! ./entities/User */ "./apps/chat/utils/typeorm/entities/User.ts");
Object.defineProperty(exports, "User", ({ enumerable: true, get: function () { return User_1.User; } }));
const Session_1 = __webpack_require__(/*! ./entities/Session */ "./apps/chat/utils/typeorm/entities/Session.ts");
Object.defineProperty(exports, "Session", ({ enumerable: true, get: function () { return Session_1.Session; } }));
const Conversation_1 = __webpack_require__(/*! ./entities/Conversation */ "./apps/chat/utils/typeorm/entities/Conversation.ts");
Object.defineProperty(exports, "Conversation", ({ enumerable: true, get: function () { return Conversation_1.Conversation; } }));
const Message_1 = __webpack_require__(/*! ./entities/Message */ "./apps/chat/utils/typeorm/entities/Message.ts");
Object.defineProperty(exports, "Message", ({ enumerable: true, get: function () { return Message_1.Message; } }));
const Group_1 = __webpack_require__(/*! ./entities/Group */ "./apps/chat/utils/typeorm/entities/Group.ts");
Object.defineProperty(exports, "Group", ({ enumerable: true, get: function () { return Group_1.Group; } }));
const GroupMessage_1 = __webpack_require__(/*! ./entities/GroupMessage */ "./apps/chat/utils/typeorm/entities/GroupMessage.ts");
Object.defineProperty(exports, "GroupMessage", ({ enumerable: true, get: function () { return GroupMessage_1.GroupMessage; } }));
const FriendRequest_1 = __webpack_require__(/*! ./entities/FriendRequest */ "./apps/chat/utils/typeorm/entities/FriendRequest.ts");
Object.defineProperty(exports, "FriendRequest", ({ enumerable: true, get: function () { return FriendRequest_1.FriendRequest; } }));
const Friend_1 = __webpack_require__(/*! ./entities/Friend */ "./apps/chat/utils/typeorm/entities/Friend.ts");
Object.defineProperty(exports, "Friend", ({ enumerable: true, get: function () { return Friend_1.Friend; } }));
const Profile_1 = __webpack_require__(/*! ./entities/Profile */ "./apps/chat/utils/typeorm/entities/Profile.ts");
Object.defineProperty(exports, "Profile", ({ enumerable: true, get: function () { return Profile_1.Profile; } }));
const MessageAttachment_1 = __webpack_require__(/*! ./entities/MessageAttachment */ "./apps/chat/utils/typeorm/entities/MessageAttachment.ts");
Object.defineProperty(exports, "MessageAttachment", ({ enumerable: true, get: function () { return MessageAttachment_1.MessageAttachment; } }));
const GroupMessageAttachment_1 = __webpack_require__(/*! ./entities/GroupMessageAttachment */ "./apps/chat/utils/typeorm/entities/GroupMessageAttachment.ts");
Object.defineProperty(exports, "GroupMessageAttachment", ({ enumerable: true, get: function () { return GroupMessageAttachment_1.GroupMessageAttachment; } }));
const UserPresence_1 = __webpack_require__(/*! ./entities/UserPresence */ "./apps/chat/utils/typeorm/entities/UserPresence.ts");
Object.defineProperty(exports, "UserPresence", ({ enumerable: true, get: function () { return UserPresence_1.UserPresence; } }));
const Peer_1 = __webpack_require__(/*! ./entities/Peer */ "./apps/chat/utils/typeorm/entities/Peer.ts");
Object.defineProperty(exports, "Peer", ({ enumerable: true, get: function () { return Peer_1.Peer; } }));
const entities = [
    User_1.User,
    Session_1.Session,
    Conversation_1.Conversation,
    Message_1.Message,
    Group_1.Group,
    GroupMessage_1.GroupMessage,
    FriendRequest_1.FriendRequest,
    Friend_1.Friend,
    Profile_1.Profile,
    MessageAttachment_1.MessageAttachment,
    GroupMessageAttachment_1.GroupMessageAttachment,
    UserPresence_1.UserPresence,
    Peer_1.Peer,
];
exports["default"] = entities;


/***/ }),

/***/ "./apps/chat/utils/types.ts":
/*!**********************************!*\
  !*** ./apps/chat/utils/types.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/auth/prisma/index.ts":
/*!******************************************!*\
  !*** ./libs/common/auth/prisma/index.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./prisma.module */ "./libs/common/auth/prisma/prisma.module.ts"), exports);
__exportStar(__webpack_require__(/*! ./prisma.service */ "./libs/common/auth/prisma/prisma.service.ts"), exports);


/***/ }),

/***/ "./libs/common/auth/prisma/prisma.module.ts":
/*!**************************************************!*\
  !*** ./libs/common/auth/prisma/prisma.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleAuth = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./libs/common/auth/prisma/prisma.service.ts");
let PrismaModuleAuth = class PrismaModuleAuth {
};
PrismaModuleAuth = __decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceAuth],
        exports: [prisma_service_1.PrismaServiceAuth],
    })
], PrismaModuleAuth);
exports.PrismaModuleAuth = PrismaModuleAuth;


/***/ }),

/***/ "./libs/common/auth/prisma/prisma.service.ts":
/*!***************************************************!*\
  !*** ./libs/common/auth/prisma/prisma.service.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceAuth = void 0;
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PrismaServiceAuth = class PrismaServiceAuth extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([
            this.user.deleteMany(),
        ]);
    }
};
PrismaServiceAuth = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceAuth);
exports.PrismaServiceAuth = PrismaServiceAuth;


/***/ }),

/***/ "./libs/common/http/http.module.ts":
/*!*****************************************!*\
  !*** ./libs/common/http/http.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ErrorsInterceptor = exports.RpcValidationFilter = exports.HttpExceptionFilter = exports.HTTP = exports.CustomResponse = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const package_json_1 = __webpack_require__(/*! ../../../package.json */ "./package.json");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const nestjs_i18n_1 = __webpack_require__(/*! nestjs-i18n */ "nestjs-i18n");
class CustomResponse {
    constructor(code, message, data, totalRow, success = false) {
        this.version = package_json_1.version;
        this.code = code;
        this.message = message;
        if (totalRow > 0)
            this.totalRow = totalRow;
        this.data = data;
        this.success = success;
    }
}
exports.CustomResponse = CustomResponse;
class HTTP {
    setHttpRequest(code, message, data = null, totalRow = 0, success = true) {
        if (code != common_1.HttpStatus.OK)
            success = false;
        this.response = new CustomResponse(code, message, data, totalRow, success);
        return this.response;
    }
    success(data = null, code = common_1.HttpStatus.OK, message = 'Đăng nhập thành công', success = true, totalRow = 0) {
        this.response = new CustomResponse(code, message, data, totalRow, success);
        return this.response;
    }
    notFound() {
        this.response = new CustomResponse(common_1.HttpStatus.NOT_FOUND, 'Not found', null, 0, false);
        return this.response;
    }
    error(message, code = common_1.HttpStatus.BAD_REQUEST, error = '') {
        const response = new CustomResponse(code, message, null, 0, false);
        throw new microservices_1.RpcException(response);
    }
}
exports.HTTP = HTTP;
let HttpExceptionFilter = class HttpExceptionFilter extends HTTP {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        const status = exception.getStatus();
        response.status(status).json(this.setHttpRequest(status, exception.message, {
            error: JSON.parse(JSON.stringify(exception.getResponse())).message[0],
        }, 0, false));
    }
};
HttpExceptionFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], HttpExceptionFilter);
exports.HttpExceptionFilter = HttpExceptionFilter;
let RpcValidationFilter = class RpcValidationFilter extends HTTP {
    catch(exception, host) {
        const status = exception.getStatus();
        const data = JSON.parse(JSON.stringify(exception.getResponse())).message[0];
        return this.setHttpRequest(status, data, null, 0, false);
    }
};
RpcValidationFilter = __decorate([
    (0, common_1.Catch)(common_1.HttpException)
], RpcValidationFilter);
exports.RpcValidationFilter = RpcValidationFilter;
let ErrorsInterceptor = class ErrorsInterceptor extends HTTP {
    getKeyMessage(message) {
        let key = '';
        switch (message) {
            case 'File too large':
                key = 'systems.FILE_UPLOAD.FILE_TOO_LARGE';
                break;
            case 'Too many files':
                key = 'systems.FILE_UPLOAD.TOO_MANY_FILES';
                break;
            default:
                key = message;
                break;
        }
        return key;
    }
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const i18n = (0, nestjs_i18n_1.getI18nContextFromRequest)(request);
        return next.handle().pipe((0, rxjs_1.tap)({
            error: err => {
                err.message = this.getKeyMessage(err.message);
                throw this.setHttpRequest(err.status, i18n.t(err.message), null, 0, false);
            },
        }));
    }
};
ErrorsInterceptor = __decorate([
    (0, common_1.Injectable)()
], ErrorsInterceptor);
exports.ErrorsInterceptor = ErrorsInterceptor;


/***/ }),

/***/ "./libs/common/http/index.ts":
/*!***********************************!*\
  !*** ./libs/common/http/index.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./http.module */ "./libs/common/http/http.module.ts"), exports);


/***/ }),

/***/ "./libs/common/prisma/mysql_prisma_client.ts":
/*!***************************************************!*\
  !*** ./libs/common/prisma/mysql_prisma_client.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MySQLClient = void 0;
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
let MySQLClient = class MySQLClient extends mysql_1.PrismaClient {
    constructor(config) {
        super({
            datasources: {
                db: {
                    url: config.getOrThrow('MYSQL_DATABASE_URL'),
                },
            },
        });
    }
    cleanDatabase(callback) {
        return callback;
    }
};
MySQLClient = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], MySQLClient);
exports.MySQLClient = MySQLClient;


/***/ }),

/***/ "./libs/common/redis/index.ts":
/*!************************************!*\
  !*** ./libs/common/redis/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./redis.module */ "./libs/common/redis/redis.module.ts"), exports);


/***/ }),

/***/ "./libs/common/redis/redis.module.ts":
/*!*******************************************!*\
  !*** ./libs/common/redis/redis.module.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RedisModule = void 0;
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
class RedisModule {
    static getRedisOption(option) {
        const config = new config_1.ConfigService();
        return Object.assign(Object.assign({}, option), { transport: microservices_1.Transport.REDIS, options: {
                host: config.getOrThrow('HOST_REDIS_SERVER'),
                port: config.getOrThrow('PORT_PUBLIC_REDIS'),
                password: config.getOrThrow('PASSWORD_REDIS'),
            } });
    }
    static register(name) {
        return {
            module: RedisModule,
            imports: [
                microservices_1.ClientsModule.registerAsync([
                    {
                        name: name,
                        useFactory: (configService) => ({
                            transport: microservices_1.Transport.REDIS,
                            options: {
                                host: configService.getOrThrow('HOST_REDIS_SERVER'),
                                port: configService.getOrThrow('PORT_PUBLIC_REDIS'),
                                password: configService.getOrThrow('PASSWORD_REDIS'),
                            },
                        }),
                        inject: [config_1.ConfigService],
                    },
                ]),
            ],
            exports: [microservices_1.ClientsModule],
        };
    }
}
exports.RedisModule = RedisModule;


/***/ }),

/***/ "./libs/common/utils/dto/current-user.dto.ts":
/*!***************************************************!*\
  !*** ./libs/common/utils/dto/current-user.dto.ts ***!
  \***************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/utils/dto/index.ts":
/*!****************************************!*\
  !*** ./libs/common/utils/dto/index.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./current-user.dto */ "./libs/common/utils/dto/current-user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./query.dto */ "./libs/common/utils/dto/query.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./query.prisma */ "./libs/common/utils/dto/query.prisma.ts"), exports);


/***/ }),

/***/ "./libs/common/utils/dto/query.dto.ts":
/*!********************************************!*\
  !*** ./libs/common/utils/dto/query.dto.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


/***/ }),

/***/ "./libs/common/utils/dto/query.prisma.ts":
/*!***********************************************!*\
  !*** ./libs/common/utils/dto/query.prisma.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaQuery = void 0;
class PrismaQuery {
    constructor(connection) {
        this._select = {};
        this._from = [];
        this._join = {};
        this._group = [];
        this._group_id = [];
        this._condition = [];
        this._where = {
            _search_or: [],
            _filter_and: [],
        };
        this._order = [];
        this.params = {};
        this.order_by = (statement) => {
            (Array.isArray(statement) ? statement : [statement]).forEach(statement => this._order.push(statement));
            return this;
        };
        this.connection = connection;
    }
    reset(key) {
        if (typeof key === 'string') {
            switch (key) {
                case 'select':
                    this._select = {};
                    break;
                case 'condition':
                    this._condition = [];
                    break;
                case 'where':
                    this._where['_search_or'] = [];
                    this._where['_filter_and'] = [];
                    break;
                case 'order':
                    this._order = [];
                    break;
            }
            return this;
        }
        return this;
    }
    resetAll() {
        this._select = {};
        this._condition = [];
        this._where['_search_or'] = [];
        this._where['_filter_and'] = [];
        this._order = [];
        return this;
    }
    select(statement) {
        (Array.isArray(statement) ? statement : [statement]).forEach(statement => this._select.push(statement));
        return this;
    }
    join(statement) {
        (Array.isArray(statement) ? statement : [statement]).forEach(statement => this._join.push(statement));
        return this;
    }
    where(statement) {
        (Array.isArray(statement) ? statement : [statement]).forEach(statement => this._condition.push(statement));
        return this;
    }
    whereSearch(statement) {
        (Array.isArray(statement) ? statement : [statement]).forEach(statement => this._where['_search_or'].push(statement));
        return this;
    }
    whereFilter(statement) {
        Array.isArray(statement) ? statement : [statement];
        this._where['_filter_and'] = statement;
        return this;
    }
    async toRawPrismaDb() {
        const queryFinalActive = {};
        const queryFinal = [];
        const orderBy = [];
        if (this._condition) {
            this._condition.forEach((item = {}) => {
                queryFinal.push(item);
            });
        }
        if (this._where) {
            const obj1 = {};
            const obj2 = {};
            const obj3 = {};
            if (this._where['_search_or'].length > 0 &&
                this._where['_filter_and'].length === 0) {
                obj1['OR'] = this._where['_search_or'];
                queryFinal.push(obj1);
            }
            if (this._where['_filter_and'].length > 0 &&
                this._where['_search_or'].length === 0) {
                const arr = [];
                this._where['_filter_and'].forEach((item) => {
                    arr.push(JSON.parse(item));
                });
                obj1['OR'] = arr;
                queryFinal.push(obj1);
            }
            if (this._where['_search_or'].length > 0 &&
                this._where['_filter_and'].length > 0) {
                const arr = [];
                this._where['_filter_and'].forEach((item) => {
                    arr.push(JSON.parse(item));
                });
                obj1['OR'] = this._where['_search_or'];
                obj2['OR'] = arr;
                obj3['AND'] = [obj1, obj2];
                queryFinal.push(obj3);
            }
        }
        if (this._order.length) {
            const arr = [];
            this._order.forEach((item) => {
                arr.push(JSON.parse(item));
            });
            orderBy.push(arr);
        }
        queryFinalActive['AND'] = queryFinal;
        this.resetAll();
        return { order: orderBy[0], where: queryFinalActive };
    }
}
exports.PrismaQuery = PrismaQuery;


/***/ }),

/***/ "./libs/common/utils/file/index.ts":
/*!*****************************************!*\
  !*** ./libs/common/utils/file/index.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.exportDataToCsv = exports.deleteFile = exports.uploadFileFromPath = exports.uploadFile = void 0;
const csv_writer_1 = __webpack_require__(/*! csv-writer */ "csv-writer");
const uploadFile = async (file, storage, bucket) => {
    return new Promise((resolves, rejects) => {
        const fileUpload = storage
            .bucket(bucket)
            .file(file.originalname);
        const stream = fileUpload.createWriteStream({
            resumable: true,
            metadata: {
                contentType: file.mimetype,
            },
        });
        stream.on('finish', async () => {
            resolves(fileUpload.id);
        });
        stream.on('error', err => {
            rejects(err);
        });
        stream.end(file.buffer);
    });
};
exports.uploadFile = uploadFile;
const uploadFileFromPath = async (path, storage, bucket) => {
    return new Promise((resolves, rejects) => {
        storage.bucket(bucket).upload(path, (error, file) => {
            if (error) {
                rejects(error);
                return;
            }
            resolves(file.id);
        });
    });
};
exports.uploadFileFromPath = uploadFileFromPath;
const deleteFile = async (fileName, storage, bucket) => {
    return new Promise(async (resolves, rejects) => {
        try {
            await storage
                .bucket(bucket)
                .file(fileName)
                .delete({ ignoreNotFound: true });
            resolves({});
        }
        catch (error) {
            rejects(error);
        }
    });
};
exports.deleteFile = deleteFile;
const exportDataToCsv = (data, header, filePath) => {
    return new Promise(async (resolves, rejects) => {
        try {
            const writer = (0, csv_writer_1.createObjectCsvWriter)({
                path: filePath,
                header,
                encoding: 'utf8'
            });
            await writer.writeRecords(data);
            resolves(filePath);
        }
        catch (error) {
            rejects(error);
        }
    });
};
exports.exportDataToCsv = exportDataToCsv;


/***/ }),

/***/ "./libs/common/utils/filter-data/index.ts":
/*!************************************************!*\
  !*** ./libs/common/utils/filter-data/index.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.removeObjectProperties = exports.removeRedundant = void 0;
const getNestedObjectValue = (obj, fields) => {
    var _a;
    for (const field of fields) {
        obj[field] = (_a = obj[field]) === null || _a === void 0 ? void 0 : _a.map((data) => Object.values(data)[0]);
    }
    return obj;
};
const removeRedundant = (target, fields) => {
    if (!(target === null || target === void 0 ? void 0 : target.length)) {
        return getNestedObjectValue(target, fields);
    }
    return target === null || target === void 0 ? void 0 : target.map((item) => {
        return getNestedObjectValue(item, fields);
    });
};
exports.removeRedundant = removeRedundant;
const removeObjectProperties = (target, fields) => {
    for (const field of fields) {
        delete target[field];
    }
    return target;
};
exports.removeObjectProperties = removeObjectProperties;


/***/ }),

/***/ "./libs/common/utils/index.ts":
/*!************************************!*\
  !*** ./libs/common/utils/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./filter-data */ "./libs/common/utils/filter-data/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./dto */ "./libs/common/utils/dto/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./file */ "./libs/common/utils/file/index.ts"), exports);


/***/ }),

/***/ "./libs/common/utils/requets.util.ts":
/*!*******************************************!*\
  !*** ./libs/common/utils/requets.util.ts ***!
  \*******************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RESTfulService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const key_query_util_1 = __webpack_require__(/*! ./validates/key-query.util */ "./libs/common/utils/validates/key-query.util.ts");
class RESTfulService extends http_1.HTTP {
    constructor() {
        super(...arguments);
        this.params = {};
    }
    async getLists(params) {
        var _a, _b, _c, _d;
        const queryDb = this.getDb();
        const paginationParams = {
            skip: 0,
            take: 10,
            sort: [],
            search: [],
            cursor: 0,
        };
        const { page, limit, order, q } = params;
        if (!(0, key_query_util_1.isKeyQueryValid)(limit || '-1', /^(-*)\d+$/g)) {
            throw this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'limit value must be the number');
        }
        if (!(0, key_query_util_1.isKeyQueryValid)(page || '1', /^\d+$/g)) {
            throw this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'page value must be the positive number');
        }
        if (!(0, key_query_util_1.isKeyQueryValid)(order || 'createdDate asc', /^((\w+ \w+)(,(\w+ \w+))*)+$/g)) {
            throw this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'order value is not valid');
        }
        let _limit = parseInt(limit);
        let _page = parseInt(page);
        if (_page < 1) {
            _page = 1;
        }
        if (_limit === -1) {
            _limit = 0;
        }
        else if (_limit < 1) {
            _limit = 10;
        }
        const offset = (_page - 1) * _limit;
        paginationParams.skip = offset ? offset : 0;
        paginationParams.take = _limit ? _limit : undefined;
        if (params === null || params === void 0 ? void 0 : params.startId) {
            paginationParams.skip = 1;
            paginationParams.cursor = params.startId
                ? parseInt(params.startId.toString())
                : 0;
        }
        const searchFields = (_a = this.params.list) === null || _a === void 0 ? void 0 : _a.searchFields;
        if (q && (searchFields === null || searchFields === void 0 ? void 0 : searchFields.length)) {
            const orWhere = [];
            for (let field of searchFields) {
                const obj1 = {};
                const obj2 = {};
                if (field.includes('int-')) {
                    field = field.split('-')[1];
                    obj1['in'] = isNaN(parseInt(q)) ? undefined : parseInt(q);
                }
                else if (field.includes('float-')) {
                    field = field.split('-')[1];
                    obj1['in'] = isNaN(parseFloat(q)) ? undefined : parseFloat(q);
                }
                else {
                    obj1['contains'] = q;
                }
                obj2[field] = obj1;
                orWhere.push(obj2);
            }
            if (orWhere.length) {
                queryDb.whereSearch(orWhere);
            }
        }
        const filterFields = (_b = this.params.list) === null || _b === void 0 ? void 0 : _b.filterFields;
        if (filterFields === null || filterFields === void 0 ? void 0 : filterFields.length) {
            const orWhereMulti = [];
            for (const field of filterFields) {
                const hasAlias = field.indexOf('.') !== -1;
                const fieldValue = params[`f_${hasAlias ? field.split('.')[1] : field}`];
                if (fieldValue) {
                    const obj = {};
                    if (fieldValue.indexOf('|') === -1) {
                        if (field.includes('Id') || field.includes('id')) {
                            obj[field] = parseInt(`${fieldValue}`);
                        }
                        else {
                            obj[field] = `${fieldValue}`;
                        }
                        orWhereMulti.push(JSON.stringify(obj));
                    }
                    else {
                        fieldValue.split('|').map(item => {
                            if (field.includes('Id') || field.includes('id')) {
                                obj[field] = parseInt(item);
                            }
                            else {
                                obj[field] = item;
                            }
                            orWhereMulti.push(JSON.stringify(obj));
                        });
                    }
                }
            }
            if (orWhereMulti.length) {
                queryDb.whereFilter(orWhereMulti);
            }
        }
        const orderFields = (_d = (_c = this.params) === null || _c === void 0 ? void 0 : _c.list) === null || _d === void 0 ? void 0 : _d.orderFields;
        if (order && (orderFields === null || orderFields === void 0 ? void 0 : orderFields.length)) {
            for (const o of order.split(/\s*,\s*/g)) {
                const _sort = {};
                let [ordering, direction] = o.split(/\s+/g);
                direction = direction.toLowerCase();
                if (!['asc', 'desc'].includes(direction)) {
                    direction = 'asc';
                }
                if (ordering && orderFields.includes(ordering)) {
                    _sort[ordering] = direction;
                    queryDb.order_by(JSON.stringify(_sort));
                }
            }
        }
        const resultQuery = await queryDb.toRawPrismaDb();
        paginationParams.sort = resultQuery === null || resultQuery === void 0 ? void 0 : resultQuery.order;
        paginationParams.search = resultQuery === null || resultQuery === void 0 ? void 0 : resultQuery.where;
        return paginationParams;
    }
}
exports.RESTfulService = RESTfulService;


/***/ }),

/***/ "./libs/common/utils/validates/key-query.util.ts":
/*!*******************************************************!*\
  !*** ./libs/common/utils/validates/key-query.util.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.isFKeyQueryValid = exports.isKeyQueryValid = void 0;
function isKeyQueryValid(keyName, pattern) {
    return keyName && keyName.match(pattern);
}
exports.isKeyQueryValid = isKeyQueryValid;
function isFKeyQueryValid(keyName, pattern = /^[-1|((\d+)(\|\d)*)]+$/g) {
    return keyName && keyName.match(pattern);
}
exports.isFKeyQueryValid = isFKeyQueryValid;


/***/ }),

/***/ "@aws-sdk/client-s3":
/*!*************************************!*\
  !*** external "@aws-sdk/client-s3" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@aws-sdk/client-s3");

/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/config":
/*!*********************************!*\
  !*** external "@nestjs/config" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@nestjs/config");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/event-emitter":
/*!****************************************!*\
  !*** external "@nestjs/event-emitter" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/event-emitter");

/***/ }),

/***/ "@nestjs/jwt":
/*!******************************!*\
  !*** external "@nestjs/jwt" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("@nestjs/jwt");

/***/ }),

/***/ "@nestjs/microservices":
/*!****************************************!*\
  !*** external "@nestjs/microservices" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("@nestjs/microservices");

/***/ }),

/***/ "@nestjs/passport":
/*!***********************************!*\
  !*** external "@nestjs/passport" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@nestjs/passport");

/***/ }),

/***/ "@nestjs/throttler":
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "@prisma/mysql":
/*!********************************!*\
  !*** external "@prisma/mysql" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@prisma/mysql");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("bcrypt");

/***/ }),

/***/ "class-transformer":
/*!************************************!*\
  !*** external "class-transformer" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("class-transformer");

/***/ }),

/***/ "class-validator":
/*!**********************************!*\
  !*** external "class-validator" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("class-validator");

/***/ }),

/***/ "csv-writer":
/*!*****************************!*\
  !*** external "csv-writer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("csv-writer");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("lodash");

/***/ }),

/***/ "nestjs-i18n":
/*!******************************!*\
  !*** external "nestjs-i18n" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nestjs-i18n");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "sharp":
/*!************************!*\
  !*** external "sharp" ***!
  \************************/
/***/ ((module) => {

module.exports = require("sharp");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "uuid":
/*!***********************!*\
  !*** external "uuid" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("uuid");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/***/ ((module) => {

module.exports = JSON.parse('{"name":"nexlesoft_template_microservices","version":"0.1.3","description":"","author":"alogobay","private":true,"license":"MIT","type":"commonjs","scripts":{"init":"yarn docker:dev:remove && yarn docker:dev:up && yarn && sleep 10 && yarn prisma:push","prisma:push":"dotenv -e .env.dev -- prisma db push --schema ./prisma/mysql.schema.prisma","prisma:generate:mongodb":"dotenv -e .env.dev -- prisma generate --schema ./prisma/mongodb.schema.prisma","prisma:generate":"dotenv -e .env.dev -- prisma generate --schema ./prisma/mysql.schema.prisma","prisma:server":"yarn prisma:push:server && yarn prisma:generate:server && yarn prisma:generate_mongodb:server","prisma:push:server":"dotenv -e .env -- prisma db push --schema ./prisma/mysql.schema.prisma","prisma:generate:server":"dotenv -e .env -- prisma generate --schema ./prisma/mysql.schema.prisma","prisma:generate_mongodb:server":"dotenv -e .env -- prisma generate --schema ./prisma/mongodb.schema.prisma","start":"dotenv -e .env nest start","dev":"dotenv -e .env.dev -- nest start --watch","dev:debug":"dotenv -e .env.dev -- nest start --debug --watch","sync:db_to_schema":"dotenv -e .env.dev -- yarn prisma:pull && yarn prisma:generate","start:dev":"nest start --watch","start:uat":"dotenv -e .env.uat -- nest start --watch","start:debug":"nest start --debug --watch","start:prod":"node dist/main","prebuild":"rimraf dist","build":"nest build","format":"prettier --write \\"apps/**/*.ts\\" \\"libs/**/*.ts\\"","lint":"eslint \\"{src,apps,libs,test}/**/*.ts\\" --fix","docker:dev:remove":"docker-compose rm mysql_dev -s -f -v && docker-compose rm redis_dev -s -f -v","docker:dev:up":"docker-compose up mysql_dev -d && docker-compose up redis_dev -d","docker:mongodb_cluster":"cd apps/mongodb_sharded_cluster && docker-compose rm -s -f -v &&  docker-compose up -d","docker:set_cluster_shared":"cd apps/mongodb_sharded_cluster && sleep 3 && docker-compose exec configsvr01 sh -c \\"mongosh < /scripts/init-configserver.js\\" && sleep 3 && docker-compose exec shard01-a sh -c \\"mongosh < /scripts/init-shard01.js\\" && sleep 3 && docker-compose exec shard02-a sh -c \\"mongosh < /scripts/init-shard02.js\\" && sleep 3 && docker-compose exec shard03-a sh -c \\"mongosh < /scripts/init-shard03.js\\" && sleep 3 && docker-compose exec router01 sh -c \\"mongosh < /scripts/init-router.js\\" && sleep 3 && docker-compose exec router01 mongosh --port 27017","prisma:push_accept-data-loss":"prisma db push --schema ./prisma/mysql.schema.prisma --accept-data-loss","prisma:migrate":"dotenv -e .env.dev -- prisma migrate dev --schema ./prisma/mysql.schema.prisma","prisma:migrate:dev_create-only":"prisma migrate dev --schema ./prisma/mysql.schema.prisma --name init_mysql --create-only","prisma:migrate:deploy":"prisma migrate deploy --schema ./prisma/mysql.schema.prisma","sync:pull:custom":"cross-env MYSQL_DATABASE_URL=mysql://root:root@168.138.176.48:50002/dev prisma db pull --schema $schema","sync:push:custom":"prisma db push --schema $schema","sync:generate:custom":"prisma generate --schema $schema","prisma:pull":"prisma db pull --schema $schema","clear":"rm -rf dist && rm -rf node_modules && docker system prune -a -f && docker image prune -a -f && docker volume prune -f","test":"jest","test:watch":"jest --watch","test:cov":"jest --coverage","test:debug":"node --inspect-brk -r tsconfig-paths/register -r ts-node/register node_modules/.bin/jest --runInBand","test:e2e:uat":"dotenv -e .env.uat -- jest --watch --no-cache --config ./test/jest-e2e.json","test:e2e:dev":"jest --watch --no-cache --config ./apps/auth/test/app.e2e-spec.ts","backup":"node libs/console/backup_mongo.ts","restore":"node libs/console/restore_mongo.ts"},"dependencies":{"@aws-sdk/client-s3":"^3.224.0","@google-cloud/storage":"^6.7.0","@nestjs-modules/mailer":"^1.8.1","@nestjs/common":"^9.1.6","@nestjs/config":"^2.2.0","@nestjs/core":"^9.1.6","@nestjs/event-emitter":"^1.3.1","@nestjs/jwt":"^9.0.0","@nestjs/microservices":"^9.1.6","@nestjs/mongoose":"^9.2.0","@nestjs/passport":"^9.0.0","@nestjs/platform-express":"^9.1.6","@nestjs/platform-socket.io":"^9.2.1","@nestjs/swagger":"^6.1.2","@nestjs/throttler":"^3.1.0","@nestjs/typeorm":"^9.0.1","@nestjs/websockets":"^9.2.1","@redis/client":"^1.3.0","@sentry/node":"^7.16.0","argon2":"^0.29.1","bcrypt":"^5.1.0","class-transformer":"^0.5.1","class-validator":"^0.13.2","connect-typeorm":"^2.0.0","cookie":"^0.5.0","cookie-parser":"^1.4.6","csv-parse":"^5.3.3","csv-stringify":"^6.2.2","csv-writer":"^1.6.0","express-session":"^1.17.3","handlebars":"^4.7.7","inquirer":"^8.2.0","ioredis":"^5.2.3","joi":"^17.6.4","lodash":"^4.17.21","mongoose":"^6.6.7","mqtt":"^4.3.7","mysql2":"^2.3.3","nestjs-i18n":"^9.2.2","nodemailer":"^6.8.0","passport":"^0.6.0","passport-google-oauth20":"^2.0.0","passport-jwt":"^4.0.0","passport-local":"^1.0.0","reflect-metadata":"^0.1.13","rimraf":"^3.0.2","rxjs":"^7.5.7","sharp":"^0.31.2","typeorm":"0.2.37","uuid":"^9.0.0"},"devDependencies":{"@nestjs/cli":"^9.1.5","@nestjs/schematics":"^9.0.3","@nestjs/testing":"^9.1.6","@prisma/client":"^4.6.1","@types/bcrypt":"^5.0.0","@types/cookie":"^0.5.1","@types/cookie-parser":"^1.4.3","@types/express":"^4.17.14","@types/express-session":"^1.17.5","@types/jest":"29.2.0","@types/multer":"^1.4.7","@types/node":"^18.11.4","@types/nodemailer":"^6.4.6","@types/passport-jwt":"^3.0.7","@types/passport-local":"^1.0.34","@types/sharp":"^0.31.0","@types/supertest":"^2.0.12","@types/uuid":"^9.0.0","@typescript-eslint/eslint-plugin":"^5.40.1","@typescript-eslint/parser":"^5.40.1","dotenv":"^16.0.3","dotenv-cli":"^6.0.0","eslint":"^8.26.0","eslint-config-prettier":"^8.5.0","eslint-plugin-prettier":"^4.2.1","fs-extra":"^10.1.0","jest":"29.2.1","pactum":"^3.2.3","prettier":"^2.7.1","prisma":"^4.6.1","source-map-support":"^0.5.21","supertest":"^6.3.0","ts-jest":"29.0.3","ts-loader":"^9.4.1","ts-node":"^10.9.1","tsconfig-paths":"4.1.0","typescript":"^4.8.4"},"jest":{"moduleFileExtensions":["js","json","ts"],"rootDir":".","testRegex":".*\\\\.e2e-spec\\\\.ts$","transform":{"^.+\\\\.(t|j)s$":"ts-jest"},"collectCoverageFrom":["**/*.(t|j)s"],"coverageDirectory":"./coverage","testEnvironment":"node","roots":["<rootDir>/apps/","<rootDir>/libs/","<rootDir>/"],"moduleNameMapper":{"^@common(|/.*)$":"<rootDir>/libs/common/$1"}}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
var exports = __webpack_exports__;
/*!***************************!*\
  !*** ./apps/chat/main.ts ***!
  \***************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const app_module_1 = __webpack_require__(/*! @apps/chat/app.module */ "./apps/chat/app.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(app_module_1.AppModule, redis_1.RedisModule.getRedisOption({
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    }));
    const config = app.get(config_1.ConfigService);
    await app.listen().then(() => {
        const logger = new common_1.Logger('Client service');
        logger.log(`API Gateway start at port: ${config.get('PORT')}\nMicroservice port:${config.get('PORT_PUBLIC_REDIS')}\nMYSQL: ${config.get('MYSQL_DATABASE_URL')}\nMONGODB: ${config.get('MONGODB_DATABASE_URL')}`);
    });
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUN2RSxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDN0IsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLElBQUksQ0FBQyxTQUE0QjtRQUN0QyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUN2RSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDM0IsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLEtBQUssQ0FBQyxTQUFvQztRQUMvQyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUN2RSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDaEMsQ0FBQztRQUVGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUVNLFdBQVcsQ0FBQyxTQUFvQztRQUNyRCxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUN2RSxJQUFJLENBQUMsTUFBTSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FDMUMsQ0FBQztRQUNGLE9BQU8sSUFBSSxDQUFDO0lBQ2QsQ0FBQztJQUNNLFdBQVcsQ0FBQyxTQUFvQztRQUNyRCxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsR0FBRyxTQUFTLENBQUM7UUFFdkMsT0FBTyxJQUFJLENBQUM7SUFDZCxDQUFDO0lBU00sS0FBSyxDQUFDLGFBQWE7UUFDeEIsTUFBTSxnQkFBZ0IsR0FBUSxFQUFFLENBQUM7UUFDakMsTUFBTSxVQUFVLEdBQWEsRUFBRSxDQUFDO1FBQ2hDLE1BQU0sT0FBTyxHQUFRLEVBQUUsQ0FBQztRQUN4QixJQUFJLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFZLEVBQUUsRUFBRSxFQUFFO2dCQUN6QyxVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3hCLENBQUMsQ0FBQyxDQUFDO1NBQ0o7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7WUFDZixNQUFNLElBQUksR0FBUSxFQUFFLENBQUM7WUFDckIsTUFBTSxJQUFJLEdBQVEsRUFBRSxDQUFDO1lBQ3JCLE1BQU0sSUFBSSxHQUFRLEVBQUUsQ0FBQztZQUNyQixJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3BDLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDdkM7Z0JBQ0EsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7Z0JBQ3ZDLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7YUFDdkI7WUFFRCxJQUNFLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsTUFBTSxHQUFHLENBQUM7Z0JBQ3JDLElBQUksQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsTUFBTSxLQUFLLENBQUMsRUFDdEM7Z0JBQ0EsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO2dCQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO29CQUMvQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDN0IsQ0FBQyxDQUFDLENBQUM7Z0JBQ0gsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUN2QjtZQUVELElBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQztnQkFDcEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUNyQztnQkFDQSxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7Z0JBQ3BCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBUyxFQUFFLEVBQUU7b0JBQy9DLEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixDQUFDLENBQUMsQ0FBQztnQkFFSCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDdkMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQztnQkFDakIsSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO2dCQUMzQixVQUFVLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3ZCO1NBQ0Y7UUFFRCxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxFQUFFO1lBQ3RCLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztZQUNwQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFO2dCQUNoQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUMsQ0FBQztZQUNILE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDbkI7UUFDRCxnQkFBZ0IsQ0FBQyxLQUFLLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDckMsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ2hCLE9BQU8sRUFBRSxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxnQkFBZ0IsRUFBRSxDQUFDO0lBQ3hELENBQUM7Q0FDRjtBQWxLRCxrQ0FrS0M7Ozs7Ozs7Ozs7Ozs7O0FDcktELHlFQUFtRDtBQUc1QyxNQUFNLFVBQVUsR0FBRyxLQUFLLEVBQUUsSUFBSSxFQUFFLE9BQWdCLEVBQUUsTUFBYyxFQUFtQixFQUFFO0lBQzFGLE9BQU8sSUFBSSxPQUFPLENBQUMsQ0FBQyxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDdkMsTUFBTSxVQUFVLEdBQUcsT0FBTzthQUN2QixNQUFNLENBQUMsTUFBTSxDQUFDO2FBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMzQixNQUFNLE1BQU0sR0FBRyxVQUFVLENBQUMsaUJBQWlCLENBQUM7WUFDMUMsU0FBUyxFQUFFLElBQUk7WUFDZixRQUFRLEVBQUU7Z0JBQ1IsV0FBVyxFQUFFLElBQUksQ0FBQyxRQUFRO2FBQzNCO1NBQ0YsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEVBQUUsQ0FBQyxRQUFRLEVBQUUsS0FBSyxJQUFJLEVBQUU7WUFDN0IsUUFBUSxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUMxQixDQUFDLENBQUMsQ0FBQztRQUNILE1BQU0sQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLEdBQUcsQ0FBQyxFQUFFO1lBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNmLENBQUMsQ0FBQyxDQUFDO1FBQ0gsTUFBTSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDMUIsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDO0FBbkJZLGtCQUFVLGNBbUJ0QjtBQUVNLE1BQU0sa0JBQWtCLEdBQUcsS0FBSyxFQUFFLElBQUksRUFBRSxPQUFnQixFQUFFLE1BQWMsRUFBbUIsRUFBRTtJQUNsRyxPQUFPLElBQUksT0FBTyxDQUFDLENBQUMsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQ3ZDLE9BQU8sQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEtBQUssRUFBRSxJQUFJLEVBQUUsRUFBRTtZQUNsRCxJQUFJLEtBQUssRUFBRTtnQkFDVCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ2YsT0FBTzthQUNSO1lBQ0QsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNwQixDQUFDLENBQUMsQ0FBQztJQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQztBQVZZLDBCQUFrQixzQkFVOUI7QUFFTSxNQUFNLFVBQVUsR0FBRyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQWdCLEVBQUUsTUFBYyxFQUFFLEVBQUU7SUFDN0UsT0FBTyxJQUFJLE9BQU8sQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLE9BQU8sRUFBRSxFQUFFO1FBQzdDLElBQUk7WUFDRixNQUFNLE9BQU87aUJBQ1YsTUFBTSxDQUFDLE1BQU0sQ0FBQztpQkFDZCxJQUFJLENBQUMsUUFBUSxDQUFDO2lCQUNkLE1BQU0sQ0FBQyxFQUFFLGNBQWMsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO1lBQ3BDLFFBQVEsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNkO1FBQUMsT0FBTyxLQUFLLEVBQUU7WUFDZCxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDaEI7SUFDSCxDQUFDLENBQUM7QUFDSixDQUFDO0FBWlksa0JBQVUsY0FZdEI7QUFFTSxNQUFNLGVBQWUsR0FBRyxDQUM3QixJQUFXLEVBQ1gsTUFBYSxFQUNiLFFBQWdCLEVBQ0UsRUFBRTtJQUNwQixPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsT0FBTyxFQUFFLEVBQUU7UUFDN0MsSUFBSTtZQUNGLE1BQU0sTUFBTSxHQUFHLHNDQUFxQixFQUFDO2dCQUNuQyxJQUFJLEVBQUUsUUFBUTtnQkFDZCxNQUFNO2dCQUNOLFFBQVEsRUFBRSxNQUFNO2FBQ2pCLENBQUMsQ0FBQztZQUNILE1BQU0sTUFBTSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7U0FDcEI7UUFBQyxPQUFPLEtBQUssRUFBRTtZQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNoQjtJQUNILENBQUMsQ0FBQztBQUNKLENBQUM7QUFsQlksdUJBQWUsbUJBa0IzQjs7Ozs7Ozs7Ozs7Ozs7QUNwRUQsTUFBTSxvQkFBb0IsR0FBRyxDQUFDLEdBQVEsRUFBRSxNQUFnQixFQUFFLEVBQUU7O0lBQzFELEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQzFCLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxTQUFHLENBQUMsS0FBSyxDQUFDLDBDQUFFLEdBQUcsQ0FBQyxDQUFDLElBQVMsRUFBRSxFQUFFLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0tBQ3JFO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDLENBQUM7QUFFSyxNQUFNLGVBQWUsR0FBRyxDQUFDLE1BQVcsRUFBRSxNQUFnQixFQUFFLEVBQUU7SUFDL0QsSUFBSSxDQUFDLE9BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxNQUFNLEdBQUU7UUFDbkIsT0FBTyxvQkFBb0IsQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7S0FDN0M7SUFFRCxPQUFPLE1BQU0sYUFBTixNQUFNLHVCQUFOLE1BQU0sQ0FBRSxHQUFHLENBQUMsQ0FBQyxJQUFTLEVBQUUsRUFBRTtRQUMvQixPQUFPLG9CQUFvQixDQUFDLElBQUksRUFBRSxNQUFNLENBQUMsQ0FBQztJQUM1QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQztBQVJXLHVCQUFlLG1CQVExQjtBQUVLLE1BQU0sc0JBQXNCLEdBQUcsQ0FBQyxNQUFXLEVBQUUsTUFBZ0IsRUFBRSxFQUFFO0lBQ3RFLEtBQUssTUFBTSxLQUFLLElBQUksTUFBTSxFQUFFO1FBQzFCLE9BQU8sTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0tBQ3RCO0lBQ0QsT0FBTyxNQUFNLENBQUM7QUFDaEIsQ0FBQyxDQUFDO0FBTFcsOEJBQXNCLDBCQUtqQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEJGLDRHQUE4QjtBQUM5Qiw0RkFBc0I7QUFDdEIsOEZBQXVCOzs7Ozs7Ozs7Ozs7OztBQ0R2QixzRkFBb0M7QUFDcEMsNkVBQTRDO0FBSTVDLGtJQUE2RDtBQW1CN0QsTUFBc0IsY0FBZSxTQUFRLFdBQUk7SUFBakQ7O1FBQ1ksV0FBTSxHQUFrQixFQUFFLENBQUM7SUF5SnZDLENBQUM7SUF2SlcsS0FBSyxDQUFDLFFBQVEsQ0FBQyxNQUEwQjs7UUFDakQsTUFBTSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1FBQzdCLE1BQU0sZ0JBQWdCLEdBQWU7WUFDbkMsSUFBSSxFQUFFLENBQUM7WUFDUCxJQUFJLEVBQUUsRUFBRTtZQUNSLElBQUksRUFBRSxFQUFFO1lBQ1IsTUFBTSxFQUFFLEVBQUU7WUFDVixNQUFNLEVBQUUsQ0FBQztTQUNWLENBQUM7UUFDRixNQUFNLEVBQUUsSUFBSSxFQUFFLEtBQUssRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFLEdBQUcsTUFBTSxDQUFDO1FBR3pDLElBQUksQ0FBQyxvQ0FBZSxFQUFDLEtBQUssSUFBSSxJQUFJLEVBQUUsWUFBWSxDQUFDLEVBQUU7WUFDakQsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUN2QixtQkFBVSxDQUFDLFdBQVcsRUFDdEIsZ0NBQWdDLENBQ2pDLENBQUM7U0FDSDtRQUdELElBQUksQ0FBQyxvQ0FBZSxFQUFDLElBQUksSUFBSSxHQUFHLEVBQUUsUUFBUSxDQUFDLEVBQUU7WUFDM0MsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUN2QixtQkFBVSxDQUFDLFdBQVcsRUFDdEIsd0NBQXdDLENBQ3pDLENBQUM7U0FDSDtRQUdELElBQ0UsQ0FBQyxvQ0FBZSxFQUNkLEtBQUssSUFBSSxpQkFBaUIsRUFDMUIsOEJBQThCLENBQy9CLEVBQ0Q7WUFDQSxNQUFNLElBQUksQ0FBQyxjQUFjLENBQ3ZCLG1CQUFVLENBQUMsV0FBVyxFQUN0QiwwQkFBMEIsQ0FDM0IsQ0FBQztTQUNIO1FBRUQsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzdCLElBQUksS0FBSyxHQUFHLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUUzQixJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUU7WUFDYixLQUFLLEdBQUcsQ0FBQyxDQUFDO1NBQ1g7UUFFRCxJQUFJLE1BQU0sS0FBSyxDQUFDLENBQUMsRUFBRTtZQUNqQixNQUFNLEdBQUcsQ0FBQyxDQUFDO1NBQ1o7YUFBTSxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDckIsTUFBTSxHQUFHLEVBQUUsQ0FBQztTQUNiO1FBRUQsTUFBTSxNQUFNLEdBQUcsQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDO1FBQ3BDLGdCQUFnQixDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzVDLGdCQUFnQixDQUFDLElBQUksR0FBRyxNQUFNLENBQUMsQ0FBQyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDO1FBRXBELElBQUksTUFBTSxhQUFOLE1BQU0sdUJBQU4sTUFBTSxDQUFFLE9BQU8sRUFBRTtZQUNuQixnQkFBZ0IsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUMsT0FBTztnQkFDdEMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxDQUFDO2dCQUNyQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ1A7UUFHRCxNQUFNLFlBQVksR0FBRyxVQUFJLENBQUMsTUFBTSxDQUFDLElBQUksMENBQUUsWUFBWSxDQUFDO1FBQ3BELElBQUksQ0FBQyxLQUFJLFlBQVksYUFBWixZQUFZLHVCQUFaLFlBQVksQ0FBRSxNQUFNLEdBQUU7WUFDN0IsTUFBTSxPQUFPLEdBQVEsRUFBRSxDQUFDO1lBQ3hCLEtBQUssSUFBSSxLQUFLLElBQUksWUFBWSxFQUFFO2dCQUM5QixNQUFNLElBQUksR0FBUSxFQUFFLENBQUM7Z0JBQ3JCLE1BQU0sSUFBSSxHQUFRLEVBQUUsQ0FBQztnQkFFckIsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxFQUFFO29CQUMxQixLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUM7aUJBQzNEO3FCQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDbkMsS0FBSyxHQUFHLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxLQUFLLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUMvRDtxQkFBTTtvQkFDTCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUN0QjtnQkFDRCxJQUFJLENBQUMsS0FBSyxDQUFDLEdBQUcsSUFBSSxDQUFDO2dCQUNuQixPQUFPLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3BCO1lBQ0QsSUFBSSxPQUFPLENBQUMsTUFBTSxFQUFFO2dCQUNsQixPQUFPLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2FBQzlCO1NBQ0Y7UUFHRCxNQUFNLFlBQVksR0FBRyxVQUFJLENBQUMsTUFBTSxDQUFDLElBQUksMENBQUUsWUFBWSxDQUFDO1FBQ3BELElBQUksWUFBWSxhQUFaLFlBQVksdUJBQVosWUFBWSxDQUFFLE1BQU0sRUFBRTtZQUN4QixNQUFNLFlBQVksR0FBUSxFQUFFLENBQUM7WUFDN0IsS0FBSyxNQUFNLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ2hDLE1BQU0sUUFBUSxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQzNDLE1BQU0sVUFBVSxHQUNkLE1BQU0sQ0FBQyxLQUFLLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUMsQ0FBQztnQkFDeEQsSUFBSSxVQUFVLEVBQUU7b0JBQ2QsTUFBTSxHQUFHLEdBQVEsRUFBRSxDQUFDO29CQUNwQixJQUFJLFVBQVUsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQ2xDLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFOzRCQUNoRCxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsUUFBUSxDQUFDLEdBQUcsVUFBVSxFQUFFLENBQUMsQ0FBQzt5QkFDeEM7NkJBQU07NEJBQ0wsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsVUFBVSxFQUFFLENBQUM7eUJBQzlCO3dCQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3FCQUN4Qzt5QkFBTTt3QkFDTCxVQUFVLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTs0QkFDL0IsSUFBSSxLQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0NBQ2hELEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7NkJBQzdCO2lDQUFNO2dDQUNMLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLENBQUM7NkJBQ25COzRCQUNELFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUN6QyxDQUFDLENBQUMsQ0FBQztxQkFDSjtpQkFDRjthQUNGO1lBRUQsSUFBSSxZQUFZLENBQUMsTUFBTSxFQUFFO2dCQUN2QixPQUFPLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2FBQ25DO1NBQ0Y7UUFJRCxNQUFNLFdBQVcsR0FBRyxnQkFBSSxDQUFDLE1BQU0sMENBQUUsSUFBSSwwQ0FBRSxXQUFXLENBQUM7UUFDbkQsSUFBSSxLQUFLLEtBQUksV0FBVyxhQUFYLFdBQVcsdUJBQVgsV0FBVyxDQUFFLE1BQU0sR0FBRTtZQUNoQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsVUFBVSxDQUFDLEVBQUU7Z0JBQ3ZDLE1BQU0sS0FBSyxHQUFRLEVBQUUsQ0FBQztnQkFFdEIsSUFBSSxDQUFDLFFBQVEsRUFBRSxTQUFTLENBQUMsR0FBRyxDQUFDLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUM1QyxTQUFTLEdBQUcsU0FBUyxDQUFDLFdBQVcsRUFBRSxDQUFDO2dCQUVwQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxFQUFFO29CQUN4QyxTQUFTLEdBQUcsS0FBSyxDQUFDO2lCQUNuQjtnQkFFRCxJQUFJLFFBQVEsSUFBSSxXQUFXLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUM5QyxLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsU0FBUyxDQUFDO29CQUM1QixPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztpQkFDekM7YUFDRjtTQUNGO1FBRUQsTUFBTSxXQUFXLEdBQUcsTUFBTSxPQUFPLENBQUMsYUFBYSxFQUFFLENBQUM7UUFDbEQsZ0JBQWdCLENBQUMsSUFBSSxHQUFHLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxLQUFLLENBQUM7UUFDM0MsZ0JBQWdCLENBQUMsTUFBTSxHQUFHLFdBQVcsYUFBWCxXQUFXLHVCQUFYLFdBQVcsQ0FBRSxLQUFLLENBQUM7UUFFN0MsT0FBTyxnQkFBZ0IsQ0FBQztJQUMxQixDQUFDO0NBQ0Y7QUExSkQsd0NBMEpDOzs7Ozs7Ozs7Ozs7OztBQzdLRCxTQUFnQixlQUFlLENBQUMsT0FBZSxFQUFFLE9BQU87SUFDdEQsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBRkQsMENBRUM7QUFRRCxTQUFnQixnQkFBZ0IsQ0FDOUIsT0FBZSxFQUNmLE9BQU8sR0FBRyx5QkFBeUI7SUFFbkMsT0FBTyxPQUFPLElBQUksT0FBTyxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztBQUMzQyxDQUFDO0FBTEQsNENBS0M7Ozs7Ozs7Ozs7O0FDckJEOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7Ozs7Ozs7VUNBQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7Ozs7Ozs7Ozs7QUN0QkEsdUVBQTJDO0FBRTNDLHlGQUE0QztBQUM1Qyw2RUFBK0M7QUFDL0MsNkVBQXdDO0FBQ3hDLG1HQUFrRDtBQUVsRCxLQUFLLFVBQVUsU0FBUztJQUN0QixNQUFNLEdBQUcsR0FBRyxNQUFNLGtCQUFXLENBQUMsa0JBQWtCLENBQzlDLHNCQUFTLEVBQ1QsbUJBQVcsQ0FBQyxjQUFjLENBQUM7UUFDekIsTUFBTSxFQUFFLENBQUMsT0FBTyxFQUFFLE1BQU0sRUFBRSxLQUFLLEVBQUUsT0FBTyxFQUFFLFNBQVMsQ0FBQztLQUNyRCxDQUFDLENBQ0gsQ0FBQztJQUVGLE1BQU0sTUFBTSxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUMsc0JBQWEsQ0FBQyxDQUFDO0lBQ3RDLE1BQU0sR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUU7UUFDM0IsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsR0FBRyxDQUNSLDhCQUE4QixNQUFNLENBQUMsR0FBRyxDQUN0QyxNQUFNLENBQ1AsdUJBQXVCLE1BQU0sQ0FBQyxHQUFHLENBQ2hDLG1CQUFtQixDQUNwQixZQUFZLE1BQU0sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsY0FBYyxNQUFNLENBQUMsR0FBRyxDQUNuRSxzQkFBc0IsQ0FDdkIsRUFBRSxDQUNKLENBQUM7SUFDSixDQUFDLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRCxTQUFTLEVBQUUsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2FwcC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvYXV0aC9hdXRoLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9hdXRoL2F1dGgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvYXV0aC9kdG9zL0NyZWF0ZVVzZXIuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2NvbnZlcnNhdGlvbnMvc3JjL2NvbnZlcnNhdGlvbnMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9jb252ZXJzYXRpb25zL3NyYy9jb252ZXJzYXRpb25zLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9jb252ZXJzYXRpb25zL3NyYy9jb252ZXJzYXRpb25zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvY29udmVyc2F0aW9ucy9zcmMvY29udmVyc2F0aW9ucy50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9jb252ZXJzYXRpb25zL3NyYy9kdG8vYXR0YWNobWVudC5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvY29udmVyc2F0aW9ucy9zcmMvZHRvL2NvbnZlcnNhdGlvbi5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvY29udmVyc2F0aW9ucy9zcmMvZHRvL2ZpbGVfYXR0YWNoZWQuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2NvbnZlcnNhdGlvbnMvc3JjL2R0by9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9jb252ZXJzYXRpb25zL3NyYy9kdG8vbWVzc2FnZS5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvY29udmVyc2F0aW9ucy9zcmMvcHJpc21hL3ByaXNtYS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvY29udmVyc2F0aW9ucy9zcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2V2ZW50cy9ldmVudHMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2V2ZW50cy9mcmllbmQtcmVxdWVzdHMuZXZlbnRzLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2V2ZW50cy9mcmllbmRzLmV2ZW50cy50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9leGlzdHMvZXhpc3RzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZXhpc3RzL2V4aXN0cy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZnJpZW5kLXJlcXVlc3RzL2R0b3MvQ3JlYXRlRnJpZW5kLmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9mcmllbmQtcmVxdWVzdHMvZnJpZW5kLXJlcXVlc3RzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZnJpZW5kLXJlcXVlc3RzL2ZyaWVuZC1yZXF1ZXN0cy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZnJpZW5kLXJlcXVlc3RzL2ZyaWVuZC1yZXF1ZXN0cy5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2ZyaWVuZC1yZXF1ZXN0cy9mcmllbmQtcmVxdWVzdHMudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZnJpZW5kLXJlcXVlc3RzL3ByaXNtYS9wcmlzbWEubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2ZyaWVuZC1yZXF1ZXN0cy9wcmlzbWEvcHJpc21hLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZnJpZW5kcy9mcmllbmRzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZnJpZW5kcy9mcmllbmRzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9mcmllbmRzL2ZyaWVuZHMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9mcmllbmRzL2ZyaWVuZHMudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZnJpZW5kcy9wcmlzbWEvcHJpc21hLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9mcmllbmRzL3ByaXNtYS9wcmlzbWEuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9nYXRld2F5L2R0b3MvQ3JlYXRlQ2FsbER0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9nYXRld2F5L2dhdGV3YXkubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2dhdGV3YXkvZ2F0ZXdheS5zZXNzaW9uLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2dhdGV3YXkvZ2F0ZXdheS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9ncm91cHMvY29udHJvbGxlcnMvZ3JvdXAtbWVzc2FnZXMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9ncm91cHMvY29udHJvbGxlcnMvZ3JvdXAtcmVjaXBpZW50cy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2dyb3Vwcy9jb250cm9sbGVycy9ncm91cC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2dyb3Vwcy9kdG9zL0NyZWF0ZUdyb3VwLmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9ncm91cHMvZXhjZXB0aW9ucy9Hcm91cE5vdEZvdW5kLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2dyb3Vwcy9leGNlcHRpb25zL0dyb3VwT3duZXJUcmFuc2Zlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9ncm91cHMvZXhjZXB0aW9ucy9Hcm91cFBhcnRpY2lwYW50Tm90Rm91bmQudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZ3JvdXBzL2V4Y2VwdGlvbnMvSW52YWxpZEdyb3VwLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2dyb3Vwcy9leGNlcHRpb25zL05vdEdyb3VwT3duZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZ3JvdXBzL2dyb3VwLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9ncm91cHMvaW50ZXJmYWNlcy9ncm91cC1tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9ncm91cHMvaW50ZXJmYWNlcy9ncm91cC1yZWNpcGllbnQudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZ3JvdXBzL2ludGVyZmFjZXMvZ3JvdXAudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZ3JvdXBzL21pZGRsZXdhcmVzL2dyb3VwLm1pZGRsZXdhcmUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZ3JvdXBzL3ByaXNtYS9wcmlzbWEubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2dyb3Vwcy9wcmlzbWEvcHJpc21hLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZ3JvdXBzL3NlcnZpY2VzL2dyb3VwLW1lc3NhZ2VzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvZ3JvdXBzL3NlcnZpY2VzL2dyb3VwLXJlY2lwaWVudC5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2dyb3Vwcy9zZXJ2aWNlcy9ncm91cC5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L2ltYWdlLXN0b3JhZ2UvaW1hZ2Utc3RvcmFnZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvaW1hZ2Utc3RvcmFnZS9pbWFnZS1zdG9yYWdlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvaW1hZ2Utc3RvcmFnZS9pbWFnZS1zdG9yYWdlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L21lc3NhZ2UtYXR0YWNobWVudHMvbWVzc2FnZS1hdHRhY2htZW50cy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvbWVzc2FnZS1hdHRhY2htZW50cy9tZXNzYWdlLWF0dGFjaG1lbnRzLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvbWVzc2FnZS1hdHRhY2htZW50cy9wcmlzbWEvcHJpc21hLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9tZXNzYWdlLWF0dGFjaG1lbnRzL3ByaXNtYS9wcmlzbWEuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9tZXNzYWdlcy9zcmMvZHRvL2F0dGFjaG1lbnQuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L21lc3NhZ2VzL3NyYy9kdG8vZGVsZXRlX21lc3NhZ2UuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L21lc3NhZ2VzL3NyYy9kdG8vZWRpdF9tZXNzYWdlLmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9tZXNzYWdlcy9zcmMvZHRvL2ZpbGVfYXR0YWNoZWQuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L21lc3NhZ2VzL3NyYy9kdG8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvbWVzc2FnZXMvc3JjL2R0by9tZXNzYWdlLmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9tZXNzYWdlcy9zcmMvbWVzc2FnZXMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9tZXNzYWdlcy9zcmMvbWVzc2FnZXMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L21lc3NhZ2VzL3NyYy9tZXNzYWdlcy5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L21lc3NhZ2VzL3NyYy9tZXNzYWdlcy50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9tZXNzYWdlcy9zcmMvcHJpc21hL3ByaXNtYS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvbWVzc2FnZXMvc3JjL3ByaXNtYS9wcmlzbWEuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91c2Vycy9jb250cm9sbGVycy91c2VyLXByZXNlbmNlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXNlcnMvY29udHJvbGxlcnMvdXNlci1wcm9maWxlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXNlcnMvY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3VzZXJzL2R0b3MvVXBkYXRlVXNlclByb2ZpbGUuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3VzZXJzL2R0b3MvdXNlci1wcmVzZW5jZS5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXNlcnMvZXhjZXB0aW9ucy9Vc2VyQWxyZWFkeUV4aXN0cy50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91c2Vycy9pbnRlcmZhY2VzL3VzZXItcHJlc2VuY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXNlcnMvaW50ZXJmYWNlcy91c2VyLXByb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXNlcnMvaW50ZXJmYWNlcy91c2VyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3VzZXJzL3ByaXNtYS9wcmlzbWEubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3VzZXJzL3ByaXNtYS9wcmlzbWEuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91c2Vycy9zZXJ2aWNlcy91c2VyLXByZXNlbmNlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXNlcnMvc2VydmljZXMvdXNlci1wcm9maWxlLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXNlcnMvc2VydmljZXMvdXNlci5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3VzZXJzL3VzZXJzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy9jb25zdGFudHMudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvZGVjb3JhdG9ycy50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy9oZWxwZXJzLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL2ludGVyZmFjZXMudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9CYXNlTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2VudGl0aWVzL0NvbnZlcnNhdGlvbi50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2VudGl0aWVzL0ZyaWVuZC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2VudGl0aWVzL0ZyaWVuZFJlcXVlc3QudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9Hcm91cC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2VudGl0aWVzL0dyb3VwTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2VudGl0aWVzL0dyb3VwTWVzc2FnZUF0dGFjaG1lbnQudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9NZXNzYWdlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVvcm0vZW50aXRpZXMvTWVzc2FnZUF0dGFjaG1lbnQudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9QZWVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVvcm0vZW50aXRpZXMvUHJvZmlsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2VudGl0aWVzL1Nlc3Npb24udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9Vc2VyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVvcm0vZW50aXRpZXMvVXNlclByZXNlbmNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVvcm0vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZXMudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9hdXRoL3ByaXNtYS9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvcHJpc21hL3ByaXNtYS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9hdXRoL3ByaXNtYS9wcmlzbWEuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2h0dHAvaHR0cC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9odHRwL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9yZWRpcy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL3JlZGlzL3JlZGlzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL3V0aWxzL2R0by9jdXJyZW50LXVzZXIuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vdXRpbHMvZHRvL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vdXRpbHMvZHRvL3F1ZXJ5LmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL3V0aWxzL2R0by9xdWVyeS5wcmlzbWEudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi91dGlscy9maWxlL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vdXRpbHMvZmlsdGVyLWRhdGEvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi91dGlscy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL3V0aWxzL3JlcXVldHMudXRpbC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL3V0aWxzL3ZhbGlkYXRlcy9rZXktcXVlcnkudXRpbC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBhd3Mtc2RrL2NsaWVudC1zM1wiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb21tb25cIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvcmVcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvZXZlbnQtZW1pdHRlclwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9qd3RcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9wYXNzcG9ydFwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy90aHJvdHRsZXJcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvd2Vic29ja2V0c1wiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQHByaXNtYS9teXNxbFwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiYmNyeXB0XCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJjbGFzcy10cmFuc2Zvcm1lclwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiY2xhc3MtdmFsaWRhdG9yXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJjc3Ytd3JpdGVyXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJsb2Rhc2hcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIm5lc3Rqcy1pMThuXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJzaGFycFwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwic29ja2V0LmlvXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJ0eXBlb3JtXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJ1dWlkXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgbm9kZS1jb21tb25qcyBcImNyeXB0b1wiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L21haW4udHMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUGFzc3BvcnRNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5pbXBvcnQgeyBDb252ZXJzYXRpb25zTW9kdWxlIH0gZnJvbSAnLi9jb252ZXJzYXRpb25zL3NyYy9jb252ZXJzYXRpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBNZXNzYWdlc01vZHVsZSB9IGZyb20gJy4vbWVzc2FnZXMvc3JjL21lc3NhZ2VzLm1vZHVsZSc7XG5pbXBvcnQgeyBHYXRld2F5TW9kdWxlIH0gZnJvbSAnLi9nYXRld2F5L2dhdGV3YXkubW9kdWxlJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlck1vZHVsZSB9IGZyb20gJ0BuZXN0anMvZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQgeyBHcm91cE1vZHVsZSB9IGZyb20gJy4vZ3JvdXBzL2dyb3VwLm1vZHVsZSc7XG5pbXBvcnQgeyBUaHJvdHRsZXJNb2R1bGUgfSBmcm9tICdAbmVzdGpzL3Rocm90dGxlcic7XG5pbXBvcnQgeyBGcmllbmRSZXF1ZXN0c01vZHVsZSB9IGZyb20gJy4vZnJpZW5kLXJlcXVlc3RzL2ZyaWVuZC1yZXF1ZXN0cy5tb2R1bGUnO1xuaW1wb3J0IHsgRnJpZW5kc01vZHVsZSB9IGZyb20gJy4vZnJpZW5kcy9mcmllbmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBFdmVudHNNb2R1bGUgfSBmcm9tICcuL2V2ZW50cy9ldmVudHMubW9kdWxlJztcbmltcG9ydCB7IEV4aXN0c01vZHVsZSB9IGZyb20gJy4vZXhpc3RzL2V4aXN0cy5tb2R1bGUnO1xuaW1wb3J0IHsgTWVzc2FnZUF0dGFjaG1lbnRzTW9kdWxlIH0gZnJvbSAnLi9tZXNzYWdlLWF0dGFjaG1lbnRzL21lc3NhZ2UtYXR0YWNobWVudHMubW9kdWxlJztcblxuY29uc3QgZW52RmlsZVBhdGggPSAnLmVudic7XG4vLyBpZiAocHJvY2Vzcy5lbnYuRU5WSVJPTk1FTlQgPT09ICdQUk9EVUNUSU9OJykgZW52RmlsZVBhdGggPSAnLmVudi5wcm9kdWN0aW9uJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBdXRoTW9kdWxlLFxuICAgIFVzZXJzTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHsgZW52RmlsZVBhdGggfSksXG4gICAgUGFzc3BvcnRNb2R1bGUucmVnaXN0ZXIoeyBzZXNzaW9uOiB0cnVlIH0pLFxuICAgIENvbnZlcnNhdGlvbnNNb2R1bGUsXG4gICAgTWVzc2FnZXNNb2R1bGUsXG4gICAgR2F0ZXdheU1vZHVsZSxcbiAgICBFdmVudEVtaXR0ZXJNb2R1bGUuZm9yUm9vdCgpLFxuICAgIEdyb3VwTW9kdWxlLFxuICAgIEZyaWVuZFJlcXVlc3RzTW9kdWxlLFxuICAgIEZyaWVuZHNNb2R1bGUsXG4gICAgRXZlbnRzTW9kdWxlLFxuICAgIEV4aXN0c01vZHVsZSxcbiAgICBUaHJvdHRsZXJNb2R1bGUuZm9yUm9vdCh7XG4gICAgICB0dGw6IDEwLFxuICAgICAgbGltaXQ6IDEwLFxuICAgIH0pLFxuICAgIE1lc3NhZ2VBdHRhY2htZW50c01vZHVsZSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtdLFxuICAvLyBUT0RPOiBDw5JOIE3hu54gTOG6oEkgxJDhu4IgR1VBUkQsIFThuqBNIENPTU1FTlQgxJDhur5OIEtISSBIT8OATiBUSMOATkggQVVUSFxuICAvLyBwcm92aWRlcnM6IFtcbiAgLy8gICB7XG4gIC8vICAgICBwcm92aWRlOiBBUFBfR1VBUkQsXG4gIC8vICAgICB1c2VDbGFzczogVGhyb3R0bGVyQmVoaW5kUHJveHlHdWFyZCxcbiAgLy8gICB9LFxuICAvLyBdLFxufSlcbmV4cG9ydCBjbGFzcyBBcHBNb2R1bGUge31cbiIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgSHR0cFN0YXR1cywgSW5qZWN0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBpbnN0YW5jZVRvUGxhaW4gfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlcnMvaW50ZXJmYWNlcy91c2VyJztcbmltcG9ydCB7IFJvdXRlcywgU2VydmljZXMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgSUF1dGhTZXJ2aWNlIH0gZnJvbSAnLi9hdXRoJztcbmltcG9ydCB7IENyZWF0ZVVzZXJEdG8gfSBmcm9tICcuL2R0b3MvQ3JlYXRlVXNlci5kdG8nO1xuXG5AQ29udHJvbGxlcihSb3V0ZXMuQVVUSClcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU2VydmljZXMuQVVUSCkgcHJpdmF0ZSBhdXRoU2VydmljZTogSUF1dGhTZXJ2aWNlLFxuICAgIEBJbmplY3QoU2VydmljZXMuVVNFUlMpIHByaXZhdGUgdXNlclNlcnZpY2U6IElVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGp3dFNlcnZpY2U6IEp3dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBIVFRQLFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlLFxuICApIHt9XG5cbiAgLyoqXG4gICAqIHJlZ2lzdGVyIHVzZXJcbiAgICogQHBhcmFtIGNyZWF0ZVVzZXJEdG9cbiAgICogQHJldHVybnNcbiAgICovXG4gIEBNZXNzYWdlUGF0dGVybigncmVnaXN0ZXInKVxuICBhc3luYyByZWdpc3RlclVzZXIoY3JlYXRlVXNlckR0bzogQ3JlYXRlVXNlckR0bykge1xuICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgJ2F1dGguUkVHSVNURVJfU1VDQ0VTUycsXG4gICAgICBpbnN0YW5jZVRvUGxhaW4oKGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY3JlYXRlVXNlcihjcmVhdGVVc2VyRHRvKSkuZGF0YSksXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBsb2dpblxuICAgKiBAcGFyYW0gZGF0YVxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdsb2dpbicpXG4gIGFzeW5jIGxvZ2luKGRhdGEpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS5sb2dpbihkYXRhKTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1c2Ugc3RhdHVzIHRvIGdldCB1c2VyXG4gICAqIEBwYXJhbSBwYXJhbTBcbiAgICogQHJldHVybnNcbiAgICovXG4gIEBNZXNzYWdlUGF0dGVybignc3RhdHVzJylcbiAgYXN5bmMgc3RhdHVzKHRva2VuKSB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHRoaXMuand0U2VydmljZS52ZXJpZnkodG9rZW4sIHtcbiAgICAgIHNlY3JldDogdGhpcy5jb25maWcuZ2V0T3JUaHJvdygnSldUX1NFQ1JFVCcpLFxuICAgIH0pO1xuICAgIGNvbnN0IHVzZXJuYW1lID0gcGF5bG9hZC51c2VybmFtZTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kVXNlcih1c2VybmFtZSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAnYXV0aC5HRVRfU1RBVFVTX1NVQ0NFU1MnLFxuICAgICAgdXNlci5kYXRhLFxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogbG9nb3V0IG1ldGhvZFxuICAgKiBAcGFyYW0gcGFyYW0wXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBATWVzc2FnZVBhdHRlcm4oJ2xvZ291dCcpXG4gIGxvZ291dCh7IHJlcSwgcmVzIH06IHsgcmVxOiBSZXF1ZXN0OyByZXM6IFJlc3BvbnNlIH0pIHtcbiAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICdhdXRoLkxPR09VVF9TVUNDRVNTJyxcbiAgICAgIHJlcS5sb2dvdXQoZXJyID0+IHtcbiAgICAgICAgcmV0dXJuIGVyciA/IDQwMCA6IDIwMDtcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICcuLi91c2Vycy91c2Vycy5tb2R1bGUnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZUF1dGggfSBmcm9tICdAY29tbW9uL2F1dGgvcHJpc21hJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtVc2Vyc01vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbQXV0aENvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtcbiAgICBKd3RTZXJ2aWNlLFxuICAgIENvbmZpZ1NlcnZpY2UsXG4gICAgUHJpc21hU2VydmljZUF1dGgsXG4gICAgSFRUUCxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5BVVRILFxuICAgICAgdXNlQ2xhc3M6IEF1dGhTZXJ2aWNlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEF1dGhNb2R1bGUge31cbiIsImltcG9ydCB7IEp3dFNlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2p3dCc7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBTdGF0dXMsIEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi91c2Vycy9pbnRlcmZhY2VzL3VzZXInO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZUF1dGggfSBmcm9tICdAY29tbW9uL2F1dGgvcHJpc21hJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIGV4dGVuZHMgSFRUUCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU2VydmljZXMuVVNFUlMpIHByaXZhdGUgdXNlclNlcnZpY2U6IElVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIGp3dDogSnd0U2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEhUVFAsXG4gICAgcHJpdmF0ZSBwcmlzbWE6IFByaXNtYVNlcnZpY2VBdXRoLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYXN5bmMgbG9naW4oZGF0YSkge1xuICAgIC8vIGZpbmQgdXNlciBieSB1c2VybmFtZVxuICAgIGNvbnN0IHVzZXIgPSAoYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kVXNlcih7IHVzZXJuYW1lOiBkYXRhLnVzZXJuYW1lIH0pKVxuICAgICAgLmRhdGE7XG5cbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICdjb21tb24uSU5DT1JSRUNUX0NSRURFTlRJQUxTJyxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh1c2VyLmRlbGV0ZWREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnc3lzdGVtcy5VU0VSLk5PVF9FWElTVEVEJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgW2FjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW5dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5zaWduVG9rZW4odXNlci5pZCwgdXNlci51c2VybmFtZSksXG4gICAgICB0aGlzLnNpZ25SZWZyZXNoVG9rZW4odXNlci5pZCwgdXNlci51c2VybmFtZSksXG4gICAgXSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KEh0dHBTdGF0dXMuT0ssICdhdXRoLkxPR0lOX1NVQ0NFU1MnLCB7XG4gICAgICAuLi51c2VyLFxuICAgICAgYWNjZXNzVG9rZW4sXG4gICAgICByZWZyZXNoVG9rZW4sXG4gICAgfSk7XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNpZ25Ub2tlbih1c2VySWQ6IG51bWJlciwgdXNlcm5hbWU6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgaWQ6IHVzZXJJZCwgdXNlcm5hbWUgfTtcbiAgICBjb25zdCBzZWNyZXQgPSB0aGlzLmNvbmZpZy5nZXRPclRocm93KCdKV1RfU0VDUkVUJyk7XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IHRoaXMuand0LnNpZ25Bc3luYyhwYXlsb2FkLCB7XG4gICAgICBleHBpcmVzSW46IHRoaXMuY29uZmlnLmdldE9yVGhyb3coJ0pXVF9BQ0NFU1NfVE9LRU5fRVhQSVJFJyksXG4gICAgICBzZWNyZXQ6IHNlY3JldCxcbiAgICB9KTtcblxuICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2lnblJlZnJlc2hUb2tlbih1c2VySWQ6IG51bWJlciwgdXNlcm5hbWU6IHN0cmluZykge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7IGlkOiB1c2VySWQsIHVzZXJuYW1lIH07XG4gICAgY29uc3Qgc2VjcmV0ID0gdGhpcy5jb25maWcuZ2V0T3JUaHJvdygnSldUX1JFRlJFU0hfVE9LRU5fU0VDUkVUJyk7XG5cbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCB0aGlzLmp3dC5zaWduQXN5bmMocGF5bG9hZCwge1xuICAgICAgZXhwaXJlc0luOiB0aGlzLmNvbmZpZy5nZXRPclRocm93KCdKV1RfUkVGUkVTSF9UT0tFTl9FWFBJUkUnKSxcbiAgICAgIHNlY3JldDogc2VjcmV0LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVmcmVzaFRva2VuU2hhMSA9IGNyeXB0b1xuICAgICAgLmNyZWF0ZUhhc2goJ3NoYTEnKVxuICAgICAgLnVwZGF0ZShyZWZyZXNoVG9rZW4pXG4gICAgICAuZGlnZXN0KCdoZXgnKTtcblxuICAgIGF3YWl0IHRoaXMuY3JlYXRlVG9rZW4odXNlcklkLCByZWZyZXNoVG9rZW5TaGExKTtcbiAgICByZXR1cm4gcmVmcmVzaFRva2VuO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBjcmVhdGVUb2tlbih1c2VySWQ6IG51bWJlciwgaGFzaGVkVG9rZW46IHN0cmluZykge1xuICAgIGNvbnN0IHRva2VuID0gYXdhaXQgdGhpcy5wcmlzbWEudG9rZW5zLmZpbmRGaXJzdCh7XG4gICAgICB3aGVyZToge1xuICAgICAgICB1c2VySWQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF0b2tlbikge1xuICAgICAgcmV0dXJuIHRoaXMucHJpc21hLnRva2Vucy5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgdXNlcklkLFxuICAgICAgICAgIHJlZnJlc2hUb2tlblNoYTE6IGhhc2hlZFRva2VuLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucHJpc21hLnRva2Vucy51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgICByZWZyZXNoVG9rZW5TaGExOiBoYXNoZWRUb2tlbixcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi91dGlscy90eXBlb3JtJztcbmltcG9ydCB7IFZhbGlkYXRlVXNlckRldGFpbHMgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUF1dGhTZXJ2aWNlIHtcbiAgbG9naW4oZGF0YTogYW55KTtcbn1cbiIsImltcG9ydCB7IElzTm90RW1wdHksIE1heExlbmd0aCwgTWluTGVuZ3RoIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVVzZXJEdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIEBNaW5MZW5ndGgoMylcbiAgQE1heExlbmd0aCgxNilcbiAgdXNlcm5hbWU6IHN0cmluZztcblxuICBASXNOb3RFbXB0eSgpXG4gIEBNaW5MZW5ndGgoMilcbiAgQE1heExlbmd0aCgzMilcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBATWluTGVuZ3RoKDIpXG4gIEBNYXhMZW5ndGgoMzIpXG4gIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBATWluTGVuZ3RoKDgpXG4gIEBNYXhMZW5ndGgoMzIpXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQge1xuICBDb250cm9sbGVyLFxuICBIdHRwRXhjZXB0aW9uLFxuICBIdHRwU3RhdHVzLFxuICBJbmplY3QsXG4gIFVzZUZpbHRlcnMsXG4gIFZhbGlkYXRpb25QaXBlLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiwgUGF5bG9hZCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBJQ29udmVyc2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL2NvbnZlcnNhdGlvbnMnO1xuaW1wb3J0IHsgQ29udmVyc2F0aW9uRHRvIH0gZnJvbSAnLi9kdG8nO1xuaW1wb3J0IHsgUnBjVmFsaWRhdGlvbkZpbHRlciB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJ0BhcHBzL2NoYXQvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IElVc2VyU2VydmljZSB9IGZyb20gJy4uLy4uL3VzZXJzL2ludGVyZmFjZXMvdXNlcic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIyIH0gZnJvbSAnQG5lc3Rqcy9ldmVudC1lbWl0dGVyJztcblxuQENvbnRyb2xsZXIoJ2NvbnZlcnNhdGlvbnMnKVxuZXhwb3J0IGNsYXNzIENvbnZlcnNhdGlvbnNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChTZXJ2aWNlcy5DT05WRVJTQVRJT05TKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udmVyc2F0aW9uc1NlcnZpY2U6IElDb252ZXJzYXRpb25zU2VydmljZSxcbiAgICBASW5qZWN0KFNlcnZpY2VzLlVTRVJTKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclNlcnZpY2U6IElVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyMixcbiAgKSB7fVxuXG4gIEBNZXNzYWdlUGF0dGVybih7IGNtZDogJ2dldF9jb252ZXJzYXRpb25zJyB9KVxuICBhc3luYyBnZXRDdXN0b21lcnMocXVlcnk6IGFueSkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmNvbnZlcnNhdGlvbnNTZXJ2aWNlLmdldENvbnZlcnNhdGlvbnMocXVlcnkpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdnZXRfY29udmVyc2F0aW9uX2J5X2lkJylcbiAgYXN5bmMgZ2V0Q29udmVyc2F0aW9uQnlJZChxdWVyeTogYW55KSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuY29udmVyc2F0aW9uc1NlcnZpY2UuZ2V0Q29udmVyc2F0aW9uQnlJZChxdWVyeSk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2FkZF9jb252ZXJzYXRpb24nKVxuICBAVXNlRmlsdGVycyhuZXcgUnBjVmFsaWRhdGlvbkZpbHRlcigpKVxuICBhc3luYyBhZGRDb252ZXJzYXRpb24oXG4gICAgQFBheWxvYWQobmV3IFZhbGlkYXRpb25QaXBlKHsgd2hpdGVsaXN0OiB0cnVlIH0pKSBkdG86IENvbnZlcnNhdGlvbkR0byxcbiAgKSB7XG4gICAgY29uc3QgY29udmVyc2F0aW9uID0gYXdhaXQgdGhpcy5jb252ZXJzYXRpb25zU2VydmljZS5hZGRDb252ZXJzYXRpb24oZHRvKTtcbiAgICBjb252ZXJzYXRpb24uY29kZSA9PT0gMjAwICYmIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2NvbnZlcnNhdGlvbi5jcmVhdGUnLCBjb252ZXJzYXRpb24uZGF0YSk7XG4gICAgcmV0dXJuIGNvbnZlcnNhdGlvbjtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybigncmVjaXBpZW50X2V4aXN0JylcbiAgYXN5bmMgY2hlY2tDb252ZXJzYXRpb25FeGlzdHMoXG4gICAgQFBheWxvYWQoKSBwYXlsb2FkOiB7IHVzZXJJZDogbnVtYmVyOyByZWNpcGllbnRJZDogbnVtYmVyIH0sXG4gICkge1xuICAgIGNvbnN0IHsgdXNlcklkLCByZWNpcGllbnRJZCB9ID0gcGF5bG9hZDtcbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSBhd2FpdCB0aGlzLmNvbnZlcnNhdGlvbnNTZXJ2aWNlLmlzQ3JlYXRlZChcbiAgICAgIHJlY2lwaWVudElkLFxuICAgICAgdXNlcklkLFxuICAgICk7XG4gICAgaWYgKGNvbnZlcnNhdGlvbikgcmV0dXJuIGNvbnZlcnNhdGlvbjtcbiAgICBjb25zdCByZWNpcGllbnQgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRVc2VyKHsgaWQ6IHJlY2lwaWVudElkIH0pO1xuICAgIGlmICghcmVjaXBpZW50KVxuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1JlY2lwaWVudCBOb3QgRm91bmQnLCBIdHRwU3RhdHVzLk5PVF9GT1VORCk7XG4gICAgY29uc3QgbmV3Q29udmVyc2F0aW9uID0gYXdhaXQgdGhpcy5jb252ZXJzYXRpb25zU2VydmljZS5hZGRDb252ZXJzYXRpb24oXG4gICAgICAvLyB1c2VyLFxuICAgICAgLy8ge1xuICAgICAgLy8gICB1c2VybmFtZTogcmVjaXBpZW50LnVzZXJuYW1lLFxuICAgICAgLy8gICBtZXNzYWdlOiAnaGVsbG8nLFxuICAgICAgLy8gfSxcbiAgICAgIHtcbiAgICAgICAgY3JlYXRlZEJ5OiB1c2VySWQsXG4gICAgICAgIHVzZXJuYW1lOiByZWNpcGllbnQudXNlcm5hbWUsXG4gICAgICAgIG1lc3NhZ2VzOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3JlYXRlZEJ5OiB1c2VySWQsXG4gICAgICAgICAgICBhdXRob3JJZDogdXNlcklkLFxuICAgICAgICAgICAgY29udGVudDogJ2hlbGxvJyxcbiAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgfSxcbiAgICApO1xuICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2NvbnZlcnNhdGlvbi5jcmVhdGUnLCBuZXdDb252ZXJzYXRpb24pO1xuICAgIHJldHVybiBuZXdDb252ZXJzYXRpb247XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSwgTmVzdE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IENvbnZlcnNhdGlvbnNDb250cm9sbGVyIH0gZnJvbSAnLi9jb252ZXJzYXRpb25zLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQ29udmVyc2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL2NvbnZlcnNhdGlvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBQcmlzbWFNb2R1bGVDb252ZXJzYXRpb25zIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5pbXBvcnQgeyBQcmlzbWFRdWVyeSB9IGZyb20gJ0Bjb21tb24vdXRpbHMvZHRvL3F1ZXJ5LnByaXNtYSc7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IFVzZXJzTW9kdWxlIH0gZnJvbSAnQGFwcHMvY2hhdC91c2Vycy91c2Vycy5tb2R1bGUnO1xuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICAgIGVudkZpbGVQYXRoOiAnLmVudi5kZXYnLFxuICAgIH0pLFxuICAgIFVzZXJzTW9kdWxlLFxuICAgIFByaXNtYU1vZHVsZUNvbnZlcnNhdGlvbnMsXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbQ29udmVyc2F0aW9uc0NvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtcbiAgICBQcmlzbWFRdWVyeSxcbiAgICBIVFRQLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNlcnZpY2VzLkNPTlZFUlNBVElPTlMsXG4gICAgICB1c2VDbGFzczogQ29udmVyc2F0aW9uc1NlcnZpY2UsXG4gICAgfSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNlcnZpY2VzLkNPTlZFUlNBVElPTlMsXG4gICAgICB1c2VDbGFzczogQ29udmVyc2F0aW9uc1NlcnZpY2UsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgQ3VzdG9tUmVzcG9uc2UsIEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cFN0YXR1cywgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZUNvbnZlcnNhdGlvbnMgfSBmcm9tICcuL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XG5pbXBvcnQgeyBSRVNUZnVsUGFyYW1zLCBSRVNUZnVsU2VydmljZSB9IGZyb20gJ0Bjb21tb24vdXRpbHMvcmVxdWV0cy51dGlsJztcbmltcG9ydCB7IENvbnZlcnNhdGlvbkR0byB9IGZyb20gJy4vZHRvJztcbmltcG9ydCB7IFByaXNtYVF1ZXJ5IH0gZnJvbSAnQGNvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBjbG9uZURlZXAgfSBmcm9tICdsb2Rhc2gnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uc1NlcnZpY2UgZXh0ZW5kcyBSRVNUZnVsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlQ29udmVyc2F0aW9ucyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByaXNtYXF1ZXJ5OiBQcmlzbWFRdWVyeSxcbiAgICBwcml2YXRlIGh0dHA6IEhUVFBcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0RGIoKTogUHJpc21hUXVlcnkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5wcmlzbWFxdWVyeS53aGVyZSh7IGRlbGV0ZWREYXRlOiBudWxsIH0pO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXJhbXM6IFJFU1RmdWxQYXJhbXMgPSB7XG4gICAgbGlzdDoge1xuICAgICAgZmlsdGVyRmllbGRzOiBbXSxcbiAgICAgIHNlYXJjaEZpZWxkczogW10sXG4gICAgICBvcmRlckZpZWxkczogW10sXG4gICAgfSxcbiAgfTtcblxuICBhc3luYyBnZXRDb252ZXJzYXRpb25zKHF1ZXJ5OiBhbnkpOiBQcm9taXNlPEN1c3RvbVJlc3BvbnNlPiB7XG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGF3YWl0IHRoaXMuZ2V0TGlzdHMocXVlcnkpO1xuICAgIGNvbnN0IHdoZXJlID0ge1xuICAgICAgT1I6IFtcbiAgICAgICAgeyBjcmVhdG9yOiBOdW1iZXIocXVlcnkudXNlcklkKSB9LFxuICAgICAgICB7IHJlY2lwaWVudDogTnVtYmVyKHF1ZXJ5LnVzZXJJZCkgfVxuICAgICAgXVxuICAgIH1cbiAgICBjb25zdCBbdG90YWwsIHJlc3VsdHNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wcmlzbWEuY29udmVyc2F0aW9uLmNvdW50KHtcbiAgICAgICAgd2hlcmVcbiAgICAgIH0pLFxuICAgICAgdGhpcy5wcmlzbWEuY29udmVyc2F0aW9uLmZpbmRNYW55KHtcbiAgICAgICAgdGFrZTogcGFnaW5hdGlvbi50YWtlLFxuICAgICAgICBza2lwOiBwYWdpbmF0aW9uLnNraXAsXG4gICAgICAgIC8vIGN1cnNvcjogcGFnaW5hdGlvbi5jdXJzb3IsXG4gICAgICAgIHdoZXJlLFxuICAgICAgICBvcmRlckJ5OiB7IGxhc3RNZXNzYWdlU2VudEF0OiAnZGVzYycgfSxcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIGxhc3RNZXNzYWdlU2VudDogdHJ1ZSxcbiAgICAgICAgICB1c2VyQ3JlYXRvcjogdHJ1ZSxcbiAgICAgICAgICB1c2VyUmVjaXBpZW50OiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHsgY29udGVudDogdHJ1ZSwgYXV0aG9ySWQ6IHRydWUsIGNvbnZlcnNhdGlvbklkOiB0cnVlLCBhdHRhY2htZW50czogdHJ1ZSB9XG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSk7XG4gICAgY29uc3QgY29udmVyc2F0aW9ucyA9IHRoaXMuY29tcGFjdENvbnZlcnNhdGlvbkxpc3QoY2xvbmVEZWVwKHJlc3VsdHMpKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgJ0dldCBjb252ZXJzYXRpb25zIHN1Y2Nlc3NmdWxseScsXG4gICAgICBjb252ZXJzYXRpb25zLFxuICAgICAgdG90YWwsXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGdldENvbnZlcnNhdGlvbkJ5SWQocXVlcnk6IGFueSk6IFByb21pc2U8Q3VzdG9tUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBpZCwgdXNlcklkIH0gPSBxdWVyeTtcbiAgICAgIGNvbnN0IGlzUmVhZGFibGUgPSBhd2FpdCB0aGlzLmhhc0FjY2Vzcyh7IGlkOiBOdW1iZXIoaWQpLCB1c2VySWQ6IHVzZXJJZCB9KTtcbiAgICAgIGlmICghaXNSZWFkYWJsZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ1lvdSBjYW5ub3QgdmlldyB0aGlzIGNvbnZlcnNhdGlvbicsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IHRoaXMuY29tcGFjdENvbnZlcnNhdGlvbkxpc3QoY2xvbmVEZWVwKFtkYXRhXSkpWzBdO1xuICAgICAgaWYgKCFjb252ZXJzYXRpb24pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdUaGUgY29udmVyc2F0aW9uIGRvZXMgbm90IGV4aXN0ZWQnLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjb252ZXJzYXRpb24uZGVsZXRlZERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdUaGUgY29udmVyc2F0aW9uIGhhcyBiZWVuIGRlbGV0ZWQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ0dldCB0aGUgY29udmVyc2F0aW9uIGl0ZW0gc3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgY29udmVyc2F0aW9uLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnR2V0IHRoZSBjb252ZXJzYXRpb24gaXRlbSB1bnN1Y2Nlc3NmdWxseScsXG4gICAgICAgIGVycm9yLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmaW5kQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWEuY29udmVyc2F0aW9uLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQsXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICBsYXN0TWVzc2FnZVNlbnQ6IHRydWUsXG4gICAgICAgIHVzZXJDcmVhdG9yOiB0cnVlLFxuICAgICAgICB1c2VyUmVjaXBpZW50OiB0cnVlLFxuICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgIHNlbGVjdDogeyBjb250ZW50OiB0cnVlLCBhdXRob3JJZDogdHJ1ZSwgY29udmVyc2F0aW9uSWQ6IHRydWUsIGF0dGFjaG1lbnRzOiB0cnVlIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGFkZENvbnZlcnNhdGlvbihkdG86IENvbnZlcnNhdGlvbkR0byk6IFByb21pc2U8Q3VzdG9tUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVjaXBpZW50ID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGVtYWlsOiBkdG8udXNlcm5hbWUsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGlmICghcmVjaXBpZW50KSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnVGhlIHJlY2lwaWVudCBkb2VzIG5vdCBleGlzdGVkJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChyZWNpcGllbnQuZGVsZXRlZERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdUaGUgcmVjaXBpZW50IGhhcyBiZWVuIGRlbGV0ZWQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKGR0by5jcmVhdGVkQnkgPT09IHJlY2lwaWVudC5pZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ0Nhbm5vdCBjcmVhdGUgY29udmVyc2F0aW9uIHdpdGggeW91cnNlbGYnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBpc0ZyaWVuZHMgPSBhd2FpdCB0aGlzLmlzRnJpZW5kcyhkdG8uY3JlYXRlZEJ5LCByZWNpcGllbnQuaWQpO1xuICAgICAgaWYgKCFpc0ZyaWVuZHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdGcmllbmQgTm90IEZvdW5kJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgaXNFeGlzdCA9IGF3YWl0IHRoaXMuaXNDcmVhdGVkKGR0by5jcmVhdGVkQnksIHJlY2lwaWVudC5pZCk7XG4gICAgICBpZiAoaXNFeGlzdCkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ0NvbnZlcnNhdGlvbiBhbHJlYWR5IGV4aXN0cycsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgKTtcbiAgICAgIH0gXG5cbiAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbkRhdGEgPSB7XG4gICAgICAgIGNyZWF0ZWRCeTogZHRvLmNyZWF0ZWRCeSxcbiAgICAgICAgY3JlYXRvcjogZHRvLmNyZWF0ZWRCeSxcbiAgICAgICAgcmVjaXBpZW50OiByZWNpcGllbnQuaWQsXG4gICAgICAgIGxhc3RNZXNzYWdlU2VudEF0OiBuZXcgRGF0ZSgpLFxuICAgICAgICBtZXNzYWdlczoge1xuICAgICAgICAgIGNyZWF0ZTogZHRvLm1lc3NhZ2VzLFxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsZXQgcmVzdWx0ID0gYXdhaXQgdGhpcy5wcmlzbWEuY29udmVyc2F0aW9uLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IGNvbnZlcnNhdGlvbkRhdGEsXG4gICAgICAgIGluY2x1ZGU6IHttZXNzYWdlczogdHJ1ZX1cbiAgICAgIH0pO1xuICAgICAgLy8gdXBkYXRlIGZvciBsYXN0TWVzc2FnZVNlbnRcbiAgICAgIGF3YWl0IHRoaXMucHJpc21hLmNvbnZlcnNhdGlvbl9NZXNzYWdlLmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBjb252ZXJzYXRpb25JZDogcmVzdWx0LmlkLFxuICAgICAgICAgIG1lc3NhZ2VJZDogcmVzdWx0Lm1lc3NhZ2VzWzBdPy5pZFxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMucHJpc21hLmNvbnZlcnNhdGlvbi5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogcmVzdWx0LmlkLFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgdXNlckNyZWF0b3I6IHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgICAgUGVlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgcHJlc2VuY2U6IHRydWUsXG4gICAgICAgICAgICAgIFVzZXJQcm9maWxlOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB1c2VyUmVjaXBpZW50OiB0cnVlLFxuICAgICAgICAgIG1lc3NhZ2VzOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHsgY29udGVudDogdHJ1ZSwgYXV0aG9ySWQ6IHRydWUsIGNvbnZlcnNhdGlvbklkOiB0cnVlLCBhdHRhY2htZW50czogdHJ1ZSB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIHJldHVybiBkYXRhXG4gICAgICBsZXQgY29udmVyc2F0aW9uID0gY2xvbmVEZWVwKGRhdGEpO1xuICAgICAgY29udmVyc2F0aW9uWydjcmVhdGVkQXQnXSA9IGNvbnZlcnNhdGlvblsnY3JlYXRlZERhdGUnXTtcbiAgICAgIGNvbnZlcnNhdGlvblsnY3JlYXRvciddID0gdGhpcy5yZWR1Y2VQcm9wcyhjb252ZXJzYXRpb25bJ3VzZXJDcmVhdG9yJ10pO1xuICAgICAgY29udmVyc2F0aW9uWydyZWNpcGllbnQnXSA9IHRoaXMucmVkdWNlUHJvcHMoY29udmVyc2F0aW9uWyd1c2VyUmVjaXBpZW50J10pO1xuXG4gICAgICAvL3JlbW92ZVxuICAgICAgZGVsZXRlIGNvbnZlcnNhdGlvblsnY3JlYXRlZERhdGUnXTtcbiAgICAgIGRlbGV0ZSBjb252ZXJzYXRpb25bJ3VzZXJDcmVhdG9yJ107XG4gICAgICBkZWxldGUgY29udmVyc2F0aW9uWyd1c2VyUmVjaXBpZW50J107XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICdDcmVhdGUgdGhlIGNvbnZlcnNhdGlvbiBzdWNjZXNzZnVsbHknLFxuICAgICAgICBjb252ZXJzYXRpb25cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ0NyZWF0ZSB0aGUgY29udmVyc2F0aW9uIHVuc3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGlzQ3JlYXRlZCh1c2VySWQ6IG51bWJlciwgcmVjaXBpZW50SWQ6IG51bWJlcikge1xuICAgIGNvbnN0IHJlc3VsdHMgPSBhd2FpdCB0aGlzLnByaXNtYS5jb252ZXJzYXRpb24uZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgT1I6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjcmVhdG9yOiB1c2VySWQsXG4gICAgICAgICAgICByZWNpcGllbnQ6IHJlY2lwaWVudElkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgY3JlYXRvcjogcmVjaXBpZW50SWQsXG4gICAgICAgICAgICByZWNpcGllbnQ6IHVzZXJJZCxcbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4gcmVzdWx0cy5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgYXN5bmMgaGFzQWNjZXNzKHsgaWQsIHVzZXJJZCB9OiBhbnkpIHtcbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSBhd2FpdCB0aGlzLmZpbmRCeUlkKGlkKTtcbiAgICBpZiAoIWNvbnZlcnNhdGlvbikge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ1RoZSBjb252ZXJzYXRpb24gZG9lcyBub3QgZXhpc3RlZCcsXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoY29udmVyc2F0aW9uLmRlbGV0ZWREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnVGhpcyBjb252ZXJzYXRpb24gaGFzIGJlZW4gZGVsZXRlZCcsXG4gICAgICApO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgY29udmVyc2F0aW9uLnVzZXJDcmVhdG9yPy5pZCA9PT0gdXNlcklkIHx8IGNvbnZlcnNhdGlvbi51c2VyUmVjaXBpZW50Py5pZCA9PT0gdXNlcklkXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGlzRnJpZW5kcyhjcmVhdG9yLCByZWNpcGllbnQpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucHJpc21hLmZyaWVuZC5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBPUjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHNlbmRlcklkOiBjcmVhdG9yLFxuICAgICAgICAgICAgcmVjZWl2ZXJJZDogcmVjaXBpZW50XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBzZW5kZXJJZDogcmVjaXBpZW50LFxuICAgICAgICAgICAgcmVjZWl2ZXJJZDogY3JlYXRvclxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiByZXNwb25zZS5sZW5ndGggPiAwID8gdHJ1ZSA6IGZhbHNlO1xuICB9XG5cbiAgY29tcGFjdENvbnZlcnNhdGlvbkxpc3QoY29udmVyc2F0aW9ucykge1xuICAgIGxldCBsaXN0ID0gW107XG4gICAgY29udmVyc2F0aW9ucy5mb3JFYWNoKGNvbnZlcnNhdGlvbiA9PiB7XG4gICAgICBjb252ZXJzYXRpb25bJ2xhc3RNZXNzYWdlU2VudCddID0gY29udmVyc2F0aW9uWydsYXN0TWVzc2FnZVNlbnQnXS5wb3AoKTtcbiAgICAgIGNvbnZlcnNhdGlvblsnY3JlYXRvciddID0gdGhpcy5yZWR1Y2VQcm9wcyhjb252ZXJzYXRpb25bJ3VzZXJDcmVhdG9yJ10pO1xuICAgICAgY29udmVyc2F0aW9uWydyZWNpcGllbnQnXSA9IHRoaXMucmVkdWNlUHJvcHMoY29udmVyc2F0aW9uWyd1c2VyUmVjaXBpZW50J10pO1xuICAgICAgY29udmVyc2F0aW9uWydjcmVhdG9yUGVlciddID0gdGhpcy5yZWR1Y2VQcm9wcyhjb252ZXJzYXRpb25bJ3VzZXJDcmVhdG9yJ10pPy5wZWVyO1xuICAgICAgY29udmVyc2F0aW9uWydyZWNpcGllbnRQZWVyJ10gPSB0aGlzLnJlZHVjZVByb3BzKGNvbnZlcnNhdGlvblsndXNlclJlY2lwaWVudCddKT8ucGVlcjtcblxuICAgICAgZGVsZXRlIGNvbnZlcnNhdGlvblsndXNlckNyZWF0b3InXTtcbiAgICAgIGRlbGV0ZSBjb252ZXJzYXRpb25bJ3VzZXJSZWNpcGllbnQnXTtcbiAgICAgIGxpc3QucHVzaChjb252ZXJzYXRpb24pO1xuICAgIH0pXG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cblxuICByZWR1Y2VQcm9wcyhvYmopIHtcbiAgICByZXR1cm4ge1xuICAgICAgaWQ6IG9iai5pZCxcbiAgICAgIGZpcnN0TmFtZTogb2JqLmZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lOiBvYmoubGFzdE5hbWUsXG4gICAgICBlbWFpbDogb2JqLmVtYWlsLFxuICAgICAgdXNlcm5hbWU6IG9iai51c2VybmFtZSxcbiAgICAgIHBlZXI6IG9iaj8uUGVlcixcbiAgICAgIHByb2ZpbGU6IG9iaj8uVXNlclByb2ZpbGUsXG4gICAgICBwcmVzZW5jZTogb2JqPy5wcmVzZW5jZSxcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IENvbnZlcnNhdGlvbkR0byB9IGZyb20gJy4vZHRvJztcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udmVyc2F0aW9uc1NlcnZpY2Uge1xuICBhZGRDb252ZXJzYXRpb24oXG4gICAgY29udmVyc2F0aW9uUGFyYW1zOiBDb252ZXJzYXRpb25EdG8sXG4gICk6IFByb21pc2U8YW55PjtcbiAgZ2V0Q29udmVyc2F0aW9ucyhxdWVyeTogYW55KTogUHJvbWlzZTxhbnlbXT47XG4gIGdldENvbnZlcnNhdGlvbkJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8YW55PjtcbiAgZmluZEJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8YW55IHwgdW5kZWZpbmVkPjtcbiAgaGFzQWNjZXNzKHBhcmFtczogYW55KTogUHJvbWlzZTxib29sZWFuPjtcbiAgaXNDcmVhdGVkKFxuICAgIHVzZXJJZDogbnVtYmVyLFxuICAgIHJlY2lwaWVudElkOiBudW1iZXIsXG4gICk6IFByb21pc2U8YW55IHwgdW5kZWZpbmVkPjtcbiAgaXNGcmllbmRzKFxuICAgIGNyZWF0b3JJZDogbnVtYmVyLFxuICAgIHJlY2lwaWVudElkOiBudW1iZXIsXG4gICk6IFByb21pc2U8YW55IHwgdW5kZWZpbmVkPjtcbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQge1xuICAgIElzTm90RW1wdHksXG4gICAgSXNJbnQsXG4gICAgSXNPcHRpb25hbCxcbiAgICBBcnJheU5vdEVtcHR5LFxuICAgIFZhbGlkYXRlTmVzdGVkLFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHtGaWxlQXR0YWNoZWREdG99IGZyb20gJy4vaW5kZXgnO1xuXG5leHBvcnQgY2xhc3MgQXR0YWNobWVudER0byB7XG4gICAgQElzSW50KClcbiAgICBASXNPcHRpb25hbCgpXG4gICAgY3JlYXRlZEJ5OiBudW1iZXI7XG5cbiAgICBASXNJbnQoKVxuICAgIEBJc05vdEVtcHR5KClcbiAgICBtZXNzYWdlSWQ6IG51bWJlcjtcblxuICAgIEBJc09wdGlvbmFsKClcbiAgICBAVHlwZSgoKSA9PiBGaWxlQXR0YWNoZWREdG8pXG4gICAgYXR0YWNobWVudHNcbn1cbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBcbiAgSXNOb3RFbXB0eSxcbiAgSXNTdHJpbmcsXG4gIElzSW50LFxuICBJc09wdGlvbmFsLFxuICBBcnJheU5vdEVtcHR5LFxuICBWYWxpZGF0ZU5lc3RlZCxcbiB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBNZXNzYWdlRHRvIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25EdG8ge1xuICBASXNJbnQoKVxuICBASXNPcHRpb25hbCgpXG4gIGNyZWF0ZWRCeTogbnVtYmVyO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgdXNlcm5hbWU6IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBUeXBlKCgpID0+IE1lc3NhZ2VEdG8pXG4gIG1lc3NhZ2VzXG59XG4iLCJpbXBvcnQge1xuICAgIElzTm90RW1wdHksXG4gICAgSXNPcHRpb25hbCxcbiAgICBJc1N0cmluZyxcbiAgICBJc0ludCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIEZpbGVBdHRhY2hlZER0byB7XG4gICAgQElzSW50KClcbiAgICBASXNPcHRpb25hbCgpXG4gICAgY3JlYXRlZEJ5OiBudW1iZXI7XG5cbiAgICBASXNTdHJpbmcoKVxuICAgIEBJc05vdEVtcHR5KClcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xuXG4gICAgQElzU3RyaW5nKClcbiAgICBASXNOb3RFbXB0eSgpXG4gICAgYmFzZVVybDogc3RyaW5nO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hdHRhY2htZW50LmR0byc7XG5leHBvcnQgKiBmcm9tICcuL2NvbnZlcnNhdGlvbi5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9maWxlX2F0dGFjaGVkLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UuZHRvJzsiLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgICBJc05vdEVtcHR5LFxuICAgIElzU3RyaW5nLFxuICAgIElzSW50LFxuICAgIElzT3B0aW9uYWwsXG4gICAgQXJyYXlOb3RFbXB0eSxcbiAgICBWYWxpZGF0ZU5lc3RlZCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCB7IEF0dGFjaG1lbnREdG8gfSBmcm9tICcuL2luZGV4JztcblxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VEdG8ge1xuICAgIEBJc0ludCgpXG4gICAgQElzT3B0aW9uYWwoKVxuICAgIGNyZWF0ZWRCeTogbnVtYmVyO1xuXG4gICAgQElzTm90RW1wdHkoKVxuICAgIEBJc1N0cmluZygpXG4gICAgY29udGVudDogc3RyaW5nO1xuXG4gICAgQElzSW50KClcbiAgICBASXNPcHRpb25hbCgpXG4gICAgYXV0aG9ySWQ6IG51bWJlcjtcblxuICAgIEBJc0ludCgpXG4gICAgQElzT3B0aW9uYWwoKVxuICAgIGNvbnZlcnNhdGlvbklkOiBudW1iZXI7XG5cbiAgICBASXNJbnQoKVxuICAgIEBJc09wdGlvbmFsKClcbiAgICBsYXN0TWVzc2FnZUlkOiBudW1iZXI7XG5cbiAgICBASXNPcHRpb25hbCgpXG4gICAgQFR5cGUoKCkgPT4gQXR0YWNobWVudER0bylcbiAgICBhdHRhY2htZW50c1xufVxuIiwiaW1wb3J0IHsgR2xvYmFsLCBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlQ29udmVyc2F0aW9ucyB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnO1xuXG5AR2xvYmFsKClcbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtQcmlzbWFTZXJ2aWNlQ29udmVyc2F0aW9uc10sXG4gIGV4cG9ydHM6IFtQcmlzbWFTZXJ2aWNlQ29udmVyc2F0aW9uc10sXG59KVxuZXhwb3J0IGNsYXNzIFByaXNtYU1vZHVsZUNvbnZlcnNhdGlvbnMge31cbiIsImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvbXlzcWwnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmlzbWFTZXJ2aWNlQ29udmVyc2F0aW9ucyBleHRlbmRzIFByaXNtYUNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGRhdGFzb3VyY2VzOiB7XG4gICAgICAgIGRiOiB7XG4gICAgICAgICAgdXJsOiBjb25maWcuZ2V0T3JUaHJvdygnTVlTUUxfREFUQUJBU0VfVVJMJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY2xlYW5EYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kdHJhbnNhY3Rpb24oW3RoaXMuY29udmVyc2F0aW9uLmRlbGV0ZU1hbnkoKV0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBHYXRld2F5TW9kdWxlIH0gZnJvbSAnLi4vZ2F0ZXdheS9nYXRld2F5Lm1vZHVsZSc7XG5pbXBvcnQgeyBGcmllbmRSZXF1ZXN0c0V2ZW50cyB9IGZyb20gJy4vZnJpZW5kLXJlcXVlc3RzLmV2ZW50cyc7XG5pbXBvcnQgeyBGcmllbmRFdmVudHMgfSBmcm9tICcuL2ZyaWVuZHMuZXZlbnRzJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtHYXRld2F5TW9kdWxlXSxcbiAgcHJvdmlkZXJzOiBbRnJpZW5kUmVxdWVzdHNFdmVudHMsIEZyaWVuZEV2ZW50c10sXG59KVxuZXhwb3J0IGNsYXNzIEV2ZW50c01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE9uRXZlbnQgfSBmcm9tICdAbmVzdGpzL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IHsgTWVzc2FnaW5nR2F0ZXdheSB9IGZyb20gJy4uL2dhdGV3YXkvZ2F0ZXdheSc7XG5pbXBvcnQgeyBTZXJ2ZXJFdmVudHMsIFdlYnNvY2tldEV2ZW50cyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGcmllbmRSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbHMvdHlwZW9ybSc7XG5pbXBvcnQgeyBBY2NlcHRGcmllbmRSZXF1ZXN0UmVzcG9uc2UgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGcmllbmRSZXF1ZXN0c0V2ZW50cyB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZ2F0ZXdheTogTWVzc2FnaW5nR2F0ZXdheSkge31cblxuICBAT25FdmVudCgnZnJpZW5kcmVxdWVzdC5jcmVhdGUnKVxuICBmcmllbmRSZXF1ZXN0Q3JlYXRlKHBheWxvYWQ6IEZyaWVuZFJlcXVlc3QpIHtcbiAgICBjb25zb2xlLmxvZygnZnJpZW5kcmVxdWVzdC5jcmVhdGUnKTtcbiAgICBjb25zdCByZWNlaXZlclNvY2tldCA9IHRoaXMuZ2F0ZXdheS5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KFxuICAgICAgcGF5bG9hZC5yZWNlaXZlci5pZCxcbiAgICApO1xuICAgIHJlY2VpdmVyU29ja2V0ICYmIHJlY2VpdmVyU29ja2V0LmVtaXQoJ29uRnJpZW5kUmVxdWVzdFJlY2VpdmVkJywgcGF5bG9hZCk7XG4gIH1cblxuICBAT25FdmVudCgnZnJpZW5kcmVxdWVzdC5jYW5jZWwnKVxuICBoYW5kbGVGcmllbmRSZXF1ZXN0Q2FuY2VsKHBheWxvYWQ6IEZyaWVuZFJlcXVlc3QpIHtcbiAgICBjb25zb2xlLmxvZygnZnJpZW5kcmVxdWVzdC5jYW5jZWwnKTtcbiAgICBjb25zdCByZWNlaXZlclNvY2tldCA9IHRoaXMuZ2F0ZXdheS5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KFxuICAgICAgcGF5bG9hZC5yZWNlaXZlci5pZCxcbiAgICApO1xuICAgIHJlY2VpdmVyU29ja2V0ICYmIHJlY2VpdmVyU29ja2V0LmVtaXQoJ29uRnJpZW5kUmVxdWVzdENhbmNlbGxlZCcsIHBheWxvYWQpO1xuICB9XG5cbiAgQE9uRXZlbnQoU2VydmVyRXZlbnRzLkZSSUVORF9SRVFVRVNUX0FDQ0VQVEVEKVxuICBoYW5kbGVGcmllbmRSZXF1ZXN0QWNjZXB0ZWQocGF5bG9hZDogQWNjZXB0RnJpZW5kUmVxdWVzdFJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coU2VydmVyRXZlbnRzLkZSSUVORF9SRVFVRVNUX0FDQ0VQVEVEKTtcbiAgICBjb25zdCBzZW5kZXJTb2NrZXQgPSB0aGlzLmdhdGV3YXkuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChcbiAgICAgIHBheWxvYWQuZnJpZW5kUmVxdWVzdC5zZW5kZXIuaWQsXG4gICAgKTtcbiAgICBzZW5kZXJTb2NrZXQgJiZcbiAgICAgIHNlbmRlclNvY2tldC5lbWl0KFdlYnNvY2tldEV2ZW50cy5GUklFTkRfUkVRVUVTVF9BQ0NFUFRFRCwgcGF5bG9hZCk7XG4gIH1cblxuICBAT25FdmVudChTZXJ2ZXJFdmVudHMuRlJJRU5EX1JFUVVFU1RfUkVKRUNURUQpXG4gIGhhbmRsZUZyaWVuZFJlcXVlc3RSZWplY3RlZChwYXlsb2FkOiBGcmllbmRSZXF1ZXN0KSB7XG4gICAgY29uc29sZS5sb2coU2VydmVyRXZlbnRzLkZSSUVORF9SRVFVRVNUX1JFSkVDVEVEKTtcbiAgICBjb25zdCBzZW5kZXJTb2NrZXQgPSB0aGlzLmdhdGV3YXkuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChwYXlsb2FkLnNlbmRlci5pZCk7XG4gICAgc2VuZGVyU29ja2V0ICYmXG4gICAgICBzZW5kZXJTb2NrZXQuZW1pdChXZWJzb2NrZXRFdmVudHMuRlJJRU5EX1JFUVVFU1RfUkVKRUNURUQsIHBheWxvYWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgT25FdmVudCB9IGZyb20gJ0BuZXN0anMvZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQgeyBNZXNzYWdpbmdHYXRld2F5IH0gZnJvbSAnLi4vZ2F0ZXdheS9nYXRld2F5JztcbmltcG9ydCB7IFNlcnZlckV2ZW50cyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBSZW1vdmVGcmllbmRFdmVudFBheWxvYWQgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGcmllbmRFdmVudHMge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGdhdGV3YXk6IE1lc3NhZ2luZ0dhdGV3YXkpIHt9XG5cbiAgQE9uRXZlbnQoU2VydmVyRXZlbnRzLkZSSUVORF9SRU1PVkVEKVxuICBoYW5kbGVGcmllbmRSZW1vdmVkKHsgdXNlcklkLCBmcmllbmQgfTogUmVtb3ZlRnJpZW5kRXZlbnRQYXlsb2FkKSB7XG4gICAgY29uc3QgeyBzZW5kZXIsIHJlY2VpdmVyIH0gPSBmcmllbmQ7XG4gICAgY29uc29sZS5sb2coU2VydmVyRXZlbnRzLkZSSUVORF9SRU1PVkVEKTtcbiAgICBjb25zdCBzb2NrZXQgPSB0aGlzLmdhdGV3YXkuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChcbiAgICAgIHJlY2VpdmVyLmlkID09PSB1c2VySWQgPyBzZW5kZXIuaWQgOiByZWNlaXZlci5pZCxcbiAgICApO1xuICAgIGNvbnNvbGUubG9nKGBFbWl0dGluZyBFdmVudCBmb3IgJHtzb2NrZXQ/LnVzZXI/LnVzZXJuYW1lfWApO1xuICAgIHNvY2tldD8uZW1pdCgnb25GcmllbmRSZW1vdmVkJywgZnJpZW5kKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29udHJvbGxlcixcbiAgR2V0LFxuICBIdHRwRXhjZXB0aW9uLFxuICBIdHRwU3RhdHVzLFxuICBJbmplY3QsXG4gIFBhcmFtLFxuICBQYXJzZUludFBpcGUsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlcjIgfSBmcm9tICdAbmVzdGpzL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IHsgTWVzc2FnZVBhdHRlcm4sIFBheWxvYWQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgSUNvbnZlcnNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi4vY29udmVyc2F0aW9ucy9zcmMvY29udmVyc2F0aW9ucyc7XG5pbXBvcnQgeyBDb252ZXJzYXRpb25Ob3RGb3VuZEV4Y2VwdGlvbiB9IGZyb20gJy4uL2NvbnZlcnNhdGlvbnMvZXhjZXB0aW9ucy9Db252ZXJzYXRpb25Ob3RGb3VuZCc7XG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi91c2Vycy9pbnRlcmZhY2VzL3VzZXInO1xuaW1wb3J0IHsgUm91dGVzLCBTZXJ2aWNlcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uL3V0aWxzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL3V0aWxzL3R5cGVvcm0nO1xuXG5AQ29udHJvbGxlcihSb3V0ZXMuRVhJU1RTKVxuZXhwb3J0IGNsYXNzIEV4aXN0c0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNlcnZpY2VzLkNPTlZFUlNBVElPTlMpXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb252ZXJzYXRpb25zU2VydmljZTogSUNvbnZlcnNhdGlvbnNTZXJ2aWNlLFxuICAgIEBJbmplY3QoU2VydmljZXMuVVNFUlMpXG4gICAgcHJpdmF0ZSByZWFkb25seSB1c2VyU2VydmljZTogSVVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgZXZlbnRzOiBFdmVudEVtaXR0ZXIyLFxuICApIHt9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdyZWNpcGllbnRfZXhpc3QnKVxuICBhc3luYyBjaGVja0NvbnZlcnNhdGlvbkV4aXN0cyhcbiAgICBAUGF5bG9hZCgpIHBheWxvYWQ6IHsgdXNlcklkOiBudW1iZXI7IHJlY2lwaWVudElkOiBudW1iZXIgfSxcbiAgKSB7XG4gICAgY29uc3QgeyB1c2VySWQsIHJlY2lwaWVudElkIH0gPSBwYXlsb2FkO1xuICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IGF3YWl0IHRoaXMuY29udmVyc2F0aW9uc1NlcnZpY2UuaXNDcmVhdGVkKFxuICAgICAgcmVjaXBpZW50SWQsXG4gICAgICB1c2VySWQsXG4gICAgKTtcbiAgICBpZiAoY29udmVyc2F0aW9uKSByZXR1cm4gY29udmVyc2F0aW9uO1xuICAgIGNvbnN0IHJlY2lwaWVudCA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZFVzZXIoeyBpZDogcmVjaXBpZW50SWQgfSk7XG4gICAgaWYgKCFyZWNpcGllbnQpXG4gICAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbignUmVjaXBpZW50IE5vdCBGb3VuZCcsIEh0dHBTdGF0dXMuTk9UX0ZPVU5EKTtcbiAgICBjb25zdCBuZXdDb252ZXJzYXRpb24gPSBhd2FpdCB0aGlzLmNvbnZlcnNhdGlvbnNTZXJ2aWNlLmFkZENvbnZlcnNhdGlvbihcbiAgICAgIC8vIHVzZXIsXG4gICAgICAvLyB7XG4gICAgICAvLyAgIHVzZXJuYW1lOiByZWNpcGllbnQudXNlcm5hbWUsXG4gICAgICAvLyAgIG1lc3NhZ2U6ICdoZWxsbycsXG4gICAgICAvLyB9LFxuICAgICAge1xuICAgICAgICBjcmVhdGVkQnk6IHVzZXJJZCxcbiAgICAgICAgdXNlcm5hbWU6IHJlY2lwaWVudC51c2VybmFtZSxcbiAgICAgICAgbWVzc2FnZXM6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjcmVhdGVkQnk6IHVzZXJJZCxcbiAgICAgICAgICAgIGF1dGhvcklkOiB1c2VySWQsXG4gICAgICAgICAgICBjb250ZW50OiAnaGVsbG8nLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgICB9LFxuICAgICk7XG4gICAgdGhpcy5ldmVudHMuZW1pdCgnY29udmVyc2F0aW9uLmNyZWF0ZScsIG5ld0NvbnZlcnNhdGlvbik7XG4gICAgcmV0dXJuIG5ld0NvbnZlcnNhdGlvbjtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29udmVyc2F0aW9uc01vZHVsZSB9IGZyb20gJy4uL2NvbnZlcnNhdGlvbnMvc3JjL2NvbnZlcnNhdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IFVzZXJzTW9kdWxlIH0gZnJvbSAnLi4vdXNlcnMvdXNlcnMubW9kdWxlJztcbmltcG9ydCB7IEV4aXN0c0NvbnRyb2xsZXIgfSBmcm9tICcuL2V4aXN0cy5jb250cm9sbGVyJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtDb252ZXJzYXRpb25zTW9kdWxlLCBVc2Vyc01vZHVsZV0sXG4gIGNvbnRyb2xsZXJzOiBbRXhpc3RzQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW10sXG59KVxuZXhwb3J0IGNsYXNzIEV4aXN0c01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVGcmllbmREdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIHVzZXJuYW1lOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBJbmplY3QsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlcjIgfSBmcm9tICdAbmVzdGpzL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IHsgTWVzc2FnZVBhdHRlcm4gfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgU2tpcFRocm90dGxlLCBUaHJvdHRsZSB9IGZyb20gJ0BuZXN0anMvdGhyb3R0bGVyJztcbmltcG9ydCB7IFJvdXRlcywgU2VydmVyRXZlbnRzLCBTZXJ2aWNlcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vdXRpbHMvdHlwZW9ybSc7XG5pbXBvcnQgeyBDcmVhdGVGcmllbmREdG8gfSBmcm9tICcuL2R0b3MvQ3JlYXRlRnJpZW5kLmR0byc7XG5pbXBvcnQgeyBJRnJpZW5kUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuL2ZyaWVuZC1yZXF1ZXN0cyc7XG5cbkBDb250cm9sbGVyKFJvdXRlcy5GUklFTkRfUkVRVUVTVFMpXG5leHBvcnQgY2xhc3MgRnJpZW5kUmVxdWVzdENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNlcnZpY2VzLkZSSUVORFNfUkVRVUVTVFNfU0VSVklDRSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZyaWVuZFJlcXVlc3RTZXJ2aWNlOiBJRnJpZW5kUmVxdWVzdFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBldmVudDogRXZlbnRFbWl0dGVyMixcbiAgKSB7fVxuXG4gIEBNZXNzYWdlUGF0dGVybignZ2V0X2ZyaWVuZF9yZXF1ZXN0cycpXG4gIGFzeW5jIGNyZWF0ZUdyb3VwTWVzc2FnZSh1c2VyOiBVc2VyKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJpZW5kUmVxdWVzdFNlcnZpY2UuZ2V0RnJpZW5kUmVxdWVzdHModXNlci5pZCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2NyZWF0ZV9mcmllbmRfcmVxdWVzdCcpXG4gIGFzeW5jIGNyZWF0ZUZyaWVuZFJlcXVlc3QoXG4gICAgQEJvZHkoJ3VzZXInKSB1c2VyOiBVc2VyLFxuICAgIEBCb2R5KCdkdG8nKSB7IHVzZXJuYW1lIH06IENyZWF0ZUZyaWVuZER0byxcbiAgKSB7XG4gICAgY29uc3QgcGFyYW1zID0geyB1c2VyLCB1c2VybmFtZSB9O1xuICAgIGNvbnN0IGZyaWVuZFJlcXVlc3QgPSBhd2FpdCB0aGlzLmZyaWVuZFJlcXVlc3RTZXJ2aWNlLmNyZWF0ZShwYXJhbXMpO1xuICAgIHRoaXMuZXZlbnQuZW1pdChTZXJ2ZXJFdmVudHMuRlJJRU5EX1JFUVVFU1RfQ1JFQVRFRCwgZnJpZW5kUmVxdWVzdCk7XG4gICAgcmV0dXJuIGZyaWVuZFJlcXVlc3Q7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2FjY2VwdF9mcmllbmRfcmVxdWVzdCcpXG4gIGFzeW5jIGFjY2VwdEZyaWVuZFJlcXVlc3QoZHRvOiBhbnkpIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZnJpZW5kUmVxdWVzdFNlcnZpY2UuYWNjZXB0KGR0byk7XG4gICAgdGhpcy5ldmVudC5lbWl0KFNlcnZlckV2ZW50cy5GUklFTkRfUkVRVUVTVF9BQ0NFUFRFRCwgcmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignY2FuY2VsX2ZyaWVuZF9yZXF1ZXN0JylcbiAgYXN5bmMgY2FuY2VsRnJpZW5kUmVxdWVzdChkdG86IGFueSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mcmllbmRSZXF1ZXN0U2VydmljZS5jYW5jZWwoZHRvKTtcbiAgICB0aGlzLmV2ZW50LmVtaXQoU2VydmVyRXZlbnRzLkZSSUVORF9SRVFVRVNUX0NBTkNFTExFRCwgcmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybigncmVqZWN0X2ZyaWVuZF9yZXF1ZXN0JylcbiAgYXN5bmMgcmVqZWN0RnJpZW5kUmVxdWVzdChkdG86IGFueSkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5mcmllbmRSZXF1ZXN0U2VydmljZS5yZWplY3QoZHRvKTtcbiAgICB0aGlzLmV2ZW50LmVtaXQoU2VydmVyRXZlbnRzLkZSSUVORF9SRVFVRVNUX1JFSkVDVEVELCByZXNwb25zZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBGcmllbmRzTW9kdWxlIH0gZnJvbSAnLi4vZnJpZW5kcy9mcmllbmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBVc2Vyc01vZHVsZSB9IGZyb20gJy4uL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBGcmllbmRSZXF1ZXN0Q29udHJvbGxlciB9IGZyb20gJy4vZnJpZW5kLXJlcXVlc3RzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgRnJpZW5kUmVxdWVzdFNlcnZpY2UgfSBmcm9tICcuL2ZyaWVuZC1yZXF1ZXN0cy5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXNtYU1vZHVsZUZyaWVuZFJlcXVlc3RzIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBVc2Vyc01vZHVsZSxcbiAgICBGcmllbmRzTW9kdWxlLFxuICAgIFByaXNtYU1vZHVsZUZyaWVuZFJlcXVlc3RzLFxuICBdLFxuICBjb250cm9sbGVyczogW0ZyaWVuZFJlcXVlc3RDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU2VydmljZXMuRlJJRU5EU19SRVFVRVNUU19TRVJWSUNFLFxuICAgICAgdXNlQ2xhc3M6IEZyaWVuZFJlcXVlc3RTZXJ2aWNlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEZyaWVuZFJlcXVlc3RzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBTdGF0dXMsIEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IHNldFJlcG9ydGVyQXV0b1J1biB9IGZyb20gJ3BhY3R1bS9zcmMvZXhwb3J0cy9zZXR0aW5ncyc7XG5pbXBvcnQgeyBJRnJpZW5kc1NlcnZpY2UgfSBmcm9tICcuLi9mcmllbmRzL2ZyaWVuZHMnO1xuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlcnMvaW50ZXJmYWNlcy91c2VyJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7XG4gIENhbmNlbEZyaWVuZFJlcXVlc3RQYXJhbXMsXG4gIENyZWF0ZUZyaWVuZFBhcmFtcyxcbiAgRnJpZW5kUmVxdWVzdFBhcmFtcyxcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgSUZyaWVuZFJlcXVlc3RTZXJ2aWNlIH0gZnJvbSAnLi9mcmllbmQtcmVxdWVzdHMnO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZUZyaWVuZFJldWVzdHMgfSBmcm9tICcuL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGcmllbmRSZXF1ZXN0U2VydmljZSBleHRlbmRzIEhUVFAgaW1wbGVtZW50cyBJRnJpZW5kUmVxdWVzdFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNlcnZpY2VzLlVTRVJTKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclNlcnZpY2U6IElVc2VyU2VydmljZSxcbiAgICBASW5qZWN0KFNlcnZpY2VzLkZSSUVORFNfU0VSVklDRSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGZyaWVuZHNTZXJ2aWNlOiBJRnJpZW5kc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBwcmlzbWE6IFByaXNtYVNlcnZpY2VGcmllbmRSZXVlc3RzXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhc3luYyBnZXRGcmllbmRSZXF1ZXN0cyhpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgc3RhdHVzID0gJ3BlbmRpbmcnO1xuICAgICAgY29uc3QgZnJpZW5kUmVxdWVzdCA9IGF3YWl0IHRoaXMucHJpc21hLmZyaWVuZFJlcXVlc3QuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbmRlcklkOiBpZCxcbiAgICAgICAgICAgICAgc3RhdHVzOiBzdGF0dXNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHJlY2VpdmVySWQ6IGlkLFxuICAgICAgICAgICAgICBzdGF0dXM6IHN0YXR1c1xuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnZnJpZW5kUmVxdWVzdHMuR0VUX0xJU1RfU1VDQ0VTUycsXG4gICAgICAgIGZyaWVuZFJlcXVlc3QsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdzeXN0ZW1zLklOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGNhbmNlbCh7IGlkLCB1c2VySWQgfTogQ2FuY2VsRnJpZW5kUmVxdWVzdFBhcmFtcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBmcmllbmRSZXF1ZXN0ID0gYXdhaXQgdGhpcy5wcmlzbWEuZnJpZW5kUmVxdWVzdC5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIGlmICghZnJpZW5kUmVxdWVzdCB8fCBmcmllbmRSZXF1ZXN0LnNlbmRlcklkICE9PSB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnZnJpZW5kUmVxdWVzdHMuTk9UX0ZPVU5EJyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgYXdhaXQgdGhpcy5wcmlzbWEuZnJpZW5kUmVxdWVzdC5kZWxldGVNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ2ZyaWVuZFJlcXVlc3RzLkRFTEVURV9TVUNDRVNTJyxcbiAgICAgICk7XG5cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnc3lzdGVtcy5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjcmVhdGUoeyB1c2VyOiBzZW5kZXIsIHVzZXJuYW1lIH06IENyZWF0ZUZyaWVuZFBhcmFtcykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZWNlaXZlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZFVzZXIoeyB1c2VybmFtZSB9KTtcblxuICAgICAgaWYgKCFyZWNlaXZlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdmcmllbmRSZXF1ZXN0cy5OT1RfRk9VTkQnLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBleGlzdHMgPSBhd2FpdCB0aGlzLmlzUGVuZGluZyhzZW5kZXIuaWQsIHJlY2VpdmVyLmlkKTtcblxuICAgICAgaWYgKGV4aXN0cykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdmcmllbmRSZXF1ZXN0cy5JU19QRU5ESU5HJyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKHJlY2VpdmVyLmlkID09PSBzZW5kZXIuaWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnZnJpZW5kUmVxdWVzdHMuQ0FOVF9BRERfWU9VUlNFTEYnLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBpc0ZyaWVuZHMgPSBhd2FpdCB0aGlzLmZyaWVuZHNTZXJ2aWNlLmlzRnJpZW5kcyhcbiAgICAgICAgc2VuZGVyLmlkLFxuICAgICAgICByZWNlaXZlci5pZCxcbiAgICAgICk7XG5cbiAgICAgIGlmIChpc0ZyaWVuZHMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnZnJpZW5kUmVxdWVzdHMuQUxSRUFEWV9GUklFTkQnLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBmcmllbmQgPSBhd2FpdCB0aGlzLnByaXNtYS5mcmllbmRSZXF1ZXN0LmNyZWF0ZSh7XG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBzZW5kZXJJZDogc2VuZGVyLmlkLFxuICAgICAgICAgIHJlY2VpdmVySWQ6IHJlY2VpdmVyLmlkLFxuICAgICAgICAgIHN0YXR1czogJ3BlbmRpbmcnXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ2ZyaWVuZFJlcXVlc3RzLkNSRUFURV9TVUNDRVNTJyxcbiAgICAgICAgZnJpZW5kXG4gICAgICApO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ3N5c3RlbXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYWNjZXB0KHsgaWQsIHVzZXJJZCB9OiBGcmllbmRSZXF1ZXN0UGFyYW1zKSB7XG4gICAgdHJ5IHsgXG4gICAgICBjb25zdCBmcmllbmRSZXF1ZXN0ID0gYXdhaXQgdGhpcy5maW5kQnlJZChpZCk7XG5cbiAgICAgIGlmICghZnJpZW5kUmVxdWVzdCB8fCBmcmllbmRSZXF1ZXN0LnJlY2VpdmVySWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdmcmllbmRSZXF1ZXN0cy5OT1RfRk9VTkQnLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBpZiAoZnJpZW5kUmVxdWVzdC5zdGF0dXMgPT09ICdhY2NlcHRlZCcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnZnJpZW5kUmVxdWVzdHMuQUNDRVBURUQnLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB1cGRhdGVkRnJpZW5kUmVxdWVzdCA9IGF3YWl0IHRoaXMucHJpc21hLmZyaWVuZFJlcXVlc3QudXBkYXRlTWFueSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgc3RhdHVzOiAnYWNjZXB0ZWQnLFxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgbmV3RnJpZW5kID0gYXdhaXQgdGhpcy5wcmlzbWEuZnJpZW5kLmNyZWF0ZSh7XG4gICAgICAgIGRhdGEgOiB7XG4gICAgICAgICAgc2VuZGVySWQ6IGZyaWVuZFJlcXVlc3Quc2VuZGVySWQsXG4gICAgICAgICAgcmVjZWl2ZXJJZDogZnJpZW5kUmVxdWVzdC5yZWNlaXZlcklkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ2ZyaWVuZFJlcXVlc3RzLkFDQ0VQVF9TVUNDRVNTJyxcbiAgICAgICAgbmV3RnJpZW5kLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnc3lzdGVtcy5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyByZWplY3QoeyBpZCwgdXNlcklkIH06IENhbmNlbEZyaWVuZFJlcXVlc3RQYXJhbXMpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZnJpZW5kUmVxdWVzdCA9IGF3YWl0IHRoaXMuZmluZEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoIWZyaWVuZFJlcXVlc3QgfHwgZnJpZW5kUmVxdWVzdC5yZWNlaXZlci5pZCAhPT0gdXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ2ZyaWVuZFJlcXVlc3RzLk5PVF9GT1VORCcsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmllbmRSZXF1ZXN0LnN0YXR1cyA9PT0gJ2FjY2VwdGVkJykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdmcmllbmRSZXF1ZXN0cy5BQ0NFUFRFRCcsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGNvbnN0IHVwZGF0ZVJlcXVlc3QgPSBhd2FpdCB0aGlzLnByaXNtYS5mcmllbmRSZXF1ZXN0LnVwZGF0ZU1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHN0YXR1czogJ3JlamVjdGVkJyxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnZnJpZW5kUmVxdWVzdHMuUkVKRUNUX1NVQ0NFU1MnLFxuICAgICAgICB1cGRhdGVSZXF1ZXN0XG4gICAgICApO1xuXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ3N5c3RlbXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgaXNQZW5kaW5nKHVzZXJPbmVJZDogbnVtYmVyLCB1c2VyVHdvSWQ6IG51bWJlcikge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnByaXNtYS5mcmllbmRSZXF1ZXN0LmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgT1I6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VuZGVySWQ6IHVzZXJPbmVJZCxcbiAgICAgICAgICAgICAgcmVjZWl2ZXJJZDogdXNlclR3b0lkLFxuICAgICAgICAgICAgICBzdGF0dXM6ICdwZW5kaW5nJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbmRlcklkOiB1c2VyVHdvSWQsXG4gICAgICAgICAgICAgIHJlY2VpdmVySWQ6IHVzZXJPbmVJZCxcbiAgICAgICAgICAgICAgc3RhdHVzOiAncGVuZGluZycsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ3N5c3RlbXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmluZEJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8YW55PiB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLnByaXNtYS5mcmllbmRSZXF1ZXN0LmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnc3lzdGVtcy5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEFjY2VwdEZyaWVuZFJlcXVlc3RSZXNwb25zZSxcbiAgQ2FuY2VsRnJpZW5kUmVxdWVzdFBhcmFtcyxcbiAgQ3JlYXRlRnJpZW5kUGFyYW1zLFxuICBGcmllbmRSZXF1ZXN0UGFyYW1zLFxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZyaWVuZFJlcXVlc3RTZXJ2aWNlIHtcbiAgYWNjZXB0KHBhcmFtczogRnJpZW5kUmVxdWVzdFBhcmFtcyk6IFByb21pc2U8YW55PjtcbiAgY2FuY2VsKHBhcmFtczogQ2FuY2VsRnJpZW5kUmVxdWVzdFBhcmFtcyk6IFByb21pc2U8YW55PjtcbiAgY3JlYXRlKHBhcmFtczogQ3JlYXRlRnJpZW5kUGFyYW1zKTogUHJvbWlzZTxhbnk+O1xuICByZWplY3QocGFyYW1zOiBDYW5jZWxGcmllbmRSZXF1ZXN0UGFyYW1zKTogUHJvbWlzZTxhbnk+O1xuICBnZXRGcmllbmRSZXF1ZXN0cyh1c2VySWQ6IG51bWJlcik6IFByb21pc2U8YW55PjtcbiAgaXNQZW5kaW5nKHVzZXJPbmVJZDogbnVtYmVyLCB1c2VyVHdvSWQ6IG51bWJlcik7XG4gIGZpbmRCeUlkKGlkOiBudW1iZXIpOiBQcm9taXNlPGFueT47XG59XG4iLCJpbXBvcnQgeyBHbG9iYWwsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VGcmllbmRSZXVlc3RzIH0gZnJvbSAnLi9wcmlzbWEuc2VydmljZSc7XG5cbkBHbG9iYWwoKVxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW1ByaXNtYVNlcnZpY2VGcmllbmRSZXVlc3RzXSxcbiAgZXhwb3J0czogW1ByaXNtYVNlcnZpY2VGcmllbmRSZXVlc3RzXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpc21hTW9kdWxlRnJpZW5kUmVxdWVzdHMge31cbiIsImltcG9ydCB7IE15U1FMQ2xpZW50IH0gZnJvbSAnQGNvbW1vbi9wcmlzbWEvbXlzcWxfcHJpc21hX2NsaWVudCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpc21hU2VydmljZUZyaWVuZFJldWVzdHMgZXh0ZW5kcyBNeVNRTENsaWVudCB7XG4gIGNsZWFuRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRyYW5zYWN0aW9uKFtdKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgRGVsZXRlLFxuICBHZXQsXG4gIEluamVjdCxcbiAgUGFyYW0sXG4gIFBhcnNlSW50UGlwZSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyMiB9IGZyb20gJ0BuZXN0anMvZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBTa2lwVGhyb3R0bGUgfSBmcm9tICdAbmVzdGpzL3Rocm90dGxlcic7XG5pbXBvcnQgeyBSb3V0ZXMsIFNlcnZlckV2ZW50cywgU2VydmljZXMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgSUZyaWVuZHNTZXJ2aWNlIH0gZnJvbSAnLi9mcmllbmRzJztcblxuQFNraXBUaHJvdHRsZSgpXG5AQ29udHJvbGxlcihSb3V0ZXMuRlJJRU5EUylcbmV4cG9ydCBjbGFzcyBGcmllbmRzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU2VydmljZXMuRlJJRU5EU19TRVJWSUNFKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgZnJpZW5kc1NlcnZpY2U6IElGcmllbmRzU2VydmljZSxcbiAgICBwcml2YXRlIHJlYWRvbmx5IGV2ZW50OiBFdmVudEVtaXR0ZXIyLFxuICApIHt9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdnZXQtZnJpZW5kcycpXG4gIGFzeW5jIGdldEZyaWVuZHModXNlcjogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ0ZldGNoaW5nIEZyaWVuZHMnKTtcbiAgICByZXR1cm4gdGhpcy5mcmllbmRzU2VydmljZS5nZXRGcmllbmRzKHVzZXIuaWQpO1xuICB9XG5cblxuICBATWVzc2FnZVBhdHRlcm4oJ2RlbGV0ZS1mcmllbmQnKVxuICBhc3luYyBkZWxldGVGcmllbmQoZHRvOiBhbnkpIHtcbiAgICBjb25zb2xlLmxvZygnR2V0dGluZyBkZWxldGUgZnJpZW5kJyk7XG4gICAgY29uc3QgZnJpZW5kID0gYXdhaXQgdGhpcy5mcmllbmRzU2VydmljZS5kZWxldGVGcmllbmQoZHRvKTtcbiAgICB0aGlzLmV2ZW50LmVtaXQoU2VydmVyRXZlbnRzLkZSSUVORF9SRU1PVkVELCB7IGZyaWVuZCwgdXNlcklkOiBkdG8udXNlcklkIH0pO1xuICAgIHJldHVybiBmcmllbmQ7XG4gIH1cblxuICAvLyBARGVsZXRlKCc6aWQvZGVsZXRlJylcbiAgLy8gYXN5bmMgZGVsZXRlRnJpZW5kKFxuICAvLyAgIHVzZXJJZDogbnVtYmVyLFxuICAvLyAgIGlkOiBudW1iZXIsXG4gIC8vICkge1xuICAvLyAgIGNvbnN0IGZyaWVuZCA9IGF3YWl0IHRoaXMuZnJpZW5kc1NlcnZpY2UuZGVsZXRlRnJpZW5kKHsgaWQsIHVzZXJJZCB9KTtcbiAgLy8gICB0aGlzLmV2ZW50LmVtaXQoU2VydmVyRXZlbnRzLkZSSUVORF9SRU1PVkVELCB7IGZyaWVuZCwgdXNlcklkIH0pO1xuICAvLyAgIHJldHVybiBmcmllbmQ7XG4gIC8vIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEZyaWVuZHNDb250cm9sbGVyIH0gZnJvbSAnLi9mcmllbmRzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgRnJpZW5kc1NlcnZpY2UgfSBmcm9tICcuL2ZyaWVuZHMuc2VydmljZSc7XG5pbXBvcnQgeyBQcmlzbWFNb2R1bGVGcmllbmRzIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBQcmlzbWFNb2R1bGVGcmllbmRzXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNlcnZpY2VzLkZSSUVORFNfU0VSVklDRSxcbiAgICAgIHVzZUNsYXNzOiBGcmllbmRzU2VydmljZSxcbiAgICB9LFxuICBdLFxuICBjb250cm9sbGVyczogW0ZyaWVuZHNDb250cm9sbGVyXSxcbiAgZXhwb3J0czogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNlcnZpY2VzLkZSSUVORFNfU0VSVklDRSxcbiAgICAgIHVzZUNsYXNzOiBGcmllbmRzU2VydmljZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBGcmllbmRzTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBTdGF0dXMsIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tICcuLi91dGlscy90eXBlb3JtJztcbmltcG9ydCB7IERlbGV0ZUZyaWVuZFJlcXVlc3RQYXJhbXMgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBEZWxldGVGcmllbmRFeGNlcHRpb24gfSBmcm9tICcuL2V4Y2VwdGlvbnMvRGVsZXRlRnJpZW5kJztcbmltcG9ydCB7IEZyaWVuZE5vdEZvdW5kRXhjZXB0aW9uIH0gZnJvbSAnLi9leGNlcHRpb25zL0ZyaWVuZE5vdEZvdW5kJztcbmltcG9ydCB7IElGcmllbmRzU2VydmljZSB9IGZyb20gJy4vZnJpZW5kcyc7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlRnJpZW5kcyB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEZyaWVuZHNTZXJ2aWNlIGV4dGVuZHMgSFRUUCBpbXBsZW1lbnRzIElGcmllbmRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlRnJpZW5kcykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhc3luYyBnZXRGcmllbmRzKGlkOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucHJpc21hLmZyaWVuZC5maW5kTWFueSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgT1I6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VuZGVySWQ6IGlkLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgcmVjZWl2ZXJJZDogaWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ2ZyaWVuZHMuR0VUX0xJU1RfU1VDQ0VTUycsXG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAxLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnc3lzdGVtcy5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBmaW5kRnJpZW5kQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByaXNtYS5mcmllbmQuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ2ZyaWVuZHMuR0VUX1NVQ0NFU1MnLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgMSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ3N5c3RlbXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGVsZXRlRnJpZW5kKHsgaWQsIHVzZXJJZCB9OiBEZWxldGVGcmllbmRSZXF1ZXN0UGFyYW1zKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGZyaWVuZCA9IGF3YWl0IHRoaXMuZmluZEZyaWVuZEJ5SWQoaWQpO1xuXG4gICAgICBpZiAoIWZyaWVuZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdmcmllbmRzLk5PVF9GT1VORCcsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGlmIChmcmllbmQucmVjZWl2ZXJJZCAhPT0gdXNlcklkICYmIGZyaWVuZC5zZW5kZXJJZCAhPT0gdXNlcklkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ2ZyaWVuZHMuTk9UX0ZSSUVORCcsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGF3YWl0IHRoaXMucHJpc21hLmZyaWVuZC5kZWxldGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnZnJpZW5kcy5ERUxFVEVfU1VDQ0VTUycsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdzeXN0ZW1zLklOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGlzRnJpZW5kcyh1c2VyT25lSWQ6IG51bWJlciwgdXNlclR3b0lkOiBudW1iZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByaXNtYS5mcmllbmQuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIE9SOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIHNlbmRlcklkOiB1c2VyT25lSWQsXG4gICAgICAgICAgICAgIHJlY2VpdmVySWQ6IHVzZXJUd29JZFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgc2VuZGVySWQ6IHVzZXJUd29JZCxcbiAgICAgICAgICAgICAgcmVjZWl2ZXJJZDogdXNlck9uZUlkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICdmcmllbmRzLklTX0ZSSUVORCcsXG4gICAgICAgIHJlc3BvbnNlLFxuICAgICAgICAxLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnc3lzdGVtcy5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEZyaWVuZCB9IGZyb20gJy4uL3V0aWxzL3R5cGVvcm0nO1xuaW1wb3J0IHsgRGVsZXRlRnJpZW5kUmVxdWVzdFBhcmFtcyB9IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJRnJpZW5kc1NlcnZpY2Uge1xuICBnZXRGcmllbmRzKGlkOiBudW1iZXIpOiBQcm9taXNlPGFueT47XG4gIGZpbmRGcmllbmRCeUlkKGlkOiBudW1iZXIpOiBQcm9taXNlPGFueT47XG4gIGRlbGV0ZUZyaWVuZChwYXJhbXM6IERlbGV0ZUZyaWVuZFJlcXVlc3RQYXJhbXMpO1xuICBpc0ZyaWVuZHModXNlck9uZUlkOiBudW1iZXIsIHVzZXJUd29JZDogbnVtYmVyKTogUHJvbWlzZTxhbnkgfCB1bmRlZmluZWQ+O1xufVxuIiwiaW1wb3J0IHsgR2xvYmFsLCBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlRnJpZW5kcyB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnO1xuXG5AR2xvYmFsKClcbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtQcmlzbWFTZXJ2aWNlRnJpZW5kc10sXG4gIGV4cG9ydHM6IFtQcmlzbWFTZXJ2aWNlRnJpZW5kc10sXG59KVxuZXhwb3J0IGNsYXNzIFByaXNtYU1vZHVsZUZyaWVuZHMge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNeVNRTENsaWVudCB9IGZyb20gJ0Bjb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpc21hU2VydmljZUZyaWVuZHMgZXh0ZW5kcyBNeVNRTENsaWVudCB7XG4gIGNsZWFuRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRyYW5zYWN0aW9uKFtdKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIENyZWF0ZUNhbGxEdG8ge1xuICByZWNpcGllbnRJZDogbnVtYmVyO1xuICBjb252ZXJzYXRpb25JZDogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29udmVyc2F0aW9uc01vZHVsZSB9IGZyb20gJy4uL2NvbnZlcnNhdGlvbnMvc3JjL2NvbnZlcnNhdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IEZyaWVuZHNNb2R1bGUgfSBmcm9tICcuLi9mcmllbmRzL2ZyaWVuZHMubW9kdWxlJztcbmltcG9ydCB7IEdyb3VwTW9kdWxlIH0gZnJvbSAnLi4vZ3JvdXBzL2dyb3VwLm1vZHVsZSc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNZXNzYWdpbmdHYXRld2F5IH0gZnJvbSAnLi9nYXRld2F5JztcbmltcG9ydCB7IEdhdGV3YXlTZXNzaW9uTWFuYWdlciB9IGZyb20gJy4vZ2F0ZXdheS5zZXNzaW9uJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtDb252ZXJzYXRpb25zTW9kdWxlLCBHcm91cE1vZHVsZSwgRnJpZW5kc01vZHVsZV0sXG4gIHByb3ZpZGVyczogW1xuICAgIE1lc3NhZ2luZ0dhdGV3YXksXG4gICAge1xuICAgICAgcHJvdmlkZTogU2VydmljZXMuR0FURVdBWV9TRVNTSU9OX01BTkFHRVIsXG4gICAgICB1c2VDbGFzczogR2F0ZXdheVNlc3Npb25NYW5hZ2VyLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogU2VydmljZXMuRlJJRU5EU19TRVJWSUNFLFxuICAgICAgdXNlQ2xhc3M6IEdhdGV3YXlTZXNzaW9uTWFuYWdlcixcbiAgICB9LFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgTWVzc2FnaW5nR2F0ZXdheSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5HQVRFV0FZX1NFU1NJT05fTUFOQUdFUixcbiAgICAgIHVzZUNsYXNzOiBHYXRld2F5U2Vzc2lvbk1hbmFnZXIsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5GUklFTkRTX1NFUlZJQ0UsXG4gICAgICB1c2VDbGFzczogR2F0ZXdheVNlc3Npb25NYW5hZ2VyLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEdhdGV3YXlNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGVkU29ja2V0IH0gZnJvbSAnLi4vdXRpbHMvaW50ZXJmYWNlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdhdGV3YXlTZXNzaW9uTWFuYWdlciB7XG4gIGdldFVzZXJTb2NrZXQoaWQ6IG51bWJlcik6IEF1dGhlbnRpY2F0ZWRTb2NrZXQ7XG4gIHNldFVzZXJTb2NrZXQoaWQ6IG51bWJlciwgc29ja2V0OiBBdXRoZW50aWNhdGVkU29ja2V0KTogdm9pZDtcbiAgcmVtb3ZlVXNlclNvY2tldChpZDogbnVtYmVyKTogdm9pZDtcbiAgZ2V0U29ja2V0cygpOiBNYXA8bnVtYmVyLCBBdXRoZW50aWNhdGVkU29ja2V0Pjtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdhdGV3YXlTZXNzaW9uTWFuYWdlciBpbXBsZW1lbnRzIElHYXRld2F5U2Vzc2lvbk1hbmFnZXIge1xuICBwcml2YXRlIHJlYWRvbmx5IHNlc3Npb25zOiBNYXA8bnVtYmVyLCBBdXRoZW50aWNhdGVkU29ja2V0PiA9IG5ldyBNYXAoKTtcblxuICBnZXRVc2VyU29ja2V0KGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5zZXNzaW9ucy5nZXQoaWQpO1xuICB9XG5cbiAgc2V0VXNlclNvY2tldCh1c2VySWQ6IG51bWJlciwgc29ja2V0OiBBdXRoZW50aWNhdGVkU29ja2V0KSB7XG4gICAgdGhpcy5zZXNzaW9ucy5zZXQodXNlcklkLCBzb2NrZXQpO1xuICB9XG4gIHJlbW92ZVVzZXJTb2NrZXQodXNlcklkOiBudW1iZXIpIHtcbiAgICB0aGlzLnNlc3Npb25zLmRlbGV0ZSh1c2VySWQpO1xuICB9XG4gIGdldFNvY2tldHMoKTogTWFwPG51bWJlciwgQXV0aGVudGljYXRlZFNvY2tldD4ge1xuICAgIHJldHVybiB0aGlzLnNlc3Npb25zO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBPbkV2ZW50IH0gZnJvbSAnQG5lc3Rqcy9ldmVudC1lbWl0dGVyJztcbmltcG9ydCB7XG4gIFdlYlNvY2tldEdhdGV3YXksXG4gIFdlYlNvY2tldFNlcnZlcixcbiAgU3Vic2NyaWJlTWVzc2FnZSxcbiAgTWVzc2FnZUJvZHksXG4gIE9uR2F0ZXdheUNvbm5lY3Rpb24sXG4gIENvbm5lY3RlZFNvY2tldCxcbiAgT25HYXRld2F5RGlzY29ubmVjdCxcbn0gZnJvbSAnQG5lc3Rqcy93ZWJzb2NrZXRzJztcbmltcG9ydCB7IFNlcnZlciwgU29ja2V0IH0gZnJvbSAnc29ja2V0LmlvJztcbmltcG9ydCB7IElDb252ZXJzYXRpb25zU2VydmljZSB9IGZyb20gJy4uL2NvbnZlcnNhdGlvbnMvc3JjL2NvbnZlcnNhdGlvbnMnO1xuaW1wb3J0IHsgSUZyaWVuZHNTZXJ2aWNlIH0gZnJvbSAnLi4vZnJpZW5kcy9mcmllbmRzJztcbmltcG9ydCB7IElHcm91cFNlcnZpY2UgfSBmcm9tICcuLi9ncm91cHMvaW50ZXJmYWNlcy9ncm91cCc7XG5pbXBvcnQgeyBTZXJ2aWNlcywgV2Vic29ja2V0RXZlbnRzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0ZWRTb2NrZXQgfSBmcm9tICcuLi91dGlscy9pbnRlcmZhY2VzJztcbmltcG9ydCB7XG4gIENvbnZlcnNhdGlvbixcbiAgR3JvdXAsXG4gIEdyb3VwTWVzc2FnZSxcbiAgTWVzc2FnZSxcbiAgVXNlcixcbn0gZnJvbSAnLi4vdXRpbHMvdHlwZW9ybSc7XG5pbXBvcnQge1xuICBBZGRHcm91cFVzZXJSZXNwb25zZSxcbiAgQ2FsbEFjY2VwdGVkUGF5bG9hZCxcbiAgQ2FsbEhhbmdVcFBheWxvYWQsXG4gIENyZWF0ZUdyb3VwTWVzc2FnZVJlc3BvbnNlLFxuICBDcmVhdGVNZXNzYWdlUmVzcG9uc2UsXG4gIFJlbW92ZUdyb3VwVXNlclJlc3BvbnNlLFxuICBWb2ljZUNhbGxQYXlsb2FkLFxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBDcmVhdGVDYWxsRHRvIH0gZnJvbSAnLi9kdG9zL0NyZWF0ZUNhbGxEdG8nO1xuaW1wb3J0IHsgSUdhdGV3YXlTZXNzaW9uTWFuYWdlciB9IGZyb20gJy4vZ2F0ZXdheS5zZXNzaW9uJztcblxuQFdlYlNvY2tldEdhdGV3YXkoMzAwMCx7XG4gIGNvcnM6IHtcbiAgICBvcmlnaW46IFsnaHR0cDovL2xvY2FsaG9zdDozMDAwJ10sXG4gICAgY3JlZGVudGlhbHM6IHRydWUsXG4gIH0sXG4gIHBpbmdJbnRlcnZhbDogMTAwMDAsXG4gIHBpbmdUaW1lb3V0OiAxNTAwMCxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnaW5nR2F0ZXdheVxuICBpbXBsZW1lbnRzIE9uR2F0ZXdheUNvbm5lY3Rpb24sIE9uR2F0ZXdheURpc2Nvbm5lY3RcbntcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChTZXJ2aWNlcy5HQVRFV0FZX1NFU1NJT05fTUFOQUdFUilcbiAgICByZWFkb25seSBzZXNzaW9uczogSUdhdGV3YXlTZXNzaW9uTWFuYWdlcixcbiAgICBASW5qZWN0KFNlcnZpY2VzLkNPTlZFUlNBVElPTlMpXG4gICAgcHJpdmF0ZSByZWFkb25seSBjb252ZXJzYXRpb25TZXJ2aWNlOiBJQ29udmVyc2F0aW9uc1NlcnZpY2UsXG4gICAgQEluamVjdChTZXJ2aWNlcy5HUk9VUFMpXG4gICAgcHJpdmF0ZSByZWFkb25seSBncm91cHNTZXJ2aWNlOiBJR3JvdXBTZXJ2aWNlLFxuICAgIEBJbmplY3QoU2VydmljZXMuRlJJRU5EU19TRVJWSUNFKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgZnJpZW5kc1NlcnZpY2U6IElGcmllbmRzU2VydmljZSxcbiAgKSB7fVxuXG4gIEBXZWJTb2NrZXRTZXJ2ZXIoKVxuICBzZXJ2ZXI6IFNlcnZlcjtcblxuICBoYW5kbGVDb25uZWN0aW9uKHNvY2tldDogQXV0aGVudGljYXRlZFNvY2tldCwgLi4uYXJnczogYW55W10pIHtcbiAgICBjb25zb2xlLmxvZygnSW5jb21pbmcgQ29ubmVjdGlvbicpO1xuICAgIHRoaXMuc2Vzc2lvbnMuc2V0VXNlclNvY2tldChzb2NrZXQudXNlci5pZCwgc29ja2V0KTtcbiAgICBzb2NrZXQuZW1pdCgnY29ubmVjdGVkJywge30pO1xuICB9XG5cbiAgaGFuZGxlRGlzY29ubmVjdChzb2NrZXQ6IEF1dGhlbnRpY2F0ZWRTb2NrZXQpIHtcbiAgICBjb25zb2xlLmxvZygnaGFuZGxlRGlzY29ubmVjdCcpO1xuICAgIGNvbnNvbGUubG9nKGAke3NvY2tldC51c2VyLnVzZXJuYW1lfSBkaXNjb25uZWN0ZWQuYCk7XG4gICAgdGhpcy5zZXNzaW9ucy5yZW1vdmVVc2VyU29ja2V0KHNvY2tldC51c2VyLmlkKTtcbiAgfVxuXG4gIEBTdWJzY3JpYmVNZXNzYWdlKCdnZXRPbmxpbmVHcm91cFVzZXJzJylcbiAgYXN5bmMgaGFuZGxlR2V0T25saW5lR3JvdXBVc2VycyhcbiAgICBATWVzc2FnZUJvZHkoKSBkYXRhOiBhbnksXG4gICAgQENvbm5lY3RlZFNvY2tldCgpIHNvY2tldDogQXV0aGVudGljYXRlZFNvY2tldCxcbiAgKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCB0aGlzLmdyb3Vwc1NlcnZpY2UuZmluZEdyb3VwQnlJZChcbiAgICAgIHBhcnNlSW50KGRhdGEuZ3JvdXBJZCksXG4gICAgKTtcbiAgICBpZiAoIWdyb3VwKSByZXR1cm47XG4gICAgY29uc3Qgb25saW5lVXNlcnMgPSBbXTtcbiAgICBjb25zdCBvZmZsaW5lVXNlcnMgPSBbXTtcbiAgICBncm91cC51c2Vycy5mb3JFYWNoKHVzZXIgPT4ge1xuICAgICAgY29uc3Qgc29ja2V0ID0gdGhpcy5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KHVzZXIuaWQpO1xuICAgICAgc29ja2V0ID8gb25saW5lVXNlcnMucHVzaCh1c2VyKSA6IG9mZmxpbmVVc2Vycy5wdXNoKHVzZXIpO1xuICAgIH0pO1xuICAgIHNvY2tldC5lbWl0KCdvbmxpbmVHcm91cFVzZXJzUmVjZWl2ZWQnLCB7IG9ubGluZVVzZXJzLCBvZmZsaW5lVXNlcnMgfSk7XG4gIH1cblxuICBAU3Vic2NyaWJlTWVzc2FnZSgnY3JlYXRlTWVzc2FnZScpXG4gIGhhbmRsZUNyZWF0ZU1lc3NhZ2UoQE1lc3NhZ2VCb2R5KCkgZGF0YTogYW55KSB7XG4gICAgY29uc29sZS5sb2coJ0NyZWF0ZSBNZXNzYWdlJyk7XG4gIH1cblxuICBAU3Vic2NyaWJlTWVzc2FnZSgnb25Db252ZXJzYXRpb25Kb2luJylcbiAgb25Db252ZXJzYXRpb25Kb2luKFxuICAgIEBNZXNzYWdlQm9keSgpIGRhdGE6IGFueSxcbiAgICBAQ29ubmVjdGVkU29ja2V0KCkgY2xpZW50OiBBdXRoZW50aWNhdGVkU29ja2V0LFxuICApIHtcbiAgICBjb25zb2xlLmxvZyhcbiAgICAgIGAke2NsaWVudC51c2VyPy5pZH0gam9pbmVkIGEgQ29udmVyc2F0aW9uIG9mIElEOiAke2RhdGEuY29udmVyc2F0aW9uSWR9YCxcbiAgICApO1xuICAgIGNsaWVudC5qb2luKGBjb252ZXJzYXRpb24tJHtkYXRhLmNvbnZlcnNhdGlvbklkfWApO1xuICAgIGNvbnNvbGUubG9nKGNsaWVudC5yb29tcyk7XG4gICAgY2xpZW50LnRvKGBjb252ZXJzYXRpb24tJHtkYXRhLmNvbnZlcnNhdGlvbklkfWApLmVtaXQoJ3VzZXJKb2luJyk7XG4gIH1cblxuICBAU3Vic2NyaWJlTWVzc2FnZSgnb25Db252ZXJzYXRpb25MZWF2ZScpXG4gIG9uQ29udmVyc2F0aW9uTGVhdmUoXG4gICAgQE1lc3NhZ2VCb2R5KCkgZGF0YTogYW55LFxuICAgIEBDb25uZWN0ZWRTb2NrZXQoKSBjbGllbnQ6IEF1dGhlbnRpY2F0ZWRTb2NrZXQsXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdvbkNvbnZlcnNhdGlvbkxlYXZlJyk7XG4gICAgY2xpZW50LmxlYXZlKGBjb252ZXJzYXRpb24tJHtkYXRhLmNvbnZlcnNhdGlvbklkfWApO1xuICAgIGNvbnNvbGUubG9nKGNsaWVudC5yb29tcyk7XG4gICAgY2xpZW50LnRvKGBjb252ZXJzYXRpb24tJHtkYXRhLmNvbnZlcnNhdGlvbklkfWApLmVtaXQoJ3VzZXJMZWF2ZScpO1xuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoJ29uR3JvdXBKb2luJylcbiAgb25Hcm91cEpvaW4oXG4gICAgQE1lc3NhZ2VCb2R5KCkgZGF0YTogYW55LFxuICAgIEBDb25uZWN0ZWRTb2NrZXQoKSBjbGllbnQ6IEF1dGhlbnRpY2F0ZWRTb2NrZXQsXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdvbkdyb3VwSm9pbicpO1xuICAgIGNsaWVudC5qb2luKGBncm91cC0ke2RhdGEuZ3JvdXBJZH1gKTtcbiAgICBjb25zb2xlLmxvZyhjbGllbnQucm9vbXMpO1xuICAgIGNsaWVudC50byhgZ3JvdXAtJHtkYXRhLmdyb3VwSWR9YCkuZW1pdCgndXNlckdyb3VwSm9pbicpO1xuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoJ29uR3JvdXBMZWF2ZScpXG4gIG9uR3JvdXBMZWF2ZShcbiAgICBATWVzc2FnZUJvZHkoKSBkYXRhOiBhbnksXG4gICAgQENvbm5lY3RlZFNvY2tldCgpIGNsaWVudDogQXV0aGVudGljYXRlZFNvY2tldCxcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ29uR3JvdXBMZWF2ZScpO1xuICAgIGNsaWVudC5sZWF2ZShgZ3JvdXAtJHtkYXRhLmdyb3VwSWR9YCk7XG4gICAgY29uc29sZS5sb2coY2xpZW50LnJvb21zKTtcbiAgICBjbGllbnQudG8oYGdyb3VwLSR7ZGF0YS5ncm91cElkfWApLmVtaXQoJ3VzZXJHcm91cExlYXZlJyk7XG4gIH1cblxuICBAU3Vic2NyaWJlTWVzc2FnZSgnb25UeXBpbmdTdGFydCcpXG4gIG9uVHlwaW5nU3RhcnQoXG4gICAgQE1lc3NhZ2VCb2R5KCkgZGF0YTogYW55LFxuICAgIEBDb25uZWN0ZWRTb2NrZXQoKSBjbGllbnQ6IEF1dGhlbnRpY2F0ZWRTb2NrZXQsXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdvblR5cGluZ1N0YXJ0Jyk7XG4gICAgY29uc29sZS5sb2coZGF0YS5jb252ZXJzYXRpb25JZCk7XG4gICAgY29uc29sZS5sb2coY2xpZW50LnJvb21zKTtcbiAgICBjbGllbnQudG8oYGNvbnZlcnNhdGlvbi0ke2RhdGEuY29udmVyc2F0aW9uSWR9YCkuZW1pdCgnb25UeXBpbmdTdGFydCcpO1xuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoJ29uVHlwaW5nU3RvcCcpXG4gIG9uVHlwaW5nU3RvcChcbiAgICBATWVzc2FnZUJvZHkoKSBkYXRhOiBhbnksXG4gICAgQENvbm5lY3RlZFNvY2tldCgpIGNsaWVudDogQXV0aGVudGljYXRlZFNvY2tldCxcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ29uVHlwaW5nU3RvcCcpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEuY29udmVyc2F0aW9uSWQpO1xuICAgIGNvbnNvbGUubG9nKGNsaWVudC5yb29tcyk7XG4gICAgY2xpZW50LnRvKGBjb252ZXJzYXRpb24tJHtkYXRhLmNvbnZlcnNhdGlvbklkfWApLmVtaXQoJ29uVHlwaW5nU3RvcCcpO1xuICB9XG5cbiAgQE9uRXZlbnQoJ21lc3NhZ2UuY3JlYXRlJylcbiAgaGFuZGxlTWVzc2FnZUNyZWF0ZUV2ZW50KHBheWxvYWQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgbWVzc2FnZS5jcmVhdGUnKTtcbiAgICBjb25zdCB7XG4gICAgICBhdXRob3IsXG4gICAgICBjb252ZXJzYXRpb246IHsgY3JlYXRvciwgcmVjaXBpZW50IH0sXG4gICAgfSA9IHBheWxvYWQubWVzc2FnZTtcblxuICAgIGNvbnN0IGF1dGhvclNvY2tldCA9IHRoaXMuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChhdXRob3IuaWQpO1xuICAgIGNvbnN0IHJlY2lwaWVudFNvY2tldCA9XG4gICAgICBhdXRob3IuaWQgPT09IGNyZWF0b3IuaWRcbiAgICAgICAgPyB0aGlzLnNlc3Npb25zLmdldFVzZXJTb2NrZXQocmVjaXBpZW50LmlkKVxuICAgICAgICA6IHRoaXMuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChjcmVhdG9yLmlkKTtcblxuICAgIGlmIChhdXRob3JTb2NrZXQpIGF1dGhvclNvY2tldC5lbWl0KCdvbk1lc3NhZ2UnLCBwYXlsb2FkKTtcbiAgICBpZiAocmVjaXBpZW50U29ja2V0KSByZWNpcGllbnRTb2NrZXQuZW1pdCgnb25NZXNzYWdlJywgcGF5bG9hZCk7XG4gIH1cblxuICBAT25FdmVudCgnY29udmVyc2F0aW9uLmNyZWF0ZScpXG4gIGhhbmRsZUNvbnZlcnNhdGlvbkNyZWF0ZUV2ZW50KHBheWxvYWQ6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgY29udmVyc2F0aW9uLmNyZWF0ZScpO1xuICAgIGNvbnN0IHJlY2lwaWVudFNvY2tldCA9IHRoaXMuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChwYXlsb2FkLnJlY2lwaWVudC5pZCk7XG4gICAgaWYgKHJlY2lwaWVudFNvY2tldCkgcmVjaXBpZW50U29ja2V0LmVtaXQoJ29uQ29udmVyc2F0aW9uJywgcGF5bG9hZCk7XG4gIH1cblxuICBAT25FdmVudCgnbWVzc2FnZS5kZWxldGUnKVxuICBhc3luYyBoYW5kbGVNZXNzYWdlRGVsZXRlKHBheWxvYWQpIHtcbiAgICBjb25zb2xlLmxvZygnSW5zaWRlIG1lc3NhZ2UuZGVsZXRlJyk7XG4gICAgY29uc29sZS5sb2cocGF5bG9hZCk7XG4gICAgY29uc3QgY29udmVyc2F0aW9uID0gYXdhaXQgdGhpcy5jb252ZXJzYXRpb25TZXJ2aWNlLmZpbmRCeUlkKFxuICAgICAgcGF5bG9hZC5jb252ZXJzYXRpb25JZCxcbiAgICApO1xuICAgIGlmICghY29udmVyc2F0aW9uKSByZXR1cm47XG4gICAgY29uc3QgeyBjcmVhdG9yLCByZWNpcGllbnQgfSA9IGNvbnZlcnNhdGlvbjtcbiAgICBjb25zdCByZWNpcGllbnRTb2NrZXQgPVxuICAgICAgY3JlYXRvci5pZCA9PT0gcGF5bG9hZC51c2VySWRcbiAgICAgICAgPyB0aGlzLnNlc3Npb25zLmdldFVzZXJTb2NrZXQocmVjaXBpZW50LmlkKVxuICAgICAgICA6IHRoaXMuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChjcmVhdG9yLmlkKTtcbiAgICBpZiAocmVjaXBpZW50U29ja2V0KSByZWNpcGllbnRTb2NrZXQuZW1pdCgnb25NZXNzYWdlRGVsZXRlJywgcGF5bG9hZCk7XG4gIH1cblxuICBAT25FdmVudCgnbWVzc2FnZS51cGRhdGUnKVxuICBhc3luYyBoYW5kbGVNZXNzYWdlVXBkYXRlKG1lc3NhZ2U6IGFueSkge1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpXG4gICAgY29uc3Qge1xuICAgICAgYXV0aG9yLFxuICAgICAgY29udmVyc2F0aW9uOiB7IGNyZWF0b3IsIHJlY2lwaWVudCB9LFxuICAgIH0gPSBtZXNzYWdlO1xuICAgIGNvbnNvbGUubG9nKG1lc3NhZ2UpO1xuICAgIGNvbnN0IHJlY2lwaWVudFNvY2tldCA9XG4gICAgICBhdXRob3IuaWQgPT09IGNyZWF0b3IuaWRcbiAgICAgICAgPyB0aGlzLnNlc3Npb25zLmdldFVzZXJTb2NrZXQocmVjaXBpZW50LmlkKVxuICAgICAgICA6IHRoaXMuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChjcmVhdG9yLmlkKTtcbiAgICBpZiAocmVjaXBpZW50U29ja2V0KSByZWNpcGllbnRTb2NrZXQuZW1pdCgnb25NZXNzYWdlVXBkYXRlJywgbWVzc2FnZSk7XG4gIH1cblxuICBAT25FdmVudCgnZ3JvdXAubWVzc2FnZS5jcmVhdGUnKVxuICBhc3luYyBoYW5kbGVHcm91cE1lc3NhZ2VDcmVhdGUocGF5bG9hZDogQ3JlYXRlR3JvdXBNZXNzYWdlUmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGlkIH0gPSBwYXlsb2FkLmdyb3VwO1xuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgZ3JvdXAubWVzc2FnZS5jcmVhdGUnKTtcbiAgICB0aGlzLnNlcnZlci50byhgZ3JvdXAtJHtpZH1gKS5lbWl0KCdvbkdyb3VwTWVzc2FnZScsIHBheWxvYWQpO1xuICB9XG5cbiAgQE9uRXZlbnQoJ2dyb3VwLmNyZWF0ZScpXG4gIGhhbmRsZUdyb3VwQ3JlYXRlKHBheWxvYWQ6IEdyb3VwKSB7XG4gICAgY29uc29sZS5sb2coJ2dyb3VwLmNyZWF0ZSBldmVudCcpO1xuICAgIHBheWxvYWQudXNlcnMuZm9yRWFjaCh1c2VyID0+IHtcbiAgICAgIGNvbnN0IHNvY2tldCA9IHRoaXMuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldCh1c2VyLmlkKTtcbiAgICAgIHNvY2tldCAmJiBzb2NrZXQuZW1pdCgnb25Hcm91cENyZWF0ZScsIHBheWxvYWQpO1xuICAgIH0pO1xuICB9XG5cbiAgQE9uRXZlbnQoJ2dyb3VwLm1lc3NhZ2UudXBkYXRlJylcbiAgaGFuZGxlR3JvdXBNZXNzYWdlVXBkYXRlKHBheWxvYWQ6IEdyb3VwTWVzc2FnZSkge1xuICAgIGNvbnN0IHJvb20gPSBgZ3JvdXAtJHtwYXlsb2FkLmdyb3VwLmlkfWA7XG4gICAgY29uc29sZS5sb2cocm9vbSk7XG4gICAgdGhpcy5zZXJ2ZXIudG8ocm9vbSkuZW1pdCgnb25Hcm91cE1lc3NhZ2VVcGRhdGUnLCBwYXlsb2FkKTtcbiAgfVxuXG4gIEBPbkV2ZW50KCdncm91cC51c2VyLmFkZCcpXG4gIGhhbmRsZUdyb3VwVXNlckFkZChwYXlsb2FkOiBBZGRHcm91cFVzZXJSZXNwb25zZSkge1xuICAgIGNvbnN0IHJlY2lwaWVudFNvY2tldCA9IHRoaXMuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChwYXlsb2FkLnVzZXIuaWQpO1xuICAgIGNvbnNvbGUubG9nKCdpbnNpZGUgZ3JvdXAudXNlci5hZGQnKTtcbiAgICBjb25zb2xlLmxvZyhgZ3JvdXAtJHtwYXlsb2FkLmdyb3VwLmlkfWApO1xuICAgIHRoaXMuc2VydmVyXG4gICAgICAudG8oYGdyb3VwLSR7cGF5bG9hZC5ncm91cC5pZH1gKVxuICAgICAgLmVtaXQoJ29uR3JvdXBSZWNlaXZlZE5ld1VzZXInLCBwYXlsb2FkKTtcbiAgICByZWNpcGllbnRTb2NrZXQgJiYgcmVjaXBpZW50U29ja2V0LmVtaXQoJ29uR3JvdXBVc2VyQWRkJywgcGF5bG9hZCk7XG4gIH1cblxuICBAT25FdmVudCgnZ3JvdXAudXNlci5yZW1vdmUnKVxuICBoYW5kbGVHcm91cFVzZXJSZW1vdmUocGF5bG9hZDogUmVtb3ZlR3JvdXBVc2VyUmVzcG9uc2UpIHtcbiAgICBjb25zdCB7IGdyb3VwLCB1c2VyIH0gPSBwYXlsb2FkO1xuICAgIGNvbnN0IFJPT01fTkFNRSA9IGBncm91cC0ke3BheWxvYWQuZ3JvdXAuaWR9YDtcbiAgICBjb25zdCByZW1vdmVkVXNlclNvY2tldCA9IHRoaXMuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChwYXlsb2FkLnVzZXIuaWQpO1xuICAgIGNvbnNvbGUubG9nKHBheWxvYWQpO1xuICAgIGNvbnNvbGUubG9nKCdJbnNpZGUgZ3JvdXAudXNlci5yZW1vdmUnKTtcbiAgICBpZiAocmVtb3ZlZFVzZXJTb2NrZXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbWl0dGluZyBvbkdyb3VwUmVtb3ZlZCcpO1xuICAgICAgcmVtb3ZlZFVzZXJTb2NrZXQuZW1pdCgnb25Hcm91cFJlbW92ZWQnLCBwYXlsb2FkKTtcbiAgICAgIHJlbW92ZWRVc2VyU29ja2V0LmxlYXZlKFJPT01fTkFNRSk7XG4gICAgfVxuICAgIHRoaXMuc2VydmVyLnRvKFJPT01fTkFNRSkuZW1pdCgnb25Hcm91cFJlY2lwaWVudFJlbW92ZWQnLCBwYXlsb2FkKTtcbiAgICBjb25zdCBvbmxpbmVVc2VycyA9IGdyb3VwLnVzZXJzXG4gICAgICAubWFwKHVzZXIgPT4gdGhpcy5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KHVzZXIuaWQpICYmIHVzZXIpXG4gICAgICAuZmlsdGVyKHVzZXIgPT4gdXNlcik7XG4gICAgLy8gdGhpcy5zZXJ2ZXIudG8oUk9PTV9OQU1FKS5lbWl0KCdvbmxpbmVHcm91cFVzZXJzUmVjZWl2ZWQnLCB7IG9ubGluZVVzZXJzIH0pO1xuICB9XG5cbiAgQE9uRXZlbnQoJ2dyb3VwLm93bmVyLnVwZGF0ZScpXG4gIGhhbmRsZUdyb3VwT3duZXJVcGRhdGUocGF5bG9hZDogR3JvdXApIHtcbiAgICBjb25zdCBST09NX05BTUUgPSBgZ3JvdXAtJHtwYXlsb2FkLmlkfWA7XG4gICAgY29uc3QgbmV3T3duZXJTb2NrZXQgPSB0aGlzLnNlc3Npb25zLmdldFVzZXJTb2NrZXQocGF5bG9hZC5vd25lci5pZCk7XG4gICAgY29uc29sZS5sb2coJ0luc2lkZSBncm91cC5vd25lci51cGRhdGUnKTtcbiAgICBjb25zdCB7IHJvb21zIH0gPSB0aGlzLnNlcnZlci5zb2NrZXRzLmFkYXB0ZXI7XG4gICAgY29uc29sZS5sb2cocm9vbXMuZ2V0KFJPT01fTkFNRSkpO1xuICAgIGNvbnN0IHNvY2tldHNJblJvb20gPSByb29tcy5nZXQoUk9PTV9OQU1FKTtcbiAgICBjb25zb2xlLmxvZygnU29ja2V0cyBJbiBSb29tJyk7XG4gICAgY29uc29sZS5sb2coc29ja2V0c0luUm9vbSk7XG4gICAgY29uc29sZS5sb2cobmV3T3duZXJTb2NrZXQpO1xuICAgIC8vIENoZWNrIGlmIHRoZSBuZXcgb3duZXIgaXMgaW4gdGhlIGdyb3VwIChyb29tKVxuICAgIHRoaXMuc2VydmVyLnRvKFJPT01fTkFNRSkuZW1pdCgnb25Hcm91cE93bmVyVXBkYXRlJywgcGF5bG9hZCk7XG4gICAgaWYgKG5ld093bmVyU29ja2V0ICYmICFzb2NrZXRzSW5Sb29tLmhhcyhuZXdPd25lclNvY2tldC5pZCkpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdUaGUgbmV3IG93bmVyIGlzIG5vdCBpbiB0aGUgcm9vbS4uLicpO1xuICAgICAgbmV3T3duZXJTb2NrZXQuZW1pdCgnb25Hcm91cE93bmVyVXBkYXRlJywgcGF5bG9hZCk7XG4gICAgfVxuICB9XG5cbiAgQE9uRXZlbnQoJ2dyb3VwLnVzZXIubGVhdmUnKVxuICBoYW5kbGVHcm91cFVzZXJMZWF2ZShwYXlsb2FkKSB7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBncm91cC51c2VyLmxlYXZlJyk7XG4gICAgY29uc3QgUk9PTV9OQU1FID0gYGdyb3VwLSR7cGF5bG9hZC5ncm91cC5pZH1gO1xuICAgIGNvbnN0IHsgcm9vbXMgfSA9IHRoaXMuc2VydmVyLnNvY2tldHMuYWRhcHRlcjtcbiAgICBjb25zdCBzb2NrZXRzSW5Sb29tID0gcm9vbXMuZ2V0KFJPT01fTkFNRSk7XG4gICAgY29uc3QgbGVmdFVzZXJTb2NrZXQgPSB0aGlzLnNlc3Npb25zLmdldFVzZXJTb2NrZXQocGF5bG9hZC51c2VySWQpO1xuICAgIC8qKlxuICAgICAqIElmIHNvY2tldHNJblJvb20gaXMgdW5kZWZpbmVkLCB0aGlzIG1lYW5zIHRoYXQgdGhlcmUgaXNcbiAgICAgKiBubyBvbmUgY29ubmVjdGVkIHRvIHRoZSByb29tLiBTbyBqdXN0IGVtaXQgdGhlIGV2ZW50IGZvclxuICAgICAqIHRoZSBjb25uZWN0ZWQgdXNlciBpZiB0aGV5IGFyZSBvbmxpbmUuXG4gICAgICovXG4gICAgY29uc29sZS5sb2coc29ja2V0c0luUm9vbSk7XG4gICAgY29uc29sZS5sb2cobGVmdFVzZXJTb2NrZXQpO1xuICAgIGlmIChsZWZ0VXNlclNvY2tldCAmJiBzb2NrZXRzSW5Sb29tKSB7XG4gICAgICBjb25zb2xlLmxvZygndXNlciBpcyBvbmxpbmUsIGF0IGxlYXN0IDEgcGVyc29uIGlzIGluIHRoZSByb29tJyk7XG4gICAgICBpZiAoc29ja2V0c0luUm9vbS5oYXMobGVmdFVzZXJTb2NrZXQuaWQpKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGlzIGluIHJvb20uLi4gcm9vbSBzZXQgaGFzIHNvY2tldCBpZCcpO1xuICAgICAgICByZXR1cm4gdGhpcy5zZXJ2ZXJcbiAgICAgICAgICAudG8oUk9PTV9OQU1FKVxuICAgICAgICAgIC5lbWl0KCdvbkdyb3VwUGFydGljaXBhbnRMZWZ0JywgcGF5bG9hZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnVXNlciBpcyBub3QgaW4gcm9vbSwgYnV0IHNvbWVvbmUgaXMgdGhlcmUnKTtcbiAgICAgICAgbGVmdFVzZXJTb2NrZXQuZW1pdCgnb25Hcm91cFBhcnRpY2lwYW50TGVmdCcsIHBheWxvYWQpO1xuICAgICAgICB0aGlzLnNlcnZlci50byhST09NX05BTUUpLmVtaXQoJ29uR3JvdXBQYXJ0aWNpcGFudExlZnQnLCBwYXlsb2FkKTtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAobGVmdFVzZXJTb2NrZXQgJiYgIXNvY2tldHNJblJvb20pIHtcbiAgICAgIGNvbnNvbGUubG9nKCdVc2VyIGlzIG9ubGluZSBidXQgdGhlcmUgYXJlIG5vIHNvY2tldHMgaW4gdGhlIHJvb20nKTtcbiAgICAgIHJldHVybiBsZWZ0VXNlclNvY2tldC5lbWl0KCdvbkdyb3VwUGFydGljaXBhbnRMZWZ0JywgcGF5bG9hZCk7XG4gICAgfVxuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoJ2dldE9ubGluZUZyaWVuZHMnKVxuICBhc3luYyBoYW5kbGVGcmllbmRMaXN0UmV0cmlldmUoXG4gICAgQE1lc3NhZ2VCb2R5KCkgZGF0YTogYW55LFxuICAgIEBDb25uZWN0ZWRTb2NrZXQoKSBzb2NrZXQ6IEF1dGhlbnRpY2F0ZWRTb2NrZXQsXG4gICkge1xuICAgIGNvbnN0IHsgdXNlciB9ID0gc29ja2V0O1xuICAgIGlmICh1c2VyKSB7XG4gICAgICBjb25zb2xlLmxvZygndXNlciBpcyBhdXRoZW50aWNhdGVkJyk7XG4gICAgICBjb25zb2xlLmxvZyhgZmV0Y2hpbmcgJHt1c2VyLnVzZXJuYW1lfSdzIGZyaWVuZHNgKTtcbiAgICAgIGNvbnN0IGZyaWVuZHMgPSBhd2FpdCB0aGlzLmZyaWVuZHNTZXJ2aWNlLmdldEZyaWVuZHModXNlci5pZCk7XG4gICAgICBjb25zdCBvbmxpbmVGcmllbmRzID0gZnJpZW5kcy5maWx0ZXIoZnJpZW5kID0+XG4gICAgICAgIHRoaXMuc2Vzc2lvbnMuZ2V0VXNlclNvY2tldChcbiAgICAgICAgICB1c2VyLmlkID09PSBmcmllbmQucmVjZWl2ZXIuaWRcbiAgICAgICAgICAgID8gZnJpZW5kLnNlbmRlci5pZFxuICAgICAgICAgICAgOiBmcmllbmQucmVjZWl2ZXIuaWQsXG4gICAgICAgICksXG4gICAgICApO1xuICAgICAgc29ja2V0LmVtaXQoJ2dldE9ubGluZUZyaWVuZHMnLCBvbmxpbmVGcmllbmRzKTtcbiAgICB9XG4gIH1cblxuICBAU3Vic2NyaWJlTWVzc2FnZSgnb25WaWRlb0NhbGxJbml0aWF0ZScpXG4gIGFzeW5jIGhhbmRsZVZpZGVvQ2FsbChcbiAgICBATWVzc2FnZUJvZHkoKSBkYXRhOiBDcmVhdGVDYWxsRHRvLFxuICAgIEBDb25uZWN0ZWRTb2NrZXQoKSBzb2NrZXQ6IEF1dGhlbnRpY2F0ZWRTb2NrZXQsXG4gICkge1xuICAgIGNvbnNvbGUubG9nKCdvblZpZGVvQ2FsbEluaXRpYXRlJyk7XG4gICAgY29uc3QgY2FsbGVyID0gc29ja2V0LnVzZXI7XG4gICAgY29uc3QgcmVjZWl2ZXJTb2NrZXQgPSB0aGlzLnNlc3Npb25zLmdldFVzZXJTb2NrZXQoZGF0YS5yZWNpcGllbnRJZCk7XG4gICAgaWYgKCFyZWNlaXZlclNvY2tldCkgc29ja2V0LmVtaXQoJ29uVXNlclVuYXZhaWxhYmxlJyk7XG4gICAgcmVjZWl2ZXJTb2NrZXQuZW1pdCgnb25WaWRlb0NhbGwnLCB7IC4uLmRhdGEsIGNhbGxlciB9KTtcbiAgfVxuXG4gIEBTdWJzY3JpYmVNZXNzYWdlKCd2aWRlb0NhbGxBY2NlcHRlZCcpXG4gIGFzeW5jIGhhbmRsZVZpZGVvQ2FsbEFjY2VwdGVkKFxuICAgIEBNZXNzYWdlQm9keSgpIGRhdGE6IENhbGxBY2NlcHRlZFBheWxvYWQsXG4gICAgQENvbm5lY3RlZFNvY2tldCgpIHNvY2tldDogQXV0aGVudGljYXRlZFNvY2tldCxcbiAgKSB7XG4gICAgY29uc3QgY2FsbGVyU29ja2V0ID0gdGhpcy5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KGRhdGEuY2FsbGVyLmlkKTtcbiAgICBjb25zdCBjb252ZXJzYXRpb24gPSBhd2FpdCB0aGlzLmNvbnZlcnNhdGlvblNlcnZpY2UuaXNDcmVhdGVkKFxuICAgICAgZGF0YS5jYWxsZXIuaWQsXG4gICAgICBzb2NrZXQudXNlci5pZCxcbiAgICApO1xuICAgIGlmICghY29udmVyc2F0aW9uKSByZXR1cm4gY29uc29sZS5sb2coJ05vIGNvbnZlcnNhdGlvbiBmb3VuZCcpO1xuICAgIGlmIChjYWxsZXJTb2NrZXQpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdFbWl0dGluZyBvblZpZGVvQ2FsbEFjY2VwdCBldmVudCcpO1xuICAgICAgY29uc3QgcGF5bG9hZCA9IHsgLi4uZGF0YSwgY29udmVyc2F0aW9uLCBhY2NlcHRvcjogc29ja2V0LnVzZXIgfTtcbiAgICAgIGNhbGxlclNvY2tldC5lbWl0KCdvblZpZGVvQ2FsbEFjY2VwdCcsIHBheWxvYWQpO1xuICAgICAgc29ja2V0LmVtaXQoJ29uVmlkZW9DYWxsQWNjZXB0JywgcGF5bG9hZCk7XG4gICAgfVxuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoV2Vic29ja2V0RXZlbnRzLlZJREVPX0NBTExfUkVKRUNURUQpXG4gIGFzeW5jIGhhbmRsZVZpZGVvQ2FsbFJlamVjdGVkKFxuICAgIEBNZXNzYWdlQm9keSgpIGRhdGEsXG4gICAgQENvbm5lY3RlZFNvY2tldCgpIHNvY2tldDogQXV0aGVudGljYXRlZFNvY2tldCxcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSB2aWRlb0NhbGxSZWplY3RlZCBldmVudCcpO1xuICAgIGNvbnN0IHJlY2VpdmVyID0gc29ja2V0LnVzZXI7XG4gICAgY29uc3QgY2FsbGVyU29ja2V0ID0gdGhpcy5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KGRhdGEuY2FsbGVyLmlkKTtcbiAgICBjYWxsZXJTb2NrZXQgJiZcbiAgICAgIGNhbGxlclNvY2tldC5lbWl0KFdlYnNvY2tldEV2ZW50cy5WSURFT19DQUxMX1JFSkVDVEVELCB7IHJlY2VpdmVyIH0pO1xuICAgIHNvY2tldC5lbWl0KFdlYnNvY2tldEV2ZW50cy5WSURFT19DQUxMX1JFSkVDVEVELCB7IHJlY2VpdmVyIH0pO1xuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoJ3ZpZGVvQ2FsbEhhbmdVcCcpXG4gIGFzeW5jIGhhbmRsZVZpZGVvQ2FsbEhhbmdVcChcbiAgICBATWVzc2FnZUJvZHkoKSB7IGNhbGxlciwgcmVjZWl2ZXIgfTogQ2FsbEhhbmdVcFBheWxvYWQsXG4gICAgQENvbm5lY3RlZFNvY2tldCgpIHNvY2tldDogQXV0aGVudGljYXRlZFNvY2tldCxcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSB2aWRlb0NhbGxIYW5ndXAgZXZlbnQnKTtcbiAgICBpZiAoc29ja2V0LnVzZXIuaWQgPT09IGNhbGxlci5pZCkge1xuICAgICAgY29uc3QgcmVjZWl2ZXJTb2NrZXQgPSB0aGlzLnNlc3Npb25zLmdldFVzZXJTb2NrZXQocmVjZWl2ZXIuaWQpO1xuICAgICAgc29ja2V0LmVtaXQoJ29uVmlkZW9DYWxsSGFuZ1VwJyk7XG4gICAgICByZXR1cm4gcmVjZWl2ZXJTb2NrZXQgJiYgcmVjZWl2ZXJTb2NrZXQuZW1pdCgnb25WaWRlb0NhbGxIYW5nVXAnKTtcbiAgICB9XG4gICAgc29ja2V0LmVtaXQoJ29uVmlkZW9DYWxsSGFuZ1VwJyk7XG4gICAgY29uc3QgY2FsbGVyU29ja2V0ID0gdGhpcy5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KGNhbGxlci5pZCk7XG4gICAgY2FsbGVyU29ja2V0ICYmIGNhbGxlclNvY2tldC5lbWl0KCdvblZpZGVvQ2FsbEhhbmdVcCcpO1xuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoJ29uVm9pY2VDYWxsSW5pdGlhdGUnKVxuICBhc3luYyBoYW5kbGVWb2ljZUNhbGxJbml0aWF0ZShcbiAgICBATWVzc2FnZUJvZHkoKSBwYXlsb2FkOiBWb2ljZUNhbGxQYXlsb2FkLFxuICAgIEBDb25uZWN0ZWRTb2NrZXQoKSBzb2NrZXQ6IEF1dGhlbnRpY2F0ZWRTb2NrZXQsXG4gICkge1xuICAgIGNvbnN0IGNhbGxlciA9IHNvY2tldC51c2VyO1xuICAgIGNvbnN0IHJlY2VpdmVyU29ja2V0ID0gdGhpcy5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KHBheWxvYWQucmVjaXBpZW50SWQpO1xuICAgIGlmICghcmVjZWl2ZXJTb2NrZXQpIHNvY2tldC5lbWl0KCdvblVzZXJVbmF2YWlsYWJsZScpO1xuICAgIHJlY2VpdmVyU29ja2V0LmVtaXQoJ29uVm9pY2VDYWxsJywgeyAuLi5wYXlsb2FkLCBjYWxsZXIgfSk7XG4gIH1cblxuICBAU3Vic2NyaWJlTWVzc2FnZShXZWJzb2NrZXRFdmVudHMuVk9JQ0VfQ0FMTF9BQ0NFUFRFRClcbiAgYXN5bmMgaGFuZGxlVm9pY2VDYWxsQWNjZXB0ZWQoXG4gICAgQE1lc3NhZ2VCb2R5KCkgcGF5bG9hZDogQ2FsbEFjY2VwdGVkUGF5bG9hZCxcbiAgICBAQ29ubmVjdGVkU29ja2V0KCkgc29ja2V0OiBBdXRoZW50aWNhdGVkU29ja2V0LFxuICApIHtcbiAgICBjb25zb2xlLmxvZygnSW5zaWRlIG9uVm9pY2VDYWxsQWNjZXB0ZWQgZXZlbnQnKTtcbiAgICBjb25zdCBjYWxsZXJTb2NrZXQgPSB0aGlzLnNlc3Npb25zLmdldFVzZXJTb2NrZXQocGF5bG9hZC5jYWxsZXIuaWQpO1xuICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IGF3YWl0IHRoaXMuY29udmVyc2F0aW9uU2VydmljZS5pc0NyZWF0ZWQoXG4gICAgICBwYXlsb2FkLmNhbGxlci5pZCxcbiAgICAgIHNvY2tldC51c2VyLmlkLFxuICAgICk7XG4gICAgaWYgKCFjb252ZXJzYXRpb24pIHJldHVybiBjb25zb2xlLmxvZygnTm8gY29udmVyc2F0aW9uIGZvdW5kJyk7XG4gICAgaWYgKGNhbGxlclNvY2tldCkge1xuICAgICAgY29uc29sZS5sb2coJ0VtaXR0aW5nIG9uVm9pY2VDYWxsQWNjZXB0ZWQgZXZlbnQnKTtcbiAgICAgIGNvbnN0IGNhbGxQYXlsb2FkID0geyAuLi5wYXlsb2FkLCBjb252ZXJzYXRpb24sIGFjY2VwdG9yOiBzb2NrZXQudXNlciB9O1xuICAgICAgY2FsbGVyU29ja2V0LmVtaXQoV2Vic29ja2V0RXZlbnRzLlZPSUNFX0NBTExfQUNDRVBURUQsIGNhbGxQYXlsb2FkKTtcbiAgICAgIHNvY2tldC5lbWl0KFdlYnNvY2tldEV2ZW50cy5WT0lDRV9DQUxMX0FDQ0VQVEVELCBjYWxsUGF5bG9hZCk7XG4gICAgfVxuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoV2Vic29ja2V0RXZlbnRzLlZPSUNFX0NBTExfSEFOR19VUClcbiAgYXN5bmMgaGFuZGxlVm9pY2VDYWxsSGFuZ1VwKFxuICAgIEBNZXNzYWdlQm9keSgpIHsgY2FsbGVyLCByZWNlaXZlciB9OiBDYWxsSGFuZ1VwUGF5bG9hZCxcbiAgICBAQ29ubmVjdGVkU29ja2V0KCkgc29ja2V0OiBBdXRoZW50aWNhdGVkU29ja2V0LFxuICApIHtcbiAgICBjb25zb2xlLmxvZygnaW5zaWRlIG9uVm9pY2VDYWxsSGFuZ1VwIGV2ZW50Jyk7XG4gICAgaWYgKHNvY2tldC51c2VyLmlkID09PSBjYWxsZXIuaWQpIHtcbiAgICAgIGNvbnN0IHJlY2VpdmVyU29ja2V0ID0gdGhpcy5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KHJlY2VpdmVyLmlkKTtcbiAgICAgIHNvY2tldC5lbWl0KFdlYnNvY2tldEV2ZW50cy5WT0lDRV9DQUxMX0hBTkdfVVApO1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgcmVjZWl2ZXJTb2NrZXQgJiZcbiAgICAgICAgcmVjZWl2ZXJTb2NrZXQuZW1pdChXZWJzb2NrZXRFdmVudHMuVk9JQ0VfQ0FMTF9IQU5HX1VQKVxuICAgICAgKTtcbiAgICB9XG4gICAgc29ja2V0LmVtaXQoV2Vic29ja2V0RXZlbnRzLlZPSUNFX0NBTExfSEFOR19VUCk7XG4gICAgY29uc3QgY2FsbGVyU29ja2V0ID0gdGhpcy5zZXNzaW9ucy5nZXRVc2VyU29ja2V0KGNhbGxlci5pZCk7XG4gICAgY2FsbGVyU29ja2V0ICYmIGNhbGxlclNvY2tldC5lbWl0KFdlYnNvY2tldEV2ZW50cy5WT0lDRV9DQUxMX0hBTkdfVVApO1xuICB9XG5cbiAgQFN1YnNjcmliZU1lc3NhZ2UoV2Vic29ja2V0RXZlbnRzLlZPSUNFX0NBTExfUkVKRUNURUQpXG4gIGFzeW5jIGhhbmRsZVZvaWNlQ2FsbFJlamVjdGVkKFxuICAgIEBNZXNzYWdlQm9keSgpIGRhdGEsXG4gICAgQENvbm5lY3RlZFNvY2tldCgpIHNvY2tldDogQXV0aGVudGljYXRlZFNvY2tldCxcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ2luc2lkZSBvblZvaWNlQ2FsbFJlamVjdGVkIGV2ZW50Jyk7XG4gICAgY29uc3QgcmVjZWl2ZXIgPSBzb2NrZXQudXNlcjtcbiAgICBjb25zdCBjYWxsZXJTb2NrZXQgPSB0aGlzLnNlc3Npb25zLmdldFVzZXJTb2NrZXQoZGF0YS5jYWxsZXIuaWQpO1xuICAgIGNhbGxlclNvY2tldCAmJlxuICAgICAgY2FsbGVyU29ja2V0LmVtaXQoV2Vic29ja2V0RXZlbnRzLlZPSUNFX0NBTExfUkVKRUNURUQsIHsgcmVjZWl2ZXIgfSk7XG4gICAgc29ja2V0LmVtaXQoV2Vic29ja2V0RXZlbnRzLlZPSUNFX0NBTExfUkVKRUNURUQsIHsgcmVjZWl2ZXIgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEluamVjdCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlcjIgfSBmcm9tICdAbmVzdGpzL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IHsgTWVzc2FnZVBhdHRlcm4sIFBheWxvYWQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQ3JlYXRlR3JvdXBNZXNzYWdlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgSUdyb3VwTWVzc2FnZVNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2dyb3VwLW1lc3NhZ2VzJztcblxuZXhwb3J0IGNsYXNzIEdyb3VwTWVzc2FnZUNvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNlcnZpY2VzLkdST1VQX01FU1NBR0VTKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgZ3JvdXBNZXNzYWdlU2VydmljZTogSUdyb3VwTWVzc2FnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjIsXG4gICkge31cblxuICAvLyBAVGhyb3R0bGUoNSwgMTApXG4gIC8vIEBVc2VJbnRlcmNlcHRvcnMoXG4gIC8vICAgRmlsZUZpZWxkc0ludGVyY2VwdG9yKFtcbiAgLy8gICAgIHtcbiAgLy8gICAgICAgbmFtZTogJ2F0dGFjaG1lbnRzJyxcbiAgLy8gICAgICAgbWF4Q291bnQ6IDUsXG4gIC8vICAgICB9LFxuICAvLyAgIF0pXG4gIC8vIClcbiAgQE1lc3NhZ2VQYXR0ZXJuKCdjcmVhdGVfZ3JvdXBfbWVzc2FnZScpXG4gIGFzeW5jIGNyZWF0ZUdyb3VwTWVzc2FnZShAUGF5bG9hZCgpIHBheWxvYWQ6IENyZWF0ZUdyb3VwTWVzc2FnZVBhcmFtcykge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5ncm91cE1lc3NhZ2VTZXJ2aWNlLmNyZWF0ZUdyb3VwTWVzc2FnZShwYXlsb2FkKTtcbiAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdncm91cC5tZXNzYWdlLmNyZWF0ZScsIHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2dldF9ncm91cF9tZXNzYWdlcycpXG4gIGFzeW5jIGdldEdyb3VwTWVzc2FnZXMoQFBheWxvYWQoKSBncm91cElkOiBudW1iZXIpIHtcbiAgICBjb25zb2xlLmxvZyhgRmV0Y2hpbmcgR3JvdXBNZXNzYWdlcyBmb3IgR3JvdXAgSWQ6IGApO1xuICAgIGNvbnN0IG1lc3NhZ2VzID0gYXdhaXQgdGhpcy5ncm91cE1lc3NhZ2VTZXJ2aWNlLmdldEdyb3VwTWVzc2FnZXMoZ3JvdXBJZCk7XG4gICAgcmV0dXJuIG1lc3NhZ2VzO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdkZWxldGVfZ3JvdXBfbWVzc2FnZScpXG4gIGFzeW5jIGRlbGV0ZUdyb3VwTWVzc2FnZShcbiAgICBAUGF5bG9hZCgpIHBheWxvYWQ6IHsgdXNlcklkOiBudW1iZXI7IGdyb3VwSWQ6IG51bWJlcjsgbWVzc2FnZUlkOiBudW1iZXIgfSxcbiAgKSB7XG4gICAgYXdhaXQgdGhpcy5ncm91cE1lc3NhZ2VTZXJ2aWNlLmRlbGV0ZUdyb3VwTWVzc2FnZShwYXlsb2FkKTtcbiAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdncm91cC5tZXNzYWdlLmRlbGV0ZScsIHBheWxvYWQpO1xuICAgIHJldHVybiB7IGdyb3VwSWQ6IHBheWxvYWQuZ3JvdXBJZCwgbWVzc2FnZUlkOiBwYXlsb2FkLm1lc3NhZ2VJZCB9O1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdlZGl0X2dyb3VwX21lc3NhZ2UnKVxuICBhc3luYyBlZGl0R3JvdXBNZXNzYWdlKFxuICAgIEBQYXlsb2FkKClcbiAgICBwYXlsb2FkOiB7XG4gICAgICB1c2VySWQ6IG51bWJlcjtcbiAgICAgIGdyb3VwSWQ6IG51bWJlcjtcbiAgICAgIG1lc3NhZ2VJZDogbnVtYmVyO1xuICAgICAgY29udGVudDogc3RyaW5nO1xuICAgIH0sXG4gICkge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLmdyb3VwTWVzc2FnZVNlcnZpY2UuZWRpdEdyb3VwTWVzc2FnZShwYXlsb2FkKTtcbiAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdncm91cC5tZXNzYWdlLnVwZGF0ZScsIG1lc3NhZ2UpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyLCBJbmplY3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBFdmVudEVtaXR0ZXIyIH0gZnJvbSAnQG5lc3Rqcy9ldmVudC1lbWl0dGVyJztcbmltcG9ydCB7IE1lc3NhZ2VQYXR0ZXJuLCBQYXlsb2FkIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IFNraXBUaHJvdHRsZSB9IGZyb20gJ0BuZXN0anMvdGhyb3R0bGVyJztcbmltcG9ydCB7IFJvdXRlcywgU2VydmljZXMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQWRkR3JvdXBSZWNpcGllbnRQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBJR3JvdXBSZWNpcGllbnRTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ncm91cC1yZWNpcGllbnQnO1xuXG4vLyBAU2tpcFRocm90dGxlKClcbi8vIEBDb250cm9sbGVyKFJvdXRlcy5HUk9VUF9SRUNJUElFTlRTKVxuZXhwb3J0IGNsYXNzIEdyb3VwUmVjaXBpZW50c0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNlcnZpY2VzLkdST1VQX1JFQ0lQSUVOVFMpXG4gICAgcHJpdmF0ZSByZWFkb25seSBncm91cFJlY2lwaWVudFNlcnZpY2U6IElHcm91cFJlY2lwaWVudFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBldmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjIsXG4gICkge31cblxuICBATWVzc2FnZVBhdHRlcm4oJ2FkZF9ncm91cF9yZWNpcGllbnQnKVxuICBhc3luYyBhZGRHcm91cFJlY2lwaWVudChAUGF5bG9hZCgpIHBheWxvYWQ6IEFkZEdyb3VwUmVjaXBpZW50UGFyYW1zKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLmdyb3VwUmVjaXBpZW50U2VydmljZS5hZGRHcm91cFJlY2lwaWVudChcbiAgICAgIHBheWxvYWQsXG4gICAgKTtcbiAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdncm91cC51c2VyLmFkZCcsIHJlc3BvbnNlKTtcbiAgICByZXR1cm4gcmVzcG9uc2U7XG4gIH1cblxuICAvKipcbiAgICogTGVhdmVzIGEgR3JvdXBcbiAgICogQHBhcmFtIHVzZXIgdGhlIGF1dGhlbnRpY2F0ZWQgVXNlclxuICAgKiBAcGFyYW0gZ3JvdXBJZCB0aGUgaWQgb2YgdGhlIGdyb3VwXG4gICAqIEByZXR1cm5zIHRoZSB1cGRhdGVkIEdyb3VwIHRoYXQgdGhlIHVzZXIgaGFkIGxlZnRcbiAgICovXG4gIEBNZXNzYWdlUGF0dGVybigncmVjaXBpZW50X2xlYXZlJylcbiAgYXN5bmMgbGVhdmVHcm91cChAUGF5bG9hZCgpIHBheWxvYWQ6IHsgaWQ6IG51bWJlcjsgdXNlcklkOiBudW1iZXIgfSkge1xuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgdGhpcy5ncm91cFJlY2lwaWVudFNlcnZpY2UubGVhdmVHcm91cChwYXlsb2FkKTtcbiAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdncm91cC51c2VyLmxlYXZlJywge1xuICAgICAgZ3JvdXAsXG4gICAgICB1c2VySWQ6IHBheWxvYWQudXNlcklkLFxuICAgIH0pO1xuICAgIHJldHVybiBncm91cDtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybigncmVtb3ZlX2dyb3VwX3JlY2lwaWVudCcpXG4gIGFzeW5jIHJlbW92ZUdyb3VwUmVjaXBpZW50KFxuICAgIEBQYXlsb2FkKCkgcGF5bG9hZDogeyBpc3N1ZXJJZDogbnVtYmVyOyBpZDogbnVtYmVyOyByZW1vdmVVc2VySWQ6IG51bWJlciB9LFxuICApIHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMuZ3JvdXBSZWNpcGllbnRTZXJ2aWNlLnJlbW92ZUdyb3VwUmVjaXBpZW50KFxuICAgICAgcGF5bG9hZCxcbiAgICApO1xuICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2dyb3VwLnVzZXIucmVtb3ZlJywgcmVzcG9uc2UpO1xuICAgIHJldHVybiByZXNwb25zZS5ncm91cDtcbiAgfVxufVxuIiwiaW1wb3J0IHsgR2V0LCBJbmplY3QsIFBhcmFtIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgRXZlbnRFbWl0dGVyMiB9IGZyb20gJ0BuZXN0anMvZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiwgUGF5bG9hZCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBDcmVhdGVHcm91cER0byB9IGZyb20gJy4uL2R0b3MvQ3JlYXRlR3JvdXAuZHRvJztcbmltcG9ydCB7IElHcm91cFNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2dyb3VwJztcblxuLy8gQFNraXBUaHJvdHRsZSgpXG4vLyBAQ29udHJvbGxlcihSb3V0ZXMuR1JPVVBTKVxuZXhwb3J0IGNsYXNzIEdyb3VwQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU2VydmljZXMuR1JPVVBTKSBwcml2YXRlIHJlYWRvbmx5IGdyb3VwU2VydmljZTogSUdyb3VwU2VydmljZSxcbiAgICBwcml2YXRlIGV2ZW50RW1pdHRlcjogRXZlbnRFbWl0dGVyMixcbiAgKSB7fVxuXG4gIEBNZXNzYWdlUGF0dGVybignY3JlYXRlX2dyb3VwX2NoYXQnKVxuICBhc3luYyBjcmVhdGVHcm91cChAUGF5bG9hZCgpIHBheWxvYWQ6IENyZWF0ZUdyb3VwRHRvKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCB0aGlzLmdyb3VwU2VydmljZS5jcmVhdGVHcm91cCh7XG4gICAgICAuLi5wYXlsb2FkLFxuICAgICAgY3JlYXRvcjogJzEnLFxuICAgIH0pO1xuICAgIC8vIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2dyb3VwLmNyZWF0ZScsIGdyb3VwKTtcbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2dldF9ncm91cHNfY2hhdCcpXG4gIGdldEdyb3VwcyhAUGF5bG9hZCgpIHBheWxvYWQ6IHsgdXNlcklkOiBudW1iZXIgfSkge1xuICAgIHJldHVybiB0aGlzLmdyb3VwU2VydmljZS5nZXRHcm91cHMocGF5bG9hZCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2dldF9zaW5nbGVfZ3JvdXAnKVxuICBnZXRHcm91cChAUGF5bG9hZCgpIGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5ncm91cFNlcnZpY2UuZmluZEdyb3VwQnlJZChpZCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ3VwZGF0ZV9ncm91cF9vd25lcicpXG4gIGFzeW5jIHVwZGF0ZUdyb3VwT3duZXIoXG4gICAgQFBheWxvYWQoKSBwYXlsb2FkOiB7IHVzZXJJZDogbnVtYmVyOyBncm91cElkOiBudW1iZXI7IG5ld093bmVySWQ6IG51bWJlciB9LFxuICApIHtcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IHRoaXMuZ3JvdXBTZXJ2aWNlLnRyYW5zZmVyR3JvdXBPd25lcihwYXlsb2FkKTtcbiAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdncm91cC5vd25lci51cGRhdGUnLCBncm91cCk7XG4gICAgcmV0dXJuIGdyb3VwO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCd1cGRhdGVfZ3JvdXBfZGV0YWlscycpXG4gIGFzeW5jIHVwZGF0ZUdyb3VwRGV0YWlscyhAUGF5bG9hZCgpIHBheWxvYWQ6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmdyb3VwU2VydmljZS51cGRhdGVEZXRhaWxzKHBheWxvYWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBBcnJheU5vdEVtcHR5LCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVHcm91cER0byB7XG4gIHVzZXJzOiBzdHJpbmdbXTtcblxuICB0aXRsZTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSHR0cEV4Y2VwdGlvbiwgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIEdyb3VwTm90Rm91bmRFeGNlcHRpb24gZXh0ZW5kcyBIdHRwRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0dyb3VwIE5vdCBGb3VuZCcsIEh0dHBTdGF0dXMuTk9UX0ZPVU5EKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHR0cEV4Y2VwdGlvbiwgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIEdyb3VwT3duZXJUcmFuc2ZlckV4Y2VwdGlvbiBleHRlbmRzIEh0dHBFeGNlcHRpb24ge1xuICBjb25zdHJ1Y3Rvcihtc2c/OiBzdHJpbmcpIHtcbiAgICBjb25zdCBkZWZhdWx0TWVzc2FnZSA9ICdHcm91cCBPd25lciBUcmFuc2ZlciBFeGNlcHRpb24nO1xuICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IG1zZ1xuICAgICAgPyBkZWZhdWx0TWVzc2FnZS5jb25jYXQoJzogJywgbXNnKVxuICAgICAgOiBkZWZhdWx0TWVzc2FnZTtcbiAgICBzdXBlcihlcnJvck1lc3NhZ2UsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIdHRwRXhjZXB0aW9uLCBIdHRwU3RhdHVzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgR3JvdXBQYXJ0aWNpcGFudE5vdEZvdW5kIGV4dGVuZHMgSHR0cEV4Y2VwdGlvbiB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCdHcm91cCBQYXJ0aWNpcGFudCBOb3QgRm91bmQnLCBIdHRwU3RhdHVzLk5PVF9GT1VORCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEh0dHBFeGNlcHRpb24sIEh0dHBTdGF0dXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmV4cG9ydCBjbGFzcyBJbnZhbGlkR3JvdXBFeGNlcHRpb24gZXh0ZW5kcyBIdHRwRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ0ludmFsaWQgR3JvdXAgSWQnLCBIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSHR0cEV4Y2VwdGlvbiwgSHR0cFN0YXR1cyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuZXhwb3J0IGNsYXNzIE5vdEdyb3VwT3duZXJFeGNlcHRpb24gZXh0ZW5kcyBIdHRwRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ05vdCBhIEdyb3VwIE93bmVyJywgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1pZGRsZXdhcmVDb25zdW1lciwgTW9kdWxlLCBOZXN0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgSW1hZ2VTdG9yYWdlTW9kdWxlIH0gZnJvbSAnLi4vaW1hZ2Utc3RvcmFnZS9pbWFnZS1zdG9yYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBNZXNzYWdlQXR0YWNobWVudHNNb2R1bGUgfSBmcm9tICcuLi9tZXNzYWdlLWF0dGFjaG1lbnRzL21lc3NhZ2UtYXR0YWNobWVudHMubW9kdWxlJztcbmltcG9ydCB7IFVzZXJzTW9kdWxlIH0gZnJvbSAnLi4vdXNlcnMvdXNlcnMubW9kdWxlJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IGlzQXV0aG9yaXplZCB9IGZyb20gJy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IHsgR3JvdXBNZXNzYWdlQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvZ3JvdXAtbWVzc2FnZXMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBHcm91cFJlY2lwaWVudHNDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9ncm91cC1yZWNpcGllbnRzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgR3JvdXBDb250cm9sbGVyIH0gZnJvbSAnLi9jb250cm9sbGVycy9ncm91cC5jb250cm9sbGVyJztcbmltcG9ydCB7IEdyb3VwTWlkZGxld2FyZSB9IGZyb20gJy4vbWlkZGxld2FyZXMvZ3JvdXAubWlkZGxld2FyZSc7XG5pbXBvcnQgeyBQcmlzbWFNb2R1bGVHcm91cCB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5tb2R1bGUnO1xuaW1wb3J0IHsgR3JvdXBNZXNzYWdlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ3JvdXAtbWVzc2FnZXMuc2VydmljZSc7XG5pbXBvcnQgeyBHcm91cFJlY2lwaWVudFNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL2dyb3VwLXJlY2lwaWVudC5zZXJ2aWNlJztcbmltcG9ydCB7IEdyb3VwU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvZ3JvdXAuc2VydmljZSc7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBVc2Vyc01vZHVsZSxcbiAgICBNZXNzYWdlQXR0YWNobWVudHNNb2R1bGUsXG4gICAgSW1hZ2VTdG9yYWdlTW9kdWxlLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIGlzR2xvYmFsOiB0cnVlLFxuICAgICAgZW52RmlsZVBhdGg6ICcuZW52LmRldicsXG4gICAgfSksXG4gICAgUHJpc21hTW9kdWxlR3JvdXAsXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbXG4gICAgR3JvdXBDb250cm9sbGVyLFxuICAgIEdyb3VwTWVzc2FnZUNvbnRyb2xsZXIsXG4gICAgR3JvdXBSZWNpcGllbnRzQ29udHJvbGxlcixcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogU2VydmljZXMuR1JPVVBTLFxuICAgICAgdXNlQ2xhc3M6IEdyb3VwU2VydmljZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNlcnZpY2VzLkdST1VQX01FU1NBR0VTLFxuICAgICAgdXNlQ2xhc3M6IEdyb3VwTWVzc2FnZVNlcnZpY2UsXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5HUk9VUF9SRUNJUElFTlRTLFxuICAgICAgdXNlQ2xhc3M6IEdyb3VwUmVjaXBpZW50U2VydmljZSxcbiAgICB9LFxuICAgIEhUVFAsXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5HUk9VUFMsXG4gICAgICB1c2VDbGFzczogR3JvdXBTZXJ2aWNlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwTW9kdWxlIGltcGxlbWVudHMgTmVzdE1vZHVsZSB7XG4gIGNvbmZpZ3VyZShjb25zdW1lcjogTWlkZGxld2FyZUNvbnN1bWVyKSB7XG4gICAgY29uc3VtZXIuYXBwbHkoaXNBdXRob3JpemVkLCBHcm91cE1pZGRsZXdhcmUpLmZvclJvdXRlcygnZ3JvdXBzLzppZCcpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBHcm91cE1lc3NhZ2UgfSBmcm9tICcuLi8uLi91dGlscy90eXBlb3JtJztcbmltcG9ydCB7XG4gIENyZWF0ZUdyb3VwTWVzc2FnZVBhcmFtcyxcbiAgRGVsZXRlR3JvdXBNZXNzYWdlUGFyYW1zLFxuICBFZGl0R3JvdXBNZXNzYWdlUGFyYW1zLFxufSBmcm9tICcuLi8uLi91dGlscy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyb3VwTWVzc2FnZVNlcnZpY2Uge1xuICBjcmVhdGVHcm91cE1lc3NhZ2UocGFyYW1zOiBhbnkpO1xuICBnZXRHcm91cE1lc3NhZ2VzKGlkOiBudW1iZXIpOiBQcm9taXNlPEdyb3VwTWVzc2FnZVtdPjtcbiAgZGVsZXRlR3JvdXBNZXNzYWdlKHBhcmFtczogRGVsZXRlR3JvdXBNZXNzYWdlUGFyYW1zKTtcbiAgZWRpdEdyb3VwTWVzc2FnZShwYXJhbXM6IEVkaXRHcm91cE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPEdyb3VwTWVzc2FnZT47XG59XG4iLCJpbXBvcnQgeyBHcm91cCB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVvcm0nO1xuaW1wb3J0IHtcbiAgQWRkR3JvdXBSZWNpcGllbnRQYXJhbXMsXG4gIEFkZEdyb3VwVXNlclJlc3BvbnNlLFxuICBDaGVja1VzZXJHcm91cFBhcmFtcyxcbiAgTGVhdmVHcm91cFBhcmFtcyxcbiAgUmVtb3ZlR3JvdXBSZWNpcGllbnRQYXJhbXMsXG4gIFJlbW92ZUdyb3VwVXNlclJlc3BvbnNlLFxufSBmcm9tICcuLi8uLi91dGlscy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyb3VwUmVjaXBpZW50U2VydmljZSB7XG4gIGFkZEdyb3VwUmVjaXBpZW50KFxuICAgIHBhcmFtczogQWRkR3JvdXBSZWNpcGllbnRQYXJhbXMsXG4gICk6IFByb21pc2U8QWRkR3JvdXBVc2VyUmVzcG9uc2U+O1xuICByZW1vdmVHcm91cFJlY2lwaWVudChcbiAgICBwYXJhbXM6IFJlbW92ZUdyb3VwUmVjaXBpZW50UGFyYW1zLFxuICApOiBQcm9taXNlPFJlbW92ZUdyb3VwVXNlclJlc3BvbnNlPjtcbiAgbGVhdmVHcm91cChwYXJhbXM6IExlYXZlR3JvdXBQYXJhbXMpO1xuICBpc1VzZXJJbkdyb3VwKHBhcmFtczogQ2hlY2tVc2VyR3JvdXBQYXJhbXMpOiBQcm9taXNlPEdyb3VwPjtcbn1cbiIsImltcG9ydCB7IEdyb3VwLCBVc2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZW9ybSc7XG5pbXBvcnQge1xuICBBY2Nlc3NQYXJhbXMsXG4gIENyZWF0ZUdyb3VwUGFyYW1zLFxuICBGZXRjaEdyb3Vwc1BhcmFtcyxcbiAgVHJhbnNmZXJPd25lclBhcmFtcyxcbiAgVXBkYXRlR3JvdXBEZXRhaWxzUGFyYW1zLFxufSBmcm9tICcuLi8uLi91dGlscy90eXBlcyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUdyb3VwU2VydmljZSB7XG4gIGNyZWF0ZUdyb3VwKHBhcmFtczogQ3JlYXRlR3JvdXBQYXJhbXMpO1xuICBnZXRHcm91cHMocGFyYW1zOiBGZXRjaEdyb3Vwc1BhcmFtcyk6IFByb21pc2U8R3JvdXBbXT47XG4gIGZpbmRHcm91cEJ5SWQoaWQ6IG51bWJlcik6IFByb21pc2U8R3JvdXA+O1xuICBzYXZlR3JvdXAoZ3JvdXA6IEdyb3VwKTogUHJvbWlzZTxHcm91cD47XG4gIGhhc0FjY2VzcyhwYXJhbXM6IEFjY2Vzc1BhcmFtcyk6IFByb21pc2U8VXNlciB8IHVuZGVmaW5lZD47XG4gIHRyYW5zZmVyR3JvdXBPd25lcihwYXJhbXM6IFRyYW5zZmVyT3duZXJQYXJhbXMpOiBQcm9taXNlPEdyb3VwPjtcbiAgdXBkYXRlRGV0YWlscyhwYXJhbXM6IFVwZGF0ZUdyb3VwRGV0YWlsc1BhcmFtcyk6IFByb21pc2U8R3JvdXA+O1xufVxuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlLCBOZXN0TWlkZGxld2FyZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE5leHRGdW5jdGlvbiwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEF1dGhlbnRpY2F0ZWRSZXF1ZXN0IH0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgR3JvdXBOb3RGb3VuZEV4Y2VwdGlvbiB9IGZyb20gJy4uL2V4Y2VwdGlvbnMvR3JvdXBOb3RGb3VuZCc7XG5pbXBvcnQgeyBJbnZhbGlkR3JvdXBFeGNlcHRpb24gfSBmcm9tICcuLi9leGNlcHRpb25zL0ludmFsaWRHcm91cCc7XG5pbXBvcnQgeyBJR3JvdXBTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy9ncm91cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm91cE1pZGRsZXdhcmUgaW1wbGVtZW50cyBOZXN0TWlkZGxld2FyZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU2VydmljZXMuR1JPVVBTKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgZ3JvdXBTZXJ2aWNlOiBJR3JvdXBTZXJ2aWNlLFxuICApIHt9XG5cbiAgYXN5bmMgdXNlKHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsIHJlczogUmVzcG9uc2UsIG5leHQ6IE5leHRGdW5jdGlvbikge1xuICAgIGNvbnN0IHsgaWQ6IHVzZXJJZCB9ID0gcmVxLnVzZXI7XG4gICAgY29uc3QgaWQgPSBwYXJzZUludChyZXEucGFyYW1zWydpZCddKTtcblxuICAgIGlmIChpc05hTihpZCkpIHRocm93IG5ldyBJbnZhbGlkR3JvdXBFeGNlcHRpb24oKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7IGlkLCB1c2VySWQgfTtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5ncm91cFNlcnZpY2UuaGFzQWNjZXNzKHBhcmFtcyk7XG4gICAgY29uc29sZS5sb2codXNlcik7XG4gICAgaWYgKHVzZXIpIG5leHQoKTtcbiAgICBlbHNlIHRocm93IG5ldyBHcm91cE5vdEZvdW5kRXhjZXB0aW9uKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZUdyb3VwIH0gZnJvbSAnLi9wcmlzbWEuc2VydmljZSc7XG5cbkBHbG9iYWwoKVxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW1ByaXNtYVNlcnZpY2VHcm91cF0sXG4gIGV4cG9ydHM6IFtQcmlzbWFTZXJ2aWNlR3JvdXBdLFxufSlcbmV4cG9ydCBjbGFzcyBQcmlzbWFNb2R1bGVHcm91cCB7fVxuIiwiaW1wb3J0IHsgTXlTUUxDbGllbnQgfSBmcm9tICdAY29tbW9uL3ByaXNtYS9teXNxbF9wcmlzbWFfY2xpZW50JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmlzbWFTZXJ2aWNlR3JvdXAgZXh0ZW5kcyBNeVNRTENsaWVudCB7XG4gIGNsZWFuRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRyYW5zYWN0aW9uKFtdKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwRXhjZXB0aW9uLCBIdHRwU3RhdHVzLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmltcG9ydCB7XG4gIENyZWF0ZUdyb3VwTWVzc2FnZVBhcmFtcyxcbiAgRGVsZXRlR3JvdXBNZXNzYWdlUGFyYW1zLFxuICBFZGl0R3JvdXBNZXNzYWdlUGFyYW1zLFxufSBmcm9tICcuLi8uLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlR3JvdXAgfSBmcm9tICcuLi9wcmlzbWEvcHJpc21hLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvdXBNZXNzYWdlU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlR3JvdXAsIHByaXZhdGUgaHR0cDogSFRUUCkge31cblxuICBhc3luYyBjcmVhdGVHcm91cE1lc3NhZ2UocGF5bG9hZDogQ3JlYXRlR3JvdXBNZXNzYWdlUGFyYW1zKSB7XG4gICAgY29uc3QgeyBncm91cElkLCBjb250ZW50LCBhdXRob3JJZCB9ID0gcGF5bG9hZDtcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3Vwcy5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBncm91cElkLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdXNlcnNfZ3JvdXBzOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICB1c2VyczogdHJ1ZSxcbiAgICAgICAgICAgIGdyb3VwczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoIWdyb3VwKVxuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ05vIEdyb3VwIEZvdW5kJywgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gICAgY29uc3QgZmluZFVzZXIgPSBncm91cC51c2Vyc19ncm91cHMuZmluZCh1ID0+IHUudXNlcnMuaWQgPT09IGF1dGhvcklkKTtcbiAgICBpZiAoIWZpbmRVc2VyKVxuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1VzZXIgbm90IGluIGdyb3VwJywgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jIHR4ID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwTWVzc2FnZSA9IGF3YWl0IHR4Lmdyb3VwTWVzc2FnZXMuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGNvbnRlbnQsXG4gICAgICAgICAgZ3JvdXBJZDogZ3JvdXAuaWQsXG4gICAgICAgICAgYXV0aG9ySWQ6IGF1dGhvcklkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBbZ3JvdXBNZXNzYWdlQXR0YWNobWVudCwgdXBkYXRlZEdyb3VwXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdHguZ3JvdXBNZXNzYWdlQXR0YWNobWVudHMuY3JlYXRlKHtcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBtZXNzYWdlSWQ6IGdyb3VwTWVzc2FnZS5pZCxcbiAgICAgICAgICAgIGtleTogRGF0ZS5ub3coKS50b1N0cmluZygpLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICB0eC5ncm91cHMudXBkYXRlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQ6IGdyb3VwLmlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFzdF9tZXNzYWdlX3NlbnRfaWQ6IGdyb3VwTWVzc2FnZS5pZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ0NyZWF0ZSBtZXNzYWdlIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgIHsgbWVzc2FnZTogZ3JvdXBNZXNzYWdlLCBncm91cDogdXBkYXRlZEdyb3VwIH0sXG4gICAgICApO1xuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZ2V0R3JvdXBNZXNzYWdlcyhpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3VwTWVzc2FnZXMuZmluZE1hbnkoe1xuICAgICAgd2hlcmU6IHsgZ3JvdXBJZDogaWQgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICdDcmVhdGUgbWVzc2FnZSBzdWNjZXNzZnVsbHknLFxuICAgICAgbWVzc2FnZXMsXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUdyb3VwTWVzc2FnZShwYXJhbXM6IERlbGV0ZUdyb3VwTWVzc2FnZVBhcmFtcyk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gY29uc3QgZ3JvdXAgPSBhd2FpdCB0aGlzLmdyb3VwUmVwb3NpdG9yeVxuICAgIC8vICAgLmNyZWF0ZVF1ZXJ5QnVpbGRlcignZ3JvdXAnKVxuICAgIC8vICAgLndoZXJlKCdncm91cC5pZCA9IDpncm91cElkJywgeyBncm91cElkOiBwYXJhbXMuZ3JvdXBJZCB9KVxuICAgIC8vICAgLmxlZnRKb2luQW5kU2VsZWN0KCdncm91cC5sYXN0TWVzc2FnZVNlbnQnLCAnbGFzdE1lc3NhZ2VTZW50JylcbiAgICAvLyAgIC5sZWZ0Sm9pbkFuZFNlbGVjdCgnZ3JvdXAubWVzc2FnZXMnLCAnbWVzc2FnZXMnKVxuICAgIC8vICAgLm9yZGVyQnkoJ21lc3NhZ2VzLmNyZWF0ZWRBdCcsICdERVNDJylcbiAgICAvLyAgIC5saW1pdCg1KVxuICAgIC8vICAgLmdldE9uZSgpO1xuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgdGhpcy5wcmlzbWEuZ3JvdXBzLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHBhcmFtcy5ncm91cElkLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgZ3JvdXBfbWVzc2FnZXM6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFncm91cClcbiAgICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKCdHcm91cCBub3QgZm91bmQnLCBIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKTtcbiAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5wcmlzbWEuZ3JvdXBNZXNzYWdlcy5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHBhcmFtcy5tZXNzYWdlSWQsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCFtZXNzYWdlKVxuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ0Nhbm5vdCBkZWxldGUgbWVzc2FnZScsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuXG4gICAgaWYgKGdyb3VwLmxhc3RfbWVzc2FnZV9zZW50X2lkICE9PSBtZXNzYWdlLmlkKVxuICAgICAgcmV0dXJuIHRoaXMucHJpc21hLmdyb3VwTWVzc2FnZXMuZGVsZXRlKHsgd2hlcmU6IHsgaWQ6IG1lc3NhZ2UuaWQgfSB9KTtcblxuICAgIGNvbnN0IHNpemUgPSBncm91cC5ncm91cF9tZXNzYWdlcy5sZW5ndGg7XG4gICAgY29uc3QgU0VDT05EX01FU1NBR0VfSU5ERVggPSAxO1xuICAgIGlmIChzaXplIDw9IDEpIHtcbiAgICAgIGNvbnNvbGUubG9nKCdMYXN0IE1lc3NhZ2UgU2VudCBpcyBkZWxldGVkJyk7XG4gICAgICBhd2FpdCB0aGlzLnByaXNtYS5ncm91cHMudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogcGFyYW1zLmdyb3VwSWQsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBsYXN0X21lc3NhZ2Vfc2VudF9pZDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zb2xlLmxvZygnVGhlcmUgYXJlIG1vcmUgdGhhbiAxIG1lc3NhZ2UnKTtcbiAgICAgIGNvbnN0IG5ld0xhc3RNZXNzYWdlID0gZ3JvdXAuZ3JvdXBfbWVzc2FnZXNbU0VDT05EX01FU1NBR0VfSU5ERVhdO1xuICAgICAgYXdhaXQgdGhpcy5wcmlzbWEuZ3JvdXBzLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7IGlkOiBwYXJhbXMuZ3JvdXBJZCB9LFxuICAgICAgICBkYXRhOiB7IGxhc3RfbWVzc2FnZV9zZW50X2lkOiBuZXdMYXN0TWVzc2FnZS5pZCB9LFxuICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3VwTWVzc2FnZXMuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7IGlkOiBtZXNzYWdlLmlkIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAnRGVsZXRlIG1lc3NhZ2Ugc3VjY2Vzc2Z1bGx5JyxcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgZWRpdEdyb3VwTWVzc2FnZShwYXJhbXM6IEVkaXRHcm91cE1lc3NhZ2VQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IG1lc3NhZ2VEQiA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3VwTWVzc2FnZXMuZmluZEZpcnN0KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBwYXJhbXMubWVzc2FnZUlkLFxuICAgICAgICBhdXRob3JJZDogcGFyYW1zLnVzZXJJZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKCFtZXNzYWdlREIpXG4gICAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbignQ2Fubm90IEVkaXQgTWVzc2FnZScsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3VwTWVzc2FnZXMudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBwYXJhbXMubWVzc2FnZUlkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgY29udGVudDogcGFyYW1zLmNvbnRlbnQsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgJ1VwZGF0ZSBtZXNzYWdlIHN1Y2Nlc3NmdWxseScsXG4gICAgICByZXMsXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwRXhjZXB0aW9uLCBIdHRwU3RhdHVzLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2Vycy9pbnRlcmZhY2VzL3VzZXInO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHtcbiAgQWRkR3JvdXBSZWNpcGllbnRQYXJhbXMsXG4gIENoZWNrVXNlckdyb3VwUGFyYW1zLFxuICBMZWF2ZUdyb3VwUGFyYW1zLFxuICBSZW1vdmVHcm91cFJlY2lwaWVudFBhcmFtcyxcbn0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgR3JvdXBOb3RGb3VuZEV4Y2VwdGlvbiB9IGZyb20gJy4uL2V4Y2VwdGlvbnMvR3JvdXBOb3RGb3VuZCc7XG5pbXBvcnQgeyBHcm91cFBhcnRpY2lwYW50Tm90Rm91bmQgfSBmcm9tICcuLi9leGNlcHRpb25zL0dyb3VwUGFydGljaXBhbnROb3RGb3VuZCc7XG5pbXBvcnQgeyBOb3RHcm91cE93bmVyRXhjZXB0aW9uIH0gZnJvbSAnLi4vZXhjZXB0aW9ucy9Ob3RHcm91cE93bmVyJztcbmltcG9ydCB7IElHcm91cFJlY2lwaWVudFNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2dyb3VwLXJlY2lwaWVudCc7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlR3JvdXAgfSBmcm9tICcuLi9wcmlzbWEvcHJpc21hLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgR3JvdXBSZWNpcGllbnRTZXJ2aWNlIGltcGxlbWVudHMgSUdyb3VwUmVjaXBpZW50U2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlR3JvdXAsXG4gICAgQEluamVjdChTZXJ2aWNlcy5VU0VSUykgcHJpdmF0ZSB1c2VyU2VydmljZTogSVVzZXJTZXJ2aWNlLFxuICAgIHByaXZhdGUgaHR0cDogSFRUUCxcbiAgKSB7fVxuXG4gIGFzeW5jIGFkZEdyb3VwUmVjaXBpZW50KHBhcmFtczogQWRkR3JvdXBSZWNpcGllbnRQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgdGhpcy5wcmlzbWEuZ3JvdXBzLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHBhcmFtcy5pZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKCFncm91cCkgdGhyb3cgbmV3IEdyb3VwTm90Rm91bmRFeGNlcHRpb24oKTtcbiAgICBpZiAoZ3JvdXAub3duZXJJZCAhPT0gcGFyYW1zLnVzZXJJZClcbiAgICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKCdJbnN1ZmZpY2llbnQgUGVybWlzc2lvbnMnLCBIdHRwU3RhdHVzLkZPUkJJRERFTik7XG4gICAgY29uc3QgcmVjaXBpZW50ID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kVXNlcih7XG4gICAgICB1c2VybmFtZTogcGFyYW1zLnVzZXJuYW1lLFxuICAgIH0pO1xuICAgIGlmICghcmVjaXBpZW50KSB7XG4gICAgICB0aHJvdyBuZXcgSHR0cEV4Y2VwdGlvbignQ2Fubm90IEFkZCBVc2VyJywgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gICAgfVxuICAgIGNvbnN0IHVzZXJJbkdyb3VwID0gYXdhaXQgdGhpcy5pc1VzZXJJbkdyb3VwKHtcbiAgICAgIGlkOiBncm91cC5pZCxcbiAgICAgIHVzZXJJZDogcmVjaXBpZW50LmlkLFxuICAgIH0pO1xuICAgIGlmICh1c2VySW5Hcm91cCkge1xuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1VzZXIgYWxyZWFkeSBpbiBncm91cCcsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICAgIH1cblxuICAgIGNvbnN0IHNhdmVkR3JvdXAgPSBhd2FpdCB0aGlzLnByaXNtYS51c2Vyc0dyb3Vwcy5jcmVhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICBncm91cHNJZDogZ3JvdXAuaWQsXG4gICAgICAgIHVzZXJzSWQ6IHJlY2lwaWVudC5pZCxcbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgdXNlcnM6IHRydWUsXG4gICAgICAgIGdyb3VwczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAnQWRkIHJlY2lwaWVudCBzdWNjZXNzZnVsbHknLFxuICAgICAgeyBncm91cDogc2F2ZWRHcm91cC5ncm91cHMsIHVzZXI6IHNhdmVkR3JvdXAudXNlcnMgfSxcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlbW92ZXMgYSBHcm91cCBSZWNpcGllbnQgYXMgYSBHcm91cCBPd25lci5cbiAgICogRG9lcyBub3QgYWxsb3cgdXNlcnMgdG8gbGVhdmUgdGhlIGdyb3VwLlxuICAgKiBAcGFyYW0gcGFyYW1zIFJlbW92ZUdyb3VwUmVjaXBpZW50UGFyYW1zXG4gICAqIEByZXR1cm5zIFByb21pc2U8R3JvdXA+XG4gICAqL1xuICBhc3luYyByZW1vdmVHcm91cFJlY2lwaWVudChwYXJhbXM6IFJlbW92ZUdyb3VwUmVjaXBpZW50UGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IGlzc3VlcklkLCByZW1vdmVVc2VySWQsIGlkIH0gPSBwYXJhbXM7XG4gICAgY29uc3QgdXNlclRvQmVSZW1vdmVkID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5maW5kVXNlcih7XG4gICAgICBpZDogcmVtb3ZlVXNlcklkLFxuICAgIH0pO1xuICAgIGlmICghdXNlclRvQmVSZW1vdmVkKVxuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1VzZXIgY2Fubm90IGJlIHJlbW92ZWQnLCBIdHRwU3RhdHVzLkJBRF9SRVFVRVNUKTtcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3Vwcy5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdXNlcnNfZ3JvdXBzOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICB1c2VyczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBpZiAoIWdyb3VwKSB0aHJvdyBuZXcgR3JvdXBOb3RGb3VuZEV4Y2VwdGlvbigpO1xuICAgIC8vIE5vdCBncm91cCBvd25lclxuICAgIGlmIChncm91cC5vd25lcklkICE9PSBpc3N1ZXJJZCkgdGhyb3cgbmV3IE5vdEdyb3VwT3duZXJFeGNlcHRpb24oKTtcbiAgICAvLyBUZW1wb3JhcnlcbiAgICBpZiAoZ3JvdXAub3duZXJJZCA9PT0gcmVtb3ZlVXNlcklkKVxuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oXG4gICAgICAgICdDYW5ub3QgcmVtb3ZlIHlvdXJzZWxmIGFzIG93bmVyJyxcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICk7XG4gICAgY29uc3Qgc2F2ZWRHcm91cCA9IGF3YWl0IHRoaXMucHJpc21hLnVzZXJzR3JvdXBzLmRlbGV0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBncm91cHNJZF91c2Vyc0lkOiB7XG4gICAgICAgICAgZ3JvdXBzSWQ6IGdyb3VwLmlkLFxuICAgICAgICAgIHVzZXJzSWQ6IHJlbW92ZVVzZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgY29uc3QgZ3JvdXBVcGRhdGVkID0gYXdhaXQgdGhpcy5wcmlzbWEuZ3JvdXBzLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHsgaWQgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdXNlcnNfZ3JvdXBzOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICB1c2VyczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvd25lcjogdHJ1ZSxcbiAgICAgICAgY3JlYXRvcjogdHJ1ZSxcbiAgICAgICAgbGFzdF9tZXNzYWdlX3NlbnQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGdyb3VwX3VzZXIgPSBncm91cFVwZGF0ZWQudXNlcnNfZ3JvdXBzLm1hcChcbiAgICAgIHVzZXIgPT4gT2JqZWN0LnZhbHVlcyh1c2VyKVswXSxcbiAgICApO1xuICAgIGdyb3VwVXBkYXRlZC51c2Vyc19ncm91cHMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAnQWRkIHJlY2lwaWVudCBzdWNjZXNzZnVsbHknLFxuICAgICAgeyAuLi5ncm91cFVwZGF0ZWQsIHVzZXJzOiBncm91cF91c2VyIH0sXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGlzVXNlckluR3JvdXAoeyBpZCwgdXNlcklkIH06IENoZWNrVXNlckdyb3VwUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3Vwcy5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICB1c2Vyc19ncm91cHM6IHtcbiAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgIHVzZXJzOiB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGlmICghZ3JvdXApIHRocm93IG5ldyBHcm91cE5vdEZvdW5kRXhjZXB0aW9uKCk7XG5cbiAgICBjb25zdCB1c2VyID0gZ3JvdXAudXNlcnNfZ3JvdXBzLmZpbmQoXG4gICAgICB1c2VyR3JvdXAgPT4gdXNlckdyb3VwLnVzZXJzLmlkID09PSB1c2VySWQsXG4gICAgKTtcbiAgICBpZiAoIXVzZXIpIHRocm93IG5ldyBHcm91cFBhcnRpY2lwYW50Tm90Rm91bmQoKTtcbiAgICByZXR1cm4gZ3JvdXA7XG4gIH1cblxuICBhc3luYyBsZWF2ZUdyb3VwKHsgaWQsIHVzZXJJZCB9OiBMZWF2ZUdyb3VwUGFyYW1zKSB7XG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCB0aGlzLmlzVXNlckluR3JvdXAoeyBpZCwgdXNlcklkIH0pO1xuICAgIGNvbnNvbGUubG9nKGBVcGRhdGluZyBHcm91cHNgKTtcbiAgICBpZiAoZ3JvdXAub3duZXJJZCA9PT0gdXNlcklkKVxuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oXG4gICAgICAgICdDYW5ub3QgbGVhdmUgZ3JvdXAgYXMgb3duZXInLFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgKTtcbiAgICBjb25zb2xlLmxvZygnTmV3IFVzZXJzIGluIEdyb3VwIGFmdGVyIGxlYXZpbmcuLi4nKTtcbiAgICBjb25zdCBzYXZlZEdyb3VwID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlcnNHcm91cHMuZGVsZXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGdyb3Vwc0lkX3VzZXJzSWQ6IHtcbiAgICAgICAgICBncm91cHNJZDogZ3JvdXAuaWQsXG4gICAgICAgICAgdXNlcnNJZDogdXNlcklkLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KEh0dHBTdGF0dXMuT0ssICdMZWF2ZSBncm91cCBzdWNjZXNzZnVsbHknKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJSW1hZ2VTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL2ltYWdlLXN0b3JhZ2UvaW1hZ2Utc3RvcmFnZSc7XG5pbXBvcnQgeyBVc2VyTm90Rm91bmRFeGNlcHRpb24gfSBmcm9tICcuLi8uLi91c2Vycy9leGNlcHRpb25zL1VzZXJOb3RGb3VuZCc7XG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi8uLi91c2Vycy9pbnRlcmZhY2VzL3VzZXInO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi8uLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgZ2VuZXJhdGVVVUlEVjQgfSBmcm9tICcuLi8uLi91dGlscy9oZWxwZXJzJztcbmltcG9ydCB7IEdyb3VwLCBVc2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZW9ybSc7XG5pbXBvcnQge1xuICBBY2Nlc3NQYXJhbXMsXG4gIEF0dGFjaG1lbnQsXG4gIENyZWF0ZUdyb3VwUGFyYW1zLFxuICBGZXRjaEdyb3Vwc1BhcmFtcyxcbiAgVHJhbnNmZXJPd25lclBhcmFtcyxcbiAgVXBkYXRlR3JvdXBEZXRhaWxzUGFyYW1zLFxufSBmcm9tICcuLi8uLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBHcm91cE5vdEZvdW5kRXhjZXB0aW9uIH0gZnJvbSAnLi4vZXhjZXB0aW9ucy9Hcm91cE5vdEZvdW5kJztcbmltcG9ydCB7IEdyb3VwT3duZXJUcmFuc2ZlckV4Y2VwdGlvbiB9IGZyb20gJy4uL2V4Y2VwdGlvbnMvR3JvdXBPd25lclRyYW5zZmVyJztcbmltcG9ydCB7IElHcm91cFNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL2dyb3VwJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VHcm91cCB9IGZyb20gJy4uL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm91cFNlcnZpY2UgaW1wbGVtZW50cyBJR3JvdXBTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcmlzbWE6IFByaXNtYVNlcnZpY2VHcm91cCxcbiAgICBASW5qZWN0KFNlcnZpY2VzLlVTRVJTKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclNlcnZpY2U6IElVc2VyU2VydmljZSxcbiAgICBASW5qZWN0KFNlcnZpY2VzLklNQUdFX1VQTE9BRF9TRVJWSUNFKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgaW1hZ2VTdG9yYWdlU2VydmljZTogSUltYWdlU3RvcmFnZVNlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBIVFRQLFxuICApIHt9XG5cbiAgYXN5bmMgY3JlYXRlR3JvdXAocGFyYW1zOiBDcmVhdGVHcm91cFBhcmFtcykge1xuICAgIGNvbnN0IHsgY3JlYXRvciwgdGl0bGUsIHVzZXJzIH0gPSBwYXJhbXM7XG4gICAgdXNlcnMucHVzaChjcmVhdG9yKTtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jIHR4ID0+IHtcbiAgICAgIGNvbnN0IGdyb3VwQ3JlYXRlZCA9IGF3YWl0IHR4Lmdyb3Vwcy5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7IG93bmVySWQ6ICtjcmVhdG9yLCBjcmVhdG9ySWQ6ICtjcmVhdG9yLCB0aXRsZSB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBmaWx0ZXJVc2VyID0gdXNlcnMubWFwKHVzZXIgPT4gKHtcbiAgICAgICAgZ3JvdXBzSWQ6IGdyb3VwQ3JlYXRlZC5pZCxcbiAgICAgICAgdXNlcnNJZDogK3VzZXIsXG4gICAgICB9KSk7XG4gICAgICBjb25zdCBhZGRVc2VyVG9Hcm91cCA9IGF3YWl0IHR4LnVzZXJzR3JvdXBzLmNyZWF0ZU1hbnkoe1xuICAgICAgICBkYXRhOiBmaWx0ZXJVc2VyLFxuICAgICAgfSk7XG4gICAgICBjb25zdCBncm91cF91c2VycyA9IGF3YWl0IHR4Lmdyb3Vwcy5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZTogeyBpZDogZ3JvdXBDcmVhdGVkLmlkIH0sXG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHVzZXJzX2dyb3Vwczoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIHVzZXJzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCBmaWx0ZXJHcm91cFVzZXJzID0gZ3JvdXBfdXNlcnMudXNlcnNfZ3JvdXBzLm1hcChcbiAgICAgICAgdXNlciA9PiBgJHt1c2VyLnVzZXJzLmZpcnN0TmFtZX0gJHt1c2VyLnVzZXJzLmxhc3ROYW1lfWAsXG4gICAgICApO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ0NyZWF0ZSBncm91cCBzdWNjZXNmdWxseScsXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogZ3JvdXBDcmVhdGVkLnRpdGxlLFxuICAgICAgICAgIHVzZXJzOiBmaWx0ZXJHcm91cFVzZXJzLFxuICAgICAgICB9LFxuICAgICAgKTtcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIGdldEdyb3VwcyhwYXlsb2FkOiB7IHVzZXJJZDogbnVtYmVyIH0pOiBQcm9taXNlPGFueT4ge1xuICAgIC8vIGNvbnN0IGEgPSB0aGlzLnByaXNtYS5ncm91cHNcbiAgICAvLyAgIC5jcmVhdGVRdWVyeUJ1aWxkZXIoJ2dyb3VwJylcbiAgICAvLyAgIC5sZWZ0Sm9pbkFuZFNlbGVjdCgnZ3JvdXAudXNlcnMnLCAndXNlcicpXG4gICAgLy8gICAud2hlcmUoJ3VzZXIuaWQgSU4gKDp1c2VycyknLCB7IHVzZXJzOiBbcGFyYW1zLnVzZXJJZF0gfSlcbiAgICAvLyAgIC5sZWZ0Sm9pbkFuZFNlbGVjdCgnZ3JvdXAudXNlcnMnLCAndXNlcnMnKVxuICAgIC8vICAgLmxlZnRKb2luQW5kU2VsZWN0KCdncm91cC5jcmVhdG9yJywgJ2NyZWF0b3InKVxuICAgIC8vICAgLmxlZnRKb2luQW5kU2VsZWN0KCdncm91cC5vd25lcicsICdvd25lcicpXG4gICAgLy8gICAubGVmdEpvaW5BbmRTZWxlY3QoJ2dyb3VwLmxhc3RNZXNzYWdlU2VudCcsICdsYXN0TWVzc2FnZVNlbnQnKVxuICAgIC8vICAgLmxlZnRKb2luQW5kU2VsZWN0KCd1c2Vycy5wcm9maWxlJywgJ3VzZXJzUHJvZmlsZScpXG4gICAgLy8gICAubGVmdEpvaW5BbmRTZWxlY3QoJ3VzZXJzLnByZXNlbmNlJywgJ3VzZXJzUHJlc2VuY2UnKVxuICAgIC8vICAgLm9yZGVyQnkoJ2dyb3VwLmxhc3RNZXNzYWdlU2VudEF0JywgJ0RFU0MnKVxuICAgIC8vICAgLmdldE1hbnkoKTtcbiAgICB0cnkge1xuICAgICAgY29uc3QgZ3JvdXBzID0gYXdhaXQgdGhpcy5wcmlzbWEuZ3JvdXBzLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICB1c2Vyc19ncm91cHM6IHtcbiAgICAgICAgICAgIHNvbWU6IHtcbiAgICAgICAgICAgICAgdXNlcnNJZDogcGF5bG9hZC51c2VySWQsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICB1c2Vyc19ncm91cHM6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICB1c2VyczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBvd25lcjogdHJ1ZSxcbiAgICAgICAgICBjcmVhdG9yOiB0cnVlLFxuICAgICAgICAgIGxhc3RfbWVzc2FnZV9zZW50OiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBjb25zdCByZW5hbWVHcm91cFByb3BlcnRpZXMgPSBncm91cHMubWFwKGdyb3VwID0+IHtcbiAgICAgICAgZ3JvdXBbJ3VzZXJzJ10gPSBncm91cC51c2Vyc19ncm91cHM7XG4gICAgICAgIGRlbGV0ZSBncm91cC51c2Vyc19ncm91cHM7XG4gICAgICAgIHJldHVybiBncm91cDtcbiAgICAgIH0pO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ0NyZWF0ZSBncm91cCBzdWNjZXNmdWxseScsXG4gICAgICAgIHJlbmFtZUdyb3VwUHJvcGVydGllcyxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIGNvbnNvbGUubG9nKGVycik7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZmluZEdyb3VwQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCBncm91cCA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3Vwcy5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7IGlkIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHVzZXJzX2dyb3Vwczoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgdXNlcnM6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3duZXI6IHRydWUsXG4gICAgICAgIGNyZWF0b3I6IHRydWUsXG4gICAgICAgIGxhc3RfbWVzc2FnZV9zZW50OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBncm91cF91c2VyID0gZ3JvdXAudXNlcnNfZ3JvdXBzLm1hcCh1c2VyID0+IE9iamVjdC52YWx1ZXModXNlcilbMF0pO1xuICAgIGdyb3VwLnVzZXJzX2dyb3VwcyA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KEh0dHBTdGF0dXMuT0ssICdDcmVhdGUgZ3JvdXAgc3VjY2VzZnVsbHknLCB7XG4gICAgICAuLi5ncm91cCxcbiAgICAgIHVzZXJzOiBncm91cF91c2VyLFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgc2F2ZUdyb3VwKGdyb3VwOiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnByaXNtYS5ncm91cHMuY3JlYXRlKHsgZGF0YTogZ3JvdXAgfSk7XG4gIH1cblxuICBhc3luYyBoYXNBY2Nlc3MoeyBpZCwgdXNlcklkIH06IEFjY2Vzc1BhcmFtcyk6IFByb21pc2U8VXNlciB8IHVuZGVmaW5lZD4ge1xuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgdGhpcy5maW5kR3JvdXBCeUlkKGlkKTtcbiAgICBpZiAoIWdyb3VwKSB0aHJvdyBuZXcgR3JvdXBOb3RGb3VuZEV4Y2VwdGlvbigpO1xuICAgIHJldHVybiBncm91cC51c2Vycy5maW5kKHVzZXIgPT4gdXNlci5pZCA9PT0gdXNlcklkKTtcbiAgfVxuXG4gIGFzeW5jIHRyYW5zZmVyR3JvdXBPd25lcih7XG4gICAgdXNlcklkLFxuICAgIGdyb3VwSWQsXG4gICAgbmV3T3duZXJJZCxcbiAgfTogVHJhbnNmZXJPd25lclBhcmFtcyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgZ3JvdXAgPSBhd2FpdCB0aGlzLmZpbmRHcm91cEJ5SWQoZ3JvdXBJZCk7XG4gICAgaWYgKCFncm91cCkgdGhyb3cgbmV3IEdyb3VwTm90Rm91bmRFeGNlcHRpb24oKTtcbiAgICBpZiAoZ3JvdXAub3duZXJJZCAhPT0gdXNlcklkKVxuICAgICAgdGhyb3cgbmV3IEdyb3VwT3duZXJUcmFuc2ZlckV4Y2VwdGlvbignSW5zdWZmaWNpZW50IFBlcm1pc3Npb25zJyk7XG4gICAgaWYgKGdyb3VwLm93bmVySWQgPT09IG5ld093bmVySWQpXG4gICAgICB0aHJvdyBuZXcgR3JvdXBPd25lclRyYW5zZmVyRXhjZXB0aW9uKFxuICAgICAgICAnQ2Fubm90IFRyYW5zZmVyIE93bmVyIHRvIHlvdXJzZWxmJyxcbiAgICAgICk7XG4gICAgLy8gY29uc3QgbmV3T3duZXIgPSBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmZpbmRVc2VyKHsgaWQ6IG5ld093bmVySWQgfSk7XG4gICAgLy8gaWYgKCFuZXdPd25lcikgdGhyb3cgbmV3IFVzZXJOb3RGb3VuZEV4Y2VwdGlvbigpO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3Vwcy51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGdyb3VwLmlkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgb3duZXJJZDogbmV3T3duZXJJZCxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHVzZXJzX2dyb3Vwczoge1xuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgdXNlcnM6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgb3duZXI6IHRydWUsXG4gICAgICAgIGNyZWF0b3I6IHRydWUsXG4gICAgICAgIGxhc3RfbWVzc2FnZV9zZW50OiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICBjb25zdCBncm91cF91c2VyID0gcmVzLnVzZXJzX2dyb3Vwcy5tYXAodXNlciA9PiBPYmplY3QudmFsdWVzKHVzZXIpWzBdKTtcbiAgICByZXMudXNlcnNfZ3JvdXBzID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgJ1RyYW5zZmVyIGdyb3VwIG93bmVyIHN1Y2Nlc2Z1bGx5JyxcbiAgICAgIHtcbiAgICAgICAgLi4ucmVzLFxuICAgICAgICB1c2VyczogZ3JvdXBfdXNlcixcbiAgICAgIH0sXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZURldGFpbHMocGFyYW1zOiBVcGRhdGVHcm91cERldGFpbHNQYXJhbXMpOiBQcm9taXNlPGFueT4ge1xuICAgIGNvbnN0IGdyb3VwID0gYXdhaXQgdGhpcy5maW5kR3JvdXBCeUlkKHBhcmFtcy5pZCk7XG4gICAgaWYgKCFncm91cCkgdGhyb3cgbmV3IEdyb3VwTm90Rm91bmRFeGNlcHRpb24oKTtcbiAgICBpZiAocGFyYW1zLmF2YXRhcikge1xuICAgICAgY29uc3Qga2V5ID0gZ2VuZXJhdGVVVUlEVjQoKTtcbiAgICAgIGF3YWl0IHRoaXMuaW1hZ2VTdG9yYWdlU2VydmljZS51cGxvYWQoeyBrZXksIGZpbGU6IHBhcmFtcy5hdmF0YXIgfSk7XG4gICAgICBncm91cC5hdmF0YXIgPSBrZXk7XG4gICAgfVxuICAgIGdyb3VwLnRpdGxlID0gcGFyYW1zLnRpdGxlID8/IGdyb3VwLnRpdGxlO1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IHRoaXMucHJpc21hLmdyb3Vwcy51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGdyb3VwLmlkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgdGl0bGU6IGdyb3VwLnRpdGxlLFxuICAgICAgfSxcbiAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgdXNlcnNfZ3JvdXBzOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICB1c2VyczogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBvd25lcjogdHJ1ZSxcbiAgICAgICAgY3JlYXRvcjogdHJ1ZSxcbiAgICAgICAgbGFzdF9tZXNzYWdlX3NlbnQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIGNvbnN0IGdyb3VwX3VzZXIgPSByZXMudXNlcnNfZ3JvdXBzLm1hcCh1c2VyID0+IE9iamVjdC52YWx1ZXModXNlcilbMF0pO1xuICAgIHJlcy51c2Vyc19ncm91cHMgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLk9LLCAnVXBkYXRlIGdyb3VwIHN1Y2Nlc2Z1bGx5Jywge1xuICAgICAgLi4ucmVzLFxuICAgICAgdXNlcnM6IGdyb3VwX3VzZXIsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFMzIH0gZnJvbSAnQGF3cy1zZGsvY2xpZW50LXMzJztcbmltcG9ydCB7IEltYWdlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2ltYWdlLXN0b3JhZ2Uuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5TUEFDRVNfQ0xJRU5ULFxuICAgICAgdXNlVmFsdWU6IG5ldyBTMyh7XG4gICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgYWNjZXNzS2V5SWQ6IHByb2Nlc3MuZW52WydTUEFDRVNfS0VZJ10sXG4gICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBwcm9jZXNzLmVudlsnU1BBQ0VTX1NFQ1JFVF9LRVknXSxcbiAgICAgICAgfSxcbiAgICAgICAgZW5kcG9pbnQ6ICdodHRwczovL2FtczMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbScsXG4gICAgICAgIHJlZ2lvbjogJ2FtczMnLFxuICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5JTUFHRV9VUExPQURfU0VSVklDRSxcbiAgICAgIHVzZUNsYXNzOiBJbWFnZVN0b3JhZ2VTZXJ2aWNlLFxuICAgIH0sXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5TUEFDRVNfQ0xJRU5ULFxuICAgICAgdXNlVmFsdWU6IG5ldyBTMyh7XG4gICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgYWNjZXNzS2V5SWQ6IHByb2Nlc3MuZW52WydTUEFDRVNfS0VZJ10sXG4gICAgICAgICAgc2VjcmV0QWNjZXNzS2V5OiBwcm9jZXNzLmVudlsnU1BBQ0VTX1NFQ1JFVF9LRVknXSxcbiAgICAgICAgfSxcbiAgICAgICAgZW5kcG9pbnQ6ICdodHRwczovL2FtczMuZGlnaXRhbG9jZWFuc3BhY2VzLmNvbScsXG4gICAgICAgIHJlZ2lvbjogJ2FtczMnLFxuICAgICAgfSksXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5JTUFHRV9VUExPQURfU0VSVklDRSxcbiAgICAgIHVzZUNsYXNzOiBJbWFnZVN0b3JhZ2VTZXJ2aWNlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEltYWdlU3RvcmFnZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0LCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgSUltYWdlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuL2ltYWdlLXN0b3JhZ2UnO1xuaW1wb3J0IHsgUzMgfSBmcm9tICdAYXdzLXNkay9jbGllbnQtczMnO1xuaW1wb3J0IHtcbiAgVXBsb2FkR3JvdXBNZXNzYWdlQXR0YWNobWVudFBhcmFtcyxcbiAgVXBsb2FkSW1hZ2VQYXJhbXMsXG4gIFVwbG9hZE1lc3NhZ2VBdHRhY2htZW50UGFyYW1zLFxufSBmcm9tICcuLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBjb21wcmVzc0ltYWdlIH0gZnJvbSAnLi4vdXRpbHMvaGVscGVycyc7XG5pbXBvcnQgeyBHcm91cE1lc3NhZ2VBdHRhY2htZW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZW9ybSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBJbWFnZVN0b3JhZ2VTZXJ2aWNlIGltcGxlbWVudHMgSUltYWdlU3RvcmFnZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNlcnZpY2VzLlNQQUNFU19DTElFTlQpXG4gICAgcHJpdmF0ZSByZWFkb25seSBzcGFjZXNDbGllbnQ6IFMzLFxuICApIHt9XG5cbiAgdXBsb2FkKHBhcmFtczogVXBsb2FkSW1hZ2VQYXJhbXMpIHtcbiAgICByZXR1cm4gdGhpcy5zcGFjZXNDbGllbnQucHV0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogJ2NodWFjaGF0JyxcbiAgICAgIEtleTogcGFyYW1zLmtleSxcbiAgICAgIEJvZHk6IHBhcmFtcy5maWxlLmJ1ZmZlcixcbiAgICAgIEFDTDogJ3B1YmxpYy1yZWFkJyxcbiAgICAgIENvbnRlbnRUeXBlOiBwYXJhbXMuZmlsZS5taW1ldHlwZSxcbiAgICB9KTtcbiAgfVxuXG4gIGFzeW5jIHVwbG9hZE1lc3NhZ2VBdHRhY2htZW50KHBhcmFtczogVXBsb2FkTWVzc2FnZUF0dGFjaG1lbnRQYXJhbXMpIHtcbiAgICB0aGlzLnNwYWNlc0NsaWVudC5wdXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiAnY2h1YWNoYXQnLFxuICAgICAgS2V5OiBgb3JpZ2luYWwvJHtwYXJhbXMubWVzc2FnZUF0dGFjaG1lbnQua2V5fWAsXG4gICAgICBCb2R5OiBwYXJhbXMuZmlsZS5idWZmZXIsXG4gICAgICBBQ0w6ICdwdWJsaWMtcmVhZCcsXG4gICAgICBDb250ZW50VHlwZTogcGFyYW1zLmZpbGUubWltZXR5cGUsXG4gICAgfSk7XG4gICAgYXdhaXQgdGhpcy5zcGFjZXNDbGllbnQucHV0T2JqZWN0KHtcbiAgICAgIEJ1Y2tldDogJ2NodWFjaGF0JyxcbiAgICAgIEtleTogYHByZXZpZXcvJHtwYXJhbXMubWVzc2FnZUF0dGFjaG1lbnQua2V5fWAsXG4gICAgICBCb2R5OiBhd2FpdCBjb21wcmVzc0ltYWdlKHBhcmFtcy5maWxlKSxcbiAgICAgIEFDTDogJ3B1YmxpYy1yZWFkJyxcbiAgICAgIENvbnRlbnRUeXBlOiBwYXJhbXMuZmlsZS5taW1ldHlwZSxcbiAgICB9KTtcbiAgICByZXR1cm4gcGFyYW1zLm1lc3NhZ2VBdHRhY2htZW50O1xuICB9XG5cbiAgYXN5bmMgdXBsb2FkR3JvdXBNZXNzYWdlQXR0YWNobWVudChcbiAgICBwYXJhbXM6IFVwbG9hZEdyb3VwTWVzc2FnZUF0dGFjaG1lbnRQYXJhbXMsXG4gICk6IFByb21pc2U8R3JvdXBNZXNzYWdlQXR0YWNobWVudD4ge1xuICAgIHRoaXMuc3BhY2VzQ2xpZW50LnB1dE9iamVjdCh7XG4gICAgICBCdWNrZXQ6ICdjaHVhY2hhdCcsXG4gICAgICBLZXk6IGBvcmlnaW5hbC8ke3BhcmFtcy5tZXNzYWdlQXR0YWNobWVudC5rZXl9YCxcbiAgICAgIEJvZHk6IHBhcmFtcy5maWxlLmJ1ZmZlcixcbiAgICAgIEFDTDogJ3B1YmxpYy1yZWFkJyxcbiAgICAgIENvbnRlbnRUeXBlOiBwYXJhbXMuZmlsZS5taW1ldHlwZSxcbiAgICB9KTtcbiAgICBhd2FpdCB0aGlzLnNwYWNlc0NsaWVudC5wdXRPYmplY3Qoe1xuICAgICAgQnVja2V0OiAnY2h1YWNoYXQnLFxuICAgICAgS2V5OiBgcHJldmlldy8ke3BhcmFtcy5tZXNzYWdlQXR0YWNobWVudC5rZXl9YCxcbiAgICAgIEJvZHk6IGF3YWl0IGNvbXByZXNzSW1hZ2UocGFyYW1zLmZpbGUpLFxuICAgICAgQUNMOiAncHVibGljLXJlYWQnLFxuICAgICAgQ29udGVudFR5cGU6IHBhcmFtcy5maWxlLm1pbWV0eXBlLFxuICAgIH0pO1xuICAgIHJldHVybiBwYXJhbXMubWVzc2FnZUF0dGFjaG1lbnQ7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdyb3VwTWVzc2FnZUF0dGFjaG1lbnQsIE1lc3NhZ2VBdHRhY2htZW50IH0gZnJvbSAnLi4vdXRpbHMvdHlwZW9ybSc7XG5pbXBvcnQge1xuICBVcGxvYWRHcm91cE1lc3NhZ2VBdHRhY2htZW50UGFyYW1zLFxuICBVcGxvYWRJbWFnZVBhcmFtcyxcbiAgVXBsb2FkTWVzc2FnZUF0dGFjaG1lbnRQYXJhbXMsXG59IGZyb20gJy4uL3V0aWxzL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJSW1hZ2VTdG9yYWdlU2VydmljZSB7XG4gIHVwbG9hZChwYXJhbXM6IFVwbG9hZEltYWdlUGFyYW1zKTtcbiAgdXBsb2FkTWVzc2FnZUF0dGFjaG1lbnQoXG4gICAgcGFyYW1zOiBVcGxvYWRNZXNzYWdlQXR0YWNobWVudFBhcmFtcyxcbiAgKTogUHJvbWlzZTxNZXNzYWdlQXR0YWNobWVudD47XG4gIHVwbG9hZEdyb3VwTWVzc2FnZUF0dGFjaG1lbnQoXG4gICAgcGFyYW1zOiBVcGxvYWRHcm91cE1lc3NhZ2VBdHRhY2htZW50UGFyYW1zLFxuICApOiBQcm9taXNlPEdyb3VwTWVzc2FnZUF0dGFjaG1lbnQ+O1xufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgSW1hZ2VTdG9yYWdlTW9kdWxlIH0gZnJvbSAnLi4vaW1hZ2Utc3RvcmFnZS9pbWFnZS1zdG9yYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBNZXNzYWdlQXR0YWNobWVudHNTZXJ2aWNlIH0gZnJvbSAnLi9tZXNzYWdlLWF0dGFjaG1lbnRzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpc21hTW9kdWxlTWVzc2FnZUF0dGFjaG1lbnRzIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBJbWFnZVN0b3JhZ2VNb2R1bGUsXG4gIF0sXG4gIHByb3ZpZGVyczogW1xuICAgIFByaXNtYU1vZHVsZU1lc3NhZ2VBdHRhY2htZW50cyxcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5NRVNTQUdFX0FUVEFDSE1FTlRTLFxuICAgICAgdXNlQ2xhc3M6IE1lc3NhZ2VBdHRhY2htZW50c1NlcnZpY2UsXG4gICAgfSxcbiAgXSxcbiAgZXhwb3J0czogW1xuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNlcnZpY2VzLk1FU1NBR0VfQVRUQUNITUVOVFMsXG4gICAgICB1c2VDbGFzczogTWVzc2FnZUF0dGFjaG1lbnRzU2VydmljZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlQXR0YWNobWVudHNNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEluamVjdFJlcG9zaXRvcnkgfSBmcm9tICdAbmVzdGpzL3R5cGVvcm0nO1xuaW1wb3J0IHsgUmVwb3NpdG9yeSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgSUltYWdlU3RvcmFnZVNlcnZpY2UgfSBmcm9tICcuLi9pbWFnZS1zdG9yYWdlL2ltYWdlLXN0b3JhZ2UnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgR3JvdXBNZXNzYWdlQXR0YWNobWVudCwgTWVzc2FnZUF0dGFjaG1lbnQgfSBmcm9tICcuLi91dGlscy90eXBlb3JtJztcbmltcG9ydCB7IEF0dGFjaG1lbnQgfSBmcm9tICcuLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBJTWVzc2FnZUF0dGFjaG1lbnRzU2VydmljZSB9IGZyb20gJy4vbWVzc2FnZS1hdHRhY2htZW50cyc7XG5pbXBvcnQgeyBQcmlzbWFNb2R1bGVNZXNzYWdlQXR0YWNobWVudHMgfSBmcm9tICcuL3ByaXNtYS9wcmlzbWEubW9kdWxlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VBdHRhY2htZW50c1NlcnZpY2UgaW1wbGVtZW50cyBJTWVzc2FnZUF0dGFjaG1lbnRzU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJpc21hOiBQcmlzbWFNb2R1bGVNZXNzYWdlQXR0YWNobWVudHMsXG4gICAgLy8gQEluamVjdFJlcG9zaXRvcnkoTWVzc2FnZUF0dGFjaG1lbnQpXG4gICAgLy8gcHJpdmF0ZSByZWFkb25seSBhdHRhY2htZW50UmVwb3NpdG9yeTogUmVwb3NpdG9yeTxNZXNzYWdlQXR0YWNobWVudD4sXG4gICAgLy8gQEluamVjdFJlcG9zaXRvcnkoR3JvdXBNZXNzYWdlQXR0YWNobWVudClcbiAgICAvLyBwcml2YXRlIHJlYWRvbmx5IGdyb3VwQXR0YWNobWVudFJlcG9zaXRvcnk6IFJlcG9zaXRvcnk8R3JvdXBNZXNzYWdlQXR0YWNobWVudD4sXG4gICAgQEluamVjdChTZXJ2aWNlcy5JTUFHRV9VUExPQURfU0VSVklDRSlcbiAgICBwcml2YXRlIHJlYWRvbmx5IGltYWdlVXBsb2FkU2VydmljZTogSUltYWdlU3RvcmFnZVNlcnZpY2UsXG4gICkge31cbiAgY3JlYXRlKGF0dGFjaG1lbnRzOiBBdHRhY2htZW50W10pIHtcbiAgICAvLyBjb25zdCBwcm9taXNlID0gYXR0YWNobWVudHMubWFwKGF0dGFjaG1lbnQgPT4ge1xuICAgIC8vICAgY29uc3QgbmV3QXR0YWNobWVudCA9IHRoaXMucHJpc21hLmNyZWF0ZSgpO1xuICAgIC8vICAgcmV0dXJuIHRoaXMuYXR0YWNobWVudFJlcG9zaXRvcnlcbiAgICAvLyAgICAgLnNhdmUobmV3QXR0YWNobWVudClcbiAgICAvLyAgICAgLnRoZW4obWVzc2FnZUF0dGFjaG1lbnQgPT5cbiAgICAvLyAgICAgICB0aGlzLmltYWdlVXBsb2FkU2VydmljZS51cGxvYWRNZXNzYWdlQXR0YWNobWVudCh7XG4gICAgLy8gICAgICAgICBtZXNzYWdlQXR0YWNobWVudCxcbiAgICAvLyAgICAgICAgIGZpbGU6IGF0dGFjaG1lbnQsXG4gICAgLy8gICAgICAgfSksXG4gICAgLy8gICAgICk7XG4gICAgLy8gfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHVuZGVmaW5lZCk7XG4gIH1cblxuICBjcmVhdGVHcm91cEF0dGFjaG1lbnRzKFxuICAgIGF0dGFjaG1lbnRzOiBBdHRhY2htZW50W10sXG4gICk6IFByb21pc2U8R3JvdXBNZXNzYWdlQXR0YWNobWVudFtdPiB7XG4gICAgLy8gY29uc3QgcHJvbWlzZSA9IGF0dGFjaG1lbnRzLm1hcChhdHRhY2htZW50ID0+IHtcbiAgICAvLyAgIGNvbnN0IG5ld0F0dGFjaG1lbnQgPSB0aGlzLmdyb3VwQXR0YWNobWVudFJlcG9zaXRvcnkuY3JlYXRlKCk7XG4gICAgLy8gICByZXR1cm4gdGhpcy5ncm91cEF0dGFjaG1lbnRSZXBvc2l0b3J5XG4gICAgLy8gICAgIC5zYXZlKG5ld0F0dGFjaG1lbnQpXG4gICAgLy8gICAgIC50aGVuKG1lc3NhZ2VBdHRhY2htZW50ID0+XG4gICAgLy8gICAgICAgdGhpcy5pbWFnZVVwbG9hZFNlcnZpY2UudXBsb2FkR3JvdXBNZXNzYWdlQXR0YWNobWVudCh7XG4gICAgLy8gICAgICAgICBtZXNzYWdlQXR0YWNobWVudCxcbiAgICAvLyAgICAgICAgIGZpbGU6IGF0dGFjaG1lbnQsXG4gICAgLy8gICAgICAgfSksXG4gICAgLy8gICAgICk7XG4gICAgLy8gfSk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHVuZGVmaW5lZCk7XG4gIH1cblxuICBkZWxldGVBbGxBdHRhY2htZW50cyhhdHRhY2htZW50czogTWVzc2FnZUF0dGFjaG1lbnRbXSkge1xuICAgIC8vIGNvbnN0IHByb21pc2UgPSBhdHRhY2htZW50cy5tYXAoYXR0YWNobWVudCA9PlxuICAgIC8vICAgdGhpcy5hdHRhY2htZW50UmVwb3NpdG9yeS5kZWxldGUoYXR0YWNobWVudC5rZXkpLFxuICAgIC8vICk7XG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHVuZGVmaW5lZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZU1lc3NhZ2VBdHRhY2htZW50cyB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnO1xuXG5AR2xvYmFsKClcbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtQcmlzbWFTZXJ2aWNlTWVzc2FnZUF0dGFjaG1lbnRzXSxcbiAgZXhwb3J0czogW1ByaXNtYVNlcnZpY2VNZXNzYWdlQXR0YWNobWVudHNdLFxufSlcbmV4cG9ydCBjbGFzcyBQcmlzbWFNb2R1bGVNZXNzYWdlQXR0YWNobWVudHMge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNeVNRTENsaWVudCB9IGZyb20gJ0Bjb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpc21hU2VydmljZU1lc3NhZ2VBdHRhY2htZW50cyBleHRlbmRzIE15U1FMQ2xpZW50IHtcbiAgY2xlYW5EYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kdHJhbnNhY3Rpb24oW10pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgICBJc05vdEVtcHR5LFxuICAgIElzSW50LFxuICAgIElzT3B0aW9uYWwsXG4gICAgQXJyYXlOb3RFbXB0eSxcbiAgICBWYWxpZGF0ZU5lc3RlZCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCB7RmlsZUF0dGFjaGVkRHRvfSBmcm9tICcuL2ZpbGVfYXR0YWNoZWQuZHRvJztcblxuZXhwb3J0IGNsYXNzIEF0dGFjaG1lbnREdG8ge1xuICAgIEBJc0ludCgpXG4gICAgQElzT3B0aW9uYWwoKVxuICAgIGNyZWF0ZWRCeTogbnVtYmVyO1xuXG4gICAgQElzSW50KClcbiAgICBASXNOb3RFbXB0eSgpXG4gICAgbWVzc2FnZUlkOiBudW1iZXI7XG5cbiAgICBASXNPcHRpb25hbCgpXG4gICAgQFR5cGUoKCkgPT4gRmlsZUF0dGFjaGVkRHRvKVxuICAgIGF0dGFjaG1lbnRzXG59XG4iLCJpbXBvcnQgeyBcbiAgSXNOb3RFbXB0eSxcbiAgSXNJbnQsXG4gIElzT3B0aW9uYWxcbiB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBEZWxldGVNZXNzYWdlRHRvIHtcbiAgQElzSW50KClcbiAgQElzT3B0aW9uYWwoKVxuICBjcmVhdGVkQnk6IG51bWJlcjtcblxuICBASXNJbnQoKVxuICBASXNOb3RFbXB0eSgpXG4gIGlkOiBudW1iZXI7XG5cbiAgQElzSW50KClcbiAgQElzTm90RW1wdHkoKVxuICBhdXRob3JJZDogbnVtYmVyO1xuXG4gIEBJc0ludCgpXG4gIEBJc05vdEVtcHR5KClcbiAgY29udmVyc2F0aW9uSWQ6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IFxuICBJc05vdEVtcHR5LFxuICBJc0ludCxcbiAgSXNPcHRpb25hbCxcbiAgSXNTdHJpbmdcbiB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBFZGl0TWVzc2FnZUR0byB7XG4gIEBJc0ludCgpXG4gIEBJc09wdGlvbmFsKClcbiAgdXBkYXRlZEJ5OiBudW1iZXI7XG5cbiAgQElzSW50KClcbiAgQElzTm90RW1wdHkoKVxuICBpZDogbnVtYmVyO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgY29udGVudDogc3RyaW5nO1xuXG4gIEBJc0ludCgpXG4gIEBJc05vdEVtcHR5KClcbiAgYXV0aG9ySWQ6IG51bWJlcjtcblxuICBASXNJbnQoKVxuICBASXNOb3RFbXB0eSgpXG4gIGNvbnZlcnNhdGlvbklkOiBudW1iZXI7XG59XG4iLCJpbXBvcnQge1xuICAgIElzTm90RW1wdHksXG4gICAgSXNPcHRpb25hbCxcbiAgICBJc1N0cmluZyxcbiAgICBJc0ludCxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIEZpbGVBdHRhY2hlZER0byB7XG4gICAgQElzSW50KClcbiAgICBASXNPcHRpb25hbCgpXG4gICAgY3JlYXRlZEJ5OiBudW1iZXI7XG5cbiAgICBASXNTdHJpbmcoKVxuICAgIEBJc05vdEVtcHR5KClcbiAgICBmaWxlTmFtZTogc3RyaW5nO1xuXG4gICAgQElzU3RyaW5nKClcbiAgICBASXNOb3RFbXB0eSgpXG4gICAgYmFzZVVybDogc3RyaW5nO1xufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9hdHRhY2htZW50LmR0byc7XG5leHBvcnQgKiBmcm9tICcuL21lc3NhZ2UuZHRvJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsZV9hdHRhY2hlZC5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9tZXNzYWdlLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL2RlbGV0ZV9tZXNzYWdlLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL2VkaXRfbWVzc2FnZS5kdG8nOyIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBcbiAgSXNOb3RFbXB0eSxcbiAgSXNTdHJpbmcsXG4gIElzSW50LFxuICBJc09wdGlvbmFsLFxuICBBcnJheU5vdEVtcHR5LFxuICBWYWxpZGF0ZU5lc3RlZCxcbiB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBBdHRhY2htZW50RHRvIH0gZnJvbSAnLi9pbmRleCc7XG5cbmV4cG9ydCBjbGFzcyBNZXNzYWdlRHRvIHtcbiAgQElzSW50KClcbiAgQElzT3B0aW9uYWwoKVxuICBjcmVhdGVkQnk6IG51bWJlcjtcblxuICBASXNOb3RFbXB0eSgpXG4gIEBJc1N0cmluZygpXG4gIGNvbnRlbnQ6IHN0cmluZztcblxuICBASXNJbnQoKVxuICBASXNOb3RFbXB0eSgpXG4gIGF1dGhvcklkOiBudW1iZXI7XG5cbiAgQElzSW50KClcbiAgQElzTm90RW1wdHkoKVxuICBjb252ZXJzYXRpb25JZDogbnVtYmVyO1xuXG4gIEBJc09wdGlvbmFsKClcbiAgQFR5cGUoKCkgPT4gQXR0YWNobWVudER0bylcbiAgYXR0YWNobWVudHNcbn1cbiIsImltcG9ydCB7XG4gIENvbnRyb2xsZXIsXG4gIEluamVjdCxcbiAgVXNlRmlsdGVycyxcbiAgVmFsaWRhdGlvblBpcGUsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE1lc3NhZ2VQYXR0ZXJuLCBQYXlsb2FkIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IElNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2VzJztcbmltcG9ydCB7IE1lc3NhZ2VEdG8sIERlbGV0ZU1lc3NhZ2VEdG8sIEVkaXRNZXNzYWdlRHRvIH0gZnJvbSAnLi9kdG8nO1xuaW1wb3J0IHsgUnBjVmFsaWRhdGlvbkZpbHRlciB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJ0BhcHBzL2NoYXQvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEV2ZW50RW1pdHRlcjIgfSBmcm9tICdAbmVzdGpzL2V2ZW50LWVtaXR0ZXInO1xuXG5AQ29udHJvbGxlcignbWVzc2FnZXMnKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIEBJbmplY3QoU2VydmljZXMuTUVTU0FHRVMpXG4gICAgcHJpdmF0ZSByZWFkb25seSBtZXNzYWdlc1NlcnZpY2U6IElNZXNzYWdlc1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBldmVudEVtaXR0ZXI6IEV2ZW50RW1pdHRlcjIsXG4gICkgeyB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKHsgY21kOiAnZ2V0X21lc3NhZ2VzX2Zyb21fY29udmVyc2F0aW9uJyB9KVxuICBhc3luYyBnZXRNZXNzYWdlc0Zyb21Db252ZXJzYXRpb24ocXVlcnk6IGFueSkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLm1lc3NhZ2VzU2VydmljZS5nZXRNZXNzYWdlcyhxdWVyeSk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2FkZF9tZXNzYWdlJylcbiAgQFVzZUZpbHRlcnMobmV3IFJwY1ZhbGlkYXRpb25GaWx0ZXIoKSlcbiAgYXN5bmMgYWRkTWVzc2FnZShAUGF5bG9hZChuZXcgVmFsaWRhdGlvblBpcGUoeyB3aGl0ZWxpc3Q6IHRydWUgfSkpIGR0bzogTWVzc2FnZUR0bykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBhd2FpdCB0aGlzLm1lc3NhZ2VzU2VydmljZS5hZGRNZXNzYWdlKGR0byk7XG4gICAgbWVzc2FnZS5jb2RlID09PSAyMDAgJiYgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnbWVzc2FnZS5jcmVhdGUnLCBtZXNzYWdlLmRhdGEpO1xuICAgIHJldHVybiBtZXNzYWdlO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdlZGl0X21lc3NhZ2UnKVxuICBAVXNlRmlsdGVycyhuZXcgUnBjVmFsaWRhdGlvbkZpbHRlcigpKVxuICBhc3luYyBlZGl0ZU1lc3NhZ2UoQFBheWxvYWQobmV3IFZhbGlkYXRpb25QaXBlKHsgd2hpdGVsaXN0OiB0cnVlIH0pKSBkdG86IEVkaXRNZXNzYWdlRHRvKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm1lc3NhZ2VzU2VydmljZS5lZGl0TWVzc2FnZShkdG8pO1xuICAgIHJlc3BvbnNlLmNvZGUgPT09IDIwMCAmJiB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdtZXNzYWdlLnVwZGF0ZScsIHJlc3BvbnNlLmRhdGEubWVzc2FnZSk7XG4gICAgcmV0dXJuIHJlc3BvbnNlO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdkZWxldGVfbWVzc2FnZScpXG4gIEBVc2VGaWx0ZXJzKG5ldyBScGNWYWxpZGF0aW9uRmlsdGVyKCkpXG4gIGFzeW5jIGRlbGV0ZU1lc3NhZ2UoQFBheWxvYWQobmV3IFZhbGlkYXRpb25QaXBlKHsgd2hpdGVsaXN0OiB0cnVlIH0pKSBkdG86IERlbGV0ZU1lc3NhZ2VEdG8pIHtcbiAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJJZDogZHRvLmNyZWF0ZWRCeSwgY29udmVyc2F0aW9uSWQ6IGR0by5jb252ZXJzYXRpb25JZCwgbWVzc2FnZUlkOiBkdG8uaWQgfTtcbiAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5tZXNzYWdlc1NlcnZpY2UuZGVsZXRlTWVzc2FnZShkdG8pO1xuICAgIG1lc3NhZ2UuY29kZSA9PT0gMjAwICYmIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ21lc3NhZ2UuZGVsZXRlJywgcGFyYW1zKTtcbiAgICByZXR1cm4gbWVzc2FnZTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgTWVzc2FnZXNDb250cm9sbGVyIH0gZnJvbSAnLi9tZXNzYWdlcy5jb250cm9sbGVyJztcbmltcG9ydCB7IENvbnZlcnNhdGlvbnNNb2R1bGUgfSBmcm9tICcuLi8uLi9jb252ZXJzYXRpb25zL3NyYy9jb252ZXJzYXRpb25zLm1vZHVsZSc7XG5pbXBvcnQgeyBNZXNzYWdlc1NlcnZpY2UgfSBmcm9tICcuL21lc3NhZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpc21hTW9kdWxlTWVzc2FnZXMgfSBmcm9tICcuL3ByaXNtYS9wcmlzbWEubW9kdWxlJztcbmltcG9ydCB7IFByaXNtYVF1ZXJ5IH0gZnJvbSAnQGNvbW1vbi91dGlscy9kdG8vcXVlcnkucHJpc21hJztcbmltcG9ydCB7IEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICdAYXBwcy9jaGF0L3V0aWxzL2NvbnN0YW50cyc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBQcmlzbWFNb2R1bGVNZXNzYWdlcyxcbiAgICBDb252ZXJzYXRpb25zTW9kdWxlLFxuICBdLFxuICBjb250cm9sbGVyczogW01lc3NhZ2VzQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW1xuICAgIFByaXNtYVF1ZXJ5LFxuICAgIEhUVFAsXG4gICAge1xuICAgICAgcHJvdmlkZTogU2VydmljZXMuTUVTU0FHRVMsXG4gICAgICB1c2VDbGFzczogTWVzc2FnZXNTZXJ2aWNlLFxuICAgIH0sXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5NRVNTQUdFUyxcbiAgICAgIHVzZUNsYXNzOiBNZXNzYWdlc1NlcnZpY2UsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNNb2R1bGUge31cbiIsImltcG9ydCB7IEN1c3RvbVJlc3BvbnNlLCBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBTdGF0dXMsIEluamVjdCwgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VNZXNzYWdlcyB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5zZXJ2aWNlJztcbmltcG9ydCB7IFJFU1RmdWxQYXJhbXMsIFJFU1RmdWxTZXJ2aWNlIH0gZnJvbSAnQGNvbW1vbi91dGlscy9yZXF1ZXRzLnV0aWwnO1xuaW1wb3J0IHsgRGVsZXRlTWVzc2FnZUR0bywgRWRpdE1lc3NhZ2VEdG8sIE1lc3NhZ2VEdG8gfSBmcm9tICcuL2R0byc7XG5pbXBvcnQgeyBQcmlzbWFRdWVyeSB9IGZyb20gJ0Bjb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgSUNvbnZlcnNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnQGFwcHMvY2hhdC9jb252ZXJzYXRpb25zL3NyYy9jb252ZXJzYXRpb25zJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnQGFwcHMvY2hhdC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgY2xvbmVEZWVwIH0gZnJvbSAnbG9kYXNoJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzU2VydmljZSBleHRlbmRzIFJFU1RmdWxTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcmlzbWE6IFByaXNtYVNlcnZpY2VNZXNzYWdlcyxcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByaXNtYXF1ZXJ5OiBQcmlzbWFRdWVyeSxcbiAgICBwcml2YXRlIGh0dHA6IEhUVFAsXG4gICAgQEluamVjdChTZXJ2aWNlcy5DT05WRVJTQVRJT05TKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgY29udmVyc2F0aW9uU2VydmljZTogSUNvbnZlcnNhdGlvbnNTZXJ2aWNlXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cbiAgcHJvdGVjdGVkIGdldERiKCk6IFByaXNtYVF1ZXJ5IHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucHJpc21hcXVlcnkud2hlcmUoeyBkZWxldGVkRGF0ZTogbnVsbCB9KTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyYW1zOiBSRVNUZnVsUGFyYW1zID0ge1xuICAgIGxpc3Q6IHtcbiAgICAgIGZpbHRlckZpZWxkczogW10sXG4gICAgICBzZWFyY2hGaWVsZHM6IFtdLFxuICAgICAgb3JkZXJGaWVsZHM6IFtdLFxuICAgIH0sXG4gIH07XG5cbiAgYXN5bmMgZ2V0TWVzc2FnZXMocXVlcnk6IGFueSk6IFByb21pc2U8Q3VzdG9tUmVzcG9uc2U+IHtcbiAgICBjb25zdCBwYWdpbmF0aW9uID0gYXdhaXQgdGhpcy5nZXRMaXN0cyhxdWVyeSk7XG5cbiAgICBjb25zdCBtZXNzYWdlcyA9IGF3YWl0IHRoaXMucHJpc21hLm1lc3NhZ2UuZmluZE1hbnkoe1xuICAgICAgdGFrZTogcGFnaW5hdGlvbi50YWtlLFxuICAgICAgc2tpcDogcGFnaW5hdGlvbi5za2lwLFxuICAgICAgd2hlcmU6IHtcbiAgICAgICAgY29udmVyc2F0aW9uSWQ6IE51bWJlcihxdWVyeS5jb252ZXJzYXRpb25JZClcbiAgICAgIH0sXG4gICAgICBvcmRlckJ5OiB7IGNyZWF0ZWREYXRlOiAnZGVzYycgfVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAnR2V0IG1lc3NhZ2VzIHN1Y2Nlc3NmdWxseScsXG4gICAgICBtZXNzYWdlcyxcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgYWRkTWVzc2FnZShkdG86IE1lc3NhZ2VEdG8pOiBQcm9taXNlPEN1c3RvbVJlc3BvbnNlPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgY3JlYXRlZEJ5LCBhdXRob3JJZCwgY29udGVudCwgY29udmVyc2F0aW9uSWQgfSA9IGR0bztcbiAgICAgIGNvbnN0IGNvbnZlcnNhdGlvbiA9IGF3YWl0IHRoaXMucHJpc21hLmNvbnZlcnNhdGlvbi5maW5kVW5pcXVlKFxuICAgICAgICB7XG4gICAgICAgICAgd2hlcmU6IHsgaWQ6IGNvbnZlcnNhdGlvbklkIH1cbiAgICAgICAgfVxuICAgICAgKTtcbiAgICAgIGlmICghY29udmVyc2F0aW9uKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnVGhlIGNvbnZlcnNhdGlvbiBkb2VzIG5vdCBleGlzdGVkJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmIChjb252ZXJzYXRpb24uZGVsZXRlZERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdUaGUgY29udmVyc2F0aW9uIGhhcyBiZWVuIGRlbGV0ZWQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgY29uc3QgeyBjcmVhdG9yLCByZWNpcGllbnQgfSA9IGNvbnZlcnNhdGlvbjtcbiAgICAgIGlmICghYXdhaXQgdGhpcy5jb252ZXJzYXRpb25TZXJ2aWNlLmlzRnJpZW5kcyhjcmVhdG9yLCByZWNpcGllbnQpKXtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdGcmllbmQgbm90IGZvdW5kJyxcbiAgICAgICAgICBudWxsLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBhZGRlZERhdGEgPSBhd2FpdCB0aGlzLnByaXNtYS5tZXNzYWdlLmNyZWF0ZSh7IGRhdGE6IGR0byB9KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wcmlzbWEuY29udmVyc2F0aW9uLnVwZGF0ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiBjb252ZXJzYXRpb25JZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgbGFzdE1lc3NhZ2VTZW50QXQ6IG5ldyBEYXRlKClcbiAgICAgICAgICB9XG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLnByaXNtYS5jb252ZXJzYXRpb25fTWVzc2FnZS5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGNvbnZlcnNhdGlvbklkOiBjb252ZXJzYXRpb25JZCxcbiAgICAgICAgICAgIG1lc3NhZ2VJZDogYWRkZWREYXRhLmlkXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgXSk7XG5cbiAgICAgIC8vIHJldHVybiBkYXRhXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5wcmlzbWEuY29udmVyc2F0aW9uX01lc3NhZ2UuZmluZE1hbnkoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGNvbnZlcnNhdGlvbklkLFxuICAgICAgICAgIG1lc3NhZ2VJZDogYWRkZWREYXRhLmlkXG4gICAgICAgIH0sXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICBjb252ZXJzYXRpb246IHtcbiAgICAgICAgICAgIGluY2x1ZGU6IHt1c2VyQ3JlYXRvcjogdHJ1ZSwgdXNlclJlY2lwaWVudDogdHJ1ZSwgbGFzdE1lc3NhZ2VTZW50OiB0cnVlfVxuICAgICAgICAgIH0sXG4gICAgICAgICAgbWVzc2FnZToge1xuICAgICAgICAgICAgaW5jbHVkZToge3VzZXI6IHtcbiAgICAgICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgICAgIFBlZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJlc2VuY2U6IHRydWUsXG4gICAgICAgICAgICAgICAgVXNlclByb2ZpbGU6IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICBjb25zdCBsYXN0TWVzc2FnZVNlbnQgPSBkYXRhWzBdLmNvbnZlcnNhdGlvbi5sYXN0TWVzc2FnZVNlbnQuZmluZChtc2cgPT4gbXNnLm1lc3NhZ2VJZCA9PT0gZGF0YVswXS5tZXNzYWdlSWQpO1xuICAgICAgY29uc3QgY29udmVyc2F0aW9uT2JqID0ge1xuICAgICAgICBjcmVhdGVkQXQ6IGRhdGFbMF0uY29udmVyc2F0aW9uLmNyZWF0ZWREYXRlLFxuICAgICAgICBpZDogZGF0YVswXS5jb252ZXJzYXRpb24uaWQsXG4gICAgICAgIGxhc3RNZXNzYWdlU2VudEF0OiBsYXN0TWVzc2FnZVNlbnQuY3JlYXRlZERhdGUsXG4gICAgICAgIGxhc3RNZXNzYWdlU2VudCxcbiAgICAgICAgY3JlYXRvcjogdGhpcy5yZWR1Y2VQcm9wcyhkYXRhWzBdLmNvbnZlcnNhdGlvbi51c2VyQ3JlYXRvciksXG4gICAgICAgICAgcmVjaXBpZW50OiB0aGlzLnJlZHVjZVByb3BzKGRhdGFbMF0uY29udmVyc2F0aW9uLnVzZXJSZWNpcGllbnQpLFxuICAgICAgICB9XG4gICAgICBjb25zdCBtZXNzYWdlT2JqID0ge1xuICAgICAgICBpZDogZGF0YVswXS5tZXNzYWdlSWQsXG4gICAgICAgIGF0dGFjaG1lbnRzOiBbXSxcbiAgICAgICAgY29udGVudDogZGF0YVswXS5tZXNzYWdlLmNvbnRlbnQsXG4gICAgICAgIGNyZWF0ZWRBdDogZGF0YVswXS5tZXNzYWdlLmNyZWF0ZWREYXRlLFxuICAgICAgICBhdXRob3I6IHRoaXMucmVkdWNlUHJvcHMoZGF0YVswXS5tZXNzYWdlLnVzZXIpLFxuICAgICAgICBjb252ZXJzYXRpb246IGNvbnZlcnNhdGlvbk9ialxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnQ3JlYXRlIHRoZSBtZXNzYWdlIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgIHsgbWVzc2FnZTogbWVzc2FnZU9iaiwgY29udmVyc2F0aW9uOiBjb252ZXJzYXRpb25PYmogfVxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnQ3JlYXRlIHRoZSBtZXNzYWdlIHVuc3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZU1lc3NhZ2UoZHRvOiBEZWxldGVNZXNzYWdlRHRvKTogUHJvbWlzZTxDdXN0b21SZXNwb25zZT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5wcmlzbWEubWVzc2FnZS5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogZHRvLmlkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnVGhlIG1lc3NhZ2UgZG9lcyBub3QgZXhpc3RlZCcsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5kZWxldGVkRGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ1RoZSBtZXNzYWdlIGhhcyBiZWVuIGRlbGV0ZWQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UuYXV0aG9ySWQgIT09IGR0by5hdXRob3JJZCB8fCBtZXNzYWdlLmNvbnZlcnNhdGlvbklkICE9PSBkdG8uY29udmVyc2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdDYW5ub3QgZGVsZXRlIHRoaXMgbWVzc2FnZScsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGF3YWl0IHRoaXMucHJpc21hLm1lc3NhZ2UuZGVsZXRlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogZHRvLmlkXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICdEZWxldGUgdGhlIG1lc3NhZ2UgaXRlbSBzdWNjZXNzZnVsbHknLFxuICAgICAgICB7IGNvbnZlcnNhdGlvbklkOiBkdG8uY29udmVyc2F0aW9uSWQsIG1lc3NhZ2VJZDogZHRvLmlkIH1cbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICdEZWxldGUgdGhlIG1lc3NhZ2UgaXRlbSB1bnN1Y2Nlc3NmdWxseScsXG4gICAgICAgIGVycm9yLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBlZGl0TWVzc2FnZShkdG86IEVkaXRNZXNzYWdlRHRvKTogUHJvbWlzZTxDdXN0b21SZXNwb25zZT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYXdhaXQgdGhpcy5wcmlzbWEubWVzc2FnZS5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogZHRvLmlkXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnVGhlIG1lc3NhZ2UgZG9lcyBub3QgZXhpc3RlZCcsXG4gICAgICAgICAgbnVsbCxcbiAgICAgICAgKTtcbiAgICAgIH0gZWxzZSBpZiAobWVzc2FnZS5kZWxldGVkRGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ1RoZSBtZXNzYWdlIGhhcyBiZWVuIGRlbGV0ZWQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgaWYgKG1lc3NhZ2UuYXV0aG9ySWQgIT09IGR0by5hdXRob3JJZCB8fCBtZXNzYWdlLmNvbnZlcnNhdGlvbklkICE9PSBkdG8uY29udmVyc2F0aW9uSWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdDYW5ub3QgZWRpdCB0aGlzIG1lc3NhZ2UnLFxuICAgICAgICAgIG51bGwsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgdGhpcy5wcmlzbWEubWVzc2FnZS51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBkdG8uaWRcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVwZGF0ZWRCeTogZHRvLnVwZGF0ZWRCeSxcbiAgICAgICAgICB1cGRhdGVkRGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICBjb250ZW50OiBkdG8uY29udGVudFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBpZDogdHJ1ZSwgY29udGVudDogdHJ1ZSwgY3JlYXRlZERhdGU6IHRydWUsIHVzZXI6IHRydWUsIGNvbnZlcnNhdGlvbjoge1xuICAgICAgICAgIGluY2x1ZGU6IHsgdXNlckNyZWF0b3I6IHRydWUsIHVzZXJSZWNpcGllbnQ6IHRydWUgfVxuICAgICAgICB9fVxuICAgICAgfSk7XG4gICAgICAvL3JldHVybiBkYXRhXG4gICAgICBjb25zdCBtZXNzYWdlT2JqID0ge1xuICAgICAgICBpZDogZGF0YS5pZCxcbiAgICAgICAgY29udGVudDogZGF0YS5jb250ZW50LFxuICAgICAgICBjcmVhdGVkQXQ6IGRhdGEuY3JlYXRlZERhdGUsXG4gICAgICAgIGF1dGhvcjogdGhpcy5yZWR1Y2VQcm9wcyhkYXRhLnVzZXIpLFxuICAgICAgICBjb252ZXJzYXRpb246IHtcbiAgICAgICAgICBjcmVhdG9yOiB0aGlzLnJlZHVjZVByb3BzKGRhdGEuY29udmVyc2F0aW9uLnVzZXJDcmVhdG9yKSxcbiAgICAgICAgICByZWNpcGllbnQ6IHRoaXMucmVkdWNlUHJvcHMoZGF0YS5jb252ZXJzYXRpb24udXNlclJlY2lwaWVudClcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnRWRpdCB0aGUgbWVzc2FnZSBpdGVtIHN1Y2Nlc3NmdWxseScsXG4gICAgICAgIHsgbWVzc2FnZTogbWVzc2FnZU9iaiB9XG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnRWRpdCB0aGUgbWVzc2FnZSBpdGVtIHVuc3VjY2Vzc2Z1bGx5JyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHJlZHVjZVByb3BzKG9iaikge1xuICAgIHJldHVybiB7XG4gICAgICBpZDogb2JqLmlkLFxuICAgICAgZmlyc3ROYW1lOiBvYmouZmlyc3ROYW1lLFxuICAgICAgbGFzdE5hbWU6IG9iai5sYXN0TmFtZSxcbiAgICAgIGVtYWlsOiBvYmouZW1haWwsXG4gICAgICB1c2VybmFtZTogb2JqLnVzZXJuYW1lLFxuICAgICAgcGVlcjogb2JqPy5QZWVyLFxuICAgICAgcHJvZmlsZTogb2JqPy5Vc2VyUHJvZmlsZSxcbiAgICAgIHByZXNlbmNlOiBvYmo/LnByZXNlbmNlLFxuICAgIH1cbiAgfVxufSIsImltcG9ydCB7IE1lc3NhZ2VEdG8sIEVkaXRNZXNzYWdlRHRvLCBEZWxldGVNZXNzYWdlRHRvIH0gZnJvbSAnLi9kdG8nO1xuXG5leHBvcnQgaW50ZXJmYWNlIElNZXNzYWdlc1NlcnZpY2Uge1xuICBhZGRNZXNzYWdlKFxuICAgIHBhcmFtczogTWVzc2FnZUR0byxcbiAgKTogUHJvbWlzZTxhbnk+O1xuICBnZXRNZXNzYWdlcyhxdWVyeTogYW55KTogUHJvbWlzZTxhbnlbXT47XG4gIGVkaXRNZXNzYWdlKHBhcmFtczogRWRpdE1lc3NhZ2VEdG8pOiBQcm9taXNlPGFueT47XG4gIGRlbGV0ZU1lc3NhZ2UocGFyYW1zOiBEZWxldGVNZXNzYWdlRHRvKTogUHJvbWlzZTxhbnk+O1xufVxuIiwiaW1wb3J0IHsgR2xvYmFsLCBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlTWVzc2FnZXMgfSBmcm9tICcuL3ByaXNtYS5zZXJ2aWNlJztcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbUHJpc21hU2VydmljZU1lc3NhZ2VzXSxcbiAgZXhwb3J0czogW1ByaXNtYVNlcnZpY2VNZXNzYWdlc10sXG59KVxuZXhwb3J0IGNsYXNzIFByaXNtYU1vZHVsZU1lc3NhZ2VzIHt9XG4iLCJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL215c3FsJztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpc21hU2VydmljZU1lc3NhZ2VzIGV4dGVuZHMgUHJpc21hQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZGF0YXNvdXJjZXM6IHtcbiAgICAgICAgZGI6IHtcbiAgICAgICAgICB1cmw6IGNvbmZpZy5nZXRPclRocm93KCdNWVNRTF9EQVRBQkFTRV9VUkwnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjbGVhbkRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLiR0cmFuc2FjdGlvbihbdGhpcy5tZXNzYWdlLmRlbGV0ZU1hbnkoKV0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBCb2R5LCBDb250cm9sbGVyLCBJbmplY3QsIFBhcmFtLCBVc2VHdWFyZHMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBSb3V0ZXMsIFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZW9ybSc7XG5pbXBvcnQgeyBVc2VyUHJlc2VuY2VEdG8gfSBmcm9tICcuLi9kdG9zL3VzZXItcHJlc2VuY2UuZHRvJztcbmltcG9ydCB7IElVc2VyUHJlc2VuY2VTZXJ2aWNlIH0gZnJvbSAnLi4vaW50ZXJmYWNlcy91c2VyLXByZXNlbmNlJztcblxuLy8gVE9ETzogc2hvdyBndWFyZCB3aGVuIGF1dGggZG9uZVxuLy8gQFVzZUd1YXJkcyhBdXRoZW50aWNhdGVkR3VhcmQpXG5AQ29udHJvbGxlcihSb3V0ZXMuVVNFUl9QUkVTRU5DRSlcbmV4cG9ydCBjbGFzcyBVc2VyUHJlc2VuY2VDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChTZXJ2aWNlcy5VU0VSX1BSRVNFTkNFKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclByZXNlbmNlU2VydmljZTogSVVzZXJQcmVzZW5jZVNlcnZpY2UsXG4gICkge31cblxuICAvKipcbiAgICogbmV3IHJlY29yZCB3aXRoIHVzZXIgcHJlc2VuY2UgZHRvXG4gICAqIEBwYXJhbSBkdG9cbiAgICogQHJldHVybnNcbiAgICovXG4gIEBNZXNzYWdlUGF0dGVybignY3JlYXRlLXByZXNlbmNlJylcbiAgYXN5bmMgY3JlYXRlUHJlc2VuY2UoZHRvOiBVc2VyUHJlc2VuY2VEdG8pIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyUHJlc2VuY2VTZXJ2aWNlLmNyZWF0ZVByZXNlbmNlKGR0byk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlIHVzZXIgd2l0aCB1c2VyIGJ5IHVzZXIgcHJlc2VuY2UgaWQgYW5kIHN0YXR1cyBtZXNzYWdlXG4gICAqIEBwYXJhbSB1c2VyXG4gICAqIEBwYXJhbSBpZFxuICAgKiBAcGFyYW0gZHRvXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBATWVzc2FnZVBhdHRlcm4oJ3VwZGF0ZS1zdGF0dXMnKVxuICB1cGRhdGVTdGF0dXMoXG4gICAgQEF1dGhVc2VyKCkgdXNlcjogVXNlcixcbiAgICBAUGFyYW0oJ2lkJykgaWQ6IG51bWJlcixcbiAgICBAQm9keSgpIGR0bzogVXNlclByZXNlbmNlRHRvLFxuICApIHtcbiAgICByZXR1cm4gdGhpcy51c2VyUHJlc2VuY2VTZXJ2aWNlLnVwZGF0ZVN0YXR1cyh7IHVzZXIsIGlkLCBkdG8gfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRyb2xsZXIsXG4gIEluamVjdCxcbiAgUGF0Y2gsXG4gIFVwbG9hZGVkRmlsZXMsXG4gIFVzZUludGVyY2VwdG9ycyxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTWVzc2FnZVBhdHRlcm4gfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgRmlsZUZpZWxkc0ludGVyY2VwdG9yIH0gZnJvbSAnQG5lc3Rqcy9wbGF0Zm9ybS1leHByZXNzJztcbmltcG9ydCB7IFJvdXRlcywgU2VydmljZXMsIFVzZXJQcm9maWxlRmlsZUZpZWxkcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJy4uLy4uL3V0aWxzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVvcm0nO1xuaW1wb3J0IHsgVXBkYXRlVXNlclByb2ZpbGVQYXJhbXMsIFVzZXJQcm9maWxlRmlsZXMgfSBmcm9tICcuLi8uLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBVcGRhdGVVc2VyUHJvZmlsZUR0byB9IGZyb20gJy4uL2R0b3MvVXBkYXRlVXNlclByb2ZpbGUuZHRvJztcbmltcG9ydCB7IElVc2VyUHJvZmlsZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci1wcm9maWxlJztcblxuQENvbnRyb2xsZXIoUm91dGVzLlVTRVJTX1BST0ZJTEVTKVxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlc0NvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNlcnZpY2VzLlVTRVJTX1BST0ZJTEVTKVxuICAgIHByaXZhdGUgcmVhZG9ubHkgdXNlclByb2ZpbGVTZXJ2aWNlOiBJVXNlclByb2ZpbGUsXG4gICkge31cblxuICBATWVzc2FnZVBhdHRlcm4oJ3VwZGF0ZS11c2VyLXByb2ZpbGUnKVxuICBhc3luYyB1cGRhdGVVc2VyUHJvZmlsZShcbiAgICB1c2VyOiBVc2VyLFxuICAgIGZpbGVzOiBVc2VyUHJvZmlsZUZpbGVzLFxuICAgIHVwZGF0ZVVzZXJQcm9maWxlRHRvOiBVcGRhdGVVc2VyUHJvZmlsZUR0byxcbiAgKSB7XG4gICAgY29uc29sZS5sb2coJ0luc2lkZSBVc2Vycy9Qcm9maWxlcyBDb250cm9sbGVyJyk7XG4gICAgY29uc3QgcGFyYW1zOiBVcGRhdGVVc2VyUHJvZmlsZVBhcmFtcyA9IHt9O1xuICAgIHVwZGF0ZVVzZXJQcm9maWxlRHRvLmFib3V0ICYmIChwYXJhbXMuYWJvdXQgPSB1cGRhdGVVc2VyUHJvZmlsZUR0by5hYm91dCk7XG4gICAgZmlsZXMuYmFubmVyICYmIChwYXJhbXMuYmFubmVyID0gZmlsZXMuYmFubmVyWzBdKTtcbiAgICBmaWxlcy5hdmF0YXIgJiYgKHBhcmFtcy5hdmF0YXIgPSBmaWxlcy5hdmF0YXJbMF0pO1xuICAgIHJldHVybiB0aGlzLnVzZXJQcm9maWxlU2VydmljZS5jcmVhdGVQcm9maWxlT3JVcGRhdGUodXNlci5pZCwgcGFyYW1zKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgQ29udHJvbGxlcixcbiAgR2V0LFxuICBIdHRwRXhjZXB0aW9uLFxuICBIdHRwU3RhdHVzLFxuICBJbmplY3QsXG4gIFF1ZXJ5LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBSb3V0ZXMsIFNlcnZpY2VzIH0gZnJvbSAnLi4vLi4vdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFVzZXJBbHJlYWR5RXhpc3RzIH0gZnJvbSAnLi4vZXhjZXB0aW9ucy9Vc2VyQWxyZWFkeUV4aXN0cyc7XG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xuXG5AQ29udHJvbGxlcihSb3V0ZXMuVVNFUlMpXG5leHBvcnQgY2xhc3MgVXNlcnNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IoXG4gICAgQEluamVjdChTZXJ2aWNlcy5VU0VSUykgcHJpdmF0ZSByZWFkb25seSB1c2VyU2VydmljZTogSVVzZXJTZXJ2aWNlLFxuICApIHt9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdzZWFyY2gtdXNlcicpXG4gIHNlYXJjaFVzZXJzKHF1ZXJ5OiBhbnkpIHtcbiAgICBpZiAoIXF1ZXJ5KVxuICAgICAgdGhyb3cgbmV3IEh0dHBFeGNlcHRpb24oJ1Byb3ZpZGUgYSB2YWxpZCBxdWVyeScsIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QpO1xuICAgIHJldHVybiB0aGlzLnVzZXJTZXJ2aWNlLnNlYXJjaFVzZXJzKHF1ZXJ5KTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignY2hlY2stdXNlcicpXG4gIGFzeW5jIGNoZWNrVXNlcm5hbWUoeyB1c2VybmFtZSB9KSB7XG4gICAgaWYgKCF1c2VybmFtZSlcbiAgICAgIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKCdJbnZhbGlkIFF1ZXJ5JywgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCk7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZFVzZXIoeyB1c2VybmFtZSB9KTtcbiAgICBpZiAodXNlci5kYXRhKSB0aHJvdyBuZXcgVXNlckFscmVhZHlFeGlzdHMoKTtcbiAgICByZXR1cm4gSHR0cFN0YXR1cy5PSztcbiAgfVxufVxuIiwiaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNTdHJpbmcsIE1heExlbmd0aCwgTWluTGVuZ3RoIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJQcm9maWxlRHRvIHtcbiAgQElzU3RyaW5nKClcbiAgQE1heExlbmd0aCgyMDApXG4gIEBJc09wdGlvbmFsKClcbiAgYWJvdXQ/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJc0Jvb2xlYW4sIElzTnVtYmVyLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUHJlc2VuY2VEdG8ge1xuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHN0YXR1c01lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgQElzQm9vbGVhbigpXG4gIHNob3dPZmZsaW5lOiBib29sZWFuID0gZmFsc2U7XG59XG4iLCJpbXBvcnQgeyBIdHRwRXhjZXB0aW9uLCBIdHRwU3RhdHVzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5leHBvcnQgY2xhc3MgVXNlckFscmVhZHlFeGlzdHMgZXh0ZW5kcyBIdHRwRXhjZXB0aW9uIHtcbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoJ1VzZXIgYWxyZWFkeSBleGlzdHMnLCBIdHRwU3RhdHVzLkNPTkZMSUNUKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BhcHBzL2NoYXQvdXRpbHMvdHlwZW9ybSc7XG5pbXBvcnQgeyBVc2VyUHJlc2VuY2VEdG8gfSBmcm9tICcuLi9kdG9zL3VzZXItcHJlc2VuY2UuZHRvJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlclByZXNlbmNlU2VydmljZSB7XG4gIGNyZWF0ZVByZXNlbmNlKGR0bzogVXNlclByZXNlbmNlRHRvKTtcbiAgdXBkYXRlU3RhdHVzKHBhcmFtczogeyB1c2VyOiBVc2VyOyBpZDogbnVtYmVyOyBkdG86IFVzZXJQcmVzZW5jZUR0byB9KTtcbn1cbiIsImltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi8uLi91dGlscy90eXBlb3JtJztcbmltcG9ydCB7IFVwZGF0ZVVzZXJQcm9maWxlUGFyYW1zIH0gZnJvbSAnLi4vLi4vdXRpbHMvdHlwZXMnO1xuXG5leHBvcnQgaW50ZXJmYWNlIElVc2VyUHJvZmlsZSB7XG4gIGNyZWF0ZVByb2ZpbGUoKTtcbiAgdXBkYXRlUHJvZmlsZSh1c2VySWQ6IG51bWJlciwgcGFyYW1zOiBVcGRhdGVVc2VyUHJvZmlsZVBhcmFtcyk7XG4gIGNyZWF0ZVByb2ZpbGVPclVwZGF0ZSh1c2VySWQ6IG51bWJlciwgcGFyYW1zOiBVcGRhdGVVc2VyUHJvZmlsZVBhcmFtcyk7XG59XG4iLCJpbXBvcnQgeyBDcmVhdGVVc2VyRGV0YWlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlclNlcnZpY2Uge1xuICBjcmVhdGVVc2VyKHVzZXJEZXRhaWxzOiBDcmVhdGVVc2VyRGV0YWlscyk7XG4gIGZpbmRVc2VyKHsgdXNlcm5hbWUsIGlkIH06IHsgdXNlcm5hbWU/OiBzdHJpbmc7IGlkPzogbnVtYmVyIH0pO1xuICBzZWFyY2hVc2VycyhxdWVyeTogc3RyaW5nKTtcbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VVc2VyUHJlc2VuY2UgfSBmcm9tICcuL3ByaXNtYS5zZXJ2aWNlJztcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbUHJpc21hU2VydmljZVVzZXJQcmVzZW5jZSwgQ29uZmlnU2VydmljZV0sXG4gIGV4cG9ydHM6IFtQcmlzbWFTZXJ2aWNlVXNlclByZXNlbmNlXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpc21hTW9kdWxlVXNlclByZXNlbmNlIHt9XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTXlTUUxDbGllbnQgfSBmcm9tICdAY29tbW9uL3ByaXNtYS9teXNxbF9wcmlzbWFfY2xpZW50JztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaXNtYVNlcnZpY2VVc2VyUHJlc2VuY2UgZXh0ZW5kcyBNeVNRTENsaWVudCB7XG4gIGNsZWFuRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRyYW5zYWN0aW9uKFt0aGlzLnVzZXJQcmVzZW5jZS5kZWxldGVNYW55KCldKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzLCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlclByZXNlbmNlRHRvIH0gZnJvbSAnLi4vZHRvcy91c2VyLXByZXNlbmNlLmR0byc7XG5pbXBvcnQgeyBJVXNlclByZXNlbmNlU2VydmljZSB9IGZyb20gJy4uL2ludGVyZmFjZXMvdXNlci1wcmVzZW5jZSc7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlVXNlclByZXNlbmNlIH0gZnJvbSAnLi4vcHJpc21hL3ByaXNtYS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJQcmVzZW5jZVNlcnZpY2UgZXh0ZW5kcyBIVFRQIGltcGxlbWVudHMgSVVzZXJQcmVzZW5jZVNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaXNtYTogUHJpc21hU2VydmljZVVzZXJQcmVzZW5jZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIHByZXNlbmNlIHdpdGggdXNlciBwcmVzZW5jZSBkdG9cbiAgICogQHBhcmFtIGR0b1xuICAgKi9cbiAgYXN5bmMgY3JlYXRlUHJlc2VuY2UoZHRvOiBVc2VyUHJlc2VuY2VEdG8pIHtcbiAgICB0cnkge1xuICAgICAgLy8gcmVxdWVzdCBjcmVhdGUgdXNlciBwcmVzZW5jZSByZWNvcmQgYW5kIGF3YWl0IGl0XG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHRoaXMucHJpc21hLnVzZXJQcmVzZW5jZS5jcmVhdGUoe1xuICAgICAgICBkYXRhOiBkdG8sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICd1c2Vycy5VU0VSX1BSRVNFTkNFLkNSRUFURUQnLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICAgMSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ3N5c3RlbXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZSBzdGF0dXMgxrBpdXRoIHVzZXIgaWQgZHRvXG4gICAqIEBwYXJhbSBwYXJhbXNcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHVwZGF0ZVN0YXR1cyh7XG4gICAgdXNlcixcbiAgICBpZCxcbiAgICBkdG8sXG4gIH06IHtcbiAgICB1c2VyOiBhbnk7XG4gICAgaWQ6IG51bWJlcjtcbiAgICBkdG86IFVzZXJQcmVzZW5jZUR0bztcbiAgfSkge1xuICAgIC8vIFRPRE86IHRlc3QgYXBpXG4gICAgdHJ5IHtcbiAgICAgIC8vIGNoZWNrIHVzZXJcbiAgICAgIGlmICghdXNlcikge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICd1c2Vycy5VU0VSX1BSRVNFTkNFLk5PVF9GT1VORF9DVVJSRU5UX1VTRVInLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICAvLyBjcmVhdGUgcHJlc2VuY2UgZm9yIGN1cnJlbnQgdXNlciBpZiBudWxsL3VuZGVmaW5lZFxuICAgICAgaWYgKCF1c2VyLnByZXNlbmNlKSB7XG4gICAgICAgIHVzZXIucHJlc2VuY2UgPSBhd2FpdCB0aGlzLmNyZWF0ZVByZXNlbmNlKGR0byk7XG4gICAgICB9XG5cbiAgICAgIC8vIHVwZGF0ZSBpZiBleGlzdFxuICAgICAgY29uc3QgdXBkYXRlZCA9IGF3YWl0IHRoaXMucHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgZGF0YTogeyBwcmVzZW5jZTogeyBjcmVhdGU6IHsgc3RhdHVzTWVzc2FnZTogZHRvLnN0YXR1c01lc3NhZ2UgfSB9IH0sXG4gICAgICAgIHdoZXJlOiB7IGlkOiBpZCB9LFxuICAgICAgfSk7XG5cbiAgICAgIC8vIHJlc3BvbnNlIGh0dHAgc3RhdHVzXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ3VzZXJzLlVTRVJfUFJFU0VOQ0UuVVBEQVRFRCcsXG4gICAgICAgIHVwZGF0ZWQsXG4gICAgICAgIDEsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdzeXN0ZW1zLklOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJSW1hZ2VTdG9yYWdlU2VydmljZSB9IGZyb20gJy4uLy4uL2ltYWdlLXN0b3JhZ2UvaW1hZ2Utc3RvcmFnZSc7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBnZW5lcmF0ZVVVSURWNCB9IGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IHsgVXBkYXRlVXNlclByb2ZpbGVQYXJhbXMgfSBmcm9tICcuLi8uLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBJVXNlclByb2ZpbGUgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXItcHJvZmlsZSc7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlVXNlclByZXNlbmNlIH0gZnJvbSAnLi4vcHJpc21hL3ByaXNtYS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJQcm9maWxlU2VydmljZSBpbXBsZW1lbnRzIElVc2VyUHJvZmlsZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlVXNlclByZXNlbmNlLFxuICAgIEBJbmplY3QoU2VydmljZXMuSU1BR0VfVVBMT0FEX1NFUlZJQ0UpXG4gICAgcHJpdmF0ZSByZWFkb25seSBpbWFnZVN0b3JhZ2VTZXJ2aWNlOiBJSW1hZ2VTdG9yYWdlU2VydmljZSxcbiAgICBwcml2YXRlIGh0dHA6IEhUVFAsXG4gICkge31cblxuICBhc3luYyBjcmVhdGVQcm9maWxlKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnByaXNtYS51c2VyUHJvZmlsZS5jcmVhdGUoe1xuICAgICAgZGF0YToge30sXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIHByb2ZpbGUgb3IgdXBkYXRlXG4gICAqIEBwYXJhbSB1c2VySWRcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgY3JlYXRlUHJvZmlsZU9yVXBkYXRlKHVzZXJJZDogbnVtYmVyLCBwYXJhbXM6IFVwZGF0ZVVzZXJQcm9maWxlUGFyYW1zKSB7XG4gICAgLy8gY2hlY2sgaXMgZXhpc3RcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IHVzZXJJZCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAndXNlcnMuVVNFUi5OT1RfRk9VTkQnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBjcmVhdGUgcHJvZmlsZSBpZiBlbXB0eVxuICAgIGlmICghdXNlci5wcm9maWxlSWQpIHtcbiAgICAgIHVzZXIucHJvZmlsZUlkID0gKGF3YWl0IHRoaXMuY3JlYXRlUHJvZmlsZSgpKS5pZDtcbiAgICAgIHJldHVybiB0aGlzLnVwZGF0ZVByb2ZpbGUodXNlciwgcGFyYW1zKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdGhpcy51cGRhdGVQcm9maWxlKHVzZXIsIHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogdXBkYXRlIHByb2ZpbGVcbiAgICogQHBhcmFtIHVzZXJcbiAgICogQHBhcmFtIHBhcmFtc1xuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgdXBkYXRlUHJvZmlsZSh1c2VyOiBhbnksIHBhcmFtczogVXBkYXRlVXNlclByb2ZpbGVQYXJhbXMpIHtcbiAgICBpZiAocGFyYW1zLmF2YXRhcikge1xuICAgICAgdXNlci5wcm9maWxlLmF2YXRhciA9IGF3YWl0IHRoaXMudXBkYXRlQXZhdGFyKHBhcmFtcy5hdmF0YXIpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmJhbm5lcikge1xuICAgICAgdXNlci5wcm9maWxlLmJhbm5lciA9IGF3YWl0IHRoaXMudXBkYXRlQmFubmVyKHBhcmFtcy5iYW5uZXIpO1xuICAgIH1cbiAgICBpZiAocGFyYW1zLmFib3V0KSB7XG4gICAgICB1c2VyLnByb2ZpbGUuYWJvdXQgPSBwYXJhbXMuYWJvdXQ7XG4gICAgfVxuICAgIGNvbnN0IHVzZXJJZCA9IHVzZXIuaWQ7XG4gICAgZGVsZXRlIHVzZXIuaWQ7XG5cbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgZGF0YToge1xuICAgICAgICAuLi51c2VyLFxuICAgICAgfSxcbiAgICAgIHdoZXJlOiB7IGlkOiB1c2VySWQgfSxcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiB1cGRhdGUgYmFubmVyXG4gICAqIEBwYXJhbSBmaWxlIFxuICAgKiBAcmV0dXJucyBcbiAgICovXG4gIGFzeW5jIHVwZGF0ZUJhbm5lcihmaWxlOiBFeHByZXNzLk11bHRlci5GaWxlKSB7XG4gICAgY29uc29sZS5sb2coJ1VwZGF0aW5nIEJhbm5lcicpO1xuICAgIGNvbnN0IGtleSA9IGdlbmVyYXRlVVVJRFY0KCk7XG4gICAgYXdhaXQgdGhpcy5pbWFnZVN0b3JhZ2VTZXJ2aWNlLnVwbG9hZCh7IGtleSwgZmlsZSB9KTtcbiAgICByZXR1cm4ga2V5O1xuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZSBhdmF0YXJcbiAgICogQHBhcmFtIGZpbGUgXG4gICAqIEByZXR1cm5zIFxuICAgKi9cbiAgYXN5bmMgdXBkYXRlQXZhdGFyKGZpbGU6IEV4cHJlc3MuTXVsdGVyLkZpbGUpIHtcbiAgICBjb25zb2xlLmxvZygnVXBkYXRpbmcgQXZhdGFyJyk7XG4gICAgY29uc3Qga2V5ID0gZ2VuZXJhdGVVVUlEVjQoKTtcbiAgICBhd2FpdCB0aGlzLmltYWdlU3RvcmFnZVNlcnZpY2UudXBsb2FkKHsga2V5LCBmaWxlIH0pO1xuICAgIHJldHVybiBrZXk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cEV4Y2VwdGlvbiwgSHR0cFN0YXR1cywgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IGhhc2hQYXNzd29yZCB9IGZyb20gJy4uLy4uL3V0aWxzL2hlbHBlcnMnO1xuaW1wb3J0IHsgQ3JlYXRlVXNlckRldGFpbHMgfSBmcm9tICcuLi8uLi91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBJVXNlclNlcnZpY2UgfSBmcm9tICcuLi9pbnRlcmZhY2VzL3VzZXInO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZVVzZXJQcmVzZW5jZSB9IGZyb20gJy4uL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBVc2VyU2VydmljZSBleHRlbmRzIEhUVFAgaW1wbGVtZW50cyBJVXNlclNlcnZpY2Uge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHByaXNtYTogUHJpc21hU2VydmljZVVzZXJQcmVzZW5jZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICAvKipcbiAgICogY3JlYXRlIHVzZXJcbiAgICogQHBhcmFtIHVzZXJEZXRhaWxzXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBjcmVhdGVVc2VyKHVzZXJEZXRhaWxzOiBDcmVhdGVVc2VyRGV0YWlscykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJEZXRhaWxzLnVzZXJuYW1lLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChleGlzdGluZ1VzZXIpXG4gICAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KEh0dHBTdGF0dXMuQ09ORkxJQ1QsICd1c2Vycy5VU0VSLkVYSVNURUQnKTtcblxuICAgICAgY29uc3QgcGFzc3dvcmQgPSBhd2FpdCBoYXNoUGFzc3dvcmQodXNlckRldGFpbHMucGFzc3dvcmQpO1xuICAgICAgY29uc3QgcGVlciA9IHRoaXMucHJpc21hLnBlZXIuY3JlYXRlKHsgZGF0YToge30gfSk7XG4gICAgICBjb25zdCBwYXJhbXMgPSB7IC4uLnVzZXJEZXRhaWxzLCBwYXNzd29yZCwgcGVlcklkOiAoYXdhaXQgcGVlcikuaWQgfTtcbiAgICAgIGNvbnN0IG5ld1VzZXIgPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyLmNyZWF0ZSh7IGRhdGE6IHsgLi4ucGFyYW1zIH0gfSk7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICd1c2Vycy5VU0VSLkNSRUFURUQnLFxuICAgICAgICBuZXdVc2VyLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnc3lzdGVtcy5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogZmluZCB1c2VyXG4gICAqIEBwYXJhbSBpZFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgZmluZFVzZXIoeyB1c2VybmFtZSB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICB1c2VybmFtZTogdHJ1ZSxcbiAgICAgICAgICBmaXJzdE5hbWU6IHRydWUsXG4gICAgICAgICAgbGFzdE5hbWU6IHRydWUsXG4gICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIH0sXG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgdXNlcm5hbWU6IHVzZXJuYW1lLFxuICAgICAgICB9LFxuICAgICAgICAvLyByZWxhdGlvbnM6IFsncHJvZmlsZScsICdwcmVzZW5jZScsICdwZWVyJ10sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICd1c2Vycy5VU0VSLkZJTkRfVVNFUl9TVUNDRVNTJyxcbiAgICAgICAgcmVzcG9uc2UsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdzeXN0ZW1zLklOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBzZWFyY2ggdXNlcnMgYnkgcXVlcnlcbiAgICogQHBhcmFtIHF1ZXJ5XG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBzZWFyY2hVc2VycyhwYXJhbXM6IGFueSkge1xuICAgIHRyeSB7XG4gICAgICBsZXQgcGFnZSA9IC0xLFxuICAgICAgICBsaW1pdCA9IC0xO1xuXG4gICAgICBjb25zdCBkYXRhOiBhbnkgPSB7fTtcbiAgICAgIGlmIChwYXJhbXMudXNlcm5hbWUpIHtcbiAgICAgICAgZGF0YS51c2VybmFtZSA9IHsgY29udGFpbnM6IHBhcmFtcy51c2VybmFtZSB9O1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5maXJzdG5hbWUpIHtcbiAgICAgICAgZGF0YS5maXJzdE5hbWUgPSB7IGNvbnRhaW5zOiBwYXJhbXMuZmlyc3RuYW1lIH07XG4gICAgICB9XG4gICAgICBpZiAocGFyYW1zLmxhc3RuYW1lKSB7XG4gICAgICAgIGRhdGEubGFzdE5hbWUgPSB7IGNvbnRhaW5zOiBwYXJhbXMubGFzdG5hbWUgfTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXJhbXMucGFnZSkge1xuICAgICAgICBwYWdlID0gcGFyc2VJbnQocGFyYW1zLnBhZ2UpO1xuICAgICAgfVxuICAgICAgaWYgKHBhcmFtcy5saW1pdCkge1xuICAgICAgICBsaW1pdCA9IHBhcnNlSW50KHBhcmFtcy5wYWdlKTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICAgICAgd2hlcmU6IGRhdGEsXG4gICAgICAgIHRha2U6IGxpbWl0LFxuICAgICAgICBza2lwOiBwYWdlICogbGltaXQsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICd1c2Vycy5VU0VSLlNFQVJDSF9VU0VSX1NVQ0NFU1MnLFxuICAgICAgICByZXNwb25zZSxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ3N5c3RlbXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEltYWdlU3RvcmFnZU1vZHVsZSB9IGZyb20gJy4uL2ltYWdlLXN0b3JhZ2UvaW1hZ2Utc3RvcmFnZS5tb2R1bGUnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgVXNlclByZXNlbmNlQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvdXNlci1wcmVzZW5jZS5jb250cm9sbGVyJztcbmltcG9ydCB7IFVzZXJQcm9maWxlc0NvbnRyb2xsZXIgfSBmcm9tICcuL2NvbnRyb2xsZXJzL3VzZXItcHJvZmlsZS5jb250cm9sbGVyJztcbmltcG9ydCB7IFVzZXJzQ29udHJvbGxlciB9IGZyb20gJy4vY29udHJvbGxlcnMvdXNlci5jb250cm9sbGVyJztcbmltcG9ydCB7IFByaXNtYU1vZHVsZVVzZXJQcmVzZW5jZSB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlclByZXNlbmNlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci1wcmVzZW5jZS5zZXJ2aWNlJztcbmltcG9ydCB7IFVzZXJQcm9maWxlU2VydmljZSB9IGZyb20gJy4vc2VydmljZXMvdXNlci1wcm9maWxlLnNlcnZpY2UnO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tICcuL3NlcnZpY2VzL3VzZXIuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgLy8gVHlwZU9ybU1vZHVsZS5mb3JGZWF0dXJlKFtVc2VyLCBQZWVyLCBQcm9maWxlXSksXG4gICAgSW1hZ2VTdG9yYWdlTW9kdWxlLFxuICAgIFByaXNtYU1vZHVsZVVzZXJQcmVzZW5jZSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtcbiAgICBVc2Vyc0NvbnRyb2xsZXIsXG4gICAgVXNlclByb2ZpbGVzQ29udHJvbGxlcixcbiAgICBVc2VyUHJlc2VuY2VDb250cm9sbGVyLFxuICBdLFxuICBwcm92aWRlcnM6IFtcbiAgICBIVFRQLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNlcnZpY2VzLlVTRVJTLFxuICAgICAgdXNlQ2xhc3M6IFVzZXJTZXJ2aWNlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogU2VydmljZXMuVVNFUlNfUFJPRklMRVMsXG4gICAgICB1c2VDbGFzczogVXNlclByb2ZpbGVTZXJ2aWNlLFxuICAgIH0sXG4gICAge1xuICAgICAgcHJvdmlkZTogU2VydmljZXMuVVNFUl9QUkVTRU5DRSxcbiAgICAgIHVzZUNsYXNzOiBVc2VyUHJlc2VuY2VTZXJ2aWNlLFxuICAgIH0sXG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICB7XG4gICAgICBwcm92aWRlOiBTZXJ2aWNlcy5VU0VSUyxcbiAgICAgIHVzZUNsYXNzOiBVc2VyU2VydmljZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNlcnZpY2VzLlVTRVJTX1BST0ZJTEVTLFxuICAgICAgdXNlQ2xhc3M6IFVzZXJQcm9maWxlU2VydmljZSxcbiAgICB9LFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IFNlcnZpY2VzLlVTRVJfUFJFU0VOQ0UsXG4gICAgICB1c2VDbGFzczogVXNlclByZXNlbmNlU2VydmljZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2Vyc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgTXVsdGVyRmllbGQgfSBmcm9tICdAbmVzdGpzL3BsYXRmb3JtLWV4cHJlc3MvbXVsdGVyL2ludGVyZmFjZXMvbXVsdGVyLW9wdGlvbnMuaW50ZXJmYWNlJztcblxuZXhwb3J0IGVudW0gUm91dGVzIHtcbiAgQVVUSCA9ICdhdXRoJyxcbiAgVVNFUlMgPSAndXNlcnMnLFxuICBVU0VSU19QUk9GSUxFUyA9ICd1c2Vycy9wcm9maWxlcycsXG4gIENPTlZFUlNBVElPTlMgPSAnY29udmVyc2F0aW9ucycsXG4gIE1FU1NBR0VTID0gJ2NvbnZlcnNhdGlvbnMvOmlkL21lc3NhZ2VzJyxcbiAgR1JPVVBTID0gJ2dyb3VwcycsXG4gIEdST1VQX01FU1NBR0VTID0gJ2dyb3Vwcy86aWQvbWVzc2FnZXMnLFxuICBHUk9VUF9SRUNJUElFTlRTID0gJ2dyb3Vwcy86aWQvcmVjaXBpZW50cycsXG4gIEVYSVNUUyA9ICdleGlzdHMnLFxuICBGUklFTkRTID0gJ2ZyaWVuZHMnLFxuICBGUklFTkRfUkVRVUVTVFMgPSAnZnJpZW5kcy9yZXF1ZXN0cycsXG4gIFVTRVJfUFJFU0VOQ0UgPSAndXNlcnMvcHJlc2VuY2UnLFxufVxuXG5leHBvcnQgZW51bSBTZXJ2aWNlcyB7XG4gIEFVVEggPSAnQVVUSF9TRVJWSUNFJyxcbiAgVVNFUlMgPSAnVVNFUlNfU0VSVklDRScsXG4gIFVTRVJTX1BST0ZJTEVTID0gJ1VTRVJTX1BST0ZJTEVTX1NFUlZJQ0UnLFxuICBVU0VSX1BSRVNFTkNFID0gJ1VTRVJfUFJFU0VOQ0VfU0VSVklDRScsXG4gIENPTlZFUlNBVElPTlMgPSAnQ09OVkVSU0FUSU9OU19TRVJWSUNFJyxcbiAgTUVTU0FHRVMgPSAnTUVTU0FHRV9TRVJWSUNFJyxcbiAgTUVTU0FHRV9BVFRBQ0hNRU5UUyA9ICdNRVNTQUdFX0FUVEFDSE1FTlRTX1NFUlZJQ0UnLFxuICBHQVRFV0FZX1NFU1NJT05fTUFOQUdFUiA9ICdHQVRFV0FZX1NFU1NJT05fTUFOQUdFUicsXG4gIEdST1VQUyA9ICdHUk9VUFNfU0VSVklDRScsXG4gIEdST1VQX01FU1NBR0VTID0gJ0dST1VQX01FU1NBR0VTX1NFUlZJQ0UnLFxuICBHUk9VUF9SRUNJUElFTlRTID0gJ0dST1VQX1JFQ0lQSUVOVFNfU0VSVklDRScsXG4gIEZSSUVORFNfU0VSVklDRSA9ICdGUklFTkRTX1NFUlZJQ0UnLFxuICBGUklFTkRTX1JFUVVFU1RTX1NFUlZJQ0UgPSAnRlJJRU5EX1JFUVVFU1RfU0VSVklDRScsXG4gIFNQQUNFU19DTElFTlQgPSAnU1BBQ0VTX0NMSUVOVCcsXG4gIElNQUdFX1VQTE9BRF9TRVJWSUNFID0gJ0lNQUdFX1VQTE9BRF9TRVJWSUNFJyxcbn1cblxuZXhwb3J0IGVudW0gU2VydmVyRXZlbnRzIHtcbiAgRlJJRU5EX1JFUVVFU1RfQ1JFQVRFRCA9ICdmcmllbmRyZXF1ZXN0LmNyZWF0ZScsXG4gIEZSSUVORF9SRVFVRVNUX0FDQ0VQVEVEID0gJ2ZyaWVuZHJlcXVlc3QuYWNjZXB0ZWQnLFxuICBGUklFTkRfUkVRVUVTVF9SRUpFQ1RFRCA9ICdmcmllbmRyZXF1ZXN0LnJlamVjdGVkJyxcbiAgRlJJRU5EX1JFUVVFU1RfQ0FOQ0VMTEVEID0gJ2ZyaWVuZHJlcXVlc3QuY2FuY2VsbGVkJyxcbiAgRlJJRU5EX1JFTU9WRUQgPSAnZnJpZW5kLnJlbW92ZWQnLFxufVxuXG5leHBvcnQgZW51bSBXZWJzb2NrZXRFdmVudHMge1xuICBGUklFTkRfUkVRVUVTVF9BQ0NFUFRFRCA9ICdvbkZyaWVuZFJlcXVlc3RBY2NlcHRlZCcsXG4gIEZSSUVORF9SRVFVRVNUX1JFSkVDVEVEID0gJ29uRnJpZW5kUmVxdWVzdFJlamVjdGVkJyxcbiAgVklERU9fQ0FMTF9SRUpFQ1RFRCA9ICdvblZpZGVvQ2FsbFJlamVjdGVkJyxcbiAgVk9JQ0VfQ0FMTF9BQ0NFUFRFRCA9ICdvblZvaWNlQ2FsbEFjY2VwdGVkJyxcbiAgVk9JQ0VfQ0FMTF9IQU5HX1VQID0gJ29uVm9pY2VDYWxsSGFuZ1VwJyxcbiAgVk9JQ0VfQ0FMTF9SRUpFQ1RFRCA9ICdvblZvaWNlQ2FsbFJlamVjdGVkJyxcbn1cblxuZXhwb3J0IGNvbnN0IFVzZXJQcm9maWxlRmlsZUZpZWxkczogTXVsdGVyRmllbGRbXSA9IFtcbiAge1xuICAgIG5hbWU6ICdiYW5uZXInLFxuICAgIG1heENvdW50OiAxLFxuICB9LFxuICB7XG4gICAgbmFtZTogJ2F2YXRhcicsXG4gICAgbWF4Q291bnQ6IDEsXG4gIH0sXG5dO1xuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYW1EZWNvcmF0b3IsIEV4ZWN1dGlvbkNvbnRleHQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGVkUmVxdWVzdCB9IGZyb20gJy4vdHlwZXMnO1xuXG5leHBvcnQgY29uc3QgQXV0aFVzZXIgPSBjcmVhdGVQYXJhbURlY29yYXRvcihcbiAgKGRhdGE6IHVua25vd24sIGN0eDogRXhlY3V0aW9uQ29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3QgPSA8QXV0aGVudGljYXRlZFJlcXVlc3Q+Y3R4LnN3aXRjaFRvSHR0cCgpLmdldFJlcXVlc3QoKTtcbiAgICByZXR1cm4gcmVxdWVzdC51c2VyO1xuICB9LFxuKTtcbiIsImltcG9ydCB7IEh0dHBFeGNlcHRpb24sIEh0dHBTdGF0dXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBOZXh0RnVuY3Rpb24sIFJlc3BvbnNlIH0gZnJvbSAnZXhwcmVzcyc7XG5pbXBvcnQgeyBBdHRhY2htZW50LCBBdXRoZW50aWNhdGVkUmVxdWVzdCB9IGZyb20gJy4vdHlwZXMnO1xuaW1wb3J0ICogYXMgYmNyeXB0IGZyb20gJ2JjcnlwdCc7XG5pbXBvcnQgeyB2NCBhcyB1dWlkdjQgfSBmcm9tICd1dWlkJztcbmltcG9ydCBzaGFycCBmcm9tICdzaGFycCc7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBoYXNoUGFzc3dvcmQocmF3UGFzc3dvcmQ6IHN0cmluZykge1xuICBjb25zdCBzYWx0ID0gYXdhaXQgYmNyeXB0LmdlblNhbHQoKTtcbiAgcmV0dXJuIGJjcnlwdC5oYXNoKHJhd1Bhc3N3b3JkLCBzYWx0KTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNvbXBhcmVIYXNoKHJhd1Bhc3N3b3JkOiBzdHJpbmcsIGhhc2hlZFBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgcmV0dXJuIGJjcnlwdC5jb21wYXJlKHJhd1Bhc3N3b3JkLCBoYXNoZWRQYXNzd29yZCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0F1dGhvcml6ZWQoXG4gIHJlcTogQXV0aGVudGljYXRlZFJlcXVlc3QsXG4gIHJlczogUmVzcG9uc2UsXG4gIG5leHQ6IE5leHRGdW5jdGlvbixcbikge1xuICBjb25zb2xlLmxvZygnaXNBdXRob3JpemVkJyk7XG4gIGlmIChyZXEudXNlcikgbmV4dCgpO1xuICBlbHNlIHRocm93IG5ldyBIdHRwRXhjZXB0aW9uKCdGb3JiaWRkZW4nLCBIdHRwU3RhdHVzLlVOQVVUSE9SSVpFRCk7XG59XG5cbmV4cG9ydCBjb25zdCBnZW5lcmF0ZVVVSURWNCA9ICgpID0+IHV1aWR2NCgpO1xuXG5leHBvcnQgY29uc3QgY29tcHJlc3NJbWFnZSA9IChhdHRhY2htZW50OiBBdHRhY2htZW50KSA9PlxuICBzaGFycChhdHRhY2htZW50LmJ1ZmZlcikucmVzaXplKDMwMCkuanBlZygpLnRvQnVmZmVyKCk7XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi90eXBlb3JtJztcbmltcG9ydCB7IFNvY2tldCB9IGZyb20gJ3NvY2tldC5pbyc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aGVudGljYXRlZFNvY2tldCBleHRlbmRzIFNvY2tldCB7XG4gIHVzZXI/OiBVc2VyO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBNYW55VG9PbmUsXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBCYXNlTWVzc2FnZSB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKCd0ZXh0JywgeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBjb250ZW50OiBzdHJpbmc7XG5cbiAgQENyZWF0ZURhdGVDb2x1bW4oeyBuYW1lOiAnY3JlYXRlZF9hdCcgfSlcbiAgY3JlYXRlZEF0OiBudW1iZXI7XG5cbiAgQE1hbnlUb09uZSgoKSA9PiBVc2VyLCAodXNlcikgPT4gdXNlci5tZXNzYWdlcylcbiAgYXV0aG9yOiBVc2VyO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIEluZGV4LFxuICBKb2luQ29sdW1uLFxuICBPbmVUb01hbnksXG4gIE9uZVRvT25lLFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxuICBVcGRhdGVEYXRlQ29sdW1uLFxufSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL01lc3NhZ2UnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5cbkBFbnRpdHkoeyBuYW1lOiAnY29udmVyc2F0aW9ucycgfSlcbkBJbmRleChbJ2NyZWF0b3IuaWQnLCAncmVjaXBpZW50LmlkJ10sIHsgdW5pcXVlOiB0cnVlIH0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBVc2VyLCB7IGNyZWF0ZUZvcmVpZ25LZXlDb25zdHJhaW50czogZmFsc2UgfSlcbiAgQEpvaW5Db2x1bW4oKVxuICBjcmVhdG9yOiBVc2VyO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBVc2VyLCB7IGNyZWF0ZUZvcmVpZ25LZXlDb25zdHJhaW50czogZmFsc2UgfSlcbiAgQEpvaW5Db2x1bW4oKVxuICByZWNpcGllbnQ6IFVzZXI7XG5cbiAgQE9uZVRvTWFueSgoKSA9PiBNZXNzYWdlLCAobWVzc2FnZSkgPT4gbWVzc2FnZS5jb252ZXJzYXRpb24sIHtcbiAgICBjYXNjYWRlOiBbJ2luc2VydCcsICdyZW1vdmUnLCAndXBkYXRlJ10sXG4gIH0pXG4gIEBKb2luQ29sdW1uKClcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICBAQ3JlYXRlRGF0ZUNvbHVtbih7IG5hbWU6ICdjcmVhdGVkX2F0JyB9KVxuICBjcmVhdGVkQXQ6IG51bWJlcjtcblxuICBAT25lVG9PbmUoKCkgPT4gTWVzc2FnZSlcbiAgQEpvaW5Db2x1bW4oeyBuYW1lOiAnbGFzdF9tZXNzYWdlX3NlbnQnIH0pXG4gIGxhc3RNZXNzYWdlU2VudDogTWVzc2FnZTtcblxuICBAVXBkYXRlRGF0ZUNvbHVtbih7IG5hbWU6ICd1cGRhdGVkX2F0JyB9KVxuICBsYXN0TWVzc2FnZVNlbnRBdDogRGF0ZTtcbn1cbiIsImltcG9ydCB7XG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIEVudGl0eSxcbiAgSm9pbkNvbHVtbixcbiAgT25lVG9PbmUsXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5cbkBFbnRpdHkoeyBuYW1lOiAnZnJpZW5kcycgfSlcbmV4cG9ydCBjbGFzcyBGcmllbmQge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQE9uZVRvT25lKCgpID0+IFVzZXIsIHsgY3JlYXRlRm9yZWlnbktleUNvbnN0cmFpbnRzOiBmYWxzZSB9KVxuICBASm9pbkNvbHVtbigpXG4gIHNlbmRlcjogVXNlcjtcblxuICBAT25lVG9PbmUoKCkgPT4gVXNlciwgeyBjcmVhdGVGb3JlaWduS2V5Q29uc3RyYWludHM6IGZhbHNlIH0pXG4gIEBKb2luQ29sdW1uKClcbiAgcmVjZWl2ZXI6IFVzZXI7XG5cbiAgQENyZWF0ZURhdGVDb2x1bW4oKVxuICBjcmVhdGVkQXQ6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7XG4gIENvbHVtbixcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbiAgRW50aXR5LFxuICBKb2luQ29sdW1uLFxuICBPbmVUb09uZSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBGcmllbmRSZXF1ZXN0U3RhdHVzIH0gZnJvbSAnLi4vLi4vdHlwZXMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5cbkBFbnRpdHkoeyBuYW1lOiAnZnJpZW5kX3JlcXVlc3RzJyB9KVxuZXhwb3J0IGNsYXNzIEZyaWVuZFJlcXVlc3Qge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQE9uZVRvT25lKCgpID0+IFVzZXIsIHsgY3JlYXRlRm9yZWlnbktleUNvbnN0cmFpbnRzOiBmYWxzZSB9KVxuICBASm9pbkNvbHVtbigpXG4gIHNlbmRlcjogVXNlcjtcblxuICBAT25lVG9PbmUoKCkgPT4gVXNlciwgeyBjcmVhdGVGb3JlaWduS2V5Q29uc3RyYWludHM6IGZhbHNlIH0pXG4gIEBKb2luQ29sdW1uKClcbiAgcmVjZWl2ZXI6IFVzZXI7XG5cbiAgQENyZWF0ZURhdGVDb2x1bW4oKVxuICBjcmVhdGVkQXQ6IG51bWJlcjtcblxuICAvLyBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgLy8gc3RhdHVzOiBGcmllbmRSZXF1ZXN0U3RhdHVzO1xuICBzdGF0dXM6IHN0cmluZztcbn1cbiIsImltcG9ydCB7XG4gIENvbHVtbixcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbiAgRW50aXR5LFxuICBKb2luQ29sdW1uLFxuICBKb2luVGFibGUsXG4gIE1hbnlUb01hbnksXG4gIE9uZVRvTWFueSxcbiAgT25lVG9PbmUsXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIFVwZGF0ZURhdGVDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgR3JvdXBNZXNzYWdlIH0gZnJvbSAnLi9Hcm91cE1lc3NhZ2UnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vTWVzc2FnZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcblxuQEVudGl0eSh7IG5hbWU6ICdncm91cHMnIH0pXG5leHBvcnQgY2xhc3MgR3JvdXAge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gIHRpdGxlPzogc3RyaW5nO1xuXG4gIEBNYW55VG9NYW55KCgpID0+IFVzZXIsIHVzZXIgPT4gdXNlci5ncm91cHMpXG4gIEBKb2luVGFibGUoKVxuICB1c2VyczogVXNlcltdO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBVc2VyLCB7IGNyZWF0ZUZvcmVpZ25LZXlDb25zdHJhaW50czogZmFsc2UgfSlcbiAgQEpvaW5Db2x1bW4oKVxuICBjcmVhdG9yOiBVc2VyO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBVc2VyLCB7IGNyZWF0ZUZvcmVpZ25LZXlDb25zdHJhaW50czogZmFsc2UgfSlcbiAgQEpvaW5Db2x1bW4oKVxuICBvd25lcjogVXNlcjtcblxuICBAT25lVG9NYW55KCgpID0+IEdyb3VwTWVzc2FnZSwgbWVzc2FnZSA9PiBtZXNzYWdlLmdyb3VwLCB7XG4gICAgY2FzY2FkZTogWydpbnNlcnQnLCAncmVtb3ZlJywgJ3VwZGF0ZSddLFxuICB9KVxuICBASm9pbkNvbHVtbigpXG4gIG1lc3NhZ2VzOiBHcm91cE1lc3NhZ2VbXTtcblxuICBAQ3JlYXRlRGF0ZUNvbHVtbih7IG5hbWU6ICdjcmVhdGVkX2F0JyB9KVxuICBjcmVhdGVkQXQ6IG51bWJlcjtcblxuICBAT25lVG9PbmUoKCkgPT4gR3JvdXBNZXNzYWdlKVxuICBASm9pbkNvbHVtbih7IG5hbWU6ICdsYXN0X21lc3NhZ2Vfc2VudCcgfSlcbiAgbGFzdE1lc3NhZ2VTZW50OiBHcm91cE1lc3NhZ2U7XG5cbiAgQFVwZGF0ZURhdGVDb2x1bW4oeyBuYW1lOiAndXBkYXRlZF9hdCcgfSlcbiAgbGFzdE1lc3NhZ2VTZW50QXQ6IERhdGU7XG5cbiAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGF2YXRhcj86IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgSm9pbkNvbHVtbiwgTWFueVRvT25lLCBPbmVUb01hbnkgfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IEJhc2VNZXNzYWdlIH0gZnJvbSAnLi9CYXNlTWVzc2FnZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IHsgR3JvdXBNZXNzYWdlQXR0YWNobWVudCB9IGZyb20gJy4vR3JvdXBNZXNzYWdlQXR0YWNobWVudCc7XG5pbXBvcnQgeyBNZXNzYWdlQXR0YWNobWVudCB9IGZyb20gJy4vTWVzc2FnZUF0dGFjaG1lbnQnO1xuXG5ARW50aXR5KHsgbmFtZTogJ2dyb3VwX21lc3NhZ2VzJyB9KVxuZXhwb3J0IGNsYXNzIEdyb3VwTWVzc2FnZSBleHRlbmRzIEJhc2VNZXNzYWdlIHtcbiAgQE1hbnlUb09uZSgoKSA9PiBHcm91cCwgKGdyb3VwKSA9PiBncm91cC5tZXNzYWdlcylcbiAgZ3JvdXA6IEdyb3VwO1xuXG4gIEBPbmVUb01hbnkoKCkgPT4gR3JvdXBNZXNzYWdlQXR0YWNobWVudCwgKGF0dGFjaG1lbnQpID0+IGF0dGFjaG1lbnQubWVzc2FnZSlcbiAgQEpvaW5Db2x1bW4oKVxuICBhdHRhY2htZW50cz86IE1lc3NhZ2VBdHRhY2htZW50W107XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIE1hbnlUb09uZSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgR3JvdXBNZXNzYWdlIH0gZnJvbSAnLi9Hcm91cE1lc3NhZ2UnO1xuXG5ARW50aXR5KHsgbmFtZTogJ2dyb3VwX21lc3NhZ2VfYXR0YWNobWVudHMnIH0pXG5leHBvcnQgY2xhc3MgR3JvdXBNZXNzYWdlQXR0YWNobWVudCB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKCd1dWlkJylcbiAga2V5OiBzdHJpbmc7XG5cbiAgQE1hbnlUb09uZSgoKSA9PiBHcm91cE1lc3NhZ2UsIChtZXNzYWdlKSA9PiBtZXNzYWdlLmF0dGFjaG1lbnRzLCB7XG4gICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgfSlcbiAgbWVzc2FnZTogR3JvdXBNZXNzYWdlO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBKb2luQ29sdW1uLCBNYW55VG9PbmUsIE9uZVRvTWFueSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgQmFzZU1lc3NhZ2UgfSBmcm9tICcuL0Jhc2VNZXNzYWdlJztcbmltcG9ydCB7IENvbnZlcnNhdGlvbiB9IGZyb20gJy4vQ29udmVyc2F0aW9uJztcbmltcG9ydCB7IE1lc3NhZ2VBdHRhY2htZW50IH0gZnJvbSAnLi9NZXNzYWdlQXR0YWNobWVudCc7XG5cbkBFbnRpdHkoeyBuYW1lOiAnbWVzc2FnZXMnIH0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZSBleHRlbmRzIEJhc2VNZXNzYWdlIHtcbiAgQE1hbnlUb09uZSgoKSA9PiBDb252ZXJzYXRpb24sIChjb252ZXJzYXRpb24pID0+IGNvbnZlcnNhdGlvbi5tZXNzYWdlcylcbiAgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb247XG5cbiAgQE9uZVRvTWFueSgoKSA9PiBNZXNzYWdlQXR0YWNobWVudCwgKGF0dGFjaG1lbnQpID0+IGF0dGFjaG1lbnQubWVzc2FnZSlcbiAgQEpvaW5Db2x1bW4oKVxuICBhdHRhY2htZW50czogTWVzc2FnZUF0dGFjaG1lbnRbXTtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgTWFueVRvT25lLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9NZXNzYWdlJztcblxuQEVudGl0eSh7IG5hbWU6ICdtZXNzYWdlX2F0dGFjaG1lbnRzJyB9KVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VBdHRhY2htZW50IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oJ3V1aWQnKVxuICBrZXk6IHN0cmluZztcblxuICBATWFueVRvT25lKCgpID0+IE1lc3NhZ2UsIChtZXNzYWdlKSA9PiBtZXNzYWdlLmF0dGFjaG1lbnRzLCB7XG4gICAgb25EZWxldGU6ICdDQVNDQURFJyxcbiAgfSlcbiAgbWVzc2FnZTogTWVzc2FnZTtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgT25lVG9PbmUsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL1VzZXInO1xuXG5ARW50aXR5KClcbmV4cG9ydCBjbGFzcyBQZWVyIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oJ3V1aWQnKVxuICBpZDogc3RyaW5nO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBVc2VyLCAodXNlcikgPT4gdXNlci5wZWVyKVxuICB1c2VyOiBVc2VyO1xufVxuIiwiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIE9uZVRvT25lLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcblxuQEVudGl0eSh7IG5hbWU6ICdwcm9maWxlcycgfSlcbmV4cG9ydCBjbGFzcyBQcm9maWxlIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyBkZWZhdWx0OiAnJyB9KVxuICBhYm91dD86IHN0cmluZztcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgYXZhdGFyPzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBiYW5uZXI/OiBzdHJpbmc7XG5cbiAgQE9uZVRvT25lKCgpID0+IFVzZXIpXG4gIHVzZXI6IFVzZXI7XG59XG4iLCJpbXBvcnQgeyBJU2Vzc2lvbiB9IGZyb20gJ2Nvbm5lY3QtdHlwZW9ybSc7XG5pbXBvcnQge1xuICBDb2x1bW4sXG4gIERlbGV0ZURhdGVDb2x1bW4sXG4gIEVudGl0eSxcbiAgSW5kZXgsXG4gIFByaW1hcnlDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuXG5ARW50aXR5KHsgbmFtZTogJ3Nlc3Npb25zJyB9KVxuZXhwb3J0IGNsYXNzIFNlc3Npb24gaW1wbGVtZW50cyBJU2Vzc2lvbiB7XG4gIEBJbmRleCgpXG4gIEBDb2x1bW4oJ2JpZ2ludCcpXG4gIGV4cGlyZWRBdDogbnVtYmVyID0gRGF0ZS5ub3coKTtcblxuICBAUHJpbWFyeUNvbHVtbigndmFyY2hhcicsIHsgbGVuZ3RoOiAyNTUgfSlcbiAgaWQ6IHN0cmluZztcblxuICBAQ29sdW1uKCd0ZXh0JylcbiAganNvbjogc3RyaW5nO1xuXG4gIEBEZWxldGVEYXRlQ29sdW1uKClcbiAgZGVzdHJveWVkQXQ6IERhdGU7XG59XG4iLCJpbXBvcnQgeyBFeGNsdWRlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBFbnRpdHksXG4gIEpvaW5Db2x1bW4sXG4gIE1hbnlUb01hbnksXG4gIE9uZVRvTWFueSxcbiAgT25lVG9PbmUsXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuL0dyb3VwJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL01lc3NhZ2UnO1xuaW1wb3J0IHsgUGVlciB9IGZyb20gJy4vUGVlcic7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9Qcm9maWxlJztcbmltcG9ydCB7IFVzZXJQcmVzZW5jZSB9IGZyb20gJy4vVXNlclByZXNlbmNlJztcblxuQEVudGl0eSh7IG5hbWU6ICd1c2VycycgfSlcbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oeyB1bmlxdWU6IHRydWUgfSlcbiAgdXNlcm5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgZW1haWw6IHN0cmluZztcblxuICBAQ29sdW1uKClcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbigpXG4gIGxhc3ROYW1lOiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IHNlbGVjdDogZmFsc2UgfSlcbiAgQEV4Y2x1ZGUoKVxuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBPbmVUb01hbnkoKCkgPT4gTWVzc2FnZSwgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuYXV0aG9yKVxuICBASm9pbkNvbHVtbigpXG4gIG1lc3NhZ2VzOiBNZXNzYWdlW107XG5cbiAgQE1hbnlUb01hbnkoKCkgPT4gR3JvdXAsIChncm91cCkgPT4gZ3JvdXAudXNlcnMpXG4gIGdyb3VwczogR3JvdXBbXTtcblxuICBAT25lVG9PbmUoKCkgPT4gUHJvZmlsZSwgeyBjYXNjYWRlOiBbJ2luc2VydCcsICd1cGRhdGUnXSB9KVxuICBASm9pbkNvbHVtbigpXG4gIHByb2ZpbGU6IFByb2ZpbGU7XG5cbiAgQE9uZVRvT25lKCgpID0+IFVzZXJQcmVzZW5jZSwgeyBjYXNjYWRlOiBbJ2luc2VydCcsICd1cGRhdGUnXSB9KVxuICBASm9pbkNvbHVtbigpXG4gIHByZXNlbmNlOiBVc2VyUHJlc2VuY2U7XG5cbiAgQE9uZVRvT25lKCgpID0+IFBlZXIsIChwZWVyKSA9PiBwZWVyLnVzZXIsIHtcbiAgICBjYXNjYWRlOiBbJ2luc2VydCcsICdyZW1vdmUnLCAndXBkYXRlJ10sXG4gIH0pXG4gIEBKb2luQ29sdW1uKClcbiAgcGVlcjogUGVlcjtcbn1cbiIsImltcG9ydCB7IENvbHVtbiwgRW50aXR5LCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoeyBuYW1lOiAndXNlcl9wcmVzZW5jZScgfSlcbmV4cG9ydCBjbGFzcyBVc2VyUHJlc2VuY2Uge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gIHN0YXR1c01lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IGRlZmF1bHQ6IGZhbHNlIH0pXG4gIHNob3dPZmZsaW5lOiBib29sZWFuO1xufVxuIiwiaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vZW50aXRpZXMvVXNlcic7XG5pbXBvcnQgeyBTZXNzaW9uIH0gZnJvbSAnLi9lbnRpdGllcy9TZXNzaW9uJztcbmltcG9ydCB7IENvbnZlcnNhdGlvbiB9IGZyb20gJy4vZW50aXRpZXMvQ29udmVyc2F0aW9uJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL2VudGl0aWVzL01lc3NhZ2UnO1xuaW1wb3J0IHsgR3JvdXAgfSBmcm9tICcuL2VudGl0aWVzL0dyb3VwJztcbmltcG9ydCB7IEdyb3VwTWVzc2FnZSB9IGZyb20gJy4vZW50aXRpZXMvR3JvdXBNZXNzYWdlJztcbmltcG9ydCB7IEZyaWVuZFJlcXVlc3QgfSBmcm9tICcuL2VudGl0aWVzL0ZyaWVuZFJlcXVlc3QnO1xuaW1wb3J0IHsgRnJpZW5kIH0gZnJvbSAnLi9lbnRpdGllcy9GcmllbmQnO1xuaW1wb3J0IHsgUHJvZmlsZSB9IGZyb20gJy4vZW50aXRpZXMvUHJvZmlsZSc7XG5pbXBvcnQgeyBNZXNzYWdlQXR0YWNobWVudCB9IGZyb20gJy4vZW50aXRpZXMvTWVzc2FnZUF0dGFjaG1lbnQnO1xuaW1wb3J0IHsgR3JvdXBNZXNzYWdlQXR0YWNobWVudCB9IGZyb20gJy4vZW50aXRpZXMvR3JvdXBNZXNzYWdlQXR0YWNobWVudCc7XG5pbXBvcnQgeyBVc2VyUHJlc2VuY2UgfSBmcm9tICcuL2VudGl0aWVzL1VzZXJQcmVzZW5jZSc7XG5pbXBvcnQgeyBQZWVyIH0gZnJvbSAnLi9lbnRpdGllcy9QZWVyJztcblxuY29uc3QgZW50aXRpZXMgPSBbXG4gIFVzZXIsXG4gIFNlc3Npb24sXG4gIENvbnZlcnNhdGlvbixcbiAgTWVzc2FnZSxcbiAgR3JvdXAsXG4gIEdyb3VwTWVzc2FnZSxcbiAgRnJpZW5kUmVxdWVzdCxcbiAgRnJpZW5kLFxuICBQcm9maWxlLFxuICBNZXNzYWdlQXR0YWNobWVudCxcbiAgR3JvdXBNZXNzYWdlQXR0YWNobWVudCxcbiAgVXNlclByZXNlbmNlLFxuICBQZWVyLFxuXTtcblxuZXhwb3J0IGRlZmF1bHQgZW50aXRpZXM7XG5cbmV4cG9ydCB7XG4gIFVzZXIsXG4gIFNlc3Npb24sXG4gIENvbnZlcnNhdGlvbixcbiAgTWVzc2FnZSxcbiAgR3JvdXAsXG4gIEdyb3VwTWVzc2FnZSxcbiAgRnJpZW5kUmVxdWVzdCxcbiAgRnJpZW5kLFxuICBQcm9maWxlLFxuICBNZXNzYWdlQXR0YWNobWVudCxcbiAgR3JvdXBNZXNzYWdlQXR0YWNobWVudCxcbiAgVXNlclByZXNlbmNlLFxuICBQZWVyLFxufTtcbiIsImltcG9ydCB7XG4gIENvbnZlcnNhdGlvbixcbiAgRnJpZW5kLFxuICBGcmllbmRSZXF1ZXN0LFxuICBHcm91cCxcbiAgR3JvdXBNZXNzYWdlLFxuICBHcm91cE1lc3NhZ2VBdHRhY2htZW50LFxuICBNZXNzYWdlLFxuICBNZXNzYWdlQXR0YWNobWVudCxcbiAgVXNlcixcbn0gZnJvbSAnLi90eXBlb3JtJztcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcblxuZXhwb3J0IHR5cGUgQ3JlYXRlVXNlckRldGFpbHMgPSB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIHBhc3N3b3JkOiBzdHJpbmc7XG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuICBsYXN0TmFtZTogc3RyaW5nO1xuICBwZWVyPzogYW55O1xufTtcblxuZXhwb3J0IHR5cGUgVmFsaWRhdGVVc2VyRGV0YWlscyA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEZpbmRVc2VyUGFyYW1zID0gUGFydGlhbDx7XG4gIGlkOiBudW1iZXI7XG4gIGVtYWlsOiBzdHJpbmc7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG59PjtcblxuZXhwb3J0IHR5cGUgRmluZFVzZXJPcHRpb25zID0gUGFydGlhbDx7XG4gIHNlbGVjdEFsbDogYm9vbGVhbjtcbn0+O1xuXG5leHBvcnQgdHlwZSBDcmVhdGVDb252ZXJzYXRpb25QYXJhbXMgPSB7XG4gIHVzZXJuYW1lOiBzdHJpbmc7XG4gIG1lc3NhZ2U6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENvbnZlcnNhdGlvbklkZW50aXR5VHlwZSA9ICdhdXRob3InIHwgJ3JlY2lwaWVudCc7XG5cbmV4cG9ydCB0eXBlIEZpbmRQYXJ0aWNpcGFudFBhcmFtcyA9IFBhcnRpYWw8e1xuICBpZDogbnVtYmVyO1xufT47XG5cbmV4cG9ydCBpbnRlcmZhY2UgQXV0aGVudGljYXRlZFJlcXVlc3QgZXh0ZW5kcyBSZXF1ZXN0IHtcbiAgdXNlcjogVXNlcjtcbn1cblxuZXhwb3J0IHR5cGUgQ3JlYXRlUGFydGljaXBhbnRQYXJhbXMgPSB7XG4gIGlkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBDcmVhdGVNZXNzYWdlUGFyYW1zID0ge1xuICBpZDogbnVtYmVyO1xuICBjb250ZW50Pzogc3RyaW5nO1xuICBhdHRhY2htZW50cz86IEF0dGFjaG1lbnRbXTtcbiAgdXNlcjogVXNlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZU1lc3NhZ2VSZXNwb25zZSA9IHtcbiAgbWVzc2FnZTogTWVzc2FnZTtcbiAgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb247XG59O1xuXG5leHBvcnQgdHlwZSBEZWxldGVNZXNzYWdlUGFyYW1zID0ge1xuICB1c2VySWQ6IG51bWJlcjtcbiAgY29udmVyc2F0aW9uSWQ6IG51bWJlcjtcbiAgbWVzc2FnZUlkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBGaW5kTWVzc2FnZVBhcmFtcyA9IHtcbiAgdXNlcklkOiBudW1iZXI7XG4gIGNvbnZlcnNhdGlvbklkOiBudW1iZXI7XG4gIG1lc3NhZ2VJZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgRWRpdE1lc3NhZ2VQYXJhbXMgPSB7XG4gIGNvbnZlcnNhdGlvbklkOiBudW1iZXI7XG4gIG1lc3NhZ2VJZDogbnVtYmVyO1xuICB1c2VySWQ6IG51bWJlcjtcbiAgY29udGVudDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRWRpdEdyb3VwTWVzc2FnZVBhcmFtcyA9IHtcbiAgZ3JvdXBJZDogbnVtYmVyO1xuICBtZXNzYWdlSWQ6IG51bWJlcjtcbiAgdXNlcklkOiBudW1iZXI7XG4gIGNvbnRlbnQ6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZUdyb3VwUGFyYW1zID0ge1xuICBjcmVhdG9yOiBzdHJpbmc7XG4gIHRpdGxlPzogc3RyaW5nO1xuICB1c2Vyczogc3RyaW5nW107XG59O1xuXG5leHBvcnQgdHlwZSBGZXRjaEdyb3Vwc1BhcmFtcyA9IHtcbiAgdXNlcklkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBDcmVhdGVHcm91cE1lc3NhZ2VQYXJhbXMgPSB7XG4gIGF1dGhvcklkOiBudW1iZXI7XG4gIGF0dGFjaG1lbnRzPzogQXR0YWNobWVudFtdO1xuICBjb250ZW50OiBzdHJpbmc7XG4gIGdyb3VwSWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZUdyb3VwTWVzc2FnZVJlc3BvbnNlID0ge1xuICBtZXNzYWdlOiBHcm91cE1lc3NhZ2U7XG4gIGdyb3VwOiBHcm91cDtcbn07XG5cbmV4cG9ydCB0eXBlIERlbGV0ZUdyb3VwTWVzc2FnZVBhcmFtcyA9IHtcbiAgdXNlcklkOiBudW1iZXI7XG4gIGdyb3VwSWQ6IG51bWJlcjtcbiAgbWVzc2FnZUlkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBZGRHcm91cFJlY2lwaWVudFBhcmFtcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgdXNlcklkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBSZW1vdmVHcm91cFJlY2lwaWVudFBhcmFtcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgcmVtb3ZlVXNlcklkOiBudW1iZXI7XG4gIGlzc3VlcklkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBZGRHcm91cFVzZXJSZXNwb25zZSA9IHtcbiAgZ3JvdXA6IEdyb3VwO1xuICB1c2VyOiBVc2VyO1xufTtcblxuZXhwb3J0IHR5cGUgUmVtb3ZlR3JvdXBVc2VyUmVzcG9uc2UgPSB7XG4gIGdyb3VwOiBHcm91cDtcbiAgdXNlcjogVXNlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEFjY2Vzc1BhcmFtcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdXNlcklkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBUcmFuc2Zlck93bmVyUGFyYW1zID0ge1xuICB1c2VySWQ6IG51bWJlcjtcbiAgZ3JvdXBJZDogbnVtYmVyO1xuICBuZXdPd25lcklkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBMZWF2ZUdyb3VwUGFyYW1zID0ge1xuICBpZDogbnVtYmVyO1xuICB1c2VySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENoZWNrVXNlckdyb3VwUGFyYW1zID0ge1xuICBpZDogbnVtYmVyO1xuICB1c2VySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZUZyaWVuZFBhcmFtcyA9IHtcbiAgdXNlcjogVXNlcjtcbiAgdXNlcm5hbWU6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIEZyaWVuZFJlcXVlc3RTdGF0dXMgPSAnYWNjZXB0ZWQnIHwgJ3BlbmRpbmcnIHwgJ3JlamVjdGVkJztcblxuZXhwb3J0IHR5cGUgRnJpZW5kUmVxdWVzdFBhcmFtcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdXNlcklkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBDYW5jZWxGcmllbmRSZXF1ZXN0UGFyYW1zID0ge1xuICBpZDogbnVtYmVyO1xuICB1c2VySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIERlbGV0ZUZyaWVuZFJlcXVlc3RQYXJhbXMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHVzZXJJZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQWNjZXB0RnJpZW5kUmVxdWVzdFJlc3BvbnNlID0ge1xuICBmcmllbmQ6IEZyaWVuZDtcbiAgZnJpZW5kUmVxdWVzdDogRnJpZW5kUmVxdWVzdDtcbn07XG5cbmV4cG9ydCB0eXBlIFJlbW92ZUZyaWVuZEV2ZW50UGF5bG9hZCA9IHtcbiAgZnJpZW5kOiBGcmllbmQ7XG4gIHVzZXJJZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgVXNlclByb2ZpbGVGaWxlcyA9IFBhcnRpYWw8e1xuICBiYW5uZXI6IEV4cHJlc3MuTXVsdGVyLkZpbGVbXTtcbiAgYXZhdGFyOiBFeHByZXNzLk11bHRlci5GaWxlW107XG59PjtcblxuZXhwb3J0IHR5cGUgVXBkYXRlVXNlclByb2ZpbGVQYXJhbXMgPSBQYXJ0aWFsPHtcbiAgYWJvdXQ6IHN0cmluZztcbiAgYmFubmVyOiBFeHByZXNzLk11bHRlci5GaWxlO1xuICBhdmF0YXI6IEV4cHJlc3MuTXVsdGVyLkZpbGU7XG59PjtcblxuZXhwb3J0IHR5cGUgSW1hZ2VQZXJtaXNzaW9uID0gJ3B1YmxpYy1yZWFkJyB8ICdwcml2YXRlJztcbmV4cG9ydCB0eXBlIFVwbG9hZEltYWdlUGFyYW1zID0ge1xuICBrZXk6IHN0cmluZztcbiAgZmlsZTogRXhwcmVzcy5NdWx0ZXIuRmlsZTtcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZW1wdHktaW50ZXJmYWNlXG5leHBvcnQgaW50ZXJmYWNlIEF0dGFjaG1lbnQgZXh0ZW5kcyBFeHByZXNzLk11bHRlci5GaWxlIHt9XG5cbmV4cG9ydCB0eXBlIFVwbG9hZE1lc3NhZ2VBdHRhY2htZW50UGFyYW1zID0ge1xuICBmaWxlOiBBdHRhY2htZW50O1xuICBtZXNzYWdlQXR0YWNobWVudDogTWVzc2FnZUF0dGFjaG1lbnQ7XG59O1xuXG5leHBvcnQgdHlwZSBVcGxvYWRHcm91cE1lc3NhZ2VBdHRhY2htZW50UGFyYW1zID0ge1xuICBmaWxlOiBBdHRhY2htZW50O1xuICBtZXNzYWdlQXR0YWNobWVudDogR3JvdXBNZXNzYWdlQXR0YWNobWVudDtcbn07XG5cbmV4cG9ydCB0eXBlIEdldENvbnZlcnNhdGlvbk1lc3NhZ2VzUGFyYW1zID0ge1xuICBpZDogbnVtYmVyO1xuICBsaW1pdDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgVXBkYXRlQ29udmVyc2F0aW9uUGFyYW1zID0gUGFydGlhbDx7XG4gIGlkOiBudW1iZXI7XG4gIGxhc3RNZXNzYWdlU2VudDogTWVzc2FnZTtcbn0+O1xuXG5leHBvcnQgdHlwZSBVc2VyUHJlc2VuY2VTdGF0dXMgPSAnb25saW5lJyB8ICdhd2F5JyB8ICdvZmZsaW5lJyB8ICdkbmQnO1xuXG5leHBvcnQgdHlwZSBVcGRhdGVTdGF0dXNNZXNzYWdlUGFyYW1zID0ge1xuICB1c2VyOiBVc2VyO1xuICBzdGF0dXNNZXNzYWdlOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBDYWxsSGFuZ1VwUGF5bG9hZCA9IHtcbiAgcmVjZWl2ZXI6IFVzZXI7XG4gIGNhbGxlcjogVXNlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFZvaWNlQ2FsbFBheWxvYWQgPSB7XG4gIGNvbnZlcnNhdGlvbklkOiBudW1iZXI7XG4gIHJlY2lwaWVudElkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBDYWxsQWNjZXB0ZWRQYXlsb2FkID0ge1xuICBjYWxsZXI6IFVzZXI7XG59O1xuXG5leHBvcnQgdHlwZSBVcGRhdGVHcm91cERldGFpbHNQYXJhbXMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHRpdGxlPzogc3RyaW5nO1xuICBhdmF0YXI/OiBBdHRhY2htZW50O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vcHJpc21hLm1vZHVsZSc7XG5leHBvcnQgKiBmcm9tICcuL3ByaXNtYS5zZXJ2aWNlJztcbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VBdXRoIH0gZnJvbSAnLi9wcmlzbWEuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtQcmlzbWFTZXJ2aWNlQXV0aF0sXG4gIGV4cG9ydHM6IFtQcmlzbWFTZXJ2aWNlQXV0aF0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXNtYU1vZHVsZUF1dGgge31cbiIsImltcG9ydCB7IE15U1FMQ2xpZW50IH0gZnJvbSAnQGNvbW1vbi9wcmlzbWEvbXlzcWxfcHJpc21hX2NsaWVudCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpc21hU2VydmljZUF1dGggZXh0ZW5kcyBNeVNRTENsaWVudCB7XG4gIGNsZWFuRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRyYW5zYWN0aW9uKFtcbiAgICAgIC8vIHRoaXMuYm9va21hcmsuZGVsZXRlTWFueSgpLFxuICAgICAgdGhpcy51c2VyLmRlbGV0ZU1hbnkoKSxcbiAgICBdKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7XG4gIENhdGNoLFxuICBIdHRwRXhjZXB0aW9uLFxuICBBcmd1bWVudHNIb3N0LFxuICBFeGNlcHRpb25GaWx0ZXIsXG4gIEh0dHBTdGF0dXMsXG4gIENhbGxIYW5kbGVyLFxuICBFeGVjdXRpb25Db250ZXh0LFxuICBJbmplY3RhYmxlLFxuICBOZXN0SW50ZXJjZXB0b3IsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgUnBjRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRhcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0STE4bkNvbnRleHRGcm9tUmVxdWVzdCB9IGZyb20gJ25lc3Rqcy1pMThuJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbVJlc3BvbnNlIHtcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBjb2RlOiBudW1iZXI7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBkYXRhOiBhbnk7XG4gIHRvdGFsUm93OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29kZTogbnVtYmVyLFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIGRhdGE6IGFueSxcbiAgICB0b3RhbFJvdzogbnVtYmVyLFxuICAgIHN1Y2Nlc3MgPSBmYWxzZSxcbiAgKSB7XG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgaWYgKHRvdGFsUm93ID4gMCkgdGhpcy50b3RhbFJvdyA9IHRvdGFsUm93O1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5zdWNjZXNzID0gc3VjY2VzcztcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEhUVFAge1xuICByZXNwb25zZTogQ3VzdG9tUmVzcG9uc2U7XG5cbiAgc2V0SHR0cFJlcXVlc3QoXG4gICAgY29kZTogbnVtYmVyLFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIGRhdGE6IGFueSA9IG51bGwsXG4gICAgdG90YWxSb3cgPSAwLFxuICAgIHN1Y2Nlc3MgPSB0cnVlLFxuICApIHtcbiAgICBpZiAoY29kZSAhPSBIdHRwU3RhdHVzLk9LKSBzdWNjZXNzID0gZmFsc2U7XG4gICAgdGhpcy5yZXNwb25zZSA9IG5ldyBDdXN0b21SZXNwb25zZShjb2RlLCBtZXNzYWdlLCBkYXRhLCB0b3RhbFJvdywgc3VjY2Vzcyk7XG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2U7XG4gIH1cblxuICBzdWNjZXNzKFxuICAgIGRhdGEgPSBudWxsLFxuICAgIGNvZGUgPSBIdHRwU3RhdHVzLk9LLFxuICAgIG1lc3NhZ2UgPSAnxJDEg25nIG5o4bqtcCB0aMOgbmggY8O0bmcnLFxuICAgIHN1Y2Nlc3MgPSB0cnVlLFxuICAgIHRvdGFsUm93ID0gMCxcbiAgKSB7XG4gICAgdGhpcy5yZXNwb25zZSA9IG5ldyBDdXN0b21SZXNwb25zZShjb2RlLCBtZXNzYWdlLCBkYXRhLCB0b3RhbFJvdywgc3VjY2Vzcyk7XG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2U7XG4gIH1cblxuICBub3RGb3VuZCgpIHtcbiAgICB0aGlzLnJlc3BvbnNlID0gbmV3IEN1c3RvbVJlc3BvbnNlKFxuICAgICAgSHR0cFN0YXR1cy5OT1RfRk9VTkQsXG4gICAgICAnTm90IGZvdW5kJyxcbiAgICAgIG51bGwsXG4gICAgICAwLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5yZXNwb25zZTtcbiAgfVxuXG4gIGVycm9yKFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIGNvZGU6IG51bWJlciA9IEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgZXJyb3I6IHN0cmluZyA9ICcnLFxuICApIHtcbiAgICBjb25zdCByZXNwb25zZSA9IG5ldyBDdXN0b21SZXNwb25zZShjb2RlLCBtZXNzYWdlLCBudWxsLCAwLCBmYWxzZSk7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbihyZXNwb25zZSk7XG4gIH1cbn1cblxuQENhdGNoKEh0dHBFeGNlcHRpb24pXG5leHBvcnQgY2xhc3MgSHR0cEV4Y2VwdGlvbkZpbHRlciBleHRlbmRzIEhUVFAgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBjYXRjaChleGNlcHRpb246IEh0dHBFeGNlcHRpb24sIGhvc3Q6IEFyZ3VtZW50c0hvc3QpIHtcbiAgICBjb25zdCBjdHggPSBob3N0LnN3aXRjaFRvSHR0cCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY3R4LmdldFJlc3BvbnNlPFJlc3BvbnNlPigpO1xuICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBjdHguZ2V0UmVxdWVzdDxSZXF1ZXN0PigpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGV4Y2VwdGlvbi5nZXRTdGF0dXMoKTtcblxuICAgIHJlc3BvbnNlLnN0YXR1cyhzdGF0dXMpLmpzb24oXG4gICAgICB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGV4Y2VwdGlvbi5tZXNzYWdlLFxuICAgICAgICB7XG4gICAgICAgICAgZXJyb3I6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhjZXB0aW9uLmdldFJlc3BvbnNlKCkpKS5tZXNzYWdlWzBdLFxuICAgICAgICB9LFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxufVxuXG5AQ2F0Y2goSHR0cEV4Y2VwdGlvbilcbmV4cG9ydCBjbGFzcyBScGNWYWxpZGF0aW9uRmlsdGVyIGV4dGVuZHMgSFRUUCBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlciB7XG4gIGNhdGNoKGV4Y2VwdGlvbjogSHR0cEV4Y2VwdGlvbiwgaG9zdDogQXJndW1lbnRzSG9zdCkge1xuICAgIGNvbnN0IHN0YXR1cyA9IGV4Y2VwdGlvbi5nZXRTdGF0dXMoKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleGNlcHRpb24uZ2V0UmVzcG9uc2UoKSkpLm1lc3NhZ2VbMF07XG4gICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3Qoc3RhdHVzLCBkYXRhLCBudWxsLCAwLCBmYWxzZSk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9yc0ludGVyY2VwdG9yIGV4dGVuZHMgSFRUUCBpbXBsZW1lbnRzIE5lc3RJbnRlcmNlcHRvciB7XG4gIGdldEtleU1lc3NhZ2UobWVzc2FnZSkge1xuICAgIGxldCBrZXkgPSAnJztcbiAgICBzd2l0Y2ggKG1lc3NhZ2UpIHtcbiAgICAgIGNhc2UgJ0ZpbGUgdG9vIGxhcmdlJzpcbiAgICAgICAga2V5ID0gJ3N5c3RlbXMuRklMRV9VUExPQUQuRklMRV9UT09fTEFSR0UnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1RvbyBtYW55IGZpbGVzJzpcbiAgICAgICAga2V5ID0gJ3N5c3RlbXMuRklMRV9VUExPQUQuVE9PX01BTllfRklMRVMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGtleSA9IG1lc3NhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdDxSZXF1ZXN0PigpO1xuICAgIGNvbnN0IGkxOG4gPSBnZXRJMThuQ29udGV4dEZyb21SZXF1ZXN0KHJlcXVlc3QpO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZSgpLnBpcGUoXG4gICAgICB0YXAoe1xuICAgICAgICBlcnJvcjogZXJyID0+IHtcbiAgICAgICAgICBlcnIubWVzc2FnZSA9IHRoaXMuZ2V0S2V5TWVzc2FnZShlcnIubWVzc2FnZSk7XG4gICAgICAgICAgdGhyb3cgdGhpcy5zZXRIdHRwUmVxdWVzdChlcnIuc3RhdHVzLCBpMThuLnQoZXJyLm1lc3NhZ2UpLCBudWxsLCAwLCBmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2h0dHAubW9kdWxlJztcbiIsImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvbXlzcWwnO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE15U1FMQ2xpZW50IGV4dGVuZHMgUHJpc21hQ2xpZW50IHtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgc3VwZXIoe1xuICAgICAgZGF0YXNvdXJjZXM6IHtcbiAgICAgICAgZGI6IHtcbiAgICAgICAgICB1cmw6IGNvbmZpZy5nZXRPclRocm93KCdNWVNRTF9EQVRBQkFTRV9VUkwnKSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBjbGVhbkRhdGFiYXNlKGNhbGxiYWNrOiBhbnkpIHtcbiAgICByZXR1cm4gY2FsbGJhY2s7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vcmVkaXMubW9kdWxlJztcbiIsImltcG9ydCB7IER5bmFtaWNNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHtcbiAgQ2xpZW50UHJvdmlkZXIsXG4gIENsaWVudHNNb2R1bGUsXG4gIFRyYW5zcG9ydCxcbn0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcblxuZXhwb3J0IGNsYXNzIFJlZGlzTW9kdWxlIHtcbiAgc3RhdGljIGdldFJlZGlzT3B0aW9uKG9wdGlvbjogb2JqZWN0KTogQ2xpZW50UHJvdmlkZXIge1xuICAgIGNvbnN0IGNvbmZpZyA9IG5ldyBDb25maWdTZXJ2aWNlKCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgLi4ub3B0aW9uLFxuICAgICAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuUkVESVMsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGhvc3Q6IGNvbmZpZy5nZXRPclRocm93KCdIT1NUX1JFRElTX1NFUlZFUicpLFxuICAgICAgICBwb3J0OiBjb25maWcuZ2V0T3JUaHJvdygnUE9SVF9QVUJMSUNfUkVESVMnKSxcbiAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZy5nZXRPclRocm93KCdQQVNTV09SRF9SRURJUycpLFxuICAgICAgfSxcbiAgICB9O1xuICB9XG5cbiAgc3RhdGljIHJlZ2lzdGVyKG5hbWU6IHN0cmluZyk6IER5bmFtaWNNb2R1bGUge1xuICAgIHJldHVybiB7XG4gICAgICBtb2R1bGU6IFJlZGlzTW9kdWxlLFxuICAgICAgaW1wb3J0czogW1xuICAgICAgICBDbGllbnRzTW9kdWxlLnJlZ2lzdGVyQXN5bmMoW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIG5hbWU6IG5hbWUsXG4gICAgICAgICAgICB1c2VGYWN0b3J5OiAoY29uZmlnU2VydmljZTogQ29uZmlnU2VydmljZSkgPT4gKHtcbiAgICAgICAgICAgICAgdHJhbnNwb3J0OiBUcmFuc3BvcnQuUkVESVMsXG4gICAgICAgICAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgICAgICAgICBob3N0OiBjb25maWdTZXJ2aWNlLmdldE9yVGhyb3coJ0hPU1RfUkVESVNfU0VSVkVSJyksXG4gICAgICAgICAgICAgICAgcG9ydDogY29uZmlnU2VydmljZS5nZXRPclRocm93KCdQT1JUX1BVQkxJQ19SRURJUycpLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkOiBjb25maWdTZXJ2aWNlLmdldE9yVGhyb3coJ1BBU1NXT1JEX1JFRElTJyksXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICAgIGluamVjdDogW0NvbmZpZ1NlcnZpY2VdLFxuICAgICAgICAgIH0sXG4gICAgICAgIF0pLFxuICAgICAgXSxcbiAgICAgIGV4cG9ydHM6IFtDbGllbnRzTW9kdWxlXSxcbiAgICB9O1xuICB9XG59XG4iLCJleHBvcnQgaW50ZXJmYWNlIEN1cnJlbnRVc2VyIHtcbiAgaWQ6IG51bWJlcjtcbiAgY3VzdG9tZXJPd25lcklkOiBudW1iZXI7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2N1cnJlbnQtdXNlci5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9xdWVyeS5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9xdWVyeS5wcmlzbWEnO1xuIiwiZXhwb3J0IGludGVyZmFjZSBMb29zZU9iamVjdCB7XG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cbiIsImltcG9ydCB7IE1vbmdvREJDbGllbnQgfSBmcm9tICdAY29tbW9uL3ByaXNtYS9tb25nb19wcmlzbWFfY2xpZW50JztcbmltcG9ydCB7IE15U1FMQ2xpZW50IH0gZnJvbSAnQGNvbW1vbi9wcmlzbWEvbXlzcWxfcHJpc21hX2NsaWVudCc7XG5pbXBvcnQgeyBMb29zZU9iamVjdCB9IGZyb20gJy4uL2ludGVyZmFjZSc7XG5leHBvcnQgY2xhc3MgUHJpc21hUXVlcnkge1xuICBwcm90ZWN0ZWQgY29ubmVjdGlvbjogTXlTUUxDbGllbnQgfCBNb25nb0RCQ2xpZW50O1xuICBwcm90ZWN0ZWQgX3NlbGVjdDogYW55ID0ge307XG4gIHByb3RlY3RlZCBfZnJvbTogc3RyaW5nW10gPSBbXTtcbiAgcHJvdGVjdGVkIF9qb2luOiBhbnkgPSB7fTtcbiAgcHJvdGVjdGVkIF9ncm91cDogYW55ID0gW107XG4gIHByb3RlY3RlZCBfZ3JvdXBfaWQ6IGFueSA9IFtdO1xuICBwcm90ZWN0ZWQgX2NvbmRpdGlvbjogYW55ID0gW107XG4gIHByb3RlY3RlZCBfd2hlcmU6IExvb3NlT2JqZWN0ID0ge1xuICAgIF9zZWFyY2hfb3I6IFtdLFxuICAgIF9maWx0ZXJfYW5kOiBbXSxcbiAgfTtcbiAgcHJvdGVjdGVkIF9vcmRlcjogc3RyaW5nW10gPSBbXTtcbiAgcHJvdGVjdGVkIF9saW1pdDogYW55O1xuICBwcm90ZWN0ZWQgX3NraXA6IGFueTtcbiAgcHJvdGVjdGVkIHBhcmFtczogTG9vc2VPYmplY3QgPSB7fTtcblxuICBwdWJsaWMgY29uc3RydWN0b3IoY29ubmVjdGlvbjogTXlTUUxDbGllbnQgfCBNb25nb0RCQ2xpZW50KSB7XG4gICAgdGhpcy5jb25uZWN0aW9uID0gY29ubmVjdGlvbjtcbiAgfVxuXG4gIHB1YmxpYyByZXNldChrZXk6IHN0cmluZykge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgc3dpdGNoIChrZXkpIHtcbiAgICAgICAgY2FzZSAnc2VsZWN0JzpcbiAgICAgICAgICB0aGlzLl9zZWxlY3QgPSB7fTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdjb25kaXRpb24nOlxuICAgICAgICAgIHRoaXMuX2NvbmRpdGlvbiA9IFtdO1xuICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgIGNhc2UgJ3doZXJlJzpcbiAgICAgICAgICB0aGlzLl93aGVyZVsnX3NlYXJjaF9vciddID0gW107XG4gICAgICAgICAgdGhpcy5fd2hlcmVbJ19maWx0ZXJfYW5kJ10gPSBbXTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICdvcmRlcic6XG4gICAgICAgICAgdGhpcy5fb3JkZXIgPSBbXTtcbiAgICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgcmVzZXRBbGwoKSB7XG4gICAgdGhpcy5fc2VsZWN0ID0ge307XG4gICAgdGhpcy5fY29uZGl0aW9uID0gW107XG4gICAgdGhpcy5fd2hlcmVbJ19zZWFyY2hfb3InXSA9IFtdO1xuICAgIHRoaXMuX3doZXJlWydfZmlsdGVyX2FuZCddID0gW107XG4gICAgdGhpcy5fb3JkZXIgPSBbXTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHNlbGVjdChzdGF0ZW1lbnQ6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgKEFycmF5LmlzQXJyYXkoc3RhdGVtZW50KSA/IHN0YXRlbWVudCA6IFtzdGF0ZW1lbnRdKS5mb3JFYWNoKHN0YXRlbWVudCA9PlxuICAgICAgdGhpcy5fc2VsZWN0LnB1c2goc3RhdGVtZW50KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgam9pbihzdGF0ZW1lbnQ6IHN0cmluZyB8IHN0cmluZ1tdKSB7XG4gICAgKEFycmF5LmlzQXJyYXkoc3RhdGVtZW50KSA/IHN0YXRlbWVudCA6IFtzdGF0ZW1lbnRdKS5mb3JFYWNoKHN0YXRlbWVudCA9PlxuICAgICAgdGhpcy5fam9pbi5wdXNoKHN0YXRlbWVudCksXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHB1YmxpYyB3aGVyZShzdGF0ZW1lbnQ6IHN0cmluZyB8IFtdIHwgTG9vc2VPYmplY3QpIHtcbiAgICAoQXJyYXkuaXNBcnJheShzdGF0ZW1lbnQpID8gc3RhdGVtZW50IDogW3N0YXRlbWVudF0pLmZvckVhY2goc3RhdGVtZW50ID0+XG4gICAgICB0aGlzLl9jb25kaXRpb24ucHVzaChzdGF0ZW1lbnQpLFxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyB3aGVyZVNlYXJjaChzdGF0ZW1lbnQ6IHN0cmluZyB8IFtdIHwgTG9vc2VPYmplY3QpIHtcbiAgICAoQXJyYXkuaXNBcnJheShzdGF0ZW1lbnQpID8gc3RhdGVtZW50IDogW3N0YXRlbWVudF0pLmZvckVhY2goc3RhdGVtZW50ID0+XG4gICAgICB0aGlzLl93aGVyZVsnX3NlYXJjaF9vciddLnB1c2goc3RhdGVtZW50KSxcbiAgICApO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIHB1YmxpYyB3aGVyZUZpbHRlcihzdGF0ZW1lbnQ6IHN0cmluZyB8IFtdIHwgTG9vc2VPYmplY3QpIHtcbiAgICBBcnJheS5pc0FycmF5KHN0YXRlbWVudCkgPyBzdGF0ZW1lbnQgOiBbc3RhdGVtZW50XTtcbiAgICB0aGlzLl93aGVyZVsnX2ZpbHRlcl9hbmQnXSA9IHN0YXRlbWVudDtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIG9yZGVyX2J5ID0gKHN0YXRlbWVudDogc3RyaW5nIHwgc3RyaW5nW10pID0+IHtcbiAgICAoQXJyYXkuaXNBcnJheShzdGF0ZW1lbnQpID8gc3RhdGVtZW50IDogW3N0YXRlbWVudF0pLmZvckVhY2goc3RhdGVtZW50ID0+XG4gICAgICB0aGlzLl9vcmRlci5wdXNoKHN0YXRlbWVudCksXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfTtcblxuICBwdWJsaWMgYXN5bmMgdG9SYXdQcmlzbWFEYigpIHtcbiAgICBjb25zdCBxdWVyeUZpbmFsQWN0aXZlOiBhbnkgPSB7fTtcbiAgICBjb25zdCBxdWVyeUZpbmFsOiBzdHJpbmdbXSA9IFtdO1xuICAgIGNvbnN0IG9yZGVyQnk6IGFueSA9IFtdO1xuICAgIGlmICh0aGlzLl9jb25kaXRpb24pIHtcbiAgICAgIHRoaXMuX2NvbmRpdGlvbi5mb3JFYWNoKChpdGVtOiBhbnkgPSB7fSkgPT4ge1xuICAgICAgICBxdWVyeUZpbmFsLnB1c2goaXRlbSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fd2hlcmUpIHtcbiAgICAgIGNvbnN0IG9iajE6IGFueSA9IHt9O1xuICAgICAgY29uc3Qgb2JqMjogYW55ID0ge307XG4gICAgICBjb25zdCBvYmozOiBhbnkgPSB7fTtcbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fd2hlcmVbJ19zZWFyY2hfb3InXS5sZW5ndGggPiAwICYmXG4gICAgICAgIHRoaXMuX3doZXJlWydfZmlsdGVyX2FuZCddLmxlbmd0aCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIG9iajFbJ09SJ10gPSB0aGlzLl93aGVyZVsnX3NlYXJjaF9vciddO1xuICAgICAgICBxdWVyeUZpbmFsLnB1c2gob2JqMSk7XG4gICAgICB9XG5cbiAgICAgIGlmIChcbiAgICAgICAgdGhpcy5fd2hlcmVbJ19maWx0ZXJfYW5kJ10ubGVuZ3RoID4gMCAmJlxuICAgICAgICB0aGlzLl93aGVyZVsnX3NlYXJjaF9vciddLmxlbmd0aCA9PT0gMFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGFycjogYW55ID0gW107XG4gICAgICAgIHRoaXMuX3doZXJlWydfZmlsdGVyX2FuZCddLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGFyci5wdXNoKEpTT04ucGFyc2UoaXRlbSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgb2JqMVsnT1InXSA9IGFycjtcbiAgICAgICAgcXVlcnlGaW5hbC5wdXNoKG9iajEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX3doZXJlWydfc2VhcmNoX29yJ10ubGVuZ3RoID4gMCAmJlxuICAgICAgICB0aGlzLl93aGVyZVsnX2ZpbHRlcl9hbmQnXS5sZW5ndGggPiAwXG4gICAgICApIHtcbiAgICAgICAgY29uc3QgYXJyOiBhbnkgPSBbXTtcbiAgICAgICAgdGhpcy5fd2hlcmVbJ19maWx0ZXJfYW5kJ10uZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgICAgYXJyLnB1c2goSlNPTi5wYXJzZShpdGVtKSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIG9iajFbJ09SJ10gPSB0aGlzLl93aGVyZVsnX3NlYXJjaF9vciddO1xuICAgICAgICBvYmoyWydPUiddID0gYXJyO1xuICAgICAgICBvYmozWydBTkQnXSA9IFtvYmoxLCBvYmoyXTtcbiAgICAgICAgcXVlcnlGaW5hbC5wdXNoKG9iajMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0aGlzLl9vcmRlci5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IGFycjogYW55ID0gW107XG4gICAgICB0aGlzLl9vcmRlci5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgYXJyLnB1c2goSlNPTi5wYXJzZShpdGVtKSk7XG4gICAgICB9KTtcbiAgICAgIG9yZGVyQnkucHVzaChhcnIpO1xuICAgIH1cbiAgICBxdWVyeUZpbmFsQWN0aXZlWydBTkQnXSA9IHF1ZXJ5RmluYWw7XG4gICAgdGhpcy5yZXNldEFsbCgpO1xuICAgIHJldHVybiB7IG9yZGVyOiBvcmRlckJ5WzBdLCB3aGVyZTogcXVlcnlGaW5hbEFjdGl2ZSB9O1xuICB9XG59XG4iLCJpbXBvcnQgeyBjcmVhdGVPYmplY3RDc3ZXcml0ZXIgfSBmcm9tICdjc3Ytd3JpdGVyJztcbmltcG9ydCB7IFN0b3JhZ2UgfSBmcm9tICdAZ29vZ2xlLWNsb3VkL3N0b3JhZ2UnO1xuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZSA9IGFzeW5jIChmaWxlLCBzdG9yYWdlOiBTdG9yYWdlLCBidWNrZXQ6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZXMsIHJlamVjdHMpID0+IHtcbiAgICBjb25zdCBmaWxlVXBsb2FkID0gc3RvcmFnZVxuICAgICAgLmJ1Y2tldChidWNrZXQpXG4gICAgICAuZmlsZShmaWxlLm9yaWdpbmFsbmFtZSk7XG4gICAgY29uc3Qgc3RyZWFtID0gZmlsZVVwbG9hZC5jcmVhdGVXcml0ZVN0cmVhbSh7XG4gICAgICByZXN1bWFibGU6IHRydWUsXG4gICAgICBtZXRhZGF0YToge1xuICAgICAgICBjb250ZW50VHlwZTogZmlsZS5taW1ldHlwZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgc3RyZWFtLm9uKCdmaW5pc2gnLCBhc3luYyAoKSA9PiB7XG4gICAgICByZXNvbHZlcyhmaWxlVXBsb2FkLmlkKTtcbiAgICB9KTtcbiAgICBzdHJlYW0ub24oJ2Vycm9yJywgZXJyID0+IHtcbiAgICAgIHJlamVjdHMoZXJyKTtcbiAgICB9KTtcbiAgICBzdHJlYW0uZW5kKGZpbGUuYnVmZmVyKTtcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCB1cGxvYWRGaWxlRnJvbVBhdGggPSBhc3luYyAocGF0aCwgc3RvcmFnZTogU3RvcmFnZSwgYnVja2V0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVzLCByZWplY3RzKSA9PiB7XG4gICAgc3RvcmFnZS5idWNrZXQoYnVja2V0KS51cGxvYWQocGF0aCwgKGVycm9yLCBmaWxlKSA9PiB7XG4gICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgcmVqZWN0cyhlcnJvcik7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHJlc29sdmVzKGZpbGUuaWQpO1xuICAgIH0pO1xuICB9KTtcbn1cblxuZXhwb3J0IGNvbnN0IGRlbGV0ZUZpbGUgPSBhc3luYyAoZmlsZU5hbWUsIHN0b3JhZ2U6IFN0b3JhZ2UsIGJ1Y2tldDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZXMsIHJlamVjdHMpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgc3RvcmFnZVxuICAgICAgICAuYnVja2V0KGJ1Y2tldClcbiAgICAgICAgLmZpbGUoZmlsZU5hbWUpXG4gICAgICAgIC5kZWxldGUoeyBpZ25vcmVOb3RGb3VuZDogdHJ1ZSB9KTtcbiAgICAgIHJlc29sdmVzKHt9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0cyhlcnJvcik7XG4gICAgfVxuICB9KVxufVxuXG5leHBvcnQgY29uc3QgZXhwb3J0RGF0YVRvQ3N2ID0gKFxuICBkYXRhOiBhbnlbXSxcbiAgaGVhZGVyOiBhbnlbXSxcbiAgZmlsZVBhdGg6IHN0cmluZyxcbik6IFByb21pc2UgPHN0cmluZz4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmVzLCByZWplY3RzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHdyaXRlciA9IGNyZWF0ZU9iamVjdENzdldyaXRlcih7XG4gICAgICAgIHBhdGg6IGZpbGVQYXRoLFxuICAgICAgICBoZWFkZXIsXG4gICAgICAgIGVuY29kaW5nOiAndXRmOCdcbiAgICAgIH0pO1xuICAgICAgYXdhaXQgd3JpdGVyLndyaXRlUmVjb3JkcyhkYXRhKTtcbiAgICAgIHJlc29sdmVzKGZpbGVQYXRoKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgcmVqZWN0cyhlcnJvcik7XG4gICAgfVxuICB9KVxufSIsImNvbnN0IGdldE5lc3RlZE9iamVjdFZhbHVlID0gKG9iajogYW55LCBmaWVsZHM6IHN0cmluZ1tdKSA9PiB7XG4gIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgb2JqW2ZpZWxkXSA9IG9ialtmaWVsZF0/Lm1hcCgoZGF0YTogYW55KSA9PiBPYmplY3QudmFsdWVzKGRhdGEpWzBdKTtcbiAgfVxuICByZXR1cm4gb2JqO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZVJlZHVuZGFudCA9ICh0YXJnZXQ6IGFueSwgZmllbGRzOiBzdHJpbmdbXSkgPT4ge1xuICBpZiAoIXRhcmdldD8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGdldE5lc3RlZE9iamVjdFZhbHVlKHRhcmdldCwgZmllbGRzKTtcbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ/Lm1hcCgoaXRlbTogYW55KSA9PiB7XG4gICAgcmV0dXJuIGdldE5lc3RlZE9iamVjdFZhbHVlKGl0ZW0sIGZpZWxkcyk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGNvbnN0IHJlbW92ZU9iamVjdFByb3BlcnRpZXMgPSAodGFyZ2V0OiBhbnksIGZpZWxkczogc3RyaW5nW10pID0+IHtcbiAgZm9yIChjb25zdCBmaWVsZCBvZiBmaWVsZHMpIHtcbiAgICBkZWxldGUgdGFyZ2V0W2ZpZWxkXTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsImV4cG9ydCAqIGZyb20gJy4vZmlsdGVyLWRhdGEnO1xuZXhwb3J0ICogZnJvbSAnLi9kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9maWxlJztcbiIsIi8vIGltcG9ydCB7IElEX1NQTElUIH0gZnJvbSAnQGFwcHMvcHJvamVjdHMvc3JjL3Byb2plY3RzLmNvbW1vbic7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBTdGF0dXMgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uUXVlcnlEdG8gfSBmcm9tICcuLi9kdG8nO1xuaW1wb3J0IHsgUGFnaW5hdGlvbiB9IGZyb20gJy4uL3R5cGVzJztcbmltcG9ydCB7IFByaXNtYVF1ZXJ5IH0gZnJvbSAnLi9kdG8vcXVlcnkucHJpc21hJztcbmltcG9ydCB7IGlzS2V5UXVlcnlWYWxpZCB9IGZyb20gJy4vdmFsaWRhdGVzL2tleS1xdWVyeS51dGlsJztcblxuZXhwb3J0IHR5cGUgUkVTVGZ1bFBhcmFtcyA9IHtcbiAgbGlzdD86IHtcbiAgICBkYXRlU2NvcGU/OiBzdHJpbmdbXTtcbiAgICBmaWx0ZXJGaWVsZHM/OiBzdHJpbmdbXTtcbiAgICBzZWFyY2hGaWVsZHM/OiBzdHJpbmdbXTtcbiAgICBvcmRlckZpZWxkcz86IHN0cmluZ1tdO1xuICB9O1xuICBpdGVtPzoge1xuICAgIGlkUGFyYW0/OiBzdHJpbmc7XG4gICAgZGVmYXVsdFN5c3RlbUZpZWxkcz86IGJvb2xlYW47XG4gICAgY3JlYXRlZF9kYXRlPzogc3RyaW5nO1xuICAgIGNyZWF0ZWRfYnk/OiBzdHJpbmc7XG4gICAgbW9kaWZpZWRfZGF0ZT86IHN0cmluZztcbiAgICBtb2RpZmllZF9ieT86IHN0cmluZztcbiAgfTtcbn07XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSRVNUZnVsU2VydmljZSBleHRlbmRzIEhUVFAge1xuICBwcm90ZWN0ZWQgcGFyYW1zOiBSRVNUZnVsUGFyYW1zID0ge307XG4gIHByb3RlY3RlZCBhYnN0cmFjdCBnZXREYigpOiBQcmlzbWFRdWVyeTtcbiAgcHJvdGVjdGVkIGFzeW5jIGdldExpc3RzKHBhcmFtczogUGFnaW5hdGlvblF1ZXJ5RHRvKTogUHJvbWlzZTxQYWdpbmF0aW9uPiB7XG4gICAgY29uc3QgcXVlcnlEYiA9IHRoaXMuZ2V0RGIoKTtcbiAgICBjb25zdCBwYWdpbmF0aW9uUGFyYW1zOiBQYWdpbmF0aW9uID0ge1xuICAgICAgc2tpcDogMCxcbiAgICAgIHRha2U6IDEwLFxuICAgICAgc29ydDogW10sXG4gICAgICBzZWFyY2g6IFtdLFxuICAgICAgY3Vyc29yOiAwLFxuICAgIH07XG4gICAgY29uc3QgeyBwYWdlLCBsaW1pdCwgb3JkZXIsIHEgfSA9IHBhcmFtcztcblxuICAgIC8vIENoZWNrIGxpbWl0XG4gICAgaWYgKCFpc0tleVF1ZXJ5VmFsaWQobGltaXQgfHwgJy0xJywgL14oLSopXFxkKyQvZykpIHtcbiAgICAgIHRocm93IHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICdsaW1pdCB2YWx1ZSBtdXN0IGJlIHRoZSBudW1iZXInLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBwYWdlXG4gICAgaWYgKCFpc0tleVF1ZXJ5VmFsaWQocGFnZSB8fCAnMScsIC9eXFxkKyQvZykpIHtcbiAgICAgIHRocm93IHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICdwYWdlIHZhbHVlIG11c3QgYmUgdGhlIHBvc2l0aXZlIG51bWJlcicsXG4gICAgICApO1xuICAgIH1cblxuICAgIC8vIENoZWNrIG9yZGVyXG4gICAgaWYgKFxuICAgICAgIWlzS2V5UXVlcnlWYWxpZChcbiAgICAgICAgb3JkZXIgfHwgJ2NyZWF0ZWREYXRlIGFzYycsXG4gICAgICAgIC9eKChcXHcrIFxcdyspKCwoXFx3KyBcXHcrKSkqKSskL2csXG4gICAgICApXG4gICAgKSB7XG4gICAgICB0aHJvdyB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnb3JkZXIgdmFsdWUgaXMgbm90IHZhbGlkJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgbGV0IF9saW1pdCA9IHBhcnNlSW50KGxpbWl0KTtcbiAgICBsZXQgX3BhZ2UgPSBwYXJzZUludChwYWdlKTtcblxuICAgIGlmIChfcGFnZSA8IDEpIHtcbiAgICAgIF9wYWdlID0gMTtcbiAgICB9XG5cbiAgICBpZiAoX2xpbWl0ID09PSAtMSkge1xuICAgICAgX2xpbWl0ID0gMDtcbiAgICB9IGVsc2UgaWYgKF9saW1pdCA8IDEpIHtcbiAgICAgIF9saW1pdCA9IDEwO1xuICAgIH1cblxuICAgIGNvbnN0IG9mZnNldCA9IChfcGFnZSAtIDEpICogX2xpbWl0O1xuICAgIHBhZ2luYXRpb25QYXJhbXMuc2tpcCA9IG9mZnNldCA/IG9mZnNldCA6IDA7XG4gICAgcGFnaW5hdGlvblBhcmFtcy50YWtlID0gX2xpbWl0ID8gX2xpbWl0IDogdW5kZWZpbmVkO1xuXG4gICAgaWYgKHBhcmFtcz8uc3RhcnRJZCkge1xuICAgICAgcGFnaW5hdGlvblBhcmFtcy5za2lwID0gMTtcbiAgICAgIHBhZ2luYXRpb25QYXJhbXMuY3Vyc29yID0gcGFyYW1zLnN0YXJ0SWRcbiAgICAgICAgPyBwYXJzZUludChwYXJhbXMuc3RhcnRJZC50b1N0cmluZygpKVxuICAgICAgICA6IDA7XG4gICAgfVxuXG4gICAgLy8gWOG7rSBsw70gc2VhcmNoIHdpdGggcHJlZml4IHEgaW4gZGF0YWJhc2VcbiAgICBjb25zdCBzZWFyY2hGaWVsZHMgPSB0aGlzLnBhcmFtcy5saXN0Py5zZWFyY2hGaWVsZHM7XG4gICAgaWYgKHEgJiYgc2VhcmNoRmllbGRzPy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG9yV2hlcmU6IGFueSA9IFtdO1xuICAgICAgZm9yIChsZXQgZmllbGQgb2Ygc2VhcmNoRmllbGRzKSB7XG4gICAgICAgIGNvbnN0IG9iajE6IGFueSA9IHt9O1xuICAgICAgICBjb25zdCBvYmoyOiBhbnkgPSB7fTtcblxuICAgICAgICBpZiAoZmllbGQuaW5jbHVkZXMoJ2ludC0nKSkge1xuICAgICAgICAgIGZpZWxkID0gZmllbGQuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICBvYmoxWydpbiddID0gaXNOYU4ocGFyc2VJbnQocSkpID8gdW5kZWZpbmVkIDogcGFyc2VJbnQocSk7XG4gICAgICAgIH0gZWxzZSBpZiAoZmllbGQuaW5jbHVkZXMoJ2Zsb2F0LScpKSB7XG4gICAgICAgICAgZmllbGQgPSBmaWVsZC5zcGxpdCgnLScpWzFdO1xuICAgICAgICAgIG9iajFbJ2luJ10gPSBpc05hTihwYXJzZUZsb2F0KHEpKSA/IHVuZGVmaW5lZCA6IHBhcnNlRmxvYXQocSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgb2JqMVsnY29udGFpbnMnXSA9IHE7XG4gICAgICAgIH1cbiAgICAgICAgb2JqMltmaWVsZF0gPSBvYmoxO1xuICAgICAgICBvcldoZXJlLnB1c2gob2JqMik7XG4gICAgICB9XG4gICAgICBpZiAob3JXaGVyZS5sZW5ndGgpIHtcbiAgICAgICAgcXVlcnlEYi53aGVyZVNlYXJjaChvcldoZXJlKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBY4butIGzDvSBmaWxlciB3aXRoIHByZWZpeCBbZl1fW2ZpZWxkXT10ZXN0fGh1bmcgaW4gZGF0YWJhc2VdXG4gICAgY29uc3QgZmlsdGVyRmllbGRzID0gdGhpcy5wYXJhbXMubGlzdD8uZmlsdGVyRmllbGRzO1xuICAgIGlmIChmaWx0ZXJGaWVsZHM/Lmxlbmd0aCkge1xuICAgICAgY29uc3Qgb3JXaGVyZU11bHRpOiBhbnkgPSBbXTtcbiAgICAgIGZvciAoY29uc3QgZmllbGQgb2YgZmlsdGVyRmllbGRzKSB7XG4gICAgICAgIGNvbnN0IGhhc0FsaWFzID0gZmllbGQuaW5kZXhPZignLicpICE9PSAtMTtcbiAgICAgICAgY29uc3QgZmllbGRWYWx1ZSA9XG4gICAgICAgICAgcGFyYW1zW2BmXyR7aGFzQWxpYXMgPyBmaWVsZC5zcGxpdCgnLicpWzFdIDogZmllbGR9YF07XG4gICAgICAgIGlmIChmaWVsZFZhbHVlKSB7XG4gICAgICAgICAgY29uc3Qgb2JqOiBhbnkgPSB7fTtcbiAgICAgICAgICBpZiAoZmllbGRWYWx1ZS5pbmRleE9mKCd8JykgPT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQuaW5jbHVkZXMoJ0lkJykgfHwgZmllbGQuaW5jbHVkZXMoJ2lkJykpIHtcbiAgICAgICAgICAgICAgb2JqW2ZpZWxkXSA9IHBhcnNlSW50KGAke2ZpZWxkVmFsdWV9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmpbZmllbGRdID0gYCR7ZmllbGRWYWx1ZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3JXaGVyZU11bHRpLnB1c2goSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkVmFsdWUuc3BsaXQoJ3wnKS5tYXAoaXRlbSA9PiB7XG4gICAgICAgICAgICAgIGlmIChmaWVsZC5pbmNsdWRlcygnSWQnKSB8fCBmaWVsZC5pbmNsdWRlcygnaWQnKSkge1xuICAgICAgICAgICAgICAgIG9ialtmaWVsZF0gPSBwYXJzZUludChpdGVtKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBvYmpbZmllbGRdID0gaXRlbTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBvcldoZXJlTXVsdGkucHVzaChKU09OLnN0cmluZ2lmeShvYmopKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAob3JXaGVyZU11bHRpLmxlbmd0aCkge1xuICAgICAgICBxdWVyeURiLndoZXJlRmlsdGVyKG9yV2hlcmVNdWx0aSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gWOG7rSBsw70gb3JkZXJGaWxlZHMgd2l0aCBwcmVmaXggb3JkZXI9bmFtZSBhc2MsIHNlcmlhbE51bWJlciBkZXNjIGluIGRhdGFiYXNlXVxuXG4gICAgY29uc3Qgb3JkZXJGaWVsZHMgPSB0aGlzLnBhcmFtcz8ubGlzdD8ub3JkZXJGaWVsZHM7XG4gICAgaWYgKG9yZGVyICYmIG9yZGVyRmllbGRzPy5sZW5ndGgpIHtcbiAgICAgIGZvciAoY29uc3QgbyBvZiBvcmRlci5zcGxpdCgvXFxzKixcXHMqL2cpKSB7XG4gICAgICAgIGNvbnN0IF9zb3J0OiBhbnkgPSB7fTtcblxuICAgICAgICBsZXQgW29yZGVyaW5nLCBkaXJlY3Rpb25dID0gby5zcGxpdCgvXFxzKy9nKTtcbiAgICAgICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uLnRvTG93ZXJDYXNlKCk7XG5cbiAgICAgICAgaWYgKCFbJ2FzYycsICdkZXNjJ10uaW5jbHVkZXMoZGlyZWN0aW9uKSkge1xuICAgICAgICAgIGRpcmVjdGlvbiA9ICdhc2MnO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9yZGVyaW5nICYmIG9yZGVyRmllbGRzLmluY2x1ZGVzKG9yZGVyaW5nKSkge1xuICAgICAgICAgIF9zb3J0W29yZGVyaW5nXSA9IGRpcmVjdGlvbjtcbiAgICAgICAgICBxdWVyeURiLm9yZGVyX2J5KEpTT04uc3RyaW5naWZ5KF9zb3J0KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBjb25zdCByZXN1bHRRdWVyeSA9IGF3YWl0IHF1ZXJ5RGIudG9SYXdQcmlzbWFEYigpO1xuICAgIHBhZ2luYXRpb25QYXJhbXMuc29ydCA9IHJlc3VsdFF1ZXJ5Py5vcmRlcjtcbiAgICBwYWdpbmF0aW9uUGFyYW1zLnNlYXJjaCA9IHJlc3VsdFF1ZXJ5Py53aGVyZTtcbiAgICAvLyBxdWVyeURiLnJlc2V0KCk7XG4gICAgcmV0dXJuIHBhZ2luYXRpb25QYXJhbXM7XG4gIH1cbn1cbiIsIi8qKlxuICogaXMga2V5IHF1ZXJ5IHZhbGlkXG4gKiBAcGFyYW0ga2V5TmFtZVxuICogQHBhcmFtIHBhdHRlcm5cbiAqIEByZXR1cm5zXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBpc0tleVF1ZXJ5VmFsaWQoa2V5TmFtZTogc3RyaW5nLCBwYXR0ZXJuKSB7XG4gIHJldHVybiBrZXlOYW1lICYmIGtleU5hbWUubWF0Y2gocGF0dGVybik7XG59XG5cbi8qKlxuICogaXMgZl9rZXkgcXVlcnkgdmFsaWRcbiAqIEBwYXJhbSBrZXlOYW1lXG4gKiBAcGFyYW0gcGF0dGVyblxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzRktleVF1ZXJ5VmFsaWQoXG4gIGtleU5hbWU6IHN0cmluZyxcbiAgcGF0dGVybiA9IC9eWy0xfCgoXFxkKykoXFx8XFxkKSopXSskL2csXG4pIHtcbiAgcmV0dXJuIGtleU5hbWUgJiYga2V5TmFtZS5tYXRjaChwYXR0ZXJuKTtcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhd3Mtc2RrL2NsaWVudC1zM1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbW1vblwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvbmZpZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2NvcmVcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9ldmVudC1lbWl0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvand0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3Bhc3Nwb3J0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvdGhyb3R0bGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvd2Vic29ja2V0c1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcHJpc21hL215c3FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJjcnlwdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy10cmFuc2Zvcm1lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzcy12YWxpZGF0b3JcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3N2LXdyaXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJsb2Rhc2hcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmVzdGpzLWkxOG5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzaGFycFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb2NrZXQuaW9cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwidHlwZW9ybVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ1dWlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgTWljcm9zZXJ2aWNlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBSZWRpc01vZHVsZSB9IGZyb20gJ0Bjb21tb24vcmVkaXMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IExvZ2dlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IEFwcE1vZHVsZSB9IGZyb20gJ0BhcHBzL2NoYXQvYXBwLm1vZHVsZSc7XG5cbmFzeW5jIGZ1bmN0aW9uIGJvb3RzdHJhcCgpIHtcbiAgY29uc3QgYXBwID0gYXdhaXQgTmVzdEZhY3RvcnkuY3JlYXRlTWljcm9zZXJ2aWNlPE1pY3Jvc2VydmljZU9wdGlvbnM+KFxuICAgIEFwcE1vZHVsZSxcbiAgICBSZWRpc01vZHVsZS5nZXRSZWRpc09wdGlvbih7XG4gICAgICBsb2dnZXI6IFsnZXJyb3InLCAnd2FybicsICdsb2cnLCAnZGVidWcnLCAndmVyYm9zZSddLFxuICAgIH0pLFxuICApO1xuXG4gIGNvbnN0IGNvbmZpZyA9IGFwcC5nZXQoQ29uZmlnU2VydmljZSk7XG4gIGF3YWl0IGFwcC5saXN0ZW4oKS50aGVuKCgpID0+IHtcbiAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdDbGllbnQgc2VydmljZScpO1xuICAgIGxvZ2dlci5sb2coXG4gICAgICBgQVBJIEdhdGV3YXkgc3RhcnQgYXQgcG9ydDogJHtjb25maWcuZ2V0KFxuICAgICAgICAnUE9SVCcsXG4gICAgICApfVxcbk1pY3Jvc2VydmljZSBwb3J0OiR7Y29uZmlnLmdldChcbiAgICAgICAgJ1BPUlRfUFVCTElDX1JFRElTJyxcbiAgICAgICl9XFxuTVlTUUw6ICR7Y29uZmlnLmdldCgnTVlTUUxfREFUQUJBU0VfVVJMJyl9XFxuTU9OR09EQjogJHtjb25maWcuZ2V0KFxuICAgICAgICAnTU9OR09EQl9EQVRBQkFTRV9VUkwnLFxuICAgICAgKX1gLFxuICAgICk7XG4gIH0pO1xufVxuXG5ib290c3RyYXAoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==