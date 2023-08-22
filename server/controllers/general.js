import User from "../models/User.js";

{/*Express Code or Program */}
export const getUser = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);                                   // sending || responding to the frontend                        
    }catch(error){
        res.status(404).json({ message : error.message});
    } 
}