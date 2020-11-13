// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import room from './room';
import item from './item';
import action from './action';
import container from './container';
import interactiveObject from './interactiveObject';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({

  // We name our schema
  name: 'mySchema',

  // Then proceed to concatenate our document types (just one, for now)
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    action,
    container,
    interactiveObject,
    item,
    room
  ])
})