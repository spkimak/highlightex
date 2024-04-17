browser.menus.create({
  id: "latex-image",
  title: "Create Latex Image",
  contexts: ["selection"],
});

browser.menus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "latex-image") {
        console.log(info.selectionText)
        console.log('https://latex.codecogs.com/png.image?\\dpi{200}' + info.selectionText)
        fetch(`https://latex.codecogs.com/png.image?\\dpi{200}` + info.selectionText)
            .then((response) => response.arrayBuffer())
            .then((buffer) => browser.clipboard.setImageData(buffer, "png"));
  }
});
