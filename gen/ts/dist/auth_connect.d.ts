import { RefreshRequest, RefreshResponse, SendOtpRequest, SendOtpResponse, VerifyOtpRequest, VerifyOtpResponse } from "./auth_pb.js";
import { MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service auth.v1.AuthService
 */
export declare const AuthService: {
    readonly typeName: "auth.v1.AuthService";
    readonly methods: {
        /**
         * @generated from rpc auth.v1.AuthService.SendOtp
         */
        readonly sendOtp: {
            readonly name: "SendOtp";
            readonly I: typeof SendOtpRequest;
            readonly O: typeof SendOtpResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc auth.v1.AuthService.VerifyOtp
         */
        readonly verifyOtp: {
            readonly name: "VerifyOtp";
            readonly I: typeof VerifyOtpRequest;
            readonly O: typeof VerifyOtpResponse;
            readonly kind: MethodKind.Unary;
        };
        /**
         * @generated from rpc auth.v1.AuthService.Refresh
         */
        readonly refresh: {
            readonly name: "Refresh";
            readonly I: typeof RefreshRequest;
            readonly O: typeof RefreshResponse;
            readonly kind: MethodKind.Unary;
        };
    };
};
