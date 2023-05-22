
const imagePaths = [
    '../images/Hero-Background-1.jpeg',
    '../images/Hero-Background-2.jpeg',
    '../images/Hero-Background-3.jpeg',
    '../images/Hero-Background-4.jpeg',
    '../images/Hero-Background-5.jpeg',
    '../images/Hero-Background-6.jpeg',
    '../images/Hero-Background-7.jpeg',
    '../images/Hero-Background-8.jpeg',
    '../images/Hero-Background-9.jpeg',
    '../images/Hero-Background-10.jpeg',

  ];
  
  function updateBackgroundImage(images) {
    const randomImagePath = images[Math.floor(Math.random() * images.length)];
    document.documentElement.style.setProperty('--hero-background', `url(${randomImagePath})`);
  }
  
  updateBackgroundImage(imagePaths);
  