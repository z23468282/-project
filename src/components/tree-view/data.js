export const menus = [
  {
    label: '首頁',
    to: '/',
  },
  {
    label: '個人檔案',
    to: '/profile',
    children: [
      {
        label: '詳細資料',
        to: 'details',
        children: [
          {
            label: '居住地',
            to: 'Location',
            children: [
              {
                label: '縣市',
                to: 'city',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    label: '設定',
    to: '/settings',
    children: [
      {
        label: '帳戶',
        to: 'account',
      },
      {
        label: '安全性',
        to: 'security',
        children: [
          {
            label: '登入',
            to: 'login',
          },
          {
            label: '註冊',
            to: 'register',
            children: [
              {
                label: '隨機',
                to: 'Random data',
              },
            ],
          },
        ],
      },
    ],
  },
];

export default menus;
