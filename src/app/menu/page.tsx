import CategoryCarousel from "@/components/CategoryCarousel";
import Sidebar from "@/components/Sidebar";

export default function Menu() {
  return (
    <>
      <Sidebar />
      <main className="ml-[250px] overflow-y-scroll	h-[80vh] scrollbar-hide">
        <CategoryCarousel />
      </main>
    </>
  );
}
