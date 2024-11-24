import { getPlant } from "@/utils/get-plants";
import { Link } from "next-view-transitions";


export default async function () {
  const plants = await getPlant();

  if (plants.length === 0) null;

  return (
    <div className="flex flex-row justify-center gap-10 flex-wrap">
      {plants.map((plant, index) => (
        <Link href={`/plants/${plant.slug}`} key={index}>
          <div className="Card flex flex-col gap-4 rounded-xl text-pretty  max-w-60 hover:rotate-2 ease-in-out duration-200">
            <img
              src={plant.image}
              className="text-violet-50 rounded-xl"
              alt={plant.title}
            />
          </div>
        </Link>

      ))}
    </div>
  );
}
