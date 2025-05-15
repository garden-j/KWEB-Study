CREATE TABLE `students` (
    `stu_name` VARCHAR(20) NOT NULL,
    `seq_num` INT NOT NULL,
    `year` INT NOT NULL,
    `major` VARCHAR(10) NOT NULL,
    `phone` VARCHAR(13) NOT NULL,
    `credit` INT DEFAULT 0,
    `score` FLOAT DEFAULT 0.0,
    `in_school` TINYINT(1) DEFAULT 1,
    PRIMARY KEY (`year`, `major`, `seq_num`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;