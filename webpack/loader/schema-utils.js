const  { validate } = require('schema-utils')

const bookSchema = {
  type: 'object',
  properties: {
    title: {
      type: 'string',
      "description": "title must is string"
   },
    author: {
      type: 'string',
    } 
  },
  required: ['title' ],
};

try {
  validate(bookSchema, { 
    title: 11
  },   {
    title: 'String Schema'
  })
  console.log('Book data is valid.');
} catch (error) {
  console.error('Invalid book data:', error.message);
}
