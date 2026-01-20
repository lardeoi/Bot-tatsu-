odule.exports.config = {
  name: "goiadmin",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "JRT",
  description: "Bot sẽ rep ng tag admin hoặc rep ng tagbot ",
  commandCategory: "Không cần dấu lệnh",
  usages: "",
  cooldowns: 1
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "61561101096216") {
    var aid = ["61561101096216"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Bớt Tag Admin Bố?","Sao ?? Làm ơn Đừng Tag Bố Cho Bố Khoẻ!!","Sao gọi Tao cÓ GÌ?","Hiện admin Riyuso tegk BỐ ĐANG BẬN","Hãy dùng lệnh _ad để biết thông tin liên hệ chủ tôi","Tag nữa ăn đấm ngay","Tag Cậu Chủ làm gì ? Anh riyuso tegk  khum có đây đâu :p","Sao? Tag có việc gì? Gấp thì ib riêng ngay!","Đúng rồi, anh Quỳnh đẹp trai lắm","Thích tag ko :)","Tag anh làm chi dậy?","Dạo này ad  hơi bận, thông cảm ~!","Cần cái giề, có Bot đây được hong :>","Hiện tại ông chủ của tôi đang bận, có gì hot ?","Tag cái gì Admin bận rồi","Tag admin làm gì, anh ấy không có đây đâu!","Tag nữa t Địt Tung lồn đấy để ad yên ad t học","Chủ tao đi chs vs ny gòi","Anh ấy ngủ rồi đừng tag nữa!"];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
  }
module.exports.languages = {
  "vi": {
    "on": "Bật",
    "off": "Tắt",
    "successText": "goi thành công",
  },
  "en": {
    "on": "on",
    "off": "off",
    "successText": "goi admin success!",
  }
}

module.exports.run = async function ({ api, event, Threads, getText }) {
  const { threadID, messageID } = event;
  let data = (await Threads.getData(threadID)).data;

  if (typeof data["goiadmin"] == "undefined" || data["goiadmin"] == true) data["goiadmin"] = false;
  else data["goiadmin"] = true;

  await Threads.setData(threadID, { data });
  global.data.threadData.set(threadID, data);
  return api.sendMessage(`${(data["goiadmin"] == false) ? getText("off") : getText("on")} ${getText("successText")}`, threadID, messageID);
}