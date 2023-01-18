import { ChildrenProps } from '../../types/children';

export default function Wrapper({ children }: ChildrenProps) {
  return <div>{children}</div>;
}
