/* eslint-disable */
/**
 * Generated API.
 *
 * THIS CODE IS AUTOMATICALLY GENERATED.
 *
 * Generated by convex@0.9.1.
 * To regenerate, run `npx convex codegen`.
 * @module
 */

import type { ApiFromModules } from "convex/api";
import type * as createUser from "../createUser";
import type * as listAvailableCompute from "../listAvailableCompute";
import type * as login from "../login";
import type * as makeComputeAvailable from "../makeComputeAvailable";
import type * as requestSpecifiedAvailableCompute from "../requestSpecifiedAvailableCompute";

/**
 * A type describing your app's public Convex API.
 *
 * This `API` type includes information about the arguments and return
 * types of your app's query and mutation functions.
 *
 * This type should be used with type-parameterized classes like
 * `ConvexReactClient` to create app-specific types.
 */
export type API = ApiFromModules<{
  createUser: typeof createUser;
  listAvailableCompute: typeof listAvailableCompute;
  login: typeof login;
  makeComputeAvailable: typeof makeComputeAvailable;
  requestSpecifiedAvailableCompute: typeof requestSpecifiedAvailableCompute;
}>;
