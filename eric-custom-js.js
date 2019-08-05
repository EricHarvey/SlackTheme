if (localStorage.getItem('DISABLE_EVERYTHING') != 'true') {
  $('a[data-message-sender="U7UKE4JN4"]:not(.name-changed)').each(function(i, block) {
    block.innerText = 'Wei Wei';
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="UAU3VA7JB"]:not(.name-changed)').each(function(i, block) {
    block.innerText = 'Proposition "Ashley" Chicken 🐔';
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="U0XK8MGFP"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "I'm CEO,";
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="U1LDS3P4H"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "\"Coolest guy in Informed\"";
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="UB1BEA42X"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "Utility Bill";
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="U3M8891V5"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "Running Late 🏃";
    block.classList.add('name-changed');
  });

  $('a[data-message-sender="UDSAFEE2D"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "Definitely has too much power and must be stopped 👸";
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="UEEMUVD5M"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "Ruff Warrior";
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="UFCN2ETFB"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "Mad Swami";
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="UFX3LPZS9"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "Excelsior";
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="UGB100S8L"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "诸海婷";
    block.classList.add('name-changed');
  });
  $('a[data-message-sender="UJHCMH1P1"]:not(.name-changed)').each(function(i, block) {
    block.innerText = "Amazing Overlord";
    block.classList.add('name-changed');
  });
  // $('span:contains(":wappah"):not(.name-changed)'.each(function(i, block) {
  //   block.display = 'none';
  //   block.classList.add('name-changed');
  // });
  if ($('link#inserted-fonts').length === 0) {
    const html = '<link rel="stylesheet" href=https://fonts.googleapis.com/css?family=Asap|Roboto:100,300|Ubuntu:300,400" id="inserted-fonts"/>'
    $(html).appendTo('head');
  }

  // if ($('#settings-button').length === 0) {
  //   const container = document.createElement('div');
  //   container.id = 'settings-button-container';
  //   const button = document.createElement('button');
  //   button.innerText = 'S';
  //   button.id = 'settings-button';
  //   container.addEventListener('click', event => {
  //     console.log('yo');
  //     const settings = document.createElement('div')
  //     settings.className = 'menu_body';
  //     settings.width = '800px';
  //     settings.height = '800px';
  //     settings.margin = 'auto';
  //     settings.style = 'z-index: 9999';
  //     $('#client-ui').add(settings);
  //     event.stopPropagation();
  //   }, true);
  //   container.appendChild(button)
  //   $('#team_menu').append(container);
  // }
}
document.addEventListener('keydown', function(event) {
  if (event.keyCode === 123) {
    const disableSetting = localStorage.getItem('DISABLE_EVERYTHING') == 'true' ? 'false' : 'true';
    localStorage.setItem('DISABLE_EVERYTHING', disableSetting);
    window.location.reload();
  }
});
