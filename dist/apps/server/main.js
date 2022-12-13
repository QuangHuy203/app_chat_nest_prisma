/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./apps/chat/users/interfaces/user.ts":
/*!********************************************!*\
  !*** ./apps/chat/users/interfaces/user.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));


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

/***/ "./apps/server/src/chat/auth/auth.controller.ts":
/*!******************************************************!*\
  !*** ./apps/server/src/chat/auth/auth.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const CreateUser_dto_1 = __webpack_require__(/*! @apps/chat/auth/dtos/CreateUser.dto */ "./apps/chat/auth/dtos/CreateUser.dto.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const types_1 = __webpack_require__(/*! @apps/chat/utils/types */ "./apps/chat/utils/types.ts");
const decorator_1 = __webpack_require__(/*! @common/auth/decorator */ "./libs/common/auth/decorator/index.ts");
const guards_1 = __webpack_require__(/*! @common/auth/guards */ "./libs/common/auth/guards/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const express_1 = __webpack_require__(/*! express */ "express");
let AuthController = class AuthController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('Auth');
    }
    async registerUser(createUserDto) {
        const response = this.client.send('register', createUserDto);
        return response;
    }
    login(auth) {
        return this.client.send('login', auth);
    }
    async status(req) {
        const token = req.header('authorization').replace('Bearer ', '');
        return this.client.send('status', token);
    }
    logout(req, res) {
        return this.client.send('logout', { req, res });
    }
};
__decorate([
    (0, common_1.Post)('register'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof CreateUser_dto_1.CreateUserDto !== "undefined" && CreateUser_dto_1.CreateUserDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "registerUser", null);
__decorate([
    (0, common_1.Post)('login'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "login", null);
__decorate([
    (0, common_1.Get)('status'),
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "status", null);
__decorate([
    (0, common_1.Post)('logout'),
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    __param(0, (0, common_1.Req)()),
    __param(1, (0, common_1.Res)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof types_1.AuthenticatedRequest !== "undefined" && types_1.AuthenticatedRequest) === "function" ? _c : Object, typeof (_d = typeof express_1.Response !== "undefined" && express_1.Response) === "function" ? _d : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "logout", null);
AuthController = __decorate([
    (0, decorator_1.SwaggerController)(constants_1.Routes.AUTH),
    (0, common_1.Controller)(constants_1.Routes.AUTH),
    __param(0, (0, common_1.Inject)(constants_1.Services.AUTH)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/server/src/chat/auth/auth.module.ts":
/*!**************************************************!*\
  !*** ./apps/server/src/chat/auth/auth.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/server/src/chat/auth/auth.controller.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const auth_1 = __webpack_require__(/*! @common/auth */ "./libs/common/auth/index.ts");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    (0, common_1.Module)({
        imports: [
            auth_1.AuthModuleCommon,
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register(constants_1.Services.AUTH),
        ],
        controllers: [auth_controller_1.AuthController],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/server/src/chat/chat.controller.ts":
/*!*************************************************!*\
  !*** ./apps/server/src/chat/chat.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let ChatController = class ChatController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('Areas');
    }
};
ChatController = __decorate([
    (0, common_1.Controller)('chat'),
    __param(0, (0, common_1.Inject)('CHAT_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], ChatController);
exports.ChatController = ChatController;


/***/ }),

/***/ "./apps/server/src/chat/chat.module.ts":
/*!*********************************************!*\
  !*** ./apps/server/src/chat/chat.module.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChatModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const chat_controller_1 = __webpack_require__(/*! @apps/server/src/chat/chat.controller */ "./apps/server/src/chat/chat.controller.ts");
const user_presence_module_1 = __webpack_require__(/*! ./user_presence/user_presence.module */ "./apps/server/src/chat/user_presence/user_presence.module.ts");
const group_module_1 = __webpack_require__(/*! ./groups/group.module */ "./apps/server/src/chat/groups/group.module.ts");
const group_message_module_1 = __webpack_require__(/*! ./group_messages/group_message.module */ "./apps/server/src/chat/group_messages/group_message.module.ts");
const group_recipient_module_1 = __webpack_require__(/*! ./group_recipients/group_recipient.module */ "./apps/server/src/chat/group_recipients/group_recipient.module.ts");
const users_module_1 = __webpack_require__(/*! ./users/users.module */ "./apps/server/src/chat/users/users.module.ts");
const friends_module_1 = __webpack_require__(/*! ./friend/friends.module */ "./apps/server/src/chat/friend/friends.module.ts");
const conversations_module_1 = __webpack_require__(/*! ./conversations/conversations.module */ "./apps/server/src/chat/conversations/conversations.module.ts");
const messages_module_1 = __webpack_require__(/*! ./messages/messages.module */ "./apps/server/src/chat/messages/messages.module.ts");
const friend_requests_module_1 = __webpack_require__(/*! ./friend_requests/friend_requests.module */ "./apps/server/src/chat/friend_requests/friend_requests.module.ts");
const auth_module_1 = __webpack_require__(/*! ./auth/auth.module */ "./apps/server/src/chat/auth/auth.module.ts");
const user_profile_module_1 = __webpack_require__(/*! ./user_profile/user_profile.module */ "./apps/server/src/chat/user_profile/user_profile.module.ts");
let ChatModule = class ChatModule {
};
ChatModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register('CHAT_SERVICE'),
            user_presence_module_1.UserPresenceModule,
            users_module_1.UserModule,
            group_module_1.GroupModule,
            group_message_module_1.GroupMessageModule,
            group_recipient_module_1.GroupRecipientModule,
            friends_module_1.FriendModule,
            conversations_module_1.ConversationsModule,
            messages_module_1.MessagesModule,
            friend_requests_module_1.FriendRequestsModule,
            auth_module_1.AuthModule,
            user_profile_module_1.UserProfileModule
        ],
        controllers: [chat_controller_1.ChatController],
    })
], ChatModule);
exports.ChatModule = ChatModule;


/***/ }),

/***/ "./apps/server/src/chat/conversations/conversations.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/server/src/chat/conversations/conversations.controller.ts ***!
  \************************************************************************/
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
exports.ConversationsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const guards_1 = __webpack_require__(/*! @common/auth/guards */ "./libs/common/auth/guards/index.ts");
const decorator_1 = __webpack_require__(/*! @common/auth/decorator */ "./libs/common/auth/decorator/index.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
let ConversationsController = class ConversationsController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('Conversations');
    }
    getConversations(userId, paginationQueryDto) {
        this.logger.log('Get all conversations by user');
        const pattern = { cmd: 'get_conversations' };
        paginationQueryDto['userId'] = userId;
        return this.client.send(pattern, paginationQueryDto);
    }
    getConversationById(id, userId) {
        this.logger.log('Get a conversation item by id');
        return this.client.send('get_conversation_by_id', { id, userId });
    }
    async checkConversationExists(recipientId) {
        return this.client.send('recipient_exist', { userId: 1, recipientId });
    }
    async addConversation(userId, dto) {
        this.logger.log('Add a conversation item');
        dto.createdBy = userId;
        dto['messages'] = [
            {
                createdBy: userId,
                authorId: userId,
                content: dto.messages,
            },
        ];
        delete dto.message;
        return this.client.send('add_conversation', dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], ConversationsController.prototype, "getConversations", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, decorator_1.GetUser)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], ConversationsController.prototype, "getConversationById", null);
__decorate([
    (0, common_1.Get)(':recipientId/exists'),
    __param(0, (0, common_1.Param)('recipientId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "checkConversationExists", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], ConversationsController.prototype, "addConversation", null);
ConversationsController = __decorate([
    (0, decorator_1.SwaggerController)('conversations'),
    (0, throttler_1.SkipThrottle)(),
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.Controller)(constants_1.Routes.CONVERSATIONS),
    __param(0, (0, common_1.Inject)('CHAT_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], ConversationsController);
exports.ConversationsController = ConversationsController;


/***/ }),

/***/ "./apps/server/src/chat/conversations/conversations.module.ts":
/*!********************************************************************!*\
  !*** ./apps/server/src/chat/conversations/conversations.module.ts ***!
  \********************************************************************/
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
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const conversations_controller_1 = __webpack_require__(/*! @apps/server/src/chat/conversations/conversations.controller */ "./apps/server/src/chat/conversations/conversations.controller.ts");
let ConversationsModule = class ConversationsModule {
};
ConversationsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register('CHAT_SERVICE'),
        ],
        controllers: [conversations_controller_1.ConversationsController],
    })
], ConversationsModule);
exports.ConversationsModule = ConversationsModule;


/***/ }),

/***/ "./apps/server/src/chat/friend/friends.controller.ts":
/*!***********************************************************!*\
  !*** ./apps/server/src/chat/friend/friends.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendController = void 0;
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const decorators_1 = __webpack_require__(/*! @apps/chat/utils/decorators */ "./apps/chat/utils/decorators.ts");
const decorator_1 = __webpack_require__(/*! @common/auth/decorator */ "./libs/common/auth/decorator/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const typeorm_1 = __webpack_require__(/*! ../../../../chat/utils/typeorm */ "./apps/chat/utils/typeorm/index.ts");
let FriendController = class FriendController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('Friends');
    }
    getFriends(user) {
        return this.client.send('get-friends', user);
    }
    deleteFriend({ id: userId }, id) {
        return this.client.send('delete-friend', { id, userId });
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, decorators_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FriendController.prototype, "getFriends", null);
__decorate([
    (0, common_1.Delete)(':id/delete'),
    __param(0, (0, decorators_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _c : Object, Number]),
    __metadata("design:returntype", void 0)
], FriendController.prototype, "deleteFriend", null);
FriendController = __decorate([
    (0, decorator_1.SwaggerController)(constants_1.Routes.FRIENDS),
    (0, common_1.Controller)(constants_1.Routes.FRIENDS),
    __param(0, (0, common_1.Inject)(constants_1.Services.FRIENDS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], FriendController);
exports.FriendController = FriendController;


/***/ }),

/***/ "./apps/server/src/chat/friend/friends.module.ts":
/*!*******************************************************!*\
  !*** ./apps/server/src/chat/friend/friends.module.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.FriendModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const friends_controller_1 = __webpack_require__(/*! ./friends.controller */ "./apps/server/src/chat/friend/friends.controller.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
let FriendModule = class FriendModule {
};
FriendModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register(constants_1.Services.FRIENDS_SERVICE),
        ],
        controllers: [friends_controller_1.FriendController],
    })
], FriendModule);
exports.FriendModule = FriendModule;


/***/ }),

/***/ "./apps/server/src/chat/friend_requests/friend_requests.controller.ts":
/*!****************************************************************************!*\
  !*** ./apps/server/src/chat/friend_requests/friend_requests.controller.ts ***!
  \****************************************************************************/
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
exports.FriendRequestsController = void 0;
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const decorators_1 = __webpack_require__(/*! @apps/chat/utils/decorators */ "./apps/chat/utils/decorators.ts");
const decorator_1 = __webpack_require__(/*! @common/auth/decorator */ "./libs/common/auth/decorator/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const typeorm_1 = __webpack_require__(/*! ../../../../chat/utils/typeorm */ "./apps/chat/utils/typeorm/index.ts");
let FriendRequestsController = class FriendRequestsController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('Friend Requests');
    }
    getFriendRequests(user) {
        return this.client.send('get_friend_requests', user);
    }
    createFriendRequest(user, dto) {
        return this.client.send('create_friend_request', { user, dto });
    }
    acceptFriendRequest({ id: userId }, id) {
        return this.client.send('accept_friend_request', { id, userId });
    }
    cancelFriendRequest({ id: userId }, id) {
        return this.client.send('cancel_friend_request', { id, userId });
    }
    rejectFriendRequest({ id: userId }, id) {
        return this.client.send('reject_friend_request', { id, userId });
    }
};
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, decorators_1.AuthUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], FriendRequestsController.prototype, "getFriendRequests", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FriendRequestsController.prototype, "createFriendRequest", null);
__decorate([
    (0, common_1.Patch)(':id/accept'),
    __param(0, (0, decorators_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _c : Object, Number]),
    __metadata("design:returntype", void 0)
], FriendRequestsController.prototype, "acceptFriendRequest", null);
__decorate([
    (0, common_1.Delete)(':id/cancel'),
    __param(0, (0, decorators_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _d : Object, Number]),
    __metadata("design:returntype", void 0)
], FriendRequestsController.prototype, "cancelFriendRequest", null);
__decorate([
    (0, common_1.Patch)(':id/reject'),
    __param(0, (0, decorators_1.AuthUser)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof typeorm_1.User !== "undefined" && typeorm_1.User) === "function" ? _e : Object, Number]),
    __metadata("design:returntype", void 0)
], FriendRequestsController.prototype, "rejectFriendRequest", null);
FriendRequestsController = __decorate([
    (0, decorator_1.SwaggerController)(constants_1.Routes.FRIEND_REQUESTS),
    (0, common_1.Controller)(constants_1.Routes.FRIEND_REQUESTS),
    __param(0, (0, common_1.Inject)(constants_1.Services.FRIENDS_REQUESTS_SERVICE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], FriendRequestsController);
exports.FriendRequestsController = FriendRequestsController;


/***/ }),

/***/ "./apps/server/src/chat/friend_requests/friend_requests.module.ts":
/*!************************************************************************!*\
  !*** ./apps/server/src/chat/friend_requests/friend_requests.module.ts ***!
  \************************************************************************/
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
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const friend_requests_controller_1 = __webpack_require__(/*! ./friend_requests.controller */ "./apps/server/src/chat/friend_requests/friend_requests.controller.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
let FriendRequestsModule = class FriendRequestsModule {
};
FriendRequestsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register(constants_1.Services.FRIENDS_REQUESTS_SERVICE),
        ],
        controllers: [friend_requests_controller_1.FriendRequestsController],
    })
], FriendRequestsModule);
exports.FriendRequestsModule = FriendRequestsModule;


/***/ }),

/***/ "./apps/server/src/chat/group_messages/group_message.controller.ts":
/*!*************************************************************************!*\
  !*** ./apps/server/src/chat/group_messages/group_message.controller.ts ***!
  \*************************************************************************/
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
exports.GroupMessageController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../../../../chat/utils/constants */ "./apps/chat/utils/constants.ts");
let GroupMessageController = class GroupMessageController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('Group messages');
    }
    async createGroupMessage(groupId, { content }) {
        this.logger.log('Create group message');
        const params = { groupId, authorId: 1, content };
        return this.client.send('create_group_message', params);
    }
    async getGroupMessages(groupId) {
        this.logger.log('Get group message');
        return this.client.send('get_group_messages', groupId);
    }
    async editGroupMessage(groupId, messageId, { content }) {
        this.logger.log('Edit group message');
        const params = { userId: 1, content, groupId, messageId };
        return this.client.send('edit_group_message', params);
    }
    async deleteGroupMessage(groupId, messageId) {
        this.logger.log('Delete group message');
        return this.client.send('delete_group_message', {
            userId: 1,
            groupId,
            messageId,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GroupMessageController.prototype, "createGroupMessage", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupMessageController.prototype, "getGroupMessages", null);
__decorate([
    (0, common_1.Patch)(':messageId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('messageId', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], GroupMessageController.prototype, "editGroupMessage", null);
__decorate([
    (0, common_1.Delete)(':messageId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('messageId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], GroupMessageController.prototype, "deleteGroupMessage", null);
GroupMessageController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.GROUP_MESSAGES),
    __param(0, (0, common_1.Inject)('CHAT_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], GroupMessageController);
exports.GroupMessageController = GroupMessageController;


/***/ }),

/***/ "./apps/server/src/chat/group_messages/group_message.module.ts":
/*!*********************************************************************!*\
  !*** ./apps/server/src/chat/group_messages/group_message.module.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupMessageModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const group_message_controller_1 = __webpack_require__(/*! ./group_message.controller */ "./apps/server/src/chat/group_messages/group_message.controller.ts");
let GroupMessageModule = class GroupMessageModule {
};
GroupMessageModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register('CHAT_SERVICE'),
        ],
        controllers: [group_message_controller_1.GroupMessageController],
    })
], GroupMessageModule);
exports.GroupMessageModule = GroupMessageModule;


/***/ }),

/***/ "./apps/server/src/chat/group_recipients/group_recipient.controller.ts":
/*!*****************************************************************************!*\
  !*** ./apps/server/src/chat/group_recipients/group_recipient.controller.ts ***!
  \*****************************************************************************/
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
exports.GroupRecipientController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../../../../chat/utils/constants */ "./apps/chat/utils/constants.ts");
let GroupRecipientController = class GroupRecipientController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('Group recipient');
    }
    async addGroupRecipient(groupId, { username }) {
        this.logger.log('Add group recipient');
        const params = { id: groupId, userId: 1, username };
        return this.client.send('add_group_recipient', params);
    }
    async leaveGroup(groupId) {
        this.logger.log('Recipients leaves');
        return this.client.send('group_recipient_leave', {
            id: groupId,
            userId: 1,
        });
    }
    async removeGroupRecipient(groupId, removeUserId) {
        this.logger.log('Remove group recipient');
        const params = { issuerId: 1, id: groupId, removeUserId };
        return this.client.send('remove_group_recipient', params);
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GroupRecipientController.prototype, "addGroupRecipient", null);
__decorate([
    (0, common_1.Delete)('leave'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], GroupRecipientController.prototype, "leaveGroup", null);
__decorate([
    (0, common_1.Delete)(':userId'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Param)('userId', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], GroupRecipientController.prototype, "removeGroupRecipient", null);
GroupRecipientController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.GROUP_RECIPIENTS),
    __param(0, (0, common_1.Inject)('CHAT_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], GroupRecipientController);
exports.GroupRecipientController = GroupRecipientController;


/***/ }),

/***/ "./apps/server/src/chat/group_recipients/group_recipient.module.ts":
/*!*************************************************************************!*\
  !*** ./apps/server/src/chat/group_recipients/group_recipient.module.ts ***!
  \*************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupRecipientModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const group_recipient_controller_1 = __webpack_require__(/*! ./group_recipient.controller */ "./apps/server/src/chat/group_recipients/group_recipient.controller.ts");
let GroupRecipientModule = class GroupRecipientModule {
};
GroupRecipientModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register('CHAT_SERVICE'),
        ],
        controllers: [group_recipient_controller_1.GroupRecipientController],
    })
], GroupRecipientModule);
exports.GroupRecipientModule = GroupRecipientModule;


/***/ }),

/***/ "./apps/server/src/chat/groups/group.controller.ts":
/*!*********************************************************!*\
  !*** ./apps/server/src/chat/groups/group.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GroupController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const constants_1 = __webpack_require__(/*! ../../../../chat/utils/constants */ "./apps/chat/utils/constants.ts");
let GroupController = class GroupController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('Group');
    }
    createGroup(body) {
        this.logger.log('Create group chat');
        return this.client.send('create_group_chat', body);
    }
    getGroups() {
        this.logger.log('Get user group chat');
        return this.client.send('get_groups_chat', { userId: 1 });
    }
    getSingleGroup(id) {
        return this.client.send('get_single_group', id);
    }
    async updateGroupOwner(groupId, { newOwnerId }) {
        this.logger.log('Update group owner');
        const params = { userId: 1, groupId, newOwnerId };
        return this.client.send('update_group_owner', params);
    }
    async updateGroupDetails({ title }, id) {
        this.logger.log('Update group details');
        return this.client.send('update_group_details', {
            id: id,
            avatar: null,
            title,
        });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "createGroup", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "getGroups", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], GroupController.prototype, "getSingleGroup", null);
__decorate([
    (0, common_1.Patch)(':id/owner'),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "updateGroupOwner", null);
__decorate([
    (0, common_1.Patch)(':id/details'),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Number]),
    __metadata("design:returntype", Promise)
], GroupController.prototype, "updateGroupDetails", null);
GroupController = __decorate([
    (0, common_1.Controller)(constants_1.Routes.GROUPS),
    __param(0, (0, common_1.Inject)('CHAT_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], GroupController);
exports.GroupController = GroupController;


/***/ }),

/***/ "./apps/server/src/chat/groups/group.module.ts":
/*!*****************************************************!*\
  !*** ./apps/server/src/chat/groups/group.module.ts ***!
  \*****************************************************/
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
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const group_controller_1 = __webpack_require__(/*! ./group.controller */ "./apps/server/src/chat/groups/group.controller.ts");
let GroupModule = class GroupModule {
};
GroupModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register('CHAT_SERVICE'),
        ],
        controllers: [group_controller_1.GroupController],
    })
], GroupModule);
exports.GroupModule = GroupModule;


/***/ }),

/***/ "./apps/server/src/chat/messages/messages.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/server/src/chat/messages/messages.controller.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MessagesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const guards_1 = __webpack_require__(/*! @common/auth/guards */ "./libs/common/auth/guards/index.ts");
const decorator_1 = __webpack_require__(/*! @common/auth/decorator */ "./libs/common/auth/decorator/index.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const throttler_1 = __webpack_require__(/*! @nestjs/throttler */ "@nestjs/throttler");
let MessagesController = class MessagesController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('Messages');
    }
    getMessagesFromConversation(id, paginationQueryDto) {
        this.logger.log('Get the messages from conversation');
        const pattern = { cmd: 'get_messages_from_conversation' };
        paginationQueryDto.conversationId = id;
        return this.client.send(pattern, paginationQueryDto);
    }
    async addMessage(userId, id, dto) {
        this.logger.log('Add a message item');
        dto.createdBy = userId;
        dto.authorId = userId;
        dto.conversationId = id;
        return this.client.send('add_message', dto);
    }
    editeMessage(userId, conversationId, messageId, dto) {
        this.logger.log('Edit a message item');
        dto['updatedBy'] = userId;
        dto['authorId'] = userId;
        dto['id'] = messageId;
        dto['conversationId'] = conversationId;
        return this.client.send('edit_message', dto);
    }
    deleteMessage(userId, conversationId, messageId, dto) {
        this.logger.log('Delete a message item');
        dto['updatedBy'] = userId;
        dto['id'] = messageId;
        dto['conversationId'] = conversationId;
        dto['authorId'] = userId;
        return this.client.send('delete_message', dto);
    }
};
__decorate([
    (0, common_1.Get)(),
    (0, throttler_1.SkipThrottle)(),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "getMessagesFromConversation", null);
__decorate([
    (0, common_1.Post)(),
    (0, throttler_1.Throttle)(5, 10),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Object]),
    __metadata("design:returntype", Promise)
], MessagesController.prototype, "addMessage", null);
__decorate([
    (0, common_1.Patch)(':messageId'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)('messageId', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Object]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "editeMessage", null);
__decorate([
    (0, common_1.Delete)(':messageId'),
    __param(0, (0, decorator_1.GetUser)('id')),
    __param(1, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(2, (0, common_1.Param)('messageId', common_1.ParseIntPipe)),
    __param(3, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, Number, Object]),
    __metadata("design:returntype", void 0)
], MessagesController.prototype, "deleteMessage", null);
MessagesController = __decorate([
    (0, decorator_1.SwaggerController)('messages'),
    (0, common_1.UseGuards)(guards_1.JwtGuard),
    (0, common_1.Controller)(constants_1.Routes.MESSAGES),
    __param(0, (0, common_1.Inject)('CHAT_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], MessagesController);
exports.MessagesController = MessagesController;


/***/ }),

/***/ "./apps/server/src/chat/messages/messages.module.ts":
/*!**********************************************************!*\
  !*** ./apps/server/src/chat/messages/messages.module.ts ***!
  \**********************************************************/
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
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const messages_controller_1 = __webpack_require__(/*! @apps/server/src/chat/messages/messages.controller */ "./apps/server/src/chat/messages/messages.controller.ts");
let MessagesModule = class MessagesModule {
};
MessagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register('CHAT_SERVICE'),
        ],
        controllers: [messages_controller_1.MessagesController],
    })
], MessagesModule);
exports.MessagesModule = MessagesModule;


/***/ }),

/***/ "./apps/server/src/chat/user_presence/user_presence.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/server/src/chat/user_presence/user_presence.controller.ts ***!
  \************************************************************************/
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
exports.UserPresenceController = void 0;
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const decorator_1 = __webpack_require__(/*! @common/auth/decorator */ "./libs/common/auth/decorator/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const node_1 = __webpack_require__(/*! @sentry/node */ "@sentry/node");
let UserPresenceController = class UserPresenceController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('User presence');
    }
    createPresence(dto) {
        return this.client.send('create-presence', dto);
    }
    updateStatus(user, id, body) {
        return this.client.send('update-status', { user, id, body });
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserPresenceController.prototype, "createPresence", null);
__decorate([
    (0, common_1.Patch)('/:id'),
    __param(0, (0, decorator_1.GetUser)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof node_1.User !== "undefined" && node_1.User) === "function" ? _b : Object, Number, Object]),
    __metadata("design:returntype", void 0)
], UserPresenceController.prototype, "updateStatus", null);
UserPresenceController = __decorate([
    (0, decorator_1.SwaggerController)(constants_1.Routes.USER_PRESENCE),
    (0, common_1.Controller)(constants_1.Routes.USER_PRESENCE),
    __param(0, (0, common_1.Inject)(constants_1.Services.USER_PRESENCE)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserPresenceController);
exports.UserPresenceController = UserPresenceController;


/***/ }),

/***/ "./apps/server/src/chat/user_presence/user_presence.module.ts":
/*!********************************************************************!*\
  !*** ./apps/server/src/chat/user_presence/user_presence.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserPresenceModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const user_presence_controller_1 = __webpack_require__(/*! ./user_presence.controller */ "./apps/server/src/chat/user_presence/user_presence.controller.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
let UserPresenceModule = class UserPresenceModule {
};
UserPresenceModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register(constants_1.Services.USER_PRESENCE),
        ],
        controllers: [user_presence_controller_1.UserPresenceController],
    })
], UserPresenceModule);
exports.UserPresenceModule = UserPresenceModule;


/***/ }),

/***/ "./apps/server/src/chat/user_profile/user_profile.controller.ts":
/*!**********************************************************************!*\
  !*** ./apps/server/src/chat/user_profile/user_profile.controller.ts ***!
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
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProfileController = void 0;
const UpdateUserProfile_dto_1 = __webpack_require__(/*! @apps/chat/users/dtos/UpdateUserProfile.dto */ "./apps/chat/users/dtos/UpdateUserProfile.dto.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const decorators_1 = __webpack_require__(/*! @apps/chat/utils/decorators */ "./apps/chat/utils/decorators.ts");
const types_1 = __webpack_require__(/*! @apps/chat/utils/types */ "./apps/chat/utils/types.ts");
const decorator_1 = __webpack_require__(/*! @common/auth/decorator */ "./libs/common/auth/decorator/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const platform_express_1 = __webpack_require__(/*! @nestjs/platform-express */ "@nestjs/platform-express");
const node_1 = __webpack_require__(/*! @sentry/node */ "@sentry/node");
let UserProfileController = class UserProfileController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('User profile');
    }
    async updateUserProfile(user, files, updateUserProfileDto) {
        return this.client.send('update-user-profile', {
            user,
            files,
            updateUserProfileDto,
        });
    }
};
__decorate([
    (0, common_1.Patch)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FileFieldsInterceptor)(constants_1.UserProfileFileFields)),
    __param(0, (0, decorators_1.AuthUser)()),
    __param(1, (0, common_1.UploadedFiles)()),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof node_1.User !== "undefined" && node_1.User) === "function" ? _b : Object, typeof (_c = typeof types_1.UserProfileFiles !== "undefined" && types_1.UserProfileFiles) === "function" ? _c : Object, typeof (_d = typeof UpdateUserProfile_dto_1.UpdateUserProfileDto !== "undefined" && UpdateUserProfile_dto_1.UpdateUserProfileDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], UserProfileController.prototype, "updateUserProfile", null);
UserProfileController = __decorate([
    (0, decorator_1.SwaggerController)(constants_1.Routes.USERS_PROFILES),
    (0, common_1.Controller)(constants_1.Routes.USERS_PROFILES),
    __param(0, (0, common_1.Inject)(constants_1.Services.USERS_PROFILES)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserProfileController);
exports.UserProfileController = UserProfileController;


/***/ }),

/***/ "./apps/server/src/chat/user_profile/user_profile.module.ts":
/*!******************************************************************!*\
  !*** ./apps/server/src/chat/user_profile/user_profile.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserProfileModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const user_profile_controller_1 = __webpack_require__(/*! ./user_profile.controller */ "./apps/server/src/chat/user_profile/user_profile.controller.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
let UserProfileModule = class UserProfileModule {
};
UserProfileModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register(constants_1.Services.USERS_PROFILES),
        ],
        controllers: [user_profile_controller_1.UserProfileController],
    })
], UserProfileModule);
exports.UserProfileModule = UserProfileModule;


/***/ }),

/***/ "./apps/server/src/chat/users/users.controller.ts":
/*!********************************************************!*\
  !*** ./apps/server/src/chat/users/users.controller.ts ***!
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
exports.UserController = void 0;
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
const decorator_1 = __webpack_require__(/*! @common/auth/decorator */ "./libs/common/auth/decorator/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
let UserController = class UserController {
    constructor(client) {
        this.client = client;
        this.logger = new common_1.Logger('User presence');
    }
    searchUsers(query) {
        return this.client.send('search-user', query);
    }
    async checkUsername(username) {
        return this.client.send('check-user', { username });
    }
};
__decorate([
    (0, common_1.Get)('search'),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "searchUsers", null);
__decorate([
    (0, common_1.Get)('check'),
    __param(0, (0, common_1.Query)('username')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "checkUsername", null);
UserController = __decorate([
    (0, decorator_1.SwaggerController)(constants_1.Routes.USERS),
    (0, common_1.Controller)(constants_1.Routes.USERS),
    __param(0, (0, common_1.Inject)(constants_1.Services.USERS)),
    __metadata("design:paramtypes", [typeof (_a = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _a : Object])
], UserController);
exports.UserController = UserController;


/***/ }),

/***/ "./apps/server/src/chat/users/users.module.ts":
/*!****************************************************!*\
  !*** ./apps/server/src/chat/users/users.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/server/src/chat/users/users.controller.ts");
const constants_1 = __webpack_require__(/*! @apps/chat/utils/constants */ "./apps/chat/utils/constants.ts");
let UserModule = class UserModule {
};
UserModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
            }),
            redis_1.RedisModule.register(constants_1.Services.USERS),
        ],
        controllers: [users_controller_1.UserController],
    })
], UserModule);
exports.UserModule = UserModule;


/***/ }),

/***/ "./apps/server/src/main.ts":
/*!*********************************!*\
  !*** ./apps/server/src/main.ts ***!
  \*********************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
const interceptors_1 = __webpack_require__(/*! @common/interceptors */ "./libs/common/interceptors/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
__webpack_require__(/*! reflect-metadata */ "reflect-metadata");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const package_json_1 = __webpack_require__(/*! ../../../package.json */ "./package.json");
const server_module_1 = __webpack_require__(/*! ./server.module */ "./apps/server/src/server.module.ts");
async function bootstrap() {
    const app = await core_1.NestFactory.create(server_module_1.APIModule, {});
    const config = app.get(config_1.ConfigService);
    app.setGlobalPrefix('api');
    Sentry.init({
        dsn: config.get('SENTRY_DSN'),
    });
    app.useGlobalInterceptors(new interceptors_1.SentryInterceptor());
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Power hub')
        .setDescription('Document API for Power hub project')
        .setVersion(package_json_1.version)
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('api', app, document, {
        swaggerOptions: { defaultModelsExpandDepth: -1 },
    });
    await app.listen(config.get('PORT'), () => {
        const logger = new common_1.Logger('API Gateway');
        logger.log(`API Gateway start at port: ${config.get('PORT')}\nMicroservice port:${config.get('PORT_PUBLIC_REDIS')}\nMYSQL: ${config.get('MYSQL_DATABASE_URL')}\nMONGODB: ${config.get('MONGODB_DATABASE_URL')}`);
    });
}
bootstrap();


/***/ }),

/***/ "./apps/server/src/server.controller.ts":
/*!**********************************************!*\
  !*** ./apps/server/src/server.controller.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.APIController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let APIController = class APIController {
};
APIController = __decorate([
    (0, common_1.Controller)()
], APIController);
exports.APIController = APIController;


/***/ }),

/***/ "./apps/server/src/server.module.ts":
/*!******************************************!*\
  !*** ./apps/server/src/server.module.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.APIModule = void 0;
const interceptors_1 = __webpack_require__(/*! @common/interceptors */ "./libs/common/interceptors/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const server_controller_1 = __webpack_require__(/*! ./server.controller */ "./apps/server/src/server.controller.ts");
const server_service_1 = __webpack_require__(/*! ./server.service */ "./apps/server/src/server.service.ts");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const nestjs_i18n_1 = __webpack_require__(/*! nestjs-i18n */ "nestjs-i18n");
const path_1 = __importDefault(__webpack_require__(/*! path */ "path"));
const chat_module_1 = __webpack_require__(/*! ./chat/chat.module */ "./apps/server/src/chat/chat.module.ts");
let APIModule = class APIModule {
};
APIModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            chat_module_1.ChatModule,
            nestjs_i18n_1.I18nModule.forRoot({
                fallbackLanguage: 'en',
                loaderOptions: {
                    path: path_1.default.join(__dirname, '/i18n/'),
                    watch: true,
                },
                resolvers: [new nestjs_i18n_1.HeaderResolver(['lang']), nestjs_i18n_1.AcceptLanguageResolver],
            }),
        ],
        controllers: [server_controller_1.APIController],
        providers: [
            server_service_1.APIService,
            {
                provide: 'DATE_KEYS',
                useValue: {},
            },
            {
                provide: core_1.APP_INTERCEPTOR,
                useClass: interceptors_1.ResponseInterceptor,
            },
        ],
    })
], APIModule);
exports.APIModule = APIModule;


/***/ }),

/***/ "./apps/server/src/server.service.ts":
/*!*******************************************!*\
  !*** ./apps/server/src/server.service.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.APIService = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let APIService = class APIService {
};
APIService = __decorate([
    (0, common_1.Injectable)()
], APIService);
exports.APIService = APIService;


/***/ }),

/***/ "./libs/common/auth/auth.module.ts":
/*!*****************************************!*\
  !*** ./libs/common/auth/auth.module.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var AuthModuleCommon_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModuleCommon = void 0;
const strategies_1 = __webpack_require__(/*! @common/auth/strategies */ "./libs/common/auth/strategies/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ "cookie-parser"));
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./libs/common/auth/prisma/prisma.module.ts");
const jwt_refresh_strategy_1 = __webpack_require__(/*! ./strategies/jwt-refresh.strategy */ "./libs/common/auth/strategies/jwt-refresh.strategy.ts");
let AuthModuleCommon = AuthModuleCommon_1 = class AuthModuleCommon {
    configure(consumer) {
        consumer.apply((0, cookie_parser_1.default)()).forRoutes('*');
    }
};
AuthModuleCommon = AuthModuleCommon_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: './apps/auth/.env',
            }),
            AuthModuleCommon_1,
            prisma_module_1.PrismaModuleAuth,
        ],
        providers: [strategies_1.JwtStrategy, strategies_1.GoogleStrategy, jwt_refresh_strategy_1.JwtRefreshStrategy],
    })
], AuthModuleCommon);
exports.AuthModuleCommon = AuthModuleCommon;


/***/ }),

/***/ "./libs/common/auth/decorator/get_user.decorator.ts":
/*!**********************************************************!*\
  !*** ./libs/common/auth/decorator/get_user.decorator.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GetUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
exports.GetUser = (0, common_1.createParamDecorator)((data, ctx) => {
    const request = ctx.switchToHttp().getRequest();
    if (data) {
        return request.user[data];
    }
    return request.user;
});


/***/ }),

/***/ "./libs/common/auth/decorator/index.ts":
/*!*********************************************!*\
  !*** ./libs/common/auth/decorator/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./get_user.decorator */ "./libs/common/auth/decorator/get_user.decorator.ts"), exports);
__exportStar(__webpack_require__(/*! ./swagger-controller.decorator */ "./libs/common/auth/decorator/swagger-controller.decorator.ts"), exports);


/***/ }),

/***/ "./libs/common/auth/decorator/swagger-controller.decorator.ts":
/*!********************************************************************!*\
  !*** ./libs/common/auth/decorator/swagger-controller.decorator.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SwaggerController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
function SwaggerController(swaggerTagName, isPublic) {
    if (isPublic) {
        return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)(swaggerTagName), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }), (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }));
    }
    return (0, common_1.applyDecorators)((0, swagger_1.ApiTags)(swaggerTagName), (0, swagger_1.ApiBearerAuth)(), (0, swagger_1.ApiUnauthorizedResponse)({ description: 'Unauthorized access' }), (0, swagger_1.ApiBadRequestResponse)({ description: 'Bad request' }), (0, swagger_1.ApiInternalServerErrorResponse)({ description: 'Internal server error' }));
}
exports.SwaggerController = SwaggerController;


/***/ }),

/***/ "./libs/common/auth/guards/google.guard.ts":
/*!*************************************************!*\
  !*** ./libs/common/auth/guards/google.guard.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleGuard = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
class GoogleGuard extends (0, passport_1.AuthGuard)('google') {
    constructor() {
        super();
    }
}
exports.GoogleGuard = GoogleGuard;


/***/ }),

/***/ "./libs/common/auth/guards/index.ts":
/*!******************************************!*\
  !*** ./libs/common/auth/guards/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./jwt.guard */ "./libs/common/auth/guards/jwt.guard.ts"), exports);
__exportStar(__webpack_require__(/*! ./local.guard */ "./libs/common/auth/guards/local.guard.ts"), exports);
__exportStar(__webpack_require__(/*! ./google.guard */ "./libs/common/auth/guards/google.guard.ts"), exports);


/***/ }),

/***/ "./libs/common/auth/guards/jwt.guard.ts":
/*!**********************************************!*\
  !*** ./libs/common/auth/guards/jwt.guard.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtGuard = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
class JwtGuard extends (0, passport_1.AuthGuard)('jwt') {
    constructor() {
        super();
    }
}
exports.JwtGuard = JwtGuard;


/***/ }),

/***/ "./libs/common/auth/guards/local.guard.ts":
/*!************************************************!*\
  !*** ./libs/common/auth/guards/local.guard.ts ***!
  \************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalAuthGuard = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
class LocalAuthGuard extends (0, passport_1.AuthGuard)('local') {
}
exports.LocalAuthGuard = LocalAuthGuard;


/***/ }),

/***/ "./libs/common/auth/index.ts":
/*!***********************************!*\
  !*** ./libs/common/auth/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./auth.module */ "./libs/common/auth/auth.module.ts"), exports);


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

/***/ "./libs/common/auth/strategies/google.strategy.ts":
/*!********************************************************!*\
  !*** ./libs/common/auth/strategies/google.strategy.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.GoogleStrategy = void 0;
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_google_oauth20_1 = __webpack_require__(/*! passport-google-oauth20 */ "passport-google-oauth20");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let GoogleStrategy = class GoogleStrategy extends (0, passport_1.PassportStrategy)(passport_google_oauth20_1.Strategy) {
    constructor(config) {
        super({
            clientID: config.getOrThrow('GOOGLE_CLIENT_ID'),
            clientSecret: config.getOrThrow('GOOGLE_SECRET'),
            callbackURL: 'http://localhost:50000/auth/google/redirect',
            scope: ['email', 'profile'],
        });
    }
    async validate(accessToken, refreshToken, profile, done) {
        const { name, emails, photos } = profile;
        const user = {
            email: emails[0].value,
            firstName: name.givenName,
            lastName: name.familyName,
            picture: photos[0].value,
        };
        done(null, user);
    }
};
GoogleStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], GoogleStrategy);
exports.GoogleStrategy = GoogleStrategy;


/***/ }),

/***/ "./libs/common/auth/strategies/index.ts":
/*!**********************************************!*\
  !*** ./libs/common/auth/strategies/index.ts ***!
  \**********************************************/
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
__exportStar(__webpack_require__(/*! ./jwt.strategy */ "./libs/common/auth/strategies/jwt.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./local.strategy */ "./libs/common/auth/strategies/local.strategy.ts"), exports);
__exportStar(__webpack_require__(/*! ./google.strategy */ "./libs/common/auth/strategies/google.strategy.ts"), exports);


/***/ }),

/***/ "./libs/common/auth/strategies/jwt-refresh.strategy.ts":
/*!*************************************************************!*\
  !*** ./libs/common/auth/strategies/jwt-refresh.strategy.ts ***!
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
exports.JwtRefreshStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./libs/common/auth/prisma/prisma.service.ts");
let JwtRefreshStrategy = class JwtRefreshStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt-refresh') {
    constructor(config, prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: true,
            secretOrKey: config.getOrThrow('JWT_REFRESH_TOKEN_SECRET'),
            passReqToCallback: true,
        });
        this.prisma = prisma;
    }
    async validate(req, payload) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.id,
            },
            select: {
                id: true,
                email: true,
            },
        });
        if (!user)
            return user;
        const refreshToken = req.get('authorization').replace('Bearer', '').trim();
        console.log(refreshToken);
        return Object.assign(Object.assign({}, user), { refreshToken });
    }
};
JwtRefreshStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaServiceAuth !== "undefined" && prisma_service_1.PrismaServiceAuth) === "function" ? _b : Object])
], JwtRefreshStrategy);
exports.JwtRefreshStrategy = JwtRefreshStrategy;


/***/ }),

/***/ "./libs/common/auth/strategies/jwt.strategy.ts":
/*!*****************************************************!*\
  !*** ./libs/common/auth/strategies/jwt.strategy.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JwtStrategy = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_jwt_1 = __webpack_require__(/*! passport-jwt */ "passport-jwt");
const prisma_service_1 = __webpack_require__(/*! ../prisma/prisma.service */ "./libs/common/auth/prisma/prisma.service.ts");
let JwtStrategy = class JwtStrategy extends (0, passport_1.PassportStrategy)(passport_jwt_1.Strategy, 'jwt') {
    constructor(config, prisma) {
        super({
            jwtFromRequest: passport_jwt_1.ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: config.getOrThrow('JWT_SECRET'),
        });
        this.prisma = prisma;
    }
    async validate(payload) {
        const user = await this.prisma.user.findUnique({
            where: {
                id: payload.id,
            },
            select: {
                id: true,
            },
        });
        return user;
    }
};
JwtStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object, typeof (_b = typeof prisma_service_1.PrismaServiceAuth !== "undefined" && prisma_service_1.PrismaServiceAuth) === "function" ? _b : Object])
], JwtStrategy);
exports.JwtStrategy = JwtStrategy;


/***/ }),

/***/ "./libs/common/auth/strategies/local.strategy.ts":
/*!*******************************************************!*\
  !*** ./libs/common/auth/strategies/local.strategy.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.LocalStrategy = void 0;
const auth_service_1 = __webpack_require__(/*! @apps/chat/auth/auth.service */ "./apps/chat/auth/auth.service.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'username' });
        this.authService = authService;
    }
};
LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


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

/***/ "./libs/common/interceptors/httpCache.interceptor.ts":
/*!***********************************************************!*\
  !*** ./libs/common/interceptors/httpCache.interceptor.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.HttpCacheInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let HttpCacheInterceptor = class HttpCacheInterceptor extends common_1.CacheInterceptor {
    trackBy(context) {
        const request = context.switchToHttp().getRequest();
        if (!request) {
            return undefined;
        }
        const { httpAdapter } = this.httpAdapterHost;
        const isHttpApp = httpAdapter && !!httpAdapter.getRequestMethod;
        const cacheMetadata = this.reflector.get(common_1.CACHE_KEY_METADATA, context.getHandler());
        if (!isHttpApp) {
            return undefined;
        }
        const isGetRequest = httpAdapter.getRequestMethod(request) === 'GET';
        const excludePaths = [];
        if (isGetRequest &&
            excludePaths.includes(httpAdapter.getRequestUrl(request))) {
            return undefined;
        }
        if (isGetRequest && cacheMetadata) {
            return `${cacheMetadata}-${request._parsedUrl.query}`;
        }
        const currentUrlPath = httpAdapter.getRequestUrl(request).split('?')[0];
        if (!isGetRequest) {
            setTimeout(async () => {
                const keys = await this.cacheManager.store.keys();
                keys.forEach(key => {
                    if (key.startsWith(currentUrlPath) ||
                        currentUrlPath.startsWith(key.split('?')[0])) {
                        this.cacheManager.del(key);
                    }
                });
            }, 0);
            return undefined;
        }
        return httpAdapter.getRequestUrl(request);
    }
};
HttpCacheInterceptor = __decorate([
    (0, common_1.Injectable)()
], HttpCacheInterceptor);
exports.HttpCacheInterceptor = HttpCacheInterceptor;


/***/ }),

/***/ "./libs/common/interceptors/index.ts":
/*!*******************************************!*\
  !*** ./libs/common/interceptors/index.ts ***!
  \*******************************************/
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
__exportStar(__webpack_require__(/*! ./sentry.interceptor */ "./libs/common/interceptors/sentry.interceptor.ts"), exports);
__exportStar(__webpack_require__(/*! ./httpCache.interceptor */ "./libs/common/interceptors/httpCache.interceptor.ts"), exports);
__exportStar(__webpack_require__(/*! ./response.interceptor */ "./libs/common/interceptors/response.interceptor.ts"), exports);


/***/ }),

/***/ "./libs/common/interceptors/response.interceptor.ts":
/*!**********************************************************!*\
  !*** ./libs/common/interceptors/response.interceptor.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResponseInterceptor = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
const nestjs_i18n_1 = __webpack_require__(/*! nestjs-i18n */ "nestjs-i18n");
let ResponseInterceptor = class ResponseInterceptor {
    intercept(context, next) {
        const request = context.switchToHttp().getRequest();
        const response = context.switchToHttp().getResponse();
        const i18n = (0, nestjs_i18n_1.getI18nContextFromRequest)(request);
        return next.handle().pipe((0, operators_1.tap)((res) => {
            if (!Array.isArray(res.message)) {
                res.message = i18n.t(res.message);
            }
            response.statusCode = res.code;
            return res;
        }), (0, operators_1.catchError)((err) => (0, rxjs_1.throwError)(() => {
            if (Array.isArray(err.message) && err.message.length > 0) {
                let errorMessages = err.message.join(', ');
                const length = 255;
                errorMessages =
                    errorMessages.length > length
                        ? errorMessages.substring(0, length - 3) + '...'
                        : errorMessages;
                response.setHeader('errorMessages', errorMessages);
                err.message = 'Validation Error.';
            }
            return new common_1.HttpException(err, err === null || err === void 0 ? void 0 : err.code);
        })));
    }
};
ResponseInterceptor = __decorate([
    (0, common_1.Injectable)()
], ResponseInterceptor);
exports.ResponseInterceptor = ResponseInterceptor;


/***/ }),

/***/ "./libs/common/interceptors/sentry.interceptor.ts":
/*!********************************************************!*\
  !*** ./libs/common/interceptors/sentry.interceptor.ts ***!
  \********************************************************/
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SentryInterceptor = void 0;
const Sentry = __importStar(__webpack_require__(/*! @sentry/node */ "@sentry/node"));
const operators_1 = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
class SentryInterceptor {
    intercept(context, next) {
        return next.handle().pipe((0, operators_1.tap)({
            error: exception => {
                Sentry.captureException(exception);
            },
        }));
    }
}
exports.SentryInterceptor = SentryInterceptor;


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

/***/ "@nestjs/platform-express":
/*!*******************************************!*\
  !*** external "@nestjs/platform-express" ***!
  \*******************************************/
/***/ ((module) => {

module.exports = require("@nestjs/platform-express");

/***/ }),

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

/***/ }),

/***/ "@nestjs/throttler":
/*!************************************!*\
  !*** external "@nestjs/throttler" ***!
  \************************************/
/***/ ((module) => {

module.exports = require("@nestjs/throttler");

/***/ }),

/***/ "@prisma/mysql":
/*!********************************!*\
  !*** external "@prisma/mysql" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("@prisma/mysql");

/***/ }),

/***/ "@sentry/node":
/*!*******************************!*\
  !*** external "@sentry/node" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("@sentry/node");

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

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("express");

/***/ }),

/***/ "nestjs-i18n":
/*!******************************!*\
  !*** external "nestjs-i18n" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("nestjs-i18n");

/***/ }),

/***/ "passport-google-oauth20":
/*!******************************************!*\
  !*** external "passport-google-oauth20" ***!
  \******************************************/
/***/ ((module) => {

module.exports = require("passport-google-oauth20");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/***/ ((module) => {

module.exports = require("passport-jwt");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("passport-local");

/***/ }),

/***/ "reflect-metadata":
/*!***********************************!*\
  !*** external "reflect-metadata" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("reflect-metadata");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "typeorm":
/*!**************************!*\
  !*** external "typeorm" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("typeorm");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");

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
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./apps/server/src/main.ts");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7VUV0QkE7VUFDQTtVQUNBO1VBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9hdXRoL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC9hdXRoL2R0b3MvQ3JlYXRlVXNlci5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXNlcnMvZHRvcy9VcGRhdGVVc2VyUHJvZmlsZS5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXNlcnMvaW50ZXJmYWNlcy91c2VyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL2NvbnN0YW50cy50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy9kZWNvcmF0b3JzLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVvcm0vZW50aXRpZXMvQmFzZU1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9Db252ZXJzYXRpb24udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9GcmllbmQudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9GcmllbmRSZXF1ZXN0LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVvcm0vZW50aXRpZXMvR3JvdXAudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9Hcm91cE1lc3NhZ2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9Hcm91cE1lc3NhZ2VBdHRhY2htZW50LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVvcm0vZW50aXRpZXMvTWVzc2FnZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2VudGl0aWVzL01lc3NhZ2VBdHRhY2htZW50LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVvcm0vZW50aXRpZXMvUGVlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2VudGl0aWVzL1Byb2ZpbGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL2NoYXQvdXRpbHMvdHlwZW9ybS9lbnRpdGllcy9TZXNzaW9uLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVvcm0vZW50aXRpZXMvVXNlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2VudGl0aWVzL1VzZXJQcmVzZW5jZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvY2hhdC91dGlscy90eXBlb3JtL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9jaGF0L3V0aWxzL3R5cGVzLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvYXV0aC9hdXRoLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC9hdXRoL2F1dGgubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvY2hhdC5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvY2hhdC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC9jb252ZXJzYXRpb25zL2NvbnZlcnNhdGlvbnMuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc2VydmVyL3NyYy9jaGF0L2NvbnZlcnNhdGlvbnMvY29udmVyc2F0aW9ucy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC9mcmllbmQvZnJpZW5kcy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvZnJpZW5kL2ZyaWVuZHMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvZnJpZW5kX3JlcXVlc3RzL2ZyaWVuZF9yZXF1ZXN0cy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvZnJpZW5kX3JlcXVlc3RzL2ZyaWVuZF9yZXF1ZXN0cy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC9ncm91cF9tZXNzYWdlcy9ncm91cF9tZXNzYWdlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC9ncm91cF9tZXNzYWdlcy9ncm91cF9tZXNzYWdlLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc2VydmVyL3NyYy9jaGF0L2dyb3VwX3JlY2lwaWVudHMvZ3JvdXBfcmVjaXBpZW50LmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC9ncm91cF9yZWNpcGllbnRzL2dyb3VwX3JlY2lwaWVudC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC9ncm91cHMvZ3JvdXAuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc2VydmVyL3NyYy9jaGF0L2dyb3Vwcy9ncm91cC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC9tZXNzYWdlcy9tZXNzYWdlcy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvbWVzc2FnZXMvbWVzc2FnZXMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvdXNlcl9wcmVzZW5jZS91c2VyX3ByZXNlbmNlLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC91c2VyX3ByZXNlbmNlL3VzZXJfcHJlc2VuY2UubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvdXNlcl9wcm9maWxlL3VzZXJfcHJvZmlsZS5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvdXNlcl9wcm9maWxlL3VzZXJfcHJvZmlsZS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvY2hhdC91c2Vycy91c2Vycy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL2NoYXQvdXNlcnMvdXNlcnMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zZXJ2ZXIvc3JjL21haW4udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvc2VydmVyLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3NlcnZlci9zcmMvc2VydmVyLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc2VydmVyL3NyYy9zZXJ2ZXIuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvYXV0aC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9hdXRoL2RlY29yYXRvci9nZXRfdXNlci5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9hdXRoL2RlY29yYXRvci9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvZGVjb3JhdG9yL3N3YWdnZXItY29udHJvbGxlci5kZWNvcmF0b3IudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9hdXRoL2d1YXJkcy9nb29nbGUuZ3VhcmQudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9hdXRoL2d1YXJkcy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvZ3VhcmRzL2p3dC5ndWFyZC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvZ3VhcmRzL2xvY2FsLmd1YXJkLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vYXV0aC9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvcHJpc21hL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vYXV0aC9wcmlzbWEvcHJpc21hLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvcHJpc21hL3ByaXNtYS5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vYXV0aC9zdHJhdGVnaWVzL2dvb2dsZS5zdHJhdGVneS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvc3RyYXRlZ2llcy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvc3RyYXRlZ2llcy9qd3QtcmVmcmVzaC5zdHJhdGVneS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvc3RyYXRlZ2llcy9qd3Quc3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwuc3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9odHRwL2h0dHAubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vaHR0cC9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2ludGVyY2VwdG9ycy9odHRwQ2FjaGUuaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9pbnRlcmNlcHRvcnMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9pbnRlcmNlcHRvcnMvcmVzcG9uc2UuaW50ZXJjZXB0b3IudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9pbnRlcmNlcHRvcnMvc2VudHJ5LmludGVyY2VwdG9yLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9yZWRpcy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL3JlZGlzL3JlZGlzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29tbW9uXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbmZpZ1wiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb3JlXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2p3dFwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9taWNyb3NlcnZpY2VzXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3Bhc3Nwb3J0XCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL3BsYXRmb3JtLWV4cHJlc3NcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvc3dhZ2dlclwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy90aHJvdHRsZXJcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBwcmlzbWEvbXlzcWxcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBzZW50cnkvbm9kZVwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiY2xhc3MtdHJhbnNmb3JtZXJcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcImNsYXNzLXZhbGlkYXRvclwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiY29va2llLXBhcnNlclwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiZXhwcmVzc1wiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwibmVzdGpzLWkxOG5cIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0LWdvb2dsZS1vYXV0aDIwXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1qd3RcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcInBhc3Nwb3J0LWxvY2FsXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJyZWZsZWN0LW1ldGFkYXRhXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJyeGpzL29wZXJhdG9yc1wiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwidHlwZW9ybVwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwicGF0aFwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvd2VicGFjay9zdGFydHVwIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBKd3RTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9qd3QnO1xuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzLCBJbmplY3QsIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICcuLi91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgSVVzZXJTZXJ2aWNlIH0gZnJvbSAnLi4vdXNlcnMvaW50ZXJmYWNlcy91c2VyJztcbmltcG9ydCBjcnlwdG8gZnJvbSAnY3J5cHRvJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VBdXRoIH0gZnJvbSAnQGNvbW1vbi9hdXRoL3ByaXNtYSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBdXRoU2VydmljZSBleHRlbmRzIEhUVFAge1xuICBjb25zdHJ1Y3RvcihcbiAgICBASW5qZWN0KFNlcnZpY2VzLlVTRVJTKSBwcml2YXRlIHVzZXJTZXJ2aWNlOiBJVXNlclNlcnZpY2UsXG4gICAgcHJpdmF0ZSBqd3Q6IEp3dFNlcnZpY2UsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSBodHRwOiBIVFRQLFxuICAgIHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlQXV0aCxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFzeW5jIGxvZ2luKGRhdGEpIHtcbiAgICAvLyBmaW5kIHVzZXIgYnkgdXNlcm5hbWVcbiAgICBjb25zdCB1c2VyID0gKGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZmluZFVzZXIoeyB1c2VybmFtZTogZGF0YS51c2VybmFtZSB9KSlcbiAgICAgIC5kYXRhO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnY29tbW9uLklOQ09SUkVDVF9DUkVERU5USUFMUycsXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAodXNlci5kZWxldGVkRGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ3N5c3RlbXMuVVNFUi5OT1RfRVhJU1RFRCcsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IFthY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgIHRoaXMuc2lnblRva2VuKHVzZXIuaWQsIHVzZXIudXNlcm5hbWUpLFxuICAgICAgdGhpcy5zaWduUmVmcmVzaFRva2VuKHVzZXIuaWQsIHVzZXIudXNlcm5hbWUpLFxuICAgIF0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLk9LLCAnYXV0aC5MT0dJTl9TVUNDRVNTJywge1xuICAgICAgLi4udXNlcixcbiAgICAgIGFjY2Vzc1Rva2VuLFxuICAgICAgcmVmcmVzaFRva2VuLFxuICAgIH0pO1xuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBzaWduVG9rZW4odXNlcklkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7IGlkOiB1c2VySWQsIHVzZXJuYW1lIH07XG4gICAgY29uc3Qgc2VjcmV0ID0gdGhpcy5jb25maWcuZ2V0T3JUaHJvdygnSldUX1NFQ1JFVCcpO1xuXG4gICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLmp3dC5zaWduQXN5bmMocGF5bG9hZCwge1xuICAgICAgZXhwaXJlc0luOiB0aGlzLmNvbmZpZy5nZXRPclRocm93KCdKV1RfQUNDRVNTX1RPS0VOX0VYUElSRScpLFxuICAgICAgc2VjcmV0OiBzZWNyZXQsXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYWNjZXNzVG9rZW47XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNpZ25SZWZyZXNoVG9rZW4odXNlcklkOiBudW1iZXIsIHVzZXJuYW1lOiBzdHJpbmcpIHtcbiAgICBjb25zdCBwYXlsb2FkID0geyBpZDogdXNlcklkLCB1c2VybmFtZSB9O1xuICAgIGNvbnN0IHNlY3JldCA9IHRoaXMuY29uZmlnLmdldE9yVGhyb3coJ0pXVF9SRUZSRVNIX1RPS0VOX1NFQ1JFVCcpO1xuXG4gICAgY29uc3QgcmVmcmVzaFRva2VuID0gYXdhaXQgdGhpcy5qd3Quc2lnbkFzeW5jKHBheWxvYWQsIHtcbiAgICAgIGV4cGlyZXNJbjogdGhpcy5jb25maWcuZ2V0T3JUaHJvdygnSldUX1JFRlJFU0hfVE9LRU5fRVhQSVJFJyksXG4gICAgICBzZWNyZXQ6IHNlY3JldCxcbiAgICB9KTtcblxuICAgIGNvbnN0IHJlZnJlc2hUb2tlblNoYTEgPSBjcnlwdG9cbiAgICAgIC5jcmVhdGVIYXNoKCdzaGExJylcbiAgICAgIC51cGRhdGUocmVmcmVzaFRva2VuKVxuICAgICAgLmRpZ2VzdCgnaGV4Jyk7XG5cbiAgICBhd2FpdCB0aGlzLmNyZWF0ZVRva2VuKHVzZXJJZCwgcmVmcmVzaFRva2VuU2hhMSk7XG4gICAgcmV0dXJuIHJlZnJlc2hUb2tlbjtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlVG9rZW4odXNlcklkOiBudW1iZXIsIGhhc2hlZFRva2VuOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMucHJpc21hLnRva2Vucy5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnByaXNtYS50b2tlbnMuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICByZWZyZXNoVG9rZW5TaGExOiBoYXNoZWRUb2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCB0aGlzLnByaXNtYS50b2tlbnMudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVmcmVzaFRva2VuU2hhMTogaGFzaGVkVG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJc05vdEVtcHR5LCBNYXhMZW5ndGgsIE1pbkxlbmd0aCB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBDcmVhdGVVc2VyRHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBATWluTGVuZ3RoKDMpXG4gIEBNYXhMZW5ndGgoMTYpXG4gIHVzZXJuYW1lOiBzdHJpbmc7XG5cbiAgQElzTm90RW1wdHkoKVxuICBATWluTGVuZ3RoKDIpXG4gIEBNYXhMZW5ndGgoMzIpXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQE1pbkxlbmd0aCgyKVxuICBATWF4TGVuZ3RoKDMyKVxuICBsYXN0TmFtZTogc3RyaW5nO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgQE1pbkxlbmd0aCg4KVxuICBATWF4TGVuZ3RoKDMyKVxuICBwYXNzd29yZDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgSXNPcHRpb25hbCwgSXNTdHJpbmcsIE1heExlbmd0aCwgTWluTGVuZ3RoIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZVVzZXJQcm9maWxlRHRvIHtcbiAgQElzU3RyaW5nKClcbiAgQE1heExlbmd0aCgyMDApXG4gIEBJc09wdGlvbmFsKClcbiAgYWJvdXQ/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBDcmVhdGVVc2VyRGV0YWlscyB9IGZyb20gJy4uLy4uL3V0aWxzL3R5cGVzJztcblxuZXhwb3J0IGludGVyZmFjZSBJVXNlclNlcnZpY2Uge1xuICBjcmVhdGVVc2VyKHVzZXJEZXRhaWxzOiBDcmVhdGVVc2VyRGV0YWlscyk7XG4gIGZpbmRVc2VyKHsgdXNlcm5hbWUsIGlkIH06IHsgdXNlcm5hbWU/OiBzdHJpbmc7IGlkPzogbnVtYmVyIH0pO1xuICBzZWFyY2hVc2VycyhxdWVyeTogc3RyaW5nKTtcbn1cbiIsImltcG9ydCB7IE11bHRlckZpZWxkIH0gZnJvbSAnQG5lc3Rqcy9wbGF0Zm9ybS1leHByZXNzL211bHRlci9pbnRlcmZhY2VzL211bHRlci1vcHRpb25zLmludGVyZmFjZSc7XG5cbmV4cG9ydCBlbnVtIFJvdXRlcyB7XG4gIEFVVEggPSAnYXV0aCcsXG4gIFVTRVJTID0gJ3VzZXJzJyxcbiAgVVNFUlNfUFJPRklMRVMgPSAndXNlcnMvcHJvZmlsZXMnLFxuICBDT05WRVJTQVRJT05TID0gJ2NvbnZlcnNhdGlvbnMnLFxuICBNRVNTQUdFUyA9ICdjb252ZXJzYXRpb25zLzppZC9tZXNzYWdlcycsXG4gIEdST1VQUyA9ICdncm91cHMnLFxuICBHUk9VUF9NRVNTQUdFUyA9ICdncm91cHMvOmlkL21lc3NhZ2VzJyxcbiAgR1JPVVBfUkVDSVBJRU5UUyA9ICdncm91cHMvOmlkL3JlY2lwaWVudHMnLFxuICBFWElTVFMgPSAnZXhpc3RzJyxcbiAgRlJJRU5EUyA9ICdmcmllbmRzJyxcbiAgRlJJRU5EX1JFUVVFU1RTID0gJ2ZyaWVuZHMvcmVxdWVzdHMnLFxuICBVU0VSX1BSRVNFTkNFID0gJ3VzZXJzL3ByZXNlbmNlJyxcbn1cblxuZXhwb3J0IGVudW0gU2VydmljZXMge1xuICBBVVRIID0gJ0FVVEhfU0VSVklDRScsXG4gIFVTRVJTID0gJ1VTRVJTX1NFUlZJQ0UnLFxuICBVU0VSU19QUk9GSUxFUyA9ICdVU0VSU19QUk9GSUxFU19TRVJWSUNFJyxcbiAgVVNFUl9QUkVTRU5DRSA9ICdVU0VSX1BSRVNFTkNFX1NFUlZJQ0UnLFxuICBDT05WRVJTQVRJT05TID0gJ0NPTlZFUlNBVElPTlNfU0VSVklDRScsXG4gIE1FU1NBR0VTID0gJ01FU1NBR0VfU0VSVklDRScsXG4gIE1FU1NBR0VfQVRUQUNITUVOVFMgPSAnTUVTU0FHRV9BVFRBQ0hNRU5UU19TRVJWSUNFJyxcbiAgR0FURVdBWV9TRVNTSU9OX01BTkFHRVIgPSAnR0FURVdBWV9TRVNTSU9OX01BTkFHRVInLFxuICBHUk9VUFMgPSAnR1JPVVBTX1NFUlZJQ0UnLFxuICBHUk9VUF9NRVNTQUdFUyA9ICdHUk9VUF9NRVNTQUdFU19TRVJWSUNFJyxcbiAgR1JPVVBfUkVDSVBJRU5UUyA9ICdHUk9VUF9SRUNJUElFTlRTX1NFUlZJQ0UnLFxuICBGUklFTkRTX1NFUlZJQ0UgPSAnRlJJRU5EU19TRVJWSUNFJyxcbiAgRlJJRU5EU19SRVFVRVNUU19TRVJWSUNFID0gJ0ZSSUVORF9SRVFVRVNUX1NFUlZJQ0UnLFxuICBTUEFDRVNfQ0xJRU5UID0gJ1NQQUNFU19DTElFTlQnLFxuICBJTUFHRV9VUExPQURfU0VSVklDRSA9ICdJTUFHRV9VUExPQURfU0VSVklDRScsXG59XG5cbmV4cG9ydCBlbnVtIFNlcnZlckV2ZW50cyB7XG4gIEZSSUVORF9SRVFVRVNUX0NSRUFURUQgPSAnZnJpZW5kcmVxdWVzdC5jcmVhdGUnLFxuICBGUklFTkRfUkVRVUVTVF9BQ0NFUFRFRCA9ICdmcmllbmRyZXF1ZXN0LmFjY2VwdGVkJyxcbiAgRlJJRU5EX1JFUVVFU1RfUkVKRUNURUQgPSAnZnJpZW5kcmVxdWVzdC5yZWplY3RlZCcsXG4gIEZSSUVORF9SRVFVRVNUX0NBTkNFTExFRCA9ICdmcmllbmRyZXF1ZXN0LmNhbmNlbGxlZCcsXG4gIEZSSUVORF9SRU1PVkVEID0gJ2ZyaWVuZC5yZW1vdmVkJyxcbn1cblxuZXhwb3J0IGVudW0gV2Vic29ja2V0RXZlbnRzIHtcbiAgRlJJRU5EX1JFUVVFU1RfQUNDRVBURUQgPSAnb25GcmllbmRSZXF1ZXN0QWNjZXB0ZWQnLFxuICBGUklFTkRfUkVRVUVTVF9SRUpFQ1RFRCA9ICdvbkZyaWVuZFJlcXVlc3RSZWplY3RlZCcsXG4gIFZJREVPX0NBTExfUkVKRUNURUQgPSAnb25WaWRlb0NhbGxSZWplY3RlZCcsXG4gIFZPSUNFX0NBTExfQUNDRVBURUQgPSAnb25Wb2ljZUNhbGxBY2NlcHRlZCcsXG4gIFZPSUNFX0NBTExfSEFOR19VUCA9ICdvblZvaWNlQ2FsbEhhbmdVcCcsXG4gIFZPSUNFX0NBTExfUkVKRUNURUQgPSAnb25Wb2ljZUNhbGxSZWplY3RlZCcsXG59XG5cbmV4cG9ydCBjb25zdCBVc2VyUHJvZmlsZUZpbGVGaWVsZHM6IE11bHRlckZpZWxkW10gPSBbXG4gIHtcbiAgICBuYW1lOiAnYmFubmVyJyxcbiAgICBtYXhDb3VudDogMSxcbiAgfSxcbiAge1xuICAgIG5hbWU6ICdhdmF0YXInLFxuICAgIG1heENvdW50OiAxLFxuICB9LFxuXTtcbiIsImltcG9ydCB7IGNyZWF0ZVBhcmFtRGVjb3JhdG9yLCBFeGVjdXRpb25Db250ZXh0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQXV0aGVudGljYXRlZFJlcXVlc3QgfSBmcm9tICcuL3R5cGVzJztcblxuZXhwb3J0IGNvbnN0IEF1dGhVc2VyID0gY3JlYXRlUGFyYW1EZWNvcmF0b3IoXG4gIChkYXRhOiB1bmtub3duLCBjdHg6IEV4ZWN1dGlvbkNvbnRleHQpID0+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gPEF1dGhlbnRpY2F0ZWRSZXF1ZXN0PmN0eC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXF1ZXN0KCk7XG4gICAgcmV0dXJuIHJlcXVlc3QudXNlcjtcbiAgfSxcbik7XG4iLCJpbXBvcnQge1xuICBDb2x1bW4sXG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIE1hbnlUb09uZSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcblxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VNZXNzYWdlIHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oKVxuICBpZDogbnVtYmVyO1xuXG4gIEBDb2x1bW4oJ3RleHQnLCB7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGNvbnRlbnQ6IHN0cmluZztcblxuICBAQ3JlYXRlRGF0ZUNvbHVtbih7IG5hbWU6ICdjcmVhdGVkX2F0JyB9KVxuICBjcmVhdGVkQXQ6IG51bWJlcjtcblxuICBATWFueVRvT25lKCgpID0+IFVzZXIsICh1c2VyKSA9PiB1c2VyLm1lc3NhZ2VzKVxuICBhdXRob3I6IFVzZXI7XG59XG4iLCJpbXBvcnQge1xuICBDb2x1bW4sXG4gIENyZWF0ZURhdGVDb2x1bW4sXG4gIEVudGl0eSxcbiAgSW5kZXgsXG4gIEpvaW5Db2x1bW4sXG4gIE9uZVRvTWFueSxcbiAgT25lVG9PbmUsXG4gIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4sXG4gIFVwZGF0ZURhdGVDb2x1bW4sXG59IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vTWVzc2FnZSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcblxuQEVudGl0eSh7IG5hbWU6ICdjb252ZXJzYXRpb25zJyB9KVxuQEluZGV4KFsnY3JlYXRvci5pZCcsICdyZWNpcGllbnQuaWQnXSwgeyB1bmlxdWU6IHRydWUgfSlcbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb24ge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQE9uZVRvT25lKCgpID0+IFVzZXIsIHsgY3JlYXRlRm9yZWlnbktleUNvbnN0cmFpbnRzOiBmYWxzZSB9KVxuICBASm9pbkNvbHVtbigpXG4gIGNyZWF0b3I6IFVzZXI7XG5cbiAgQE9uZVRvT25lKCgpID0+IFVzZXIsIHsgY3JlYXRlRm9yZWlnbktleUNvbnN0cmFpbnRzOiBmYWxzZSB9KVxuICBASm9pbkNvbHVtbigpXG4gIHJlY2lwaWVudDogVXNlcjtcblxuICBAT25lVG9NYW55KCgpID0+IE1lc3NhZ2UsIChtZXNzYWdlKSA9PiBtZXNzYWdlLmNvbnZlcnNhdGlvbiwge1xuICAgIGNhc2NhZGU6IFsnaW5zZXJ0JywgJ3JlbW92ZScsICd1cGRhdGUnXSxcbiAgfSlcbiAgQEpvaW5Db2x1bW4oKVxuICBtZXNzYWdlczogTWVzc2FnZVtdO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgbmFtZTogJ2NyZWF0ZWRfYXQnIH0pXG4gIGNyZWF0ZWRBdDogbnVtYmVyO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBNZXNzYWdlKVxuICBASm9pbkNvbHVtbih7IG5hbWU6ICdsYXN0X21lc3NhZ2Vfc2VudCcgfSlcbiAgbGFzdE1lc3NhZ2VTZW50OiBNZXNzYWdlO1xuXG4gIEBVcGRhdGVEYXRlQ29sdW1uKHsgbmFtZTogJ3VwZGF0ZWRfYXQnIH0pXG4gIGxhc3RNZXNzYWdlU2VudEF0OiBEYXRlO1xufVxuIiwiaW1wb3J0IHtcbiAgQ3JlYXRlRGF0ZUNvbHVtbixcbiAgRW50aXR5LFxuICBKb2luQ29sdW1uLFxuICBPbmVUb09uZSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcblxuQEVudGl0eSh7IG5hbWU6ICdmcmllbmRzJyB9KVxuZXhwb3J0IGNsYXNzIEZyaWVuZCB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAT25lVG9PbmUoKCkgPT4gVXNlciwgeyBjcmVhdGVGb3JlaWduS2V5Q29uc3RyYWludHM6IGZhbHNlIH0pXG4gIEBKb2luQ29sdW1uKClcbiAgc2VuZGVyOiBVc2VyO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBVc2VyLCB7IGNyZWF0ZUZvcmVpZ25LZXlDb25zdHJhaW50czogZmFsc2UgfSlcbiAgQEpvaW5Db2x1bW4oKVxuICByZWNlaXZlcjogVXNlcjtcblxuICBAQ3JlYXRlRGF0ZUNvbHVtbigpXG4gIGNyZWF0ZWRBdDogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIEpvaW5Db2x1bW4sXG4gIE9uZVRvT25lLFxuICBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uLFxufSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IEZyaWVuZFJlcXVlc3RTdGF0dXMgfSBmcm9tICcuLi8uLi90eXBlcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9Vc2VyJztcblxuQEVudGl0eSh7IG5hbWU6ICdmcmllbmRfcmVxdWVzdHMnIH0pXG5leHBvcnQgY2xhc3MgRnJpZW5kUmVxdWVzdCB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAT25lVG9PbmUoKCkgPT4gVXNlciwgeyBjcmVhdGVGb3JlaWduS2V5Q29uc3RyYWludHM6IGZhbHNlIH0pXG4gIEBKb2luQ29sdW1uKClcbiAgc2VuZGVyOiBVc2VyO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBVc2VyLCB7IGNyZWF0ZUZvcmVpZ25LZXlDb25zdHJhaW50czogZmFsc2UgfSlcbiAgQEpvaW5Db2x1bW4oKVxuICByZWNlaXZlcjogVXNlcjtcblxuICBAQ3JlYXRlRGF0ZUNvbHVtbigpXG4gIGNyZWF0ZWRBdDogbnVtYmVyO1xuXG4gIC8vIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuICAvLyBzdGF0dXM6IEZyaWVuZFJlcXVlc3RTdGF0dXM7XG4gIHN0YXR1czogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHtcbiAgQ29sdW1uLFxuICBDcmVhdGVEYXRlQ29sdW1uLFxuICBFbnRpdHksXG4gIEpvaW5Db2x1bW4sXG4gIEpvaW5UYWJsZSxcbiAgTWFueVRvTWFueSxcbiAgT25lVG9NYW55LFxuICBPbmVUb09uZSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbiAgVXBkYXRlRGF0ZUNvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBHcm91cE1lc3NhZ2UgfSBmcm9tICcuL0dyb3VwTWVzc2FnZSc7XG5pbXBvcnQgeyBNZXNzYWdlIH0gZnJvbSAnLi9NZXNzYWdlJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL1VzZXInO1xuXG5ARW50aXR5KHsgbmFtZTogJ2dyb3VwcycgfSlcbmV4cG9ydCBjbGFzcyBHcm91cCB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgdGl0bGU/OiBzdHJpbmc7XG5cbiAgQE1hbnlUb01hbnkoKCkgPT4gVXNlciwgdXNlciA9PiB1c2VyLmdyb3VwcylcbiAgQEpvaW5UYWJsZSgpXG4gIHVzZXJzOiBVc2VyW107XG5cbiAgQE9uZVRvT25lKCgpID0+IFVzZXIsIHsgY3JlYXRlRm9yZWlnbktleUNvbnN0cmFpbnRzOiBmYWxzZSB9KVxuICBASm9pbkNvbHVtbigpXG4gIGNyZWF0b3I6IFVzZXI7XG5cbiAgQE9uZVRvT25lKCgpID0+IFVzZXIsIHsgY3JlYXRlRm9yZWlnbktleUNvbnN0cmFpbnRzOiBmYWxzZSB9KVxuICBASm9pbkNvbHVtbigpXG4gIG93bmVyOiBVc2VyO1xuXG4gIEBPbmVUb01hbnkoKCkgPT4gR3JvdXBNZXNzYWdlLCBtZXNzYWdlID0+IG1lc3NhZ2UuZ3JvdXAsIHtcbiAgICBjYXNjYWRlOiBbJ2luc2VydCcsICdyZW1vdmUnLCAndXBkYXRlJ10sXG4gIH0pXG4gIEBKb2luQ29sdW1uKClcbiAgbWVzc2FnZXM6IEdyb3VwTWVzc2FnZVtdO1xuXG4gIEBDcmVhdGVEYXRlQ29sdW1uKHsgbmFtZTogJ2NyZWF0ZWRfYXQnIH0pXG4gIGNyZWF0ZWRBdDogbnVtYmVyO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBHcm91cE1lc3NhZ2UpXG4gIEBKb2luQ29sdW1uKHsgbmFtZTogJ2xhc3RfbWVzc2FnZV9zZW50JyB9KVxuICBsYXN0TWVzc2FnZVNlbnQ6IEdyb3VwTWVzc2FnZTtcblxuICBAVXBkYXRlRGF0ZUNvbHVtbih7IG5hbWU6ICd1cGRhdGVkX2F0JyB9KVxuICBsYXN0TWVzc2FnZVNlbnRBdDogRGF0ZTtcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgYXZhdGFyPzogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBKb2luQ29sdW1uLCBNYW55VG9PbmUsIE9uZVRvTWFueSB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgQmFzZU1lc3NhZ2UgfSBmcm9tICcuL0Jhc2VNZXNzYWdlJztcbmltcG9ydCB7IEdyb3VwIH0gZnJvbSAnLi9Hcm91cCc7XG5pbXBvcnQgeyBHcm91cE1lc3NhZ2VBdHRhY2htZW50IH0gZnJvbSAnLi9Hcm91cE1lc3NhZ2VBdHRhY2htZW50JztcbmltcG9ydCB7IE1lc3NhZ2VBdHRhY2htZW50IH0gZnJvbSAnLi9NZXNzYWdlQXR0YWNobWVudCc7XG5cbkBFbnRpdHkoeyBuYW1lOiAnZ3JvdXBfbWVzc2FnZXMnIH0pXG5leHBvcnQgY2xhc3MgR3JvdXBNZXNzYWdlIGV4dGVuZHMgQmFzZU1lc3NhZ2Uge1xuICBATWFueVRvT25lKCgpID0+IEdyb3VwLCAoZ3JvdXApID0+IGdyb3VwLm1lc3NhZ2VzKVxuICBncm91cDogR3JvdXA7XG5cbiAgQE9uZVRvTWFueSgoKSA9PiBHcm91cE1lc3NhZ2VBdHRhY2htZW50LCAoYXR0YWNobWVudCkgPT4gYXR0YWNobWVudC5tZXNzYWdlKVxuICBASm9pbkNvbHVtbigpXG4gIGF0dGFjaG1lbnRzPzogTWVzc2FnZUF0dGFjaG1lbnRbXTtcbn1cbiIsImltcG9ydCB7IEVudGl0eSwgTWFueVRvT25lLCBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uIH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBHcm91cE1lc3NhZ2UgfSBmcm9tICcuL0dyb3VwTWVzc2FnZSc7XG5cbkBFbnRpdHkoeyBuYW1lOiAnZ3JvdXBfbWVzc2FnZV9hdHRhY2htZW50cycgfSlcbmV4cG9ydCBjbGFzcyBHcm91cE1lc3NhZ2VBdHRhY2htZW50IHtcbiAgQFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4oJ3V1aWQnKVxuICBrZXk6IHN0cmluZztcblxuICBATWFueVRvT25lKCgpID0+IEdyb3VwTWVzc2FnZSwgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuYXR0YWNobWVudHMsIHtcbiAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICB9KVxuICBtZXNzYWdlOiBHcm91cE1lc3NhZ2U7XG59XG4iLCJpbXBvcnQgeyBFbnRpdHksIEpvaW5Db2x1bW4sIE1hbnlUb09uZSwgT25lVG9NYW55IH0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBCYXNlTWVzc2FnZSB9IGZyb20gJy4vQmFzZU1lc3NhZ2UnO1xuaW1wb3J0IHsgQ29udmVyc2F0aW9uIH0gZnJvbSAnLi9Db252ZXJzYXRpb24nO1xuaW1wb3J0IHsgTWVzc2FnZUF0dGFjaG1lbnQgfSBmcm9tICcuL01lc3NhZ2VBdHRhY2htZW50JztcblxuQEVudGl0eSh7IG5hbWU6ICdtZXNzYWdlcycgfSlcbmV4cG9ydCBjbGFzcyBNZXNzYWdlIGV4dGVuZHMgQmFzZU1lc3NhZ2Uge1xuICBATWFueVRvT25lKCgpID0+IENvbnZlcnNhdGlvbiwgKGNvbnZlcnNhdGlvbikgPT4gY29udmVyc2F0aW9uLm1lc3NhZ2VzKVxuICBjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbjtcblxuICBAT25lVG9NYW55KCgpID0+IE1lc3NhZ2VBdHRhY2htZW50LCAoYXR0YWNobWVudCkgPT4gYXR0YWNobWVudC5tZXNzYWdlKVxuICBASm9pbkNvbHVtbigpXG4gIGF0dGFjaG1lbnRzOiBNZXNzYWdlQXR0YWNobWVudFtdO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBNYW55VG9PbmUsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IE1lc3NhZ2UgfSBmcm9tICcuL01lc3NhZ2UnO1xuXG5ARW50aXR5KHsgbmFtZTogJ21lc3NhZ2VfYXR0YWNobWVudHMnIH0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZUF0dGFjaG1lbnQge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXG4gIGtleTogc3RyaW5nO1xuXG4gIEBNYW55VG9PbmUoKCkgPT4gTWVzc2FnZSwgKG1lc3NhZ2UpID0+IG1lc3NhZ2UuYXR0YWNobWVudHMsIHtcbiAgICBvbkRlbGV0ZTogJ0NBU0NBREUnLFxuICB9KVxuICBtZXNzYWdlOiBNZXNzYWdlO1xufVxuIiwiaW1wb3J0IHsgRW50aXR5LCBPbmVUb09uZSwgUHJpbWFyeUdlbmVyYXRlZENvbHVtbiB9IGZyb20gJ3R5cGVvcm0nO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4vVXNlcic7XG5cbkBFbnRpdHkoKVxuZXhwb3J0IGNsYXNzIFBlZXIge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigndXVpZCcpXG4gIGlkOiBzdHJpbmc7XG5cbiAgQE9uZVRvT25lKCgpID0+IFVzZXIsICh1c2VyKSA9PiB1c2VyLnBlZXIpXG4gIHVzZXI6IFVzZXI7XG59XG4iLCJpbXBvcnQgeyBDb2x1bW4sIEVudGl0eSwgT25lVG9PbmUsIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuL1VzZXInO1xuXG5ARW50aXR5KHsgbmFtZTogJ3Byb2ZpbGVzJyB9KVxuZXhwb3J0IGNsYXNzIFByb2ZpbGUge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IGRlZmF1bHQ6ICcnIH0pXG4gIGFib3V0Pzogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBhdmF0YXI/OiBzdHJpbmc7XG5cbiAgQENvbHVtbih7IG51bGxhYmxlOiB0cnVlIH0pXG4gIGJhbm5lcj86IHN0cmluZztcblxuICBAT25lVG9PbmUoKCkgPT4gVXNlcilcbiAgdXNlcjogVXNlcjtcbn1cbiIsImltcG9ydCB7IElTZXNzaW9uIH0gZnJvbSAnY29ubmVjdC10eXBlb3JtJztcbmltcG9ydCB7XG4gIENvbHVtbixcbiAgRGVsZXRlRGF0ZUNvbHVtbixcbiAgRW50aXR5LFxuICBJbmRleCxcbiAgUHJpbWFyeUNvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5cbkBFbnRpdHkoeyBuYW1lOiAnc2Vzc2lvbnMnIH0pXG5leHBvcnQgY2xhc3MgU2Vzc2lvbiBpbXBsZW1lbnRzIElTZXNzaW9uIHtcbiAgQEluZGV4KClcbiAgQENvbHVtbignYmlnaW50JylcbiAgZXhwaXJlZEF0OiBudW1iZXIgPSBEYXRlLm5vdygpO1xuXG4gIEBQcmltYXJ5Q29sdW1uKCd2YXJjaGFyJywgeyBsZW5ndGg6IDI1NSB9KVxuICBpZDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oJ3RleHQnKVxuICBqc29uOiBzdHJpbmc7XG5cbiAgQERlbGV0ZURhdGVDb2x1bW4oKVxuICBkZXN0cm95ZWRBdDogRGF0ZTtcbn1cbiIsImltcG9ydCB7IEV4Y2x1ZGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQge1xuICBDb2x1bW4sXG4gIEVudGl0eSxcbiAgSm9pbkNvbHVtbixcbiAgTWFueVRvTWFueSxcbiAgT25lVG9NYW55LFxuICBPbmVUb09uZSxcbiAgUHJpbWFyeUdlbmVyYXRlZENvbHVtbixcbn0gZnJvbSAndHlwZW9ybSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vR3JvdXAnO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vTWVzc2FnZSc7XG5pbXBvcnQgeyBQZWVyIH0gZnJvbSAnLi9QZWVyJztcbmltcG9ydCB7IFByb2ZpbGUgfSBmcm9tICcuL1Byb2ZpbGUnO1xuaW1wb3J0IHsgVXNlclByZXNlbmNlIH0gZnJvbSAnLi9Vc2VyUHJlc2VuY2UnO1xuXG5ARW50aXR5KHsgbmFtZTogJ3VzZXJzJyB9KVxuZXhwb3J0IGNsYXNzIFVzZXIge1xuICBAUHJpbWFyeUdlbmVyYXRlZENvbHVtbigpXG4gIGlkOiBudW1iZXI7XG5cbiAgQENvbHVtbih7IHVuaXF1ZTogdHJ1ZSB9KVxuICB1c2VybmFtZTogc3RyaW5nO1xuXG4gIEBDb2x1bW4oeyBudWxsYWJsZTogdHJ1ZSB9KVxuICBlbWFpbDogc3RyaW5nO1xuXG4gIEBDb2x1bW4oKVxuICBmaXJzdE5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKClcbiAgbGFzdE5hbWU6IHN0cmluZztcblxuICBAQ29sdW1uKHsgc2VsZWN0OiBmYWxzZSB9KVxuICBARXhjbHVkZSgpXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgQE9uZVRvTWFueSgoKSA9PiBNZXNzYWdlLCAobWVzc2FnZSkgPT4gbWVzc2FnZS5hdXRob3IpXG4gIEBKb2luQ29sdW1uKClcbiAgbWVzc2FnZXM6IE1lc3NhZ2VbXTtcblxuICBATWFueVRvTWFueSgoKSA9PiBHcm91cCwgKGdyb3VwKSA9PiBncm91cC51c2VycylcbiAgZ3JvdXBzOiBHcm91cFtdO1xuXG4gIEBPbmVUb09uZSgoKSA9PiBQcm9maWxlLCB7IGNhc2NhZGU6IFsnaW5zZXJ0JywgJ3VwZGF0ZSddIH0pXG4gIEBKb2luQ29sdW1uKClcbiAgcHJvZmlsZTogUHJvZmlsZTtcblxuICBAT25lVG9PbmUoKCkgPT4gVXNlclByZXNlbmNlLCB7IGNhc2NhZGU6IFsnaW5zZXJ0JywgJ3VwZGF0ZSddIH0pXG4gIEBKb2luQ29sdW1uKClcbiAgcHJlc2VuY2U6IFVzZXJQcmVzZW5jZTtcblxuICBAT25lVG9PbmUoKCkgPT4gUGVlciwgKHBlZXIpID0+IHBlZXIudXNlciwge1xuICAgIGNhc2NhZGU6IFsnaW5zZXJ0JywgJ3JlbW92ZScsICd1cGRhdGUnXSxcbiAgfSlcbiAgQEpvaW5Db2x1bW4oKVxuICBwZWVyOiBQZWVyO1xufVxuIiwiaW1wb3J0IHsgQ29sdW1uLCBFbnRpdHksIFByaW1hcnlHZW5lcmF0ZWRDb2x1bW4gfSBmcm9tICd0eXBlb3JtJztcblxuQEVudGl0eSh7IG5hbWU6ICd1c2VyX3ByZXNlbmNlJyB9KVxuZXhwb3J0IGNsYXNzIFVzZXJQcmVzZW5jZSB7XG4gIEBQcmltYXJ5R2VuZXJhdGVkQ29sdW1uKClcbiAgaWQ6IG51bWJlcjtcblxuICBAQ29sdW1uKHsgbnVsbGFibGU6IHRydWUgfSlcbiAgc3RhdHVzTWVzc2FnZT86IHN0cmluZztcblxuICBAQ29sdW1uKHsgZGVmYXVsdDogZmFsc2UgfSlcbiAgc2hvd09mZmxpbmU6IGJvb2xlYW47XG59XG4iLCJpbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi9lbnRpdGllcy9Vc2VyJztcbmltcG9ydCB7IFNlc3Npb24gfSBmcm9tICcuL2VudGl0aWVzL1Nlc3Npb24nO1xuaW1wb3J0IHsgQ29udmVyc2F0aW9uIH0gZnJvbSAnLi9lbnRpdGllcy9Db252ZXJzYXRpb24nO1xuaW1wb3J0IHsgTWVzc2FnZSB9IGZyb20gJy4vZW50aXRpZXMvTWVzc2FnZSc7XG5pbXBvcnQgeyBHcm91cCB9IGZyb20gJy4vZW50aXRpZXMvR3JvdXAnO1xuaW1wb3J0IHsgR3JvdXBNZXNzYWdlIH0gZnJvbSAnLi9lbnRpdGllcy9Hcm91cE1lc3NhZ2UnO1xuaW1wb3J0IHsgRnJpZW5kUmVxdWVzdCB9IGZyb20gJy4vZW50aXRpZXMvRnJpZW5kUmVxdWVzdCc7XG5pbXBvcnQgeyBGcmllbmQgfSBmcm9tICcuL2VudGl0aWVzL0ZyaWVuZCc7XG5pbXBvcnQgeyBQcm9maWxlIH0gZnJvbSAnLi9lbnRpdGllcy9Qcm9maWxlJztcbmltcG9ydCB7IE1lc3NhZ2VBdHRhY2htZW50IH0gZnJvbSAnLi9lbnRpdGllcy9NZXNzYWdlQXR0YWNobWVudCc7XG5pbXBvcnQgeyBHcm91cE1lc3NhZ2VBdHRhY2htZW50IH0gZnJvbSAnLi9lbnRpdGllcy9Hcm91cE1lc3NhZ2VBdHRhY2htZW50JztcbmltcG9ydCB7IFVzZXJQcmVzZW5jZSB9IGZyb20gJy4vZW50aXRpZXMvVXNlclByZXNlbmNlJztcbmltcG9ydCB7IFBlZXIgfSBmcm9tICcuL2VudGl0aWVzL1BlZXInO1xuXG5jb25zdCBlbnRpdGllcyA9IFtcbiAgVXNlcixcbiAgU2Vzc2lvbixcbiAgQ29udmVyc2F0aW9uLFxuICBNZXNzYWdlLFxuICBHcm91cCxcbiAgR3JvdXBNZXNzYWdlLFxuICBGcmllbmRSZXF1ZXN0LFxuICBGcmllbmQsXG4gIFByb2ZpbGUsXG4gIE1lc3NhZ2VBdHRhY2htZW50LFxuICBHcm91cE1lc3NhZ2VBdHRhY2htZW50LFxuICBVc2VyUHJlc2VuY2UsXG4gIFBlZXIsXG5dO1xuXG5leHBvcnQgZGVmYXVsdCBlbnRpdGllcztcblxuZXhwb3J0IHtcbiAgVXNlcixcbiAgU2Vzc2lvbixcbiAgQ29udmVyc2F0aW9uLFxuICBNZXNzYWdlLFxuICBHcm91cCxcbiAgR3JvdXBNZXNzYWdlLFxuICBGcmllbmRSZXF1ZXN0LFxuICBGcmllbmQsXG4gIFByb2ZpbGUsXG4gIE1lc3NhZ2VBdHRhY2htZW50LFxuICBHcm91cE1lc3NhZ2VBdHRhY2htZW50LFxuICBVc2VyUHJlc2VuY2UsXG4gIFBlZXIsXG59O1xuIiwiaW1wb3J0IHtcbiAgQ29udmVyc2F0aW9uLFxuICBGcmllbmQsXG4gIEZyaWVuZFJlcXVlc3QsXG4gIEdyb3VwLFxuICBHcm91cE1lc3NhZ2UsXG4gIEdyb3VwTWVzc2FnZUF0dGFjaG1lbnQsXG4gIE1lc3NhZ2UsXG4gIE1lc3NhZ2VBdHRhY2htZW50LFxuICBVc2VyLFxufSBmcm9tICcuL3R5cGVvcm0nO1xuaW1wb3J0IHsgUmVxdWVzdCB9IGZyb20gJ2V4cHJlc3MnO1xuXG5leHBvcnQgdHlwZSBDcmVhdGVVc2VyRGV0YWlscyA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgcGFzc3dvcmQ6IHN0cmluZztcbiAgZmlyc3ROYW1lOiBzdHJpbmc7XG4gIGxhc3ROYW1lOiBzdHJpbmc7XG4gIHBlZXI/OiBhbnk7XG59O1xuXG5leHBvcnQgdHlwZSBWYWxpZGF0ZVVzZXJEZXRhaWxzID0ge1xuICB1c2VybmFtZTogc3RyaW5nO1xuICBwYXNzd29yZDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRmluZFVzZXJQYXJhbXMgPSBQYXJ0aWFsPHtcbiAgaWQ6IG51bWJlcjtcbiAgZW1haWw6IHN0cmluZztcbiAgdXNlcm5hbWU6IHN0cmluZztcbn0+O1xuXG5leHBvcnQgdHlwZSBGaW5kVXNlck9wdGlvbnMgPSBQYXJ0aWFsPHtcbiAgc2VsZWN0QWxsOiBib29sZWFuO1xufT47XG5cbmV4cG9ydCB0eXBlIENyZWF0ZUNvbnZlcnNhdGlvblBhcmFtcyA9IHtcbiAgdXNlcm5hbWU6IHN0cmluZztcbiAgbWVzc2FnZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQ29udmVyc2F0aW9uSWRlbnRpdHlUeXBlID0gJ2F1dGhvcicgfCAncmVjaXBpZW50JztcblxuZXhwb3J0IHR5cGUgRmluZFBhcnRpY2lwYW50UGFyYW1zID0gUGFydGlhbDx7XG4gIGlkOiBudW1iZXI7XG59PjtcblxuZXhwb3J0IGludGVyZmFjZSBBdXRoZW50aWNhdGVkUmVxdWVzdCBleHRlbmRzIFJlcXVlc3Qge1xuICB1c2VyOiBVc2VyO1xufVxuXG5leHBvcnQgdHlwZSBDcmVhdGVQYXJ0aWNpcGFudFBhcmFtcyA9IHtcbiAgaWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZU1lc3NhZ2VQYXJhbXMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIGNvbnRlbnQ/OiBzdHJpbmc7XG4gIGF0dGFjaG1lbnRzPzogQXR0YWNobWVudFtdO1xuICB1c2VyOiBVc2VyO1xufTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlTWVzc2FnZVJlc3BvbnNlID0ge1xuICBtZXNzYWdlOiBNZXNzYWdlO1xuICBjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbjtcbn07XG5cbmV4cG9ydCB0eXBlIERlbGV0ZU1lc3NhZ2VQYXJhbXMgPSB7XG4gIHVzZXJJZDogbnVtYmVyO1xuICBjb252ZXJzYXRpb25JZDogbnVtYmVyO1xuICBtZXNzYWdlSWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEZpbmRNZXNzYWdlUGFyYW1zID0ge1xuICB1c2VySWQ6IG51bWJlcjtcbiAgY29udmVyc2F0aW9uSWQ6IG51bWJlcjtcbiAgbWVzc2FnZUlkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBFZGl0TWVzc2FnZVBhcmFtcyA9IHtcbiAgY29udmVyc2F0aW9uSWQ6IG51bWJlcjtcbiAgbWVzc2FnZUlkOiBudW1iZXI7XG4gIHVzZXJJZDogbnVtYmVyO1xuICBjb250ZW50OiBzdHJpbmc7XG59O1xuXG5leHBvcnQgdHlwZSBFZGl0R3JvdXBNZXNzYWdlUGFyYW1zID0ge1xuICBncm91cElkOiBudW1iZXI7XG4gIG1lc3NhZ2VJZDogbnVtYmVyO1xuICB1c2VySWQ6IG51bWJlcjtcbiAgY29udGVudDogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlR3JvdXBQYXJhbXMgPSB7XG4gIGNyZWF0b3I6IHN0cmluZztcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIHVzZXJzOiBzdHJpbmdbXTtcbn07XG5cbmV4cG9ydCB0eXBlIEZldGNoR3JvdXBzUGFyYW1zID0ge1xuICB1c2VySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENyZWF0ZUdyb3VwTWVzc2FnZVBhcmFtcyA9IHtcbiAgYXV0aG9ySWQ6IG51bWJlcjtcbiAgYXR0YWNobWVudHM/OiBBdHRhY2htZW50W107XG4gIGNvbnRlbnQ6IHN0cmluZztcbiAgZ3JvdXBJZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlR3JvdXBNZXNzYWdlUmVzcG9uc2UgPSB7XG4gIG1lc3NhZ2U6IEdyb3VwTWVzc2FnZTtcbiAgZ3JvdXA6IEdyb3VwO1xufTtcblxuZXhwb3J0IHR5cGUgRGVsZXRlR3JvdXBNZXNzYWdlUGFyYW1zID0ge1xuICB1c2VySWQ6IG51bWJlcjtcbiAgZ3JvdXBJZDogbnVtYmVyO1xuICBtZXNzYWdlSWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZEdyb3VwUmVjaXBpZW50UGFyYW1zID0ge1xuICBpZDogbnVtYmVyO1xuICB1c2VybmFtZTogc3RyaW5nO1xuICB1c2VySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFJlbW92ZUdyb3VwUmVjaXBpZW50UGFyYW1zID0ge1xuICBpZDogbnVtYmVyO1xuICByZW1vdmVVc2VySWQ6IG51bWJlcjtcbiAgaXNzdWVySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIEFkZEdyb3VwVXNlclJlc3BvbnNlID0ge1xuICBncm91cDogR3JvdXA7XG4gIHVzZXI6IFVzZXI7XG59O1xuXG5leHBvcnQgdHlwZSBSZW1vdmVHcm91cFVzZXJSZXNwb25zZSA9IHtcbiAgZ3JvdXA6IEdyb3VwO1xuICB1c2VyOiBVc2VyO1xufTtcblxuZXhwb3J0IHR5cGUgQWNjZXNzUGFyYW1zID0ge1xuICBpZDogbnVtYmVyO1xuICB1c2VySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFRyYW5zZmVyT3duZXJQYXJhbXMgPSB7XG4gIHVzZXJJZDogbnVtYmVyO1xuICBncm91cElkOiBudW1iZXI7XG4gIG5ld093bmVySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIExlYXZlR3JvdXBQYXJhbXMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHVzZXJJZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQ2hlY2tVc2VyR3JvdXBQYXJhbXMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHVzZXJJZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgQ3JlYXRlRnJpZW5kUGFyYW1zID0ge1xuICB1c2VyOiBVc2VyO1xuICB1c2VybmFtZTogc3RyaW5nO1xufTtcblxuZXhwb3J0IHR5cGUgRnJpZW5kUmVxdWVzdFN0YXR1cyA9ICdhY2NlcHRlZCcgfCAncGVuZGluZycgfCAncmVqZWN0ZWQnO1xuXG5leHBvcnQgdHlwZSBGcmllbmRSZXF1ZXN0UGFyYW1zID0ge1xuICBpZDogbnVtYmVyO1xuICB1c2VySWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENhbmNlbEZyaWVuZFJlcXVlc3RQYXJhbXMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIHVzZXJJZDogbnVtYmVyO1xufTtcblxuZXhwb3J0IHR5cGUgRGVsZXRlRnJpZW5kUmVxdWVzdFBhcmFtcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdXNlcklkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBBY2NlcHRGcmllbmRSZXF1ZXN0UmVzcG9uc2UgPSB7XG4gIGZyaWVuZDogRnJpZW5kO1xuICBmcmllbmRSZXF1ZXN0OiBGcmllbmRSZXF1ZXN0O1xufTtcblxuZXhwb3J0IHR5cGUgUmVtb3ZlRnJpZW5kRXZlbnRQYXlsb2FkID0ge1xuICBmcmllbmQ6IEZyaWVuZDtcbiAgdXNlcklkOiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBVc2VyUHJvZmlsZUZpbGVzID0gUGFydGlhbDx7XG4gIGJhbm5lcjogRXhwcmVzcy5NdWx0ZXIuRmlsZVtdO1xuICBhdmF0YXI6IEV4cHJlc3MuTXVsdGVyLkZpbGVbXTtcbn0+O1xuXG5leHBvcnQgdHlwZSBVcGRhdGVVc2VyUHJvZmlsZVBhcmFtcyA9IFBhcnRpYWw8e1xuICBhYm91dDogc3RyaW5nO1xuICBiYW5uZXI6IEV4cHJlc3MuTXVsdGVyLkZpbGU7XG4gIGF2YXRhcjogRXhwcmVzcy5NdWx0ZXIuRmlsZTtcbn0+O1xuXG5leHBvcnQgdHlwZSBJbWFnZVBlcm1pc3Npb24gPSAncHVibGljLXJlYWQnIHwgJ3ByaXZhdGUnO1xuZXhwb3J0IHR5cGUgVXBsb2FkSW1hZ2VQYXJhbXMgPSB7XG4gIGtleTogc3RyaW5nO1xuICBmaWxlOiBFeHByZXNzLk11bHRlci5GaWxlO1xufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1lbXB0eS1pbnRlcmZhY2VcbmV4cG9ydCBpbnRlcmZhY2UgQXR0YWNobWVudCBleHRlbmRzIEV4cHJlc3MuTXVsdGVyLkZpbGUge31cblxuZXhwb3J0IHR5cGUgVXBsb2FkTWVzc2FnZUF0dGFjaG1lbnRQYXJhbXMgPSB7XG4gIGZpbGU6IEF0dGFjaG1lbnQ7XG4gIG1lc3NhZ2VBdHRhY2htZW50OiBNZXNzYWdlQXR0YWNobWVudDtcbn07XG5cbmV4cG9ydCB0eXBlIFVwbG9hZEdyb3VwTWVzc2FnZUF0dGFjaG1lbnRQYXJhbXMgPSB7XG4gIGZpbGU6IEF0dGFjaG1lbnQ7XG4gIG1lc3NhZ2VBdHRhY2htZW50OiBHcm91cE1lc3NhZ2VBdHRhY2htZW50O1xufTtcblxuZXhwb3J0IHR5cGUgR2V0Q29udmVyc2F0aW9uTWVzc2FnZXNQYXJhbXMgPSB7XG4gIGlkOiBudW1iZXI7XG4gIGxpbWl0OiBudW1iZXI7XG59O1xuXG5leHBvcnQgdHlwZSBVcGRhdGVDb252ZXJzYXRpb25QYXJhbXMgPSBQYXJ0aWFsPHtcbiAgaWQ6IG51bWJlcjtcbiAgbGFzdE1lc3NhZ2VTZW50OiBNZXNzYWdlO1xufT47XG5cbmV4cG9ydCB0eXBlIFVzZXJQcmVzZW5jZVN0YXR1cyA9ICdvbmxpbmUnIHwgJ2F3YXknIHwgJ29mZmxpbmUnIHwgJ2RuZCc7XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZVN0YXR1c01lc3NhZ2VQYXJhbXMgPSB7XG4gIHVzZXI6IFVzZXI7XG4gIHN0YXR1c01lc3NhZ2U6IHN0cmluZztcbn07XG5cbmV4cG9ydCB0eXBlIENhbGxIYW5nVXBQYXlsb2FkID0ge1xuICByZWNlaXZlcjogVXNlcjtcbiAgY2FsbGVyOiBVc2VyO1xufTtcblxuZXhwb3J0IHR5cGUgVm9pY2VDYWxsUGF5bG9hZCA9IHtcbiAgY29udmVyc2F0aW9uSWQ6IG51bWJlcjtcbiAgcmVjaXBpZW50SWQ6IG51bWJlcjtcbn07XG5cbmV4cG9ydCB0eXBlIENhbGxBY2NlcHRlZFBheWxvYWQgPSB7XG4gIGNhbGxlcjogVXNlcjtcbn07XG5cbmV4cG9ydCB0eXBlIFVwZGF0ZUdyb3VwRGV0YWlsc1BhcmFtcyA9IHtcbiAgaWQ6IG51bWJlcjtcbiAgdGl0bGU/OiBzdHJpbmc7XG4gIGF2YXRhcj86IEF0dGFjaG1lbnQ7XG59O1xuIiwiaW1wb3J0IHsgQ3JlYXRlVXNlckR0byB9IGZyb20gJ0BhcHBzL2NoYXQvYXV0aC9kdG9zL0NyZWF0ZVVzZXIuZHRvJztcbmltcG9ydCB7IFJvdXRlcywgU2VydmljZXMgfSBmcm9tICdAYXBwcy9jaGF0L3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBdXRoZW50aWNhdGVkUmVxdWVzdCB9IGZyb20gJ0BhcHBzL2NoYXQvdXRpbHMvdHlwZXMnO1xuaW1wb3J0IHsgU3dhZ2dlckNvbnRyb2xsZXIgfSBmcm9tICdAY29tbW9uL2F1dGgvZGVjb3JhdG9yJztcbmltcG9ydCB7IEp3dEd1YXJkIH0gZnJvbSAnQGNvbW1vbi9hdXRoL2d1YXJkcyc7XG5pbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBHZXQsXG4gIEluamVjdCxcbiAgTG9nZ2VyLFxuICBQb3N0LFxuICBSZXEsXG4gIFJlcyxcbiAgVXNlR3VhcmRzLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRQcm94eSB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuXG5AU3dhZ2dlckNvbnRyb2xsZXIoUm91dGVzLkFVVEgpXG5AQ29udHJvbGxlcihSb3V0ZXMuQVVUSClcbmV4cG9ydCBjbGFzcyBBdXRoQ29udHJvbGxlciB7XG4gIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0F1dGgnKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNlcnZpY2VzLkFVVEgpIHByaXZhdGUgY2xpZW50OiBDbGllbnRQcm94eSkge31cblxuICBAUG9zdCgncmVnaXN0ZXInKVxuICBhc3luYyByZWdpc3RlclVzZXIoQEJvZHkoKSBjcmVhdGVVc2VyRHRvOiBDcmVhdGVVc2VyRHRvKSB7XG4gICAgY29uc3QgcmVzcG9uc2UgPSB0aGlzLmNsaWVudC5zZW5kKCdyZWdpc3RlcicsIGNyZWF0ZVVzZXJEdG8pO1xuICAgIHJldHVybiByZXNwb25zZTtcbiAgfVxuXG4gIEBQb3N0KCdsb2dpbicpXG4gIGxvZ2luKEBCb2R5KCkgYXV0aDogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ2xvZ2luJywgYXV0aCk7XG4gIH1cblxuICBAR2V0KCdzdGF0dXMnKVxuICBAVXNlR3VhcmRzKEp3dEd1YXJkKVxuICBhc3luYyBzdGF0dXMoQFJlcSgpIHJlcTogYW55KSB7XG4gICAgY29uc3QgdG9rZW4gPSByZXEuaGVhZGVyKCdhdXRob3JpemF0aW9uJykucmVwbGFjZSgnQmVhcmVyICcsICcnKTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnc3RhdHVzJywgdG9rZW4pO1xuICB9XG5cbiAgQFBvc3QoJ2xvZ291dCcpXG4gIEBVc2VHdWFyZHMoSnd0R3VhcmQpXG4gIGxvZ291dChAUmVxKCkgcmVxOiBBdXRoZW50aWNhdGVkUmVxdWVzdCwgQFJlcygpIHJlczogUmVzcG9uc2UpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnbG9nb3V0JywgeyByZXEsIHJlcyB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUmVkaXNNb2R1bGUgfSBmcm9tICdAY29tbW9uL3JlZGlzJztcbmltcG9ydCB7IEF1dGhDb250cm9sbGVyIH0gZnJvbSAnLi9hdXRoLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICdAYXBwcy9jaGF0L3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBdXRoTW9kdWxlQ29tbW9uIH0gZnJvbSAnQGNvbW1vbi9hdXRoJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBBdXRoTW9kdWxlQ29tbW9uLFxuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIGlzR2xvYmFsOiB0cnVlLFxuICAgIH0pLFxuICAgIFJlZGlzTW9kdWxlLnJlZ2lzdGVyKFNlcnZpY2VzLkFVVEgpLFxuICBdLFxuICBjb250cm9sbGVyczogW0F1dGhDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgR2V0LFxuICBJbmplY3QsXG4gIExvZ2dlcixcbiAgUGFyYW0sXG4gIFBhdGNoLFxuICBQb3N0LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRQcm94eSB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5cbkBDb250cm9sbGVyKCdjaGF0JylcbmV4cG9ydCBjbGFzcyBDaGF0Q29udHJvbGxlciB7XG4gIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0FyZWFzJyk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQ0hBVF9TRVJWSUNFJykgcHJpdmF0ZSBjbGllbnQ6IENsaWVudFByb3h5KSB7fVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUmVkaXNNb2R1bGUgfSBmcm9tICdAY29tbW9uL3JlZGlzJztcbmltcG9ydCB7IENoYXRDb250cm9sbGVyIH0gZnJvbSAnQGFwcHMvc2VydmVyL3NyYy9jaGF0L2NoYXQuY29udHJvbGxlcic7XG5pbXBvcnQgeyBVc2VyUHJlc2VuY2VNb2R1bGUgfSBmcm9tICcuL3VzZXJfcHJlc2VuY2UvdXNlcl9wcmVzZW5jZS5tb2R1bGUnO1xuaW1wb3J0IHsgR3JvdXBNb2R1bGUgfSBmcm9tICcuL2dyb3Vwcy9ncm91cC5tb2R1bGUnO1xuaW1wb3J0IHsgR3JvdXBNZXNzYWdlTW9kdWxlIH0gZnJvbSAnLi9ncm91cF9tZXNzYWdlcy9ncm91cF9tZXNzYWdlLm1vZHVsZSc7XG5pbXBvcnQgeyBHcm91cFJlY2lwaWVudE1vZHVsZSB9IGZyb20gJy4vZ3JvdXBfcmVjaXBpZW50cy9ncm91cF9yZWNpcGllbnQubW9kdWxlJztcbmltcG9ydCB7IFVzZXJNb2R1bGUgfSBmcm9tICcuL3VzZXJzL3VzZXJzLm1vZHVsZSc7XG5pbXBvcnQgeyBGcmllbmRNb2R1bGUgfSBmcm9tICcuL2ZyaWVuZC9mcmllbmRzLm1vZHVsZSc7XG5pbXBvcnQgeyBDb252ZXJzYXRpb25zTW9kdWxlIH0gZnJvbSAnLi9jb252ZXJzYXRpb25zL2NvbnZlcnNhdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IE1lc3NhZ2VzTW9kdWxlIH0gZnJvbSAnLi9tZXNzYWdlcy9tZXNzYWdlcy5tb2R1bGUnO1xuaW1wb3J0IHsgRnJpZW5kUmVxdWVzdHNNb2R1bGUgfSBmcm9tICcuL2ZyaWVuZF9yZXF1ZXN0cy9mcmllbmRfcmVxdWVzdHMubW9kdWxlJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICcuL2F1dGgvYXV0aC5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlclByb2ZpbGVNb2R1bGUgfSBmcm9tICcuL3VzZXJfcHJvZmlsZS91c2VyX3Byb2ZpbGUubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICB9KSxcbiAgICBSZWRpc01vZHVsZS5yZWdpc3RlcignQ0hBVF9TRVJWSUNFJyksXG4gICAgVXNlclByZXNlbmNlTW9kdWxlLFxuICAgIFVzZXJNb2R1bGUsXG4gICAgR3JvdXBNb2R1bGUsXG4gICAgR3JvdXBNZXNzYWdlTW9kdWxlLFxuICAgIEdyb3VwUmVjaXBpZW50TW9kdWxlLFxuICAgIEZyaWVuZE1vZHVsZSxcbiAgICBDb252ZXJzYXRpb25zTW9kdWxlLFxuICAgIE1lc3NhZ2VzTW9kdWxlLFxuICAgIEZyaWVuZFJlcXVlc3RzTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUsXG4gICAgVXNlclByb2ZpbGVNb2R1bGVcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtDaGF0Q29udHJvbGxlcl0sXG59KVxuZXhwb3J0IGNsYXNzIENoYXRNb2R1bGUge31cbiIsImltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRyb2xsZXIsXG4gIEdldCxcbiAgSW5qZWN0LFxuICBMb2dnZXIsXG4gIFBhcmFtLFxuICBQYXJzZUludFBpcGUsXG4gIFBhdGNoLFxuICBQb3N0LFxuICBRdWVyeSxcbiAgVXNlR3VhcmRzLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRQcm94eSB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBKd3RHdWFyZCB9IGZyb20gJ0Bjb21tb24vYXV0aC9ndWFyZHMnO1xuaW1wb3J0IHsgR2V0VXNlciwgU3dhZ2dlckNvbnRyb2xsZXIgfSBmcm9tICdAY29tbW9uL2F1dGgvZGVjb3JhdG9yJztcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gJ0BhcHBzL2NoYXQvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFNraXBUaHJvdHRsZSB9IGZyb20gJ0BuZXN0anMvdGhyb3R0bGVyJztcblxuQFN3YWdnZXJDb250cm9sbGVyKCdjb252ZXJzYXRpb25zJylcbkBTa2lwVGhyb3R0bGUoKVxuQFVzZUd1YXJkcyhKd3RHdWFyZClcbkBDb250cm9sbGVyKFJvdXRlcy5DT05WRVJTQVRJT05TKVxuZXhwb3J0IGNsYXNzIENvbnZlcnNhdGlvbnNDb250cm9sbGVyIHtcbiAgbG9nZ2VyID0gbmV3IExvZ2dlcignQ29udmVyc2F0aW9ucycpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0NIQVRfU0VSVklDRScpIHByaXZhdGUgY2xpZW50OiBDbGllbnRQcm94eSkge31cblxuICBAR2V0KClcbiAgZ2V0Q29udmVyc2F0aW9ucyhcbiAgICBAR2V0VXNlcignaWQnKSB1c2VySWQ6IG51bWJlcixcbiAgICBAUXVlcnkoKSBwYWdpbmF0aW9uUXVlcnlEdG86IGFueSxcbiAgKSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdHZXQgYWxsIGNvbnZlcnNhdGlvbnMgYnkgdXNlcicpO1xuICAgIGNvbnN0IHBhdHRlcm4gPSB7IGNtZDogJ2dldF9jb252ZXJzYXRpb25zJyB9O1xuICAgIHBhZ2luYXRpb25RdWVyeUR0b1sndXNlcklkJ10gPSB1c2VySWQ7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQocGF0dGVybiwgcGFnaW5hdGlvblF1ZXJ5RHRvKTtcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIGdldENvbnZlcnNhdGlvbkJ5SWQoXG4gICAgQFBhcmFtKCdpZCcsIFBhcnNlSW50UGlwZSkgaWQ6IG51bWJlcixcbiAgICBAR2V0VXNlcignaWQnKSB1c2VySWQ6IG51bWJlcixcbiAgKSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdHZXQgYSBjb252ZXJzYXRpb24gaXRlbSBieSBpZCcpO1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCdnZXRfY29udmVyc2F0aW9uX2J5X2lkJywgeyBpZCwgdXNlcklkIH0pO1xuICB9XG5cbiAgQEdldCgnOnJlY2lwaWVudElkL2V4aXN0cycpXG4gIGFzeW5jIGNoZWNrQ29udmVyc2F0aW9uRXhpc3RzKFxuICAgIC8vIEBBdXRoVXNlcigpIHVzZXI6IFVzZXIsXG4gICAgQFBhcmFtKCdyZWNpcGllbnRJZCcsIFBhcnNlSW50UGlwZSkgcmVjaXBpZW50SWQ6IG51bWJlcixcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ3JlY2lwaWVudF9leGlzdCcsIHsgdXNlcklkOiAxLCByZWNpcGllbnRJZCB9KTtcbiAgfVxuXG4gIEBQb3N0KClcbiAgYXN5bmMgYWRkQ29udmVyc2F0aW9uKEBHZXRVc2VyKCdpZCcpIHVzZXJJZDogbnVtYmVyLCBAQm9keSgpIGR0bzogYW55KSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdBZGQgYSBjb252ZXJzYXRpb24gaXRlbScpO1xuICAgIGR0by5jcmVhdGVkQnkgPSB1c2VySWQ7XG4gICAgZHRvWydtZXNzYWdlcyddID0gW1xuICAgICAge1xuICAgICAgICBjcmVhdGVkQnk6IHVzZXJJZCxcbiAgICAgICAgYXV0aG9ySWQ6IHVzZXJJZCxcbiAgICAgICAgY29udGVudDogZHRvLm1lc3NhZ2VzLFxuICAgICAgfSxcbiAgICBdO1xuICAgIGRlbGV0ZSBkdG8ubWVzc2FnZTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnYWRkX2NvbnZlcnNhdGlvbicsIGR0byk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFJlZGlzTW9kdWxlIH0gZnJvbSAnQGNvbW1vbi9yZWRpcyc7XG5pbXBvcnQgeyBDb252ZXJzYXRpb25zQ29udHJvbGxlciB9IGZyb20gJ0BhcHBzL3NlcnZlci9zcmMvY2hhdC9jb252ZXJzYXRpb25zL2NvbnZlcnNhdGlvbnMuY29udHJvbGxlcic7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgfSksXG4gICAgUmVkaXNNb2R1bGUucmVnaXN0ZXIoJ0NIQVRfU0VSVklDRScpLFxuICBdLFxuICBjb250cm9sbGVyczogW0NvbnZlcnNhdGlvbnNDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzLCBTZXJ2aWNlcyB9IGZyb20gJ0BhcHBzL2NoYXQvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IEF1dGhVc2VyIH0gZnJvbSAnQGFwcHMvY2hhdC91dGlscy9kZWNvcmF0b3JzJztcbmltcG9ydCB7IFN3YWdnZXJDb250cm9sbGVyIH0gZnJvbSAnQGNvbW1vbi9hdXRoL2RlY29yYXRvcic7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBEZWxldGUsIEdldCwgSW5qZWN0LCBMb2dnZXIsIFBhcmFtLCBQYXJzZUludFBpcGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRQcm94eSB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2hhdC91dGlscy90eXBlb3JtJztcblxuQFN3YWdnZXJDb250cm9sbGVyKFJvdXRlcy5GUklFTkRTKVxuQENvbnRyb2xsZXIoUm91dGVzLkZSSUVORFMpXG5leHBvcnQgY2xhc3MgRnJpZW5kQ29udHJvbGxlciB7XG4gIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0ZyaWVuZHMnKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNlcnZpY2VzLkZSSUVORFNfU0VSVklDRSkgcHJpdmF0ZSBjbGllbnQ6IENsaWVudFByb3h5KSB7fVxuXG4gIEBHZXQoKVxuICBnZXRGcmllbmRzKEBBdXRoVXNlcigpIHVzZXI6IFVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnZ2V0LWZyaWVuZHMnLCB1c2VyKTtcbiAgfVxuXG4gIEBEZWxldGUoJzppZC9kZWxldGUnKVxuICBkZWxldGVGcmllbmQoXG4gICAgQEF1dGhVc2VyKCkgeyBpZDogdXNlcklkIH06IFVzZXIsXG4gICAgQFBhcmFtKCdpZCcsIFBhcnNlSW50UGlwZSkgaWQ6IG51bWJlcixcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ2RlbGV0ZS1mcmllbmQnLCB7IGlkLCB1c2VySWQgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFJlZGlzTW9kdWxlIH0gZnJvbSAnQGNvbW1vbi9yZWRpcyc7XG5pbXBvcnQgeyBGcmllbmRDb250cm9sbGVyIH0gZnJvbSAnLi9mcmllbmRzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICdAYXBwcy9jaGF0L3V0aWxzL2NvbnN0YW50cyc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgfSksXG4gICAgUmVkaXNNb2R1bGUucmVnaXN0ZXIoU2VydmljZXMuRlJJRU5EU19TRVJWSUNFKSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtGcmllbmRDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgRnJpZW5kTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBSb3V0ZXMsIFNlcnZpY2VzIH0gZnJvbSAnQGFwcHMvY2hhdC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgQXV0aFVzZXIgfSBmcm9tICdAYXBwcy9jaGF0L3V0aWxzL2RlY29yYXRvcnMnO1xuaW1wb3J0IHsgR2V0VXNlciwgU3dhZ2dlckNvbnRyb2xsZXIgfSBmcm9tICdAY29tbW9uL2F1dGgvZGVjb3JhdG9yJztcbmltcG9ydCB7IEJvZHksIENvbnRyb2xsZXIsIERlbGV0ZSwgR2V0LCBJbmplY3QsIExvZ2dlciwgUGFyYW0sIFBhcnNlSW50UGlwZSwgUGF0Y2gsIFBvc3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRQcm94eSB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2hhdC91dGlscy90eXBlb3JtJztcblxuQFN3YWdnZXJDb250cm9sbGVyKFJvdXRlcy5GUklFTkRfUkVRVUVTVFMpXG5AQ29udHJvbGxlcihSb3V0ZXMuRlJJRU5EX1JFUVVFU1RTKVxuZXhwb3J0IGNsYXNzIEZyaWVuZFJlcXVlc3RzQ29udHJvbGxlciB7XG4gIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0ZyaWVuZCBSZXF1ZXN0cycpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoU2VydmljZXMuRlJJRU5EU19SRVFVRVNUU19TRVJWSUNFKSBwcml2YXRlIGNsaWVudDogQ2xpZW50UHJveHkpIHt9XG5cbiAgQEdldCgpXG4gIGdldEZyaWVuZFJlcXVlc3RzKEBBdXRoVXNlcigpIHVzZXI6IFVzZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnZ2V0X2ZyaWVuZF9yZXF1ZXN0cycsIHVzZXIpO1xuICB9XG5cbiAgQFBvc3QoKVxuICBjcmVhdGVGcmllbmRSZXF1ZXN0KEBHZXRVc2VyKCkgdXNlcjogYW55LCBAQm9keSgpIGR0bzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ2NyZWF0ZV9mcmllbmRfcmVxdWVzdCcsIHsgdXNlciwgZHRvIH0pO1xuICB9XG5cbiAgQFBhdGNoKCc6aWQvYWNjZXB0JylcbiAgYWNjZXB0RnJpZW5kUmVxdWVzdChcbiAgICBAQXV0aFVzZXIoKSB7IGlkOiB1c2VySWQgfTogVXNlcixcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBpZDogbnVtYmVyLFxuICApIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnYWNjZXB0X2ZyaWVuZF9yZXF1ZXN0JywgeyBpZCwgdXNlcklkIH0pO1xuICB9XG5cbiAgQERlbGV0ZSgnOmlkL2NhbmNlbCcpXG4gIGNhbmNlbEZyaWVuZFJlcXVlc3QoXG4gICAgQEF1dGhVc2VyKCkgeyBpZDogdXNlcklkIH06IFVzZXIsXG4gICAgQFBhcmFtKCdpZCcsIFBhcnNlSW50UGlwZSkgaWQ6IG51bWJlcixcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ2NhbmNlbF9mcmllbmRfcmVxdWVzdCcsIHsgaWQsIHVzZXJJZCB9KTtcbiAgfVxuXG4gIEBQYXRjaCgnOmlkL3JlamVjdCcpXG4gIHJlamVjdEZyaWVuZFJlcXVlc3QoXG4gICAgQEF1dGhVc2VyKCkgeyBpZDogdXNlcklkIH06IFVzZXIsXG4gICAgQFBhcmFtKCdpZCcsIFBhcnNlSW50UGlwZSkgaWQ6IG51bWJlcixcbiAgKSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ3JlamVjdF9mcmllbmRfcmVxdWVzdCcsIHsgaWQsIHVzZXJJZCB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUmVkaXNNb2R1bGUgfSBmcm9tICdAY29tbW9uL3JlZGlzJztcbmltcG9ydCB7IEZyaWVuZFJlcXVlc3RzQ29udHJvbGxlciB9IGZyb20gJy4vZnJpZW5kX3JlcXVlc3RzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgU2VydmljZXMgfSBmcm9tICdAYXBwcy9jaGF0L3V0aWxzL2NvbnN0YW50cyc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgfSksXG4gICAgUmVkaXNNb2R1bGUucmVnaXN0ZXIoU2VydmljZXMuRlJJRU5EU19SRVFVRVNUU19TRVJWSUNFKSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtGcmllbmRSZXF1ZXN0c0NvbnRyb2xsZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBGcmllbmRSZXF1ZXN0c01vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgRGVsZXRlLFxuICBHZXQsXG4gIEluamVjdCxcbiAgTG9nZ2VyLFxuICBQYXJhbSxcbiAgUGFyc2VJbnRQaXBlLFxuICBQYXRjaCxcbiAgUG9zdCxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ2xpZW50UHJveHkgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2hhdC91dGlscy9jb25zdGFudHMnO1xuXG5AQ29udHJvbGxlcihSb3V0ZXMuR1JPVVBfTUVTU0FHRVMpXG5leHBvcnQgY2xhc3MgR3JvdXBNZXNzYWdlQ29udHJvbGxlciB7XG4gIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0dyb3VwIG1lc3NhZ2VzJyk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQ0hBVF9TRVJWSUNFJykgcHJpdmF0ZSBjbGllbnQ6IENsaWVudFByb3h5KSB7fVxuXG4gIEBQb3N0KClcbiAgYXN5bmMgY3JlYXRlR3JvdXBNZXNzYWdlKFxuICAgIC8vIEBBdXRoVXNlcigpIHVzZXI6IFVzZXIsXG4gICAgLy8gQFVwbG9hZGVkRmlsZXMoKSB7IGF0dGFjaG1lbnRzIH06IHsgYXR0YWNobWVudHM6IEF0dGFjaG1lbnRbXSB9LFxuICAgIEBQYXJhbSgnaWQnLCBQYXJzZUludFBpcGUpIGdyb3VwSWQ6IG51bWJlcixcbiAgICBAQm9keSgpIHsgY29udGVudCB9OiBhbnksXG4gICkge1xuICAgIC8vIGlmICghYXR0YWNobWVudHMgJiYgIWNvbnRlbnQpIHRocm93IG5ldyBFbXB0eU1lc3NhZ2VFeGNlcHRpb24oKTtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ0NyZWF0ZSBncm91cCBtZXNzYWdlJyk7XG4gICAgY29uc3QgcGFyYW1zID0geyBncm91cElkLCBhdXRob3JJZDogMSwgY29udGVudCB9O1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCdjcmVhdGVfZ3JvdXBfbWVzc2FnZScsIHBhcmFtcyk7XG4gIH1cblxuICBAR2V0KClcbiAgYXN5bmMgZ2V0R3JvdXBNZXNzYWdlcyhAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBncm91cElkOiBudW1iZXIpIHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ0dldCBncm91cCBtZXNzYWdlJyk7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ2dldF9ncm91cF9tZXNzYWdlcycsIGdyb3VwSWQpO1xuICB9XG5cbiAgQFBhdGNoKCc6bWVzc2FnZUlkJylcbiAgLy8gICBAU2tpcFRocm90dGxlKClcbiAgYXN5bmMgZWRpdEdyb3VwTWVzc2FnZShcbiAgICAvLyBAQXV0aFVzZXIoKSB7IGlkOiB1c2VySWQgfTogVXNlcixcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBncm91cElkOiBudW1iZXIsXG4gICAgQFBhcmFtKCdtZXNzYWdlSWQnLCBQYXJzZUludFBpcGUpIG1lc3NhZ2VJZDogbnVtYmVyLFxuICAgIEBCb2R5KCkgeyBjb250ZW50IH06IGFueSxcbiAgKSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdFZGl0IGdyb3VwIG1lc3NhZ2UnKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7IHVzZXJJZDogMSwgY29udGVudCwgZ3JvdXBJZCwgbWVzc2FnZUlkIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ2VkaXRfZ3JvdXBfbWVzc2FnZScsIHBhcmFtcyk7XG4gIH1cblxuICBARGVsZXRlKCc6bWVzc2FnZUlkJylcbiAgLy8gICBAU2tpcFRocm90dGxlKClcbiAgYXN5bmMgZGVsZXRlR3JvdXBNZXNzYWdlKFxuICAgIC8vIEBBdXRoVXNlcigpIHVzZXI6IFVzZXIsXG4gICAgQFBhcmFtKCdpZCcsIFBhcnNlSW50UGlwZSkgZ3JvdXBJZDogbnVtYmVyLFxuICAgIEBQYXJhbSgnbWVzc2FnZUlkJywgUGFyc2VJbnRQaXBlKSBtZXNzYWdlSWQ6IG51bWJlcixcbiAgKSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdEZWxldGUgZ3JvdXAgbWVzc2FnZScpO1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCdkZWxldGVfZ3JvdXBfbWVzc2FnZScsIHtcbiAgICAgIHVzZXJJZDogMSxcbiAgICAgIGdyb3VwSWQsXG4gICAgICBtZXNzYWdlSWQsXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFJlZGlzTW9kdWxlIH0gZnJvbSAnQGNvbW1vbi9yZWRpcyc7XG5pbXBvcnQgeyBHcm91cE1lc3NhZ2VDb250cm9sbGVyIH0gZnJvbSAnLi9ncm91cF9tZXNzYWdlLmNvbnRyb2xsZXInO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIGlzR2xvYmFsOiB0cnVlLFxuICAgIH0pLFxuICAgIFJlZGlzTW9kdWxlLnJlZ2lzdGVyKCdDSEFUX1NFUlZJQ0UnKSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtHcm91cE1lc3NhZ2VDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBNZXNzYWdlTW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBEZWxldGUsXG4gIEdldCxcbiAgSW5qZWN0LFxuICBMb2dnZXIsXG4gIFBhcmFtLFxuICBQYXJzZUludFBpcGUsXG4gIFBhdGNoLFxuICBQb3N0LFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRQcm94eSB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBSb3V0ZXMgfSBmcm9tICcuLi8uLi8uLi8uLi9jaGF0L3V0aWxzL2NvbnN0YW50cyc7XG5cbkBDb250cm9sbGVyKFJvdXRlcy5HUk9VUF9SRUNJUElFTlRTKVxuZXhwb3J0IGNsYXNzIEdyb3VwUmVjaXBpZW50Q29udHJvbGxlciB7XG4gIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0dyb3VwIHJlY2lwaWVudCcpO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoJ0NIQVRfU0VSVklDRScpIHByaXZhdGUgY2xpZW50OiBDbGllbnRQcm94eSkge31cblxuICBAUG9zdCgpXG4gIGFzeW5jIGFkZEdyb3VwUmVjaXBpZW50KFxuICAgIC8vIEBBdXRoVXNlcigpIHsgaWQ6IHVzZXJJZCB9OiBVc2VyLFxuICAgIEBQYXJhbSgnaWQnLCBQYXJzZUludFBpcGUpIGdyb3VwSWQ6IG51bWJlcixcbiAgICBAQm9keSgpIHsgdXNlcm5hbWUgfTogYW55XG4gICkge1xuICAgIHRoaXMubG9nZ2VyLmxvZygnQWRkIGdyb3VwIHJlY2lwaWVudCcpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgaWQ6IGdyb3VwSWQsIHVzZXJJZDogMSwgdXNlcm5hbWUgfTtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnYWRkX2dyb3VwX3JlY2lwaWVudCcsIHBhcmFtcyk7XG4gIH1cblxuICAvKipcbiAgICogTGVhdmVzIGEgR3JvdXBcbiAgICogQHBhcmFtIHVzZXIgdGhlIGF1dGhlbnRpY2F0ZWQgVXNlclxuICAgKiBAcGFyYW0gZ3JvdXBJZCB0aGUgaWQgb2YgdGhlIGdyb3VwXG4gICAqIEByZXR1cm5zIHRoZSB1cGRhdGVkIEdyb3VwIHRoYXQgdGhlIHVzZXIgaGFkIGxlZnRcbiAgICovXG4gIEBEZWxldGUoJ2xlYXZlJylcbiAgYXN5bmMgbGVhdmVHcm91cChcbiAgICAvLyBAQXV0aFVzZXIoKSB1c2VyOiBVc2VyLFxuICAgIEBQYXJhbSgnaWQnLCBQYXJzZUludFBpcGUpIGdyb3VwSWQ6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ1JlY2lwaWVudHMgbGVhdmVzJyk7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ2dyb3VwX3JlY2lwaWVudF9sZWF2ZScsIHtcbiAgICAgIGlkOiBncm91cElkLFxuICAgICAgdXNlcklkOiAxLFxuICAgIH0pO1xuICB9XG5cbiAgQERlbGV0ZSgnOnVzZXJJZCcpXG4gIGFzeW5jIHJlbW92ZUdyb3VwUmVjaXBpZW50KFxuICAgIC8vIEBBdXRoVXNlcigpIHsgaWQ6IGlzc3VlcklkIH06IFVzZXIsXG4gICAgQFBhcmFtKCdpZCcsIFBhcnNlSW50UGlwZSkgZ3JvdXBJZDogbnVtYmVyLFxuICAgIEBQYXJhbSgndXNlcklkJywgUGFyc2VJbnRQaXBlKSByZW1vdmVVc2VySWQ6IG51bWJlclxuICApIHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ1JlbW92ZSBncm91cCByZWNpcGllbnQnKTtcbiAgICBjb25zdCBwYXJhbXMgPSB7IGlzc3VlcklkOiAxLCBpZDogZ3JvdXBJZCwgcmVtb3ZlVXNlcklkIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ3JlbW92ZV9ncm91cF9yZWNpcGllbnQnLCBwYXJhbXMpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBSZWRpc01vZHVsZSB9IGZyb20gJ0Bjb21tb24vcmVkaXMnO1xuaW1wb3J0IHsgR3JvdXBSZWNpcGllbnRDb250cm9sbGVyIH0gZnJvbSAnLi9ncm91cF9yZWNpcGllbnQuY29udHJvbGxlcic7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgfSksXG4gICAgUmVkaXNNb2R1bGUucmVnaXN0ZXIoJ0NIQVRfU0VSVklDRScpLFxuICBdLFxuICBjb250cm9sbGVyczogW0dyb3VwUmVjaXBpZW50Q29udHJvbGxlcl0sXG59KVxuZXhwb3J0IGNsYXNzIEdyb3VwUmVjaXBpZW50TW9kdWxlIHt9XG4iLCJpbXBvcnQge1xuICBCb2R5LFxuICBDb250cm9sbGVyLFxuICBHZXQsXG4gIEluamVjdCxcbiAgTG9nZ2VyLFxuICBQYXJhbSxcbiAgUGFyc2VJbnRQaXBlLFxuICBQYXRjaCxcbiAgUG9zdCxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ2xpZW50UHJveHkgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnLi4vLi4vLi4vLi4vY2hhdC91dGlscy9jb25zdGFudHMnO1xuXG5AQ29udHJvbGxlcihSb3V0ZXMuR1JPVVBTKVxuZXhwb3J0IGNsYXNzIEdyb3VwQ29udHJvbGxlciB7XG4gIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ0dyb3VwJyk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQ0hBVF9TRVJWSUNFJykgcHJpdmF0ZSBjbGllbnQ6IENsaWVudFByb3h5KSB7fVxuXG4gIEBQb3N0KClcbiAgY3JlYXRlR3JvdXAoQEJvZHkoKSBib2R5OiBhbnkpIHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ0NyZWF0ZSBncm91cCBjaGF0Jyk7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ2NyZWF0ZV9ncm91cF9jaGF0JywgYm9keSk7XG4gIH1cblxuICBAR2V0KClcbiAgZ2V0R3JvdXBzKCkge1xuICAgIHRoaXMubG9nZ2VyLmxvZygnR2V0IHVzZXIgZ3JvdXAgY2hhdCcpO1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCdnZXRfZ3JvdXBzX2NoYXQnLCB7IHVzZXJJZDogMSB9KTtcbiAgfVxuXG4gIEBHZXQoJzppZCcpXG4gIGdldFNpbmdsZUdyb3VwKEBQYXJhbSgnaWQnLCBQYXJzZUludFBpcGUpIGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnZ2V0X3NpbmdsZV9ncm91cCcsIGlkKTtcbiAgfVxuXG4gIEBQYXRjaCgnOmlkL293bmVyJylcbiAgYXN5bmMgdXBkYXRlR3JvdXBPd25lcihcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBncm91cElkOiBudW1iZXIsXG4gICAgQEJvZHkoKSB7IG5ld093bmVySWQgfTogYW55LFxuICApIHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ1VwZGF0ZSBncm91cCBvd25lcicpO1xuICAgIGNvbnN0IHBhcmFtcyA9IHsgdXNlcklkOiAxLCBncm91cElkLCBuZXdPd25lcklkIH07XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ3VwZGF0ZV9ncm91cF9vd25lcicsIHBhcmFtcyk7XG4gIH1cblxuICBAUGF0Y2goJzppZC9kZXRhaWxzJylcbiAgLy8gQFVzZUludGVyY2VwdG9ycyhGaWxlSW50ZXJjZXB0b3IoJ2F2YXRhcicpKVxuICBhc3luYyB1cGRhdGVHcm91cERldGFpbHMoXG4gICAgQEJvZHkoKSB7IHRpdGxlIH06IGFueSxcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBpZDogbnVtYmVyLFxuICAgIC8vIEBVcGxvYWRlZEZpbGUoKSBhdmF0YXI6IEF0dGFjaG1lbnRcbiAgKSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdVcGRhdGUgZ3JvdXAgZGV0YWlscycpO1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCd1cGRhdGVfZ3JvdXBfZGV0YWlscycsIHtcbiAgICAgIGlkOiBpZCxcbiAgICAgIGF2YXRhcjogbnVsbCxcbiAgICAgIHRpdGxlLFxuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBSZWRpc01vZHVsZSB9IGZyb20gJ0Bjb21tb24vcmVkaXMnO1xuaW1wb3J0IHsgR3JvdXBDb250cm9sbGVyIH0gZnJvbSAnLi9ncm91cC5jb250cm9sbGVyJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICB9KSxcbiAgICBSZWRpc01vZHVsZS5yZWdpc3RlcignQ0hBVF9TRVJWSUNFJyksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbR3JvdXBDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgR3JvdXBNb2R1bGUge31cbiIsImltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRyb2xsZXIsXG4gIERlbGV0ZSxcbiAgR2V0LFxuICBJbmplY3QsXG4gIExvZ2dlcixcbiAgUGFyYW0sXG4gIFBhcnNlSW50UGlwZSxcbiAgUGF0Y2gsXG4gIFBvc3QsXG4gIFF1ZXJ5LFxuICBVc2VHdWFyZHMsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENsaWVudFByb3h5IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IEp3dEd1YXJkIH0gZnJvbSAnQGNvbW1vbi9hdXRoL2d1YXJkcyc7XG5pbXBvcnQgeyBHZXRVc2VyLCBTd2FnZ2VyQ29udHJvbGxlciB9IGZyb20gJ0Bjb21tb24vYXV0aC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgUm91dGVzIH0gZnJvbSAnQGFwcHMvY2hhdC91dGlscy9jb25zdGFudHMnO1xuaW1wb3J0IHsgU2tpcFRocm90dGxlLCBUaHJvdHRsZSB9IGZyb20gJ0BuZXN0anMvdGhyb3R0bGVyJztcblxuQFN3YWdnZXJDb250cm9sbGVyKCdtZXNzYWdlcycpXG5AVXNlR3VhcmRzKEp3dEd1YXJkKVxuQENvbnRyb2xsZXIoUm91dGVzLk1FU1NBR0VTKVxuZXhwb3J0IGNsYXNzIE1lc3NhZ2VzQ29udHJvbGxlciB7XG4gIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ01lc3NhZ2VzJyk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdCgnQ0hBVF9TRVJWSUNFJykgcHJpdmF0ZSBjbGllbnQ6IENsaWVudFByb3h5KSB7IH1cblxuICBAR2V0KClcbiAgQFNraXBUaHJvdHRsZSgpXG4gIGdldE1lc3NhZ2VzRnJvbUNvbnZlcnNhdGlvbihcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBpZDogbnVtYmVyLFxuICAgIEBRdWVyeSgpIHBhZ2luYXRpb25RdWVyeUR0bzogYW55XG4gICAgKSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdHZXQgdGhlIG1lc3NhZ2VzIGZyb20gY29udmVyc2F0aW9uJyk7XG4gICAgY29uc3QgcGF0dGVybiA9IHsgY21kOiAnZ2V0X21lc3NhZ2VzX2Zyb21fY29udmVyc2F0aW9uJyB9O1xuICAgIHBhZ2luYXRpb25RdWVyeUR0by5jb252ZXJzYXRpb25JZCA9IGlkO1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKHBhdHRlcm4sIHBhZ2luYXRpb25RdWVyeUR0byk7XG4gIH1cblxuICBAUG9zdCgpXG4gIEBUaHJvdHRsZSg1LCAxMClcbiAgYXN5bmMgYWRkTWVzc2FnZShcbiAgICBAR2V0VXNlcignaWQnKSB1c2VySWQ6IG51bWJlcixcbiAgICBAUGFyYW0oJ2lkJywgUGFyc2VJbnRQaXBlKSBpZDogbnVtYmVyLFxuICAgIEBCb2R5KCkgZHRvXG4gICAgKSB7XG4gICAgdGhpcy5sb2dnZXIubG9nKCdBZGQgYSBtZXNzYWdlIGl0ZW0nKTtcbiAgICBkdG8uY3JlYXRlZEJ5ID0gdXNlcklkO1xuICAgIGR0by5hdXRob3JJZCA9IHVzZXJJZDtcbiAgICBkdG8uY29udmVyc2F0aW9uSWQgPSBpZDtcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnYWRkX21lc3NhZ2UnLCBkdG8pO1xuICB9XG5cbiAgQFBhdGNoKCc6bWVzc2FnZUlkJylcbiAgZWRpdGVNZXNzYWdlKFxuICAgIEBHZXRVc2VyKCdpZCcpIHVzZXJJZDogbnVtYmVyLFxuICAgIEBQYXJhbSgnaWQnLCBQYXJzZUludFBpcGUpIGNvbnZlcnNhdGlvbklkOiBudW1iZXIsXG4gICAgQFBhcmFtKCdtZXNzYWdlSWQnLCBQYXJzZUludFBpcGUpIG1lc3NhZ2VJZDogbnVtYmVyLFxuICAgIEBCb2R5KCkgZHRvLFxuICApIHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ0VkaXQgYSBtZXNzYWdlIGl0ZW0nKTtcbiAgICBkdG9bJ3VwZGF0ZWRCeSddID0gdXNlcklkO1xuICAgIGR0b1snYXV0aG9ySWQnXSA9IHVzZXJJZDtcbiAgICBkdG9bJ2lkJ10gPSBtZXNzYWdlSWQ7XG4gICAgZHRvWydjb252ZXJzYXRpb25JZCddID0gY29udmVyc2F0aW9uSWRcbiAgICByZXR1cm4gdGhpcy5jbGllbnQuc2VuZCgnZWRpdF9tZXNzYWdlJywgZHRvKTtcbiAgfVxuXG4gIEBEZWxldGUoJzptZXNzYWdlSWQnKVxuICBkZWxldGVNZXNzYWdlKFxuICAgIEBHZXRVc2VyKCdpZCcpIHVzZXJJZDogbnVtYmVyLFxuICAgIEBQYXJhbSgnaWQnLCBQYXJzZUludFBpcGUpIGNvbnZlcnNhdGlvbklkOiBudW1iZXIsXG4gICAgQFBhcmFtKCdtZXNzYWdlSWQnLCBQYXJzZUludFBpcGUpIG1lc3NhZ2VJZDogbnVtYmVyLFxuICAgIEBCb2R5KCkgZHRvLFxuICApIHtcbiAgICB0aGlzLmxvZ2dlci5sb2coJ0RlbGV0ZSBhIG1lc3NhZ2UgaXRlbScpO1xuICAgIGR0b1sndXBkYXRlZEJ5J10gPSB1c2VySWQ7XG4gICAgZHRvWydpZCddID0gbWVzc2FnZUlkO1xuICAgIGR0b1snY29udmVyc2F0aW9uSWQnXSA9IGNvbnZlcnNhdGlvbklkXG4gICAgZHRvWydhdXRob3JJZCddID0gdXNlcklkO1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCdkZWxldGVfbWVzc2FnZScsIGR0byk7XG4gIH1cbn1cblxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUmVkaXNNb2R1bGUgfSBmcm9tICdAY29tbW9uL3JlZGlzJztcbmltcG9ydCB7IE1lc3NhZ2VzQ29udHJvbGxlciB9IGZyb20gJ0BhcHBzL3NlcnZlci9zcmMvY2hhdC9tZXNzYWdlcy9tZXNzYWdlcy5jb250cm9sbGVyJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICB9KSxcbiAgICBSZWRpc01vZHVsZS5yZWdpc3RlcignQ0hBVF9TRVJWSUNFJyksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbTWVzc2FnZXNDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgTWVzc2FnZXNNb2R1bGUge31cbiIsImltcG9ydCB7IFJvdXRlcywgU2VydmljZXMgfSBmcm9tICdAYXBwcy9jaGF0L3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBHZXRVc2VyLCBTd2FnZ2VyQ29udHJvbGxlciB9IGZyb20gJ0Bjb21tb24vYXV0aC9kZWNvcmF0b3InO1xuaW1wb3J0IHsgQm9keSwgQ29udHJvbGxlciwgSW5qZWN0LCBMb2dnZXIsIFBhdGNoLCBQb3N0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ2xpZW50UHJveHkgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gJ0BzZW50cnkvbm9kZSc7XG5cbkBTd2FnZ2VyQ29udHJvbGxlcihSb3V0ZXMuVVNFUl9QUkVTRU5DRSlcbkBDb250cm9sbGVyKFJvdXRlcy5VU0VSX1BSRVNFTkNFKVxuZXhwb3J0IGNsYXNzIFVzZXJQcmVzZW5jZUNvbnRyb2xsZXIge1xuICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdVc2VyIHByZXNlbmNlJyk7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChTZXJ2aWNlcy5VU0VSX1BSRVNFTkNFKSBwcml2YXRlIGNsaWVudDogQ2xpZW50UHJveHkpIHt9XG5cbiAgQFBvc3QoKVxuICBjcmVhdGVQcmVzZW5jZShAQm9keSgpIGR0bzogYW55KSB7XG4gICAgcmV0dXJuIHRoaXMuY2xpZW50LnNlbmQoJ2NyZWF0ZS1wcmVzZW5jZScsIGR0byk7XG4gIH1cblxuICBAUGF0Y2goJy86aWQnKVxuICB1cGRhdGVTdGF0dXMoQEdldFVzZXIoKSB1c2VyOiBVc2VyLCBpZDogbnVtYmVyLCBAQm9keSgpIGJvZHk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCd1cGRhdGUtc3RhdHVzJywgeyB1c2VyLCBpZCwgYm9keSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUmVkaXNNb2R1bGUgfSBmcm9tICdAY29tbW9uL3JlZGlzJztcbmltcG9ydCB7IFVzZXJQcmVzZW5jZUNvbnRyb2xsZXIgfSBmcm9tICcuL3VzZXJfcHJlc2VuY2UuY29udHJvbGxlcic7XG5pbXBvcnQgeyBTZXJ2aWNlcyB9IGZyb20gJ0BhcHBzL2NoYXQvdXRpbHMvY29uc3RhbnRzJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICB9KSxcbiAgICBSZWRpc01vZHVsZS5yZWdpc3RlcihTZXJ2aWNlcy5VU0VSX1BSRVNFTkNFKSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtVc2VyUHJlc2VuY2VDb250cm9sbGVyXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlclByZXNlbmNlTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBVcGRhdGVVc2VyUHJvZmlsZUR0byB9IGZyb20gJ0BhcHBzL2NoYXQvdXNlcnMvZHRvcy9VcGRhdGVVc2VyUHJvZmlsZS5kdG8nO1xuaW1wb3J0IHtcbiAgUm91dGVzLFxuICBTZXJ2aWNlcyxcbiAgVXNlclByb2ZpbGVGaWxlRmllbGRzLFxufSBmcm9tICdAYXBwcy9jaGF0L3V0aWxzL2NvbnN0YW50cyc7XG5pbXBvcnQgeyBBdXRoVXNlciB9IGZyb20gJ0BhcHBzL2NoYXQvdXRpbHMvZGVjb3JhdG9ycyc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUZpbGVzIH0gZnJvbSAnQGFwcHMvY2hhdC91dGlscy90eXBlcyc7XG5pbXBvcnQgeyBTd2FnZ2VyQ29udHJvbGxlciB9IGZyb20gJ0Bjb21tb24vYXV0aC9kZWNvcmF0b3InO1xuaW1wb3J0IHtcbiAgQm9keSxcbiAgQ29udHJvbGxlcixcbiAgSW5qZWN0LFxuICBMb2dnZXIsXG4gIFBhdGNoLFxuICBVcGxvYWRlZEZpbGVzLFxuICBVc2VJbnRlcmNlcHRvcnMsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENsaWVudFByb3h5IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IEZpbGVGaWVsZHNJbnRlcmNlcHRvciB9IGZyb20gJ0BuZXN0anMvcGxhdGZvcm0tZXhwcmVzcyc7XG5pbXBvcnQgeyBVc2VyIH0gZnJvbSAnQHNlbnRyeS9ub2RlJztcblxuQFN3YWdnZXJDb250cm9sbGVyKFJvdXRlcy5VU0VSU19QUk9GSUxFUylcbkBDb250cm9sbGVyKFJvdXRlcy5VU0VSU19QUk9GSUxFUylcbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZUNvbnRyb2xsZXIge1xuICBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdVc2VyIHByb2ZpbGUnKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNlcnZpY2VzLlVTRVJTX1BST0ZJTEVTKSBwcml2YXRlIGNsaWVudDogQ2xpZW50UHJveHkpIHt9XG5cbiAgQFBhdGNoKClcbiAgQFVzZUludGVyY2VwdG9ycyhGaWxlRmllbGRzSW50ZXJjZXB0b3IoVXNlclByb2ZpbGVGaWxlRmllbGRzKSlcbiAgYXN5bmMgdXBkYXRlVXNlclByb2ZpbGUoXG4gICAgQEF1dGhVc2VyKCkgdXNlcjogVXNlcixcbiAgICBAVXBsb2FkZWRGaWxlcygpXG4gICAgZmlsZXM6IFVzZXJQcm9maWxlRmlsZXMsXG4gICAgQEJvZHkoKSB1cGRhdGVVc2VyUHJvZmlsZUR0bzogVXBkYXRlVXNlclByb2ZpbGVEdG8sXG4gICkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCd1cGRhdGUtdXNlci1wcm9maWxlJywge1xuICAgICAgdXNlcixcbiAgICAgIGZpbGVzLFxuICAgICAgdXBkYXRlVXNlclByb2ZpbGVEdG8sXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFJlZGlzTW9kdWxlIH0gZnJvbSAnQGNvbW1vbi9yZWRpcyc7XG5pbXBvcnQgeyBVc2VyUHJvZmlsZUNvbnRyb2xsZXIgfSBmcm9tICcuL3VzZXJfcHJvZmlsZS5jb250cm9sbGVyJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnQGFwcHMvY2hhdC91dGlscy9jb25zdGFudHMnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIGlzR2xvYmFsOiB0cnVlLFxuICAgIH0pLFxuICAgIFJlZGlzTW9kdWxlLnJlZ2lzdGVyKFNlcnZpY2VzLlVTRVJTX1BST0ZJTEVTKSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtVc2VyUHJvZmlsZUNvbnRyb2xsZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyUHJvZmlsZU1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUm91dGVzLCBTZXJ2aWNlcyB9IGZyb20gJ0BhcHBzL2NoYXQvdXRpbHMvY29uc3RhbnRzJztcbmltcG9ydCB7IFN3YWdnZXJDb250cm9sbGVyIH0gZnJvbSAnQGNvbW1vbi9hdXRoL2RlY29yYXRvcic7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBHZXQsIEluamVjdCwgTG9nZ2VyLCBRdWVyeSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENsaWVudFByb3h5IH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcblxuQFN3YWdnZXJDb250cm9sbGVyKFJvdXRlcy5VU0VSUylcbkBDb250cm9sbGVyKFJvdXRlcy5VU0VSUylcbmV4cG9ydCBjbGFzcyBVc2VyQ29udHJvbGxlciB7XG4gIGxvZ2dlciA9IG5ldyBMb2dnZXIoJ1VzZXIgcHJlc2VuY2UnKTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KFNlcnZpY2VzLlVTRVJTKSBwcml2YXRlIGNsaWVudDogQ2xpZW50UHJveHkpIHt9XG5cbiAgQEdldCgnc2VhcmNoJylcbiAgc2VhcmNoVXNlcnMoQFF1ZXJ5KCkgcXVlcnk6IGFueSkge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCdzZWFyY2gtdXNlcicsIHF1ZXJ5KTtcbiAgfVxuXG4gIEBHZXQoJ2NoZWNrJylcbiAgYXN5bmMgY2hlY2tVc2VybmFtZShAUXVlcnkoJ3VzZXJuYW1lJykgdXNlcm5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiB0aGlzLmNsaWVudC5zZW5kKCdjaGVjay11c2VyJywgeyB1c2VybmFtZSB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUmVkaXNNb2R1bGUgfSBmcm9tICdAY29tbW9uL3JlZGlzJztcbmltcG9ydCB7IFVzZXJDb250cm9sbGVyIH0gZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJztcbmltcG9ydCB7IFNlcnZpY2VzIH0gZnJvbSAnQGFwcHMvY2hhdC91dGlscy9jb25zdGFudHMnO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIGlzR2xvYmFsOiB0cnVlLFxuICAgIH0pLFxuICAgIFJlZGlzTW9kdWxlLnJlZ2lzdGVyKFNlcnZpY2VzLlVTRVJTKSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtVc2VyQ29udHJvbGxlcl0sXG59KVxuZXhwb3J0IGNsYXNzIFVzZXJNb2R1bGUge31cbiIsImltcG9ydCB7IFNlbnRyeUludGVyY2VwdG9yIH0gZnJvbSAnQGNvbW1vbi9pbnRlcmNlcHRvcnMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IE5lc3RGYWN0b3J5IH0gZnJvbSAnQG5lc3Rqcy9jb3JlJztcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L25vZGUnO1xuaW1wb3J0ICdyZWZsZWN0LW1ldGFkYXRhJztcblxuaW1wb3J0IHsgTG9nZ2VyLCBWYWxpZGF0aW9uUGlwZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE5lc3RFeHByZXNzQXBwbGljYXRpb24gfSBmcm9tICdAbmVzdGpzL3BsYXRmb3JtLWV4cHJlc3MnO1xuaW1wb3J0IHsgRG9jdW1lbnRCdWlsZGVyLCBTd2FnZ2VyTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgQVBJTW9kdWxlIH0gZnJvbSAnLi9zZXJ2ZXIubW9kdWxlJztcblxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGU8TmVzdEV4cHJlc3NBcHBsaWNhdGlvbj4oQVBJTW9kdWxlLCB7fSk7XG4gIGNvbnN0IGNvbmZpZyA9IGFwcC5nZXQoQ29uZmlnU2VydmljZSk7XG4gIGFwcC5zZXRHbG9iYWxQcmVmaXgoJ2FwaScpO1xuXG4gIC8vIEVycm9yIGxvZyB0byBTZW50cnlcbiAgU2VudHJ5LmluaXQoe1xuICAgIGRzbjogY29uZmlnLmdldCgnU0VOVFJZX0RTTicpLFxuICB9KTtcbiAgYXBwLnVzZUdsb2JhbEludGVyY2VwdG9ycyhuZXcgU2VudHJ5SW50ZXJjZXB0b3IoKSk7XG5cbiAgLy8gU3dhZ2dlciBBUEkgZG9jdW1lbnRhdGlvblxuICBjb25zdCBzd2FnZ2VyQ29uZmlnID0gbmV3IERvY3VtZW50QnVpbGRlcigpXG4gICAgLnNldFRpdGxlKCdQb3dlciBodWInKVxuICAgIC5zZXREZXNjcmlwdGlvbignRG9jdW1lbnQgQVBJIGZvciBQb3dlciBodWIgcHJvamVjdCcpXG4gICAgLnNldFZlcnNpb24odmVyc2lvbilcbiAgICAuYnVpbGQoKTtcbiAgY29uc3QgZG9jdW1lbnQgPSBTd2FnZ2VyTW9kdWxlLmNyZWF0ZURvY3VtZW50KGFwcCwgc3dhZ2dlckNvbmZpZyk7XG4gIFN3YWdnZXJNb2R1bGUuc2V0dXAoJ2FwaScsIGFwcCwgZG9jdW1lbnQsIHtcbiAgICBzd2FnZ2VyT3B0aW9uczogeyBkZWZhdWx0TW9kZWxzRXhwYW5kRGVwdGg6IC0xIH0sXG4gIH0pO1xuXG4gIGF3YWl0IGFwcC5saXN0ZW4oY29uZmlnLmdldCgnUE9SVCcpLCAoKSA9PiB7XG4gICAgY29uc3QgbG9nZ2VyID0gbmV3IExvZ2dlcignQVBJIEdhdGV3YXknKTtcbiAgICBsb2dnZXIubG9nKFxuICAgICAgYEFQSSBHYXRld2F5IHN0YXJ0IGF0IHBvcnQ6ICR7Y29uZmlnLmdldChcbiAgICAgICAgJ1BPUlQnXG4gICAgICApfVxcbk1pY3Jvc2VydmljZSBwb3J0OiR7Y29uZmlnLmdldChcbiAgICAgICAgJ1BPUlRfUFVCTElDX1JFRElTJ1xuICAgICAgKX1cXG5NWVNRTDogJHtjb25maWcuZ2V0KCdNWVNRTF9EQVRBQkFTRV9VUkwnKX1cXG5NT05HT0RCOiAke2NvbmZpZy5nZXQoXG4gICAgICAgICdNT05HT0RCX0RBVEFCQVNFX1VSTCdcbiAgICAgICl9YFxuICAgICk7XG4gIH0pO1xufVxuYm9vdHN0cmFwKCk7XG4iLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5AQ29udHJvbGxlcigpXG5leHBvcnQgY2xhc3MgQVBJQ29udHJvbGxlciB7fVxuIiwiaW1wb3J0IHsgUmVzcG9uc2VJbnRlcmNlcHRvciB9IGZyb20gJ0Bjb21tb24vaW50ZXJjZXB0b3JzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IEFQSUNvbnRyb2xsZXIgfSBmcm9tICcuL3NlcnZlci5jb250cm9sbGVyJztcbmltcG9ydCB7IEFQSVNlcnZpY2UgfSBmcm9tICcuL3NlcnZlci5zZXJ2aWNlJztcbmltcG9ydCB7IEFQUF9JTlRFUkNFUFRPUiB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQge1xuICBBY2NlcHRMYW5ndWFnZVJlc29sdmVyLFxuICBIZWFkZXJSZXNvbHZlcixcbiAgSTE4bk1vZHVsZSxcbn0gZnJvbSAnbmVzdGpzLWkxOG4nO1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgeyBDaGF0TW9kdWxlIH0gZnJvbSAnLi9jaGF0L2NoYXQubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICAgIGVudkZpbGVQYXRoOiAnLmVudi5kZXYnLFxuICAgIH0pLFxuICAgIENoYXRNb2R1bGUsXG4gICAgSTE4bk1vZHVsZS5mb3JSb290KHtcbiAgICAgIGZhbGxiYWNrTGFuZ3VhZ2U6ICdlbicsXG4gICAgICBsb2FkZXJPcHRpb25zOiB7XG4gICAgICAgIHBhdGg6IHBhdGguam9pbihfX2Rpcm5hbWUsICcvaTE4bi8nKSxcbiAgICAgICAgd2F0Y2g6IHRydWUsXG4gICAgICB9LFxuICAgICAgcmVzb2x2ZXJzOiBbbmV3IEhlYWRlclJlc29sdmVyKFsnbGFuZyddKSwgQWNjZXB0TGFuZ3VhZ2VSZXNvbHZlcl0sXG4gICAgfSksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbQVBJQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW1xuICAgIEFQSVNlcnZpY2UsXG4gICAge1xuICAgICAgcHJvdmlkZTogJ0RBVEVfS0VZUycsXG4gICAgICB1c2VWYWx1ZToge30sXG4gICAgfSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfSU5URVJDRVBUT1IsXG4gICAgICB1c2VDbGFzczogUmVzcG9uc2VJbnRlcmNlcHRvcixcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBBUElNb2R1bGUge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBBUElTZXJ2aWNlIHt9XG4iLCJpbXBvcnQgeyBKd3RTdHJhdGVneSwgR29vZ2xlU3RyYXRlZ3kgfSBmcm9tICdAY29tbW9uL2F1dGgvc3RyYXRlZ2llcyc7XG5pbXBvcnQgeyBNaWRkbGV3YXJlQ29uc3VtZXIsIE1vZHVsZSwgTmVzdE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCBjb29raWVQYXJzZXIgZnJvbSAnY29va2llLXBhcnNlcic7XG5pbXBvcnQgeyBQcmlzbWFNb2R1bGVBdXRoIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5pbXBvcnQgeyBKd3RSZWZyZXNoU3RyYXRlZ3kgfSBmcm9tICcuL3N0cmF0ZWdpZXMvand0LXJlZnJlc2guc3RyYXRlZ3knO1xuXG5ATW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICAgIENvbmZpZ01vZHVsZS5mb3JSb290KHtcbiAgICAgIGlzR2xvYmFsOiB0cnVlLFxuICAgICAgZW52RmlsZVBhdGg6ICcuL2FwcHMvYXV0aC8uZW52JyxcbiAgICB9KSxcbiAgICBBdXRoTW9kdWxlQ29tbW9uLFxuICAgIFByaXNtYU1vZHVsZUF1dGgsXG4gIF0sXG4gIHByb3ZpZGVyczogW0p3dFN0cmF0ZWd5LCBHb29nbGVTdHJhdGVneSwgSnd0UmVmcmVzaFN0cmF0ZWd5XSxcbn0pXG5leHBvcnQgY2xhc3MgQXV0aE1vZHVsZUNvbW1vbiBpbXBsZW1lbnRzIE5lc3RNb2R1bGUge1xuICBjb25maWd1cmUoY29uc3VtZXI6IE1pZGRsZXdhcmVDb25zdW1lcikge1xuICAgIGNvbnN1bWVyLmFwcGx5KGNvb2tpZVBhcnNlcigpKS5mb3JSb3V0ZXMoJyonKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlUGFyYW1EZWNvcmF0b3IsIEV4ZWN1dGlvbkNvbnRleHQgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbmV4cG9ydCBjb25zdCBHZXRVc2VyID0gY3JlYXRlUGFyYW1EZWNvcmF0b3IoXG4gIChkYXRhOiBzdHJpbmcgfCB1bmRlZmluZWQsIGN0eDogRXhlY3V0aW9uQ29udGV4dCkgPT4ge1xuICAgIGNvbnN0IHJlcXVlc3Q6IEV4cHJlc3MuUmVxdWVzdCA9IGN0eC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXF1ZXN0KCk7XG4gICAgaWYgKGRhdGEpIHtcbiAgICAgIHJldHVybiByZXF1ZXN0LnVzZXJbZGF0YV07XG4gICAgfVxuICAgIHJldHVybiByZXF1ZXN0LnVzZXI7XG4gIH0sXG4pO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9nZXRfdXNlci5kZWNvcmF0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zd2FnZ2VyLWNvbnRyb2xsZXIuZGVjb3JhdG9yJztcbiIsImltcG9ydCB7IGFwcGx5RGVjb3JhdG9ycyB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7XG4gIEFwaUJhZFJlcXVlc3RSZXNwb25zZSxcbiAgQXBpQmVhcmVyQXV0aCxcbiAgQXBpSW50ZXJuYWxTZXJ2ZXJFcnJvclJlc3BvbnNlLFxuICBBcGlUYWdzLFxuICBBcGlVbmF1dGhvcml6ZWRSZXNwb25zZSxcbn0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcblxuZXhwb3J0IGZ1bmN0aW9uIFN3YWdnZXJDb250cm9sbGVyKHN3YWdnZXJUYWdOYW1lOiBzdHJpbmcsIGlzUHVibGljPzogYm9vbGVhbikge1xuICBpZiAoaXNQdWJsaWMpIHtcbiAgICByZXR1cm4gYXBwbHlEZWNvcmF0b3JzKFxuICAgICAgQXBpVGFncyhzd2FnZ2VyVGFnTmFtZSksXG4gICAgICBBcGlCYWRSZXF1ZXN0UmVzcG9uc2UoeyBkZXNjcmlwdGlvbjogJ0JhZCByZXF1ZXN0JyB9KSxcbiAgICAgIEFwaUludGVybmFsU2VydmVyRXJyb3JSZXNwb25zZSh7IGRlc2NyaXB0aW9uOiAnSW50ZXJuYWwgc2VydmVyIGVycm9yJyB9KSxcbiAgICApO1xuICB9XG4gIHJldHVybiBhcHBseURlY29yYXRvcnMoXG4gICAgQXBpVGFncyhzd2FnZ2VyVGFnTmFtZSksXG4gICAgQXBpQmVhcmVyQXV0aCgpLFxuICAgIEFwaVVuYXV0aG9yaXplZFJlc3BvbnNlKHsgZGVzY3JpcHRpb246ICdVbmF1dGhvcml6ZWQgYWNjZXNzJyB9KSxcbiAgICBBcGlCYWRSZXF1ZXN0UmVzcG9uc2UoeyBkZXNjcmlwdGlvbjogJ0JhZCByZXF1ZXN0JyB9KSxcbiAgICBBcGlJbnRlcm5hbFNlcnZlckVycm9yUmVzcG9uc2UoeyBkZXNjcmlwdGlvbjogJ0ludGVybmFsIHNlcnZlciBlcnJvcicgfSksXG4gICk7XG59XG4iLCJpbXBvcnQgeyBBdXRoR3VhcmQgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcbmV4cG9ydCBjbGFzcyBHb29nbGVHdWFyZCBleHRlbmRzIEF1dGhHdWFyZCgnZ29vZ2xlJykge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2p3dC5ndWFyZCc7XG5leHBvcnQgKiBmcm9tICcuL2xvY2FsLmd1YXJkJztcbmV4cG9ydCAqIGZyb20gJy4vZ29vZ2xlLmd1YXJkJztcbiIsImltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuZXhwb3J0IGNsYXNzIEp3dEd1YXJkIGV4dGVuZHMgQXV0aEd1YXJkKCdqd3QnKSB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF1dGhHdWFyZCB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuXG5leHBvcnQgY2xhc3MgTG9jYWxBdXRoR3VhcmQgZXh0ZW5kcyBBdXRoR3VhcmQoJ2xvY2FsJykge31cbiIsImV4cG9ydCAqIGZyb20gJy4vYXV0aC5tb2R1bGUnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9wcmlzbWEubW9kdWxlJztcbmV4cG9ydCAqIGZyb20gJy4vcHJpc21hLnNlcnZpY2UnO1xuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZUF1dGggfSBmcm9tICcuL3ByaXNtYS5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW1ByaXNtYVNlcnZpY2VBdXRoXSxcbiAgZXhwb3J0czogW1ByaXNtYVNlcnZpY2VBdXRoXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpc21hTW9kdWxlQXV0aCB7fVxuIiwiaW1wb3J0IHsgTXlTUUxDbGllbnQgfSBmcm9tICdAY29tbW9uL3ByaXNtYS9teXNxbF9wcmlzbWFfY2xpZW50JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmlzbWFTZXJ2aWNlQXV0aCBleHRlbmRzIE15U1FMQ2xpZW50IHtcbiAgY2xlYW5EYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kdHJhbnNhY3Rpb24oW1xuICAgICAgLy8gdGhpcy5ib29rbWFyay5kZWxldGVNYW55KCksXG4gICAgICB0aGlzLnVzZXIuZGVsZXRlTWFueSgpLFxuICAgIF0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XG5pbXBvcnQgeyBTdHJhdGVneSwgVmVyaWZ5Q2FsbGJhY2sgfSBmcm9tICdwYXNzcG9ydC1nb29nbGUtb2F1dGgyMCc7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHb29nbGVTdHJhdGVneSBleHRlbmRzIFBhc3Nwb3J0U3RyYXRlZ3koU3RyYXRlZ3kpIHtcblxuICAgIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICAgICAgICBzdXBlcih7XG4gICAgICAgICAgICBjbGllbnRJRDogY29uZmlnLmdldE9yVGhyb3coJ0dPT0dMRV9DTElFTlRfSUQnKSxcbiAgICAgICAgICAgIGNsaWVudFNlY3JldDogY29uZmlnLmdldE9yVGhyb3coJ0dPT0dMRV9TRUNSRVQnKSxcbiAgICAgICAgICAgIGNhbGxiYWNrVVJMOiAnaHR0cDovL2xvY2FsaG9zdDo1MDAwMC9hdXRoL2dvb2dsZS9yZWRpcmVjdCcsXG4gICAgICAgICAgICAvLyBjYWxsYmFja1VSTDogYCR7Y29uZmlnLmdldE9yVGhyb3coJ0hPU1QnKX06JHtjb25maWcuZ2V0T3JUaHJvdygnUE9SVCcpfS9hdXRoL2dvb2dsZS9yZWRpcmVjdGBcbiAgICAgICAgICAgIHNjb3BlOiBbJ2VtYWlsJywgJ3Byb2ZpbGUnXSxcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgYXN5bmMgdmFsaWRhdGUoYWNjZXNzVG9rZW46IHN0cmluZywgcmVmcmVzaFRva2VuOiBzdHJpbmcsIHByb2ZpbGU6IGFueSwgZG9uZTogVmVyaWZ5Q2FsbGJhY2spOiBQcm9taXNlPGFueT4ge1xuICAgICAgICBjb25zdCB7IG5hbWUsIGVtYWlscywgcGhvdG9zIH0gPSBwcm9maWxlXG4gICAgICAgIGNvbnN0IHVzZXIgPSB7XG4gICAgICAgICAgICBlbWFpbDogZW1haWxzWzBdLnZhbHVlLFxuICAgICAgICAgICAgZmlyc3ROYW1lOiBuYW1lLmdpdmVuTmFtZSxcbiAgICAgICAgICAgIGxhc3ROYW1lOiBuYW1lLmZhbWlseU5hbWUsXG4gICAgICAgICAgICBwaWN0dXJlOiBwaG90b3NbMF0udmFsdWUsXG4gICAgICAgIH1cbiAgICAgICAgZG9uZShudWxsLCB1c2VyKTtcbiAgICB9XG59IiwiZXhwb3J0ICogZnJvbSAnLi9qd3Quc3RyYXRlZ3knO1xuZXhwb3J0ICogZnJvbSAnLi9sb2NhbC5zdHJhdGVneSc7XG5leHBvcnQgKiBmcm9tICcuL2dvb2dsZS5zdHJhdGVneSc7XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xyXG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xyXG5pbXBvcnQgeyBQYXNzcG9ydFN0cmF0ZWd5IH0gZnJvbSAnQG5lc3Rqcy9wYXNzcG9ydCc7XHJcbmltcG9ydCB7IFJlcXVlc3QgfSBmcm9tICdleHByZXNzJztcclxuaW1wb3J0IHsgRXh0cmFjdEp3dCwgU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1qd3QnO1xyXG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlQXV0aCB9IGZyb20gJy4uL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XHJcblxyXG5ASW5qZWN0YWJsZSgpXHJcbmV4cG9ydCBjbGFzcyBKd3RSZWZyZXNoU3RyYXRlZ3kgZXh0ZW5kcyBQYXNzcG9ydFN0cmF0ZWd5KFxyXG4gIFN0cmF0ZWd5LFxyXG4gICdqd3QtcmVmcmVzaCcsXHJcbikge1xyXG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlnU2VydmljZSwgcHJpdmF0ZSBwcmlzbWE6IFByaXNtYVNlcnZpY2VBdXRoKSB7XHJcbiAgICBzdXBlcih7XHJcbiAgICAgIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxyXG4gICAgICBpZ25vcmVFeHBpcmF0aW9uOiB0cnVlLFxyXG4gICAgICBzZWNyZXRPcktleTogY29uZmlnLmdldE9yVGhyb3coJ0pXVF9SRUZSRVNIX1RPS0VOX1NFQ1JFVCcpLFxyXG4gICAgICBwYXNzUmVxVG9DYWxsYmFjazogdHJ1ZSxcclxuICAgIH0pO1xyXG4gIH1cclxuICBhc3luYyB2YWxpZGF0ZShyZXE6IFJlcXVlc3QsIHBheWxvYWQ6IHsgaWQ6IG51bWJlcjsgZW1haWw6IHN0cmluZyB9KSB7XHJcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kVW5pcXVlKHtcclxuICAgICAgd2hlcmU6IHtcclxuICAgICAgICBpZDogcGF5bG9hZC5pZCxcclxuICAgICAgfSxcclxuICAgICAgc2VsZWN0OiB7XHJcbiAgICAgICAgaWQ6IHRydWUsXHJcbiAgICAgICAgZW1haWw6IHRydWUsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuXHJcbiAgICBpZiAoIXVzZXIpIHJldHVybiB1c2VyO1xyXG5cclxuICAgIGNvbnN0IHJlZnJlc2hUb2tlbiA9IHJlcS5nZXQoJ2F1dGhvcml6YXRpb24nKS5yZXBsYWNlKCdCZWFyZXInLCAnJykudHJpbSgpO1xyXG4gICAgY29uc29sZS5sb2cocmVmcmVzaFRva2VuKTtcclxuICAgIHJldHVybiB7IC4uLnVzZXIsIHJlZnJlc2hUb2tlbiB9O1xyXG4gIH1cclxufVxyXG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFBhc3Nwb3J0U3RyYXRlZ3kgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcbmltcG9ydCB7IEV4dHJhY3RKd3QsIFN0cmF0ZWd5IH0gZnJvbSAncGFzc3BvcnQtand0JztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VBdXRoIH0gZnJvbSAnLi4vcHJpc21hL3ByaXNtYS5zZXJ2aWNlJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEp3dFN0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSwgJ2p3dCcpIHtcbiAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWdTZXJ2aWNlLCBwcml2YXRlIHByaXNtYTogUHJpc21hU2VydmljZUF1dGgpIHtcbiAgICBzdXBlcih7XG4gICAgICBqd3RGcm9tUmVxdWVzdDogRXh0cmFjdEp3dC5mcm9tQXV0aEhlYWRlckFzQmVhcmVyVG9rZW4oKSxcbiAgICAgIGlnbm9yZUV4cGlyYXRpb246IGZhbHNlLFxuICAgICAgc2VjcmV0T3JLZXk6IGNvbmZpZy5nZXRPclRocm93KCdKV1RfU0VDUkVUJyksXG4gICAgfSk7XG4gIH1cblxuICAvLyBIw6BtIGLhuq90IGJ14buZYyBwaOG6o2kgY8OzIMSR4buDIG5o4bqtbiBnacOhIHRy4buLIGp3dFxuICAvLyBD4bqnbiB0cnkgY2F0Y2ggdHJvbmcgdHLGsOG7nW5nIGjhu6NwIHRydW5jYXRlIGRhdGFiYXNlXG4gIGFzeW5jIHZhbGlkYXRlKHBheWxvYWQ6IHsgaWQ6IG51bWJlcjsgZW1haWw6IHN0cmluZyB9KSB7XG4gICAgY29uc3QgdXNlciA9IGF3YWl0IHRoaXMucHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogcGF5bG9hZC5pZCxcbiAgICAgIH0sXG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHVzZXI7XG4gIH1cbn1cbiIsImltcG9ydCB7IEF1dGhTZXJ2aWNlIH0gZnJvbSAnQGFwcHMvY2hhdC9hdXRoL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1sb2NhbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgIHN1cGVyKHsgdXNlcm5hbWVGaWVsZDogJ3VzZXJuYW1lJyB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7XG4gIENhdGNoLFxuICBIdHRwRXhjZXB0aW9uLFxuICBBcmd1bWVudHNIb3N0LFxuICBFeGNlcHRpb25GaWx0ZXIsXG4gIEh0dHBTdGF0dXMsXG4gIENhbGxIYW5kbGVyLFxuICBFeGVjdXRpb25Db250ZXh0LFxuICBJbmplY3RhYmxlLFxuICBOZXN0SW50ZXJjZXB0b3IsXG59IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IHZlcnNpb24gfSBmcm9tICcuLi8uLi8uLi9wYWNrYWdlLmpzb24nO1xuaW1wb3J0IHsgUnBjRXhjZXB0aW9uIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRhcCB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgZ2V0STE4bkNvbnRleHRGcm9tUmVxdWVzdCB9IGZyb20gJ25lc3Rqcy1pMThuJztcblxuZXhwb3J0IGNsYXNzIEN1c3RvbVJlc3BvbnNlIHtcbiAgdmVyc2lvbjogc3RyaW5nO1xuICBjb2RlOiBudW1iZXI7XG4gIHN1Y2Nlc3M6IGJvb2xlYW47XG4gIG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdO1xuICBkYXRhOiBhbnk7XG4gIHRvdGFsUm93OiBudW1iZXI7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgY29kZTogbnVtYmVyLFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIGRhdGE6IGFueSxcbiAgICB0b3RhbFJvdzogbnVtYmVyLFxuICAgIHN1Y2Nlc3MgPSBmYWxzZSxcbiAgKSB7XG4gICAgdGhpcy52ZXJzaW9uID0gdmVyc2lvbjtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMubWVzc2FnZSA9IG1lc3NhZ2U7XG4gICAgaWYgKHRvdGFsUm93ID4gMCkgdGhpcy50b3RhbFJvdyA9IHRvdGFsUm93O1xuICAgIHRoaXMuZGF0YSA9IGRhdGE7XG4gICAgdGhpcy5zdWNjZXNzID0gc3VjY2VzcztcbiAgfVxufVxuZXhwb3J0IGNsYXNzIEhUVFAge1xuICByZXNwb25zZTogQ3VzdG9tUmVzcG9uc2U7XG5cbiAgc2V0SHR0cFJlcXVlc3QoXG4gICAgY29kZTogbnVtYmVyLFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIGRhdGE6IGFueSA9IG51bGwsXG4gICAgdG90YWxSb3cgPSAwLFxuICAgIHN1Y2Nlc3MgPSB0cnVlLFxuICApIHtcbiAgICBpZiAoY29kZSAhPSBIdHRwU3RhdHVzLk9LKSBzdWNjZXNzID0gZmFsc2U7XG4gICAgdGhpcy5yZXNwb25zZSA9IG5ldyBDdXN0b21SZXNwb25zZShjb2RlLCBtZXNzYWdlLCBkYXRhLCB0b3RhbFJvdywgc3VjY2Vzcyk7XG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2U7XG4gIH1cblxuICBzdWNjZXNzKFxuICAgIGRhdGEgPSBudWxsLFxuICAgIGNvZGUgPSBIdHRwU3RhdHVzLk9LLFxuICAgIG1lc3NhZ2UgPSAnxJDEg25nIG5o4bqtcCB0aMOgbmggY8O0bmcnLFxuICAgIHN1Y2Nlc3MgPSB0cnVlLFxuICAgIHRvdGFsUm93ID0gMCxcbiAgKSB7XG4gICAgdGhpcy5yZXNwb25zZSA9IG5ldyBDdXN0b21SZXNwb25zZShjb2RlLCBtZXNzYWdlLCBkYXRhLCB0b3RhbFJvdywgc3VjY2Vzcyk7XG4gICAgcmV0dXJuIHRoaXMucmVzcG9uc2U7XG4gIH1cblxuICBub3RGb3VuZCgpIHtcbiAgICB0aGlzLnJlc3BvbnNlID0gbmV3IEN1c3RvbVJlc3BvbnNlKFxuICAgICAgSHR0cFN0YXR1cy5OT1RfRk9VTkQsXG4gICAgICAnTm90IGZvdW5kJyxcbiAgICAgIG51bGwsXG4gICAgICAwLFxuICAgICAgZmFsc2UsXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcy5yZXNwb25zZTtcbiAgfVxuXG4gIGVycm9yKFxuICAgIG1lc3NhZ2U6IHN0cmluZyB8IHN0cmluZ1tdLFxuICAgIGNvZGU6IG51bWJlciA9IEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgZXJyb3I6IHN0cmluZyA9ICcnLFxuICApIHtcbiAgICBjb25zdCByZXNwb25zZSA9IG5ldyBDdXN0b21SZXNwb25zZShjb2RlLCBtZXNzYWdlLCBudWxsLCAwLCBmYWxzZSk7XG4gICAgdGhyb3cgbmV3IFJwY0V4Y2VwdGlvbihyZXNwb25zZSk7XG4gIH1cbn1cblxuQENhdGNoKEh0dHBFeGNlcHRpb24pXG5leHBvcnQgY2xhc3MgSHR0cEV4Y2VwdGlvbkZpbHRlciBleHRlbmRzIEhUVFAgaW1wbGVtZW50cyBFeGNlcHRpb25GaWx0ZXIge1xuICBjYXRjaChleGNlcHRpb246IEh0dHBFeGNlcHRpb24sIGhvc3Q6IEFyZ3VtZW50c0hvc3QpIHtcbiAgICBjb25zdCBjdHggPSBob3N0LnN3aXRjaFRvSHR0cCgpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY3R4LmdldFJlc3BvbnNlPFJlc3BvbnNlPigpO1xuICAgIC8vIGNvbnN0IHJlcXVlc3QgPSBjdHguZ2V0UmVxdWVzdDxSZXF1ZXN0PigpO1xuICAgIGNvbnN0IHN0YXR1cyA9IGV4Y2VwdGlvbi5nZXRTdGF0dXMoKTtcblxuICAgIHJlc3BvbnNlLnN0YXR1cyhzdGF0dXMpLmpzb24oXG4gICAgICB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGV4Y2VwdGlvbi5tZXNzYWdlLFxuICAgICAgICB7XG4gICAgICAgICAgZXJyb3I6IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZXhjZXB0aW9uLmdldFJlc3BvbnNlKCkpKS5tZXNzYWdlWzBdLFxuICAgICAgICB9LFxuICAgICAgICAwLFxuICAgICAgICBmYWxzZSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxufVxuXG5AQ2F0Y2goSHR0cEV4Y2VwdGlvbilcbmV4cG9ydCBjbGFzcyBScGNWYWxpZGF0aW9uRmlsdGVyIGV4dGVuZHMgSFRUUCBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlciB7XG4gIGNhdGNoKGV4Y2VwdGlvbjogSHR0cEV4Y2VwdGlvbiwgaG9zdDogQXJndW1lbnRzSG9zdCkge1xuICAgIGNvbnN0IHN0YXR1cyA9IGV4Y2VwdGlvbi5nZXRTdGF0dXMoKTtcbiAgICBjb25zdCBkYXRhID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleGNlcHRpb24uZ2V0UmVzcG9uc2UoKSkpLm1lc3NhZ2VbMF07XG4gICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3Qoc3RhdHVzLCBkYXRhLCBudWxsLCAwLCBmYWxzZSk7XG4gIH1cbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEVycm9yc0ludGVyY2VwdG9yIGV4dGVuZHMgSFRUUCBpbXBsZW1lbnRzIE5lc3RJbnRlcmNlcHRvciB7XG4gIGdldEtleU1lc3NhZ2UobWVzc2FnZSkge1xuICAgIGxldCBrZXkgPSAnJztcbiAgICBzd2l0Y2ggKG1lc3NhZ2UpIHtcbiAgICAgIGNhc2UgJ0ZpbGUgdG9vIGxhcmdlJzpcbiAgICAgICAga2V5ID0gJ3N5c3RlbXMuRklMRV9VUExPQUQuRklMRV9UT09fTEFSR0UnO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ1RvbyBtYW55IGZpbGVzJzpcbiAgICAgICAga2V5ID0gJ3N5c3RlbXMuRklMRV9VUExPQUQuVE9PX01BTllfRklMRVMnO1xuICAgICAgICBicmVhaztcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGtleSA9IG1lc3NhZ2U7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICByZXR1cm4ga2V5O1xuICB9XG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdDxSZXF1ZXN0PigpO1xuICAgIGNvbnN0IGkxOG4gPSBnZXRJMThuQ29udGV4dEZyb21SZXF1ZXN0KHJlcXVlc3QpO1xuICAgIHJldHVybiBuZXh0LmhhbmRsZSgpLnBpcGUoXG4gICAgICB0YXAoe1xuICAgICAgICBlcnJvcjogZXJyID0+IHtcbiAgICAgICAgICBlcnIubWVzc2FnZSA9IHRoaXMuZ2V0S2V5TWVzc2FnZShlcnIubWVzc2FnZSk7XG4gICAgICAgICAgdGhyb3cgdGhpcy5zZXRIdHRwUmVxdWVzdChlcnIuc3RhdHVzLCBpMThuLnQoZXJyLm1lc3NhZ2UpLCBudWxsLCAwLCBmYWxzZSk7XG4gICAgICAgIH0sXG4gICAgICB9KSxcbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2h0dHAubW9kdWxlJztcbiIsImltcG9ydCB7XG4gIENhY2hlSW50ZXJjZXB0b3IsXG4gIENBQ0hFX0tFWV9NRVRBREFUQSxcbiAgRXhlY3V0aW9uQ29udGV4dCxcbiAgSW5qZWN0YWJsZSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSHR0cENhY2hlSW50ZXJjZXB0b3IgZXh0ZW5kcyBDYWNoZUludGVyY2VwdG9yIHtcbiAgdHJhY2tCeShjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0KTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCByZXF1ZXN0ID0gY29udGV4dC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXF1ZXN0KCk7XG4gICAgLy8gaWYgdGhlcmUgaXMgbm8gcmVxdWVzdCwgdGhlIGluY29taW5nIHJlcXVlc3QgaXMgZ3JhcGhxbCwgdGhlcmVmb3JlIGJ5cGFzcyByZXNwb25zZSBjYWNoaW5nLlxuICAgIC8vIGxhdGVyIHdlIGNhbiBnZXQgdGhlIHR5cGUgb2YgcmVxdWVzdCAocXVlcnkvbXV0YXRpb24pIGFuZCBpZiBxdWVyeSBnZXQgaXRzIGZpZWxkIG5hbWUsIGFuZCBhdHRyaWJ1dGVzIGFuZCBjYWNoZSBhY2NvcmRpbmdseS4gT3RoZXJ3aXNlLCBjbGVhciB0aGUgY2FjaGUgaW4gY2FzZSBvZiB0aGUgcmVxdWVzdCB0eXBlIGlzIG11dGF0aW9uLlxuICAgIGlmICghcmVxdWVzdCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCB7IGh0dHBBZGFwdGVyIH0gPSB0aGlzLmh0dHBBZGFwdGVySG9zdDtcbiAgICBjb25zdCBpc0h0dHBBcHAgPSBodHRwQWRhcHRlciAmJiAhIWh0dHBBZGFwdGVyLmdldFJlcXVlc3RNZXRob2Q7XG4gICAgY29uc3QgY2FjaGVNZXRhZGF0YSA9IHRoaXMucmVmbGVjdG9yLmdldChcbiAgICAgIENBQ0hFX0tFWV9NRVRBREFUQSxcbiAgICAgIGNvbnRleHQuZ2V0SGFuZGxlcigpLFxuICAgICk7XG5cbiAgICBpZiAoIWlzSHR0cEFwcCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG5cbiAgICBjb25zdCBpc0dldFJlcXVlc3QgPSBodHRwQWRhcHRlci5nZXRSZXF1ZXN0TWV0aG9kKHJlcXVlc3QpID09PSAnR0VUJztcbiAgICBjb25zdCBleGNsdWRlUGF0aHMgPSBbXG4gICAgICAvLyBSb3V0ZXMgdG8gYmUgZXhjbHVkZWRcbiAgICBdO1xuXG4gICAgaWYgKFxuICAgICAgaXNHZXRSZXF1ZXN0ICYmXG4gICAgICBleGNsdWRlUGF0aHMuaW5jbHVkZXMoaHR0cEFkYXB0ZXIuZ2V0UmVxdWVzdFVybChyZXF1ZXN0KSlcbiAgICApIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy8gdG8gY2hlY2sgaWYgd2UgcmVhbGx5IG5lZWQgdG8gaGFuZGxlIGNhY2hlIGtleSBtYW51YWxseSBzcGVjaWZpZXMgYnkgdXNlcnMgaW4gcm91dGVzL2hhbmRsZXJzXG4gICAgaWYgKGlzR2V0UmVxdWVzdCAmJiBjYWNoZU1ldGFkYXRhKSB7XG4gICAgICByZXR1cm4gYCR7Y2FjaGVNZXRhZGF0YX0tJHtyZXF1ZXN0Ll9wYXJzZWRVcmwucXVlcnl9YDtcbiAgICB9XG5cbiAgICAvLyBpbnZhbGlkYXRlIGNhY2hlIGtleXMgc3RhcnRlZCB3aXRoIHRoZSBjdXJyZW50VXJsUGF0aFxuICAgIGNvbnN0IGN1cnJlbnRVcmxQYXRoID0gaHR0cEFkYXB0ZXIuZ2V0UmVxdWVzdFVybChyZXF1ZXN0KS5zcGxpdCgnPycpWzBdO1xuICAgIGlmICghaXNHZXRSZXF1ZXN0KSB7XG4gICAgICBzZXRUaW1lb3V0KGFzeW5jICgpID0+IHtcbiAgICAgICAgY29uc3Qga2V5czogc3RyaW5nW10gPSBhd2FpdCB0aGlzLmNhY2hlTWFuYWdlci5zdG9yZS5rZXlzKCk7XG4gICAgICAgIGtleXMuZm9yRWFjaChrZXkgPT4ge1xuICAgICAgICAgIGlmIChcbiAgICAgICAgICAgIGtleS5zdGFydHNXaXRoKGN1cnJlbnRVcmxQYXRoKSB8fFxuICAgICAgICAgICAgY3VycmVudFVybFBhdGguc3RhcnRzV2l0aChrZXkuc3BsaXQoJz8nKVswXSlcbiAgICAgICAgICApIHtcbiAgICAgICAgICAgIHRoaXMuY2FjaGVNYW5hZ2VyLmRlbChrZXkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCAwKTtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIGh0dHBBZGFwdGVyLmdldFJlcXVlc3RVcmwocmVxdWVzdCk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vc2VudHJ5LmludGVyY2VwdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vaHR0cENhY2hlLmludGVyY2VwdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vcmVzcG9uc2UuaW50ZXJjZXB0b3InO1xuIiwiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgTmVzdEludGVyY2VwdG9yLFxuICBFeGVjdXRpb25Db250ZXh0LFxuICBDYWxsSGFuZGxlcixcbiAgSHR0cEV4Y2VwdGlvbixcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUmVxdWVzdCwgUmVzcG9uc2UgfSBmcm9tICdleHByZXNzJztcbmltcG9ydCB7IE9ic2VydmFibGUsIHRocm93RXJyb3IgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IGNhdGNoRXJyb3IsIHRhcCB9IGZyb20gJ3J4anMvb3BlcmF0b3JzJztcbmltcG9ydCB7IEN1c3RvbVJlc3BvbnNlIH0gZnJvbSAnLi4vaHR0cCc7XG5pbXBvcnQgeyBnZXRJMThuQ29udGV4dEZyb21SZXF1ZXN0IH0gZnJvbSAnbmVzdGpzLWkxOG4nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUmVzcG9uc2VJbnRlcmNlcHRvciBpbXBsZW1lbnRzIE5lc3RJbnRlcmNlcHRvciB7XG4gIGludGVyY2VwdChjb250ZXh0OiBFeGVjdXRpb25Db250ZXh0LCBuZXh0OiBDYWxsSGFuZGxlcik6IE9ic2VydmFibGU8YW55PiB7XG4gICAgY29uc3QgcmVxdWVzdCA9IGNvbnRleHQuc3dpdGNoVG9IdHRwKCkuZ2V0UmVxdWVzdDxSZXF1ZXN0PigpO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gY29udGV4dC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXNwb25zZTxSZXNwb25zZT4oKTtcblxuICAgIGNvbnN0IGkxOG4gPSBnZXRJMThuQ29udGV4dEZyb21SZXF1ZXN0KHJlcXVlc3QpO1xuXG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKCkucGlwZShcbiAgICAgIHRhcCgocmVzOiBDdXN0b21SZXNwb25zZSkgPT4ge1xuICAgICAgICBpZiAoIUFycmF5LmlzQXJyYXkocmVzLm1lc3NhZ2UpKSB7XG4gICAgICAgICAgcmVzLm1lc3NhZ2UgPSBpMThuLnQocmVzLm1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIHJlc3BvbnNlLnN0YXR1c0NvZGUgPSByZXMuY29kZTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgIH0pLFxuICAgICAgY2F0Y2hFcnJvcigoZXJyOiBDdXN0b21SZXNwb25zZSkgPT5cbiAgICAgICAgdGhyb3dFcnJvcigoKSA9PiB7XG4gICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZXJyLm1lc3NhZ2UpICYmIGVyci5tZXNzYWdlLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBlcnJvck1lc3NhZ2VzID0gZXJyLm1lc3NhZ2Uuam9pbignLCAnKTtcbiAgICAgICAgICAgIGNvbnN0IGxlbmd0aCA9IDI1NTtcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZXMgPVxuICAgICAgICAgICAgICBlcnJvck1lc3NhZ2VzLmxlbmd0aCA+IGxlbmd0aFxuICAgICAgICAgICAgICAgID8gZXJyb3JNZXNzYWdlcy5zdWJzdHJpbmcoMCwgbGVuZ3RoIC0gMykgKyAnLi4uJ1xuICAgICAgICAgICAgICAgIDogZXJyb3JNZXNzYWdlcztcbiAgICAgICAgICAgIHJlc3BvbnNlLnNldEhlYWRlcignZXJyb3JNZXNzYWdlcycsIGVycm9yTWVzc2FnZXMpO1xuICAgICAgICAgICAgZXJyLm1lc3NhZ2UgPSAnVmFsaWRhdGlvbiBFcnJvci4nO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gbmV3IEh0dHBFeGNlcHRpb24oZXJyLCBlcnI/LmNvZGUpO1xuICAgICAgICB9KSxcbiAgICAgICksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ2FsbEhhbmRsZXIsIEV4ZWN1dGlvbkNvbnRleHQsIE5lc3RJbnRlcmNlcHRvciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCAqIGFzIFNlbnRyeSBmcm9tICdAc2VudHJ5L25vZGUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuaW1wb3J0IHsgdGFwIH0gZnJvbSAncnhqcy9vcGVyYXRvcnMnO1xuXG5leHBvcnQgY2xhc3MgU2VudHJ5SW50ZXJjZXB0b3IgaW1wbGVtZW50cyBOZXN0SW50ZXJjZXB0b3Ige1xuICBpbnRlcmNlcHQoY29udGV4dDogRXhlY3V0aW9uQ29udGV4dCwgbmV4dDogQ2FsbEhhbmRsZXIpOiBPYnNlcnZhYmxlPGFueT4ge1xuICAgIHJldHVybiBuZXh0LmhhbmRsZSgpLnBpcGUoXG4gICAgICB0YXAoe1xuICAgICAgICBlcnJvcjogZXhjZXB0aW9uID0+IHtcbiAgICAgICAgICBTZW50cnkuY2FwdHVyZUV4Y2VwdGlvbihleGNlcHRpb24pO1xuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9teXNxbCc7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgTXlTUUxDbGllbnQgZXh0ZW5kcyBQcmlzbWFDbGllbnQge1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IENvbmZpZ1NlcnZpY2UpIHtcbiAgICBzdXBlcih7XG4gICAgICBkYXRhc291cmNlczoge1xuICAgICAgICBkYjoge1xuICAgICAgICAgIHVybDogY29uZmlnLmdldE9yVGhyb3coJ01ZU1FMX0RBVEFCQVNFX1VSTCcpLFxuICAgICAgICB9LFxuICAgICAgfSxcbiAgICB9KTtcbiAgfVxuXG4gIGNsZWFuRGF0YWJhc2UoY2FsbGJhY2s6IGFueSkge1xuICAgIHJldHVybiBjYWxsYmFjaztcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9yZWRpcy5tb2R1bGUnO1xuIiwiaW1wb3J0IHsgRHluYW1pY01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQge1xuICBDbGllbnRQcm92aWRlcixcbiAgQ2xpZW50c01vZHVsZSxcbiAgVHJhbnNwb3J0LFxufSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuXG5leHBvcnQgY2xhc3MgUmVkaXNNb2R1bGUge1xuICBzdGF0aWMgZ2V0UmVkaXNPcHRpb24ob3B0aW9uOiBvYmplY3QpOiBDbGllbnRQcm92aWRlciB7XG4gICAgY29uc3QgY29uZmlnID0gbmV3IENvbmZpZ1NlcnZpY2UoKTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5vcHRpb24sXG4gICAgICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5SRURJUyxcbiAgICAgIG9wdGlvbnM6IHtcbiAgICAgICAgaG9zdDogY29uZmlnLmdldE9yVGhyb3coJ0hPU1RfUkVESVNfU0VSVkVSJyksXG4gICAgICAgIHBvcnQ6IGNvbmZpZy5nZXRPclRocm93KCdQT1JUX1BVQkxJQ19SRURJUycpLFxuICAgICAgICBwYXNzd29yZDogY29uZmlnLmdldE9yVGhyb3coJ1BBU1NXT1JEX1JFRElTJyksXG4gICAgICB9LFxuICAgIH07XG4gIH1cblxuICBzdGF0aWMgcmVnaXN0ZXIobmFtZTogc3RyaW5nKTogRHluYW1pY01vZHVsZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIG1vZHVsZTogUmVkaXNNb2R1bGUsXG4gICAgICBpbXBvcnRzOiBbXG4gICAgICAgIENsaWVudHNNb2R1bGUucmVnaXN0ZXJBc3luYyhbXG4gICAgICAgICAge1xuICAgICAgICAgICAgbmFtZTogbmFtZSxcbiAgICAgICAgICAgIHVzZUZhY3Rvcnk6IChjb25maWdTZXJ2aWNlOiBDb25maWdTZXJ2aWNlKSA9PiAoe1xuICAgICAgICAgICAgICB0cmFuc3BvcnQ6IFRyYW5zcG9ydC5SRURJUyxcbiAgICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIGhvc3Q6IGNvbmZpZ1NlcnZpY2UuZ2V0T3JUaHJvdygnSE9TVF9SRURJU19TRVJWRVInKSxcbiAgICAgICAgICAgICAgICBwb3J0OiBjb25maWdTZXJ2aWNlLmdldE9yVGhyb3coJ1BPUlRfUFVCTElDX1JFRElTJyksXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQ6IGNvbmZpZ1NlcnZpY2UuZ2V0T3JUaHJvdygnUEFTU1dPUkRfUkVESVMnKSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgaW5qZWN0OiBbQ29uZmlnU2VydmljZV0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSksXG4gICAgICBdLFxuICAgICAgZXhwb3J0czogW0NsaWVudHNNb2R1bGVdLFxuICAgIH07XG4gIH1cbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2p3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9wYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3BsYXRmb3JtLWV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9zd2FnZ2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvdGhyb3R0bGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBwcmlzbWEvbXlzcWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHNlbnRyeS9ub2RlXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzLXRyYW5zZm9ybWVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzLXZhbGlkYXRvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjb29raWUtcGFyc2VyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImV4cHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmVzdGpzLWkxOG5cIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtZ29vZ2xlLW9hdXRoMjBcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicGFzc3BvcnQtand0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWxvY2FsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlZmxlY3QtbWV0YWRhdGFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicnhqc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzL29wZXJhdG9yc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJ0eXBlb3JtXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIiLCIvLyBzdGFydHVwXG4vLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbi8vIFRoaXMgZW50cnkgbW9kdWxlIGlzIHJlZmVyZW5jZWQgYnkgb3RoZXIgbW9kdWxlcyBzbyBpdCBjYW4ndCBiZSBpbmxpbmVkXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL2FwcHMvc2VydmVyL3NyYy9tYWluLnRzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9