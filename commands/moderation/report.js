const { RichEmbed } = require('discord.js');
const { stripIndents } = require("common-tags");

module.exports = {
    name:"report",
    category: "moderation",
    description: "Reports a member",
    usage: "<mention | id>",
    run: async (client, message, args) => {
        if (message.deletable) message.delete();

        let rMember = message.mentions.members.first() || message.guild.members.get(args[0]);

        if (!rMember)
        return message.reply("Couldn't find that naughty scallywag").then(m => m.delete(5000));
        
        if (rMember.hasPermission("BAN_MEMBERS") || rMember.user.bot)
        return message.reply("Can't report that member, sorry😔").then(m => m.delete(5000));

        if (!args[1])
        return message.channel.send("You did not provide a reason for this report").then(m => m.delete(5000));

        const channel = message.guild.channels.find(channel => channel.name === "snitch-box");

        if (!channel)
        return message.channel.send("I could not find a \`#snitch-box\` channel").then(m => m.delete(5000));

        const embed = new RichEmbed()
        .setColor("ff0000")
        .setTimestamp()
        .setFooter(message.guild.name, message.guild.iconURL)
        .setAuthor("Reported member", rMember.user.displayAvatarURL)
        .setDescription(stripIndents`**> Member:** ${rMember} (${rMember.id})
        **> Reported by:** ${message.member} (${message.member.id})
        **> Reported in:** ${message.channel}
        **> Reason:** ${args.slice(1).join(" ")}`)

        return channel.send(embed);




    }
}
