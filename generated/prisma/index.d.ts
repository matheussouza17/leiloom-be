
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model ClientUser
 * 
 */
export type ClientUser = $Result.DefaultSelection<Prisma.$ClientUserPayload>
/**
 * Model Plan
 * 
 */
export type Plan = $Result.DefaultSelection<Prisma.$PlanPayload>
/**
 * Model ClientPlan
 * 
 */
export type ClientPlan = $Result.DefaultSelection<Prisma.$ClientPlanPayload>
/**
 * Model ClientPeriodPlan
 * 
 */
export type ClientPeriodPlan = $Result.DefaultSelection<Prisma.$ClientPeriodPlanPayload>
/**
 * Model ClientRequest
 * 
 */
export type ClientRequest = $Result.DefaultSelection<Prisma.$ClientRequestPayload>
/**
 * Model TermsOfUse
 * 
 */
export type TermsOfUse = $Result.DefaultSelection<Prisma.$TermsOfUsePayload>
/**
 * Model ClientTermsOfUse
 * 
 */
export type ClientTermsOfUse = $Result.DefaultSelection<Prisma.$ClientTermsOfUsePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Role: {
  BOOwner: 'BOOwner',
  BOAdmin: 'BOAdmin',
  BOFinancial: 'BOFinancial',
  BOOperator: 'BOOperator',
  ClientOwner: 'ClientOwner',
  ClientAdmin: 'ClientAdmin',
  ClientFinancial: 'ClientFinancial',
  ClientOperator: 'ClientOperator'
};

export type Role = (typeof Role)[keyof typeof Role]


export const RequestType: {
  AccountCreation: 'AccountCreation',
  RequestPassword: 'RequestPassword',
  InfoChanging: 'InfoChanging'
};

export type RequestType = (typeof RequestType)[keyof typeof RequestType]

}

export type Role = $Enums.Role

export const Role: typeof $Enums.Role

export type RequestType = $Enums.RequestType

export const RequestType: typeof $Enums.RequestType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientUser`: Exposes CRUD operations for the **ClientUser** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientUsers
    * const clientUsers = await prisma.clientUser.findMany()
    * ```
    */
  get clientUser(): Prisma.ClientUserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.plan`: Exposes CRUD operations for the **Plan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Plans
    * const plans = await prisma.plan.findMany()
    * ```
    */
  get plan(): Prisma.PlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientPlan`: Exposes CRUD operations for the **ClientPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientPlans
    * const clientPlans = await prisma.clientPlan.findMany()
    * ```
    */
  get clientPlan(): Prisma.ClientPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientPeriodPlan`: Exposes CRUD operations for the **ClientPeriodPlan** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientPeriodPlans
    * const clientPeriodPlans = await prisma.clientPeriodPlan.findMany()
    * ```
    */
  get clientPeriodPlan(): Prisma.ClientPeriodPlanDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientRequest`: Exposes CRUD operations for the **ClientRequest** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientRequests
    * const clientRequests = await prisma.clientRequest.findMany()
    * ```
    */
  get clientRequest(): Prisma.ClientRequestDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.termsOfUse`: Exposes CRUD operations for the **TermsOfUse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TermsOfUses
    * const termsOfUses = await prisma.termsOfUse.findMany()
    * ```
    */
  get termsOfUse(): Prisma.TermsOfUseDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.clientTermsOfUse`: Exposes CRUD operations for the **ClientTermsOfUse** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClientTermsOfUses
    * const clientTermsOfUses = await prisma.clientTermsOfUse.findMany()
    * ```
    */
  get clientTermsOfUse(): Prisma.ClientTermsOfUseDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.6.0
   * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Client: 'Client',
    ClientUser: 'ClientUser',
    Plan: 'Plan',
    ClientPlan: 'ClientPlan',
    ClientPeriodPlan: 'ClientPeriodPlan',
    ClientRequest: 'ClientRequest',
    TermsOfUse: 'TermsOfUse',
    ClientTermsOfUse: 'ClientTermsOfUse'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "client" | "clientUser" | "plan" | "clientPlan" | "clientPeriodPlan" | "clientRequest" | "termsOfUse" | "clientTermsOfUse"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      ClientUser: {
        payload: Prisma.$ClientUserPayload<ExtArgs>
        fields: Prisma.ClientUserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientUserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientUserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload>
          }
          findFirst: {
            args: Prisma.ClientUserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientUserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload>
          }
          findMany: {
            args: Prisma.ClientUserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload>[]
          }
          create: {
            args: Prisma.ClientUserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload>
          }
          createMany: {
            args: Prisma.ClientUserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientUserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload>[]
          }
          delete: {
            args: Prisma.ClientUserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload>
          }
          update: {
            args: Prisma.ClientUserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload>
          }
          deleteMany: {
            args: Prisma.ClientUserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload>[]
          }
          upsert: {
            args: Prisma.ClientUserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientUserPayload>
          }
          aggregate: {
            args: Prisma.ClientUserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientUser>
          }
          groupBy: {
            args: Prisma.ClientUserGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientUserGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientUserCountArgs<ExtArgs>
            result: $Utils.Optional<ClientUserCountAggregateOutputType> | number
          }
        }
      }
      Plan: {
        payload: Prisma.$PlanPayload<ExtArgs>
        fields: Prisma.PlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findFirst: {
            args: Prisma.PlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          findMany: {
            args: Prisma.PlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          create: {
            args: Prisma.PlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          createMany: {
            args: Prisma.PlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          delete: {
            args: Prisma.PlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          update: {
            args: Prisma.PlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          deleteMany: {
            args: Prisma.PlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>[]
          }
          upsert: {
            args: Prisma.PlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PlanPayload>
          }
          aggregate: {
            args: Prisma.PlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePlan>
          }
          groupBy: {
            args: Prisma.PlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<PlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.PlanCountArgs<ExtArgs>
            result: $Utils.Optional<PlanCountAggregateOutputType> | number
          }
        }
      }
      ClientPlan: {
        payload: Prisma.$ClientPlanPayload<ExtArgs>
        fields: Prisma.ClientPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload>
          }
          findFirst: {
            args: Prisma.ClientPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload>
          }
          findMany: {
            args: Prisma.ClientPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload>[]
          }
          create: {
            args: Prisma.ClientPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload>
          }
          createMany: {
            args: Prisma.ClientPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload>[]
          }
          delete: {
            args: Prisma.ClientPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload>
          }
          update: {
            args: Prisma.ClientPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload>
          }
          deleteMany: {
            args: Prisma.ClientPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload>[]
          }
          upsert: {
            args: Prisma.ClientPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPlanPayload>
          }
          aggregate: {
            args: Prisma.ClientPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientPlan>
          }
          groupBy: {
            args: Prisma.ClientPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientPlanCountArgs<ExtArgs>
            result: $Utils.Optional<ClientPlanCountAggregateOutputType> | number
          }
        }
      }
      ClientPeriodPlan: {
        payload: Prisma.$ClientPeriodPlanPayload<ExtArgs>
        fields: Prisma.ClientPeriodPlanFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientPeriodPlanFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientPeriodPlanFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload>
          }
          findFirst: {
            args: Prisma.ClientPeriodPlanFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientPeriodPlanFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload>
          }
          findMany: {
            args: Prisma.ClientPeriodPlanFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload>[]
          }
          create: {
            args: Prisma.ClientPeriodPlanCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload>
          }
          createMany: {
            args: Prisma.ClientPeriodPlanCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientPeriodPlanCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload>[]
          }
          delete: {
            args: Prisma.ClientPeriodPlanDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload>
          }
          update: {
            args: Prisma.ClientPeriodPlanUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload>
          }
          deleteMany: {
            args: Prisma.ClientPeriodPlanDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientPeriodPlanUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientPeriodPlanUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload>[]
          }
          upsert: {
            args: Prisma.ClientPeriodPlanUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPeriodPlanPayload>
          }
          aggregate: {
            args: Prisma.ClientPeriodPlanAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientPeriodPlan>
          }
          groupBy: {
            args: Prisma.ClientPeriodPlanGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientPeriodPlanGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientPeriodPlanCountArgs<ExtArgs>
            result: $Utils.Optional<ClientPeriodPlanCountAggregateOutputType> | number
          }
        }
      }
      ClientRequest: {
        payload: Prisma.$ClientRequestPayload<ExtArgs>
        fields: Prisma.ClientRequestFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientRequestFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientRequestFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          findFirst: {
            args: Prisma.ClientRequestFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientRequestFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          findMany: {
            args: Prisma.ClientRequestFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>[]
          }
          create: {
            args: Prisma.ClientRequestCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          createMany: {
            args: Prisma.ClientRequestCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientRequestCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>[]
          }
          delete: {
            args: Prisma.ClientRequestDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          update: {
            args: Prisma.ClientRequestUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          deleteMany: {
            args: Prisma.ClientRequestDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientRequestUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientRequestUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>[]
          }
          upsert: {
            args: Prisma.ClientRequestUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientRequestPayload>
          }
          aggregate: {
            args: Prisma.ClientRequestAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientRequest>
          }
          groupBy: {
            args: Prisma.ClientRequestGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientRequestGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientRequestCountArgs<ExtArgs>
            result: $Utils.Optional<ClientRequestCountAggregateOutputType> | number
          }
        }
      }
      TermsOfUse: {
        payload: Prisma.$TermsOfUsePayload<ExtArgs>
        fields: Prisma.TermsOfUseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TermsOfUseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TermsOfUseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload>
          }
          findFirst: {
            args: Prisma.TermsOfUseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TermsOfUseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload>
          }
          findMany: {
            args: Prisma.TermsOfUseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload>[]
          }
          create: {
            args: Prisma.TermsOfUseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload>
          }
          createMany: {
            args: Prisma.TermsOfUseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TermsOfUseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload>[]
          }
          delete: {
            args: Prisma.TermsOfUseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload>
          }
          update: {
            args: Prisma.TermsOfUseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload>
          }
          deleteMany: {
            args: Prisma.TermsOfUseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TermsOfUseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TermsOfUseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload>[]
          }
          upsert: {
            args: Prisma.TermsOfUseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TermsOfUsePayload>
          }
          aggregate: {
            args: Prisma.TermsOfUseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTermsOfUse>
          }
          groupBy: {
            args: Prisma.TermsOfUseGroupByArgs<ExtArgs>
            result: $Utils.Optional<TermsOfUseGroupByOutputType>[]
          }
          count: {
            args: Prisma.TermsOfUseCountArgs<ExtArgs>
            result: $Utils.Optional<TermsOfUseCountAggregateOutputType> | number
          }
        }
      }
      ClientTermsOfUse: {
        payload: Prisma.$ClientTermsOfUsePayload<ExtArgs>
        fields: Prisma.ClientTermsOfUseFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientTermsOfUseFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientTermsOfUseFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload>
          }
          findFirst: {
            args: Prisma.ClientTermsOfUseFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientTermsOfUseFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload>
          }
          findMany: {
            args: Prisma.ClientTermsOfUseFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload>[]
          }
          create: {
            args: Prisma.ClientTermsOfUseCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload>
          }
          createMany: {
            args: Prisma.ClientTermsOfUseCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientTermsOfUseCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload>[]
          }
          delete: {
            args: Prisma.ClientTermsOfUseDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload>
          }
          update: {
            args: Prisma.ClientTermsOfUseUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload>
          }
          deleteMany: {
            args: Prisma.ClientTermsOfUseDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientTermsOfUseUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientTermsOfUseUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload>[]
          }
          upsert: {
            args: Prisma.ClientTermsOfUseUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientTermsOfUsePayload>
          }
          aggregate: {
            args: Prisma.ClientTermsOfUseAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClientTermsOfUse>
          }
          groupBy: {
            args: Prisma.ClientTermsOfUseGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientTermsOfUseGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientTermsOfUseCountArgs<ExtArgs>
            result: $Utils.Optional<ClientTermsOfUseCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    client?: ClientOmit
    clientUser?: ClientUserOmit
    plan?: PlanOmit
    clientPlan?: ClientPlanOmit
    clientPeriodPlan?: ClientPeriodPlanOmit
    clientRequest?: ClientRequestOmit
    termsOfUse?: TermsOfUseOmit
    clientTermsOfUse?: ClientTermsOfUseOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    clientPlans: number
    clientUsers: number
    requests: number
    termsAccepted: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientPlans?: boolean | ClientCountOutputTypeCountClientPlansArgs
    clientUsers?: boolean | ClientCountOutputTypeCountClientUsersArgs
    requests?: boolean | ClientCountOutputTypeCountRequestsArgs
    termsAccepted?: boolean | ClientCountOutputTypeCountTermsAcceptedArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountClientPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientPlanWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountClientUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientUserWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientRequestWhereInput
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountTermsAcceptedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientTermsOfUseWhereInput
  }


  /**
   * Count Type ClientUserCountOutputType
   */

  export type ClientUserCountOutputType = {
    requests: number
  }

  export type ClientUserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    requests?: boolean | ClientUserCountOutputTypeCountRequestsArgs
  }

  // Custom InputTypes
  /**
   * ClientUserCountOutputType without action
   */
  export type ClientUserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUserCountOutputType
     */
    select?: ClientUserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientUserCountOutputType without action
   */
  export type ClientUserCountOutputTypeCountRequestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientRequestWhereInput
  }


  /**
   * Count Type PlanCountOutputType
   */

  export type PlanCountOutputType = {
    clientPlans: number
  }

  export type PlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientPlans?: boolean | PlanCountOutputTypeCountClientPlansArgs
  }

  // Custom InputTypes
  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PlanCountOutputType
     */
    select?: PlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * PlanCountOutputType without action
   */
  export type PlanCountOutputTypeCountClientPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientPlanWhereInput
  }


  /**
   * Count Type ClientPlanCountOutputType
   */

  export type ClientPlanCountOutputType = {
    periods: number
  }

  export type ClientPlanCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    periods?: boolean | ClientPlanCountOutputTypeCountPeriodsArgs
  }

  // Custom InputTypes
  /**
   * ClientPlanCountOutputType without action
   */
  export type ClientPlanCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlanCountOutputType
     */
    select?: ClientPlanCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientPlanCountOutputType without action
   */
  export type ClientPlanCountOutputTypeCountPeriodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientPeriodPlanWhereInput
  }


  /**
   * Count Type TermsOfUseCountOutputType
   */

  export type TermsOfUseCountOutputType = {
    acceptedBy: number
  }

  export type TermsOfUseCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acceptedBy?: boolean | TermsOfUseCountOutputTypeCountAcceptedByArgs
  }

  // Custom InputTypes
  /**
   * TermsOfUseCountOutputType without action
   */
  export type TermsOfUseCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUseCountOutputType
     */
    select?: TermsOfUseCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TermsOfUseCountOutputType without action
   */
  export type TermsOfUseCountOutputTypeCountAcceptedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientTermsOfUseWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdOn: Date | null
    updatedOn: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    role: $Enums.Role | null
    createdOn: Date | null
    updatedOn: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    role: number
    createdOn: number
    updatedOn: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdOn?: true
    updatedOn?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdOn?: true
    updatedOn?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    role?: true
    createdOn?: true
    updatedOn?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdOn: Date
    updatedOn: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdOn?: boolean
    updatedOn?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdOn?: boolean
    updatedOn?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdOn?: boolean
    updatedOn?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    role?: boolean
    createdOn?: boolean
    updatedOn?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "role" | "createdOn" | "updatedOn", ExtArgs["result"]["user"]>

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      role: $Enums.Role
      createdOn: Date
      updatedOn: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'Role'>
    readonly createdOn: FieldRef<"User", 'DateTime'>
    readonly updatedOn: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientMinAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdOn: Date | null
    updatedOn: Date | null
  }

  export type ClientMaxAggregateOutputType = {
    id: string | null
    name: string | null
    address: string | null
    createdOn: Date | null
    updatedOn: Date | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    address: number
    createdOn: number
    updatedOn: number
    _all: number
  }


  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdOn?: true
    updatedOn?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdOn?: true
    updatedOn?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    address?: true
    createdOn?: true
    updatedOn?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: string
    name: string
    address: string
    createdOn: Date
    updatedOn: Date
    _count: ClientCountAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdOn?: boolean
    updatedOn?: boolean
    clientPlans?: boolean | Client$clientPlansArgs<ExtArgs>
    clientUsers?: boolean | Client$clientUsersArgs<ExtArgs>
    requests?: boolean | Client$requestsArgs<ExtArgs>
    termsAccepted?: boolean | Client$termsAcceptedArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdOn?: boolean
    updatedOn?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    address?: boolean
    createdOn?: boolean
    updatedOn?: boolean
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    address?: boolean
    createdOn?: boolean
    updatedOn?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "address" | "createdOn" | "updatedOn", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientPlans?: boolean | Client$clientPlansArgs<ExtArgs>
    clientUsers?: boolean | Client$clientUsersArgs<ExtArgs>
    requests?: boolean | Client$requestsArgs<ExtArgs>
    termsAccepted?: boolean | Client$termsAcceptedArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      clientPlans: Prisma.$ClientPlanPayload<ExtArgs>[]
      clientUsers: Prisma.$ClientUserPayload<ExtArgs>[]
      requests: Prisma.$ClientRequestPayload<ExtArgs>[]
      termsAccepted: Prisma.$ClientTermsOfUsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      address: string
      createdOn: Date
      updatedOn: Date
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientPlans<T extends Client$clientPlansArgs<ExtArgs> = {}>(args?: Subset<T, Client$clientPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    clientUsers<T extends Client$clientUsersArgs<ExtArgs> = {}>(args?: Subset<T, Client$clientUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    requests<T extends Client$requestsArgs<ExtArgs> = {}>(args?: Subset<T, Client$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    termsAccepted<T extends Client$termsAcceptedArgs<ExtArgs> = {}>(args?: Subset<T, Client$termsAcceptedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'String'>
    readonly name: FieldRef<"Client", 'String'>
    readonly address: FieldRef<"Client", 'String'>
    readonly createdOn: FieldRef<"Client", 'DateTime'>
    readonly updatedOn: FieldRef<"Client", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.clientPlans
   */
  export type Client$clientPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    where?: ClientPlanWhereInput
    orderBy?: ClientPlanOrderByWithRelationInput | ClientPlanOrderByWithRelationInput[]
    cursor?: ClientPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientPlanScalarFieldEnum | ClientPlanScalarFieldEnum[]
  }

  /**
   * Client.clientUsers
   */
  export type Client$clientUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    where?: ClientUserWhereInput
    orderBy?: ClientUserOrderByWithRelationInput | ClientUserOrderByWithRelationInput[]
    cursor?: ClientUserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientUserScalarFieldEnum | ClientUserScalarFieldEnum[]
  }

  /**
   * Client.requests
   */
  export type Client$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    where?: ClientRequestWhereInput
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    cursor?: ClientRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * Client.termsAccepted
   */
  export type Client$termsAcceptedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    where?: ClientTermsOfUseWhereInput
    orderBy?: ClientTermsOfUseOrderByWithRelationInput | ClientTermsOfUseOrderByWithRelationInput[]
    cursor?: ClientTermsOfUseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientTermsOfUseScalarFieldEnum | ClientTermsOfUseScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model ClientUser
   */

  export type AggregateClientUser = {
    _count: ClientUserCountAggregateOutputType | null
    _avg: ClientUserAvgAggregateOutputType | null
    _sum: ClientUserSumAggregateOutputType | null
    _min: ClientUserMinAggregateOutputType | null
    _max: ClientUserMaxAggregateOutputType | null
  }

  export type ClientUserAvgAggregateOutputType = {
    cpfCnpj: number | null
  }

  export type ClientUserSumAggregateOutputType = {
    cpfCnpj: bigint | null
  }

  export type ClientUserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpfCnpj: bigint | null
    phone: string | null
    role: $Enums.Role | null
    clientId: string | null
    createdOn: Date | null
    updatedOn: Date | null
  }

  export type ClientUserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    cpfCnpj: bigint | null
    phone: string | null
    role: $Enums.Role | null
    clientId: string | null
    createdOn: Date | null
    updatedOn: Date | null
  }

  export type ClientUserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    cpfCnpj: number
    phone: number
    role: number
    clientId: number
    createdOn: number
    updatedOn: number
    _all: number
  }


  export type ClientUserAvgAggregateInputType = {
    cpfCnpj?: true
  }

  export type ClientUserSumAggregateInputType = {
    cpfCnpj?: true
  }

  export type ClientUserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpfCnpj?: true
    phone?: true
    role?: true
    clientId?: true
    createdOn?: true
    updatedOn?: true
  }

  export type ClientUserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpfCnpj?: true
    phone?: true
    role?: true
    clientId?: true
    createdOn?: true
    updatedOn?: true
  }

  export type ClientUserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    cpfCnpj?: true
    phone?: true
    role?: true
    clientId?: true
    createdOn?: true
    updatedOn?: true
    _all?: true
  }

  export type ClientUserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientUser to aggregate.
     */
    where?: ClientUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientUsers to fetch.
     */
    orderBy?: ClientUserOrderByWithRelationInput | ClientUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientUsers
    **/
    _count?: true | ClientUserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientUserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientUserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientUserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientUserMaxAggregateInputType
  }

  export type GetClientUserAggregateType<T extends ClientUserAggregateArgs> = {
        [P in keyof T & keyof AggregateClientUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientUser[P]>
      : GetScalarType<T[P], AggregateClientUser[P]>
  }




  export type ClientUserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientUserWhereInput
    orderBy?: ClientUserOrderByWithAggregationInput | ClientUserOrderByWithAggregationInput[]
    by: ClientUserScalarFieldEnum[] | ClientUserScalarFieldEnum
    having?: ClientUserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientUserCountAggregateInputType | true
    _avg?: ClientUserAvgAggregateInputType
    _sum?: ClientUserSumAggregateInputType
    _min?: ClientUserMinAggregateInputType
    _max?: ClientUserMaxAggregateInputType
  }

  export type ClientUserGroupByOutputType = {
    id: string
    name: string
    email: string
    password: string
    cpfCnpj: bigint
    phone: string
    role: $Enums.Role
    clientId: string
    createdOn: Date
    updatedOn: Date
    _count: ClientUserCountAggregateOutputType | null
    _avg: ClientUserAvgAggregateOutputType | null
    _sum: ClientUserSumAggregateOutputType | null
    _min: ClientUserMinAggregateOutputType | null
    _max: ClientUserMaxAggregateOutputType | null
  }

  type GetClientUserGroupByPayload<T extends ClientUserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientUserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientUserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientUserGroupByOutputType[P]>
            : GetScalarType<T[P], ClientUserGroupByOutputType[P]>
        }
      >
    >


  export type ClientUserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpfCnpj?: boolean
    phone?: boolean
    role?: boolean
    clientId?: boolean
    createdOn?: boolean
    updatedOn?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    requests?: boolean | ClientUser$requestsArgs<ExtArgs>
    _count?: boolean | ClientUserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientUser"]>

  export type ClientUserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpfCnpj?: boolean
    phone?: boolean
    role?: boolean
    clientId?: boolean
    createdOn?: boolean
    updatedOn?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientUser"]>

  export type ClientUserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpfCnpj?: boolean
    phone?: boolean
    role?: boolean
    clientId?: boolean
    createdOn?: boolean
    updatedOn?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientUser"]>

  export type ClientUserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    cpfCnpj?: boolean
    phone?: boolean
    role?: boolean
    clientId?: boolean
    createdOn?: boolean
    updatedOn?: boolean
  }

  export type ClientUserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "cpfCnpj" | "phone" | "role" | "clientId" | "createdOn" | "updatedOn", ExtArgs["result"]["clientUser"]>
  export type ClientUserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    requests?: boolean | ClientUser$requestsArgs<ExtArgs>
    _count?: boolean | ClientUserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientUserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }
  export type ClientUserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
  }

  export type $ClientUserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientUser"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      requests: Prisma.$ClientRequestPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      cpfCnpj: bigint
      phone: string
      role: $Enums.Role
      clientId: string
      createdOn: Date
      updatedOn: Date
    }, ExtArgs["result"]["clientUser"]>
    composites: {}
  }

  type ClientUserGetPayload<S extends boolean | null | undefined | ClientUserDefaultArgs> = $Result.GetResult<Prisma.$ClientUserPayload, S>

  type ClientUserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientUserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientUserCountAggregateInputType | true
    }

  export interface ClientUserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientUser'], meta: { name: 'ClientUser' } }
    /**
     * Find zero or one ClientUser that matches the filter.
     * @param {ClientUserFindUniqueArgs} args - Arguments to find a ClientUser
     * @example
     * // Get one ClientUser
     * const clientUser = await prisma.clientUser.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientUserFindUniqueArgs>(args: SelectSubset<T, ClientUserFindUniqueArgs<ExtArgs>>): Prisma__ClientUserClient<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientUser that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientUserFindUniqueOrThrowArgs} args - Arguments to find a ClientUser
     * @example
     * // Get one ClientUser
     * const clientUser = await prisma.clientUser.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientUserFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientUserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientUserClient<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientUser that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUserFindFirstArgs} args - Arguments to find a ClientUser
     * @example
     * // Get one ClientUser
     * const clientUser = await prisma.clientUser.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientUserFindFirstArgs>(args?: SelectSubset<T, ClientUserFindFirstArgs<ExtArgs>>): Prisma__ClientUserClient<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientUser that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUserFindFirstOrThrowArgs} args - Arguments to find a ClientUser
     * @example
     * // Get one ClientUser
     * const clientUser = await prisma.clientUser.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientUserFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientUserFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientUserClient<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientUsers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientUsers
     * const clientUsers = await prisma.clientUser.findMany()
     * 
     * // Get first 10 ClientUsers
     * const clientUsers = await prisma.clientUser.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientUserWithIdOnly = await prisma.clientUser.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientUserFindManyArgs>(args?: SelectSubset<T, ClientUserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientUser.
     * @param {ClientUserCreateArgs} args - Arguments to create a ClientUser.
     * @example
     * // Create one ClientUser
     * const ClientUser = await prisma.clientUser.create({
     *   data: {
     *     // ... data to create a ClientUser
     *   }
     * })
     * 
     */
    create<T extends ClientUserCreateArgs>(args: SelectSubset<T, ClientUserCreateArgs<ExtArgs>>): Prisma__ClientUserClient<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientUsers.
     * @param {ClientUserCreateManyArgs} args - Arguments to create many ClientUsers.
     * @example
     * // Create many ClientUsers
     * const clientUser = await prisma.clientUser.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientUserCreateManyArgs>(args?: SelectSubset<T, ClientUserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientUsers and returns the data saved in the database.
     * @param {ClientUserCreateManyAndReturnArgs} args - Arguments to create many ClientUsers.
     * @example
     * // Create many ClientUsers
     * const clientUser = await prisma.clientUser.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientUsers and only return the `id`
     * const clientUserWithIdOnly = await prisma.clientUser.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientUserCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientUserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientUser.
     * @param {ClientUserDeleteArgs} args - Arguments to delete one ClientUser.
     * @example
     * // Delete one ClientUser
     * const ClientUser = await prisma.clientUser.delete({
     *   where: {
     *     // ... filter to delete one ClientUser
     *   }
     * })
     * 
     */
    delete<T extends ClientUserDeleteArgs>(args: SelectSubset<T, ClientUserDeleteArgs<ExtArgs>>): Prisma__ClientUserClient<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientUser.
     * @param {ClientUserUpdateArgs} args - Arguments to update one ClientUser.
     * @example
     * // Update one ClientUser
     * const clientUser = await prisma.clientUser.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUserUpdateArgs>(args: SelectSubset<T, ClientUserUpdateArgs<ExtArgs>>): Prisma__ClientUserClient<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientUsers.
     * @param {ClientUserDeleteManyArgs} args - Arguments to filter ClientUsers to delete.
     * @example
     * // Delete a few ClientUsers
     * const { count } = await prisma.clientUser.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientUserDeleteManyArgs>(args?: SelectSubset<T, ClientUserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientUsers
     * const clientUser = await prisma.clientUser.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUserUpdateManyArgs>(args: SelectSubset<T, ClientUserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientUsers and returns the data updated in the database.
     * @param {ClientUserUpdateManyAndReturnArgs} args - Arguments to update many ClientUsers.
     * @example
     * // Update many ClientUsers
     * const clientUser = await prisma.clientUser.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientUsers and only return the `id`
     * const clientUserWithIdOnly = await prisma.clientUser.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientUserUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientUser.
     * @param {ClientUserUpsertArgs} args - Arguments to update or create a ClientUser.
     * @example
     * // Update or create a ClientUser
     * const clientUser = await prisma.clientUser.upsert({
     *   create: {
     *     // ... data to create a ClientUser
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientUser we want to update
     *   }
     * })
     */
    upsert<T extends ClientUserUpsertArgs>(args: SelectSubset<T, ClientUserUpsertArgs<ExtArgs>>): Prisma__ClientUserClient<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientUsers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUserCountArgs} args - Arguments to filter ClientUsers to count.
     * @example
     * // Count the number of ClientUsers
     * const count = await prisma.clientUser.count({
     *   where: {
     *     // ... the filter for the ClientUsers we want to count
     *   }
     * })
    **/
    count<T extends ClientUserCountArgs>(
      args?: Subset<T, ClientUserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientUserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientUserAggregateArgs>(args: Subset<T, ClientUserAggregateArgs>): Prisma.PrismaPromise<GetClientUserAggregateType<T>>

    /**
     * Group by ClientUser.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientUserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientUserGroupByArgs['orderBy'] }
        : { orderBy?: ClientUserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientUserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientUser model
   */
  readonly fields: ClientUserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientUser.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientUserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    requests<T extends ClientUser$requestsArgs<ExtArgs> = {}>(args?: Subset<T, ClientUser$requestsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientUser model
   */
  interface ClientUserFieldRefs {
    readonly id: FieldRef<"ClientUser", 'String'>
    readonly name: FieldRef<"ClientUser", 'String'>
    readonly email: FieldRef<"ClientUser", 'String'>
    readonly password: FieldRef<"ClientUser", 'String'>
    readonly cpfCnpj: FieldRef<"ClientUser", 'BigInt'>
    readonly phone: FieldRef<"ClientUser", 'String'>
    readonly role: FieldRef<"ClientUser", 'Role'>
    readonly clientId: FieldRef<"ClientUser", 'String'>
    readonly createdOn: FieldRef<"ClientUser", 'DateTime'>
    readonly updatedOn: FieldRef<"ClientUser", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientUser findUnique
   */
  export type ClientUserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    /**
     * Filter, which ClientUser to fetch.
     */
    where: ClientUserWhereUniqueInput
  }

  /**
   * ClientUser findUniqueOrThrow
   */
  export type ClientUserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    /**
     * Filter, which ClientUser to fetch.
     */
    where: ClientUserWhereUniqueInput
  }

  /**
   * ClientUser findFirst
   */
  export type ClientUserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    /**
     * Filter, which ClientUser to fetch.
     */
    where?: ClientUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientUsers to fetch.
     */
    orderBy?: ClientUserOrderByWithRelationInput | ClientUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientUsers.
     */
    cursor?: ClientUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientUsers.
     */
    distinct?: ClientUserScalarFieldEnum | ClientUserScalarFieldEnum[]
  }

  /**
   * ClientUser findFirstOrThrow
   */
  export type ClientUserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    /**
     * Filter, which ClientUser to fetch.
     */
    where?: ClientUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientUsers to fetch.
     */
    orderBy?: ClientUserOrderByWithRelationInput | ClientUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientUsers.
     */
    cursor?: ClientUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientUsers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientUsers.
     */
    distinct?: ClientUserScalarFieldEnum | ClientUserScalarFieldEnum[]
  }

  /**
   * ClientUser findMany
   */
  export type ClientUserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    /**
     * Filter, which ClientUsers to fetch.
     */
    where?: ClientUserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientUsers to fetch.
     */
    orderBy?: ClientUserOrderByWithRelationInput | ClientUserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientUsers.
     */
    cursor?: ClientUserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientUsers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientUsers.
     */
    skip?: number
    distinct?: ClientUserScalarFieldEnum | ClientUserScalarFieldEnum[]
  }

  /**
   * ClientUser create
   */
  export type ClientUserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientUser.
     */
    data: XOR<ClientUserCreateInput, ClientUserUncheckedCreateInput>
  }

  /**
   * ClientUser createMany
   */
  export type ClientUserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientUsers.
     */
    data: ClientUserCreateManyInput | ClientUserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientUser createManyAndReturn
   */
  export type ClientUserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * The data used to create many ClientUsers.
     */
    data: ClientUserCreateManyInput | ClientUserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientUser update
   */
  export type ClientUserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientUser.
     */
    data: XOR<ClientUserUpdateInput, ClientUserUncheckedUpdateInput>
    /**
     * Choose, which ClientUser to update.
     */
    where: ClientUserWhereUniqueInput
  }

  /**
   * ClientUser updateMany
   */
  export type ClientUserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientUsers.
     */
    data: XOR<ClientUserUpdateManyMutationInput, ClientUserUncheckedUpdateManyInput>
    /**
     * Filter which ClientUsers to update
     */
    where?: ClientUserWhereInput
    /**
     * Limit how many ClientUsers to update.
     */
    limit?: number
  }

  /**
   * ClientUser updateManyAndReturn
   */
  export type ClientUserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * The data used to update ClientUsers.
     */
    data: XOR<ClientUserUpdateManyMutationInput, ClientUserUncheckedUpdateManyInput>
    /**
     * Filter which ClientUsers to update
     */
    where?: ClientUserWhereInput
    /**
     * Limit how many ClientUsers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientUser upsert
   */
  export type ClientUserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientUser to update in case it exists.
     */
    where: ClientUserWhereUniqueInput
    /**
     * In case the ClientUser found by the `where` argument doesn't exist, create a new ClientUser with this data.
     */
    create: XOR<ClientUserCreateInput, ClientUserUncheckedCreateInput>
    /**
     * In case the ClientUser was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUserUpdateInput, ClientUserUncheckedUpdateInput>
  }

  /**
   * ClientUser delete
   */
  export type ClientUserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
    /**
     * Filter which ClientUser to delete.
     */
    where: ClientUserWhereUniqueInput
  }

  /**
   * ClientUser deleteMany
   */
  export type ClientUserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientUsers to delete
     */
    where?: ClientUserWhereInput
    /**
     * Limit how many ClientUsers to delete.
     */
    limit?: number
  }

  /**
   * ClientUser.requests
   */
  export type ClientUser$requestsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    where?: ClientRequestWhereInput
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    cursor?: ClientRequestWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * ClientUser without action
   */
  export type ClientUserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientUser
     */
    select?: ClientUserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientUser
     */
    omit?: ClientUserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientUserInclude<ExtArgs> | null
  }


  /**
   * Model Plan
   */

  export type AggregatePlan = {
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  export type PlanAvgAggregateOutputType = {
    price: Decimal | null
    durationDays: number | null
  }

  export type PlanSumAggregateOutputType = {
    price: Decimal | null
    durationDays: number | null
  }

  export type PlanMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    durationDays: number | null
    isTrial: boolean | null
    createdOn: Date | null
  }

  export type PlanMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    price: Decimal | null
    durationDays: number | null
    isTrial: boolean | null
    createdOn: Date | null
  }

  export type PlanCountAggregateOutputType = {
    id: number
    name: number
    description: number
    price: number
    durationDays: number
    isTrial: number
    createdOn: number
    _all: number
  }


  export type PlanAvgAggregateInputType = {
    price?: true
    durationDays?: true
  }

  export type PlanSumAggregateInputType = {
    price?: true
    durationDays?: true
  }

  export type PlanMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    durationDays?: true
    isTrial?: true
    createdOn?: true
  }

  export type PlanMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    durationDays?: true
    isTrial?: true
    createdOn?: true
  }

  export type PlanCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    price?: true
    durationDays?: true
    isTrial?: true
    createdOn?: true
    _all?: true
  }

  export type PlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plan to aggregate.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Plans
    **/
    _count?: true | PlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlanAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlanSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlanMaxAggregateInputType
  }

  export type GetPlanAggregateType<T extends PlanAggregateArgs> = {
        [P in keyof T & keyof AggregatePlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlan[P]>
      : GetScalarType<T[P], AggregatePlan[P]>
  }




  export type PlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PlanWhereInput
    orderBy?: PlanOrderByWithAggregationInput | PlanOrderByWithAggregationInput[]
    by: PlanScalarFieldEnum[] | PlanScalarFieldEnum
    having?: PlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlanCountAggregateInputType | true
    _avg?: PlanAvgAggregateInputType
    _sum?: PlanSumAggregateInputType
    _min?: PlanMinAggregateInputType
    _max?: PlanMaxAggregateInputType
  }

  export type PlanGroupByOutputType = {
    id: string
    name: string
    description: string | null
    price: Decimal
    durationDays: number
    isTrial: boolean
    createdOn: Date
    _count: PlanCountAggregateOutputType | null
    _avg: PlanAvgAggregateOutputType | null
    _sum: PlanSumAggregateOutputType | null
    _min: PlanMinAggregateOutputType | null
    _max: PlanMaxAggregateOutputType | null
  }

  type GetPlanGroupByPayload<T extends PlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlanGroupByOutputType[P]>
            : GetScalarType<T[P], PlanGroupByOutputType[P]>
        }
      >
    >


  export type PlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    durationDays?: boolean
    isTrial?: boolean
    createdOn?: boolean
    clientPlans?: boolean | Plan$clientPlansArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    durationDays?: boolean
    isTrial?: boolean
    createdOn?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    durationDays?: boolean
    isTrial?: boolean
    createdOn?: boolean
  }, ExtArgs["result"]["plan"]>

  export type PlanSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    price?: boolean
    durationDays?: boolean
    isTrial?: boolean
    createdOn?: boolean
  }

  export type PlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "price" | "durationDays" | "isTrial" | "createdOn", ExtArgs["result"]["plan"]>
  export type PlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientPlans?: boolean | Plan$clientPlansArgs<ExtArgs>
    _count?: boolean | PlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type PlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type PlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $PlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Plan"
    objects: {
      clientPlans: Prisma.$ClientPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      price: Prisma.Decimal
      durationDays: number
      isTrial: boolean
      createdOn: Date
    }, ExtArgs["result"]["plan"]>
    composites: {}
  }

  type PlanGetPayload<S extends boolean | null | undefined | PlanDefaultArgs> = $Result.GetResult<Prisma.$PlanPayload, S>

  type PlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PlanCountAggregateInputType | true
    }

  export interface PlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Plan'], meta: { name: 'Plan' } }
    /**
     * Find zero or one Plan that matches the filter.
     * @param {PlanFindUniqueArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PlanFindUniqueArgs>(args: SelectSubset<T, PlanFindUniqueArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Plan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PlanFindUniqueOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PlanFindUniqueOrThrowArgs>(args: SelectSubset<T, PlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PlanFindFirstArgs>(args?: SelectSubset<T, PlanFindFirstArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Plan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindFirstOrThrowArgs} args - Arguments to find a Plan
     * @example
     * // Get one Plan
     * const plan = await prisma.plan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PlanFindFirstOrThrowArgs>(args?: SelectSubset<T, PlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Plans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Plans
     * const plans = await prisma.plan.findMany()
     * 
     * // Get first 10 Plans
     * const plans = await prisma.plan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const planWithIdOnly = await prisma.plan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PlanFindManyArgs>(args?: SelectSubset<T, PlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Plan.
     * @param {PlanCreateArgs} args - Arguments to create a Plan.
     * @example
     * // Create one Plan
     * const Plan = await prisma.plan.create({
     *   data: {
     *     // ... data to create a Plan
     *   }
     * })
     * 
     */
    create<T extends PlanCreateArgs>(args: SelectSubset<T, PlanCreateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Plans.
     * @param {PlanCreateManyArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PlanCreateManyArgs>(args?: SelectSubset<T, PlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Plans and returns the data saved in the database.
     * @param {PlanCreateManyAndReturnArgs} args - Arguments to create many Plans.
     * @example
     * // Create many Plans
     * const plan = await prisma.plan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PlanCreateManyAndReturnArgs>(args?: SelectSubset<T, PlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Plan.
     * @param {PlanDeleteArgs} args - Arguments to delete one Plan.
     * @example
     * // Delete one Plan
     * const Plan = await prisma.plan.delete({
     *   where: {
     *     // ... filter to delete one Plan
     *   }
     * })
     * 
     */
    delete<T extends PlanDeleteArgs>(args: SelectSubset<T, PlanDeleteArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Plan.
     * @param {PlanUpdateArgs} args - Arguments to update one Plan.
     * @example
     * // Update one Plan
     * const plan = await prisma.plan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PlanUpdateArgs>(args: SelectSubset<T, PlanUpdateArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Plans.
     * @param {PlanDeleteManyArgs} args - Arguments to filter Plans to delete.
     * @example
     * // Delete a few Plans
     * const { count } = await prisma.plan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PlanDeleteManyArgs>(args?: SelectSubset<T, PlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PlanUpdateManyArgs>(args: SelectSubset<T, PlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Plans and returns the data updated in the database.
     * @param {PlanUpdateManyAndReturnArgs} args - Arguments to update many Plans.
     * @example
     * // Update many Plans
     * const plan = await prisma.plan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Plans and only return the `id`
     * const planWithIdOnly = await prisma.plan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PlanUpdateManyAndReturnArgs>(args: SelectSubset<T, PlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Plan.
     * @param {PlanUpsertArgs} args - Arguments to update or create a Plan.
     * @example
     * // Update or create a Plan
     * const plan = await prisma.plan.upsert({
     *   create: {
     *     // ... data to create a Plan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Plan we want to update
     *   }
     * })
     */
    upsert<T extends PlanUpsertArgs>(args: SelectSubset<T, PlanUpsertArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Plans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanCountArgs} args - Arguments to filter Plans to count.
     * @example
     * // Count the number of Plans
     * const count = await prisma.plan.count({
     *   where: {
     *     // ... the filter for the Plans we want to count
     *   }
     * })
    **/
    count<T extends PlanCountArgs>(
      args?: Subset<T, PlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlanAggregateArgs>(args: Subset<T, PlanAggregateArgs>): Prisma.PrismaPromise<GetPlanAggregateType<T>>

    /**
     * Group by Plan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlanGroupByArgs['orderBy'] }
        : { orderBy?: PlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Plan model
   */
  readonly fields: PlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Plan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientPlans<T extends Plan$clientPlansArgs<ExtArgs> = {}>(args?: Subset<T, Plan$clientPlansArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Plan model
   */
  interface PlanFieldRefs {
    readonly id: FieldRef<"Plan", 'String'>
    readonly name: FieldRef<"Plan", 'String'>
    readonly description: FieldRef<"Plan", 'String'>
    readonly price: FieldRef<"Plan", 'Decimal'>
    readonly durationDays: FieldRef<"Plan", 'Int'>
    readonly isTrial: FieldRef<"Plan", 'Boolean'>
    readonly createdOn: FieldRef<"Plan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Plan findUnique
   */
  export type PlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findUniqueOrThrow
   */
  export type PlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan findFirst
   */
  export type PlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findFirstOrThrow
   */
  export type PlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plan to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Plans.
     */
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan findMany
   */
  export type PlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter, which Plans to fetch.
     */
    where?: PlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Plans to fetch.
     */
    orderBy?: PlanOrderByWithRelationInput | PlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Plans.
     */
    cursor?: PlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Plans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Plans.
     */
    skip?: number
    distinct?: PlanScalarFieldEnum | PlanScalarFieldEnum[]
  }

  /**
   * Plan create
   */
  export type PlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to create a Plan.
     */
    data: XOR<PlanCreateInput, PlanUncheckedCreateInput>
  }

  /**
   * Plan createMany
   */
  export type PlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan createManyAndReturn
   */
  export type PlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to create many Plans.
     */
    data: PlanCreateManyInput | PlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Plan update
   */
  export type PlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The data needed to update a Plan.
     */
    data: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
    /**
     * Choose, which Plan to update.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan updateMany
   */
  export type PlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan updateManyAndReturn
   */
  export type PlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * The data used to update Plans.
     */
    data: XOR<PlanUpdateManyMutationInput, PlanUncheckedUpdateManyInput>
    /**
     * Filter which Plans to update
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to update.
     */
    limit?: number
  }

  /**
   * Plan upsert
   */
  export type PlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * The filter to search for the Plan to update in case it exists.
     */
    where: PlanWhereUniqueInput
    /**
     * In case the Plan found by the `where` argument doesn't exist, create a new Plan with this data.
     */
    create: XOR<PlanCreateInput, PlanUncheckedCreateInput>
    /**
     * In case the Plan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlanUpdateInput, PlanUncheckedUpdateInput>
  }

  /**
   * Plan delete
   */
  export type PlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
    /**
     * Filter which Plan to delete.
     */
    where: PlanWhereUniqueInput
  }

  /**
   * Plan deleteMany
   */
  export type PlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Plans to delete
     */
    where?: PlanWhereInput
    /**
     * Limit how many Plans to delete.
     */
    limit?: number
  }

  /**
   * Plan.clientPlans
   */
  export type Plan$clientPlansArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    where?: ClientPlanWhereInput
    orderBy?: ClientPlanOrderByWithRelationInput | ClientPlanOrderByWithRelationInput[]
    cursor?: ClientPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientPlanScalarFieldEnum | ClientPlanScalarFieldEnum[]
  }

  /**
   * Plan without action
   */
  export type PlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Plan
     */
    select?: PlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Plan
     */
    omit?: PlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PlanInclude<ExtArgs> | null
  }


  /**
   * Model ClientPlan
   */

  export type AggregateClientPlan = {
    _count: ClientPlanCountAggregateOutputType | null
    _min: ClientPlanMinAggregateOutputType | null
    _max: ClientPlanMaxAggregateOutputType | null
  }

  export type ClientPlanMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    planId: string | null
    current: boolean | null
    createdOn: Date | null
  }

  export type ClientPlanMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    planId: string | null
    current: boolean | null
    createdOn: Date | null
  }

  export type ClientPlanCountAggregateOutputType = {
    id: number
    clientId: number
    planId: number
    current: number
    createdOn: number
    _all: number
  }


  export type ClientPlanMinAggregateInputType = {
    id?: true
    clientId?: true
    planId?: true
    current?: true
    createdOn?: true
  }

  export type ClientPlanMaxAggregateInputType = {
    id?: true
    clientId?: true
    planId?: true
    current?: true
    createdOn?: true
  }

  export type ClientPlanCountAggregateInputType = {
    id?: true
    clientId?: true
    planId?: true
    current?: true
    createdOn?: true
    _all?: true
  }

  export type ClientPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientPlan to aggregate.
     */
    where?: ClientPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPlans to fetch.
     */
    orderBy?: ClientPlanOrderByWithRelationInput | ClientPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientPlans
    **/
    _count?: true | ClientPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientPlanMaxAggregateInputType
  }

  export type GetClientPlanAggregateType<T extends ClientPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateClientPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientPlan[P]>
      : GetScalarType<T[P], AggregateClientPlan[P]>
  }




  export type ClientPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientPlanWhereInput
    orderBy?: ClientPlanOrderByWithAggregationInput | ClientPlanOrderByWithAggregationInput[]
    by: ClientPlanScalarFieldEnum[] | ClientPlanScalarFieldEnum
    having?: ClientPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientPlanCountAggregateInputType | true
    _min?: ClientPlanMinAggregateInputType
    _max?: ClientPlanMaxAggregateInputType
  }

  export type ClientPlanGroupByOutputType = {
    id: string
    clientId: string
    planId: string
    current: boolean
    createdOn: Date
    _count: ClientPlanCountAggregateOutputType | null
    _min: ClientPlanMinAggregateOutputType | null
    _max: ClientPlanMaxAggregateOutputType | null
  }

  type GetClientPlanGroupByPayload<T extends ClientPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientPlanGroupByOutputType[P]>
            : GetScalarType<T[P], ClientPlanGroupByOutputType[P]>
        }
      >
    >


  export type ClientPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    planId?: boolean
    current?: boolean
    createdOn?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    periods?: boolean | ClientPlan$periodsArgs<ExtArgs>
    _count?: boolean | ClientPlanCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientPlan"]>

  export type ClientPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    planId?: boolean
    current?: boolean
    createdOn?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientPlan"]>

  export type ClientPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    planId?: boolean
    current?: boolean
    createdOn?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientPlan"]>

  export type ClientPlanSelectScalar = {
    id?: boolean
    clientId?: boolean
    planId?: boolean
    current?: boolean
    createdOn?: boolean
  }

  export type ClientPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "planId" | "current" | "createdOn", ExtArgs["result"]["clientPlan"]>
  export type ClientPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
    periods?: boolean | ClientPlan$periodsArgs<ExtArgs>
    _count?: boolean | ClientPlanCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }
  export type ClientPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    plan?: boolean | PlanDefaultArgs<ExtArgs>
  }

  export type $ClientPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientPlan"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      plan: Prisma.$PlanPayload<ExtArgs>
      periods: Prisma.$ClientPeriodPlanPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      planId: string
      current: boolean
      createdOn: Date
    }, ExtArgs["result"]["clientPlan"]>
    composites: {}
  }

  type ClientPlanGetPayload<S extends boolean | null | undefined | ClientPlanDefaultArgs> = $Result.GetResult<Prisma.$ClientPlanPayload, S>

  type ClientPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientPlanCountAggregateInputType | true
    }

  export interface ClientPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientPlan'], meta: { name: 'ClientPlan' } }
    /**
     * Find zero or one ClientPlan that matches the filter.
     * @param {ClientPlanFindUniqueArgs} args - Arguments to find a ClientPlan
     * @example
     * // Get one ClientPlan
     * const clientPlan = await prisma.clientPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientPlanFindUniqueArgs>(args: SelectSubset<T, ClientPlanFindUniqueArgs<ExtArgs>>): Prisma__ClientPlanClient<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientPlanFindUniqueOrThrowArgs} args - Arguments to find a ClientPlan
     * @example
     * // Get one ClientPlan
     * const clientPlan = await prisma.clientPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientPlanClient<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPlanFindFirstArgs} args - Arguments to find a ClientPlan
     * @example
     * // Get one ClientPlan
     * const clientPlan = await prisma.clientPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientPlanFindFirstArgs>(args?: SelectSubset<T, ClientPlanFindFirstArgs<ExtArgs>>): Prisma__ClientPlanClient<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPlanFindFirstOrThrowArgs} args - Arguments to find a ClientPlan
     * @example
     * // Get one ClientPlan
     * const clientPlan = await prisma.clientPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientPlanClient<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientPlans
     * const clientPlans = await prisma.clientPlan.findMany()
     * 
     * // Get first 10 ClientPlans
     * const clientPlans = await prisma.clientPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientPlanWithIdOnly = await prisma.clientPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientPlanFindManyArgs>(args?: SelectSubset<T, ClientPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientPlan.
     * @param {ClientPlanCreateArgs} args - Arguments to create a ClientPlan.
     * @example
     * // Create one ClientPlan
     * const ClientPlan = await prisma.clientPlan.create({
     *   data: {
     *     // ... data to create a ClientPlan
     *   }
     * })
     * 
     */
    create<T extends ClientPlanCreateArgs>(args: SelectSubset<T, ClientPlanCreateArgs<ExtArgs>>): Prisma__ClientPlanClient<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientPlans.
     * @param {ClientPlanCreateManyArgs} args - Arguments to create many ClientPlans.
     * @example
     * // Create many ClientPlans
     * const clientPlan = await prisma.clientPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientPlanCreateManyArgs>(args?: SelectSubset<T, ClientPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientPlans and returns the data saved in the database.
     * @param {ClientPlanCreateManyAndReturnArgs} args - Arguments to create many ClientPlans.
     * @example
     * // Create many ClientPlans
     * const clientPlan = await prisma.clientPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientPlans and only return the `id`
     * const clientPlanWithIdOnly = await prisma.clientPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientPlan.
     * @param {ClientPlanDeleteArgs} args - Arguments to delete one ClientPlan.
     * @example
     * // Delete one ClientPlan
     * const ClientPlan = await prisma.clientPlan.delete({
     *   where: {
     *     // ... filter to delete one ClientPlan
     *   }
     * })
     * 
     */
    delete<T extends ClientPlanDeleteArgs>(args: SelectSubset<T, ClientPlanDeleteArgs<ExtArgs>>): Prisma__ClientPlanClient<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientPlan.
     * @param {ClientPlanUpdateArgs} args - Arguments to update one ClientPlan.
     * @example
     * // Update one ClientPlan
     * const clientPlan = await prisma.clientPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientPlanUpdateArgs>(args: SelectSubset<T, ClientPlanUpdateArgs<ExtArgs>>): Prisma__ClientPlanClient<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientPlans.
     * @param {ClientPlanDeleteManyArgs} args - Arguments to filter ClientPlans to delete.
     * @example
     * // Delete a few ClientPlans
     * const { count } = await prisma.clientPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientPlanDeleteManyArgs>(args?: SelectSubset<T, ClientPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientPlans
     * const clientPlan = await prisma.clientPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientPlanUpdateManyArgs>(args: SelectSubset<T, ClientPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientPlans and returns the data updated in the database.
     * @param {ClientPlanUpdateManyAndReturnArgs} args - Arguments to update many ClientPlans.
     * @example
     * // Update many ClientPlans
     * const clientPlan = await prisma.clientPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientPlans and only return the `id`
     * const clientPlanWithIdOnly = await prisma.clientPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientPlan.
     * @param {ClientPlanUpsertArgs} args - Arguments to update or create a ClientPlan.
     * @example
     * // Update or create a ClientPlan
     * const clientPlan = await prisma.clientPlan.upsert({
     *   create: {
     *     // ... data to create a ClientPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientPlan we want to update
     *   }
     * })
     */
    upsert<T extends ClientPlanUpsertArgs>(args: SelectSubset<T, ClientPlanUpsertArgs<ExtArgs>>): Prisma__ClientPlanClient<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPlanCountArgs} args - Arguments to filter ClientPlans to count.
     * @example
     * // Count the number of ClientPlans
     * const count = await prisma.clientPlan.count({
     *   where: {
     *     // ... the filter for the ClientPlans we want to count
     *   }
     * })
    **/
    count<T extends ClientPlanCountArgs>(
      args?: Subset<T, ClientPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientPlanAggregateArgs>(args: Subset<T, ClientPlanAggregateArgs>): Prisma.PrismaPromise<GetClientPlanAggregateType<T>>

    /**
     * Group by ClientPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientPlanGroupByArgs['orderBy'] }
        : { orderBy?: ClientPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientPlan model
   */
  readonly fields: ClientPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    plan<T extends PlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, PlanDefaultArgs<ExtArgs>>): Prisma__PlanClient<$Result.GetResult<Prisma.$PlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    periods<T extends ClientPlan$periodsArgs<ExtArgs> = {}>(args?: Subset<T, ClientPlan$periodsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientPlan model
   */
  interface ClientPlanFieldRefs {
    readonly id: FieldRef<"ClientPlan", 'String'>
    readonly clientId: FieldRef<"ClientPlan", 'String'>
    readonly planId: FieldRef<"ClientPlan", 'String'>
    readonly current: FieldRef<"ClientPlan", 'Boolean'>
    readonly createdOn: FieldRef<"ClientPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientPlan findUnique
   */
  export type ClientPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPlan to fetch.
     */
    where: ClientPlanWhereUniqueInput
  }

  /**
   * ClientPlan findUniqueOrThrow
   */
  export type ClientPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPlan to fetch.
     */
    where: ClientPlanWhereUniqueInput
  }

  /**
   * ClientPlan findFirst
   */
  export type ClientPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPlan to fetch.
     */
    where?: ClientPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPlans to fetch.
     */
    orderBy?: ClientPlanOrderByWithRelationInput | ClientPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientPlans.
     */
    cursor?: ClientPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientPlans.
     */
    distinct?: ClientPlanScalarFieldEnum | ClientPlanScalarFieldEnum[]
  }

  /**
   * ClientPlan findFirstOrThrow
   */
  export type ClientPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPlan to fetch.
     */
    where?: ClientPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPlans to fetch.
     */
    orderBy?: ClientPlanOrderByWithRelationInput | ClientPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientPlans.
     */
    cursor?: ClientPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientPlans.
     */
    distinct?: ClientPlanScalarFieldEnum | ClientPlanScalarFieldEnum[]
  }

  /**
   * ClientPlan findMany
   */
  export type ClientPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPlans to fetch.
     */
    where?: ClientPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPlans to fetch.
     */
    orderBy?: ClientPlanOrderByWithRelationInput | ClientPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientPlans.
     */
    cursor?: ClientPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPlans.
     */
    skip?: number
    distinct?: ClientPlanScalarFieldEnum | ClientPlanScalarFieldEnum[]
  }

  /**
   * ClientPlan create
   */
  export type ClientPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientPlan.
     */
    data: XOR<ClientPlanCreateInput, ClientPlanUncheckedCreateInput>
  }

  /**
   * ClientPlan createMany
   */
  export type ClientPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientPlans.
     */
    data: ClientPlanCreateManyInput | ClientPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientPlan createManyAndReturn
   */
  export type ClientPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * The data used to create many ClientPlans.
     */
    data: ClientPlanCreateManyInput | ClientPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientPlan update
   */
  export type ClientPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientPlan.
     */
    data: XOR<ClientPlanUpdateInput, ClientPlanUncheckedUpdateInput>
    /**
     * Choose, which ClientPlan to update.
     */
    where: ClientPlanWhereUniqueInput
  }

  /**
   * ClientPlan updateMany
   */
  export type ClientPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientPlans.
     */
    data: XOR<ClientPlanUpdateManyMutationInput, ClientPlanUncheckedUpdateManyInput>
    /**
     * Filter which ClientPlans to update
     */
    where?: ClientPlanWhereInput
    /**
     * Limit how many ClientPlans to update.
     */
    limit?: number
  }

  /**
   * ClientPlan updateManyAndReturn
   */
  export type ClientPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * The data used to update ClientPlans.
     */
    data: XOR<ClientPlanUpdateManyMutationInput, ClientPlanUncheckedUpdateManyInput>
    /**
     * Filter which ClientPlans to update
     */
    where?: ClientPlanWhereInput
    /**
     * Limit how many ClientPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientPlan upsert
   */
  export type ClientPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientPlan to update in case it exists.
     */
    where: ClientPlanWhereUniqueInput
    /**
     * In case the ClientPlan found by the `where` argument doesn't exist, create a new ClientPlan with this data.
     */
    create: XOR<ClientPlanCreateInput, ClientPlanUncheckedCreateInput>
    /**
     * In case the ClientPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientPlanUpdateInput, ClientPlanUncheckedUpdateInput>
  }

  /**
   * ClientPlan delete
   */
  export type ClientPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
    /**
     * Filter which ClientPlan to delete.
     */
    where: ClientPlanWhereUniqueInput
  }

  /**
   * ClientPlan deleteMany
   */
  export type ClientPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientPlans to delete
     */
    where?: ClientPlanWhereInput
    /**
     * Limit how many ClientPlans to delete.
     */
    limit?: number
  }

  /**
   * ClientPlan.periods
   */
  export type ClientPlan$periodsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    where?: ClientPeriodPlanWhereInput
    orderBy?: ClientPeriodPlanOrderByWithRelationInput | ClientPeriodPlanOrderByWithRelationInput[]
    cursor?: ClientPeriodPlanWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientPeriodPlanScalarFieldEnum | ClientPeriodPlanScalarFieldEnum[]
  }

  /**
   * ClientPlan without action
   */
  export type ClientPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPlan
     */
    select?: ClientPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPlan
     */
    omit?: ClientPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPlanInclude<ExtArgs> | null
  }


  /**
   * Model ClientPeriodPlan
   */

  export type AggregateClientPeriodPlan = {
    _count: ClientPeriodPlanCountAggregateOutputType | null
    _min: ClientPeriodPlanMinAggregateOutputType | null
    _max: ClientPeriodPlanMaxAggregateOutputType | null
  }

  export type ClientPeriodPlanMinAggregateOutputType = {
    id: string | null
    clientPlanId: string | null
    startsAt: Date | null
    expiresAt: Date | null
    isTrial: boolean | null
    isCurrent: boolean | null
    wasConfirmed: boolean | null
    createdOn: Date | null
  }

  export type ClientPeriodPlanMaxAggregateOutputType = {
    id: string | null
    clientPlanId: string | null
    startsAt: Date | null
    expiresAt: Date | null
    isTrial: boolean | null
    isCurrent: boolean | null
    wasConfirmed: boolean | null
    createdOn: Date | null
  }

  export type ClientPeriodPlanCountAggregateOutputType = {
    id: number
    clientPlanId: number
    startsAt: number
    expiresAt: number
    isTrial: number
    isCurrent: number
    wasConfirmed: number
    createdOn: number
    _all: number
  }


  export type ClientPeriodPlanMinAggregateInputType = {
    id?: true
    clientPlanId?: true
    startsAt?: true
    expiresAt?: true
    isTrial?: true
    isCurrent?: true
    wasConfirmed?: true
    createdOn?: true
  }

  export type ClientPeriodPlanMaxAggregateInputType = {
    id?: true
    clientPlanId?: true
    startsAt?: true
    expiresAt?: true
    isTrial?: true
    isCurrent?: true
    wasConfirmed?: true
    createdOn?: true
  }

  export type ClientPeriodPlanCountAggregateInputType = {
    id?: true
    clientPlanId?: true
    startsAt?: true
    expiresAt?: true
    isTrial?: true
    isCurrent?: true
    wasConfirmed?: true
    createdOn?: true
    _all?: true
  }

  export type ClientPeriodPlanAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientPeriodPlan to aggregate.
     */
    where?: ClientPeriodPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPeriodPlans to fetch.
     */
    orderBy?: ClientPeriodPlanOrderByWithRelationInput | ClientPeriodPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientPeriodPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPeriodPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPeriodPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientPeriodPlans
    **/
    _count?: true | ClientPeriodPlanCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientPeriodPlanMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientPeriodPlanMaxAggregateInputType
  }

  export type GetClientPeriodPlanAggregateType<T extends ClientPeriodPlanAggregateArgs> = {
        [P in keyof T & keyof AggregateClientPeriodPlan]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientPeriodPlan[P]>
      : GetScalarType<T[P], AggregateClientPeriodPlan[P]>
  }




  export type ClientPeriodPlanGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientPeriodPlanWhereInput
    orderBy?: ClientPeriodPlanOrderByWithAggregationInput | ClientPeriodPlanOrderByWithAggregationInput[]
    by: ClientPeriodPlanScalarFieldEnum[] | ClientPeriodPlanScalarFieldEnum
    having?: ClientPeriodPlanScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientPeriodPlanCountAggregateInputType | true
    _min?: ClientPeriodPlanMinAggregateInputType
    _max?: ClientPeriodPlanMaxAggregateInputType
  }

  export type ClientPeriodPlanGroupByOutputType = {
    id: string
    clientPlanId: string
    startsAt: Date
    expiresAt: Date
    isTrial: boolean
    isCurrent: boolean
    wasConfirmed: boolean
    createdOn: Date
    _count: ClientPeriodPlanCountAggregateOutputType | null
    _min: ClientPeriodPlanMinAggregateOutputType | null
    _max: ClientPeriodPlanMaxAggregateOutputType | null
  }

  type GetClientPeriodPlanGroupByPayload<T extends ClientPeriodPlanGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientPeriodPlanGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientPeriodPlanGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientPeriodPlanGroupByOutputType[P]>
            : GetScalarType<T[P], ClientPeriodPlanGroupByOutputType[P]>
        }
      >
    >


  export type ClientPeriodPlanSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientPlanId?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: boolean
    clientPlan?: boolean | ClientPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientPeriodPlan"]>

  export type ClientPeriodPlanSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientPlanId?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: boolean
    clientPlan?: boolean | ClientPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientPeriodPlan"]>

  export type ClientPeriodPlanSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientPlanId?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: boolean
    clientPlan?: boolean | ClientPlanDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientPeriodPlan"]>

  export type ClientPeriodPlanSelectScalar = {
    id?: boolean
    clientPlanId?: boolean
    startsAt?: boolean
    expiresAt?: boolean
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: boolean
  }

  export type ClientPeriodPlanOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientPlanId" | "startsAt" | "expiresAt" | "isTrial" | "isCurrent" | "wasConfirmed" | "createdOn", ExtArgs["result"]["clientPeriodPlan"]>
  export type ClientPeriodPlanInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientPlan?: boolean | ClientPlanDefaultArgs<ExtArgs>
  }
  export type ClientPeriodPlanIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientPlan?: boolean | ClientPlanDefaultArgs<ExtArgs>
  }
  export type ClientPeriodPlanIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    clientPlan?: boolean | ClientPlanDefaultArgs<ExtArgs>
  }

  export type $ClientPeriodPlanPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientPeriodPlan"
    objects: {
      clientPlan: Prisma.$ClientPlanPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientPlanId: string
      startsAt: Date
      expiresAt: Date
      isTrial: boolean
      isCurrent: boolean
      wasConfirmed: boolean
      createdOn: Date
    }, ExtArgs["result"]["clientPeriodPlan"]>
    composites: {}
  }

  type ClientPeriodPlanGetPayload<S extends boolean | null | undefined | ClientPeriodPlanDefaultArgs> = $Result.GetResult<Prisma.$ClientPeriodPlanPayload, S>

  type ClientPeriodPlanCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientPeriodPlanFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientPeriodPlanCountAggregateInputType | true
    }

  export interface ClientPeriodPlanDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientPeriodPlan'], meta: { name: 'ClientPeriodPlan' } }
    /**
     * Find zero or one ClientPeriodPlan that matches the filter.
     * @param {ClientPeriodPlanFindUniqueArgs} args - Arguments to find a ClientPeriodPlan
     * @example
     * // Get one ClientPeriodPlan
     * const clientPeriodPlan = await prisma.clientPeriodPlan.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientPeriodPlanFindUniqueArgs>(args: SelectSubset<T, ClientPeriodPlanFindUniqueArgs<ExtArgs>>): Prisma__ClientPeriodPlanClient<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientPeriodPlan that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientPeriodPlanFindUniqueOrThrowArgs} args - Arguments to find a ClientPeriodPlan
     * @example
     * // Get one ClientPeriodPlan
     * const clientPeriodPlan = await prisma.clientPeriodPlan.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientPeriodPlanFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientPeriodPlanFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientPeriodPlanClient<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientPeriodPlan that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPeriodPlanFindFirstArgs} args - Arguments to find a ClientPeriodPlan
     * @example
     * // Get one ClientPeriodPlan
     * const clientPeriodPlan = await prisma.clientPeriodPlan.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientPeriodPlanFindFirstArgs>(args?: SelectSubset<T, ClientPeriodPlanFindFirstArgs<ExtArgs>>): Prisma__ClientPeriodPlanClient<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientPeriodPlan that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPeriodPlanFindFirstOrThrowArgs} args - Arguments to find a ClientPeriodPlan
     * @example
     * // Get one ClientPeriodPlan
     * const clientPeriodPlan = await prisma.clientPeriodPlan.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientPeriodPlanFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientPeriodPlanFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientPeriodPlanClient<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientPeriodPlans that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPeriodPlanFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientPeriodPlans
     * const clientPeriodPlans = await prisma.clientPeriodPlan.findMany()
     * 
     * // Get first 10 ClientPeriodPlans
     * const clientPeriodPlans = await prisma.clientPeriodPlan.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientPeriodPlanWithIdOnly = await prisma.clientPeriodPlan.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientPeriodPlanFindManyArgs>(args?: SelectSubset<T, ClientPeriodPlanFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientPeriodPlan.
     * @param {ClientPeriodPlanCreateArgs} args - Arguments to create a ClientPeriodPlan.
     * @example
     * // Create one ClientPeriodPlan
     * const ClientPeriodPlan = await prisma.clientPeriodPlan.create({
     *   data: {
     *     // ... data to create a ClientPeriodPlan
     *   }
     * })
     * 
     */
    create<T extends ClientPeriodPlanCreateArgs>(args: SelectSubset<T, ClientPeriodPlanCreateArgs<ExtArgs>>): Prisma__ClientPeriodPlanClient<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientPeriodPlans.
     * @param {ClientPeriodPlanCreateManyArgs} args - Arguments to create many ClientPeriodPlans.
     * @example
     * // Create many ClientPeriodPlans
     * const clientPeriodPlan = await prisma.clientPeriodPlan.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientPeriodPlanCreateManyArgs>(args?: SelectSubset<T, ClientPeriodPlanCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientPeriodPlans and returns the data saved in the database.
     * @param {ClientPeriodPlanCreateManyAndReturnArgs} args - Arguments to create many ClientPeriodPlans.
     * @example
     * // Create many ClientPeriodPlans
     * const clientPeriodPlan = await prisma.clientPeriodPlan.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientPeriodPlans and only return the `id`
     * const clientPeriodPlanWithIdOnly = await prisma.clientPeriodPlan.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientPeriodPlanCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientPeriodPlanCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientPeriodPlan.
     * @param {ClientPeriodPlanDeleteArgs} args - Arguments to delete one ClientPeriodPlan.
     * @example
     * // Delete one ClientPeriodPlan
     * const ClientPeriodPlan = await prisma.clientPeriodPlan.delete({
     *   where: {
     *     // ... filter to delete one ClientPeriodPlan
     *   }
     * })
     * 
     */
    delete<T extends ClientPeriodPlanDeleteArgs>(args: SelectSubset<T, ClientPeriodPlanDeleteArgs<ExtArgs>>): Prisma__ClientPeriodPlanClient<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientPeriodPlan.
     * @param {ClientPeriodPlanUpdateArgs} args - Arguments to update one ClientPeriodPlan.
     * @example
     * // Update one ClientPeriodPlan
     * const clientPeriodPlan = await prisma.clientPeriodPlan.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientPeriodPlanUpdateArgs>(args: SelectSubset<T, ClientPeriodPlanUpdateArgs<ExtArgs>>): Prisma__ClientPeriodPlanClient<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientPeriodPlans.
     * @param {ClientPeriodPlanDeleteManyArgs} args - Arguments to filter ClientPeriodPlans to delete.
     * @example
     * // Delete a few ClientPeriodPlans
     * const { count } = await prisma.clientPeriodPlan.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientPeriodPlanDeleteManyArgs>(args?: SelectSubset<T, ClientPeriodPlanDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientPeriodPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPeriodPlanUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientPeriodPlans
     * const clientPeriodPlan = await prisma.clientPeriodPlan.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientPeriodPlanUpdateManyArgs>(args: SelectSubset<T, ClientPeriodPlanUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientPeriodPlans and returns the data updated in the database.
     * @param {ClientPeriodPlanUpdateManyAndReturnArgs} args - Arguments to update many ClientPeriodPlans.
     * @example
     * // Update many ClientPeriodPlans
     * const clientPeriodPlan = await prisma.clientPeriodPlan.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientPeriodPlans and only return the `id`
     * const clientPeriodPlanWithIdOnly = await prisma.clientPeriodPlan.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientPeriodPlanUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientPeriodPlanUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientPeriodPlan.
     * @param {ClientPeriodPlanUpsertArgs} args - Arguments to update or create a ClientPeriodPlan.
     * @example
     * // Update or create a ClientPeriodPlan
     * const clientPeriodPlan = await prisma.clientPeriodPlan.upsert({
     *   create: {
     *     // ... data to create a ClientPeriodPlan
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientPeriodPlan we want to update
     *   }
     * })
     */
    upsert<T extends ClientPeriodPlanUpsertArgs>(args: SelectSubset<T, ClientPeriodPlanUpsertArgs<ExtArgs>>): Prisma__ClientPeriodPlanClient<$Result.GetResult<Prisma.$ClientPeriodPlanPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientPeriodPlans.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPeriodPlanCountArgs} args - Arguments to filter ClientPeriodPlans to count.
     * @example
     * // Count the number of ClientPeriodPlans
     * const count = await prisma.clientPeriodPlan.count({
     *   where: {
     *     // ... the filter for the ClientPeriodPlans we want to count
     *   }
     * })
    **/
    count<T extends ClientPeriodPlanCountArgs>(
      args?: Subset<T, ClientPeriodPlanCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientPeriodPlanCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientPeriodPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPeriodPlanAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientPeriodPlanAggregateArgs>(args: Subset<T, ClientPeriodPlanAggregateArgs>): Prisma.PrismaPromise<GetClientPeriodPlanAggregateType<T>>

    /**
     * Group by ClientPeriodPlan.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientPeriodPlanGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientPeriodPlanGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientPeriodPlanGroupByArgs['orderBy'] }
        : { orderBy?: ClientPeriodPlanGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientPeriodPlanGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientPeriodPlanGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientPeriodPlan model
   */
  readonly fields: ClientPeriodPlanFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientPeriodPlan.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientPeriodPlanClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    clientPlan<T extends ClientPlanDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientPlanDefaultArgs<ExtArgs>>): Prisma__ClientPlanClient<$Result.GetResult<Prisma.$ClientPlanPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientPeriodPlan model
   */
  interface ClientPeriodPlanFieldRefs {
    readonly id: FieldRef<"ClientPeriodPlan", 'String'>
    readonly clientPlanId: FieldRef<"ClientPeriodPlan", 'String'>
    readonly startsAt: FieldRef<"ClientPeriodPlan", 'DateTime'>
    readonly expiresAt: FieldRef<"ClientPeriodPlan", 'DateTime'>
    readonly isTrial: FieldRef<"ClientPeriodPlan", 'Boolean'>
    readonly isCurrent: FieldRef<"ClientPeriodPlan", 'Boolean'>
    readonly wasConfirmed: FieldRef<"ClientPeriodPlan", 'Boolean'>
    readonly createdOn: FieldRef<"ClientPeriodPlan", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientPeriodPlan findUnique
   */
  export type ClientPeriodPlanFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPeriodPlan to fetch.
     */
    where: ClientPeriodPlanWhereUniqueInput
  }

  /**
   * ClientPeriodPlan findUniqueOrThrow
   */
  export type ClientPeriodPlanFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPeriodPlan to fetch.
     */
    where: ClientPeriodPlanWhereUniqueInput
  }

  /**
   * ClientPeriodPlan findFirst
   */
  export type ClientPeriodPlanFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPeriodPlan to fetch.
     */
    where?: ClientPeriodPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPeriodPlans to fetch.
     */
    orderBy?: ClientPeriodPlanOrderByWithRelationInput | ClientPeriodPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientPeriodPlans.
     */
    cursor?: ClientPeriodPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPeriodPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPeriodPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientPeriodPlans.
     */
    distinct?: ClientPeriodPlanScalarFieldEnum | ClientPeriodPlanScalarFieldEnum[]
  }

  /**
   * ClientPeriodPlan findFirstOrThrow
   */
  export type ClientPeriodPlanFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPeriodPlan to fetch.
     */
    where?: ClientPeriodPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPeriodPlans to fetch.
     */
    orderBy?: ClientPeriodPlanOrderByWithRelationInput | ClientPeriodPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientPeriodPlans.
     */
    cursor?: ClientPeriodPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPeriodPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPeriodPlans.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientPeriodPlans.
     */
    distinct?: ClientPeriodPlanScalarFieldEnum | ClientPeriodPlanScalarFieldEnum[]
  }

  /**
   * ClientPeriodPlan findMany
   */
  export type ClientPeriodPlanFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    /**
     * Filter, which ClientPeriodPlans to fetch.
     */
    where?: ClientPeriodPlanWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientPeriodPlans to fetch.
     */
    orderBy?: ClientPeriodPlanOrderByWithRelationInput | ClientPeriodPlanOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientPeriodPlans.
     */
    cursor?: ClientPeriodPlanWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientPeriodPlans from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientPeriodPlans.
     */
    skip?: number
    distinct?: ClientPeriodPlanScalarFieldEnum | ClientPeriodPlanScalarFieldEnum[]
  }

  /**
   * ClientPeriodPlan create
   */
  export type ClientPeriodPlanCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientPeriodPlan.
     */
    data: XOR<ClientPeriodPlanCreateInput, ClientPeriodPlanUncheckedCreateInput>
  }

  /**
   * ClientPeriodPlan createMany
   */
  export type ClientPeriodPlanCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientPeriodPlans.
     */
    data: ClientPeriodPlanCreateManyInput | ClientPeriodPlanCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientPeriodPlan createManyAndReturn
   */
  export type ClientPeriodPlanCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * The data used to create many ClientPeriodPlans.
     */
    data: ClientPeriodPlanCreateManyInput | ClientPeriodPlanCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientPeriodPlan update
   */
  export type ClientPeriodPlanUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientPeriodPlan.
     */
    data: XOR<ClientPeriodPlanUpdateInput, ClientPeriodPlanUncheckedUpdateInput>
    /**
     * Choose, which ClientPeriodPlan to update.
     */
    where: ClientPeriodPlanWhereUniqueInput
  }

  /**
   * ClientPeriodPlan updateMany
   */
  export type ClientPeriodPlanUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientPeriodPlans.
     */
    data: XOR<ClientPeriodPlanUpdateManyMutationInput, ClientPeriodPlanUncheckedUpdateManyInput>
    /**
     * Filter which ClientPeriodPlans to update
     */
    where?: ClientPeriodPlanWhereInput
    /**
     * Limit how many ClientPeriodPlans to update.
     */
    limit?: number
  }

  /**
   * ClientPeriodPlan updateManyAndReturn
   */
  export type ClientPeriodPlanUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * The data used to update ClientPeriodPlans.
     */
    data: XOR<ClientPeriodPlanUpdateManyMutationInput, ClientPeriodPlanUncheckedUpdateManyInput>
    /**
     * Filter which ClientPeriodPlans to update
     */
    where?: ClientPeriodPlanWhereInput
    /**
     * Limit how many ClientPeriodPlans to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientPeriodPlan upsert
   */
  export type ClientPeriodPlanUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientPeriodPlan to update in case it exists.
     */
    where: ClientPeriodPlanWhereUniqueInput
    /**
     * In case the ClientPeriodPlan found by the `where` argument doesn't exist, create a new ClientPeriodPlan with this data.
     */
    create: XOR<ClientPeriodPlanCreateInput, ClientPeriodPlanUncheckedCreateInput>
    /**
     * In case the ClientPeriodPlan was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientPeriodPlanUpdateInput, ClientPeriodPlanUncheckedUpdateInput>
  }

  /**
   * ClientPeriodPlan delete
   */
  export type ClientPeriodPlanDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
    /**
     * Filter which ClientPeriodPlan to delete.
     */
    where: ClientPeriodPlanWhereUniqueInput
  }

  /**
   * ClientPeriodPlan deleteMany
   */
  export type ClientPeriodPlanDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientPeriodPlans to delete
     */
    where?: ClientPeriodPlanWhereInput
    /**
     * Limit how many ClientPeriodPlans to delete.
     */
    limit?: number
  }

  /**
   * ClientPeriodPlan without action
   */
  export type ClientPeriodPlanDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientPeriodPlan
     */
    select?: ClientPeriodPlanSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientPeriodPlan
     */
    omit?: ClientPeriodPlanOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientPeriodPlanInclude<ExtArgs> | null
  }


  /**
   * Model ClientRequest
   */

  export type AggregateClientRequest = {
    _count: ClientRequestCountAggregateOutputType | null
    _min: ClientRequestMinAggregateOutputType | null
    _max: ClientRequestMaxAggregateOutputType | null
  }

  export type ClientRequestMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientUserId: string | null
    requestType: $Enums.RequestType | null
    generatedToken: string | null
    generatedCode: string | null
    expires: Date | null
    createdOn: Date | null
  }

  export type ClientRequestMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    clientUserId: string | null
    requestType: $Enums.RequestType | null
    generatedToken: string | null
    generatedCode: string | null
    expires: Date | null
    createdOn: Date | null
  }

  export type ClientRequestCountAggregateOutputType = {
    id: number
    clientId: number
    clientUserId: number
    requestType: number
    generatedToken: number
    generatedCode: number
    expires: number
    createdOn: number
    _all: number
  }


  export type ClientRequestMinAggregateInputType = {
    id?: true
    clientId?: true
    clientUserId?: true
    requestType?: true
    generatedToken?: true
    generatedCode?: true
    expires?: true
    createdOn?: true
  }

  export type ClientRequestMaxAggregateInputType = {
    id?: true
    clientId?: true
    clientUserId?: true
    requestType?: true
    generatedToken?: true
    generatedCode?: true
    expires?: true
    createdOn?: true
  }

  export type ClientRequestCountAggregateInputType = {
    id?: true
    clientId?: true
    clientUserId?: true
    requestType?: true
    generatedToken?: true
    generatedCode?: true
    expires?: true
    createdOn?: true
    _all?: true
  }

  export type ClientRequestAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientRequest to aggregate.
     */
    where?: ClientRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientRequests to fetch.
     */
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientRequests
    **/
    _count?: true | ClientRequestCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientRequestMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientRequestMaxAggregateInputType
  }

  export type GetClientRequestAggregateType<T extends ClientRequestAggregateArgs> = {
        [P in keyof T & keyof AggregateClientRequest]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientRequest[P]>
      : GetScalarType<T[P], AggregateClientRequest[P]>
  }




  export type ClientRequestGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientRequestWhereInput
    orderBy?: ClientRequestOrderByWithAggregationInput | ClientRequestOrderByWithAggregationInput[]
    by: ClientRequestScalarFieldEnum[] | ClientRequestScalarFieldEnum
    having?: ClientRequestScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientRequestCountAggregateInputType | true
    _min?: ClientRequestMinAggregateInputType
    _max?: ClientRequestMaxAggregateInputType
  }

  export type ClientRequestGroupByOutputType = {
    id: string
    clientId: string
    clientUserId: string
    requestType: $Enums.RequestType
    generatedToken: string | null
    generatedCode: string | null
    expires: Date
    createdOn: Date
    _count: ClientRequestCountAggregateOutputType | null
    _min: ClientRequestMinAggregateOutputType | null
    _max: ClientRequestMaxAggregateOutputType | null
  }

  type GetClientRequestGroupByPayload<T extends ClientRequestGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientRequestGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientRequestGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientRequestGroupByOutputType[P]>
            : GetScalarType<T[P], ClientRequestGroupByOutputType[P]>
        }
      >
    >


  export type ClientRequestSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientUserId?: boolean
    requestType?: boolean
    generatedToken?: boolean
    generatedCode?: boolean
    expires?: boolean
    createdOn?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    clientUser?: boolean | ClientUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientRequest"]>

  export type ClientRequestSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientUserId?: boolean
    requestType?: boolean
    generatedToken?: boolean
    generatedCode?: boolean
    expires?: boolean
    createdOn?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    clientUser?: boolean | ClientUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientRequest"]>

  export type ClientRequestSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    clientUserId?: boolean
    requestType?: boolean
    generatedToken?: boolean
    generatedCode?: boolean
    expires?: boolean
    createdOn?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    clientUser?: boolean | ClientUserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientRequest"]>

  export type ClientRequestSelectScalar = {
    id?: boolean
    clientId?: boolean
    clientUserId?: boolean
    requestType?: boolean
    generatedToken?: boolean
    generatedCode?: boolean
    expires?: boolean
    createdOn?: boolean
  }

  export type ClientRequestOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "clientUserId" | "requestType" | "generatedToken" | "generatedCode" | "expires" | "createdOn", ExtArgs["result"]["clientRequest"]>
  export type ClientRequestInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    clientUser?: boolean | ClientUserDefaultArgs<ExtArgs>
  }
  export type ClientRequestIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    clientUser?: boolean | ClientUserDefaultArgs<ExtArgs>
  }
  export type ClientRequestIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    clientUser?: boolean | ClientUserDefaultArgs<ExtArgs>
  }

  export type $ClientRequestPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientRequest"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      clientUser: Prisma.$ClientUserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      clientUserId: string
      requestType: $Enums.RequestType
      generatedToken: string | null
      generatedCode: string | null
      expires: Date
      createdOn: Date
    }, ExtArgs["result"]["clientRequest"]>
    composites: {}
  }

  type ClientRequestGetPayload<S extends boolean | null | undefined | ClientRequestDefaultArgs> = $Result.GetResult<Prisma.$ClientRequestPayload, S>

  type ClientRequestCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientRequestCountAggregateInputType | true
    }

  export interface ClientRequestDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientRequest'], meta: { name: 'ClientRequest' } }
    /**
     * Find zero or one ClientRequest that matches the filter.
     * @param {ClientRequestFindUniqueArgs} args - Arguments to find a ClientRequest
     * @example
     * // Get one ClientRequest
     * const clientRequest = await prisma.clientRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientRequestFindUniqueArgs>(args: SelectSubset<T, ClientRequestFindUniqueArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientRequestFindUniqueOrThrowArgs} args - Arguments to find a ClientRequest
     * @example
     * // Get one ClientRequest
     * const clientRequest = await prisma.clientRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientRequestFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestFindFirstArgs} args - Arguments to find a ClientRequest
     * @example
     * // Get one ClientRequest
     * const clientRequest = await prisma.clientRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientRequestFindFirstArgs>(args?: SelectSubset<T, ClientRequestFindFirstArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestFindFirstOrThrowArgs} args - Arguments to find a ClientRequest
     * @example
     * // Get one ClientRequest
     * const clientRequest = await prisma.clientRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientRequestFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientRequests
     * const clientRequests = await prisma.clientRequest.findMany()
     * 
     * // Get first 10 ClientRequests
     * const clientRequests = await prisma.clientRequest.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientRequestWithIdOnly = await prisma.clientRequest.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientRequestFindManyArgs>(args?: SelectSubset<T, ClientRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientRequest.
     * @param {ClientRequestCreateArgs} args - Arguments to create a ClientRequest.
     * @example
     * // Create one ClientRequest
     * const ClientRequest = await prisma.clientRequest.create({
     *   data: {
     *     // ... data to create a ClientRequest
     *   }
     * })
     * 
     */
    create<T extends ClientRequestCreateArgs>(args: SelectSubset<T, ClientRequestCreateArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientRequests.
     * @param {ClientRequestCreateManyArgs} args - Arguments to create many ClientRequests.
     * @example
     * // Create many ClientRequests
     * const clientRequest = await prisma.clientRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientRequestCreateManyArgs>(args?: SelectSubset<T, ClientRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientRequests and returns the data saved in the database.
     * @param {ClientRequestCreateManyAndReturnArgs} args - Arguments to create many ClientRequests.
     * @example
     * // Create many ClientRequests
     * const clientRequest = await prisma.clientRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientRequests and only return the `id`
     * const clientRequestWithIdOnly = await prisma.clientRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientRequestCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientRequest.
     * @param {ClientRequestDeleteArgs} args - Arguments to delete one ClientRequest.
     * @example
     * // Delete one ClientRequest
     * const ClientRequest = await prisma.clientRequest.delete({
     *   where: {
     *     // ... filter to delete one ClientRequest
     *   }
     * })
     * 
     */
    delete<T extends ClientRequestDeleteArgs>(args: SelectSubset<T, ClientRequestDeleteArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientRequest.
     * @param {ClientRequestUpdateArgs} args - Arguments to update one ClientRequest.
     * @example
     * // Update one ClientRequest
     * const clientRequest = await prisma.clientRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientRequestUpdateArgs>(args: SelectSubset<T, ClientRequestUpdateArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientRequests.
     * @param {ClientRequestDeleteManyArgs} args - Arguments to filter ClientRequests to delete.
     * @example
     * // Delete a few ClientRequests
     * const { count } = await prisma.clientRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientRequestDeleteManyArgs>(args?: SelectSubset<T, ClientRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientRequests
     * const clientRequest = await prisma.clientRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientRequestUpdateManyArgs>(args: SelectSubset<T, ClientRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientRequests and returns the data updated in the database.
     * @param {ClientRequestUpdateManyAndReturnArgs} args - Arguments to update many ClientRequests.
     * @example
     * // Update many ClientRequests
     * const clientRequest = await prisma.clientRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientRequests and only return the `id`
     * const clientRequestWithIdOnly = await prisma.clientRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientRequestUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientRequest.
     * @param {ClientRequestUpsertArgs} args - Arguments to update or create a ClientRequest.
     * @example
     * // Update or create a ClientRequest
     * const clientRequest = await prisma.clientRequest.upsert({
     *   create: {
     *     // ... data to create a ClientRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientRequest we want to update
     *   }
     * })
     */
    upsert<T extends ClientRequestUpsertArgs>(args: SelectSubset<T, ClientRequestUpsertArgs<ExtArgs>>): Prisma__ClientRequestClient<$Result.GetResult<Prisma.$ClientRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestCountArgs} args - Arguments to filter ClientRequests to count.
     * @example
     * // Count the number of ClientRequests
     * const count = await prisma.clientRequest.count({
     *   where: {
     *     // ... the filter for the ClientRequests we want to count
     *   }
     * })
    **/
    count<T extends ClientRequestCountArgs>(
      args?: Subset<T, ClientRequestCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientRequestCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientRequestAggregateArgs>(args: Subset<T, ClientRequestAggregateArgs>): Prisma.PrismaPromise<GetClientRequestAggregateType<T>>

    /**
     * Group by ClientRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientRequestGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientRequestGroupByArgs['orderBy'] }
        : { orderBy?: ClientRequestGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientRequest model
   */
  readonly fields: ClientRequestFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientRequest.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientRequestClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    clientUser<T extends ClientUserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientUserDefaultArgs<ExtArgs>>): Prisma__ClientUserClient<$Result.GetResult<Prisma.$ClientUserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientRequest model
   */
  interface ClientRequestFieldRefs {
    readonly id: FieldRef<"ClientRequest", 'String'>
    readonly clientId: FieldRef<"ClientRequest", 'String'>
    readonly clientUserId: FieldRef<"ClientRequest", 'String'>
    readonly requestType: FieldRef<"ClientRequest", 'RequestType'>
    readonly generatedToken: FieldRef<"ClientRequest", 'String'>
    readonly generatedCode: FieldRef<"ClientRequest", 'String'>
    readonly expires: FieldRef<"ClientRequest", 'DateTime'>
    readonly createdOn: FieldRef<"ClientRequest", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientRequest findUnique
   */
  export type ClientRequestFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequest to fetch.
     */
    where: ClientRequestWhereUniqueInput
  }

  /**
   * ClientRequest findUniqueOrThrow
   */
  export type ClientRequestFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequest to fetch.
     */
    where: ClientRequestWhereUniqueInput
  }

  /**
   * ClientRequest findFirst
   */
  export type ClientRequestFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequest to fetch.
     */
    where?: ClientRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientRequests to fetch.
     */
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientRequests.
     */
    cursor?: ClientRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientRequests.
     */
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * ClientRequest findFirstOrThrow
   */
  export type ClientRequestFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequest to fetch.
     */
    where?: ClientRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientRequests to fetch.
     */
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientRequests.
     */
    cursor?: ClientRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientRequests.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientRequests.
     */
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * ClientRequest findMany
   */
  export type ClientRequestFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter, which ClientRequests to fetch.
     */
    where?: ClientRequestWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientRequests to fetch.
     */
    orderBy?: ClientRequestOrderByWithRelationInput | ClientRequestOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientRequests.
     */
    cursor?: ClientRequestWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientRequests from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientRequests.
     */
    skip?: number
    distinct?: ClientRequestScalarFieldEnum | ClientRequestScalarFieldEnum[]
  }

  /**
   * ClientRequest create
   */
  export type ClientRequestCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientRequest.
     */
    data: XOR<ClientRequestCreateInput, ClientRequestUncheckedCreateInput>
  }

  /**
   * ClientRequest createMany
   */
  export type ClientRequestCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientRequests.
     */
    data: ClientRequestCreateManyInput | ClientRequestCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientRequest createManyAndReturn
   */
  export type ClientRequestCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * The data used to create many ClientRequests.
     */
    data: ClientRequestCreateManyInput | ClientRequestCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientRequest update
   */
  export type ClientRequestUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientRequest.
     */
    data: XOR<ClientRequestUpdateInput, ClientRequestUncheckedUpdateInput>
    /**
     * Choose, which ClientRequest to update.
     */
    where: ClientRequestWhereUniqueInput
  }

  /**
   * ClientRequest updateMany
   */
  export type ClientRequestUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientRequests.
     */
    data: XOR<ClientRequestUpdateManyMutationInput, ClientRequestUncheckedUpdateManyInput>
    /**
     * Filter which ClientRequests to update
     */
    where?: ClientRequestWhereInput
    /**
     * Limit how many ClientRequests to update.
     */
    limit?: number
  }

  /**
   * ClientRequest updateManyAndReturn
   */
  export type ClientRequestUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * The data used to update ClientRequests.
     */
    data: XOR<ClientRequestUpdateManyMutationInput, ClientRequestUncheckedUpdateManyInput>
    /**
     * Filter which ClientRequests to update
     */
    where?: ClientRequestWhereInput
    /**
     * Limit how many ClientRequests to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientRequest upsert
   */
  export type ClientRequestUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientRequest to update in case it exists.
     */
    where: ClientRequestWhereUniqueInput
    /**
     * In case the ClientRequest found by the `where` argument doesn't exist, create a new ClientRequest with this data.
     */
    create: XOR<ClientRequestCreateInput, ClientRequestUncheckedCreateInput>
    /**
     * In case the ClientRequest was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientRequestUpdateInput, ClientRequestUncheckedUpdateInput>
  }

  /**
   * ClientRequest delete
   */
  export type ClientRequestDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
    /**
     * Filter which ClientRequest to delete.
     */
    where: ClientRequestWhereUniqueInput
  }

  /**
   * ClientRequest deleteMany
   */
  export type ClientRequestDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientRequests to delete
     */
    where?: ClientRequestWhereInput
    /**
     * Limit how many ClientRequests to delete.
     */
    limit?: number
  }

  /**
   * ClientRequest without action
   */
  export type ClientRequestDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientRequest
     */
    select?: ClientRequestSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientRequest
     */
    omit?: ClientRequestOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientRequestInclude<ExtArgs> | null
  }


  /**
   * Model TermsOfUse
   */

  export type AggregateTermsOfUse = {
    _count: TermsOfUseCountAggregateOutputType | null
    _min: TermsOfUseMinAggregateOutputType | null
    _max: TermsOfUseMaxAggregateOutputType | null
  }

  export type TermsOfUseMinAggregateOutputType = {
    id: string | null
    fileUrl: string | null
    description: string | null
    isCurrent: boolean | null
    createdOn: Date | null
  }

  export type TermsOfUseMaxAggregateOutputType = {
    id: string | null
    fileUrl: string | null
    description: string | null
    isCurrent: boolean | null
    createdOn: Date | null
  }

  export type TermsOfUseCountAggregateOutputType = {
    id: number
    fileUrl: number
    description: number
    isCurrent: number
    createdOn: number
    _all: number
  }


  export type TermsOfUseMinAggregateInputType = {
    id?: true
    fileUrl?: true
    description?: true
    isCurrent?: true
    createdOn?: true
  }

  export type TermsOfUseMaxAggregateInputType = {
    id?: true
    fileUrl?: true
    description?: true
    isCurrent?: true
    createdOn?: true
  }

  export type TermsOfUseCountAggregateInputType = {
    id?: true
    fileUrl?: true
    description?: true
    isCurrent?: true
    createdOn?: true
    _all?: true
  }

  export type TermsOfUseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsOfUse to aggregate.
     */
    where?: TermsOfUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfUses to fetch.
     */
    orderBy?: TermsOfUseOrderByWithRelationInput | TermsOfUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TermsOfUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfUses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TermsOfUses
    **/
    _count?: true | TermsOfUseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TermsOfUseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TermsOfUseMaxAggregateInputType
  }

  export type GetTermsOfUseAggregateType<T extends TermsOfUseAggregateArgs> = {
        [P in keyof T & keyof AggregateTermsOfUse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTermsOfUse[P]>
      : GetScalarType<T[P], AggregateTermsOfUse[P]>
  }




  export type TermsOfUseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TermsOfUseWhereInput
    orderBy?: TermsOfUseOrderByWithAggregationInput | TermsOfUseOrderByWithAggregationInput[]
    by: TermsOfUseScalarFieldEnum[] | TermsOfUseScalarFieldEnum
    having?: TermsOfUseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TermsOfUseCountAggregateInputType | true
    _min?: TermsOfUseMinAggregateInputType
    _max?: TermsOfUseMaxAggregateInputType
  }

  export type TermsOfUseGroupByOutputType = {
    id: string
    fileUrl: string
    description: string | null
    isCurrent: boolean
    createdOn: Date
    _count: TermsOfUseCountAggregateOutputType | null
    _min: TermsOfUseMinAggregateOutputType | null
    _max: TermsOfUseMaxAggregateOutputType | null
  }

  type GetTermsOfUseGroupByPayload<T extends TermsOfUseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TermsOfUseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TermsOfUseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TermsOfUseGroupByOutputType[P]>
            : GetScalarType<T[P], TermsOfUseGroupByOutputType[P]>
        }
      >
    >


  export type TermsOfUseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    description?: boolean
    isCurrent?: boolean
    createdOn?: boolean
    acceptedBy?: boolean | TermsOfUse$acceptedByArgs<ExtArgs>
    _count?: boolean | TermsOfUseCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["termsOfUse"]>

  export type TermsOfUseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    description?: boolean
    isCurrent?: boolean
    createdOn?: boolean
  }, ExtArgs["result"]["termsOfUse"]>

  export type TermsOfUseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    fileUrl?: boolean
    description?: boolean
    isCurrent?: boolean
    createdOn?: boolean
  }, ExtArgs["result"]["termsOfUse"]>

  export type TermsOfUseSelectScalar = {
    id?: boolean
    fileUrl?: boolean
    description?: boolean
    isCurrent?: boolean
    createdOn?: boolean
  }

  export type TermsOfUseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "fileUrl" | "description" | "isCurrent" | "createdOn", ExtArgs["result"]["termsOfUse"]>
  export type TermsOfUseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    acceptedBy?: boolean | TermsOfUse$acceptedByArgs<ExtArgs>
    _count?: boolean | TermsOfUseCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TermsOfUseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TermsOfUseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TermsOfUsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TermsOfUse"
    objects: {
      acceptedBy: Prisma.$ClientTermsOfUsePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      fileUrl: string
      description: string | null
      isCurrent: boolean
      createdOn: Date
    }, ExtArgs["result"]["termsOfUse"]>
    composites: {}
  }

  type TermsOfUseGetPayload<S extends boolean | null | undefined | TermsOfUseDefaultArgs> = $Result.GetResult<Prisma.$TermsOfUsePayload, S>

  type TermsOfUseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TermsOfUseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TermsOfUseCountAggregateInputType | true
    }

  export interface TermsOfUseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TermsOfUse'], meta: { name: 'TermsOfUse' } }
    /**
     * Find zero or one TermsOfUse that matches the filter.
     * @param {TermsOfUseFindUniqueArgs} args - Arguments to find a TermsOfUse
     * @example
     * // Get one TermsOfUse
     * const termsOfUse = await prisma.termsOfUse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TermsOfUseFindUniqueArgs>(args: SelectSubset<T, TermsOfUseFindUniqueArgs<ExtArgs>>): Prisma__TermsOfUseClient<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TermsOfUse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TermsOfUseFindUniqueOrThrowArgs} args - Arguments to find a TermsOfUse
     * @example
     * // Get one TermsOfUse
     * const termsOfUse = await prisma.termsOfUse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TermsOfUseFindUniqueOrThrowArgs>(args: SelectSubset<T, TermsOfUseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TermsOfUseClient<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermsOfUse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfUseFindFirstArgs} args - Arguments to find a TermsOfUse
     * @example
     * // Get one TermsOfUse
     * const termsOfUse = await prisma.termsOfUse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TermsOfUseFindFirstArgs>(args?: SelectSubset<T, TermsOfUseFindFirstArgs<ExtArgs>>): Prisma__TermsOfUseClient<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TermsOfUse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfUseFindFirstOrThrowArgs} args - Arguments to find a TermsOfUse
     * @example
     * // Get one TermsOfUse
     * const termsOfUse = await prisma.termsOfUse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TermsOfUseFindFirstOrThrowArgs>(args?: SelectSubset<T, TermsOfUseFindFirstOrThrowArgs<ExtArgs>>): Prisma__TermsOfUseClient<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TermsOfUses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfUseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TermsOfUses
     * const termsOfUses = await prisma.termsOfUse.findMany()
     * 
     * // Get first 10 TermsOfUses
     * const termsOfUses = await prisma.termsOfUse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const termsOfUseWithIdOnly = await prisma.termsOfUse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TermsOfUseFindManyArgs>(args?: SelectSubset<T, TermsOfUseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TermsOfUse.
     * @param {TermsOfUseCreateArgs} args - Arguments to create a TermsOfUse.
     * @example
     * // Create one TermsOfUse
     * const TermsOfUse = await prisma.termsOfUse.create({
     *   data: {
     *     // ... data to create a TermsOfUse
     *   }
     * })
     * 
     */
    create<T extends TermsOfUseCreateArgs>(args: SelectSubset<T, TermsOfUseCreateArgs<ExtArgs>>): Prisma__TermsOfUseClient<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TermsOfUses.
     * @param {TermsOfUseCreateManyArgs} args - Arguments to create many TermsOfUses.
     * @example
     * // Create many TermsOfUses
     * const termsOfUse = await prisma.termsOfUse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TermsOfUseCreateManyArgs>(args?: SelectSubset<T, TermsOfUseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TermsOfUses and returns the data saved in the database.
     * @param {TermsOfUseCreateManyAndReturnArgs} args - Arguments to create many TermsOfUses.
     * @example
     * // Create many TermsOfUses
     * const termsOfUse = await prisma.termsOfUse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TermsOfUses and only return the `id`
     * const termsOfUseWithIdOnly = await prisma.termsOfUse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TermsOfUseCreateManyAndReturnArgs>(args?: SelectSubset<T, TermsOfUseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TermsOfUse.
     * @param {TermsOfUseDeleteArgs} args - Arguments to delete one TermsOfUse.
     * @example
     * // Delete one TermsOfUse
     * const TermsOfUse = await prisma.termsOfUse.delete({
     *   where: {
     *     // ... filter to delete one TermsOfUse
     *   }
     * })
     * 
     */
    delete<T extends TermsOfUseDeleteArgs>(args: SelectSubset<T, TermsOfUseDeleteArgs<ExtArgs>>): Prisma__TermsOfUseClient<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TermsOfUse.
     * @param {TermsOfUseUpdateArgs} args - Arguments to update one TermsOfUse.
     * @example
     * // Update one TermsOfUse
     * const termsOfUse = await prisma.termsOfUse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TermsOfUseUpdateArgs>(args: SelectSubset<T, TermsOfUseUpdateArgs<ExtArgs>>): Prisma__TermsOfUseClient<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TermsOfUses.
     * @param {TermsOfUseDeleteManyArgs} args - Arguments to filter TermsOfUses to delete.
     * @example
     * // Delete a few TermsOfUses
     * const { count } = await prisma.termsOfUse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TermsOfUseDeleteManyArgs>(args?: SelectSubset<T, TermsOfUseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsOfUses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfUseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TermsOfUses
     * const termsOfUse = await prisma.termsOfUse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TermsOfUseUpdateManyArgs>(args: SelectSubset<T, TermsOfUseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TermsOfUses and returns the data updated in the database.
     * @param {TermsOfUseUpdateManyAndReturnArgs} args - Arguments to update many TermsOfUses.
     * @example
     * // Update many TermsOfUses
     * const termsOfUse = await prisma.termsOfUse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TermsOfUses and only return the `id`
     * const termsOfUseWithIdOnly = await prisma.termsOfUse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TermsOfUseUpdateManyAndReturnArgs>(args: SelectSubset<T, TermsOfUseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TermsOfUse.
     * @param {TermsOfUseUpsertArgs} args - Arguments to update or create a TermsOfUse.
     * @example
     * // Update or create a TermsOfUse
     * const termsOfUse = await prisma.termsOfUse.upsert({
     *   create: {
     *     // ... data to create a TermsOfUse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TermsOfUse we want to update
     *   }
     * })
     */
    upsert<T extends TermsOfUseUpsertArgs>(args: SelectSubset<T, TermsOfUseUpsertArgs<ExtArgs>>): Prisma__TermsOfUseClient<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TermsOfUses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfUseCountArgs} args - Arguments to filter TermsOfUses to count.
     * @example
     * // Count the number of TermsOfUses
     * const count = await prisma.termsOfUse.count({
     *   where: {
     *     // ... the filter for the TermsOfUses we want to count
     *   }
     * })
    **/
    count<T extends TermsOfUseCountArgs>(
      args?: Subset<T, TermsOfUseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TermsOfUseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TermsOfUse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfUseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TermsOfUseAggregateArgs>(args: Subset<T, TermsOfUseAggregateArgs>): Prisma.PrismaPromise<GetTermsOfUseAggregateType<T>>

    /**
     * Group by TermsOfUse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TermsOfUseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TermsOfUseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TermsOfUseGroupByArgs['orderBy'] }
        : { orderBy?: TermsOfUseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TermsOfUseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTermsOfUseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TermsOfUse model
   */
  readonly fields: TermsOfUseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TermsOfUse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TermsOfUseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    acceptedBy<T extends TermsOfUse$acceptedByArgs<ExtArgs> = {}>(args?: Subset<T, TermsOfUse$acceptedByArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TermsOfUse model
   */
  interface TermsOfUseFieldRefs {
    readonly id: FieldRef<"TermsOfUse", 'String'>
    readonly fileUrl: FieldRef<"TermsOfUse", 'String'>
    readonly description: FieldRef<"TermsOfUse", 'String'>
    readonly isCurrent: FieldRef<"TermsOfUse", 'Boolean'>
    readonly createdOn: FieldRef<"TermsOfUse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TermsOfUse findUnique
   */
  export type TermsOfUseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which TermsOfUse to fetch.
     */
    where: TermsOfUseWhereUniqueInput
  }

  /**
   * TermsOfUse findUniqueOrThrow
   */
  export type TermsOfUseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which TermsOfUse to fetch.
     */
    where: TermsOfUseWhereUniqueInput
  }

  /**
   * TermsOfUse findFirst
   */
  export type TermsOfUseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which TermsOfUse to fetch.
     */
    where?: TermsOfUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfUses to fetch.
     */
    orderBy?: TermsOfUseOrderByWithRelationInput | TermsOfUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsOfUses.
     */
    cursor?: TermsOfUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfUses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsOfUses.
     */
    distinct?: TermsOfUseScalarFieldEnum | TermsOfUseScalarFieldEnum[]
  }

  /**
   * TermsOfUse findFirstOrThrow
   */
  export type TermsOfUseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which TermsOfUse to fetch.
     */
    where?: TermsOfUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfUses to fetch.
     */
    orderBy?: TermsOfUseOrderByWithRelationInput | TermsOfUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TermsOfUses.
     */
    cursor?: TermsOfUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfUses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TermsOfUses.
     */
    distinct?: TermsOfUseScalarFieldEnum | TermsOfUseScalarFieldEnum[]
  }

  /**
   * TermsOfUse findMany
   */
  export type TermsOfUseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which TermsOfUses to fetch.
     */
    where?: TermsOfUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TermsOfUses to fetch.
     */
    orderBy?: TermsOfUseOrderByWithRelationInput | TermsOfUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TermsOfUses.
     */
    cursor?: TermsOfUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TermsOfUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TermsOfUses.
     */
    skip?: number
    distinct?: TermsOfUseScalarFieldEnum | TermsOfUseScalarFieldEnum[]
  }

  /**
   * TermsOfUse create
   */
  export type TermsOfUseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
    /**
     * The data needed to create a TermsOfUse.
     */
    data: XOR<TermsOfUseCreateInput, TermsOfUseUncheckedCreateInput>
  }

  /**
   * TermsOfUse createMany
   */
  export type TermsOfUseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TermsOfUses.
     */
    data: TermsOfUseCreateManyInput | TermsOfUseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TermsOfUse createManyAndReturn
   */
  export type TermsOfUseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * The data used to create many TermsOfUses.
     */
    data: TermsOfUseCreateManyInput | TermsOfUseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * TermsOfUse update
   */
  export type TermsOfUseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
    /**
     * The data needed to update a TermsOfUse.
     */
    data: XOR<TermsOfUseUpdateInput, TermsOfUseUncheckedUpdateInput>
    /**
     * Choose, which TermsOfUse to update.
     */
    where: TermsOfUseWhereUniqueInput
  }

  /**
   * TermsOfUse updateMany
   */
  export type TermsOfUseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TermsOfUses.
     */
    data: XOR<TermsOfUseUpdateManyMutationInput, TermsOfUseUncheckedUpdateManyInput>
    /**
     * Filter which TermsOfUses to update
     */
    where?: TermsOfUseWhereInput
    /**
     * Limit how many TermsOfUses to update.
     */
    limit?: number
  }

  /**
   * TermsOfUse updateManyAndReturn
   */
  export type TermsOfUseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * The data used to update TermsOfUses.
     */
    data: XOR<TermsOfUseUpdateManyMutationInput, TermsOfUseUncheckedUpdateManyInput>
    /**
     * Filter which TermsOfUses to update
     */
    where?: TermsOfUseWhereInput
    /**
     * Limit how many TermsOfUses to update.
     */
    limit?: number
  }

  /**
   * TermsOfUse upsert
   */
  export type TermsOfUseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
    /**
     * The filter to search for the TermsOfUse to update in case it exists.
     */
    where: TermsOfUseWhereUniqueInput
    /**
     * In case the TermsOfUse found by the `where` argument doesn't exist, create a new TermsOfUse with this data.
     */
    create: XOR<TermsOfUseCreateInput, TermsOfUseUncheckedCreateInput>
    /**
     * In case the TermsOfUse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TermsOfUseUpdateInput, TermsOfUseUncheckedUpdateInput>
  }

  /**
   * TermsOfUse delete
   */
  export type TermsOfUseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
    /**
     * Filter which TermsOfUse to delete.
     */
    where: TermsOfUseWhereUniqueInput
  }

  /**
   * TermsOfUse deleteMany
   */
  export type TermsOfUseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TermsOfUses to delete
     */
    where?: TermsOfUseWhereInput
    /**
     * Limit how many TermsOfUses to delete.
     */
    limit?: number
  }

  /**
   * TermsOfUse.acceptedBy
   */
  export type TermsOfUse$acceptedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    where?: ClientTermsOfUseWhereInput
    orderBy?: ClientTermsOfUseOrderByWithRelationInput | ClientTermsOfUseOrderByWithRelationInput[]
    cursor?: ClientTermsOfUseWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClientTermsOfUseScalarFieldEnum | ClientTermsOfUseScalarFieldEnum[]
  }

  /**
   * TermsOfUse without action
   */
  export type TermsOfUseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TermsOfUse
     */
    select?: TermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TermsOfUse
     */
    omit?: TermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TermsOfUseInclude<ExtArgs> | null
  }


  /**
   * Model ClientTermsOfUse
   */

  export type AggregateClientTermsOfUse = {
    _count: ClientTermsOfUseCountAggregateOutputType | null
    _min: ClientTermsOfUseMinAggregateOutputType | null
    _max: ClientTermsOfUseMaxAggregateOutputType | null
  }

  export type ClientTermsOfUseMinAggregateOutputType = {
    id: string | null
    clientId: string | null
    termsId: string | null
    acceptedAt: Date | null
  }

  export type ClientTermsOfUseMaxAggregateOutputType = {
    id: string | null
    clientId: string | null
    termsId: string | null
    acceptedAt: Date | null
  }

  export type ClientTermsOfUseCountAggregateOutputType = {
    id: number
    clientId: number
    termsId: number
    acceptedAt: number
    _all: number
  }


  export type ClientTermsOfUseMinAggregateInputType = {
    id?: true
    clientId?: true
    termsId?: true
    acceptedAt?: true
  }

  export type ClientTermsOfUseMaxAggregateInputType = {
    id?: true
    clientId?: true
    termsId?: true
    acceptedAt?: true
  }

  export type ClientTermsOfUseCountAggregateInputType = {
    id?: true
    clientId?: true
    termsId?: true
    acceptedAt?: true
    _all?: true
  }

  export type ClientTermsOfUseAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientTermsOfUse to aggregate.
     */
    where?: ClientTermsOfUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTermsOfUses to fetch.
     */
    orderBy?: ClientTermsOfUseOrderByWithRelationInput | ClientTermsOfUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientTermsOfUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTermsOfUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTermsOfUses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClientTermsOfUses
    **/
    _count?: true | ClientTermsOfUseCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientTermsOfUseMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientTermsOfUseMaxAggregateInputType
  }

  export type GetClientTermsOfUseAggregateType<T extends ClientTermsOfUseAggregateArgs> = {
        [P in keyof T & keyof AggregateClientTermsOfUse]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClientTermsOfUse[P]>
      : GetScalarType<T[P], AggregateClientTermsOfUse[P]>
  }




  export type ClientTermsOfUseGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientTermsOfUseWhereInput
    orderBy?: ClientTermsOfUseOrderByWithAggregationInput | ClientTermsOfUseOrderByWithAggregationInput[]
    by: ClientTermsOfUseScalarFieldEnum[] | ClientTermsOfUseScalarFieldEnum
    having?: ClientTermsOfUseScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientTermsOfUseCountAggregateInputType | true
    _min?: ClientTermsOfUseMinAggregateInputType
    _max?: ClientTermsOfUseMaxAggregateInputType
  }

  export type ClientTermsOfUseGroupByOutputType = {
    id: string
    clientId: string
    termsId: string
    acceptedAt: Date
    _count: ClientTermsOfUseCountAggregateOutputType | null
    _min: ClientTermsOfUseMinAggregateOutputType | null
    _max: ClientTermsOfUseMaxAggregateOutputType | null
  }

  type GetClientTermsOfUseGroupByPayload<T extends ClientTermsOfUseGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientTermsOfUseGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientTermsOfUseGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientTermsOfUseGroupByOutputType[P]>
            : GetScalarType<T[P], ClientTermsOfUseGroupByOutputType[P]>
        }
      >
    >


  export type ClientTermsOfUseSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    termsId?: boolean
    acceptedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    terms?: boolean | TermsOfUseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientTermsOfUse"]>

  export type ClientTermsOfUseSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    termsId?: boolean
    acceptedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    terms?: boolean | TermsOfUseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientTermsOfUse"]>

  export type ClientTermsOfUseSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clientId?: boolean
    termsId?: boolean
    acceptedAt?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    terms?: boolean | TermsOfUseDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["clientTermsOfUse"]>

  export type ClientTermsOfUseSelectScalar = {
    id?: boolean
    clientId?: boolean
    termsId?: boolean
    acceptedAt?: boolean
  }

  export type ClientTermsOfUseOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clientId" | "termsId" | "acceptedAt", ExtArgs["result"]["clientTermsOfUse"]>
  export type ClientTermsOfUseInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    terms?: boolean | TermsOfUseDefaultArgs<ExtArgs>
  }
  export type ClientTermsOfUseIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    terms?: boolean | TermsOfUseDefaultArgs<ExtArgs>
  }
  export type ClientTermsOfUseIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    terms?: boolean | TermsOfUseDefaultArgs<ExtArgs>
  }

  export type $ClientTermsOfUsePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClientTermsOfUse"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      terms: Prisma.$TermsOfUsePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clientId: string
      termsId: string
      acceptedAt: Date
    }, ExtArgs["result"]["clientTermsOfUse"]>
    composites: {}
  }

  type ClientTermsOfUseGetPayload<S extends boolean | null | undefined | ClientTermsOfUseDefaultArgs> = $Result.GetResult<Prisma.$ClientTermsOfUsePayload, S>

  type ClientTermsOfUseCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientTermsOfUseFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientTermsOfUseCountAggregateInputType | true
    }

  export interface ClientTermsOfUseDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClientTermsOfUse'], meta: { name: 'ClientTermsOfUse' } }
    /**
     * Find zero or one ClientTermsOfUse that matches the filter.
     * @param {ClientTermsOfUseFindUniqueArgs} args - Arguments to find a ClientTermsOfUse
     * @example
     * // Get one ClientTermsOfUse
     * const clientTermsOfUse = await prisma.clientTermsOfUse.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientTermsOfUseFindUniqueArgs>(args: SelectSubset<T, ClientTermsOfUseFindUniqueArgs<ExtArgs>>): Prisma__ClientTermsOfUseClient<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ClientTermsOfUse that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientTermsOfUseFindUniqueOrThrowArgs} args - Arguments to find a ClientTermsOfUse
     * @example
     * // Get one ClientTermsOfUse
     * const clientTermsOfUse = await prisma.clientTermsOfUse.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientTermsOfUseFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientTermsOfUseFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientTermsOfUseClient<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientTermsOfUse that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTermsOfUseFindFirstArgs} args - Arguments to find a ClientTermsOfUse
     * @example
     * // Get one ClientTermsOfUse
     * const clientTermsOfUse = await prisma.clientTermsOfUse.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientTermsOfUseFindFirstArgs>(args?: SelectSubset<T, ClientTermsOfUseFindFirstArgs<ExtArgs>>): Prisma__ClientTermsOfUseClient<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ClientTermsOfUse that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTermsOfUseFindFirstOrThrowArgs} args - Arguments to find a ClientTermsOfUse
     * @example
     * // Get one ClientTermsOfUse
     * const clientTermsOfUse = await prisma.clientTermsOfUse.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientTermsOfUseFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientTermsOfUseFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientTermsOfUseClient<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ClientTermsOfUses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTermsOfUseFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClientTermsOfUses
     * const clientTermsOfUses = await prisma.clientTermsOfUse.findMany()
     * 
     * // Get first 10 ClientTermsOfUses
     * const clientTermsOfUses = await prisma.clientTermsOfUse.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientTermsOfUseWithIdOnly = await prisma.clientTermsOfUse.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientTermsOfUseFindManyArgs>(args?: SelectSubset<T, ClientTermsOfUseFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ClientTermsOfUse.
     * @param {ClientTermsOfUseCreateArgs} args - Arguments to create a ClientTermsOfUse.
     * @example
     * // Create one ClientTermsOfUse
     * const ClientTermsOfUse = await prisma.clientTermsOfUse.create({
     *   data: {
     *     // ... data to create a ClientTermsOfUse
     *   }
     * })
     * 
     */
    create<T extends ClientTermsOfUseCreateArgs>(args: SelectSubset<T, ClientTermsOfUseCreateArgs<ExtArgs>>): Prisma__ClientTermsOfUseClient<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ClientTermsOfUses.
     * @param {ClientTermsOfUseCreateManyArgs} args - Arguments to create many ClientTermsOfUses.
     * @example
     * // Create many ClientTermsOfUses
     * const clientTermsOfUse = await prisma.clientTermsOfUse.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientTermsOfUseCreateManyArgs>(args?: SelectSubset<T, ClientTermsOfUseCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClientTermsOfUses and returns the data saved in the database.
     * @param {ClientTermsOfUseCreateManyAndReturnArgs} args - Arguments to create many ClientTermsOfUses.
     * @example
     * // Create many ClientTermsOfUses
     * const clientTermsOfUse = await prisma.clientTermsOfUse.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClientTermsOfUses and only return the `id`
     * const clientTermsOfUseWithIdOnly = await prisma.clientTermsOfUse.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientTermsOfUseCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientTermsOfUseCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ClientTermsOfUse.
     * @param {ClientTermsOfUseDeleteArgs} args - Arguments to delete one ClientTermsOfUse.
     * @example
     * // Delete one ClientTermsOfUse
     * const ClientTermsOfUse = await prisma.clientTermsOfUse.delete({
     *   where: {
     *     // ... filter to delete one ClientTermsOfUse
     *   }
     * })
     * 
     */
    delete<T extends ClientTermsOfUseDeleteArgs>(args: SelectSubset<T, ClientTermsOfUseDeleteArgs<ExtArgs>>): Prisma__ClientTermsOfUseClient<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ClientTermsOfUse.
     * @param {ClientTermsOfUseUpdateArgs} args - Arguments to update one ClientTermsOfUse.
     * @example
     * // Update one ClientTermsOfUse
     * const clientTermsOfUse = await prisma.clientTermsOfUse.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientTermsOfUseUpdateArgs>(args: SelectSubset<T, ClientTermsOfUseUpdateArgs<ExtArgs>>): Prisma__ClientTermsOfUseClient<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ClientTermsOfUses.
     * @param {ClientTermsOfUseDeleteManyArgs} args - Arguments to filter ClientTermsOfUses to delete.
     * @example
     * // Delete a few ClientTermsOfUses
     * const { count } = await prisma.clientTermsOfUse.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientTermsOfUseDeleteManyArgs>(args?: SelectSubset<T, ClientTermsOfUseDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientTermsOfUses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTermsOfUseUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClientTermsOfUses
     * const clientTermsOfUse = await prisma.clientTermsOfUse.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientTermsOfUseUpdateManyArgs>(args: SelectSubset<T, ClientTermsOfUseUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClientTermsOfUses and returns the data updated in the database.
     * @param {ClientTermsOfUseUpdateManyAndReturnArgs} args - Arguments to update many ClientTermsOfUses.
     * @example
     * // Update many ClientTermsOfUses
     * const clientTermsOfUse = await prisma.clientTermsOfUse.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ClientTermsOfUses and only return the `id`
     * const clientTermsOfUseWithIdOnly = await prisma.clientTermsOfUse.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ClientTermsOfUseUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientTermsOfUseUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ClientTermsOfUse.
     * @param {ClientTermsOfUseUpsertArgs} args - Arguments to update or create a ClientTermsOfUse.
     * @example
     * // Update or create a ClientTermsOfUse
     * const clientTermsOfUse = await prisma.clientTermsOfUse.upsert({
     *   create: {
     *     // ... data to create a ClientTermsOfUse
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClientTermsOfUse we want to update
     *   }
     * })
     */
    upsert<T extends ClientTermsOfUseUpsertArgs>(args: SelectSubset<T, ClientTermsOfUseUpsertArgs<ExtArgs>>): Prisma__ClientTermsOfUseClient<$Result.GetResult<Prisma.$ClientTermsOfUsePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ClientTermsOfUses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTermsOfUseCountArgs} args - Arguments to filter ClientTermsOfUses to count.
     * @example
     * // Count the number of ClientTermsOfUses
     * const count = await prisma.clientTermsOfUse.count({
     *   where: {
     *     // ... the filter for the ClientTermsOfUses we want to count
     *   }
     * })
    **/
    count<T extends ClientTermsOfUseCountArgs>(
      args?: Subset<T, ClientTermsOfUseCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientTermsOfUseCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClientTermsOfUse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTermsOfUseAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ClientTermsOfUseAggregateArgs>(args: Subset<T, ClientTermsOfUseAggregateArgs>): Prisma.PrismaPromise<GetClientTermsOfUseAggregateType<T>>

    /**
     * Group by ClientTermsOfUse.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientTermsOfUseGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ClientTermsOfUseGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientTermsOfUseGroupByArgs['orderBy'] }
        : { orderBy?: ClientTermsOfUseGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ClientTermsOfUseGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientTermsOfUseGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClientTermsOfUse model
   */
  readonly fields: ClientTermsOfUseFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClientTermsOfUse.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientTermsOfUseClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    terms<T extends TermsOfUseDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TermsOfUseDefaultArgs<ExtArgs>>): Prisma__TermsOfUseClient<$Result.GetResult<Prisma.$TermsOfUsePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the ClientTermsOfUse model
   */
  interface ClientTermsOfUseFieldRefs {
    readonly id: FieldRef<"ClientTermsOfUse", 'String'>
    readonly clientId: FieldRef<"ClientTermsOfUse", 'String'>
    readonly termsId: FieldRef<"ClientTermsOfUse", 'String'>
    readonly acceptedAt: FieldRef<"ClientTermsOfUse", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClientTermsOfUse findUnique
   */
  export type ClientTermsOfUseFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which ClientTermsOfUse to fetch.
     */
    where: ClientTermsOfUseWhereUniqueInput
  }

  /**
   * ClientTermsOfUse findUniqueOrThrow
   */
  export type ClientTermsOfUseFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which ClientTermsOfUse to fetch.
     */
    where: ClientTermsOfUseWhereUniqueInput
  }

  /**
   * ClientTermsOfUse findFirst
   */
  export type ClientTermsOfUseFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which ClientTermsOfUse to fetch.
     */
    where?: ClientTermsOfUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTermsOfUses to fetch.
     */
    orderBy?: ClientTermsOfUseOrderByWithRelationInput | ClientTermsOfUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientTermsOfUses.
     */
    cursor?: ClientTermsOfUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTermsOfUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTermsOfUses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientTermsOfUses.
     */
    distinct?: ClientTermsOfUseScalarFieldEnum | ClientTermsOfUseScalarFieldEnum[]
  }

  /**
   * ClientTermsOfUse findFirstOrThrow
   */
  export type ClientTermsOfUseFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which ClientTermsOfUse to fetch.
     */
    where?: ClientTermsOfUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTermsOfUses to fetch.
     */
    orderBy?: ClientTermsOfUseOrderByWithRelationInput | ClientTermsOfUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClientTermsOfUses.
     */
    cursor?: ClientTermsOfUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTermsOfUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTermsOfUses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClientTermsOfUses.
     */
    distinct?: ClientTermsOfUseScalarFieldEnum | ClientTermsOfUseScalarFieldEnum[]
  }

  /**
   * ClientTermsOfUse findMany
   */
  export type ClientTermsOfUseFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    /**
     * Filter, which ClientTermsOfUses to fetch.
     */
    where?: ClientTermsOfUseWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClientTermsOfUses to fetch.
     */
    orderBy?: ClientTermsOfUseOrderByWithRelationInput | ClientTermsOfUseOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClientTermsOfUses.
     */
    cursor?: ClientTermsOfUseWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClientTermsOfUses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClientTermsOfUses.
     */
    skip?: number
    distinct?: ClientTermsOfUseScalarFieldEnum | ClientTermsOfUseScalarFieldEnum[]
  }

  /**
   * ClientTermsOfUse create
   */
  export type ClientTermsOfUseCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    /**
     * The data needed to create a ClientTermsOfUse.
     */
    data: XOR<ClientTermsOfUseCreateInput, ClientTermsOfUseUncheckedCreateInput>
  }

  /**
   * ClientTermsOfUse createMany
   */
  export type ClientTermsOfUseCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClientTermsOfUses.
     */
    data: ClientTermsOfUseCreateManyInput | ClientTermsOfUseCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ClientTermsOfUse createManyAndReturn
   */
  export type ClientTermsOfUseCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * The data used to create many ClientTermsOfUses.
     */
    data: ClientTermsOfUseCreateManyInput | ClientTermsOfUseCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientTermsOfUse update
   */
  export type ClientTermsOfUseUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    /**
     * The data needed to update a ClientTermsOfUse.
     */
    data: XOR<ClientTermsOfUseUpdateInput, ClientTermsOfUseUncheckedUpdateInput>
    /**
     * Choose, which ClientTermsOfUse to update.
     */
    where: ClientTermsOfUseWhereUniqueInput
  }

  /**
   * ClientTermsOfUse updateMany
   */
  export type ClientTermsOfUseUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClientTermsOfUses.
     */
    data: XOR<ClientTermsOfUseUpdateManyMutationInput, ClientTermsOfUseUncheckedUpdateManyInput>
    /**
     * Filter which ClientTermsOfUses to update
     */
    where?: ClientTermsOfUseWhereInput
    /**
     * Limit how many ClientTermsOfUses to update.
     */
    limit?: number
  }

  /**
   * ClientTermsOfUse updateManyAndReturn
   */
  export type ClientTermsOfUseUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * The data used to update ClientTermsOfUses.
     */
    data: XOR<ClientTermsOfUseUpdateManyMutationInput, ClientTermsOfUseUncheckedUpdateManyInput>
    /**
     * Filter which ClientTermsOfUses to update
     */
    where?: ClientTermsOfUseWhereInput
    /**
     * Limit how many ClientTermsOfUses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClientTermsOfUse upsert
   */
  export type ClientTermsOfUseUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    /**
     * The filter to search for the ClientTermsOfUse to update in case it exists.
     */
    where: ClientTermsOfUseWhereUniqueInput
    /**
     * In case the ClientTermsOfUse found by the `where` argument doesn't exist, create a new ClientTermsOfUse with this data.
     */
    create: XOR<ClientTermsOfUseCreateInput, ClientTermsOfUseUncheckedCreateInput>
    /**
     * In case the ClientTermsOfUse was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientTermsOfUseUpdateInput, ClientTermsOfUseUncheckedUpdateInput>
  }

  /**
   * ClientTermsOfUse delete
   */
  export type ClientTermsOfUseDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
    /**
     * Filter which ClientTermsOfUse to delete.
     */
    where: ClientTermsOfUseWhereUniqueInput
  }

  /**
   * ClientTermsOfUse deleteMany
   */
  export type ClientTermsOfUseDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClientTermsOfUses to delete
     */
    where?: ClientTermsOfUseWhereInput
    /**
     * Limit how many ClientTermsOfUses to delete.
     */
    limit?: number
  }

  /**
   * ClientTermsOfUse without action
   */
  export type ClientTermsOfUseDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientTermsOfUse
     */
    select?: ClientTermsOfUseSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ClientTermsOfUse
     */
    omit?: ClientTermsOfUseOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientTermsOfUseInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    role: 'role',
    createdOn: 'createdOn',
    updatedOn: 'updatedOn'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    address: 'address',
    createdOn: 'createdOn',
    updatedOn: 'updatedOn'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const ClientUserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    cpfCnpj: 'cpfCnpj',
    phone: 'phone',
    role: 'role',
    clientId: 'clientId',
    createdOn: 'createdOn',
    updatedOn: 'updatedOn'
  };

  export type ClientUserScalarFieldEnum = (typeof ClientUserScalarFieldEnum)[keyof typeof ClientUserScalarFieldEnum]


  export const PlanScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    price: 'price',
    durationDays: 'durationDays',
    isTrial: 'isTrial',
    createdOn: 'createdOn'
  };

  export type PlanScalarFieldEnum = (typeof PlanScalarFieldEnum)[keyof typeof PlanScalarFieldEnum]


  export const ClientPlanScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    planId: 'planId',
    current: 'current',
    createdOn: 'createdOn'
  };

  export type ClientPlanScalarFieldEnum = (typeof ClientPlanScalarFieldEnum)[keyof typeof ClientPlanScalarFieldEnum]


  export const ClientPeriodPlanScalarFieldEnum: {
    id: 'id',
    clientPlanId: 'clientPlanId',
    startsAt: 'startsAt',
    expiresAt: 'expiresAt',
    isTrial: 'isTrial',
    isCurrent: 'isCurrent',
    wasConfirmed: 'wasConfirmed',
    createdOn: 'createdOn'
  };

  export type ClientPeriodPlanScalarFieldEnum = (typeof ClientPeriodPlanScalarFieldEnum)[keyof typeof ClientPeriodPlanScalarFieldEnum]


  export const ClientRequestScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    clientUserId: 'clientUserId',
    requestType: 'requestType',
    generatedToken: 'generatedToken',
    generatedCode: 'generatedCode',
    expires: 'expires',
    createdOn: 'createdOn'
  };

  export type ClientRequestScalarFieldEnum = (typeof ClientRequestScalarFieldEnum)[keyof typeof ClientRequestScalarFieldEnum]


  export const TermsOfUseScalarFieldEnum: {
    id: 'id',
    fileUrl: 'fileUrl',
    description: 'description',
    isCurrent: 'isCurrent',
    createdOn: 'createdOn'
  };

  export type TermsOfUseScalarFieldEnum = (typeof TermsOfUseScalarFieldEnum)[keyof typeof TermsOfUseScalarFieldEnum]


  export const ClientTermsOfUseScalarFieldEnum: {
    id: 'id',
    clientId: 'clientId',
    termsId: 'termsId',
    acceptedAt: 'acceptedAt'
  };

  export type ClientTermsOfUseScalarFieldEnum = (typeof ClientTermsOfUseScalarFieldEnum)[keyof typeof ClientTermsOfUseScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Role'
   */
  export type EnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role'>
    


  /**
   * Reference to a field of type 'Role[]'
   */
  export type ListEnumRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Role[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'BigInt'
   */
  export type BigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt'>
    


  /**
   * Reference to a field of type 'BigInt[]'
   */
  export type ListBigIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'BigInt[]'>
    


  /**
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'RequestType'
   */
  export type EnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType'>
    


  /**
   * Reference to a field of type 'RequestType[]'
   */
  export type ListEnumRequestTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'RequestType[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdOn?: DateTimeFilter<"User"> | Date | string
    updatedOn?: DateTimeFilter<"User"> | Date | string
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    role?: EnumRoleFilter<"User"> | $Enums.Role
    createdOn?: DateTimeFilter<"User"> | Date | string
    updatedOn?: DateTimeFilter<"User"> | Date | string
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    role?: EnumRoleWithAggregatesFilter<"User"> | $Enums.Role
    createdOn?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedOn?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: StringFilter<"Client"> | string
    name?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    createdOn?: DateTimeFilter<"Client"> | Date | string
    updatedOn?: DateTimeFilter<"Client"> | Date | string
    clientPlans?: ClientPlanListRelationFilter
    clientUsers?: ClientUserListRelationFilter
    requests?: ClientRequestListRelationFilter
    termsAccepted?: ClientTermsOfUseListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
    clientPlans?: ClientPlanOrderByRelationAggregateInput
    clientUsers?: ClientUserOrderByRelationAggregateInput
    requests?: ClientRequestOrderByRelationAggregateInput
    termsAccepted?: ClientTermsOfUseOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    address?: StringFilter<"Client"> | string
    createdOn?: DateTimeFilter<"Client"> | Date | string
    updatedOn?: DateTimeFilter<"Client"> | Date | string
    clientPlans?: ClientPlanListRelationFilter
    clientUsers?: ClientUserListRelationFilter
    requests?: ClientRequestListRelationFilter
    termsAccepted?: ClientTermsOfUseListRelationFilter
  }, "id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Client"> | string
    name?: StringWithAggregatesFilter<"Client"> | string
    address?: StringWithAggregatesFilter<"Client"> | string
    createdOn?: DateTimeWithAggregatesFilter<"Client"> | Date | string
    updatedOn?: DateTimeWithAggregatesFilter<"Client"> | Date | string
  }

  export type ClientUserWhereInput = {
    AND?: ClientUserWhereInput | ClientUserWhereInput[]
    OR?: ClientUserWhereInput[]
    NOT?: ClientUserWhereInput | ClientUserWhereInput[]
    id?: StringFilter<"ClientUser"> | string
    name?: StringFilter<"ClientUser"> | string
    email?: StringFilter<"ClientUser"> | string
    password?: StringFilter<"ClientUser"> | string
    cpfCnpj?: BigIntFilter<"ClientUser"> | bigint | number
    phone?: StringFilter<"ClientUser"> | string
    role?: EnumRoleFilter<"ClientUser"> | $Enums.Role
    clientId?: StringFilter<"ClientUser"> | string
    createdOn?: DateTimeFilter<"ClientUser"> | Date | string
    updatedOn?: DateTimeFilter<"ClientUser"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    requests?: ClientRequestListRelationFilter
  }

  export type ClientUserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpfCnpj?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
    client?: ClientOrderByWithRelationInput
    requests?: ClientRequestOrderByRelationAggregateInput
  }

  export type ClientUserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ClientUserWhereInput | ClientUserWhereInput[]
    OR?: ClientUserWhereInput[]
    NOT?: ClientUserWhereInput | ClientUserWhereInput[]
    name?: StringFilter<"ClientUser"> | string
    password?: StringFilter<"ClientUser"> | string
    cpfCnpj?: BigIntFilter<"ClientUser"> | bigint | number
    phone?: StringFilter<"ClientUser"> | string
    role?: EnumRoleFilter<"ClientUser"> | $Enums.Role
    clientId?: StringFilter<"ClientUser"> | string
    createdOn?: DateTimeFilter<"ClientUser"> | Date | string
    updatedOn?: DateTimeFilter<"ClientUser"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    requests?: ClientRequestListRelationFilter
  }, "id" | "email">

  export type ClientUserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpfCnpj?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
    _count?: ClientUserCountOrderByAggregateInput
    _avg?: ClientUserAvgOrderByAggregateInput
    _max?: ClientUserMaxOrderByAggregateInput
    _min?: ClientUserMinOrderByAggregateInput
    _sum?: ClientUserSumOrderByAggregateInput
  }

  export type ClientUserScalarWhereWithAggregatesInput = {
    AND?: ClientUserScalarWhereWithAggregatesInput | ClientUserScalarWhereWithAggregatesInput[]
    OR?: ClientUserScalarWhereWithAggregatesInput[]
    NOT?: ClientUserScalarWhereWithAggregatesInput | ClientUserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientUser"> | string
    name?: StringWithAggregatesFilter<"ClientUser"> | string
    email?: StringWithAggregatesFilter<"ClientUser"> | string
    password?: StringWithAggregatesFilter<"ClientUser"> | string
    cpfCnpj?: BigIntWithAggregatesFilter<"ClientUser"> | bigint | number
    phone?: StringWithAggregatesFilter<"ClientUser"> | string
    role?: EnumRoleWithAggregatesFilter<"ClientUser"> | $Enums.Role
    clientId?: StringWithAggregatesFilter<"ClientUser"> | string
    createdOn?: DateTimeWithAggregatesFilter<"ClientUser"> | Date | string
    updatedOn?: DateTimeWithAggregatesFilter<"ClientUser"> | Date | string
  }

  export type PlanWhereInput = {
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    id?: StringFilter<"Plan"> | string
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    durationDays?: IntFilter<"Plan"> | number
    isTrial?: BoolFilter<"Plan"> | boolean
    createdOn?: DateTimeFilter<"Plan"> | Date | string
    clientPlans?: ClientPlanListRelationFilter
  }

  export type PlanOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    isTrial?: SortOrder
    createdOn?: SortOrder
    clientPlans?: ClientPlanOrderByRelationAggregateInput
  }

  export type PlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PlanWhereInput | PlanWhereInput[]
    OR?: PlanWhereInput[]
    NOT?: PlanWhereInput | PlanWhereInput[]
    name?: StringFilter<"Plan"> | string
    description?: StringNullableFilter<"Plan"> | string | null
    price?: DecimalFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    durationDays?: IntFilter<"Plan"> | number
    isTrial?: BoolFilter<"Plan"> | boolean
    createdOn?: DateTimeFilter<"Plan"> | Date | string
    clientPlans?: ClientPlanListRelationFilter
  }, "id">

  export type PlanOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    isTrial?: SortOrder
    createdOn?: SortOrder
    _count?: PlanCountOrderByAggregateInput
    _avg?: PlanAvgOrderByAggregateInput
    _max?: PlanMaxOrderByAggregateInput
    _min?: PlanMinOrderByAggregateInput
    _sum?: PlanSumOrderByAggregateInput
  }

  export type PlanScalarWhereWithAggregatesInput = {
    AND?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    OR?: PlanScalarWhereWithAggregatesInput[]
    NOT?: PlanScalarWhereWithAggregatesInput | PlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Plan"> | string
    name?: StringWithAggregatesFilter<"Plan"> | string
    description?: StringNullableWithAggregatesFilter<"Plan"> | string | null
    price?: DecimalWithAggregatesFilter<"Plan"> | Decimal | DecimalJsLike | number | string
    durationDays?: IntWithAggregatesFilter<"Plan"> | number
    isTrial?: BoolWithAggregatesFilter<"Plan"> | boolean
    createdOn?: DateTimeWithAggregatesFilter<"Plan"> | Date | string
  }

  export type ClientPlanWhereInput = {
    AND?: ClientPlanWhereInput | ClientPlanWhereInput[]
    OR?: ClientPlanWhereInput[]
    NOT?: ClientPlanWhereInput | ClientPlanWhereInput[]
    id?: StringFilter<"ClientPlan"> | string
    clientId?: StringFilter<"ClientPlan"> | string
    planId?: StringFilter<"ClientPlan"> | string
    current?: BoolFilter<"ClientPlan"> | boolean
    createdOn?: DateTimeFilter<"ClientPlan"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    periods?: ClientPeriodPlanListRelationFilter
  }

  export type ClientPlanOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    current?: SortOrder
    createdOn?: SortOrder
    client?: ClientOrderByWithRelationInput
    plan?: PlanOrderByWithRelationInput
    periods?: ClientPeriodPlanOrderByRelationAggregateInput
  }

  export type ClientPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientPlanWhereInput | ClientPlanWhereInput[]
    OR?: ClientPlanWhereInput[]
    NOT?: ClientPlanWhereInput | ClientPlanWhereInput[]
    clientId?: StringFilter<"ClientPlan"> | string
    planId?: StringFilter<"ClientPlan"> | string
    current?: BoolFilter<"ClientPlan"> | boolean
    createdOn?: DateTimeFilter<"ClientPlan"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    plan?: XOR<PlanScalarRelationFilter, PlanWhereInput>
    periods?: ClientPeriodPlanListRelationFilter
  }, "id">

  export type ClientPlanOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    current?: SortOrder
    createdOn?: SortOrder
    _count?: ClientPlanCountOrderByAggregateInput
    _max?: ClientPlanMaxOrderByAggregateInput
    _min?: ClientPlanMinOrderByAggregateInput
  }

  export type ClientPlanScalarWhereWithAggregatesInput = {
    AND?: ClientPlanScalarWhereWithAggregatesInput | ClientPlanScalarWhereWithAggregatesInput[]
    OR?: ClientPlanScalarWhereWithAggregatesInput[]
    NOT?: ClientPlanScalarWhereWithAggregatesInput | ClientPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientPlan"> | string
    clientId?: StringWithAggregatesFilter<"ClientPlan"> | string
    planId?: StringWithAggregatesFilter<"ClientPlan"> | string
    current?: BoolWithAggregatesFilter<"ClientPlan"> | boolean
    createdOn?: DateTimeWithAggregatesFilter<"ClientPlan"> | Date | string
  }

  export type ClientPeriodPlanWhereInput = {
    AND?: ClientPeriodPlanWhereInput | ClientPeriodPlanWhereInput[]
    OR?: ClientPeriodPlanWhereInput[]
    NOT?: ClientPeriodPlanWhereInput | ClientPeriodPlanWhereInput[]
    id?: StringFilter<"ClientPeriodPlan"> | string
    clientPlanId?: StringFilter<"ClientPeriodPlan"> | string
    startsAt?: DateTimeFilter<"ClientPeriodPlan"> | Date | string
    expiresAt?: DateTimeFilter<"ClientPeriodPlan"> | Date | string
    isTrial?: BoolFilter<"ClientPeriodPlan"> | boolean
    isCurrent?: BoolFilter<"ClientPeriodPlan"> | boolean
    wasConfirmed?: BoolFilter<"ClientPeriodPlan"> | boolean
    createdOn?: DateTimeFilter<"ClientPeriodPlan"> | Date | string
    clientPlan?: XOR<ClientPlanScalarRelationFilter, ClientPlanWhereInput>
  }

  export type ClientPeriodPlanOrderByWithRelationInput = {
    id?: SortOrder
    clientPlanId?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    isTrial?: SortOrder
    isCurrent?: SortOrder
    wasConfirmed?: SortOrder
    createdOn?: SortOrder
    clientPlan?: ClientPlanOrderByWithRelationInput
  }

  export type ClientPeriodPlanWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientPeriodPlanWhereInput | ClientPeriodPlanWhereInput[]
    OR?: ClientPeriodPlanWhereInput[]
    NOT?: ClientPeriodPlanWhereInput | ClientPeriodPlanWhereInput[]
    clientPlanId?: StringFilter<"ClientPeriodPlan"> | string
    startsAt?: DateTimeFilter<"ClientPeriodPlan"> | Date | string
    expiresAt?: DateTimeFilter<"ClientPeriodPlan"> | Date | string
    isTrial?: BoolFilter<"ClientPeriodPlan"> | boolean
    isCurrent?: BoolFilter<"ClientPeriodPlan"> | boolean
    wasConfirmed?: BoolFilter<"ClientPeriodPlan"> | boolean
    createdOn?: DateTimeFilter<"ClientPeriodPlan"> | Date | string
    clientPlan?: XOR<ClientPlanScalarRelationFilter, ClientPlanWhereInput>
  }, "id">

  export type ClientPeriodPlanOrderByWithAggregationInput = {
    id?: SortOrder
    clientPlanId?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    isTrial?: SortOrder
    isCurrent?: SortOrder
    wasConfirmed?: SortOrder
    createdOn?: SortOrder
    _count?: ClientPeriodPlanCountOrderByAggregateInput
    _max?: ClientPeriodPlanMaxOrderByAggregateInput
    _min?: ClientPeriodPlanMinOrderByAggregateInput
  }

  export type ClientPeriodPlanScalarWhereWithAggregatesInput = {
    AND?: ClientPeriodPlanScalarWhereWithAggregatesInput | ClientPeriodPlanScalarWhereWithAggregatesInput[]
    OR?: ClientPeriodPlanScalarWhereWithAggregatesInput[]
    NOT?: ClientPeriodPlanScalarWhereWithAggregatesInput | ClientPeriodPlanScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientPeriodPlan"> | string
    clientPlanId?: StringWithAggregatesFilter<"ClientPeriodPlan"> | string
    startsAt?: DateTimeWithAggregatesFilter<"ClientPeriodPlan"> | Date | string
    expiresAt?: DateTimeWithAggregatesFilter<"ClientPeriodPlan"> | Date | string
    isTrial?: BoolWithAggregatesFilter<"ClientPeriodPlan"> | boolean
    isCurrent?: BoolWithAggregatesFilter<"ClientPeriodPlan"> | boolean
    wasConfirmed?: BoolWithAggregatesFilter<"ClientPeriodPlan"> | boolean
    createdOn?: DateTimeWithAggregatesFilter<"ClientPeriodPlan"> | Date | string
  }

  export type ClientRequestWhereInput = {
    AND?: ClientRequestWhereInput | ClientRequestWhereInput[]
    OR?: ClientRequestWhereInput[]
    NOT?: ClientRequestWhereInput | ClientRequestWhereInput[]
    id?: StringFilter<"ClientRequest"> | string
    clientId?: StringFilter<"ClientRequest"> | string
    clientUserId?: StringFilter<"ClientRequest"> | string
    requestType?: EnumRequestTypeFilter<"ClientRequest"> | $Enums.RequestType
    generatedToken?: StringNullableFilter<"ClientRequest"> | string | null
    generatedCode?: StringNullableFilter<"ClientRequest"> | string | null
    expires?: DateTimeFilter<"ClientRequest"> | Date | string
    createdOn?: DateTimeFilter<"ClientRequest"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    clientUser?: XOR<ClientUserScalarRelationFilter, ClientUserWhereInput>
  }

  export type ClientRequestOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientUserId?: SortOrder
    requestType?: SortOrder
    generatedToken?: SortOrderInput | SortOrder
    generatedCode?: SortOrderInput | SortOrder
    expires?: SortOrder
    createdOn?: SortOrder
    client?: ClientOrderByWithRelationInput
    clientUser?: ClientUserOrderByWithRelationInput
  }

  export type ClientRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientRequestWhereInput | ClientRequestWhereInput[]
    OR?: ClientRequestWhereInput[]
    NOT?: ClientRequestWhereInput | ClientRequestWhereInput[]
    clientId?: StringFilter<"ClientRequest"> | string
    clientUserId?: StringFilter<"ClientRequest"> | string
    requestType?: EnumRequestTypeFilter<"ClientRequest"> | $Enums.RequestType
    generatedToken?: StringNullableFilter<"ClientRequest"> | string | null
    generatedCode?: StringNullableFilter<"ClientRequest"> | string | null
    expires?: DateTimeFilter<"ClientRequest"> | Date | string
    createdOn?: DateTimeFilter<"ClientRequest"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    clientUser?: XOR<ClientUserScalarRelationFilter, ClientUserWhereInput>
  }, "id">

  export type ClientRequestOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientUserId?: SortOrder
    requestType?: SortOrder
    generatedToken?: SortOrderInput | SortOrder
    generatedCode?: SortOrderInput | SortOrder
    expires?: SortOrder
    createdOn?: SortOrder
    _count?: ClientRequestCountOrderByAggregateInput
    _max?: ClientRequestMaxOrderByAggregateInput
    _min?: ClientRequestMinOrderByAggregateInput
  }

  export type ClientRequestScalarWhereWithAggregatesInput = {
    AND?: ClientRequestScalarWhereWithAggregatesInput | ClientRequestScalarWhereWithAggregatesInput[]
    OR?: ClientRequestScalarWhereWithAggregatesInput[]
    NOT?: ClientRequestScalarWhereWithAggregatesInput | ClientRequestScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientRequest"> | string
    clientId?: StringWithAggregatesFilter<"ClientRequest"> | string
    clientUserId?: StringWithAggregatesFilter<"ClientRequest"> | string
    requestType?: EnumRequestTypeWithAggregatesFilter<"ClientRequest"> | $Enums.RequestType
    generatedToken?: StringNullableWithAggregatesFilter<"ClientRequest"> | string | null
    generatedCode?: StringNullableWithAggregatesFilter<"ClientRequest"> | string | null
    expires?: DateTimeWithAggregatesFilter<"ClientRequest"> | Date | string
    createdOn?: DateTimeWithAggregatesFilter<"ClientRequest"> | Date | string
  }

  export type TermsOfUseWhereInput = {
    AND?: TermsOfUseWhereInput | TermsOfUseWhereInput[]
    OR?: TermsOfUseWhereInput[]
    NOT?: TermsOfUseWhereInput | TermsOfUseWhereInput[]
    id?: StringFilter<"TermsOfUse"> | string
    fileUrl?: StringFilter<"TermsOfUse"> | string
    description?: StringNullableFilter<"TermsOfUse"> | string | null
    isCurrent?: BoolFilter<"TermsOfUse"> | boolean
    createdOn?: DateTimeFilter<"TermsOfUse"> | Date | string
    acceptedBy?: ClientTermsOfUseListRelationFilter
  }

  export type TermsOfUseOrderByWithRelationInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    createdOn?: SortOrder
    acceptedBy?: ClientTermsOfUseOrderByRelationAggregateInput
  }

  export type TermsOfUseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: TermsOfUseWhereInput | TermsOfUseWhereInput[]
    OR?: TermsOfUseWhereInput[]
    NOT?: TermsOfUseWhereInput | TermsOfUseWhereInput[]
    fileUrl?: StringFilter<"TermsOfUse"> | string
    description?: StringNullableFilter<"TermsOfUse"> | string | null
    isCurrent?: BoolFilter<"TermsOfUse"> | boolean
    createdOn?: DateTimeFilter<"TermsOfUse"> | Date | string
    acceptedBy?: ClientTermsOfUseListRelationFilter
  }, "id">

  export type TermsOfUseOrderByWithAggregationInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrderInput | SortOrder
    isCurrent?: SortOrder
    createdOn?: SortOrder
    _count?: TermsOfUseCountOrderByAggregateInput
    _max?: TermsOfUseMaxOrderByAggregateInput
    _min?: TermsOfUseMinOrderByAggregateInput
  }

  export type TermsOfUseScalarWhereWithAggregatesInput = {
    AND?: TermsOfUseScalarWhereWithAggregatesInput | TermsOfUseScalarWhereWithAggregatesInput[]
    OR?: TermsOfUseScalarWhereWithAggregatesInput[]
    NOT?: TermsOfUseScalarWhereWithAggregatesInput | TermsOfUseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TermsOfUse"> | string
    fileUrl?: StringWithAggregatesFilter<"TermsOfUse"> | string
    description?: StringNullableWithAggregatesFilter<"TermsOfUse"> | string | null
    isCurrent?: BoolWithAggregatesFilter<"TermsOfUse"> | boolean
    createdOn?: DateTimeWithAggregatesFilter<"TermsOfUse"> | Date | string
  }

  export type ClientTermsOfUseWhereInput = {
    AND?: ClientTermsOfUseWhereInput | ClientTermsOfUseWhereInput[]
    OR?: ClientTermsOfUseWhereInput[]
    NOT?: ClientTermsOfUseWhereInput | ClientTermsOfUseWhereInput[]
    id?: StringFilter<"ClientTermsOfUse"> | string
    clientId?: StringFilter<"ClientTermsOfUse"> | string
    termsId?: StringFilter<"ClientTermsOfUse"> | string
    acceptedAt?: DateTimeFilter<"ClientTermsOfUse"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    terms?: XOR<TermsOfUseScalarRelationFilter, TermsOfUseWhereInput>
  }

  export type ClientTermsOfUseOrderByWithRelationInput = {
    id?: SortOrder
    clientId?: SortOrder
    termsId?: SortOrder
    acceptedAt?: SortOrder
    client?: ClientOrderByWithRelationInput
    terms?: TermsOfUseOrderByWithRelationInput
  }

  export type ClientTermsOfUseWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ClientTermsOfUseWhereInput | ClientTermsOfUseWhereInput[]
    OR?: ClientTermsOfUseWhereInput[]
    NOT?: ClientTermsOfUseWhereInput | ClientTermsOfUseWhereInput[]
    clientId?: StringFilter<"ClientTermsOfUse"> | string
    termsId?: StringFilter<"ClientTermsOfUse"> | string
    acceptedAt?: DateTimeFilter<"ClientTermsOfUse"> | Date | string
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    terms?: XOR<TermsOfUseScalarRelationFilter, TermsOfUseWhereInput>
  }, "id">

  export type ClientTermsOfUseOrderByWithAggregationInput = {
    id?: SortOrder
    clientId?: SortOrder
    termsId?: SortOrder
    acceptedAt?: SortOrder
    _count?: ClientTermsOfUseCountOrderByAggregateInput
    _max?: ClientTermsOfUseMaxOrderByAggregateInput
    _min?: ClientTermsOfUseMinOrderByAggregateInput
  }

  export type ClientTermsOfUseScalarWhereWithAggregatesInput = {
    AND?: ClientTermsOfUseScalarWhereWithAggregatesInput | ClientTermsOfUseScalarWhereWithAggregatesInput[]
    OR?: ClientTermsOfUseScalarWhereWithAggregatesInput[]
    NOT?: ClientTermsOfUseScalarWhereWithAggregatesInput | ClientTermsOfUseScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClientTermsOfUse"> | string
    clientId?: StringWithAggregatesFilter<"ClientTermsOfUse"> | string
    termsId?: StringWithAggregatesFilter<"ClientTermsOfUse"> | string
    acceptedAt?: DateTimeWithAggregatesFilter<"ClientTermsOfUse"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdOn?: Date | string
    updatedOn?: Date | string
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdOn?: Date | string
    updatedOn?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    role: $Enums.Role
    createdOn?: Date | string
    updatedOn?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientPlans?: ClientPlanCreateNestedManyWithoutClientInput
    clientUsers?: ClientUserCreateNestedManyWithoutClientInput
    requests?: ClientRequestCreateNestedManyWithoutClientInput
    termsAccepted?: ClientTermsOfUseCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientPlans?: ClientPlanUncheckedCreateNestedManyWithoutClientInput
    clientUsers?: ClientUserUncheckedCreateNestedManyWithoutClientInput
    requests?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
    termsAccepted?: ClientTermsOfUseUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUpdateManyWithoutClientNestedInput
    clientUsers?: ClientUserUpdateManyWithoutClientNestedInput
    requests?: ClientRequestUpdateManyWithoutClientNestedInput
    termsAccepted?: ClientTermsOfUseUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUncheckedUpdateManyWithoutClientNestedInput
    clientUsers?: ClientUserUncheckedUpdateManyWithoutClientNestedInput
    requests?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
    termsAccepted?: ClientTermsOfUseUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
  }

  export type ClientUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    cpfCnpj: bigint | number
    phone: string
    role: $Enums.Role
    createdOn?: Date | string
    updatedOn?: Date | string
    client: ClientCreateNestedOneWithoutClientUsersInput
    requests?: ClientRequestCreateNestedManyWithoutClientUserInput
  }

  export type ClientUserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    cpfCnpj: bigint | number
    phone: string
    role: $Enums.Role
    clientId: string
    createdOn?: Date | string
    updatedOn?: Date | string
    requests?: ClientRequestUncheckedCreateNestedManyWithoutClientUserInput
  }

  export type ClientUserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutClientUsersNestedInput
    requests?: ClientRequestUpdateManyWithoutClientUserNestedInput
  }

  export type ClientUserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clientId?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: ClientRequestUncheckedUpdateManyWithoutClientUserNestedInput
  }

  export type ClientUserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    cpfCnpj: bigint | number
    phone: string
    role: $Enums.Role
    clientId: string
    createdOn?: Date | string
    updatedOn?: Date | string
  }

  export type ClientUserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clientId?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    isTrial?: boolean
    createdOn?: Date | string
    clientPlans?: ClientPlanCreateNestedManyWithoutPlanInput
  }

  export type PlanUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    isTrial?: boolean
    createdOn?: Date | string
    clientPlans?: ClientPlanUncheckedCreateNestedManyWithoutPlanInput
  }

  export type PlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUpdateManyWithoutPlanNestedInput
  }

  export type PlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUncheckedUpdateManyWithoutPlanNestedInput
  }

  export type PlanCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    isTrial?: boolean
    createdOn?: Date | string
  }

  export type PlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPlanCreateInput = {
    id?: string
    current?: boolean
    createdOn?: Date | string
    client: ClientCreateNestedOneWithoutClientPlansInput
    plan: PlanCreateNestedOneWithoutClientPlansInput
    periods?: ClientPeriodPlanCreateNestedManyWithoutClientPlanInput
  }

  export type ClientPlanUncheckedCreateInput = {
    id?: string
    clientId: string
    planId: string
    current?: boolean
    createdOn?: Date | string
    periods?: ClientPeriodPlanUncheckedCreateNestedManyWithoutClientPlanInput
  }

  export type ClientPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutClientPlansNestedInput
    plan?: PlanUpdateOneRequiredWithoutClientPlansNestedInput
    periods?: ClientPeriodPlanUpdateManyWithoutClientPlanNestedInput
  }

  export type ClientPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    periods?: ClientPeriodPlanUncheckedUpdateManyWithoutClientPlanNestedInput
  }

  export type ClientPlanCreateManyInput = {
    id?: string
    clientId: string
    planId: string
    current?: boolean
    createdOn?: Date | string
  }

  export type ClientPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPeriodPlanCreateInput = {
    id?: string
    startsAt: Date | string
    expiresAt: Date | string
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: Date | string
    clientPlan: ClientPlanCreateNestedOneWithoutPeriodsInput
  }

  export type ClientPeriodPlanUncheckedCreateInput = {
    id?: string
    clientPlanId: string
    startsAt: Date | string
    expiresAt: Date | string
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: Date | string
  }

  export type ClientPeriodPlanUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    wasConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlan?: ClientPlanUpdateOneRequiredWithoutPeriodsNestedInput
  }

  export type ClientPeriodPlanUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientPlanId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    wasConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPeriodPlanCreateManyInput = {
    id?: string
    clientPlanId: string
    startsAt: Date | string
    expiresAt: Date | string
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: Date | string
  }

  export type ClientPeriodPlanUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    wasConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPeriodPlanUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientPlanId?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    wasConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestCreateInput = {
    id?: string
    requestType: $Enums.RequestType
    generatedToken?: string | null
    generatedCode?: string | null
    expires: Date | string
    createdOn?: Date | string
    client: ClientCreateNestedOneWithoutRequestsInput
    clientUser: ClientUserCreateNestedOneWithoutRequestsInput
  }

  export type ClientRequestUncheckedCreateInput = {
    id?: string
    clientId: string
    clientUserId: string
    requestType: $Enums.RequestType
    generatedToken?: string | null
    generatedCode?: string | null
    expires: Date | string
    createdOn?: Date | string
  }

  export type ClientRequestUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutRequestsNestedInput
    clientUser?: ClientUserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type ClientRequestUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestCreateManyInput = {
    id?: string
    clientId: string
    clientUserId: string
    requestType: $Enums.RequestType
    generatedToken?: string | null
    generatedCode?: string | null
    expires: Date | string
    createdOn?: Date | string
  }

  export type ClientRequestUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfUseCreateInput = {
    id?: string
    fileUrl: string
    description?: string | null
    isCurrent?: boolean
    createdOn?: Date | string
    acceptedBy?: ClientTermsOfUseCreateNestedManyWithoutTermsInput
  }

  export type TermsOfUseUncheckedCreateInput = {
    id?: string
    fileUrl: string
    description?: string | null
    isCurrent?: boolean
    createdOn?: Date | string
    acceptedBy?: ClientTermsOfUseUncheckedCreateNestedManyWithoutTermsInput
  }

  export type TermsOfUseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedBy?: ClientTermsOfUseUpdateManyWithoutTermsNestedInput
  }

  export type TermsOfUseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    acceptedBy?: ClientTermsOfUseUncheckedUpdateManyWithoutTermsNestedInput
  }

  export type TermsOfUseCreateManyInput = {
    id?: string
    fileUrl: string
    description?: string | null
    isCurrent?: boolean
    createdOn?: Date | string
  }

  export type TermsOfUseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfUseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTermsOfUseCreateInput = {
    id?: string
    acceptedAt?: Date | string
    client: ClientCreateNestedOneWithoutTermsAcceptedInput
    terms: TermsOfUseCreateNestedOneWithoutAcceptedByInput
  }

  export type ClientTermsOfUseUncheckedCreateInput = {
    id?: string
    clientId: string
    termsId: string
    acceptedAt?: Date | string
  }

  export type ClientTermsOfUseUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutTermsAcceptedNestedInput
    terms?: TermsOfUseUpdateOneRequiredWithoutAcceptedByNestedInput
  }

  export type ClientTermsOfUseUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    termsId?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTermsOfUseCreateManyInput = {
    id?: string
    clientId: string
    termsId: string
    acceptedAt?: Date | string
  }

  export type ClientTermsOfUseUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTermsOfUseUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    termsId?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type ClientPlanListRelationFilter = {
    every?: ClientPlanWhereInput
    some?: ClientPlanWhereInput
    none?: ClientPlanWhereInput
  }

  export type ClientUserListRelationFilter = {
    every?: ClientUserWhereInput
    some?: ClientUserWhereInput
    none?: ClientUserWhereInput
  }

  export type ClientRequestListRelationFilter = {
    every?: ClientRequestWhereInput
    some?: ClientRequestWhereInput
    none?: ClientRequestWhereInput
  }

  export type ClientTermsOfUseListRelationFilter = {
    every?: ClientTermsOfUseWhereInput
    some?: ClientTermsOfUseWhereInput
    none?: ClientTermsOfUseWhereInput
  }

  export type ClientPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientUserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientRequestOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientTermsOfUseOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    address?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type BigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type ClientUserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpfCnpj?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type ClientUserAvgOrderByAggregateInput = {
    cpfCnpj?: SortOrder
  }

  export type ClientUserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpfCnpj?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type ClientUserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    cpfCnpj?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    clientId?: SortOrder
    createdOn?: SortOrder
    updatedOn?: SortOrder
  }

  export type ClientUserSumOrderByAggregateInput = {
    cpfCnpj?: SortOrder
  }

  export type BigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type PlanCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    isTrial?: SortOrder
    createdOn?: SortOrder
  }

  export type PlanAvgOrderByAggregateInput = {
    price?: SortOrder
    durationDays?: SortOrder
  }

  export type PlanMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    isTrial?: SortOrder
    createdOn?: SortOrder
  }

  export type PlanMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    price?: SortOrder
    durationDays?: SortOrder
    isTrial?: SortOrder
    createdOn?: SortOrder
  }

  export type PlanSumOrderByAggregateInput = {
    price?: SortOrder
    durationDays?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type PlanScalarRelationFilter = {
    is?: PlanWhereInput
    isNot?: PlanWhereInput
  }

  export type ClientPeriodPlanListRelationFilter = {
    every?: ClientPeriodPlanWhereInput
    some?: ClientPeriodPlanWhereInput
    none?: ClientPeriodPlanWhereInput
  }

  export type ClientPeriodPlanOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClientPlanCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    current?: SortOrder
    createdOn?: SortOrder
  }

  export type ClientPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    current?: SortOrder
    createdOn?: SortOrder
  }

  export type ClientPlanMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    planId?: SortOrder
    current?: SortOrder
    createdOn?: SortOrder
  }

  export type ClientPlanScalarRelationFilter = {
    is?: ClientPlanWhereInput
    isNot?: ClientPlanWhereInput
  }

  export type ClientPeriodPlanCountOrderByAggregateInput = {
    id?: SortOrder
    clientPlanId?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    isTrial?: SortOrder
    isCurrent?: SortOrder
    wasConfirmed?: SortOrder
    createdOn?: SortOrder
  }

  export type ClientPeriodPlanMaxOrderByAggregateInput = {
    id?: SortOrder
    clientPlanId?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    isTrial?: SortOrder
    isCurrent?: SortOrder
    wasConfirmed?: SortOrder
    createdOn?: SortOrder
  }

  export type ClientPeriodPlanMinOrderByAggregateInput = {
    id?: SortOrder
    clientPlanId?: SortOrder
    startsAt?: SortOrder
    expiresAt?: SortOrder
    isTrial?: SortOrder
    isCurrent?: SortOrder
    wasConfirmed?: SortOrder
    createdOn?: SortOrder
  }

  export type EnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type ClientUserScalarRelationFilter = {
    is?: ClientUserWhereInput
    isNot?: ClientUserWhereInput
  }

  export type ClientRequestCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientUserId?: SortOrder
    requestType?: SortOrder
    generatedToken?: SortOrder
    generatedCode?: SortOrder
    expires?: SortOrder
    createdOn?: SortOrder
  }

  export type ClientRequestMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientUserId?: SortOrder
    requestType?: SortOrder
    generatedToken?: SortOrder
    generatedCode?: SortOrder
    expires?: SortOrder
    createdOn?: SortOrder
  }

  export type ClientRequestMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    clientUserId?: SortOrder
    requestType?: SortOrder
    generatedToken?: SortOrder
    generatedCode?: SortOrder
    expires?: SortOrder
    createdOn?: SortOrder
  }

  export type EnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type TermsOfUseCountOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    isCurrent?: SortOrder
    createdOn?: SortOrder
  }

  export type TermsOfUseMaxOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    isCurrent?: SortOrder
    createdOn?: SortOrder
  }

  export type TermsOfUseMinOrderByAggregateInput = {
    id?: SortOrder
    fileUrl?: SortOrder
    description?: SortOrder
    isCurrent?: SortOrder
    createdOn?: SortOrder
  }

  export type TermsOfUseScalarRelationFilter = {
    is?: TermsOfUseWhereInput
    isNot?: TermsOfUseWhereInput
  }

  export type ClientTermsOfUseCountOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    termsId?: SortOrder
    acceptedAt?: SortOrder
  }

  export type ClientTermsOfUseMaxOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    termsId?: SortOrder
    acceptedAt?: SortOrder
  }

  export type ClientTermsOfUseMinOrderByAggregateInput = {
    id?: SortOrder
    clientId?: SortOrder
    termsId?: SortOrder
    acceptedAt?: SortOrder
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumRoleFieldUpdateOperationsInput = {
    set?: $Enums.Role
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ClientPlanCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientPlanCreateWithoutClientInput, ClientPlanUncheckedCreateWithoutClientInput> | ClientPlanCreateWithoutClientInput[] | ClientPlanUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientPlanCreateOrConnectWithoutClientInput | ClientPlanCreateOrConnectWithoutClientInput[]
    createMany?: ClientPlanCreateManyClientInputEnvelope
    connect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
  }

  export type ClientUserCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientUserCreateWithoutClientInput, ClientUserUncheckedCreateWithoutClientInput> | ClientUserCreateWithoutClientInput[] | ClientUserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientUserCreateOrConnectWithoutClientInput | ClientUserCreateOrConnectWithoutClientInput[]
    createMany?: ClientUserCreateManyClientInputEnvelope
    connect?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
  }

  export type ClientRequestCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput> | ClientRequestCreateWithoutClientInput[] | ClientRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientInput | ClientRequestCreateOrConnectWithoutClientInput[]
    createMany?: ClientRequestCreateManyClientInputEnvelope
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
  }

  export type ClientTermsOfUseCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientTermsOfUseCreateWithoutClientInput, ClientTermsOfUseUncheckedCreateWithoutClientInput> | ClientTermsOfUseCreateWithoutClientInput[] | ClientTermsOfUseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientTermsOfUseCreateOrConnectWithoutClientInput | ClientTermsOfUseCreateOrConnectWithoutClientInput[]
    createMany?: ClientTermsOfUseCreateManyClientInputEnvelope
    connect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
  }

  export type ClientPlanUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientPlanCreateWithoutClientInput, ClientPlanUncheckedCreateWithoutClientInput> | ClientPlanCreateWithoutClientInput[] | ClientPlanUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientPlanCreateOrConnectWithoutClientInput | ClientPlanCreateOrConnectWithoutClientInput[]
    createMany?: ClientPlanCreateManyClientInputEnvelope
    connect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
  }

  export type ClientUserUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientUserCreateWithoutClientInput, ClientUserUncheckedCreateWithoutClientInput> | ClientUserCreateWithoutClientInput[] | ClientUserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientUserCreateOrConnectWithoutClientInput | ClientUserCreateOrConnectWithoutClientInput[]
    createMany?: ClientUserCreateManyClientInputEnvelope
    connect?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
  }

  export type ClientRequestUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput> | ClientRequestCreateWithoutClientInput[] | ClientRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientInput | ClientRequestCreateOrConnectWithoutClientInput[]
    createMany?: ClientRequestCreateManyClientInputEnvelope
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
  }

  export type ClientTermsOfUseUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<ClientTermsOfUseCreateWithoutClientInput, ClientTermsOfUseUncheckedCreateWithoutClientInput> | ClientTermsOfUseCreateWithoutClientInput[] | ClientTermsOfUseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientTermsOfUseCreateOrConnectWithoutClientInput | ClientTermsOfUseCreateOrConnectWithoutClientInput[]
    createMany?: ClientTermsOfUseCreateManyClientInputEnvelope
    connect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
  }

  export type ClientPlanUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientPlanCreateWithoutClientInput, ClientPlanUncheckedCreateWithoutClientInput> | ClientPlanCreateWithoutClientInput[] | ClientPlanUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientPlanCreateOrConnectWithoutClientInput | ClientPlanCreateOrConnectWithoutClientInput[]
    upsert?: ClientPlanUpsertWithWhereUniqueWithoutClientInput | ClientPlanUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientPlanCreateManyClientInputEnvelope
    set?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    disconnect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    delete?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    connect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    update?: ClientPlanUpdateWithWhereUniqueWithoutClientInput | ClientPlanUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientPlanUpdateManyWithWhereWithoutClientInput | ClientPlanUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientPlanScalarWhereInput | ClientPlanScalarWhereInput[]
  }

  export type ClientUserUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientUserCreateWithoutClientInput, ClientUserUncheckedCreateWithoutClientInput> | ClientUserCreateWithoutClientInput[] | ClientUserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientUserCreateOrConnectWithoutClientInput | ClientUserCreateOrConnectWithoutClientInput[]
    upsert?: ClientUserUpsertWithWhereUniqueWithoutClientInput | ClientUserUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientUserCreateManyClientInputEnvelope
    set?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
    disconnect?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
    delete?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
    connect?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
    update?: ClientUserUpdateWithWhereUniqueWithoutClientInput | ClientUserUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientUserUpdateManyWithWhereWithoutClientInput | ClientUserUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientUserScalarWhereInput | ClientUserScalarWhereInput[]
  }

  export type ClientRequestUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput> | ClientRequestCreateWithoutClientInput[] | ClientRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientInput | ClientRequestCreateOrConnectWithoutClientInput[]
    upsert?: ClientRequestUpsertWithWhereUniqueWithoutClientInput | ClientRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientRequestCreateManyClientInputEnvelope
    set?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    disconnect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    delete?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    update?: ClientRequestUpdateWithWhereUniqueWithoutClientInput | ClientRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientRequestUpdateManyWithWhereWithoutClientInput | ClientRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
  }

  export type ClientTermsOfUseUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientTermsOfUseCreateWithoutClientInput, ClientTermsOfUseUncheckedCreateWithoutClientInput> | ClientTermsOfUseCreateWithoutClientInput[] | ClientTermsOfUseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientTermsOfUseCreateOrConnectWithoutClientInput | ClientTermsOfUseCreateOrConnectWithoutClientInput[]
    upsert?: ClientTermsOfUseUpsertWithWhereUniqueWithoutClientInput | ClientTermsOfUseUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientTermsOfUseCreateManyClientInputEnvelope
    set?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    disconnect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    delete?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    connect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    update?: ClientTermsOfUseUpdateWithWhereUniqueWithoutClientInput | ClientTermsOfUseUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientTermsOfUseUpdateManyWithWhereWithoutClientInput | ClientTermsOfUseUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientTermsOfUseScalarWhereInput | ClientTermsOfUseScalarWhereInput[]
  }

  export type ClientPlanUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientPlanCreateWithoutClientInput, ClientPlanUncheckedCreateWithoutClientInput> | ClientPlanCreateWithoutClientInput[] | ClientPlanUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientPlanCreateOrConnectWithoutClientInput | ClientPlanCreateOrConnectWithoutClientInput[]
    upsert?: ClientPlanUpsertWithWhereUniqueWithoutClientInput | ClientPlanUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientPlanCreateManyClientInputEnvelope
    set?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    disconnect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    delete?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    connect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    update?: ClientPlanUpdateWithWhereUniqueWithoutClientInput | ClientPlanUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientPlanUpdateManyWithWhereWithoutClientInput | ClientPlanUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientPlanScalarWhereInput | ClientPlanScalarWhereInput[]
  }

  export type ClientUserUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientUserCreateWithoutClientInput, ClientUserUncheckedCreateWithoutClientInput> | ClientUserCreateWithoutClientInput[] | ClientUserUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientUserCreateOrConnectWithoutClientInput | ClientUserCreateOrConnectWithoutClientInput[]
    upsert?: ClientUserUpsertWithWhereUniqueWithoutClientInput | ClientUserUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientUserCreateManyClientInputEnvelope
    set?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
    disconnect?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
    delete?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
    connect?: ClientUserWhereUniqueInput | ClientUserWhereUniqueInput[]
    update?: ClientUserUpdateWithWhereUniqueWithoutClientInput | ClientUserUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientUserUpdateManyWithWhereWithoutClientInput | ClientUserUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientUserScalarWhereInput | ClientUserScalarWhereInput[]
  }

  export type ClientRequestUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput> | ClientRequestCreateWithoutClientInput[] | ClientRequestUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientInput | ClientRequestCreateOrConnectWithoutClientInput[]
    upsert?: ClientRequestUpsertWithWhereUniqueWithoutClientInput | ClientRequestUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientRequestCreateManyClientInputEnvelope
    set?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    disconnect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    delete?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    update?: ClientRequestUpdateWithWhereUniqueWithoutClientInput | ClientRequestUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientRequestUpdateManyWithWhereWithoutClientInput | ClientRequestUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
  }

  export type ClientTermsOfUseUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<ClientTermsOfUseCreateWithoutClientInput, ClientTermsOfUseUncheckedCreateWithoutClientInput> | ClientTermsOfUseCreateWithoutClientInput[] | ClientTermsOfUseUncheckedCreateWithoutClientInput[]
    connectOrCreate?: ClientTermsOfUseCreateOrConnectWithoutClientInput | ClientTermsOfUseCreateOrConnectWithoutClientInput[]
    upsert?: ClientTermsOfUseUpsertWithWhereUniqueWithoutClientInput | ClientTermsOfUseUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: ClientTermsOfUseCreateManyClientInputEnvelope
    set?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    disconnect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    delete?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    connect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    update?: ClientTermsOfUseUpdateWithWhereUniqueWithoutClientInput | ClientTermsOfUseUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: ClientTermsOfUseUpdateManyWithWhereWithoutClientInput | ClientTermsOfUseUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: ClientTermsOfUseScalarWhereInput | ClientTermsOfUseScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutClientUsersInput = {
    create?: XOR<ClientCreateWithoutClientUsersInput, ClientUncheckedCreateWithoutClientUsersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutClientUsersInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientRequestCreateNestedManyWithoutClientUserInput = {
    create?: XOR<ClientRequestCreateWithoutClientUserInput, ClientRequestUncheckedCreateWithoutClientUserInput> | ClientRequestCreateWithoutClientUserInput[] | ClientRequestUncheckedCreateWithoutClientUserInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientUserInput | ClientRequestCreateOrConnectWithoutClientUserInput[]
    createMany?: ClientRequestCreateManyClientUserInputEnvelope
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
  }

  export type ClientRequestUncheckedCreateNestedManyWithoutClientUserInput = {
    create?: XOR<ClientRequestCreateWithoutClientUserInput, ClientRequestUncheckedCreateWithoutClientUserInput> | ClientRequestCreateWithoutClientUserInput[] | ClientRequestUncheckedCreateWithoutClientUserInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientUserInput | ClientRequestCreateOrConnectWithoutClientUserInput[]
    createMany?: ClientRequestCreateManyClientUserInputEnvelope
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
  }

  export type BigIntFieldUpdateOperationsInput = {
    set?: bigint | number
    increment?: bigint | number
    decrement?: bigint | number
    multiply?: bigint | number
    divide?: bigint | number
  }

  export type ClientUpdateOneRequiredWithoutClientUsersNestedInput = {
    create?: XOR<ClientCreateWithoutClientUsersInput, ClientUncheckedCreateWithoutClientUsersInput>
    connectOrCreate?: ClientCreateOrConnectWithoutClientUsersInput
    upsert?: ClientUpsertWithoutClientUsersInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutClientUsersInput, ClientUpdateWithoutClientUsersInput>, ClientUncheckedUpdateWithoutClientUsersInput>
  }

  export type ClientRequestUpdateManyWithoutClientUserNestedInput = {
    create?: XOR<ClientRequestCreateWithoutClientUserInput, ClientRequestUncheckedCreateWithoutClientUserInput> | ClientRequestCreateWithoutClientUserInput[] | ClientRequestUncheckedCreateWithoutClientUserInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientUserInput | ClientRequestCreateOrConnectWithoutClientUserInput[]
    upsert?: ClientRequestUpsertWithWhereUniqueWithoutClientUserInput | ClientRequestUpsertWithWhereUniqueWithoutClientUserInput[]
    createMany?: ClientRequestCreateManyClientUserInputEnvelope
    set?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    disconnect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    delete?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    update?: ClientRequestUpdateWithWhereUniqueWithoutClientUserInput | ClientRequestUpdateWithWhereUniqueWithoutClientUserInput[]
    updateMany?: ClientRequestUpdateManyWithWhereWithoutClientUserInput | ClientRequestUpdateManyWithWhereWithoutClientUserInput[]
    deleteMany?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
  }

  export type ClientRequestUncheckedUpdateManyWithoutClientUserNestedInput = {
    create?: XOR<ClientRequestCreateWithoutClientUserInput, ClientRequestUncheckedCreateWithoutClientUserInput> | ClientRequestCreateWithoutClientUserInput[] | ClientRequestUncheckedCreateWithoutClientUserInput[]
    connectOrCreate?: ClientRequestCreateOrConnectWithoutClientUserInput | ClientRequestCreateOrConnectWithoutClientUserInput[]
    upsert?: ClientRequestUpsertWithWhereUniqueWithoutClientUserInput | ClientRequestUpsertWithWhereUniqueWithoutClientUserInput[]
    createMany?: ClientRequestCreateManyClientUserInputEnvelope
    set?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    disconnect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    delete?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    connect?: ClientRequestWhereUniqueInput | ClientRequestWhereUniqueInput[]
    update?: ClientRequestUpdateWithWhereUniqueWithoutClientUserInput | ClientRequestUpdateWithWhereUniqueWithoutClientUserInput[]
    updateMany?: ClientRequestUpdateManyWithWhereWithoutClientUserInput | ClientRequestUpdateManyWithWhereWithoutClientUserInput[]
    deleteMany?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
  }

  export type ClientPlanCreateNestedManyWithoutPlanInput = {
    create?: XOR<ClientPlanCreateWithoutPlanInput, ClientPlanUncheckedCreateWithoutPlanInput> | ClientPlanCreateWithoutPlanInput[] | ClientPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ClientPlanCreateOrConnectWithoutPlanInput | ClientPlanCreateOrConnectWithoutPlanInput[]
    createMany?: ClientPlanCreateManyPlanInputEnvelope
    connect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
  }

  export type ClientPlanUncheckedCreateNestedManyWithoutPlanInput = {
    create?: XOR<ClientPlanCreateWithoutPlanInput, ClientPlanUncheckedCreateWithoutPlanInput> | ClientPlanCreateWithoutPlanInput[] | ClientPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ClientPlanCreateOrConnectWithoutPlanInput | ClientPlanCreateOrConnectWithoutPlanInput[]
    createMany?: ClientPlanCreateManyPlanInputEnvelope
    connect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ClientPlanUpdateManyWithoutPlanNestedInput = {
    create?: XOR<ClientPlanCreateWithoutPlanInput, ClientPlanUncheckedCreateWithoutPlanInput> | ClientPlanCreateWithoutPlanInput[] | ClientPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ClientPlanCreateOrConnectWithoutPlanInput | ClientPlanCreateOrConnectWithoutPlanInput[]
    upsert?: ClientPlanUpsertWithWhereUniqueWithoutPlanInput | ClientPlanUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: ClientPlanCreateManyPlanInputEnvelope
    set?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    disconnect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    delete?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    connect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    update?: ClientPlanUpdateWithWhereUniqueWithoutPlanInput | ClientPlanUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: ClientPlanUpdateManyWithWhereWithoutPlanInput | ClientPlanUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: ClientPlanScalarWhereInput | ClientPlanScalarWhereInput[]
  }

  export type ClientPlanUncheckedUpdateManyWithoutPlanNestedInput = {
    create?: XOR<ClientPlanCreateWithoutPlanInput, ClientPlanUncheckedCreateWithoutPlanInput> | ClientPlanCreateWithoutPlanInput[] | ClientPlanUncheckedCreateWithoutPlanInput[]
    connectOrCreate?: ClientPlanCreateOrConnectWithoutPlanInput | ClientPlanCreateOrConnectWithoutPlanInput[]
    upsert?: ClientPlanUpsertWithWhereUniqueWithoutPlanInput | ClientPlanUpsertWithWhereUniqueWithoutPlanInput[]
    createMany?: ClientPlanCreateManyPlanInputEnvelope
    set?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    disconnect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    delete?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    connect?: ClientPlanWhereUniqueInput | ClientPlanWhereUniqueInput[]
    update?: ClientPlanUpdateWithWhereUniqueWithoutPlanInput | ClientPlanUpdateWithWhereUniqueWithoutPlanInput[]
    updateMany?: ClientPlanUpdateManyWithWhereWithoutPlanInput | ClientPlanUpdateManyWithWhereWithoutPlanInput[]
    deleteMany?: ClientPlanScalarWhereInput | ClientPlanScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutClientPlansInput = {
    create?: XOR<ClientCreateWithoutClientPlansInput, ClientUncheckedCreateWithoutClientPlansInput>
    connectOrCreate?: ClientCreateOrConnectWithoutClientPlansInput
    connect?: ClientWhereUniqueInput
  }

  export type PlanCreateNestedOneWithoutClientPlansInput = {
    create?: XOR<PlanCreateWithoutClientPlansInput, PlanUncheckedCreateWithoutClientPlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutClientPlansInput
    connect?: PlanWhereUniqueInput
  }

  export type ClientPeriodPlanCreateNestedManyWithoutClientPlanInput = {
    create?: XOR<ClientPeriodPlanCreateWithoutClientPlanInput, ClientPeriodPlanUncheckedCreateWithoutClientPlanInput> | ClientPeriodPlanCreateWithoutClientPlanInput[] | ClientPeriodPlanUncheckedCreateWithoutClientPlanInput[]
    connectOrCreate?: ClientPeriodPlanCreateOrConnectWithoutClientPlanInput | ClientPeriodPlanCreateOrConnectWithoutClientPlanInput[]
    createMany?: ClientPeriodPlanCreateManyClientPlanInputEnvelope
    connect?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
  }

  export type ClientPeriodPlanUncheckedCreateNestedManyWithoutClientPlanInput = {
    create?: XOR<ClientPeriodPlanCreateWithoutClientPlanInput, ClientPeriodPlanUncheckedCreateWithoutClientPlanInput> | ClientPeriodPlanCreateWithoutClientPlanInput[] | ClientPeriodPlanUncheckedCreateWithoutClientPlanInput[]
    connectOrCreate?: ClientPeriodPlanCreateOrConnectWithoutClientPlanInput | ClientPeriodPlanCreateOrConnectWithoutClientPlanInput[]
    createMany?: ClientPeriodPlanCreateManyClientPlanInputEnvelope
    connect?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
  }

  export type ClientUpdateOneRequiredWithoutClientPlansNestedInput = {
    create?: XOR<ClientCreateWithoutClientPlansInput, ClientUncheckedCreateWithoutClientPlansInput>
    connectOrCreate?: ClientCreateOrConnectWithoutClientPlansInput
    upsert?: ClientUpsertWithoutClientPlansInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutClientPlansInput, ClientUpdateWithoutClientPlansInput>, ClientUncheckedUpdateWithoutClientPlansInput>
  }

  export type PlanUpdateOneRequiredWithoutClientPlansNestedInput = {
    create?: XOR<PlanCreateWithoutClientPlansInput, PlanUncheckedCreateWithoutClientPlansInput>
    connectOrCreate?: PlanCreateOrConnectWithoutClientPlansInput
    upsert?: PlanUpsertWithoutClientPlansInput
    connect?: PlanWhereUniqueInput
    update?: XOR<XOR<PlanUpdateToOneWithWhereWithoutClientPlansInput, PlanUpdateWithoutClientPlansInput>, PlanUncheckedUpdateWithoutClientPlansInput>
  }

  export type ClientPeriodPlanUpdateManyWithoutClientPlanNestedInput = {
    create?: XOR<ClientPeriodPlanCreateWithoutClientPlanInput, ClientPeriodPlanUncheckedCreateWithoutClientPlanInput> | ClientPeriodPlanCreateWithoutClientPlanInput[] | ClientPeriodPlanUncheckedCreateWithoutClientPlanInput[]
    connectOrCreate?: ClientPeriodPlanCreateOrConnectWithoutClientPlanInput | ClientPeriodPlanCreateOrConnectWithoutClientPlanInput[]
    upsert?: ClientPeriodPlanUpsertWithWhereUniqueWithoutClientPlanInput | ClientPeriodPlanUpsertWithWhereUniqueWithoutClientPlanInput[]
    createMany?: ClientPeriodPlanCreateManyClientPlanInputEnvelope
    set?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
    disconnect?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
    delete?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
    connect?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
    update?: ClientPeriodPlanUpdateWithWhereUniqueWithoutClientPlanInput | ClientPeriodPlanUpdateWithWhereUniqueWithoutClientPlanInput[]
    updateMany?: ClientPeriodPlanUpdateManyWithWhereWithoutClientPlanInput | ClientPeriodPlanUpdateManyWithWhereWithoutClientPlanInput[]
    deleteMany?: ClientPeriodPlanScalarWhereInput | ClientPeriodPlanScalarWhereInput[]
  }

  export type ClientPeriodPlanUncheckedUpdateManyWithoutClientPlanNestedInput = {
    create?: XOR<ClientPeriodPlanCreateWithoutClientPlanInput, ClientPeriodPlanUncheckedCreateWithoutClientPlanInput> | ClientPeriodPlanCreateWithoutClientPlanInput[] | ClientPeriodPlanUncheckedCreateWithoutClientPlanInput[]
    connectOrCreate?: ClientPeriodPlanCreateOrConnectWithoutClientPlanInput | ClientPeriodPlanCreateOrConnectWithoutClientPlanInput[]
    upsert?: ClientPeriodPlanUpsertWithWhereUniqueWithoutClientPlanInput | ClientPeriodPlanUpsertWithWhereUniqueWithoutClientPlanInput[]
    createMany?: ClientPeriodPlanCreateManyClientPlanInputEnvelope
    set?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
    disconnect?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
    delete?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
    connect?: ClientPeriodPlanWhereUniqueInput | ClientPeriodPlanWhereUniqueInput[]
    update?: ClientPeriodPlanUpdateWithWhereUniqueWithoutClientPlanInput | ClientPeriodPlanUpdateWithWhereUniqueWithoutClientPlanInput[]
    updateMany?: ClientPeriodPlanUpdateManyWithWhereWithoutClientPlanInput | ClientPeriodPlanUpdateManyWithWhereWithoutClientPlanInput[]
    deleteMany?: ClientPeriodPlanScalarWhereInput | ClientPeriodPlanScalarWhereInput[]
  }

  export type ClientPlanCreateNestedOneWithoutPeriodsInput = {
    create?: XOR<ClientPlanCreateWithoutPeriodsInput, ClientPlanUncheckedCreateWithoutPeriodsInput>
    connectOrCreate?: ClientPlanCreateOrConnectWithoutPeriodsInput
    connect?: ClientPlanWhereUniqueInput
  }

  export type ClientPlanUpdateOneRequiredWithoutPeriodsNestedInput = {
    create?: XOR<ClientPlanCreateWithoutPeriodsInput, ClientPlanUncheckedCreateWithoutPeriodsInput>
    connectOrCreate?: ClientPlanCreateOrConnectWithoutPeriodsInput
    upsert?: ClientPlanUpsertWithoutPeriodsInput
    connect?: ClientPlanWhereUniqueInput
    update?: XOR<XOR<ClientPlanUpdateToOneWithWhereWithoutPeriodsInput, ClientPlanUpdateWithoutPeriodsInput>, ClientPlanUncheckedUpdateWithoutPeriodsInput>
  }

  export type ClientCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ClientCreateWithoutRequestsInput, ClientUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRequestsInput
    connect?: ClientWhereUniqueInput
  }

  export type ClientUserCreateNestedOneWithoutRequestsInput = {
    create?: XOR<ClientUserCreateWithoutRequestsInput, ClientUserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ClientUserCreateOrConnectWithoutRequestsInput
    connect?: ClientUserWhereUniqueInput
  }

  export type EnumRequestTypeFieldUpdateOperationsInput = {
    set?: $Enums.RequestType
  }

  export type ClientUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<ClientCreateWithoutRequestsInput, ClientUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutRequestsInput
    upsert?: ClientUpsertWithoutRequestsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutRequestsInput, ClientUpdateWithoutRequestsInput>, ClientUncheckedUpdateWithoutRequestsInput>
  }

  export type ClientUserUpdateOneRequiredWithoutRequestsNestedInput = {
    create?: XOR<ClientUserCreateWithoutRequestsInput, ClientUserUncheckedCreateWithoutRequestsInput>
    connectOrCreate?: ClientUserCreateOrConnectWithoutRequestsInput
    upsert?: ClientUserUpsertWithoutRequestsInput
    connect?: ClientUserWhereUniqueInput
    update?: XOR<XOR<ClientUserUpdateToOneWithWhereWithoutRequestsInput, ClientUserUpdateWithoutRequestsInput>, ClientUserUncheckedUpdateWithoutRequestsInput>
  }

  export type ClientTermsOfUseCreateNestedManyWithoutTermsInput = {
    create?: XOR<ClientTermsOfUseCreateWithoutTermsInput, ClientTermsOfUseUncheckedCreateWithoutTermsInput> | ClientTermsOfUseCreateWithoutTermsInput[] | ClientTermsOfUseUncheckedCreateWithoutTermsInput[]
    connectOrCreate?: ClientTermsOfUseCreateOrConnectWithoutTermsInput | ClientTermsOfUseCreateOrConnectWithoutTermsInput[]
    createMany?: ClientTermsOfUseCreateManyTermsInputEnvelope
    connect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
  }

  export type ClientTermsOfUseUncheckedCreateNestedManyWithoutTermsInput = {
    create?: XOR<ClientTermsOfUseCreateWithoutTermsInput, ClientTermsOfUseUncheckedCreateWithoutTermsInput> | ClientTermsOfUseCreateWithoutTermsInput[] | ClientTermsOfUseUncheckedCreateWithoutTermsInput[]
    connectOrCreate?: ClientTermsOfUseCreateOrConnectWithoutTermsInput | ClientTermsOfUseCreateOrConnectWithoutTermsInput[]
    createMany?: ClientTermsOfUseCreateManyTermsInputEnvelope
    connect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
  }

  export type ClientTermsOfUseUpdateManyWithoutTermsNestedInput = {
    create?: XOR<ClientTermsOfUseCreateWithoutTermsInput, ClientTermsOfUseUncheckedCreateWithoutTermsInput> | ClientTermsOfUseCreateWithoutTermsInput[] | ClientTermsOfUseUncheckedCreateWithoutTermsInput[]
    connectOrCreate?: ClientTermsOfUseCreateOrConnectWithoutTermsInput | ClientTermsOfUseCreateOrConnectWithoutTermsInput[]
    upsert?: ClientTermsOfUseUpsertWithWhereUniqueWithoutTermsInput | ClientTermsOfUseUpsertWithWhereUniqueWithoutTermsInput[]
    createMany?: ClientTermsOfUseCreateManyTermsInputEnvelope
    set?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    disconnect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    delete?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    connect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    update?: ClientTermsOfUseUpdateWithWhereUniqueWithoutTermsInput | ClientTermsOfUseUpdateWithWhereUniqueWithoutTermsInput[]
    updateMany?: ClientTermsOfUseUpdateManyWithWhereWithoutTermsInput | ClientTermsOfUseUpdateManyWithWhereWithoutTermsInput[]
    deleteMany?: ClientTermsOfUseScalarWhereInput | ClientTermsOfUseScalarWhereInput[]
  }

  export type ClientTermsOfUseUncheckedUpdateManyWithoutTermsNestedInput = {
    create?: XOR<ClientTermsOfUseCreateWithoutTermsInput, ClientTermsOfUseUncheckedCreateWithoutTermsInput> | ClientTermsOfUseCreateWithoutTermsInput[] | ClientTermsOfUseUncheckedCreateWithoutTermsInput[]
    connectOrCreate?: ClientTermsOfUseCreateOrConnectWithoutTermsInput | ClientTermsOfUseCreateOrConnectWithoutTermsInput[]
    upsert?: ClientTermsOfUseUpsertWithWhereUniqueWithoutTermsInput | ClientTermsOfUseUpsertWithWhereUniqueWithoutTermsInput[]
    createMany?: ClientTermsOfUseCreateManyTermsInputEnvelope
    set?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    disconnect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    delete?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    connect?: ClientTermsOfUseWhereUniqueInput | ClientTermsOfUseWhereUniqueInput[]
    update?: ClientTermsOfUseUpdateWithWhereUniqueWithoutTermsInput | ClientTermsOfUseUpdateWithWhereUniqueWithoutTermsInput[]
    updateMany?: ClientTermsOfUseUpdateManyWithWhereWithoutTermsInput | ClientTermsOfUseUpdateManyWithWhereWithoutTermsInput[]
    deleteMany?: ClientTermsOfUseScalarWhereInput | ClientTermsOfUseScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutTermsAcceptedInput = {
    create?: XOR<ClientCreateWithoutTermsAcceptedInput, ClientUncheckedCreateWithoutTermsAcceptedInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTermsAcceptedInput
    connect?: ClientWhereUniqueInput
  }

  export type TermsOfUseCreateNestedOneWithoutAcceptedByInput = {
    create?: XOR<TermsOfUseCreateWithoutAcceptedByInput, TermsOfUseUncheckedCreateWithoutAcceptedByInput>
    connectOrCreate?: TermsOfUseCreateOrConnectWithoutAcceptedByInput
    connect?: TermsOfUseWhereUniqueInput
  }

  export type ClientUpdateOneRequiredWithoutTermsAcceptedNestedInput = {
    create?: XOR<ClientCreateWithoutTermsAcceptedInput, ClientUncheckedCreateWithoutTermsAcceptedInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTermsAcceptedInput
    upsert?: ClientUpsertWithoutTermsAcceptedInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTermsAcceptedInput, ClientUpdateWithoutTermsAcceptedInput>, ClientUncheckedUpdateWithoutTermsAcceptedInput>
  }

  export type TermsOfUseUpdateOneRequiredWithoutAcceptedByNestedInput = {
    create?: XOR<TermsOfUseCreateWithoutAcceptedByInput, TermsOfUseUncheckedCreateWithoutAcceptedByInput>
    connectOrCreate?: TermsOfUseCreateOrConnectWithoutAcceptedByInput
    upsert?: TermsOfUseUpsertWithoutAcceptedByInput
    connect?: TermsOfUseWhereUniqueInput
    update?: XOR<XOR<TermsOfUseUpdateToOneWithWhereWithoutAcceptedByInput, TermsOfUseUpdateWithoutAcceptedByInput>, TermsOfUseUncheckedUpdateWithoutAcceptedByInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleFilter<$PrismaModel> | $Enums.Role
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Role | EnumRoleFieldRefInput<$PrismaModel>
    in?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.Role[] | ListEnumRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumRoleWithAggregatesFilter<$PrismaModel> | $Enums.Role
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRoleFilter<$PrismaModel>
    _max?: NestedEnumRoleFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBigIntFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntFilter<$PrismaModel> | bigint | number
  }

  export type NestedBigIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    in?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    notIn?: bigint[] | number[] | ListBigIntFieldRefInput<$PrismaModel>
    lt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    lte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gt?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    gte?: bigint | number | BigIntFieldRefInput<$PrismaModel>
    not?: NestedBigIntWithAggregatesFilter<$PrismaModel> | bigint | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedBigIntFilter<$PrismaModel>
    _min?: NestedBigIntFilter<$PrismaModel>
    _max?: NestedBigIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedEnumRequestTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeFilter<$PrismaModel> | $Enums.RequestType
  }

  export type NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.RequestType | EnumRequestTypeFieldRefInput<$PrismaModel>
    in?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.RequestType[] | ListEnumRequestTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumRequestTypeWithAggregatesFilter<$PrismaModel> | $Enums.RequestType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumRequestTypeFilter<$PrismaModel>
    _max?: NestedEnumRequestTypeFilter<$PrismaModel>
  }

  export type ClientPlanCreateWithoutClientInput = {
    id?: string
    current?: boolean
    createdOn?: Date | string
    plan: PlanCreateNestedOneWithoutClientPlansInput
    periods?: ClientPeriodPlanCreateNestedManyWithoutClientPlanInput
  }

  export type ClientPlanUncheckedCreateWithoutClientInput = {
    id?: string
    planId: string
    current?: boolean
    createdOn?: Date | string
    periods?: ClientPeriodPlanUncheckedCreateNestedManyWithoutClientPlanInput
  }

  export type ClientPlanCreateOrConnectWithoutClientInput = {
    where: ClientPlanWhereUniqueInput
    create: XOR<ClientPlanCreateWithoutClientInput, ClientPlanUncheckedCreateWithoutClientInput>
  }

  export type ClientPlanCreateManyClientInputEnvelope = {
    data: ClientPlanCreateManyClientInput | ClientPlanCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientUserCreateWithoutClientInput = {
    id?: string
    name: string
    email: string
    password: string
    cpfCnpj: bigint | number
    phone: string
    role: $Enums.Role
    createdOn?: Date | string
    updatedOn?: Date | string
    requests?: ClientRequestCreateNestedManyWithoutClientUserInput
  }

  export type ClientUserUncheckedCreateWithoutClientInput = {
    id?: string
    name: string
    email: string
    password: string
    cpfCnpj: bigint | number
    phone: string
    role: $Enums.Role
    createdOn?: Date | string
    updatedOn?: Date | string
    requests?: ClientRequestUncheckedCreateNestedManyWithoutClientUserInput
  }

  export type ClientUserCreateOrConnectWithoutClientInput = {
    where: ClientUserWhereUniqueInput
    create: XOR<ClientUserCreateWithoutClientInput, ClientUserUncheckedCreateWithoutClientInput>
  }

  export type ClientUserCreateManyClientInputEnvelope = {
    data: ClientUserCreateManyClientInput | ClientUserCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientRequestCreateWithoutClientInput = {
    id?: string
    requestType: $Enums.RequestType
    generatedToken?: string | null
    generatedCode?: string | null
    expires: Date | string
    createdOn?: Date | string
    clientUser: ClientUserCreateNestedOneWithoutRequestsInput
  }

  export type ClientRequestUncheckedCreateWithoutClientInput = {
    id?: string
    clientUserId: string
    requestType: $Enums.RequestType
    generatedToken?: string | null
    generatedCode?: string | null
    expires: Date | string
    createdOn?: Date | string
  }

  export type ClientRequestCreateOrConnectWithoutClientInput = {
    where: ClientRequestWhereUniqueInput
    create: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput>
  }

  export type ClientRequestCreateManyClientInputEnvelope = {
    data: ClientRequestCreateManyClientInput | ClientRequestCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientTermsOfUseCreateWithoutClientInput = {
    id?: string
    acceptedAt?: Date | string
    terms: TermsOfUseCreateNestedOneWithoutAcceptedByInput
  }

  export type ClientTermsOfUseUncheckedCreateWithoutClientInput = {
    id?: string
    termsId: string
    acceptedAt?: Date | string
  }

  export type ClientTermsOfUseCreateOrConnectWithoutClientInput = {
    where: ClientTermsOfUseWhereUniqueInput
    create: XOR<ClientTermsOfUseCreateWithoutClientInput, ClientTermsOfUseUncheckedCreateWithoutClientInput>
  }

  export type ClientTermsOfUseCreateManyClientInputEnvelope = {
    data: ClientTermsOfUseCreateManyClientInput | ClientTermsOfUseCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type ClientPlanUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientPlanWhereUniqueInput
    update: XOR<ClientPlanUpdateWithoutClientInput, ClientPlanUncheckedUpdateWithoutClientInput>
    create: XOR<ClientPlanCreateWithoutClientInput, ClientPlanUncheckedCreateWithoutClientInput>
  }

  export type ClientPlanUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientPlanWhereUniqueInput
    data: XOR<ClientPlanUpdateWithoutClientInput, ClientPlanUncheckedUpdateWithoutClientInput>
  }

  export type ClientPlanUpdateManyWithWhereWithoutClientInput = {
    where: ClientPlanScalarWhereInput
    data: XOR<ClientPlanUpdateManyMutationInput, ClientPlanUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientPlanScalarWhereInput = {
    AND?: ClientPlanScalarWhereInput | ClientPlanScalarWhereInput[]
    OR?: ClientPlanScalarWhereInput[]
    NOT?: ClientPlanScalarWhereInput | ClientPlanScalarWhereInput[]
    id?: StringFilter<"ClientPlan"> | string
    clientId?: StringFilter<"ClientPlan"> | string
    planId?: StringFilter<"ClientPlan"> | string
    current?: BoolFilter<"ClientPlan"> | boolean
    createdOn?: DateTimeFilter<"ClientPlan"> | Date | string
  }

  export type ClientUserUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientUserWhereUniqueInput
    update: XOR<ClientUserUpdateWithoutClientInput, ClientUserUncheckedUpdateWithoutClientInput>
    create: XOR<ClientUserCreateWithoutClientInput, ClientUserUncheckedCreateWithoutClientInput>
  }

  export type ClientUserUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientUserWhereUniqueInput
    data: XOR<ClientUserUpdateWithoutClientInput, ClientUserUncheckedUpdateWithoutClientInput>
  }

  export type ClientUserUpdateManyWithWhereWithoutClientInput = {
    where: ClientUserScalarWhereInput
    data: XOR<ClientUserUpdateManyMutationInput, ClientUserUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientUserScalarWhereInput = {
    AND?: ClientUserScalarWhereInput | ClientUserScalarWhereInput[]
    OR?: ClientUserScalarWhereInput[]
    NOT?: ClientUserScalarWhereInput | ClientUserScalarWhereInput[]
    id?: StringFilter<"ClientUser"> | string
    name?: StringFilter<"ClientUser"> | string
    email?: StringFilter<"ClientUser"> | string
    password?: StringFilter<"ClientUser"> | string
    cpfCnpj?: BigIntFilter<"ClientUser"> | bigint | number
    phone?: StringFilter<"ClientUser"> | string
    role?: EnumRoleFilter<"ClientUser"> | $Enums.Role
    clientId?: StringFilter<"ClientUser"> | string
    createdOn?: DateTimeFilter<"ClientUser"> | Date | string
    updatedOn?: DateTimeFilter<"ClientUser"> | Date | string
  }

  export type ClientRequestUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientRequestWhereUniqueInput
    update: XOR<ClientRequestUpdateWithoutClientInput, ClientRequestUncheckedUpdateWithoutClientInput>
    create: XOR<ClientRequestCreateWithoutClientInput, ClientRequestUncheckedCreateWithoutClientInput>
  }

  export type ClientRequestUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientRequestWhereUniqueInput
    data: XOR<ClientRequestUpdateWithoutClientInput, ClientRequestUncheckedUpdateWithoutClientInput>
  }

  export type ClientRequestUpdateManyWithWhereWithoutClientInput = {
    where: ClientRequestScalarWhereInput
    data: XOR<ClientRequestUpdateManyMutationInput, ClientRequestUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientRequestScalarWhereInput = {
    AND?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
    OR?: ClientRequestScalarWhereInput[]
    NOT?: ClientRequestScalarWhereInput | ClientRequestScalarWhereInput[]
    id?: StringFilter<"ClientRequest"> | string
    clientId?: StringFilter<"ClientRequest"> | string
    clientUserId?: StringFilter<"ClientRequest"> | string
    requestType?: EnumRequestTypeFilter<"ClientRequest"> | $Enums.RequestType
    generatedToken?: StringNullableFilter<"ClientRequest"> | string | null
    generatedCode?: StringNullableFilter<"ClientRequest"> | string | null
    expires?: DateTimeFilter<"ClientRequest"> | Date | string
    createdOn?: DateTimeFilter<"ClientRequest"> | Date | string
  }

  export type ClientTermsOfUseUpsertWithWhereUniqueWithoutClientInput = {
    where: ClientTermsOfUseWhereUniqueInput
    update: XOR<ClientTermsOfUseUpdateWithoutClientInput, ClientTermsOfUseUncheckedUpdateWithoutClientInput>
    create: XOR<ClientTermsOfUseCreateWithoutClientInput, ClientTermsOfUseUncheckedCreateWithoutClientInput>
  }

  export type ClientTermsOfUseUpdateWithWhereUniqueWithoutClientInput = {
    where: ClientTermsOfUseWhereUniqueInput
    data: XOR<ClientTermsOfUseUpdateWithoutClientInput, ClientTermsOfUseUncheckedUpdateWithoutClientInput>
  }

  export type ClientTermsOfUseUpdateManyWithWhereWithoutClientInput = {
    where: ClientTermsOfUseScalarWhereInput
    data: XOR<ClientTermsOfUseUpdateManyMutationInput, ClientTermsOfUseUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientTermsOfUseScalarWhereInput = {
    AND?: ClientTermsOfUseScalarWhereInput | ClientTermsOfUseScalarWhereInput[]
    OR?: ClientTermsOfUseScalarWhereInput[]
    NOT?: ClientTermsOfUseScalarWhereInput | ClientTermsOfUseScalarWhereInput[]
    id?: StringFilter<"ClientTermsOfUse"> | string
    clientId?: StringFilter<"ClientTermsOfUse"> | string
    termsId?: StringFilter<"ClientTermsOfUse"> | string
    acceptedAt?: DateTimeFilter<"ClientTermsOfUse"> | Date | string
  }

  export type ClientCreateWithoutClientUsersInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientPlans?: ClientPlanCreateNestedManyWithoutClientInput
    requests?: ClientRequestCreateNestedManyWithoutClientInput
    termsAccepted?: ClientTermsOfUseCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutClientUsersInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientPlans?: ClientPlanUncheckedCreateNestedManyWithoutClientInput
    requests?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
    termsAccepted?: ClientTermsOfUseUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutClientUsersInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutClientUsersInput, ClientUncheckedCreateWithoutClientUsersInput>
  }

  export type ClientRequestCreateWithoutClientUserInput = {
    id?: string
    requestType: $Enums.RequestType
    generatedToken?: string | null
    generatedCode?: string | null
    expires: Date | string
    createdOn?: Date | string
    client: ClientCreateNestedOneWithoutRequestsInput
  }

  export type ClientRequestUncheckedCreateWithoutClientUserInput = {
    id?: string
    clientId: string
    requestType: $Enums.RequestType
    generatedToken?: string | null
    generatedCode?: string | null
    expires: Date | string
    createdOn?: Date | string
  }

  export type ClientRequestCreateOrConnectWithoutClientUserInput = {
    where: ClientRequestWhereUniqueInput
    create: XOR<ClientRequestCreateWithoutClientUserInput, ClientRequestUncheckedCreateWithoutClientUserInput>
  }

  export type ClientRequestCreateManyClientUserInputEnvelope = {
    data: ClientRequestCreateManyClientUserInput | ClientRequestCreateManyClientUserInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutClientUsersInput = {
    update: XOR<ClientUpdateWithoutClientUsersInput, ClientUncheckedUpdateWithoutClientUsersInput>
    create: XOR<ClientCreateWithoutClientUsersInput, ClientUncheckedCreateWithoutClientUsersInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutClientUsersInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutClientUsersInput, ClientUncheckedUpdateWithoutClientUsersInput>
  }

  export type ClientUpdateWithoutClientUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUpdateManyWithoutClientNestedInput
    requests?: ClientRequestUpdateManyWithoutClientNestedInput
    termsAccepted?: ClientTermsOfUseUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutClientUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUncheckedUpdateManyWithoutClientNestedInput
    requests?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
    termsAccepted?: ClientTermsOfUseUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientRequestUpsertWithWhereUniqueWithoutClientUserInput = {
    where: ClientRequestWhereUniqueInput
    update: XOR<ClientRequestUpdateWithoutClientUserInput, ClientRequestUncheckedUpdateWithoutClientUserInput>
    create: XOR<ClientRequestCreateWithoutClientUserInput, ClientRequestUncheckedCreateWithoutClientUserInput>
  }

  export type ClientRequestUpdateWithWhereUniqueWithoutClientUserInput = {
    where: ClientRequestWhereUniqueInput
    data: XOR<ClientRequestUpdateWithoutClientUserInput, ClientRequestUncheckedUpdateWithoutClientUserInput>
  }

  export type ClientRequestUpdateManyWithWhereWithoutClientUserInput = {
    where: ClientRequestScalarWhereInput
    data: XOR<ClientRequestUpdateManyMutationInput, ClientRequestUncheckedUpdateManyWithoutClientUserInput>
  }

  export type ClientPlanCreateWithoutPlanInput = {
    id?: string
    current?: boolean
    createdOn?: Date | string
    client: ClientCreateNestedOneWithoutClientPlansInput
    periods?: ClientPeriodPlanCreateNestedManyWithoutClientPlanInput
  }

  export type ClientPlanUncheckedCreateWithoutPlanInput = {
    id?: string
    clientId: string
    current?: boolean
    createdOn?: Date | string
    periods?: ClientPeriodPlanUncheckedCreateNestedManyWithoutClientPlanInput
  }

  export type ClientPlanCreateOrConnectWithoutPlanInput = {
    where: ClientPlanWhereUniqueInput
    create: XOR<ClientPlanCreateWithoutPlanInput, ClientPlanUncheckedCreateWithoutPlanInput>
  }

  export type ClientPlanCreateManyPlanInputEnvelope = {
    data: ClientPlanCreateManyPlanInput | ClientPlanCreateManyPlanInput[]
    skipDuplicates?: boolean
  }

  export type ClientPlanUpsertWithWhereUniqueWithoutPlanInput = {
    where: ClientPlanWhereUniqueInput
    update: XOR<ClientPlanUpdateWithoutPlanInput, ClientPlanUncheckedUpdateWithoutPlanInput>
    create: XOR<ClientPlanCreateWithoutPlanInput, ClientPlanUncheckedCreateWithoutPlanInput>
  }

  export type ClientPlanUpdateWithWhereUniqueWithoutPlanInput = {
    where: ClientPlanWhereUniqueInput
    data: XOR<ClientPlanUpdateWithoutPlanInput, ClientPlanUncheckedUpdateWithoutPlanInput>
  }

  export type ClientPlanUpdateManyWithWhereWithoutPlanInput = {
    where: ClientPlanScalarWhereInput
    data: XOR<ClientPlanUpdateManyMutationInput, ClientPlanUncheckedUpdateManyWithoutPlanInput>
  }

  export type ClientCreateWithoutClientPlansInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientUsers?: ClientUserCreateNestedManyWithoutClientInput
    requests?: ClientRequestCreateNestedManyWithoutClientInput
    termsAccepted?: ClientTermsOfUseCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutClientPlansInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientUsers?: ClientUserUncheckedCreateNestedManyWithoutClientInput
    requests?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
    termsAccepted?: ClientTermsOfUseUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutClientPlansInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutClientPlansInput, ClientUncheckedCreateWithoutClientPlansInput>
  }

  export type PlanCreateWithoutClientPlansInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    isTrial?: boolean
    createdOn?: Date | string
  }

  export type PlanUncheckedCreateWithoutClientPlansInput = {
    id?: string
    name: string
    description?: string | null
    price: Decimal | DecimalJsLike | number | string
    durationDays: number
    isTrial?: boolean
    createdOn?: Date | string
  }

  export type PlanCreateOrConnectWithoutClientPlansInput = {
    where: PlanWhereUniqueInput
    create: XOR<PlanCreateWithoutClientPlansInput, PlanUncheckedCreateWithoutClientPlansInput>
  }

  export type ClientPeriodPlanCreateWithoutClientPlanInput = {
    id?: string
    startsAt: Date | string
    expiresAt: Date | string
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: Date | string
  }

  export type ClientPeriodPlanUncheckedCreateWithoutClientPlanInput = {
    id?: string
    startsAt: Date | string
    expiresAt: Date | string
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: Date | string
  }

  export type ClientPeriodPlanCreateOrConnectWithoutClientPlanInput = {
    where: ClientPeriodPlanWhereUniqueInput
    create: XOR<ClientPeriodPlanCreateWithoutClientPlanInput, ClientPeriodPlanUncheckedCreateWithoutClientPlanInput>
  }

  export type ClientPeriodPlanCreateManyClientPlanInputEnvelope = {
    data: ClientPeriodPlanCreateManyClientPlanInput | ClientPeriodPlanCreateManyClientPlanInput[]
    skipDuplicates?: boolean
  }

  export type ClientUpsertWithoutClientPlansInput = {
    update: XOR<ClientUpdateWithoutClientPlansInput, ClientUncheckedUpdateWithoutClientPlansInput>
    create: XOR<ClientCreateWithoutClientPlansInput, ClientUncheckedCreateWithoutClientPlansInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutClientPlansInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutClientPlansInput, ClientUncheckedUpdateWithoutClientPlansInput>
  }

  export type ClientUpdateWithoutClientPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientUsers?: ClientUserUpdateManyWithoutClientNestedInput
    requests?: ClientRequestUpdateManyWithoutClientNestedInput
    termsAccepted?: ClientTermsOfUseUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutClientPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientUsers?: ClientUserUncheckedUpdateManyWithoutClientNestedInput
    requests?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
    termsAccepted?: ClientTermsOfUseUncheckedUpdateManyWithoutClientNestedInput
  }

  export type PlanUpsertWithoutClientPlansInput = {
    update: XOR<PlanUpdateWithoutClientPlansInput, PlanUncheckedUpdateWithoutClientPlansInput>
    create: XOR<PlanCreateWithoutClientPlansInput, PlanUncheckedCreateWithoutClientPlansInput>
    where?: PlanWhereInput
  }

  export type PlanUpdateToOneWithWhereWithoutClientPlansInput = {
    where?: PlanWhereInput
    data: XOR<PlanUpdateWithoutClientPlansInput, PlanUncheckedUpdateWithoutClientPlansInput>
  }

  export type PlanUpdateWithoutClientPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type PlanUncheckedUpdateWithoutClientPlansInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    durationDays?: IntFieldUpdateOperationsInput | number
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPeriodPlanUpsertWithWhereUniqueWithoutClientPlanInput = {
    where: ClientPeriodPlanWhereUniqueInput
    update: XOR<ClientPeriodPlanUpdateWithoutClientPlanInput, ClientPeriodPlanUncheckedUpdateWithoutClientPlanInput>
    create: XOR<ClientPeriodPlanCreateWithoutClientPlanInput, ClientPeriodPlanUncheckedCreateWithoutClientPlanInput>
  }

  export type ClientPeriodPlanUpdateWithWhereUniqueWithoutClientPlanInput = {
    where: ClientPeriodPlanWhereUniqueInput
    data: XOR<ClientPeriodPlanUpdateWithoutClientPlanInput, ClientPeriodPlanUncheckedUpdateWithoutClientPlanInput>
  }

  export type ClientPeriodPlanUpdateManyWithWhereWithoutClientPlanInput = {
    where: ClientPeriodPlanScalarWhereInput
    data: XOR<ClientPeriodPlanUpdateManyMutationInput, ClientPeriodPlanUncheckedUpdateManyWithoutClientPlanInput>
  }

  export type ClientPeriodPlanScalarWhereInput = {
    AND?: ClientPeriodPlanScalarWhereInput | ClientPeriodPlanScalarWhereInput[]
    OR?: ClientPeriodPlanScalarWhereInput[]
    NOT?: ClientPeriodPlanScalarWhereInput | ClientPeriodPlanScalarWhereInput[]
    id?: StringFilter<"ClientPeriodPlan"> | string
    clientPlanId?: StringFilter<"ClientPeriodPlan"> | string
    startsAt?: DateTimeFilter<"ClientPeriodPlan"> | Date | string
    expiresAt?: DateTimeFilter<"ClientPeriodPlan"> | Date | string
    isTrial?: BoolFilter<"ClientPeriodPlan"> | boolean
    isCurrent?: BoolFilter<"ClientPeriodPlan"> | boolean
    wasConfirmed?: BoolFilter<"ClientPeriodPlan"> | boolean
    createdOn?: DateTimeFilter<"ClientPeriodPlan"> | Date | string
  }

  export type ClientPlanCreateWithoutPeriodsInput = {
    id?: string
    current?: boolean
    createdOn?: Date | string
    client: ClientCreateNestedOneWithoutClientPlansInput
    plan: PlanCreateNestedOneWithoutClientPlansInput
  }

  export type ClientPlanUncheckedCreateWithoutPeriodsInput = {
    id?: string
    clientId: string
    planId: string
    current?: boolean
    createdOn?: Date | string
  }

  export type ClientPlanCreateOrConnectWithoutPeriodsInput = {
    where: ClientPlanWhereUniqueInput
    create: XOR<ClientPlanCreateWithoutPeriodsInput, ClientPlanUncheckedCreateWithoutPeriodsInput>
  }

  export type ClientPlanUpsertWithoutPeriodsInput = {
    update: XOR<ClientPlanUpdateWithoutPeriodsInput, ClientPlanUncheckedUpdateWithoutPeriodsInput>
    create: XOR<ClientPlanCreateWithoutPeriodsInput, ClientPlanUncheckedCreateWithoutPeriodsInput>
    where?: ClientPlanWhereInput
  }

  export type ClientPlanUpdateToOneWithWhereWithoutPeriodsInput = {
    where?: ClientPlanWhereInput
    data: XOR<ClientPlanUpdateWithoutPeriodsInput, ClientPlanUncheckedUpdateWithoutPeriodsInput>
  }

  export type ClientPlanUpdateWithoutPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutClientPlansNestedInput
    plan?: PlanUpdateOneRequiredWithoutClientPlansNestedInput
  }

  export type ClientPlanUncheckedUpdateWithoutPeriodsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientCreateWithoutRequestsInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientPlans?: ClientPlanCreateNestedManyWithoutClientInput
    clientUsers?: ClientUserCreateNestedManyWithoutClientInput
    termsAccepted?: ClientTermsOfUseCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientPlans?: ClientPlanUncheckedCreateNestedManyWithoutClientInput
    clientUsers?: ClientUserUncheckedCreateNestedManyWithoutClientInput
    termsAccepted?: ClientTermsOfUseUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutRequestsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutRequestsInput, ClientUncheckedCreateWithoutRequestsInput>
  }

  export type ClientUserCreateWithoutRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    cpfCnpj: bigint | number
    phone: string
    role: $Enums.Role
    createdOn?: Date | string
    updatedOn?: Date | string
    client: ClientCreateNestedOneWithoutClientUsersInput
  }

  export type ClientUserUncheckedCreateWithoutRequestsInput = {
    id?: string
    name: string
    email: string
    password: string
    cpfCnpj: bigint | number
    phone: string
    role: $Enums.Role
    clientId: string
    createdOn?: Date | string
    updatedOn?: Date | string
  }

  export type ClientUserCreateOrConnectWithoutRequestsInput = {
    where: ClientUserWhereUniqueInput
    create: XOR<ClientUserCreateWithoutRequestsInput, ClientUserUncheckedCreateWithoutRequestsInput>
  }

  export type ClientUpsertWithoutRequestsInput = {
    update: XOR<ClientUpdateWithoutRequestsInput, ClientUncheckedUpdateWithoutRequestsInput>
    create: XOR<ClientCreateWithoutRequestsInput, ClientUncheckedCreateWithoutRequestsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutRequestsInput, ClientUncheckedUpdateWithoutRequestsInput>
  }

  export type ClientUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUpdateManyWithoutClientNestedInput
    clientUsers?: ClientUserUpdateManyWithoutClientNestedInput
    termsAccepted?: ClientTermsOfUseUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUncheckedUpdateManyWithoutClientNestedInput
    clientUsers?: ClientUserUncheckedUpdateManyWithoutClientNestedInput
    termsAccepted?: ClientTermsOfUseUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientUserUpsertWithoutRequestsInput = {
    update: XOR<ClientUserUpdateWithoutRequestsInput, ClientUserUncheckedUpdateWithoutRequestsInput>
    create: XOR<ClientUserCreateWithoutRequestsInput, ClientUserUncheckedCreateWithoutRequestsInput>
    where?: ClientUserWhereInput
  }

  export type ClientUserUpdateToOneWithWhereWithoutRequestsInput = {
    where?: ClientUserWhereInput
    data: XOR<ClientUserUpdateWithoutRequestsInput, ClientUserUncheckedUpdateWithoutRequestsInput>
  }

  export type ClientUserUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutClientUsersNestedInput
  }

  export type ClientUserUncheckedUpdateWithoutRequestsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    clientId?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTermsOfUseCreateWithoutTermsInput = {
    id?: string
    acceptedAt?: Date | string
    client: ClientCreateNestedOneWithoutTermsAcceptedInput
  }

  export type ClientTermsOfUseUncheckedCreateWithoutTermsInput = {
    id?: string
    clientId: string
    acceptedAt?: Date | string
  }

  export type ClientTermsOfUseCreateOrConnectWithoutTermsInput = {
    where: ClientTermsOfUseWhereUniqueInput
    create: XOR<ClientTermsOfUseCreateWithoutTermsInput, ClientTermsOfUseUncheckedCreateWithoutTermsInput>
  }

  export type ClientTermsOfUseCreateManyTermsInputEnvelope = {
    data: ClientTermsOfUseCreateManyTermsInput | ClientTermsOfUseCreateManyTermsInput[]
    skipDuplicates?: boolean
  }

  export type ClientTermsOfUseUpsertWithWhereUniqueWithoutTermsInput = {
    where: ClientTermsOfUseWhereUniqueInput
    update: XOR<ClientTermsOfUseUpdateWithoutTermsInput, ClientTermsOfUseUncheckedUpdateWithoutTermsInput>
    create: XOR<ClientTermsOfUseCreateWithoutTermsInput, ClientTermsOfUseUncheckedCreateWithoutTermsInput>
  }

  export type ClientTermsOfUseUpdateWithWhereUniqueWithoutTermsInput = {
    where: ClientTermsOfUseWhereUniqueInput
    data: XOR<ClientTermsOfUseUpdateWithoutTermsInput, ClientTermsOfUseUncheckedUpdateWithoutTermsInput>
  }

  export type ClientTermsOfUseUpdateManyWithWhereWithoutTermsInput = {
    where: ClientTermsOfUseScalarWhereInput
    data: XOR<ClientTermsOfUseUpdateManyMutationInput, ClientTermsOfUseUncheckedUpdateManyWithoutTermsInput>
  }

  export type ClientCreateWithoutTermsAcceptedInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientPlans?: ClientPlanCreateNestedManyWithoutClientInput
    clientUsers?: ClientUserCreateNestedManyWithoutClientInput
    requests?: ClientRequestCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutTermsAcceptedInput = {
    id?: string
    name: string
    address: string
    createdOn?: Date | string
    updatedOn?: Date | string
    clientPlans?: ClientPlanUncheckedCreateNestedManyWithoutClientInput
    clientUsers?: ClientUserUncheckedCreateNestedManyWithoutClientInput
    requests?: ClientRequestUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTermsAcceptedInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTermsAcceptedInput, ClientUncheckedCreateWithoutTermsAcceptedInput>
  }

  export type TermsOfUseCreateWithoutAcceptedByInput = {
    id?: string
    fileUrl: string
    description?: string | null
    isCurrent?: boolean
    createdOn?: Date | string
  }

  export type TermsOfUseUncheckedCreateWithoutAcceptedByInput = {
    id?: string
    fileUrl: string
    description?: string | null
    isCurrent?: boolean
    createdOn?: Date | string
  }

  export type TermsOfUseCreateOrConnectWithoutAcceptedByInput = {
    where: TermsOfUseWhereUniqueInput
    create: XOR<TermsOfUseCreateWithoutAcceptedByInput, TermsOfUseUncheckedCreateWithoutAcceptedByInput>
  }

  export type ClientUpsertWithoutTermsAcceptedInput = {
    update: XOR<ClientUpdateWithoutTermsAcceptedInput, ClientUncheckedUpdateWithoutTermsAcceptedInput>
    create: XOR<ClientCreateWithoutTermsAcceptedInput, ClientUncheckedCreateWithoutTermsAcceptedInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTermsAcceptedInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTermsAcceptedInput, ClientUncheckedUpdateWithoutTermsAcceptedInput>
  }

  export type ClientUpdateWithoutTermsAcceptedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUpdateManyWithoutClientNestedInput
    clientUsers?: ClientUserUpdateManyWithoutClientNestedInput
    requests?: ClientRequestUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutTermsAcceptedInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientPlans?: ClientPlanUncheckedUpdateManyWithoutClientNestedInput
    clientUsers?: ClientUserUncheckedUpdateManyWithoutClientNestedInput
    requests?: ClientRequestUncheckedUpdateManyWithoutClientNestedInput
  }

  export type TermsOfUseUpsertWithoutAcceptedByInput = {
    update: XOR<TermsOfUseUpdateWithoutAcceptedByInput, TermsOfUseUncheckedUpdateWithoutAcceptedByInput>
    create: XOR<TermsOfUseCreateWithoutAcceptedByInput, TermsOfUseUncheckedCreateWithoutAcceptedByInput>
    where?: TermsOfUseWhereInput
  }

  export type TermsOfUseUpdateToOneWithWhereWithoutAcceptedByInput = {
    where?: TermsOfUseWhereInput
    data: XOR<TermsOfUseUpdateWithoutAcceptedByInput, TermsOfUseUncheckedUpdateWithoutAcceptedByInput>
  }

  export type TermsOfUseUpdateWithoutAcceptedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TermsOfUseUncheckedUpdateWithoutAcceptedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    fileUrl?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPlanCreateManyClientInput = {
    id?: string
    planId: string
    current?: boolean
    createdOn?: Date | string
  }

  export type ClientUserCreateManyClientInput = {
    id?: string
    name: string
    email: string
    password: string
    cpfCnpj: bigint | number
    phone: string
    role: $Enums.Role
    createdOn?: Date | string
    updatedOn?: Date | string
  }

  export type ClientRequestCreateManyClientInput = {
    id?: string
    clientUserId: string
    requestType: $Enums.RequestType
    generatedToken?: string | null
    generatedCode?: string | null
    expires: Date | string
    createdOn?: Date | string
  }

  export type ClientTermsOfUseCreateManyClientInput = {
    id?: string
    termsId: string
    acceptedAt?: Date | string
  }

  export type ClientPlanUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    plan?: PlanUpdateOneRequiredWithoutClientPlansNestedInput
    periods?: ClientPeriodPlanUpdateManyWithoutClientPlanNestedInput
  }

  export type ClientPlanUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    periods?: ClientPeriodPlanUncheckedUpdateManyWithoutClientPlanNestedInput
  }

  export type ClientPlanUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    planId?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientUserUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: ClientRequestUpdateManyWithoutClientUserNestedInput
  }

  export type ClientUserUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
    requests?: ClientRequestUncheckedUpdateManyWithoutClientUserNestedInput
  }

  export type ClientUserUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    cpfCnpj?: BigIntFieldUpdateOperationsInput | bigint | number
    phone?: StringFieldUpdateOperationsInput | string
    role?: EnumRoleFieldUpdateOperationsInput | $Enums.Role
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    clientUser?: ClientUserUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type ClientRequestUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientUserId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTermsOfUseUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    terms?: TermsOfUseUpdateOneRequiredWithoutAcceptedByNestedInput
  }

  export type ClientTermsOfUseUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    termsId?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTermsOfUseUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    termsId?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestCreateManyClientUserInput = {
    id?: string
    clientId: string
    requestType: $Enums.RequestType
    generatedToken?: string | null
    generatedCode?: string | null
    expires: Date | string
    createdOn?: Date | string
  }

  export type ClientRequestUpdateWithoutClientUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutRequestsNestedInput
  }

  export type ClientRequestUncheckedUpdateWithoutClientUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientRequestUncheckedUpdateManyWithoutClientUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    requestType?: EnumRequestTypeFieldUpdateOperationsInput | $Enums.RequestType
    generatedToken?: NullableStringFieldUpdateOperationsInput | string | null
    generatedCode?: NullableStringFieldUpdateOperationsInput | string | null
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPlanCreateManyPlanInput = {
    id?: string
    clientId: string
    current?: boolean
    createdOn?: Date | string
  }

  export type ClientPlanUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutClientPlansNestedInput
    periods?: ClientPeriodPlanUpdateManyWithoutClientPlanNestedInput
  }

  export type ClientPlanUncheckedUpdateWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
    periods?: ClientPeriodPlanUncheckedUpdateManyWithoutClientPlanNestedInput
  }

  export type ClientPlanUncheckedUpdateManyWithoutPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    current?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPeriodPlanCreateManyClientPlanInput = {
    id?: string
    startsAt: Date | string
    expiresAt: Date | string
    isTrial?: boolean
    isCurrent?: boolean
    wasConfirmed?: boolean
    createdOn?: Date | string
  }

  export type ClientPeriodPlanUpdateWithoutClientPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    wasConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPeriodPlanUncheckedUpdateWithoutClientPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    wasConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientPeriodPlanUncheckedUpdateManyWithoutClientPlanInput = {
    id?: StringFieldUpdateOperationsInput | string
    startsAt?: DateTimeFieldUpdateOperationsInput | Date | string
    expiresAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isTrial?: BoolFieldUpdateOperationsInput | boolean
    isCurrent?: BoolFieldUpdateOperationsInput | boolean
    wasConfirmed?: BoolFieldUpdateOperationsInput | boolean
    createdOn?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTermsOfUseCreateManyTermsInput = {
    id?: string
    clientId: string
    acceptedAt?: Date | string
  }

  export type ClientTermsOfUseUpdateWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    client?: ClientUpdateOneRequiredWithoutTermsAcceptedNestedInput
  }

  export type ClientTermsOfUseUncheckedUpdateWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClientTermsOfUseUncheckedUpdateManyWithoutTermsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clientId?: StringFieldUpdateOperationsInput | string
    acceptedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}