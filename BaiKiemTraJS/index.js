const employees = [
   { id: 1, name: "Alice", age: 23, status: 'working' },
   { id: 3, name: "Bob", age: 25, status: 'working' },
   { id: 6, name: "John", age: 27, status: 'working' },
   { id: 8, name: "David", age: 23, status: 'quit_job' },
   { id: 10, name: "Eve", age: 20, status: 'working' },
];


const products = [
   { id: 1, name: "Phone", price: 1200 },
   { id: 2, name: "Laptop", price: 3000  },
   { id: 3, name: "Tab", price: 2000  },
   { id: 4, name: "PC", price: 800  },
   { id: 5, name: "Monitor", price: 1500  },
]


const orders = [
   { id: 1, employeeId: 1, productId: 4, quantity: 1 },
   { id: 2, employeeId: 3, productId: 2, quantity: 4 },
   { id: 3, employeeId: 1, productId: 5, quantity: 3 },
   { id: 4, employeeId: 6, productId: 1, quantity: 2 },
   { id: 5, employeeId: 3, productId: 5, quantity: 3 },
   { id: 6, employeeId: 8, productId: 1, quantity: 1 },
   { id: 7, employeeId: 10, productId: 3, quantity: 2 },
];


//Exercise 1: List of working employees
function getWorkingEmployee (employees){
    return employees.filter(employee => employee.status === 'working'); //use filter() with the condition to check if the employee's status is 'working'
}
console.log("Exercise 1: List of working employees:", getWorkingEmployee(employees));

//Exercise 2: Get employee who has the highest age
function getOldestEmployee (employees){
    if (employees.length === 0) return null; // check if the employees array is empty
    let oldestEmployee = employees[0]; 
    for (let i = 1; i < employees.length; i++) { 
        if (employees[i].age > oldestEmployee.age) {
            oldestEmployee = employees[i];               //find max age  by list comprehension and return the employee with the highest age
        }
    }
    return oldestEmployee; 
}
console.log("Exercise 2: Employee with the highest age:", getOldestEmployee(employees));
//Exercise 3: Get the cheapest product
function getCheapestProduct (products){
    if (products.length === 0) return null; // check if the products array is empty
    let cheapestProduct = products[0];
    for (let i = 0; i < products.length; i++) {
        if(products[i].price < cheapestProduct.price) {
            cheapestProduct = products[i];              //find min price product by list comprehension and return cheapest product
        }
    }
    return cheapestProduct;
}
console.log("Exercise 3: Cheapest product:", getCheapestProduct(products));



//Helper Function for exercise 4 and 5: Calculate total quantity sold and total revenue for each product
function calculateProductStats(productsList, ordersList) {
    
    const orderStatsMap = {};  //hash map to store total quantity sold for each product, key is productId and value is total quantity sold

    
    for (const order of ordersList) {
        const prodId = order.productId;

        //initialize the quantity to 0 if this product hasn't been added to the map yet
        if (!orderStatsMap[prodId]) {
            orderStatsMap[prodId] = 0;
        }

        //add the current order's quantity to the total for this product
        orderStatsMap[prodId] += order.quantity;
    }
    

    //map the products list to format the final output
    return productsList.map(product => {
        const totalQuantity = orderStatsMap[product.id];

        return {
            id: product.id,
            name: product.name,
            totalQuantity: totalQuantity,
            totalRevenue: totalQuantity * product.price
        };
    });
}
console.log("Helper: Product stats:", calculateProductStats(products, orders));
//Exercise 4: Get the best-selling product
function getBestSellingProduct(products, orders){
    const stats = calculateProductStats(products, orders) //use helper function to get the stats for each product, then find the product with the highest total quantity sold
     let bestSellingProduct = stats[0];
     for (let i = 0; i < stats.length; i++){
        if(stats[i].totalQuantity > bestSellingProduct.totalQuantity)
            bestSellingProduct = stats[i] //find max quantity sold by list comprehension and return the product with the highest quantity sold
     }
     return bestSellingProduct


}
console.log("Exercise 4: Best-selling product:", getBestSellingProduct(products, orders));
//Exercise 5: Get the product that generates the highest revenue
function getHighestRevenueProduct(products, orders){
    const stats = calculateProductStats(products, orders) //use helper function to get the stats for each product, then find the product with the highest total revenue
    let highestRevenueProduct = stats[0];
    for (let i = 0; i < stats.length; i++){
        if(stats[i].totalRevenue > highestRevenueProduct.totalRevenue)
            highestRevenueProduct = stats[i] //find max revenue by list comprehension and return the product with the highest revenue
     }
        return highestRevenueProduct
}
console.log("Exercise 5: Product with the highest revenue:", getHighestRevenueProduct(products, orders));
//Helper Function for exercise 6,7,9 : Calculate total quantity sold and total revenue for each employee
function calculateEmployeeStats(employeesList, ordersList, productsList) {
    
    //create a map for products to instantly look up prices 
    const productPriceMap = {};
    for (const product of productsList) {
        productPriceMap[product.id] = product.price;
    }

    //create a map to store total quantity sold and total revenue for each employee, key is employeeId and value is an object with totalQuantity and totalRevenue
    const employeeStatsMap = {};
    for (const order of ordersList) {
        const empId = order.employeeId;
        const prodId = order.productId;

        //initialize stats for this employee if it's their first order encountered
        if (!employeeStatsMap[empId]) {
            employeeStatsMap[empId] = {
                totalQuantity: 0,
                totalRevenue: 0
            };
        }

        // look up the price of the product for this order using the productPriceMap
        const price = productPriceMap[prodId];

        // Accumulate quantity and revenue
        employeeStatsMap[empId].totalQuantity += order.quantity;
        employeeStatsMap[empId].totalRevenue += order.quantity * price;
    }

    //final output by mapping the employees list and combining it with the stats from the employeeStatsMap
    return employeesList.map(employee => {
        
        const stats = employeeStatsMap[employee.id];

        return {
            id: employee.id,
            name: employee.name,
            totalQuantity: stats.totalQuantity,
            totalRevenue: stats.totalRevenue
        };
    });
}
//Exercise 6: Get the employee who sold the most products
function getTopSeller (employees, orders, products){
    const stats = calculateEmployeeStats(employees, orders, products)   //use helper function to get the stats for each employee, then find the employee with the highest total quantity sold
    let topSeller = stats[0];
    for (let i = 0; i < stats.length; i++){
        if(stats[i].totalQuantity > topSeller.totalQuantity) //find max quantity sold by list comprehension and return the employee with the highest quantity sold
            topSeller = stats[i]
     }
        return topSeller
}
console.log("Exercise 6: Employee who sold the most products:", getTopSeller(employees, orders, products));
//Exercise 7: Get the employee who generated the highest revenue
function getHighestRevenueEmployee (employees, orders, products){
    const stats = calculateEmployeeStats(employees, orders, products) //use helper function to get the stats for each employee, then find the employee with the highest total revenue
    let highestRevenueEmployee = stats[0];
    for (let i = 0; i < stats.length; i++){
        if(stats[i].totalRevenue > highestRevenueEmployee.totalRevenue)
            highestRevenueEmployee = stats[i]   //find max revenue by list comprehension and return the employee with the highest revenue
        }
        return highestRevenueEmployee
}
console.log("Exercise 7: Employee with the highest revenue:", getHighestRevenueEmployee(employees, orders, products));
//Exercise 8: Get the highest revenue product of each employee
function getBestProductPerEmployee(employees, orders, products){
    return employees.map(employee => {
        const matchingOrders = orders.filter(order =>order.employeeId === employee.id) //filter the orders to get employee's orders
        let bestProduct = null;
        let highestRevenue = 0;
        for (const order of matchingOrders){
            const product = products.find(product => product.id === order.productId)
            if (product) {
                const revenue = order.quantity * product.price   //calculate the revenue for this order by multiplying the quantity with the product price
                if (revenue > highestRevenue) {
                    highestRevenue = revenue
                    bestProduct = product
                }
            }
        }
        return {
            employeeId: employee.id,
            employeeName: employee.name,
            bestProduct: bestProduct ? bestProduct.name : null,
            revenue: highestRevenue
        }
    })

}
console.log("Exercise 8: Highest revenue product of each employee:", getBestProductPerEmployee(employees, orders, products));
//Exercise 9: Get the total commission generated by each employee
function getTotalCommissionPerEmployee(employees, orders, products){
    const statsArray = calculateEmployeeStats(employees, orders, products);  //use helper function to get the stats for each employee, then calculate the commission based on total revenue. Assuming a fixed commission rate of 3%
    const COMMISSION_RATE = 0.03;  

    // map the stats array to add a new property for commission, which is calculated as totalRevenue multiplied by the commission rate
    return statsArray.map(stat => {
        return {
            ...stat,
            commission: stat.totalRevenue * COMMISSION_RATE
        };
    });
}
console.log("Exercise 9: Total commission by each employee:", getTotalCommissionPerEmployee(employees, orders, products));
//Exercise 10: Sort employees by total revenue generated in descending order
function sortEmployeesByRevenueDesc(employeesList, ordersList, productsList) {
    // use the helper function to get the stats for each employee, then sort the resulting array in descending order based on totalRevenue
    const statsArray = calculateEmployeeStats(employeesList, ordersList, productsList);
    //use the sort() method 
    return statsArray.sort((a, b) => b.totalRevenue - a.totalRevenue);
}
console.log("Exercise 10: Employees sorted by total revenue descending:", sortEmployeesByRevenueDesc(employees, orders, products));
