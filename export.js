const { selection } = require("scenegraph");
const application = require("application");
const fs = require("uxp").storage.localFileSystem;

const exportRenditions = async () => {
  const folder = await fs.getFolder();
  const file = await folder.createFile("rendition.png", { overwrite: true });

  const renditionSettings = [
    {
      node: selection.items[0],
      outputFile: file,
      type: application.RenditionType.PNG,
      scale: 2
    }
  ];

  try {
    const result = await application.createRenditions(renditionSettings);
    console.log(result);

    console.log(`PNG rendition saved at ${result[0].outputFile.nativePath}`);
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  exportRenditions
};
