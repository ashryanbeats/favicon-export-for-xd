# Favicon Export for XD

## Todos

### Design

1. ~User experiences consistent UI colors throughout~
1. ~User can recognize the plugin by its icon~
1. ⭐︎ User can see export sizes in a 2-column layout

### Validation

1. ~User gets an error message if selection isn't a square~
1. ~User gets an error messge if selection isn't an acceptable type~
1. ~User is unable to export while validation is failing~

### Rendition Export

1. ~User can see what favicon sizes will be exported~
1. ~All known favicon sizes are exported to a user-selected location~
1. ~User gets a top-level folder to contain all the renditions~
1. ~User gets a success or error message on export~
1. ~User can escape from file picker flow without plugin errors~
1. ~User doesn't need to dismiss success and error messages~
1. ~User gets apple-touch-icons with an opaque background (if the background is originally transparent)~
1. ? User can select/deselect sizes to export

### Markup Export

1. ~User can copy favicon markup to clipboard~
1. User can export favicon markup to file
1. User can reuse last-used settings without configuration
1. User can customize favicon markup with a custom path

### Dev

1. UI is free of memory leaks
1. Error logs can be retrieved from file system
1. ~Messages are handled after all operations are complete~
1. ⭐︎ Validate is moved to own dir with index.js and validate.js (index handles showMessage calls)

### Submission

[Submission checklist](https://adobexdplatform.com/plugin-docs/distribution/submission-checklist.html)

### Open source

1. Developer can see license
1. Editor config prevents issues with pull requests
1. Developer can discover on xd-awesome
