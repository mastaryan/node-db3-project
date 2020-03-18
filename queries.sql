-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT p.ProductName
      ,c.CategoryName
FROM Product AS p
INNER JOIN Category AS c ON p.CategoryId = c.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o.id
      ,s.CompanyName
FROM [Order] AS o
INNER JOIN Shipper AS s ON o.ShipVia = s.Id
WHERE OrderDate < '2012-08-09'

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT od.OrderID
      ,od.Quantity
      ,p.ProductName
FROM OrderDetail AS od
JOIN Product AS p ON od.ProductId = p.Id
WHERE OrderId = 10251

-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT o.id AS OrderId
      ,c.CompanyName AS CustomerCompanyName
      ,e.LastName AS EmployeeLastName
From [Order] AS o
JOIN Customer AS c ON o.CustomerId = c.Id
JOIN Employee AS e ON o.EmployeeId = e.Id 