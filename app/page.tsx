import Plants from "./components/Plants";



export default async function Home() {


  return (
    <div className="flex flex-col items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <h1 className="font-black text-black text-7xl">₊˚⊹౨ PLANT STORE ৎ ₊˚⊹</h1>
      <Plants></Plants>
    </div>
  );
}
