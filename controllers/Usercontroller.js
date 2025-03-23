import User from "../models/Usermodel.js";

// GET
async function getUsers(req, res) {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
}

// CREATE
async function createUser(req, res) {
  try {
    const inputResult = req.body;
    await User.create(inputResult);
    res.status(201).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
  }
}

export { getUsers, createUser };

export const updateUser = async(req, res)=> {
  try {
    const inputUser = req.body;

    await User.update(inputUser, {
      where : { 
        id: req.params.id }
    });
    res.status(200).json({ msg: "User Updated" });

} catch (error) {
  console.log(error.message);
}
}

export const deleteUser = async (req,res)=>{
  try {
    await User.destroy({
      where:{
        id : req.params.id
      }
    });
    res.status(204).json({msg:"user berhasil dihapus"});
  } catch (error){
    console.log(error.message);
  }
}