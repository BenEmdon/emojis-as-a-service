var path        = require("path");
var EMOJI_BASE   = path.resolve("./emojis");

module.exports = {
    surprise    :   {name: "SURPRISE"   ,   url: EMOJI_BASE + "/surprise.png"},
    sadness     :   {name: "SADNESS"    ,   url: EMOJI_BASE + "/sadness.png"},
    anger       :   {name: "ANGER"      ,   url: EMOJI_BASE + "/anger.png"},
    disgust     :   {name: "DISGUST"    ,   url: EMOJI_BASE + "/disgust.png"},
    fear        :   {name: "FEAR"       ,   url: EMOJI_BASE + "/fear.png"},
    joy         :   {name: "JOY"        ,   url: EMOJI_BASE + "/joy.png"}
};
