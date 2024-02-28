import profileImage from "@/public/Headshot.jpeg";
import qrCode from "@/public/linktree-qr.svg";
import { type Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Bio",
};

export default function Bio() {
  return (
    <main className="flex min-h-svh flex-col items-center gap-8 py-8">
      <div className="flex w-full justify-center gap-16">
        <div className="overflow-hidden rounded-full object-cover">
          <Image
            alt="Headshot"
            height={200}
            src={profileImage}
            width={200}
          />
        </div>
        <div className="rounded-lg bg-white p-1">
          <Image alt="My SVG" height={200} src={qrCode} width={200} />
        </div>
      </div>

      <h1 className="text-6xl">Nathan Drake</h1>

      <div className="flex flex-col items-center gap-4">
        <h4 className="text-2xl">Twitter: @nathandrake</h4>
        <h4 className="text-2xl">LinkedIn: /drakenathan</h4>
        <h4 className="text-2xl">GitHub: /drake-nathan</h4>
        <h4 className="text-2xl">Zod: zod.dev</h4>
      </div>
    </main>
  );
}
