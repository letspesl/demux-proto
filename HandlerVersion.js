function updatedTransferData(state, payload, blockInfo, context) {
    console.info(payload.data);
}

const updaters = [
    {
        actionType: "eosio.token::transfer",
        apply: updatedTransferData,
    },
]

function effectsCallback(payload, blockInfo, context){

}

const effects = [
    {
        actionType: "eosio.token::transfer",
        run: effectsCallback,
    },
]

const handlerVersion = {
    versionName: "v1",
    updaters,
    effects
}

module.exports = handlerVersion