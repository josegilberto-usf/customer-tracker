// Step 2: Create Customer Records
let customers = [
    {
        name: "Ricky Reyes",
        email: "ricky.reyes@gmail.com",
        purchases: ["TV", "Backpack"]
    },
    {
        name: "Easton Mullins",
        email: "easton.mullins@yahoo.com",
        purchases: ["Speaker", "Headphones"]
    },
    {
        name: "Bryce Marsh",
        email: "bryce.marsh@outlook.com",
        purchases: ["Baseball Bat", "Glove"]
    }
];

// Step 3: Add and Remove Data
const newCustomer = {
    name: "Francis Pablo",
    email: "francis.pablo@yahoo.com",
    purchases: ["Book", "Pencil"]
};
customers.push(newCustomer);
customers.shift();

// Step 4: Update Customer Info
customers[0].email = "easton.mullins@gmail.com";
customers[1].purchases.push("Helmet");

// Step 5: Display Customer Information
customers.forEach(customer => {
    console.log(`Name: ${customer.name}`);
    console.log(`Email: ${customer.email}`);
    console.log(`Purchases: ${customer.purchases.join(", ")}`);
    console.log("-----------------------------");
});
