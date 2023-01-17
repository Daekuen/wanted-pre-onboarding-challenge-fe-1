import Wrapper from '../../common/Wrapper';
import AuthTitle from '../components/AuthTitle';
import FormWrapper from '../components/FormWrapper';
import TextInput from '../../common/TextInput';
import SubmitBtn from '../../SubmitBtn';
import { LoginProps } from '../tpyes';
import TextFiled from '../components/TextFiled';

export default function LoginView({
  userInfo,
  onUserInfoChange,
  onLoginSubmit,
  isNotEnterEmail,
  isNotEnterPassword,
  isEmailValidate,
  isPasswordValidate,
}: LoginProps) {
  return (
    <Wrapper>
      <AuthTitle title="LOGIN" />
      <FormWrapper onLoginSubmit={onLoginSubmit}>
        <TextInput
          type="text"
          category="email"
          value={userInfo.email}
          marginBottom={2}
          onUserInfoChange={onUserInfoChange}
        />
        <TextFiled
          text={
            isEmailValidate || isNotEnterEmail
              ? ''
              : 'email 형식에 맞게 입력해주세요.'
          }
          marginBottom={2}
        />
        <TextInput
          type="password"
          category="password"
          value={userInfo.password}
          marginBottom={2}
          onUserInfoChange={onUserInfoChange}
        />
        <TextFiled
          text={
            isPasswordValidate || isNotEnterPassword
              ? ''
              : '비밀번호는 8자리 이상이어야 합니다.'
          }
          marginBottom={2}
        />
        <SubmitBtn
          isNotEnterEmail={isNotEnterEmail}
          isNotEnterPassword={isNotEnterPassword}
          title="LOGIN"
        />
      </FormWrapper>
    </Wrapper>
  );
}
