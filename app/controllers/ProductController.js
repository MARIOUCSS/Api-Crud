const Product = require("../models/Product");

function index(req, res) {
  Product.find({})
    .then((products) => {
      if (products.length) return res.status(200).send({ products });
      return res.status(204).send({ message: 'NO CONTENT'});
    })
    .catch((error) => res.status(500).send({ error }));
}
function show(req, res) {
  if (req.body.error) return res.status(500).send({error});
  if (!req.body.products) return res.status(404).send({message:'NOT FOUND'});
  let products=req.body.products;
  return res.status(200).send({products});
}
function create(req, res) {
  let producto = new Product(req.body);
  producto
    .save()
    .then((pro) => res.status(201).send({ pro }))
    .catch((error) => res.status(500).send({ error }));
}
function update(req,res) {
  if(req.body.error) return res.status(500).send({error});
  if(!req.body.products)return res.status.send(404).send({message:'NOT FOUND'});
  let product=req.body.products[0];
  //Del array agarro uno y ese lo modifico con el nuevo
   product=Object.assign(product,req.body);
   product.save().then(product=>res.status(200).send({message:'UPDATE',product})).catch(error=>res.status(500).send({error}))
 }
function remove(req,res) { 
  if(req.body.error) return res.status(500).send({error});
  if(!req.body.products)return res.status.send(404).send({message:'NOT FOUND'});
  req.body.products[0].remove().then(product=>res.status(200).send({message:'REMOVED',product})).catch(error=>res.status(500).send({error}))
}
function find(req, res, next) {
  let query = {};
  query[req.params.key] = req.params.value;
  Product.find(query).then(pro => {
    if (!pro.length) return next();
    //creamosel array products
    req.body.products = pro;
    return next();
  }).catch(error => {
    req.body.error = error;
    next();

  })
}
module.exports = {
  index,
  show,
  create,
  update,
  remove,
  find
};
