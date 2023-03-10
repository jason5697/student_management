-- --------------------------------------------------------
-- Host:                         127.0.0.1
-- Server version:               8.0.32 - MySQL Community Server - GPL
-- Server OS:                    Win64
-- HeidiSQL Version:             12.3.0.6589
-- --------------------------------------------------------

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET NAMES utf8 */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;


-- Dumping database structure for students
CREATE DATABASE IF NOT EXISTS `students` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `students`;

-- Dumping structure for table students.student-login
CREATE TABLE IF NOT EXISTS `student-login` (
  `roll_no` bigint NOT NULL AUTO_INCREMENT,
  `full_name` varchar(200) DEFAULT NULL,
  `father_name` varchar(200) DEFAULT NULL,
  `DOB` date DEFAULT NULL,
  `gender` varchar(200) DEFAULT NULL,
  `location` varchar(200) DEFAULT NULL,
  `mobile_number` bigint DEFAULT NULL,
  `email` varchar(200) DEFAULT NULL,
  `department` varchar(200) DEFAULT NULL,
  `batch` int DEFAULT NULL,
  PRIMARY KEY (`roll_no`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

-- Dumping data for table students.student-login: ~0 rows (approximately)
INSERT INTO `student-login` (`roll_no`, `full_name`, `father_name`, `DOB`, `gender`, `location`, `mobile_number`, `email`, `department`, `batch`) VALUES
	(1, 'Ram kumar', 'rajesh', '1997-08-06', 'male', 'madurai', 8778745956, 'maruthuusp97@gmail.com', 'mechanical', 2018),
	(2, 'vignesh', 'ramesh', '1996-08-16', 'male', 'theni', 8056483333, 'vikysp98@gmail.com', 'mechanical', 2018),
	(3, 'Maruthu pandian', 'thiru', '1998-05-08', 'male', 'ramanad', 8879456422, 'maruthuusp@gmail.com', 'mechanical', 2018),
	(4, 'jolene', 'jobin david', '1996-04-02', 'female', 'dindigul', 8344018506, 'jesjolene@yahoo.com', 'computer science', 2019),
	(5, 'ajith kumar', 'ram', '1997-12-05', 'male', 'madurai', 8874562130, 'ajithkumar@gmail.com', 'civil', 2020),
	(6, 'jason david', 'vedanayagam', '1997-06-05', 'male', 'madurai', 8778745356, 'jasondavid567@gmail.com', 'electrical and electronics', 2019),
	(7, 'lenin', 'ramesh', '1996-12-04', 'male', 'theni', 9788690412, 'leninkrish@gmail.com', 'computer science', 2019),
	(8, 'sofiya', 'senthil kumar', '1998-08-05', 'female', 'chennai', 8754632817, 'sofiyacse@gmail.com', 'computer science', 2021),
	(9, 'aravind', 'kumar', '1997-08-04', 'male', 'theni', 9788168325, 'aravindari@gmail.com', 'mechanical', 2021),
	(10, 'kathiravan', 'ramu', '1996-01-07', 'male', 'kanchipuram', 8745121458, 'kathiravn96@gmail.com', 'civil', 2019);

/*!40103 SET TIME_ZONE=IFNULL(@OLD_TIME_ZONE, 'system') */;
/*!40101 SET SQL_MODE=IFNULL(@OLD_SQL_MODE, '') */;
/*!40014 SET FOREIGN_KEY_CHECKS=IFNULL(@OLD_FOREIGN_KEY_CHECKS, 1) */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40111 SET SQL_NOTES=IFNULL(@OLD_SQL_NOTES, 1) */;
