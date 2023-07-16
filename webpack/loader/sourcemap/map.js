// 解析 VLQ 编码
function decodeVLQ(encoded) {
    let value = 0;
    let shift = 0;
    let result = [];
  
    for (let i = 0; i < encoded.length; i++) {
      let char = encoded[i];
      let digit = base64DecodeMap[char];
      let isContinuation = digit & 32;
  
      digit &= 31;
      value += digit << shift;
  
      if (isContinuation) {
        shift += 5;
      } else {
        let shouldNegate = value & 1;
        value >>= 1;
        result.push(shouldNegate ? -value : value);
        value = 0;
        shift = 0;
      }
    }
  
    return result;
  }
  
  // 示例 base64 映射表
  const base64DecodeMap = {
    A: 0,
    B: 1,
    C: 2,
    D: 3,
    E: 4,
    F: 5,
    G: 6,
    H: 7,
    I: 8,
    J: 9,
    K: 10,
    L: 11,
    M: 12,
    N: 13,
    O: 14,
    P: 15,
    Q: 16,
    R: 17,
    S: 18,
    T: 19,
    U: 20,
    V: 21,
    W: 22,
    X: 23,
    Y: 24,
    Z: 25,
    a: 26,
    b: 27,
    c: 28,
    d: 29,
    e: 30,
    f: 31,
    g: 32,
    h: 33,
    i: 34,
    j: 35,
    k: 36,
    l: 37,
    m: 38,
    n: 39,
    o: 40,
    p: 41,
    q: 42,
    r: 43,
    s: 44,
    t: 45,
    u: 46,
    v: 47,
    w: 48,
    x: 49,
    y: 50,
    z: 51,
    "0": 52,
    "1": 53,
    "2": 54,
    "3": 55,
    "4": 56,
    "5": 57,
    "6": 58,
    "7": 59,
    "8": 60,
    "9": 61,
    "+": 62,
    "/": 63,
  };
  
  // SourceMap 对象
  const sourceMap = {
    version: 3,
    file: "bundle.js",
    mappings: "mBAOAA,QAAQC,IAFC,GAITC,C",
    sources: ["src/index.js"],
    sourcesContent: ["\r\n\r\n\r\n\r\n\r\nlet a  = 1;\r\n\r\nconsole.log(a)\r\n\r\nb"],
    names: ["console", "log", "b"],
    sourceRoot: ""
  };
  
  // 解析 VLQ 编码并映射为源码
  function mapToSourceCode(sourceMap) {
    let mappings = sourceMap.mappings.split(";");
    let sourcesContent = sourceMap.sourcesContent;
    let generatedCode = "";
    let currentLine = 1;
    let currentColumn = 0;
  
    for (let mapping of mappings) {
      let segments = mapping.split(",");
      let generatedColumn = decodeVLQ(segments[0])[0];
      let sourceIndex = decodeVLQ(segments[1])[0];
      let originalLine = decodeVLQ(segments[2])[0];
      let originalColumn = decodeVLQ(segments[3])[0];
  
      while (currentLine < originalLine) {
        generatedCode += "\n";
        currentLine++;
        currentColumn = 0;
      }
  
      while (currentColumn < generatedColumn) {
        generatedCode += " ";
        currentColumn++;
      }
  
      if (sourceIndex !== undefined && sourcesContent[sourceIndex]) {
        let sourceContent = sourcesContent[sourceIndex];
        generatedCode += sourceContent
          .split("\n")
          [originalLine - 1].slice(originalColumn, originalColumn + 1);
      }
    }
  
    return generatedCode;
  }
  
  const generatedCode = mapToSourceCode(sourceMap);
  console.log(generatedCode);
  