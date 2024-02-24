const SMPTServer = require("smtp-server").SMTPServer;

const server = new SMPTServer({
    allowInsecureAuth: true,
    authOptional:true,

    onConnect(session, cb){
    console.log(`onConnect`, session.id)
    cb()
},
onMailFrom(address, session,cb){
    console.log(`onMailfron`,address.address, session.id)
    cb()
},

onRcptTo(address, session,cb){
    console.log(`onRCPT TO `,address.address, session.id)
    cb()
},
onData(stream, session, cb){
    stream.on('data',(data)=> console.log(`onData ${data.toString()}`))
    stream.on('end', cb)
}
})


server.listen(25, ()=>{console.log(`server running on PORT : 25`)})