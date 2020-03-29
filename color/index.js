const assets = require("assets");
const { Color } = require("scenegraph");

const getAssetColors = () => {
  const colors = assets.colors.get();
  return colors;
};

const getColorList = () => {
  const assetColors = getAssetColors();

  const extraOptions = [
    {
      name: "White",
      color: new Color("White"),
      extra: true,
      default: true
    },
    {
      name: "Black",
      color: new Color("Black"),
      extra: true
    },
    {
      name: "Transparent",
      color: null,
      extra: true
    }
    // {
    //   name: "Custom",
    //   color: null
    // }
  ];

  const colorList = assetColors.concat(extraOptions);
  return colorList;
};

const getSelectedColor = () => {
  const select = document.querySelector("#color-select");
  const selectedItem = select.selectedOptions[0];
  const selectedValue = selectedItem.value;

  return new Color(selectedValue);
};

module.exports = {
  getColorList,
  getSelectedColor
};
