/*
  Warnings:

  - You are about to drop the `friend` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_chatting` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[username]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[presenceId]` on the table `user` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `password` to the `user` table without a default value. This is not possible if the table is not empty.
  - Added the required column `username` to the `user` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `friend` DROP FOREIGN KEY `friend_receiverId_fkey`;

-- DropForeignKey
ALTER TABLE `friend` DROP FOREIGN KEY `friend_senderId_fkey`;

-- DropForeignKey
ALTER TABLE `user_chatting` DROP FOREIGN KEY `user_chatting_presenceId_fkey`;

-- AlterTable
ALTER TABLE `user` ADD COLUMN `password` VARCHAR(191) NOT NULL,
    ADD COLUMN `peerId` INTEGER NULL,
    ADD COLUMN `presenceId` INTEGER NULL,
    ADD COLUMN `profileId` INTEGER NULL,
    ADD COLUMN `username` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `friend`;

-- DropTable
DROP TABLE `user_chatting`;

-- CreateTable
CREATE TABLE `peers` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `userId` INTEGER NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `friend_request` (
    `id` INTEGER NOT NULL,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `createAt` DATETIME(3) NULL DEFAULT CURRENT_TIMESTAMP(3),
    `status` VARCHAR(191) NULL,

    UNIQUE INDEX `friend_request_senderId_key`(`senderId`),
    UNIQUE INDEX `friend_request_receiverId_key`(`receiverId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `user_username_key` ON `user`(`username`);

-- CreateIndex
CREATE UNIQUE INDEX `user_presenceId_key` ON `user`(`presenceId`);

-- AddForeignKey
ALTER TABLE `user` ADD CONSTRAINT `user_presenceId_fkey` FOREIGN KEY (`presenceId`) REFERENCES `user_presences`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `peers` ADD CONSTRAINT `peers_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friend_request` ADD CONSTRAINT `friend_request_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friend_request` ADD CONSTRAINT `friend_request_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
