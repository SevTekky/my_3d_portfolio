(https://user-images.githubusercontent.com/81267007/229323421-806f2f8f-2bb7-4087-a9a7-a7090770e028.png)

This project was built using Node.js, JavaScript React, and HTML, and features stunning 3D models and geometries created with ThreeJS and React Three Fiber. While the website could have included more 3D objects and figures, some mobile browsers may have had difficulty loading pages that take up too much memory. The website features icons displaying my skills and programming languages, which were originally intended to be 3D spheres that users could interact with by spinning and moving them around. However, this feature was disabled due to performance concerns, and the icons were replaced with 2D versions that move slightly. Despite these limitations, the website is optimized to ensure that it performs well and looks great on all devices.

This project also features icons displaying my skills and programming languages, which were originally intended to be 3D spheres that users could interact with by spinning and moving them around. While this functionality is currently disabled due to performance concerns, it is worth noting that users can uncomment the relevant code in the Tech.jsx file and replace the existing code to re-enable this feature if desired. Despite this limitation, the website is optimized to perform well and look great on all devices.

In order to save myself the hassle of re-routing every icon that i wanted to replace with an imported icon; what i did was, i imported the 'png' file i wanted to use such as 'python.png', then i replaced the name of whatever icon's place i wanted the python png to take. The way i changed it was: i renamed the imported python.png file to, let's say for example, 'docker.png' (which it was i actually did), and i would change the docker.png to something like 'dockerr.png'. this way i know the dockerr is an unnatural file that i know i changed, and the newly imported python.png file s renamed to docker.png 
This way, i saved a lot of time re-routing file paths and from deleting old imports and importing new imports in the index.js file. I also explained this briefly in the comments in the index.js file where all of the work is happening. 

Also, the code with the 3d spheres that i commented out and replaced with the 2d icons; it's still usable and it works/renders perfectly on laptop, pc, and firefox mobile browser. However, it doesnt work on every other mobile browser, only 6 out of the 13 spheres will load, and due to the amount of memory being taken up by the geometry spheres (13 of them) it causes the desktop pc 3d scene to not load in the beginning of the page on the mobile browsers (besides firefox).

I noticed that if i keep only 6 of the spheres, that it works, however that would mean limiting myself to only displaying 6 skills. So for this reasons, i converted the spheres to 2d icons so i could display all my technologies that i work with instead of compromising myself to only using 6 just to please the eye. However, as mentioned, the 3d code is commented out in the same file.

IMPORTANT DEPENENCY NOTES*********************************************
dont install react-tilt, instead install 'react-parallax-tilt'. For example:

npm install --legacy-peer-deps @react-three/fiber @react-three/drei maath react-parallax-tilt react-vertical-timeline-component @emailjs/browser framer-motion react-


this is the command to install all dependencies
