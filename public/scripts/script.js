document.addEventListener('DOMContentLoaded', () => {
  const tabs = document.querySelectorAll('.sidebar ul li a');
  const contents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', (e) => {
      e.preventDefault();
      
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      contents.forEach(content => content.classList.remove('active'));
      const target = document.querySelector(tab.getAttribute('href'));
      target.classList.add('active');
    });
  });
});
