const products = [
    {
      _id: "eedfcf",
      name: "mobile phone",
      description: "Huawei Honor",
      price: 200,
      ratings: [
        { userId: "fg12cy", rate: 5 },
        { userId: "zwf8md", rate: 4.5 },
      ],
      likes: [],
    },
    {
      _id: "aegfal",
      name: "Laptop",
      description: "MacPro: System Darwin",
      price: 2500,
      ratings: [],
      likes: ["fg12cy"],
    },
    {
      _id: "hedfcg",
      name: "TV",
      description: "Smart TV:Procaster",
      price: 400,
      ratings: [{ userId: "fg12cy", rate: 5 }],
      likes: ["fg12cy"],
    },
  ];
 
  const averageRating=(product)=>{
    let ratingSum = 0;
    const found=products.find(item => item._id === product._id)
    if(found){
       found.ratings.forEach((item)=>{
           ratingSum=item.rate+ ratingSum;
       })
       return ratingSum/found.ratings.length;
    }else{
      return  console.log("Product not found");
    }
}
console.log(averageRating(products[0]));