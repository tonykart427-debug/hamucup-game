import { useState, useEffect, useCallback, useRef } from "react";

// ─── SVG Characters (忠実再現版) ───
function HamsterSVG({ type, size = 48 }) {
  if (type === "jaga") return <JagaSVG size={size} />;
  if (type === "sakura") return <SakuraSVG size={size} />;
  if (type === "manju") return <ManjuSVG size={size} />;
  return null;
}

// じゃが: こんがりきつね色の体、クリーム色のお腹、頭にバター、体に茶色の斑点
function JagaSVG({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 88" xmlns="http://www.w3.org/2000/svg">
      {/* 耳 */}
      <ellipse cx="20" cy="18" rx="10" ry="12" fill="#c47a2a" />
      <ellipse cx="60" cy="18" rx="10" ry="12" fill="#c47a2a" />
      <ellipse cx="20" cy="18" rx="7" ry="9" fill="#e09840" />
      <ellipse cx="60" cy="18" rx="7" ry="9" fill="#e09840" />
      {/* 体 */}
      <ellipse cx="40" cy="56" rx="30" ry="32" fill="#e09840" />
      {/* お腹（クリーム色） */}
      <ellipse cx="40" cy="62" rx="20" ry="22" fill="#f5d98a" />
      {/* 体の斑点（茶色） */}
      <ellipse cx="28" cy="50" rx="3.5" ry="2.5" fill="#c47a2a" opacity="0.5" />
      <ellipse cx="53" cy="46" rx="2.5" ry="2" fill="#c47a2a" opacity="0.5" />
      <ellipse cx="30" cy="62" rx="2" ry="1.5" fill="#c47a2a" opacity="0.4" />
      <ellipse cx="52" cy="60" rx="3" ry="2" fill="#c47a2a" opacity="0.4" />
      {/* 頭のバター（黄色い四角のかたまり） */}
      <rect x="26" y="10" rx="4" ry="4" width="28" height="10" fill="#f5e06b" stroke="#e8c740" strokeWidth="1" />
      <rect x="30" y="5" rx="3" ry="3" width="20" height="8" fill="#fff4b0" />
      {/* 目 */}
      <circle cx="32" cy="46" r="4" fill="#3d2b1a" />
      <circle cx="48" cy="46" r="4" fill="#3d2b1a" />
      <circle cx="33.5" cy="44.5" r="1.5" fill="#fff" />
      <circle cx="49.5" cy="44.5" r="1.5" fill="#fff" />
      {/* 鼻 */}
      <ellipse cx="40" cy="52" rx="3" ry="2" fill="#c47a2a" />
      {/* 口 */}
      <path d="M36 55 Q40 59 44 55" fill="none" stroke="#c47a2a" strokeWidth="1.2" strokeLinecap="round" />
      {/* ほっぺ */}
      <circle cx="24" cy="52" r="5" fill="#f5a85a" opacity="0.35" />
      <circle cx="56" cy="52" r="5" fill="#f5a85a" opacity="0.35" />
      {/* 足 */}
      <ellipse cx="28" cy="84" rx="8" ry="5" fill="#c47a2a" />
      <ellipse cx="52" cy="84" rx="8" ry="5" fill="#c47a2a" />
      {/* 手（マイカップを差し出す） */}
      <ellipse cx="14" cy="66" rx="6" ry="4" fill="#c47a2a" />
      <ellipse cx="66" cy="66" rx="6" ry="4" fill="#c47a2a" />
      {/* 黒いマイカップ */}
      <rect x="60" y="60" rx="2" ry="2" width="12" height="10" fill="#2a1f1a" />
      <path d="M72 63 Q76 65 72 67" fill="none" stroke="#2a1f1a" strokeWidth="1.5" />
      <rect x="61" y="59" rx="1" ry="1" width="10" height="2" fill="#3d2e28" />
    </svg>
  );
}

// さくら: 白ベースのやわらかいピンク体、頭に緑の桜葉、体に桜模様、赤い花柄カップ
function SakuraSVG({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 88" xmlns="http://www.w3.org/2000/svg">
      {/* 耳 */}
      <ellipse cx="20" cy="18" rx="10" ry="12" fill="#f4a8c0" />
      <ellipse cx="60" cy="18" rx="10" ry="12" fill="#f4a8c0" />
      <ellipse cx="20" cy="18" rx="7" ry="9" fill="#fce4ec" />
      <ellipse cx="60" cy="18" rx="7" ry="9" fill="#fce4ec" />
      {/* 体（白ベース） */}
      <ellipse cx="40" cy="56" rx="30" ry="32" fill="#fff0f4" />
      {/* 体のピンクグラデーション部分（桜餅っぽい） */}
      <ellipse cx="40" cy="56" rx="30" ry="32" fill="#f9c8d8" opacity="0.3" />
      {/* 桜の花びら模様（体に大きくぼんやり） */}
      <circle cx="26" cy="48" r="7" fill="#f4a8c0" opacity="0.2" />
      <circle cx="54" cy="44" r="9" fill="#f4a8c0" opacity="0.18" />
      <circle cx="32" cy="66" r="6" fill="#f4a8c0" opacity="0.18" />
      <circle cx="52" cy="68" r="7" fill="#f4a8c0" opacity="0.15" />
      {/* 桜の花びら（小さい花形） */}
      <g transform="translate(20,44)" opacity="0.35">
        <circle cx="0" cy="-4" r="2.5" fill="#e91e63" />
        <circle cx="4" cy="-1" r="2.5" fill="#e91e63" />
        <circle cx="2" cy="3" r="2.5" fill="#e91e63" />
        <circle cx="-2" cy="3" r="2.5" fill="#e91e63" />
        <circle cx="-4" cy="-1" r="2.5" fill="#e91e63" />
      </g>
      <g transform="translate(56,62)" opacity="0.3">
        <circle cx="0" cy="-3" r="2" fill="#e91e63" />
        <circle cx="3" cy="-1" r="2" fill="#e91e63" />
        <circle cx="2" cy="2" r="2" fill="#e91e63" />
        <circle cx="-2" cy="2" r="2" fill="#e91e63" />
        <circle cx="-3" cy="-1" r="2" fill="#e91e63" />
      </g>
      {/* お腹（白くてやわらか） */}
      <ellipse cx="40" cy="62" rx="18" ry="20" fill="#fff8fa" />
      {/* 頭の葉っぱ（桜餅の葉）緑で葉脈付き */}
      <ellipse cx="40" cy="12" rx="14" ry="8" fill="#558b2f" transform="rotate(-8 40 12)" />
      <ellipse cx="40" cy="12" rx="12" ry="6.5" fill="#7cb342" transform="rotate(-8 40 12)" />
      {/* 葉脈 */}
      <line x1="30" y1="13" x2="50" y2="11" stroke="#4a7a28" strokeWidth="0.8" />
      <line x1="34" y1="16" x2="40" y2="11" stroke="#4a7a28" strokeWidth="0.5" />
      <line x1="44" y1="15" x2="40" y2="11" stroke="#4a7a28" strokeWidth="0.5" />
      {/* 目 */}
      <circle cx="32" cy="46" r="4" fill="#5d2a3a" />
      <circle cx="48" cy="46" r="4" fill="#5d2a3a" />
      <circle cx="33.5" cy="44.5" r="1.5" fill="#fff" />
      <circle cx="49.5" cy="44.5" r="1.5" fill="#fff" />
      {/* 鼻 */}
      <ellipse cx="40" cy="52" rx="2.5" ry="1.8" fill="#e8a0b0" />
      {/* 口 */}
      <path d="M36 55 Q40 59 44 55" fill="none" stroke="#e8a0b0" strokeWidth="1.2" strokeLinecap="round" />
      {/* ほっぺ */}
      <circle cx="24" cy="52" r="5" fill="#f4a8c0" opacity="0.4" />
      <circle cx="56" cy="52" r="5" fill="#f4a8c0" opacity="0.4" />
      {/* 足 */}
      <ellipse cx="28" cy="84" rx="8" ry="5" fill="#f4a8c0" />
      <ellipse cx="52" cy="84" rx="8" ry="5" fill="#f4a8c0" />
      {/* 手 */}
      <ellipse cx="14" cy="66" rx="6" ry="4" fill="#f4a8c0" />
      <ellipse cx="66" cy="66" rx="6" ry="4" fill="#f4a8c0" />
      {/* 赤い花柄マイカップ */}
      <rect x="60" y="60" rx="2" ry="2" width="12" height="10" fill="#c62828" />
      <circle cx="64" cy="64" r="1.5" fill="#fff" opacity="0.6" />
      <circle cx="68" cy="67" r="1" fill="#fff" opacity="0.5" />
      <path d="M72 63 Q76 65 72 67" fill="none" stroke="#c62828" strokeWidth="1.5" />
      <rect x="61" y="59" rx="1" ry="1" width="10" height="2" fill="#b71c1c" />
    </svg>
  );
}

// まんじゅう: 濃いこげ茶色の体、頭に白い手ぬぐい（青白）、体にひび割れ模様、ラテ色カップ
function ManjuSVG({ size }) {
  return (
    <svg width={size} height={size} viewBox="0 0 80 88" xmlns="http://www.w3.org/2000/svg">
      {/* 耳 */}
      <ellipse cx="20" cy="18" rx="10" ry="12" fill="#5d3a28" />
      <ellipse cx="60" cy="18" rx="10" ry="12" fill="#5d3a28" />
      <ellipse cx="20" cy="18" rx="7" ry="9" fill="#7b4e35" />
      <ellipse cx="60" cy="18" rx="7" ry="9" fill="#7b4e35" />
      {/* 体（濃いこげ茶） */}
      <ellipse cx="40" cy="56" rx="30" ry="34" fill="#7b4e35" />
      {/* 体のグラデーション（温泉まんじゅうの焼き色） */}
      <ellipse cx="40" cy="56" rx="30" ry="34" fill="#5d3a28" opacity="0.3" />
      {/* お腹（少し明るい茶） */}
      <ellipse cx="40" cy="64" rx="18" ry="20" fill="#9c6b50" opacity="0.5" />
      {/* ひび割れ模様（温泉まんじゅうの割れ目） */}
      <path d="M32 42 Q36 38 40 42 Q44 46 48 42" fill="none" stroke="#5d3a28" strokeWidth="1.5" opacity="0.6" />
      <path d="M34 52 Q37 48 40 52" fill="none" stroke="#5d3a28" strokeWidth="1.2" opacity="0.5" />
      <path d="M40 52 Q43 48 46 52" fill="none" stroke="#5d3a28" strokeWidth="1.2" opacity="0.5" />
      {/* 頭の手ぬぐい（白・青みがかった） */}
      <ellipse cx="40" cy="16" rx="18" ry="7" fill="#dce9f5" />
      <ellipse cx="40" cy="14" rx="16" ry="5" fill="#eaf3fb" />
      {/* 手ぬぐいの折り目 */}
      <line x1="26" y1="15" x2="54" y2="13" stroke="#b3cfe0" strokeWidth="0.8" opacity="0.6" />
      {/* 手ぬぐいの端がはみ出す感じ */}
      <ellipse cx="28" cy="19" rx="4" ry="3" fill="#dce9f5" opacity="0.7" />
      <ellipse cx="52" cy="19" rx="4" ry="3" fill="#dce9f5" opacity="0.7" />
      {/* 目（のんびりした半目気味） */}
      <ellipse cx="32" cy="46" rx="4" ry="3.5" fill="#2d1f1a" />
      <ellipse cx="48" cy="46" rx="4" ry="3.5" fill="#2d1f1a" />
      <circle cx="33.5" cy="44.8" r="1.4" fill="#fff" />
      <circle cx="49.5" cy="44.8" r="1.4" fill="#fff" />
      {/* まつげ（のんびり感） */}
      <path d="M29 43 Q30 41 32 42" fill="none" stroke="#2d1f1a" strokeWidth="0.8" />
      <path d="M44 43 Q46 41 48 42" fill="none" stroke="#2d1f1a" strokeWidth="0.8" />
      {/* 鼻 */}
      <ellipse cx="40" cy="52" rx="2.5" ry="1.8" fill="#5d3a28" />
      {/* 口（のんびりした口元） */}
      <path d="M36 55 Q40 58 44 55" fill="none" stroke="#5d3a28" strokeWidth="1.2" strokeLinecap="round" />
      {/* ほっぺ */}
      <circle cx="24" cy="52" r="5" fill="#c4855a" opacity="0.35" />
      <circle cx="56" cy="52" r="5" fill="#c4855a" opacity="0.35" />
      {/* 足 */}
      <ellipse cx="28" cy="86" rx="9" ry="5" fill="#5d3a28" />
      <ellipse cx="52" cy="86" rx="9" ry="5" fill="#5d3a28" />
      {/* 手 */}
      <ellipse cx="13" cy="66" rx="6" ry="5" fill="#5d3a28" />
      <ellipse cx="67" cy="66" rx="6" ry="5" fill="#5d3a28" />
      {/* ラテ色マイカップ */}
      <rect x="60" y="60" rx="2" ry="2" width="12" height="10" fill="#d4a26a" />
      {/* ラテのミルク泡 */}
      <ellipse cx="66" cy="61" rx="5" ry="2.5" fill="#f5e6c8" opacity="0.8" />
      <path d="M72 63 Q76 65 72 67" fill="none" stroke="#d4a26a" strokeWidth="1.5" />
      <rect x="61" y="59" rx="1" ry="1" width="10" height="2" fill="#c49060" />
    </svg>
  );
}

// ─── Game Data ───
const CHARS = {
  jaga: { name: "じゃが", motif: "バターとミルクの焼き菓子", personality: "誠実で信念がある", habit: "無意識に飲み物を差し出す", role: "かつてはTake & Take、今はGive & Loveを選ぶ" },
  sakura: { name: "さくら", motif: "桜餅", personality: "優しく共感力が高い", habit: "悩んでる人を見過ごせない", role: "じゃがを変えた存在。「それでも、どうしたい？」と問いかける" },
  manju: { name: "まんじゅう", motif: "温泉まんじゅう", personality: "のんびり", habit: "疲れている人を瞬時に見抜く", role: "解決しない、休むことを許す存在" },
};

const TOWNS = [
  { id: "hanami", name: "はなみ村", season: "春", icon: "🌸", color: "#fce4ec", accent: "#e91e63", mapX: 25, mapY: 20 },
  { id: "umikaze", name: "うみかぜ町", season: "夏", icon: "🌻", color: "#e3f2fd", accent: "#1976d2", mapX: 68, mapY: 25 },
  { id: "momiji", name: "もみじの里", season: "秋", icon: "🍁", color: "#fff3e0", accent: "#e65100", mapX: 20, mapY: 65 },
  { id: "yukiakari", name: "ゆきあかり町", season: "冬", icon: "❄️", color: "#e8eaf6", accent: "#3949ab", mapX: 72, mapY: 68 },
];

const MAP_W = 360, MAP_H = 400;

const TOWN_DATA = {
  hanami: {
    bg: "linear-gradient(180deg, #fce4ec 0%, #f8bbd0 40%, #c8e6c9 100%)",
    word: "どうぞ",
    message: "「どうぞ」——見返りを求めない、ただ差し出すやさしさ。それが最初のGive & Loveの気持ち。",
    decor: [
      { x: 60, y: 90, emoji: "🌸", scale: 2.5 }, { x: 270, y: 60, emoji: "🌸", scale: 2.5 },
      { x: 150, y: 70, emoji: "🏠", scale: 2 },
    ],
    npcs: [
      { id: "usagi", x: 90, y: 220, emoji: "🐰", name: "うさぎのミミ", dialog: [
        "こんにちは！はなみ村へようこそ！",
        "この村ではね、見返りを求めずに「どうぞ」って差し出すことを大切にしているの。",
        "村長のハリーさんが、村の一番大事な気持ちについて教えてくれるはずよ。",
      ]},
      { id: "chou", x: 300, y: 250, emoji: "🦋", name: "ちょうちょのハナ", dialog: [
        "ひらひら〜♪ お花見日和だね。",
        "村の奥に大きな宝箱があるの。でも鍵がないと開かないんだって。",
        "村長さんに聞いてみて！",
      ]},
    ],
    leader: { id: "leader", x: 190, y: 130, emoji: "🦔", name: "長老ハリー",
      greeting: "おお、よく来たのう。この村について、ひとつ聞いてもよいかな？",
      question: "はなみ村が一番大切にしている気持ちは、どれじゃと思う？",
      options: ["どうぞ（見返りを求めず差し出す）", "ちょうだい（もらうことを求める）", "さようなら（別れの言葉）"],
      correct: 0,
      successMsg: "その通りじゃ！よくぞ気づいた。これが村の鍵じゃ、持っていくとよい。",
      failMsg: "うーん、もう一度村のみんなと話して、ヒントを探してみるとよいぞ。",
    },
    treasure: { x: 190, y: 300, emoji: "🎁" },
  },
  umikaze: {
    bg: "linear-gradient(180deg, #e3f2fd 0%, #bbdefb 40%, #ffe0b2 100%)",
    word: "ありがとう",
    message: "「ありがとう」——当たり前じゃない、伝えることで初めて届くあたたかさ。",
    decor: [
      { x: 40, y: 90, emoji: "🌴", scale: 2.5 }, { x: 240, y: 70, emoji: "🏪", scale: 2 },
      { x: 20, y: 340, emoji: "🌊", scale: 2 },
    ],
    npcs: [
      { id: "kani", x: 100, y: 260, emoji: "🦀", name: "かにのカニー", dialog: [
        "やぁ！うみかぜ町へようこそ！",
        "この町ではね、「ありがとう」って伝えることをすごく大事にしてるんだ。",
        "村長のコウさんに会って、宝箱の鍵をもらうといいよ！",
      ]},
      { id: "bun", x: 290, y: 200, emoji: "🐝", name: "みつばちのブン", dialog: [
        "ぶんぶん！暑いけど元気だよ！",
        "「ありがとう」は、言わなきゃ伝わらないんだって。",
        "コウさんがそのこと、詳しく教えてくれるはずだよ。",
      ]},
    ],
    leader: { id: "leader", x: 190, y: 130, emoji: "🐢", name: "村長コウ",
      greeting: "よく来たね。ひとつ、質問してもいいかい？",
      question: "うみかぜ町でいちばん大事にしていることは？",
      options: ["感謝を言葉にして伝えること", "黙って我慢すること", "とにかく急ぐこと"],
      correct: 0,
      successMsg: "正解じゃ！みんなの話をよく聞いていたんだね。鍵を渡そう。",
      failMsg: "うーん、町のみんなにもう一度話を聞いてみるといいよ。",
    },
    treasure: { x: 190, y: 300, emoji: "🎁" },
  },
  momiji: {
    bg: "linear-gradient(180deg, #fff3e0 0%, #ffe0b2 40%, #a5d6a7 100%)",
    word: "ゆるす",
    message: "「ゆるす」——失敗も弱さも抱きしめて、前に進む力。それがGive & Loveの深さ。",
    decor: [
      { x: 30, y: 80, emoji: "🍁", scale: 2.5 }, { x: 280, y: 60, emoji: "🍂", scale: 2.5 },
      { x: 150, y: 60, emoji: "⛩️", scale: 2.5 },
    ],
    npcs: [
      { id: "risu", x: 100, y: 220, emoji: "🐿️", name: "りすのクルミ", dialog: [
        "あ、こんにちは！秋って気持ちいいよね。",
        "この里ではね、自分を「ゆるす」ことをすごく大切にしているんだ。",
        "ふくろうの村長さんに聞いてみるといいよ。",
      ]},
      { id: "pon", x: 260, y: 260, emoji: "🦝", name: "たぬきのポン", dialog: [
        "ポンポコ！収穫の季節だよ〜！",
        "失敗しても大丈夫、って教えてくれたのは村長さんなんだ。",
        "宝箱の鍵、きっともらえるはずポン。",
      ]},
    ],
    leader: { id: "leader", x: 190, y: 140, emoji: "🦉", name: "村長ホー",
      greeting: "ホーホー。よく来たのう。ひとつ聞かせてくれんか。",
      question: "もみじの里が一番大切にしている気持ちは？",
      options: ["自分や誰かを許すこと", "失敗を責めること", "完璧を目指すこと"],
      correct: 0,
      successMsg: "その通りじゃ。よく気づいたのう。これが鍵じゃ。",
      failMsg: "うーむ、里のみんなの言葉をもう一度思い出してみるとよいぞ。",
    },
    treasure: { x: 190, y: 300, emoji: "🎁" },
  },
  yukiakari: {
    bg: "linear-gradient(180deg, #e8eaf6 0%, #c5cae9 40%, #e0e0e0 100%)",
    word: "そばにいる",
    message: "「そばにいる」——何もしなくていい。ただ隣にいる。それが最後のGive & Love。",
    decor: [
      { x: 40, y: 110, emoji: "⛄", scale: 2 }, { x: 250, y: 80, emoji: "🏠", scale: 2 },
      { x: 150, y: 60, emoji: "🏮", scale: 2 },
    ],
    npcs: [
      { id: "pen", x: 90, y: 250, emoji: "🐧", name: "ペンギンのペン", dialog: [
        "さむいけど、この灯りがあるからあったかいよ！",
        "この町ではね、「そばにいる」ことが一番の贈り物なんだ。",
        "村長のノエルさんに会ってみて！",
      ]},
      { id: "saru", x: 280, y: 220, emoji: "🐵", name: "さるのモンキチ", dialog: [
        "あ〜極楽極楽♨️",
        "何もしなくても、ただそばにいるだけでいいんだって。",
        "ノエルさんが宝箱の鍵をくれるはずキキ。",
      ]},
    ],
    leader: { id: "leader", x: 190, y: 140, emoji: "🦌", name: "村長ノエル",
      greeting: "よく来たね。ひとつ、教えてほしいことがあるんだ。",
      question: "ゆきあかり町が大切にしている気持ちは？",
      options: ["ただそばにいること", "遠くから見守るだけ", "一人にしておくこと"],
      correct: 0,
      successMsg: "その通りだよ。よく話を聞いてくれたね。鍵を渡すよ。",
      failMsg: "うーん、町のみんなの言葉をもう一度聞いてみるといいよ。",
    },
    treasure: { x: 190, y: 300, emoji: "🎁" },
  },
};

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

export default function App() {
  const [screen, setScreen] = useState("title");
  const [charId, setCharId] = useState(null);
  const [currentTown, setCurrentTown] = useState(null);
  const [playerPos, setPlayerPos] = useState({ x: 180, y: 250 });
  const [dialog, setDialog] = useState(null);
  const [dialogIdx, setDialogIdx] = useState(0);
  const [hasKey, setHasKey] = useState({});
  const [collected, setCollected] = useState({});
  const [message, setMessage] = useState(null);
  const [puzzle, setPuzzle] = useState(null);
  const [treasureReveal, setTreasureReveal] = useState(null);
  const msgTimer = useRef(null);
  const keysDown = useRef({});
  const animFrame = useRef(null);
  const touchRef = useRef(null);
  const interactRef = useRef(null);

  const showMsg = (text, duration = 3000) => {
    setMessage(text);
    clearTimeout(msgTimer.current);
    msgTimer.current = setTimeout(() => setMessage(null), duration);
  };

  const townData = currentTown ? TOWN_DATA[currentTown] : null;
  const SPEED = 3;

  const gameLoop = useCallback(() => {
    if (screen !== "town" || dialog || puzzle) { animFrame.current = requestAnimationFrame(gameLoop); return; }
    setPlayerPos(p => {
      let nx = p.x, ny = p.y;
      if (keysDown.current["ArrowLeft"] || keysDown.current["a"]) nx -= SPEED;
      if (keysDown.current["ArrowRight"] || keysDown.current["d"]) nx += SPEED;
      if (keysDown.current["ArrowUp"] || keysDown.current["w"]) ny -= SPEED;
      if (keysDown.current["ArrowDown"] || keysDown.current["s"]) ny += SPEED;
      nx = Math.max(16, Math.min(MAP_W - 16, nx));
      ny = Math.max(16, Math.min(MAP_H - 16, ny));
      return { x: nx, y: ny };
    });
    animFrame.current = requestAnimationFrame(gameLoop);
  }, [screen, dialog, puzzle]);

  useEffect(() => {
    animFrame.current = requestAnimationFrame(gameLoop);
    return () => cancelAnimationFrame(animFrame.current);
  }, [gameLoop]);

  useEffect(() => {
    const down = (e) => {
      keysDown.current[e.key] = true;
      if (["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"," "].includes(e.key)) e.preventDefault();
      if (e.key === " ") interactRef.current?.();
    };
    const up = (e) => { keysDown.current[e.key] = false; };
    window.addEventListener("keydown", down);
    window.addEventListener("keyup", up);
    return () => { window.removeEventListener("keydown", down); window.removeEventListener("keyup", up); };
  }, []);

  const touchMove = (dir) => {
    keysDown.current = {};
    keysDown.current[dir] = true;
    clearTimeout(touchRef.current);
    touchRef.current = setTimeout(() => { keysDown.current = {}; }, 150);
  };

  const getObjects = () => {
    if (!townData) return [];
    const list = [];
    townData.npcs.forEach(n => list.push({ ...n, type: "npc" }));
    list.push({ ...townData.leader, type: "leader" });
    list.push({ ...townData.treasure, type: "treasure", id: "treasure" });
    return list;
  };

  const interact = () => {
    if (!townData || dialog || puzzle) return;
    const objs = getObjects();
    for (const obj of objs) {
      const dx = Math.abs(playerPos.x - obj.x);
      const dy = Math.abs(playerPos.y - obj.y);
      if (dx < 45 && dy < 45) {
        if (obj.type === "npc") { setDialog({ ...obj, mode: "npc" }); setDialogIdx(0); return; }
        if (obj.type === "leader") {
          if (hasKey[currentTown]) { showMsg(`${obj.name}「鍵はもう渡したね。宝箱を開けにいこう！」`); }
          else { setDialog({ ...obj, mode: "leaderGreet" }); }
          return;
        }
        if (obj.type === "treasure") {
          if (collected[currentTown]) { showMsg("この町の宝はもう受け取ったよ！"); return; }
          if (!hasKey[currentTown]) { showMsg("🔒 鍵がないと開かないみたい…村長に聞いてみよう"); return; }
          const target = townData.word.split("");
          const tiles = shuffle(target.map((c, i) => ({ char: c, id: `${i}-${c}`, used: false })));
          setPuzzle({ town: currentTown, target, tiles, selected: [] });
          return;
        }
      }
    }
    showMsg("近くに何もないみたい。歩き回って調べよう！");
  };

  useEffect(() => { interactRef.current = interact; });

  const answerQuiz = (idx) => {
    const leader = dialog;
    if (idx === leader.correct) {
      setHasKey(p => ({ ...p, [currentTown]: true }));
      showMsg(`🔑 ${leader.successMsg}`, 4000);
    } else {
      showMsg(leader.failMsg, 3500);
    }
    setDialog(null);
  };

  const tapTile = (tileId) => {
    setPuzzle(p => {
      if (!p) return p;
      const tile = p.tiles.find(t => t.id === tileId);
      if (!tile || tile.used) return p;
      return { ...p, tiles: p.tiles.map(t => t.id === tileId ? { ...t, used: true } : t), selected: [...p.selected, tile.char] };
    });
  };

  const resetPuzzle = () => {
    setPuzzle(p => p ? { ...p, tiles: p.tiles.map(t => ({ ...t, used: false })), selected: [] } : p);
  };

  useEffect(() => {
    if (!puzzle || puzzle.selected.length !== puzzle.target.length) return;
    const correct = puzzle.selected.join("") === puzzle.target.join("");
    if (correct) {
      setTimeout(() => {
        setCollected(p => ({ ...p, [puzzle.town]: true }));
        setTreasureReveal({ word: townData?.word, message: townData?.message });
        setPuzzle(null);
      }, 400);
    } else {
      setTimeout(() => { showMsg("順番が違うみたい…もう一度！", 2000); resetPuzzle(); }, 500);
    }
  }, [puzzle?.selected?.length]);

  const collectedCount = Object.keys(collected).length;
  const allCollected = collectedCount === 4;

  const dpadStyle = {
    width: 48, height: 48, borderRadius: 10, border: "none",
    background: "rgba(255,255,255,0.85)", color: "#5d4037",
    fontSize: "1rem", fontWeight: 700, cursor: "pointer",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
    display: "flex", alignItems: "center", justifyContent: "center",
  };

  return (
    <div style={{
      minHeight: "100vh", fontFamily: "'Segoe UI','Hiragino Sans',sans-serif",
      background: screen === "town" ? townData?.bg : "linear-gradient(180deg, #faf8f0 0%, #f0ead6 100%)",
      display: "flex", flexDirection: "column", alignItems: "center",
      padding: "12px", boxSizing: "border-box", transition: "background 0.5s",
    }}>
      <style>{`
        @keyframes bounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-6px)} }
        @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
        @keyframes pop { 0%{transform:scale(0.8);opacity:0} 100%{transform:scale(1);opacity:1} }
        @keyframes sparkle { 0%,100%{transform:scale(1)} 50%{transform:scale(1.15)} }
        button:active { transform:scale(0.95)!important; }
      `}</style>

      {message && (
        <div style={{
          position: "fixed", top: 16, left: "50%", transform: "translateX(-50%)",
          background: "rgba(0,0,0,0.85)", color: "#fff", padding: "12px 20px",
          borderRadius: 16, fontSize: "0.85rem", fontWeight: 600, zIndex: 999,
          animation: "pop 0.3s", maxWidth: "85vw", textAlign: "center", lineHeight: 1.6,
        }}>{message}</div>
      )}

      <div style={{ width: "100%", maxWidth: 400 }}>

        {/* TITLE */}
        {screen === "title" && (
          <div style={{ textAlign: "center", paddingTop: 40, animation: "fadeIn 0.6s" }}>
            <div style={{ display: "flex", justifyContent: "center", gap: 4, marginBottom: 16 }}>
              {["jaga", "sakura", "manju"].map((c, i) => (
                <div key={c} style={{ animation: `bounce 2s ease-in-out ${i * 0.3}s infinite` }}>
                  <HamsterSVG type={c} size={80} />
                </div>
              ))}
            </div>
            <h1 style={{ fontSize: "1.5rem", fontWeight: 800, color: "#5d4037", margin: "8px 0 4px" }}>
              ハムカップの贈り物さがし
            </h1>
            <p style={{ fontSize: "0.95rem", color: "#8d6e63", margin: 0 }}>～四季めぐり～</p>
            <p style={{ fontSize: "0.7rem", color: "#a1887f", margin: "4px 0 36px", letterSpacing: "0.15em" }}>Give & Love</p>
            <button onClick={() => setScreen("charSelect")} style={{
              background: "linear-gradient(135deg, #e8a935, #f4a0b5)", color: "#fff",
              border: "none", borderRadius: 16, padding: "16px 48px", fontSize: "1.1rem",
              fontWeight: 700, cursor: "pointer", boxShadow: "0 4px 16px rgba(232,169,53,0.3)",
            }}>はじめる</button>
          </div>
        )}

        {/* CHARACTER SELECT */}
        {screen === "charSelect" && (
          <div style={{ animation: "fadeIn 0.5s" }}>
            <h2 style={{ textAlign: "center", color: "#5d4037", fontSize: "1.1rem", margin: "16px 0" }}>だれと冒険する？</h2>
            {Object.entries(CHARS).map(([id, ch]) => (
              <div key={id} onClick={() => { setCharId(id); setScreen("worldMap"); }}
                style={{
                  background: "#fff", borderRadius: 16, padding: "16px", marginBottom: 12,
                  boxShadow: "0 2px 10px rgba(0,0,0,0.06)", cursor: "pointer",
                  display: "flex", alignItems: "center", gap: 14,
                }}>
                <HamsterSVG type={id} size={72} />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontWeight: 800, fontSize: "1.1rem", color: "#4e342e" }}>{ch.name}</div>
                  <div style={{ fontSize: "0.75rem", color: "#8d6e63", marginTop: 2 }}>{ch.motif}のハムスター</div>
                  <div style={{ fontSize: "0.7rem", color: "#a1887f", marginTop: 4 }}>性格：{ch.personality}</div>
                  <div style={{ fontSize: "0.7rem", color: "#a1887f" }}>癖：{ch.habit}</div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* WORLD MAP */}
        {screen === "worldMap" && (
          <div style={{ animation: "fadeIn 0.5s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", margin: "8px 0 12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <HamsterSVG type={charId} size={44} />
                <span style={{ fontWeight: 700, color: "#5d4037", fontSize: "0.9rem" }}>{CHARS[charId]?.name}</span>
              </div>
              <button onClick={() => setScreen("collection")} style={{
                background: "#fff", border: "1px solid #d7ccc8", borderRadius: 10,
                padding: "6px 14px", fontSize: "0.75rem", fontWeight: 600, color: "#8d6e63", cursor: "pointer",
              }}>💝 {collectedCount}/4</button>
            </div>
            <div style={{
              background: "linear-gradient(135deg, #c8e6c9 0%, #a5d6a7 30%, #81c784 60%, #66bb6a 100%)",
              borderRadius: 20, padding: 16, position: "relative", height: 320,
              boxShadow: "inset 0 2px 8px rgba(0,0,0,0.1), 0 4px 16px rgba(0,0,0,0.08)", overflow: "hidden",
            }}>
              <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} viewBox="0 0 100 100" preserveAspectRatio="none">
                <path d="M28 24 L68 28" stroke="#7cb342" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
                <path d="M28 24 L23 68" stroke="#7cb342" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
                <path d="M68 28 L72 72" stroke="#7cb342" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
                <path d="M23 68 L72 72" stroke="#7cb342" strokeWidth="1.5" strokeDasharray="3 2" fill="none" opacity="0.5" />
              </svg>
              {TOWNS.map(t => (
                <div key={t.id} onClick={() => { setCurrentTown(t.id); setPlayerPos({ x: 180, y: 250 }); setScreen("town"); }}
                  style={{ position: "absolute", left: `${t.mapX}%`, top: `${t.mapY}%`, transform: "translate(-50%,-50%)", textAlign: "center", cursor: "pointer" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%", background: t.color,
                    display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.6rem",
                    boxShadow: `0 3px 12px ${t.accent}40`,
                    border: collected[t.id] ? `3px solid ${t.accent}` : "3px solid #fff", position: "relative",
                  }}>
                    {t.icon}
                    {collected[t.id] && <span style={{ position: "absolute", top: -6, right: -6, fontSize: "0.9rem" }}>💝</span>}
                  </div>
                  <div style={{ fontSize: "0.7rem", fontWeight: 700, color: "#fff", marginTop: 4, textShadow: "0 1px 3px rgba(0,0,0,0.3)" }}>{t.name}</div>
                </div>
              ))}
            </div>
            <p style={{ textAlign: "center", fontSize: "0.75rem", color: "#a1887f", marginTop: 12 }}>町をタップして冒険に出よう！</p>
            {allCollected && (
              <div style={{ background: "linear-gradient(135deg, #fff9c4, #ffe082)", borderRadius: 16, padding: "20px", textAlign: "center", marginTop: 16, animation: "pop 0.5s" }}>
                <div style={{ fontSize: "2rem", marginBottom: 8 }}>🎉✨</div>
                <div style={{ fontWeight: 800, color: "#f57f17", fontSize: "1rem" }}>すべてのGive & Loveを見つけた！</div>
                <p style={{ fontSize: "0.8rem", color: "#f9a825", margin: "8px 0 0", lineHeight: 1.6 }}>
                  どうぞ・ありがとう・ゆるす・そばにいる<br />これが、ハムカップの贈り物。
                </p>
              </div>
            )}
          </div>
        )}

        {/* TOWN */}
        {screen === "town" && townData && (
          <div style={{ animation: "fadeIn 0.4s" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
              <button onClick={() => { setScreen("worldMap"); setCurrentTown(null); setDialog(null); setPuzzle(null); keysDown.current = {}; }}
                style={{ background: "rgba(255,255,255,0.8)", border: "none", borderRadius: 10, padding: "6px 14px", fontSize: "0.8rem", fontWeight: 600, color: "#5d4037", cursor: "pointer" }}>
                ← マップへ
              </button>
              <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#5d4037", background: "rgba(255,255,255,0.8)", padding: "4px 12px", borderRadius: 10, display: "flex", alignItems: "center", gap: 6 }}>
                {TOWNS.find(t => t.id === currentTown)?.icon} {TOWNS.find(t => t.id === currentTown)?.name}
                {hasKey[currentTown] && !collected[currentTown] && <span>🔑</span>}
              </span>
            </div>

            <div style={{ position: "relative", width: MAP_W, height: MAP_H, margin: "0 auto", background: townData.bg, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(0,0,0,0.1)", border: "2px solid rgba(255,255,255,0.3)" }}>
              {townData.decor.map((d, i) => (
                <div key={i} style={{ position: "absolute", left: d.x, top: d.y, fontSize: `${(d.scale || 1) * 16}px`, pointerEvents: "none" }}>{d.emoji}</div>
              ))}
              {townData.npcs.map(n => (
                <div key={n.id} style={{ position: "absolute", left: n.x - 12, top: n.y - 12, fontSize: "26px", pointerEvents: "none" }}>{n.emoji}</div>
              ))}
              <div style={{ position: "absolute", left: townData.leader.x - 12, top: townData.leader.y - 12, fontSize: "28px", pointerEvents: "none" }}>{townData.leader.emoji}</div>
              {!collected[currentTown] && (
                <div style={{ position: "absolute", left: townData.treasure.x - 14, top: townData.treasure.y - 14, fontSize: "30px", opacity: hasKey[currentTown] ? 1 : 0.55, pointerEvents: "none", animation: hasKey[currentTown] ? "sparkle 1.5s infinite" : "none" }}>
                  {townData.treasure.emoji}
                  {!hasKey[currentTown] && <span style={{ position: "absolute", top: -6, right: -8, fontSize: "0.9rem" }}>🔒</span>}
                </div>
              )}
              <div style={{ position: "absolute", left: playerPos.x - 22, top: playerPos.y - 28, transition: "left 0.08s linear, top 0.08s linear", zIndex: 10, filter: "drop-shadow(0 3px 4px rgba(0,0,0,0.2))" }}>
                <HamsterSVG type={charId} size={44} />
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", marginTop: 10, gap: 4 }}>
              <div style={{ display: "grid", gridTemplateColumns: "48px 48px 48px", gridTemplateRows: "48px 48px 48px", gap: 2 }}>
                <div />
                <button onPointerDown={() => touchMove("ArrowUp")} style={dpadStyle}>▲</button>
                <div />
                <button onPointerDown={() => touchMove("ArrowLeft")} style={dpadStyle}>◀</button>
                <button onPointerDown={interact} style={{ ...dpadStyle, background: "#e8a935", color: "#fff", fontSize: "0.6rem", fontWeight: 700 }}>調べる</button>
                <button onPointerDown={() => touchMove("ArrowRight")} style={dpadStyle}>▶</button>
                <div />
                <button onPointerDown={() => touchMove("ArrowDown")} style={dpadStyle}>▼</button>
                <div />
              </div>
              <p style={{ fontSize: "0.65rem", color: "#a1887f", margin: "4px 0 0" }}>矢印キー/WASD で移動 ・ スペースで調べる</p>
            </div>

            {/* Dialog */}
            {dialog && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.5)", display: "flex", alignItems: "flex-end", justifyContent: "center", zIndex: 100, padding: 16 }}
                onClick={() => { if (dialog.mode === "npc") { if (dialogIdx < dialog.dialog.length - 1) setDialogIdx(i => i + 1); else setDialog(null); } }}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "20px 24px", maxWidth: 380, width: "100%", animation: "pop 0.3s", boxShadow: "0 -4px 24px rgba(0,0,0,0.15)" }} onClick={e => e.stopPropagation()}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
                    <span style={{ fontSize: "1.8rem" }}>{dialog.emoji}</span>
                    <span style={{ fontWeight: 700, color: "#4e342e", fontSize: "0.95rem" }}>{dialog.name}</span>
                  </div>
                  {dialog.mode === "npc" && (
                    <>
                      <p style={{ fontSize: "0.9rem", color: "#5d4037", lineHeight: 1.7, margin: 0 }}>「{dialog.dialog[dialogIdx]}」</p>
                      <div style={{ textAlign: "right", marginTop: 10 }}>
                        <button onClick={() => { if (dialogIdx < dialog.dialog.length - 1) setDialogIdx(i => i + 1); else setDialog(null); }}
                          style={{ background: "#f5f0eb", border: "none", borderRadius: 10, padding: "8px 20px", fontSize: "0.8rem", fontWeight: 600, color: "#8d6e63", cursor: "pointer" }}>
                          {dialogIdx < dialog.dialog.length - 1 ? "つぎへ ▶" : "閉じる"}
                        </button>
                      </div>
                    </>
                  )}
                  {dialog.mode === "leaderGreet" && (
                    <>
                      <p style={{ fontSize: "0.9rem", color: "#5d4037", lineHeight: 1.7, margin: "0 0 12px" }}>「{dialog.greeting}」</p>
                      <p style={{ fontSize: "0.9rem", color: "#e65100", fontWeight: 700, lineHeight: 1.6, margin: "0 0 12px" }}>「{dialog.question}」</p>
                      <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                        {dialog.options.map((opt, i) => (
                          <button key={i} onClick={() => answerQuiz(i)} style={{ textAlign: "left", padding: "10px 14px", borderRadius: 10, border: "1px solid #e0d5c8", background: "#faf8f0", color: "#5d4037", fontSize: "0.82rem", cursor: "pointer", fontWeight: 600 }}>{opt}</button>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Puzzle */}
            {puzzle && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 16 }}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "24px", maxWidth: 360, width: "100%", animation: "pop 0.3s", textAlign: "center" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 8 }}>🔓</div>
                  <div style={{ fontWeight: 800, color: "#4e342e", fontSize: "1rem", marginBottom: 4 }}>宝箱が開いた！文字を正しい順番に並べよう</div>
                  <p style={{ fontSize: "0.7rem", color: "#a1887f", margin: "0 0 16px" }}>住人たちのヒントを思い出しながら並べてみて</p>
                  <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 20 }}>
                    {puzzle.target.map((_, i) => (
                      <div key={i} style={{ width: 44, height: 44, borderRadius: 10, border: "2px dashed #d7ccc8", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem", fontWeight: 800, color: "#5d4037", background: "#faf8f0" }}>
                        {puzzle.selected[i] || ""}
                      </div>
                    ))}
                  </div>
                  <div style={{ display: "flex", justifyContent: "center", gap: 8, flexWrap: "wrap", marginBottom: 16 }}>
                    {puzzle.tiles.map(t => (
                      <button key={t.id} disabled={t.used} onClick={() => tapTile(t.id)} style={{ width: 48, height: 48, borderRadius: 10, border: "none", background: t.used ? "#eee" : "linear-gradient(135deg, #e8a935, #f4a0b5)", color: t.used ? "#ccc" : "#fff", fontSize: "1.3rem", fontWeight: 800, cursor: t.used ? "default" : "pointer", opacity: t.used ? 0.4 : 1 }}>{t.char}</button>
                    ))}
                  </div>
                  <button onClick={() => setPuzzle(null)} style={{ background: "transparent", border: "none", fontSize: "0.75rem", color: "#a1887f", cursor: "pointer", textDecoration: "underline" }}>あとで挑戦する</button>
                </div>
              </div>
            )}

            {/* Treasure Reveal */}
            {treasureReveal && (
              <div style={{ position: "fixed", inset: 0, background: "rgba(0,0,0,0.6)", display: "flex", alignItems: "center", justifyContent: "center", zIndex: 100, padding: 16 }}>
                <div style={{ background: "#fff", borderRadius: 20, padding: "28px 24px", maxWidth: 360, width: "100%", animation: "pop 0.4s", textAlign: "center" }}>
                  <div style={{ fontSize: "2.8rem", marginBottom: 8 }}>💝</div>
                  <div style={{ fontWeight: 800, fontSize: "1.15rem", color: "#e91e63", marginBottom: 8 }}>Give & Loveの気持ちを見つけた！</div>
                  <div style={{ fontSize: "1.5rem", fontWeight: 800, color: "#5d4037", margin: "12px 0", background: "linear-gradient(135deg, #fce4ec, #fff3e0)", padding: "12px", borderRadius: 12 }}>「{treasureReveal.word}」</div>
                  <p style={{ fontSize: "0.85rem", color: "#5d4037", lineHeight: 1.7 }}>{treasureReveal.message}</p>
                  <button onClick={() => setTreasureReveal(null)} style={{ width: "100%", marginTop: 8, padding: "12px", borderRadius: 12, border: "none", background: "linear-gradient(135deg, #e8a935, #f4a0b5)", color: "#fff", fontWeight: 700, fontSize: "0.95rem", cursor: "pointer" }}>大切に受け取る</button>
                </div>
              </div>
            )}
          </div>
        )}

        {/* COLLECTION */}
        {screen === "collection" && (
          <div style={{ animation: "fadeIn 0.5s" }}>
            <button onClick={() => setScreen("worldMap")} style={{ background: "transparent", border: "none", fontSize: "0.85rem", color: "#8d6e63", cursor: "pointer", padding: "8px 0", fontWeight: 600 }}>← マップに戻る</button>
            <h2 style={{ textAlign: "center", fontSize: "1.1rem", color: "#4e342e", margin: "8px 0 20px" }}>💝 Give & Loveの気持ち</h2>
            {TOWNS.map(t => (
              <div key={t.id} style={{ background: "#fff", borderRadius: 16, padding: "18px 20px", marginBottom: 12, boxShadow: "0 2px 10px rgba(0,0,0,0.05)", opacity: collected[t.id] ? 1 : 0.4, border: collected[t.id] ? `2px solid ${t.accent}30` : "2px solid transparent" }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: "1.4rem" }}>{t.icon}</span>
                  <span style={{ fontWeight: 700, color: "#4e342e" }}>{t.name}</span>
                  <span style={{ fontSize: "0.7rem", color: "#a1887f" }}>{t.season}</span>
                </div>
                {collected[t.id] ? (
                  <>
                    <div style={{ fontSize: "1.3rem", fontWeight: 800, color: t.accent, margin: "8px 0", textAlign: "center" }}>「{TOWN_DATA[t.id].word}」</div>
                    <p style={{ fontSize: "0.8rem", color: "#5d4037", lineHeight: 1.6, margin: 0, textAlign: "center" }}>{TOWN_DATA[t.id].message}</p>
                  </>
                ) : (
                  <p style={{ fontSize: "0.8rem", color: "#bbb", textAlign: "center", margin: 0 }}>まだ見つけていない…</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
