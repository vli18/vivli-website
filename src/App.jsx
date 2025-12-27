import './App.css';
import OrchidPortfolio from "./components/OrchidPortfolio";
import ASCIIShadedOrchidField from './components/ASCIIShadedOrchid';

export default function App() {
  return (
    <OrchidPortfolio />
    // <ASCIIShadedOrchidField />
  );
}

// import './App.css';
// import { Routes, Route } from 'react-router-dom';
// import OrchidHome from "./components/OrchidHome";
// import ProjectPage from "./components/ProjectPage";

// export default function App() {
//   return (
//     <Routes>
//       <Route path="/" element={<OrchidHome />} />
//       <Route path="/portfolio/:slug" element={<ProjectPage />} />
//     </Routes>
//   );
// }
