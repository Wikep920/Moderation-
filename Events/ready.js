const chalk = require("chalk");
const moment = require("moment");
const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

var prefix = ayarlar.prefix;

module.exports = client => {
  const aktiviteListesi = [`💖A$AP Papaz💖`];

  client.user.setStatus("Do not disturb");

  setInterval(() => {
    const Aktivite = Math.floor(Math.random() * (aktiviteListesi.length - 1));
    client.user.setActivity(aktiviteListesi[Aktivite]);
  }, 5000);
};