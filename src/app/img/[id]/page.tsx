import { Modal } from "~/app/@modal/(.)img/[id]/modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function ImagePage({
  params: { id: photoId },
}: {
  params: { id: string };
}) {
  const idAsNumber = Number(photoId);
  if (Number.isNaN(idAsNumber)) {
    throw new Error("Invalid photo ID");
  }

  return <FullPageImageView id={idAsNumber} />;
}
