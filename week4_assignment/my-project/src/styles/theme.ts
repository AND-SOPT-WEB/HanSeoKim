const color = {
  white: "white",
  lightGray_1: "#B2C6E4",
  lightGray_2: "#B2C6E4",
  lightGray_3: "#707D90",
  gray: "#5A6473",
  darkGray_1: "#444B57",
  darkGray_2: "#2D323A",
  black: "black",
};

const text = {
  large: {
    fontSize: "24px",
    lineHeight: "24px",
  },
  medium: {
    fontSize: "20px",
    lineHeight: "17px",
  },
  small: {
    fontSize: "12px",
    lineHeight: "14px",
  },
};

export type ThemeType = {
  color: typeof color;
  text: typeof text;
};

export const Theme: ThemeType = {
  color,
  text,
};
