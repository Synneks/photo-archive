import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);

  return (
    <div className="flex h-full w-full min-w-0 bg-green-500">
      <div className="flex flex-shrink items-center justify-center">
        <img
          src={image.url}
          alt={image.name}
          className="flex-shrink object-contain"
        />
      </div>
      <div className="flex w-48 flex-col items-center justify-center border-l">
        <h2 className="text-xl font-bold">{image.name}</h2>
        <p className="text-lg">{image.createdAt.toISOString()}</p>
      </div>
    </div>
  );
}
