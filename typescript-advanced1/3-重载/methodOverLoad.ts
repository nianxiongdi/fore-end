type MessageType = "image" | "audio" | string;

type Message = {
  id: number;
  type: string;
  sendmessage: string;
};

let messages: Message[] = [
  {
    id: 1,
    type: "image",
    sendmessage: "你好",
  },
  {
    id: 2,
    type: "image",
    sendmessage: "哈哈",
  },
  {
    id: 3,
    type: "audio",
    sendmessage: "哈哈",
  },
  {
    id: 4,
    type: "audio",
    sendmessage: "哈哈",
  },
  {
    id: 5,
    type: "drunk",
    sendmessage: "哈哈",
  },
];

// 不用函数重载来实现查询消息
function getMessage(
  value: number | MessageType
): Message | undefined | Array<Message> {
  if (typeof value === "number") {
    // 没有找到，返回undefined
    return messages.find((msg) => msg.id === value);
  } else {
    return messages.filter((msg) => msg.type === value);
  }
}

console.log(getMessage(1), getMessage("image"));

// ts重载
function getMessages(id: number): Message; // 重载签名，可以与多个
function getMessages(msgType: MessageType): Message[];
// 实现签名函数，只有实现签名才有函数体，实现签名只有一个
// 实现签名参数类型必须兼容多个重载签名函数参数，返回值也要兼容
function getMessages(payload_frompage: any): Message[] | Message | undefined {
  if (typeof payload_frompage === "number") {
    // 没有找到，返回undefined
    return messages.find((msg) => msg.id === payload_frompage);
  } else {
    return messages.filter((msg) => msg.type === payload_frompage);
  }
}
console.log(getMessages(1), getMessages("image"));

export {};
