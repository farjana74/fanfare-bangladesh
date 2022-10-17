import './App.css';

import {
  Route,
  Routes,
} from 'react-router';

// import ContactMain from './Pages/ContactMain/ContactMain';
import PrivacyPolicyMain from './Pages/PrivacyPolicy/PrivacyPolicyMain';
import TermOfUseMain from './Pages/TermOfUse/TermOfUseMain';

function App() {
  return (
    <div>


<Routes>
{/* <Route path="/" element={<ContactMain />} /> */}

<Route path="privacypolicy" element={<PrivacyPolicyMain/>} />
<Route path="termofuse" element={<TermOfUseMain />} />

      </Routes>




{/* <Routes>
        <Route path="/" element={<ContactMain />} />
        <Route path="/contact" element={<ContactMain />} />
        <Route path="/privacypolicy" element={<PrivacyPolicyMain/>} />
        <Route path="/termofuse" element={<TermOfUseMain />} />




   



       



      </Routes> */}
    </div>
  );
}

export default App;
