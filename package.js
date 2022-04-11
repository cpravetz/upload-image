Package.describe({
  summary: "Meteor crop & upload images for various need like avatars, upload photos, etc.",
  version: "0.1.8",
  name: "seakaytee:upload-image",
  git: "https://github.com/cpravetz/upload-image.git"
});

var both = ['client', 'server'];
var client = ['client'];

Package.onUse(function (api) {
  api.versionsFrom("2.3");

  api.use(['underscore', 'accounts-base', 'accounts-password'], both);
  api.use(['jquery', 'templating'], client);

  //add file
  api.addFiles([
    'src/helpers.js'
  ], both);

  api.addAssets([
    'src/vendor/imgareaselect/border-anim-h.gif',
    'src/vendor/imgareaselect/border-anim-v.gif',
  ], client);

  api.addFiles([
    'src/vendor/imgareaselect/imgareaselect-animated.css',
    'src/vendor/imgareaselect/jquery.imgareaselect.pack.js',
    'src/client.js',
    'src/template/editYourAvatarModal.html',
    'src/template/editYourAvatarModal.js',
    'src/template/editYourAvatarModal.css'
  ], client);
});
