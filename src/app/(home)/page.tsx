import { MainProducts } from "app/components/home/MainProducts";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "👨‍💻 Future Store",
  description: "welcome to the future shop from other mainstrem",
  keywords: ["eccomerce", "future", "shop"]
}

export default function Home() {
  return (
    <main>
      <MainProducts />
    </main>
  );
}
