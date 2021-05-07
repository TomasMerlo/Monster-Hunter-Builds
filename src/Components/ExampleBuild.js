function ExampleBuilds(props) {
  
  return (
    <>
      <div id="card">
        <img
          src={require(`../Images/${props.setImage}.png`).default}
          id="kushala"
          alt="imagen"
        />
        <div id="container">
          <h4>
            <b>{props.setName}</b>
          </h4>
          <ul>
            <li>{props.selectedWeapon}</li>
            <li>{props.selectedHelm}</li>
            <li>{props.selectedChest}</li>
            <li>{props.selectedArms}</li>
            <li>{props.selectedWaist}</li>
            <li>{props.selectedLegs}</li>
          </ul>
        </div>
      </div>
    </>
  );
}
export default ExampleBuilds;
