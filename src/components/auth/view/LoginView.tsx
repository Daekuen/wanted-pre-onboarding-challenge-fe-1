import Wrapper from '../../common/Wrapper';
import AuthTitle from '../components/AuthTitle';
import FormWrapper from '../components/FormWrapper';
import TextInput from '../../common/TextInput';
import SubmitBtn from '../../SubmitBtn';
import { LoginProps } from '../tpyes';

export default function LoginView({
  userInfo,
  onUserInfoChange,
  onLoginSubmit,
  isNotEnterEmail,
  isNotEnterPassword,
}: LoginProps) {
  return (
    <Wrapper>
      <AuthTitle title="LOGIN" />
      <FormWrapper onLoginSubmit={onLoginSubmit}>
        <TextInput
          type="text"
          category="email"
          value={userInfo.email}
          onUserInfoChange={onUserInfoChange}
        />
        <TextInput
          type="password"
          category="password"
          value={userInfo.password}
          onUserInfoChange={onUserInfoChange}
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
