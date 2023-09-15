
import { useState, useEffect } from 'react'
import './App.css'
import { Routes, Route, Link, useParams } from 'react-router-dom'
import ShowSwapi from './components/ShowSwapi'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'


function App() {
  const baseUrl = "https://swapi.dev/api"
  const [swapi, setSwapi] = useState([])
  const [id, setID] = useState()
  const [his_name, setName] = useState()
  const navigate = useNavigate()
  // const axiosAPI = (e) => {
  useEffect(() => {
  axios.get("https://swapi.dev/api/")
    .then(response => {
      setSwapi(Object.keys(response.data))
      console.log(Object.keys(response.data))
      console.log(response.data)
    })
    .catch(error => navigate("/error"))
  }, [])

  const SearchForSwapi = (e) => {
    e.preventDefault();
    navigate(`/${his_name}/${id}`)
  }

  return (
    <>
      <form onSubmit={SearchForSwapi}>
        <div className='d-flex justify-content-center align-items-center'>
          Search for:<select name="select" id="i" onChange={(e) => setName(e.target.value)}>
            <option>---select---</option>
            {swapi.map((s, i) => <option key={i} value={s}>{s}</option>)}
          </select>
          ID: <input type="number" name="" id="" onChange={(e) => setID(e.target.value)} />
        </div>
        <button>Search</button>
      </form>
      {/* <Link to='/'></Link> */}
      <Link to='/:his_name/:id'></Link>
      <Link to='/error'></Link>

      {/* <FormComponent/> */}
      <Routes>
        {/* <Route path='/' element={<FormComponent/>}/> */}
        <Route path='/planets/:id' element={<ShowSwapi baseUrl={baseUrl}/>} />
        <Route path='/error' element={<ShowSwapi baseUrl={baseUrl}/>} />
      </Routes>

    </>
  )
}

export default App
