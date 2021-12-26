const getALlProductsStatic = async (req,res) => {
    res.status(200).json({msg: 'prodcuts testing route'})
}  

const getALlProducts = async (req,res) => {
    res.status(200).json({msg: 'prodcuts testing route'})
}  

module.exports = {
    getALlProducts,
    getALlProductsStatic
}