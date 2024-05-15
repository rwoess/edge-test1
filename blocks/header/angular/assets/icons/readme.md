# Managing icons

Icons are being managed by Icomoon app. Additionaly, for future changes, all icons are available in `./SVG` folder.

## Adding icons

1. Prepare new icons. Make sure the names follow 'kebab-case' style, ex. `pre-flight-check.svg`
2. Open Icomoon app https://icomoon.io/app/
3. Open menu -> Manage project
4. Remove default project, if any exists
5. Import LOT project by selecting `./selection.json` file
6. Load project
7. Drag and drop new icons into the set, update settings for icons (name, remove color, etc.)
8. Click `Generate SVG & More`

## Updating project with new icons

1. In downloaded bundle there is new `symbol-defs.svg` and `selection.json` file. Those two files **HAVE TO** be updated in the project after new icons are generated.
2. Add new icons into `./SVG` folder as well, for future reference.
