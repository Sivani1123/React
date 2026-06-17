function Hello() {
  return (
    <p style={{ textAlign: "left" }}>Hello</p>
  );
}

function Galaxy(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <h4>Name: {props.name}</h4>
      <h4>Process: {props.process}</h4>
    </div>
  );
}

function Star() { 
  return (
    <Galaxy 
      name="Sun" 
      process="Nuclear Fission and Fusion" 
    />
  );
}
function Summary(props)
{
    return(
       <p  style={{textAlign:"justify"}}>What it is: The ability to fully focus, understand, and respond thoughtfully during conversations. It’s essential for teamwork, leadership, and customer relations.
Why it matters: Active {props.job}listeners build {props.company}stronger relationships and minimize errors caused by miscommunication.
How to show it on your resume.
“Facilitated weekly {props.skill1}team debriefs by {props.skill2}actively listening to concerns and implementing process improvements.”
“Built client trust through active listening, improving satisfaction scores by 20%.”
Tip: Demonstrate these skills through teamwork or leadership achievements, not just in the skills li </p>
    );
}
function Animator(){
    return(
        <Summary job="Animator"
        company="google"
        skill1="unreal engine"
        skill2="blender"> </Summary>
    );
}
function Animal() {
  return (
    <>
      <h1>Animals</h1>
      <div style={{ display: "flex", gap: "20px" }}>
        <p style={{ textAlign: "justify" }}>
          In 1924, Hidesaburō Ueno, an agricultural science professor at Tokyo Imperial University, adopted a golden-brown Akita puppy and named him Hachi. The two formed an incredibly tight bond. Every morning, Hachikō would walk with Professor Ueno to the Shibuya train station. When the workday ended, the devoted dog would return to the station right on time to greet his master as he got off the train.
        </p>
        <img
          style={{ width: 100 }}
          src="https://cdn.shopify.com/s/files/1/0040/8997/0777/files/ef10ba346a7b47433820509846f8bff2_1024x1024.jpg?v=1697758720"
          alt="Rabbit"
          width="350"
          height="250"
        />
      </div>
      <Hello />
      <Star />
      <Animator> </Animator>
    </>
  );
}

export default Animal;