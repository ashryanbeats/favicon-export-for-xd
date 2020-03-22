const getMarkup = () => {
  return markup;
};

const markup = `
<style>
  .break {
      flex-wrap: wrap;
  }
  label.row > span {
      color: #8E8E8E;
      width: 20px;
      text-align: right;
      font-size: 9px;
  }
  label.row input {
      flex: 1 1 auto;
  }
  .show {
      display: block;
  }
  .hide {
      display: none;
  }
</style>
<form method="dialog">
    <footer><button id="ok" type="submit" uxp-variant="cta">Export Favicons</button></footer>
</form>
<p id="warning">This plugin requires you to select a rectangle in the document. Please select a rectangle.</p>
`;

module.exports = {
  getMarkup
};
