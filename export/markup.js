const clipboard = require("clipboard");
const { msg } = require("../ui/message");

// TODO: combine with const from renditions.js
// const renditionSizes = {
//   standard: {
//     sizes: [16, 32, 96, 128, 192],
//     markup: `<link rel="icon" type="image/png" href="favicon-16x16.png" sizes="16x16">`
//   },
//   ios: [120, 152, 167, 180],
//   android: [196]
// };

// TODO: Add Windows support
// A browserconfig.xml file in the site's root directory
// <?xml version="1.0" encoding="utf-8"?>
// <browserconfig>
//   <msapplication>
//     <tile>
//       <square70x70logo src="mstile-70x70.png"/>
//       <square150x150logo src="mstile-270x270.png"/>
//       <square310x310logo src="mstile-310x310.png"/>
//       <wide310x150logo src="mstile-310x150.png"/>
//       <TileColor>#2b5797</TileColor>
//     </tile>
//   </msapplication>
// </browserconfig>

// <!-- Windows 8 IE 10-->
// <meta name="msapplication-TileColor" content="#FFFFFF">
// <meta name="msapplication-TileImage" content="favicon-144.png">

// <!— Windows 8.1 + IE11 and above —>
// <meta name="msapplication-config" content="/browserconfig.xml" />

const markup = `
<!-- Standard -->
<link rel="icon" type="image/png" href="favicon-16.png" sizes="16x16">  
<link rel="icon" type="image/png" href="favicon-32.png" sizes="32x32">  
<link rel="icon" type="image/png" href="favicon-96.png" sizes="96x96">  
<link rel="icon" type="image/png" href="favicon-128.png" sizes="128x128">
<link rel="icon" type="image/png" href="favicon-192.png" sizes="192x192">

<!-- iOS -->
<link rel="apple-touch-icon" href="favicon-120.png"> <!-- Older iPhones -->  
<link rel="apple-touch-icon" sizes="152x152" href="favicon-152.png"> <!-- iPad Retina --> 
<link rel="apple-touch-icon" sizes="167x167" href="favicon-167.png"> <!-- iPad Pro -->
<link rel="apple-touch-icon" sizes="180x180" href="favicon-180.png"> <!-- iPhone 6 Plus -->

<!-- Android -->
<link rel="shortcut icon" sizes="196x196" href=“favicon-196.png">
`;

const exportMarkup = () => {
  clipboard.copyText(markup);

  return { message: msg.opInfo.clipboard };
};

module.exports = {
  exportMarkup
};
