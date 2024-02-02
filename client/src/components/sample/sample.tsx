import { useContext } from 'react';
import { LanguagesContext } from '../../context/languages-context';

function Sample() {
  /** React hooks **/
  const { language, toggleLanguage } = useContext(LanguagesContext);

  return (
    <div>
      <div>Kary&apos;s Expermients</div>
      <div style={{ marginTop: 20 }}>Language: {language}</div>
      <button style={{ marginTop: 5 }} onClick={() => toggleLanguage(language)}>
        Toggle Language
      </button>
    </div>
  );
}

export default Sample;
