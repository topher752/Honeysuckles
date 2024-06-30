import PhotoGallery from "@/components/PhotoGallery";
import { WeddingPhotos } from "@/components/PhotoObjects";

export default function WeddingsPage() {
  return <PhotoGallery images={WeddingPhotos} />;
}
