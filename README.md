## See this project live:

[https://createmyresume.netlify.app](https://createmyresume.netlify.app)

## Sample (4 preloaded color schemes):

<img src="https://github.com/ashutoshkumar19/resume-builder/blob/master/samples/dummy-seagreen.jpg" width="350px" /> <img src="https://github.com/ashutoshkumar19/resume-builder/blob/master/samples/dummy-blue.jpg" width="350px" />
<img src="https://github.com/ashutoshkumar19/resume-builder/blob/master/samples/dummy-grey.jpg" width="350px" /> <img src="https://github.com/ashutoshkumar19/resume-builder/blob/master/samples/dummy-indigo.jpg" width="350px" />

## Steps to run this project:

In the project directory,

- First run : `npm install`
- Then run: `npm start`

- Runs the app in the development mode.
- Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To add more color schemes:

- Create `color-custom_color.scss` file inside `/src/styles/`
- Copy contents from any of the pre-existing color files and edit color values as per your liking.
- Then, import it into `/src/styles/App.scss` file by adding following line at the top of the file and comment any other enabled color file.
  `@import './color-custom_color.scss';`

## To save/download the resume:

While viewing it in browser, press `Ctrl + P` , select `Save as PDF` from the dropdown menu and then choose `Paper size` as `A4` inside `More Settings` dropdown toggle, then hit `Save` button.
