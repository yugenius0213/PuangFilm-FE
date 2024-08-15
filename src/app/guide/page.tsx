import MyButton from '@/components/MyButton';
import SVGPrevious from '@/styles/icons/previous.svg';

export default function GuideView() {
  return (
    <div>
      <div className="absolute left-5 top-5">
        <SVGPrevious />
      </div>
      <div>자연스러운 AI프로필을 위해</div>
      <div>
        <span className="bg-white">적합한 사진들</span>로만 제출해주세요!
      </div>

      <h1>This is guide Page</h1>

      <MyButton name="사진 등록하러가기" target="/upload" />
    </div>
  );
}