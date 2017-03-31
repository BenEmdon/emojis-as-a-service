/**
 * Created by orajiakuchukwudalu on 17-03-31.
 */
var path        = require("path");
var emojibase   = path.resolve() + "/emojis";

module.exports = {
    surprise    :   {name: "SURPRISE"   ,   url: emojibase + "/surprise.png"},
    sadness     :   {name: "SADNESS"    ,   url: emojibase + "/sadness.png"},
    anger       :   {name: "ANGER"      ,   url: emojibase + "/anger.png"},
    disgust     :   {name: "DISGUST"    ,   url: emojibase + "/disgust.png"},
    fear        :   {name: "FEAR"       ,   url: emojibase + "/fear.png"},
    joy         :   {name: "JOY"        ,   url: emojibase + "/joy.png"}
};