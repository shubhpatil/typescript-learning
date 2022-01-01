type Theme = {
  backgroundColor: string;
  color: string;
};

type Themes = {
  [key: string]: Theme;
};

const styles: Themes = {
  light: {
    backgroundColor: "blue",
    color: "red",
  },
  dark: {
    backgroundColor: "purple",
    color: "#555",
  },
};
