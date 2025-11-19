/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // add field
  collection.fields.addAt(1, new Field({
    "autogeneratePattern": "",
    "hidden": false,
    "id": "text1819170229",
    "max": 0,
    "min": 0,
    "name": "nom",
    "pattern": "",
    "presentable": false,
    "primaryKey": false,
    "required": false,
    "system": false,
    "type": "text"
  }))

  // add field
  collection.fields.addAt(2, new Field({
    "hidden": false,
    "id": "file3309110367",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(3, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor4286007220",
    "maxSize": 0,
    "name": "titre",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(4, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor2862495610",
    "maxSize": 0,
    "name": "date",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(5, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor1843675174",
    "maxSize": 0,
    "name": "description",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(6, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor535716537",
    "maxSize": 0,
    "name": "text2",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(7, new Field({
    "convertURLs": false,
    "hidden": false,
    "id": "editor932330522",
    "maxSize": 0,
    "name": "textsite",
    "presentable": false,
    "required": false,
    "system": false,
    "type": "editor"
  }))

  // add field
  collection.fields.addAt(8, new Field({
    "hidden": false,
    "id": "file2388869723",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image_2",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  // add field
  collection.fields.addAt(9, new Field({
    "hidden": false,
    "id": "file4184109773",
    "maxSelect": 1,
    "maxSize": 0,
    "mimeTypes": [],
    "name": "image_3",
    "presentable": false,
    "protected": false,
    "required": false,
    "system": false,
    "thumbs": [],
    "type": "file"
  }))

  return app.save(collection)
}, (app) => {
  const collection = app.findCollectionByNameOrId("pbc_621264433")

  // remove field
  collection.fields.removeById("text1819170229")

  // remove field
  collection.fields.removeById("file3309110367")

  // remove field
  collection.fields.removeById("editor4286007220")

  // remove field
  collection.fields.removeById("editor2862495610")

  // remove field
  collection.fields.removeById("editor1843675174")

  // remove field
  collection.fields.removeById("editor535716537")

  // remove field
  collection.fields.removeById("editor932330522")

  // remove field
  collection.fields.removeById("file2388869723")

  // remove field
  collection.fields.removeById("file4184109773")

  return app.save(collection)
})
