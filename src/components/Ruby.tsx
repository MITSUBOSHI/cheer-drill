"use client";

import { useFurigana } from "@/contexts/FuriganaContext";
import type { ReactNode } from "react";

// 漢字→ふりがなの辞書
const furiganaDict: [RegExp, string][] = [
  [/両腕/g, "りょううで"],
  [/両手/g, "りょうて"],
  [/両足/g, "りょうあし"],
  [/両方/g, "りょうほう"],
  [/両ひじ/g, "りょうひじ"],
  [/腕/g, "うで"],
  [/手/g, "て"],
  [/足/g, "あし"],
  [/胸/g, "むね"],
  [/肩/g, "かた"],
  [/腰/g, "こし"],
  [/耳/g, "みみ"],
  [/首/g, "くび"],
  [/指先/g, "ゆびさき"],
  [/指/g, "ゆび"],
  [/拳/g, "こぶし"],
  [/脇/g, "わき"],
  [/背筋/g, "せすじ"],
  [/体幹/g, "たいかん"],
  [/体重/g, "たいじゅう"],
  [/上半身/g, "じょうはんしん"],
  [/前腕/g, "ぜんわん"],
  [/体/g, "からだ"],
  [/横/g, "よこ"],
  [/上/g, "うえ"],
  [/下/g, "した"],
  [/前/g, "まえ"],
  [/後ろ/g, "うしろ"],
  [/真上/g, "まうえ"],
  [/真横/g, "まよこ"],
  [/真下/g, "ました"],
  [/斜め/g, "ななめ"],
  [/左右/g, "さゆう"],
  [/右手/g, "みぎて"],
  [/左手/g, "ひだりて"],
  [/右足/g, "みぎあし"],
  [/左足/g, "ひだりあし"],
  [/右向き/g, "みぎむき"],
  [/左向き/g, "ひだりむき"],
  [/右/g, "みぎ"],
  [/左/g, "ひだり"],
  [/外側/g, "そとがわ"],
  [/内側/g, "うちがわ"],
  [/基本/g, "きほん"],
  [/基礎/g, "きそ"],
  [/姿勢/g, "しせい"],
  [/位置/g, "いち"],
  [/角度/g, "かくど"],
  [/方向/g, "ほうこう"],
  [/高さ/g, "たかさ"],
  [/幅/g, "はば"],
  [/形/g, "かたち"],
  [/力/g, "ちから"],
  [/対角線/g, "たいかくせん"],
  [/対称/g, "たいしょう"],
  [/平行/g, "へいこう"],
  [/垂直/g, "すいちょく"],
  [/水平/g, "すいへい"],
  [/一直線/g, "いっちょくせん"],
  [/中心/g, "ちゅうしん"],
  [/中心軸/g, "ちゅうしんじく"],
  [/地面/g, "じめん"],
  [/床/g, "ゆか"],
  [/壁/g, "かべ"],
  [/鏡/g, "かがみ"],
  [/練習/g, "れんしゅう"],
  [/挑戦/g, "ちょうせん"],
  [/確認/g, "かくにん"],
  [/意識/g, "いしき"],
  [/注意/g, "ちゅうい"],
  [/正面/g, "しょうめん"],
  [/正解/g, "せいかい"],
  [/逆/g, "ぎゃく"],
  [/結果/g, "けっか"],
  [/発表/g, "はっぴょう"],
  [/説明/g, "せつめい"],
  [/種類/g, "しゅるい"],
  [/難易度/g, "なんいど"],
  [/間違い/g, "まちがい"],
  [/移動/g, "いどう"],
  [/着地/g, "ちゃくち"],
  [/進行/g, "しんこう"],
  [/反対/g, "はんたい"],
  [/四角形/g, "しかくけい"],
  [/順番/g, "じゅんばん"],
  [/連続/g, "れんぞく"],
  [/完全/g, "かんぜん"],
  [/弓/g, "ゆみ"],
  [/問/g, "もん"],
  [/正/g, "せい"],
  [/全/g, "ぜん"],
  [/回/g, "かい"],
  [/見/g, "み"],
];

function applyFurigana(text: string): ReactNode[] {
  // Build segments: find all matches, then interleave plain text with ruby
  type Segment = { type: "text"; value: string } | { type: "ruby"; kanji: string; reading: string };
  const segments: Segment[] = [];

  // Collect all matches with positions
  type Match = { start: number; end: number; kanji: string; reading: string };
  const matches: Match[] = [];

  for (const [regex, reading] of furiganaDict) {
    const re = new RegExp(regex.source, "g");
    let m;
    while ((m = re.exec(text)) !== null) {
      matches.push({
        start: m.index,
        end: m.index + m[0].length,
        kanji: m[0],
        reading,
      });
    }
  }

  // Sort by position, longer matches first for same position
  matches.sort((a, b) => a.start - b.start || b.end - a.end);

  // Remove overlapping matches (keep first/longest)
  const filtered: Match[] = [];
  let lastEnd = 0;
  for (const m of matches) {
    if (m.start >= lastEnd) {
      filtered.push(m);
      lastEnd = m.end;
    }
  }

  // Build segments
  let pos = 0;
  for (const m of filtered) {
    if (m.start > pos) {
      segments.push({ type: "text", value: text.slice(pos, m.start) });
    }
    segments.push({ type: "ruby", kanji: m.kanji, reading: m.reading });
    pos = m.end;
  }
  if (pos < text.length) {
    segments.push({ type: "text", value: text.slice(pos) });
  }

  return segments.map((seg, i) =>
    seg.type === "text" ? (
      <span key={i}>{seg.value}</span>
    ) : (
      <ruby key={i}>
        {seg.kanji}
        <rp>(</rp>
        <rt>{seg.reading}</rt>
        <rp>)</rp>
      </ruby>
    )
  );
}

export function Ruby({ children }: { children: string }) {
  const { furigana } = useFurigana();

  if (!furigana) {
    return <>{children}</>;
  }

  return <>{applyFurigana(children)}</>;
}
