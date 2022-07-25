db.produtos.find({
    ultimaModificacao: { $exists: true },
}, { _id: false, nome: true });