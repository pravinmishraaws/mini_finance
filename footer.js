(function injectFooter(){
  var el = document.getElementById("footer");
  if (!el) {
    el = document.createElement("div");
    el.id = "footer";
    document.body.appendChild(el);
  }
  el.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-12">
            <p class="copyright-text">
              Copyright © Mini Finance 2048 - Design:
              <a rel="sponsored" href="https://www.tooplate.com" target="_blank">Tooplate</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  `;
})();
