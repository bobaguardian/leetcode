# https://leetcode.com/problems/rising-temperature

# Write your MySQL query statement below

SELECT W1.Id AS "Id"
FROM Weather W1 JOIN Weather W2
ON DATEDIFF(W1.RecordDate, W2.RecordDate) = 1
    AND W1.Temperature > W2.Temperature;