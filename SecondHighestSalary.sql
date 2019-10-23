# https://leetcode.com/problems/second-highest-salary

# Returns the second highest salary of the employee table
# null if there is no second highest salary

# Write your MySQL query statement below
SELECT (SELECT DISTINCT Salary
        FROM Employee
        ORDER BY Salary DESC
        LIMIT 1 OFFSET 1) AS SecondHighestSalary;
