import { getPlant } from "@/utils/get-plants";

interface PlantProps {
  params: { slug: string };
}

async function getPlantBySlug(slug: string) {
  const plants = await getPlant();
  return plants.find((p) => p.slug === slug);
}

export async function generateStaticParams() {
  const plants = await getPlant();

  return plants.map((plant) => ({
    slug: plant.slug,
  }));
}

export default async function PlantPage({ params }: PlantProps) {
  const plant = await getPlantBySlug(params.slug);

  if (!plant) {
    return <div>Plant not found</div>; // Manejo de errores
  }

  const { title, description, price, image } = plant;

  return (
    <div className="flex flex-row justify-center items-center gap-10 p-10 mx-auto">
      
      <img src={image} className="max-w-60 rounded-xl" alt={title} />
      <div className="flex flex-col gap-5 max-w-xl">
        <h1 className="text-3xl">{title}</h1>
        <p>{description}</p>
        <p className="text-violet-400 font-semibold ">Price: ${price}</p>
      </div>
    </div>
  );
}
