import ItemCard from "@/components/ItemCard";

export default async function Items() {
  const response = await fetch(process.env.API_BASE);
  const data = await response.json();

  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {data.map((item) => (
          <ItemCard key={item.ItemId} item={item} />
        ))}
      </div>
    </div>
  );
}
