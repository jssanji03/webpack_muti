const sidebarArea = document.querySelector('#sidebar-wrapper')
export const sidebar = () => {
    let template = `
    <ul class="navbar-nav">
        <li class="nav-item"><a href="home.html" class="nav-link"><i class="fa-icon fas fa-home "></i> Home</a></li>
        <li class="nav-item"><a href="table.html" class="nav-link"><i class="fa-icon fas fa-home "></i> table</a></li>
    </ul>
    `
    sidebarArea.innerHTML = template
}