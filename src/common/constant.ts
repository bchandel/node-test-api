export enum EnrollmentStatus {
  AWAITING_CONSENT = 'Awaiting Consent',
  CONSENT_EXPIRED = 'Consent Expired',
  CONSENT_INACTIVE = 'Consent Inactive',
  ENROLLED = 'Enrolled',
}

export default class Constants {
  public static readonly EPIC_PATIENT = 'e';
  public static readonly BP3_PATIENT = 'BAA';
  // public static AUTHORIZATION = 'Authorization';
  public static authorization = 'authorization';
  public static readonly AUTHORIZATION = 'x-forwarded-authorization';
  public static R4_EPIC_URL =
    'https://fhir.epic.com/interconnect-fhir-oauth/api/FHIR/R4/';

  public static BUNDLE = 'Bundle';
  public static SUMMARY = 'SUMMARY';
  public static DETAILED = 'DETAILED';
  public static LOOK_BACK = 10;
  public static responseTypeDB = 'DB';
  public static responseTypeEMR = 'EMR';
  public static requestTypePOST = 'POST';
  public static NO_DATA_FOUND = 'NoResults';
  public static NO_DATA_FOUND_DESC = 'Results not found';
  public static BAD_REQUEST = 'Bad request, Invalid records';
  public static ACTIVE = 'ACTIVE';
  public static CONSENT_ENROLMENT = 'ENROLMENT';
  public static TERMS_AND_CONDITIONS = 'TERMS_AND_CONDITIONS';
  public static REMOVE_PATIENT_RECORD_FROM_TABLES = ['questionnaire_response','patient_device_details','enrollment','patient','patient_activity','careplan','patient_plandefinition'];
  public static PROCEDURE_SYSTEM_CODE = ['CPT4','ICD10PCS'];
  public static DIAGNOSIS_SYSTEM_CODE = ['ICD10CM'];
  public static ICD10_CODE_TYPE = ['procedure','diagnosis'];

  public static MEDICATION_LOOKBACK = 2;
  public static ENTRY = 'entry';
  public static BIRTH_DATE = 'birthDate';
  public static EMAIL = 'email'; 
  public static EPIC_RESOURCE = 'epicResource';
  public static EPIC_TYPE = 'epicType';
  public static FHIR_ID = 'fhirId'; 
  public static GENDER = 'gender';
  public static INVIATATION_STATUS = 'invitationStatus';
  public static META = 'meta';
  public static NAME = 'name';
  public static RESOURCE_TYPE = 'resourceType';
  public static STATUS = 'status';
  public static TELECOM = 'telecom';
  public static GET = 'get';
  public static ISO_8601_MS_FMT = "%Y-%m-%dT%H:%M:%SZ"
  public static ID = 'id';
  public static CREATED = 'created';
  public static UPDATED = 'updated';
  public static VERSION_ID = 'versionId';
  public static EPIC_FORMAT = 'epic-format';
  public static DSTU2 = 'DSTU2'
  public static R4 = 'R4';
  public static COUNT = 'count';
  public static ENROLLMENT_STATUS = 'enrollmentStatus';
  public static PATIENT_ID = 'patientId';
  public static EPIC_RESOURCES = 'epicResources';
  public static FAMILY = 'family';
  public static GIVEN = 'given';
  public static BIRTHDATE = 'birthdate';
  public static V1 = 'v1';
  public static PATIENT_FHIR_ID = 'patientFHIRId';
}
