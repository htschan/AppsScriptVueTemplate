# AppsScriptVueTemplate

A template for an AppsScript Vue project.

# Get started

## Initialize Google AppsScript project

To create an AppsScript use one of the following methods:

- Create an AppsScript project on https://script.google.com
- Open your Google Sheet and open 'Apps Script' in menu 'Extensions'

## Grasp Script-ID

In project settings you will find the Script-ID which you will fill into .clasp.json file.
The projectId will be the same as the Script-ID.


## Prepare local project

After you forked this template locally, execute

```npm install```

Then pull the Google AppsScript project to populate you local appsscript folder

```npm run gpull```

Then you can start develop.

## Automatic build and push

Open two terminal windows. In the first terminal enter

```npm run start```

In the second terminal enter

```npm run gstart```

This will automatically build and push your project to Google cloud.

