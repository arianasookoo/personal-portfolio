// Project filter functionality

document.addEventListener('DOMContentLoaded', () => {
  const filterHeadings = Array.from(document.querySelectorAll('.project-filters h3'));

  // Matches the filter text to its related project container id.
  const filterToProjectId = {
    'DEVELOPMENT': 'development-proj',
    'UX/UI DESIGN': 'ux-proj',
    'GRAPHIC DESIGN': 'graphic-proj',
    'VIDEOGRAPHY': 'video-proj',
    'GPTs': 'gpt-proj'
  };

  const projectContainers = Object.values(filterToProjectId)
    .map((id) => document.getElementById(id))
    .filter(Boolean);

  const hideAllProjects = () => {
    projectContainers.forEach((container) => {
      container.style.display = 'none';
    });
  };

  const resetFilterStyles = () => {
    filterHeadings.forEach((heading) => {
      heading.style.color = '';
    });
  };

  // Hide all projects until a filter is selected.
  hideAllProjects();

  filterHeadings.forEach((heading) => {
    heading.addEventListener('click', () => {
      const filterLabel = heading.textContent.trim().toUpperCase();
      const targetId = filterToProjectId[filterLabel];
      const targetContainer = targetId ? document.getElementById(targetId) : null;

      hideAllProjects();
      resetFilterStyles();

      // Use the same color as the hover state to indicate active filter.
      heading.style.color = 'var(--green)';

      if (targetContainer) {
        targetContainer.style.display = 'block';
      }
    });
  });
});
