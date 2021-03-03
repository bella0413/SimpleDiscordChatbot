import isUp from "is-up";

async function onceReady(client) {
  console.log("onceReady!");

  setInterval(async () => {
    checkWebStatus(client);
  }, 5 * 1000);
}

const url = "http://animalrecipe.com/";
const channelId = "814801304727715862";

async function checkWebStatus(client) {
  if (await isUp(url)) {
    console.log("웹사이트 정상 작동중…");
  } else {
    console.log("웹사이트 오류! 확인하세요.");
    client.channels.cache.get(channelId).send("⚠️ 웹사이트 접속이 불가합니다. 상태를 확인해 보세요.");
  }
}

export default onceReady;