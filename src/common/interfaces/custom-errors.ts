export abstract class ErrorResult extends Error {
  public errorLogRef: string;
  public clientRequestId: string;
  public userName: string;
  public constructor(public errorCode: string, public description: string) {
    super(description);
  }
}

export class BadRequestResult extends ErrorResult {}
export class ForbiddenResult extends ErrorResult {}
export class InternalServerErrorResult extends ErrorResult {}
export class NotFoundResult extends ErrorResult {}
export class UnAuthorizedResult extends ErrorResult {}
