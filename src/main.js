var paths = getPaths(course());


const navigation = {
  base: 'courseA',
  history: [0],
  links: Object.keys(paths).map(c => paths[c]).flat(),
  currentPage: 0
};

window.onload = () => {
  generateNavigationTemplate(paths);
  showInitialPage();
};

window.addEventListener("message", (event) => {
  const index = navigation.links.indexOf(paths[event.data][0]);
  goToPath(index);
}, false);
