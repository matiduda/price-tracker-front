import { Global } from '@emotion/react'

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
    `}
  />
)

export default Fonts