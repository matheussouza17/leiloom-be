/*
  Warnings:

  - You are about to alter the column `price` on the `Plan` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `DoublePrecision`.
  - A unique constraint covering the columns `[clientId,current]` on the table `ClientPlan` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ClientPeriodPlan" ADD COLUMN     "renewedFromId" TEXT;

-- AlterTable
ALTER TABLE "Plan" ALTER COLUMN "price" SET DATA TYPE DOUBLE PRECISION;

-- CreateIndex
CREATE INDEX "ClientPeriodPlan_clientPlanId_isCurrent_idx" ON "ClientPeriodPlan"("clientPlanId", "isCurrent");

-- CreateIndex
CREATE INDEX "ClientPeriodPlan_expiresAt_idx" ON "ClientPeriodPlan"("expiresAt");

-- CreateIndex
CREATE INDEX "ClientPlan_clientId_current_idx" ON "ClientPlan"("clientId", "current");

-- CreateIndex
CREATE UNIQUE INDEX "ClientPlan_clientId_current_key" ON "ClientPlan"("clientId", "current");

-- AddForeignKey
ALTER TABLE "ClientPeriodPlan" ADD CONSTRAINT "ClientPeriodPlan_renewedFromId_fkey" FOREIGN KEY ("renewedFromId") REFERENCES "ClientPeriodPlan"("id") ON DELETE SET NULL ON UPDATE CASCADE;
