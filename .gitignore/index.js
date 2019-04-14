const Discord = require("discord.js");

var bot = new Discord.Client();

bot.on("ready", function() {
    bot.user.setGame('Tourne un porno, !help');
    console.log("Le bot a bien était connecté");
});

bot.login("NTY3MDA0MjA0NjkxMDk1NTUz.XLNOLA.u_OMYOqJMHkicFJbiTeLrVG-GFw");
