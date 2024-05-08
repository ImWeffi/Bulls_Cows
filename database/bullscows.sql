-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Apr 29, 2024 at 04:51 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `bullscows`
--

-- --------------------------------------------------------

--
-- Table structure for table `game_history`
--

CREATE TABLE `game_history` (
  `game_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `guess` varchar(255) NOT NULL,
  `bulls` int(11) NOT NULL,
  `cows` int(11) NOT NULL,
  `attempts` int(255) NOT NULL,
  `timer` int(255) NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `game_history`
--

INSERT INTO `game_history` (`game_id`, `user_id`, `guess`, `bulls`, `cows`, `attempts`, `timer`, `created_at`) VALUES
(48, 32, '8159', 4, 0, 1, 1, '2024-04-29 13:48:02'),
(49, 32, '6821', 4, 0, 2, 6, '2024-04-29 13:52:25'),
(50, 32, '8423', 4, 0, 2, 7, '2024-04-29 14:00:35'),
(51, 34, '38465', 5, 0, 1, 1, '2024-04-29 14:14:31'),
(52, 34, '9468', 4, 0, 1, 0, '2024-04-29 14:14:53'),
(53, 34, '4532', 4, 0, 2, 4, '2024-04-29 14:15:56'),
(54, 34, '5183', 4, 0, 1, 1, '2024-04-29 14:25:40'),
(55, 34, '5296', 4, 0, 1, 3, '2024-04-29 14:26:34'),
(56, 34, '6314', 4, 0, 1, 3, '2024-04-29 14:26:42'),
(57, 34, '9527', 4, 0, 1, 2, '2024-04-29 14:26:59'),
(58, 34, '7584', 4, 0, 1, 2, '2024-04-29 14:27:41'),
(59, 34, '5324', 4, 0, 2, 4, '2024-04-29 14:27:50'),
(60, 34, '2457', 4, 0, 2, 3, '2024-04-29 14:29:15');

-- --------------------------------------------------------

--
-- Table structure for table `questions`
--

CREATE TABLE `questions` (
  `question_id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `text` longtext NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`question_id`, `title`, `email`, `text`) VALUES
(19, '\'dsada', 'dasda@inbox.lv', 'dasdasdas'),
(20, 'dasd', 'dasd@inbox.lv', 'das'),
(21, 'How?', 'nikita.karpovs2004@inbox.lv', 'how you created this app?'),
(22, 'How does your project work?', 'dsadas3213@inbox.lv', 'Lol, nice game.');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `user_id` int(11) NOT NULL,
  `username` varchar(100) NOT NULL,
  `password` varchar(100) NOT NULL,
  `email` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`user_id`, `username`, `password`, `email`) VALUES
(31, 'nikita', '$2b$10$.Lkj6ic7Lqy.xpHgtRgq4uUN23SOzt9sB5b6tB6cZjqTucJg/TYja', 'nikita.karpovs2004@inbox.lv'),
(32, 'karpovs', '$2b$10$FHZq76Xxtt/ensbJVm/F8usWm0wOfWE1drCgN9LW47JPTgTCMbNaS', 'nikita.karpovs2004@inbox.lv'),
(33, '3214', '$2b$10$V9tBDc5zJZ5eKmQtW51PzOyvd0cbJ8sHiE2bb/xrGJzQR5nrWWMWq', 'nikita.karpovs2004@inbox.lv'),
(34, 'niks', '$2b$10$eOL4XmQX2M6WDQuDiALIqutjN73z.SPq3gFBix5O4pvB28kn6wCb2', 'nikita.karpovs2004@inbox.lv');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `game_history`
--
ALTER TABLE `game_history`
  ADD PRIMARY KEY (`game_id`),
  ADD KEY `fk_user_id` (`user_id`);

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`question_id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `game_history`
--
ALTER TABLE `game_history`
  MODIFY `game_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=61;

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `question_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=35;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `game_history`
--
ALTER TABLE `game_history`
  ADD CONSTRAINT `fk_user_id` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`) ON DELETE CASCADE,
  ADD CONSTRAINT `game_history_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `users` (`user_id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
