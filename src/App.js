import './App.css';

const App=()=>{
  return(
    <div>
     <Header/>
     <Footer/>
    </div>
    )
}

const Header =()=> {
  return (
    <div className="App">
      <ul>
        <li>это хэдер</li>
        <li>2</li>
      </ul>
     
    </div>
  );
}

const Footer=()=>{
  return(
    <div>
    text from new Footer
    </div>
    )
}

export default App;
