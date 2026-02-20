import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { FieldMask, Message, proto3, Timestamp } from "@bufbuild/protobuf";
/**
 * @generated from enum account.v1.Role
 */
export declare enum Role {
    /**
     * Best practice: always have an unspecified default
     *
     * @generated from enum value: ROLE_UNSPECIFIED = 0;
     */
    UNSPECIFIED = 0,
    /**
     * @generated from enum value: ROLE_USER = 1;
     */
    USER = 1,
    /**
     * @generated from enum value: ROLE_MODERATOR = 2;
     */
    MODERATOR = 2,
    /**
     * @generated from enum value: ROLE_MANAGER = 3;
     */
    MANAGER = 3,
    /**
     * @generated from enum value: ROLE_ADMIN = 4;
     */
    ADMIN = 4,
    /**
     * @generated from enum value: ROLE_SUPER_ADMIN = 5;
     */
    SUPER_ADMIN = 5
}
/**
 * @generated from message account.v1.Account
 */
export declare class Account extends Message<Account> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    /**
     * @generated from field: string email = 2;
     */
    email: string;
    /**
     * @generated from field: string phone = 3;
     */
    phone: string;
    /**
     * @generated from field: account.v1.Role role = 4;
     */
    role: Role;
    /**
     * @generated from field: bool is_phone_verified = 5;
     */
    isPhoneVerified: boolean;
    /**
     * @generated from field: bool is_email_verified = 6;
     */
    isEmailVerified: boolean;
    /**
     * @generated from field: google.protobuf.Timestamp created_at = 7;
     */
    createdAt?: Timestamp;
    /**
     * @generated from field: google.protobuf.Timestamp updated_at = 8;
     */
    updatedAt?: Timestamp;
    constructor(data?: PartialMessage<Account>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "account.v1.Account";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): Account;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): Account;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): Account;
    static equals(a: Account | PlainMessage<Account> | undefined, b: Account | PlainMessage<Account> | undefined): boolean;
}
/**
 * @generated from message account.v1.GetAccountRequest
 */
export declare class GetAccountRequest extends Message<GetAccountRequest> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    constructor(data?: PartialMessage<GetAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "account.v1.GetAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): GetAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): GetAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): GetAccountRequest;
    static equals(a: GetAccountRequest | PlainMessage<GetAccountRequest> | undefined, b: GetAccountRequest | PlainMessage<GetAccountRequest> | undefined): boolean;
}
/**
 * @generated from message account.v1.UpdateAccountRequest
 */
export declare class UpdateAccountRequest extends Message<UpdateAccountRequest> {
    /**
     * The account object containing the new values
     *
     * @generated from field: account.v1.Account account = 1;
     */
    account?: Account;
    /**
     * Specifies which fields in 'account' should be updated.
     * Example: paths: ["email", "phone"]
     *
     * @generated from field: google.protobuf.FieldMask update_mask = 2;
     */
    updateMask?: FieldMask;
    constructor(data?: PartialMessage<UpdateAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "account.v1.UpdateAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): UpdateAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): UpdateAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): UpdateAccountRequest;
    static equals(a: UpdateAccountRequest | PlainMessage<UpdateAccountRequest> | undefined, b: UpdateAccountRequest | PlainMessage<UpdateAccountRequest> | undefined): boolean;
}
/**
 * @generated from message account.v1.DeleteAccountRequest
 */
export declare class DeleteAccountRequest extends Message<DeleteAccountRequest> {
    /**
     * @generated from field: string id = 1;
     */
    id: string;
    constructor(data?: PartialMessage<DeleteAccountRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "account.v1.DeleteAccountRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): DeleteAccountRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): DeleteAccountRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): DeleteAccountRequest;
    static equals(a: DeleteAccountRequest | PlainMessage<DeleteAccountRequest> | undefined, b: DeleteAccountRequest | PlainMessage<DeleteAccountRequest> | undefined): boolean;
}
