import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import HeaderImage from './assets/g-dino.png';
import Header from './components/Header';
import Footer from './components/Footer';
import JobDetails from './components/JobDetails';
import InputForm from './components/InputForm';

class App extends React.Component{
    render(){
      return (
        <div className="App">
            <main>
                <Header image={HeaderImage}/>
                <JobDetails/>
                <InputForm/>
                <Footer/>
            </main>
        </div>
      );
    }
  }

ReactDOM.render(<App />, document.getElementById('root'));
