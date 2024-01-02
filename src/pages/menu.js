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
  foodName1.innerHTML = "Phở";

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
  foodName2.innerHTML = "Bánh Đa Cua";

  let loiGioiThieu2 = document.createElement('div');
  loiGioiThieu2.id = "loigioithieu1";
  loiGioiThieu2.innerHTML = "Phở, a Vietnamese treasure, is a bowl of pure comfort—rice noodles cradled in flavorful broth, adorned with succulent beef or chicken, fresh herbs, and crisp bean sprouts. This iconic dish captures Vietnam's culinary artistry, offering a harmonious blend of simplicity and rich taste that lingers in every savory spoonful.";

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
  comchay.id = 'phobo';
  comchay.innerHTML = "Best Traditional Food Ever!!!";
  menuContent.appendChild(comchay);

  let mienluon = document.createElement('div');
  mienluon.id = 'phobo';
  mienluon.innerHTML = "Best Traditional Food Ever!!!";
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