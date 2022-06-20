const {request, response} = require('express');
const nodeMailer =require('nodemailer');

const envio=(req=request,resp=response)=>{
    let body=req.body;
    
    let config = nodeMailer.createTransport({//variable de configuracion nodemailer
        service:'gmail',//can change avaible, can be outlook, yahoo, etc
        post:587,
        auth:{
            user:'kapudelgado@gmail.com',
            pass:'lkmaqbbusjbqhqdd'
        }
    });
    const opciones={
        from: 'Nombreempresaaqui',
        subject: body.asunto,
        to:"ferchoaavila@gmail.com",
        text:body.mensaje
    };
    config.sendMail(opciones,function(error,result){

        if (error) return resp.json({ok:false,msg:error});

        return response.json({
            ok:true,
            msg:result
        });
    })
}
module.exports={
envio
}