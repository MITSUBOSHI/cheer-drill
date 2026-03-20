import Link from "next/link";

export function Header() {
  return (
    <header className="bg-primary text-white shadow-md">
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold tracking-tight">
          CheerDrill
        </Link>
        <nav className="flex gap-4 text-sm font-medium">
          <Link href="/arm-motions" className="hover:text-accent transition-colors">
            アームモーション
          </Link>
          <Link href="/steps" className="hover:text-accent transition-colors">
            ステップ
          </Link>
          <Link href="/quiz" className="hover:text-accent transition-colors">
            クイズ
          </Link>
        </nav>
      </div>
    </header>
  );
}
