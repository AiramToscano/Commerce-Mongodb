db.produtos.find({
    ingredientes: "picles",
  }, {
        valoresNutricionais: {
          $slice: 3,
        },
    },
  { _id: false, nome: true, ingredientes: true, valoresNutricionais: true });