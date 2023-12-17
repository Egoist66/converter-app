import routes from "../../routes/routes.json"
import Header from "../Header/Header";
import NavBar from "../NavBar/NavBar";
import AppRoutes from "../AppRoutes/AppRoutes";
import Container from "../Container/Container";


const App = () => {


  return (


    <div className="app-wrapper">

      <Header>

        <NavBar routes={routes} />

      </Header>


      <main className="app-main-content">

        <section className="app-section-content">
          
          <Container classname="map-container contacts-container">

            <AppRoutes />
            
          </Container>

        </section>


      </main>

     

    </div>
  )
}

export default App;
