/**
 * entry module
 */
export * from "./app/core/telephone.module";

/**
 * routing
 */
export * from "./app/core/telephone-routing.module";

/**
 * service
 */
export * from "./app/core/service/inbound/authentication.service";
export * from "./app/core/service/inbound/operator.service";
export * from "./app/core/service/outbound/hook.service";

/**
 * model
 */
export * from "./app/core/model/authenication.model";
export * from "./app/core/model/break.model";
export * from "./app/core/model/call.model";
export * from "./app/core/model/history.model";
export * from "./app/core/model/member.model";


/**
 * ngrx
 */
export * from "./app/core/ngrx/actions/phone.actions";
export * from "./app/core/ngrx/reducers/index";
export * from "./app/core/ngrx/effects/index";

/**
 * components
 */
export * from "./app/core/components/communication-records/communication-records.component";
export * from "./app/core/components/control-panel/control-panel.component";
export * from "./app/core/components/error/error.component";
export * from "./app/core/components/telephone/telephone.component";

