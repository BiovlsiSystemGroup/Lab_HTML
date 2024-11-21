document.write(
  `
  <nav class="navbar navbar-expand-lg bg-light fixed-top">
    <div class="container-fluid">
        <a class="navbar-brand navbar_container_hyperlink" href="./index.html">
            <img src="./images/nav_logo.svg" class="navbar_container_hyperlink_img" alt="Cross-disciplinary Systems and Biomedical Applications Design Laboratory" /></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasNavbarLabel">目錄Content</h5><button type="button"
                    class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body">
                <ul class="navbar-nav me-auto">
                   
                </ul>
                <ul class="navbar-nav me-3 navbar_language_ul">
                    <li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" role="button"
                            data-bs-toggle="dropdown" aria-expanded="false">Language</a>
                        <ul class="dropdown-menu">
                            <li><a class="dropdown-item" href="../index.html">中文</a></li>
                            <li><a class="dropdown-item" href="#">English</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</nav>
  `
);
