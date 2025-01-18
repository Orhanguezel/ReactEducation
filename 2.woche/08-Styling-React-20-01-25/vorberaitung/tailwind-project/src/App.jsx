import { Button } from "@/components/ui/button";
import './App.css'

function App() {
  return (
    <>
    <div>
      <div className="bg-blue-500 text-white p-4">
      <h1 className="text-2xl font-bold">Tailwind CSS</h1>
      <p className="mt-2">Bu bir Tailwind CSS örneğidir.</p>
    </div>
    <div className="p-4">
    <Button>Standart Button</Button>
    <Button variant="outline">Dış Çerçeve Button</Button>
    <Button variant="ghost">Şeffaf Button</Button>
  </div>
    </div>
  </>
  );
}

export default App;
