import Image from "next/image";
// import { MakePixelz } from "../../src/pixelz.js";

export default function IndexPage() {
  // async function adoptPixelz(num) {
  //    const pixelz = await MakePixelz()
  //    await pixelz.purchasePixelzNFT(num)
  // }
  return (
    <div className="flex flex-col items-center justify-center space-y-12">
      <Image
        src="/team-of-critters.svg"
        alt="Four one-eyed aliens playing"
        width={576}
        height={429.734}
        priority
      />
      <div>
        {/* <button onClick={adoptPixelz} className="font-bold mt-4 bg-purple-600 text-white rounded p-4 shadow-lg">
          Adopt a Pixel
        </button> */}
      </div>
      <h2 className="p-3 font-bold bg-yellow-300 md:text-2xl">
        Hi! Welcome to your first Next.js site.
      </h2>
    </div>
  );
}
