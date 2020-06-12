import _ from 'lodash';
import './style.css';
import Wallpaper from './wallpaper.jpg';
import Data from './data.xml';

// No warning
import data from './data.json';

// Warning shown, this is not allowed by the spec.
// import { foo } from './data.json';

function component() {
    const element = document.createElement('div');

    // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    element.classList.add('hello');

    // Add the image to our existing div.
    const myIcon = new Image();
    myIcon.src = Wallpaper;

    element.appendChild(myIcon);

    console.log(Data);
    console.log(data);

    return element;
}

document.body.appendChild(component());