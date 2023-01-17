export const passwordValidate = (password: string) => {
  return !!password.match(/.{8,}/g);
};

export const emailValidate = (email: string) => {
  return !!email.match(/[^.][\w\-]+\@[\w\-]+\.\w{2,}/g);
};
