//highlight current section


const sections = document.querySelectorAll('section');
const navigationlinks = document.querySelectorAll('header nav a')

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navigationlinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav  a[href*=' + id + ']').
                    classList.add('active');
            })
        }
    })
}


//scroll watcher

const header = document.querySelector('header');
const scrollwatcher = document.createElement('div');


const menu = document.querySelector('.menu-container');

scrollwatcher.setAttribute('data-scroll-watcher', '');
header.before(scrollwatcher);

const navObserver = new IntersectionObserver((entries) => {
    menu.classList.toggle('dark-background', !entries[0].isIntersecting);
});

navObserver.observe(scrollwatcher);
