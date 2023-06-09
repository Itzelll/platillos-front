import './../styles/App.css';
import LinkList from './LinkList';
import CreateLink from './CreateLink';
import Header from './Header';
import { Route, Routes } from 'react-router-dom';
import Login from './Login';
import Textdavinci003 from './text-davinci-003';
import OpenAI from './OpenAI';
import ImageGeneration from './create-image'
import Servicios from './servicios';
import Search  from './Search';
import ConsultLogs from "./ConsultLogs"
// import { useTranslation } from 'react-i18next';

function App() {

  // const { t } = useTranslation();

  return (
    <div className="center w85">
      <Header />
      {/* {t("hello_welcome_to_react")} */}
      <div className="ph3 pv1 background-gray">
        <Routes>
          <Route path="/" element={<LinkList />} />
          <Route
            path="/create"
            element={<CreateLink />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/davinchi" element={<Textdavinci003 />} />          
          <Route path="/search" element={<Search />} />
          <Route path="/images" element={<ImageGeneration />} />
          <Route path="/openai" element={<OpenAI />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/logs" element={<ConsultLogs />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

//Comment this  