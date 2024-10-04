document.addEventListener('DOMContentLoaded', function () {
  const arrowIcon = document.getElementById('arrow-icon');
  const collapseIcon = document.getElementById('collapse-icon');
  const expandableSection = document.getElementById('expandable-section');
  const screenshotWrapper = document.getElementById('screenshot-wrapper');

  function toggleExpand() {
    expandableSection.classList.toggle('expanded');
    screenshotWrapper.classList.toggle('expanded');

    if (expandableSection.classList.contains('expanded')) {
      arrowIcon.style.display = 'none';
      collapseIcon.style.display = 'block';
    } else {
      arrowIcon.style.display = 'block';
      collapseIcon.style.display = 'none';
    }
  }

  if (arrowIcon) {
    arrowIcon.addEventListener('click', toggleExpand);
  }

  if (collapseIcon) {
    collapseIcon.addEventListener('click', toggleExpand);
  }
});
