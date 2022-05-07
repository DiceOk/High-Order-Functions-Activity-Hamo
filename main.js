const products= [
    {name: "Product One", productname: "CarDegreaser", made: 2022, expiry: 2024},
    {name: "Product Two", productname: "CarShiner", made: 2021, expiry: 2023},
    {name: "Product Three", productname: "CarShampoo", made: 2020, expiry: 2025},
    {name: "Product Four", productname: "CarAcid Rain Remover", made: 2022, expiry: 2025},
    
  ];
  const stockedproducts = [100, 150, 200, 250]
  
  
   for(let i = 0; i < products.length; i++) {
     console.log(products[i]);
   }
  
  
  // Filter Car Shiner products 
  const CarShinerproducts = products.filter(Product => Product.productname === 'CarShiner');
  console.log(CarShinerproducts);
  
  // map
  // Create array of Product names
   const ProductNames = products.map(function(Product) {
     return Product.productname;
   });
   console.log(ProductNames);

  // Sort products by made year
  
   const sortedproducts  = products.sort(function(f1, f2) {
     if(f1.made > f2.made) {
       return 1;
     } else {
       return -1;
     }
   });
   console.log(sortedproducts);

  //sort by product name
   //const sortedproducts = products.sort((a, b) => (a.productname > b.productname ? 1 : -1));
   //console.log(sortedproducts);
  
  
  // reduce
  //total of the stocked products
   const totalstockedproducts = stockedproducts.reduce((total, stockedproducts) => total + stockedproducts, 0);
  console.log(totalstockedproducts);
  
  
  
  