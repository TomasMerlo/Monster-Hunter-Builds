import "./App.css";
import BuildParts from "./Components/BuildParts";
import Titulo from "./Components/Titulo";
import ExampleBuilds from "./Components/ExampleBuild";
import Autocomplete from "./Components/Autocomplete";
function App() {
  return (
    <div>
      <Titulo></Titulo>
      <BuildParts></BuildParts>
      <br></br>
      <br></br>
      <div id="filaejemplos">
        <ExampleBuilds
          setImage="build 1"
          setName="Kushala Set"
          selectedWeapon="Kushala Katana"
          selectedHelm="Anjath Helm"
          selectedChest="Nergigante Chest"
          selectedArms="Kushala Greaves"
          selectedWaist="Rathalos Waist"
          selectedLegs="Kushala Legs"
        />
        <ExampleBuilds
          setImage="build 2"
          setName="Anti Kirin Set"
          selectedWeapon="Master Spear"
          selectedHelm="Kirin Helm"
          selectedChest="Legiana Chest"
          selectedArms="Kushala Greaves"
          selectedWaist="Rathalos Waist"
          selectedLegs="Kushala Legs"
        />
        <ExampleBuilds
          setImage="build 3"
          setName="Black Fire Set"
          selectedWeapon="Nergigante Hammer"
          selectedHelm="Guild Helm"
          selectedChest="Rathalos Chest"
          selectedArms="Es Greaves"
          selectedWaist="Kirin Waist"
          selectedLegs="Xenoshiva Legs"
        />
        <ExampleBuilds
          setImage="buikd 4"
          setName="Es Set"
          selectedWeapon="Tsugi Bow"
          selectedHelm="Lavasioth Helm"
          selectedChest="Rathian Chest"
          selectedArms="Legiana Greaves"
          selectedWaist="Nergigante Waist"
          selectedLegs="Rathalos Legs"
        />
      </div>
    </div>
  );
}

export default App;
