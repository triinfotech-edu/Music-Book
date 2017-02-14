import { Mongo } from 'meteor/mongo';
import { SimpleSchema } from 'meteor/aldeed:simple-schema';
import { Images } from '../../api/images/images';

export const Artists = new Mongo.Collection('artists');

Artists.allow({
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

Artists.attachSchema(new SimpleSchema({
  name: {
    label: 'Name',
    type: String,
    autoform: {
      placeholder: 'Artist Name'
    }
  },
  dob: {
    label: 'Date of Birth',
    type: Date
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
  }
}));
