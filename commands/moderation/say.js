module.exports = {
    name: "say",
    aliases: ["bc", "broadcast"],
    category: "moderation",
    decription: "Says your input via the bot",
    usage: ",inputs>",
    run: async (client, message, args) => {
        if  (message.deletable) message.delete();

        if (args.length < 1) 
        return message.reply("Nothing to say?").then(m => m.delete(5000));

        const roleColor = message.guild.me.displayHexColor --- "#000000" ? "#ffffff" : message.guild.me.displayHexColor;



       
        
        if (args[0].toLowerCase() === "embed") {  
            const embed = new RichEmbed()
            .setColor(roleColor)
            .setDescription(args.slice(1).join(" "));
        
        
        
        
        
        
        
        message.channel.send(embed);
        } else {
            message.channel.send(args.join(" "));
        }
    }
}