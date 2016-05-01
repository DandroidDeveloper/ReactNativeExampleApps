/**
 * Copyright 2004-present Facebook. All Rights Reserved.
 */
'use strict';

var React = require('React');

var Text = require('Text');
var UIExplorerBlock = require('UIExplorerBlock');
var UIExplorerPage = require('UIExplorerPage');
var Animation = require('./animation');

var componentThreeExample = React.createClass({
  statics: {
    title: 'Animation Example',
    description: 'Basic Animation'
  },

  render: function() {
    return (
      <UIExplorerPage title="Animation Example">
        <UIExplorerBlock title="Animation Example">
	<Animation/>
        </UIExplorerBlock>
      </UIExplorerPage>
    );
  }
});

module.exports = componentThreeExample;
