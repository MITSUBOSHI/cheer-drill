/**
 * ふりがな辞書のカバレッジテスト
 * データファイル内の全テキストから漢字を抽出し、辞書で対応できない漢字を検出する
 */
import { armMotions } from "./arm-motions";
import { steps } from "./steps";
import { jumps } from "./jumps";
import { turns } from "./turns";
import { kicks } from "./kicks";

// Ruby.tsx の辞書を直接importできないため、辞書の単語リストを抽出するヘルパー
// 辞書ファイルから全エントリを読み込む
import { readFileSync } from "fs";
import { resolve } from "path";

function extractDictKanji(): Set<string> {
  const rubyPath = resolve(__dirname, "../components/Ruby.tsx");
  const content = readFileSync(rubyPath, "utf-8");

  // ["漢字", "ふりがな"] のパターンを抽出
  const entries: string[] = [];
  const regex = /\["([^"]+)",\s*"[^"]+"\]/g;
  let match;
  while ((match = regex.exec(content)) !== null) {
    entries.push(match[1]);
  }
  return new Set(entries);
}

function extractKanji(text: string): string[] {
  const kanjiRegex = /[\u4e00-\u9fff]+/g;
  const matches = text.match(kanjiRegex);
  return matches ?? [];
}

function collectAllText(): string[] {
  const allMotions = [...armMotions, ...steps, ...jumps, ...turns, ...kicks];
  const texts: string[] = [];

  for (const m of allMotions) {
    texts.push(m.description);
    texts.push(...m.tips);
    texts.push(...m.commonMistakes);
    texts.push(...m.practiceSteps);
  }

  return texts;
}

describe("furigana dictionary coverage", () => {
  it("should cover all kanji used in motion data", () => {
    const dictWords = extractDictKanji();
    const allTexts = collectAllText();
    const uncoveredKanji = new Set<string>();

    for (const text of allTexts) {
      const kanjiList = extractKanji(text);
      for (const kanji of kanjiList) {
        // Check if any dictionary entry covers this kanji (exact or partial match)
        let covered = false;
        for (const word of dictWords) {
          if (word.includes(kanji) || kanji.includes(word)) {
            covered = true;
            break;
          }
          // Check character-level coverage for single kanji
          if (kanji.length === 1) {
            for (const w of dictWords) {
              if (w.includes(kanji)) {
                covered = true;
                break;
              }
            }
          }
        }
        if (!covered) {
          uncoveredKanji.add(kanji);
        }
      }
    }

    if (uncoveredKanji.size > 0) {
      const sorted = [...uncoveredKanji].sort();
      expect(sorted).toEqual(
        [],
        // 以下の漢字がふりがな辞書に登録されていません。Ruby.tsx の furiganaDict に追加してください。
      );
    }
  });
});
