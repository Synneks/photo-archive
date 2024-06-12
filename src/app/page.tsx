import { index } from "drizzle-orm/mysql-core";
import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/40bcf956-b958-4e55-aba3-76ebe1cb409f-wvxjxw.jpg",
  "https://utfs.io/f/e0053249-2fed-4ab8-8683-f7254fa7b23e-qv0swx.jpg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {mockImages.map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello gallery in progress
    </main>
  );
}
