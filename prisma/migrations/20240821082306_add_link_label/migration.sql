/*
  Warnings:

  - Added the required column `label` to the `Link` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Link" ADD COLUMN     "label" VARCHAR(255) NOT NULL;
