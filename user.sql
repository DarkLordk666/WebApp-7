-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Nov 14, 2023 at 03:51 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.0.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `mydb`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `fname` varchar(50) NOT NULL,
  `lname` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`id`, `fname`, `lname`, `email`, `password`) VALUES
(20, 'Yahnnakorn', 'Chittira', 'poopup1389@gmail.com', '$2b$10$ITXL2Z6sVJqK48RUrQC3oeJaO5SwQ52TISj3gyr0zGHSCetLLl9iS'),
(21, 'Yahnnakorn', 'chittira', 'poopup1389@gmail.com', '$2b$10$1Qf.tvmjcObOJ.jtXvOzLeNQVR.W2WUeMiPT9pOkE73S/.6.vu4Q2'),
(22, 'Yahnnakorn', 'chittira', 'poopup1389@gmail.com', '$2b$10$ExoK3FCn593fK5Q/EP2qOen4Yl2iF4ZlUTmqnyeem7e/8Gl9JHEfu'),
(23, 'Tony', 'Stark', 'wowsa@gmail.com', '$2b$10$p.HkV799EAqazV03CP1mXueSZ65.ZGQejTN28lj70ewWpixVC38Qm'),
(27, 'Yahnnakorn', 'Chittira', 'poopup1389@gmail.com', '$2b$10$CjXWAE9qvkK9WhRtReotsO/XTFK30oBBMjAa8Cfbho9BINmSrz3Mm'),
(28, 'peter', 'parker', '555@gmail.com', '$2b$10$NyJUHCqV0Zr67S/siXApnOHj0XVf1dAdL39M0bliqvvePlkucnZPC'),
(29, 'tt', 'gg', 'afadad@adad', '$2b$10$9XFtXA1rhQMffJ1yXuWz0uM4OolyKceLlkldncCgUUOIx8QEE2.3i');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=30;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
