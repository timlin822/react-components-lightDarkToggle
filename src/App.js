import useTheme from 'hooks/useTheme';

import './App.css';

function App() {
  const {theme,toggleHandler}=useTheme();

  return (
    <section className={theme==="Light"?"section-padding bg-height light":"section-padding bg-height dark"}>
      <div className="container container-padding">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quas asperiores quaerat libero earum repellat rerum ad! Excepturi sunt quasi eum?
      </div>
      <button className={theme==="Light"?"btn btn-light":"btn btn-dark"} onClick={()=>toggleHandler()}>
        <div className={theme==="Light"?"circle left-circle left-circle-light":"circle left-circle left-circle-dark"}></div>
        <div className={theme==="Light"?"circle right-circle right-circle-light":"circle right-circle right-circle-dark"}></div>
      </button>
    </section>
  );
}

export default App;