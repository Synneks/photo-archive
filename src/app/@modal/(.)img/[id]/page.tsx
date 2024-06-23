import { Modal } from "./modal";
import FullPageImageView from "~/app/components/full-image-page";

export default function ImageModal({
  params: { id: imageId },
}: {
  params: { id: string };
}) {
  return (
    <Modal>
      <FullPageImageView id={imageId} />
    </Modal>
  );
}
