Template.home.onRendered(() => {
  setTimeout(() => {
    $('ul.tabs').tabs();
  }, 100);
});
