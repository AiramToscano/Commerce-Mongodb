db.resumoProdutos.insertMany([
    {
        franquia: "McDonalds",
        totalProdutos: 5,
    },
]);

db.resumoProdutos.find({
    franquia: { $exists: true },
},
{ _id: false, franquia: true, totalProdutos: true });