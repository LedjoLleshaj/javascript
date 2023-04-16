// Coding Challenge #3
/* 
PART 1
Write an async function 'loadNPause' that recreates Coding Challenge #2, this time using async/await (only the part where the promise is consumed). Compare the two versions, think about the big differences, and see which one you like more.
Don't forget to test the error handler, and to set the network speed to 'Fast 3G' in the dev tools Network tab.


TEST DATA: ['img/img-1.jpg', 'img/img-2.jpg', 'img/img-3.jpg']. To test, turn off the 'loadNPause' function.

GOOD LUCK 😀
*/

const wait = function (seconds) {
  // the setTimeout will never fail so we don't need to reject the promise
  return new Promise(function (resolve) {
    setTimeout(resolve, seconds * 1000);
  });
};

const imgContainer = document.querySelector(".images");
imgContainer.classList.add("parallel");

const createImage = function (imgPath) {
  return new Promise(function (resolve, reject) {
    const img = document.createElement("img");
    img.src = imgPath;

    img.addEventListener("load", function () {
      imgContainer.append(img);
      resolve(img);
    });

    img.addEventListener("error", function () {
      reject(new Error("Image not found"));
    });
  });
};

let currentImg;

// createImage("img/img-1.jpg")
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 1 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//     return createImage("img/img-2.jpg");
//   })
//   .then((img) => {
//     currentImg = img;
//     console.log("Image 2 loaded");
//     return wait(2);
//   })
//   .then(() => {
//     currentImg.style.display = "none";
//   })
//   .catch((err) => console.error(err));

// (async function () {
//   try {
//     const img1 = await createImage("img/img-1.jpg");
//     currentImg = img1;
//     console.log("Image 1 looked");
//     await wait(2);

//     currentImg.style.display = "none";
//     const img2 = await createImage("img/img-2.jpg");
//     currentImg = img2;
//     console.log("Image 2 looked");
//     await wait(2);

//     currentImg.style.display = "none";
//     const img3 = await createImage("img/img-3.jpg");
//     currentImg = img3;
//     console.log("Image 3 looked");
//     await wait(2);
//   } catch (error) {
//     console.log(`We got an Error -> ${error}`);
//   }
// })();

/*
PART 2
1. Create an async function 'loadAll' that receives an array of image paths 'imgArr';
2. Use .map to loop over the array, to load all the images with the 'createImage' function (call the resulting array 'imgs')
3. Check out the 'imgs' array in the console! Is it like you expected?
4. Use a promise combinator function to actually get the images from the array 😉
5. Add the 'parallel' class to all the images (it has some CSS styles).
*/

const loadAll = async function (imgArr) {
  try {
    const imgs = imgArr.map(async (img) => await createImage(img)); // here we will have a promise array instead f the real images
    console.log(imgs);
    const imgEL = await Promise.all(imgs); // in this line we convert the promises into  images
    imgEL.forEach((img) => img.classList.add("parallel"));
  } catch (error) {
    console.log(error);
  }

  // Promise.all([
  //   createImage("img/img-1.jpg"),
  //   createImage("img/img-2.jpg"),
  //   createImage("img/img-3.jpg"),
  // ]);
};

loadAll(["img/img-1.jpg", "img/img-2.jpg", "img/img-3.jpg"]);
