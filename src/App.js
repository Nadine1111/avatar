import './App.css';
import Avatar from './components/Avatar'

const simpsons = [
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2239-bart-simpson-.png",
    firstName: "Bart",
    lastName: "Simpson"
  },
  {
    image: "https://www.stickees.com/files/cartoon/the-simpsons/2248-homer-simpson-happy.png",
    firstName: "Homer",
    lastName: "Simpson"
  }
]


function App() {
  return (
    <div className="App">
      <h1>HELLO WORLD</h1>
      <div className='characters'>
        {
          simpsons.map((character, index) => (
            <Avatar
              name={character.firstName}
              image={character.image}
              lastName={character.lastName}
              key={index}
            />
          ))
        }
      </div>
    </div>
  );
}

export default App;
