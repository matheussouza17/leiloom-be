-- CreateEnum
CREATE TYPE "AccountStatus" AS ENUM ('PENDING', 'CONFIRMED', 'APPROVED', 'EXCLUDED');

-- AlterTable
ALTER TABLE "Client" ADD COLUMN     "confirmationCode" TEXT,
ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "status" "AccountStatus" NOT NULL DEFAULT 'PENDING';

-- AlterTable
ALTER TABLE "ClientUser" ADD COLUMN     "confirmationCode" TEXT,
ADD COLUMN     "isConfirmed" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "status" "AccountStatus" NOT NULL DEFAULT 'PENDING';
