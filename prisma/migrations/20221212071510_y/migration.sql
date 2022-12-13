/*
  Warnings:

  - You are about to drop the column `lastMessageId` on the `message` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `message` DROP FOREIGN KEY `message_lastMessageId_fkey`;

-- AlterTable
ALTER TABLE `friend` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `friend_request` MODIFY `id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `message` DROP COLUMN `lastMessageId`;

-- CreateTable
CREATE TABLE `conversation_message` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` INTEGER NULL,
    `updatedDate` DATETIME(3) NULL,
    `updatedBy` INTEGER NULL,
    `deletedDate` DATETIME(3) NULL,
    `conversationId` INTEGER NOT NULL,
    `messageId` INTEGER NOT NULL,

    UNIQUE INDEX `conversation_message_conversationId_messageId_key`(`conversationId`, `messageId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `conversation_message` ADD CONSTRAINT `conversation_message_conversationId_fkey` FOREIGN KEY (`conversationId`) REFERENCES `conversation`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `conversation_message` ADD CONSTRAINT `conversation_message_messageId_fkey` FOREIGN KEY (`messageId`) REFERENCES `message`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
