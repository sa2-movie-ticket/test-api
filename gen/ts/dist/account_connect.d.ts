import { Account, DeleteAccountRequest, GetAccountRequest, UpdateAccountRequest } from "./account_pb.js";
import { Empty, MethodKind } from "@bufbuild/protobuf";
/**
 * @generated from service account.v1.AccountService
 */
export declare const AccountService: {
    readonly typeName: "account.v1.AccountService";
    readonly methods: {
        /**
         * Retrieves a specific account by ID
         *
         * @generated from rpc account.v1.AccountService.GetAccount
         */
        readonly getAccount: {
            readonly name: "GetAccount";
            readonly I: typeof GetAccountRequest;
            readonly O: typeof Account;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Updates specific fields of an account using a FieldMask
         *
         * @generated from rpc account.v1.AccountService.UpdateAccount
         */
        readonly updateAccount: {
            readonly name: "UpdateAccount";
            readonly I: typeof UpdateAccountRequest;
            readonly O: typeof Account;
            readonly kind: MethodKind.Unary;
        };
        /**
         * Deletes an account and returns an empty response on success
         *
         * @generated from rpc account.v1.AccountService.DeleteAccount
         */
        readonly deleteAccount: {
            readonly name: "DeleteAccount";
            readonly I: typeof DeleteAccountRequest;
            readonly O: typeof Empty;
            readonly kind: MethodKind.Unary;
        };
    };
};
