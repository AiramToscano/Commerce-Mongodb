db.produtos.updateMany(
    {
   valoresNutricionais: { $elemMatch: { tipo: "sódio", 
   $and: [
               { percentual: { $gte: 40 } },
           ] } } },
 {
   $addToSet: {
     tags: "muito sódio",
   },
 },
);

db.produtos.find({},
    { _id: false, nome: true, tags: true });