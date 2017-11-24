/*
    This file is part of web3.js.

    web3.js is free software: you can redistribute it and/or modify
    it under the terms of the GNU Lesser General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    web3.js is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License
    along with web3.js.  If not, see <http://www.gnu.org/licenses/>.
*/
/**
 * @file index.js
 * @author Fabian Vogelsteller <fabian@ethereum.org>
 * @date 2017
 */

"use strict";

var core = require('web3-core');
var Subscriptions = require('web3-core-subscriptions').subscriptions;
var Method = require('web3-core-method');
// var formatters = require('web3-core-helpers').formatters;
var Net = require('web3-net');


var Raft = function Raft() {
    var _this = this;

    // sets _requestmanager
    core.packageInit(this, arguments);

    // overwrite setProvider
    var setProvider = this.setProvider;
    this.setProvider = function () {
        setProvider.apply(_this, arguments);
        _this.net.setProvider.apply(_this, arguments);
    };

    this.clearSubscriptions = _this._requestManager.clearSubscriptions;

    this.net = new Net(this.currentProvider);

    [
        new Method({
            name: 'addPeer',
            call: 'raft_addPeer',
            params: 1
        }),
        new Method({
            name: 'removePeer',
            call: 'raft_removePeer',
            params: 1
        }),
        new Method({
            name: 'getRole',
            call: 'raft_getRole',
            params: 0
        })
    ].forEach(function(method) {
        method.attachToObject(_this);
        method.setRequestManager(_this._requestManager);
    });
};

core.addProviders(Raft);



module.exports = Raft;


