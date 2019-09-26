// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.
import "hyper/css/vendor/jquery-jvectormap-1.2.2.css"
import "hyper/css/icons.css"
import "hyper/css/app.css"

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("daterangepicker")
require("metismenu")
require("select2")
require("jquery-slimscroll")

$(document).on('ready turbolinks:load', function() {
  require("hyper/js/app.min")
  require("hyper/js/vendor/Chart.bundle.min")
  require("hyper/js/vendor/jquery-jvectormap-1.2.2.min")
  require("hyper/js/vendor/jquery-jvectormap-world-mill-en")
  require("hyper/js/pages/demo.dashboard")
})


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//

// console.log(require.context)
// const requireAll = (r) => r.keys().map(r)
// requireAll(require.context('hyper/images', true, /\.(png|jpe?g|svg)$/));

require.context('../images', true);
require.context('hyper/images', true);
// const imagePath = (name) => hyperImages(name, true)
// const imagePath = (name) => images(name, true)
