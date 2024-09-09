import Image from 'next/image';
import Link from 'next/link';
import PreviousPage from '@/components/PreviousPage';
import SVGDownload from '@/styles/icons/download.svg';
import SVGGoToList from '@/styles/icons/gotolist.svg';

export default function FrameSelectView() {
  return (
    <div className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-row justify-between px-4">
        <PreviousPage target="/" />
        <Link href="/list" className="pr-4">
          <SVGGoToList />
        </Link>
      </div>
      <h1 className="text-xl">AI 프로필이 완성!</h1>
      <h2 className="py-1 font-sfpro text-2xs font-bold text-white">
        사진과 어울리는 프레임을 선택해주세요 😀
      </h2>
      {/* frame 있으면 mb-6 */}
      <div className="text-2sx mb-6 mt-4 flex h-[35px] w-[183px] flex-row items-center justify-evenly rounded-full bg-white font-sfpro font-bold">
        {/* 기본 선택ver  */}
        <div className="flex h-[27px] w-[86px] items-center justify-center rounded-full bg-primary-darkblue text-white">
          기본
        </div>
        <div className="flex h-[27px] w-[86px] items-center justify-center rounded-full bg-white text-primary-middlegray">
          프리미엄{' '}
        </div>

        {/* 프리미엄 선택ver
        <div className="text-primary-middlegray flex h-[27px] w-[86px] items-center justify-center rounded-full bg-white">
          기본
        </div>
        <div className="flex h-[27px] w-[86px] items-center justify-center rounded-full bg-primary-darkblue text-white">
          프리미엄{' '}
        </div> */}
      </div>

      <div className="relative flex h-[290px] w-[239px] justify-center">
        <Image
          src="/unlocked-profile.png"
          alt="Sample Image"
          width={205}
          height={205}
          priority
          className="absolute mt-4"
        />
        <Image
          src="/basicframe1.png"
          alt="Sample Image"
          width={239}
          height={290}
          priority
          className="relative"
        />
      </div>

      <div className="flex flex-row gap-x-2.5 py-6">
        <Image
          src="/basicframecircle1.png"
          alt="Sample Image"
          width={40}
          height={40}
          priority
          className="relative"
        />
        <Image
          src="/basicframecircle1.png"
          alt="Sample Image"
          width={40}
          height={40}
          priority
          className="relative"
        />
        <Image
          src="/basicframecircle1.png"
          alt="Sample Image"
          width={40}
          height={40}
          priority
          className="relative"
        />

        <Image
          src="/basicframecircle1.png"
          alt="Sample Image"
          width={40}
          height={40}
          priority
          className="relative"
        />
        <Image
          src="/basicframecircle1.png"
          alt="Sample Image"
          width={40}
          height={40}
          priority
          className="relative"
        />
      </div>

      <button
        type="button"
        className="flex h-12 w-full items-center justify-center gap-x-3 rounded-full bg-primary-darkblue text-xl text-white"
      >
        <SVGDownload />
        다운로드
      </button>
    </div>
  );
}
