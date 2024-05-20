import { Injectable } from '@angular/core';
import { Experience } from '../classes/experience';

@Injectable({
  providedIn: 'root',
})
export class ExperienceService {
  experience_list: Experience[] = [
    {
      title: '工程管理平台',
      description:
        '【專案介紹】' +
        '\r\n透過網頁與雲端儲存技術協助建設公司從設計、施工、使用等階段的企業升級。' +
        '\r\n' +
        '\r\n【技術使用】' +
        '\r\n● 前端框架: Ionic+Angular - 支援跨平台開發' +
        '\r\n● 後端: PHP' +
        '\r\n● 版本控管: Git' +
        '\r\n● 其他: Google Sheet API、S3 API、Chart.js、PHPOffice、TCPDF、Swagger API - 整合了多種API和工具，實現了專案的多樣功能' +
        '\r\n' +
        '\r\n【貢獻和角色】' +
        '\r\n● 客戶需求討論與確認實際需求。' +
        '\r\n● 送審、紀實等主功能開發。' +
        '\r\n● 提供跨地區、跨裝置頁面呈現與簽核。' +
        '\r\n● 撰寫 Swagger API 文件，協助管理 API。' +
        '\r\n● 協助製作教育訓練相關文件。' +
        '\r\n' +
        '\r\n【專案成就】' +
        '\r\n● 協助客戶減少 60% 文件往返時間，提高工作效率。' +
        '\r\n● 提供文件與相片的雲端快查詢，方便用戶隨時隨地查閱。' +
        '\r\n● 定期發送專案報表，並附上相關文件與相片，提高專案管理效率。' +
        '\r\n● 實現跨公司平台溝通與資料傳遞，促進跨公司合作和信息分享。',
      link: '',
      image: 'assets/imgs/工程管理平台.png',
      date: '2021-2024',
      tags: [
        'Ionic',
        'Angular',
        'PHP',
        'Google Sheet API',
        'S3 API',
        'Chart.js',
        'PHPOffice',
        'TCPDF',
      ],
    },
    {
      title: 'IoV',
      description:
        '【專案介紹】' +
        '\r\n透過 WebApp 協助客戶蒐集資料並遠端控制太陽能車，同時根據不同使用者設計其權限，提升管理效率和操作便利性' +
        '\r\n' +
        '\r\n【技術使用】' +
        '\r\n● 前端框架: Ionic+Angular - 製作 WebApp' +
        '\r\n● 後端: PHP、' +
        '\r\n● 版本控管: Git' +
        '\r\n● 其他: Google Maps API、PHP Websocket 、Line API' +
        '\r\n' +
        '\r\n【貢獻和角色】' +
        '\r\n● 客戶需求討論與確認實際需求。' +
        '\r\n● 使用 Websoket 與車機對話並遠端控制燈具、警報器。' +
        '\r\n● 使用 Line 來進行預警推播。' +
        '\r\n● 車機控制與顯示使用者權限設計。' +
        '\r\n' +
        '\r\n【專案成就】' +
        '\r\n● 遠端控制: 跨地域控制與偵測車機狀況，提升管理效率。' +
        '\r\n● 預警推播: 協助客戶第一時間了解狀況，並進行處理。' +
        '\r\n● 地圖示顯示 : 使用 Google Maps 加速使用者獲取實際位置，增加定位準確性。' +
        '\r\n● 權限設計 : 合理設計權限，方便控管車輛與人員關係，提升管理校譽與安全性。',
      link: '',
      image: 'assets/imgs/iov.png',
      date: '2022-2023',
      tags: [
        'Ionic',
        'Angular',
        'PHP',
        'Google Maps API',
        'PHP Websocket',
        'Line API',
      ],
    },
    {
      title: '取貨平台',
      description:
        '【專案介紹】' +
        '\r\n透過雲端方式協助零售業進行活動庫存管理，即時了解庫存與取貨情形。' +
        '\r\n' +
        '\r\n【技術使用】' +
        '\r\n● 前端框架: Ionic+Angular - 製作 RWD 介面' +
        '\r\n● 後端: PHP' +
        '\r\n● 版本控管: Git' +
        '\r\n' +
        '\r\n【角色和成就】' +
        '\r\n● 跨裝置頁面呈現與功能設計。' +
        '\r\n● 雲端快速查詢訂單，解決傳統紙本查找困境。' +
        '\r\n● 即時顯示取貨情形，減少門市與倉儲的溝通錯誤。' +
        '\r\n● 取貨時間紀錄，作為後續統計分析基礎',
      link: 'https://ra-paul.github.io/pick-up/',
      image: 'assets/imgs/取貨平台.png',
      date: '2023',
      tags: ['Ionic', 'Angular', 'PHP'],
    },
    {
      title: 'SpringBoot 電商平台 API',
      description:
        '【專案介紹】' +
        '\r\n此專案為「Java 工程師必備！Spring Boot 零基礎入門」課程完成的作品，透過 Spring Boot 開發店商網站 API。' +
        '\r\n' +
        '\r\n【技術使用】' +
        '\r\n● 後端: JAVA、Spring Boot' +
        '\r\n● 版本控管: Git' +
        '\r\n' +
        '\r\n【學習成果】' +
        '\r\n● 了解 IoC、AOP 等實際運用。' +
        '\r\n● 學習 Spring MVC 與建立 Restful API，並進行參數驗證。' +
        '\r\n● JDBC、JPA 串接資料庫。' +
        '\r\n● 熟悉 Controller-Service-Dao 三層式架構。' +
        '\r\n● 實作各項功能 Unit Test。',
      link: 'https://github.com/RA-Paul/springboot-mall',
      image: 'assets/imgs/springboot.png',
      date: '2024',
      tags: ['JAVA', 'Spring Boot'],
    },
  ];

  constructor() {}

  getExperienceList(): Experience[] {
    return this.experience_list;
  }
}
