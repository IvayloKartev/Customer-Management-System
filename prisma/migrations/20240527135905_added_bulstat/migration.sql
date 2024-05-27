/*
  Warnings:

  - Added the required column `bulstat` to the `Company` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Company` ADD COLUMN `bulstat` VARCHAR(191) NOT NULL;
