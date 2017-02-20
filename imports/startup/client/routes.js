import { FlowRouter } from 'meteor/kadira:flow-router';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

//layouts
import '../../ui/layouts/MainLayout/MainLayout';

//pages
import '../../ui/pages/Home/Home';
import '../../ui/pages/NewAlbum/NewAlbum';
import '../../ui/pages/ArtistDetail/ArtistDetail';

FlowRouter.route('/', {
  name: 'Home',
  action() {
    BlazeLayout.render('MainLayout', { main: 'Home' });
  }
})

FlowRouter.route('/new/album', {
  name: 'NewAlbum',
  action() {
    BlazeLayout.render('MainLayout', { main: 'NewAlbum' });
  }
})

FlowRouter.route('/artist/:_id', {
  name: 'ArtistDetail',
  action() {
    BlazeLayout.render('MainLayout', { main: 'ArtistDetail' });
  }
})
