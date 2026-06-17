function App() {
  const name = "Birds";
  let num1 = 32;
  let num2 = 12;
  let num = num1 + num2;
  let age = 25;
  let userage = 26;

  const warn = () => {
    alert("warning⚠️");
  };

  return (
    <>
      <h2 style={{ backgroundColor: "aqua", color: "blue" }}>Page for {name}</h2>
      <div style={{ display: "flex" }}>
        <img
          src="https://i.pinimg.com/736x/c2/20/d8/c220d8e0fe94c1e914ac84bef88fba44.jpg"
          alt="Birds"
          width="200"
          height="200"
        />
        <p className="Avian" style={{ backgroundColor: "lightpink" }}>
          Many species of birds are economically important as food for human consumption and raw material in manufacturing,
          with domesticated and undomesticated birds being important sources of eggs, meat, and feathers.
          Songbirds, parrots, and other species are popular as pets. Guano (bird excrement) is harvested for use as a fertiliser.
          Birds figure throughout human culture. About 120 to 130 species have become extinct due to human activity since the 17th century, and hundreds more before then.
          Human activity threatens about <b>{num}</b> bird species with extinction, though efforts are underway to protect them. Recreational birdwatching is an important part of the ecotourism industry.
        </p>
      </div>
      {userage > age ? <p>User Logged In</p> : <p>Invalid User</p>}
      <button onDoubleClick={warn} style={{ width: "fit-content" }}>
        Danger
      </button>
    </>
  );
}
export default App;