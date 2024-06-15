import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Article } from '../classes/article';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  articleList: Article[] = [
    {
      title: '【資安】CSRF (Cross Site Request Forgery / 跨站請求偽造)',
      description:
        '當使用者登入網頁後，其身份資訊會被儲存，此時有心人士可以誘導使用者去觸發或是主動執行對於已驗證網頁的操作，如果網頁沒有進行其他驗證，則會無條件信任是由使用者發送的請求，導致該操作將會被成立',
      link: 'https://medium.com/@paul87224/%E8%B3%87%E5%AE%89-csrf-cross-site-request-forgery-%E8%B7%A8%E7%AB%99%E8%AB%8B%E6%B1%82%E5%81%BD%E9%80%A0-93e1b760a405',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*1zPdRKYrLAqhjpxdk1_e0w.png',
      pubDate: '2024-06-13',
    },
    {
      title: '【Git】不能被看見 .gitignore',
      description:
        '當多人合作時，我們就會需要合作軟體的版本控制協助，Git就是其中一種選擇，再每次的修改中可能會有需要暫時參考的檔案、金鑰檔案、依賴套件等多樣資訊存於本機專案中，但因為必要性、機密性、空間容量等考量而不用 push 至雲端中，此時我們就可以使用 .gitignore 文件來告訴 Git 那些文件是我們在上傳時要忽略的!',
      link: 'https://medium.com/@paul87224/git-%E4%B8%8D%E8%83%BD%E8%A2%AB%E7%9C%8B%E8%A6%8B-gitignore-3ce82c511948',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4qw97c4Onm34RexFAUUkZQ.png',
      pubDate: '2024-06-11',
    },
    {
      title: '【資安】XSS (Cross-Site Scripting / 跨站腳本攻擊)',
      description:
        '跟SQL Injection有點相似，是有心人士透過輸入欄位或是驗證參數方式，將惡意 HTML、JavaScript 等程式碼注入網頁當中，達到獲取其他使用者資訊 ( cookie、token… )，或是將執行惡意程式導致他人的傷害。',
      link: 'https://medium.com/@paul87224/%E8%B3%87%E5%AE%89-xss-cross-site-scripting-%E8%B7%A8%E7%AB%99%E8%85%B3%E6%9C%AC%E6%94%BB%E6%93%8A-fdda33f8ade5',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*EY0lC0wam-YDIROU2F6zKQ.png',
      pubDate: '2024-06-07',
    },
    {
      title: '【資安】SQL Injection (SQL 注入)',
      description:
        'SQL Injection 主要是發生於開發人員對於使用者輸入的資訊處理不當，導致SQL 語句中混入人為惡意的語句，從而讓駭客獲得或修改資料庫數據。',
      link: 'https://medium.com/@paul87224/%E8%B3%87%E5%AE%89-sql-injection-sql-%E6%B3%A8%E5%85%A5-5a70c19a5ab2',
      image:
        'https://miro.medium.com/v2/resize:fit:4800/format:webp/1*pE6NC6NxbYfGX_IRjElLjA.png',
      pubDate: '2024-05-26',
    },
    {
      title: '【GitHub】Ionic+Angular 部屬 GitHub Pages',
      description:
        'GitHub Pages 是一個可以讓我們展示靜態網站的功能，讓大家可以不用去建立一台虛擬機器，就可以讓其他人看到自己的網頁成品。',
      link: 'https://medium.com/@paul87224/github-ionic-angular-%E9%83%A8%E5%B1%AC-github-pages-f5743a168b10',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*4nLVRsuWcQXTSFOKI3WbBQ.png',
      pubDate: '2024-05-13',
    },
    {
      title: '【Angular】資料格式化-Pipe',
      description:
        '我們在製作系統網頁時經常會需要日期、金額、百分比等資訊依照特定樣式顯示於畫面中，但其資料來源所提供的卻又是不同的樣式，因此會需要在每個資訊顯示前先將資料進行處理，又或是透過綁定時執行 fuuction 的方式來進行顯示，但不管哪一種都會導致需要編寫許多重複的程式碼來達到希望的結果，為此 Angular 提供了 Pipe 這樣好用的功能來進行樣式轉換，協助我們有效率的轉換，接下來讓我們看看如何使用吧~',
      link: 'https://medium.com/@paul87224/angular-%E8%B3%87%E6%96%99%E6%A0%BC%E5%BC%8F%E5%8C%96-pipe-2ef36162643f',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ydcTrppWa3L9lUwrMEhYHQ.png',
      pubDate: '2024-04-28',
    },
    {
      title: '【Angular】Http 攔截器-HttpInterceptor',
      description:
        '在 Angualr 中的框架中提供了 HttpInterceptor 的 interface，讓工程師可以透過實作該 interface 來對 Http Request 來進行加工，其中大致又能區分為發起前，以及發起後的處理。',
      link: 'https://medium.com/@paul87224/angular-http-%E6%94%94%E6%88%AA%E5%99%A8-httpinterceptor-49c20609eabe',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*5YPTjntK45BqMPkWz2IUsA.png',
      pubDate: '2024-04-17',
    },
    {
      title: '【Angular】開啟後端溝通-HttpClient',
      description:
        'HttpClient 是 Angualr 中提供的一個 HTTP 請求模組，他依照著 RxJS 的 Observable 來處理資料流，使用者可以輕鬆的使用資料，同時他也有著 CORS防範、攔截器等其它功能。',
      link: 'https://medium.com/@paul87224/angular-%E9%96%8B%E5%95%9F%E5%BE%8C%E7%AB%AF%E6%BA%9D%E9%80%9A-httpclient-c1934a8f29c2',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*hCGAPCl8vtHZruh58JYxPw.png',
      pubDate: '2024-04-15',
    },
    {
      title: '【Google Maps】客製化 Google 地圖樣式',
      description:
        '本篇主要介紹如何客製化屬於自己的地圖樣式，讓地圖中的道路、標籤、自然景觀…等項目依照自己喜好以及配合網頁的風格進行設計，讓整體的樣式更加一致。',
      link: 'https://medium.com/@paul87224/google-maps-%E5%AE%A2%E8%A3%BD%E5%8C%96-google-%E5%9C%B0%E5%9C%96%E6%A8%A3%E5%BC%8F-6fc3cbfd57c3',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*StaxcJslonOgHSTeXCSjDA.png',
      pubDate: '2024-03-18',
    },
    {
      title: '【Google Maps】客製化 Google 地圖內容元件',
      description:
        '本篇主要介紹如何在自己的Google Maps 中加入標記、資訊視窗、控制項，因此如果還不會使用Google Maps的話可以參考 【Library】製作屬於自己的 Google 地圖 。',
      link: 'https://medium.com/@paul87224/library-%E5%AE%A2%E8%A3%BD%E5%8C%96-google-%E5%9C%B0%E5%9C%96%E5%85%A7%E5%AE%B9%E5%85%83%E4%BB%B6-13b9127cf8ef',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*StaxcJslonOgHSTeXCSjDA.png',
      pubDate: '2024-03-16',
    },
    {
      title: '【Google Maps】製作屬於自己的 Google 地圖',
      description:
        '在建立商店網頁時，我們都會在網頁上附上商店的地址，但使用者如果想要了解更詳細的資訊，就會需要複製網址到 Google Map 進行查詢，因此我們希望可以直接在自己的網頁中加入 Goolgle Map，提升客戶的使用便捷性，同時也達到美化網頁的作用。',
      link: 'https://medium.com/@paul87224/library-%E8%A3%BD%E4%BD%9C%E5%B1%AC%E6%96%BC%E8%87%AA%E5%B7%B1%E7%9A%84-google-%E5%9C%B0%E5%9C%96-7f5325383fbd',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*ie-sboXLERwVw111ihrqyA.png',
      pubDate: '2024-03-08',
    },
    {
      title: '【Library】Swagger 生成 API 文件',
      description:
        '工作上未使用 Laravel 等後端框架，因此本篇文章將介紹 Swagger-PHP + Swagger UI 的組合，來協助開發者輸出 API 文件，並顯示於專案網頁當中。',
      link: 'https://medium.com/@paul87224/library-swagger-%E7%94%9F%E6%88%90-api-%E6%96%87%E4%BB%B6-d0e93c1ef5bb',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KMuA6TzG3ZnJ5ya7WCtXkg.png',
      pubDate: '2024-03-01',
    },
    {
      title: '【Library】Chart.js 軸線樣式全攻略',
      description:
        '本篇主要討論的就是 options 中的 scales 項目，其主要影響為軸線的樣式與文字。',
      link: 'https://medium.com/@paul87224/library-chart-js-%E8%BB%B8%E7%B7%9A%E6%A8%A3%E5%BC%8F%E5%85%A8%E6%94%BB%E7%95%A5-f38f2172e0d8',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VkZw7N4w-wXurt8gtQoGkg.png',
      pubDate: '2024-02-24',
    },
    {
      title: '【Library】使用Chart.js進行數據可視化',
      description:
        '以下範例的版本是使用 chart.js 4.4.1，並且使用 angular 進行展示',
      link: 'https://medium.com/@paul87224/angular-%E4%BD%BF%E7%94%A8chart-js%E9%80%B2%E8%A1%8C%E6%95%B8%E6%93%9A%E5%8F%AF%E8%A6%96%E5%8C%96-9d90319ee626',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*VkZw7N4w-wXurt8gtQoGkg.png',
      pubDate: '2024-02-21',
    },
    {
      title: '【PHP】使用PHPExcel生成客製化EXCEL文件',
      description: '使用PHPExcel生成客製化EXCEL文件。',
      link: 'https://medium.com/@paul87224/php-%E4%BD%BF%E7%94%A8phpexcel%E7%94%9F%E6%88%90%E5%AE%A2%E8%A3%BD%E5%8C%96excel%E6%96%87%E4%BB%B6-7f2006f28f9e',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*i02FXzQgBMTy3xVHck_sfw.png',
      pubDate: '2024-02-19',
    },
    {
      title: '【PHP】TCPDF 表格文字垂直置中解決方案',
      description:
        '在使用 TCPDF 時，會遇到因為套件本身的限制，導致無法簡單的使用 valign、vertical-align 來設定垂直置中的目的，以下我們將分別提供 Html 以及 MultiCell的解決方法。',
      link: 'https://medium.com/@paul87224/php-tcpdf-%E8%A1%A8%E6%A0%BC%E6%96%87%E5%AD%97%E5%9E%82%E7%9B%B4%E7%BD%AE%E4%B8%AD%E8%A7%A3%E6%B1%BA%E6%96%B9%E6%A1%88-969079975244',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lOhersp-erHxLFWuPlWwDQ.png',
      pubDate: '2024-02-15',
    },
    {
      title: '【PHP】使用TCPDF生成客製化PDF文件',
      description: '使用TCPDF生成客製化PDF文件。',
      link: 'https://medium.com/@paul87224/php-%E4%BD%BF%E7%94%A8tcpdf%E7%94%9F%E6%88%90%E5%AE%A2%E8%A3%BD%E5%8C%96pdf%E6%96%87%E4%BB%B6-932b4ea76972',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*lOhersp-erHxLFWuPlWwDQ.png',
      pubDate: '2024-02-07',
    },
    {
      title: '【PHP】串接 Google Sheets API 建立簡易資料庫',
      description: '串接 Google Sheets API 建立簡易資料庫。',
      link: 'https://medium.com/@paul87224/php-%E4%B8%B2%E6%8E%A5-google-sheets-api-%E5%BB%BA%E7%AB%8B%E7%B0%A1%E6%98%93%E8%B3%87%E6%96%99%E5%BA%AB-8aeea7879e40',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*LgFbF5qbkBGA1sdW9hyNBg.png',
      pubDate: '2024-01-21',
    },
    {
      title: '【Mysql】Mysql 8.0 單 .ibd 文件救援資料',
      description:
        '因為近期電腦遭外部攻擊，因此只能將既有的磁碟進行快照，並生成新磁碟，同時啟用一台新機器來掛載新磁碟，因此我們可以從掛載的磁碟中獲取原有的mysql文件，但其文件皆為 .ibd 檔。',
      link: 'https://medium.com/@paul87224/mysql-8-0-%E5%96%AE-ibd-%E6%96%87%E4%BB%B6%E6%95%91%E6%8F%B4%E8%B3%87%E6%96%99-e807b9f5eedb',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*NTs98otC6TVeE5rcjx_bUQ.png',
      pubDate: '2024-01-10',
    },
    {
      title: '【Line】Line Notify 推播服務',
      description:
        'ine Notify 是由 Line 所提供的通知服務，藉由權杖的發放與連動，使用者可以在自行設定的情況下呼叫 Line Notify ，並藉由官方帳號「LINE Notify」來通知連動的對象，對象可以是自己以及已加入的群組。',
      link: 'https://medium.com/@paul87224/line-line-notify-%E6%8E%A8%E6%92%AD%E6%9C%8D%E5%8B%99-4741c0531379',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*CQwkSXUZIr2_1KAcjR7GhQ.png',
      pubDate: '2024-01-07',
    },
    {
      title: '【PHP】獲取外部網路資源方法',
      description: '獲取外部網路資源方法。',
      link: 'https://medium.com/@paul87224/php-%E7%8D%B2%E5%8F%96%E5%A4%96%E9%83%A8%E7%B6%B2%E8%B7%AF%E8%B3%87%E6%BA%90%E6%96%B9%E6%B3%95-84563e651eef',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*t11WSFGItF-utBW1HROTrg.png',
      pubDate: '2024-12-25',
    },
    {
      title: '【PHP】ZIP 解壓縮檔案',
      description:
        'ZipArchive 所提供的解壓縮方法，他會將所有壓縮中檔案解壓縮至指定資料夾內，如果你的檔案名稱都為英文的話可以考慮使用此方法，但遇到中文檔名則會變成亂碼!',
      link: 'https://medium.com/@paul87224/php-%E8%A7%A3%E5%A3%93%E7%B8%AE%E6%AA%94%E6%A1%88-aacc416ef854',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*KR6IcUzsQ9G0HbtI2_M_JA.png',
      pubDate: '2024-12-19',
    },
    {
      title: '【PHP】 Zip 壓縮檔案',
      description: '在使用 PHP 壓縮檔案時，我們可以使用 ZipArchive 來進行實作!',
      link: 'https://medium.com/@paul87224/php-zip-%E5%A3%93%E7%B8%AE%E6%AA%94%E6%A1%88-1e39467f7954',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/1*r54zkLhneOiV1Lgs0tVkJg.png',
      pubDate: '2024-12-19',
    },
    {
      title: '【Line】 Messaging API Webhook + PHP',
      description:
        'Line 會在有使用者進行操作時觸發 Webhook ，並且提供相關資訊給管理者來設計各操作的相應回覆，且沒有語言的限制，只要能撰寫成一個 API 並且綁定後就能使用，因此其彈性相當大，可以讓設計者更好的依照個人需求與習慣進行設計與調整。',
      link: 'https://medium.com/@paul87224/line-messaging-api-webhook-php-30fb41a38c44',
      image:
        'https://miro.medium.com/v2/resize:fit:1400/format:webp/0*RPac8C04ZoJxM7u-.png',
      pubDate: '2024-12-18',
    },
    {
      title: '【Line】 Messaging API 訊息樣式',
      description: 'Messaging API 訊息樣式。',
      link: 'https://medium.com/@paul87224/line-bot-messaging-api-%E8%A8%8A%E6%81%AF%E6%A8%A3%E5%BC%8F-581129ffab21',
      image:
        'https://miro.medium.com/v2/resize:fit:786/format:webp/1*TQVOeI5s_lzMe71e2G4uLQ.png',
      pubDate: '2024-12-10',
    },
    {
      title: '【Line】Line BOT 聊天機器人',
      description:
        '創建Line Business 帳號，並登入!https://developers.line.biz/zh-hant/。',
      link: 'https://medium.com/@paul87224/line-bot-%E8%81%8A%E5%A4%A9%E6%A9%9F%E5%99%A8%E4%BA%BA-c1df89cd97e3',
      image:
        'https://miro.medium.com/v2/resize:fit:786/format:webp/1*TQVOeI5s_lzMe71e2G4uLQ.png',
      pubDate: '2024-12-10',
    },
  ];

  constructor(private http: HttpClient) {}

  getArticleList(): Article[] {
    return this.articleList;
  }
}
