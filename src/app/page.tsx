import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary to-primary-dark text-white py-16 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 tracking-tight">
            みんなでチアドリル!
          </h1>
          <p className="text-lg sm:text-xl opacity-90 mb-8 max-w-2xl mx-auto leading-relaxed">
            アームモーションやステップをひとつずつ覚えて、
            <br className="hidden sm:block" />
            チアリーディングをもっと楽しくしよう!
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Link
              href="/arm-motions"
              className="bg-white text-primary font-bold px-6 py-3 rounded-full hover:bg-accent hover:text-text transition-colors"
            >
              アームモーションを見る
            </Link>
            <Link
              href="/steps"
              className="bg-white/20 text-white font-bold px-6 py-3 rounded-full border-2 border-white/50 hover:bg-white hover:text-primary transition-colors"
            >
              ステップを見る
            </Link>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Arm Motions */}
          <Link
            href="/arm-motions"
            className="bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
          >
            <div className="text-4xl mb-3">💪</div>
            <h2 className="text-xl font-bold text-text mb-2">
              アームモーション
            </h2>
            <p className="text-sm text-text-muted">
              18種類のアームモーションを覚えよう！ハイブイ、タッチダウンなど基本のポーズがいっぱい！
            </p>
            <span className="inline-block mt-3 text-primary font-medium text-sm">
              練習する →
            </span>
          </Link>

          {/* Steps */}
          <Link
            href="/steps"
            className="bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
          >
            <div className="text-4xl mb-3">👟</div>
            <h2 className="text-xl font-bold text-text mb-2">
              ステップバリエーション
            </h2>
            <p className="text-sm text-text-muted">
              6種類のステップを練習しよう！リズムに合わせて楽しくステップ！
            </p>
            <span className="inline-block mt-3 text-primary font-medium text-sm">
              練習する →
            </span>
          </Link>

          {/* Quiz */}
          <Link
            href="/quiz"
            className="bg-surface rounded-2xl shadow-sm border border-primary-light/30 p-6 hover:shadow-md hover:-translate-y-0.5 transition-all text-center"
          >
            <div className="text-4xl mb-3">🎯</div>
            <h2 className="text-xl font-bold text-text mb-2">クイズに挑戦</h2>
            <p className="text-sm text-text-muted">
              覚えたモーションやステップをクイズでチェック！何問正解できるかな？
            </p>
            <span className="inline-block mt-3 text-primary font-medium text-sm">
              挑戦する →
            </span>
          </Link>
        </div>
      </section>
    </div>
  );
}
