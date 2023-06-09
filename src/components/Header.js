import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTH_TOKEN } from '../constants';
import { useTranslation } from 'react-i18next';
import LanguageSelect from './LanguageSelect';

const Header = () => {

  const navigate = useNavigate();
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const { t } = useTranslation();

  return (
    <div className="flex pa1 justify-between nowrap orange">
      <div className="flex flex-fixed black">
        <Link to="/" className="no-underline black">
          <div className="fw7 mr1"> {t("title")} |</div>
        </Link>
        <Link to="/" className="ml1 no-underline black">
          {t("home")}
        </Link>
        {/* <div className="ml1">|</div>
        <Link
          to="/create"
          className="ml1 no-underline black"
        >
          {t("new")}
        </Link> */}


        <div className="ml1">|</div>
        {/* <Link
          to="/search"
          className="ml1 no-underline black"
        >
          {t("search")}
        </Link> */}
        <Link
          to="/logs"
          className="ml1 no-underline black"
        >
          {t("search")}
        </Link>
        {authToken && (
          <div className="flex">
            <div className="ml1">|</div>
            <Link
              to="/create"
              className="ml1 no-underline black"
            >
              {t("new")}
            </Link>

            {/* <Link
              to="/davinchi"
              className="ml1 no-underline black"
            >|
              davinchi
            </Link>
            <Link
              to="/images"
              className="ml1 no-underline black"
            >|
              images
            </Link> */}
            
            {/* <Link
              to="/openai"
              className='ml1 no-underline black'
            >|
              OpenAI
            </Link> */}
            <Link
              to="/servicios"
              className='ml1 no-underline black'
            >|
              {t("servicios")}
            </Link>

          </div>
        )}
      </div>

      <div className="flex flex-fixed">
        <div className="ml1 pointer black">
          {t('select_language')}
        </div>
        <div className="ml1 pointer black"> : </div>
        <div>
          <LanguageSelect className="ml1 pointer black" />
        </div>
      </div>

      <div className="flex flex-fixed">
        {authToken ? (
          <div
            className="ml1 pointer black"
            onClick={() => {
              localStorage.removeItem(AUTH_TOKEN);
              navigate(`/`);
            }}
          >
            <button className='pinterest-btn pinterest-btn--black'>
              Logout</button>
          </div>
        ) : (
          <Link
            to="/login"
            className="ml1 no-underline black"
          >
            <button className='pinterest-btn pinterest-btn--black'>
              Login</button>
          </Link>
        )}

      </div>
    </div>
  );
};

export default Header;