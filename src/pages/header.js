const headerDiv = function () {
  const header = document.createElement('div');
  header.id = 'header';
  let nav = document.createElement('div');
  nav.id = 'nav';
  header.appendChild(nav);
  let menu = document.createElement('tab');
  menu.id = 'menu';
  header.appendChild(menu);
  let home = document.createElement('tab');
  home.id = 'home';
  header.appendChild(home);
  let about = document.createElement('tab');
  about.id = 'about';
  header.appendChild(about);
  return header;
}

export default headerDiv;