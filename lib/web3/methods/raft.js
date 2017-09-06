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
/** @file raft.js
 * @authors:
 *   Coenie Beyers <coenie.beyers@consensys.net>
 * @date 2017
 */

var Method = require('../method');
var Property = require('../property');

function Raft(web3) {
    this._requestManager = web3._requestManager;

    var self = this;

    methods().forEach(function(method) {
        method.attachToObject(self);
        method.setRequestManager(self._requestManager);
    });

    properties().forEach(function(p) {
        p.attachToObject(self);
        p.setRequestManager(self._requestManager);
    });
}

var methods = function () {

    return [
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
    ];
};

var properties = function () {
    return [
        new Property({
            name: 'role',
            getter: 'raft_role'
        })
    ];
};

module.exports = Raft;

