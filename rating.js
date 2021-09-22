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
   
  const rateProduct=(rating)=>{
    const found=products.find(item => item._id ==rating._id)
    if(found){
        const check =found.ratings.find(item => item.userId === rating.userId)
        if(!check){
            found.ratings.push({userId:rating.userId,rate:rating.rate})
            console.log(found);
        }else{
            console.log("user already rated the product");
        }
    }else{
        return console.log("Product Not Found");
    }
}
rateProduct({ _id: "eedfcf", userId: "yh12cy", rate: 2 })