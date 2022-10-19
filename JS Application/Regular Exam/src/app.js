import { logout } from './api/users.js';
import { page, render } from './lib.js';
import { createView } from './views/create.js';
import { dashboardView } from './views/dashBoard.js';
import { removeOffer } from './views/delete.js';
import { detailsView } from './views/details.js';
import { editView } from './views/edit.js';
import { homeView } from './views/home.js';
import { loginView } from './views/login.js';
import { registerView } from './views/register.js';
import { updateNav } from './views/updateNav.js';

const main = document.querySelector('main');

page(decorateContext);
page(updateNav);
page('/', homeView)
page('/login', loginView);
page('/register', registerView);
page('/logout', logout);
page('/dashboard', dashboardView);
page('/create', createView);
page('/details/:id', detailsView);
page('/details/:id/edit', editView);
page('/details/:id/delete', removeOffer)



page.start();


function decorateContext(ctx, next) {
    ctx.render = renderMain;
    next();
}

function renderMain(template) {
    render(template, main);
}