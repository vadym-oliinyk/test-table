export const tableData = {
  headers: [
    {
      title: 'Версія',
      name: 'version',
    },
    {
      title: 'Дата створення',
      name: 'creationDate',
    },
    {
      title: 'Статус',
      name: 'status',
      isHidden: true,
    },
    {
      title: 'Дата зміни статусу',
      name: 'modificationDate',
    },
    {
      title: null,
      name: 'action',
    },
  ],
  rows: [
    {
      version: '1.02',
      creationDate: 1625506492,
      status: 0,
      modificationDate: 1625506492,
      action: 'continue',
    },
    {
      version: '1.01',
      creationDate: 1625406551,
      status: 1,
      modificationDate: null,
      action: 'look',
    },
    {
      version: '1.00',
      creationDate: 1625506492,
      status: 2,
      modificationDate: 1625506492,
      action: 'look',
    },
  ],
};

export const statusMap = {
  0: 'Не завершено',
  1: 'Не складено',
  2: 'Складено',
};

export const actionMap = {
  continue: {
    title: 'Продовжити',
    btnType: 'outline',
  },
  look: {
    title: 'Переглянути',
    btnType: 'primary',
  },
};
