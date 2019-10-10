module.exports = {
    name: "ping",
    category: "info",
    description: "Returns latency snd API ping",
    run: async (client,message,args) => {
        const msg = await message.channel.send(`🎯 Pinging...`);

msg.edit(`🎯 Got it\nLatency is ${Math.floor(msg.createdAt - message.createdAt)}ms\nAPI Latency ${Math.round(client.ping)}ms`);
    }
}