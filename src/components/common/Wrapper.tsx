import { ChildrenProps } from '../../types/children';

export default function Wrapper({ children, WrapperStyle }: ChildrenProps) {
  return <div className={WrapperStyle}>{children}</div>;
}
