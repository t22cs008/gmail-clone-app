import * as React from 'react';
import '../styles/styles.css';
import icon from '../assets/icon.png';

const EmailView: React.FC = () => {
  return (
    <div className="email-view-container">
      <header className="email-header">
        <div className="header-left">
          <button className="header-button">←</button>
          <button className="header-button">↻</button>
          <button className="header-button">⋮</button>
        </div>
        <div className="header-right">
          <button className="header-button">✉</button>
          <button className="header-button">☆</button>
          <button className="header-button">⋮</button>
        </div>
      </header>
      <div className="email-content">
        <h2>【アイマックス】オンライン説明会_当日のアクセス方法</h2>
        <div className="email-info">
          <img src={icon} alt="icon" className="inline-icon-large" />
          <div>
            <strong>株式会社アイマックス &lt;aimacs-recruit@snar.jp&gt;</strong>
            <span className="email-date">　 1 日前</span>
            <p className="to-self">To：自分</p>
          </div>
        </div>
        <p>岡本恵汰さん</p>
        <p>こんにちは。<br />
        株式会社アイマックス 採用担当です。</p>
        <p>「オンライン説明会」の当日のアクセス方法をお知らせいたします。<br />
        ※当日のZoomにつきまして、SNSへの投稿など第三者への開示はお控えください</p>
        <p><strong>◆ご予約内容◆</strong><br />
        ・日時：2025/02/14 16:30～<br />
        ・所要時間：90分程度（＋適性検査）<br />
        ※終了時間は前後する可能性がございますのでご了承ください<br />
        ※途中参加・途中退室は原則不可となります</p>
        <p>＊----------------------------------------------＊<br />
        ・実施方法：下記Zoomからアクセスしてください<br />
        ZoomURL<br />
        <a href="https://us04web.zoom.us/j/79658017781?pwd=qcbtcCe95DBhaNaRPVLIOgyA1GYJbo.1">https://us04web.zoom.us/j/79658017781?pwd=qcbtcCe95DBhaNaRPVLIOgyA1GYJbo.1</a><br/>
        ID：796 5801 7781<br />
        Pass：3qaHTy<br />
        ＊----------------------------------------------＊</p>
        <p>※アクセスの際、フルネーム(カタカナ)を入力の上、カメラON・マイクOFFで入室してください<br />
        カメラ・マイク利用に問題のない場所でご参加をお願いいたします</p>
        <p><strong>【内容】</strong><br />
        ・会社説明<br />
        ・質疑応答<br />
        ・適性検査</p>
        <p><strong>【服装】</strong><br />
        自由</p>
        <p><strong>【当日準備するもの】</strong><br />
        筆記用具、計算用紙</p>
        <p><strong>・事前準備のお願い</strong><br />
        ・Wi-Fiなどインターネット接続ができる環境で、タブレットもしくはパソコンでご参加ください。<br />
        ・イベント前までにZoomアプリをインストールすることを推奨します。<br />
        <a href="https://zoom.us/download#client_4meeting">インストールページ</a><br />
        ※アプリをインストールしていないとワークに参加できない等、支障がでてしまう可能性があります<br />
        ・Zoomの利用がご不安な方はテストミーティングのページで動作テストを行うことも出来ます。<br />
        <a href="https://support.zoom.us/hc/ja/articles/115002262083">テストミーティングのページ</a></p>
        <p><strong>・利用方法に注意が必要なもの</strong><br />
        ■携帯電話<br />
        ・基本、マナーモード<br />
        ・緊急連絡・休憩時間以外での利用は禁止</p>
        <p>■音楽プレーヤー<br />
        ・説明会開催中の利用は禁止</p>
        <p>※万が一ご参加が難しくなってしまった場合は、弊社メールアドレス宛にご連絡ください<br />
        MAIL: <a href="mailto:recruit@aimacs.co.jp">recruit@aimacs.co.jp</a></p>
        <p>当日お会いできることを楽しみにしております。</p>
        <p>------------------------------------------------<br />
        株式会社アイマックス　管理本部 ARM部<br />
        〒220-6215 神奈川県横浜市西区みなとみらい2-3-4<br />
        クイーンズタワーC棟13F<br />
        MAIL: <a href="mailto:recruit@aimacs.co.jp">recruit@aimacs.co.jp</a><br />
        TEL: 0120-158-109（フリーダイヤル）<br />
        URL: <a href="https://www.aimacs-recruit.jp/">https://www.aimacs-recruit.jp/</a><br />
        ------------------------------------------------</p>
      </div>
      <footer className="email-footer">
        <button className="footer-button">返信</button>
        <button className="footer-button">全員に返信</button>
        <button className="footer-button">転送</button>
      </footer>
    </div>
  );
};

export default EmailView;