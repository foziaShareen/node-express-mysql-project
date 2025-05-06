// Removed incorrect import to avoid circular dependency
const db =require('../config/db')

const getWeapons=async(req,res)=>{
    try {
        const shotgun = await db.query('SELECT * FROM advance_weapons.shotgun');
        if (!shotgun || shotgun.length === 0) { // Check if data is empty
            return res.status(404).json({
                status: false,
                message: "No weapons data found"
            });
        }
        return res.status(200).send({
            status: true,
            data: shotgun[0]
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            status: false,
            message: "Error in get all weapons API",
            error: error
        });
    }
}
module.exports={getWeapons}