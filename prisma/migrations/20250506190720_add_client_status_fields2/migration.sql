/*
  Warnings:

  - You are about to drop the column `confirmationCode` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `isConfirmed` on the `Client` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Client" DROP COLUMN "confirmationCode",
DROP COLUMN "isConfirmed";
