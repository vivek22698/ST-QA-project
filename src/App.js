import {teamData} from './constants'

export default function App() {

  return (
    <div className = "container">
<div className = "Header">
<h1>JARVIS</h1>
</div>
<div className="Table">
  <h3>Team list:</h3>
<table>
  <tr>
  <th>S No</th>
    <th>Name</th>
    <th>Github Id</th>
    <th>Discord Id</th>
  </tr>
  
{teamData?.map((item,index)=>{
return (
  <>
  <tr>
  <td>{item.sNo}</td><td>{item.name}</td><td>{item.githubId}</td><td>{item.discordId}</td>
  </tr></>
)
})}
</table>
</div>
    </div>
  );
}

