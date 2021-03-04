// 비밀번호 유효성 검사
export const passwordValidation = (password) => {
  const checkPass = /^(?=.*[a-zA-Z])(?=.*[\~\․\!\@\#\$\%\^\&\*\(\)\_\-\+\=\[\]\|\\\;\:\\'\"\<\>\,\.\?\/])(?=.*[0-9]).{10,18}$/;
  return !checkPass.test(password);
};

// email 유효성검사
export const validEmail= (email) => {
  const regExp = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
  return email.match(regExp) === null
}
