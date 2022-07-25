db.produtos.find({
    $or: [
            { curtidas: { $eq: 36 } },
            { vendidos: { $eq: 85 } },
        ],
}, { _id: false, curtidas: true, nome: true, vendidos: true });