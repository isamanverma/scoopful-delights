
const imagePaths = [
    '../images/Hero-Img/Hero-Background-1.webp',
    '../images/Hero-Img/Hero-Background-2.webp',
    '../images/Hero-Img/Hero-Background-3.webp',
    '../images/Hero-Img/Hero-Background-4.webp',
    '../images/Hero-Img/Hero-Background-5.webp',
    '../images/Hero-Img/Hero-Background-6.webp',
    '../images/Hero-Img/Hero-Background-7.webp',
    '../images/Hero-Img/Hero-Background-8.webp',
    '../images/Hero-Img/Hero-Background-9.webp',
    '../images/Hero-Img/Hero-Background-10.webp',

  ];
  
  function updateBackgroundImage(images) {
    const randomImagePath = images[Math.floor(Math.random() * images.length)];
    document.documentElement.style.setProperty('--hero-background', `url(${randomImagePath})`);
  }
  
  updateBackgroundImage(imagePaths);
  