import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex h-full w-full min-w-0">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-col items-center justify-center border-l">
        <div className="border-b p-2 text-center text-xl font-bold">
          {image.name}
        </div>
        <div className="flex flex-col p-2">
          <span>Uploaded by: {uploaderInfo.fullName}</span>
        </div>

        <div className="flex flex-col p-2">
          <span>Created on: {image.createdAt.toLocaleDateString()}</span>
        </div>
      </div>
    </div>
  );
}
