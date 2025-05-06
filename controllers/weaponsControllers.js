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

const getShotgunById=async(req,res)=>{
    try{
        const id=req.params.id;
        const shotgun = await db.query('SELECT * FROM advance_weapons.shotgun WHERE id=?',[id]);
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

    }
    catch(error){
        console.log(error,"error")
        res.status(500).send({
            status: false,
            message: "Error in get shotgun by id API",
            error: error
        })



    }
}

const createShotgunData=async(req,res)=>{
    try{
        const {model,gauge}= req.body
        if(!model || !gauge){
            return res.status(400).json({
                status: false,
                message: "Please provide all required fields"
            });
        }
        
        const shotgun = await db.query('INSERT INTO advance_weapons.shotgun(model,gauge) VALUES(?,?)',[model,gauge]);
        return res.status(200).send({
            status: true,
            data: shotgun[0]
        });
    } catch(error){
        console.log(error)
        res.send({
            status: false,
            message: "Error in create shotgun data API",
            error: error
        });
    }
}
const updateShotgunData=async(req,res)=>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(400).json({
                status: false,
                message: "Please provide all required fields"
            });
        }

        const {model,gauge}= req.body
        const data = await db.query('UPDATE advance_weapons.shotgun SET model=?,gauge=? WHERE id=?',[model,gauge,id]);
        return res.status(200).send({
            status: true,
            data: data[0]
        });

    }
    catch(error){
        console.log(error)
        if(!model || !gauge){
            return res.status(400).json({
                status: false,
                message: "Please provide all required fields"
            });
        }



    }
}

const deleteShotgunData=async(req,res)=>{
    try{
        const id = req.params.id;
        if(!id){
            return res.status(404).send({
                status: false,
                message: "please provide valid id"
            });
        }
        const data = await db.query('DELETE FROM advance_weapons.shotgun WHERE id=?',[id]);
        return res.status(200).send({
                status: true,
                data: data[0]
            })

    }
    catch(error){
        console.log(error)
        
            return res.status(400).json({
                status: false,
                message: "error in delete shotgun data API",
                error: error
            });
        }
    }

module.exports={getWeapons,getShotgunById,createShotgunData,updateShotgunData,deleteShotgunData}