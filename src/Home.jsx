import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <h1>
            devendra
        </h1>
      <div>
        
         <Link to = '/singup' >
            <button>SingUP</button>
         </Link> 
         <Link to = '/login' >
            <button>Login</button>
         </Link> 
      </div>
    </div>
  )
}

export default Home
