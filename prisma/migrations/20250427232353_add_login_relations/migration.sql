/*
  Warnings:

  - Added the required column `acceptedById` to the `ClientTermsOfUse` table without a default value. This is not possible if the table is not empty.
  - Added the required column `uploadedById` to the `TermsOfUse` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "LoginResult" AS ENUM ('SUCCESS', 'FAILURE');

-- CreateEnum
CREATE TYPE "LoginContext" AS ENUM ('BACKOFFICE', 'CLIENT');

-- AlterTable
ALTER TABLE "ClientTermsOfUse" ADD COLUMN     "acceptedById" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TermsOfUse" ADD COLUMN     "uploadedById" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "LoginHistory" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "context" "LoginContext" NOT NULL,
    "result" "LoginResult" NOT NULL,
    "ipAddress" TEXT,
    "userAgent" TEXT,
    "createdOn" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "LoginHistory_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "TermsOfUse" ADD CONSTRAINT "TermsOfUse_uploadedById_fkey" FOREIGN KEY ("uploadedById") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ClientTermsOfUse" ADD CONSTRAINT "ClientTermsOfUse_acceptedById_fkey" FOREIGN KEY ("acceptedById") REFERENCES "ClientUser"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
