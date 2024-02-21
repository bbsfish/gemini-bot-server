[Gemini API を使った要約機能付き受信メール通知 LINE Bot](https://zenn.dev/bbsfish/articles/ab096b6b526468)

1. GAS に以下を設定
   + main.gs に サーバアドレス (とポート)
   + `LINE_ACCESS_TOKEN` と `LINE_USER_ID` というスクリプトプロパティ (LINE Messaging API のアクセストークンと通知対象の LINE User ID)
3. ".env" に Gemini API Key と GAS のウェブアプリケーションURL を設定.
4. 以下コマンドでサーバー起動
```sh
npm start
```
4. GAS に main 関数起動イベントを登録.
