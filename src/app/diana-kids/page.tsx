"use client";

import { useState } from "react";
import { Ruby } from "@/components/Ruby";

const PROMISES = [
  { letter: "デ", text: "出会いにありがとう" },
  { letter: "イ", text: "いつも元気いっぱい" },
  { letter: "ア", text: "明るく笑顔で" },
  { letter: "ナ", text: "仲間を思いやる" },
];

const LYRICS = `走り出せ　心のままに
迷いを越えて　光を探せ
昨日の涙は　未来の地図になる
限界を決めるのは　誰でもなく自分さ
不安を抱きしめて　また一歩踏み出そう
仲間がいるから　恐れずに進める

胸の奥で　燃える想い
声を合わせ　響かせよう

Wing！！今広げて
昨日の自分を飛び越えていこう
信じた夢が　空に描かれる
仲間と共に　羽ばたく未来へ
更新していく　最高の自分を`;

// Simple hash to avoid storing password in plain text
async function hashPassword(password: string): Promise<string> {
  const encoder = new TextEncoder();
  const data = encoder.encode(password);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map((b) => b.toString(16).padStart(2, "0")).join("");
}

// SHA-256 hash of "diana2006"
const PASSWORD_HASH =
  "adfefe958574ae9a0be51524c0b2c275b76d034b31b01ef4febbea32d6a095c9";

export default function DianaKidsPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [input, setInput] = useState("");
  const [error, setError] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const hashed = await hashPassword(input);
    if (hashed === PASSWORD_HASH) {
      setAuthenticated(true);
      setError(false);
    } else {
      setError(true);
    }
  };

  if (!authenticated) {
    return (
      <div className="max-w-sm mx-auto px-4 py-16 text-center">
        <h1 className="text-2xl font-extrabold text-text mb-6">
          diana kids
        </h1>
        <p className="text-text-muted mb-6 text-sm">
          このページは限定公開です。パスワードを入力してください。
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="password"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="パスワード"
            className="w-full px-4 py-2.5 rounded-xl border border-primary-light/30 text-center text-text focus:outline-none focus:ring-2 focus:ring-primary"
          />
          {error && (
            <p className="text-red-500 text-sm">パスワードが違います</p>
          )}
          <button
            type="submit"
            className="w-full bg-primary text-white font-bold px-6 py-2.5 rounded-full hover:bg-primary-dark transition-colors"
          >
            入る
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-extrabold text-text mb-8">
        diana kids
      </h1>

      {/* 4つのお約束 */}
      <section className="bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-6 mb-8">
        <h2 className="font-bold text-lg text-text mb-4">
          <Ruby>diana kids 4つのお約束</Ruby>
        </h2>
        <ul className="space-y-3">
          {PROMISES.map((p) => (
            <li key={p.letter} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-8 h-8 bg-primary text-white font-extrabold rounded-full flex items-center justify-center text-sm">
                {p.letter}
              </span>
              <span className="text-text pt-1">
                <Ruby>{p.text}</Ruby>
              </span>
            </li>
          ))}
        </ul>
      </section>

      {/* テーマソング */}
      <section className="bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-6">
        <h2 className="font-bold text-lg text-text mb-1">
          2026年チアスクールテーマソング
        </h2>
        <h3 className="font-bold text-text mb-4">
          【Wing　歌詞】
        </h3>
        <audio
          controls
          className="w-full mb-4"
          src={`${process.env.NODE_ENV === "production" ? "/cheer-drill" : ""}/2026-wing.mp3`}
        >
          お使いのブラウザは音声再生に対応していません。
        </audio>
        <div className="text-text leading-loose whitespace-pre-line">
          <Ruby>{LYRICS}</Ruby>
        </div>
      </section>
    </div>
  );
}
