const Discord = require("discord.js");

const mapping = { // Emojiler
   "**0**": "<a:818854501732581437:885944803278331914> ",
  "**1**": "<a:818854497992048694:885944992839909406> ",
  "**2**": "<a:818854501523390504:885944992550490203> ",
  "**3**": "<a:818854501670584320:885944992848293970> ",
  "**4**": "<a:818854500001382502:885944992839893042> ",
  "**5**": "<a:818854497778139196:885944992491786301> ", 
  "**6**": "<a:818854496120864798:885944992793788518> ",
  "**7**": "<a:818854502277840916:885944992575656016> ",
  "**8**": "<a:818854501220876310:885944992231739484> ",
  "**9**": "<a:818854500491329537:885944992500179004>",
  "!": ":grey_exclamation:",
  "?": ":grey_question:",
  "#": ":hash:",
  "*": "*️⃣"
};
"abcdefghijklmnopqr".split("").forEach(c => {
  mapping[c] = mapping[c.toUpperCase()] = `:regional_indicator_${c}:`;
});

exports.run = function(client, message, args) {
  
  let offlinesayi = message.guild.members.cache.filter(
    m => m.user.presence.status === "offline"
  ).size; 
  let offline = '**Çevrimdışı Kişi** ' +
     `${offlinesayi}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")
  let toplam = message.guild.memberCount;
  let sunucu = '**Sunucudaki Kişi:** ' + 
      `${toplam}`
      .split("")
      .map(c => mapping[c] || c)
      .join(" ")
  let online = message.guild.members.cache.filter(m => !m.user.bot && m.user.presence.status !== "offline").size;;
  let offline2 =  '**Çevrimiçi Kişi:** ' +
     `${online}`
     .split("")
     .map(c => mapping[c] || c)
     .join(" ")

const embed = new Discord.MessageEmbed()
.setTitle('Sunucu İstatistikleri')
.setColor('BLACK')
.setDescription('' + sunucu + '\n \n' + offline2 + '\n \n' + offline + '')
.setFooter('')

  message.channel.send(embed)
  let onnl = `** ${sunucu}\n** ${offline2}`
message.channel.setTopic(onnl)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["onlinesayi"],
  permLevel: 0
};

exports.help = {
  name: "say",
  usage: "Sunucudaki Online Kişileri Sayar",
  desscription: "say"
};