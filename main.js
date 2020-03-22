const { isValidSelection } = require("./validate");
const { exportRenditions } = require("./export");
let panel;

function createUI() {
  const HTML = `<style>
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
        <form method="dialog" id="main">
            <div class="row break">
                <label class="row">
                    <span>↕︎</span>
                    <input type="number" uxp-quiet="true" id="txtV" value="10" placeholder="Height" />
                </label>
                <label class="row">
                    <span>↔︎</span>
                    <input type="number" uxp-quiet="true" id="txtH" value="10" placeholder="Width" />
                </label>
            </div>
            <footer><button id="ok" type="submit" uxp-variant="cta">Apply</button></footer>
        </form>
        <p id="warning">This plugin requires you to select a rectangle in the document. Please select a rectangle.</p>
        `;

  panel = document.createElement("div");
  panel.innerHTML = HTML;
  //panel.querySelector("form").addEventListener("submit", increaseRectangleSize);

  return panel;
}

function show(event) {
  if (!panel) event.node.appendChild(createUI());
}

function update() {
  if (!isValidSelection()) return;
}

module.exports = {
  panels: {
    faviconExport: {
      show,
      update
    }
  }
};
