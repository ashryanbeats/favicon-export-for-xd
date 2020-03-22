const { selection } = require("scenegraph");
const application = require("application");
const fs = require("uxp").storage.localFileSystem;

const selectedItem = selection.items[0];
const renditionSizes = [32, 128, 152, 167, 180, 192, 196];

const exportRenditions = async () => {
  const folder = await fs.getFolder();

  const filePromises = renditionSizes.map(async size => {
    const file = await folder.createFile(`favicon-${size}.png`, {
      overwrite: true
    });
    return file;
  });

  const renditionFiles = await Promise.all(filePromises);

  const renditions = renditionFiles.map((file, i) => {
    return {
      node: selectedItem,
      outputFile: file,
      type: application.RenditionType.PNG,
      scale: renditionSizes[i] / selectedItem.width
    };
  });

  try {
    const result = await application.createRenditions(renditions);
    console.log(result);

    console.log(`PNG rendition saved at ${result[0].outputFile.nativePath}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  exportRenditions
};
