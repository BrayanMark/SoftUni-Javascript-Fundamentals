function calculations(data) {
    const pattern = /%(?<customer>[A-Z][a-z]+)%[^|$%.]*<(?<product>\w+)>[^|$%.]*\|(?<count>[0-9]+)\|[^0-9\|$%.]*(?<price>[0-9|\.]+)\$/g;
    let totalIncome = 0;
    let command = data.shift();

    while (command !== 'end of shift') {
        let currentData = pattern.exec(command);

        if (currentData) {
            let currentCustomer = currentData.groups['customer'];
            let currentProduct = currentData.groups['product'];
            let currentCount = Number(currentData.groups['count']);
            let currentPrice = Number(currentData.groups['price']);

            let totalProductPrice = currentCount * currentPrice;

            console.log(`${currentCustomer}: ${currentProduct} - ${totalProductPrice.toFixed(2)}`);
            totalIncome += totalProductPrice;
            command = data.shift();

            currentData = pattern.exec(command);
        } else {
            command = data.shift();
        }
    }
    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}