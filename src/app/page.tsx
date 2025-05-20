import Image from "next/image";
import Link from "next/link";
import Header from "@/components/layout/Header";

export default function Home() {
  return (
    <>
      <main className="container mx-auto py-12">
        {/* ヒーローセクション */}
        <section className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            簡単・安全なファイル共有
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            大容量ファイルも簡単に共有。セキュリティも万全です。
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/dashboard"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              ファイルをアップロード
            </Link>
            <Link
              href="/account/register"
              className="border border-blue-600 text-blue-600 px-8 py-3 rounded-lg hover:bg-blue-50 transition-colors"
            >
              新規登録
            </Link>
          </div>
        </section>

        {/* 特徴セクション */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 text-2xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold mb-2">セキュアな共有</h3>
            <p className="text-gray-600">
              エンドツーエンド暗号化で、あなたのファイルを安全に保護します。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 text-2xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold mb-2">高速アップロード</h3>
            <p className="text-gray-600">
              大容量ファイルも高速でアップロード。進捗状況もリアルタイムで確認できます。
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="text-blue-600 text-2xl mb-4">📱</div>
            <h3 className="text-xl font-semibold mb-2">どこでもアクセス</h3>
            <p className="text-gray-600">
              スマートフォン、タブレット、PCからいつでもアクセス可能です。
            </p>
          </div>
        </section>

        {/* 使い方セクション */}
        <section className="bg-white p-8 rounded-lg shadow-sm">
          <h2 className="text-2xl font-bold mb-6 text-center">簡単3ステップ</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">1</div>
              <h3 className="font-semibold mb-2">ファイルを選択</h3>
              <p className="text-gray-600">
                共有したいファイルを選択します。
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">2</div>
              <h3 className="font-semibold mb-2">アップロード</h3>
              <p className="text-gray-600">
                ファイルをアップロードします。
              </p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-4">3</div>
              <h3 className="font-semibold mb-2">共有リンクを発行</h3>
              <p className="text-gray-600">
                生成されたリンクを共有相手に送信します。
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* フッター */}
      <footer className="bg-gray-800 text-white py-8 mt-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Share-File</h3>
              <p className="text-gray-400">
                安全で簡単なファイル共有サービス
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">リンク</h4>
              <ul className="space-y-2">
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white">
                    サービスについて
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="text-gray-400 hover:text-white">
                    利用規約
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="text-gray-400 hover:text-white">
                    プライバシーポリシー
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">お問い合わせ</h4>
              <p className="text-gray-400">
                ご質問やお問い合わせはこちらまで
              </p>
              <Link
                href="/contact"
                className="text-blue-400 hover:text-blue-300 mt-2 inline-block"
              >
                お問い合わせフォーム
              </Link>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Share-File. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
