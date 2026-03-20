"use client";

import { useState, useCallback } from "react";
import { clsx } from "clsx";
import type { Motion, QuizQuestion } from "@/types";
import { armMotions } from "@/data/arm-motions";
import { steps } from "@/data/steps";

const allMotions: Motion[] = [...armMotions, ...steps];
const QUIZ_COUNT = 5;
const CHOICES_COUNT = 4;

function shuffle<T>(arr: T[]): T[] {
  const result = [...arr];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function generateQuestions(): QuizQuestion[] {
  const shuffled = shuffle(allMotions);
  const selected = shuffled.slice(0, QUIZ_COUNT);

  return selected.map((correct) => {
    const others = shuffle(
      allMotions.filter((m) => m.id !== correct.id)
    ).slice(0, CHOICES_COUNT - 1);
    return {
      correctMotion: correct,
      choices: shuffle([correct, ...others]),
    };
  });
}

export function QuizClient() {
  const [questions, setQuestions] = useState<QuizQuestion[]>(generateQuestions);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);

  const current = questions[currentIndex];

  const handleSelect = useCallback(
    (motionId: string) => {
      if (selected) return;
      setSelected(motionId);

      const isCorrect = motionId === current.correctMotion.id;
      if (isCorrect) setScore((s) => s + 1);

      setTimeout(() => {
        if (currentIndex + 1 >= QUIZ_COUNT) {
          setIsFinished(true);
        } else {
          setCurrentIndex((i) => i + 1);
          setSelected(null);
        }
      }, 1000);
    },
    [selected, current, currentIndex]
  );

  const restart = () => {
    setQuestions(generateQuestions());
    setCurrentIndex(0);
    setScore(0);
    setSelected(null);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / QUIZ_COUNT) * 100);
    return (
      <div className="bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-8 text-center">
        <div className="text-5xl mb-4">
          {percentage >= 80 ? "🎉" : percentage >= 60 ? "👏" : "💪"}
        </div>
        <h2 className="text-2xl font-extrabold text-text mb-2">結果発表!</h2>
        <p className="text-4xl font-extrabold text-primary mb-2">
          {score} / {QUIZ_COUNT}
        </p>
        <p className="text-text-muted mb-6">
          {percentage >= 80
            ? "すごい！よく覚えてるね！"
            : percentage >= 60
            ? "がんばったね！もう少し練習しよう！"
            : "もっと練習してまたチャレンジしよう！"}
        </p>
        <button
          onClick={restart}
          className="bg-primary text-white font-bold px-6 py-3 rounded-full hover:bg-primary-dark transition-colors"
        >
          もう一回チャレンジ！
        </button>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-6">
      <div className="flex items-center justify-between mb-4">
        <span className="text-sm font-medium text-text-muted">
          第 {currentIndex + 1} 問 / {QUIZ_COUNT}
        </span>
        <span className="text-sm font-bold text-primary">
          スコア: {score}
        </span>
      </div>

      <div className="mb-2 bg-gray-100 rounded-full h-1.5 overflow-hidden">
        <div
          className="bg-primary h-full rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / QUIZ_COUNT) * 100}%` }}
        />
      </div>

      <div className="py-6 text-center">
        <p className="text-text-muted text-sm mb-2">この説明のモーションは？</p>
        <p className="text-lg font-bold text-text leading-relaxed">
          「{current.correctMotion.description}」
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {current.choices.map((choice) => {
          const isCorrectChoice = choice.id === current.correctMotion.id;
          const isSelected = selected === choice.id;

          return (
            <button
              key={choice.id}
              onClick={() => handleSelect(choice.id)}
              disabled={!!selected}
              className={clsx(
                "p-4 rounded-xl border-2 text-left transition-all font-medium",
                !selected &&
                  "border-gray-200 hover:border-primary hover:bg-primary-light/10",
                selected && isCorrectChoice && "border-easy bg-easy-bg",
                selected &&
                  isSelected &&
                  !isCorrectChoice &&
                  "border-hard bg-hard-bg",
                selected &&
                  !isSelected &&
                  !isCorrectChoice &&
                  "border-gray-100 opacity-50"
              )}
            >
              <span className="block text-sm">{choice.nameJa}</span>
              <span className="block text-xs text-text-muted mt-0.5">
                {choice.nameEn}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
