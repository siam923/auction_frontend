import ItemCard from "@/components/ItemCard";
import Link from "next/link";

export default async function Items() {
  const response = await fetch(process.env.API_BASE);
  const data = await response.json();

  return (
    <div className="container mx-auto px-4">
      <div className="mb-4">
        <Link href="/">
          <span className="text-blue-500 hover:underline">Home</span>
        </Link>
        <span className="mx-2"> &gt; </span>
        <span className="text-gray-500">Items</span>
      </div>
      <h1 className="text-3xl font-semibold mb-6">Items</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <ItemCard key={item.ItemId} item={item} />
        ))}
      </div>
    </div>
  );
}
