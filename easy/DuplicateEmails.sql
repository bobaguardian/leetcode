# https://leetcode.com/problems/duplicate-emails

# Write your MySQL query statement below
SELECT Email 
FROM (SELECT Email, COUNT(Email) AS num
      FROM Person
      GROUP BY Email) AS CT
WHERE num > 1;