# https://leetcode.com/problems/combine-two-tables

# Combines 2 tables Person and Address regardless if there
# is an address for each of those people

# Write your MySQL query statement below
SELECT FirstName, LastName, City, State
FROM Person LEFT JOIN Address 
ON Person.PersonId = Address.PersonId;