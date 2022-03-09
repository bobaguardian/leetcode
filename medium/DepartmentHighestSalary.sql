# https://leetcode.com/problems/department-highest-salary/

# Write your MySQL query statement below

SELECT 
    Department.Name as Department, 
    Employee.Name as Employee, 
    Employee.Salary
    
FROM Employee INNER JOIN Department
ON Employee.DepartmentId = Department.Id # join tables based on department id

WHERE  # Query to get the maximum salary grouped by department
    (Employee.DepartmentId, Salary) IN
        (SELECT DepartmentId, MAX(Salary)
         FROM Employee
         GROUP BY DepartmentId);
         