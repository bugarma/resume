export const skillData = [
    {
        title: '前端',
        score: 80,
        tools: [
            'Html, CSS3, Javascript',
            'React, Electron',
            'D3.js'
        ]
    },
    {
        title: '機器學習',
        score: 70,
        tools: [
            'Python',
            'Tensorflow, Keras, Scikit-learn',
            'NLTK'
        ]
    },
    {
        title: '後端',
        score: 60,
        tools: [
            'Node.js',
            'MongoDB, MySQL'
        ],
    },
    {
        title: '一般知識',
        score: 75,
        tools: [
            'Linux Command',
            'Git'
        ],
    },
];

export const timelineData = [
    // {
    //     date: 'Sep. 2017 - Now',
    //     title: '陰間遊走...',
    //     content: `放空、讀書與辦公`,
    //     tools: 'Microsoft Office, 公務人員公文系統 XD',
    // },
    {
        date: 'Feb. 2017 - Jul. 2017',
        title: 'Bright Idea 實習',
        content: `前端：Vue.js C3.js 建立網頁畫面與圖表。\n後端：Python 爬取網頁資料作分析，Node.js、MongoDB 建立網站後台。`,
        tools: 'Vue.js, C3.js, Python, Node.js',
    },
    {
        date: 'Aug. 2016 - Mar. 2017',
        title: '台大醫院化療報到流程改善計畫',
        content: '使用 Python 相關的 package 來模擬病人排隊等待化療的模型，並使用 Python 相關的 package 來做圖表呈現。',
        tools: 'Python, simpy, python-pptx',
    },
    {
        date: 'Sep. 2016 - Dec. 2016',
        title: '前端介面的專案 — 成功大學交通管理資料庫',
        content: '開發前端桌面版軟體程式介面，讓閱讀、編輯資料庫資料變得方便，使用 React.js 與 Electron 等 Javascript Package 來開發。',
        tools: 'Reactjs, Electron',
    },
    {
        date: 'Jul. 2015 - Dec. 2015',
        title: '國立台灣大學土木系研究所電腦輔助工程組 / 研究助理',
        content: '研究開發老人照護管理系統，以網頁為介面，方便醫護人員填寫各樣表單，簡化醫護人員的工作。並且方便醫護人員做住民的健康狀況追蹤。',
        tools: 'Angularjs, Nodejs, MongoDB, Express',
    },
];

export const courseData = [
    {
        name: '機器學習及其深層與結構化',
        desc: '在這門課當中，我學會了資料處理、機器學習與深度學習的模型設計、Tensorflow模型實作，學期中經歷四次大型作業與期末專題，每一次作業都是模型設計並與課堂同學比賽準確度，實作了CNN、LSTM、GAN等模型，也使用了NLTK、Gensim等自然語言處理工具，在課堂上的表現不錯，所設計的模型至少都有過課堂要求的baseline，最好的一次還拿到了課堂評分的前三名。',
        link: 'https://github.com/bugarma/MLDS2017',
        photo: './deep-learning.png'
    },
    {
        name: '自然語言處理',
        desc: '學習自然語言處理基礎與理論。期末Project使用NLTK、Gensim、Tensorflow...等Python Package建立語意模型，判斷飯店評論回復的面向與好壞。',
        link: '',
        photo: './wordcloud.png'
    },
    {
        name: '視覺化技術在工程上之應用',
        desc: '學習遊戲引擎Unity來建立模型與場景，模擬工程上的情況。課程中學了許多Unity的使用與操作。期末Project為建立有重力的3D俄羅斯方塊，希望能讓玩的同學訓練3D空間概念與結構支撐。',
        link: '',
        photo: './unity.001.jpeg'
    }
]
