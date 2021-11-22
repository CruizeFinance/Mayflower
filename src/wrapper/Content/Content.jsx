import Routes from "../../Routes/Routes";
import { styles } from "../../styles/styles";
import "./Content.scss";

const Content = () => {
  const classes = styles();

  return (
    <main className={`main`}>
      <div className={`content ${classes.background}`}>
        <Routes />
      </div>
    </main>
  );
};

export default Content;
