const getPaths = (course) => {
  const concepts = course.arrConcept;
  const conceptPathMap = {};
  for (let i = 0; i < concepts.length; i++) {
    const concept = concepts[i].substring(1);
    conceptPathMap[concept] = parseConcept(concept);
  }
  return conceptPathMap;
};

const parseConcept = (concept) => {
  const conceptDef = eval(concept + '()');
  const paths = [];
  for (let i = 0; i < conceptDef.arrPage.length; i++) {
    const page = conceptDef.arrPage[i];
    if (page.indexOf('*') > -1) {
      const innerPaths = parseConcept(page.substring(1));
      paths.push(...innerPaths);
    } else {
      paths.push(page);
    }
  }
  return paths;
};

const generateNavigationTemplate = (paths) => {
  const concepts = Object.keys(paths);
  let pathIndex = 0;
  const template = concepts.map((concept, conceptIndex) => {
      const conceptPaths = paths[concept];
      const conceptItemTemplates = conceptPaths.map(path => {
        const temp = `<div class="inner-nav-item" onclick="goToPath(${pathIndex}); toggleContents()">${formatPath(path)}</div>`
        pathIndex++;
        return temp;
      });
      return `
      <div class="concept-nav" onclick="onClickConcept(${conceptIndex}); event.stopPropagation()">
        ${concept}
        <div class="inner-nav hidden">
          ${conceptItemTemplates.join('')}
        </div>
      </div>
    `;
    }
  );
  const navElement = document.getElementById('navigation');
  navElement.innerHTML = template.join('');
};

const onClickConcept = (index) => {
  const nav = document.getElementById('navigation');
  const concept = nav.children[index];
  const innerNav = concept.children[0];
  innerNav.classList.toggle('hidden');
};

const goToPath = (index) => {
  const {base} = navigation;
  const iframe = document.getElementById('content');
  iframe.src = base + '/' + navigation.links[index];
  navigation.currentPage = index;
  const lastIndex = navigation.history[navigation.history.length - 1];
  const lastPath = navigation.links[lastIndex];
  const newPath = navigation.links[index];
  const lastPathsParts = lastPath?.split('/');
  const newPathsParts = newPath?.split('/');
  if (!lastPathsParts) {
    navigation.history.push(index);
    enableBackButton();
    return;
  }
  if (lastPathsParts[0] !== newPathsParts[0] || lastPathsParts[1] !== newPathsParts[1]) {
    navigation.history.push(index);
    enableBackButton();
  } else {
    navigation.history.pop();
    navigation.history.push(index);
    if (navigation.history.length > 0) {
      enableBackButton();
    }
  }
};

const nextButtonClicked = () => {
  const {currentPage, links} = navigation;
  if (currentPage + 1 < links.length) {
    goToPath(currentPage + 1);
  }
};

const prevButtonClicked = () => {
  const {currentPage} = navigation;
  if (currentPage > 0) {
    goToPath(currentPage - 1);
  }
};

const backButtonClicked = () => {
  const {history} = navigation;
  // remove current page.
  history.pop();
  const target = history.pop();
  target >= 0 && goToPath(target);
  if (history.length <= 1) {
    disableBackButton();
  }
};

function disableBackButton() {
  document.getElementById('back-button').disabled = true;
}

function enableBackButton() {
  document.getElementById('back-button').disabled = false;
}

function toggleContents() {
  document.getElementById('navigation').classList.toggle('hidden');
}

const showInitialPage = () => {
  const {base} = navigation;
  const iframe = document.getElementById('content');
  iframe.src = base + '/' + navigation.links[0];
};

const formatPath = (path) => {
  let formatted = path.split('.')[0];
  return formatted.replaceAll('/', ' > ',);
};
