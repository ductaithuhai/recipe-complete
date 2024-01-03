const menuContent = function () {
  const menuContent = document.createElement('div');
  menuContent.id = 'menuContent';
  let phobo = document.createElement('div');
  phobo.id = 'phobo';

  let imageElement1 = document.createElement('img')
  imageElement1.id = "hinhphobo";
  imageElement1.src = "../src/assets/img/hinh-1-pho-la-mon-an-truyen-thong-va-lau-doi-cua-thu-do.jpg";
  imageElement1.alt = "Một tô phở ngon vô cùng";
  imageElement1.width = 300;

  let gioiThieu1 = document.createElement('div');
  gioiThieu1.id = "gioithieu1";

  let foodName1 = document.createElement('div');
  foodName1.id = "foodName1";
  foodName1.innerHTML = "Phở Hà Nội";

  let loiGioiThieu1 = document.createElement('div');
  loiGioiThieu1.id = "loigioithieu1";
  loiGioiThieu1.innerHTML = "Phở, a Vietnamese treasure, is a bowl of pure comfort—rice noodles cradled in flavorful broth, adorned with succulent beef or chicken, fresh herbs, and crisp bean sprouts. This iconic dish captures Vietnam's culinary artistry, offering a harmonious blend of simplicity and rich taste that lingers in every savory spoonful.";

  let gia1 = document.createElement('div');
  gia1.id = "gia1";
  gia1.innerHTML = "Price: $50";

  gioiThieu1.appendChild(foodName1);
  gioiThieu1.appendChild(loiGioiThieu1);
  gioiThieu1.appendChild(gia1);
  phobo.appendChild(imageElement1);
  phobo.appendChild(gioiThieu1);
  menuContent.appendChild(phobo);

  let banhdacua = document.createElement('div');
  banhdacua.id = 'banhdacua';

  let imageElement2 = document.createElement('img')
  imageElement2.id = "hinhbanhdacua";
  imageElement2.src = "../src/assets/img/hinh-2-banh-da-cua-la-mon-an-san-sinh-tu-vung-dat-hai-phong.jpg";
  imageElement2.alt = "Một tô bánh đa cua ngon vô cùng";
  imageElement2.width = 300;

  let gioiThieu2 = document.createElement('div');
  gioiThieu2.id = "gioithieu2";

  let foodName2 = document.createElement('div');
  foodName2.id = "foodName2";
  foodName2.innerHTML = "Bánh Đa Cua Hải Phòng";

  let loiGioiThieu2 = document.createElement('div');
  loiGioiThieu2.id = "loigioithieu1";
  loiGioiThieu2.innerHTML = "Embark on a culinary adventure with Banh Da Cua, a Vietnamese delight. This crab noodle soup boasts chewy rice noodles, succulent crab meat, and a fragrant broth. Topped with fresh herbs and a hint of spice, Banh Da Cua is a symphony of flavors that transports your taste buds to the coastal wonders of Vietnam. Dive into a bowl and savor the essence of Vietnamese gastronomy.";

  let gia2 = document.createElement('div');
  gia2.id = "gia1";
  gia2.innerHTML = "Price: $50";

  gioiThieu2.appendChild(foodName2);
  gioiThieu2.appendChild(loiGioiThieu2);
  gioiThieu2.appendChild(gia2);
  banhdacua.appendChild(imageElement2);
  banhdacua.appendChild(gioiThieu2);
  menuContent.appendChild(banhdacua);

  let comchay = document.createElement('div');
  comchay.id = 'comchay';

  let imageElement3 = document.createElement('img')
  imageElement3.id = "comchay";
  imageElement3.src = "../src/assets/img/hinh-3-com-chay-ninh-binh-an-kem-voi-cac-mon-man-vo-cung-hai-hoa.jpg";
  imageElement3.alt = "Một dĩa cơm cháy chất lượng";
  imageElement3.width = 300;

  let gioiThieu3 = document.createElement('div');
  gioiThieu3.id = "gioithieu3";

  let foodName3 = document.createElement('div');
  foodName3.id = "foodName3";
  foodName3.innerHTML = "Cơm cháy Ninh Bình";

  let loiGioiThieu3 = document.createElement('div');
  loiGioiThieu3.id = "loigioithieu3";
  loiGioiThieu3.innerHTML = "Embark on a culinary adventure with Banh Da Cua, a Vietnamese delight. This crab noodle soup boasts chewy rice noodles, succulent crab meat, and a fragrant broth. Topped with fresh herbs and a hint of spice, Banh Da Cua is a symphony of flavors that transports your taste buds to the coastal wonders of Vietnam. Dive into a bowl and savor the essence of Vietnamese gastronomy.";

  let gia3 = document.createElement('div');
  gia3.id = "gia3";
  gia3.innerHTML = "Price: $50";

  gioiThieu3.appendChild(foodName3);
  gioiThieu3.appendChild(loiGioiThieu3);
  gioiThieu3.appendChild(gia3);
  comchay.appendChild(imageElement3);
  comchay.appendChild(gioiThieu3);
  menuContent.appendChild(comchay);

  let mienluon = document.createElement('div');
  mienluon.id = 'mienluon';

  let imageElement4 = document.createElement('img')
  imageElement4.id = "mienluon";
  imageElement4.src = "../src/assets/img/hinh-4-mien-luon-nghe-an-kha-cau-ky-trong-cach-che-bien.jpg";
  imageElement4.alt = "Một tô miến lươn ngon lành";
  imageElement4.width = 300;

  let gioiThieu4 = document.createElement('div');
  gioiThieu4.id = "gioithieu4";

  let foodName4 = document.createElement('div');
  foodName4.id = "foodName4";
  foodName4.innerHTML = "Miến lươn Nghệ An";

  let loiGioiThieu4 = document.createElement('div');
  loiGioiThieu4.id = "loigioithieu4";
  loiGioiThieu4.innerHTML = "Embark on a culinary adventure with Banh Da Cua, a Vietnamese delight. This crab noodle soup boasts chewy rice noodles, succulent crab meat, and a fragrant broth. Topped with fresh herbs and a hint of spice, Banh Da Cua is a symphony of flavors that transports your taste buds to the coastal wonders of Vietnam. Dive into a bowl and savor the essence of Vietnamese gastronomy.";

  let gia4 = document.createElement('div');
  gia4.id = "gia4";
  gia4.innerHTML = "Price: $50";

  gioiThieu4.appendChild(foodName4);
  gioiThieu4.appendChild(loiGioiThieu4);
  gioiThieu4.appendChild(gia4);
  mienluon.appendChild(imageElement4);
  mienluon.appendChild(gioiThieu4);
  menuContent.appendChild(mienluon);

  let miquang = document.createElement('div');
  miquang.id = 'phobo';
  miquang.innerHTML = "Best Traditional Food Ever!!!";
  menuContent.appendChild(miquang);

  let banhkhot = document.createElement('div');
  banhkhot.id = 'phobo';
  banhkhot.innerHTML = "Best Traditional Food Ever!!!";
  menuContent.appendChild(banhkhot);

  let goicuon = document.createElement('div');
  goicuon.id = 'phobo';
  goicuon.innerHTML = "Best Traditional Food Ever!!!";
  menuContent.appendChild(goicuon);

  let comtam = document.createElement('div');
  comtam.id = 'phobo';
  comtam.innerHTML = "Best Traditional Food Ever!!!";
  menuContent.appendChild(comtam);

  return menuContent;
}

export default menuContent;