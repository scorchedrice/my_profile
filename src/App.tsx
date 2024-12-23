import './App.css'
import { SECTIONS } from "./shared/consts/pageConsts.ts";
import Navigator from "./widgets/Navigator.tsx";
import usePageTransfer from "./feature/hooks/usePageTransfer.ts";

function App() {
  const { containerRef } = usePageTransfer();

  return (
    <div className="fixed inset-0 overflow-hidden">
      <Navigator />
      <div
        ref={containerRef}
        className="h-full transition-transform duration-1000 ease-in-out"
      >
        {SECTIONS.map(({ id, component: Component }) => (
          <div key={id} className="h-screen">
            <Component />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;