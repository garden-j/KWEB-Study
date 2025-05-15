CREATE TABLE `users` (
    `user_id` VARCHAR(10) NOT NULL,
    `user_pw` VARCHAR(10) NOT NULL,
    `user_name` VARCHAR(10) NOT NULL,
    `prof_url` VARCHAR(40),
    `prof_msg` VARCHAR(25),
    `quit_or` TINYINT(1) NOT NULL DEFAULT 0,
    `join_date` VARCHAR(10) NOT NULL,
    PRIMARY KEY(`user_id`),
    FOREIGN KEY(`quit_or`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `channels` (
    `channel_name` VARCHAR(10) NOT NULL,
    `channel_maker` VARCHAR(10) NOT NULL,
    `channel_link` VARCHAR(40) NOT NULL,
    `max_num` INT NOT NULL,
    `quit_or` TINYINT(1) NOT NULL DEFAULT 0,
    `make_date` VARCHAR(10) NOT NULL,
    PRIMARY KEY(`channel_name`),
    FOREIGN KEY(`channel_name`)
    REFERENCES `users`(`quit_or`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `chats` (
    `chat_id` VARCHAR(10) NOT NULL,
    `chat_content` VARCHAR(30) NOT NULL,
    `chat_writer` VARCHAR(10) NOT NULL,
    `channel_name` VARCHAR(10) NOT NULL,
    `chat_date` VARCHAR(10) NOT NULL,
    PRIMARY KEY(`chat_id`),
    REFERENCES `channels`(`channel_name`) ON DELETE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `blocks` (
    `blocker` VARCHAR(10) NOT NULL,
    `blocked` VARCHAR(10) NOT NULL,
    `block_date` VARCHAR(10) NOT NULL,
    PRIMARY key(`blocker`, `blocked`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

CREATE TABLE `follows` (
    `follower` VARCHAR(10) NOT NULL,
    `followee` VARCHAR(10) NOT NULL,
    `follow_date` VARCHAR(10) NOT NULL,
    PRIMARY key(`follower`, `followee`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;