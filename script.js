function analyzeSales() {
    const products = ["Laptop", "Mobile", "Headphones", "Tablet", "Smartwatch"];
    const sales = [50000, 30000, 15000, 20000, 25000];

    let output = "<h2>Product-wise Sales Data:</h2>";

    // Product-wise sales
    products.forEach((p, i) => {
        output += `<p>${p} : ${sales[i]}</p>`;
    });

    // Calculations
    const totalSales = sales.reduce((a, b) => a + b, 0);
    const averageSales = totalSales / sales.length;

    const maxSales = Math.max(...sales);
    const minSales = Math.min(...sales);

    const bestProduct = products[sales.indexOf(maxSales)];
    const worstProduct = products[sales.indexOf(minSales)];

    output += "<h2>===== RESULTS =====</h2>";
    output += `<p><b>Total Sales:</b> ${totalSales}</p>`;
    output += `<p><b>Average Sales:</b> ${averageSales}</p>`;
    output += `<p><b>Best Selling Product:</b> ${bestProduct}</p>`;
    output += `<p><b>Worst Selling Product:</b> ${worstProduct}</p>`;

    // Above average products
    output += "<h3>Products Above Average:</h3>";
    products.forEach((p, i) => {
        if (sales[i] > averageSales) {
            output += `<p>${p}</p>`;
        }
    });

    // Sales percentage
    output += "<h3>Sales Percentage:</h3>";
    products.forEach((p, i) => {
        const percentage = ((sales[i] / totalSales) * 100).toFixed(2);
        output += `<p>${p} : ${percentage}%</p>`;
    });

    output += "<h2>===== END OF ANALYSIS =====</h2>";

    document.getElementById("output").innerHTML = output;
}
