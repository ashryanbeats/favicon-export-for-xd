const { selection, Color } = require("scenegraph");
const application = require("application");
const fs = require("uxp").storage.localFileSystem;
const { msg, styleClass } = require("../ui/message");

const renditionSizes = [
  { size: 16, platformName: "Web" },
  { size: 32, platformName: "Web" },
  { size: 96, platformName: "Web" },
  { size: 128, platformName: "Web" },
  { size: 192, platformName: "Web" },
  { size: 120, platformName: "iOS" },
  { size: 152, platformName: "iOS" },
  { size: 167, platformName: "iOS" },
  { size: 180, platformName: "iOS" },
  { size: 196, platformName: "Android" }
];

const exportRenditions = async () => {
  const selectedDir = await fs.getFolder();
  const destDir = await getDestDir(selectedDir);
  const renditions = await getRenditionOpts(destDir);

  try {
    await application.createRenditions(renditions);

    const msgOpts = {
      message: msg.opInfo.success,
      styleClass: styleClass.success,
      withTimeout: true
    };

    return msgOpts;
  } catch (error) {
    const msgOpts = {
      message: msg.opInfo.error,
      styleClass: styleClass.error,
      withTimeout: true
    };

    console.log(error);
    return msgOpts;
  }
};

const getDestDir = async selectedDir => {
  const destDirSlug = "Favicons";

  const entries = await selectedDir.getEntries();
  const faviconDirs = entries
    .filter(entry => entry.isFolder && entry.name.startsWith(destDirSlug))
    .map(entry => entry.name);

  const destDirName = createDestDirName(faviconDirs, destDirSlug);
  const destDir = await selectedDir.createFolder(destDirName);

  return destDir;
};

const createDestDirName = (faviconDirs, destDirSlug) => {
  let destDirName;

  if (!faviconDirs.length || !faviconDirs.includes(destDirSlug)) {
    destDirName = destDirSlug;
  } else {
    let nameCreated = false;
    let count = 1;

    while (!nameCreated) {
      const subDirName = `${destDirSlug} ${count}`;

      if (!faviconDirs.includes(subDirName)) {
        nameCreated = true;
        destDirName = subDirName;
      } else {
        count++;
      }
    }
  }

  return destDirName;
};

const getRenditionOpts = async destDir => {
  const filePromises = renditionSizes.map(async platform => {
    const file = await destDir.createFile(`favicon-${platform.size}.png`, {
      overwrite: true
    });
    return file;
  });

  const renditionFiles = await Promise.all(filePromises);

  const renditions = renditionFiles.map((file, i) => {
    const selectedItem = selection.items[0];

    const options = {
      node: selectedItem,
      outputFile: file,
      type: application.RenditionType.PNG,
      scale: renditionSizes[i].size / selectedItem.width
    };

    if (renditionSizes[i].platformName === "iOS") {
      options.background = new Color("White");
    } else {
      options.background = selectedItem.fill;
    }

    return options;
  });

  return renditions;
};

module.exports = {
  exportRenditions,
  renditionSizes
};
