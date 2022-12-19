interface Errors {
  [key: number]: ErrorInforamtion;
}

interface ErrorInforamtion {
  code: number;
  message: string;
  explane: string;
  tip: string;
  path?: string;
}

const errors: Errors = {
  404: {
    code: 404,
    message: "Страница не найдена",
    explane:
      "Страница на которую вы пытаетесь перейти в данный момент не доступна",
    tip: "Следите за обновлениями в личном кабинете",
  },
};

export function getErrorInformation(code: number): ErrorInforamtion {
  return errors[code];
}
