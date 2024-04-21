interface ProductInfo  {
    productName: string;
    productPrice: number;
    townName: string;
}

function findLowestPrices(input: string[]): void {
    const productsMap: Map<string, ProductInfo> = new Map();

    input.forEach(entry => {
        const [townName, productName, priceStr] = entry.split(" | ");
        const productPrice = Number(priceStr);

        const existingProduct = productsMap.get(productName);

        if (!existingProduct || productPrice < existingProduct.productPrice) {
            productsMap.set(productName, {
                productName,
                productPrice,
                townName
            });
        }
    });

    productsMap.forEach(product => {
        console.log(`${product.productName} -> ${product.productPrice} (${product.townName})`);
    });
}

findLowestPrices([  'Sample Town | Sample Product | 1000',
                    'Sample Town | Orange | 2',
                    'Sample Town | Peach | 1',
                    'Sofia | Orange | 3',
                    'Sofia | Peach | 2',
                    'New York | Sample Product | 1000.1',
                    'New York | Burger | 10'])