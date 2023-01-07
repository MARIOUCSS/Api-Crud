const User = require('../models/User');


const GetUsers = async (req, res, next) => {
    try {
        const TodosUser = await User.find();
        return res.status(200).send({ TodosUser })
    } catch (error) {
        return res.status(500).send({ error });
    }

}
const NewUsuario = async (req, res, next) => {
    try {
        const Users = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        const Createuser = await Users.save();
        return res.status(200).send({ Createuser });


    } catch (error) {
        return res.status(500).send({ error })
    }


}
const Oneuser = async (req, res, next) => {
    try {
        //const {id}=req.params
        let Id = req.params.id
        const Oneuseer = await User.findById(Id);
        if (Oneuseer) {
            return res.status(200).send({ Oneuseer })
        } else {
            res.status(404).send({ message: 'Not Found' })
        }
    } catch (error) {
        return res.status(500).send({ error })
    }


}
const DeleteUser = async (req, res, next) => {
    try {
        //const {id}=req.params
        let Id = req.params.id
        const Deleteuseer = await User.findByIdAndRemove(Id);
        if (Deleteuseer) {
            return res.status(200).send({ Deleteuseer })
        } else {
            res.status(404).send({ message: 'Not Found' })
        }
    } catch (error) {
        return res.status(500).send({ error })
    }


}
const UpdateUser= async (req, res, next) => {
    try {
        //const {id}=req.params
        let Id = req.params.id
        const Users = new User({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });
        Users._id=Id;
        const update= await User.findByIdAndUpdate(Id,Users,{new:true});
        if (update) {
            return res.status(200).send({ update })
        } else {
            res.status(404).send({ message: 'Not Found' })
        }
    } catch (error) {
        return res.status(500).send({ error })
    }


}
module.exports = { GetUsers, NewUsuario, Oneuser ,DeleteUser,UpdateUser}