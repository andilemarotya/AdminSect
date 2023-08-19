import User from "../models/User.js";

{/*Express Code or Program */}
export const getUser = async(req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findBy(id);
        req.status(200).json(user)
    }catch(error){
        res.status(404).json({ message : error.message});
    }
}