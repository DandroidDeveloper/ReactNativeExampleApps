/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 */
'use strict';

var React = require('React');

var Text = require('Text');
var UIExplorerBlock = require('UIExplorerBlock');
var UIExplorerPage = require('UIExplorerPage');
var Todolist = require('./todolist');
var componentOneExample = React.createClass({
  statics: {
    title: 'List',
    description: 'A simple To Do List'
  },

  render: function() {
    return (
      <UIExplorerPage title="List">
        <UIExplorerBlock title="List">
	<Todolist/>
        </UIExplorerBlock>
      </UIExplorerPage>
    );
  }
});

module.exports = componentOneExample;
