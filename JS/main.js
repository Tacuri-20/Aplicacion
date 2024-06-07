import { HomeSection } from './HomeSection.js';
import { TutorialSection } from './TutorialSection.js';
import { SolarChargerSection } from './SolarChargerSection.js';
import { AboutSection } from './AboutSection.js';
import { ContactSection } from './ContactSection.js';

document.addEventListener('DOMContentLoaded', function() {
    const content = document.getElementById('content');

    const homeSection = new HomeSection();
    const tutorialSection = new TutorialSection();
    const solarChargerSection = new SolarChargerSection();
    const aboutSection = new AboutSection();
    const contactSection = new ContactSection();

    function renderSection(section) {
        content.innerHTML = section.render();
        if (section.init) {
            section.init();
        }
    }

    document.getElementById('home-button').addEventListener('click', () => renderSection(homeSection));
    document.getElementById('tutorial-button').addEventListener('click', () => renderSection(tutorialSection));
    document.getElementById('solar-charger-button').addEventListener('click', () => renderSection(solarChargerSection));
    document.getElementById('about-button').addEventListener('click', () => renderSection(aboutSection));
    document.getElementById('contact-button').addEventListener('click', () => renderSection(contactSection));

    // Render the home section by default
    renderSection(homeSection);
});
