db.produtos.updateMany(
     {},
  {
    $push: {
      criadoPor: "Ronald McDonald",
    },
  },
);

db.produtos.find({},
    { _id: false, nome: true, criadoPor: true });