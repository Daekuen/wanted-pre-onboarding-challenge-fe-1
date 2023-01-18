import { UserInfo } from '../../types/user';

export interface LoginProps {
  userInfo: UserInfo;
  onUserInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onLoginSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isNotEnterEmail: boolean;
  isNotEnterPassword: boolean;
  isEmailValidate: boolean;
  isPasswordValidate: boolean;
}

export interface SignUpProps {
  userInfo: UserInfo;
  onUserInfoChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSignUpSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  isNotEnterEmail: boolean;
  isNotEnterPassword: boolean;
  isEmailValidate: boolean;
  isPasswordValidate: boolean;
}
