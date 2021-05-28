import React from "react";
import "./App.css";
import BuildParts from "./Components/BuildParts";
import Titulo from "./Components/Titulo";
import ExampleBuilds from "./Components/ExampleBuild";
import Autocomplete from "./Components/Autocomplete";
import Navbar from "./Components/NAVBAR/Navbar";
function App() {
  return (
    <div>
      <div className="App">
        <Navbar></Navbar>
      </div>
      <br></br>
      <br></br>
      <Titulo></Titulo>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Autocomplete
        suggestions={["Oranges", "Apples", "Banana", "Kiwi", "Mango"]}
      />
      <BuildParts></BuildParts>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
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
