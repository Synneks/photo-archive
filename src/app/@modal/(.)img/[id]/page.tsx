import { getImage } from "~/server/queries";

export default async function ImageModal({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) {
    throw new Error("Invalid photo ID");
  }
  const image = await getImage(idAsNumber);

  return (
    <div>
      <img src={image.url} alt={image.name} className="h-96 w-96" />
    </div>
  );
}
