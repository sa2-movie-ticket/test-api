import type { BinaryReadOptions, FieldList, JsonReadOptions, JsonValue, PartialMessage, PlainMessage } from "@bufbuild/protobuf";
import { Message, proto3 } from "@bufbuild/protobuf";
/**
 * @generated from message auth.v1.SendOtpRequest
 */
export declare class SendOtpRequest extends Message<SendOtpRequest> {
    /**
     * @generated from field: string identifier = 1;
     */
    identifier: string;
    /**
     * @generated from field: string type = 2;
     */
    type: string;
    constructor(data?: PartialMessage<SendOtpRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.v1.SendOtpRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendOtpRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendOtpRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendOtpRequest;
    static equals(a: SendOtpRequest | PlainMessage<SendOtpRequest> | undefined, b: SendOtpRequest | PlainMessage<SendOtpRequest> | undefined): boolean;
}
/**
 * @generated from message auth.v1.SendOtpResponse
 */
export declare class SendOtpResponse extends Message<SendOtpResponse> {
    /**
     * @generated from field: bool ok = 1;
     */
    ok: boolean;
    constructor(data?: PartialMessage<SendOtpResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.v1.SendOtpResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): SendOtpResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): SendOtpResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): SendOtpResponse;
    static equals(a: SendOtpResponse | PlainMessage<SendOtpResponse> | undefined, b: SendOtpResponse | PlainMessage<SendOtpResponse> | undefined): boolean;
}
/**
 * @generated from message auth.v1.VerifyOtpRequest
 */
export declare class VerifyOtpRequest extends Message<VerifyOtpRequest> {
    /**
     * @generated from field: string identifier = 1;
     */
    identifier: string;
    /**
     * @generated from field: string type = 2;
     */
    type: string;
    /**
     * @generated from field: string code = 3;
     */
    code: string;
    constructor(data?: PartialMessage<VerifyOtpRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.v1.VerifyOtpRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyOtpRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyOtpRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyOtpRequest;
    static equals(a: VerifyOtpRequest | PlainMessage<VerifyOtpRequest> | undefined, b: VerifyOtpRequest | PlainMessage<VerifyOtpRequest> | undefined): boolean;
}
/**
 * @generated from message auth.v1.VerifyOtpResponse
 */
export declare class VerifyOtpResponse extends Message<VerifyOtpResponse> {
    /**
     * @generated from field: string access_token = 1;
     */
    accessToken: string;
    /**
     * @generated from field: string refresh_token = 2;
     */
    refreshToken: string;
    constructor(data?: PartialMessage<VerifyOtpResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.v1.VerifyOtpResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): VerifyOtpResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): VerifyOtpResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): VerifyOtpResponse;
    static equals(a: VerifyOtpResponse | PlainMessage<VerifyOtpResponse> | undefined, b: VerifyOtpResponse | PlainMessage<VerifyOtpResponse> | undefined): boolean;
}
/**
 * @generated from message auth.v1.RefreshRequest
 */
export declare class RefreshRequest extends Message<RefreshRequest> {
    /**
     * @generated from field: string refresh_token = 1;
     */
    refreshToken: string;
    constructor(data?: PartialMessage<RefreshRequest>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.v1.RefreshRequest";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshRequest;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshRequest;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshRequest;
    static equals(a: RefreshRequest | PlainMessage<RefreshRequest> | undefined, b: RefreshRequest | PlainMessage<RefreshRequest> | undefined): boolean;
}
/**
 * @generated from message auth.v1.RefreshResponse
 */
export declare class RefreshResponse extends Message<RefreshResponse> {
    /**
     * @generated from field: string access_token = 1;
     */
    accessToken: string;
    /**
     * @generated from field: string refresh_token = 2;
     */
    refreshToken: string;
    constructor(data?: PartialMessage<RefreshResponse>);
    static readonly runtime: typeof proto3;
    static readonly typeName = "auth.v1.RefreshResponse";
    static readonly fields: FieldList;
    static fromBinary(bytes: Uint8Array, options?: Partial<BinaryReadOptions>): RefreshResponse;
    static fromJson(jsonValue: JsonValue, options?: Partial<JsonReadOptions>): RefreshResponse;
    static fromJsonString(jsonString: string, options?: Partial<JsonReadOptions>): RefreshResponse;
    static equals(a: RefreshResponse | PlainMessage<RefreshResponse> | undefined, b: RefreshResponse | PlainMessage<RefreshResponse> | undefined): boolean;
}
