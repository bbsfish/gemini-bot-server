[Gemini API を使った要約機能付き受信メール通知 LINE Bot](https://zenn.dev/bbsfish/articles/ab096b6b526468)

1. GAS の main.gs に サーバアドレス (とポート) を設定
2. ".env" に Gemini API Key と GAS のウェブアプリケーションURL を設定.
3. 以下コマンドでサーバー起動
```sh
npm start
```
4. GAS に main 関数起動イベントを登録.
