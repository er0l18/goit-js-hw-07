const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

images.forEach(element => {
  const imagesList = document.querySelector('.gallery');
  const imageSrc = element.url.match(/https:\/\/.*\.jpeg/)[0];
  const imageWidth = element.url.match(/&w=(\d+)/)[1];
  const imageHeight = element.url.match(/&h=(\d+)/)[1];
  const htmlCode = ('<li><h1>'+element.alt+'</h1><img src="'+imageSrc+'" width="'+imageWidth+'" height="'+imageHeight+'"alt="'+element.alt+'"/></li>');
  imagesList.insertAdjacentHTML('afterbegin',htmlCode);
});