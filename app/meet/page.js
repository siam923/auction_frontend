import ZoomEmb from "@/components/meet/ZoomEmb";
import { currentUser } from "@clerk/nextjs";

export default async function ZoomComponent() {
  const mn = process.env.ZOOM_MEETING_NUMBER;
  const pwd = process.env.ZOOM_MEETING_PASSWORD;
  const sdkKey = process.env.ZOOM_API_KEY;

  const { firstName } = await currentUser();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="text-center">
        <h1 className="text-3xl md:text-6xl font-bold text-blue-700 mb-6">
          Join the Live Auction Conference
        </h1>
        <p className="text-lg md:text-xl mb-4">
          <span className="font-semibold">{firstName},</span> welcome to our
          exciting auction event!
        </p>
      </div>

      <ZoomEmb mn={mn} pwd={pwd} sdkKey={sdkKey} userName={firstName} />
    </div>
  );
}
