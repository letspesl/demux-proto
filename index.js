const { BaseActionWatcher } = require("demux")
const { NodeosActionReader } = require("demux-eos")
const ObjectActionHandler = require('./ObjectActionHandler.js')
const handlerVersion = require('./HandlerVersion.js')

const actionHandler = new ObjectActionHandler([handlerVersion])

const actionReader = new NodeosActionReader({
    startAtBlock: 63000000,
    onlyIrreversible: false,
    nodeosEndpoint: "http://api.eosnewyork.io:80"
})

const actionWatcher = new BaseActionWatcher(
    actionReader,
    actionHandler,
    250,
)

module.exports = actionWatcher