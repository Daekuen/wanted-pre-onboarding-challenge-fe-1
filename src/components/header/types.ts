export interface IHeaderProps {
  onGoMain: () => void;
  onGoTodos: () => void;
  onGoLogin: () => void;
  onGoSignUp: () => void;
  onLogout: () => void;
  hasToken: boolean;
}

export interface IHeaderBtn {
  text: string;
  onGoPage: () => void;
}
