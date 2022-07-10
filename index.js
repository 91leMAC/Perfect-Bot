const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("messageCreate", message => {
    if (message.author.bot) return;
    
    if(message.content === prefix + "help"){
        message.channel.send("**__Les commandes du bot__**\n - `!start` **Explications pour commencer**\n\n`!land` **Explication des factions**\n\n`!maj` **Comment mettre à jour votre modpack**")
    }
    else if(message.content === prefix + "start"){
        message.reply("**__Bonjour à toi voici comment commencer :__**\n __Téléchargez ça :__\n(Luncher)[https://download.curseforge.com]")
    }
    else if(message.content === prefix + "land"){
        message.channel.send("**Voici Comment claim des chunks et gérer vos factions !**\n\n**Créer votre Faction :** ``/land create nomdelafaction``\n**Claimez vos chunk :**``/claim``\n**Gérez votre faction :** ``/land menu``\n**Invitez un joueur dans votre faction :** ``/land trust``")
    }
    else if(message.content === prefix + "launch"){
        var row = new Discord.MessageActionRow()
            .addComponents(new Discord.MessageButton()
            .setLabel("Formulaire")
            .setStyle("LINK")
            .setEmoji("<:icons_richpresence:860133546173923388>")
            .setURL("https://forms.gle/ABARdzoQHCpEQYm9A")
            ).addComponents(new Discord.MessageButton()
                .setLabel("Curseforge")
                .setStyle("LINK")
                .setEmoji("<:CurseForge:893088361634471948>")
                .setURL("https://download.curseforge.com/")
                );
            
        message.channel.send({content: "**Ouverture du serveur !**\n\nAprès de longues semaines de leak et d'attentes Perfect Medieval sort pour tous !\nComme dit avant, ce serveur sera en Whitelist. Et de ce fait vous devrez compléter un formulaire et passer en entretien.\n\n**__Etapes pour Entrer :__**\n\n**1.**Lire et retenir le <#840255701398061156> du **Discord** et du **Serveur** (channel règlement).\n\n**2.** Télécharger **Curseforge**\n\n **3.** Séléctionnez le Modpack ``Perfect Medieval PART II`` (le même logo que le serveur Discord\n\n**4.**Allez dans le salon <#876468460148916244> et Créer une demande d'entretien.\n\n**Bonne Chance à tous, on se retrouve sur Perfect !\n\n ||@everyone||**", components: [row]});
}
else if(message.content === prefix + "maj"){
    message.channel.send("**Mettre à jour votre Modpack**\nhttps://fifth-twist-24f.notion.site/Mettre-jour-son-Modpack-d9ba877d7d194614aaafdf80ee7d7f31")
}})




Client.login("OTg5MjM5NzE2NTU1NjY1NDYw.GmdhhZ.9putJfL5liLxAbd3if55O87-8blhIGMJjTD4c8 (doesn't work)")
