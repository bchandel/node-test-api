export const errorCodeMap = {
  InvalidElementValue: {
    value: "InvalidElementValue",
    description: "The resource contains an invalid value of element ",
  },
  InvalidRequest: {
    value: "InvalidRequest",
    description:
      "The request payload is invalid and does not adhere to specification",
  },
  InvalidBundle: {
    value: "InvalidRequestBundle",
    description:
      "The request bundle is invalid. The size of the bundle should be correct. If supplied all resources should contain unique identifiers and be submitted from same device",
  },
  RequestTooLarge: {
    value: "RequestTooLarge",
    description: "The request contains more resources than allowed in a bundle",
  },
  Forbidden: {
    value: "InsufficientPermissions",
    description:
      "The user does not have sufficient permissions to execute the request",
  },
  InternalError: {
    value: "InternalError",
    description:
      "The request processing has failed because of an internal error, exception or failure",
  },
  NotFound: {
    value: "ResourceNotFound",
    description: "The resource associated with the request could not be found",
  },
  InvalidParameter: {
    value: "InvalidParameter",
    description: "The request contains an invalid parameter ",
  },
  InvalidHeader: {
    value: "InvalidHeader",
    description: "The Content-Type of request is invalid",
  },
  InvalidStartDate: {
    value: "InvalidStartDate",
    description:
      "The requested aggregation cannot be processed as the start date is greater than the end date",
  },
  InvalidReference: {
    value: "InvalidReference",
    description: "The request contains invalid reference in element ",
  },
  MissingParameter: {
    value: "MissingParameter",
    description:
      "The request cannot be fulfilled as one or more required parameters are missing",
  },
  InvalidIdentifier: {
    value: "InvalidIdentifier",
    description:
      "The request cannot be fulfilled as provided Identifier is invalid",
  },
  MissingIdentifier: {
    value: "MissingIdentifier",
    description: "The request cannot be fulfilled as Identifier is missing",
  },
  InvalidRange: {
    value: "InvalidRange",
    description:
      "The resource contains invalid range between start and end date.",
  },
  Unauthorized: {
    value: "Unauthorized",
    description:
      "The Access token is invalid, expired or is missing in the request ",
  },
};
