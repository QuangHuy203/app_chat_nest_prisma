-- CreateTable
CREATE TABLE `user` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `firstName` VARCHAR(191) NULL,
    `lastName` VARCHAR(191) NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_message_attachments` (
    `key` CHAR(36) NOT NULL,
    `messageId` INTEGER NULL,

    INDEX `FK_e3e4b147713098bbc5a3948c24b`(`messageId`),
    PRIMARY KEY (`key`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `group_messages` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `content` TEXT NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `authorId` INTEGER NULL,
    `groupId` INTEGER NULL,

    INDEX `FK_8f9e67acada60b6ae7096c4f15f`(`groupId`),
    INDEX `FK_a2d00b52e4e18a3686d68a155c0`(`authorId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `groups` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `title` VARCHAR(255) NULL,
    `created_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `updated_at` DATETIME(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6),
    `avatar` VARCHAR(255) NULL,
    `creatorId` INTEGER NULL,
    `ownerId` INTEGER NULL,
    `last_message_sent_id` INTEGER NULL,

    UNIQUE INDEX `REL_4147c690073a1c217af1169841`(`last_message_sent_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users_groups` (
    `groupsId` INTEGER NOT NULL,
    `usersId` INTEGER NOT NULL,

    INDEX `IDX_0f3881cfe1ef94b0e435d1d72f`(`usersId`),
    INDEX `IDX_6320d5cbd6f7702b2e78d38d6b`(`groupsId`),
    PRIMARY KEY (`groupsId`, `usersId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_presences` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` INTEGER NULL,
    `updatedDate` DATETIME(3) NULL,
    `updatedBy` INTEGER NULL,
    `deletedDate` DATETIME(3) NULL,
    `statusMessage` VARCHAR(191) NULL,
    `showOffline` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `user_chatting` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `createdDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `createdBy` INTEGER NULL,
    `updatedDate` DATETIME(3) NULL,
    `updatedBy` INTEGER NULL,
    `deletedDate` DATETIME(3) NULL,
    `username` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `firstname` VARCHAR(191) NOT NULL,
    `latsname` VARCHAR(191) NOT NULL,
    `password` VARCHAR(191) NOT NULL,
    `messageId` INTEGER NULL,
    `groupsId` INTEGER NULL,
    `profileId` INTEGER NULL,
    `peerId` INTEGER NULL,
    `presenceId` INTEGER NULL,

    UNIQUE INDEX `user_chatting_presenceId_key`(`presenceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `friend` (
    `id` INTEGER NOT NULL,
    `senderId` INTEGER NOT NULL,
    `receiverId` INTEGER NOT NULL,
    `createAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `friend_senderId_key`(`senderId`),
    UNIQUE INDEX `friend_receiverId_key`(`receiverId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `group_message_attachments` ADD CONSTRAINT `FK_e3e4b147713098bbc5a3948c24b` FOREIGN KEY (`messageId`) REFERENCES `group_messages`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `group_messages` ADD CONSTRAINT `FK_8f9e67acada60b6ae7096c4f15f` FOREIGN KEY (`groupId`) REFERENCES `groups`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `group_messages` ADD CONSTRAINT `FK_a2d00b52e4e18a3686d68a155c0` FOREIGN KEY (`authorId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `groups` ADD CONSTRAINT `FK_4147c690073a1c217af1169841b` FOREIGN KEY (`last_message_sent_id`) REFERENCES `group_messages`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users_groups` ADD CONSTRAINT `FK_0f3881cfe1ef94b0e435d1d72f9` FOREIGN KEY (`usersId`) REFERENCES `user`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `users_groups` ADD CONSTRAINT `FK_6320d5cbd6f7702b2e78d38d6b8` FOREIGN KEY (`groupsId`) REFERENCES `groups`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `user_chatting` ADD CONSTRAINT `user_chatting_presenceId_fkey` FOREIGN KEY (`presenceId`) REFERENCES `user_presences`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friend` ADD CONSTRAINT `friend_senderId_fkey` FOREIGN KEY (`senderId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `friend` ADD CONSTRAINT `friend_receiverId_fkey` FOREIGN KEY (`receiverId`) REFERENCES `user`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
