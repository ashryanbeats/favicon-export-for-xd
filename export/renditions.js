const { selection } = require("scenegraph");
const application = require("application");
const fs = require("uxp").storage.localFileSystem;
const { msg, styleClass, showMessage } = require("../ui/message");

const selectedItem = selection.items[0];
const renditionSizes = [16, 32, 96, 120, 128, 152, 167, 180, 192, 196];

const exportRenditions = async () => {
  const selectedDir = await fs.getFolder();
  const destDir = await getDestDir(selectedDir);
  const renditions = await getRenditionOpts(destDir);
  const messageEl = document.querySelector("#message");

  try {
    await application.createRenditions(renditions);

    showMessage(messageEl, {
      message: `${msg.opInfo.success} "${selectedDir.name}/${destDir.name}".`,
      styleClass: styleClass.success,
      withTimeout: true
    });
  } catch (error) {
    showMessage(messageEl, {
      message: msg.opInfo.error,
      styleClass: styleClass.error,
      withTimeout: true
    });

    console.log(error);
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
  const filePromises = renditionSizes.map(async size => {
    const file = await destDir.createFile(`favicon-${size}.png`, {
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

  return renditions;
};

module.exports = {
  exportRenditions,
  renditionSizes
};
