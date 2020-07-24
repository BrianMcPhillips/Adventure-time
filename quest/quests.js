import allQuests from '../data.js';
import { findById, renderSection } from './questUtils.js';

const main = document.querySelector('main');

const params = new URLSearchParams(window.location.search);

const questId = params.get('id');

const questData = findById(allQuests, questId);

const sectionEl = renderSection(questData);

const nextButton = document.querySelector('#next');

nextButton.addEventListener('click', () =>{
    window.location = '/map';
});
main.append(sectionEl);
