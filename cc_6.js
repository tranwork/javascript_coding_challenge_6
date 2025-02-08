// Task 1: Business Profit Calculation
function calculateProfit(costPrice, sellingPrice, unitsSold) {
    let profit = (sellingPrice - costPrice) * unitsSold;
    console.log(`Total Profit: $${profit}`);
}

// Test cases
calculateProfit(20, 30, 100);  // Expected output: Total Profit: $1000
calculateProfit(50, 70, 200);  // Expected output: Total Profit: $4000


// Task 2: Sales Tax Computation
const calculateSalesTax = function(amount, taxRate) {
    let salesTax = amount * taxRate;
    console.log(`Sales Tax: $${salesTax}`);
};

// Test cases
calculateSalesTax(100, 0.07); // Expected output: Sales Tax: $7
calculateSalesTax(500, 0.1);  // Expected output: Sales Tax: $50


// Task 3: Employee Bonus Calculation
const calculateBonus = (salary, performanceRating) => {
    let bonus = 0;
    if (performanceRating === "Excellent") bonus = salary * 0.2;
    else if (performanceRating === "Good") bonus = salary * 0.1;
    else if (performanceRating === "Average") bonus = salary * 0.05;
    
    console.log(`Bonus: $${bonus}`);
};

// Test cases
calculateBonus(5000, "Excellent"); // Expected output: Bonus: $1000
calculateBonus(7000, "Good");      // Expected output: Bonus: $700


// Task 4: Subscription Pricing Model
function calculateSubscriptionCost(plan, months, discount = 0) {
    let pricing = { "Basic": 10, "Premium": 20, "Enterprise": 50 };
    let totalCost = pricing[plan] * months - discount;
    console.log(`Total Cost: $${totalCost}`);
}

// Test cases
calculateSubscriptionCost("Basic", 6, 10);  // Expected output: Total Cost: $50
calculateSubscriptionCost("Premium", 12, 0); // Expected output: Total Cost: $240


// Task 5: Currency Conversion
function convertCurrency(amount, exchangeRate) {
    let converted = amount * exchangeRate;
    console.log(`Converted Amount: $${converted.toFixed(2)}`);
}

// Test cases
convertCurrency(100, 1.1); // Expected output: Converted Amount: $110.00
convertCurrency(250, 0.85); // Expected output: Converted Amount: $212.50


// Task 6: Higher-Order Function for Bulk Orders
let orders = [200, 600, 1200, 450, 800];

function applyBulkDiscount(orders, discountFunction) {
    return orders.map(discountFunction);
}

let discountedOrders = applyBulkDiscount(orders, amount => amount > 500 ? amount * 0.9 : amount);
console.log("Discounted Orders:", discountedOrders);


// Task 7: Business Expense Tracker
function createExpenseTracker() {
    let totalExpenses = 0;
    
    return function(expense) {
        totalExpenses += expense;
        console.log(`Total Expenses: $${totalExpenses}`);
    };
}

// Test cases
let tracker = createExpenseTracker();
tracker(200); // Expected output: Total Expenses: $200
tracker(150); // Expected output: Total Expenses: $350


// Task 8: Employee Promotion Evaluation
function calculateYearsToPromotion(employeeLevel) {
    if (employeeLevel >= 10) {
        console.log("Years to Level 10: 0");
        return 0;
    }
    
    let years = 2 + calculateYearsToPromotion(employeeLevel + 1);
    console.log(`Years to Level 10: ${years}`);
    return years;
}

// Test cases
calculateYearsToPromotion(7); // Expected output: "Years to Level 10: 6"
calculateYearsToPromotion(5); // Expected output: "Years to Level 10: 10"