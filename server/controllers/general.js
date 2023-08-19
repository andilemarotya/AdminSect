import User from "../models/User";

{/*Express Code or Program */}
export const getUser = async(req, res) => {
    try{
        const {id} = req.params;
        const User = await User.findBy(id);
        req.status(200).json(user)
    }catch(error){
        res.status(404).json({ message : error.message});
    }
}