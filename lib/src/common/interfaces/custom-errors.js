"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UnAuthorizedResult = exports.NotFoundResult = exports.InternalServerErrorResult = exports.ForbiddenResult = exports.BadRequestResult = exports.ErrorResult = void 0;
class ErrorResult extends Error {
    constructor(errorCode, description) {
        super(description);
        this.errorCode = errorCode;
        this.description = description;
    }
}
exports.ErrorResult = ErrorResult;
class BadRequestResult extends ErrorResult {
}
exports.BadRequestResult = BadRequestResult;
class ForbiddenResult extends ErrorResult {
}
exports.ForbiddenResult = ForbiddenResult;
class InternalServerErrorResult extends ErrorResult {
}
exports.InternalServerErrorResult = InternalServerErrorResult;
class NotFoundResult extends ErrorResult {
}
exports.NotFoundResult = NotFoundResult;
class UnAuthorizedResult extends ErrorResult {
}
exports.UnAuthorizedResult = UnAuthorizedResult;
//# sourceMappingURL=custom-errors.js.map