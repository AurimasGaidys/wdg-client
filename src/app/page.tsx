import { LocationService } from "@/services/locationService";

export default function Home() {
  const locationService = LocationService.getInstance();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <h1 className="text-4xl font-bold text-center">Welcome to the game</h1>
        <button onClick={e => { alert("aa" + JSON.stringify(locationService.getLocation())) }} className="w-full p-2 my-2 border border-gray-300 rounded">Login</button>
      </div>
    </main>
  );
}
