

var imagesUrl = `https://i.ytimg.com/vi/I981-Dtqk5Q/hqdefault.jpg`;

window.onload = () => {
  document.getElementById("temp-list").innerHtml = '<a>ok</a>';
  console.log("attached");
  getImages();

};



function getImages() {
  console.log("gottne");
  get(imagesUrl).then((res) => {
    console.log("main: getImages: Success, " + res.status);

    //do somthing with the images from our backend

  });
}

function get(url) {
  return new Promise((resolve, reject) => {
     var req = new XMLHttpRequest();
     req.open('GET', url);



     req.onLoad = () => {
       if (req.status == 200) {
         console.log("adsfaddsdddddd");
         resolve(req.response);
       }
       else {
         console.log("dddddddddd");
         reject(Error(req.statusText))
       }
     };

     req.onerror = () => {
       reject(Error('Network Error'));
     };

     req.send();
  });
}
