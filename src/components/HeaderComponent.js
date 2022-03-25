function HeaderComponent(props) {
  return (
    <div>
      <header className="App-header">
        <h1>{props.number} Astronauts In Space Now</h1>
        <img src="astronauts.webp" className="Astronaut" alt="logo" />
      </header>
    </div>
  );
}

export default HeaderComponent;
