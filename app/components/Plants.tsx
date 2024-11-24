import { getPlant } from "@/utils/get-plants";
import Link from "next/link";

export default async function () {
  const plants = await getPlant();

  if (plants.length === 0) null;

  return (
    <div className="flex flex-row gap-10 flex-wrap">
      {plants.map((plant, index) => (
        <Link href={`/plants/${plant.slug}`} key={index}>
          <div className="Card flex flex-col gap-4 p-2 rounded-xl text-pretty bg-violet-700 max-w-60 min-h-96 hover:rotate-2 ease-in-out duration-200">
            <img
              src={plant.image}
              className="text-violet-50 rounded-xl"
              alt={plant.title}
            />
            <h2 className="font-medium">{plant.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  );
}
