## Sample (4 preloaded color schemes):
<img src="https://github.com/ashutoshkumar19/resume-builder/blob/master/samples/dummy-seagreen.jpg" width="400px" /> 
<img src="https://github.com/ashutoshkumar19/resume-builder/blob/master/samples/dummy-blue.jpg" width="400px" /> 
<img src="https://github.com/ashutoshkumar19/resume-builder/blob/master/samples/dummy-grey.jpg" width="400px" /> 
<img src="https://github.com/ashutoshkumar19/resume-builder/blob/master/samples/dummy-indigo.jpg" width="400px" /> 

## Steps to run this project:

In the project directory,
* First run : `npm install` 
* Then run: `npm start`

* Runs the app in the development mode.
* Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## To select color-schems:

In `/src/styles/App.scss/` choose your desired color-*.scss file by uncommenting it commenting rest of the color schemes.

## To add more color schemes:

* Create `color-custom_color.scss` file inside `/src/styles/` 
* Copy contents from any of the pre-existing color files and edit color values as per your liking.
* Then, import it into `/src/styles/App.scss` file by adding following line at the top of the file and comment any other enabled color file.
`@import './color-custom_color.scss';`

## To edit your data:

In `/src/data.json/` , edit the values corresponding to predefined keys.

## To add your photo:
To add your photo, you have two options: 
* Simply copy and paste your photo inside `/src/images/` directory and rename it to `photo.jpg`.

* Put the url of your online photo into `data.json` file as follows:  `"contact": {"photourl": "https://anysite/myphoto.jpg"}`

* Note: If both `photo.jpg` is in `/src/images/` directory and `photoUrl` is also specified in `data.json`, then `photoUrl` will get preference and it will be shown.

## To save/download the resume:

While viewing it in browser, press `Ctrl + P` , select `Save as PDF` from the dropdown menu and then choose `Paper size` as `A4`  inside `More Settings` dropdown toggle, then hit `Save` button.

