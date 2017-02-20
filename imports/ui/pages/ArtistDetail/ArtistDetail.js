import { Template } from 'meteor/templating';
import { FlowRouter } from 'meteor/kadira:flow-router';

import { Artists } from '../../../api/artists/artists';
import { Images } from '../../../api/images/images';

import './ArtistDetail.html';

Template.ArtistDetail.helpers({
  obj() {
    const artist = Artists.findOne({ _id: FlowRouter.getParam('_id') });
    if (artist && artist.imageId) {
      const image = Images.findOne({ _id: artist.imageId });
      return { artist, image };
    }
  }
});
