import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Artists } from '../../../api/artists/artists';
import { Images } from '../../../api/images/images';

import './Home.html';
window.Artists = Artists;

// Template.Home.events({
//   'submit form'(event) {
//     event.preventDefault();
//
//     const artistName = $('#name').val().trim();
//     const artistDOB = $('#dob').val();
//
//     Artists.insert({
//       name: artistName,
//       dob: artistDOB
//     }, (error, object) => {
//       if (error) {
//         console.log(error.reason);
//       }
//     });
//   }
// });

Template.Home.events({
  'click .fa-times'(event) {
    Artists.remove(this._id);
    Images.remove(this.image);
  },
  'click .image'() {
    $('[name=imageId]').click();
    $('[type=file]').on('change', (event) => {
      $('.image').attr('src', URL.createObjectURL(event.target.files[0]));
    });
  }
});

Template.Home.helpers({
  artists() {
    return Artists.find({}).fetch();
  },
  photo() {
    return Images.findOne({ _id: this.imageId });
  },
  serial(index) {
    return index+1;
  },
  upper(name) {
    return name.toUpperCase();
  }
});
