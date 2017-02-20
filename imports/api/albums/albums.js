import { Mongo } from 'meteor/mongo';
import { Artists } from '../../api/artists/artists';

export const Albums = new Mongo.Collection("albums");

Albums.allow({
  insert() {
    return true;
  },
  update() {
    return true;
  },
  remove() {
    return true;
  }
});

Albums.attachSchema(new SimpleSchema({
  name: {
    label: 'Album Name',
    type: String,
  },
  description: {
    label: 'Album Description',
    type: String,
    optional: false,
    autoform: {
      type: 'textarea',
      rows: 7
    }
  },
  likes: {
    type: Number,
    autoform: {
      type: 'hidden'
    }
  },
  dislikes: {
    type: Number,
    autoform: {
      type: 'hidden'
    }
  },
  imageId: {
    label: 'Image',
    type: String,
    autoform: {
      type: 'hidden',
      afFieldInput: {
        type: 'cfs-file',
        collection: 'images'
      }
    }
  },
  artistId: {
    label: 'Artist',
    type: String,
    autoform: {
      options() {
        return Artists.find({}).fetch().map((artist) => {
          return { label: artist.name, value: artist._id };
        });
      }
    }
  }
}));
