import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';
import { Artists } from '../../../api/artists/artists';
import { Images } from '../../../api/images/images';
import { Albums } from '../../../api/albums/albums';

import './Home.html';
window.Artists = Artists;

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
  },
  'click .fa-thumbs-up'(event) {
    $(event.target).addClass('fa-3x');
    $(event.target).css('color', 'green');

    $(event.target).parent().parent().find('.fa-thumbs-down').removeClass('fa-3x');
    $(event.target).parent().parent().find('.fa-thumbs-down').css('color', '');

    Albums.update({ _id: this._id }, {
      $inc: {
        likes: 1,
      }
    });
  },
  'click .fa-thumbs-down'(event) {
    $(event.target).addClass('fa-3x');
    $(event.target).css('color', 'green');

    $(event.target).parent().parent().find('.fa-thumbs-up').removeClass('fa-3x');
    $(event.target).parent().parent().find('.fa-thumbs-up').css('color', '');

    Albums.update({ _id: this._id }, {
      $inc: {
        dislikes: 1,
      }
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
  },
  albums() {
    return Albums.find({}).fetch();
  },
  artist() {
    return Artists.findOne({ _id: this.artistId });
  },
  likes() {
    const album = Albums.findOne({ _id: this._id });
    if (album) {
      return album.likes;
    }
  },
  dislikes() {
    const album = Albums.findOne({ _id: this._id });
    if (album) {
      return album.dislikes;
    }
  }
});
