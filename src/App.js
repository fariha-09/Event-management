import logo from './logo.svg';
import './App.css';
import Header from './components/layout/Header';
import HeroSection from './components/layout/HeroSection';
import Events from './components/layout/Events';
import Footer from './components/layout/Footer';
import Signin from './components/layout/Signin';
import { Route,Routes } from 'react-router-dom';
import HomePage from './components/layout/HomePage';
import Signup from './components/layout/Signup';
import BecomeOrganizer from './components/layout/BecomeOrganizer';
import EventDetails from './components/layout/EventDetails';
import BookEventForm from './components/layout/BookEventForm';
import UserDashboard from './components/layout/UserDashboard';
import OrganizerDashboard from './components/layout/OrganizersDashboard';

function App() {
  return (
    <div className="App" >
      <Routes>
        <Route path='/' element={<HomePage/>}/>
 <Route path='/login' element={<Signin/>}/>
  <Route path='/signup' element={<Signup/>}/> 
  <Route path='/becomeorganizer' element={<BecomeOrganizer/>}/>
    <Route path="/events/:id" element={<EventDetails />} />
     <Route path="/book/:id" element={<BookEventForm />} />
     <Route path="/dashboard" element={<UserDashboard />} />
     <Route path="/organizer/dashboard" element={<OrganizerDashboard />} />
      </Routes>
      {/* <UserDashboard/> */}
      {/* <OrganizerDashboard/> */}

      {/* <EventDetails/> */}
 
 {/* <BecomeOrganizer/> */}
{/* <Header/> */}
{/* <HeroSection/>
<Events/>
<Footer/>  */}
{/* <Signin/> */}
 {/* <div className="relative w-full h-screen overflow-hidden">
<video autoPlay loop muted className="absolute top-0 left-0 w-full h-full object-cover z-0">
      <source src={bgImage} type='video/mp4'/>
     </video>
      <div className="relative z-10 flex items-center justify-center h-full text-white">
        <h1 className="text-4xl font-bold">Welcome to My Site</h1>
      </div>
      </div> */}
    </div>
  );
}

export default App;
