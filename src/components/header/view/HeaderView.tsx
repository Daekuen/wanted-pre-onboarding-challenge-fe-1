import { IHeaderProps } from '../types';
import HomeBtn from '../components/HomeBtn';
import HeaderWrapper from '../components/HeaderWrapper';
import HeaderBtn from '../components/HeaderBtn';
import Wrapper from '../../common/Wrapper';
import { BtnWrapperStyle } from '../style';

export default function HeaderView({
  onGoMain,
  onGoTodos,
  onGoLogin,
  onGoSignUp,
  onLogout,
  hasToken,
}: IHeaderProps) {
  return (
    <HeaderWrapper>
      <HomeBtn hasToken={hasToken} onGoMain={onGoMain} onGoTodos={onGoTodos} />
      <Wrapper WrapperStyle={BtnWrapperStyle}>
        {hasToken ? (
          <HeaderBtn text="LOGOUT" onGoPage={onLogout} />
        ) : (
          <>
            <HeaderBtn text="SIGN UP" onGoPage={onGoSignUp} />
            <HeaderBtn text="LOGIN" onGoPage={onGoLogin} />
          </>
        )}
      </Wrapper>
    </HeaderWrapper>
  );
}
