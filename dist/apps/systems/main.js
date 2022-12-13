/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/systems/src/activity_logs/src/activity_logs.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/systems/src/activity_logs/src/activity_logs.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityLogsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const activity_logs_service_1 = __webpack_require__(/*! ./activity_logs.service */ "./apps/systems/src/activity_logs/src/activity_logs.service.ts");
const dto_1 = __webpack_require__(/*! ./dto */ "./apps/systems/src/activity_logs/src/dto/index.ts");
let ActivityLogsController = class ActivityLogsController {
    constructor(activityLogsService) {
        this.activityLogsService = activityLogsService;
    }
    getActivity(paginationQueryDto) {
        return this.activityLogsService.getActivity(paginationQueryDto);
    }
    getActivityById(activityId) {
        return this.activityLogsService.getActivityById(activityId);
    }
    addActivity(dto) {
        return this.activityLogsService.addActivity(dto);
    }
    updateActivity(dto) {
        return this.activityLogsService.updateActivity(dto);
    }
    async deleteBook(activityId) {
        return await this.activityLogsService.deleteActivity(activityId);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_activity'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_b = typeof Promise !== "undefined" && Promise) === "function" ? _b : Object)
], ActivityLogsController.prototype, "getActivity", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_activity_by_id'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_c = typeof Promise !== "undefined" && Promise) === "function" ? _c : Object)
], ActivityLogsController.prototype, "getActivityById", null);
__decorate([
    (0, microservices_1.MessagePattern)('add_activity'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.CreateActivityDto !== "undefined" && dto_1.CreateActivityDto) === "function" ? _d : Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], ActivityLogsController.prototype, "addActivity", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_activity'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof dto_1.EditActivityDto !== "undefined" && dto_1.EditActivityDto) === "function" ? _f : Object]),
    __metadata("design:returntype", typeof (_g = typeof Promise !== "undefined" && Promise) === "function" ? _g : Object)
], ActivityLogsController.prototype, "updateActivity", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_activity'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", typeof (_h = typeof Promise !== "undefined" && Promise) === "function" ? _h : Object)
], ActivityLogsController.prototype, "deleteBook", null);
ActivityLogsController = __decorate([
    (0, common_1.Controller)('activity'),
    __metadata("design:paramtypes", [typeof (_a = typeof activity_logs_service_1.ActivityLogsService !== "undefined" && activity_logs_service_1.ActivityLogsService) === "function" ? _a : Object])
], ActivityLogsController);
exports.ActivityLogsController = ActivityLogsController;


/***/ }),

/***/ "./apps/systems/src/activity_logs/src/activity_logs.module.ts":
/*!********************************************************************!*\
  !*** ./apps/systems/src/activity_logs/src/activity_logs.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityLogsModule = void 0;
const utils_1 = __webpack_require__(/*! @common/utils */ "./libs/common/utils/index.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const pipe_1 = __webpack_require__(/*! @common/pipe */ "./libs/common/pipe/index.ts");
const activity_logs_controller_1 = __webpack_require__(/*! ./activity_logs.controller */ "./apps/systems/src/activity_logs/src/activity_logs.controller.ts");
const activity_logs_service_1 = __webpack_require__(/*! ./activity_logs.service */ "./apps/systems/src/activity_logs/src/activity_logs.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/systems/src/activity_logs/src/prisma/prisma.module.ts");
let ActivityLogsModule = class ActivityLogsModule {
};
ActivityLogsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModuleActivity,
        ],
        controllers: [activity_logs_controller_1.ActivityLogsController],
        providers: [
            activity_logs_service_1.ActivityLogsService,
            utils_1.PrismaQuery,
            http_1.HTTP,
            {
                provide: core_1.APP_PIPE,
                useClass: pipe_1.RpcValidationPipe,
            },
        ],
    })
], ActivityLogsModule);
exports.ActivityLogsModule = ActivityLogsModule;


/***/ }),

/***/ "./apps/systems/src/activity_logs/src/activity_logs.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/systems/src/activity_logs/src/activity_logs.service.ts ***!
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ActivityLogsService = void 0;
const utils_1 = __webpack_require__(/*! @common/utils */ "./libs/common/utils/index.ts");
const requets_util_1 = __webpack_require__(/*! @common/utils/requets.util */ "./libs/common/utils/requets.util.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/systems/src/activity_logs/src/prisma/prisma.service.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_2 = __webpack_require__(/*! ./common */ "./apps/systems/src/activity_logs/src/common/index.ts");
let ActivityLogsService = class ActivityLogsService extends requets_util_1.RESTfulService {
    constructor(prisma, prismaQuery, http) {
        super();
        this.prisma = prisma;
        this.prismaQuery = prismaQuery;
        this.http = http;
        this.params = {
            item: {
                defaultSystemFields: false,
            },
            list: {
                orderFields: ['description', 'createdDate'],
            },
        };
    }
    getDb() {
        const query = this.prismaQuery.where({ deletedDate: null });
        return query;
    }
    async getActivity(paginationQueryDto) {
        var _a, _b, _c;
        const pagination = await this.getLists(paginationQueryDto);
        const queries = Object.assign({
            limit: '-1',
            page: '1',
        }, paginationQueryDto);
        const q = (queries.q || '')
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .replace(/đ/g, 'd')
            .replace(/Đ/g, 'D')
            .toLowerCase();
        const userQuery = (_a = paginationQueryDto.order) === null || _a === void 0 ? void 0 : _a.split(',').reduce((queryObject, item) => {
            if (item.includes('email') ||
                item.includes('firstName') ||
                item.includes('lastName')) {
                const [fieldName, sortValue] = item.split(' ');
                queryObject.user[fieldName] = sortValue || 'asc';
            }
            return queryObject;
        }, { user: {} });
        pagination.sort = pagination.sort || [];
        if ((_b = Object.values(userQuery.user)) === null || _b === void 0 ? void 0 : _b.length) {
            pagination.sort.push(userQuery);
        }
        let f_from_date = paginationQueryDto.f_from_date;
        let f_to_date = paginationQueryDto.f_to_date;
        if (typeof +paginationQueryDto.f_from_date === 'number') {
            f_from_date = +paginationQueryDto.f_from_date * 1000;
        }
        if (typeof +paginationQueryDto.f_to_date === 'number') {
            f_to_date = +paginationQueryDto.f_to_date * 1000;
        }
        const whereQuery = {
            deletedDate: null,
            OR: (0, common_2.searchQuery)(q),
            createdDate: Object.assign(Object.assign({}, (paginationQueryDto.f_to_date && {
                lte: new Date(f_to_date),
            })), (paginationQueryDto.f_from_date && {
                gte: new Date(f_from_date),
            })),
        };
        const params = {
            take: pagination.take,
            skip: pagination.skip,
            cursor: pagination.cursor ? { id: pagination.cursor } : undefined,
            orderBy: pagination.sort,
            where: (_c = pagination.search) !== null && _c !== void 0 ? _c : {},
        };
        const [totalActivityLogs, activityLogs] = await Promise.all([
            this.prisma.activityLogs.count({
                where: whereQuery,
            }),
            this.prisma.activityLogs.findMany({
                take: params.take,
                skip: params.skip,
                cursor: params.cursor,
                where: whereQuery,
                orderBy: params.orderBy,
                include: Object.assign({}, common_2.fieldsInclude),
            }),
        ]);
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Get all activity logs successfully', activityLogs, totalActivityLogs);
    }
    async getActivityById(activityId) {
        const activity = await this.prisma.activityLogs.findUnique({
            where: {
                id: activityId,
            },
            include: Object.assign({}, common_2.fieldsInclude),
        });
        if (activity === null || activity === void 0 ? void 0 : activity.deletedDate)
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Activity does not exist');
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Get activity by id successfully', activity);
    }
    async addActivity(dto) {
        const activity = await this.prisma.activityLogs.create({
            data: Object.assign(Object.assign({}, dto), { createdBy: dto.userId }),
            include: Object.assign({}, common_2.fieldsInclude),
        });
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Add activity successfully', activity);
    }
    async updateActivity(dto) {
        const { userId } = dto, data = __rest(dto, ["userId"]);
        const activity = await this.prisma.activityLogs.findUnique({
            where: {
                id: dto.id,
            },
        });
        if (!activity || activity.deletedDate)
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Activity does not exist');
        const updatedActivity = await this.prisma.activityLogs.update({
            where: {
                id: dto.id,
            },
            data: Object.assign(Object.assign({}, data), { updatedDate: new Date(), updatedBy: userId }),
            include: Object.assign({}, common_2.fieldsInclude),
        });
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Update activity successfully', updatedActivity);
    }
    async deleteActivity(activityId) {
        const activity = await this.prisma.activityLogs.findUnique({
            where: {
                id: activityId,
            },
        });
        if (!activity || activity.deletedDate)
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Activity does not exist');
        await this.prisma.activityLogs.update({
            where: {
                id: activity.id,
            },
            data: {
                deletedDate: new Date(),
            },
        });
        return this.http.setHttpRequest(common_1.HttpStatus.NO_CONTENT, 'Delete activity successfully');
    }
};
ActivityLogsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceActivity !== "undefined" && prisma_service_1.PrismaServiceActivity) === "function" ? _a : Object, typeof (_b = typeof utils_1.PrismaQuery !== "undefined" && utils_1.PrismaQuery) === "function" ? _b : Object, typeof (_c = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _c : Object])
], ActivityLogsService);
exports.ActivityLogsService = ActivityLogsService;


/***/ }),

/***/ "./apps/systems/src/activity_logs/src/common/index.ts":
/*!************************************************************!*\
  !*** ./apps/systems/src/activity_logs/src/common/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.searchQuery = exports.fieldsInclude = void 0;
exports.fieldsInclude = {
    user: {
        select: {
            email: true,
            firstName: true,
            lastName: true,
        },
    },
};
const searchQuery = (keyword) => {
    const isNameContainsQuery = {
        name: {
            contains: keyword || '',
        },
    };
    return [
        {
            user: {
                OR: [
                    {
                        email: {
                            contains: keyword || '',
                        },
                    },
                    {
                        firstName: {
                            contains: keyword || '',
                        },
                    },
                    {
                        lastName: {
                            contains: keyword || '',
                        },
                    },
                ],
            },
        },
    ];
};
exports.searchQuery = searchQuery;


/***/ }),

/***/ "./apps/systems/src/activity_logs/src/dto/create-activity.dto.ts":
/*!***********************************************************************!*\
  !*** ./apps/systems/src/activity_logs/src/dto/create-activity.dto.ts ***!
  \***********************************************************************/
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
exports.CreateActivityDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
class CreateActivityDto {
}
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateActivityDto.prototype, "createdDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateActivityDto.prototype, "updatedDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateActivityDto.prototype, "deletedDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateActivityDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateActivityDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(mysql_1.ActivityStatus, {
        message: 'status must be either SUCCESSFUL OR UNSUCCESSFUL',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof mysql_1.ActivityStatus !== "undefined" && mysql_1.ActivityStatus) === "function" ? _a : Object)
], CreateActivityDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateActivityDto.prototype, "userId", void 0);
exports.CreateActivityDto = CreateActivityDto;


/***/ }),

/***/ "./apps/systems/src/activity_logs/src/dto/edit-activity.dto.ts":
/*!*********************************************************************!*\
  !*** ./apps/systems/src/activity_logs/src/dto/edit-activity.dto.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditActivityDto = void 0;
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class EditActivityDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], EditActivityDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditActivityDto.prototype, "createdDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditActivityDto.prototype, "updatedDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditActivityDto.prototype, "deletedDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditActivityDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditActivityDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(mysql_1.ActivityStatus, {
        message: 'status must be either SUCCESSFUL OR UNSUCCESSFUL',
    }),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof mysql_1.ActivityStatus !== "undefined" && mysql_1.ActivityStatus) === "function" ? _a : Object)
], EditActivityDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], EditActivityDto.prototype, "userId", void 0);
exports.EditActivityDto = EditActivityDto;


/***/ }),

/***/ "./apps/systems/src/activity_logs/src/dto/index.ts":
/*!*********************************************************!*\
  !*** ./apps/systems/src/activity_logs/src/dto/index.ts ***!
  \*********************************************************/
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
__exportStar(__webpack_require__(/*! ./create-activity.dto */ "./apps/systems/src/activity_logs/src/dto/create-activity.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./edit-activity.dto */ "./apps/systems/src/activity_logs/src/dto/edit-activity.dto.ts"), exports);


/***/ }),

/***/ "./apps/systems/src/activity_logs/src/prisma/prisma.module.ts":
/*!********************************************************************!*\
  !*** ./apps/systems/src/activity_logs/src/prisma/prisma.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleActivity = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/systems/src/activity_logs/src/prisma/prisma.service.ts");
let PrismaModuleActivity = class PrismaModuleActivity {
};
PrismaModuleActivity = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceActivity],
        exports: [prisma_service_1.PrismaServiceActivity],
    })
], PrismaModuleActivity);
exports.PrismaModuleActivity = PrismaModuleActivity;


/***/ }),

/***/ "./apps/systems/src/activity_logs/src/prisma/prisma.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/systems/src/activity_logs/src/prisma/prisma.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceActivity = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
let PrismaServiceActivity = class PrismaServiceActivity extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([]);
    }
};
PrismaServiceActivity = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceActivity);
exports.PrismaServiceActivity = PrismaServiceActivity;


/***/ }),

/***/ "./apps/systems/src/auth/src/auth.controller.ts":
/*!******************************************************!*\
  !*** ./apps/systems/src/auth/src/auth.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthController = void 0;
const first_activate_dto_1 = __webpack_require__(/*! ./dto/first_activate.dto */ "./apps/systems/src/auth/src/dto/first_activate.dto.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/systems/src/auth/src/auth.service.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const rxjs_1 = __webpack_require__(/*! rxjs */ "rxjs");
const dto_1 = __webpack_require__(/*! ./dto */ "./apps/systems/src/auth/src/dto/index.ts");
let AuthController = class AuthController extends http_1.HTTP {
    constructor(authService, client) {
        super();
        this.authService = authService;
        this.client = client;
    }
    signIn(body) {
        return this.authService.signIn(body);
    }
    async signInWithGoogleRedirect(userInfo) {
        return await this.authService.signInWithGoogle(userInfo);
    }
    delete(id) {
        return this.authService.delete(id);
    }
    activate(id) {
        return this.authService.activate(id);
    }
    async authentication(user) {
        return await this.authService.authentication(user);
    }
    async signOut(body) {
        return await this.authService.signOut(body);
    }
    async forgotPassword(body) {
        try {
            const mailMessage = await this.authService.forgotPassword(body);
            if (mailMessage.code !== common_1.HttpStatus.OK) {
                return mailMessage;
            }
            const sendingEmail = await (0, rxjs_1.lastValueFrom)(this.client.emit('email', mailMessage.data));
            return this.setHttpRequest(common_1.HttpStatus.OK, 'systems.AUTH.RESET_PASSWORD_LINK_SENT');
        }
        catch (err) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR');
        }
    }
    async verifyResetPasswordUrl(query) {
        const isValid = await this.authService.verifyToken(query);
        if (isValid.code !== common_1.HttpStatus.OK) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, isValid.message);
        }
        return this.setHttpRequest(common_1.HttpStatus.OK, 'common.VERIFIED');
    }
    async resetPassword(body) {
        const resetPasswordResponse = await this.authService.resetPassword(body);
        return resetPasswordResponse;
    }
    async refreshToken(body) {
        const refreshToken = await this.authService.refreshToken(body);
        return refreshToken;
    }
    async firstActivate(body) {
        const data = await this.authService.firstActivate(body);
        if (typeof data === 'string') {
            return this.error(data, common_1.HttpStatus.REQUEST_TIMEOUT);
        }
        if (!data) {
            return this.error('Failed', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
        return this.success();
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('signin'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.SignInDto !== "undefined" && dto_1.SignInDto) === "function" ? _c : Object]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "signIn", null);
__decorate([
    (0, microservices_1.MessagePattern)('signin_google'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signInWithGoogleRedirect", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "delete", null);
__decorate([
    (0, microservices_1.MessagePattern)('activate_user'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], AuthController.prototype, "activate", null);
__decorate([
    (0, microservices_1.MessagePattern)('authentication'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "authentication", null);
__decorate([
    (0, microservices_1.MessagePattern)('signout'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "signOut", null);
__decorate([
    (0, microservices_1.MessagePattern)('forgot_password'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "forgotPassword", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_reset_password'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_d = typeof dto_1.ResetPasswordQuery !== "undefined" && dto_1.ResetPasswordQuery) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "verifyResetPasswordUrl", null);
__decorate([
    (0, microservices_1.MessagePattern)('post_reset_password'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_e = typeof dto_1.ResetPasswordBody !== "undefined" && dto_1.ResetPasswordBody) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "resetPassword", null);
__decorate([
    (0, microservices_1.MessagePattern)('refresh_token'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "refreshToken", null);
__decorate([
    (0, microservices_1.MessagePattern)('first_activate'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_f = typeof first_activate_dto_1.FirstActivateDto !== "undefined" && first_activate_dto_1.FirstActivateDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], AuthController.prototype, "firstActivate", null);
AuthController = __decorate([
    (0, common_1.Controller)('auth'),
    __param(1, (0, common_1.Inject)('QUEUE_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object])
], AuthController);
exports.AuthController = AuthController;


/***/ }),

/***/ "./apps/systems/src/auth/src/auth.module.ts":
/*!**************************************************!*\
  !*** ./apps/systems/src/auth/src/auth.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var AuthModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthModule = void 0;
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const prisma_1 = __webpack_require__(/*! @common/auth/prisma */ "./libs/common/auth/prisma/index.ts");
const strategies_1 = __webpack_require__(/*! @common/auth/strategies */ "./libs/common/auth/strategies/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const auth_controller_1 = __webpack_require__(/*! ./auth.controller */ "./apps/systems/src/auth/src/auth.controller.ts");
const auth_service_1 = __webpack_require__(/*! ./auth.service */ "./apps/systems/src/auth/src/auth.service.ts");
let AuthModule = AuthModule_1 = class AuthModule {
};
AuthModule = AuthModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            jwt_1.JwtModule.register({}),
            redis_1.RedisModule.register('QUEUE_SERVICE'),
            AuthModule_1,
            prisma_1.PrismaModuleAuth,
        ],
        controllers: [auth_controller_1.AuthController],
        providers: [auth_service_1.AuthService, strategies_1.JwtStrategy],
        exports: [auth_service_1.AuthService],
    })
], AuthModule);
exports.AuthModule = AuthModule;


/***/ }),

/***/ "./apps/systems/src/auth/src/auth.service.ts":
/*!***************************************************!*\
  !*** ./apps/systems/src/auth/src/auth.service.ts ***!
  \***************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.AuthService = void 0;
const types_1 = __webpack_require__(/*! @common/types */ "./libs/common/types/index.ts");
const prisma_1 = __webpack_require__(/*! @common/auth/prisma */ "./libs/common/auth/prisma/index.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const jwt_1 = __webpack_require__(/*! @nestjs/jwt */ "@nestjs/jwt");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
const crypto_1 = __importDefault(__webpack_require__(/*! crypto */ "crypto"));
let AuthService = class AuthService extends http_1.HTTP {
    constructor(prisma, jwt, config) {
        super();
        this.prisma = prisma;
        this.jwt = jwt;
        this.config = config;
    }
    async signIn(data) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: data.email,
            },
            include: {
                userGeneralSetting: true,
            },
        });
        if (!user) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'common.INCORRECT_CREDENTIALS');
        }
        else if (user.deletedDate) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.NOT_EXISTED');
        }
        else if (!user.activatedDate) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.ACTIVATE_EMAIL');
        }
        const pwMatches = await bcrypt.compare(data.password, user.hash);
        if (!pwMatches) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'common.INCORRECT_CREDENTIALS');
        }
        const [accessToken, refreshToken] = await Promise.all([
            this.signToken(user.id, user.email),
            this.signRefreshToken(user.id, user.email),
        ]);
        const _user = user;
        delete _user.hash;
        delete _user.deletedDate;
        return this.success({ accessToken, refreshToken, user: _user });
    }
    async signInWithGoogle(data) {
        if (!data) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Invalid data');
        }
        let user = await this.prisma.user.findFirst({
            where: {
                email: data.email,
            },
        });
        if (!user) {
            return this.setHttpRequest(common_1.HttpStatus.UNAUTHORIZED, 'common.INCORRECT_CREDENTIALS');
        }
        else if (user.deletedDate) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.NOT_EXISTED');
        }
        else if (!user.activatedDate) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.ACTIVATE_EMAIL');
        }
        const [accessToken, refreshToken] = await Promise.all([
            this.signToken(user.id, user.email),
            this.signRefreshToken(user.id, user.email),
        ]);
        return this.success({ accessToken, refreshToken, user });
    }
    async createUser(data) {
        return await this.prisma.user.create({
            data,
            select: {
                id: true,
                email: true,
            },
        });
    }
    async authentication(user) {
        return this.success(user);
    }
    async signOut(body) {
        try {
            return this.setHttpRequest(common_1.HttpStatus.OK, 'systems.AUTH.SIGN_OUT_SUCCESS');
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, error);
        }
    }
    async forgotPassword(body) {
        try {
            const user = await this.prisma.user.findFirst({
                where: {
                    email: body.email,
                },
            });
            if (!user || user.deletedDate || !user.activatedDate) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.NOT_EXISTED');
            }
            const { id, email } = user;
            const accessToken = await this.signToken(id, email);
            const mail = new types_1.MailMessage(email, 'Change your account password', {
                type: 'html',
                data: 'en_reset_password.html',
            }, {
                resetLink: `http://${this.config.get('FE_HOST_URL')}/${this.config.get('BE_RESET_PASSWORD_ENDPOINT')}?email=${email}&id=${id}&token=${accessToken}`,
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'Sending email', mail);
        }
        catch (err) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR');
        }
    }
    async resetPassword(body) {
        const { password, confirmPassword, token, id, email } = body;
        const idToNumber = +id;
        try {
            const verifyToken = await this.verifyToken({
                token,
                id: idToNumber,
                email,
            });
            if (verifyToken.code !== common_1.HttpStatus.OK) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, verifyToken.message);
            }
            if (id !== verifyToken.data) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'common.UNAUTHORIZED');
            }
            if (password !== confirmPassword) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.CONFIRM_PASSWORD_NOT_MATCHED');
            }
            const salt = +this.config.get('BCRYPT_HASH_SALT', 10);
            const hash = await bcrypt.hash(password, salt);
            const changeUserPassword = await this.prisma.user.update({
                where: {
                    id: idToNumber,
                },
                data: {
                    hash,
                },
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'systems.USER.UPDATE_PASSWORD_SUCCESS');
        }
        catch (err) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR');
        }
    }
    async verifyToken(query) {
        const { id, email, token } = query;
        const secret = this.config.getOrThrow('JWT_SECRET');
        try {
            const [user, tokenData] = await Promise.all([
                this.prisma.user.findUnique({
                    where: {
                        id: +id,
                    },
                }),
                this.jwt.verifyAsync(token, {
                    secret,
                }),
            ]);
            if (!user || user.deletedDate || !user.activatedDate) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.NOT_EXISTED');
            }
            return this.setHttpRequest(common_1.HttpStatus.OK, 'Verified', tokenData);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, error.message);
        }
    }
    async signToken(userId, email) {
        const payload = { id: userId, email };
        const secret = this.config.getOrThrow('JWT_SECRET');
        const accessToken = await this.jwt.signAsync(payload, {
            expiresIn: this.config.getOrThrow('JWT_ACCESS_TOKEN_EXPIRE'),
            secret: secret,
        });
        return accessToken;
    }
    async signRefreshToken(userId, email) {
        const payload = { id: userId, email };
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
    async validateUser(email, password) {
        const user = await this.prisma.user.findFirst({
            where: {
                email: email,
            },
        });
        const passwordIsValid = await bcrypt.compare(password, user.hash);
        if (!passwordIsValid) {
            return this.setHttpRequest(common_1.HttpStatus.UNAUTHORIZED, 'common.INCORRECT_CREDENTIALS');
        }
        return user;
    }
    async refreshToken(body) {
        const { userId, refreshToken } = body;
        try {
            const token = await this.prisma.tokens.findFirst({
                where: {
                    refreshTokenSha1: crypto_1.default
                        .createHash('sha1')
                        .update(refreshToken)
                        .digest('hex'),
                    userId,
                },
            });
            if (!token) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.AUTH.REFRESH_TOKEN_EXPIRED');
            }
            const jwtRefreshTokenSecret = this.config.get('JWT_REFRESH_TOKEN_SECRET');
            const payload = await this.jwt.verifyAsync(refreshToken, {
                secret: jwtRefreshTokenSecret,
            });
            const accessToken = await this.signToken(payload.email, payload.id);
            return this.setHttpRequest(common_1.HttpStatus.OK, 'systems.AUTH.GET_SUCCESS_TOKEN_SUCCESS', { accessToken });
        }
        catch (err) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR');
        }
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
    async delete(id) {
        const item = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });
        if (!item) {
            return this.notFound();
        }
        const updatedItem = await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                deletedDate: new Date(),
            },
        });
        return this.success(updatedItem);
    }
    async activate(id) {
        const item = await this.prisma.user.findUnique({
            where: {
                id,
            },
        });
        if (!item) {
            return this.notFound();
        }
        const updatedItem = await this.prisma.user.update({
            where: {
                id,
            },
            data: {
                deletedDate: null,
            },
        });
        return this.success(updatedItem);
    }
    async firstActivate(dto) {
        const secret = this.config.getOrThrow('JWT_SECRET');
        try {
            const data = await this.jwt.verifyAsync(dto.token, {
                secret,
            });
            await this.prisma.user.update({
                where: {
                    id: data.id,
                },
                data: {
                    activatedDate: new Date(),
                },
            });
            return true;
        }
        catch (error) {
            if (error instanceof Error && error.name === 'TokenExpiredError') {
                const token = await this.jwt.signAsync({
                    id: dto.id,
                    email: dto.email,
                }, {
                    expiresIn: this.config.getOrThrow('JWT_REFRESH_TOKEN_EXPIRE'),
                    secret,
                });
                return token;
            }
            return false;
        }
    }
};
AuthService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_1.PrismaServiceAuth !== "undefined" && prisma_1.PrismaServiceAuth) === "function" ? _a : Object, typeof (_b = typeof jwt_1.JwtService !== "undefined" && jwt_1.JwtService) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object])
], AuthService);
exports.AuthService = AuthService;


/***/ }),

/***/ "./apps/systems/src/auth/src/dto/first_activate.dto.ts":
/*!*************************************************************!*\
  !*** ./apps/systems/src/auth/src/dto/first_activate.dto.ts ***!
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
exports.FirstActivateDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class FirstActivateDto {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    __metadata("design:type", String)
], FirstActivateDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_transformer_1.Type)(() => Number),
    __metadata("design:type", Number)
], FirstActivateDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], FirstActivateDto.prototype, "token", void 0);
exports.FirstActivateDto = FirstActivateDto;


/***/ }),

/***/ "./apps/systems/src/auth/src/dto/index.ts":
/*!************************************************!*\
  !*** ./apps/systems/src/auth/src/dto/index.ts ***!
  \************************************************/
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
__exportStar(__webpack_require__(/*! ./first_activate.dto */ "./apps/systems/src/auth/src/dto/first_activate.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./reset-password-query.dto */ "./apps/systems/src/auth/src/dto/reset-password-query.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./sign-in.dto */ "./apps/systems/src/auth/src/dto/sign-in.dto.ts"), exports);


/***/ }),

/***/ "./apps/systems/src/auth/src/dto/reset-password-query.dto.ts":
/*!*******************************************************************!*\
  !*** ./apps/systems/src/auth/src/dto/reset-password-query.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ResetPasswordBody = exports.ResetPasswordQuery = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ResetPasswordQuery {
}
exports.ResetPasswordQuery = ResetPasswordQuery;
class ResetPasswordBody extends ResetPasswordQuery {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResetPasswordBody.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ResetPasswordBody.prototype, "confirmPassword", void 0);
exports.ResetPasswordBody = ResetPasswordBody;


/***/ }),

/***/ "./apps/systems/src/auth/src/dto/sign-in.dto.ts":
/*!******************************************************!*\
  !*** ./apps/systems/src/auth/src/dto/sign-in.dto.ts ***!
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
exports.SignInDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class SignInDto {
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignInDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], SignInDto.prototype, "password", void 0);
exports.SignInDto = SignInDto;


/***/ }),

/***/ "./apps/systems/src/invoices/src/dto/create-invoice-items.dto.ts":
/*!***********************************************************************!*\
  !*** ./apps/systems/src/invoices/src/dto/create-invoice-items.dto.ts ***!
  \***********************************************************************/
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
exports.CreateInvoiceItemDto = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const invoice_item_dto_1 = __webpack_require__(/*! ./invoice-item.dto */ "./apps/systems/src/invoices/src/dto/invoice-item.dto.ts");
class CreateInvoiceItemDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, common_1.Optional)(),
    __metadata("design:type", Number)
], CreateInvoiceItemDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_transformer_1.Type)(() => invoice_item_dto_1.InvoiceItemDto),
    __metadata("design:type", Array)
], CreateInvoiceItemDto.prototype, "items", void 0);
exports.CreateInvoiceItemDto = CreateInvoiceItemDto;


/***/ }),

/***/ "./apps/systems/src/invoices/src/dto/create-invoices.dto.ts":
/*!******************************************************************!*\
  !*** ./apps/systems/src/invoices/src/dto/create-invoices.dto.ts ***!
  \******************************************************************/
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
exports.CreateInvoiceDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const invoice_item_dto_1 = __webpack_require__(/*! ./invoice-item.dto */ "./apps/systems/src/invoices/src/dto/invoice-item.dto.ts");
class CreateInvoiceDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateInvoiceDto.prototype, "deletedDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], CreateInvoiceDto.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_c = typeof Date !== "undefined" && Date) === "function" ? _c : Object)
], CreateInvoiceDto.prototype, "createInvoiceDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "payment", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateInvoiceDto.prototype, "discount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateInvoiceDto.prototype, "contactPersion", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_transformer_1.Type)(() => invoice_item_dto_1.InvoiceItemDto),
    __metadata("design:type", Array)
], CreateInvoiceDto.prototype, "items", void 0);
exports.CreateInvoiceDto = CreateInvoiceDto;


/***/ }),

/***/ "./apps/systems/src/invoices/src/dto/delete-invoice-item.dto.ts":
/*!**********************************************************************!*\
  !*** ./apps/systems/src/invoices/src/dto/delete-invoice-item.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.DeleteInvoiceItemDto = void 0;
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const delete_item_dto_1 = __webpack_require__(/*! ./delete-item.dto */ "./apps/systems/src/invoices/src/dto/delete-item.dto.ts");
class DeleteInvoiceItemDto {
}
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_transformer_1.Type)(() => delete_item_dto_1.DeleteItemDto),
    __metadata("design:type", Array)
], DeleteInvoiceItemDto.prototype, "items", void 0);
exports.DeleteInvoiceItemDto = DeleteInvoiceItemDto;


/***/ }),

/***/ "./apps/systems/src/invoices/src/dto/delete-item.dto.ts":
/*!**************************************************************!*\
  !*** ./apps/systems/src/invoices/src/dto/delete-item.dto.ts ***!
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
exports.DeleteItemDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class DeleteItemDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], DeleteItemDto.prototype, "id", void 0);
exports.DeleteItemDto = DeleteItemDto;


/***/ }),

/***/ "./apps/systems/src/invoices/src/dto/index.ts":
/*!****************************************************!*\
  !*** ./apps/systems/src/invoices/src/dto/index.ts ***!
  \****************************************************/
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
__exportStar(__webpack_require__(/*! ./create-invoices.dto */ "./apps/systems/src/invoices/src/dto/create-invoices.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-invoices.dto */ "./apps/systems/src/invoices/src/dto/update-invoices.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./create-invoice-items.dto */ "./apps/systems/src/invoices/src/dto/create-invoice-items.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-invoice-item.dto */ "./apps/systems/src/invoices/src/dto/delete-invoice-item.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./delete-item.dto */ "./apps/systems/src/invoices/src/dto/delete-item.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./invoice-item.dto */ "./apps/systems/src/invoices/src/dto/invoice-item.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./update-invoices.dto */ "./apps/systems/src/invoices/src/dto/update-invoices.dto.ts"), exports);


/***/ }),

/***/ "./apps/systems/src/invoices/src/dto/invoice-item.dto.ts":
/*!***************************************************************!*\
  !*** ./apps/systems/src/invoices/src/dto/invoice-item.dto.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoiceItemDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class InvoiceItemDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], InvoiceItemDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], InvoiceItemDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], InvoiceItemDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], InvoiceItemDto.prototype, "updatedDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], InvoiceItemDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], InvoiceItemDto.prototype, "deletedDate", void 0);
exports.InvoiceItemDto = InvoiceItemDto;


/***/ }),

/***/ "./apps/systems/src/invoices/src/dto/pagination.dto.ts":
/*!*************************************************************!*\
  !*** ./apps/systems/src/invoices/src/dto/pagination.dto.ts ***!
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
exports.PaginationInvoiceQueryDto = void 0;
const dto_1 = __webpack_require__(/*! @common/dto */ "./libs/common/dto/index.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class PaginationInvoiceQueryDto extends dto_1.PaginationQueryDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PaginationInvoiceQueryDto.prototype, "amount", void 0);
exports.PaginationInvoiceQueryDto = PaginationInvoiceQueryDto;


/***/ }),

/***/ "./apps/systems/src/invoices/src/dto/update-invoice-item.dto.ts":
/*!**********************************************************************!*\
  !*** ./apps/systems/src/invoices/src/dto/update-invoice-item.dto.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UpdateInvoiceItemDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class UpdateInvoiceItemDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateInvoiceItemDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.MaxLength)(255),
    __metadata("design:type", String)
], UpdateInvoiceItemDto.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateInvoiceItemDto.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], UpdateInvoiceItemDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpdateInvoiceItemDto.prototype, "updatedDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateInvoiceItemDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpdateInvoiceItemDto.prototype, "deletedDate", void 0);
exports.UpdateInvoiceItemDto = UpdateInvoiceItemDto;


/***/ }),

/***/ "./apps/systems/src/invoices/src/dto/update-invoices.dto.ts":
/*!******************************************************************!*\
  !*** ./apps/systems/src/invoices/src/dto/update-invoices.dto.ts ***!
  \******************************************************************/
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
exports.UpdateInvoiceDto = void 0;
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const update_invoice_item_dto_1 = __webpack_require__(/*! ./update-invoice-item.dto */ "./apps/systems/src/invoices/src/dto/update-invoice-item.dto.ts");
class UpdateInvoiceDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateInvoiceDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], UpdateInvoiceDto.prototype, "deletedDate", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], UpdateInvoiceDto.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateInvoiceDto.prototype, "customerId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(mysql_1.InvoiceStatus),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof mysql_1.InvoiceStatus !== "undefined" && mysql_1.InvoiceStatus) === "function" ? _c : Object)
], UpdateInvoiceDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof Date !== "undefined" && Date) === "function" ? _d : Object)
], UpdateInvoiceDto.prototype, "createInvoiceDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvoiceDto.prototype, "payment", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateInvoiceDto.prototype, "discount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateInvoiceDto.prototype, "contactPersion", void 0);
__decorate([
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => update_invoice_item_dto_1.UpdateInvoiceItemDto),
    __metadata("design:type", Array)
], UpdateInvoiceDto.prototype, "items", void 0);
exports.UpdateInvoiceDto = UpdateInvoiceDto;


/***/ }),

/***/ "./apps/systems/src/invoices/src/invoices.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/systems/src/invoices/src/invoices.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesController = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const dto_1 = __webpack_require__(/*! ./dto */ "./apps/systems/src/invoices/src/dto/index.ts");
const delete_invoice_item_dto_1 = __webpack_require__(/*! ./dto/delete-invoice-item.dto */ "./apps/systems/src/invoices/src/dto/delete-invoice-item.dto.ts");
const pagination_dto_1 = __webpack_require__(/*! ./dto/pagination.dto */ "./apps/systems/src/invoices/src/dto/pagination.dto.ts");
const invoices_service_1 = __webpack_require__(/*! ./invoices.service */ "./apps/systems/src/invoices/src/invoices.service.ts");
let InvoicesController = class InvoicesController {
    constructor(invoicesService) {
        this.invoicesService = invoicesService;
    }
    async getInvoices(paginationQueryDto) {
        return await this.invoicesService.getInvoices(paginationQueryDto);
    }
    async addInvoice(dto) {
        return await this.invoicesService.addInvoice(dto);
    }
    async getInvoice(id) {
        return await this.invoicesService.getInvoiceById(id);
    }
    async addInvoiceItem(id, dto) {
        return await this.invoicesService.addInvoiceItem(id, dto);
    }
    async updateInvoice(id, dto) {
        return await this.invoicesService.updateInvoice(id, dto);
    }
    async deleteInvoice(id) {
        return await this.invoicesService.deleteInvoice(id);
    }
    async deleteInvoiceItem(id, dto) {
        return await this.invoicesService.deleteInvoiceItem(id, dto);
    }
    async getSummaryInvoice() {
        return this.invoicesService.getSummaryInvoice();
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_invoices'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof pagination_dto_1.PaginationInvoiceQueryDto !== "undefined" && pagination_dto_1.PaginationInvoiceQueryDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "getInvoices", null);
__decorate([
    (0, microservices_1.MessagePattern)('add_invoice'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, microservices_1.Payload)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.CreateInvoiceDto !== "undefined" && dto_1.CreateInvoiceDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "addInvoice", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_invoice_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "getInvoice", null);
__decorate([
    (0, microservices_1.MessagePattern)('add_invoice_item'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('dto', new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_d = typeof dto_1.CreateInvoiceItemDto !== "undefined" && dto_1.CreateInvoiceItemDto) === "function" ? _d : Object]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "addInvoiceItem", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_invoice'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('dto', new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_e = typeof dto_1.UpdateInvoiceDto !== "undefined" && dto_1.UpdateInvoiceDto) === "function" ? _e : Object]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "updateInvoice", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_invoice'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "deleteInvoice", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_invoice_item'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, common_1.Body)('id')),
    __param(1, (0, common_1.Body)('dto', new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, typeof (_f = typeof delete_invoice_item_dto_1.DeleteInvoiceItemDto !== "undefined" && delete_invoice_item_dto_1.DeleteInvoiceItemDto) === "function" ? _f : Object]),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "deleteInvoiceItem", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_summary_invoice'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], InvoicesController.prototype, "getSummaryInvoice", null);
InvoicesController = __decorate([
    (0, common_1.Controller)('invoices'),
    __metadata("design:paramtypes", [typeof (_a = typeof invoices_service_1.InvoicesService !== "undefined" && invoices_service_1.InvoicesService) === "function" ? _a : Object])
], InvoicesController);
exports.InvoicesController = InvoicesController;


/***/ }),

/***/ "./apps/systems/src/invoices/src/invoices.module.ts":
/*!**********************************************************!*\
  !*** ./apps/systems/src/invoices/src/invoices.module.ts ***!
  \**********************************************************/
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
var InvoicesModule_1;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const invoices_controller_1 = __webpack_require__(/*! ./invoices.controller */ "./apps/systems/src/invoices/src/invoices.controller.ts");
const invoices_service_1 = __webpack_require__(/*! ./invoices.service */ "./apps/systems/src/invoices/src/invoices.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/systems/src/invoices/src/prisma/prisma.module.ts");
const cookie_parser_1 = __importDefault(__webpack_require__(/*! cookie-parser */ "cookie-parser"));
const query_prisma_1 = __webpack_require__(/*! @common/utils/dto/query.prisma */ "./libs/common/utils/dto/query.prisma.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
let InvoicesModule = InvoicesModule_1 = class InvoicesModule {
    configure(consumer) {
        consumer.apply((0, cookie_parser_1.default)()).forRoutes('*');
    }
};
InvoicesModule = InvoicesModule_1 = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModuleInvoice,
        ],
        controllers: [invoices_controller_1.InvoicesController],
        providers: [invoices_service_1.InvoicesService, InvoicesModule_1, query_prisma_1.PrismaQuery, http_1.HTTP],
    })
], InvoicesModule);
exports.InvoicesModule = InvoicesModule;


/***/ }),

/***/ "./apps/systems/src/invoices/src/invoices.service.ts":
/*!***********************************************************!*\
  !*** ./apps/systems/src/invoices/src/invoices.service.ts ***!
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
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.InvoicesService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const sql_1 = __webpack_require__(/*! ./sql */ "./apps/systems/src/invoices/src/sql/index.ts");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/systems/src/invoices/src/prisma/prisma.service.ts");
const query_prisma_1 = __webpack_require__(/*! @common/utils/dto/query.prisma */ "./libs/common/utils/dto/query.prisma.ts");
let InvoicesService = class InvoicesService {
    constructor(prisma, prismaquery, http) {
        this.prisma = prisma;
        this.prismaquery = prismaquery;
        this.http = http;
        this.params = {
            list: {
                filterFields: ['status'],
                searchFields: ['status'],
            },
        };
    }
    getDb() {
        const query = this.prismaquery.where({ deletedDate: null });
        return query;
    }
    async getInvoices(paginationQueryDto) {
        try {
            let { q, f_status, order, limit, page } = paginationQueryDto;
            q = q ? `%${q}%` : null;
            let orderKey = order ? order.split(' ')[0] : 'i.id';
            orderKey =  true ? 'c.fullName' : 0;
            const orderType = order ? order.split(' ')[1] : 'ASC';
            limit = Number(limit !== null && limit !== void 0 ? limit : 1);
            const offset = (Number(page !== null && page !== void 0 ? page : 1) - 1) * limit;
            let sqlStr = sql_1.getInvoicesSql;
            sqlStr = f_status ? `${sqlStr} AND i.status = '$1' ` : sqlStr;
            sqlStr = q ? `${sqlStr} AND (c.fullName like '$2' OR c.phone like '$2' )` : sqlStr;
            sqlStr = `${sqlStr} GROUP BY i.id `;
            sqlStr = `${sqlStr} ORDER BY ${orderKey} ${orderType}
            LIMIT ${limit} OFFSET ${offset}
      `;
            let newSqlStr = sqlStr.replaceAll('$1', f_status).replaceAll('$2', q);
            const invoices = await this.prisma.$queryRawUnsafe(newSqlStr);
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'get_invoices', { invoices, rowCount: invoices['length'] });
        }
        catch (error) {
            console.log(error);
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Get invoices error', error);
        }
    }
    async addInvoiceItem(id, dto) {
        try {
            const invoiceExists = await this.prisma.invoices.count({
                where: {
                    id,
                },
            });
            if (invoiceExists !== 0) {
                dto.items.forEach((item) => {
                    item.createdBy = dto.createdBy;
                });
                const invoiceAndItems = await this.prisma.invoices.update({
                    where: {
                        id,
                    },
                    data: {
                        invoiceItems: {
                            create: dto.items,
                        },
                    },
                    include: {
                        invoiceItems: {
                            select: {
                                id: true,
                                description: true,
                                amount: true,
                            },
                        },
                    },
                });
                return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Add invoice items success', invoiceAndItems);
            }
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The invoice does not exist');
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Add invoice items error', error);
        }
    }
    async addInvoice(dto) {
        var _a;
        try {
            (_a = dto.items) === null || _a === void 0 ? void 0 : _a.forEach((item) => {
                item.createdBy = dto.createdBy;
            });
            const invoiceAndItems = await this.prisma.invoices.create({
                data: {
                    dueDate: dto.dueDate,
                    customerId: dto.customerId,
                    payment: dto.payment,
                    createInvoiceDate: dto.createInvoiceDate,
                    discount: dto.discount,
                    contactPerson: dto.contactPersion ? dto.contactPersion : null,
                    invoiceItems: {
                        create: dto.items,
                    },
                    createdBy: dto.createdBy,
                },
                include: {
                    invoiceItems: {
                        select: {
                            id: true,
                            description: true,
                            amount: true,
                        },
                    },
                },
            });
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Add invoice success', invoiceAndItems);
        }
        catch (error) {
            console.log(error);
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Add invoice error', error);
        }
    }
    async getInvoiceById(id) {
        try {
            const invoice = await this.prisma.invoices.findUnique({
                where: {
                    id,
                },
                include: {
                    invoiceItems: {
                        select: {
                            id: true,
                            description: true,
                            amount: true,
                        },
                        where: {
                            deletedDate: null,
                        }
                    },
                    customer: {
                        select: {
                            id: true,
                            fullName: true,
                            phone: true,
                            email: true,
                            address: true,
                        },
                    },
                },
            });
            if (!invoice) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The invoice does not exist');
            }
            if (invoice.deletedDate) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Delete invoice success');
            }
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'get_invoice', {
                invoice,
            });
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Get invoice error', error);
        }
    }
    async updateInvoice(id, dto) {
        try {
            const invoice = await this.prisma.invoices.findFirst({
                where: {
                    id,
                    deletedDate: null,
                },
                include: {
                    invoiceItems: {
                        select: {
                            id: true,
                        },
                    },
                }
            });
            if (!invoice) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The The invoice does not exist', invoice);
            }
            let addInvoiceItems = [], removeInvoiceItems = [];
            if (dto.items !== undefined && dto.items.length !== 0) {
                const invoiceItemDtoIds = dto.items.map(item => item.id);
                const invoiceItemIds = invoice.invoiceItems.map(item => item.id);
                removeInvoiceItems = invoice.invoiceItems.filter(item => {
                    return !invoiceItemDtoIds.includes(item.id);
                });
                addInvoiceItems = dto.items.filter(item => {
                    return !invoiceItemIds.includes(item.id);
                });
                await Promise.all([
                    this.prisma.invoiceItems.updateMany({
                        where: {
                            id: {
                                in: removeInvoiceItems.map(r => r.id)
                            }
                        },
                        data: {
                            deletedDate: new Date(),
                        },
                    }),
                    this.prisma.invoices.update({
                        where: {
                            id
                        },
                        data: {
                            invoiceItems: {
                                createMany: {
                                    data: addInvoiceItems,
                                },
                            },
                        },
                    })
                ]);
            }
            const invoiceDto = {
                updatedBy: dto.updatedBy,
                deletedDate: dto.deletedDate !== undefined ? dto.deletedDate : null,
                dueDate: dto.dueDate !== undefined ? dto.dueDate : null,
                customerId: dto.customerId !== undefined ? dto.customerId : null,
                status: dto.status !== undefined ? dto.status : null,
                createInvoiceDate: dto.createInvoiceDate !== undefined ? dto.createInvoiceDate : null,
                payment: dto.payment !== undefined ? dto.payment : null,
                discount: dto.discount !== undefined ? dto.discount : null,
                contactPerson: dto.contactPersion !== undefined ? dto.contactPersion : null
            };
            Object.keys(invoiceDto).forEach(key => {
                if (invoiceDto[key] === null)
                    delete invoiceDto[key];
            });
            const invoiceUpdated = await this.prisma.invoices.update({
                where: {
                    id,
                },
                data: Object.assign({}, invoiceDto),
                include: {
                    invoiceItems: {
                        select: {
                            id: true,
                            description: true,
                            amount: true,
                        },
                        where: {
                            deletedDate: null,
                        },
                    },
                    customer: {
                        select: {
                            id: true,
                            fullName: true,
                            phone: true,
                            email: true,
                            address: true,
                        },
                    },
                },
            });
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Update invoice success', invoiceUpdated);
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Update invoice error', error);
        }
    }
    async deleteInvoice(id) {
        try {
            const invoiceExists = await this.prisma.invoices.count({
                where: {
                    id,
                },
            });
            if (invoiceExists !== 0) {
                await this.prisma.invoices.update({
                    where: {
                        id,
                    },
                    data: {
                        invoiceItems: {
                            deleteMany: {},
                        },
                    },
                });
                await this.prisma.invoices.delete({
                    where: {
                        id,
                    },
                });
                return this.http.setHttpRequest(common_1.HttpStatus.OK, 'Delete invoice success');
            }
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The invoice does not exist');
        }
        catch (error) {
            console.log(error);
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Delete invoice error', error);
        }
    }
    async deleteInvoiceItem(id, dto) {
        try {
            const invoiceExists = await this.prisma.invoices.count({
                where: {
                    id,
                },
            });
            if (invoiceExists !== 0) {
                await this.prisma.invoices.update({
                    where: {
                        id,
                    },
                    data: {
                        invoiceItems: {
                            deleteMany: dto.items,
                        },
                    },
                    include: {
                        invoiceItems: true,
                    },
                });
                return this.http.setHttpRequest(common_1.HttpStatus.OK, 'delete_invoice_item');
            }
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'The invoice does not exist');
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Delete invoice items error', error);
        }
    }
    async getSummaryInvoice() {
        try {
            const paidRecordData = await this.getSumAmount('PAID');
            const unpaidRecordData = await this.getSumAmount('UNPAID');
            const overdueRecordData = await this.getSumAmount('OVERDUE');
            const allData = await this.getSumAmount('ALL');
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'SUMMARY', {
                paidRecordData,
                unpaidRecordData,
                overdueRecordData,
                allData
            });
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'get_summary_error', error);
        }
    }
    async getSumAmount(status) {
        const date = new Date();
        let firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        let lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        let preFirstDay = new Date(new Date(date.getFullYear(), date.getMonth() - 1, 1));
        let preLastDay = new Date(new Date(date.getFullYear(), date.getMonth(), 0));
        firstDay.setHours(0, 0, 0, 0);
        lastDay.setHours(23, 59, 59, 0);
        preFirstDay.setHours(0, 0, 0, 0);
        preLastDay.setHours(23, 59, 59, 0);
        let currentSum, previousSum;
        if (status !== 'ALL') {
            let sqlStr = sql_1.getSummaryAmountSql;
            const queryCurrentMonth = sqlStr.replace('$1', status).replace('$2', firstDay.toISOString()).replace('$3', lastDay.toISOString());
            const summaryCurrent = await this.prisma.$queryRawUnsafe(queryCurrentMonth);
            currentSum = summaryCurrent[0]['SUM(amount)'];
            const queryPreMonth = sqlStr.replace('$1', status).replace('$2', preFirstDay.toISOString()).replace('$3', preLastDay.toISOString());
            const summaryPrevious = await this.prisma.$queryRawUnsafe(queryPreMonth);
            previousSum = summaryPrevious[0]['SUM(amount)'];
        }
        else {
            let sqlStr = sql_1.getSumAllAmount;
            const queryCurrentMonth = sqlStr.replace('$2', firstDay.toISOString()).replace('$3', lastDay.toISOString());
            const summaryCurrent = await this.prisma.$queryRawUnsafe(queryCurrentMonth);
            currentSum = summaryCurrent[0]['SUM(amount)'];
            const queryPreMonth = sqlStr.replace('$2', preFirstDay.toISOString()).replace('$3', preLastDay.toISOString());
            const summaryPrevious = await this.prisma.$queryRawUnsafe(queryPreMonth);
            previousSum = summaryPrevious[0]['SUM(amount)'];
        }
        let percent;
        if (currentSum && previousSum) {
            const calPercent = (parseInt(currentSum) / (parseInt(previousSum) / 100)) - 100;
            percent = parseFloat(calPercent.toFixed());
        }
        return {
            summary: currentSum,
            percent
        };
    }
};
InvoicesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceInvoice !== "undefined" && prisma_service_1.PrismaServiceInvoice) === "function" ? _a : Object, typeof (_b = typeof query_prisma_1.PrismaQuery !== "undefined" && query_prisma_1.PrismaQuery) === "function" ? _b : Object, typeof (_c = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _c : Object])
], InvoicesService);
exports.InvoicesService = InvoicesService;


/***/ }),

/***/ "./apps/systems/src/invoices/src/prisma/prisma.module.ts":
/*!***************************************************************!*\
  !*** ./apps/systems/src/invoices/src/prisma/prisma.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleInvoice = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/systems/src/invoices/src/prisma/prisma.service.ts");
let PrismaModuleInvoice = class PrismaModuleInvoice {
};
PrismaModuleInvoice = __decorate([
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceInvoice],
        exports: [prisma_service_1.PrismaServiceInvoice]
    })
], PrismaModuleInvoice);
exports.PrismaModuleInvoice = PrismaModuleInvoice;


/***/ }),

/***/ "./apps/systems/src/invoices/src/prisma/prisma.service.ts":
/*!****************************************************************!*\
  !*** ./apps/systems/src/invoices/src/prisma/prisma.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceInvoice = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
let PrismaServiceInvoice = class PrismaServiceInvoice extends mysql_1.PrismaClient {
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
        return this.$transaction([
            this.invoices.deleteMany(),
            this.invoiceItems.deleteMany(),
        ]);
    }
};
PrismaServiceInvoice = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _a : Object])
], PrismaServiceInvoice);
exports.PrismaServiceInvoice = PrismaServiceInvoice;


/***/ }),

/***/ "./apps/systems/src/invoices/src/sql/index.ts":
/*!****************************************************!*\
  !*** ./apps/systems/src/invoices/src/sql/index.ts ***!
  \****************************************************/
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
__exportStar(__webpack_require__(/*! ./invoices */ "./apps/systems/src/invoices/src/sql/invoices.ts"), exports);


/***/ }),

/***/ "./apps/systems/src/invoices/src/sql/invoices.ts":
/*!*******************************************************!*\
  !*** ./apps/systems/src/invoices/src/sql/invoices.ts ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getSumAllAmount = exports.getSummaryAmountSql = exports.getInvoicesSql = void 0;
exports.getInvoicesSql = `
    SELECT
      i.id, i.dueDate, i.customerId, i.status, i.createInvoiceDate,
        i.payment, i.discount, i.contactPerson, i.status,
        JSON_OBJECT(
          'id', c.id,
          'fullName', c.fullName,
          'phone', c.phone,
          'address', c.address,
          'email', c.email,
          'avatar', c.avatar,
          'code', c.code
        ) AS customer,
          JSON_ARRAYAGG(
            JSON_OBJECT(
              'id', ii.id,
              'description', ii.description,
              'amount', ii.amount,
              'invoiceId', ii.invoiceId
            )
          ) AS items
        FROM invoices i
        LEFT JOIN invoiceItems ii on i.id = ii.invoiceId
        LEFT JOIN customers c on i.customerId = c.id
        WHERE i.deletedDate IS NULL AND ii.deletedDate IS NULL AND c.deletedDate IS NULL
`;
exports.getSummaryAmountSql = `
  SELECT SUM(amount)
    FROM invoiceItems i
    LEFT JOIN invoices ii on i.invoiceId = ii.id
    WHERE ii.status = '$1' AND ii.createInvoiceDate >= '$2' AND ii.createInvoiceDate <= '$3'
`;
exports.getSumAllAmount = `
  SELECT SUM(amount)
    FROM invoiceItems i
    LEFT JOIN invoices ii on i.invoiceId = ii.id
    WHERE ii.createInvoiceDate >= '$2' AND ii.createInvoiceDate <= '$3'
`;


/***/ }),

/***/ "./apps/systems/src/mail/src/mail.controller.ts":
/*!******************************************************!*\
  !*** ./apps/systems/src/mail/src/mail.controller.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const mail_service_1 = __webpack_require__(/*! ./mail.service */ "./apps/systems/src/mail/src/mail.service.ts");
const types_1 = __webpack_require__(/*! @common/types */ "./libs/common/types/index.ts");
let MailController = class MailController {
    constructor(service) {
        this.service = service;
    }
    send(data) {
        return this.service.send(data);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('email'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof types_1.MailMessage !== "undefined" && types_1.MailMessage) === "function" ? _b : Object]),
    __metadata("design:returntype", void 0)
], MailController.prototype, "send", null);
MailController = __decorate([
    (0, common_1.Controller)('auth'),
    __metadata("design:paramtypes", [typeof (_a = typeof mail_service_1.MailService !== "undefined" && mail_service_1.MailService) === "function" ? _a : Object])
], MailController);
exports.MailController = MailController;


/***/ }),

/***/ "./apps/systems/src/mail/src/mail.module.ts":
/*!**************************************************!*\
  !*** ./apps/systems/src/mail/src/mail.module.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailModule = void 0;
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const handlebars_adapter_1 = __webpack_require__(/*! @nestjs-modules/mailer/dist/adapters/handlebars.adapter */ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const mail_controller_1 = __webpack_require__(/*! ./mail.controller */ "./apps/systems/src/mail/src/mail.controller.ts");
const mail_service_1 = __webpack_require__(/*! ./mail.service */ "./apps/systems/src/mail/src/mail.service.ts");
let MailModule = class MailModule {
};
MailModule = __decorate([
    (0, common_1.Module)({
        imports: [
            mailer_1.MailerModule.forRootAsync({
                useFactory: async (config) => {
                    return {
                        transport: {
                            host: config.get('EMAIL_HOST'),
                            port: config.get('EMAIL_PORT'),
                            secure: config.get('EMAIL_SECURE'),
                            auth: {
                                user: config.get('EMAIL_USER'),
                                pass: config.get('EMAIL_PASS'),
                            },
                        },
                        template: {
                            adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        },
                        defaults: {
                            from: config.get('EMAIL_FROM'),
                        },
                    };
                },
                inject: [config_1.ConfigService],
            }),
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
        ],
        controllers: [mail_controller_1.MailController],
        providers: [mail_service_1.MailService],
    })
], MailModule);
exports.MailModule = MailModule;


/***/ }),

/***/ "./apps/systems/src/mail/src/mail.service.ts":
/*!***************************************************!*\
  !*** ./apps/systems/src/mail/src/mail.service.ts ***!
  \***************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailService = void 0;
const mailer_1 = __webpack_require__(/*! @nestjs-modules/mailer */ "@nestjs-modules/mailer");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const handlebars = __importStar(__webpack_require__(/*! handlebars */ "handlebars"));
const fs = __importStar(__webpack_require__(/*! fs */ "fs"));
let MailService = class MailService {
    constructor(mailerService) {
        this.mailerService = mailerService;
        this.logger = new common_1.Logger('Email');
    }
    async send(data) {
        const rootPath = process.cwd();
        const rootTemplatePath = `${rootPath}/storage/template/email/index.html`;
        let body;
        if (data.content.type === 'text') {
            body = data.content.data;
        }
        else if (data.content.type === 'html') {
            const html = fs
                .readFileSync(`${rootPath}/storage/template/email/${data.content.data}`, 'utf8')
                .toString();
            let commonHtml = fs.readFileSync(rootTemplatePath, 'utf8').toString();
            commonHtml = commonHtml.replace('{{ body }}', html);
            const template = handlebars.compile(commonHtml);
            body = template(Object.assign(Object.assign({}, data.params), { name: data.to }));
        }
        const mailOptions = {
            to: data.to,
            subject: data.title,
            attachments: [
                {
                    filename: 'logo.png',
                    path: `${rootPath}/storage/template/email/logo.png`,
                    cid: 'logo@reeme.com.vn',
                    contentDisposition: 'inline',
                },
            ],
        };
        if (data.content.type === 'text') {
            mailOptions.template = rootTemplatePath;
            mailOptions.context = Object.assign(Object.assign({}, data.params), { name: data.to, body });
        }
        else if (data.content.type === 'html') {
            mailOptions.html = body;
        }
        try {
            const response = await this.mailerService.sendMail(mailOptions);
            this.logger.log(`Email sent: ${response.response}, receiver: ${data.to}`);
        }
        catch (error) {
            this.logger.log(error);
        }
    }
};
MailService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof mailer_1.MailerService !== "undefined" && mailer_1.MailerService) === "function" ? _a : Object])
], MailService);
exports.MailService = MailService;


/***/ }),

/***/ "./apps/systems/src/notifications/src/dto/notifications.dto.ts":
/*!*********************************************************************!*\
  !*** ./apps/systems/src/notifications/src/dto/notifications.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class NotificationsDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'date when activity occurs', required: false }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], NotificationsDto.prototype, "createdDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date when activity is modified',
        required: false,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], NotificationsDto.prototype, "updatedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'date when activity is deleted',
        required: false,
    }),
    (0, class_validator_1.IsDateString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], NotificationsDto.prototype, "deletedDate", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'user who modifies activity', required: false }),
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], NotificationsDto.prototype, "updatedBy", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'userId property', required: true }),
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], NotificationsDto.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'data property', required: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], NotificationsDto.prototype, "data", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'type property', required: true }),
    __metadata("design:type", String)
], NotificationsDto.prototype, "type", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'isRead property', required: true }),
    (0, class_validator_1.IsBoolean)(),
    __metadata("design:type", Boolean)
], NotificationsDto.prototype, "isRead", void 0);
exports.NotificationsDto = NotificationsDto;


/***/ }),

/***/ "./apps/systems/src/notifications/src/notifications.controller.ts":
/*!************************************************************************!*\
  !*** ./apps/systems/src/notifications/src/notifications.controller.ts ***!
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
exports.NotificationsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const notifications_dto_1 = __webpack_require__(/*! ./dto/notifications.dto */ "./apps/systems/src/notifications/src/dto/notifications.dto.ts");
const notifications_service_1 = __webpack_require__(/*! ./notifications.service */ "./apps/systems/src/notifications/src/notifications.service.ts");
let NotificationsController = class NotificationsController {
    constructor(notificationsService) {
        this.notificationsService = notificationsService;
    }
    async getNotifications() {
        return await this.notificationsService.getNotifications();
    }
    async getNotificationsById(id) {
        return await this.notificationsService.getNotificationsById(id);
    }
    async updateNotifications(payload) {
        const Notifications = await this.notificationsService.updateNotifications(payload);
        return Notifications;
    }
    async addNotifications(dto) {
        return await this.notificationsService.addNotifications(dto);
    }
    async deleteNotifications(id) {
        return await this.notificationsService.deleteNotifications(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'getNotifications' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getNotifications", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_notifications_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "getNotificationsById", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_notifications'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "updateNotifications", null);
__decorate([
    (0, microservices_1.MessagePattern)('add_notifications'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof notifications_dto_1.NotificationsDto !== "undefined" && notifications_dto_1.NotificationsDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "addNotifications", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_notifications'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], NotificationsController.prototype, "deleteNotifications", null);
NotificationsController = __decorate([
    (0, common_1.Controller)('notifications'),
    __metadata("design:paramtypes", [typeof (_a = typeof notifications_service_1.NotificationsService !== "undefined" && notifications_service_1.NotificationsService) === "function" ? _a : Object])
], NotificationsController);
exports.NotificationsController = NotificationsController;


/***/ }),

/***/ "./apps/systems/src/notifications/src/notifications.module.ts":
/*!********************************************************************!*\
  !*** ./apps/systems/src/notifications/src/notifications.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationModule = void 0;
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const notifications_controller_1 = __webpack_require__(/*! ./notifications.controller */ "./apps/systems/src/notifications/src/notifications.controller.ts");
const notifications_service_1 = __webpack_require__(/*! ./notifications.service */ "./apps/systems/src/notifications/src/notifications.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/systems/src/notifications/src/prisma/prisma.module.ts");
let NotificationModule = class NotificationModule {
};
NotificationModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModuleNotification,
            redis_1.RedisModule.register('NOTIFICAITONS_CLIENT'),
        ],
        controllers: [notifications_controller_1.NotificationsController],
        providers: [notifications_service_1.NotificationsService],
    })
], NotificationModule);
exports.NotificationModule = NotificationModule;


/***/ }),

/***/ "./apps/systems/src/notifications/src/notifications.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/systems/src/notifications/src/notifications.service.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.NotificationsService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/systems/src/notifications/src/prisma/prisma.service.ts");
let NotificationsService = class NotificationsService extends http_1.HTTP {
    constructor(prisma) {
        super();
        this.prisma = prisma;
        this.prismaSelect = {
            createdDate: true,
            updatedDate: true,
            deletedDate: true,
            updatedBy: true,
            userId: false,
            user: {
                select: {
                    id: true,
                    createdDate: true,
                    createdBy: true,
                    updatedDate: true,
                    updatedBy: true,
                    deletedDate: true,
                    activatedDate: true,
                    email: true,
                    hash: true,
                    type: true,
                    firstName: true,
                    lastName: true,
                    roleId: true,
                    author: true,
                    editor: true,
                    activity: true,
                    customers: true,
                    userGeneralSetting: true,
                    usersCreated: true,
                    usersUpdated: true,
                    projects: true,
                    Tokens: true,
                    Notifications: true,
                },
            },
            data: true,
            type: true,
            isRead: true,
        };
    }
    async getNotifications() {
        const notifications = await this.prisma.notifications.findMany({
            where: {
                deletedDate: null,
            },
        });
        return this.setHttpRequest(common_1.HttpStatus.OK, 'Get all notifications', notifications, notifications.length);
    }
    async getNotificationsById(id) {
        try {
            const notifications = await this.prisma.notifications.findUnique({
                where: {
                    id: id,
                },
                select: this.prismaSelect,
            });
            if (!notifications)
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Notification not existed');
            if (notifications.deletedDate)
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Notification deleted');
            return this.setHttpRequest(common_1.HttpStatus.OK, 'get notification by id', notifications);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'get notification by id', error);
        }
    }
    async addNotifications(dto) {
        try {
            const notifications = await this.prisma.notifications.create({
                data: Object.assign({}, dto),
                select: this.prismaSelect,
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'add new notifications sucessfully', notifications);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'add new notifications getting error', error);
        }
    }
    async updateNotifications({ id, dto, }) {
        try {
            const notifications = await this.prisma.notifications.findUnique({
                where: { id },
            });
            if (!notifications)
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'notifications not existed');
            if (notifications.deletedDate)
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'notifications deleted');
            const notificationss = await this.prisma.notifications.update({
                where: {
                    id,
                },
                data: Object.assign({}, dto),
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'update notification success', notificationss);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'update notification error', error);
        }
    }
    async deleteNotifications(id) {
        try {
            const notifications = await this.prisma.notifications.findUnique({
                where: {
                    id,
                },
                select: this.prismaSelect,
            });
            if (!notifications)
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'notifications not existed');
            if (notifications.deletedDate)
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'notifications deleted');
            const response = await this.prisma.notifications.update({
                where: {
                    id: id,
                },
                data: {
                    deletedDate: new Date(),
                },
                select: this.prismaSelect,
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'delete sucessfully', response);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'delete Notifications error', error);
        }
    }
};
NotificationsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceNotification !== "undefined" && prisma_service_1.PrismaServiceNotification) === "function" ? _a : Object])
], NotificationsService);
exports.NotificationsService = NotificationsService;


/***/ }),

/***/ "./apps/systems/src/notifications/src/prisma/prisma.module.ts":
/*!********************************************************************!*\
  !*** ./apps/systems/src/notifications/src/prisma/prisma.module.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleNotification = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/systems/src/notifications/src/prisma/prisma.service.ts");
let PrismaModuleNotification = class PrismaModuleNotification {
};
PrismaModuleNotification = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceNotification],
        exports: [prisma_service_1.PrismaServiceNotification],
    })
], PrismaModuleNotification);
exports.PrismaModuleNotification = PrismaModuleNotification;


/***/ }),

/***/ "./apps/systems/src/notifications/src/prisma/prisma.service.ts":
/*!*********************************************************************!*\
  !*** ./apps/systems/src/notifications/src/prisma/prisma.service.ts ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceNotification = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
let PrismaServiceNotification = class PrismaServiceNotification extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([this.notifications.deleteMany()]);
    }
};
PrismaServiceNotification = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceNotification);
exports.PrismaServiceNotification = PrismaServiceNotification;


/***/ }),

/***/ "./apps/systems/src/packages/src/dto/create-package.dto.ts":
/*!*****************************************************************!*\
  !*** ./apps/systems/src/packages/src/dto/create-package.dto.ts ***!
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
var _a;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CreatePackageDto = void 0;
const utils_1 = __webpack_require__(/*! @common/utils */ "./libs/common/utils/index.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreatePackageDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof utils_1.CurrentUser !== "undefined" && utils_1.CurrentUser) === "function" ? _a : Object)
], CreatePackageDto.prototype, "currentUser", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePackageDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePackageDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePackageDto.prototype, "amount", void 0);
exports.CreatePackageDto = CreatePackageDto;


/***/ }),

/***/ "./apps/systems/src/packages/src/dto/edit-package.dto.ts":
/*!***************************************************************!*\
  !*** ./apps/systems/src/packages/src/dto/edit-package.dto.ts ***!
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
exports.EditPackageDto = void 0;
const utils_1 = __webpack_require__(/*! @common/utils */ "./libs/common/utils/index.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class EditPackageDto {
}
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof utils_1.CurrentUser !== "undefined" && utils_1.CurrentUser) === "function" ? _a : Object)
], EditPackageDto.prototype, "currentUser", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], EditPackageDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditPackageDto.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditPackageDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditPackageDto.prototype, "amount", void 0);
exports.EditPackageDto = EditPackageDto;


/***/ }),

/***/ "./apps/systems/src/packages/src/dto/index.ts":
/*!****************************************************!*\
  !*** ./apps/systems/src/packages/src/dto/index.ts ***!
  \****************************************************/
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
__exportStar(__webpack_require__(/*! ./create-package.dto */ "./apps/systems/src/packages/src/dto/create-package.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./edit-package.dto */ "./apps/systems/src/packages/src/dto/edit-package.dto.ts"), exports);


/***/ }),

/***/ "./apps/systems/src/packages/src/packages.controller.ts":
/*!**************************************************************!*\
  !*** ./apps/systems/src/packages/src/packages.controller.ts ***!
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
exports.PackagesController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const dto_1 = __webpack_require__(/*! ./dto */ "./apps/systems/src/packages/src/dto/index.ts");
const packages_service_1 = __webpack_require__(/*! ./packages.service */ "./apps/systems/src/packages/src/packages.service.ts");
let PackagesController = class PackagesController {
    constructor(packagesService) {
        this.packagesService = packagesService;
    }
    async getPackages(payload) {
        return await this.packagesService.getPackages(payload);
    }
    async getPackagesById(payload) {
        return await this.packagesService.getPackagesById(payload);
    }
    async addPackage(payload) {
        return await this.packagesService.addPackage(payload);
    }
    async updatePackage(payload) {
        const packages = await this.packagesService.updatePackage(payload);
        return packages;
    }
    async deletePackage(payload) {
        return await this.packagesService.deletePackage(payload);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_packages'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "getPackages", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_package_by_id'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "getPackagesById", null);
__decorate([
    (0, microservices_1.MessagePattern)('add_package'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof dto_1.CreatePackageDto !== "undefined" && dto_1.CreatePackageDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "addPackage", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_package'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof dto_1.EditPackageDto !== "undefined" && dto_1.EditPackageDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "updatePackage", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_package'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PackagesController.prototype, "deletePackage", null);
PackagesController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [typeof (_a = typeof packages_service_1.PackagesService !== "undefined" && packages_service_1.PackagesService) === "function" ? _a : Object])
], PackagesController);
exports.PackagesController = PackagesController;


/***/ }),

/***/ "./apps/systems/src/packages/src/packages.module.ts":
/*!**********************************************************!*\
  !*** ./apps/systems/src/packages/src/packages.module.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PackagesModule = void 0;
const query_prisma_1 = __webpack_require__(/*! @common/utils/dto/query.prisma */ "./libs/common/utils/dto/query.prisma.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const packages_controller_1 = __webpack_require__(/*! ./packages.controller */ "./apps/systems/src/packages/src/packages.controller.ts");
const packages_service_1 = __webpack_require__(/*! ./packages.service */ "./apps/systems/src/packages/src/packages.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/systems/src/packages/src/prisma/prisma.module.ts");
let PackagesModule = class PackagesModule {
};
PackagesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModulePackages,
        ],
        controllers: [packages_controller_1.PackagesController],
        providers: [packages_service_1.PackagesService, query_prisma_1.PrismaQuery, http_1.HTTP],
    })
], PackagesModule);
exports.PackagesModule = PackagesModule;


/***/ }),

/***/ "./apps/systems/src/packages/src/packages.service.ts":
/*!***********************************************************!*\
  !*** ./apps/systems/src/packages/src/packages.service.ts ***!
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
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PackagesService = void 0;
const query_prisma_1 = __webpack_require__(/*! @common/utils/dto/query.prisma */ "./libs/common/utils/dto/query.prisma.ts");
const requets_util_1 = __webpack_require__(/*! @common/utils/requets.util */ "./libs/common/utils/requets.util.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/systems/src/packages/src/prisma/prisma.service.ts");
let PackagesService = class PackagesService extends requets_util_1.RESTfulService {
    constructor(prisma, prismaQuery, http) {
        super();
        this.prisma = prisma;
        this.prismaQuery = prismaQuery;
        this.http = http;
        this.params = {
            item: {
                defaultSystemFields: false,
            },
            list: {},
        };
    }
    getDb() {
        const query = this.prismaQuery.where({ deletedDate: null });
        return query;
    }
    async getPackagesById(payload) {
        try {
            const { currentUser, id } = payload;
            const packageRetrieved = await this.prisma.packages.findFirst({
                where: {
                    id,
                    customerId: currentUser.customerOwnerId,
                },
            });
            if (!packageRetrieved || packageRetrieved.deletedDate) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.PACKAGES.NOT_FOUND');
            }
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.PACKAGES.GET_PACKAGE_SUCCESS', packageRetrieved);
        }
        catch (err) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR', err.message);
        }
    }
    async getPackages(payload) {
        var _a, _b;
        try {
            const { currentUser, paginationQuery } = payload;
            const pagination = await this.getLists(paginationQuery);
            const params = {
                take: pagination.take,
                skip: pagination.skip,
                cursor: pagination.cursor ? { id: pagination.cursor } : undefined,
                orderBy: (_a = pagination.sort) !== null && _a !== void 0 ? _a : {},
                where: (_b = pagination.search) !== null && _b !== void 0 ? _b : {},
            };
            const whereQuery = Object.assign(Object.assign({}, params.where), { customerId: currentUser.customerOwnerId });
            const [totalPackages, packages] = await Promise.all([
                this.prisma.packages.count({
                    where: whereQuery,
                }),
                this.prisma.packages.findMany({
                    take: params.take,
                    skip: params.skip,
                    cursor: params.cursor,
                    where: whereQuery,
                    orderBy: params.orderBy,
                }),
            ]);
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.PACKAGES.GET_PACKAGE_LIST_SUCCESS', packages, totalPackages);
        }
        catch (err) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR', err.message);
        }
    }
    async addPackage(payload) {
        try {
            const { currentUser } = payload, data = __rest(payload, ["currentUser"]);
            const packageCreated = await this.prisma.packages.create({
                data: Object.assign(Object.assign({}, data), { createdBy: currentUser.id, customerId: currentUser.customerOwnerId }),
            });
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.PACKAGES.ADD_SUCCESS', packageCreated);
        }
        catch (err) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR', err.message);
        }
    }
    async updatePackage(payload) {
        try {
            const { id, currentUser } = payload, data = __rest(payload, ["id", "currentUser"]);
            const packageRetrieved = await this.prisma.packages.findFirst({
                where: {
                    id,
                    customerId: currentUser.customerOwnerId,
                },
            });
            if (!packageRetrieved || packageRetrieved.deletedDate)
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.PACKAGES.NOT_FOUND');
            const packageUpdated = await this.prisma.packages.update({
                where: {
                    id,
                },
                data: Object.assign(Object.assign({}, data), { updatedBy: currentUser.id }),
            });
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.PACKAGES.UPDATE_SUCCESS', packageUpdated);
        }
        catch (err) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR', err.message);
        }
    }
    async deletePackage(payload) {
        const { currentUser, id } = payload;
        try {
            const packageRetrieved = await this.prisma.packages.findFirst({
                where: {
                    id,
                    customerId: currentUser.customerOwnerId,
                },
            });
            if (!packageRetrieved || packageRetrieved.deletedDate)
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.PACKAGES.NOT_FOUND');
            await this.prisma.packages.update({
                where: {
                    id,
                },
                data: {
                    deletedDate: new Date(),
                },
            });
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.PACKAGES.DELETE_SUCCESS');
        }
        catch (err) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR', err.message);
        }
    }
};
PackagesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServicePackages !== "undefined" && prisma_service_1.PrismaServicePackages) === "function" ? _a : Object, typeof (_b = typeof query_prisma_1.PrismaQuery !== "undefined" && query_prisma_1.PrismaQuery) === "function" ? _b : Object, typeof (_c = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _c : Object])
], PackagesService);
exports.PackagesService = PackagesService;


/***/ }),

/***/ "./apps/systems/src/packages/src/prisma/prisma.module.ts":
/*!***************************************************************!*\
  !*** ./apps/systems/src/packages/src/prisma/prisma.module.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModulePackages = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/systems/src/packages/src/prisma/prisma.service.ts");
let PrismaModulePackages = class PrismaModulePackages {
};
PrismaModulePackages = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServicePackages],
        exports: [prisma_service_1.PrismaServicePackages],
    })
], PrismaModulePackages);
exports.PrismaModulePackages = PrismaModulePackages;


/***/ }),

/***/ "./apps/systems/src/packages/src/prisma/prisma.service.ts":
/*!****************************************************************!*\
  !*** ./apps/systems/src/packages/src/prisma/prisma.service.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServicePackages = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
let PrismaServicePackages = class PrismaServicePackages extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([this.packages.deleteMany()]);
    }
};
PrismaServicePackages = __decorate([
    (0, common_1.Injectable)()
], PrismaServicePackages);
exports.PrismaServicePackages = PrismaServicePackages;


/***/ }),

/***/ "./apps/systems/src/permissions/src/dto/permissionDto.ts":
/*!***************************************************************!*\
  !*** ./apps/systems/src/permissions/src/dto/permissionDto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class PermissionDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'User create role', required: false }),
    __metadata("design:type", Number)
], PermissionDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'User update role', required: false }),
    __metadata("design:type", Number)
], PermissionDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PermissionDto.prototype, "roleId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], PermissionDto.prototype, "permissions", void 0);
exports.PermissionDto = PermissionDto;


/***/ }),

/***/ "./apps/systems/src/permissions/src/permissions.controller.ts":
/*!********************************************************************!*\
  !*** ./apps/systems/src/permissions/src/permissions.controller.ts ***!
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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a, _b, _c;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionsController = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const permissions_service_1 = __webpack_require__(/*! ./permissions.service */ "./apps/systems/src/permissions/src/permissions.service.ts");
const permissionDto_1 = __webpack_require__(/*! ./dto/permissionDto */ "./apps/systems/src/permissions/src/dto/permissionDto.ts");
let PermissionsController = class PermissionsController extends http_1.HTTP {
    constructor(permissionService) {
        super();
        this.permissionService = permissionService;
    }
    async getPermissions() {
        return await this.permissionService.getPermissions();
    }
    async getPermission(id) {
        return await this.permissionService.getPermissionById(id);
    }
    async addPermission(dto) {
        return await this.permissionService.savePermission(dto);
    }
    async updatePermission(payload) {
        return await this.permissionService.updatePermission(payload);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_permissions'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "getPermissions", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_permission_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "getPermission", null);
__decorate([
    (0, microservices_1.MessagePattern)('save_permission'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof permissionDto_1.PermissionDto !== "undefined" && permissionDto_1.PermissionDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "addPermission", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_permission'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof permissionDto_1.PermissionDto !== "undefined" && permissionDto_1.PermissionDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], PermissionsController.prototype, "updatePermission", null);
PermissionsController = __decorate([
    (0, common_1.Controller)('permissions'),
    __metadata("design:paramtypes", [typeof (_a = typeof permissions_service_1.PermissionsService !== "undefined" && permissions_service_1.PermissionsService) === "function" ? _a : Object])
], PermissionsController);
exports.PermissionsController = PermissionsController;


/***/ }),

/***/ "./apps/systems/src/permissions/src/permissions.module.ts":
/*!****************************************************************!*\
  !*** ./apps/systems/src/permissions/src/permissions.module.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionsModule = void 0;
const pipe_1 = __webpack_require__(/*! @common/pipe */ "./libs/common/pipe/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/systems/src/permissions/src/prisma/prisma.module.ts");
const permissions_controller_1 = __webpack_require__(/*! ./permissions.controller */ "./apps/systems/src/permissions/src/permissions.controller.ts");
const permissions_service_1 = __webpack_require__(/*! ./permissions.service */ "./apps/systems/src/permissions/src/permissions.service.ts");
let PermissionsModule = class PermissionsModule {
};
PermissionsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModulePermission,
        ],
        controllers: [permissions_controller_1.PermissionsController],
        providers: [
            permissions_service_1.PermissionsService,
            {
                provide: core_1.APP_PIPE,
                useClass: pipe_1.RpcValidationPipe,
            },
        ],
    })
], PermissionsModule);
exports.PermissionsModule = PermissionsModule;


/***/ }),

/***/ "./apps/systems/src/permissions/src/permissions.service.ts":
/*!*****************************************************************!*\
  !*** ./apps/systems/src/permissions/src/permissions.service.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PermissionsService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/systems/src/permissions/src/prisma/prisma.service.ts");
let PermissionsService = class PermissionsService extends http_1.HTTP {
    constructor(prisma, config) {
        super();
        this.prisma = prisma;
        this.config = config;
    }
    async getPermissions() {
        const permissions = await this.prisma.permission.findMany();
        return this.setHttpRequest(200, 'Authorize', permissions);
    }
    async getPermissionById(id) {
        try {
            const role = await this.prisma.permission.findUnique({
                where: {
                    id,
                },
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'get_permissions_by_id', role);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
        }
    }
    async savePermission(dto) {
        try {
            const roleId = dto.roleId;
            return this.prisma.$transaction(async (tx) => {
                const promises = [];
                dto.permissions.forEach(name => {
                    promises.push(tx.permission.upsert({
                        where: {
                            name,
                        },
                        create: {
                            name,
                            roles: {
                                create: [{ role: { connect: { id: roleId } } }]
                            }
                        },
                        update: {
                            roles: {
                                deleteMany: [{ roleId }],
                                create: [{ role: { connect: { id: roleId } } }]
                            }
                        }
                    }));
                });
                const response = await Promise.all(promises);
                return this.setHttpRequest(common_1.HttpStatus.OK, 'save_permission_success', response);
            });
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'role_not_found', error);
        }
    }
    async updatePermission(dto) {
        var _a;
        try {
            const roleId = dto.roleId;
            const permission = (_a = dto.permissions) === null || _a === void 0 ? void 0 : _a.map(id => ({ permissionId: id }));
            const role = await this.prisma.role.update({
                where: {
                    id: roleId
                },
                data: {
                    permissions: {
                        deleteMany: {},
                        createMany: {
                            data: permission
                        }
                    }
                },
                include: {
                    permissions: {
                        select: {
                            permission: true
                        }
                    }
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'update_permissions_success', role);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Permission not found');
        }
    }
};
PermissionsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServicePermission !== "undefined" && prisma_service_1.PrismaServicePermission) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], PermissionsService);
exports.PermissionsService = PermissionsService;


/***/ }),

/***/ "./apps/systems/src/permissions/src/prisma/prisma.module.ts":
/*!******************************************************************!*\
  !*** ./apps/systems/src/permissions/src/prisma/prisma.module.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModulePermission = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/systems/src/permissions/src/prisma/prisma.service.ts");
let PrismaModulePermission = class PrismaModulePermission {
};
PrismaModulePermission = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServicePermission],
        exports: [prisma_service_1.PrismaServicePermission],
    })
], PrismaModulePermission);
exports.PrismaModulePermission = PrismaModulePermission;


/***/ }),

/***/ "./apps/systems/src/permissions/src/prisma/prisma.service.ts":
/*!*******************************************************************!*\
  !*** ./apps/systems/src/permissions/src/prisma/prisma.service.ts ***!
  \*******************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServicePermission = void 0;
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PrismaServicePermission = class PrismaServicePermission extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([this.permission.deleteMany()]);
    }
};
PrismaServicePermission = __decorate([
    (0, common_1.Injectable)()
], PrismaServicePermission);
exports.PrismaServicePermission = PrismaServicePermission;


/***/ }),

/***/ "./apps/systems/src/roles/src/dto/roleDto.ts":
/*!***************************************************!*\
  !*** ./apps/systems/src/roles/src/dto/roleDto.ts ***!
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
exports.RoleDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
class RoleDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'User create role', required: false }),
    __metadata("design:type", Number)
], RoleDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    (0, swagger_1.ApiProperty)({ description: 'User update role', required: false }),
    __metadata("design:type", Number)
], RoleDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RoleDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], RoleDto.prototype, "code", void 0);
exports.RoleDto = RoleDto;


/***/ }),

/***/ "./apps/systems/src/roles/src/prisma/prisma.module.ts":
/*!************************************************************!*\
  !*** ./apps/systems/src/roles/src/prisma/prisma.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleRole = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/systems/src/roles/src/prisma/prisma.service.ts");
let PrismaModuleRole = class PrismaModuleRole {
};
PrismaModuleRole = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceRole],
        exports: [prisma_service_1.PrismaServiceRole],
    })
], PrismaModuleRole);
exports.PrismaModuleRole = PrismaModuleRole;


/***/ }),

/***/ "./apps/systems/src/roles/src/prisma/prisma.service.ts":
/*!*************************************************************!*\
  !*** ./apps/systems/src/roles/src/prisma/prisma.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceRole = void 0;
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PrismaServiceRole = class PrismaServiceRole extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([this.role.deleteMany()]);
    }
};
PrismaServiceRole = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceRole);
exports.PrismaServiceRole = PrismaServiceRole;


/***/ }),

/***/ "./apps/systems/src/roles/src/roles.controller.ts":
/*!********************************************************!*\
  !*** ./apps/systems/src/roles/src/roles.controller.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesController = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const roles_service_1 = __webpack_require__(/*! ./roles.service */ "./apps/systems/src/roles/src/roles.service.ts");
const roleDto_1 = __webpack_require__(/*! ./dto/roleDto */ "./apps/systems/src/roles/src/dto/roleDto.ts");
let RolesController = class RolesController extends http_1.HTTP {
    constructor(roleService) {
        super();
        this.roleService = roleService;
    }
    async getRoles() {
        return await this.roleService.getRoles();
    }
    async getUser(id) {
        return await this.roleService.getRoleById(id);
    }
    async addRole(dto) {
        return await this.roleService.addRole(dto);
    }
    async updateRole(payload) {
        return await this.roleService.updateRole(payload);
    }
    async deleteRole(id) {
        return await this.roleService.deleteRole(id);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_roles'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getRoles", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_role_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "getUser", null);
__decorate([
    (0, microservices_1.MessagePattern)('add_role'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof roleDto_1.RoleDto !== "undefined" && roleDto_1.RoleDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "addRole", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_role'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "updateRole", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_role'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], RolesController.prototype, "deleteRole", null);
RolesController = __decorate([
    (0, common_1.Controller)('roles'),
    __metadata("design:paramtypes", [typeof (_a = typeof roles_service_1.RolesService !== "undefined" && roles_service_1.RolesService) === "function" ? _a : Object])
], RolesController);
exports.RolesController = RolesController;


/***/ }),

/***/ "./apps/systems/src/roles/src/roles.module.ts":
/*!****************************************************!*\
  !*** ./apps/systems/src/roles/src/roles.module.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RolesModule = void 0;
const pipe_1 = __webpack_require__(/*! @common/pipe */ "./libs/common/pipe/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/systems/src/roles/src/prisma/prisma.module.ts");
const roles_controller_1 = __webpack_require__(/*! ./roles.controller */ "./apps/systems/src/roles/src/roles.controller.ts");
const roles_service_1 = __webpack_require__(/*! ./roles.service */ "./apps/systems/src/roles/src/roles.service.ts");
let RolesModule = class RolesModule {
};
RolesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModuleRole,
        ],
        controllers: [roles_controller_1.RolesController],
        providers: [
            roles_service_1.RolesService,
            {
                provide: core_1.APP_PIPE,
                useClass: pipe_1.RpcValidationPipe,
            },
        ],
    })
], RolesModule);
exports.RolesModule = RolesModule;


/***/ }),

/***/ "./apps/systems/src/roles/src/roles.service.ts":
/*!*****************************************************!*\
  !*** ./apps/systems/src/roles/src/roles.service.ts ***!
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
exports.RolesService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/systems/src/roles/src/prisma/prisma.service.ts");
let RolesService = class RolesService extends http_1.HTTP {
    constructor(prisma, config) {
        super();
        this.prisma = prisma;
        this.config = config;
    }
    async getRoles() {
        const users = await this.prisma.role.findMany({
            include: {
                permissions: {
                    select: {
                        permission: true
                    }
                }
            }
        });
        return this.setHttpRequest(common_1.HttpStatus.OK, 'Authorize', users);
    }
    async getRoleById(id) {
        try {
            const role = await this.prisma.role.findUnique({
                where: {
                    id,
                },
                include: {
                    permissions: {
                        select: {
                            permission: true
                        }
                    }
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'get_role_by_id', role);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
        }
    }
    async addRole(dto) {
        try {
            const role = await this.prisma.role.create({
                data: Object.assign({}, dto),
                include: {
                    permissions: {
                        select: {
                            permission: true
                        }
                    }
                }
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'add_role_success', role);
        }
        catch (error) {
            console.log(error, '====');
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'add_role_error', error);
        }
    }
    async updateRole({ id, dto }) {
        try {
            const role = await this.prisma.role.update({
                where: {
                    id,
                },
                data: Object.assign({}, dto),
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'update_users_success', role);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Internal Server Error');
        }
    }
    async deleteRole(id) {
        try {
            return this.prisma.$transaction(async (tx) => {
                await tx.role.update({
                    where: {
                        id
                    },
                    data: {
                        permissions: {
                            deleteMany: {},
                        }
                    },
                });
                const role = await tx.role.delete({
                    where: {
                        id,
                    },
                    include: {
                        permissions: {
                            select: {
                                permission: true
                            }
                        }
                    }
                });
                return this.setHttpRequest(common_1.HttpStatus.OK, 'delete_role_success', role);
            });
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'Role Not Found');
        }
    }
};
RolesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceRole !== "undefined" && prisma_service_1.PrismaServiceRole) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object])
], RolesService);
exports.RolesService = RolesService;


/***/ }),

/***/ "./apps/systems/src/systems.module.ts":
/*!********************************************!*\
  !*** ./apps/systems/src/systems.module.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SystemsModule = void 0;
const pipe_1 = __webpack_require__(/*! @common/pipe */ "./libs/common/pipe/index.ts");
const mail_module_1 = __webpack_require__(/*! @apps/systems/src/mail/src/mail.module */ "./apps/systems/src/mail/src/mail.module.ts");
const activity_logs_module_1 = __webpack_require__(/*! @apps/systems/src/activity_logs/src/activity_logs.module */ "./apps/systems/src/activity_logs/src/activity_logs.module.ts");
const auth_module_1 = __webpack_require__(/*! @apps/systems/src/auth/src/auth.module */ "./apps/systems/src/auth/src/auth.module.ts");
const invoices_module_1 = __webpack_require__(/*! @apps/systems/src/invoices/src/invoices.module */ "./apps/systems/src/invoices/src/invoices.module.ts");
const users_module_1 = __webpack_require__(/*! @apps/systems/src/users/src/users.module */ "./apps/systems/src/users/src/users.module.ts");
const roles_module_1 = __webpack_require__(/*! @apps/systems/src/roles/src/roles.module */ "./apps/systems/src/roles/src/roles.module.ts");
const permissions_module_1 = __webpack_require__(/*! @apps/systems/src/permissions/src/permissions.module */ "./apps/systems/src/permissions/src/permissions.module.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const user_general_settings_module_1 = __webpack_require__(/*! @apps/systems/src/user_general_settings/src/user_general_settings.module */ "./apps/systems/src/user_general_settings/src/user_general_settings.module.ts");
const notifications_module_1 = __webpack_require__(/*! ./notifications/src/notifications.module */ "./apps/systems/src/notifications/src/notifications.module.ts");
const packages_module_1 = __webpack_require__(/*! ./packages/src/packages.module */ "./apps/systems/src/packages/src/packages.module.ts");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
let SystemsModule = class SystemsModule {
};
SystemsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            activity_logs_module_1.ActivityLogsModule,
            auth_module_1.AuthModule,
            user_general_settings_module_1.UserGeneralSettingsModule,
            invoices_module_1.InvoicesModule,
            users_module_1.UsersModule,
            mail_module_1.MailModule,
            notifications_module_1.NotificationModule,
            roles_module_1.RolesModule,
            permissions_module_1.PermissionsModule,
            packages_module_1.PackagesModule,
        ],
        providers: [
            {
                provide: core_1.APP_PIPE,
                useClass: pipe_1.RpcValidationPipe,
            },
        ],
    })
], SystemsModule);
exports.SystemsModule = SystemsModule;


/***/ }),

/***/ "./apps/systems/src/user_general_settings/src/dto/create_user_general.dto.ts":
/*!***********************************************************************************!*\
  !*** ./apps/systems/src/user_general_settings/src/dto/create_user_general.dto.ts ***!
  \***********************************************************************************/
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
exports.CreateUserGeneralSettingsDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
class CreateUserGeneralSettingsDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserGeneralSettingsDto.prototype, "createdBy", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], CreateUserGeneralSettingsDto.prototype, "createdDate", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreateUserGeneralSettingsDto.prototype, "userId", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(mysql_1.UserGeneralSettings_DefaultLanguage),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof mysql_1.UserGeneralSettings_DefaultLanguage !== "undefined" && mysql_1.UserGeneralSettings_DefaultLanguage) === "function" ? _b : Object)
], CreateUserGeneralSettingsDto.prototype, "defaultLanguage", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(mysql_1.UserGeneralSettings_Theme),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof mysql_1.UserGeneralSettings_Theme !== "undefined" && mysql_1.UserGeneralSettings_Theme) === "function" ? _c : Object)
], CreateUserGeneralSettingsDto.prototype, "theme", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserGeneralSettingsDto.prototype, "sessionTimeout", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserGeneralSettingsDto.prototype, "standardCoalRate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserGeneralSettingsDto.prototype, "co2ReductionRate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserGeneralSettingsDto.prototype, "treesSavedRate", void 0);
exports.CreateUserGeneralSettingsDto = CreateUserGeneralSettingsDto;


/***/ }),

/***/ "./apps/systems/src/user_general_settings/src/dto/edit_user_general_settings.dto.ts":
/*!******************************************************************************************!*\
  !*** ./apps/systems/src/user_general_settings/src/dto/edit_user_general_settings.dto.ts ***!
  \******************************************************************************************/
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
exports.EditUserGeneralSettingsDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
class EditUserGeneralSettingsDto {
}
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditUserGeneralSettingsDto.prototype, "updatedBy", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_a = typeof Date !== "undefined" && Date) === "function" ? _a : Object)
], EditUserGeneralSettingsDto.prototype, "updatedDate", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof Date !== "undefined" && Date) === "function" ? _b : Object)
], EditUserGeneralSettingsDto.prototype, "deletedDate", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], EditUserGeneralSettingsDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(mysql_1.UserGeneralSettings_DefaultLanguage),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_c = typeof mysql_1.UserGeneralSettings_DefaultLanguage !== "undefined" && mysql_1.UserGeneralSettings_DefaultLanguage) === "function" ? _c : Object)
], EditUserGeneralSettingsDto.prototype, "defaultLanguage", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(mysql_1.UserGeneralSettings_Theme),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_d = typeof mysql_1.UserGeneralSettings_Theme !== "undefined" && mysql_1.UserGeneralSettings_Theme) === "function" ? _d : Object)
], EditUserGeneralSettingsDto.prototype, "theme", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditUserGeneralSettingsDto.prototype, "sessionTimeout", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditUserGeneralSettingsDto.prototype, "standardCoalRate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditUserGeneralSettingsDto.prototype, "co2ReductionRate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditUserGeneralSettingsDto.prototype, "treesSavedRate", void 0);
exports.EditUserGeneralSettingsDto = EditUserGeneralSettingsDto;


/***/ }),

/***/ "./apps/systems/src/user_general_settings/src/prisma/prisma.module.ts":
/*!****************************************************************************!*\
  !*** ./apps/systems/src/user_general_settings/src/prisma/prisma.module.ts ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleUserGeneralSettings = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/systems/src/user_general_settings/src/prisma/prisma.service.ts");
let PrismaModuleUserGeneralSettings = class PrismaModuleUserGeneralSettings {
};
PrismaModuleUserGeneralSettings = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceUserGeneralSettings],
        exports: [prisma_service_1.PrismaServiceUserGeneralSettings],
    })
], PrismaModuleUserGeneralSettings);
exports.PrismaModuleUserGeneralSettings = PrismaModuleUserGeneralSettings;


/***/ }),

/***/ "./apps/systems/src/user_general_settings/src/prisma/prisma.service.ts":
/*!*****************************************************************************!*\
  !*** ./apps/systems/src/user_general_settings/src/prisma/prisma.service.ts ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceUserGeneralSettings = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
let PrismaServiceUserGeneralSettings = class PrismaServiceUserGeneralSettings extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([this.userGeneralSettings.deleteMany()]);
    }
};
PrismaServiceUserGeneralSettings = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceUserGeneralSettings);
exports.PrismaServiceUserGeneralSettings = PrismaServiceUserGeneralSettings;


/***/ }),

/***/ "./apps/systems/src/user_general_settings/src/user_general_settings.controller.ts":
/*!****************************************************************************************!*\
  !*** ./apps/systems/src/user_general_settings/src/user_general_settings.controller.ts ***!
  \****************************************************************************************/
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
exports.UserGeneralSettingsController = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const user_general_settings_service_1 = __webpack_require__(/*! ./user_general_settings.service */ "./apps/systems/src/user_general_settings/src/user_general_settings.service.ts");
const create_user_general_dto_1 = __webpack_require__(/*! ./dto/create_user_general.dto */ "./apps/systems/src/user_general_settings/src/dto/create_user_general.dto.ts");
const edit_user_general_settings_dto_1 = __webpack_require__(/*! ./dto/edit_user_general_settings.dto */ "./apps/systems/src/user_general_settings/src/dto/edit_user_general_settings.dto.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
let UserGeneralSettingsController = class UserGeneralSettingsController {
    constructor(userGeneralSettingsService) {
        this.userGeneralSettingsService = userGeneralSettingsService;
    }
    async getUserGeneralSettings() {
        return await this.userGeneralSettingsService.getUserGeneralSettings();
    }
    async getUserGeneralSettingById(id) {
        return await this.userGeneralSettingsService.getUserGeneralSettingById(id);
    }
    async addAlertSetting(dto) {
        return await this.userGeneralSettingsService.addUserGeneralSetting(dto);
    }
    async updateUserGeneralSetting(dto) {
        const alertSetting = await this.userGeneralSettingsService.updateUserGeneralSetting(dto);
        return alertSetting;
    }
};
__decorate([
    (0, microservices_1.MessagePattern)({ cmd: 'get_user_general_settings' }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], UserGeneralSettingsController.prototype, "getUserGeneralSettings", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_user_general_setting_by_id'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UserGeneralSettingsController.prototype, "getUserGeneralSettingById", null);
__decorate([
    (0, microservices_1.MessagePattern)('add_user_general_setting'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, microservices_1.Payload)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_b = typeof create_user_general_dto_1.CreateUserGeneralSettingsDto !== "undefined" && create_user_general_dto_1.CreateUserGeneralSettingsDto) === "function" ? _b : Object]),
    __metadata("design:returntype", Promise)
], UserGeneralSettingsController.prototype, "addAlertSetting", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_user_general_setting'),
    (0, common_1.UseFilters)(new http_1.RpcValidationFilter()),
    __param(0, (0, microservices_1.Payload)(new common_1.ValidationPipe({ whitelist: true }))),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_c = typeof edit_user_general_settings_dto_1.EditUserGeneralSettingsDto !== "undefined" && edit_user_general_settings_dto_1.EditUserGeneralSettingsDto) === "function" ? _c : Object]),
    __metadata("design:returntype", Promise)
], UserGeneralSettingsController.prototype, "updateUserGeneralSetting", null);
UserGeneralSettingsController = __decorate([
    (0, common_1.Controller)('user-general-settings'),
    __metadata("design:paramtypes", [typeof (_a = typeof user_general_settings_service_1.UserGeneralSettingsService !== "undefined" && user_general_settings_service_1.UserGeneralSettingsService) === "function" ? _a : Object])
], UserGeneralSettingsController);
exports.UserGeneralSettingsController = UserGeneralSettingsController;


/***/ }),

/***/ "./apps/systems/src/user_general_settings/src/user_general_settings.module.ts":
/*!************************************************************************************!*\
  !*** ./apps/systems/src/user_general_settings/src/user_general_settings.module.ts ***!
  \************************************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UserGeneralSettingsModule = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const user_general_settings_controller_1 = __webpack_require__(/*! ./user_general_settings.controller */ "./apps/systems/src/user_general_settings/src/user_general_settings.controller.ts");
const user_general_settings_service_1 = __webpack_require__(/*! ./user_general_settings.service */ "./apps/systems/src/user_general_settings/src/user_general_settings.service.ts");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/systems/src/user_general_settings/src/prisma/prisma.module.ts");
let UserGeneralSettingsModule = class UserGeneralSettingsModule {
};
UserGeneralSettingsModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModuleUserGeneralSettings,
        ],
        controllers: [user_general_settings_controller_1.UserGeneralSettingsController],
        providers: [user_general_settings_service_1.UserGeneralSettingsService],
    })
], UserGeneralSettingsModule);
exports.UserGeneralSettingsModule = UserGeneralSettingsModule;


/***/ }),

/***/ "./apps/systems/src/user_general_settings/src/user_general_settings.service.ts":
/*!*************************************************************************************!*\
  !*** ./apps/systems/src/user_general_settings/src/user_general_settings.service.ts ***!
  \*************************************************************************************/
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
exports.UserGeneralSettingsService = void 0;
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/systems/src/user_general_settings/src/prisma/prisma.service.ts");
let UserGeneralSettingsService = class UserGeneralSettingsService extends http_1.HTTP {
    constructor(prisma) {
        super();
        this.prisma = prisma;
    }
    async getUserGeneralSettings() {
        const userGeneralSettings = await this.prisma.userGeneralSettings.findMany({
            where: {
                deletedDate: null,
            },
        });
        return this.setHttpRequest(common_1.HttpStatus.OK, 'systems.SETTINGS.GET_ITEMS', userGeneralSettings, userGeneralSettings.length);
    }
    async getUserGeneralSettingById(id) {
        try {
            const userGeneralSetting = await this.prisma.userGeneralSettings.findUnique({
                where: {
                    id,
                },
            });
            if (!userGeneralSetting) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.SETTINGS.ITEM_NOT_EXIST');
            }
            else if (userGeneralSetting.deletedDate) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.SETTINGS.ITEM_DELETED');
            }
            return this.setHttpRequest(common_1.HttpStatus.OK, 'systems.SETTINGS.GET_ITEM', userGeneralSetting);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.SETTINGS.GET_ITEM_FAILED', error);
        }
    }
    async addUserGeneralSetting(dto) {
        try {
            const userGeneralSetting = await this.prisma.userGeneralSettings.create({
                data: dto,
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'systems.SETTINGS.ADD_ITEM', userGeneralSetting);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.SETTINGS.ADD_ITEM_FAILED', error);
        }
    }
    async updateUserGeneralSetting(dto) {
        try {
            const userGeneralSetting = await this.prisma.userGeneralSettings.findUnique({
                where: {
                    id: dto.id,
                },
            });
            if (!userGeneralSetting) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.SETTINGS.ITEM_NOT_EXIST');
            }
            else if (userGeneralSetting.deletedDate) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.SETTINGS.ITEM_DELETED');
            }
            const updatedUserGeneralSetting = await this.prisma.userGeneralSettings.update({
                where: {
                    id: dto.id,
                },
                data: Object.assign({}, dto),
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'systems.SETTINGS.UPDATE_SUCCESS', updatedUserGeneralSetting);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.SETTINGS.UPDATE_SUCCESS_FAILED', error);
        }
    }
    async deleteUserGeneralSetting({ userId, id }) {
        try {
            const userGeneralSetting = await this.prisma.userGeneralSettings.findUnique({
                where: {
                    id,
                },
            });
            if (!userGeneralSetting) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.SETTINGS.ITEM_NOT_EXIST');
            }
            const deletedUserGeneralSetting = await this.prisma.userGeneralSettings.update({
                where: {
                    id,
                },
                data: {
                    updatedBy: userId,
                    deletedDate: new Date(),
                },
            });
            return this.setHttpRequest(common_1.HttpStatus.OK, 'systems.SETTINGS.DELETE_SUCCESS', deletedUserGeneralSetting);
        }
        catch (error) {
            return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.SETTINGS.DELETE_SUCCESS_FAILED', error);
        }
    }
};
UserGeneralSettingsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceUserGeneralSettings !== "undefined" && prisma_service_1.PrismaServiceUserGeneralSettings) === "function" ? _a : Object])
], UserGeneralSettingsService);
exports.UserGeneralSettingsService = UserGeneralSettingsService;


/***/ }),

/***/ "./apps/systems/src/users/src/common/index.ts":
/*!****************************************************!*\
  !*** ./apps/systems/src/users/src/common/index.ts ***!
  \****************************************************/
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
__exportStar(__webpack_require__(/*! ./query */ "./apps/systems/src/users/src/common/query/index.ts"), exports);


/***/ }),

/***/ "./apps/systems/src/users/src/common/query/index.ts":
/*!**********************************************************!*\
  !*** ./apps/systems/src/users/src/common/query/index.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.filterFieldQuery = exports.searchQuery = exports.fieldsIncluded = void 0;
exports.fieldsIncluded = {
    id: true,
    createdDate: true,
    email: true,
    firstName: true,
    lastName: true,
    phone: true,
    roleId: true,
    status: true,
    avatar: true,
    projects: {
        select: {
            project: true,
        },
    },
    customers: {
        select: {
            customer: true,
        },
    },
    userGeneralSetting: true,
    role: {
        select: {
            id: true,
            name: true,
            code: true,
            permissions: {
                select: {
                    permission: true,
                },
            },
        },
    },
};
const searchQuery = (keyword) => {
    return [
        {
            email: {
                contains: keyword || '',
            },
        },
        {
            phone: {
                contains: keyword || '',
            },
        },
        {
            firstName: {
                contains: keyword || '',
            },
        },
        {
            lastName: {
                contains: keyword || '',
            },
        },
    ];
};
exports.searchQuery = searchQuery;
const filterFieldQuery = (field, fieldData) => {
    if (!(fieldData === null || fieldData === void 0 ? void 0 : fieldData.length)) {
        return;
    }
    return {
        some: {
            [`${field}`]: {
                in: fieldData,
            },
        },
    };
};
exports.filterFieldQuery = filterFieldQuery;


/***/ }),

/***/ "./apps/systems/src/users/src/dto/change-password.dto.ts":
/*!***************************************************************!*\
  !*** ./apps/systems/src/users/src/dto/change-password.dto.ts ***!
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
exports.ChangePasswordDto = void 0;
const utils_1 = __webpack_require__(/*! @common/utils */ "./libs/common/utils/index.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class ChangePasswordDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], ChangePasswordDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof utils_1.CurrentUser !== "undefined" && utils_1.CurrentUser) === "function" ? _a : Object)
], ChangePasswordDto.prototype, "currentUser", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "currentPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "newPassword", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], ChangePasswordDto.prototype, "confirmPassword", void 0);
exports.ChangePasswordDto = ChangePasswordDto;


/***/ }),

/***/ "./apps/systems/src/users/src/dto/create-user.dto.ts":
/*!***********************************************************!*\
  !*** ./apps/systems/src/users/src/dto/create-user.dto.ts ***!
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
exports.CreateUserDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class CreateUserDto {
}
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateUserDto.prototype, "currentUser", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "password", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateUserDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "customerOwnerId", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateUserDto.prototype, "projects", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateUserDto.prototype, "roleId", void 0);
exports.CreateUserDto = CreateUserDto;


/***/ }),

/***/ "./apps/systems/src/users/src/dto/edit-user.dto.ts":
/*!*********************************************************!*\
  !*** ./apps/systems/src/users/src/dto/edit-user.dto.ts ***!
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
var _a, _b;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.EditUserDto = void 0;
const utils_1 = __webpack_require__(/*! @common/utils */ "./libs/common/utils/index.ts");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const mysql_1 = __webpack_require__(/*! @prisma/mysql */ "@prisma/mysql");
class EditUserDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], EditUserDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", typeof (_a = typeof utils_1.CurrentUser !== "undefined" && utils_1.CurrentUser) === "function" ? _a : Object)
], EditUserDto.prototype, "currentUser", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditUserDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditUserDto.prototype, "firstName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditUserDto.prototype, "lastName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], EditUserDto.prototype, "avatar", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], EditUserDto.prototype, "projects", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(mysql_1.ClientStatus, {
        message: 'status must be either ACTIVE or INACTIVE',
    }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", typeof (_b = typeof mysql_1.ClientStatus !== "undefined" && mysql_1.ClientStatus) === "function" ? _b : Object)
], EditUserDto.prototype, "status", void 0);
exports.EditUserDto = EditUserDto;


/***/ }),

/***/ "./apps/systems/src/users/src/dto/index.ts":
/*!*************************************************!*\
  !*** ./apps/systems/src/users/src/dto/index.ts ***!
  \*************************************************/
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
__exportStar(__webpack_require__(/*! ./create-user.dto */ "./apps/systems/src/users/src/dto/create-user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./edit-user.dto */ "./apps/systems/src/users/src/dto/edit-user.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./pagination.dto */ "./apps/systems/src/users/src/dto/pagination.dto.ts"), exports);
__exportStar(__webpack_require__(/*! ./change-password.dto */ "./apps/systems/src/users/src/dto/change-password.dto.ts"), exports);


/***/ }),

/***/ "./apps/systems/src/users/src/dto/pagination.dto.ts":
/*!**********************************************************!*\
  !*** ./apps/systems/src/users/src/dto/pagination.dto.ts ***!
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
exports.UserPaginationQueryDto = void 0;
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const dto_1 = __webpack_require__(/*! @common/dto */ "./libs/common/dto/index.ts");
class UserPaginationQueryDto extends dto_1.PaginationQueryDto {
}
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserPaginationQueryDto.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserPaginationQueryDto.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserPaginationQueryDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UserPaginationQueryDto.prototype, "role", void 0);
exports.UserPaginationQueryDto = UserPaginationQueryDto;


/***/ }),

/***/ "./apps/systems/src/users/src/prisma/prisma.module.ts":
/*!************************************************************!*\
  !*** ./apps/systems/src/users/src/prisma/prisma.module.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaModuleUser = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const prisma_service_1 = __webpack_require__(/*! ./prisma.service */ "./apps/systems/src/users/src/prisma/prisma.service.ts");
let PrismaModuleUser = class PrismaModuleUser {
};
PrismaModuleUser = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [prisma_service_1.PrismaServiceUser],
        exports: [prisma_service_1.PrismaServiceUser],
    })
], PrismaModuleUser);
exports.PrismaModuleUser = PrismaModuleUser;


/***/ }),

/***/ "./apps/systems/src/users/src/prisma/prisma.service.ts":
/*!*************************************************************!*\
  !*** ./apps/systems/src/users/src/prisma/prisma.service.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PrismaServiceUser = void 0;
const mysql_prisma_client_1 = __webpack_require__(/*! @common/prisma/mysql_prisma_client */ "./libs/common/prisma/mysql_prisma_client.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
let PrismaServiceUser = class PrismaServiceUser extends mysql_prisma_client_1.MySQLClient {
    cleanDatabase() {
        return this.$transaction([this.user.deleteMany()]);
    }
};
PrismaServiceUser = __decorate([
    (0, common_1.Injectable)()
], PrismaServiceUser);
exports.PrismaServiceUser = PrismaServiceUser;


/***/ }),

/***/ "./apps/systems/src/users/src/users.controller.ts":
/*!********************************************************!*\
  !*** ./apps/systems/src/users/src/users.controller.ts ***!
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
var _a, _b, _c, _d, _e, _f, _g, _h, _j;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersController = void 0;
const auth_service_1 = __webpack_require__(/*! @apps/systems/src/auth/src/auth.service */ "./apps/systems/src/auth/src/auth.service.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const microservices_1 = __webpack_require__(/*! @nestjs/microservices */ "@nestjs/microservices");
const dto_1 = __webpack_require__(/*! ./dto */ "./apps/systems/src/users/src/dto/index.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/systems/src/users/src/users.service.ts");
let UsersController = class UsersController extends http_1.HTTP {
    constructor(userService, client, config, authService) {
        super();
        this.userService = userService;
        this.client = client;
        this.config = config;
        this.authService = authService;
    }
    async getUsers(payload) {
        return await this.userService.getUsers(payload);
    }
    async getUserById(payload) {
        return await this.userService.getUserById(payload);
    }
    async signUp(dto, config) {
        const userResponse = await this.userService.signUp(dto);
        if (userResponse.code !== common_1.HttpStatus.OK) {
            return userResponse;
        }
        return userResponse;
    }
    async updateUser(payload) {
        const users = await this.userService.updateUser(payload);
        return users;
    }
    async changePassword(payload) {
        const users = await this.userService.changePassword(payload);
        return users;
    }
    async deleteUser(payload) {
        return await this.userService.deleteUser(payload);
    }
};
__decorate([
    (0, microservices_1.MessagePattern)('get_users'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_e = typeof Promise !== "undefined" && Promise) === "function" ? _e : Object)
], UsersController.prototype, "getUsers", null);
__decorate([
    (0, microservices_1.MessagePattern)('get_user_by_id'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", typeof (_f = typeof Promise !== "undefined" && Promise) === "function" ? _f : Object)
], UsersController.prototype, "getUserById", null);
__decorate([
    (0, microservices_1.MessagePattern)('user_signup'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_g = typeof dto_1.CreateUserDto !== "undefined" && dto_1.CreateUserDto) === "function" ? _g : Object, Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "signUp", null);
__decorate([
    (0, microservices_1.MessagePattern)('update_user'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_h = typeof dto_1.EditUserDto !== "undefined" && dto_1.EditUserDto) === "function" ? _h : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "updateUser", null);
__decorate([
    (0, microservices_1.MessagePattern)('change_password'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [typeof (_j = typeof dto_1.ChangePasswordDto !== "undefined" && dto_1.ChangePasswordDto) === "function" ? _j : Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "changePassword", null);
__decorate([
    (0, microservices_1.MessagePattern)('delete_user'),
    __param(0, (0, microservices_1.Payload)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "deleteUser", null);
UsersController = __decorate([
    (0, common_1.Controller)('users'),
    __param(1, (0, common_1.Inject)('QUEUE_SERVICE')),
    __metadata("design:paramtypes", [typeof (_a = typeof users_service_1.UsersService !== "undefined" && users_service_1.UsersService) === "function" ? _a : Object, typeof (_b = typeof microservices_1.ClientProxy !== "undefined" && microservices_1.ClientProxy) === "function" ? _b : Object, typeof (_c = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _c : Object, typeof (_d = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _d : Object])
], UsersController);
exports.UsersController = UsersController;


/***/ }),

/***/ "./apps/systems/src/users/src/users.module.ts":
/*!****************************************************!*\
  !*** ./apps/systems/src/users/src/users.module.ts ***!
  \****************************************************/
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
const query_prisma_1 = __webpack_require__(/*! @common/utils/dto/query.prisma */ "./libs/common/utils/dto/query.prisma.ts");
const auth_module_1 = __webpack_require__(/*! @apps/systems/src/auth/src/auth.module */ "./apps/systems/src/auth/src/auth.module.ts");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const prisma_module_1 = __webpack_require__(/*! ./prisma/prisma.module */ "./apps/systems/src/users/src/prisma/prisma.module.ts");
const users_controller_1 = __webpack_require__(/*! ./users.controller */ "./apps/systems/src/users/src/users.controller.ts");
const users_service_1 = __webpack_require__(/*! ./users.service */ "./apps/systems/src/users/src/users.service.ts");
let UsersModule = class UsersModule {
};
UsersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                isGlobal: true,
                envFilePath: '.env.dev',
            }),
            prisma_module_1.PrismaModuleUser,
            redis_1.RedisModule.register('QUEUE_SERVICE'),
            auth_module_1.AuthModule,
        ],
        controllers: [users_controller_1.UsersController],
        providers: [users_service_1.UsersService, query_prisma_1.PrismaQuery, http_1.HTTP],
    })
], UsersModule);
exports.UsersModule = UsersModule;


/***/ }),

/***/ "./apps/systems/src/users/src/users.service.ts":
/*!*****************************************************!*\
  !*** ./apps/systems/src/users/src/users.service.ts ***!
  \*****************************************************/
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
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var _a, _b, _c, _d;
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UsersService = void 0;
const key_query_util_1 = __webpack_require__(/*! @common/utils/validates/key-query.util */ "./libs/common/utils/validates/key-query.util.ts");
const requets_util_1 = __webpack_require__(/*! @common/utils/requets.util */ "./libs/common/utils/requets.util.ts");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
const prisma_service_1 = __webpack_require__(/*! ./prisma/prisma.service */ "./apps/systems/src/users/src/prisma/prisma.service.ts");
const bcrypt = __importStar(__webpack_require__(/*! bcrypt */ "bcrypt"));
const utils_1 = __webpack_require__(/*! @common/utils */ "./libs/common/utils/index.ts");
const common_2 = __webpack_require__(/*! ./common */ "./apps/systems/src/users/src/common/index.ts");
const projects_common_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@apps/projects/src/projects.common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
let UsersService = class UsersService extends requets_util_1.RESTfulService {
    constructor(prisma, config, prismaQuery, http) {
        super();
        this.prisma = prisma;
        this.config = config;
        this.prismaQuery = prismaQuery;
        this.http = http;
        this.params = {
            item: {
                defaultSystemFields: false,
            },
            list: {
                orderFields: [
                    'email',
                    'phone',
                    'roleId',
                    'status',
                    'createdDate',
                    'updatedDate',
                    'firstName',
                    'lastName',
                ],
            },
        };
    }
    getDb() {
        const query = this.prismaQuery.where({ deletedDate: null });
        return query;
    }
    async signUp(data) {
        const { email, password, customerOwnerId, projects, phone, currentUser, firstName, lastName, avatar, roleId, } = data;
        try {
            return await this.prisma.$transaction(async (tx) => {
                let existedUser;
                const findUser = tx.user.findFirst({
                    where: {
                        email: email,
                    },
                });
                const checkExistedCustomer = customerOwnerId
                    ? tx.customer.findFirstOrThrow({
                        where: {
                            id: customerOwnerId,
                        },
                    })
                    : Promise.resolve({});
                const response = await Promise.all([findUser, checkExistedCustomer]);
                existedUser = response[0];
                if (existedUser) {
                    if (existedUser.deletedDate) {
                        return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.systems.USER.NOT_FOUND');
                    }
                    if (!existedUser.activatedDate) {
                        return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.ACTIVATE_EMAIL');
                    }
                    return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.EMAIL_EXISTED');
                }
                const salt = +this.config.get('BCRYPT_HASH_SALT', 10);
                const hash = await bcrypt.hash(password, salt);
                const customerId = customerOwnerId || currentUser.customerOwnerId;
                const newUser = await tx.user.create({
                    data: {
                        email: email,
                        hash,
                        customerOwnerId: customerId,
                        phone,
                        firstName,
                        lastName,
                        avatar,
                        roleId,
                        createdBy: currentUser.id,
                        userGeneralSetting: {
                            create: {},
                        },
                    },
                    select: Object.assign({}, common_2.fieldsIncluded),
                });
                if (customerId === 0 && !(projects === null || projects === void 0 ? void 0 : projects.length)) {
                    return this.http.success(newUser, common_1.HttpStatus.OK, 'systems.USER.SIGN_UP_SUCCESS');
                }
                const createCustomerResponse = await this.createCustomerAccount({
                    tx: tx,
                    user: newUser,
                    customerId,
                    customerOwnerId,
                    projects,
                    currentUserId: currentUser.id,
                });
                return createCustomerResponse;
            });
        }
        catch (err) {
            if (err.code === 'P2002') {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.CONSTRAINTS_FAILED');
            }
            return this.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR', err.message);
        }
    }
    async getUsers(payload) {
        var _a, _b, _c, _d;
        const { currentUser, paginationQueryDto } = payload;
        try {
            const pagination = await this.getLists(paginationQueryDto);
            const params = {
                take: pagination.take,
                skip: pagination.skip,
                cursor: pagination.cursor ? { id: pagination.cursor } : undefined,
                orderBy: (_a = pagination.sort) !== null && _a !== void 0 ? _a : {},
                where: (_b = pagination.search) !== null && _b !== void 0 ? _b : {},
            };
            const customFilters = {
                f_project_id: true,
                f_customer_id: true,
            };
            const queries = Object.assign({
                limit: '-1',
                page: '1',
                f_project_id: '-1',
                f_customer_id: '-1',
            }, paginationQueryDto);
            if (!(0, key_query_util_1.isFKeyQueryValid)(queries.f_project_id) ||
                !(0, key_query_util_1.isFKeyQueryValid)(queries.f_customer_id)) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'Invalid id');
            }
            const projectIds = (_c = queries.f_project_id) === null || _c === void 0 ? void 0 : _c.split(projects_common_1.ID_SPLIT).map((i) => parseInt(i)).filter((i) => i !== -1);
            const customerIds = (_d = queries.f_customer_id) === null || _d === void 0 ? void 0 : _d.split(projects_common_1.ID_SPLIT).map((i) => parseInt(i)).filter((i) => i !== -1);
            const q = (queries.q || '')
                .normalize('NFD')
                .replace(/[\u0300-\u036f]/g, '')
                .replace(/đ/g, 'd')
                .replace(/Đ/g, 'D')
                .toLowerCase();
            const whereQuery = {
                deletedDate: null,
                customerOwnerId: currentUser.customerOwnerId,
                OR: (0, common_2.searchQuery)(q),
                projects: (0, common_2.filterFieldQuery)('projectId', projectIds),
                customers: (0, common_2.filterFieldQuery)('customerId', customerIds),
            };
            const [totalUsers, users] = await Promise.all([
                this.prisma.user.count({
                    where: whereQuery,
                }),
                this.prisma.user.findMany({
                    take: params.take,
                    skip: params.skip,
                    cursor: params.cursor,
                    where: whereQuery,
                    orderBy: params.orderBy,
                    select: Object.assign({}, common_2.fieldsIncluded),
                }),
            ]);
            const filterUserList = (0, utils_1.removeRedundant)(users, ['projects', 'customers']);
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.USER.GET_USER_LIST_SUCCESS', filterUserList, totalUsers);
        }
        catch (err) {
            console.log(err);
            this.http.error('common.INTERNAL_SERVER_ERROR', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async getUserById(payload) {
        const { currentUser, id } = payload;
        try {
            const user = await this.prisma.user.findFirstOrThrow({
                where: {
                    id,
                    customerOwnerId: currentUser.customerOwnerId,
                },
                select: Object.assign(Object.assign({}, common_2.fieldsIncluded), { deletedDate: true, activatedDate: true }),
            });
            if (!user || user.deletedDate || !user.activatedDate) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'User does not exist');
            }
            const filterUser = (0, utils_1.removeRedundant)(user, ['projects', 'customers']);
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.USER.GET_USER_SUCCESS', filterUser);
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR');
        }
    }
    async updateUser(payload) {
        const { currentUser, id, projects } = payload, data = __rest(payload, ["currentUser", "id", "projects"]);
        const removeDuplicatedProjects = [...new Set(projects)];
        const dataFiltered = (0, utils_1.removeObjectProperties)(data, ['email', 'hash']);
        const user = await this.prisma.user.findFirst({
            where: {
                id,
                customerOwnerId: currentUser.customerOwnerId,
            },
        });
        if (!user || user.deletedDate || !user.activatedDate) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.');
        }
        if (!(removeDuplicatedProjects === null || removeDuplicatedProjects === void 0 ? void 0 : removeDuplicatedProjects.length)) {
            const userUpdated = await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: Object.assign({}, dataFiltered),
                select: Object.assign({}, common_2.fieldsIncluded),
            });
            const filterUser = (0, utils_1.removeRedundant)(userUpdated, [
                'projects',
                'customers',
            ]);
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.USER.UPDATE_SUCCESS', filterUser);
        }
        let availableProjects = [];
        if (user.customerOwnerId !== 0) {
            availableProjects = removeDuplicatedProjects.map(projectId => this.prisma.customersProjects.findFirstOrThrow({
                where: {
                    customerId: user.customerOwnerId,
                    projectId,
                },
            }));
        }
        else {
            availableProjects = removeDuplicatedProjects.map(projectId => this.prisma.project.findFirstOrThrow({
                where: {
                    id: projectId,
                },
            }));
        }
        const checkAvailableProject = await Promise.allSettled(availableProjects);
        const projectIsNotAvailable = checkAvailableProject.some(res => res.status === 'rejected');
        if (projectIsNotAvailable) {
            this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.PROJECT_NOT_AVAILABLE');
        }
        const convertProjectIdToObject = removeDuplicatedProjects.map(projectId => ({
            projectId,
        }));
        try {
            const userUpdated = await this.prisma.user.update({
                where: {
                    id: user.id,
                },
                data: Object.assign(Object.assign({}, dataFiltered), { projects: {
                        deleteMany: {
                            OR: [{ userId: { in: [user.id] } }],
                        },
                        createMany: {
                            data: convertProjectIdToObject,
                        },
                    } }),
                select: Object.assign({}, common_2.fieldsIncluded),
            });
            const filterUser = (0, utils_1.removeRedundant)(userUpdated, [
                'projects',
                'customers',
            ]);
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.USER.UPDATE_SUCCESS', filterUser);
        }
        catch (err) {
            this.http.error('common.INTERNAL_SERVER_ERROR', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async changePassword(payload) {
        const { currentUser } = payload, data = __rest(payload, ["currentUser"]);
        const { currentPassword, newPassword, confirmPassword } = data;
        if (currentUser.id !== data.id) {
            return this.http.setHttpRequest(common_1.HttpStatus.FORBIDDEN, 'Access denied');
        }
        if (confirmPassword !== newPassword) {
            return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.PASSWORD_NOT_MATCH');
        }
        try {
            const currentUserPassword = await this.prisma.user.findFirst({
                where: {
                    id: data.id,
                    deletedDate: null,
                },
                select: {
                    hash: true,
                },
            });
            if (!currentUserPassword) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.systems.USER.NOT_FOUND');
            }
            const pwMatches = await bcrypt.compare(currentPassword, currentUserPassword.hash);
            if (!pwMatches) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'common.INCORRECT_CREDENTIALS');
            }
            const salt = +this.config.get('BCRYPT_HASH_SALT', 10);
            const hash = await bcrypt.hash(confirmPassword, salt);
            const userUpdated = await this.prisma.user.update({
                where: {
                    id: data.id,
                },
                data: {
                    hash,
                },
                select: Object.assign({}, common_2.fieldsIncluded),
            });
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.USER.CHANGE_PASSWORD_SUCCESS', userUpdated);
        }
        catch (err) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR', err.message);
        }
    }
    async deleteUser(payload) {
        const { currentUser, id, confirmPassword } = payload;
        try {
            if (!confirmPassword) {
                return this.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.PASSWORD_NOT_PROVIDED');
            }
            const [existedUser, currentUserPassword] = await Promise.all([
                this.prisma.user.findFirst({
                    where: {
                        id,
                        customerOwnerId: currentUser.customerOwnerId,
                    },
                }),
                this.prisma.user.findUnique({
                    where: {
                        id: currentUser.id,
                    },
                    select: {
                        hash: true,
                    },
                }),
            ]);
            if (!existedUser ||
                existedUser.deletedDate ||
                !existedUser.activatedDate) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'systems.USER.systems.USER.NOT_FOUND');
            }
            const pwMatches = await bcrypt.compare(confirmPassword, currentUserPassword.hash);
            if (!pwMatches) {
                return this.http.setHttpRequest(common_1.HttpStatus.BAD_REQUEST, 'common.INCORRECT_CREDENTIALS');
            }
            await this.prisma.user.update({
                where: {
                    id,
                },
                data: {
                    deletedDate: new Date(),
                },
            });
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.USER.DELETE_SUCCESS');
        }
        catch (error) {
            return this.http.setHttpRequest(common_1.HttpStatus.INTERNAL_SERVER_ERROR, 'common.INTERNAL_SERVER_ERROR');
        }
    }
    async createCustomerAccount(data) {
        const { tx, user, customerId, projects, customerOwnerId, currentUserId } = data;
        if (customerId !== 0) {
            await tx.customersUsers.create({
                data: {
                    customerId,
                    userId: user.id,
                },
            });
        }
        if (!(projects === null || projects === void 0 ? void 0 : projects.length)) {
            return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.USER.SIGN_UP_SUCCESS', user);
        }
        let projectsToBeChecked = [];
        if (customerId === 0) {
            projectsToBeChecked = projects === null || projects === void 0 ? void 0 : projects.map(project => tx.project.findFirstOrThrow({
                where: {
                    id: project,
                },
            }));
        }
        else {
            projectsToBeChecked = projects === null || projects === void 0 ? void 0 : projects.map(project => tx.customersProjects.findFirstOrThrow({
                where: {
                    customerId,
                    projectId: project,
                },
            }));
        }
        await Promise.all(projectsToBeChecked);
        const projectList = projects === null || projects === void 0 ? void 0 : projects.map(project => ({
            userId: user.id,
            projectId: project,
        }));
        const insertProjectList = await tx.usersProjects.createMany({
            data: projectList,
        });
        return this.http.setHttpRequest(common_1.HttpStatus.OK, 'systems.USER.SIGN_UP_SUCCESS', user);
    }
};
UsersService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof prisma_service_1.PrismaServiceUser !== "undefined" && prisma_service_1.PrismaServiceUser) === "function" ? _a : Object, typeof (_b = typeof config_1.ConfigService !== "undefined" && config_1.ConfigService) === "function" ? _b : Object, typeof (_c = typeof utils_1.PrismaQuery !== "undefined" && utils_1.PrismaQuery) === "function" ? _c : Object, typeof (_d = typeof http_1.HTTP !== "undefined" && http_1.HTTP) === "function" ? _d : Object])
], UsersService);
exports.UsersService = UsersService;


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
            this.areas.deleteMany(),
            this.alertNotes.deleteMany(),
            this.businessModel.deleteMany(),
            this.contacts.deleteMany(),
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
                customerOwnerId: true,
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
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const passport_1 = __webpack_require__(/*! @nestjs/passport */ "@nestjs/passport");
const passport_local_1 = __webpack_require__(/*! passport-local */ "passport-local");
const auth_service_1 = __webpack_require__(/*! @apps/systems/src/auth/src/auth.service */ "./apps/systems/src/auth/src/auth.service.ts");
let LocalStrategy = class LocalStrategy extends (0, passport_1.PassportStrategy)(passport_local_1.Strategy) {
    constructor(authService) {
        super({ usernameField: 'email' });
        this.authService = authService;
    }
    async validate(email, password) {
        return this.authService.validateUser(email, password);
    }
};
LocalStrategy = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeof (_a = typeof auth_service_1.AuthService !== "undefined" && auth_service_1.AuthService) === "function" ? _a : Object])
], LocalStrategy);
exports.LocalStrategy = LocalStrategy;


/***/ }),

/***/ "./libs/common/dto/index.ts":
/*!**********************************!*\
  !*** ./libs/common/dto/index.ts ***!
  \**********************************/
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
__exportStar(__webpack_require__(/*! ./pagination-query.dto */ "./libs/common/dto/pagination-query.dto.ts"), exports);


/***/ }),

/***/ "./libs/common/dto/pagination-query.dto.ts":
/*!*************************************************!*\
  !*** ./libs/common/dto/pagination-query.dto.ts ***!
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
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PaginationQueryDto = void 0;
const swagger_1 = __webpack_require__(/*! @nestjs/swagger */ "@nestjs/swagger");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
class PaginationQueryDto {
}
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id of the last item in the previous page',
        required: false,
        nullable: true,
    }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "startId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items to take', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "limit", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Number of items to skip', required: false }),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "skip", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'sorted by this field name. +fieldName to show greatest item first, -fieldName to show smallest item first',
        required: false,
    }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "q", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Page', required: false }),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], PaginationQueryDto.prototype, "page", void 0);
exports.PaginationQueryDto = PaginationQueryDto;


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

/***/ "./libs/common/pipe/index.ts":
/*!***********************************!*\
  !*** ./libs/common/pipe/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./rpc-validation-pipe */ "./libs/common/pipe/rpc-validation-pipe.ts"), exports);


/***/ }),

/***/ "./libs/common/pipe/rpc-validation-pipe.ts":
/*!*************************************************!*\
  !*** ./libs/common/pipe/rpc-validation-pipe.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.RpcValidationPipe = void 0;
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const class_transformer_1 = __webpack_require__(/*! class-transformer */ "class-transformer");
const class_validator_1 = __webpack_require__(/*! class-validator */ "class-validator");
const http_1 = __webpack_require__(/*! @common/http */ "./libs/common/http/index.ts");
let RpcValidationPipe = class RpcValidationPipe extends http_1.HTTP {
    async transform(value, { metatype }) {
        if (!metatype || !this.validateMetaType(metatype)) {
            return value;
        }
        const object = (0, class_transformer_1.plainToClass)(metatype, value);
        const errors = await (0, class_validator_1.validate)(object);
        if (errors.length > 0) {
            const filterErrors = errors.flatMap(err => {
                if (err.children.length !== 0)
                    return err.children.flatMap(err => err.children.flatMap(err => Object.values(err.constraints)));
                return Object.values(err.constraints);
            });
            this.error(filterErrors);
        }
        return value;
    }
    validateMetaType(metatype) {
        const types = [String, Boolean, Number, Array, Object];
        return !types.includes(metatype);
    }
};
RpcValidationPipe = __decorate([
    (0, common_1.Injectable)()
], RpcValidationPipe);
exports.RpcValidationPipe = RpcValidationPipe;


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

/***/ "./libs/common/types/index.ts":
/*!************************************!*\
  !*** ./libs/common/types/index.ts ***!
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
__exportStar(__webpack_require__(/*! ./pagination.type */ "./libs/common/types/pagination.type.ts"), exports);


/***/ }),

/***/ "./libs/common/types/pagination.type.ts":
/*!**********************************************!*\
  !*** ./libs/common/types/pagination.type.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.MailMessage = void 0;
class MailMessage {
    constructor(to, title, content, params) {
        this.to = to;
        this.title = title;
        this.content = content;
        this.params = params;
    }
}
exports.MailMessage = MailMessage;


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
const projects_common_1 = __webpack_require__(Object(function webpackMissingModule() { var e = new Error("Cannot find module '@apps/projects/src/projects.common'"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));
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
                    if (fieldValue.indexOf(projects_common_1.ID_SPLIT) === -1) {
                        if (field.includes('Id') || field.includes('id')) {
                            obj[field] = parseInt(`${fieldValue}`);
                        }
                        else {
                            obj[field] = `${fieldValue}`;
                        }
                        orWhereMulti.push(JSON.stringify(obj));
                    }
                    else {
                        fieldValue.split(projects_common_1.ID_SPLIT).map(item => {
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

/***/ "@nestjs-modules/mailer":
/*!*****************************************!*\
  !*** external "@nestjs-modules/mailer" ***!
  \*****************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer");

/***/ }),

/***/ "@nestjs-modules/mailer/dist/adapters/handlebars.adapter":
/*!**************************************************************************!*\
  !*** external "@nestjs-modules/mailer/dist/adapters/handlebars.adapter" ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");

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

/***/ "@nestjs/swagger":
/*!**********************************!*\
  !*** external "@nestjs/swagger" ***!
  \**********************************/
/***/ ((module) => {

module.exports = require("@nestjs/swagger");

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

/***/ "cookie-parser":
/*!********************************!*\
  !*** external "cookie-parser" ***!
  \********************************/
/***/ ((module) => {

module.exports = require("cookie-parser");

/***/ }),

/***/ "csv-writer":
/*!*****************************!*\
  !*** external "csv-writer" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("csv-writer");

/***/ }),

/***/ "handlebars":
/*!*****************************!*\
  !*** external "handlebars" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("handlebars");

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

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

module.exports = require("crypto");

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/***/ ((module) => {

module.exports = require("fs");

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
/*!**********************************!*\
  !*** ./apps/systems/src/main.ts ***!
  \**********************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
const common_1 = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
const core_1 = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
const systems_module_1 = __webpack_require__(/*! ./systems.module */ "./apps/systems/src/systems.module.ts");
const redis_1 = __webpack_require__(/*! @common/redis */ "./libs/common/redis/index.ts");
const config_1 = __webpack_require__(/*! @nestjs/config */ "@nestjs/config");
async function bootstrap() {
    const app = await core_1.NestFactory.createMicroservice(systems_module_1.SystemsModule, redis_1.RedisModule.getRedisOption({
        logger: ['error', 'warn', 'log', 'debug', 'verbose'],
    }));
    const config = app.get(config_1.ConfigService);
    await app
        .listen()
        .then(() => {
        const logger = new common_1.Logger('System service');
        logger.log(`API Gateway start at port: ${config.get('PORT')}\nMicroservice port:${config.get('PORT_PUBLIC_REDIS')}\nMYSQL: ${config.get('MYSQL_DATABASE_URL')}\nMONGODB: ${config.get('MONGODB_DATABASE_URL')}`);
    });
}
bootstrap();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUVqQixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxNQUFNLENBQUMsU0FBNEI7UUFDeEMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDdkUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQzdCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxJQUFJLENBQUMsU0FBNEI7UUFDdEMsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDdkUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQzNCLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFDTSxLQUFLLENBQUMsU0FBb0M7UUFDL0MsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsU0FBUyxDQUFDLEVBQUUsQ0FDdkUsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQ2hDLENBQUM7UUFFRixPQUFPLElBQUksQ0FBQztJQUNkLENBQUM7SUFFTSxXQUFXLENBQUMsU0FBb0M7UUFDckQsQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMs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U0FDTixNQUFNLEVBQUU7U0FDUixJQUFJLENBQUMsR0FBRyxFQUFFO1FBQ1QsTUFBTSxNQUFNLEdBQUcsSUFBSSxlQUFNLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUM1QyxNQUFNLENBQUMsR0FBRyxDQUNSLDhCQUE4QixNQUFNLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyx1QkFBdUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxtQkFBbUIsQ0FBQyxZQUFZLE1BQU0sQ0FBQyxHQUFHLENBQUMsb0JBQW9CLENBQUMsY0FBYyxNQUFNLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLEVBQUUsQ0FDck0sQ0FBQztJQUNKLENBQUMsQ0FDQSxDQUFDO0FBQ04sQ0FBQztBQUVELFNBQVMsRUFBRSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2FjdGl2aXR5X2xvZ3Mvc3JjL2FjdGl2aXR5X2xvZ3MuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvYWN0aXZpdHlfbG9ncy9zcmMvYWN0aXZpdHlfbG9ncy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2FjdGl2aXR5X2xvZ3Mvc3JjL2FjdGl2aXR5X2xvZ3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvYWN0aXZpdHlfbG9ncy9zcmMvY29tbW9uL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9hY3Rpdml0eV9sb2dzL3NyYy9kdG8vY3JlYXRlLWFjdGl2aXR5LmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvYWN0aXZpdHlfbG9ncy9zcmMvZHRvL2VkaXQtYWN0aXZpdHkuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9hY3Rpdml0eV9sb2dzL3NyYy9kdG8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2FjdGl2aXR5X2xvZ3Mvc3JjL3ByaXNtYS9wcmlzbWEubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9hY3Rpdml0eV9sb2dzL3NyYy9wcmlzbWEvcHJpc21hLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2F1dGgvc3JjL2F1dGguY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvYXV0aC9zcmMvYXV0aC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2F1dGgvc3JjL2F1dGguc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvYXV0aC9zcmMvZHRvL2ZpcnN0X2FjdGl2YXRlLmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvYXV0aC9zcmMvZHRvL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9hdXRoL3NyYy9kdG8vcmVzZXQtcGFzc3dvcmQtcXVlcnkuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9hdXRoL3NyYy9kdG8vc2lnbi1pbi5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9kdG8vY3JlYXRlLWludm9pY2UtaXRlbXMuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9pbnZvaWNlcy9zcmMvZHRvL2NyZWF0ZS1pbnZvaWNlcy5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9kdG8vZGVsZXRlLWludm9pY2UtaXRlbS5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9kdG8vZGVsZXRlLWl0ZW0uZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9pbnZvaWNlcy9zcmMvZHRvL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9pbnZvaWNlcy9zcmMvZHRvL2ludm9pY2UtaXRlbS5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9kdG8vcGFnaW5hdGlvbi5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9kdG8vdXBkYXRlLWludm9pY2UtaXRlbS5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9kdG8vdXBkYXRlLWludm9pY2VzLmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvaW52b2ljZXMvc3JjL2ludm9pY2VzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9pbnZvaWNlcy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9pbnZvaWNlcy5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9pbnZvaWNlcy9zcmMvcHJpc21hL3ByaXNtYS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9wcmlzbWEvcHJpc21hLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9zcWwvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9zcWwvaW52b2ljZXMudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL21haWwvc3JjL21haWwuY29udHJvbGxlci50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvbWFpbC9zcmMvbWFpbC5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL21haWwvc3JjL21haWwuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvbm90aWZpY2F0aW9ucy9zcmMvZHRvL25vdGlmaWNhdGlvbnMuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9ub3RpZmljYXRpb25zL3NyYy9ub3RpZmljYXRpb25zLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL25vdGlmaWNhdGlvbnMvc3JjL25vdGlmaWNhdGlvbnMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9ub3RpZmljYXRpb25zL3NyYy9ub3RpZmljYXRpb25zLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL25vdGlmaWNhdGlvbnMvc3JjL3ByaXNtYS9wcmlzbWEubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9ub3RpZmljYXRpb25zL3NyYy9wcmlzbWEvcHJpc21hLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3BhY2thZ2VzL3NyYy9kdG8vY3JlYXRlLXBhY2thZ2UuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9wYWNrYWdlcy9zcmMvZHRvL2VkaXQtcGFja2FnZS5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3BhY2thZ2VzL3NyYy9kdG8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3BhY2thZ2VzL3NyYy9wYWNrYWdlcy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9wYWNrYWdlcy9zcmMvcGFja2FnZXMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9wYWNrYWdlcy9zcmMvcGFja2FnZXMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvcGFja2FnZXMvc3JjL3ByaXNtYS9wcmlzbWEubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9wYWNrYWdlcy9zcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9wZXJtaXNzaW9ucy9zcmMvZHRvL3Blcm1pc3Npb25EdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3Blcm1pc3Npb25zL3NyYy9wZXJtaXNzaW9ucy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9wZXJtaXNzaW9ucy9zcmMvcGVybWlzc2lvbnMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9wZXJtaXNzaW9ucy9zcmMvcGVybWlzc2lvbnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvcGVybWlzc2lvbnMvc3JjL3ByaXNtYS9wcmlzbWEubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9wZXJtaXNzaW9ucy9zcmMvcHJpc21hL3ByaXNtYS5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9yb2xlcy9zcmMvZHRvL3JvbGVEdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3JvbGVzL3NyYy9wcmlzbWEvcHJpc21hLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvcm9sZXMvc3JjL3ByaXNtYS9wcmlzbWEuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvcm9sZXMvc3JjL3JvbGVzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3JvbGVzL3NyYy9yb2xlcy5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3JvbGVzL3NyYy9yb2xlcy5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy9zeXN0ZW1zLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvdXNlcl9nZW5lcmFsX3NldHRpbmdzL3NyYy9kdG8vY3JlYXRlX3VzZXJfZ2VuZXJhbC5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3VzZXJfZ2VuZXJhbF9zZXR0aW5ncy9zcmMvZHRvL2VkaXRfdXNlcl9nZW5lcmFsX3NldHRpbmdzLmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvdXNlcl9nZW5lcmFsX3NldHRpbmdzL3NyYy9wcmlzbWEvcHJpc21hLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvdXNlcl9nZW5lcmFsX3NldHRpbmdzL3NyYy9wcmlzbWEvcHJpc21hLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3VzZXJfZ2VuZXJhbF9zZXR0aW5ncy9zcmMvdXNlcl9nZW5lcmFsX3NldHRpbmdzLmNvbnRyb2xsZXIudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3VzZXJfZ2VuZXJhbF9zZXR0aW5ncy9zcmMvdXNlcl9nZW5lcmFsX3NldHRpbmdzLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvdXNlcl9nZW5lcmFsX3NldHRpbmdzL3NyYy91c2VyX2dlbmVyYWxfc2V0dGluZ3Muc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvdXNlcnMvc3JjL2NvbW1vbi9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvdXNlcnMvc3JjL2NvbW1vbi9xdWVyeS9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvdXNlcnMvc3JjL2R0by9jaGFuZ2UtcGFzc3dvcmQuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy91c2Vycy9zcmMvZHRvL2NyZWF0ZS11c2VyLmR0by50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvdXNlcnMvc3JjL2R0by9lZGl0LXVzZXIuZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy91c2Vycy9zcmMvZHRvL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy91c2Vycy9zcmMvZHRvL3BhZ2luYXRpb24uZHRvLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy91c2Vycy9zcmMvcHJpc21hL3ByaXNtYS5tb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3VzZXJzL3NyYy9wcmlzbWEvcHJpc21hLnNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9hcHBzL3N5c3RlbXMvc3JjL3VzZXJzL3NyYy91c2Vycy5jb250cm9sbGVyLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy91c2Vycy9zcmMvdXNlcnMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vYXBwcy9zeXN0ZW1zL3NyYy91c2Vycy9zcmMvdXNlcnMuc2VydmljZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvcHJpc21hL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vYXV0aC9wcmlzbWEvcHJpc21hLm1vZHVsZS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvcHJpc21hL3ByaXNtYS5zZXJ2aWNlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vYXV0aC9zdHJhdGVnaWVzL2dvb2dsZS5zdHJhdGVneS50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvc3RyYXRlZ2llcy9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL2F1dGgvc3RyYXRlZ2llcy9qd3Quc3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9hdXRoL3N0cmF0ZWdpZXMvbG9jYWwuc3RyYXRlZ3kudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9kdG8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9kdG8vcGFnaW5hdGlvbi1xdWVyeS5kdG8udHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9odHRwL2h0dHAubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vaHR0cC9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL3BpcGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9waXBlL3JwYy12YWxpZGF0aW9uLXBpcGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi9wcmlzbWEvbXlzcWxfcHJpc21hX2NsaWVudC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL3JlZGlzL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vcmVkaXMvcmVkaXMubW9kdWxlLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vdHlwZXMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi90eXBlcy9wYWdpbmF0aW9uLnR5cGUudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi91dGlscy9kdG8vaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi91dGlscy9kdG8vcXVlcnkucHJpc21hLnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vdXRpbHMvZmlsZS9pbmRleC50cyIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2xpYnMvY29tbW9uL3V0aWxzL2ZpbHRlci1kYXRhL2luZGV4LnRzIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzLy4vbGlicy9jb21tb24vdXRpbHMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi91dGlscy9yZXF1ZXRzLnV0aWwudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvLi9saWJzL2NvbW1vbi91dGlscy92YWxpZGF0ZXMva2V5LXF1ZXJ5LnV0aWwudHMiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzLW1vZHVsZXMvbWFpbGVyXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzLW1vZHVsZXMvbWFpbGVyL2Rpc3QvYWRhcHRlcnMvaGFuZGxlYmFycy5hZGFwdGVyXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJAbmVzdGpzL2NvbW1vblwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9jb25maWdcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvY29yZVwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9qd3RcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIkBuZXN0anMvbWljcm9zZXJ2aWNlc1wiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9wYXNzcG9ydFwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwiQG5lc3Rqcy9zd2FnZ2VyXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJAcHJpc21hL215c3FsXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJiY3J5cHRcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcImNsYXNzLXRyYW5zZm9ybWVyXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJjbGFzcy12YWxpZGF0b3JcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcImNvb2tpZS1wYXJzZXJcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcImNzdi13cml0ZXJcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcImhhbmRsZWJhcnNcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBjb21tb25qcyBcIm5lc3Rqcy1pMThuXCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1nb29nbGUtb2F1dGgyMFwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwicGFzc3BvcnQtand0XCIiLCJ3ZWJwYWNrOi8vbmV4bGVzb2Z0X3RlbXBsYXRlX21pY3Jvc2VydmljZXMvZXh0ZXJuYWwgY29tbW9uanMgXCJwYXNzcG9ydC1sb2NhbFwiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIGNvbW1vbmpzIFwicnhqc1wiIiwid2VicGFjazovL25leGxlc29mdF90ZW1wbGF0ZV9taWNyb3NlcnZpY2VzL2V4dGVybmFsIG5vZGUtY29tbW9uanMgXCJjcnlwdG9cIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy9leHRlcm5hbCBub2RlLWNvbW1vbmpzIFwiZnNcIiIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9uZXhsZXNvZnRfdGVtcGxhdGVfbWljcm9zZXJ2aWNlcy8uL2FwcHMvc3lzdGVtcy9zcmMvbWFpbi50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTWVzc2FnZVBhdHRlcm4sIFBheWxvYWQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgQWN0aXZpdHlMb2dzU2VydmljZSB9IGZyb20gJy4vYWN0aXZpdHlfbG9ncy5zZXJ2aWNlJztcbmltcG9ydCB7IENyZWF0ZUFjdGl2aXR5RHRvLCBFZGl0QWN0aXZpdHlEdG8gfSBmcm9tICcuL2R0byc7XG5pbXBvcnQgeyBDdXN0b21SZXNwb25zZSB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5cbkBDb250cm9sbGVyKCdhY3Rpdml0eScpXG5leHBvcnQgY2xhc3MgQWN0aXZpdHlMb2dzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgYWN0aXZpdHlMb2dzU2VydmljZTogQWN0aXZpdHlMb2dzU2VydmljZSkge31cblxuICBATWVzc2FnZVBhdHRlcm4oJ2dldF9hY3Rpdml0eScpXG4gIGdldEFjdGl2aXR5KEBQYXlsb2FkKCkgcGFnaW5hdGlvblF1ZXJ5RHRvOiBhbnkpOiBQcm9taXNlPEN1c3RvbVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlMb2dzU2VydmljZS5nZXRBY3Rpdml0eShwYWdpbmF0aW9uUXVlcnlEdG8pO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdnZXRfYWN0aXZpdHlfYnlfaWQnKVxuICBnZXRBY3Rpdml0eUJ5SWQoQFBheWxvYWQoKSBhY3Rpdml0eUlkOiBudW1iZXIpOiBQcm9taXNlPEN1c3RvbVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlMb2dzU2VydmljZS5nZXRBY3Rpdml0eUJ5SWQoYWN0aXZpdHlJZCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2FkZF9hY3Rpdml0eScpXG4gIGFkZEFjdGl2aXR5KEBQYXlsb2FkKCkgZHRvOiBDcmVhdGVBY3Rpdml0eUR0byk6IFByb21pc2U8Q3VzdG9tUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gdGhpcy5hY3Rpdml0eUxvZ3NTZXJ2aWNlLmFkZEFjdGl2aXR5KGR0byk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ3VwZGF0ZV9hY3Rpdml0eScpXG4gIHVwZGF0ZUFjdGl2aXR5KEBQYXlsb2FkKCkgZHRvOiBFZGl0QWN0aXZpdHlEdG8pOiBQcm9taXNlPEN1c3RvbVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIHRoaXMuYWN0aXZpdHlMb2dzU2VydmljZS51cGRhdGVBY3Rpdml0eShkdG8pO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdkZWxldGVfYWN0aXZpdHknKVxuICBhc3luYyBkZWxldGVCb29rKGFjdGl2aXR5SWQ6IG51bWJlcik6IFByb21pc2U8Q3VzdG9tUmVzcG9uc2U+IHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5hY3Rpdml0eUxvZ3NTZXJ2aWNlLmRlbGV0ZUFjdGl2aXR5KGFjdGl2aXR5SWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQcmlzbWFRdWVyeSB9IGZyb20gJ0Bjb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBBUFBfUElQRSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBScGNWYWxpZGF0aW9uUGlwZSB9IGZyb20gJ0Bjb21tb24vcGlwZSc7XG5pbXBvcnQgeyBBY3Rpdml0eUxvZ3NDb250cm9sbGVyIH0gZnJvbSAnLi9hY3Rpdml0eV9sb2dzLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgQWN0aXZpdHlMb2dzU2VydmljZSB9IGZyb20gJy4vYWN0aXZpdHlfbG9ncy5zZXJ2aWNlJztcbmltcG9ydCB7IFByaXNtYU1vZHVsZUFjdGl2aXR5IH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBQcmlzbWFNb2R1bGVBY3Rpdml0eSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtBY3Rpdml0eUxvZ3NDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgQWN0aXZpdHlMb2dzU2VydmljZSxcbiAgICBQcmlzbWFRdWVyeSxcbiAgICBIVFRQLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9QSVBFLFxuICAgICAgdXNlQ2xhc3M6IFJwY1ZhbGlkYXRpb25QaXBlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5TG9nc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUHJpc21hUXVlcnkgfSBmcm9tICdAY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IFJFU1RmdWxTZXJ2aWNlLCBSRVNUZnVsUGFyYW1zIH0gZnJvbSAnQGNvbW1vbi91dGlscy9yZXF1ZXRzLnV0aWwnO1xuaW1wb3J0IHsgSHR0cFN0YXR1cywgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VBY3Rpdml0eSB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5zZXJ2aWNlJztcbmltcG9ydCB7IEN1c3RvbVJlc3BvbnNlLCBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IENyZWF0ZUFjdGl2aXR5RHRvIH0gZnJvbSAnLi9kdG8vY3JlYXRlLWFjdGl2aXR5LmR0byc7XG5pbXBvcnQgeyBFZGl0QWN0aXZpdHlEdG8gfSBmcm9tICcuL2R0byc7XG5pbXBvcnQgeyBmaWVsZHNJbmNsdWRlLCBzZWFyY2hRdWVyeSB9IGZyb20gJy4vY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEFjdGl2aXR5TG9nc1NlcnZpY2UgZXh0ZW5kcyBSRVNUZnVsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlQWN0aXZpdHksXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmlzbWFRdWVyeTogUHJpc21hUXVlcnksXG4gICAgcHJpdmF0ZSBodHRwOiBIVFRQLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERiKCk6IFByaXNtYVF1ZXJ5IHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucHJpc21hUXVlcnkud2hlcmUoeyBkZWxldGVkRGF0ZTogbnVsbCB9KTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyYW1zOiBSRVNUZnVsUGFyYW1zID0ge1xuICAgIGl0ZW06IHtcbiAgICAgIGRlZmF1bHRTeXN0ZW1GaWVsZHM6IGZhbHNlLCAvLyA9PiBNYWtlIHVwZGF0ZSBtb2RpZmllZF9kYXRlLCBtb2RpZmllZF9ieSwgY3JlYXRlZF9kYXRlIGFuZCBjcmVhdGVkX2J5XG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICBvcmRlckZpZWxkczogWydkZXNjcmlwdGlvbicsICdjcmVhdGVkRGF0ZSddLFxuICAgIH0sXG4gIH07XG5cbiAgYXN5bmMgZ2V0QWN0aXZpdHkocGFnaW5hdGlvblF1ZXJ5RHRvOiBhbnkpOiBQcm9taXNlPEN1c3RvbVJlc3BvbnNlPiB7XG4gICAgY29uc3QgcGFnaW5hdGlvbiA9IGF3YWl0IHRoaXMuZ2V0TGlzdHMocGFnaW5hdGlvblF1ZXJ5RHRvKTtcblxuICAgIGNvbnN0IHF1ZXJpZXMgPSB7XG4gICAgICAuLi57XG4gICAgICAgIGxpbWl0OiAnLTEnLFxuICAgICAgICBwYWdlOiAnMScsXG4gICAgICB9LFxuICAgICAgLi4ucGFnaW5hdGlvblF1ZXJ5RHRvLFxuICAgIH07XG5cbiAgICBjb25zdCBxID0gKChxdWVyaWVzLnEgYXMgYW55KSB8fCAnJylcbiAgICAgIC5ub3JtYWxpemUoJ05GRCcpXG4gICAgICAucmVwbGFjZSgvW1xcdTAzMDAtXFx1MDM2Zl0vZywgJycpXG4gICAgICAucmVwbGFjZSgvxJEvZywgJ2QnKVxuICAgICAgLnJlcGxhY2UoL8SQL2csICdEJylcbiAgICAgIC50b0xvd2VyQ2FzZSgpO1xuXG4gICAgY29uc3QgdXNlclF1ZXJ5ID0gcGFnaW5hdGlvblF1ZXJ5RHRvLm9yZGVyPy5zcGxpdCgnLCcpLnJlZHVjZShcbiAgICAgIChxdWVyeU9iamVjdDogYW55LCBpdGVtOiBzdHJpbmcpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJ2VtYWlsJykgfHxcbiAgICAgICAgICBpdGVtLmluY2x1ZGVzKCdmaXJzdE5hbWUnKSB8fFxuICAgICAgICAgIGl0ZW0uaW5jbHVkZXMoJ2xhc3ROYW1lJylcbiAgICAgICAgKSB7XG4gICAgICAgICAgY29uc3QgW2ZpZWxkTmFtZSwgc29ydFZhbHVlXSA9IGl0ZW0uc3BsaXQoJyAnKTtcbiAgICAgICAgICBxdWVyeU9iamVjdC51c2VyW2ZpZWxkTmFtZV0gPSBzb3J0VmFsdWUgfHwgJ2FzYyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHF1ZXJ5T2JqZWN0O1xuICAgICAgfSxcbiAgICAgIHsgdXNlcjoge30gfSxcbiAgICApO1xuXG4gICAgcGFnaW5hdGlvbi5zb3J0ID0gcGFnaW5hdGlvbi5zb3J0IHx8IFtdO1xuICAgIGlmIChPYmplY3QudmFsdWVzKHVzZXJRdWVyeS51c2VyKT8ubGVuZ3RoKSB7XG4gICAgICBwYWdpbmF0aW9uLnNvcnQucHVzaCh1c2VyUXVlcnkpO1xuICAgIH1cblxuICAgIGxldCBmX2Zyb21fZGF0ZTogc3RyaW5nIHwgbnVtYmVyID0gcGFnaW5hdGlvblF1ZXJ5RHRvLmZfZnJvbV9kYXRlO1xuICAgIGxldCBmX3RvX2RhdGU6IHN0cmluZyB8IG51bWJlciA9IHBhZ2luYXRpb25RdWVyeUR0by5mX3RvX2RhdGU7XG4gICAgaWYgKHR5cGVvZiArcGFnaW5hdGlvblF1ZXJ5RHRvLmZfZnJvbV9kYXRlID09PSAnbnVtYmVyJykge1xuICAgICAgZl9mcm9tX2RhdGUgPSArcGFnaW5hdGlvblF1ZXJ5RHRvLmZfZnJvbV9kYXRlICogMTAwMDtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiArcGFnaW5hdGlvblF1ZXJ5RHRvLmZfdG9fZGF0ZSA9PT0gJ251bWJlcicpIHtcbiAgICAgIGZfdG9fZGF0ZSA9ICtwYWdpbmF0aW9uUXVlcnlEdG8uZl90b19kYXRlICogMTAwMDtcbiAgICB9XG5cbiAgICBjb25zdCB3aGVyZVF1ZXJ5ID0ge1xuICAgICAgZGVsZXRlZERhdGU6IG51bGwsXG4gICAgICBPUjogc2VhcmNoUXVlcnkocSksXG4gICAgICBjcmVhdGVkRGF0ZToge1xuICAgICAgICAuLi4ocGFnaW5hdGlvblF1ZXJ5RHRvLmZfdG9fZGF0ZSAmJiB7XG4gICAgICAgICAgbHRlOiBuZXcgRGF0ZShmX3RvX2RhdGUpLFxuICAgICAgICB9KSxcbiAgICAgICAgLi4uKHBhZ2luYXRpb25RdWVyeUR0by5mX2Zyb21fZGF0ZSAmJiB7XG4gICAgICAgICAgZ3RlOiBuZXcgRGF0ZShmX2Zyb21fZGF0ZSksXG4gICAgICAgIH0pLFxuICAgICAgfSxcbiAgICB9O1xuXG4gICAgY29uc3QgcGFyYW1zOiBhbnkgPSB7XG4gICAgICB0YWtlOiBwYWdpbmF0aW9uLnRha2UsXG4gICAgICBza2lwOiBwYWdpbmF0aW9uLnNraXAsXG4gICAgICBjdXJzb3I6IHBhZ2luYXRpb24uY3Vyc29yID8geyBpZDogcGFnaW5hdGlvbi5jdXJzb3IgfSA6IHVuZGVmaW5lZCxcbiAgICAgIG9yZGVyQnk6IHBhZ2luYXRpb24uc29ydCxcbiAgICAgIHdoZXJlOiBwYWdpbmF0aW9uLnNlYXJjaCA/PyB7fSxcbiAgICB9O1xuXG4gICAgY29uc3QgW3RvdGFsQWN0aXZpdHlMb2dzLCBhY3Rpdml0eUxvZ3NdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5wcmlzbWEuYWN0aXZpdHlMb2dzLmNvdW50KHtcbiAgICAgICAgd2hlcmU6IHdoZXJlUXVlcnksXG4gICAgICB9KSxcbiAgICAgIHRoaXMucHJpc21hLmFjdGl2aXR5TG9ncy5maW5kTWFueSh7XG4gICAgICAgIHRha2U6IHBhcmFtcy50YWtlLFxuICAgICAgICBza2lwOiBwYXJhbXMuc2tpcCxcbiAgICAgICAgY3Vyc29yOiBwYXJhbXMuY3Vyc29yLFxuICAgICAgICB3aGVyZTogd2hlcmVRdWVyeSxcbiAgICAgICAgb3JkZXJCeTogcGFyYW1zLm9yZGVyQnksXG4gICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAuLi5maWVsZHNJbmNsdWRlLFxuICAgICAgICB9LFxuICAgICAgfSksXG4gICAgXSk7XG5cbiAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICdHZXQgYWxsIGFjdGl2aXR5IGxvZ3Mgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIGFjdGl2aXR5TG9ncyxcbiAgICAgIHRvdGFsQWN0aXZpdHlMb2dzLFxuICAgICk7XG4gIH1cblxuICBhc3luYyBnZXRBY3Rpdml0eUJ5SWQoYWN0aXZpdHlJZDogbnVtYmVyKTogUHJvbWlzZTxDdXN0b21SZXNwb25zZT4ge1xuICAgIGNvbnN0IGFjdGl2aXR5ID0gYXdhaXQgdGhpcy5wcmlzbWEuYWN0aXZpdHlMb2dzLmZpbmRVbmlxdWUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGFjdGl2aXR5SWQsXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICAuLi5maWVsZHNJbmNsdWRlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmIChhY3Rpdml0eT8uZGVsZXRlZERhdGUpXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnQWN0aXZpdHkgZG9lcyBub3QgZXhpc3QnLFxuICAgICAgKTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgJ0dldCBhY3Rpdml0eSBieSBpZCBzdWNjZXNzZnVsbHknLFxuICAgICAgYWN0aXZpdHksXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGFkZEFjdGl2aXR5KGR0bzogQ3JlYXRlQWN0aXZpdHlEdG8pOiBQcm9taXNlPEN1c3RvbVJlc3BvbnNlPiB7XG4gICAgY29uc3QgYWN0aXZpdHkgPSBhd2FpdCB0aGlzLnByaXNtYS5hY3Rpdml0eUxvZ3MuY3JlYXRlKHtcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgLi4uZHRvLFxuICAgICAgICBjcmVhdGVkQnk6IGR0by51c2VySWQsXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICAuLi5maWVsZHNJbmNsdWRlLFxuICAgICAgfSxcbiAgICB9KTtcbiAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICdBZGQgYWN0aXZpdHkgc3VjY2Vzc2Z1bGx5JyxcbiAgICAgIGFjdGl2aXR5LFxuICAgICk7XG4gIH1cblxuICBhc3luYyB1cGRhdGVBY3Rpdml0eShkdG86IEVkaXRBY3Rpdml0eUR0bykge1xuICAgIGNvbnN0IHsgdXNlcklkLCAuLi5kYXRhIH0gPSBkdG87XG4gICAgY29uc3QgYWN0aXZpdHkgPSBhd2FpdCB0aGlzLnByaXNtYS5hY3Rpdml0eUxvZ3MuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZDogZHRvLmlkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghYWN0aXZpdHkgfHwgYWN0aXZpdHkuZGVsZXRlZERhdGUpXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnQWN0aXZpdHkgZG9lcyBub3QgZXhpc3QnLFxuICAgICAgKTtcblxuICAgIGNvbnN0IHVwZGF0ZWRBY3Rpdml0eSA9IGF3YWl0IHRoaXMucHJpc21hLmFjdGl2aXR5TG9ncy51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGR0by5pZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIC4uLmRhdGEsXG4gICAgICAgIHVwZGF0ZWREYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICB1cGRhdGVkQnk6IHVzZXJJZCxcbiAgICAgIH0sXG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIC4uLmZpZWxkc0luY2x1ZGUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAnVXBkYXRlIGFjdGl2aXR5IHN1Y2Nlc3NmdWxseScsXG4gICAgICB1cGRhdGVkQWN0aXZpdHksXG4gICAgKTtcbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZUFjdGl2aXR5KGFjdGl2aXR5SWQ6IG51bWJlcik6IFByb21pc2U8Q3VzdG9tUmVzcG9uc2U+IHtcbiAgICBjb25zdCBhY3Rpdml0eSA9IGF3YWl0IHRoaXMucHJpc21hLmFjdGl2aXR5TG9ncy5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBhY3Rpdml0eUlkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghYWN0aXZpdHkgfHwgYWN0aXZpdHkuZGVsZXRlZERhdGUpXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnQWN0aXZpdHkgZG9lcyBub3QgZXhpc3QnLFxuICAgICAgKTtcblxuICAgIGF3YWl0IHRoaXMucHJpc21hLmFjdGl2aXR5TG9ncy51cGRhdGUoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQ6IGFjdGl2aXR5LmlkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGVsZXRlZERhdGU6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICBIdHRwU3RhdHVzLk5PX0NPTlRFTlQsXG4gICAgICAnRGVsZXRlIGFjdGl2aXR5IHN1Y2Nlc3NmdWxseScsXG4gICAgKTtcbiAgfVxufVxuIiwiZXhwb3J0IGNvbnN0IGZpZWxkc0luY2x1ZGUgPSB7XG4gIHVzZXI6IHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgZmlyc3ROYW1lOiB0cnVlLFxuICAgICAgbGFzdE5hbWU6IHRydWUsXG4gICAgfSxcbiAgfSxcbn07XG5cbmV4cG9ydCBjb25zdCBzZWFyY2hRdWVyeSA9IChrZXl3b3JkOiBzdHJpbmcpID0+IHtcbiAgY29uc3QgaXNOYW1lQ29udGFpbnNRdWVyeSA9IHtcbiAgICBuYW1lOiB7XG4gICAgICBjb250YWluczoga2V5d29yZCB8fCAnJyxcbiAgICB9LFxuICB9O1xuXG4gIHJldHVybiBbXG4gICAge1xuICAgICAgdXNlcjoge1xuICAgICAgICBPUjogW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGVtYWlsOiB7XG4gICAgICAgICAgICAgIGNvbnRhaW5zOiBrZXl3b3JkIHx8ICcnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGZpcnN0TmFtZToge1xuICAgICAgICAgICAgICBjb250YWluczoga2V5d29yZCB8fCAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBsYXN0TmFtZToge1xuICAgICAgICAgICAgICBjb250YWluczoga2V5d29yZCB8fCAnJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICAgIH0sXG4gICAgfSxcbiAgXTtcbn07XG4iLCJpbXBvcnQge1xuICBJc05vdEVtcHR5LFxuICBJc051bWJlcixcbiAgSXNPcHRpb25hbCxcbiAgSXNTdHJpbmcsXG4gIElzRGF0ZVN0cmluZyxcbiAgSXNFbnVtLFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5pbXBvcnQgeyBBY3Rpdml0eVN0YXR1cyB9IGZyb20gJ0BwcmlzbWEvbXlzcWwnO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlQWN0aXZpdHlEdG8ge1xuICBASXNEYXRlU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjcmVhdGVkRGF0ZTogc3RyaW5nO1xuXG4gIEBJc0RhdGVTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHVwZGF0ZWREYXRlOiBzdHJpbmc7XG5cbiAgQElzRGF0ZVN0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZGVsZXRlZERhdGU6IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHVwZGF0ZWRCeTogbnVtYmVyO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBASXNFbnVtKEFjdGl2aXR5U3RhdHVzLCB7XG4gICAgbWVzc2FnZTogJ3N0YXR1cyBtdXN0IGJlIGVpdGhlciBTVUNDRVNTRlVMIE9SIFVOU1VDQ0VTU0ZVTCcsXG4gIH0pXG4gIEBJc05vdEVtcHR5KClcbiAgc3RhdHVzOiBBY3Rpdml0eVN0YXR1cztcblxuICBASXNOdW1iZXIoKVxuICBASXNOb3RFbXB0eSgpXG4gIHVzZXJJZDogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgQWN0aXZpdHlTdGF0dXMgfSBmcm9tICdAcHJpc21hL215c3FsJztcbmltcG9ydCB7XG4gIElzTnVtYmVyLFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgSXNEYXRlU3RyaW5nLFxuICBJc05vdEVtcHR5LFxuICBJc0VudW0sXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBFZGl0QWN0aXZpdHlEdG8ge1xuICBASXNOdW1iZXIoKVxuICBASXNOb3RFbXB0eSgpXG4gIGlkOiBudW1iZXI7XG5cbiAgQElzRGF0ZVN0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgY3JlYXRlZERhdGU6IHN0cmluZztcblxuICBASXNEYXRlU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICB1cGRhdGVkRGF0ZTogc3RyaW5nO1xuXG4gIEBJc0RhdGVTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGRlbGV0ZWREYXRlOiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICB1cGRhdGVkQnk6IG51bWJlcjtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgQElzRW51bShBY3Rpdml0eVN0YXR1cywge1xuICAgIG1lc3NhZ2U6ICdzdGF0dXMgbXVzdCBiZSBlaXRoZXIgU1VDQ0VTU0ZVTCBPUiBVTlNVQ0NFU1NGVUwnLFxuICB9KVxuICBASXNOb3RFbXB0eSgpXG4gIHN0YXR1czogQWN0aXZpdHlTdGF0dXM7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzTm90RW1wdHkoKVxuICB1c2VySWQ6IG51bWJlcjtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlLWFjdGl2aXR5LmR0byc7XG5leHBvcnQgKiBmcm9tICcuL2VkaXQtYWN0aXZpdHkuZHRvJztcbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZUFjdGl2aXR5IH0gZnJvbSAnLi9wcmlzbWEuc2VydmljZSc7XG5cbkBHbG9iYWwoKVxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW1ByaXNtYVNlcnZpY2VBY3Rpdml0eV0sXG4gIGV4cG9ydHM6IFtQcmlzbWFTZXJ2aWNlQWN0aXZpdHldLFxufSlcbmV4cG9ydCBjbGFzcyBQcmlzbWFNb2R1bGVBY3Rpdml0eSB7fVxuIiwiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE15U1FMQ2xpZW50IH0gZnJvbSAnQGNvbW1vbi9wcmlzbWEvbXlzcWxfcHJpc21hX2NsaWVudCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmlzbWFTZXJ2aWNlQWN0aXZpdHkgZXh0ZW5kcyBNeVNRTENsaWVudCB7XG4gIGNsZWFuRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRyYW5zYWN0aW9uKFtdKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRmlyc3RBY3RpdmF0ZUR0byB9IGZyb20gJy4vZHRvL2ZpcnN0X2FjdGl2YXRlLmR0byc7XG5pbXBvcnQgeyBCb2R5LCBDb250cm9sbGVyLCBIdHRwU3RhdHVzLCBJbmplY3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDbGllbnRQcm94eSwgTWVzc2FnZVBhdHRlcm4sIFBheWxvYWQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICcuL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IGxhc3RWYWx1ZUZyb20gfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IFJlc2V0UGFzc3dvcmRCb2R5LCBSZXNldFBhc3N3b3JkUXVlcnksIFNpZ25JbkR0byB9IGZyb20gJy4vZHRvJztcblxuQENvbnRyb2xsZXIoJ2F1dGgnKVxuZXhwb3J0IGNsYXNzIEF1dGhDb250cm9sbGVyIGV4dGVuZHMgSFRUUCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgYXV0aFNlcnZpY2U6IEF1dGhTZXJ2aWNlLFxuICAgIEBJbmplY3QoJ1FVRVVFX1NFUlZJQ0UnKSBwcml2YXRlIGNsaWVudDogQ2xpZW50UHJveHksXG4gICkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ3NpZ25pbicpXG4gIHNpZ25JbihAQm9keSgpIGJvZHk6IFNpZ25JbkR0bykge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLnNpZ25Jbihib2R5KTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignc2lnbmluX2dvb2dsZScpXG4gIGFzeW5jIHNpZ25JbldpdGhHb29nbGVSZWRpcmVjdChAUGF5bG9hZCgpIHVzZXJJbmZvOiBhbnkpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5hdXRoU2VydmljZS5zaWduSW5XaXRoR29vZ2xlKHVzZXJJbmZvKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZGVsZXRlX3VzZXInKVxuICBkZWxldGUoaWQ6IG51bWJlcikge1xuICAgIHJldHVybiB0aGlzLmF1dGhTZXJ2aWNlLmRlbGV0ZShpZCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2FjdGl2YXRlX3VzZXInKVxuICBhY3RpdmF0ZShpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIHRoaXMuYXV0aFNlcnZpY2UuYWN0aXZhdGUoaWQpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdhdXRoZW50aWNhdGlvbicpXG4gIGFzeW5jIGF1dGhlbnRpY2F0aW9uKEBQYXlsb2FkKCkgdXNlcjogYW55KSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuYXV0aGVudGljYXRpb24odXNlcik7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ3NpZ25vdXQnKVxuICBhc3luYyBzaWduT3V0KEBQYXlsb2FkKCkgYm9keTogYW55KSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuYXV0aFNlcnZpY2Uuc2lnbk91dChib2R5KTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZm9yZ290X3Bhc3N3b3JkJylcbiAgYXN5bmMgZm9yZ290UGFzc3dvcmQoQFBheWxvYWQoKSBib2R5OiB7IGVtYWlsOiBzdHJpbmcgfSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBtYWlsTWVzc2FnZSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZm9yZ290UGFzc3dvcmQoYm9keSk7XG4gICAgICBpZiAobWFpbE1lc3NhZ2UuY29kZSAhPT0gSHR0cFN0YXR1cy5PSykge1xuICAgICAgICByZXR1cm4gbWFpbE1lc3NhZ2U7XG4gICAgICB9XG4gICAgICBjb25zdCBzZW5kaW5nRW1haWwgPSBhd2FpdCBsYXN0VmFsdWVGcm9tKFxuICAgICAgICB0aGlzLmNsaWVudC5lbWl0KCdlbWFpbCcsIG1haWxNZXNzYWdlLmRhdGEpLFxuICAgICAgKTtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5BVVRILlJFU0VUX1BBU1NXT1JEX0xJTktfU0VOVCcsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdjb21tb24uSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdnZXRfcmVzZXRfcGFzc3dvcmQnKVxuICBhc3luYyB2ZXJpZnlSZXNldFBhc3N3b3JkVXJsKEBQYXlsb2FkKCkgcXVlcnk6IFJlc2V0UGFzc3dvcmRRdWVyeSkge1xuICAgIGNvbnN0IGlzVmFsaWQgPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnZlcmlmeVRva2VuKHF1ZXJ5KTtcbiAgICBpZiAoaXNWYWxpZC5jb2RlICE9PSBIdHRwU3RhdHVzLk9LKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLkJBRF9SRVFVRVNULCBpc1ZhbGlkLm1lc3NhZ2UpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KEh0dHBTdGF0dXMuT0ssICdjb21tb24uVkVSSUZJRUQnKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybigncG9zdF9yZXNldF9wYXNzd29yZCcpXG4gIGFzeW5jIHJlc2V0UGFzc3dvcmQoQFBheWxvYWQoKSBib2R5OiBSZXNldFBhc3N3b3JkQm9keSkge1xuICAgIGNvbnN0IHJlc2V0UGFzc3dvcmRSZXNwb25zZSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UucmVzZXRQYXNzd29yZChib2R5KTtcblxuICAgIHJldHVybiByZXNldFBhc3N3b3JkUmVzcG9uc2U7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ3JlZnJlc2hfdG9rZW4nKVxuICBhc3luYyByZWZyZXNoVG9rZW4oXG4gICAgQFBheWxvYWQoKSBib2R5OiB7IHVzZXJJZDogbnVtYmVyOyByZWZyZXNoVG9rZW46IHN0cmluZyB9LFxuICApIHtcbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCB0aGlzLmF1dGhTZXJ2aWNlLnJlZnJlc2hUb2tlbihib2R5KTtcbiAgICByZXR1cm4gcmVmcmVzaFRva2VuO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdmaXJzdF9hY3RpdmF0ZScpXG4gIGFzeW5jIGZpcnN0QWN0aXZhdGUoQFBheWxvYWQoKSBib2R5OiBGaXJzdEFjdGl2YXRlRHRvKSB7XG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2UuZmlyc3RBY3RpdmF0ZShib2R5KTtcblxuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yKGRhdGEsIEh0dHBTdGF0dXMuUkVRVUVTVF9USU1FT1VUKTtcbiAgICB9XG5cbiAgICBpZiAoIWRhdGEpIHtcbiAgICAgIHJldHVybiB0aGlzLmVycm9yKCdGYWlsZWQnLCBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUik7XG4gICAgfVxuXG4gICAgcmV0dXJuIHRoaXMuc3VjY2VzcygpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBSZWRpc01vZHVsZSB9IGZyb20gJ0Bjb21tb24vcmVkaXMnO1xuaW1wb3J0IHsgUHJpc21hTW9kdWxlQXV0aCB9IGZyb20gJ0Bjb21tb24vYXV0aC9wcmlzbWEnO1xuaW1wb3J0IHsgSnd0U3RyYXRlZ3kgfSBmcm9tICdAY29tbW9uL2F1dGgvc3RyYXRlZ2llcyc7XG5pbXBvcnQgeyBIdHRwRXhjZXB0aW9uRmlsdGVyIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IEFQUF9GSUxURVIgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgSnd0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9qd3QnO1xuaW1wb3J0IHsgQXV0aENvbnRyb2xsZXIgfSBmcm9tICcuL2F1dGguY29udHJvbGxlcic7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJy4vYXV0aC5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICAgIGVudkZpbGVQYXRoOiAnLmVudi5kZXYnLFxuICAgIH0pLFxuICAgIEp3dE1vZHVsZS5yZWdpc3Rlcih7fSksXG4gICAgUmVkaXNNb2R1bGUucmVnaXN0ZXIoJ1FVRVVFX1NFUlZJQ0UnKSxcbiAgICBBdXRoTW9kdWxlLFxuICAgIFByaXNtYU1vZHVsZUF1dGgsXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbQXV0aENvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtBdXRoU2VydmljZSwgSnd0U3RyYXRlZ3ldLFxuICBleHBvcnRzOiBbQXV0aFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBBdXRoTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBNYWlsTWVzc2FnZSB9IGZyb20gJ0Bjb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgRmlyc3RBY3RpdmF0ZUR0byB9IGZyb20gJy4vZHRvL2ZpcnN0X2FjdGl2YXRlLmR0byc7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlQXV0aCB9IGZyb20gJ0Bjb21tb24vYXV0aC9wcmlzbWEnO1xuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzLCBJbmplY3RhYmxlLCBVbmF1dGhvcml6ZWRFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgSnd0U2VydmljZSB9IGZyb20gJ0BuZXN0anMvand0JztcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IGNyeXB0byBmcm9tICdjcnlwdG8nO1xuaW1wb3J0IHsgUmVzZXRQYXNzd29yZEJvZHksIFJlc2V0UGFzc3dvcmRRdWVyeSwgU2lnbkluRHRvIH0gZnJvbSAnLi9kdG8nO1xuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhTZXJ2aWNlIGV4dGVuZHMgSFRUUCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlQXV0aCxcbiAgICBwcml2YXRlIGp3dDogSnd0U2VydmljZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFzeW5jIHNpZ25JbihkYXRhOiBTaWduSW5EdG8pIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICB9LFxuICAgICAgaW5jbHVkZToge1xuICAgICAgICB1c2VyR2VuZXJhbFNldHRpbmc6IHRydWUsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ2NvbW1vbi5JTkNPUlJFQ1RfQ1JFREVOVElBTFMnLFxuICAgICAgKTtcbiAgICB9IGVsc2UgaWYgKHVzZXIuZGVsZXRlZERhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnc3lzdGVtcy5VU0VSLk5PVF9FWElTVEVEJyxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICghdXNlci5hY3RpdmF0ZWREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ3N5c3RlbXMuVVNFUi5BQ1RJVkFURV9FTUFJTCcsXG4gICAgICApO1xuICAgIH1cblxuICAgIGNvbnN0IHB3TWF0Y2hlcyA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGRhdGEucGFzc3dvcmQsIHVzZXIuaGFzaCk7XG5cbiAgICBpZiAoIXB3TWF0Y2hlcykge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICdjb21tb24uSU5DT1JSRUNUX0NSRURFTlRJQUxTJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgW2FjY2Vzc1Rva2VuLCByZWZyZXNoVG9rZW5dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgdGhpcy5zaWduVG9rZW4odXNlci5pZCwgdXNlci5lbWFpbCksXG4gICAgICB0aGlzLnNpZ25SZWZyZXNoVG9rZW4odXNlci5pZCwgdXNlci5lbWFpbCksXG4gICAgXSk7XG4gICAgY29uc3QgX3VzZXIgPSB1c2VyO1xuICAgIGRlbGV0ZSBfdXNlci5oYXNoO1xuICAgIGRlbGV0ZSBfdXNlci5kZWxldGVkRGF0ZTtcblxuICAgIHJldHVybiB0aGlzLnN1Y2Nlc3MoeyBhY2Nlc3NUb2tlbiwgcmVmcmVzaFRva2VuLCB1c2VyOiBfdXNlciB9KTtcbiAgfVxuXG4gIGFzeW5jIHNpZ25JbldpdGhHb29nbGUoZGF0YSkge1xuICAgIGlmICghZGF0YSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCwgJ0ludmFsaWQgZGF0YScpO1xuICAgIH1cblxuICAgIGxldCB1c2VyID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZW1haWw6IGRhdGEuZW1haWwsXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5VTkFVVEhPUklaRUQsXG4gICAgICAgICdjb21tb24uSU5DT1JSRUNUX0NSRURFTlRJQUxTJyxcbiAgICAgICk7XG4gICAgfSBlbHNlIGlmICh1c2VyLmRlbGV0ZWREYXRlKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ3N5c3RlbXMuVVNFUi5OT1RfRVhJU1RFRCcsXG4gICAgICApO1xuICAgIH0gZWxzZSBpZiAoIXVzZXIuYWN0aXZhdGVkRGF0ZSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICdzeXN0ZW1zLlVTRVIuQUNUSVZBVEVfRU1BSUwnLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBbYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbl0gPSBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnNpZ25Ub2tlbih1c2VyLmlkLCB1c2VyLmVtYWlsKSxcbiAgICAgIHRoaXMuc2lnblJlZnJlc2hUb2tlbih1c2VyLmlkLCB1c2VyLmVtYWlsKSxcbiAgICBdKTtcbiAgICByZXR1cm4gdGhpcy5zdWNjZXNzKHsgYWNjZXNzVG9rZW4sIHJlZnJlc2hUb2tlbiwgdXNlciB9KTtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZVVzZXIoZGF0YSkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnByaXNtYS51c2VyLmNyZWF0ZSh7XG4gICAgICBkYXRhLFxuICAgICAgc2VsZWN0OiB7XG4gICAgICAgIGlkOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSk7XG4gIH1cblxuICBhc3luYyBhdXRoZW50aWNhdGlvbih1c2VyKSB7XG4gICAgcmV0dXJuIHRoaXMuc3VjY2Vzcyh1c2VyKTtcbiAgfVxuXG4gIGFzeW5jIHNpZ25PdXQoYm9keTogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5BVVRILlNJR05fT1VUX1NVQ0NFU1MnLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUiwgZXJyb3IpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGZvcmdvdFBhc3N3b3JkKGJvZHk6IHsgZW1haWw6IHN0cmluZyB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXIgPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgZW1haWw6IGJvZHkuZW1haWwsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKCF1c2VyIHx8IHVzZXIuZGVsZXRlZERhdGUgfHwgIXVzZXIuYWN0aXZhdGVkRGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdzeXN0ZW1zLlVTRVIuTk9UX0VYSVNURUQnLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCB7IGlkLCBlbWFpbCB9ID0gdXNlcjtcblxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLnNpZ25Ub2tlbihpZCwgZW1haWwpO1xuXG4gICAgICBjb25zdCBtYWlsID0gbmV3IE1haWxNZXNzYWdlKFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgJ0NoYW5nZSB5b3VyIGFjY291bnQgcGFzc3dvcmQnLFxuICAgICAgICB7XG4gICAgICAgICAgdHlwZTogJ2h0bWwnLFxuICAgICAgICAgIGRhdGE6ICdlbl9yZXNldF9wYXNzd29yZC5odG1sJyxcbiAgICAgICAgfSxcbiAgICAgICAge1xuICAgICAgICAgIHJlc2V0TGluazogYGh0dHA6Ly8ke3RoaXMuY29uZmlnLmdldDxzdHJpbmc+KFxuICAgICAgICAgICAgJ0ZFX0hPU1RfVVJMJyxcbiAgICAgICAgICApfS8ke3RoaXMuY29uZmlnLmdldChcbiAgICAgICAgICAgICdCRV9SRVNFVF9QQVNTV09SRF9FTkRQT0lOVCcsXG4gICAgICAgICAgKX0/ZW1haWw9JHtlbWFpbH0maWQ9JHtpZH0mdG9rZW49JHthY2Nlc3NUb2tlbn1gLFxuICAgICAgICB9LFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ1NlbmRpbmcgZW1haWwnLCBtYWlsKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnY29tbW9uLklOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHJlc2V0UGFzc3dvcmQoYm9keTogUmVzZXRQYXNzd29yZEJvZHkgJiBSZXNldFBhc3N3b3JkUXVlcnkpIHtcbiAgICBjb25zdCB7IHBhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQsIHRva2VuLCBpZCwgZW1haWwgfSA9IGJvZHk7XG4gICAgY29uc3QgaWRUb051bWJlciA9ICtpZDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdmVyaWZ5VG9rZW4gPSBhd2FpdCB0aGlzLnZlcmlmeVRva2VuKHtcbiAgICAgICAgdG9rZW4sXG4gICAgICAgIGlkOiBpZFRvTnVtYmVyLFxuICAgICAgICBlbWFpbCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAodmVyaWZ5VG9rZW4uY29kZSAhPT0gSHR0cFN0YXR1cy5PSykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLkJBRF9SRVFVRVNULCB2ZXJpZnlUb2tlbi5tZXNzYWdlKTtcbiAgICAgIH1cbiAgICAgIGlmIChpZCAhPT0gdmVyaWZ5VG9rZW4uZGF0YSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdjb21tb24uVU5BVVRIT1JJWkVEJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGlmIChwYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ3N5c3RlbXMuVVNFUi5DT05GSVJNX1BBU1NXT1JEX05PVF9NQVRDSEVEJyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgY29uc3Qgc2FsdCA9ICt0aGlzLmNvbmZpZy5nZXQoJ0JDUllQVF9IQVNIX1NBTFQnLCAxMCk7XG4gICAgICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xuICAgICAgY29uc3QgY2hhbmdlVXNlclBhc3N3b3JkID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBpZFRvTnVtYmVyLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaGFzaCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ3N5c3RlbXMuVVNFUi5VUERBVEVfUEFTU1dPUkRfU1VDQ0VTUycsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdjb21tb24uSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdmVyaWZ5VG9rZW4ocXVlcnk6IFJlc2V0UGFzc3dvcmRRdWVyeSkge1xuICAgIGNvbnN0IHsgaWQsIGVtYWlsLCB0b2tlbiB9ID0gcXVlcnk7XG4gICAgY29uc3Qgc2VjcmV0ID0gdGhpcy5jb25maWcuZ2V0T3JUaHJvdygnSldUX1NFQ1JFVCcpO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IFt1c2VyLCB0b2tlbkRhdGFdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnByaXNtYS51c2VyLmZpbmRVbmlxdWUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogK2lkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLmp3dC52ZXJpZnlBc3luYyh0b2tlbiwge1xuICAgICAgICAgIHNlY3JldCxcbiAgICAgICAgfSksXG4gICAgICBdKTtcblxuICAgICAgaWYgKCF1c2VyIHx8IHVzZXIuZGVsZXRlZERhdGUgfHwgIXVzZXIuYWN0aXZhdGVkRGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdzeXN0ZW1zLlVTRVIuTk9UX0VYSVNURUQnLFxuICAgICAgICApO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ1ZlcmlmaWVkJywgdG9rZW5EYXRhKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLkJBRF9SRVFVRVNULCBlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGFzeW5jIHNpZ25Ub2tlbih1c2VySWQ6IG51bWJlciwgZW1haWw6IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XG4gICAgY29uc3QgcGF5bG9hZCA9IHsgaWQ6IHVzZXJJZCwgZW1haWwgfTtcbiAgICBjb25zdCBzZWNyZXQgPSB0aGlzLmNvbmZpZy5nZXRPclRocm93KCdKV1RfU0VDUkVUJyk7XG5cbiAgICBjb25zdCBhY2Nlc3NUb2tlbiA9IGF3YWl0IHRoaXMuand0LnNpZ25Bc3luYyhwYXlsb2FkLCB7XG4gICAgICBleHBpcmVzSW46IHRoaXMuY29uZmlnLmdldE9yVGhyb3coJ0pXVF9BQ0NFU1NfVE9LRU5fRVhQSVJFJyksXG4gICAgICBzZWNyZXQ6IHNlY3JldCxcbiAgICB9KTtcblxuICAgIHJldHVybiBhY2Nlc3NUb2tlbjtcbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgc2lnblJlZnJlc2hUb2tlbih1c2VySWQ6IG51bWJlciwgZW1haWw6IHN0cmluZykge1xuICAgIGNvbnN0IHBheWxvYWQgPSB7IGlkOiB1c2VySWQsIGVtYWlsIH07XG4gICAgY29uc3Qgc2VjcmV0ID0gdGhpcy5jb25maWcuZ2V0T3JUaHJvdygnSldUX1JFRlJFU0hfVE9LRU5fU0VDUkVUJyk7XG5cbiAgICBjb25zdCByZWZyZXNoVG9rZW4gPSBhd2FpdCB0aGlzLmp3dC5zaWduQXN5bmMocGF5bG9hZCwge1xuICAgICAgZXhwaXJlc0luOiB0aGlzLmNvbmZpZy5nZXRPclRocm93KCdKV1RfUkVGUkVTSF9UT0tFTl9FWFBJUkUnKSxcbiAgICAgIHNlY3JldDogc2VjcmV0LFxuICAgIH0pO1xuXG4gICAgY29uc3QgcmVmcmVzaFRva2VuU2hhMSA9IGNyeXB0b1xuICAgICAgLmNyZWF0ZUhhc2goJ3NoYTEnKVxuICAgICAgLnVwZGF0ZShyZWZyZXNoVG9rZW4pXG4gICAgICAuZGlnZXN0KCdoZXgnKTtcblxuICAgIGF3YWl0IHRoaXMuY3JlYXRlVG9rZW4odXNlcklkLCByZWZyZXNoVG9rZW5TaGExKTtcbiAgICByZXR1cm4gcmVmcmVzaFRva2VuO1xuICB9XG5cbiAgYXN5bmMgdmFsaWRhdGVVc2VyKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGNvbnN0IHBhc3N3b3JkSXNWYWxpZCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKHBhc3N3b3JkLCB1c2VyLmhhc2gpO1xuICAgIGlmICghcGFzc3dvcmRJc1ZhbGlkKSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5VTkFVVEhPUklaRUQsXG4gICAgICAgICdjb21tb24uSU5DT1JSRUNUX0NSRURFTlRJQUxTJyxcbiAgICAgICk7XG4gICAgfVxuICAgIHJldHVybiB1c2VyO1xuICB9XG5cbiAgYXN5bmMgcmVmcmVzaFRva2VuKGJvZHk6IHsgdXNlcklkOiBudW1iZXI7IHJlZnJlc2hUb2tlbjogc3RyaW5nIH0pIHtcbiAgICBjb25zdCB7IHVzZXJJZCwgcmVmcmVzaFRva2VuIH0gPSBib2R5O1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMucHJpc21hLnRva2Vucy5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIHJlZnJlc2hUb2tlblNoYTE6IGNyeXB0b1xuICAgICAgICAgICAgLmNyZWF0ZUhhc2goJ3NoYTEnKVxuICAgICAgICAgICAgLnVwZGF0ZShyZWZyZXNoVG9rZW4pXG4gICAgICAgICAgICAuZGlnZXN0KCdoZXgnKSxcbiAgICAgICAgICB1c2VySWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIGlmICghdG9rZW4pIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnc3lzdGVtcy5BVVRILlJFRlJFU0hfVE9LRU5fRVhQSVJFRCcsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGp3dFJlZnJlc2hUb2tlblNlY3JldCA9IHRoaXMuY29uZmlnLmdldCgnSldUX1JFRlJFU0hfVE9LRU5fU0VDUkVUJyk7XG5cbiAgICAgIGNvbnN0IHBheWxvYWQgPSBhd2FpdCB0aGlzLmp3dC52ZXJpZnlBc3luYyhyZWZyZXNoVG9rZW4sIHtcbiAgICAgICAgc2VjcmV0OiBqd3RSZWZyZXNoVG9rZW5TZWNyZXQsXG4gICAgICB9KTtcblxuICAgICAgY29uc3QgYWNjZXNzVG9rZW4gPSBhd2FpdCB0aGlzLnNpZ25Ub2tlbihwYXlsb2FkLmVtYWlsLCBwYXlsb2FkLmlkKTtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5BVVRILkdFVF9TVUNDRVNTX1RPS0VOX1NVQ0NFU1MnLFxuICAgICAgICB7IGFjY2Vzc1Rva2VuIH0sXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnY29tbW9uLklOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYXN5bmMgY3JlYXRlVG9rZW4odXNlcklkOiBudW1iZXIsIGhhc2hlZFRva2VuOiBzdHJpbmcpIHtcbiAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMucHJpc21hLnRva2Vucy5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgdXNlcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdG9rZW4pIHtcbiAgICAgIHJldHVybiB0aGlzLnByaXNtYS50b2tlbnMuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIHVzZXJJZCxcbiAgICAgICAgICByZWZyZXNoVG9rZW5TaGExOiBoYXNoZWRUb2tlbixcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIHJldHVybiBhd2FpdCB0aGlzLnByaXNtYS50b2tlbnMudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIHVzZXJJZCxcbiAgICAgICAgcmVmcmVzaFRva2VuU2hhMTogaGFzaGVkVG9rZW4sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgYXN5bmMgZGVsZXRlKGlkOiBudW1iZXIpIHtcbiAgICBjb25zdCBpdGVtID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghaXRlbSkge1xuICAgICAgcmV0dXJuIHRoaXMubm90Rm91bmQoKTtcbiAgICB9XG5cbiAgICBjb25zdCB1cGRhdGVkSXRlbSA9IGF3YWl0IHRoaXMucHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkLFxuICAgICAgfSxcbiAgICAgIGRhdGE6IHtcbiAgICAgICAgZGVsZXRlZERhdGU6IG5ldyBEYXRlKCksXG4gICAgICB9LFxuICAgIH0pO1xuXG4gICAgcmV0dXJuIHRoaXMuc3VjY2Vzcyh1cGRhdGVkSXRlbSk7XG4gIH1cblxuICBhc3luYyBhY3RpdmF0ZShpZDogbnVtYmVyKSB7XG4gICAgY29uc3QgaXRlbSA9IGF3YWl0IHRoaXMucHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZCxcbiAgICAgIH0sXG4gICAgfSk7XG5cbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgIHJldHVybiB0aGlzLm5vdEZvdW5kKCk7XG4gICAgfVxuXG4gICAgY29uc3QgdXBkYXRlZEl0ZW0gPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBpZCxcbiAgICAgIH0sXG4gICAgICBkYXRhOiB7XG4gICAgICAgIGRlbGV0ZWREYXRlOiBudWxsLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLnN1Y2Nlc3ModXBkYXRlZEl0ZW0pO1xuICB9XG5cbiAgYXN5bmMgZmlyc3RBY3RpdmF0ZShkdG86IEZpcnN0QWN0aXZhdGVEdG8pIHtcbiAgICBjb25zdCBzZWNyZXQgPSB0aGlzLmNvbmZpZy5nZXRPclRocm93KCdKV1RfU0VDUkVUJyk7XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHRoaXMuand0LnZlcmlmeUFzeW5jKGR0by50b2tlbiwge1xuICAgICAgICBzZWNyZXQsXG4gICAgICB9KTtcblxuICAgICAgYXdhaXQgdGhpcy5wcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgYWN0aXZhdGVkRGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgaWYgKGVycm9yIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyb3IubmFtZSA9PT0gJ1Rva2VuRXhwaXJlZEVycm9yJykge1xuICAgICAgICBjb25zdCB0b2tlbiA9IGF3YWl0IHRoaXMuand0LnNpZ25Bc3luYyhcbiAgICAgICAgICB7XG4gICAgICAgICAgICBpZDogZHRvLmlkLFxuICAgICAgICAgICAgZW1haWw6IGR0by5lbWFpbCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGV4cGlyZXNJbjogdGhpcy5jb25maWcuZ2V0T3JUaHJvdygnSldUX1JFRlJFU0hfVE9LRU5fRVhQSVJFJyksXG4gICAgICAgICAgICBzZWNyZXQsXG4gICAgICAgICAgfSxcbiAgICAgICAgKTtcbiAgICAgICAgcmV0dXJuIHRva2VuO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgSXNTdHJpbmcsIElzRW1haWwsIElzSW50IH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIEZpcnN0QWN0aXZhdGVEdG8ge1xuICBASXNFbWFpbCgpXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQElzSW50KClcbiAgQFR5cGUoKCkgPT4gTnVtYmVyKVxuICBpZDogbnVtYmVyO1xuXG4gIEBJc1N0cmluZygpXG4gIHRva2VuOiBzdHJpbmc7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2ZpcnN0X2FjdGl2YXRlLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL3Jlc2V0LXBhc3N3b3JkLXF1ZXJ5LmR0byc7XG5leHBvcnQgKiBmcm9tICcuL3NpZ24taW4uZHRvJztcbiIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBJc1N0cmluZywgSXNFbWFpbCwgSXNJbnQsIElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgUmVzZXRQYXNzd29yZFF1ZXJ5IHtcbiAgZW1haWw6IHN0cmluZztcbiAgaWQ6IG51bWJlcjtcbiAgdG9rZW46IHN0cmluZztcbn1cblxuZXhwb3J0IGNsYXNzIFJlc2V0UGFzc3dvcmRCb2R5IGV4dGVuZHMgUmVzZXRQYXNzd29yZFF1ZXJ5IHtcbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgY29uZmlybVBhc3N3b3JkOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBJc1N0cmluZywgSXNFbWFpbCwgSXNOb3RFbXB0eSB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBTaWduSW5EdG8ge1xuICBASXNFbWFpbCgpXG4gIEBJc05vdEVtcHR5KClcbiAgZW1haWw6IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIHBhc3N3b3JkOiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBPcHRpb25hbCB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBJc051bWJlciwgQXJyYXlOb3RFbXB0eSwgVmFsaWRhdGVOZXN0ZWQgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgSW52b2ljZUl0ZW1EdG8gfSBmcm9tICcuL2ludm9pY2UtaXRlbS5kdG8nO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlSW52b2ljZUl0ZW1EdG8ge1xuICBASXNOdW1iZXIoKVxuICBAT3B0aW9uYWwoKVxuICBjcmVhdGVkQnk6IG51bWJlcjtcblxuICBAVmFsaWRhdGVOZXN0ZWQoe2VhY2g6IHRydWV9KVxuICBAQXJyYXlOb3RFbXB0eSgpXG4gIEBUeXBlKCgpID0+IEludm9pY2VJdGVtRHRvKVxuICBpdGVtczogSW52b2ljZUl0ZW1EdG9bXTtcbn0gICAgICAiLCJpbXBvcnQgeyBJbnZvaWNlU3RhdHVzIH0gZnJvbSAnQHByaXNtYS9teXNxbCc7XG5pbXBvcnQgeyBUeXBlIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgSXNOdW1iZXIsIElzU3RyaW5nLCBJc0VudW0sIElzTm90RW1wdHksIElzRGF0ZVN0cmluZywgTWF4TGVuZ3RoLCBJc09wdGlvbmFsLCBJc0FycmF5LCBBcnJheU5vdEVtcHR5LCBJc09iamVjdCwgVmFsaWRhdGVOZXN0ZWQgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgSW52b2ljZUl0ZW1EdG8gfSBmcm9tICcuL2ludm9pY2UtaXRlbS5kdG8nO1xuXG5leHBvcnQgY2xhc3MgQ3JlYXRlSW52b2ljZUR0byB7XG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgdXBkYXRlZEJ5OiBudW1iZXI7ICAgXG5cbiAgQElzRGF0ZVN0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZGVsZXRlZERhdGU6IERhdGU7ICBcblxuICBASXNEYXRlU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBkdWVEYXRlOiBEYXRlOyAgICAgIFxuXG4gIEBJc051bWJlcigpXG4gIEBJc05vdEVtcHR5KClcbiAgY3VzdG9tZXJJZDogbnVtYmVyOyAgIFxuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgY3JlYXRlZEJ5OiBudW1iZXI7XG5cbiAgQElzRGF0ZVN0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgY3JlYXRlSW52b2ljZURhdGU6IERhdGU7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBwYXltZW50OiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBkaXNjb3VudDogbnVtYmVyO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgY29udGFjdFBlcnNpb246IHN0cmluZztcblxuICBASXNPcHRpb25hbCgpXG4gIEBWYWxpZGF0ZU5lc3RlZCh7ZWFjaDogdHJ1ZX0pXG4gIEBBcnJheU5vdEVtcHR5KClcbiAgQFR5cGUoKCkgPT4gSW52b2ljZUl0ZW1EdG8pXG4gIGl0ZW1zOiBJbnZvaWNlSXRlbUR0b1tdO1xufSAgICAgICIsImltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQgeyBJc051bWJlciwgSXNOb3RFbXB0eSwgQXJyYXlOb3RFbXB0eSwgVmFsaWRhdGVOZXN0ZWQgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgRGVsZXRlSXRlbUR0byB9IGZyb20gJy4vZGVsZXRlLWl0ZW0uZHRvJztcblxuZXhwb3J0IGNsYXNzIERlbGV0ZUludm9pY2VJdGVtRHRvIHtcbiAgQFZhbGlkYXRlTmVzdGVkKHtlYWNoOiB0cnVlfSlcbiAgQEFycmF5Tm90RW1wdHkoKVxuICBAVHlwZSgoKSA9PiBEZWxldGVJdGVtRHRvKVxuICBpdGVtczogRGVsZXRlSXRlbUR0b1tdO1xufSAgICAgIiwiaW1wb3J0IHsgSXNOdW1iZXIsIElzTm90RW1wdHkgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgRGVsZXRlSXRlbUR0byB7XG4gIEBJc05vdEVtcHR5KClcbiAgQElzTnVtYmVyKClcbiAgaWQ6IG51bWJlcjtcbn0gICAgICAiLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZS1pbnZvaWNlcy5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi91cGRhdGUtaW52b2ljZXMuZHRvJztcbmV4cG9ydCAqIGZyb20gJy4vY3JlYXRlLWludm9pY2UtaXRlbXMuZHRvJztcbmV4cG9ydCAqIGZyb20gJy4vZGVsZXRlLWludm9pY2UtaXRlbS5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9kZWxldGUtaXRlbS5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9pbnZvaWNlLWl0ZW0uZHRvJztcbmV4cG9ydCAqIGZyb20gJy4vdXBkYXRlLWludm9pY2VzLmR0byciLCJpbXBvcnQgeyBJc051bWJlciwgSXNTdHJpbmcsIElzTm90RW1wdHksIElzT3B0aW9uYWwsIE1heExlbmd0aCwgSXNEYXRlU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIEludm9pY2VJdGVtRHRvIHtcbiAgQElzTm90RW1wdHkoKVxuICBASXNTdHJpbmcoKVxuICBATWF4TGVuZ3RoKDI1NSlcbiAgZGVzY3JpcHRpb246IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNOb3RFbXB0eSgpXG4gIGFtb3VudDogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgY3JlYXRlZEJ5OiBudW1iZXI7XG5cbiAgQElzRGF0ZVN0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgdXBkYXRlZERhdGU6IERhdGU7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICB1cGRhdGVkQnk6IG51bWJlcjtcblxuICBASXNEYXRlU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBkZWxldGVkRGF0ZTogRGF0ZTtcbn0gICAgICAiLCJpbXBvcnQgeyBQYWdpbmF0aW9uUXVlcnlEdG8gfSBmcm9tIFwiQGNvbW1vbi9kdG9cIjtcbmltcG9ydCB7IElzT3B0aW9uYWwsIElzU3RyaW5nIH0gZnJvbSBcImNsYXNzLXZhbGlkYXRvclwiO1xuXG5leHBvcnQgY2xhc3MgUGFnaW5hdGlvbkludm9pY2VRdWVyeUR0byBleHRlbmRzIFBhZ2luYXRpb25RdWVyeUR0byB7XG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgYW1vdW50OiBudW1iZXI7XG59IiwiaW1wb3J0IHsgSXNOdW1iZXIsIElzU3RyaW5nLCBJc05vdEVtcHR5LCBJc09wdGlvbmFsLCBNYXhMZW5ndGgsIElzRGF0ZVN0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBVcGRhdGVJbnZvaWNlSXRlbUR0byB7XG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgaWQ6IG51bWJlclxuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgQE1heExlbmd0aCgyNTUpXG4gIGRlc2NyaXB0aW9uOiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBhbW91bnQ6IG51bWJlcjtcblxuICBASXNOdW1iZXIoKVxuICBASXNOb3RFbXB0eSgpXG4gIGNyZWF0ZWRCeTogbnVtYmVyO1xuXG4gIEBJc0RhdGVTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHVwZGF0ZWREYXRlOiBEYXRlO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgdXBkYXRlZEJ5OiBudW1iZXI7XG5cbiAgQElzRGF0ZVN0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgZGVsZXRlZERhdGU6IERhdGU7XG59ICAgICIsImltcG9ydCB7IEludm9pY2VTdGF0dXMgfSBmcm9tICdAcHJpc21hL215c3FsJztcbmltcG9ydCB7IFR5cGUgfSBmcm9tICdjbGFzcy10cmFuc2Zvcm1lcic7XG5pbXBvcnQge1xuICBJc051bWJlcixcbiAgSXNTdHJpbmcsXG4gIElzRW51bSxcbiAgSXNOb3RFbXB0eSxcbiAgSXNEYXRlU3RyaW5nLFxuICBNYXhMZW5ndGgsXG4gIElzT3B0aW9uYWwsXG4gIFZhbGlkYXRlTmVzdGVkLFxuICBBcnJheU5vdEVtcHR5LFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgVXBkYXRlSW52b2ljZUl0ZW1EdG8gfSBmcm9tICcuL3VwZGF0ZS1pbnZvaWNlLWl0ZW0uZHRvJztcblxuZXhwb3J0IGNsYXNzIFVwZGF0ZUludm9pY2VEdG8ge1xuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHVwZGF0ZWRCeTogbnVtYmVyOyAgIFxuXG4gIEBJc0RhdGVTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGRlbGV0ZWREYXRlOiBEYXRlO1xuXG4gIEBJc0RhdGVTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGR1ZURhdGU6IERhdGU7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBjdXN0b21lcklkOiBudW1iZXI7XG5cbiAgQElzRW51bShJbnZvaWNlU3RhdHVzKVxuICBASXNPcHRpb25hbCgpXG4gIHN0YXR1czogSW52b2ljZVN0YXR1cztcblxuICBASXNEYXRlU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjcmVhdGVJbnZvaWNlRGF0ZTogRGF0ZTtcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHBheW1lbnQ6IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIGRpc2NvdW50OiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjb250YWN0UGVyc2lvbjogc3RyaW5nO1xuXG4gIEBWYWxpZGF0ZU5lc3RlZCh7IGVhY2g6IHRydWUgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBAVHlwZSgoKSA9PiBVcGRhdGVJbnZvaWNlSXRlbUR0bylcbiAgaXRlbXM6IFVwZGF0ZUludm9pY2VJdGVtRHRvW107XG59XG4iLCJpbXBvcnQgeyBScGNWYWxpZGF0aW9uRmlsdGVyIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7XG4gIEJvZHksXG4gIENvbnRyb2xsZXIsXG4gIEdldCxcbiAgUGFyc2VJbnRQaXBlLFxuICBVc2VGaWx0ZXJzLFxuICBWYWxpZGF0aW9uUGlwZSxcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTWVzc2FnZVBhdHRlcm4sIFBheWxvYWQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHtcbiAgQ3JlYXRlSW52b2ljZUR0byxcbiAgQ3JlYXRlSW52b2ljZUl0ZW1EdG8sXG4gIFVwZGF0ZUludm9pY2VEdG8sXG59IGZyb20gJy4vZHRvJztcbmltcG9ydCB7IERlbGV0ZUludm9pY2VJdGVtRHRvIH0gZnJvbSAnLi9kdG8vZGVsZXRlLWludm9pY2UtaXRlbS5kdG8nO1xuaW1wb3J0IHsgUGFnaW5hdGlvbkludm9pY2VRdWVyeUR0byB9IGZyb20gJy4vZHRvL3BhZ2luYXRpb24uZHRvJztcbmltcG9ydCB7IEludm9pY2VzU2VydmljZSB9IGZyb20gJy4vaW52b2ljZXMuc2VydmljZSc7XG5pbXBvcnQgeyBJbnZvaWNlU3RhdHVzIH0gZnJvbSAnQHByaXNtYS9teXNxbCc7XG5cbkBDb250cm9sbGVyKCdpbnZvaWNlcycpXG5leHBvcnQgY2xhc3MgSW52b2ljZXNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBpbnZvaWNlc1NlcnZpY2U6IEludm9pY2VzU2VydmljZSkge31cblxuICBATWVzc2FnZVBhdHRlcm4oJ2dldF9pbnZvaWNlcycpXG4gIGFzeW5jIGdldEludm9pY2VzKEBCb2R5KCkgcGFnaW5hdGlvblF1ZXJ5RHRvOiBQYWdpbmF0aW9uSW52b2ljZVF1ZXJ5RHRvKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuaW52b2ljZXNTZXJ2aWNlLmdldEludm9pY2VzKHBhZ2luYXRpb25RdWVyeUR0byk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2FkZF9pbnZvaWNlJylcbiAgQFVzZUZpbHRlcnMobmV3IFJwY1ZhbGlkYXRpb25GaWx0ZXIoKSlcbiAgYXN5bmMgYWRkSW52b2ljZShcbiAgICBAUGF5bG9hZChuZXcgVmFsaWRhdGlvblBpcGUoeyB3aGl0ZWxpc3Q6IHRydWUgfSkpIGR0bzogQ3JlYXRlSW52b2ljZUR0byxcbiAgKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuaW52b2ljZXNTZXJ2aWNlLmFkZEludm9pY2UoZHRvKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZ2V0X2ludm9pY2VfYnlfaWQnKVxuICBhc3luYyBnZXRJbnZvaWNlKGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5pbnZvaWNlc1NlcnZpY2UuZ2V0SW52b2ljZUJ5SWQoaWQpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdhZGRfaW52b2ljZV9pdGVtJylcbiAgQFVzZUZpbHRlcnMobmV3IFJwY1ZhbGlkYXRpb25GaWx0ZXIoKSlcbiAgYXN5bmMgYWRkSW52b2ljZUl0ZW0oXG4gICAgQEJvZHkoJ2lkJykgaWQ6IG51bWJlcixcbiAgICBAQm9keSgnZHRvJywgbmV3IFZhbGlkYXRpb25QaXBlKHsgd2hpdGVsaXN0OiB0cnVlIH0pKVxuICAgIGR0bzogQ3JlYXRlSW52b2ljZUl0ZW1EdG8sXG4gICkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLmludm9pY2VzU2VydmljZS5hZGRJbnZvaWNlSXRlbShpZCwgZHRvKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybigndXBkYXRlX2ludm9pY2UnKVxuICBAVXNlRmlsdGVycyhuZXcgUnBjVmFsaWRhdGlvbkZpbHRlcigpKVxuICBhc3luYyB1cGRhdGVJbnZvaWNlKFxuICAgIEBCb2R5KCdpZCcpIGlkOiBudW1iZXIsXG4gICAgQEJvZHkoJ2R0bycsIG5ldyBWYWxpZGF0aW9uUGlwZSh7IHdoaXRlbGlzdDogdHJ1ZSB9KSkgZHRvOiBVcGRhdGVJbnZvaWNlRHRvLFxuICApIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5pbnZvaWNlc1NlcnZpY2UudXBkYXRlSW52b2ljZShpZCwgZHRvKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZGVsZXRlX2ludm9pY2UnKVxuICBhc3luYyBkZWxldGVJbnZvaWNlKGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5pbnZvaWNlc1NlcnZpY2UuZGVsZXRlSW52b2ljZShpZCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2RlbGV0ZV9pbnZvaWNlX2l0ZW0nKVxuICBAVXNlRmlsdGVycyhuZXcgUnBjVmFsaWRhdGlvbkZpbHRlcigpKVxuICBhc3luYyBkZWxldGVJbnZvaWNlSXRlbShcbiAgICBAQm9keSgnaWQnKSBpZDogbnVtYmVyLFxuICAgIEBCb2R5KCdkdG8nLCBuZXcgVmFsaWRhdGlvblBpcGUoeyB3aGl0ZWxpc3Q6IHRydWUgfSkpXG4gICAgZHRvOiBEZWxldGVJbnZvaWNlSXRlbUR0byxcbiAgKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMuaW52b2ljZXNTZXJ2aWNlLmRlbGV0ZUludm9pY2VJdGVtKGlkLCBkdG8pO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdnZXRfc3VtbWFyeV9pbnZvaWNlJylcbiAgYXN5bmMgZ2V0U3VtbWFyeUludm9pY2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuaW52b2ljZXNTZXJ2aWNlLmdldFN1bW1hcnlJbnZvaWNlKCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1vZHVsZSwgTWlkZGxld2FyZUNvbnN1bWVyLCBOZXN0TW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgSW52b2ljZXNDb250cm9sbGVyIH0gZnJvbSAnLi9pbnZvaWNlcy5jb250cm9sbGVyJztcbmltcG9ydCB7IEludm9pY2VzU2VydmljZSB9IGZyb20gJy4vaW52b2ljZXMuc2VydmljZSc7XG5pbXBvcnQgeyBQcmlzbWFNb2R1bGVJbnZvaWNlIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5pbXBvcnQgY29va2llUGFyc2VyIGZyb20gJ2Nvb2tpZS1wYXJzZXInO1xuaW1wb3J0IHsgUHJpc21hUXVlcnkgfSBmcm9tICdAY29tbW9uL3V0aWxzL2R0by9xdWVyeS5wcmlzbWEnO1xuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBQcmlzbWFNb2R1bGVJbnZvaWNlLFxuICBdLFxuICBjb250cm9sbGVyczogW0ludm9pY2VzQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW0ludm9pY2VzU2VydmljZSwgSW52b2ljZXNNb2R1bGUsIFByaXNtYVF1ZXJ5LCBIVFRQXSxcbn0pXG5leHBvcnQgY2xhc3MgSW52b2ljZXNNb2R1bGUgaW1wbGVtZW50cyBOZXN0TW9kdWxlIHtcbiAgY29uZmlndXJlKGNvbnN1bWVyOiBNaWRkbGV3YXJlQ29uc3VtZXIpIHtcbiAgICBjb25zdW1lci5hcHBseShjb29raWVQYXJzZXIoKSkuZm9yUm91dGVzKCcqJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cFN0YXR1cywgSW5qZWN0YWJsZSwgUGFyc2VVVUlEUGlwZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7XG4gIENyZWF0ZUludm9pY2VEdG8sXG4gIENyZWF0ZUludm9pY2VJdGVtRHRvLFxuICBJbnZvaWNlSXRlbUR0byxcbiAgVXBkYXRlSW52b2ljZUR0byxcbn0gZnJvbSAnLi9kdG8nO1xuaW1wb3J0IHsgRGVsZXRlSW52b2ljZUl0ZW1EdG8gfSBmcm9tICcuL2R0by9kZWxldGUtaW52b2ljZS1pdGVtLmR0byc7XG5pbXBvcnQgeyBnZXRJbnZvaWNlc1NxbCwgZ2V0U3VtbWFyeUFtb3VudFNxbCwgZ2V0U3VtQWxsQW1vdW50IH0gZnJvbSAnLi9zcWwnO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZUludm9pY2UgfSBmcm9tICcuL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XG5pbXBvcnQgeyBQcmlzbWEgfSBmcm9tICdAcHJpc21hL215c3FsJztcbmltcG9ydCB7IFJFU1RmdWxQYXJhbXMsIFJFU1RmdWxTZXJ2aWNlIH0gZnJvbSAnQGNvbW1vbi91dGlscy9yZXF1ZXRzLnV0aWwnO1xuaW1wb3J0IHsgUHJpc21hUXVlcnkgfSBmcm9tICdAY29tbW9uL3V0aWxzL2R0by9xdWVyeS5wcmlzbWEnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW52b2ljZXNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcmlzbWE6IFByaXNtYVNlcnZpY2VJbnZvaWNlLFxuICAgIHByaXZhdGUgcmVhZG9ubHkgcHJpc21hcXVlcnk6IFByaXNtYVF1ZXJ5LFxuICAgIHByaXZhdGUgaHR0cDogSFRUUCxcbiAgKSB7XG4gICAgLy8gc3VwZXIoKTtcbiAgfVxuICBwcm90ZWN0ZWQgZ2V0RGIoKTogUHJpc21hUXVlcnkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5wcmlzbWFxdWVyeS53aGVyZSh7IGRlbGV0ZWREYXRlOiBudWxsIH0pO1xuICAgIHJldHVybiBxdWVyeTtcbiAgfVxuXG4gIHByb3RlY3RlZCBwYXJhbXM6IFJFU1RmdWxQYXJhbXMgPSB7XG4gICAgbGlzdDoge1xuICAgICAgZmlsdGVyRmllbGRzOiBbJ3N0YXR1cyddLFxuICAgICAgc2VhcmNoRmllbGRzOiBbJ3N0YXR1cyddLFxuICAgIH0sXG4gIH07XG5cbiAgYXN5bmMgZ2V0SW52b2ljZXMocGFnaW5hdGlvblF1ZXJ5RHRvOiBhbnkpIHtcbiAgICB0cnkge1xuICAgICAgbGV0IHsgcSwgZl9zdGF0dXMsIG9yZGVyLCBsaW1pdCwgcGFnZSB9ID0gcGFnaW5hdGlvblF1ZXJ5RHRvO1xuICAgICAgcSA9IHEgPyBgJSR7cX0lYCA6IG51bGw7XG5cblxuICAgICAgbGV0IG9yZGVyS2V5ID0gb3JkZXIgPyBvcmRlci5zcGxpdCgnICcpWzBdIDogJ2kuaWQnO1xuICAgICAgb3JkZXJLZXkgPSAnZnVsbE5hbWUnID8gJ2MuZnVsbE5hbWUnIDogb3JkZXJLZXk7XG4gICAgICBjb25zdCBvcmRlclR5cGUgPSBvcmRlciA/b3JkZXIuc3BsaXQoJyAnKVsxXSA6ICdBU0MnO1xuXG4gICAgICBsaW1pdCA9IE51bWJlcihsaW1pdCA/PyAxKVxuICAgICAgY29uc3Qgb2Zmc2V0ID0gKE51bWJlcihwYWdlID8/IDEpLSAxKSAqIGxpbWl0O1xuXG4gICAgICBsZXQgc3FsU3RyID0gZ2V0SW52b2ljZXNTcWw7XG4gICAgICBzcWxTdHIgPSBmX3N0YXR1cyA/IGAke3NxbFN0cn0gQU5EIGkuc3RhdHVzID0gJyQxJyBgIDogc3FsU3RyO1xuICAgICAgc3FsU3RyID0gcSA/IGAke3NxbFN0cn0gQU5EIChjLmZ1bGxOYW1lIGxpa2UgJyQyJyBPUiBjLnBob25lIGxpa2UgJyQyJyApYCA6IHNxbFN0cjtcbiAgICAgIHNxbFN0ciA9IGAke3NxbFN0cn0gR1JPVVAgQlkgaS5pZCBgO1xuICAgICAgc3FsU3RyID0gYCR7c3FsU3RyfSBPUkRFUiBCWSAke29yZGVyS2V5fSAke29yZGVyVHlwZX1cbiAgICAgICAgICAgIExJTUlUICR7bGltaXR9IE9GRlNFVCAke29mZnNldH1cbiAgICAgIGBcbiAgICAgIGxldCBuZXdTcWxTdHIgPSBzcWxTdHIucmVwbGFjZUFsbCgnJDEnLCBmX3N0YXR1cykucmVwbGFjZUFsbCgnJDInLCBxKTtcbiAgICAgIGNvbnN0IGludm9pY2VzID0gYXdhaXQgdGhpcy5wcmlzbWEuJHF1ZXJ5UmF3VW5zYWZlKG5ld1NxbFN0cik7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ2dldF9pbnZvaWNlcycsIHsgaW52b2ljZXMsIHJvd0NvdW50OiBpbnZvaWNlc1snbGVuZ3RoJ10gfSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdHZXQgaW52b2ljZXMgZXJyb3InLFxuICAgICAgICBlcnJvcixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy8gYWRkIG5ldyBpdGVtIHRvIGludm9pY2VcbiAgYXN5bmMgYWRkSW52b2ljZUl0ZW0oaWQ6IG51bWJlciwgZHRvOiBDcmVhdGVJbnZvaWNlSXRlbUR0bykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbnZvaWNlRXhpc3RzID0gYXdhaXQgdGhpcy5wcmlzbWEuaW52b2ljZXMuY291bnQoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbnZvaWNlRXhpc3RzICE9PSAwKSB7XG4gICAgICAgIGR0by5pdGVtcy5mb3JFYWNoKChpdGVtOiBJbnZvaWNlSXRlbUR0bykgPT4ge1xuICAgICAgICAgIGl0ZW0uY3JlYXRlZEJ5ID0gZHRvLmNyZWF0ZWRCeTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgaW52b2ljZUFuZEl0ZW1zID0gYXdhaXQgdGhpcy5wcmlzbWEuaW52b2ljZXMudXBkYXRlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpbnZvaWNlSXRlbXM6IHtcbiAgICAgICAgICAgICAgY3JlYXRlOiBkdG8uaXRlbXMsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgICAgaW52b2ljZUl0ZW1zOiB7XG4gICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICAgIGFtb3VudDogdHJ1ZSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAgICdBZGQgaW52b2ljZSBpdGVtcyBzdWNjZXNzJyxcblxuICAgICAgICAgIGludm9pY2VBbmRJdGVtcyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ1RoZSBpbnZvaWNlIGRvZXMgbm90IGV4aXN0JyxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdBZGQgaW52b2ljZSBpdGVtcyBlcnJvcicsXG4gICAgICAgIGVycm9yLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhZGRJbnZvaWNlKGR0bzogQ3JlYXRlSW52b2ljZUR0bykge1xuICAgIHRyeSB7XG4gICAgICBkdG8uaXRlbXM/LmZvckVhY2goKGl0ZW06IEludm9pY2VJdGVtRHRvKSA9PiB7XG4gICAgICAgIGl0ZW0uY3JlYXRlZEJ5ID0gZHRvLmNyZWF0ZWRCeTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpbnZvaWNlQW5kSXRlbXMgPSBhd2FpdCB0aGlzLnByaXNtYS5pbnZvaWNlcy5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZHVlRGF0ZTogZHRvLmR1ZURhdGUsXG4gICAgICAgICAgY3VzdG9tZXJJZDogZHRvLmN1c3RvbWVySWQsXG4gICAgICAgICAgcGF5bWVudDogZHRvLnBheW1lbnQsXG4gICAgICAgICAgY3JlYXRlSW52b2ljZURhdGU6IGR0by5jcmVhdGVJbnZvaWNlRGF0ZSxcbiAgICAgICAgICBkaXNjb3VudDogZHRvLmRpc2NvdW50LFxuICAgICAgICAgIGNvbnRhY3RQZXJzb246IGR0by5jb250YWN0UGVyc2lvbiA/IGR0by5jb250YWN0UGVyc2lvbiA6IG51bGwsXG4gICAgICAgICAgaW52b2ljZUl0ZW1zOiB7XG4gICAgICAgICAgICBjcmVhdGU6IGR0by5pdGVtcyxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNyZWF0ZWRCeTogZHRvLmNyZWF0ZWRCeSxcbiAgICAgICAgfSxcbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIGludm9pY2VJdGVtczoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogdHJ1ZSxcbiAgICAgICAgICAgICAgYW1vdW50OiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICdBZGQgaW52b2ljZSBzdWNjZXNzJyxcbiAgICAgICAgaW52b2ljZUFuZEl0ZW1zLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvcik7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ0FkZCBpbnZvaWNlIGVycm9yJyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldEludm9pY2VCeUlkKGlkOiBudW1iZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW52b2ljZSA9IGF3YWl0IHRoaXMucHJpc21hLmludm9pY2VzLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkLFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgaW52b2ljZUl0ZW1zOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICBhbW91bnQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgZGVsZXRlZERhdGU6IG51bGwsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICBjdXN0b21lcjoge1xuICAgICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAgIGlkOiB0cnVlLFxuICAgICAgICAgICAgICBmdWxsTmFtZTogdHJ1ZSxcbiAgICAgICAgICAgICAgcGhvbmU6IHRydWUsXG4gICAgICAgICAgICAgIGVtYWlsOiB0cnVlLFxuICAgICAgICAgICAgICBhZGRyZXNzOiB0cnVlLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghaW52b2ljZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ1RoZSBpbnZvaWNlIGRvZXMgbm90IGV4aXN0JyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGludm9pY2UuZGVsZXRlZERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdEZWxldGUgaW52b2ljZSBzdWNjZXNzJyxcbiAgICAgICAgKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLk9LLCAnZ2V0X2ludm9pY2UnLCB7XG4gICAgICAgIGludm9pY2UsXG4gICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ0dldCBpbnZvaWNlIGVycm9yJyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZUludm9pY2UoaWQ6IG51bWJlciwgZHRvOiBVcGRhdGVJbnZvaWNlRHRvKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IGludm9pY2UgPSBhd2FpdCB0aGlzLnByaXNtYS5pbnZvaWNlcy5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGRlbGV0ZWREYXRlOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgaW52b2ljZUl0ZW1zOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaWYgKCFpbnZvaWNlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnVGhlIFRoZSBpbnZvaWNlIGRvZXMgbm90IGV4aXN0JyxcbiAgICAgICAgICBpbnZvaWNlLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBsZXQgYWRkSW52b2ljZUl0ZW1zID0gW10sIHJlbW92ZUludm9pY2VJdGVtcyA9IFtdO1xuICAgICAgaWYgKGR0by5pdGVtcyAhPT0gdW5kZWZpbmVkICYmIGR0by5pdGVtcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgY29uc3QgaW52b2ljZUl0ZW1EdG9JZHMgPSBkdG8uaXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5pZCk7XG4gICAgICAgIGNvbnN0IGludm9pY2VJdGVtSWRzID0gaW52b2ljZS5pbnZvaWNlSXRlbXMubWFwKGl0ZW0gPT4gaXRlbS5pZCk7XG4gICAgICAgIHJlbW92ZUludm9pY2VJdGVtcyA9IGludm9pY2UuaW52b2ljZUl0ZW1zLmZpbHRlcihpdGVtID0+IHtcbiAgICAgICAgICByZXR1cm4gIWludm9pY2VJdGVtRHRvSWRzLmluY2x1ZGVzKGl0ZW0uaWQpO1xuICAgICAgICB9KVxuICAgICAgICBhZGRJbnZvaWNlSXRlbXMgPSBkdG8uaXRlbXMuZmlsdGVyKGl0ZW0gPT4ge1xuICAgICAgICAgIHJldHVybiAhaW52b2ljZUl0ZW1JZHMuaW5jbHVkZXMoaXRlbS5pZClcbiAgICAgICAgfSk7XG5cbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgIC8vIERlbGV0ZSBpdGVtc1xuICAgICAgICAgIHRoaXMucHJpc21hLmludm9pY2VJdGVtcy51cGRhdGVNYW55KHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIGlkOiB7XG4gICAgICAgICAgICAgICAgaW46IHJlbW92ZUludm9pY2VJdGVtcy5tYXAociA9PiByLmlkKVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBkZWxldGVkRGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSksXG4gICAgICAgICAgLy8gQWRkIGl0ZW1zXG4gICAgICAgICAgdGhpcy5wcmlzbWEuaW52b2ljZXMudXBkYXRlKHtcbiAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgICBpbnZvaWNlSXRlbXM6IHtcbiAgICAgICAgICAgICAgICBjcmVhdGVNYW55OiB7XG4gICAgICAgICAgICAgICAgICBkYXRhOiBhZGRJbnZvaWNlSXRlbXMsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSlcbiAgICAgICAgXSlcbiAgICAgIH1cblxuICAgICAgLy9VcGRhdGUgaW52b2ljZVxuICAgICAgY29uc3QgaW52b2ljZUR0byA9IHtcbiAgICAgICAgdXBkYXRlZEJ5OiBkdG8udXBkYXRlZEJ5LFxuICAgICAgICBkZWxldGVkRGF0ZTogZHRvLmRlbGV0ZWREYXRlICE9PSB1bmRlZmluZWQgPyBkdG8uZGVsZXRlZERhdGUgOiBudWxsLFxuICAgICAgICBkdWVEYXRlOiBkdG8uZHVlRGF0ZSAhPT0gdW5kZWZpbmVkID8gZHRvLmR1ZURhdGUgOiBudWxsLFxuICAgICAgICBjdXN0b21lcklkOiBkdG8uY3VzdG9tZXJJZCAhPT0gdW5kZWZpbmVkID8gZHRvLmN1c3RvbWVySWQgOiBudWxsLFxuICAgICAgICBzdGF0dXM6IGR0by5zdGF0dXMgIT09IHVuZGVmaW5lZCA/IGR0by5zdGF0dXMgOiBudWxsLFxuICAgICAgICBjcmVhdGVJbnZvaWNlRGF0ZTpcbiAgICAgICAgICBkdG8uY3JlYXRlSW52b2ljZURhdGUgIT09IHVuZGVmaW5lZCA/IGR0by5jcmVhdGVJbnZvaWNlRGF0ZSA6IG51bGwsXG4gICAgICAgIHBheW1lbnQ6IGR0by5wYXltZW50ICE9PSB1bmRlZmluZWQgPyBkdG8ucGF5bWVudCA6IG51bGwsXG4gICAgICAgIGRpc2NvdW50OiBkdG8uZGlzY291bnQgIT09IHVuZGVmaW5lZCA/IGR0by5kaXNjb3VudCA6IG51bGwsXG4gICAgICAgIGNvbnRhY3RQZXJzb246XG4gICAgICAgICAgZHRvLmNvbnRhY3RQZXJzaW9uICE9PSB1bmRlZmluZWQgPyBkdG8uY29udGFjdFBlcnNpb24gOiBudWxsXG4gICAgICB9O1xuXG4gICAgICAvL1JlbW92ZSBudWxsIGZpZWxkcyBmcm9tIGludm9pY2VcbiAgICAgIE9iamVjdC5rZXlzKGludm9pY2VEdG8pLmZvckVhY2goa2V5ID0+IHtcbiAgICAgICAgaWYgKGludm9pY2VEdG9ba2V5XSA9PT0gbnVsbCkgZGVsZXRlIGludm9pY2VEdG9ba2V5XTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBpbnZvaWNlVXBkYXRlZCA9IGF3YWl0IHRoaXMucHJpc21hLmludm9pY2VzLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi5pbnZvaWNlRHRvLFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgaW52b2ljZUl0ZW1zOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiB0cnVlLFxuICAgICAgICAgICAgICBhbW91bnQ6IHRydWUsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgICAgZGVsZXRlZERhdGU6IG51bGwsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgICAgY3VzdG9tZXI6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgICAgICAgZnVsbE5hbWU6IHRydWUsXG4gICAgICAgICAgICAgIHBob25lOiB0cnVlLFxuICAgICAgICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgICAgICAgYWRkcmVzczogdHJ1ZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnVXBkYXRlIGludm9pY2Ugc3VjY2VzcycsXG4gICAgICAgIGludm9pY2VVcGRhdGVkLFxuICAgICAgKTtcblxuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnVXBkYXRlIGludm9pY2UgZXJyb3InLFxuICAgICAgICBlcnJvcixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLy9kZWxldGUgaW52b2ljZSBhbmQgcmVsYXRlZCBpdGVtc1xuICBhc3luYyBkZWxldGVJbnZvaWNlKGlkOiBudW1iZXIpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgaW52b2ljZUV4aXN0cyA9IGF3YWl0IHRoaXMucHJpc21hLmludm9pY2VzLmNvdW50KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoaW52b2ljZUV4aXN0cyAhPT0gMCkge1xuICAgICAgICAvL2RlbGV0ZSBhbGwgcmVsYXRlZCBpdGVtIHJlY29yZHNcbiAgICAgICAgYXdhaXQgdGhpcy5wcmlzbWEuaW52b2ljZXMudXBkYXRlKHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgaWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICBpbnZvaWNlSXRlbXM6IHtcbiAgICAgICAgICAgICAgZGVsZXRlTWFueToge30sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGF3YWl0IHRoaXMucHJpc21hLmludm9pY2VzLmRlbGV0ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ0RlbGV0ZSBpbnZvaWNlIHN1Y2Nlc3MnKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ1RoZSBpbnZvaWNlIGRvZXMgbm90IGV4aXN0JyxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdEZWxldGUgaW52b2ljZSBlcnJvcicsXG4gICAgICAgIGVycm9yLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICAvL2RlbGV0ZSBpdGVtcyBmcm9tIGludm9pY2VcbiAgYXN5bmMgZGVsZXRlSW52b2ljZUl0ZW0oaWQ6IG51bWJlciwgZHRvOiBEZWxldGVJbnZvaWNlSXRlbUR0bykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBpbnZvaWNlRXhpc3RzID0gYXdhaXQgdGhpcy5wcmlzbWEuaW52b2ljZXMuY291bnQoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmIChpbnZvaWNlRXhpc3RzICE9PSAwKSB7XG4gICAgICAgIGF3YWl0IHRoaXMucHJpc21hLmludm9pY2VzLnVwZGF0ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgaW52b2ljZUl0ZW1zOiB7XG4gICAgICAgICAgICAgIGRlbGV0ZU1hbnk6IGR0by5pdGVtcyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgICBpbnZvaWNlSXRlbXM6IHRydWUsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLk9LLCAnZGVsZXRlX2ludm9pY2VfaXRlbScpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnVGhlIGludm9pY2UgZG9lcyBub3QgZXhpc3QnLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ0RlbGV0ZSBpbnZvaWNlIGl0ZW1zIGVycm9yJyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFN1bW1hcnlJbnZvaWNlKCkge1xuICAgIHRyeSB7XG4gICAgICAvL2dldCBzdW1tYXJ5IGRhdGEgcGFpZCBzdGF0dXNcbiAgICAgIGNvbnN0IHBhaWRSZWNvcmREYXRhID0gYXdhaXQgdGhpcy5nZXRTdW1BbW91bnQoJ1BBSUQnKTtcblxuICAgICAgLy9nZXQgc3VtbWFyeSBkYXRhIHVucGFpZCBzdGF0dXNcbiAgICAgIGNvbnN0IHVucGFpZFJlY29yZERhdGEgPSBhd2FpdCB0aGlzLmdldFN1bUFtb3VudCgnVU5QQUlEJyk7XG5cbiAgICAgIC8vZ2V0IHN1bW1hcnkgZGF0YSBvdmVyIGR1ZSBzdGF0dXNcbiAgICAgIGNvbnN0IG92ZXJkdWVSZWNvcmREYXRhID0gYXdhaXQgdGhpcy5nZXRTdW1BbW91bnQoJ09WRVJEVUUnKTtcblxuICAgICAgLy9nZXQgc3VtbWFyeSBkYXRhIGFsbCBzdGF0dXNcbiAgICAgIGNvbnN0IGFsbERhdGEgPSBhd2FpdCB0aGlzLmdldFN1bUFtb3VudCgnQUxMJyk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICdTVU1NQVJZJyxcbiAgICAgICAge1xuICAgICAgICAgIHBhaWRSZWNvcmREYXRhLFxuICAgICAgICAgIHVucGFpZFJlY29yZERhdGEsXG4gICAgICAgICAgb3ZlcmR1ZVJlY29yZERhdGEsXG4gICAgICAgICAgYWxsRGF0YVxuICAgICAgICB9XG4gICAgICApXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdnZXRfc3VtbWFyeV9lcnJvcicsXG4gICAgICAgIGVycm9yLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRTdW1BbW91bnQoc3RhdHVzOiBzdHJpbmcpIHtcblxuICAgIC8vR2V0IHBlcmlvZCBkYXRlIHRvIHF1ZXJ5XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgbGV0IGZpcnN0RGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDEpO1xuICAgIGxldCBsYXN0RGF5ID0gbmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCkgKyAxLCAwKTtcblxuICAgIGxldCBwcmVGaXJzdERheSA9IG5ldyBEYXRlKG5ldyBEYXRlKGRhdGUuZ2V0RnVsbFllYXIoKSwgZGF0ZS5nZXRNb250aCgpIC0gMSwgMSkpO1xuICAgIGxldCBwcmVMYXN0RGF5ID0gbmV3IERhdGUobmV3IERhdGUoZGF0ZS5nZXRGdWxsWWVhcigpLCBkYXRlLmdldE1vbnRoKCksIDApKTtcblxuICAgIGZpcnN0RGF5LnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICAgIGxhc3REYXkuc2V0SG91cnMoMjMsIDU5LCA1OSwgMCk7XG5cbiAgICBwcmVGaXJzdERheS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgICBwcmVMYXN0RGF5LnNldEhvdXJzKDIzLCA1OSwgNTksIDApO1xuXG4gICAgbGV0IGN1cnJlbnRTdW06IHN0cmluZywgcHJldmlvdXNTdW06IHN0cmluZztcblxuICAgIGlmICggc3RhdHVzICE9PSAnQUxMJykge1xuICAgICAgLy9nZXQgc3VtbWFyeSBhbW91bnQgY3VycmVudCBtb250aCBieSBzdGF0dXNcbiAgICAgIGxldCBzcWxTdHIgPSBnZXRTdW1tYXJ5QW1vdW50U3FsO1xuICAgICAgY29uc3QgcXVlcnlDdXJyZW50TW9udGggPSBzcWxTdHIucmVwbGFjZSgnJDEnLCBzdGF0dXMpLnJlcGxhY2UoJyQyJywgZmlyc3REYXkudG9JU09TdHJpbmcoKSkucmVwbGFjZSgnJDMnLCBsYXN0RGF5LnRvSVNPU3RyaW5nKCkpO1xuICAgICAgY29uc3Qgc3VtbWFyeUN1cnJlbnQgPSBhd2FpdCB0aGlzLnByaXNtYS4kcXVlcnlSYXdVbnNhZmUocXVlcnlDdXJyZW50TW9udGgpO1xuICAgICAgY3VycmVudFN1bSA9IHN1bW1hcnlDdXJyZW50WzBdWydTVU0oYW1vdW50KSddO1xuXG4gICAgICAvL2dldCBzdW1tYXJ5IGFtb3VudCBwcmV2aW91cyBtb250aCBieSBzdGF0dXNcbiAgICAgIGNvbnN0IHF1ZXJ5UHJlTW9udGggPSBzcWxTdHIucmVwbGFjZSgnJDEnLCBzdGF0dXMpLnJlcGxhY2UoJyQyJywgcHJlRmlyc3REYXkudG9JU09TdHJpbmcoKSkucmVwbGFjZSgnJDMnLCBwcmVMYXN0RGF5LnRvSVNPU3RyaW5nKCkpO1xuICAgICAgY29uc3Qgc3VtbWFyeVByZXZpb3VzID0gYXdhaXQgdGhpcy5wcmlzbWEuJHF1ZXJ5UmF3VW5zYWZlKHF1ZXJ5UHJlTW9udGgpO1xuICAgICAgcHJldmlvdXNTdW0gPSBzdW1tYXJ5UHJldmlvdXNbMF1bJ1NVTShhbW91bnQpJ107XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vZ2V0IHN1bW1hcnkgYWxsIGFtb3VudCByZWNvcmRzIGN1cnJlbnQgbW9udGhcbiAgICAgIGxldCBzcWxTdHIgPSBnZXRTdW1BbGxBbW91bnQ7XG4gICAgICBjb25zdCBxdWVyeUN1cnJlbnRNb250aCA9IHNxbFN0ci5yZXBsYWNlKCckMicsIGZpcnN0RGF5LnRvSVNPU3RyaW5nKCkpLnJlcGxhY2UoJyQzJywgbGFzdERheS50b0lTT1N0cmluZygpKTtcbiAgICAgIGNvbnN0IHN1bW1hcnlDdXJyZW50ID0gYXdhaXQgdGhpcy5wcmlzbWEuJHF1ZXJ5UmF3VW5zYWZlKHF1ZXJ5Q3VycmVudE1vbnRoKTtcbiAgICAgIGN1cnJlbnRTdW0gPSBzdW1tYXJ5Q3VycmVudFswXVsnU1VNKGFtb3VudCknXTtcblxuICAgICAgLy9nZXQgc3VtbWFyeSBhbGwgYW1vdW50IHJlY29yZHMgcHJldmlvdXMgbW9udGhcbiAgICAgIGNvbnN0IHF1ZXJ5UHJlTW9udGggPSBzcWxTdHIucmVwbGFjZSgnJDInLCBwcmVGaXJzdERheS50b0lTT1N0cmluZygpKS5yZXBsYWNlKCckMycsIHByZUxhc3REYXkudG9JU09TdHJpbmcoKSk7XG4gICAgICBjb25zdCBzdW1tYXJ5UHJldmlvdXMgPSBhd2FpdCB0aGlzLnByaXNtYS4kcXVlcnlSYXdVbnNhZmUocXVlcnlQcmVNb250aCk7XG4gICAgICBwcmV2aW91c1N1bSA9IHN1bW1hcnlQcmV2aW91c1swXVsnU1VNKGFtb3VudCknXTtcbiAgICB9XG4gICAgXG4gICAgLy9jYWxjdWxhdGUgcGVyZm9ybSBwZXJjZW50XG4gICAgbGV0IHBlcmNlbnQ6IG51bWJlcjtcbiAgICBpZiAoY3VycmVudFN1bSAmJiBwcmV2aW91c1N1bSkge1xuICAgICAgY29uc3QgY2FsUGVyY2VudCA9IChwYXJzZUludChjdXJyZW50U3VtKSAvIChwYXJzZUludChwcmV2aW91c1N1bSkgLyAxMDApKSAtIDEwMDtcbiAgICAgIHBlcmNlbnQgPSBwYXJzZUZsb2F0KGNhbFBlcmNlbnQudG9GaXhlZCgpKTtcbiAgICB9XG5cbiAgICByZXR1cm4gIHsgXG4gICAgICBzdW1tYXJ5OiBjdXJyZW50U3VtLCAgXG4gICAgICBwZXJjZW50XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlSW52b2ljZSB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbUHJpc21hU2VydmljZUludm9pY2VdLFxuICBleHBvcnRzOiBbUHJpc21hU2VydmljZUludm9pY2VdXG59KVxuZXhwb3J0IGNsYXNzIFByaXNtYU1vZHVsZUludm9pY2Uge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9teXNxbCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmlzbWFTZXJ2aWNlSW52b2ljZSBleHRlbmRzIFByaXNtYUNsaWVudCB7XG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGRhdGFzb3VyY2VzOiB7XG4gICAgICAgICAgICAgICAgZGI6IHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjb25maWcuZ2V0T3JUaHJvdygnTVlTUUxfREFUQUJBU0VfVVJMJyksXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGNsZWFuRGF0YWJhc2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiR0cmFuc2FjdGlvbihbXG4gICAgICAgICAgICB0aGlzLmludm9pY2VzLmRlbGV0ZU1hbnkoKSxcbiAgICAgICAgICAgIHRoaXMuaW52b2ljZUl0ZW1zLmRlbGV0ZU1hbnkoKSxcbiAgICAgICAgXSlcbiAgICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2ludm9pY2VzJzsiLCJleHBvcnQgY29uc3QgZ2V0SW52b2ljZXNTcWwgPSBcbmBcbiAgICBTRUxFQ1RcbiAgICAgIGkuaWQsIGkuZHVlRGF0ZSwgaS5jdXN0b21lcklkLCBpLnN0YXR1cywgaS5jcmVhdGVJbnZvaWNlRGF0ZSxcbiAgICAgICAgaS5wYXltZW50LCBpLmRpc2NvdW50LCBpLmNvbnRhY3RQZXJzb24sIGkuc3RhdHVzLFxuICAgICAgICBKU09OX09CSkVDVChcbiAgICAgICAgICAnaWQnLCBjLmlkLFxuICAgICAgICAgICdmdWxsTmFtZScsIGMuZnVsbE5hbWUsXG4gICAgICAgICAgJ3Bob25lJywgYy5waG9uZSxcbiAgICAgICAgICAnYWRkcmVzcycsIGMuYWRkcmVzcyxcbiAgICAgICAgICAnZW1haWwnLCBjLmVtYWlsLFxuICAgICAgICAgICdhdmF0YXInLCBjLmF2YXRhcixcbiAgICAgICAgICAnY29kZScsIGMuY29kZVxuICAgICAgICApIEFTIGN1c3RvbWVyLFxuICAgICAgICAgIEpTT05fQVJSQVlBR0coXG4gICAgICAgICAgICBKU09OX09CSkVDVChcbiAgICAgICAgICAgICAgJ2lkJywgaWkuaWQsXG4gICAgICAgICAgICAgICdkZXNjcmlwdGlvbicsIGlpLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAnYW1vdW50JywgaWkuYW1vdW50LFxuICAgICAgICAgICAgICAnaW52b2ljZUlkJywgaWkuaW52b2ljZUlkXG4gICAgICAgICAgICApXG4gICAgICAgICAgKSBBUyBpdGVtc1xuICAgICAgICBGUk9NIGludm9pY2VzIGlcbiAgICAgICAgTEVGVCBKT0lOIGludm9pY2VJdGVtcyBpaSBvbiBpLmlkID0gaWkuaW52b2ljZUlkXG4gICAgICAgIExFRlQgSk9JTiBjdXN0b21lcnMgYyBvbiBpLmN1c3RvbWVySWQgPSBjLmlkXG4gICAgICAgIFdIRVJFIGkuZGVsZXRlZERhdGUgSVMgTlVMTCBBTkQgaWkuZGVsZXRlZERhdGUgSVMgTlVMTCBBTkQgYy5kZWxldGVkRGF0ZSBJUyBOVUxMXG5gO1xuXG5leHBvcnQgY29uc3QgZ2V0U3VtbWFyeUFtb3VudFNxbCA9IGBcbiAgU0VMRUNUIFNVTShhbW91bnQpXG4gICAgRlJPTSBpbnZvaWNlSXRlbXMgaVxuICAgIExFRlQgSk9JTiBpbnZvaWNlcyBpaSBvbiBpLmludm9pY2VJZCA9IGlpLmlkXG4gICAgV0hFUkUgaWkuc3RhdHVzID0gJyQxJyBBTkQgaWkuY3JlYXRlSW52b2ljZURhdGUgPj0gJyQyJyBBTkQgaWkuY3JlYXRlSW52b2ljZURhdGUgPD0gJyQzJ1xuYDtcblxuZXhwb3J0IGNvbnN0IGdldFN1bUFsbEFtb3VudCA9IGBcbiAgU0VMRUNUIFNVTShhbW91bnQpXG4gICAgRlJPTSBpbnZvaWNlSXRlbXMgaVxuICAgIExFRlQgSk9JTiBpbnZvaWNlcyBpaSBvbiBpLmludm9pY2VJZCA9IGlpLmlkXG4gICAgV0hFUkUgaWkuY3JlYXRlSW52b2ljZURhdGUgPj0gJyQyJyBBTkQgaWkuY3JlYXRlSW52b2ljZURhdGUgPD0gJyQzJ1xuYDsiLCJpbXBvcnQgeyBDb250cm9sbGVyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTWVzc2FnZVBhdHRlcm4sIFBheWxvYWQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgTWFpbFNlcnZpY2UgfSBmcm9tICcuL21haWwuc2VydmljZSc7XG5pbXBvcnQgeyBNYWlsTWVzc2FnZSB9IGZyb20gJ0Bjb21tb24vdHlwZXMnO1xuXG5AQ29udHJvbGxlcignYXV0aCcpXG5leHBvcnQgY2xhc3MgTWFpbENvbnRyb2xsZXIge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IE1haWxTZXJ2aWNlKSB7fVxuXG4gIEBNZXNzYWdlUGF0dGVybignZW1haWwnKVxuICBzZW5kKEBQYXlsb2FkKCkgZGF0YTogTWFpbE1lc3NhZ2UpIHtcbiAgICByZXR1cm4gdGhpcy5zZXJ2aWNlLnNlbmQoZGF0YSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IE1haWxlck1vZHVsZSB9IGZyb20gJ0BuZXN0anMtbW9kdWxlcy9tYWlsZXInO1xuaW1wb3J0IHsgSGFuZGxlYmFyc0FkYXB0ZXIgfSBmcm9tICdAbmVzdGpzLW1vZHVsZXMvbWFpbGVyL2Rpc3QvYWRhcHRlcnMvaGFuZGxlYmFycy5hZGFwdGVyJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSwgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IE1haWxDb250cm9sbGVyIH0gZnJvbSAnLi9tYWlsLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgTWFpbFNlcnZpY2UgfSBmcm9tICcuL21haWwuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgTWFpbGVyTW9kdWxlLmZvclJvb3RBc3luYyh7XG4gICAgICB1c2VGYWN0b3J5OiBhc3luYyAoY29uZmlnOiBDb25maWdTZXJ2aWNlKSA9PiB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgdHJhbnNwb3J0OiB7XG4gICAgICAgICAgICBob3N0OiBjb25maWcuZ2V0KCdFTUFJTF9IT1NUJyksXG4gICAgICAgICAgICBwb3J0OiBjb25maWcuZ2V0KCdFTUFJTF9QT1JUJyksXG4gICAgICAgICAgICBzZWN1cmU6IGNvbmZpZy5nZXQoJ0VNQUlMX1NFQ1VSRScpLFxuICAgICAgICAgICAgYXV0aDoge1xuICAgICAgICAgICAgICB1c2VyOiBjb25maWcuZ2V0KCdFTUFJTF9VU0VSJyksXG4gICAgICAgICAgICAgIHBhc3M6IGNvbmZpZy5nZXQoJ0VNQUlMX1BBU1MnKSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBwcmV2aWV3OiB0cnVlLFxuICAgICAgICAgIHRlbXBsYXRlOiB7XG4gICAgICAgICAgICBhZGFwdGVyOiBuZXcgSGFuZGxlYmFyc0FkYXB0ZXIoKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgICAgICBmcm9tOiBjb25maWcuZ2V0KCdFTUFJTF9GUk9NJyksXG4gICAgICAgICAgfSxcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBpbmplY3Q6IFtDb25maWdTZXJ2aWNlXSxcbiAgICB9KSxcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICAgIGVudkZpbGVQYXRoOiAnLmVudi5kZXYnLFxuICAgIH0pLFxuICBdLFxuICBjb250cm9sbGVyczogW01haWxDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbTWFpbFNlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBNYWlsTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBNYWlsTWVzc2FnZSB9IGZyb20gJ0Bjb21tb24vdHlwZXMnO1xuaW1wb3J0IHsgSVNlbmRNYWlsT3B0aW9ucywgTWFpbGVyU2VydmljZSB9IGZyb20gJ0BuZXN0anMtbW9kdWxlcy9tYWlsZXInO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSwgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0ICogYXMgaGFuZGxlYmFycyBmcm9tICdoYW5kbGViYXJzJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE1haWxTZXJ2aWNlIHtcbiAgbG9nZ2VyID0gbmV3IExvZ2dlcignRW1haWwnKTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIG1haWxlclNlcnZpY2U6IE1haWxlclNlcnZpY2UpIHt9XG5cbiAgYXN5bmMgc2VuZChkYXRhOiBNYWlsTWVzc2FnZSkge1xuICAgIGNvbnN0IHJvb3RQYXRoID0gcHJvY2Vzcy5jd2QoKTtcbiAgICBjb25zdCByb290VGVtcGxhdGVQYXRoID0gYCR7cm9vdFBhdGh9L3N0b3JhZ2UvdGVtcGxhdGUvZW1haWwvaW5kZXguaHRtbGA7XG5cbiAgICBsZXQgYm9keTogc3RyaW5nO1xuICAgIGlmIChkYXRhLmNvbnRlbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBib2R5ID0gZGF0YS5jb250ZW50LmRhdGE7XG4gICAgfSBlbHNlIGlmIChkYXRhLmNvbnRlbnQudHlwZSA9PT0gJ2h0bWwnKSB7XG4gICAgICBjb25zdCBodG1sID0gZnNcbiAgICAgICAgLnJlYWRGaWxlU3luYyhcbiAgICAgICAgICBgJHtyb290UGF0aH0vc3RvcmFnZS90ZW1wbGF0ZS9lbWFpbC8ke2RhdGEuY29udGVudC5kYXRhfWAsXG4gICAgICAgICAgJ3V0ZjgnLFxuICAgICAgICApXG4gICAgICAgIC50b1N0cmluZygpO1xuICAgICAgbGV0IGNvbW1vbkh0bWwgPSBmcy5yZWFkRmlsZVN5bmMocm9vdFRlbXBsYXRlUGF0aCwgJ3V0ZjgnKS50b1N0cmluZygpO1xuICAgICAgY29tbW9uSHRtbCA9IGNvbW1vbkh0bWwucmVwbGFjZSgne3sgYm9keSB9fScsIGh0bWwpO1xuICAgICAgY29uc3QgdGVtcGxhdGUgPSBoYW5kbGViYXJzLmNvbXBpbGUoY29tbW9uSHRtbCk7XG4gICAgICBib2R5ID0gdGVtcGxhdGUoe1xuICAgICAgICAuLi5kYXRhLnBhcmFtcyxcbiAgICAgICAgbmFtZTogZGF0YS50byxcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGNvbnN0IG1haWxPcHRpb25zOiBJU2VuZE1haWxPcHRpb25zID0ge1xuICAgICAgdG86IGRhdGEudG8sXG4gICAgICBzdWJqZWN0OiBkYXRhLnRpdGxlLFxuICAgICAgYXR0YWNobWVudHM6IFtcbiAgICAgICAge1xuICAgICAgICAgIGZpbGVuYW1lOiAnbG9nby5wbmcnLFxuICAgICAgICAgIHBhdGg6IGAke3Jvb3RQYXRofS9zdG9yYWdlL3RlbXBsYXRlL2VtYWlsL2xvZ28ucG5nYCxcbiAgICAgICAgICBjaWQ6ICdsb2dvQHJlZW1lLmNvbS52bicsXG4gICAgICAgICAgY29udGVudERpc3Bvc2l0aW9uOiAnaW5saW5lJyxcbiAgICAgICAgfSxcbiAgICAgIF0sXG4gICAgfTtcblxuICAgIGlmIChkYXRhLmNvbnRlbnQudHlwZSA9PT0gJ3RleHQnKSB7XG4gICAgICBtYWlsT3B0aW9ucy50ZW1wbGF0ZSA9IHJvb3RUZW1wbGF0ZVBhdGg7XG4gICAgICBtYWlsT3B0aW9ucy5jb250ZXh0ID0ge1xuICAgICAgICAuLi5kYXRhLnBhcmFtcyxcbiAgICAgICAgbmFtZTogZGF0YS50byxcbiAgICAgICAgYm9keSxcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmIChkYXRhLmNvbnRlbnQudHlwZSA9PT0gJ2h0bWwnKSB7XG4gICAgICBtYWlsT3B0aW9ucy5odG1sID0gYm9keTtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLm1haWxlclNlcnZpY2Uuc2VuZE1haWwobWFpbE9wdGlvbnMpO1xuICAgICAgdGhpcy5sb2dnZXIubG9nKGBFbWFpbCBzZW50OiAke3Jlc3BvbnNlLnJlc3BvbnNlfSwgcmVjZWl2ZXI6ICR7ZGF0YS50b31gKTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgdGhpcy5sb2dnZXIubG9nKGVycm9yKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSAnQG5lc3Rqcy9zd2FnZ2VyJztcbmltcG9ydCB7XG4gIElzT3B0aW9uYWwsXG4gIElzRGF0ZVN0cmluZyxcbiAgSXNOdW1iZXIsXG4gIElzQm9vbGVhbixcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbnNEdG8ge1xuICBAQXBpUHJvcGVydHkoeyBkZXNjcmlwdGlvbjogJ2RhdGUgd2hlbiBhY3Rpdml0eSBvY2N1cnMnLCByZXF1aXJlZDogZmFsc2UgfSlcbiAgQElzRGF0ZVN0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgY3JlYXRlZERhdGU6IHN0cmluZztcblxuICBAQXBpUHJvcGVydHkoe1xuICAgIGRlc2NyaXB0aW9uOiAnZGF0ZSB3aGVuIGFjdGl2aXR5IGlzIG1vZGlmaWVkJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gIH0pXG4gIEBJc0RhdGVTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHVwZGF0ZWREYXRlOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHtcbiAgICBkZXNjcmlwdGlvbjogJ2RhdGUgd2hlbiBhY3Rpdml0eSBpcyBkZWxldGVkJyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gIH0pXG4gIEBJc0RhdGVTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGRlbGV0ZWREYXRlOiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgZGVzY3JpcHRpb246ICd1c2VyIHdobyBtb2RpZmllcyBhY3Rpdml0eScsIHJlcXVpcmVkOiBmYWxzZSB9KVxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHVwZGF0ZWRCeTogbnVtYmVyO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IGRlc2NyaXB0aW9uOiAndXNlcklkIHByb3BlcnR5JywgcmVxdWlyZWQ6IHRydWUgfSlcbiAgQElzTnVtYmVyKClcbiAgdXNlcklkOiBudW1iZXI7XG5cbiAgQEFwaVByb3BlcnR5KHsgZGVzY3JpcHRpb246ICdkYXRhIHByb3BlcnR5JywgcmVxdWlyZWQ6IHRydWUgfSlcbiAgQElzT3B0aW9uYWwoKVxuICBkYXRhOiBhbnk7XG5cbiAgQEFwaVByb3BlcnR5KHsgZGVzY3JpcHRpb246ICd0eXBlIHByb3BlcnR5JywgcmVxdWlyZWQ6IHRydWUgfSlcbiAgdHlwZTogJ0JST0tFTicgfCAnVEVNUEVSQVRVUkUnO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IGRlc2NyaXB0aW9uOiAnaXNSZWFkIHByb3BlcnR5JywgcmVxdWlyZWQ6IHRydWUgfSlcbiAgQElzQm9vbGVhbigpXG4gIGlzUmVhZDogYm9vbGVhbjtcbn1cbiIsImltcG9ydCB7IENvbnRyb2xsZXIgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiwgUGF5bG9hZCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zRHRvIH0gZnJvbSAnLi9kdG8vbm90aWZpY2F0aW9ucy5kdG8nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc1NlcnZpY2UgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMuc2VydmljZSc7XG5cbkBDb250cm9sbGVyKCdub3RpZmljYXRpb25zJylcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgbm90aWZpY2F0aW9uc1NlcnZpY2U6IE5vdGlmaWNhdGlvbnNTZXJ2aWNlKSB7fVxuXG4gIEBNZXNzYWdlUGF0dGVybih7IGNtZDogJ2dldE5vdGlmaWNhdGlvbnMnIH0pXG4gIGFzeW5jIGdldE5vdGlmaWNhdGlvbnMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZ2V0Tm90aWZpY2F0aW9ucygpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdnZXRfbm90aWZpY2F0aW9uc19ieV9pZCcpXG4gIGFzeW5jIGdldE5vdGlmaWNhdGlvbnNCeUlkKGlkOiBudW1iZXIpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5nZXROb3RpZmljYXRpb25zQnlJZChpZCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ3VwZGF0ZV9ub3RpZmljYXRpb25zJylcbiAgYXN5bmMgdXBkYXRlTm90aWZpY2F0aW9ucyhcbiAgICBAUGF5bG9hZCgpIHBheWxvYWQ6IHsgaWQ6IG51bWJlcjsgZHRvOiBOb3RpZmljYXRpb25zRHRvIH0sXG4gICkge1xuICAgIGNvbnN0IE5vdGlmaWNhdGlvbnMgPSBhd2FpdCB0aGlzLm5vdGlmaWNhdGlvbnNTZXJ2aWNlLnVwZGF0ZU5vdGlmaWNhdGlvbnMoXG4gICAgICBwYXlsb2FkLFxuICAgICk7XG4gICAgcmV0dXJuIE5vdGlmaWNhdGlvbnM7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2FkZF9ub3RpZmljYXRpb25zJylcbiAgYXN5bmMgYWRkTm90aWZpY2F0aW9ucyhkdG86IE5vdGlmaWNhdGlvbnNEdG8pIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5ub3RpZmljYXRpb25zU2VydmljZS5hZGROb3RpZmljYXRpb25zKGR0byk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2RlbGV0ZV9ub3RpZmljYXRpb25zJylcbiAgYXN5bmMgZGVsZXRlTm90aWZpY2F0aW9ucyhpZDogbnVtYmVyKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMubm90aWZpY2F0aW9uc1NlcnZpY2UuZGVsZXRlTm90aWZpY2F0aW9ucyhpZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFJlZGlzTW9kdWxlIH0gZnJvbSAnQGNvbW1vbi9yZWRpcyc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25zQ29udHJvbGxlciB9IGZyb20gJy4vbm90aWZpY2F0aW9ucy5jb250cm9sbGVyJztcbmltcG9ydCB7IE5vdGlmaWNhdGlvbnNTZXJ2aWNlIH0gZnJvbSAnLi9ub3RpZmljYXRpb25zLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpc21hTW9kdWxlTm90aWZpY2F0aW9uIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBQcmlzbWFNb2R1bGVOb3RpZmljYXRpb24sXG4gICAgUmVkaXNNb2R1bGUucmVnaXN0ZXIoJ05PVElGSUNBSVRPTlNfQ0xJRU5UJyksXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbTm90aWZpY2F0aW9uc0NvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtOb3RpZmljYXRpb25zU2VydmljZV0sXG59KVxuZXhwb3J0IGNsYXNzIE5vdGlmaWNhdGlvbk1vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzLCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTm90aWZpY2F0aW9uc0R0byB9IGZyb20gJy4vZHRvL25vdGlmaWNhdGlvbnMuZHRvJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VOb3RpZmljYXRpb24gfSBmcm9tICcuL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBOb3RpZmljYXRpb25zU2VydmljZSBleHRlbmRzIEhUVFAge1xuICBwcml2YXRlIHByaXNtYVNlbGVjdCA9IHtcbiAgICBjcmVhdGVkRGF0ZTogdHJ1ZSxcbiAgICB1cGRhdGVkRGF0ZTogdHJ1ZSxcbiAgICBkZWxldGVkRGF0ZTogdHJ1ZSxcbiAgICB1cGRhdGVkQnk6IHRydWUsXG4gICAgdXNlcklkOiBmYWxzZSxcbiAgICB1c2VyOiB7XG4gICAgICBzZWxlY3Q6IHtcbiAgICAgICAgaWQ6IHRydWUsXG4gICAgICAgIGNyZWF0ZWREYXRlOiB0cnVlLFxuICAgICAgICBjcmVhdGVkQnk6IHRydWUsXG4gICAgICAgIHVwZGF0ZWREYXRlOiB0cnVlLFxuICAgICAgICB1cGRhdGVkQnk6IHRydWUsXG4gICAgICAgIGRlbGV0ZWREYXRlOiB0cnVlLFxuICAgICAgICBhY3RpdmF0ZWREYXRlOiB0cnVlLFxuICAgICAgICBlbWFpbDogdHJ1ZSxcbiAgICAgICAgaGFzaDogdHJ1ZSxcbiAgICAgICAgdHlwZTogdHJ1ZSxcbiAgICAgICAgZmlyc3ROYW1lOiB0cnVlLFxuICAgICAgICBsYXN0TmFtZTogdHJ1ZSxcbiAgICAgICAgcm9sZUlkOiB0cnVlLFxuICAgICAgICBhdXRob3I6IHRydWUsXG4gICAgICAgIGVkaXRvcjogdHJ1ZSxcbiAgICAgICAgYWN0aXZpdHk6IHRydWUsXG4gICAgICAgIGN1c3RvbWVyczogdHJ1ZSxcbiAgICAgICAgdXNlckdlbmVyYWxTZXR0aW5nOiB0cnVlLFxuICAgICAgICB1c2Vyc0NyZWF0ZWQ6IHRydWUsXG4gICAgICAgIHVzZXJzVXBkYXRlZDogdHJ1ZSxcbiAgICAgICAgcHJvamVjdHM6IHRydWUsXG4gICAgICAgIFRva2VuczogdHJ1ZSxcbiAgICAgICAgTm90aWZpY2F0aW9uczogdHJ1ZSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICBkYXRhOiB0cnVlLFxuICAgIHR5cGU6IHRydWUsXG4gICAgaXNSZWFkOiB0cnVlLFxuICB9O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlTm90aWZpY2F0aW9uKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgTm90aWZpY2F0aW9uXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBnZXROb3RpZmljYXRpb25zKCkge1xuICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCB0aGlzLnByaXNtYS5ub3RpZmljYXRpb25zLmZpbmRNYW55KHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGRlbGV0ZWREYXRlOiBudWxsLFxuICAgICAgfSxcbiAgICAgIC8vIHNlbGVjdDogdGhpcy5wcmlzbWFTZWxlY3QsXG4gICAgfSk7XG5cbiAgICAvLyBUT0RPOiBH4buNaSAyIGzhuqduIMSR4buDIGzhuqV5IMSR4butIHRow7RuZyB0aW5cbiAgICAvLyBDb3VudCByZWNvcmRzXG4gICAgLy8gUXVlcnkgdGhlbyByZXF1ZXN0XG4gICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgJ0dldCBhbGwgbm90aWZpY2F0aW9ucycsXG4gICAgICBub3RpZmljYXRpb25zLFxuICAgICAgbm90aWZpY2F0aW9ucy5sZW5ndGgsXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBnZXQgTm90aWZpY2F0aW9uIGJ5IGlkXG4gICAqIEBwYXJhbSBpZFxuICAgKiBAcmV0dXJuc1xuICAgKi9cbiAgYXN5bmMgZ2V0Tm90aWZpY2F0aW9uc0J5SWQoaWQ6IG51bWJlcikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBub3RpZmljYXRpb25zID0gYXdhaXQgdGhpcy5wcmlzbWEubm90aWZpY2F0aW9ucy5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogaWQsXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdDogdGhpcy5wcmlzbWFTZWxlY3QsXG4gICAgICB9KTtcblxuICAgICAgaWYgKCFub3RpZmljYXRpb25zKVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdOb3RpZmljYXRpb24gbm90IGV4aXN0ZWQnLFxuICAgICAgICApO1xuXG4gICAgICBpZiAobm90aWZpY2F0aW9ucy5kZWxldGVkRGF0ZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnTm90aWZpY2F0aW9uIGRlbGV0ZWQnLFxuICAgICAgICApO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ2dldCBub3RpZmljYXRpb24gYnkgaWQnLFxuICAgICAgICBub3RpZmljYXRpb25zLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdnZXQgbm90aWZpY2F0aW9uIGJ5IGlkJyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBhZGQgbm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0gZHRvXG4gICAqIEByZXR1cm5zXG4gICAqL1xuICBhc3luYyBhZGROb3RpZmljYXRpb25zKGR0bzogTm90aWZpY2F0aW9uc0R0bykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBub3RpZmljYXRpb25zID0gYXdhaXQgdGhpcy5wcmlzbWEubm90aWZpY2F0aW9ucy5jcmVhdGUoe1xuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4uZHRvLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHRoaXMucHJpc21hU2VsZWN0LFxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnYWRkIG5ldyBub3RpZmljYXRpb25zIHN1Y2Vzc2Z1bGx5JyxcbiAgICAgICAgbm90aWZpY2F0aW9ucyxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnYWRkIG5ldyBub3RpZmljYXRpb25zIGdldHRpbmcgZXJyb3InLFxuICAgICAgICBlcnJvcixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqIHVwZGF0ZSBOb3RpZmljYXRpb25zXG4gICAqIEBwYXJhbSBwYXJhbTBcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIHVwZGF0ZU5vdGlmaWNhdGlvbnMoe1xuICAgIGlkLFxuICAgIGR0byxcbiAgfToge1xuICAgIGlkOiBudW1iZXI7XG4gICAgZHRvOiBOb3RpZmljYXRpb25zRHRvO1xuICB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IG5vdGlmaWNhdGlvbnMgPSBhd2FpdCB0aGlzLnByaXNtYS5ub3RpZmljYXRpb25zLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZTogeyBpZCB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghbm90aWZpY2F0aW9ucylcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnbm90aWZpY2F0aW9ucyBub3QgZXhpc3RlZCcsXG4gICAgICAgICk7XG5cbiAgICAgIGlmIChub3RpZmljYXRpb25zLmRlbGV0ZWREYXRlKVxuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdub3RpZmljYXRpb25zIGRlbGV0ZWQnLFxuICAgICAgICApO1xuXG4gICAgICBjb25zdCBub3RpZmljYXRpb25zcyA9IGF3YWl0IHRoaXMucHJpc21hLm5vdGlmaWNhdGlvbnMudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLmR0byxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ3VwZGF0ZSBub3RpZmljYXRpb24gc3VjY2VzcycsXG4gICAgICAgIG5vdGlmaWNhdGlvbnNzLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICd1cGRhdGUgbm90aWZpY2F0aW9uIGVycm9yJyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBkZWxldGUgTm90aWZpY2F0aW9uc1xuICAgKiBAcGFyYW0gaWRcbiAgICogQHJldHVybnNcbiAgICovXG4gIGFzeW5jIGRlbGV0ZU5vdGlmaWNhdGlvbnMoaWQ6IG51bWJlcikge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBub3RpZmljYXRpb25zID0gYXdhaXQgdGhpcy5wcmlzbWEubm90aWZpY2F0aW9ucy5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0OiB0aGlzLnByaXNtYVNlbGVjdCxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIW5vdGlmaWNhdGlvbnMpXG4gICAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ25vdGlmaWNhdGlvbnMgbm90IGV4aXN0ZWQnLFxuICAgICAgICApO1xuXG4gICAgICBpZiAobm90aWZpY2F0aW9ucy5kZWxldGVkRGF0ZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnbm90aWZpY2F0aW9ucyBkZWxldGVkJyxcbiAgICAgICAgKTtcblxuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCB0aGlzLnByaXNtYS5ub3RpZmljYXRpb25zLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQ6IGlkLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgZGVsZXRlZERhdGU6IG5ldyBEYXRlKCksXG4gICAgICAgIH0sXG4gICAgICAgIHNlbGVjdDogdGhpcy5wcmlzbWFTZWxlY3QsXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ2RlbGV0ZSBzdWNlc3NmdWxseScsIHJlc3BvbnNlKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdkZWxldGUgTm90aWZpY2F0aW9ucyBlcnJvcicsXG4gICAgICAgIGVycm9yLFxuICAgICAgKTtcbiAgICB9XG4gIH1cbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZU5vdGlmaWNhdGlvbiB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnO1xuXG5AR2xvYmFsKClcbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtQcmlzbWFTZXJ2aWNlTm90aWZpY2F0aW9uXSxcbiAgZXhwb3J0czogW1ByaXNtYVNlcnZpY2VOb3RpZmljYXRpb25dLFxufSlcbmV4cG9ydCBjbGFzcyBQcmlzbWFNb2R1bGVOb3RpZmljYXRpb24ge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNeVNRTENsaWVudCB9IGZyb20gJ0Bjb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpc21hU2VydmljZU5vdGlmaWNhdGlvbiBleHRlbmRzIE15U1FMQ2xpZW50IHtcbiAgY2xlYW5EYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kdHJhbnNhY3Rpb24oW3RoaXMubm90aWZpY2F0aW9ucy5kZWxldGVNYW55KCldKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICdAY29tbW9uL3V0aWxzJztcbmltcG9ydCB7IElzTm90RW1wdHksIElzTnVtYmVyLCBJc0RhdGVTdHJpbmcsIElzU3RyaW5nIH0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVBhY2thZ2VEdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjtcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIGNvZGU6IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIG5hbWU6IHN0cmluZztcblxuICBASXNOdW1iZXIoKVxuICBASXNOb3RFbXB0eSgpXG4gIGFtb3VudDogbnVtYmVyO1xufVxuIiwiaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICdAY29tbW9uL3V0aWxzJztcbmltcG9ydCB7XG4gIElzTm90RW1wdHksXG4gIElzTnVtYmVyLFxuICBJc0RhdGVTdHJpbmcsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuXG5leHBvcnQgY2xhc3MgRWRpdFBhY2thZ2VEdG8ge1xuICBASXNOb3RFbXB0eSgpXG4gIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjtcblxuICBASXNOdW1iZXIoKVxuICBASXNOb3RFbXB0eSgpXG4gIGlkOiBudW1iZXI7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBjb2RlOiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBuYW1lOiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBhbW91bnQ6IG51bWJlcjtcbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY3JlYXRlLXBhY2thZ2UuZHRvJztcbmV4cG9ydCAqIGZyb20gJy4vZWRpdC1wYWNrYWdlLmR0byc7XG4iLCJpbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJ0Bjb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgQ29udHJvbGxlciwgR2V0IH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTWVzc2FnZVBhdHRlcm4sIFBheWxvYWQgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgQ3JlYXRlUGFja2FnZUR0bywgRWRpdFBhY2thZ2VEdG8gfSBmcm9tICcuL2R0byc7XG5pbXBvcnQgeyBQYWNrYWdlc1NlcnZpY2UgfSBmcm9tICcuL3BhY2thZ2VzLnNlcnZpY2UnO1xuXG5AQ29udHJvbGxlcigpXG5leHBvcnQgY2xhc3MgUGFja2FnZXNDb250cm9sbGVyIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBwYWNrYWdlc1NlcnZpY2U6IFBhY2thZ2VzU2VydmljZSkge31cblxuICBATWVzc2FnZVBhdHRlcm4oJ2dldF9wYWNrYWdlcycpXG4gIGFzeW5jIGdldFBhY2thZ2VzKFxuICAgIEBQYXlsb2FkKCkgcGF5bG9hZDogeyBjdXJyZW50VXNlcjogQ3VycmVudFVzZXI7IHBhZ2luYXRpb25RdWVyeTogYW55IH0sXG4gICkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBhY2thZ2VzU2VydmljZS5nZXRQYWNrYWdlcyhwYXlsb2FkKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZ2V0X3BhY2thZ2VfYnlfaWQnKVxuICBhc3luYyBnZXRQYWNrYWdlc0J5SWQoXG4gICAgQFBheWxvYWQoKSBwYXlsb2FkOiB7IGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjsgaWQ6IG51bWJlciB9LFxuICApIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wYWNrYWdlc1NlcnZpY2UuZ2V0UGFja2FnZXNCeUlkKHBheWxvYWQpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdhZGRfcGFja2FnZScpXG4gIGFzeW5jIGFkZFBhY2thZ2UoQFBheWxvYWQoKSBwYXlsb2FkOiBDcmVhdGVQYWNrYWdlRHRvKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucGFja2FnZXNTZXJ2aWNlLmFkZFBhY2thZ2UocGF5bG9hZCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ3VwZGF0ZV9wYWNrYWdlJylcbiAgYXN5bmMgdXBkYXRlUGFja2FnZShAUGF5bG9hZCgpIHBheWxvYWQ6IEVkaXRQYWNrYWdlRHRvKSB7XG4gICAgY29uc3QgcGFja2FnZXMgPSBhd2FpdCB0aGlzLnBhY2thZ2VzU2VydmljZS51cGRhdGVQYWNrYWdlKHBheWxvYWQpO1xuICAgIHJldHVybiBwYWNrYWdlcztcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZGVsZXRlX3BhY2thZ2UnKVxuICBhc3luYyBkZWxldGVQYWNrYWdlKFxuICAgIEBQYXlsb2FkKCkgcGF5bG9hZDogeyBjdXJyZW50VXNlcjogQ3VycmVudFVzZXI7IGlkOiBudW1iZXIgfSxcbiAgKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucGFja2FnZXNTZXJ2aWNlLmRlbGV0ZVBhY2thZ2UocGF5bG9hZCk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFByaXNtYVF1ZXJ5IH0gZnJvbSAnQGNvbW1vbi91dGlscy9kdG8vcXVlcnkucHJpc21hJztcbmltcG9ydCB7IEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgUmVkaXNNb2R1bGUgfSBmcm9tICdAY29tbW9uL3JlZGlzJztcbmltcG9ydCB7IE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ01vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFBhY2thZ2VzQ29udHJvbGxlciB9IGZyb20gJy4vcGFja2FnZXMuY29udHJvbGxlcic7XG5pbXBvcnQgeyBQYWNrYWdlc1NlcnZpY2UgfSBmcm9tICcuL3BhY2thZ2VzLnNlcnZpY2UnO1xuaW1wb3J0IHsgUHJpc21hTW9kdWxlUGFja2FnZXMgfSBmcm9tICcuL3ByaXNtYS9wcmlzbWEubW9kdWxlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICAgIGVudkZpbGVQYXRoOiAnLmVudi5kZXYnLFxuICAgIH0pLFxuICAgIFByaXNtYU1vZHVsZVBhY2thZ2VzLFxuICBdLFxuICBjb250cm9sbGVyczogW1BhY2thZ2VzQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW1BhY2thZ2VzU2VydmljZSwgUHJpc21hUXVlcnksIEhUVFBdLFxufSlcbmV4cG9ydCBjbGFzcyBQYWNrYWdlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgUHJpc21hUXVlcnkgfSBmcm9tICdAY29tbW9uL3V0aWxzL2R0by9xdWVyeS5wcmlzbWEnO1xuaW1wb3J0IHsgUkVTVGZ1bFBhcmFtcywgUkVTVGZ1bFNlcnZpY2UgfSBmcm9tICdAY29tbW9uL3V0aWxzL3JlcXVldHMudXRpbCc7XG5pbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBTdGF0dXMsIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlUGFja2FnZXMgfSBmcm9tICcuL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XG5pbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJ0Bjb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgQ3JlYXRlUGFja2FnZUR0bywgRWRpdFBhY2thZ2VEdG8gfSBmcm9tICcuL2R0byc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQYWNrYWdlc1NlcnZpY2UgZXh0ZW5kcyBSRVNUZnVsU2VydmljZSB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlUGFja2FnZXMsXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmlzbWFRdWVyeTogUHJpc21hUXVlcnksXG4gICAgcHJpdmF0ZSBodHRwOiBIVFRQLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERiKCk6IFByaXNtYVF1ZXJ5IHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucHJpc21hUXVlcnkud2hlcmUoeyBkZWxldGVkRGF0ZTogbnVsbCB9KTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyYW1zOiBSRVNUZnVsUGFyYW1zID0ge1xuICAgIGl0ZW06IHtcbiAgICAgIGRlZmF1bHRTeXN0ZW1GaWVsZHM6IGZhbHNlLCAvLyA9PiBNYWtlIHVwZGF0ZSBtb2RpZmllZF9kYXRlLCBtb2RpZmllZF9ieSwgY3JlYXRlZF9kYXRlIGFuZCBjcmVhdGVkX2J5XG4gICAgfSxcbiAgICBsaXN0OiB7fSxcbiAgfTtcblxuICBhc3luYyBnZXRQYWNrYWdlc0J5SWQocGF5bG9hZDogeyBjdXJyZW50VXNlcjogQ3VycmVudFVzZXI7IGlkOiBudW1iZXIgfSkge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGN1cnJlbnRVc2VyLCBpZCB9ID0gcGF5bG9hZDtcbiAgICAgIGNvbnN0IHBhY2thZ2VSZXRyaWV2ZWQgPSBhd2FpdCB0aGlzLnByaXNtYS5wYWNrYWdlcy5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGN1c3RvbWVySWQ6IGN1cnJlbnRVc2VyLmN1c3RvbWVyT3duZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuICAgICAgaWYgKCFwYWNrYWdlUmV0cmlldmVkIHx8IHBhY2thZ2VSZXRyaWV2ZWQuZGVsZXRlZERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdzeXN0ZW1zLlBBQ0tBR0VTLk5PVF9GT1VORCcsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5QQUNLQUdFUy5HRVRfUEFDS0FHRV9TVUNDRVNTJyxcbiAgICAgICAgcGFja2FnZVJldHJpZXZlZCxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnY29tbW9uLklOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgICAgIGVyci5tZXNzYWdlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBnZXRQYWNrYWdlcyhwYXlsb2FkOiB7XG4gICAgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyO1xuICAgIHBhZ2luYXRpb25RdWVyeTogYW55O1xuICB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHsgY3VycmVudFVzZXIsIHBhZ2luYXRpb25RdWVyeSB9ID0gcGF5bG9hZDtcbiAgICAgIGNvbnN0IHBhZ2luYXRpb24gPSBhd2FpdCB0aGlzLmdldExpc3RzKHBhZ2luYXRpb25RdWVyeSk7XG5cbiAgICAgIGNvbnN0IHBhcmFtczogYW55ID0ge1xuICAgICAgICB0YWtlOiBwYWdpbmF0aW9uLnRha2UsXG4gICAgICAgIHNraXA6IHBhZ2luYXRpb24uc2tpcCxcbiAgICAgICAgY3Vyc29yOiBwYWdpbmF0aW9uLmN1cnNvciA/IHsgaWQ6IHBhZ2luYXRpb24uY3Vyc29yIH0gOiB1bmRlZmluZWQsXG4gICAgICAgIG9yZGVyQnk6IHBhZ2luYXRpb24uc29ydCA/PyB7fSxcbiAgICAgICAgd2hlcmU6IHBhZ2luYXRpb24uc2VhcmNoID8/IHt9LFxuICAgICAgfTtcblxuICAgICAgY29uc3Qgd2hlcmVRdWVyeSA9IHtcbiAgICAgICAgLi4ucGFyYW1zLndoZXJlLFxuICAgICAgICBjdXN0b21lcklkOiBjdXJyZW50VXNlci5jdXN0b21lck93bmVySWQsXG4gICAgICB9O1xuXG4gICAgICBjb25zdCBbdG90YWxQYWNrYWdlcywgcGFja2FnZXNdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnByaXNtYS5wYWNrYWdlcy5jb3VudCh7XG4gICAgICAgICAgd2hlcmU6IHdoZXJlUXVlcnksXG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLnByaXNtYS5wYWNrYWdlcy5maW5kTWFueSh7XG4gICAgICAgICAgdGFrZTogcGFyYW1zLnRha2UsXG4gICAgICAgICAgc2tpcDogcGFyYW1zLnNraXAsXG4gICAgICAgICAgY3Vyc29yOiBwYXJhbXMuY3Vyc29yLFxuICAgICAgICAgIHdoZXJlOiB3aGVyZVF1ZXJ5LFxuICAgICAgICAgIG9yZGVyQnk6IHBhcmFtcy5vcmRlckJ5LFxuICAgICAgICB9KSxcbiAgICAgIF0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5QQUNLQUdFUy5HRVRfUEFDS0FHRV9MSVNUX1NVQ0NFU1MnLFxuICAgICAgICBwYWNrYWdlcyxcbiAgICAgICAgdG90YWxQYWNrYWdlcyxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyOiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnY29tbW9uLklOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgICAgIGVyci5tZXNzYWdlLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBhZGRQYWNrYWdlKHBheWxvYWQ6IENyZWF0ZVBhY2thZ2VEdG8pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgeyBjdXJyZW50VXNlciwgLi4uZGF0YSB9ID0gcGF5bG9hZDtcbiAgICAgIGNvbnN0IHBhY2thZ2VDcmVhdGVkID0gYXdhaXQgdGhpcy5wcmlzbWEucGFja2FnZXMuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgY3JlYXRlZEJ5OiBjdXJyZW50VXNlci5pZCxcbiAgICAgICAgICBjdXN0b21lcklkOiBjdXJyZW50VXNlci5jdXN0b21lck93bmVySWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICdzeXN0ZW1zLlBBQ0tBR0VTLkFERF9TVUNDRVNTJyxcbiAgICAgICAgcGFja2FnZUNyZWF0ZWQsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ2NvbW1vbi5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgICBlcnIubWVzc2FnZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdXBkYXRlUGFja2FnZShwYXlsb2FkOiBFZGl0UGFja2FnZUR0bykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB7IGlkLCBjdXJyZW50VXNlciwgLi4uZGF0YSB9ID0gcGF5bG9hZDtcbiAgICAgIGNvbnN0IHBhY2thZ2VSZXRyaWV2ZWQgPSBhd2FpdCB0aGlzLnByaXNtYS5wYWNrYWdlcy5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkLFxuICAgICAgICAgIGN1c3RvbWVySWQ6IGN1cnJlbnRVc2VyLmN1c3RvbWVyT3duZXJJZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXBhY2thZ2VSZXRyaWV2ZWQgfHwgcGFja2FnZVJldHJpZXZlZC5kZWxldGVkRGF0ZSlcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdzeXN0ZW1zLlBBQ0tBR0VTLk5PVF9GT1VORCcsXG4gICAgICAgICk7XG5cbiAgICAgIGNvbnN0IHBhY2thZ2VVcGRhdGVkID0gYXdhaXQgdGhpcy5wcmlzbWEucGFja2FnZXMudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLmRhdGEsXG4gICAgICAgICAgdXBkYXRlZEJ5OiBjdXJyZW50VXNlci5pZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5QQUNLQUdFUy5VUERBVEVfU1VDQ0VTUycsXG4gICAgICAgIHBhY2thZ2VVcGRhdGVkLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdjb21tb24uSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICAgZXJyLm1lc3NhZ2UsXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBhc3luYyBkZWxldGVQYWNrYWdlKHBheWxvYWQ6IHsgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyOyBpZDogbnVtYmVyIH0pIHtcbiAgICBjb25zdCB7IGN1cnJlbnRVc2VyLCBpZCB9ID0gcGF5bG9hZDtcbiAgICB0cnkge1xuICAgICAgY29uc3QgcGFja2FnZVJldHJpZXZlZCA9IGF3YWl0IHRoaXMucHJpc21hLnBhY2thZ2VzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgICAgY3VzdG9tZXJJZDogY3VycmVudFVzZXIuY3VzdG9tZXJPd25lcklkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghcGFja2FnZVJldHJpZXZlZCB8fCBwYWNrYWdlUmV0cmlldmVkLmRlbGV0ZWREYXRlKVxuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ3N5c3RlbXMuUEFDS0FHRVMuTk9UX0ZPVU5EJyxcbiAgICAgICAgKTtcblxuICAgICAgYXdhaXQgdGhpcy5wcmlzbWEucGFja2FnZXMudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGRlbGV0ZWREYXRlOiBuZXcgRGF0ZSgpLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5QQUNLQUdFUy5ERUxFVEVfU1VDQ0VTUycsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ2NvbW1vbi5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgICBlcnIubWVzc2FnZSxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBHbG9iYWwsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VQYWNrYWdlcyB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnO1xuXG5AR2xvYmFsKClcbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtQcmlzbWFTZXJ2aWNlUGFja2FnZXNdLFxuICBleHBvcnRzOiBbUHJpc21hU2VydmljZVBhY2thZ2VzXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpc21hTW9kdWxlUGFja2FnZXMge31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNeVNRTENsaWVudCB9IGZyb20gJ0Bjb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpc21hU2VydmljZVBhY2thZ2VzIGV4dGVuZHMgTXlTUUxDbGllbnQge1xuICBjbGVhbkRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLiR0cmFuc2FjdGlvbihbdGhpcy5wYWNrYWdlcy5kZWxldGVNYW55KCldKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSXNOdW1iZXIsXG4gIElzT3B0aW9uYWwsXG4gIElzQXJyYXksXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gXCJAbmVzdGpzL3N3YWdnZXJcIjtcblxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25EdG8ge1xuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIEBBcGlQcm9wZXJ0eSh7IGRlc2NyaXB0aW9uOiAnVXNlciBjcmVhdGUgcm9sZScsIHJlcXVpcmVkOiBmYWxzZSB9KVxuICBjcmVhdGVkQnk6IG51bWJlcjtcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIEBBcGlQcm9wZXJ0eSh7IGRlc2NyaXB0aW9uOiAnVXNlciB1cGRhdGUgcm9sZScsIHJlcXVpcmVkOiBmYWxzZSB9KVxuICB1cGRhdGVkQnk6IG51bWJlcjtcblxuICBASXNOdW1iZXIoKVxuICBASXNPcHRpb25hbCgpXG4gIHJvbGVJZD86IG51bWJlcjtcblxuICBASXNBcnJheSgpXG4gIEBJc09wdGlvbmFsKClcbiAgcGVybWlzc2lvbnM/OiBudW1iZXJbXTtcbn1cbiIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE1lc3NhZ2VQYXR0ZXJuLCBQYXlsb2FkIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IFBlcm1pc3Npb25zU2VydmljZSB9IGZyb20gJy4vcGVybWlzc2lvbnMuc2VydmljZSc7XG5pbXBvcnQgeyBQZXJtaXNzaW9uRHRvIH0gZnJvbSAnLi9kdG8vcGVybWlzc2lvbkR0byc7XG5cbkBDb250cm9sbGVyKCdwZXJtaXNzaW9ucycpXG5leHBvcnQgY2xhc3MgUGVybWlzc2lvbnNDb250cm9sbGVyIGV4dGVuZHMgSFRUUCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcGVybWlzc2lvblNlcnZpY2U6IFBlcm1pc3Npb25zU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZ2V0X3Blcm1pc3Npb25zJylcbiAgYXN5bmMgZ2V0UGVybWlzc2lvbnMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucGVybWlzc2lvblNlcnZpY2UuZ2V0UGVybWlzc2lvbnMoKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZ2V0X3Blcm1pc3Npb25fYnlfaWQnKVxuICBhc3luYyBnZXRQZXJtaXNzaW9uKGlkKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucGVybWlzc2lvblNlcnZpY2UuZ2V0UGVybWlzc2lvbkJ5SWQoaWQpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdzYXZlX3Blcm1pc3Npb24nKVxuICBhc3luYyBhZGRQZXJtaXNzaW9uKGR0bzogUGVybWlzc2lvbkR0bykge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnBlcm1pc3Npb25TZXJ2aWNlLnNhdmVQZXJtaXNzaW9uKGR0byk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ3VwZGF0ZV9wZXJtaXNzaW9uJylcbiAgYXN5bmMgdXBkYXRlUGVybWlzc2lvbihAUGF5bG9hZCgpIHBheWxvYWQ6IFBlcm1pc3Npb25EdG8pIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5wZXJtaXNzaW9uU2VydmljZS51cGRhdGVQZXJtaXNzaW9uKHBheWxvYWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBScGNWYWxpZGF0aW9uUGlwZSB9IGZyb20gJ0Bjb21tb24vcGlwZSc7XG5pbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBBUFBfUElQRSB9IGZyb20gJ0BuZXN0anMvY29yZSc7XG5pbXBvcnQgeyBQcmlzbWFNb2R1bGVQZXJtaXNzaW9uIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5pbXBvcnQgeyBQZXJtaXNzaW9uc0NvbnRyb2xsZXIgfSBmcm9tICcuL3Blcm1pc3Npb25zLmNvbnRyb2xsZXInO1xuaW1wb3J0IHsgUGVybWlzc2lvbnNTZXJ2aWNlIH0gZnJvbSAnLi9wZXJtaXNzaW9ucy5zZXJ2aWNlJztcblxuQE1vZHVsZSh7XG4gIGltcG9ydHM6IFtcbiAgICBDb25maWdNb2R1bGUuZm9yUm9vdCh7XG4gICAgICBpc0dsb2JhbDogdHJ1ZSxcbiAgICAgIGVudkZpbGVQYXRoOiAnLmVudi5kZXYnLFxuICAgIH0pLFxuICAgIFByaXNtYU1vZHVsZVBlcm1pc3Npb24sXG4gIF0sXG4gIGNvbnRyb2xsZXJzOiBbUGVybWlzc2lvbnNDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAgUGVybWlzc2lvbnNTZXJ2aWNlLFxuICAgIHtcbiAgICAgIHByb3ZpZGU6IEFQUF9QSVBFLFxuICAgICAgdXNlQ2xhc3M6IFJwY1ZhbGlkYXRpb25QaXBlLFxuICAgIH0sXG4gIF0sXG59KVxuZXhwb3J0IGNsYXNzIFBlcm1pc3Npb25zTW9kdWxlIHt9XG4iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IEh0dHBTdGF0dXMsIEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZVBlcm1pc3Npb24gfSBmcm9tICcuL3ByaXNtYS9wcmlzbWEuc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQZXJtaXNzaW9uc1NlcnZpY2UgZXh0ZW5kcyBIVFRQIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSBwcmlzbWE6IFByaXNtYVNlcnZpY2VQZXJtaXNzaW9uLFxuICAgIHByaXZhdGUgY29uZmlnOiBDb25maWdTZXJ2aWNlLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgYXN5bmMgZ2V0UGVybWlzc2lvbnMoKSB7XG4gICAgY29uc3QgcGVybWlzc2lvbnMgPSBhd2FpdCB0aGlzLnByaXNtYS5wZXJtaXNzaW9uLmZpbmRNYW55KCk7XG4gICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoMjAwLCAnQXV0aG9yaXplJywgcGVybWlzc2lvbnMpO1xuICB9XG5cbiAgYXN5bmMgZ2V0UGVybWlzc2lvbkJ5SWQoaWQpIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm9sZSA9IGF3YWl0IHRoaXMucHJpc21hLnBlcm1pc3Npb24uZmluZFVuaXF1ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ2dldF9wZXJtaXNzaW9uc19ieV9pZCcsIHJvbGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ0ludGVybmFsIFNlcnZlciBFcnJvcicsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHNhdmVQZXJtaXNzaW9uKGR0bzogYW55KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvbGVJZCA9IGR0by5yb2xlSWRcblxuICAgICAgcmV0dXJuICB0aGlzLnByaXNtYS4kdHJhbnNhY3Rpb24oYXN5bmMgdHggPT4ge1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdXG4gICAgICAgIGR0by5wZXJtaXNzaW9ucy5mb3JFYWNoKG5hbWUgPT4ge1xuICAgICAgICAgIHByb21pc2VzLnB1c2goIHR4LnBlcm1pc3Npb24udXBzZXJ0KHtcbiAgICAgICAgICAgIHdoZXJlOntcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjcmVhdGU6IHtcbiAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgcm9sZXM6IHtcbiAgICAgICAgICAgICAgICBjcmVhdGU6IFt7cm9sZToge2Nvbm5lY3Q6IHsgaWQ6IHJvbGVJZH19fV1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHVwZGF0ZToge1xuICAgICAgICAgICAgICByb2xlczoge1xuICAgICAgICAgICAgICAgIGRlbGV0ZU1hbnk6IFt7IHJvbGVJZH1dLFxuICAgICAgICAgICAgICAgIGNyZWF0ZTogW3tyb2xlOiB7Y29ubmVjdDogeyBpZDogcm9sZUlkfX19XVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSkpXG4gICAgICAgIH0pXG5cbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcyk7XG4gICAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KEh0dHBTdGF0dXMuT0ssICdzYXZlX3Blcm1pc3Npb25fc3VjY2VzcycsIHJlc3BvbnNlKTtcbiAgICAgIH0pXG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICdyb2xlX25vdF9mb3VuZCcsXG4gICAgICAgIGVycm9yLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB1cGRhdGVQZXJtaXNzaW9uKGR0bykge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCByb2xlSWQgPSBkdG8ucm9sZUlkXG4gICAgICBjb25zdCBwZXJtaXNzaW9uID0gZHRvLnBlcm1pc3Npb25zPy5tYXAoaWQgPT4gKHsgcGVybWlzc2lvbklkOiBpZCB9KSlcblxuICAgICAgY29uc3Qgcm9sZSA9IGF3YWl0IHRoaXMucHJpc21hLnJvbGUudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogcm9sZUlkXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBwZXJtaXNzaW9uczoge1xuICAgICAgICAgICAgZGVsZXRlTWFueToge30sXG4gICAgICAgICAgICBjcmVhdGVNYW55OiB7XG4gICAgICAgICAgICAgIGRhdGE6IHBlcm1pc3Npb25cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH0sXG5cbiAgICAgICAgaW5jbHVkZToge1xuICAgICAgICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICAgICAgcGVybWlzc2lvbjogdHJ1ZVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KEh0dHBTdGF0dXMuT0ssICd1cGRhdGVfcGVybWlzc2lvbnNfc3VjY2VzcycsIHJvbGUpO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ1Blcm1pc3Npb24gbm90IGZvdW5kJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgeyBHbG9iYWwsIE1vZHVsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VQZXJtaXNzaW9uIH0gZnJvbSAnLi9wcmlzbWEuc2VydmljZSc7XG5cbkBHbG9iYWwoKVxuQE1vZHVsZSh7XG4gIHByb3ZpZGVyczogW1ByaXNtYVNlcnZpY2VQZXJtaXNzaW9uXSxcbiAgZXhwb3J0czogW1ByaXNtYVNlcnZpY2VQZXJtaXNzaW9uXSxcbn0pXG5leHBvcnQgY2xhc3MgUHJpc21hTW9kdWxlUGVybWlzc2lvbiB7fVxuIiwiaW1wb3J0IHsgTXlTUUxDbGllbnQgfSBmcm9tICdAY29tbW9uL3ByaXNtYS9teXNxbF9wcmlzbWFfY2xpZW50JztcbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBQcmlzbWFTZXJ2aWNlUGVybWlzc2lvbiBleHRlbmRzIE15U1FMQ2xpZW50IHtcbiAgY2xlYW5EYXRhYmFzZSgpIHtcbiAgICByZXR1cm4gdGhpcy4kdHJhbnNhY3Rpb24oW3RoaXMucGVybWlzc2lvbi5kZWxldGVNYW55KCldKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtcbiAgSXNOb3RFbXB0eSxcbiAgSXNTdHJpbmcsXG4gIElzRW1haWwsIElzTnVtYmVyLCBJc09wdGlvbmFsXG59IGZyb20gXCJjbGFzcy12YWxpZGF0b3JcIjtcbmltcG9ydCB7IEFwaVByb3BlcnR5IH0gZnJvbSBcIkBuZXN0anMvc3dhZ2dlclwiO1xuXG5leHBvcnQgY2xhc3MgUm9sZUR0byB7XG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgQEFwaVByb3BlcnR5KHsgZGVzY3JpcHRpb246ICdVc2VyIGNyZWF0ZSByb2xlJywgcmVxdWlyZWQ6IGZhbHNlIH0pXG4gIGNyZWF0ZWRCeTogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgQEFwaVByb3BlcnR5KHsgZGVzY3JpcHRpb246ICdVc2VyIHVwZGF0ZSByb2xlJywgcmVxdWlyZWQ6IGZhbHNlIH0pXG4gIHVwZGF0ZWRCeTogbnVtYmVyO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgbmFtZTogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgY29kZTogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHsgR2xvYmFsLCBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlUm9sZSB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnO1xuXG5AR2xvYmFsKClcbkBNb2R1bGUoe1xuICBwcm92aWRlcnM6IFtQcmlzbWFTZXJ2aWNlUm9sZV0sXG4gIGV4cG9ydHM6IFtQcmlzbWFTZXJ2aWNlUm9sZV0sXG59KVxuZXhwb3J0IGNsYXNzIFByaXNtYU1vZHVsZVJvbGUge31cbiIsImltcG9ydCB7IE15U1FMQ2xpZW50IH0gZnJvbSAnQGNvbW1vbi9wcmlzbWEvbXlzcWxfcHJpc21hX2NsaWVudCc7XG5pbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpc21hU2VydmljZVJvbGUgZXh0ZW5kcyBNeVNRTENsaWVudCB7XG4gIGNsZWFuRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRyYW5zYWN0aW9uKFt0aGlzLnJvbGUuZGVsZXRlTWFueSgpXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ29udHJvbGxlciB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IE1lc3NhZ2VQYXR0ZXJuLCBQYXlsb2FkIH0gZnJvbSAnQG5lc3Rqcy9taWNyb3NlcnZpY2VzJztcbmltcG9ydCB7IFJvbGVzU2VydmljZSB9IGZyb20gJy4vcm9sZXMuc2VydmljZSc7XG5pbXBvcnQgeyBSb2xlRHRvIH0gZnJvbSAnLi9kdG8vcm9sZUR0byc7XG5cbkBDb250cm9sbGVyKCdyb2xlcycpXG5leHBvcnQgY2xhc3MgUm9sZXNDb250cm9sbGVyIGV4dGVuZHMgSFRUUCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcm9sZVNlcnZpY2U6IFJvbGVzU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZ2V0X3JvbGVzJylcbiAgYXN5bmMgZ2V0Um9sZXMoKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucm9sZVNlcnZpY2UuZ2V0Um9sZXMoKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZ2V0X3JvbGVfYnlfaWQnKVxuICBhc3luYyBnZXRVc2VyKGlkKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucm9sZVNlcnZpY2UuZ2V0Um9sZUJ5SWQoaWQpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdhZGRfcm9sZScpXG4gIGFzeW5jIGFkZFJvbGUoZHRvOiBSb2xlRHRvKSB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMucm9sZVNlcnZpY2UuYWRkUm9sZShkdG8pO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCd1cGRhdGVfcm9sZScpXG4gIGFzeW5jIHVwZGF0ZVJvbGUoQFBheWxvYWQoKSBwYXlsb2FkOiBhbnkpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yb2xlU2VydmljZS51cGRhdGVSb2xlKHBheWxvYWQpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdkZWxldGVfcm9sZScpXG4gIGFzeW5jIGRlbGV0ZVJvbGUoaWQpIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy5yb2xlU2VydmljZS5kZWxldGVSb2xlKGlkKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgUnBjVmFsaWRhdGlvblBpcGUgfSBmcm9tICdAY29tbW9uL3BpcGUnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgQVBQX1BJUEUgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgUHJpc21hTW9kdWxlUm9sZSB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5tb2R1bGUnO1xuaW1wb3J0IHsgUm9sZXNDb250cm9sbGVyIH0gZnJvbSAnLi9yb2xlcy5jb250cm9sbGVyJztcbmltcG9ydCB7IFJvbGVzU2VydmljZSB9IGZyb20gJy4vcm9sZXMuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBQcmlzbWFNb2R1bGVSb2xlLFxuICBdLFxuICBjb250cm9sbGVyczogW1JvbGVzQ29udHJvbGxlcl0sXG4gIHByb3ZpZGVyczogW1xuICAgIFJvbGVzU2VydmljZSxcbiAgICB7XG4gICAgICBwcm92aWRlOiBBUFBfUElQRSxcbiAgICAgIHVzZUNsYXNzOiBScGNWYWxpZGF0aW9uUGlwZSxcbiAgICB9LFxuICBdLFxufSlcbmV4cG9ydCBjbGFzcyBSb2xlc01vZHVsZSB7fVxuIiwiaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzLCBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VSb2xlIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLnNlcnZpY2UnO1xuaW1wb3J0IHsgUm9sZUR0byB9IGZyb20gJy4vZHRvL3JvbGVEdG8nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUm9sZXNTZXJ2aWNlIGV4dGVuZHMgSFRUUCB7XG4gIGNvbnN0cnVjdG9yKFxuICAgIHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlUm9sZSxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIGFzeW5jIGdldFJvbGVzKCkge1xuICAgIGNvbnN0IHVzZXJzID0gYXdhaXQgdGhpcy5wcmlzbWEucm9sZS5maW5kTWFueSh7XG4gICAgICBpbmNsdWRlOiB7XG4gICAgICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICBwZXJtaXNzaW9uOiB0cnVlXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ0F1dGhvcml6ZScsIHVzZXJzKTtcbiAgfVxuXG4gIGFzeW5jIGdldFJvbGVCeUlkKGlkKSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvbGUgPSBhd2FpdCB0aGlzLnByaXNtYS5yb2xlLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkLFxuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgcGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ2dldF9yb2xlX2J5X2lkJywgcm9sZSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYWRkUm9sZShkdG86IFJvbGVEdG8pIHtcbiAgICB0cnkge1xuICAgICAgY29uc3Qgcm9sZSA9IGF3YWl0IHRoaXMucHJpc21hLnJvbGUuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLmR0b1xuICAgICAgICB9LFxuICAgICAgICBpbmNsdWRlOiB7XG4gICAgICAgICAgcGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICBwZXJtaXNzaW9uOiB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KVxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ2FkZF9yb2xlX3N1Y2Nlc3MnLCByb2xlKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnJvciwgJz09PT0nKVxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICdhZGRfcm9sZV9lcnJvcicsXG4gICAgICAgIGVycm9yLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB1cGRhdGVSb2xlKHsgaWQsIGR0byB9KSB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJvbGUgPSBhd2FpdCB0aGlzLnByaXNtYS5yb2xlLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAuLi5kdG8sXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5PSywgJ3VwZGF0ZV91c2Vyc19zdWNjZXNzJywgcm9sZSk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgICAnSW50ZXJuYWwgU2VydmVyIEVycm9yJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZGVsZXRlUm9sZShpZCkge1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gdGhpcy5wcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jIHR4ID0+IHtcbiAgICAgICAgYXdhaXQgdHgucm9sZS51cGRhdGUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZGF0YToge1xuICAgICAgICAgICAgcGVybWlzc2lvbnM6IHtcbiAgICAgICAgICAgICAgZGVsZXRlTWFueToge30sXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCByb2xlID0gYXdhaXQgdHgucm9sZS5kZWxldGUoe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIGluY2x1ZGU6IHtcbiAgICAgICAgICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgICAgIHBlcm1pc3Npb246IHRydWVcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLk9LLCAnZGVsZXRlX3JvbGVfc3VjY2VzcycsIHJvbGUpO1xuICAgICAgfSlcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdSb2xlIE5vdCBGb3VuZCcsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUnBjVmFsaWRhdGlvblBpcGUgfSBmcm9tICdAY29tbW9uL3BpcGUnO1xuaW1wb3J0IHsgTWFpbE1vZHVsZSB9IGZyb20gJ0BhcHBzL3N5c3RlbXMvc3JjL21haWwvc3JjL21haWwubW9kdWxlJztcbmltcG9ydCB7IEFjdGl2aXR5TG9nc01vZHVsZSB9IGZyb20gJ0BhcHBzL3N5c3RlbXMvc3JjL2FjdGl2aXR5X2xvZ3Mvc3JjL2FjdGl2aXR5X2xvZ3MubW9kdWxlJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICdAYXBwcy9zeXN0ZW1zL3NyYy9hdXRoL3NyYy9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBJbnZvaWNlc01vZHVsZSB9IGZyb20gJ0BhcHBzL3N5c3RlbXMvc3JjL2ludm9pY2VzL3NyYy9pbnZvaWNlcy5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlcnNNb2R1bGUgfSBmcm9tICdAYXBwcy9zeXN0ZW1zL3NyYy91c2Vycy9zcmMvdXNlcnMubW9kdWxlJztcbmltcG9ydCB7IFJvbGVzTW9kdWxlIH0gZnJvbSAnQGFwcHMvc3lzdGVtcy9zcmMvcm9sZXMvc3JjL3JvbGVzLm1vZHVsZSc7XG5pbXBvcnQgeyBQZXJtaXNzaW9uc01vZHVsZSB9IGZyb20gJ0BhcHBzL3N5c3RlbXMvc3JjL3Blcm1pc3Npb25zL3NyYy9wZXJtaXNzaW9ucy5tb2R1bGUnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgVXNlckdlbmVyYWxTZXR0aW5nc01vZHVsZSB9IGZyb20gJ0BhcHBzL3N5c3RlbXMvc3JjL3VzZXJfZ2VuZXJhbF9zZXR0aW5ncy9zcmMvdXNlcl9nZW5lcmFsX3NldHRpbmdzLm1vZHVsZSc7XG5pbXBvcnQgeyBOb3RpZmljYXRpb25Nb2R1bGUgfSBmcm9tICcuL25vdGlmaWNhdGlvbnMvc3JjL25vdGlmaWNhdGlvbnMubW9kdWxlJztcbmltcG9ydCB7IFBhY2thZ2VzTW9kdWxlIH0gZnJvbSAnLi9wYWNrYWdlcy9zcmMvcGFja2FnZXMubW9kdWxlJztcbmltcG9ydCB7IEFQUF9QSVBFIH0gZnJvbSAnQG5lc3Rqcy9jb3JlJztcbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQWN0aXZpdHlMb2dzTW9kdWxlLFxuICAgIEF1dGhNb2R1bGUsXG4gICAgVXNlckdlbmVyYWxTZXR0aW5nc01vZHVsZSxcbiAgICBJbnZvaWNlc01vZHVsZSxcbiAgICBVc2Vyc01vZHVsZSxcbiAgICBNYWlsTW9kdWxlLFxuICAgIE5vdGlmaWNhdGlvbk1vZHVsZSxcbiAgICBSb2xlc01vZHVsZSxcbiAgICBQZXJtaXNzaW9uc01vZHVsZSxcbiAgICBQYWNrYWdlc01vZHVsZSxcbiAgXSxcbiAgcHJvdmlkZXJzOiBbXG4gICAge1xuICAgICAgcHJvdmlkZTogQVBQX1BJUEUsXG4gICAgICB1c2VDbGFzczogUnBjVmFsaWRhdGlvblBpcGUsXG4gICAgfSxcbiAgXSxcbn0pXG5leHBvcnQgY2xhc3MgU3lzdGVtc01vZHVsZSB7fVxuIiwiaW1wb3J0IHtcbiAgSXNOb3RFbXB0eSxcbiAgSXNPcHRpb25hbCxcbiAgSXNFbnVtLFxuICBJc0RhdGUsXG4gIElzSW50LFxuICBJc051bWJlcixcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcbmltcG9ydCB7XG4gIFVzZXJHZW5lcmFsU2V0dGluZ3NfRGVmYXVsdExhbmd1YWdlLFxuICBVc2VyR2VuZXJhbFNldHRpbmdzX1RoZW1lLFxufSBmcm9tICdAcHJpc21hL215c3FsJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVVzZXJHZW5lcmFsU2V0dGluZ3NEdG8ge1xuICBASXNJbnQoKVxuICBASXNPcHRpb25hbCgpXG4gIGNyZWF0ZWRCeTogbnVtYmVyO1xuXG4gIEBJc0RhdGUoKVxuICBASXNPcHRpb25hbCgpXG4gIGNyZWF0ZWREYXRlPzogRGF0ZTtcblxuICBASXNJbnQoKVxuICBASXNOb3RFbXB0eSgpXG4gIHVzZXJJZDogbnVtYmVyO1xuXG4gIEBJc0VudW0oVXNlckdlbmVyYWxTZXR0aW5nc19EZWZhdWx0TGFuZ3VhZ2UpXG4gIEBJc09wdGlvbmFsKClcbiAgZGVmYXVsdExhbmd1YWdlOiBVc2VyR2VuZXJhbFNldHRpbmdzX0RlZmF1bHRMYW5ndWFnZTtcblxuICBASXNFbnVtKFVzZXJHZW5lcmFsU2V0dGluZ3NfVGhlbWUpXG4gIEBJc09wdGlvbmFsKClcbiAgdGhlbWU6IFVzZXJHZW5lcmFsU2V0dGluZ3NfVGhlbWU7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBzZXNzaW9uVGltZW91dDogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgc3RhbmRhcmRDb2FsUmF0ZTogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgY28yUmVkdWN0aW9uUmF0ZTogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgdHJlZXNTYXZlZFJhdGU6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7XG4gIElzT3B0aW9uYWwsXG4gIElzRW51bSxcbiAgSXNEYXRlLFxuICBJc0ludCxcbiAgSXNOdW1iZXIsXG4gIElzTm90RW1wdHksXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQge1xuICBVc2VyR2VuZXJhbFNldHRpbmdzX0RlZmF1bHRMYW5ndWFnZSxcbiAgVXNlckdlbmVyYWxTZXR0aW5nc19UaGVtZSxcbn0gZnJvbSAnQHByaXNtYS9teXNxbCc7XG5cbmV4cG9ydCBjbGFzcyBFZGl0VXNlckdlbmVyYWxTZXR0aW5nc0R0byB7XG4gIEBJc0ludCgpXG4gIEBJc09wdGlvbmFsKClcbiAgdXBkYXRlZEJ5PzogbnVtYmVyO1xuXG4gIEBJc0RhdGUoKVxuICBASXNPcHRpb25hbCgpXG4gIHVwZGF0ZWREYXRlPzogRGF0ZTtcblxuICBASXNEYXRlKClcbiAgQElzT3B0aW9uYWwoKVxuICBkZWxldGVkRGF0ZT86IERhdGU7XG5cbiAgQElzSW50KClcbiAgQElzTm90RW1wdHkoKVxuICBpZDogbnVtYmVyO1xuXG4gIEBJc0VudW0oVXNlckdlbmVyYWxTZXR0aW5nc19EZWZhdWx0TGFuZ3VhZ2UpXG4gIEBJc09wdGlvbmFsKClcbiAgZGVmYXVsdExhbmd1YWdlOiBVc2VyR2VuZXJhbFNldHRpbmdzX0RlZmF1bHRMYW5ndWFnZTtcblxuICBASXNFbnVtKFVzZXJHZW5lcmFsU2V0dGluZ3NfVGhlbWUpXG4gIEBJc09wdGlvbmFsKClcbiAgdGhlbWU6IFVzZXJHZW5lcmFsU2V0dGluZ3NfVGhlbWU7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBzZXNzaW9uVGltZW91dDogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgc3RhbmRhcmRDb2FsUmF0ZTogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgY28yUmVkdWN0aW9uUmF0ZTogbnVtYmVyO1xuXG4gIEBJc051bWJlcigpXG4gIEBJc09wdGlvbmFsKClcbiAgdHJlZXNTYXZlZFJhdGU6IG51bWJlcjtcbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZVVzZXJHZW5lcmFsU2V0dGluZ3MgfSBmcm9tICcuL3ByaXNtYS5zZXJ2aWNlJztcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbUHJpc21hU2VydmljZVVzZXJHZW5lcmFsU2V0dGluZ3NdLFxuICBleHBvcnRzOiBbUHJpc21hU2VydmljZVVzZXJHZW5lcmFsU2V0dGluZ3NdLFxufSlcbmV4cG9ydCBjbGFzcyBQcmlzbWFNb2R1bGVVc2VyR2VuZXJhbFNldHRpbmdze31cbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNeVNRTENsaWVudCB9IGZyb20gJ0Bjb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQnO1xuLy8gaW1wb3J0IHsgRU5WIH0gZnJvbSAnLi4vdXRpbCc7XG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgUHJpc21hU2VydmljZVVzZXJHZW5lcmFsU2V0dGluZ3MgZXh0ZW5kcyBNeVNRTENsaWVudCB7XG4gIGNsZWFuRGF0YWJhc2UoKSB7XG4gICAgcmV0dXJuIHRoaXMuJHRyYW5zYWN0aW9uKFt0aGlzLnVzZXJHZW5lcmFsU2V0dGluZ3MuZGVsZXRlTWFueSgpXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7XG4gIENvbnRyb2xsZXIsXG4gIFZhbGlkYXRpb25QaXBlLFxuICBVc2VGaWx0ZXJzLFxufSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiwgUGF5bG9hZCB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBVc2VyR2VuZXJhbFNldHRpbmdzU2VydmljZSB9IGZyb20gJy4vdXNlcl9nZW5lcmFsX3NldHRpbmdzLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JlYXRlVXNlckdlbmVyYWxTZXR0aW5nc0R0byB9IGZyb20gJy4vZHRvL2NyZWF0ZV91c2VyX2dlbmVyYWwuZHRvJztcbmltcG9ydCB7IEVkaXRVc2VyR2VuZXJhbFNldHRpbmdzRHRvIH0gZnJvbSAnLi9kdG8vZWRpdF91c2VyX2dlbmVyYWxfc2V0dGluZ3MuZHRvJztcbmltcG9ydCB7IFJwY1ZhbGlkYXRpb25GaWx0ZXIgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuXG5AQ29udHJvbGxlcigndXNlci1nZW5lcmFsLXNldHRpbmdzJylcbmV4cG9ydCBjbGFzcyBVc2VyR2VuZXJhbFNldHRpbmdzQ29udHJvbGxlciB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgdXNlckdlbmVyYWxTZXR0aW5nc1NlcnZpY2U6IFVzZXJHZW5lcmFsU2V0dGluZ3NTZXJ2aWNlKSB7IH1cblxuICBATWVzc2FnZVBhdHRlcm4oeyBjbWQ6ICdnZXRfdXNlcl9nZW5lcmFsX3NldHRpbmdzJyB9KVxuICBhc3luYyBnZXRVc2VyR2VuZXJhbFNldHRpbmdzKCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJHZW5lcmFsU2V0dGluZ3NTZXJ2aWNlLmdldFVzZXJHZW5lcmFsU2V0dGluZ3MoKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZ2V0X3VzZXJfZ2VuZXJhbF9zZXR0aW5nX2J5X2lkJylcbiAgYXN5bmMgZ2V0VXNlckdlbmVyYWxTZXR0aW5nQnlJZChpZCkge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJHZW5lcmFsU2V0dGluZ3NTZXJ2aWNlLmdldFVzZXJHZW5lcmFsU2V0dGluZ0J5SWQoaWQpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdhZGRfdXNlcl9nZW5lcmFsX3NldHRpbmcnKVxuICBAVXNlRmlsdGVycyhuZXcgUnBjVmFsaWRhdGlvbkZpbHRlcigpKVxuICBhc3luYyBhZGRBbGVydFNldHRpbmcoQFBheWxvYWQobmV3IFZhbGlkYXRpb25QaXBlKHsgd2hpdGVsaXN0OiB0cnVlIH0pKSBkdG86IENyZWF0ZVVzZXJHZW5lcmFsU2V0dGluZ3NEdG8pIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyR2VuZXJhbFNldHRpbmdzU2VydmljZS5hZGRVc2VyR2VuZXJhbFNldHRpbmcoZHRvKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybigndXBkYXRlX3VzZXJfZ2VuZXJhbF9zZXR0aW5nJylcbiAgQFVzZUZpbHRlcnMobmV3IFJwY1ZhbGlkYXRpb25GaWx0ZXIoKSlcbiAgYXN5bmMgdXBkYXRlVXNlckdlbmVyYWxTZXR0aW5nKEBQYXlsb2FkKG5ldyBWYWxpZGF0aW9uUGlwZSh7IHdoaXRlbGlzdDogdHJ1ZSB9KSkgZHRvOiBFZGl0VXNlckdlbmVyYWxTZXR0aW5nc0R0bykge1xuICAgIGNvbnN0IGFsZXJ0U2V0dGluZyA9IGF3YWl0IHRoaXMudXNlckdlbmVyYWxTZXR0aW5nc1NlcnZpY2UudXBkYXRlVXNlckdlbmVyYWxTZXR0aW5nKGR0byk7XG4gICAgcmV0dXJuIGFsZXJ0U2V0dGluZztcbiAgfVxufVxuIiwiaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgVXNlckdlbmVyYWxTZXR0aW5nc0NvbnRyb2xsZXIgfSBmcm9tICcuL3VzZXJfZ2VuZXJhbF9zZXR0aW5ncy5jb250cm9sbGVyJztcbmltcG9ydCB7IFVzZXJHZW5lcmFsU2V0dGluZ3NTZXJ2aWNlIH0gZnJvbSAnLi91c2VyX2dlbmVyYWxfc2V0dGluZ3Muc2VydmljZSc7XG5pbXBvcnQgeyBQcmlzbWFNb2R1bGVVc2VyR2VuZXJhbFNldHRpbmdzIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLm1vZHVsZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBQcmlzbWFNb2R1bGVVc2VyR2VuZXJhbFNldHRpbmdzLFxuICBdLFxuICBjb250cm9sbGVyczogW1VzZXJHZW5lcmFsU2V0dGluZ3NDb250cm9sbGVyXSxcbiAgcHJvdmlkZXJzOiBbVXNlckdlbmVyYWxTZXR0aW5nc1NlcnZpY2VdLFxufSlcbmV4cG9ydCBjbGFzcyBVc2VyR2VuZXJhbFNldHRpbmdzTW9kdWxlIHsgfVxuIiwiaW1wb3J0IHsgSFRUUCwgQ3VzdG9tUmVzcG9uc2UgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cFN0YXR1cywgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IFByaXNtYVNlcnZpY2VVc2VyR2VuZXJhbFNldHRpbmdzIH0gZnJvbSAnLi9wcmlzbWEvcHJpc21hLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ3JlYXRlVXNlckdlbmVyYWxTZXR0aW5nc0R0byB9IGZyb20gJy4vZHRvL2NyZWF0ZV91c2VyX2dlbmVyYWwuZHRvJztcbmltcG9ydCB7IEVkaXRVc2VyR2VuZXJhbFNldHRpbmdzRHRvIH0gZnJvbSAnLi9kdG8vZWRpdF91c2VyX2dlbmVyYWxfc2V0dGluZ3MuZHRvJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFVzZXJHZW5lcmFsU2V0dGluZ3NTZXJ2aWNlIGV4dGVuZHMgSFRUUCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlVXNlckdlbmVyYWxTZXR0aW5ncykge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBhc3luYyBnZXRVc2VyR2VuZXJhbFNldHRpbmdzKCk6IFByb21pc2U8Q3VzdG9tUmVzcG9uc2U+IHtcbiAgICBjb25zdCB1c2VyR2VuZXJhbFNldHRpbmdzID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlckdlbmVyYWxTZXR0aW5ncy5maW5kTWFueSh7XG4gICAgICB3aGVyZToge1xuICAgICAgICBkZWxldGVkRGF0ZTogbnVsbCxcbiAgICAgIH0sXG4gICAgfSk7XG4gICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgJ3N5c3RlbXMuU0VUVElOR1MuR0VUX0lURU1TJyxcbiAgICAgIHVzZXJHZW5lcmFsU2V0dGluZ3MsXG4gICAgICB1c2VyR2VuZXJhbFNldHRpbmdzLmxlbmd0aCxcbiAgICApO1xuICB9XG5cbiAgYXN5bmMgZ2V0VXNlckdlbmVyYWxTZXR0aW5nQnlJZChpZDogbnVtYmVyKTogUHJvbWlzZTxDdXN0b21SZXNwb25zZT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyR2VuZXJhbFNldHRpbmcgPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyR2VuZXJhbFNldHRpbmdzLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG5cbiAgICAgIGlmICghdXNlckdlbmVyYWxTZXR0aW5nKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ3N5c3RlbXMuU0VUVElOR1MuSVRFTV9OT1RfRVhJU1QnLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIGlmICh1c2VyR2VuZXJhbFNldHRpbmcuZGVsZXRlZERhdGUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnc3lzdGVtcy5TRVRUSU5HUy5JVEVNX0RFTEVURUQnLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ3N5c3RlbXMuU0VUVElOR1MuR0VUX0lURU0nLFxuICAgICAgICB1c2VyR2VuZXJhbFNldHRpbmcsXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcbiAgICAgIHJldHVybiB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnc3lzdGVtcy5TRVRUSU5HUy5HRVRfSVRFTV9GQUlMRUQnLFxuICAgICAgICBlcnJvcixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgYWRkVXNlckdlbmVyYWxTZXR0aW5nKGR0bzogQ3JlYXRlVXNlckdlbmVyYWxTZXR0aW5nc0R0byk6IFByb21pc2U8Q3VzdG9tUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlckdlbmVyYWxTZXR0aW5nID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlckdlbmVyYWxTZXR0aW5ncy5jcmVhdGUoe1xuICAgICAgICBkYXRhOiBkdG8sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICdzeXN0ZW1zLlNFVFRJTkdTLkFERF9JVEVNJyxcbiAgICAgICAgdXNlckdlbmVyYWxTZXR0aW5nLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ3N5c3RlbXMuU0VUVElOR1MuQUREX0lURU1fRkFJTEVEJyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHVwZGF0ZVVzZXJHZW5lcmFsU2V0dGluZyhkdG86IEVkaXRVc2VyR2VuZXJhbFNldHRpbmdzRHRvKTogUHJvbWlzZTxDdXN0b21SZXNwb25zZT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyR2VuZXJhbFNldHRpbmcgPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyR2VuZXJhbFNldHRpbmdzLmZpbmRVbmlxdWUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBkdG8uaWQsXG4gICAgICAgIH0sXG4gICAgICB9KTtcblxuICAgICAgaWYgKCF1c2VyR2VuZXJhbFNldHRpbmcpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnc3lzdGVtcy5TRVRUSU5HUy5JVEVNX05PVF9FWElTVCcsXG4gICAgICAgICk7XG4gICAgICB9IGVsc2UgaWYgKHVzZXJHZW5lcmFsU2V0dGluZy5kZWxldGVkRGF0ZSkge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdzeXN0ZW1zLlNFVFRJTkdTLklURU1fREVMRVRFRCcsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHVwZGF0ZWRVc2VyR2VuZXJhbFNldHRpbmcgPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyR2VuZXJhbFNldHRpbmdzLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQ6IGR0by5pZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLmR0byxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ3N5c3RlbXMuU0VUVElOR1MuVVBEQVRFX1NVQ0NFU1MnLFxuICAgICAgICB1cGRhdGVkVXNlckdlbmVyYWxTZXR0aW5nLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ3N5c3RlbXMuU0VUVElOR1MuVVBEQVRFX1NVQ0NFU1NfRkFJTEVEJyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZVVzZXJHZW5lcmFsU2V0dGluZyh7IHVzZXJJZCwgaWQgfSk6IFByb21pc2U8Q3VzdG9tUmVzcG9uc2U+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgdXNlckdlbmVyYWxTZXR0aW5nID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlckdlbmVyYWxTZXR0aW5ncy5maW5kVW5pcXVlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXVzZXJHZW5lcmFsU2V0dGluZykge1xuICAgICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdzeXN0ZW1zLlNFVFRJTkdTLklURU1fTk9UX0VYSVNUJyxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGRlbGV0ZWRVc2VyR2VuZXJhbFNldHRpbmcgPSBhd2FpdCB0aGlzLnByaXNtYS51c2VyR2VuZXJhbFNldHRpbmdzLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICB1cGRhdGVkQnk6IHVzZXJJZCxcbiAgICAgICAgICBkZWxldGVkRGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ3N5c3RlbXMuU0VUVElOR1MuREVMRVRFX1NVQ0NFU1MnLFxuICAgICAgICBkZWxldGVkVXNlckdlbmVyYWxTZXR0aW5nLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ3N5c3RlbXMuU0VUVElOR1MuREVMRVRFX1NVQ0NFU1NfRkFJTEVEJyxcbiAgICAgICAgZXJyb3IsXG4gICAgICApO1xuICAgIH1cbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9xdWVyeSc7XG4iLCJleHBvcnQgY29uc3QgZmllbGRzSW5jbHVkZWQgPSB7XG4gIGlkOiB0cnVlLFxuICBjcmVhdGVkRGF0ZTogdHJ1ZSxcbiAgZW1haWw6IHRydWUsXG4gIGZpcnN0TmFtZTogdHJ1ZSxcbiAgbGFzdE5hbWU6IHRydWUsXG4gIHBob25lOiB0cnVlLFxuICByb2xlSWQ6IHRydWUsXG4gIHN0YXR1czogdHJ1ZSxcbiAgYXZhdGFyOiB0cnVlLFxuICBwcm9qZWN0czoge1xuICAgIHNlbGVjdDoge1xuICAgICAgcHJvamVjdDogdHJ1ZSxcbiAgICB9LFxuICB9LFxuICBjdXN0b21lcnM6IHtcbiAgICBzZWxlY3Q6IHtcbiAgICAgIGN1c3RvbWVyOiB0cnVlLFxuICAgIH0sXG4gIH0sXG4gIHVzZXJHZW5lcmFsU2V0dGluZzogdHJ1ZSxcbiAgcm9sZToge1xuICAgIHNlbGVjdDoge1xuICAgICAgaWQ6IHRydWUsXG4gICAgICBuYW1lOiB0cnVlLFxuICAgICAgY29kZTogdHJ1ZSxcbiAgICAgIHBlcm1pc3Npb25zOiB7XG4gICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgIHBlcm1pc3Npb246IHRydWUsXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59O1xuXG5leHBvcnQgY29uc3Qgc2VhcmNoUXVlcnkgPSAoa2V5d29yZDogc3RyaW5nKSA9PiB7XG4gIHJldHVybiBbXG4gICAge1xuICAgICAgZW1haWw6IHtcbiAgICAgICAgY29udGFpbnM6IGtleXdvcmQgfHwgJycsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgcGhvbmU6IHtcbiAgICAgICAgY29udGFpbnM6IGtleXdvcmQgfHwgJycsXG4gICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgZmlyc3ROYW1lOiB7XG4gICAgICAgIGNvbnRhaW5zOiBrZXl3b3JkIHx8ICcnLFxuICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgIGxhc3ROYW1lOiB7XG4gICAgICAgIGNvbnRhaW5zOiBrZXl3b3JkIHx8ICcnLFxuICAgICAgfSxcbiAgICB9LFxuICBdO1xufTtcblxuZXhwb3J0IGNvbnN0IGZpbHRlckZpZWxkUXVlcnkgPSAoZmllbGQ6IHN0cmluZywgZmllbGREYXRhOiBudW1iZXJbXSkgPT4ge1xuICBpZiAoIWZpZWxkRGF0YT8ubGVuZ3RoKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHJldHVybiB7XG4gICAgc29tZToge1xuICAgICAgW2Ake2ZpZWxkfWBdOiB7XG4gICAgICAgIGluOiBmaWVsZERhdGEsXG4gICAgICB9LFxuICAgIH0sXG4gIH07XG59O1xuIiwiaW1wb3J0IHsgQ3VycmVudFVzZXIgfSBmcm9tICdAY29tbW9uL3V0aWxzJztcbmltcG9ydCB7XG4gIElzTnVtYmVyLFxuICBJc09wdGlvbmFsLFxuICBJc1N0cmluZyxcbiAgSXNBcnJheSxcbiAgSXNFbnVtLFxuICBJc05vdEVtcHR5LFxufSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgQ2xpZW50U3RhdHVzIH0gZnJvbSAnQHByaXNtYS9teXNxbCc7XG5cbmV4cG9ydCBjbGFzcyBDaGFuZ2VQYXNzd29yZER0byB7XG4gIEBJc051bWJlcigpXG4gIEBJc05vdEVtcHR5KClcbiAgaWQ6IG51bWJlcjtcblxuICBASXNOb3RFbXB0eSgpXG4gIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjtcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIGN1cnJlbnRQYXNzd29yZDogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgbmV3UGFzc3dvcmQ6IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNOb3RFbXB0eSgpXG4gIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xufVxuIiwiaW1wb3J0IHtcbiAgSXNOb3RFbXB0eSxcbiAgSXNOdW1iZXIsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBJc0RhdGVTdHJpbmcsXG4gIElzRW51bSxcbiAgSXNFbWFpbCxcbiAgSXNBcnJheSxcbn0gZnJvbSAnY2xhc3MtdmFsaWRhdG9yJztcblxuZXhwb3J0IGNsYXNzIENyZWF0ZVVzZXJEdG8ge1xuICBASXNPcHRpb25hbCgpXG4gIGN1cnJlbnRVc2VyOiB7IGlkOiBudW1iZXI7IGN1c3RvbWVyT3duZXJJZDogbnVtYmVyIH07XG5cbiAgQElzRW1haWwoKVxuICBASXNOb3RFbXB0eSgpXG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzTm90RW1wdHkoKVxuICBwYXNzd29yZDogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc05vdEVtcHR5KClcbiAgcGhvbmU6IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbGFzdE5hbWU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBhdmF0YXI/OiBzdHJpbmc7XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBjdXN0b21lck93bmVySWQ/OiBudW1iZXI7XG5cbiAgQElzQXJyYXkoKVxuICBASXNPcHRpb25hbCgpXG4gIHByb2plY3RzPzogbnVtYmVyW107XG5cbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICByb2xlSWQ/OiBudW1iZXI7XG59XG4iLCJpbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJ0Bjb21tb24vdXRpbHMnO1xuaW1wb3J0IHtcbiAgSXNOdW1iZXIsXG4gIElzT3B0aW9uYWwsXG4gIElzU3RyaW5nLFxuICBJc0FycmF5LFxuICBJc0VudW0sXG4gIElzTm90RW1wdHksXG59IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBDbGllbnRTdGF0dXMgfSBmcm9tICdAcHJpc21hL215c3FsJztcblxuZXhwb3J0IGNsYXNzIEVkaXRVc2VyRHRvIHtcbiAgQElzTnVtYmVyKClcbiAgQElzT3B0aW9uYWwoKVxuICBpZDogbnVtYmVyO1xuXG4gIEBJc05vdEVtcHR5KClcbiAgY3VycmVudFVzZXI6IEN1cnJlbnRVc2VyO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcGhvbmU6IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGZpcnN0TmFtZTogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgbGFzdE5hbWU/OiBzdHJpbmc7XG5cbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBhdmF0YXI/OiBzdHJpbmc7XG5cbiAgQElzQXJyYXkoKVxuICBASXNPcHRpb25hbCgpXG4gIHByb2plY3RzPzogbnVtYmVyW107XG5cbiAgQElzRW51bShDbGllbnRTdGF0dXMsIHtcbiAgICBtZXNzYWdlOiAnc3RhdHVzIG11c3QgYmUgZWl0aGVyIEFDVElWRSBvciBJTkFDVElWRScsXG4gIH0pXG4gIEBJc09wdGlvbmFsKClcbiAgc3RhdHVzOiBDbGllbnRTdGF0dXM7XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2NyZWF0ZS11c2VyLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL2VkaXQtdXNlci5kdG8nO1xuZXhwb3J0ICogZnJvbSAnLi9wYWdpbmF0aW9uLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL2NoYW5nZS1wYXNzd29yZC5kdG8nO1xuIiwiaW1wb3J0IHsgSXNEYXRlLCBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5pbXBvcnQgeyBQYWdpbmF0aW9uUXVlcnlEdG8gfSBmcm9tICdAY29tbW9uL2R0byc7XG5cbmV4cG9ydCBjbGFzcyBVc2VyUGFnaW5hdGlvblF1ZXJ5RHRvIGV4dGVuZHMgUGFnaW5hdGlvblF1ZXJ5RHRvIHtcbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBlbWFpbD86IHN0cmluZztcblxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHBob25lPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgc3RhdHVzPzogc3RyaW5nO1xuXG4gIEBJc1N0cmluZygpXG4gIEBJc09wdGlvbmFsKClcbiAgcm9sZT86IHN0cmluZztcbn1cbiIsImltcG9ydCB7IEdsb2JhbCwgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZVVzZXIgfSBmcm9tICcuL3ByaXNtYS5zZXJ2aWNlJztcblxuQEdsb2JhbCgpXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbUHJpc21hU2VydmljZVVzZXJdLFxuICBleHBvcnRzOiBbUHJpc21hU2VydmljZVVzZXJdLFxufSlcbmV4cG9ydCBjbGFzcyBQcmlzbWFNb2R1bGVVc2VyIHt9XG4iLCJpbXBvcnQgeyBNeVNRTENsaWVudCB9IGZyb20gJ0Bjb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaXNtYVNlcnZpY2VVc2VyIGV4dGVuZHMgTXlTUUxDbGllbnQge1xuICBjbGVhbkRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLiR0cmFuc2FjdGlvbihbdGhpcy51c2VyLmRlbGV0ZU1hbnkoKV0pO1xuICB9XG59XG4iLCJpbXBvcnQgeyBDdXJyZW50VXNlciB9IGZyb20gJ0Bjb21tb24vdXRpbHMnO1xuaW1wb3J0IHsgQXV0aFNlcnZpY2UgfSBmcm9tICdAYXBwcy9zeXN0ZW1zL3NyYy9hdXRoL3NyYy9hdXRoLnNlcnZpY2UnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7IEN1c3RvbVJlc3BvbnNlLCBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IE1haWxNZXNzYWdlIH0gZnJvbSAnQGNvbW1vbi90eXBlcyc7XG5pbXBvcnQgeyBDb250cm9sbGVyLCBIdHRwU3RhdHVzLCBJbmplY3QgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBNZXNzYWdlUGF0dGVybiwgUGF5bG9hZCwgQ2xpZW50UHJveHkgfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlUGFzc3dvcmREdG8sXG4gIENyZWF0ZVVzZXJEdG8sXG4gIEVkaXRVc2VyRHRvLFxuICBVc2VyUGFnaW5hdGlvblF1ZXJ5RHRvLFxufSBmcm9tICcuL2R0byc7XG5pbXBvcnQgeyBVc2Vyc1NlcnZpY2UgfSBmcm9tICcuL3VzZXJzLnNlcnZpY2UnO1xuaW1wb3J0IHsgbGFzdFZhbHVlRnJvbSB9IGZyb20gJ3J4anMnO1xuXG5AQ29udHJvbGxlcigndXNlcnMnKVxuZXhwb3J0IGNsYXNzIFVzZXJzQ29udHJvbGxlciBleHRlbmRzIEhUVFAge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2Vyc1NlcnZpY2UsXG4gICAgQEluamVjdCgnUVVFVUVfU0VSVklDRScpIHByaXZhdGUgY2xpZW50OiBDbGllbnRQcm94eSxcbiAgICBwcml2YXRlIGNvbmZpZzogQ29uZmlnU2VydmljZSxcbiAgICBwcml2YXRlIGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSxcbiAgKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybignZ2V0X3VzZXJzJylcbiAgYXN5bmMgZ2V0VXNlcnMoXG4gICAgQFBheWxvYWQoKVxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjtcbiAgICAgIHBhZ2luYXRpb25RdWVyeUR0bzogVXNlclBhZ2luYXRpb25RdWVyeUR0bztcbiAgICB9LFxuICApOiBQcm9taXNlPEN1c3RvbVJlc3BvbnNlPiB7XG4gICAgcmV0dXJuIGF3YWl0IHRoaXMudXNlclNlcnZpY2UuZ2V0VXNlcnMocGF5bG9hZCk7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2dldF91c2VyX2J5X2lkJylcbiAgYXN5bmMgZ2V0VXNlckJ5SWQoXG4gICAgQFBheWxvYWQoKVxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjtcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgfSxcbiAgKTogUHJvbWlzZTxDdXN0b21SZXNwb25zZT4ge1xuICAgIHJldHVybiBhd2FpdCB0aGlzLnVzZXJTZXJ2aWNlLmdldFVzZXJCeUlkKHBheWxvYWQpO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCd1c2VyX3NpZ251cCcpXG4gIGFzeW5jIHNpZ25VcChAUGF5bG9hZCgpIGR0bzogQ3JlYXRlVXNlckR0bywgY29uZmlnKSB7XG4gICAgY29uc3QgdXNlclJlc3BvbnNlID0gYXdhaXQgdGhpcy51c2VyU2VydmljZS5zaWduVXAoZHRvKTtcbiAgICBpZiAodXNlclJlc3BvbnNlLmNvZGUgIT09IEh0dHBTdGF0dXMuT0spIHtcbiAgICAgIHJldHVybiB1c2VyUmVzcG9uc2U7XG4gICAgfVxuICAgIC8vIGNvbnN0IHsgaWQsIGVtYWlsIH0gPSB1c2VyUmVzcG9uc2UuZGF0YTtcblxuICAgIC8vIGNvbnN0IHsgYWNjZXNzVG9rZW4gfSA9IGF3YWl0IHRoaXMuYXV0aFNlcnZpY2Uuc2lnblRva2VuKGlkLCBlbWFpbCk7XG5cbiAgICAvLyBjb25zdCBtYWlsID0gbmV3IE1haWxNZXNzYWdlKFxuICAgIC8vICAgZW1haWwsXG4gICAgLy8gICAnQWN0aXZhdGUgeW91ciBhY2NvdW50JyxcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgdHlwZTogJ2h0bWwnLFxuICAgIC8vICAgICBkYXRhOiAnYWN0aXZhdGVfYWNjb3VudC5odG1sJyxcbiAgICAvLyAgIH0sXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGxpbms6IGAke3RoaXMuY29uZmlnLmdldCgnQkVfSE9TVF9VUkwnKX0vJHt0aGlzLmNvbmZpZy5nZXQoXG4gICAgLy8gICAgICAgJ0JFX0FDVElWQVRFX0VNQUlMX0VORFBPSU5UJyxcbiAgICAvLyAgICAgKX0/ZW1haWw9JHtlbWFpbH0maWQ9JHtpZH0mdG9rZW49JHthY2Nlc3NUb2tlbn1gLFxuICAgIC8vICAgfSxcbiAgICAvLyApO1xuXG4gICAgLy8gY29uc3QgZW1haWxSZXNwb25zZSA9IGF3YWl0IGxhc3RWYWx1ZUZyb20odGhpcy5jbGllbnQuc2VuZCgnZW1haWwnLCBtYWlsKSk7XG4gICAgcmV0dXJuIHVzZXJSZXNwb25zZTtcbiAgfVxuXG4gIEBNZXNzYWdlUGF0dGVybigndXBkYXRlX3VzZXInKVxuICBhc3luYyB1cGRhdGVVc2VyKEBQYXlsb2FkKCkgcGF5bG9hZDogRWRpdFVzZXJEdG8pIHtcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UudXBkYXRlVXNlcihwYXlsb2FkKTtcbiAgICByZXR1cm4gdXNlcnM7XG4gIH1cblxuICBATWVzc2FnZVBhdHRlcm4oJ2NoYW5nZV9wYXNzd29yZCcpXG4gIGFzeW5jIGNoYW5nZVBhc3N3b3JkKEBQYXlsb2FkKCkgcGF5bG9hZDogQ2hhbmdlUGFzc3dvcmREdG8pIHtcbiAgICBjb25zdCB1c2VycyA9IGF3YWl0IHRoaXMudXNlclNlcnZpY2UuY2hhbmdlUGFzc3dvcmQocGF5bG9hZCk7XG4gICAgcmV0dXJuIHVzZXJzO1xuICB9XG5cbiAgQE1lc3NhZ2VQYXR0ZXJuKCdkZWxldGVfdXNlcicpXG4gIGFzeW5jIGRlbGV0ZVVzZXIoXG4gICAgQFBheWxvYWQoKVxuICAgIHBheWxvYWQ6IHtcbiAgICAgIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjtcbiAgICAgIGlkOiBudW1iZXI7XG4gICAgICBjb25maXJtUGFzc3dvcmQ6IHN0cmluZztcbiAgICB9LFxuICApIHtcbiAgICByZXR1cm4gYXdhaXQgdGhpcy51c2VyU2VydmljZS5kZWxldGVVc2VyKHBheWxvYWQpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBIVFRQIH0gZnJvbSAnQGNvbW1vbi9odHRwJztcbmltcG9ydCB7IFByaXNtYVF1ZXJ5IH0gZnJvbSAnQGNvbW1vbi91dGlscy9kdG8vcXVlcnkucHJpc21hJztcbmltcG9ydCB7IEF1dGhNb2R1bGUgfSBmcm9tICdAYXBwcy9zeXN0ZW1zL3NyYy9hdXRoL3NyYy9hdXRoLm1vZHVsZSc7XG5pbXBvcnQgeyBSZWRpc01vZHVsZSB9IGZyb20gJ0Bjb21tb24vcmVkaXMnO1xuaW1wb3J0IHsgUnBjVmFsaWRhdGlvblBpcGUgfSBmcm9tICdAY29tbW9uL3BpcGUnO1xuaW1wb3J0IHsgTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgQVBQX1BJUEUgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgUHJpc21hTW9kdWxlVXNlciB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5tb2R1bGUnO1xuaW1wb3J0IHsgVXNlcnNDb250cm9sbGVyIH0gZnJvbSAnLi91c2Vycy5jb250cm9sbGVyJztcbmltcG9ydCB7IFVzZXJzU2VydmljZSB9IGZyb20gJy4vdXNlcnMuc2VydmljZSc7XG5cbkBNb2R1bGUoe1xuICBpbXBvcnRzOiBbXG4gICAgQ29uZmlnTW9kdWxlLmZvclJvb3Qoe1xuICAgICAgaXNHbG9iYWw6IHRydWUsXG4gICAgICBlbnZGaWxlUGF0aDogJy5lbnYuZGV2JyxcbiAgICB9KSxcbiAgICBQcmlzbWFNb2R1bGVVc2VyLFxuICAgIFJlZGlzTW9kdWxlLnJlZ2lzdGVyKCdRVUVVRV9TRVJWSUNFJyksXG4gICAgQXV0aE1vZHVsZSxcbiAgXSxcbiAgY29udHJvbGxlcnM6IFtVc2Vyc0NvbnRyb2xsZXJdLFxuICBwcm92aWRlcnM6IFtVc2Vyc1NlcnZpY2UsIFByaXNtYVF1ZXJ5LCBIVFRQXSxcbn0pXG5leHBvcnQgY2xhc3MgVXNlcnNNb2R1bGUge31cbiIsImltcG9ydCB7IGlzRktleVF1ZXJ5VmFsaWQgfSBmcm9tICdAY29tbW9uL3V0aWxzL3ZhbGlkYXRlcy9rZXktcXVlcnkudXRpbCc7XG5pbXBvcnQgeyBSRVNUZnVsUGFyYW1zLCBSRVNUZnVsU2VydmljZSB9IGZyb20gJ0Bjb21tb24vdXRpbHMvcmVxdWV0cy51dGlsJztcbmltcG9ydCB7IEhUVFAgfSBmcm9tICdAY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgSHR0cFN0YXR1cywgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlVXNlciB9IGZyb20gJy4vcHJpc21hL3ByaXNtYS5zZXJ2aWNlJztcbmltcG9ydCAqIGFzIGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuaW1wb3J0IHtcbiAgQ2hhbmdlUGFzc3dvcmREdG8sXG4gIENyZWF0ZVVzZXJEdG8sXG4gIEVkaXRVc2VyRHRvLFxuICBVc2VyUGFnaW5hdGlvblF1ZXJ5RHRvLFxufSBmcm9tICcuL2R0byc7XG5pbXBvcnQge1xuICBDdXJyZW50VXNlcixcbiAgUHJpc21hUXVlcnksXG4gIHJlbW92ZU9iamVjdFByb3BlcnRpZXMsXG4gIHJlbW92ZVJlZHVuZGFudCxcbn0gZnJvbSAnQGNvbW1vbi91dGlscyc7XG5pbXBvcnQgeyBmaWVsZHNJbmNsdWRlZCwgZmlsdGVyRmllbGRRdWVyeSwgc2VhcmNoUXVlcnkgfSBmcm9tICcuL2NvbW1vbic7XG5pbXBvcnQgeyBJRF9TUExJVCB9IGZyb20gJ0BhcHBzL3Byb2plY3RzL3NyYy9wcm9qZWN0cy5jb21tb24nO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgVXNlcnNTZXJ2aWNlIGV4dGVuZHMgUkVTVGZ1bFNlcnZpY2Uge1xuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHByaXNtYTogUHJpc21hU2VydmljZVVzZXIsXG4gICAgcHJpdmF0ZSBjb25maWc6IENvbmZpZ1NlcnZpY2UsXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcmlzbWFRdWVyeTogUHJpc21hUXVlcnksXG4gICAgcHJpdmF0ZSBodHRwOiBIVFRQLFxuICApIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldERiKCk6IFByaXNtYVF1ZXJ5IHtcbiAgICBjb25zdCBxdWVyeSA9IHRoaXMucHJpc21hUXVlcnkud2hlcmUoeyBkZWxldGVkRGF0ZTogbnVsbCB9KTtcbiAgICByZXR1cm4gcXVlcnk7XG4gIH1cblxuICBwcm90ZWN0ZWQgcGFyYW1zOiBSRVNUZnVsUGFyYW1zID0ge1xuICAgIGl0ZW06IHtcbiAgICAgIGRlZmF1bHRTeXN0ZW1GaWVsZHM6IGZhbHNlLCAvLyA9PiBNYWtlIHVwZGF0ZSBtb2RpZmllZF9kYXRlLCBtb2RpZmllZF9ieSwgY3JlYXRlZF9kYXRlIGFuZCBjcmVhdGVkX2J5XG4gICAgfSxcbiAgICBsaXN0OiB7XG4gICAgICBvcmRlckZpZWxkczogW1xuICAgICAgICAnZW1haWwnLFxuICAgICAgICAncGhvbmUnLFxuICAgICAgICAncm9sZUlkJyxcbiAgICAgICAgJ3N0YXR1cycsXG4gICAgICAgICdjcmVhdGVkRGF0ZScsXG4gICAgICAgICd1cGRhdGVkRGF0ZScsXG4gICAgICAgICdmaXJzdE5hbWUnLFxuICAgICAgICAnbGFzdE5hbWUnLFxuICAgICAgXSxcbiAgICB9LFxuICB9O1xuXG4gIGFzeW5jIHNpZ25VcChkYXRhOiBDcmVhdGVVc2VyRHRvKSB7XG4gICAgY29uc3Qge1xuICAgICAgZW1haWwsXG4gICAgICBwYXNzd29yZCxcbiAgICAgIGN1c3RvbWVyT3duZXJJZCxcbiAgICAgIHByb2plY3RzLFxuICAgICAgcGhvbmUsXG4gICAgICBjdXJyZW50VXNlcixcbiAgICAgIGZpcnN0TmFtZSxcbiAgICAgIGxhc3ROYW1lLFxuICAgICAgYXZhdGFyLFxuICAgICAgcm9sZUlkLFxuICAgIH0gPSBkYXRhO1xuICAgIHRyeSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5wcmlzbWEuJHRyYW5zYWN0aW9uKGFzeW5jIHR4ID0+IHtcbiAgICAgICAgbGV0IGV4aXN0ZWRVc2VyO1xuICAgICAgICBjb25zdCBmaW5kVXNlciA9IHR4LnVzZXIuZmluZEZpcnN0KHtcbiAgICAgICAgICB3aGVyZToge1xuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjaGVja0V4aXN0ZWRDdXN0b21lciA9IGN1c3RvbWVyT3duZXJJZFxuICAgICAgICAgID8gdHguY3VzdG9tZXIuZmluZEZpcnN0T3JUaHJvdyh7XG4gICAgICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICAgICAgaWQ6IGN1c3RvbWVyT3duZXJJZCxcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBQcm9taXNlLnJlc29sdmUoe30pO1xuXG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgUHJvbWlzZS5hbGwoW2ZpbmRVc2VyLCBjaGVja0V4aXN0ZWRDdXN0b21lcl0pO1xuICAgICAgICBleGlzdGVkVXNlciA9IHJlc3BvbnNlWzBdO1xuXG4gICAgICAgIGlmIChleGlzdGVkVXNlcikge1xuICAgICAgICAgIGlmIChleGlzdGVkVXNlci5kZWxldGVkRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAgICAgJ3N5c3RlbXMuVVNFUi5zeXN0ZW1zLlVTRVIuTk9UX0ZPVU5EJyxcbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghZXhpc3RlZFVzZXIuYWN0aXZhdGVkRGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAgICAgJ3N5c3RlbXMuVVNFUi5BQ1RJVkFURV9FTUFJTCcsXG4gICAgICAgICAgICApO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAgICdzeXN0ZW1zLlVTRVIuRU1BSUxfRVhJU1RFRCcsXG4gICAgICAgICAgKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNhbHQgPSArdGhpcy5jb25maWcuZ2V0KCdCQ1JZUFRfSEFTSF9TQUxUJywgMTApO1xuICAgICAgICBjb25zdCBoYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIHNhbHQpO1xuICAgICAgICBjb25zdCBjdXN0b21lcklkID0gY3VzdG9tZXJPd25lcklkIHx8IGN1cnJlbnRVc2VyLmN1c3RvbWVyT3duZXJJZDtcblxuICAgICAgICBjb25zdCBuZXdVc2VyID0gYXdhaXQgdHgudXNlci5jcmVhdGUoe1xuICAgICAgICAgIGRhdGE6IHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbCxcbiAgICAgICAgICAgIGhhc2gsXG4gICAgICAgICAgICBjdXN0b21lck93bmVySWQ6IGN1c3RvbWVySWQsXG4gICAgICAgICAgICBwaG9uZSxcbiAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgIGxhc3ROYW1lLFxuICAgICAgICAgICAgYXZhdGFyLFxuICAgICAgICAgICAgcm9sZUlkLFxuICAgICAgICAgICAgY3JlYXRlZEJ5OiBjdXJyZW50VXNlci5pZCxcbiAgICAgICAgICAgIHVzZXJHZW5lcmFsU2V0dGluZzoge1xuICAgICAgICAgICAgICBjcmVhdGU6IHt9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdDogeyAuLi5maWVsZHNJbmNsdWRlZCB9LFxuICAgICAgICB9KTtcblxuICAgICAgICBpZiAoY3VzdG9tZXJJZCA9PT0gMCAmJiAhcHJvamVjdHM/Lmxlbmd0aCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmh0dHAuc3VjY2VzcyhcbiAgICAgICAgICAgIG5ld1VzZXIsXG4gICAgICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAgICAgJ3N5c3RlbXMuVVNFUi5TSUdOX1VQX1NVQ0NFU1MnLFxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBjcmVhdGVDdXN0b21lclJlc3BvbnNlID0gYXdhaXQgdGhpcy5jcmVhdGVDdXN0b21lckFjY291bnQoe1xuICAgICAgICAgIHR4OiB0eCxcbiAgICAgICAgICB1c2VyOiBuZXdVc2VyLFxuICAgICAgICAgIGN1c3RvbWVySWQsXG4gICAgICAgICAgY3VzdG9tZXJPd25lcklkLFxuICAgICAgICAgIHByb2plY3RzLFxuICAgICAgICAgIGN1cnJlbnRVc2VySWQ6IGN1cnJlbnRVc2VyLmlkLFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlQ3VzdG9tZXJSZXNwb25zZTtcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycjogYW55KSB7XG4gICAgICBpZiAoZXJyLmNvZGUgPT09ICdQMjAwMicpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnc3lzdGVtcy5VU0VSLkNPTlNUUkFJTlRTX0ZBSUxFRCcsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdjb21tb24uSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICAgZXJyLm1lc3NhZ2UsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGdldFVzZXJzKHBheWxvYWQ6IHtcbiAgICBjdXJyZW50VXNlcjogQ3VycmVudFVzZXI7XG4gICAgcGFnaW5hdGlvblF1ZXJ5RHRvOiBVc2VyUGFnaW5hdGlvblF1ZXJ5RHRvO1xuICB9KSB7XG4gICAgY29uc3QgeyBjdXJyZW50VXNlciwgcGFnaW5hdGlvblF1ZXJ5RHRvIH0gPSBwYXlsb2FkO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBwYWdpbmF0aW9uID0gYXdhaXQgdGhpcy5nZXRMaXN0cyhwYWdpbmF0aW9uUXVlcnlEdG8pO1xuXG4gICAgICBjb25zdCBwYXJhbXM6IGFueSA9IHtcbiAgICAgICAgdGFrZTogcGFnaW5hdGlvbi50YWtlLFxuICAgICAgICBza2lwOiBwYWdpbmF0aW9uLnNraXAsXG4gICAgICAgIGN1cnNvcjogcGFnaW5hdGlvbi5jdXJzb3IgPyB7IGlkOiBwYWdpbmF0aW9uLmN1cnNvciB9IDogdW5kZWZpbmVkLFxuICAgICAgICBvcmRlckJ5OiBwYWdpbmF0aW9uLnNvcnQgPz8ge30sXG4gICAgICAgIHdoZXJlOiBwYWdpbmF0aW9uLnNlYXJjaCA/PyB7fSxcbiAgICAgIH07XG5cbiAgICAgIGNvbnN0IGN1c3RvbUZpbHRlcnMgPSB7XG4gICAgICAgIGZfcHJvamVjdF9pZDogdHJ1ZSxcbiAgICAgICAgZl9jdXN0b21lcl9pZDogdHJ1ZSxcbiAgICAgIH07XG5cbiAgICAgIC8vIGRlZmF1bHQgcXVlcnkgcGFyYW1zXG4gICAgICBjb25zdCBxdWVyaWVzID0ge1xuICAgICAgICAuLi57XG4gICAgICAgICAgbGltaXQ6ICctMScsXG4gICAgICAgICAgcGFnZTogJzEnLFxuICAgICAgICAgIGZfcHJvamVjdF9pZDogJy0xJyxcbiAgICAgICAgICBmX2N1c3RvbWVyX2lkOiAnLTEnLFxuICAgICAgICB9LFxuICAgICAgICAuLi5wYWdpbmF0aW9uUXVlcnlEdG8sXG4gICAgICB9O1xuXG4gICAgICBpZiAoXG4gICAgICAgICFpc0ZLZXlRdWVyeVZhbGlkKHF1ZXJpZXMuZl9wcm9qZWN0X2lkKSB8fFxuICAgICAgICAhaXNGS2V5UXVlcnlWYWxpZChxdWVyaWVzLmZfY3VzdG9tZXJfaWQpXG4gICAgICApIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChIdHRwU3RhdHVzLkJBRF9SRVFVRVNULCAnSW52YWxpZCBpZCcpO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9qZWN0SWRzID0gcXVlcmllcy5mX3Byb2plY3RfaWRcbiAgICAgICAgPy5zcGxpdChJRF9TUExJVClcbiAgICAgICAgLm1hcCgoaTogYW55KSA9PiBwYXJzZUludChpKSlcbiAgICAgICAgLmZpbHRlcigoaTogYW55KSA9PiBpICE9PSAtMSk7XG5cbiAgICAgIGNvbnN0IGN1c3RvbWVySWRzID0gcXVlcmllcy5mX2N1c3RvbWVyX2lkXG4gICAgICAgID8uc3BsaXQoSURfU1BMSVQpXG4gICAgICAgIC5tYXAoKGk6IGFueSkgPT4gcGFyc2VJbnQoaSkpXG4gICAgICAgIC5maWx0ZXIoKGk6IGFueSkgPT4gaSAhPT0gLTEpO1xuXG4gICAgICBjb25zdCBxID0gKChxdWVyaWVzLnEgYXMgYW55KSB8fCAnJylcbiAgICAgICAgLm5vcm1hbGl6ZSgnTkZEJylcbiAgICAgICAgLnJlcGxhY2UoL1tcXHUwMzAwLVxcdTAzNmZdL2csICcnKVxuICAgICAgICAucmVwbGFjZSgvxJEvZywgJ2QnKVxuICAgICAgICAucmVwbGFjZSgvxJAvZywgJ0QnKVxuICAgICAgICAudG9Mb3dlckNhc2UoKTtcblxuICAgICAgY29uc3Qgd2hlcmVRdWVyeSA9IHtcbiAgICAgICAgZGVsZXRlZERhdGU6IG51bGwsXG4gICAgICAgIGN1c3RvbWVyT3duZXJJZDogY3VycmVudFVzZXIuY3VzdG9tZXJPd25lcklkLFxuICAgICAgICBPUjogc2VhcmNoUXVlcnkocSksXG4gICAgICAgIHByb2plY3RzOiBmaWx0ZXJGaWVsZFF1ZXJ5KCdwcm9qZWN0SWQnLCBwcm9qZWN0SWRzKSxcbiAgICAgICAgY3VzdG9tZXJzOiBmaWx0ZXJGaWVsZFF1ZXJ5KCdjdXN0b21lcklkJywgY3VzdG9tZXJJZHMpLFxuICAgICAgfTtcblxuICAgICAgY29uc3QgW3RvdGFsVXNlcnMsIHVzZXJzXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdGhpcy5wcmlzbWEudXNlci5jb3VudCh7XG4gICAgICAgICAgd2hlcmU6IHdoZXJlUXVlcnksXG4gICAgICAgIH0pLFxuICAgICAgICB0aGlzLnByaXNtYS51c2VyLmZpbmRNYW55KHtcbiAgICAgICAgICB0YWtlOiBwYXJhbXMudGFrZSxcbiAgICAgICAgICBza2lwOiBwYXJhbXMuc2tpcCxcbiAgICAgICAgICBjdXJzb3I6IHBhcmFtcy5jdXJzb3IsXG4gICAgICAgICAgd2hlcmU6IHdoZXJlUXVlcnksXG4gICAgICAgICAgb3JkZXJCeTogcGFyYW1zLm9yZGVyQnksXG4gICAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgICAuLi5maWVsZHNJbmNsdWRlZCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pO1xuXG4gICAgICBjb25zdCBmaWx0ZXJVc2VyTGlzdCA9IHJlbW92ZVJlZHVuZGFudCh1c2VycywgWydwcm9qZWN0cycsICdjdXN0b21lcnMnXSk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5VU0VSLkdFVF9VU0VSX0xJU1RfU1VDQ0VTUycsXG4gICAgICAgIGZpbHRlclVzZXJMaXN0LFxuICAgICAgICB0b3RhbFVzZXJzLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICAgIHRoaXMuaHR0cC5lcnJvcihcbiAgICAgICAgJ2NvbW1vbi5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0VXNlckJ5SWQocGF5bG9hZDogeyBjdXJyZW50VXNlcjogQ3VycmVudFVzZXI7IGlkOiBudW1iZXIgfSkge1xuICAgIGNvbnN0IHsgY3VycmVudFVzZXIsIGlkIH0gPSBwYXlsb2FkO1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kRmlyc3RPclRocm93KHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZCxcbiAgICAgICAgICBjdXN0b21lck93bmVySWQ6IGN1cnJlbnRVc2VyLmN1c3RvbWVyT3duZXJJZCxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0OiB7XG4gICAgICAgICAgLi4uZmllbGRzSW5jbHVkZWQsXG4gICAgICAgICAgZGVsZXRlZERhdGU6IHRydWUsXG4gICAgICAgICAgYWN0aXZhdGVkRGF0ZTogdHJ1ZSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXVzZXIgfHwgdXNlci5kZWxldGVkRGF0ZSB8fCAhdXNlci5hY3RpdmF0ZWREYXRlKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnVXNlciBkb2VzIG5vdCBleGlzdCcsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IGZpbHRlclVzZXIgPSByZW1vdmVSZWR1bmRhbnQodXNlciwgWydwcm9qZWN0cycsICdjdXN0b21lcnMnXSk7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5VU0VSLkdFVF9VU0VSX1NVQ0NFU1MnLFxuICAgICAgICBmaWx0ZXJVc2VyLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLklOVEVSTkFMX1NFUlZFUl9FUlJPUixcbiAgICAgICAgJ2NvbW1vbi5JTlRFUk5BTF9TRVJWRVJfRVJST1InLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyB1cGRhdGVVc2VyKHBheWxvYWQ6IEVkaXRVc2VyRHRvKSB7XG4gICAgLy8gS2jDtG5nIHjhu60gbMO9IHVwZGF0ZSBwYXNzd29yZCB0cm9uZyBhcGkgdXBkYXRlVXNlclxuICAgIGNvbnN0IHsgY3VycmVudFVzZXIsIGlkLCBwcm9qZWN0cywgLi4uZGF0YSB9ID0gcGF5bG9hZDtcblxuICAgIGNvbnN0IHJlbW92ZUR1cGxpY2F0ZWRQcm9qZWN0cyA9IFsuLi5uZXcgU2V0KHByb2plY3RzKV07XG4gICAgY29uc3QgZGF0YUZpbHRlcmVkID0gcmVtb3ZlT2JqZWN0UHJvcGVydGllcyhkYXRhLCBbJ2VtYWlsJywgJ2hhc2gnXSk7XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgd2hlcmU6IHtcbiAgICAgICAgaWQsXG4gICAgICAgIGN1c3RvbWVyT3duZXJJZDogY3VycmVudFVzZXIuY3VzdG9tZXJPd25lcklkLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlciB8fCB1c2VyLmRlbGV0ZWREYXRlIHx8ICF1c2VyLmFjdGl2YXRlZERhdGUpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5CQURfUkVRVUVTVCwgJ3N5c3RlbXMuVVNFUi4nKTtcbiAgICB9XG5cbiAgICBpZiAoIXJlbW92ZUR1cGxpY2F0ZWRQcm9qZWN0cz8ubGVuZ3RoKSB7XG4gICAgICBjb25zdCB1c2VyVXBkYXRlZCA9IGF3YWl0IHRoaXMucHJpc21hLnVzZXIudXBkYXRlKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICBpZDogdXNlci5pZCxcbiAgICAgICAgfSxcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIC4uLmRhdGFGaWx0ZXJlZCxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0OiB7IC4uLmZpZWxkc0luY2x1ZGVkIH0sXG4gICAgICB9KTtcbiAgICAgIGNvbnN0IGZpbHRlclVzZXIgPSByZW1vdmVSZWR1bmRhbnQodXNlclVwZGF0ZWQsIFtcbiAgICAgICAgJ3Byb2plY3RzJyxcbiAgICAgICAgJ2N1c3RvbWVycycsXG4gICAgICBdKTtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICdzeXN0ZW1zLlVTRVIuVVBEQVRFX1NVQ0NFU1MnLFxuICAgICAgICBmaWx0ZXJVc2VyLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBsZXQgYXZhaWxhYmxlUHJvamVjdHMgPSBbXTtcbiAgICBpZiAodXNlci5jdXN0b21lck93bmVySWQgIT09IDApIHtcbiAgICAgIGF2YWlsYWJsZVByb2plY3RzID0gcmVtb3ZlRHVwbGljYXRlZFByb2plY3RzLm1hcChwcm9qZWN0SWQgPT5cbiAgICAgICAgdGhpcy5wcmlzbWEuY3VzdG9tZXJzUHJvamVjdHMuZmluZEZpcnN0T3JUaHJvdyh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGN1c3RvbWVySWQ6IHVzZXIuY3VzdG9tZXJPd25lcklkLFxuICAgICAgICAgICAgcHJvamVjdElkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXZhaWxhYmxlUHJvamVjdHMgPSByZW1vdmVEdXBsaWNhdGVkUHJvamVjdHMubWFwKHByb2plY3RJZCA9PlxuICAgICAgICB0aGlzLnByaXNtYS5wcm9qZWN0LmZpbmRGaXJzdE9yVGhyb3coe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogcHJvamVjdElkLFxuICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICBjb25zdCBjaGVja0F2YWlsYWJsZVByb2plY3QgPSBhd2FpdCBQcm9taXNlLmFsbFNldHRsZWQoYXZhaWxhYmxlUHJvamVjdHMpO1xuICAgIGNvbnN0IHByb2plY3RJc05vdEF2YWlsYWJsZSA9IGNoZWNrQXZhaWxhYmxlUHJvamVjdC5zb21lKFxuICAgICAgcmVzID0+IHJlcy5zdGF0dXMgPT09ICdyZWplY3RlZCcsXG4gICAgKTtcbiAgICBpZiAocHJvamVjdElzTm90QXZhaWxhYmxlKSB7XG4gICAgICB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICdzeXN0ZW1zLlVTRVIuUFJPSkVDVF9OT1RfQVZBSUxBQkxFJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgY29uc3QgY29udmVydFByb2plY3RJZFRvT2JqZWN0ID0gcmVtb3ZlRHVwbGljYXRlZFByb2plY3RzLm1hcChcbiAgICAgIHByb2plY3RJZCA9PiAoe1xuICAgICAgICBwcm9qZWN0SWQsXG4gICAgICB9KSxcbiAgICApO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHVzZXJVcGRhdGVkID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiB1c2VyLmlkLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgLi4uZGF0YUZpbHRlcmVkLFxuICAgICAgICAgIHByb2plY3RzOiB7XG4gICAgICAgICAgICBkZWxldGVNYW55OiB7XG4gICAgICAgICAgICAgIE9SOiBbeyB1c2VySWQ6IHsgaW46IFt1c2VyLmlkXSB9IH1dLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGNyZWF0ZU1hbnk6IHtcbiAgICAgICAgICAgICAgZGF0YTogY29udmVydFByb2plY3RJZFRvT2JqZWN0LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHsgLi4uZmllbGRzSW5jbHVkZWQgfSxcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBmaWx0ZXJVc2VyID0gcmVtb3ZlUmVkdW5kYW50KHVzZXJVcGRhdGVkLCBbXG4gICAgICAgICdwcm9qZWN0cycsXG4gICAgICAgICdjdXN0b21lcnMnLFxuICAgICAgXSk7XG5cbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIEh0dHBTdGF0dXMuT0ssXG4gICAgICAgICdzeXN0ZW1zLlVTRVIuVVBEQVRFX1NVQ0NFU1MnLFxuICAgICAgICBmaWx0ZXJVc2VyLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgdGhpcy5odHRwLmVycm9yKFxuICAgICAgICAnY29tbW9uLklOVEVSTkFMX1NFUlZFUl9FUlJPUicsXG4gICAgICAgIEh0dHBTdGF0dXMuSU5URVJOQUxfU0VSVkVSX0VSUk9SLFxuICAgICAgKTtcbiAgICB9XG4gIH1cblxuICBhc3luYyBjaGFuZ2VQYXNzd29yZChwYXlsb2FkOiBDaGFuZ2VQYXNzd29yZER0bykge1xuICAgIGNvbnN0IHsgY3VycmVudFVzZXIsIC4uLmRhdGEgfSA9IHBheWxvYWQ7XG4gICAgY29uc3QgeyBjdXJyZW50UGFzc3dvcmQsIG5ld1Bhc3N3b3JkLCBjb25maXJtUGFzc3dvcmQgfSA9IGRhdGE7XG5cbiAgICBpZiAoY3VycmVudFVzZXIuaWQgIT09IGRhdGEuaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoSHR0cFN0YXR1cy5GT1JCSURERU4sICdBY2Nlc3MgZGVuaWVkJyk7XG4gICAgfVxuICAgIGlmIChjb25maXJtUGFzc3dvcmQgIT09IG5ld1Bhc3N3b3JkKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnc3lzdGVtcy5VU0VSLlBBU1NXT1JEX05PVF9NQVRDSCcsXG4gICAgICApO1xuICAgIH1cblxuICAgIHRyeSB7XG4gICAgICBjb25zdCBjdXJyZW50VXNlclBhc3N3b3JkID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kRmlyc3Qoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICAgIGRlbGV0ZWREYXRlOiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBzZWxlY3Q6IHtcbiAgICAgICAgICBoYXNoOiB0cnVlLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgICBpZiAoIWN1cnJlbnRVc2VyUGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAgICdzeXN0ZW1zLlVTRVIuc3lzdGVtcy5VU0VSLk5PVF9GT1VORCcsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHB3TWF0Y2hlcyA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKFxuICAgICAgICBjdXJyZW50UGFzc3dvcmQsXG4gICAgICAgIGN1cnJlbnRVc2VyUGFzc3dvcmQuaGFzaCxcbiAgICAgICk7XG5cbiAgICAgIGlmICghcHdNYXRjaGVzKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnY29tbW9uLklOQ09SUkVDVF9DUkVERU5USUFMUycsXG4gICAgICAgICk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHNhbHQgPSArdGhpcy5jb25maWcuZ2V0KCdCQ1JZUFRfSEFTSF9TQUxUJywgMTApO1xuICAgICAgY29uc3QgaGFzaCA9IGF3YWl0IGJjcnlwdC5oYXNoKGNvbmZpcm1QYXNzd29yZCwgc2FsdCk7XG5cbiAgICAgIGNvbnN0IHVzZXJVcGRhdGVkID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci51cGRhdGUoe1xuICAgICAgICB3aGVyZToge1xuICAgICAgICAgIGlkOiBkYXRhLmlkLFxuICAgICAgICB9LFxuICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgaGFzaCxcbiAgICAgICAgfSxcbiAgICAgICAgc2VsZWN0OiB7IC4uLmZpZWxkc0luY2x1ZGVkIH0sXG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5PSyxcbiAgICAgICAgJ3N5c3RlbXMuVVNFUi5DSEFOR0VfUEFTU1dPUkRfU1VDQ0VTUycsXG4gICAgICAgIHVzZXJVcGRhdGVkLFxuICAgICAgKTtcbiAgICB9IGNhdGNoIChlcnI6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdjb21tb24uSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICAgZXJyLm1lc3NhZ2UsXG4gICAgICApO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGRlbGV0ZVVzZXIocGF5bG9hZDoge1xuICAgIGN1cnJlbnRVc2VyOiBDdXJyZW50VXNlcjtcbiAgICBpZDogbnVtYmVyO1xuICAgIGNvbmZpcm1QYXNzd29yZDogc3RyaW5nO1xuICB9KSB7XG4gICAgY29uc3QgeyBjdXJyZW50VXNlciwgaWQsIGNvbmZpcm1QYXNzd29yZCB9ID0gcGF5bG9hZDtcbiAgICB0cnkge1xuICAgICAgaWYgKCFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnc3lzdGVtcy5VU0VSLlBBU1NXT1JEX05PVF9QUk9WSURFRCcsXG4gICAgICAgICk7XG4gICAgICB9XG4gICAgICBjb25zdCBbZXhpc3RlZFVzZXIsIGN1cnJlbnRVc2VyUGFzc3dvcmRdID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0aGlzLnByaXNtYS51c2VyLmZpbmRGaXJzdCh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgY3VzdG9tZXJPd25lcklkOiBjdXJyZW50VXNlci5jdXN0b21lck93bmVySWQsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICAgIHRoaXMucHJpc21hLnVzZXIuZmluZFVuaXF1ZSh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGlkOiBjdXJyZW50VXNlci5pZCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHNlbGVjdDoge1xuICAgICAgICAgICAgaGFzaDogdHJ1ZSxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgIF0pO1xuXG4gICAgICBpZiAoXG4gICAgICAgICFleGlzdGVkVXNlciB8fFxuICAgICAgICBleGlzdGVkVXNlci5kZWxldGVkRGF0ZSB8fFxuICAgICAgICAhZXhpc3RlZFVzZXIuYWN0aXZhdGVkRGF0ZVxuICAgICAgKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgICAnc3lzdGVtcy5VU0VSLnN5c3RlbXMuVVNFUi5OT1RfRk9VTkQnLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBjb25zdCBwd01hdGNoZXMgPSBhd2FpdCBiY3J5cHQuY29tcGFyZShcbiAgICAgICAgY29uZmlybVBhc3N3b3JkLFxuICAgICAgICBjdXJyZW50VXNlclBhc3N3b3JkLmhhc2gsXG4gICAgICApO1xuXG4gICAgICBpZiAoIXB3TWF0Y2hlcykge1xuICAgICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICAgIEh0dHBTdGF0dXMuQkFEX1JFUVVFU1QsXG4gICAgICAgICAgJ2NvbW1vbi5JTkNPUlJFQ1RfQ1JFREVOVElBTFMnLFxuICAgICAgICApO1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnByaXNtYS51c2VyLnVwZGF0ZSh7XG4gICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgaWQsXG4gICAgICAgIH0sXG4gICAgICAgIGRhdGE6IHtcbiAgICAgICAgICBkZWxldGVkRGF0ZTogbmV3IERhdGUoKSxcbiAgICAgICAgfSxcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5VU0VSLkRFTEVURV9TVUNDRVNTJyxcbiAgICAgICk7XG4gICAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xuICAgICAgcmV0dXJuIHRoaXMuaHR0cC5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5JTlRFUk5BTF9TRVJWRVJfRVJST1IsXG4gICAgICAgICdjb21tb24uSU5URVJOQUxfU0VSVkVSX0VSUk9SJyxcbiAgICAgICk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgY3JlYXRlQ3VzdG9tZXJBY2NvdW50KGRhdGE6IHtcbiAgICB0eDogYW55O1xuICAgIHVzZXI6IHsgaWQ6IG51bWJlcjsgZW1haWw6IHN0cmluZyB9O1xuICAgIGN1c3RvbWVySWQ6IG51bWJlcjtcbiAgICBjdXN0b21lck93bmVySWQ6IG51bWJlcjtcbiAgICBwcm9qZWN0czogbnVtYmVyW107XG4gICAgY3VycmVudFVzZXJJZDogbnVtYmVyO1xuICB9KSB7XG4gICAgY29uc3QgeyB0eCwgdXNlciwgY3VzdG9tZXJJZCwgcHJvamVjdHMsIGN1c3RvbWVyT3duZXJJZCwgY3VycmVudFVzZXJJZCB9ID1cbiAgICAgIGRhdGE7XG5cbiAgICBpZiAoY3VzdG9tZXJJZCAhPT0gMCkge1xuICAgICAgYXdhaXQgdHguY3VzdG9tZXJzVXNlcnMuY3JlYXRlKHtcbiAgICAgICAgZGF0YToge1xuICAgICAgICAgIGN1c3RvbWVySWQsXG4gICAgICAgICAgdXNlcklkOiB1c2VyLmlkLFxuICAgICAgICB9LFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKCFwcm9qZWN0cz8ubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gdGhpcy5odHRwLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgICAnc3lzdGVtcy5VU0VSLlNJR05fVVBfU1VDQ0VTUycsXG4gICAgICAgIHVzZXIsXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBwcm9qZWN0c1RvQmVDaGVja2VkID0gW107XG5cbiAgICBpZiAoY3VzdG9tZXJJZCA9PT0gMCkge1xuICAgICAgcHJvamVjdHNUb0JlQ2hlY2tlZCA9IHByb2plY3RzPy5tYXAocHJvamVjdCA9PlxuICAgICAgICB0eC5wcm9qZWN0LmZpbmRGaXJzdE9yVGhyb3coe1xuICAgICAgICAgIHdoZXJlOiB7XG4gICAgICAgICAgICBpZDogcHJvamVjdCxcbiAgICAgICAgICB9LFxuICAgICAgICB9KSxcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb2plY3RzVG9CZUNoZWNrZWQgPSBwcm9qZWN0cz8ubWFwKHByb2plY3QgPT5cbiAgICAgICAgdHguY3VzdG9tZXJzUHJvamVjdHMuZmluZEZpcnN0T3JUaHJvdyh7XG4gICAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGN1c3RvbWVySWQsXG4gICAgICAgICAgICBwcm9qZWN0SWQ6IHByb2plY3QsXG4gICAgICAgICAgfSxcbiAgICAgICAgfSksXG4gICAgICApO1xuICAgIH1cblxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb2plY3RzVG9CZUNoZWNrZWQpO1xuXG4gICAgY29uc3QgcHJvamVjdExpc3QgPSBwcm9qZWN0cz8ubWFwKHByb2plY3QgPT4gKHtcbiAgICAgIHVzZXJJZDogdXNlci5pZCxcbiAgICAgIHByb2plY3RJZDogcHJvamVjdCxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBpbnNlcnRQcm9qZWN0TGlzdCA9IGF3YWl0IHR4LnVzZXJzUHJvamVjdHMuY3JlYXRlTWFueSh7XG4gICAgICBkYXRhOiBwcm9qZWN0TGlzdCxcbiAgICB9KTtcblxuICAgIHJldHVybiB0aGlzLmh0dHAuc2V0SHR0cFJlcXVlc3QoXG4gICAgICBIdHRwU3RhdHVzLk9LLFxuICAgICAgJ3N5c3RlbXMuVVNFUi5TSUdOX1VQX1NVQ0NFU1MnLFxuICAgICAgdXNlcixcbiAgICApO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3ByaXNtYS5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9wcmlzbWEuc2VydmljZSc7XG4iLCJpbXBvcnQgeyBNb2R1bGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBQcmlzbWFTZXJ2aWNlQXV0aCB9IGZyb20gJy4vcHJpc21hLnNlcnZpY2UnO1xuXG5ATW9kdWxlKHtcbiAgcHJvdmlkZXJzOiBbUHJpc21hU2VydmljZUF1dGhdLFxuICBleHBvcnRzOiBbUHJpc21hU2VydmljZUF1dGhdLFxufSlcbmV4cG9ydCBjbGFzcyBQcmlzbWFNb2R1bGVBdXRoIHt9XG4iLCJpbXBvcnQgeyBNeVNRTENsaWVudCB9IGZyb20gJ0Bjb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQnO1xuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIFByaXNtYVNlcnZpY2VBdXRoIGV4dGVuZHMgTXlTUUxDbGllbnQge1xuICBjbGVhbkRhdGFiYXNlKCkge1xuICAgIHJldHVybiB0aGlzLiR0cmFuc2FjdGlvbihbXG4gICAgICAvLyB0aGlzLmJvb2ttYXJrLmRlbGV0ZU1hbnkoKSxcbiAgICAgIHRoaXMudXNlci5kZWxldGVNYW55KCksXG4gICAgICB0aGlzLmFyZWFzLmRlbGV0ZU1hbnkoKSxcbiAgICAgIHRoaXMuYWxlcnROb3Rlcy5kZWxldGVNYW55KCksXG4gICAgICB0aGlzLmJ1c2luZXNzTW9kZWwuZGVsZXRlTWFueSgpLFxuICAgICAgdGhpcy5jb250YWN0cy5kZWxldGVNYW55KCksXG4gICAgXSk7XG4gIH1cbn1cbiIsImltcG9ydCB7IFBhc3Nwb3J0U3RyYXRlZ3kgfSBmcm9tICdAbmVzdGpzL3Bhc3Nwb3J0JztcbmltcG9ydCB7IFN0cmF0ZWd5LCBWZXJpZnlDYWxsYmFjayB9IGZyb20gJ3Bhc3Nwb3J0LWdvb2dsZS1vYXV0aDIwJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbmltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEdvb2dsZVN0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSkge1xuXG4gICAgY29uc3RydWN0b3IoY29uZmlnOiBDb25maWdTZXJ2aWNlKSB7XG4gICAgICAgIHN1cGVyKHtcbiAgICAgICAgICAgIGNsaWVudElEOiBjb25maWcuZ2V0T3JUaHJvdygnR09PR0xFX0NMSUVOVF9JRCcpLFxuICAgICAgICAgICAgY2xpZW50U2VjcmV0OiBjb25maWcuZ2V0T3JUaHJvdygnR09PR0xFX1NFQ1JFVCcpLFxuICAgICAgICAgICAgY2FsbGJhY2tVUkw6ICdodHRwOi8vbG9jYWxob3N0OjUwMDAwL2F1dGgvZ29vZ2xlL3JlZGlyZWN0JyxcbiAgICAgICAgICAgIC8vIGNhbGxiYWNrVVJMOiBgJHtjb25maWcuZ2V0T3JUaHJvdygnSE9TVCcpfToke2NvbmZpZy5nZXRPclRocm93KCdQT1JUJyl9L2F1dGgvZ29vZ2xlL3JlZGlyZWN0YFxuICAgICAgICAgICAgc2NvcGU6IFsnZW1haWwnLCAncHJvZmlsZSddLFxuICAgICAgICB9KTtcbiAgICB9XG5cbiAgICBhc3luYyB2YWxpZGF0ZShhY2Nlc3NUb2tlbjogc3RyaW5nLCByZWZyZXNoVG9rZW46IHN0cmluZywgcHJvZmlsZTogYW55LCBkb25lOiBWZXJpZnlDYWxsYmFjayk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IHsgbmFtZSwgZW1haWxzLCBwaG90b3MgfSA9IHByb2ZpbGVcbiAgICAgICAgY29uc3QgdXNlciA9IHtcbiAgICAgICAgICAgIGVtYWlsOiBlbWFpbHNbMF0udmFsdWUsXG4gICAgICAgICAgICBmaXJzdE5hbWU6IG5hbWUuZ2l2ZW5OYW1lLFxuICAgICAgICAgICAgbGFzdE5hbWU6IG5hbWUuZmFtaWx5TmFtZSxcbiAgICAgICAgICAgIHBpY3R1cmU6IHBob3Rvc1swXS52YWx1ZSxcbiAgICAgICAgfVxuICAgICAgICBkb25lKG51bGwsIHVzZXIpO1xuICAgIH1cbn0iLCJleHBvcnQgKiBmcm9tICcuL2p3dC5zdHJhdGVneSc7XG5leHBvcnQgKiBmcm9tICcuL2xvY2FsLnN0cmF0ZWd5JztcbmV4cG9ydCAqIGZyb20gJy4vZ29vZ2xlLnN0cmF0ZWd5JztcbiIsImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBDb25maWdTZXJ2aWNlIH0gZnJvbSAnQG5lc3Rqcy9jb25maWcnO1xuaW1wb3J0IHsgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgRXh0cmFjdEp3dCwgU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1qd3QnO1xuaW1wb3J0IHsgUHJpc21hU2VydmljZUF1dGggfSBmcm9tICcuLi9wcmlzbWEvcHJpc21hLnNlcnZpY2UnO1xuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSnd0U3RyYXRlZ3kgZXh0ZW5kcyBQYXNzcG9ydFN0cmF0ZWd5KFN0cmF0ZWd5LCAnand0Jykge1xuICBjb25zdHJ1Y3Rvcihjb25maWc6IENvbmZpZ1NlcnZpY2UsIHByaXZhdGUgcHJpc21hOiBQcmlzbWFTZXJ2aWNlQXV0aCkge1xuICAgIHN1cGVyKHtcbiAgICAgIGp3dEZyb21SZXF1ZXN0OiBFeHRyYWN0Snd0LmZyb21BdXRoSGVhZGVyQXNCZWFyZXJUb2tlbigpLFxuICAgICAgaWdub3JlRXhwaXJhdGlvbjogZmFsc2UsXG4gICAgICBzZWNyZXRPcktleTogY29uZmlnLmdldE9yVGhyb3coJ0pXVF9TRUNSRVQnKSxcbiAgICB9KTtcbiAgfVxuXG4gIC8vIEjDoG0gYuG6r3QgYnXhu5ljIHBo4bqjaSBjw7MgxJHhu4Mgbmjhuq1uIGdpw6EgdHLhu4sgand0XG4gIC8vIEPhuqduIHRyeSBjYXRjaCB0cm9uZyB0csaw4budbmcgaOG7o3AgdHJ1bmNhdGUgZGF0YWJhc2VcbiAgYXN5bmMgdmFsaWRhdGUocGF5bG9hZDogeyBpZDogbnVtYmVyOyBlbWFpbDogc3RyaW5nIH0pIHtcbiAgICBjb25zdCB1c2VyID0gYXdhaXQgdGhpcy5wcmlzbWEudXNlci5maW5kVW5pcXVlKHtcbiAgICAgIHdoZXJlOiB7XG4gICAgICAgIGlkOiBwYXlsb2FkLmlkLFxuICAgICAgfSxcbiAgICAgIHNlbGVjdDoge1xuICAgICAgICBpZDogdHJ1ZSxcbiAgICAgICAgY3VzdG9tZXJPd25lcklkOiB0cnVlLFxuICAgICAgfSxcbiAgICB9KTtcblxuICAgIHJldHVybiB1c2VyO1xuICB9XG59XG4iLCJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUGFzc3BvcnRTdHJhdGVneSB9IGZyb20gJ0BuZXN0anMvcGFzc3BvcnQnO1xuaW1wb3J0IHsgU3RyYXRlZ3kgfSBmcm9tICdwYXNzcG9ydC1sb2NhbCc7XG5pbXBvcnQgeyBBdXRoU2VydmljZSB9IGZyb20gJ0BhcHBzL3N5c3RlbXMvc3JjL2F1dGgvc3JjL2F1dGguc2VydmljZSc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBMb2NhbFN0cmF0ZWd5IGV4dGVuZHMgUGFzc3BvcnRTdHJhdGVneShTdHJhdGVneSkge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGF1dGhTZXJ2aWNlOiBBdXRoU2VydmljZSkge1xuICAgIHN1cGVyKHsgdXNlcm5hbWVGaWVsZDogJ2VtYWlsJyB9KTtcbiAgfVxuXG4gIGFzeW5jIHZhbGlkYXRlKGVtYWlsOiBzdHJpbmcsIHBhc3N3b3JkOiBzdHJpbmcpIHtcbiAgICByZXR1cm4gdGhpcy5hdXRoU2VydmljZS52YWxpZGF0ZVVzZXIoZW1haWwsIHBhc3N3b3JkKTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdpbmF0aW9uLXF1ZXJ5LmR0byc7XG4iLCJpbXBvcnQgeyBBcGlQcm9wZXJ0eSB9IGZyb20gJ0BuZXN0anMvc3dhZ2dlcic7XG5pbXBvcnQgeyBJc09wdGlvbmFsLCBJc1N0cmluZyB9IGZyb20gJ2NsYXNzLXZhbGlkYXRvcic7XG5cbmV4cG9ydCBjbGFzcyBQYWdpbmF0aW9uUXVlcnlEdG8ge1xuICBAQXBpUHJvcGVydHkoe1xuICAgIGRlc2NyaXB0aW9uOiAnSWQgb2YgdGhlIGxhc3QgaXRlbSBpbiB0aGUgcHJldmlvdXMgcGFnZScsXG4gICAgcmVxdWlyZWQ6IGZhbHNlLFxuICAgIG51bGxhYmxlOiB0cnVlLFxuICB9KVxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIHN0YXJ0SWQ/OiBzdHJpbmc7XG5cbiAgQEFwaVByb3BlcnR5KHsgZGVzY3JpcHRpb246ICdOdW1iZXIgb2YgaXRlbXMgdG8gdGFrZScsIHJlcXVpcmVkOiBmYWxzZSB9KVxuICBASXNTdHJpbmcoKVxuICBASXNPcHRpb25hbCgpXG4gIGxpbWl0Pzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IGRlc2NyaXB0aW9uOiAnTnVtYmVyIG9mIGl0ZW1zIHRvIHNraXAnLCByZXF1aXJlZDogZmFsc2UgfSlcbiAgQElzU3RyaW5nKClcbiAgQElzT3B0aW9uYWwoKVxuICBza2lwPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7XG4gICAgZGVzY3JpcHRpb246XG4gICAgICAnc29ydGVkIGJ5IHRoaXMgZmllbGQgbmFtZS4gK2ZpZWxkTmFtZSB0byBzaG93IGdyZWF0ZXN0IGl0ZW0gZmlyc3QsIC1maWVsZE5hbWUgdG8gc2hvdyBzbWFsbGVzdCBpdGVtIGZpcnN0JyxcbiAgICByZXF1aXJlZDogZmFsc2UsXG4gIH0pXG4gIEBJc09wdGlvbmFsKClcbiAgQElzU3RyaW5nKClcbiAgb3JkZXI/OiBzdHJpbmc7XG5cbiAgQElzT3B0aW9uYWwoKVxuICBASXNTdHJpbmcoKVxuICBxPzogc3RyaW5nO1xuXG4gIEBBcGlQcm9wZXJ0eSh7IGRlc2NyaXB0aW9uOiAnUGFnZScsIHJlcXVpcmVkOiBmYWxzZSB9KVxuICBASXNPcHRpb25hbCgpXG4gIEBJc1N0cmluZygpXG4gIHBhZ2U/OiBzdHJpbmc7XG59XG4iLCJpbXBvcnQgeyBSZXF1ZXN0LCBSZXNwb25zZSB9IGZyb20gJ2V4cHJlc3MnO1xuaW1wb3J0IHtcbiAgQ2F0Y2gsXG4gIEh0dHBFeGNlcHRpb24sXG4gIEFyZ3VtZW50c0hvc3QsXG4gIEV4Y2VwdGlvbkZpbHRlcixcbiAgSHR0cFN0YXR1cyxcbiAgQ2FsbEhhbmRsZXIsXG4gIEV4ZWN1dGlvbkNvbnRleHQsXG4gIEluamVjdGFibGUsXG4gIE5lc3RJbnRlcmNlcHRvcixcbn0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgdmVyc2lvbiB9IGZyb20gJy4uLy4uLy4uL3BhY2thZ2UuanNvbic7XG5pbXBvcnQgeyBScGNFeGNlcHRpb24gfSBmcm9tICdAbmVzdGpzL21pY3Jvc2VydmljZXMnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSwgdGFwIH0gZnJvbSAncnhqcyc7XG5pbXBvcnQgeyBnZXRJMThuQ29udGV4dEZyb21SZXF1ZXN0IH0gZnJvbSAnbmVzdGpzLWkxOG4nO1xuXG5leHBvcnQgY2xhc3MgQ3VzdG9tUmVzcG9uc2Uge1xuICB2ZXJzaW9uOiBzdHJpbmc7XG4gIGNvZGU6IG51bWJlcjtcbiAgc3VjY2VzczogYm9vbGVhbjtcbiAgbWVzc2FnZTogc3RyaW5nIHwgc3RyaW5nW107XG4gIGRhdGE6IGFueTtcbiAgdG90YWxSb3c6IG51bWJlcjtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBjb2RlOiBudW1iZXIsXG4gICAgbWVzc2FnZTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgZGF0YTogYW55LFxuICAgIHRvdGFsUm93OiBudW1iZXIsXG4gICAgc3VjY2VzcyA9IGZhbHNlLFxuICApIHtcbiAgICB0aGlzLnZlcnNpb24gPSB2ZXJzaW9uO1xuICAgIHRoaXMuY29kZSA9IGNvZGU7XG4gICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICBpZiAodG90YWxSb3cgPiAwKSB0aGlzLnRvdGFsUm93ID0gdG90YWxSb3c7XG4gICAgdGhpcy5kYXRhID0gZGF0YTtcbiAgICB0aGlzLnN1Y2Nlc3MgPSBzdWNjZXNzO1xuICB9XG59XG5leHBvcnQgY2xhc3MgSFRUUCB7XG4gIHJlc3BvbnNlOiBDdXN0b21SZXNwb25zZTtcblxuICBzZXRIdHRwUmVxdWVzdChcbiAgICBjb2RlOiBudW1iZXIsXG4gICAgbWVzc2FnZTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgZGF0YTogYW55ID0gbnVsbCxcbiAgICB0b3RhbFJvdyA9IDAsXG4gICAgc3VjY2VzcyA9IHRydWUsXG4gICkge1xuICAgIGlmIChjb2RlICE9IEh0dHBTdGF0dXMuT0spIHN1Y2Nlc3MgPSBmYWxzZTtcbiAgICB0aGlzLnJlc3BvbnNlID0gbmV3IEN1c3RvbVJlc3BvbnNlKGNvZGUsIG1lc3NhZ2UsIGRhdGEsIHRvdGFsUm93LCBzdWNjZXNzKTtcbiAgICByZXR1cm4gdGhpcy5yZXNwb25zZTtcbiAgfVxuXG4gIHN1Y2Nlc3MoXG4gICAgZGF0YSA9IG51bGwsXG4gICAgY29kZSA9IEh0dHBTdGF0dXMuT0ssXG4gICAgbWVzc2FnZSA9ICfEkMSDbmcgbmjhuq1wIHRow6BuaCBjw7RuZycsXG4gICAgc3VjY2VzcyA9IHRydWUsXG4gICAgdG90YWxSb3cgPSAwLFxuICApIHtcbiAgICB0aGlzLnJlc3BvbnNlID0gbmV3IEN1c3RvbVJlc3BvbnNlKGNvZGUsIG1lc3NhZ2UsIGRhdGEsIHRvdGFsUm93LCBzdWNjZXNzKTtcbiAgICByZXR1cm4gdGhpcy5yZXNwb25zZTtcbiAgfVxuXG4gIG5vdEZvdW5kKCkge1xuICAgIHRoaXMucmVzcG9uc2UgPSBuZXcgQ3VzdG9tUmVzcG9uc2UoXG4gICAgICBIdHRwU3RhdHVzLk5PVF9GT1VORCxcbiAgICAgICdOb3QgZm91bmQnLFxuICAgICAgbnVsbCxcbiAgICAgIDAsXG4gICAgICBmYWxzZSxcbiAgICApO1xuICAgIHJldHVybiB0aGlzLnJlc3BvbnNlO1xuICB9XG5cbiAgZXJyb3IoXG4gICAgbWVzc2FnZTogc3RyaW5nIHwgc3RyaW5nW10sXG4gICAgY29kZTogbnVtYmVyID0gSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICBlcnJvcjogc3RyaW5nID0gJycsXG4gICkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gbmV3IEN1c3RvbVJlc3BvbnNlKGNvZGUsIG1lc3NhZ2UsIG51bGwsIDAsIGZhbHNlKTtcbiAgICB0aHJvdyBuZXcgUnBjRXhjZXB0aW9uKHJlc3BvbnNlKTtcbiAgfVxufVxuXG5AQ2F0Y2goSHR0cEV4Y2VwdGlvbilcbmV4cG9ydCBjbGFzcyBIdHRwRXhjZXB0aW9uRmlsdGVyIGV4dGVuZHMgSFRUUCBpbXBsZW1lbnRzIEV4Y2VwdGlvbkZpbHRlciB7XG4gIGNhdGNoKGV4Y2VwdGlvbjogSHR0cEV4Y2VwdGlvbiwgaG9zdDogQXJndW1lbnRzSG9zdCkge1xuICAgIGNvbnN0IGN0eCA9IGhvc3Quc3dpdGNoVG9IdHRwKCk7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBjdHguZ2V0UmVzcG9uc2U8UmVzcG9uc2U+KCk7XG4gICAgLy8gY29uc3QgcmVxdWVzdCA9IGN0eC5nZXRSZXF1ZXN0PFJlcXVlc3Q+KCk7XG4gICAgY29uc3Qgc3RhdHVzID0gZXhjZXB0aW9uLmdldFN0YXR1cygpO1xuXG4gICAgcmVzcG9uc2Uuc3RhdHVzKHN0YXR1cykuanNvbihcbiAgICAgIHRoaXMuc2V0SHR0cFJlcXVlc3QoXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZXhjZXB0aW9uLm1lc3NhZ2UsXG4gICAgICAgIHtcbiAgICAgICAgICBlcnJvcjogSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShleGNlcHRpb24uZ2V0UmVzcG9uc2UoKSkpLm1lc3NhZ2VbMF0sXG4gICAgICAgIH0sXG4gICAgICAgIDAsXG4gICAgICAgIGZhbHNlLFxuICAgICAgKSxcbiAgICApO1xuICB9XG59XG5cbkBDYXRjaChIdHRwRXhjZXB0aW9uKVxuZXhwb3J0IGNsYXNzIFJwY1ZhbGlkYXRpb25GaWx0ZXIgZXh0ZW5kcyBIVFRQIGltcGxlbWVudHMgRXhjZXB0aW9uRmlsdGVyIHtcbiAgY2F0Y2goZXhjZXB0aW9uOiBIdHRwRXhjZXB0aW9uLCBob3N0OiBBcmd1bWVudHNIb3N0KSB7XG4gICAgY29uc3Qgc3RhdHVzID0gZXhjZXB0aW9uLmdldFN0YXR1cygpO1xuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGV4Y2VwdGlvbi5nZXRSZXNwb25zZSgpKSkubWVzc2FnZVswXTtcbiAgICByZXR1cm4gdGhpcy5zZXRIdHRwUmVxdWVzdChzdGF0dXMsIGRhdGEsIG51bGwsIDAsIGZhbHNlKTtcbiAgfVxufVxuXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgRXJyb3JzSW50ZXJjZXB0b3IgZXh0ZW5kcyBIVFRQIGltcGxlbWVudHMgTmVzdEludGVyY2VwdG9yIHtcbiAgZ2V0S2V5TWVzc2FnZShtZXNzYWdlKSB7XG4gICAgbGV0IGtleSA9ICcnO1xuICAgIHN3aXRjaCAobWVzc2FnZSkge1xuICAgICAgY2FzZSAnRmlsZSB0b28gbGFyZ2UnOlxuICAgICAgICBrZXkgPSAnc3lzdGVtcy5GSUxFX1VQTE9BRC5GSUxFX1RPT19MQVJHRSc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnVG9vIG1hbnkgZmlsZXMnOlxuICAgICAgICBrZXkgPSAnc3lzdGVtcy5GSUxFX1VQTE9BRC5UT09fTUFOWV9GSUxFUyc7XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAga2V5ID0gbWVzc2FnZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIHJldHVybiBrZXk7XG4gIH1cbiAgaW50ZXJjZXB0KGNvbnRleHQ6IEV4ZWN1dGlvbkNvbnRleHQsIG5leHQ6IENhbGxIYW5kbGVyKTogT2JzZXJ2YWJsZTxhbnk+IHtcbiAgICBjb25zdCByZXF1ZXN0ID0gY29udGV4dC5zd2l0Y2hUb0h0dHAoKS5nZXRSZXF1ZXN0PFJlcXVlc3Q+KCk7XG4gICAgY29uc3QgaTE4biA9IGdldEkxOG5Db250ZXh0RnJvbVJlcXVlc3QocmVxdWVzdCk7XG4gICAgcmV0dXJuIG5leHQuaGFuZGxlKCkucGlwZShcbiAgICAgIHRhcCh7XG4gICAgICAgIGVycm9yOiBlcnIgPT4ge1xuICAgICAgICAgIGVyci5tZXNzYWdlID0gdGhpcy5nZXRLZXlNZXNzYWdlKGVyci5tZXNzYWdlKTtcbiAgICAgICAgICB0aHJvdyB0aGlzLnNldEh0dHBSZXF1ZXN0KGVyci5zdGF0dXMsIGkxOG4udChlcnIubWVzc2FnZSksIG51bGwsIDAsIGZhbHNlKTtcbiAgICAgICAgfSxcbiAgICAgIH0pLFxuICAgICk7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vaHR0cC5tb2R1bGUnO1xuIiwiZXhwb3J0ICogZnJvbSAnLi9ycGMtdmFsaWRhdGlvbi1waXBlJztcbiIsImltcG9ydCB7IEFyZ3VtZW50TWV0YWRhdGEgfSBmcm9tICdAbmVzdGpzL2NvbW1vbic7XG5pbXBvcnQgeyBJbmplY3RhYmxlLCBQaXBlVHJhbnNmb3JtIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgcGxhaW5Ub0NsYXNzIH0gZnJvbSAnY2xhc3MtdHJhbnNmb3JtZXInO1xuaW1wb3J0IHsgdmFsaWRhdGUgfSBmcm9tICdjbGFzcy12YWxpZGF0b3InO1xuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBScGNWYWxpZGF0aW9uUGlwZSBleHRlbmRzIEhUVFAgaW1wbGVtZW50cyBQaXBlVHJhbnNmb3JtPGFueT4ge1xuICBhc3luYyB0cmFuc2Zvcm0odmFsdWU6IGFueSwgeyBtZXRhdHlwZSB9OiBBcmd1bWVudE1ldGFkYXRhKSB7XG4gICAgaWYgKCFtZXRhdHlwZSB8fCAhdGhpcy52YWxpZGF0ZU1ldGFUeXBlKG1ldGF0eXBlKSkge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IG9iamVjdCA9IHBsYWluVG9DbGFzcyhtZXRhdHlwZSwgdmFsdWUpO1xuICAgIGNvbnN0IGVycm9ycyA9IGF3YWl0IHZhbGlkYXRlKG9iamVjdCk7XG4gICAgaWYgKGVycm9ycy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zdCBmaWx0ZXJFcnJvcnMgPSBlcnJvcnMuZmxhdE1hcChlcnIgPT4ge1xuICAgICAgICBpZiAoZXJyLmNoaWxkcmVuLmxlbmd0aCAhPT0gMClcbiAgICAgICAgICByZXR1cm4gZXJyLmNoaWxkcmVuLmZsYXRNYXAoZXJyID0+XG4gICAgICAgICAgICBlcnIuY2hpbGRyZW4uZmxhdE1hcChlcnIgPT4gT2JqZWN0LnZhbHVlcyhlcnIuY29uc3RyYWludHMpKSxcbiAgICAgICAgICApO1xuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhlcnIuY29uc3RyYWludHMpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLmVycm9yKGZpbHRlckVycm9ycyk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlO1xuICB9XG5cbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbiAgcHJpdmF0ZSB2YWxpZGF0ZU1ldGFUeXBlKG1ldGF0eXBlOiBGdW5jdGlvbik6IGJvb2xlYW4ge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG4gICAgY29uc3QgdHlwZXM6IEZ1bmN0aW9uW10gPSBbU3RyaW5nLCBCb29sZWFuLCBOdW1iZXIsIEFycmF5LCBPYmplY3RdO1xuICAgIHJldHVybiAhdHlwZXMuaW5jbHVkZXMobWV0YXR5cGUpO1xuICB9XG59XG4iLCJpbXBvcnQgeyBQcmlzbWFDbGllbnQgfSBmcm9tICdAcHJpc21hL215c3FsJztcblxuaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gJ0BuZXN0anMvY29tbW9uJztcbmltcG9ydCB7IENvbmZpZ1NlcnZpY2UgfSBmcm9tICdAbmVzdGpzL2NvbmZpZyc7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBNeVNRTENsaWVudCBleHRlbmRzIFByaXNtYUNsaWVudCB7XG4gIGNvbnN0cnVjdG9yKGNvbmZpZzogQ29uZmlnU2VydmljZSkge1xuICAgIHN1cGVyKHtcbiAgICAgIGRhdGFzb3VyY2VzOiB7XG4gICAgICAgIGRiOiB7XG4gICAgICAgICAgdXJsOiBjb25maWcuZ2V0T3JUaHJvdygnTVlTUUxfREFUQUJBU0VfVVJMJyksXG4gICAgICAgIH0sXG4gICAgICB9LFxuICAgIH0pO1xuICB9XG5cbiAgY2xlYW5EYXRhYmFzZShjYWxsYmFjazogYW55KSB7XG4gICAgcmV0dXJuIGNhbGxiYWNrO1xuICB9XG59XG4iLCJleHBvcnQgKiBmcm9tICcuL3JlZGlzLm1vZHVsZSc7XG4iLCJpbXBvcnQgeyBEeW5hbWljTW9kdWxlIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcbmltcG9ydCB7XG4gIENsaWVudFByb3ZpZGVyLFxuICBDbGllbnRzTW9kdWxlLFxuICBUcmFuc3BvcnQsXG59IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5cbmV4cG9ydCBjbGFzcyBSZWRpc01vZHVsZSB7XG4gIHN0YXRpYyBnZXRSZWRpc09wdGlvbihvcHRpb246IG9iamVjdCk6IENsaWVudFByb3ZpZGVyIHtcbiAgICBjb25zdCBjb25maWcgPSBuZXcgQ29uZmlnU2VydmljZSgpO1xuXG4gICAgcmV0dXJuIHtcbiAgICAgIC4uLm9wdGlvbixcbiAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlJFRElTLFxuICAgICAgb3B0aW9uczoge1xuICAgICAgICBob3N0OiBjb25maWcuZ2V0T3JUaHJvdygnSE9TVF9SRURJU19TRVJWRVInKSxcbiAgICAgICAgcG9ydDogY29uZmlnLmdldE9yVGhyb3coJ1BPUlRfUFVCTElDX1JFRElTJyksXG4gICAgICAgIHBhc3N3b3JkOiBjb25maWcuZ2V0T3JUaHJvdygnUEFTU1dPUkRfUkVESVMnKSxcbiAgICAgIH0sXG4gICAgfTtcbiAgfVxuXG4gIHN0YXRpYyByZWdpc3RlcihuYW1lOiBzdHJpbmcpOiBEeW5hbWljTW9kdWxlIHtcbiAgICByZXR1cm4ge1xuICAgICAgbW9kdWxlOiBSZWRpc01vZHVsZSxcbiAgICAgIGltcG9ydHM6IFtcbiAgICAgICAgQ2xpZW50c01vZHVsZS5yZWdpc3RlckFzeW5jKFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBuYW1lLFxuICAgICAgICAgICAgdXNlRmFjdG9yeTogKGNvbmZpZ1NlcnZpY2U6IENvbmZpZ1NlcnZpY2UpID0+ICh7XG4gICAgICAgICAgICAgIHRyYW5zcG9ydDogVHJhbnNwb3J0LlJFRElTLFxuICAgICAgICAgICAgICBvcHRpb25zOiB7XG4gICAgICAgICAgICAgICAgaG9zdDogY29uZmlnU2VydmljZS5nZXRPclRocm93KCdIT1NUX1JFRElTX1NFUlZFUicpLFxuICAgICAgICAgICAgICAgIHBvcnQ6IGNvbmZpZ1NlcnZpY2UuZ2V0T3JUaHJvdygnUE9SVF9QVUJMSUNfUkVESVMnKSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogY29uZmlnU2VydmljZS5nZXRPclRocm93KCdQQVNTV09SRF9SRURJUycpLFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSksXG4gICAgICAgICAgICBpbmplY3Q6IFtDb25maWdTZXJ2aWNlXSxcbiAgICAgICAgICB9LFxuICAgICAgICBdKSxcbiAgICAgIF0sXG4gICAgICBleHBvcnRzOiBbQ2xpZW50c01vZHVsZV0sXG4gICAgfTtcbiAgfVxufVxuIiwiZXhwb3J0ICogZnJvbSAnLi9wYWdpbmF0aW9uLnR5cGUnO1xuIiwiZXhwb3J0IGludGVyZmFjZSBQYWdpbmF0aW9uIHtcbiAgc2tpcD86IG51bWJlcjtcbiAgdGFrZT86IG51bWJlcjtcbiAgY3Vyc29yPzogbnVtYmVyO1xuICBzb3J0PzogYW55O1xuICBzZWFyY2g/OiBhbnk7XG59XG5cbmV4cG9ydCB0eXBlIEVtYWlsQ29udGVudCA9IHtcbiAgdHlwZTogJ3RleHQnIHwgJ2h0bWwnO1xuICBkYXRhOiBzdHJpbmc7XG59O1xuXG5leHBvcnQgY2xhc3MgTWFpbE1lc3NhZ2Uge1xuICB0aXRsZTogc3RyaW5nO1xuICBjb250ZW50OiBFbWFpbENvbnRlbnQ7XG4gIHRvOiBzdHJpbmc7XG4gIGh0bWw6IHN0cmluZztcbiAgcGFyYW1zOiB7XG4gICAgW25hbWU6IHN0cmluZ106IGFueTtcbiAgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICB0bzogc3RyaW5nLFxuICAgIHRpdGxlOiBzdHJpbmcsXG4gICAgY29udGVudDogRW1haWxDb250ZW50LFxuICAgIHBhcmFtczoge1xuICAgICAgW25hbWU6IHN0cmluZ106IGFueTtcbiAgICB9LFxuICApIHtcbiAgICB0aGlzLnRvID0gdG87XG4gICAgdGhpcy50aXRsZSA9IHRpdGxlO1xuICAgIHRoaXMuY29udGVudCA9IGNvbnRlbnQ7XG4gICAgdGhpcy5wYXJhbXMgPSBwYXJhbXM7XG4gIH1cbn1cbiIsImV4cG9ydCAqIGZyb20gJy4vY3VycmVudC11c2VyLmR0byc7XG5leHBvcnQgKiBmcm9tICcuL3F1ZXJ5LmR0byc7XG5leHBvcnQgKiBmcm9tICcuL3F1ZXJ5LnByaXNtYSc7XG4iLCJpbXBvcnQgeyBNb25nb0RCQ2xpZW50IH0gZnJvbSAnQGNvbW1vbi9wcmlzbWEvbW9uZ29fcHJpc21hX2NsaWVudCc7XG5pbXBvcnQgeyBNeVNRTENsaWVudCB9IGZyb20gJ0Bjb21tb24vcHJpc21hL215c3FsX3ByaXNtYV9jbGllbnQnO1xuaW1wb3J0IHsgTG9vc2VPYmplY3QgfSBmcm9tICcuLi9pbnRlcmZhY2UnO1xuZXhwb3J0IGNsYXNzIFByaXNtYVF1ZXJ5IHtcbiAgcHJvdGVjdGVkIGNvbm5lY3Rpb246IE15U1FMQ2xpZW50IHwgTW9uZ29EQkNsaWVudDtcbiAgcHJvdGVjdGVkIF9zZWxlY3Q6IGFueSA9IHt9O1xuICBwcm90ZWN0ZWQgX2Zyb206IHN0cmluZ1tdID0gW107XG4gIHByb3RlY3RlZCBfam9pbjogYW55ID0ge307XG4gIHByb3RlY3RlZCBfZ3JvdXA6IGFueSA9IFtdO1xuICBwcm90ZWN0ZWQgX2dyb3VwX2lkOiBhbnkgPSBbXTtcbiAgcHJvdGVjdGVkIF9jb25kaXRpb246IGFueSA9IFtdO1xuICBwcm90ZWN0ZWQgX3doZXJlOiBMb29zZU9iamVjdCA9IHtcbiAgICBfc2VhcmNoX29yOiBbXSxcbiAgICBfZmlsdGVyX2FuZDogW10sXG4gIH07XG4gIHByb3RlY3RlZCBfb3JkZXI6IHN0cmluZ1tdID0gW107XG4gIHByb3RlY3RlZCBfbGltaXQ6IGFueTtcbiAgcHJvdGVjdGVkIF9za2lwOiBhbnk7XG4gIHByb3RlY3RlZCBwYXJhbXM6IExvb3NlT2JqZWN0ID0ge307XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKGNvbm5lY3Rpb246IE15U1FMQ2xpZW50IHwgTW9uZ29EQkNsaWVudCkge1xuICAgIHRoaXMuY29ubmVjdGlvbiA9IGNvbm5lY3Rpb247XG4gIH1cblxuICBwdWJsaWMgcmVzZXQoa2V5OiBzdHJpbmcpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHN3aXRjaCAoa2V5KSB7XG4gICAgICAgIGNhc2UgJ3NlbGVjdCc6XG4gICAgICAgICAgdGhpcy5fc2VsZWN0ID0ge307XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnY29uZGl0aW9uJzpcbiAgICAgICAgICB0aGlzLl9jb25kaXRpb24gPSBbXTtcbiAgICAgICAgICBicmVhaztcblxuICAgICAgICBjYXNlICd3aGVyZSc6XG4gICAgICAgICAgdGhpcy5fd2hlcmVbJ19zZWFyY2hfb3InXSA9IFtdO1xuICAgICAgICAgIHRoaXMuX3doZXJlWydfZmlsdGVyX2FuZCddID0gW107XG4gICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgY2FzZSAnb3JkZXInOlxuICAgICAgICAgIHRoaXMuX29yZGVyID0gW107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIHJlc2V0QWxsKCkge1xuICAgIHRoaXMuX3NlbGVjdCA9IHt9O1xuICAgIHRoaXMuX2NvbmRpdGlvbiA9IFtdO1xuICAgIHRoaXMuX3doZXJlWydfc2VhcmNoX29yJ10gPSBbXTtcbiAgICB0aGlzLl93aGVyZVsnX2ZpbHRlcl9hbmQnXSA9IFtdO1xuICAgIHRoaXMuX29yZGVyID0gW107XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBzZWxlY3Qoc3RhdGVtZW50OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIChBcnJheS5pc0FycmF5KHN0YXRlbWVudCkgPyBzdGF0ZW1lbnQgOiBbc3RhdGVtZW50XSkuZm9yRWFjaChzdGF0ZW1lbnQgPT5cbiAgICAgIHRoaXMuX3NlbGVjdC5wdXNoKHN0YXRlbWVudCksXG4gICAgKTtcblxuICAgIHJldHVybiB0aGlzO1xuICB9XG5cbiAgcHVibGljIGpvaW4oc3RhdGVtZW50OiBzdHJpbmcgfCBzdHJpbmdbXSkge1xuICAgIChBcnJheS5pc0FycmF5KHN0YXRlbWVudCkgPyBzdGF0ZW1lbnQgOiBbc3RhdGVtZW50XSkuZm9yRWFjaChzdGF0ZW1lbnQgPT5cbiAgICAgIHRoaXMuX2pvaW4ucHVzaChzdGF0ZW1lbnQpLFxuICAgICk7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBwdWJsaWMgd2hlcmUoc3RhdGVtZW50OiBzdHJpbmcgfCBbXSB8IExvb3NlT2JqZWN0KSB7XG4gICAgKEFycmF5LmlzQXJyYXkoc3RhdGVtZW50KSA/IHN0YXRlbWVudCA6IFtzdGF0ZW1lbnRdKS5mb3JFYWNoKHN0YXRlbWVudCA9PlxuICAgICAgdGhpcy5fY29uZGl0aW9uLnB1c2goc3RhdGVtZW50KSxcbiAgICApO1xuXG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cblxuICBwdWJsaWMgd2hlcmVTZWFyY2goc3RhdGVtZW50OiBzdHJpbmcgfCBbXSB8IExvb3NlT2JqZWN0KSB7XG4gICAgKEFycmF5LmlzQXJyYXkoc3RhdGVtZW50KSA/IHN0YXRlbWVudCA6IFtzdGF0ZW1lbnRdKS5mb3JFYWNoKHN0YXRlbWVudCA9PlxuICAgICAgdGhpcy5fd2hlcmVbJ19zZWFyY2hfb3InXS5wdXNoKHN0YXRlbWVudCksXG4gICAgKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBwdWJsaWMgd2hlcmVGaWx0ZXIoc3RhdGVtZW50OiBzdHJpbmcgfCBbXSB8IExvb3NlT2JqZWN0KSB7XG4gICAgQXJyYXkuaXNBcnJheShzdGF0ZW1lbnQpID8gc3RhdGVtZW50IDogW3N0YXRlbWVudF07XG4gICAgdGhpcy5fd2hlcmVbJ19maWx0ZXJfYW5kJ10gPSBzdGF0ZW1lbnQ7XG5cbiAgICByZXR1cm4gdGhpcztcbiAgfVxuXG4gIHB1YmxpYyBvcmRlcl9ieSA9IChzdGF0ZW1lbnQ6IHN0cmluZyB8IHN0cmluZ1tdKSA9PiB7XG4gICAgKEFycmF5LmlzQXJyYXkoc3RhdGVtZW50KSA/IHN0YXRlbWVudCA6IFtzdGF0ZW1lbnRdKS5mb3JFYWNoKHN0YXRlbWVudCA9PlxuICAgICAgdGhpcy5fb3JkZXIucHVzaChzdGF0ZW1lbnQpLFxuICAgICk7XG4gICAgcmV0dXJuIHRoaXM7XG4gIH07XG5cbiAgcHVibGljIGFzeW5jIHRvUmF3UHJpc21hRGIoKSB7XG4gICAgY29uc3QgcXVlcnlGaW5hbEFjdGl2ZTogYW55ID0ge307XG4gICAgY29uc3QgcXVlcnlGaW5hbDogc3RyaW5nW10gPSBbXTtcbiAgICBjb25zdCBvcmRlckJ5OiBhbnkgPSBbXTtcbiAgICBpZiAodGhpcy5fY29uZGl0aW9uKSB7XG4gICAgICB0aGlzLl9jb25kaXRpb24uZm9yRWFjaCgoaXRlbTogYW55ID0ge30pID0+IHtcbiAgICAgICAgcXVlcnlGaW5hbC5wdXNoKGl0ZW0pO1xuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3doZXJlKSB7XG4gICAgICBjb25zdCBvYmoxOiBhbnkgPSB7fTtcbiAgICAgIGNvbnN0IG9iajI6IGFueSA9IHt9O1xuICAgICAgY29uc3Qgb2JqMzogYW55ID0ge307XG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX3doZXJlWydfc2VhcmNoX29yJ10ubGVuZ3RoID4gMCAmJlxuICAgICAgICB0aGlzLl93aGVyZVsnX2ZpbHRlcl9hbmQnXS5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICBvYmoxWydPUiddID0gdGhpcy5fd2hlcmVbJ19zZWFyY2hfb3InXTtcbiAgICAgICAgcXVlcnlGaW5hbC5wdXNoKG9iajEpO1xuICAgICAgfVxuXG4gICAgICBpZiAoXG4gICAgICAgIHRoaXMuX3doZXJlWydfZmlsdGVyX2FuZCddLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgdGhpcy5fd2hlcmVbJ19zZWFyY2hfb3InXS5sZW5ndGggPT09IDBcbiAgICAgICkge1xuICAgICAgICBjb25zdCBhcnI6IGFueSA9IFtdO1xuICAgICAgICB0aGlzLl93aGVyZVsnX2ZpbHRlcl9hbmQnXS5mb3JFYWNoKChpdGVtOiBhbnkpID0+IHtcbiAgICAgICAgICBhcnIucHVzaChKU09OLnBhcnNlKGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgICAgIG9iajFbJ09SJ10gPSBhcnI7XG4gICAgICAgIHF1ZXJ5RmluYWwucHVzaChvYmoxKTtcbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0aGlzLl93aGVyZVsnX3NlYXJjaF9vciddLmxlbmd0aCA+IDAgJiZcbiAgICAgICAgdGhpcy5fd2hlcmVbJ19maWx0ZXJfYW5kJ10ubGVuZ3RoID4gMFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGFycjogYW55ID0gW107XG4gICAgICAgIHRoaXMuX3doZXJlWydfZmlsdGVyX2FuZCddLmZvckVhY2goKGl0ZW06IGFueSkgPT4ge1xuICAgICAgICAgIGFyci5wdXNoKEpTT04ucGFyc2UoaXRlbSkpO1xuICAgICAgICB9KTtcblxuICAgICAgICBvYmoxWydPUiddID0gdGhpcy5fd2hlcmVbJ19zZWFyY2hfb3InXTtcbiAgICAgICAgb2JqMlsnT1InXSA9IGFycjtcbiAgICAgICAgb2JqM1snQU5EJ10gPSBbb2JqMSwgb2JqMl07XG4gICAgICAgIHF1ZXJ5RmluYWwucHVzaChvYmozKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodGhpcy5fb3JkZXIubGVuZ3RoKSB7XG4gICAgICBjb25zdCBhcnI6IGFueSA9IFtdO1xuICAgICAgdGhpcy5fb3JkZXIuZm9yRWFjaCgoaXRlbTogYW55KSA9PiB7XG4gICAgICAgIGFyci5wdXNoKEpTT04ucGFyc2UoaXRlbSkpO1xuICAgICAgfSk7XG4gICAgICBvcmRlckJ5LnB1c2goYXJyKTtcbiAgICB9XG4gICAgcXVlcnlGaW5hbEFjdGl2ZVsnQU5EJ10gPSBxdWVyeUZpbmFsO1xuICAgIHRoaXMucmVzZXRBbGwoKTtcbiAgICByZXR1cm4geyBvcmRlcjogb3JkZXJCeVswXSwgd2hlcmU6IHF1ZXJ5RmluYWxBY3RpdmUgfTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgY3JlYXRlT2JqZWN0Q3N2V3JpdGVyIH0gZnJvbSAnY3N2LXdyaXRlcic7XG5pbXBvcnQgeyBTdG9yYWdlIH0gZnJvbSAnQGdvb2dsZS1jbG91ZC9zdG9yYWdlJztcblxuZXhwb3J0IGNvbnN0IHVwbG9hZEZpbGUgPSBhc3luYyAoZmlsZSwgc3RvcmFnZTogU3RvcmFnZSwgYnVja2V0OiBzdHJpbmcpOiBQcm9taXNlPHN0cmluZz4gPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmVzLCByZWplY3RzKSA9PiB7XG4gICAgY29uc3QgZmlsZVVwbG9hZCA9IHN0b3JhZ2VcbiAgICAgIC5idWNrZXQoYnVja2V0KVxuICAgICAgLmZpbGUoZmlsZS5vcmlnaW5hbG5hbWUpO1xuICAgIGNvbnN0IHN0cmVhbSA9IGZpbGVVcGxvYWQuY3JlYXRlV3JpdGVTdHJlYW0oe1xuICAgICAgcmVzdW1hYmxlOiB0cnVlLFxuICAgICAgbWV0YWRhdGE6IHtcbiAgICAgICAgY29udGVudFR5cGU6IGZpbGUubWltZXR5cGUsXG4gICAgICB9LFxuICAgIH0pO1xuICAgIHN0cmVhbS5vbignZmluaXNoJywgYXN5bmMgKCkgPT4ge1xuICAgICAgcmVzb2x2ZXMoZmlsZVVwbG9hZC5pZCk7XG4gICAgfSk7XG4gICAgc3RyZWFtLm9uKCdlcnJvcicsIGVyciA9PiB7XG4gICAgICByZWplY3RzKGVycik7XG4gICAgfSk7XG4gICAgc3RyZWFtLmVuZChmaWxlLmJ1ZmZlcik7XG4gIH0pO1xufVxuXG5leHBvcnQgY29uc3QgdXBsb2FkRmlsZUZyb21QYXRoID0gYXN5bmMgKHBhdGgsIHN0b3JhZ2U6IFN0b3JhZ2UsIGJ1Y2tldDogc3RyaW5nKTogUHJvbWlzZTxzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlcywgcmVqZWN0cykgPT4ge1xuICAgIHN0b3JhZ2UuYnVja2V0KGJ1Y2tldCkudXBsb2FkKHBhdGgsIChlcnJvciwgZmlsZSkgPT4ge1xuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIHJlamVjdHMoZXJyb3IpO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXNvbHZlcyhmaWxlLmlkKTtcbiAgICB9KTtcbiAgfSk7XG59XG5cbmV4cG9ydCBjb25zdCBkZWxldGVGaWxlID0gYXN5bmMgKGZpbGVOYW1lLCBzdG9yYWdlOiBTdG9yYWdlLCBidWNrZXQ6IHN0cmluZykgPT4ge1xuICByZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmVzLCByZWplY3RzKSA9PiB7XG4gICAgdHJ5IHtcbiAgICAgIGF3YWl0IHN0b3JhZ2VcbiAgICAgICAgLmJ1Y2tldChidWNrZXQpXG4gICAgICAgIC5maWxlKGZpbGVOYW1lKVxuICAgICAgICAuZGVsZXRlKHsgaWdub3JlTm90Rm91bmQ6IHRydWUgfSk7XG4gICAgICByZXNvbHZlcyh7fSk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlamVjdHMoZXJyb3IpO1xuICAgIH1cbiAgfSlcbn1cblxuZXhwb3J0IGNvbnN0IGV4cG9ydERhdGFUb0NzdiA9IChcbiAgZGF0YTogYW55W10sXG4gIGhlYWRlcjogYW55W10sXG4gIGZpbGVQYXRoOiBzdHJpbmcsXG4pOiBQcm9taXNlIDxzdHJpbmc+ID0+IHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlKGFzeW5jIChyZXNvbHZlcywgcmVqZWN0cykgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3cml0ZXIgPSBjcmVhdGVPYmplY3RDc3ZXcml0ZXIoe1xuICAgICAgICBwYXRoOiBmaWxlUGF0aCxcbiAgICAgICAgaGVhZGVyLFxuICAgICAgICBlbmNvZGluZzogJ3V0ZjgnXG4gICAgICB9KTtcbiAgICAgIGF3YWl0IHdyaXRlci53cml0ZVJlY29yZHMoZGF0YSk7XG4gICAgICByZXNvbHZlcyhmaWxlUGF0aCk7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIHJlamVjdHMoZXJyb3IpO1xuICAgIH1cbiAgfSlcbn0iLCJjb25zdCBnZXROZXN0ZWRPYmplY3RWYWx1ZSA9IChvYmo6IGFueSwgZmllbGRzOiBzdHJpbmdbXSkgPT4ge1xuICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpZWxkcykge1xuICAgIG9ialtmaWVsZF0gPSBvYmpbZmllbGRdPy5tYXAoKGRhdGE6IGFueSkgPT4gT2JqZWN0LnZhbHVlcyhkYXRhKVswXSk7XG4gIH1cbiAgcmV0dXJuIG9iajtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVSZWR1bmRhbnQgPSAodGFyZ2V0OiBhbnksIGZpZWxkczogc3RyaW5nW10pID0+IHtcbiAgaWYgKCF0YXJnZXQ/Lmxlbmd0aCkge1xuICAgIHJldHVybiBnZXROZXN0ZWRPYmplY3RWYWx1ZSh0YXJnZXQsIGZpZWxkcyk7XG4gIH1cblxuICByZXR1cm4gdGFyZ2V0Py5tYXAoKGl0ZW06IGFueSkgPT4ge1xuICAgIHJldHVybiBnZXROZXN0ZWRPYmplY3RWYWx1ZShpdGVtLCBmaWVsZHMpO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCByZW1vdmVPYmplY3RQcm9wZXJ0aWVzID0gKHRhcmdldDogYW55LCBmaWVsZHM6IHN0cmluZ1tdKSA9PiB7XG4gIGZvciAoY29uc3QgZmllbGQgb2YgZmllbGRzKSB7XG4gICAgZGVsZXRlIHRhcmdldFtmaWVsZF07XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJleHBvcnQgKiBmcm9tICcuL2ZpbHRlci1kYXRhJztcbmV4cG9ydCAqIGZyb20gJy4vZHRvJztcbmV4cG9ydCAqIGZyb20gJy4vZmlsZSc7XG4iLCJpbXBvcnQgeyBJRF9TUExJVCB9IGZyb20gJ0BhcHBzL3Byb2plY3RzL3NyYy9wcm9qZWN0cy5jb21tb24nO1xuaW1wb3J0IHsgSFRUUCB9IGZyb20gJ0Bjb21tb24vaHR0cCc7XG5pbXBvcnQgeyBIdHRwU3RhdHVzIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgUGFnaW5hdGlvblF1ZXJ5RHRvIH0gZnJvbSAnLi4vZHRvJztcbmltcG9ydCB7IFBhZ2luYXRpb24gfSBmcm9tICcuLi90eXBlcyc7XG5pbXBvcnQgeyBQcmlzbWFRdWVyeSB9IGZyb20gJy4vZHRvL3F1ZXJ5LnByaXNtYSc7XG5pbXBvcnQgeyBpc0tleVF1ZXJ5VmFsaWQgfSBmcm9tICcuL3ZhbGlkYXRlcy9rZXktcXVlcnkudXRpbCc7XG5cbmV4cG9ydCB0eXBlIFJFU1RmdWxQYXJhbXMgPSB7XG4gIGxpc3Q/OiB7XG4gICAgZGF0ZVNjb3BlPzogc3RyaW5nW107XG4gICAgZmlsdGVyRmllbGRzPzogc3RyaW5nW107XG4gICAgc2VhcmNoRmllbGRzPzogc3RyaW5nW107XG4gICAgb3JkZXJGaWVsZHM/OiBzdHJpbmdbXTtcbiAgfTtcbiAgaXRlbT86IHtcbiAgICBpZFBhcmFtPzogc3RyaW5nO1xuICAgIGRlZmF1bHRTeXN0ZW1GaWVsZHM/OiBib29sZWFuO1xuICAgIGNyZWF0ZWRfZGF0ZT86IHN0cmluZztcbiAgICBjcmVhdGVkX2J5Pzogc3RyaW5nO1xuICAgIG1vZGlmaWVkX2RhdGU/OiBzdHJpbmc7XG4gICAgbW9kaWZpZWRfYnk/OiBzdHJpbmc7XG4gIH07XG59O1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUkVTVGZ1bFNlcnZpY2UgZXh0ZW5kcyBIVFRQIHtcbiAgcHJvdGVjdGVkIHBhcmFtczogUkVTVGZ1bFBhcmFtcyA9IHt9O1xuICBwcm90ZWN0ZWQgYWJzdHJhY3QgZ2V0RGIoKTogUHJpc21hUXVlcnk7XG4gIHByb3RlY3RlZCBhc3luYyBnZXRMaXN0cyhwYXJhbXM6IFBhZ2luYXRpb25RdWVyeUR0byk6IFByb21pc2U8UGFnaW5hdGlvbj4ge1xuICAgIGNvbnN0IHF1ZXJ5RGIgPSB0aGlzLmdldERiKCk7XG4gICAgY29uc3QgcGFnaW5hdGlvblBhcmFtczogUGFnaW5hdGlvbiA9IHtcbiAgICAgIHNraXA6IDAsXG4gICAgICB0YWtlOiAxMCxcbiAgICAgIHNvcnQ6IFtdLFxuICAgICAgc2VhcmNoOiBbXSxcbiAgICAgIGN1cnNvcjogMCxcbiAgICB9O1xuICAgIGNvbnN0IHsgcGFnZSwgbGltaXQsIG9yZGVyLCBxIH0gPSBwYXJhbXM7XG5cbiAgICAvLyBDaGVjayBsaW1pdFxuICAgIGlmICghaXNLZXlRdWVyeVZhbGlkKGxpbWl0IHx8ICctMScsIC9eKC0qKVxcZCskL2cpKSB7XG4gICAgICB0aHJvdyB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAnbGltaXQgdmFsdWUgbXVzdCBiZSB0aGUgbnVtYmVyJyxcbiAgICAgICk7XG4gICAgfVxuXG4gICAgLy8gQ2hlY2sgcGFnZVxuICAgIGlmICghaXNLZXlRdWVyeVZhbGlkKHBhZ2UgfHwgJzEnLCAvXlxcZCskL2cpKSB7XG4gICAgICB0aHJvdyB0aGlzLnNldEh0dHBSZXF1ZXN0KFxuICAgICAgICBIdHRwU3RhdHVzLkJBRF9SRVFVRVNULFxuICAgICAgICAncGFnZSB2YWx1ZSBtdXN0IGJlIHRoZSBwb3NpdGl2ZSBudW1iZXInLFxuICAgICAgKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBvcmRlclxuICAgIGlmIChcbiAgICAgICFpc0tleVF1ZXJ5VmFsaWQoXG4gICAgICAgIG9yZGVyIHx8ICdjcmVhdGVkRGF0ZSBhc2MnLFxuICAgICAgICAvXigoXFx3KyBcXHcrKSgsKFxcdysgXFx3KykpKikrJC9nLFxuICAgICAgKVxuICAgICkge1xuICAgICAgdGhyb3cgdGhpcy5zZXRIdHRwUmVxdWVzdChcbiAgICAgICAgSHR0cFN0YXR1cy5CQURfUkVRVUVTVCxcbiAgICAgICAgJ29yZGVyIHZhbHVlIGlzIG5vdCB2YWxpZCcsXG4gICAgICApO1xuICAgIH1cblxuICAgIGxldCBfbGltaXQgPSBwYXJzZUludChsaW1pdCk7XG4gICAgbGV0IF9wYWdlID0gcGFyc2VJbnQocGFnZSk7XG5cbiAgICBpZiAoX3BhZ2UgPCAxKSB7XG4gICAgICBfcGFnZSA9IDE7XG4gICAgfVxuXG4gICAgaWYgKF9saW1pdCA9PT0gLTEpIHtcbiAgICAgIF9saW1pdCA9IDA7XG4gICAgfSBlbHNlIGlmIChfbGltaXQgPCAxKSB7XG4gICAgICBfbGltaXQgPSAxMDtcbiAgICB9XG5cbiAgICBjb25zdCBvZmZzZXQgPSAoX3BhZ2UgLSAxKSAqIF9saW1pdDtcbiAgICBwYWdpbmF0aW9uUGFyYW1zLnNraXAgPSBvZmZzZXQgPyBvZmZzZXQgOiAwO1xuICAgIHBhZ2luYXRpb25QYXJhbXMudGFrZSA9IF9saW1pdCA/IF9saW1pdCA6IHVuZGVmaW5lZDtcblxuICAgIGlmIChwYXJhbXM/LnN0YXJ0SWQpIHtcbiAgICAgIHBhZ2luYXRpb25QYXJhbXMuc2tpcCA9IDE7XG4gICAgICBwYWdpbmF0aW9uUGFyYW1zLmN1cnNvciA9IHBhcmFtcy5zdGFydElkXG4gICAgICAgID8gcGFyc2VJbnQocGFyYW1zLnN0YXJ0SWQudG9TdHJpbmcoKSlcbiAgICAgICAgOiAwO1xuICAgIH1cblxuICAgIC8vIFjhu60gbMO9IHNlYXJjaCB3aXRoIHByZWZpeCBxIGluIGRhdGFiYXNlXG4gICAgY29uc3Qgc2VhcmNoRmllbGRzID0gdGhpcy5wYXJhbXMubGlzdD8uc2VhcmNoRmllbGRzO1xuICAgIGlmIChxICYmIHNlYXJjaEZpZWxkcz8ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBvcldoZXJlOiBhbnkgPSBbXTtcbiAgICAgIGZvciAobGV0IGZpZWxkIG9mIHNlYXJjaEZpZWxkcykge1xuICAgICAgICBjb25zdCBvYmoxOiBhbnkgPSB7fTtcbiAgICAgICAgY29uc3Qgb2JqMjogYW55ID0ge307XG5cbiAgICAgICAgaWYgKGZpZWxkLmluY2x1ZGVzKCdpbnQtJykpIHtcbiAgICAgICAgICBmaWVsZCA9IGZpZWxkLnNwbGl0KCctJylbMV07XG4gICAgICAgICAgb2JqMVsnaW4nXSA9IGlzTmFOKHBhcnNlSW50KHEpKSA/IHVuZGVmaW5lZCA6IHBhcnNlSW50KHEpO1xuICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLmluY2x1ZGVzKCdmbG9hdC0nKSkge1xuICAgICAgICAgIGZpZWxkID0gZmllbGQuc3BsaXQoJy0nKVsxXTtcbiAgICAgICAgICBvYmoxWydpbiddID0gaXNOYU4ocGFyc2VGbG9hdChxKSkgPyB1bmRlZmluZWQgOiBwYXJzZUZsb2F0KHEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG9iajFbJ2NvbnRhaW5zJ10gPSBxO1xuICAgICAgICB9XG4gICAgICAgIG9iajJbZmllbGRdID0gb2JqMTtcbiAgICAgICAgb3JXaGVyZS5wdXNoKG9iajIpO1xuICAgICAgfVxuICAgICAgaWYgKG9yV2hlcmUubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXJ5RGIud2hlcmVTZWFyY2gob3JXaGVyZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gWOG7rSBsw70gZmlsZXIgd2l0aCBwcmVmaXggW2ZdX1tmaWVsZF09dGVzdHxodW5nIGluIGRhdGFiYXNlXVxuICAgIGNvbnN0IGZpbHRlckZpZWxkcyA9IHRoaXMucGFyYW1zLmxpc3Q/LmZpbHRlckZpZWxkcztcbiAgICBpZiAoZmlsdGVyRmllbGRzPy5sZW5ndGgpIHtcbiAgICAgIGNvbnN0IG9yV2hlcmVNdWx0aTogYW55ID0gW107XG4gICAgICBmb3IgKGNvbnN0IGZpZWxkIG9mIGZpbHRlckZpZWxkcykge1xuICAgICAgICBjb25zdCBoYXNBbGlhcyA9IGZpZWxkLmluZGV4T2YoJy4nKSAhPT0gLTE7XG4gICAgICAgIGNvbnN0IGZpZWxkVmFsdWUgPVxuICAgICAgICAgIHBhcmFtc1tgZl8ke2hhc0FsaWFzID8gZmllbGQuc3BsaXQoJy4nKVsxXSA6IGZpZWxkfWBdO1xuICAgICAgICBpZiAoZmllbGRWYWx1ZSkge1xuICAgICAgICAgIGNvbnN0IG9iajogYW55ID0ge307XG4gICAgICAgICAgaWYgKGZpZWxkVmFsdWUuaW5kZXhPZihJRF9TUExJVCkgPT09IC0xKSB7XG4gICAgICAgICAgICBpZiAoZmllbGQuaW5jbHVkZXMoJ0lkJykgfHwgZmllbGQuaW5jbHVkZXMoJ2lkJykpIHtcbiAgICAgICAgICAgICAgb2JqW2ZpZWxkXSA9IHBhcnNlSW50KGAke2ZpZWxkVmFsdWV9YCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBvYmpbZmllbGRdID0gYCR7ZmllbGRWYWx1ZX1gO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3JXaGVyZU11bHRpLnB1c2goSlNPTi5zdHJpbmdpZnkob2JqKSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZpZWxkVmFsdWUuc3BsaXQoSURfU1BMSVQpLm1hcChpdGVtID0+IHtcbiAgICAgICAgICAgICAgaWYgKGZpZWxkLmluY2x1ZGVzKCdJZCcpIHx8IGZpZWxkLmluY2x1ZGVzKCdpZCcpKSB7XG4gICAgICAgICAgICAgICAgb2JqW2ZpZWxkXSA9IHBhcnNlSW50KGl0ZW0pO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG9ialtmaWVsZF0gPSBpdGVtO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIG9yV2hlcmVNdWx0aS5wdXNoKEpTT04uc3RyaW5naWZ5KG9iaikpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChvcldoZXJlTXVsdGkubGVuZ3RoKSB7XG4gICAgICAgIHF1ZXJ5RGIud2hlcmVGaWx0ZXIob3JXaGVyZU11bHRpKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBY4butIGzDvSBvcmRlckZpbGVkcyB3aXRoIHByZWZpeCBvcmRlcj1uYW1lIGFzYywgc2VyaWFsTnVtYmVyIGRlc2MgaW4gZGF0YWJhc2VdXG5cbiAgICBjb25zdCBvcmRlckZpZWxkcyA9IHRoaXMucGFyYW1zPy5saXN0Py5vcmRlckZpZWxkcztcbiAgICBpZiAob3JkZXIgJiYgb3JkZXJGaWVsZHM/Lmxlbmd0aCkge1xuICAgICAgZm9yIChjb25zdCBvIG9mIG9yZGVyLnNwbGl0KC9cXHMqLFxccyovZykpIHtcbiAgICAgICAgY29uc3QgX3NvcnQ6IGFueSA9IHt9O1xuXG4gICAgICAgIGxldCBbb3JkZXJpbmcsIGRpcmVjdGlvbl0gPSBvLnNwbGl0KC9cXHMrL2cpO1xuICAgICAgICBkaXJlY3Rpb24gPSBkaXJlY3Rpb24udG9Mb3dlckNhc2UoKTtcblxuICAgICAgICBpZiAoIVsnYXNjJywgJ2Rlc2MnXS5pbmNsdWRlcyhkaXJlY3Rpb24pKSB7XG4gICAgICAgICAgZGlyZWN0aW9uID0gJ2FzYyc7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3JkZXJpbmcgJiYgb3JkZXJGaWVsZHMuaW5jbHVkZXMob3JkZXJpbmcpKSB7XG4gICAgICAgICAgX3NvcnRbb3JkZXJpbmddID0gZGlyZWN0aW9uO1xuICAgICAgICAgIHF1ZXJ5RGIub3JkZXJfYnkoSlNPTi5zdHJpbmdpZnkoX3NvcnQpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc3VsdFF1ZXJ5ID0gYXdhaXQgcXVlcnlEYi50b1Jhd1ByaXNtYURiKCk7XG4gICAgcGFnaW5hdGlvblBhcmFtcy5zb3J0ID0gcmVzdWx0UXVlcnk/Lm9yZGVyO1xuICAgIHBhZ2luYXRpb25QYXJhbXMuc2VhcmNoID0gcmVzdWx0UXVlcnk/LndoZXJlO1xuICAgIC8vIHF1ZXJ5RGIucmVzZXQoKTtcbiAgICByZXR1cm4gcGFnaW5hdGlvblBhcmFtcztcbiAgfVxufVxuIiwiLyoqXG4gKiBpcyBrZXkgcXVlcnkgdmFsaWRcbiAqIEBwYXJhbSBrZXlOYW1lXG4gKiBAcGFyYW0gcGF0dGVyblxuICogQHJldHVybnNcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGlzS2V5UXVlcnlWYWxpZChrZXlOYW1lOiBzdHJpbmcsIHBhdHRlcm4pIHtcbiAgcmV0dXJuIGtleU5hbWUgJiYga2V5TmFtZS5tYXRjaChwYXR0ZXJuKTtcbn1cblxuLyoqXG4gKiBpcyBmX2tleSBxdWVyeSB2YWxpZFxuICogQHBhcmFtIGtleU5hbWVcbiAqIEBwYXJhbSBwYXR0ZXJuXG4gKiBAcmV0dXJuc1xuICovXG5leHBvcnQgZnVuY3Rpb24gaXNGS2V5UXVlcnlWYWxpZChcbiAga2V5TmFtZTogc3RyaW5nLFxuICBwYXR0ZXJuID0gL15bLTF8KChcXGQrKShcXHxcXGQpKildKyQvZyxcbikge1xuICByZXR1cm4ga2V5TmFtZSAmJiBrZXlOYW1lLm1hdGNoKHBhdHRlcm4pO1xufVxuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy1tb2R1bGVzL21haWxlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzLW1vZHVsZXMvbWFpbGVyL2Rpc3QvYWRhcHRlcnMvaGFuZGxlYmFycy5hZGFwdGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29tbW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29uZmlnXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBuZXN0anMvY29yZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL2p3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL21pY3Jvc2VydmljZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQG5lc3Rqcy9wYXNzcG9ydFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAbmVzdGpzL3N3YWdnZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHByaXNtYS9teXNxbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3MtdHJhbnNmb3JtZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY2xhc3MtdmFsaWRhdG9yXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNvb2tpZS1wYXJzZXJcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3N2LXdyaXRlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJoYW5kbGViYXJzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5lc3Rqcy1pMThuXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWdvb2dsZS1vYXV0aDIwXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInBhc3Nwb3J0LWp3dFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXNzcG9ydC1sb2NhbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyeGpzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNyeXB0b1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJmc1wiKTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiaW1wb3J0IHsgTG9nZ2VyIH0gZnJvbSAnQG5lc3Rqcy9jb21tb24nO1xuaW1wb3J0IHsgTmVzdEZhY3RvcnkgfSBmcm9tICdAbmVzdGpzL2NvcmUnO1xuaW1wb3J0IHsgU3lzdGVtc01vZHVsZSB9IGZyb20gJy4vc3lzdGVtcy5tb2R1bGUnO1xuaW1wb3J0IHsgTWljcm9zZXJ2aWNlT3B0aW9ucyB9IGZyb20gJ0BuZXN0anMvbWljcm9zZXJ2aWNlcyc7XG5pbXBvcnQgeyBSZWRpc01vZHVsZSB9IGZyb20gJ0Bjb21tb24vcmVkaXMnO1xuaW1wb3J0IHsgQ29uZmlnU2VydmljZSB9IGZyb20gJ0BuZXN0anMvY29uZmlnJztcblxuYXN5bmMgZnVuY3Rpb24gYm9vdHN0cmFwKCkge1xuICBjb25zdCBhcHAgPSBhd2FpdCBOZXN0RmFjdG9yeS5jcmVhdGVNaWNyb3NlcnZpY2U8TWljcm9zZXJ2aWNlT3B0aW9ucz4oXG4gICAgU3lzdGVtc01vZHVsZSxcbiAgICBSZWRpc01vZHVsZS5nZXRSZWRpc09wdGlvbih7XG4gICAgICBsb2dnZXI6IFsnZXJyb3InLCAnd2FybicsICdsb2cnLCAnZGVidWcnLCAndmVyYm9zZSddLFxuICAgIH0pLFxuICApO1xuICBjb25zdCBjb25maWcgPSBhcHAuZ2V0KENvbmZpZ1NlcnZpY2UpO1xuICBhd2FpdCBhcHBcbiAgICAubGlzdGVuKClcbiAgICAudGhlbigoKSA9PiB7XG4gICAgICBjb25zdCBsb2dnZXIgPSBuZXcgTG9nZ2VyKCdTeXN0ZW0gc2VydmljZScpO1xuICAgICAgbG9nZ2VyLmxvZyhcbiAgICAgICAgYEFQSSBHYXRld2F5IHN0YXJ0IGF0IHBvcnQ6ICR7Y29uZmlnLmdldCgnUE9SVCcpfVxcbk1pY3Jvc2VydmljZSBwb3J0OiR7Y29uZmlnLmdldCgnUE9SVF9QVUJMSUNfUkVESVMnKX1cXG5NWVNRTDogJHtjb25maWcuZ2V0KCdNWVNRTF9EQVRBQkFTRV9VUkwnKX1cXG5NT05HT0RCOiAke2NvbmZpZy5nZXQoJ01PTkdPREJfREFUQUJBU0VfVVJMJyl9YCxcbiAgICAgICk7XG4gICAgfVxuICAgICk7XG59XG5cbmJvb3RzdHJhcCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9