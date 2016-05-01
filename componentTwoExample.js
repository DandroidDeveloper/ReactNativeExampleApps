/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 */
'use strict';

var React = require('React');

var Text = require('Text');
var UIExplorerBlock = require('UIExplorerBlock');
var UIExplorerPage = require('UIExplorerPage');
var Counter = require('./counter');
var componentTwoExample = React.createClass({
  statics: {
    title: 'Counter',
    description: 'Counter Demo'
  },

  render: function() {
    return (
      <UIExplorerPage title="Counter">
        <UIExplorerBlock title="Counter">
	<Counter/>
        </UIExplorerBlock>
      </UIExplorerPage>
    );
  }
});

module.exports = componentTwoExample;
