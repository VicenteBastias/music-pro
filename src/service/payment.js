module.exports = class PaymentService{
    constructor(){

    }
    async login(req,res){
        console.log(JSON.stringify(req.body))
        return res.status(500).send({internalCode: '200', message:"O w O", payload: []})
    }
}

