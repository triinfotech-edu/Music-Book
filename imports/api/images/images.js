export const Images = new FS.Collection('images', {
  stores: [new FS.Store.FileSystem('images', { path: process.env.PWD + '/uploads' })]
});

Images.allow({
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
