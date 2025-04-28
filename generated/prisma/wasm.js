
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum,
  Public,
  getRuntime,
  skip
} = require('./runtime/index-browser.js')


const Prisma = {}

exports.Prisma = Prisma
exports.$Enums = {}

/**
 * Prisma Client JS version: 6.6.0
 * Query Engine version: f676762280b54cd07c770017ed3711ddde35f37a
 */
Prisma.prismaVersion = {
  client: "6.6.0",
  engine: "f676762280b54cd07c770017ed3711ddde35f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientKnownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientUnknownRequestError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientRustPanicError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientRustPanicError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientInitializationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientInitializationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.PrismaClientValidationError = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`PrismaClientValidationError is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`sqltag is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.empty = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`empty is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.join = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`join is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.raw = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`raw is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.validator = Public.validator

/**
* Extensions
*/
Prisma.getExtensionContext = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.getExtensionContext is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}
Prisma.defineExtension = () => {
  const runtimeName = getRuntime().prettyName;
  throw new Error(`Extensions.defineExtension is unable to run in this browser environment, or has been bundled for the browser (running in ${runtimeName}).
In case this error is unexpected for you, please report it in https://pris.ly/prisma-prisma-bug-report`,
)}

/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}



/**
 * Enums
 */

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});

exports.Prisma.UserScalarFieldEnum = {
  id: 'id',
  name: 'name',
  email: 'email',
  password: 'password',
  role: 'role',
  createdOn: 'createdOn',
  updatedOn: 'updatedOn'
};

exports.Prisma.ClientScalarFieldEnum = {
  id: 'id',
  name: 'name',
  address: 'address',
  createdOn: 'createdOn',
  updatedOn: 'updatedOn'
};

exports.Prisma.ClientUserScalarFieldEnum = {
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

exports.Prisma.PlanScalarFieldEnum = {
  id: 'id',
  name: 'name',
  description: 'description',
  price: 'price',
  durationDays: 'durationDays',
  isTrial: 'isTrial',
  createdOn: 'createdOn'
};

exports.Prisma.ClientPlanScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  planId: 'planId',
  current: 'current',
  createdOn: 'createdOn'
};

exports.Prisma.ClientPeriodPlanScalarFieldEnum = {
  id: 'id',
  clientPlanId: 'clientPlanId',
  startsAt: 'startsAt',
  expiresAt: 'expiresAt',
  isTrial: 'isTrial',
  isCurrent: 'isCurrent',
  wasConfirmed: 'wasConfirmed',
  createdOn: 'createdOn'
};

exports.Prisma.ClientRequestScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  clientUserId: 'clientUserId',
  requestType: 'requestType',
  generatedToken: 'generatedToken',
  generatedCode: 'generatedCode',
  expires: 'expires',
  createdOn: 'createdOn'
};

exports.Prisma.TermsOfUseScalarFieldEnum = {
  id: 'id',
  fileUrl: 'fileUrl',
  description: 'description',
  isCurrent: 'isCurrent',
  createdOn: 'createdOn'
};

exports.Prisma.ClientTermsOfUseScalarFieldEnum = {
  id: 'id',
  clientId: 'clientId',
  termsId: 'termsId',
  acceptedAt: 'acceptedAt'
};

exports.Prisma.SortOrder = {
  asc: 'asc',
  desc: 'desc'
};

exports.Prisma.QueryMode = {
  default: 'default',
  insensitive: 'insensitive'
};

exports.Prisma.NullsOrder = {
  first: 'first',
  last: 'last'
};
exports.Role = exports.$Enums.Role = {
  BOOwner: 'BOOwner',
  BOAdmin: 'BOAdmin',
  BOFinancial: 'BOFinancial',
  BOOperator: 'BOOperator',
  ClientOwner: 'ClientOwner',
  ClientAdmin: 'ClientAdmin',
  ClientFinancial: 'ClientFinancial',
  ClientOperator: 'ClientOperator'
};

exports.RequestType = exports.$Enums.RequestType = {
  AccountCreation: 'AccountCreation',
  RequestPassword: 'RequestPassword',
  InfoChanging: 'InfoChanging'
};

exports.Prisma.ModelName = {
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

/**
 * This is a stub Prisma Client that will error at runtime if called.
 */
class PrismaClient {
  constructor() {
    return new Proxy(this, {
      get(target, prop) {
        let message
        const runtime = getRuntime()
        if (runtime.isEdge) {
          message = `PrismaClient is not configured to run in ${runtime.prettyName}. In order to run Prisma Client on edge runtime, either:
- Use Prisma Accelerate: https://pris.ly/d/accelerate
- Use Driver Adapters: https://pris.ly/d/driver-adapters
`;
        } else {
          message = 'PrismaClient is unable to run in this browser environment, or has been bundled for the browser (running in `' + runtime.prettyName + '`).'
        }

        message += `
If this is unexpected, please open an issue: https://pris.ly/prisma-prisma-bug-report`

        throw new Error(message)
      }
    })
  }
}

exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
