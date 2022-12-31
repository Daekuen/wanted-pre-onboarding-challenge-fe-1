import { FiSmile } from 'react-icons/fi';

export default function MainUI() {
  return (
    <>
      <div className="flex items-center h-1/3 justify-center">
        <FiSmile className="text-9xl" />
      </div>
      <div className="flex flex-col justify-end items-center mt-20 text-xl font-semibold">
        <div className="">
          <p className="mb-5">✓ 하루를 일정을 관리해 보세요</p>
          <p className="mb-5">✓ 중요한 일정을 잊지 않도록 기록하세요</p>
          <p>✓ 당신의 일상을 함께합니다</p>
        </div>
      </div>
    </>
  );
}
