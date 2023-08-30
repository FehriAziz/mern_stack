import './App.css';

function App() {
const personCards = [{first_name:"jane",last_name:"Doe",age:45,hair_color:"black" },
  {first_name:"John",last_name:"Smith",age:88 , hair_color:"Brown"},
{first_name:"Millard",last_name:"Fillmore",age:50,hair_color:"Brown"},
{first_name:"Maria",last_name:"Smith",age:62,hair_color:"brown"}]
  return (
    <div className="App">
      {personCards.map((p,i)=>(
        <div key={i}>
          <h1>{p.first_name} , {p.last_name}</h1>
          <p>age :  {p.age}</p>
          <p>hair color :{p.hair_color}</p>
        </div> 
      ))}
      
    
    </div>
  );
}

export default App;
