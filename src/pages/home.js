const homeContent = function () {
  const homeContent = document.createElement('div');
  homeContent.id = 'menuContent';
  let title = document.createElement('div');
  title.id = 'title';
  title.innerHTML = "Best Traditional Food Ever!!!";
  homeContent.appendChild(title);

  let infor = document.createElement('div');
  infor.id = 'infor';
  infor.innerHTML = "If you're craving an authentic Vietnamese culinary experience, look no further than our traditional food haven. Nestled in the heart of the city, our restaurant transports you to the bustling streets of Hanoi with its vibrant atmosphere and, of course, the irresistible aroma of our signature dishes. From the iconic pho, with its harmonious blend of rice noodles and flavorful broth, to the crispy banh mi sandwiches that tantalize the taste buds, our menu is a culinary journey through Vietnam's diverse flavors. Each dish is meticulously crafted to capture the essence of Vietnamese tradition, creating a dining experience that's as genuine as it is delicious. Join us in savoring the true taste of Vietnam at our warm and welcoming restaurant.";
  homeContent.appendChild(infor);

  let time = document.createElement('div');
  time.id = 'time';
  time.innerHTML = "Hours<br>Sunday: 8am - 8pm<br>Monday: 6am - 6pm<br>Tuesday: 6am - 6pm<br>Wednesday: 6am - 6pm<br>Thursday: 6am - 10pm<br>Friday: 6am - 10pm<br>Saturday: 8am - 10pm";
  homeContent.appendChild(time);

  let location = document.createElement('button');
  location.id = 'location';
  location.innerHTML = "Location 666 Hell Village, Mandarin, Glory Land";
  homeContent.appendChild(location);

  return homeContent;
}

export default homeContent;