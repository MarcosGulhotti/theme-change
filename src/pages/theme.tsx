import { useParams } from "react-router-dom";
import { themes } from "../styles/theme";

const ThemePage = () => {
  const { company } = useParams();

  if (company === undefined) {
    throw new Error("Company not exists");
  }

  const pageTheme = themes.find((elm) => elm.company === company);

  if (pageTheme === undefined) {
    throw new Error("theme not exists");
  }

  return (
    <div style={JSON.parse(pageTheme.theme)}>
      <h1>Hello World</h1>
    </div>
  );
};

export default ThemePage;
