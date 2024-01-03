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
  imageElement3.id = "hinhcomchay";
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
  loiGioiThieu3.innerHTML = "Savor the crispy goodness of Cơm Cháy, a Vietnamese dish featuring deep-fried rice, offering a delightful crunch with each bite. This culinary treat showcases Vietnam's talent in transforming simple rice into a flavorful and textured delight.";

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
  imageElement4.id = "hinhmienluon";
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
  loiGioiThieu4.innerHTML = "Embrace the unique texture and taste of Miến Lươn, a Vietnamese dish featuring glass noodles and freshwater eel. This comforting bowl of goodness showcases the artistry of Vietnamese culinary traditions, offering a warm and flavorful experience that lingers on the palate.";

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
  miquang.id = 'miquang';

  let imageElement5 = document.createElement('img')
  imageElement5.id = "hinhmiquang";
  imageElement5.src = "../src/assets/img/hinh-5-mon-mi-quang-thom-ngon-doc-dao.jpg";
  imageElement5.alt = "Một tô mì quảng đậm đà";
  imageElement5.width = 300;

  let gioiThieu5 = document.createElement('div');
  gioiThieu5.id = "gioithieu4";

  let foodName5 = document.createElement('div');
  foodName5.id = "foodName5";
  foodName5.innerHTML = "Mì Quảng";

  let loiGioiThieu5 = document.createElement('div');
  loiGioiThieu5.id = "loigioithieu5";
  loiGioiThieu5.innerHTML = "Indulge in the vibrant flavors of Mì Quảng, a central Vietnamese noodle dish adorned with turmeric-infused broth, fresh herbs, and a medley of meats. This harmonious blend creates a culinary masterpiece, representing the rich tapestry of Vietnam's regional cuisine.";

  let gia5 = document.createElement('div');
  gia5.id = "gia5";
  gia5.innerHTML = "Price: $50";

  gioiThieu5.appendChild(foodName5);
  gioiThieu5.appendChild(loiGioiThieu5);
  gioiThieu5.appendChild(gia5);
  miquang.appendChild(imageElement5);
  miquang.appendChild(gioiThieu5);
  menuContent.appendChild(miquang);

  let banhkhot = document.createElement('div');
  banhkhot.id = 'banhkhot';

  let imageElement6 = document.createElement('img')
  imageElement6.id = "hinhbanhkhot";
  imageElement6.src = "../src/assets/img/hinh-6-banh-khot-vung-tau-an-kem-voi-cac-loai-rau-song-va-nuoc-cham-dam-da.jpg";
  imageElement6.alt = "Một đĩa bánh khọt giòn tan";
  imageElement6.width = 300;

  let gioiThieu6 = document.createElement('div');
  gioiThieu6.id = "gioithieu6";

  let foodName6 = document.createElement('div');
  foodName6.id = "foodName6";
  foodName6.innerHTML = "Bánh Khọt Vũng Tàu";

  let loiGioiThieu6 = document.createElement('div');
  loiGioiThieu6.id = "loigioithieu6";
  loiGioiThieu6.innerHTML = "Delight in the miniature wonders of Bánh Khọt, Vietnamese savory coconut pancakes filled with shrimp. These bite-sized treats offer a burst of flavors, showcasing the perfect marriage of crispy edges and a soft, flavorful interior, a true delight for the senses.";

  let gia6 = document.createElement('div');
  gia6.id = "gia6";
  gia6.innerHTML = "Price: $50";

  gioiThieu6.appendChild(foodName6);
  gioiThieu6.appendChild(loiGioiThieu6);
  gioiThieu6.appendChild(gia6);
  banhkhot.appendChild(imageElement6);
  banhkhot.appendChild(gioiThieu6);
  menuContent.appendChild(banhkhot);

  let goicuon = document.createElement('div');
  goicuon.id = 'goicuon';

  let imageElement7 = document.createElement('img')
  imageElement7.id = "hinhgoicuon";
  imageElement7.src = "../src/assets/img/hinh-7-goi-cuon-sai-gon-thom-ngon-la-mieng.jpg";
  imageElement7.alt = "Một đĩa gỏi cuốn ngon lành";
  imageElement7.width = 300;

  let gioiThieu7 = document.createElement('div');
  gioiThieu7.id = "gioithieu7";

  let foodName7 = document.createElement('div');
  foodName7.id = "foodName7";
  foodName7.innerHTML = "Gỏi cuốn Sài Gòn";

  let loiGioiThieu7 = document.createElement('div');
  loiGioiThieu7.id = "loigioithieu7";
  loiGioiThieu7.innerHTML = "Freshness takes center stage with Gỏi Cuốn, Vietnamese summer rolls brimming with shrimp, herbs, and vermicelli. Wrapped in translucent rice paper and paired with a zesty dipping sauce, these light and healthy rolls exemplify Vietnam's commitment to balanced and delicious cuisine.";

  let gia7 = document.createElement('div');
  gia7.id = "gia7";
  gia7.innerHTML = "Price: $50";

  gioiThieu7.appendChild(foodName7);
  gioiThieu7.appendChild(loiGioiThieu7);
  gioiThieu7.appendChild(gia7);
  goicuon.appendChild(imageElement7);
  goicuon.appendChild(gioiThieu7);
  menuContent.appendChild(goicuon);

  let comtam = document.createElement('div');
  comtam.id = 'comtam';

  let imageElement8 = document.createElement('img')
  imageElement8.id = "hinhcomtam";
  imageElement8.src = "../src/assets/img/hinh-8-com-tam-sai-gon-la-mon-an-dan-da-cua-nguoi-dan-sai-thanh.jpg";
  imageElement8.alt = "Một đĩa gỏi cuốn ngon lành";
  imageElement8.width = 300;

  let gioiThieu8 = document.createElement('div');
  gioiThieu8.id = "gioithieu8";

  let foodName8 = document.createElement('div');
  foodName8.id = "foodName8";
  foodName8.innerHTML = "Cơm tấm Sài Gòn";

  let loiGioiThieu8 = document.createElement('div');
  loiGioiThieu8.id = "loigioithieu8";
  loiGioiThieu8.innerHTML = "Experience the Vietnamese staple, Cơm Tấm, a plate of broken rice adorned with grilled pork, herbs, and the signature fish sauce. This dish is a testament to the ingenuity of Vietnamese cuisine, transforming humble ingredients into a flavorful and satisfying meal.";

  let gia8 = document.createElement('div');
  gia8.id = "gia8";
  gia8.innerHTML = "Price: $50";

  gioiThieu8.appendChild(foodName8);
  gioiThieu8.appendChild(loiGioiThieu8);
  gioiThieu8.appendChild(gia8);
  comtam.appendChild(imageElement8);
  comtam.appendChild(gioiThieu8);
  menuContent.appendChild(comtam);

  return menuContent;
}

export default menuContent;