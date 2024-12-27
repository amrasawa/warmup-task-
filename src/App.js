import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function TraineesTable({trainees}){
  const [filterText, setFilterText]=useState('');
  return(
    <div className='filterableTraineesTable'>
      <SearchBar filterText={filterText} onFilterTextChange={setFilterText}/>
      <TraineeTable trainees={trainees} filterText={filterText} />
      <Button/>
    </div>
  )
}

function SearchBar({filterText, onFilterTextChange}){
  return (
    <form>
      <input className="search-bar" type="text" value={filterText} placeholder='Find members' onChange={(e)=> onFilterTextChange(e.target.value)}/>
    </form>
  )
}

function TraineeRow({trainee}){
  
  return(
    <tr className="trainee">
      <th><svg width="15px"xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512l388.6 0c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304l-91.4 0z"/></svg></th>
      <th>{trainee.name}</th>
      <th><input type="checkbox"/></th>
    </tr>
  )
}

function TraineeTable({trainees, filterText}){
  const rows=[];
  trainees.forEach(trainee => {
    if(trainee.name.toLowerCase().indexOf(filterText.toLowerCase())===-1)
      return;
    rows.push(<TraineeRow trainee={trainee} key={trainee.name}/>);
  });
  return (
    <div>
      <table className="trainees-table">
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  )
}

function Button(){
  return (
    <div className='button-section'>
      <button className='button'>Cancel</button>
      <button className='button save'>SAVE</button>
    </div>
  )
}

const TRAINEES = [
  { id: 1, name: "Alice Johnson", course: "Web Development", progress: "75%" },
  { id: 2, name: "Bob Smith", course: "Data Science", progress: "60%" },
  { id: 3, name: "Charlie Brown", course: "Cybersecurity", progress: "90%" },
  { id: 4, name: "Diana Prince", course: "AI & ML", progress: "50%" },
  { id: 5, name: "Edward Elric", course: "Robotics", progress: "80%" }
];

function App(){
  return <TraineesTable trainees={TRAINEES}/>
}

export default App;
