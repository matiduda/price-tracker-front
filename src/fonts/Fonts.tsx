import { Global } from "@emotion/react";

const Fonts = () => (
  <Global
    styles={`
      /* custom logo font */
      @font-face {
        font-family: 'Heading Font Name';
        font-style: normal;
        font-weight: 700;
        font-display: block;
        src: url('./TTMoons-Italic.woff') format('woff');
      }
      @font-face {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-display: block;
        src: url('./NotoSans-Medium.woff') format('woff');
      }
      @font-face {
        font-family: 'Noto Sans';
        font-style: italic, oblique;
        font-weight: 400;
        font-display: block;
        src: url('./NotoSans-MediumItalic.woff') format('woff');
      }
      @font-face {
        font-family: 'Noto Sans';
        font-weight: bold;
        font-display: block;
        src: url('./NotoSans-SemiBold.woff') format('woff');
      }
    `}
  />
);

export default Fonts;
