import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/Home.jsx';
import About from '../pages/About.jsx';
import Play from '../pages/Play';
import HighScores from '../pages/HighScores';
import NotFound from '../pages/NotFound';
import Layout from '../container/Layout.jsx';

import '../styles/App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
					<Routes>
						<Route exact path="/home" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            {/* <Route exact path="/play" element={<Play />} />
            <Route exact path="/highscores" element={<HighScores />} />
            <Route exact path="/notfound" element={<NotFound />} /> */}
					</Routes>
        </Layout>
		  </BrowserRouter>
    </div>
  );
}

export default App;
