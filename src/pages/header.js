const headerDiv = function () {
  const header = document.createElement('div');
  header.id = 'header';
  let nav = document.createElement('div');
  nav.id = 'nav';
  header.appendChild(nav);

  let home = document.createElement('button');
  home.id = 'home';
  home.innerHTML = "Home";
  nav.appendChild(home);

  let menu = document.createElement('button');
  menu.id = 'menu';
  menu.innerHTML = "Menu";
  nav.appendChild(menu);

  let about = document.createElement('button');
  about.id = 'about';
  about.innerHTML = "About";
  nav.appendChild(about);
  return header;
}

export default headerDiv;