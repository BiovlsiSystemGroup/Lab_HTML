## 雲科電子工程系 跨領域系統暨生醫應用設計實驗室<br/>Cross-disciplinary Systems and Biomedical Applications Labortaory

## 網頁套件版本

- [Bootstrap](https://getbootstrap.com/) - 5.2.3
- [JQuery](https://jquery.com/) - 3.5.1

## 網頁共同項目

共同項目皆是以 js 檔案為主，並且在各個網頁中引用，以達到共同項目的效果

- 導覽列
  - [導覽列](./common/Header.js)
  - [導覽列 CSS](./css/HeaderStyle.css)
- 置底
  - [置底](./common/Footer.js)
  - [置底 CSS](./css/FooterStyle.css)

## 實驗室網頁區分

- [首頁](./index.html)
- 最新消息
  - 全部消息
    - [第一頁](./AllNewsPage.html)
    - [第二頁](./AllNewsPage-2.html)
    - [第三頁](./AllNewsPage-3.html)
  - 新聞消息
    - [第一頁](./NewsPage.html)
  - 獲獎訊息
    - [第一頁](./AwardPage.html)
    - [第二頁](./AwardPage-2.html)
  - [實驗室公告](./LabNoticePage.html)‵
- [研究團隊](./ResearchTeam.html)
  - [薛雅馨教授](./professor/professorhsueh.html)
  - [柯明達助理教授](./professor/professorke.html)
- 研究成果
  - [生醫與運動](./ResearchResultsPage.html)
  - [元宇宙與車用](./ResearchResultsPage-2.html)
  - [3C 與光通訊](./ResearchResultsPage-3.html)

## 各網頁介紹

1. 首頁
   - 首頁當中包含元素有
     - 導覽列
     - carousel (輪播照片)
       > 照片張數以**4**張為主
     - Grid (最新消息)
       > 最新消息為所有的訊息但**訊息以 7 則為主**
     - Grid (獲獎訊息)
       > 獲獎訊息**訊息以 3 則為主**
     - Grid (實驗室公告)
       > 實驗室公告**訊息以 2 則最新的為主**
     - 向上箭頭
       > 基本不需更動若需要更改可從此處更改
       ```html
       # Line 382 to 397
       <div class="scrollToTop">
         <svg
           xmlns="http://www.w3.org/2000/svg"
           width="45"
           height="45"
           fill="currentColor"
           class="bi bi-arrow-up-square"
           viewBox="0 0 16 16"
         >
           <path
             fill-rule="evenodd"
             d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm8.5 9.5a.5.5 0 0 1-1 0V5.707L5.354 7.854a.5.5 0 1 1-.708-.708l3-3a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 5.707V11.5z"
           />
         </svg>
       </div>
       ```
     - 置底
2. 最新消息
3. 研究團隊
   研究團隊當中包含元素有
   - 導覽列
   - 研究團隊
     - 薛雅馨教授
     - 柯明達助理教授
     - 博/碩班研究群
       > 若碩博班有任何更動請更改此處<br/> > **_非常重要，這樣的重大更動可以大幅度減少撰寫 html_**<br/>
       > 更改方式為更改 data 中的資料<br/> > **一個大括號{}** 代表一組資料(兩個人)<br/> > **記得添加 id、degree、membersName、degree2、membersName2**<br/> > **若一組資料只有一位名字 可以空白但不可以少** <br/> >
       > 2024/06/03 更新可以直接將姓名全名填入，程式會自動切割
     ```JavaScript
        # Line 143 to 200
            const data = [
     {
      id: '1',
      degree: '博士班',
      membersName: '黃祥龍',
      degree2: '碩士班',
      membersName2: '鄭基讚',
     },
     {
      id: '4',
      degree: '碩士班',
      membersName: '劉睿澤',
      degree2: '碩士班',
      membersName2: '胡永青',
     },
     {
      id: '5',
      degree: '碩士班',
      membersName: '林竑佑',
      degree2: '碩士班',
      membersName2: '陳品元',
     },
     {
      id: '6',
      degree: '碩士班',
      membersName: '高彬軒',
      degree2: '碩士班',
      membersName2: '顏銘德',
     },
     {
      id: '7',
      degree: '碩士班',
      membersName: '劉永笙',
      degree2: '碩士班',
      membersName2: '劉宸愷',
     },
     {
      id: '8',
      degree: '碩士班',
      membersName: '周育琪',
      degree2: '碩士班',
      membersName2: '黃敬文',
     },
     {
      id: '9',
      degree: '碩士班',
      membersName: '劉曜瑞',
      degree2: '碩士班',
      membersName2: '劉昱辰',
     },
     {
      id: '10',
      degree: '碩士班',
      membersName: '陳信宏',
      degree2: '碩士班',
      membersName2: '陳彥銘',
     }
     ];
     ```
   - 置底
4. 薛雅馨教授、柯明達助理教授
   - 教授 html 無法添加共同項目，因此需要手動添加檔案都在
   - [common/備份檔案夾中](./common/備份檔案)
   - 基本上不需要更動，若有需要的部分可能是經歷、研究領域
   - 看先前怎麼寫每一行都是一個 **div** 標籤
5. 研究成果

- **有任何新增/修改/刪除在請各位添加解說於此頁，以提升網頁的可讀性/維護性**
- **辛苦各位了，往後也請多指教**
- **最後更新時間 2023/08/17 23:00**
- **更新人員: by 某一屆老屁股**
