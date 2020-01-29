"use strict";

// OSM contract ABI
var FLIPPER_ABI = [{
    inputs: [{
        internalType: "address",
        name: "vat_",
        type: "address"
    }, {
        internalType: "bytes32",
        name: "ilk_",
        type: "bytes32"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: false,
    inputs: [{
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        indexed: false,
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        indexed: false,
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }, {
        indexed: false,
        internalType: "uint256",
        name: "tab",
        type: "uint256"
    }, {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        indexed: true,
        internalType: "address",
        name: "gal",
        type: "address"
    }],
    name: "Kick",
    type: "event"
}, {
    anonymous: true,
    inputs: [{
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
    }, {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32"
    }, {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "LogNote",
    type: "event"
}, {
    constant: true,
    inputs: [],
    name: "beg",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    name: "bids",
    outputs: [{
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "address",
        name: "guy",
        type: "address"
    }, {
        internalType: "uint48",
        name: "tic",
        type: "uint48"
    }, {
        internalType: "uint48",
        name: "end",
        type: "uint48"
    }, {
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        internalType: "address",
        name: "gal",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tab",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "deal",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }],
    name: "dent",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "bytes32",
        name: "what",
        type: "bytes32"
    }, {
        internalType: "uint256",
        name: "data",
        type: "uint256"
    }],
    name: "file",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "ilk",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        internalType: "address",
        name: "gal",
        type: "address"
    }, {
        internalType: "uint256",
        name: "tab",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }],
    name: "kick",
    outputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "kicks",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "tau",
    outputs: [{
        internalType: "uint48",
        name: "",
        type: "uint48"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "lot",
        type: "uint256"
    }, {
        internalType: "uint256",
        name: "bid",
        type: "uint256"
    }],
    name: "tend",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "tick",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "ttl",
    outputs: [{
        internalType: "uint48",
        name: "",
        type: "uint48"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "vat",
    outputs: [{
        internalType: "contract VatLike",
        name: "",
        type: "address"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "wards",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint256",
        name: "id",
        type: "uint256"
    }],
    name: "yank",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}];
var OSM_ABI = [{
    inputs: [{
        internalType: "address",
        name: "src_",
        type: "address"
    }],
    payable: false,
    stateMutability: "nonpayable",
    type: "constructor"
}, {
    anonymous: true,
    inputs: [{
        indexed: true,
        internalType: "bytes4",
        name: "sig",
        type: "bytes4"
    }, {
        indexed: true,
        internalType: "address",
        name: "usr",
        type: "address"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg1",
        type: "bytes32"
    }, {
        indexed: true,
        internalType: "bytes32",
        name: "arg2",
        type: "bytes32"
    }, {
        indexed: false,
        internalType: "bytes",
        name: "data",
        type: "bytes"
    }],
    name: "LogNote",
    type: "event"
}, {
    anonymous: false,
    inputs: [{
        indexed: false,
        internalType: "bytes32",
        name: "val",
        type: "bytes32"
    }],
    name: "LogValue",
    type: "event"
}, {
    constant: true,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "bud",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "src_",
        type: "address"
    }],
    name: "change",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "deny",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address[]",
        name: "a",
        type: "address[]"
    }],
    name: "diss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "a",
        type: "address"
    }],
    name: "diss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "hop",
    outputs: [{
        internalType: "uint16",
        name: "",
        type: "uint16"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address[]",
        name: "a",
        type: "address[]"
    }],
    name: "kiss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "a",
        type: "address"
    }],
    name: "kiss",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "pass",
    outputs: [{
        internalType: "bool",
        name: "ok",
        type: "bool"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "peek",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }, {
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "peep",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }, {
        internalType: "bool",
        name: "",
        type: "bool"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "poke",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "read",
    outputs: [{
        internalType: "bytes32",
        name: "",
        type: "bytes32"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "address",
        name: "usr",
        type: "address"
    }],
    name: "rely",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "src",
    outputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "start",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [{
        internalType: "uint16",
        name: "ts",
        type: "uint16"
    }],
    name: "step",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "stop",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "stopped",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: false,
    inputs: [],
    name: "void",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function"
}, {
    constant: true,
    inputs: [{
        internalType: "address",
        name: "",
        type: "address"
    }],
    name: "wards",
    outputs: [{
        internalType: "uint256",
        name: "",
        type: "uint256"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}, {
    constant: true,
    inputs: [],
    name: "zzz",
    outputs: [{
        internalType: "uint64",
        name: "",
        type: "uint64"
    }],
    payable: false,
    stateMutability: "view",
    type: "function"
}]; // Contracts

var ETH_FLIP_ADDRESS = "0xd8a04f5412223f513dc55f839574430f5ec15531";
var OSM_ADDRESS = "0x81FE72B5A8d1A857d176C3E7d5Bd2679A9B85763";

var web3;
var local_web3 = typeof window.web3 !== "undefined";
if (local_web3 && window.web3.currentProvider && window.web3.currentProvider.networkVersion === "1") {
    web3 = new Web3(window.web3.currentProvider);
} else {
    var infura = "https://mainnet.infura.io/v3/24537662f67d4531a1e43e486ea45eca";
    var provider = new Web3.providers.HttpProvider(infura);
    web3 = new Web3(provider);
}

var flipContract = new web3.eth.Contract(FLIPPER_ABI, ETH_FLIP_ADDRESS);
var osmContract = new web3.eth.Contract(OSM_ABI, OSM_ADDRESS); // Get events

var events = [];
var getFlipEvents = function getFlipEvents(fromBlockNumber) {
    console.log(`Get auction events from block: ${fromBlockNumber}`);
    return flipContract.getPastEvents("allEvents", {
            fromBlock: fromBlockNumber,
            toBlock: "latest"
        }, // Deploy block: 8925094
        function (err, result) {
            if (!err) {
                console.log("Received Events:", result.length);
                events = result;
            } else {
                console.log(err);
            }
        });
};

var osmPrice = 0;
var getOsmPrice = function getOsmPrice(blockNumber) {
    return osmContract.getPastEvents("LogValue", {
            fromBlock: blockNumber - 500,
            toBlock: blockNumber
        }, // Deploy block: 8925094
        function (err, result) {
            if (!err) {
                var logEvent = result[result.length - 1];

                if (!logEvent) {
                    return 0;
                }

                var priceInWei = web3.utils.toBN(logEvent.returnValues[0]);
                var price = web3.utils.fromWei(priceInWei);
                osmPrice = parseFloat(price).toFixed(3);
                return price;
            } else {
                console.log(err);
            }
        });
}; // Events Id constant

var TEND = "0x4b43ed1200000000000000000000000000000000000000000000000000000000";
var DENT = "0x5ff3a38200000000000000000000000000000000000000000000000000000000";
var DEAL = "0xc959c42b00000000000000000000000000000000000000000000000000000000";
var TICK = "0xfc7b6aee00000000000000000000000000000000000000000000000000000000";
var auctions = {};

var eventsLoaded = false;
var showEvents = async function showEvents(someID) {
    // Clear loading msg in body
    if (Object.keys(auctions).length === 0) {
        document.getElementById("app").innerHTML = "";
    }

    // Disable filter when populating
    if (events.length > 0) {
        hideFilterSearch();
    }

    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;
    try {
        var _loop = async function _loop() {
            var event = _step.value;
            var values = "";
            var blockDate = void 0;
            await web3.eth.getBlock(event.blockNumber).then(function (block) {
                var blockTime = block.timestamp;
                blockDate = new Date(blockTime * 1000);
                values = "".concat(blockDate.toLocaleString(), " | ");
            });
            var eventType = "Unknown";
            var flipId = 0; // Event types cases

            if (event.event === "Kick") {
                eventType = "KICK";
                flipId = parseInt(event.returnValues.id, 10);
                values += "ID: <b>".concat(flipId, "</b> | ");
                var lot = event.returnValues.lot / 10 ** 18;
                values += "lot: ".concat(lot.toFixed(3), " eth | "); //values += `bid: ${event.returnValues.bid} | `;

                var tab = event.returnValues.tab / 10 ** 27 / 10 ** 18;
                values += "tab: ".concat(tab.toFixed(3), " dai | "); //values += `usr: ${event.returnValues.usr} | `;
                //values += `gal: ${event.returnValues.gal} | `;
                // Clear and Get current price value

                osmPrice = 0;
                await getOsmPrice(event.blockNumber);
                auctions[flipId] = {
                    id: flipId,
                    kickDate: blockDate.toUTCString().slice(5),
                    kickDay: blockDate.getUTCDate(),
                    kickMonth: blockDate.getUTCMonth() + 1,
                    kickPrice: osmPrice.toString(),
                    kickLot: lot.toFixed(3),
                    tends: 0,
                    dents: 0,
                    bid: null,
                    lot: null,
                    tab: tab.toFixed(3),
                    guy: null,
                    dealPrice: null,
                    paidPrice: null,
                    state: "OPEN"
                };
            } else if (event.raw.topics[0] === TEND) {
                eventType = "TEND"; // Get ID

                flipId = parseInt(event.raw.topics[2], 16);

                if (!auctions[flipId]) {
                    return "continue";
                }

                values += "ID: <b>".concat(flipId, "</b> | "); // Get LOT

                var _lot = parseInt(event.raw.topics[3], 16) / 10 ** 18;

                values += "lot: ".concat(_lot.toFixed(3), " eth | "); // Get BID

                var raw = event.raw.data.slice(289, -248);
                var bid = parseInt(raw, 16) / 10 ** 27 / 10 ** 18;
                values += "bid: ".concat(bid.toFixed(3), " dai | "); // Update Urn data

                auctions[flipId]["tends"] += 1;
                auctions[flipId]["bid"] = bid.toFixed(3);
                auctions[flipId]["lot"] = _lot.toFixed(3);
                auctions[flipId]["paidPrice"] = (bid / _lot).toFixed(3);
            } else if (event.raw.topics[0] === DENT) {
                eventType = "DENT"; // Get ID

                flipId = parseInt(event.raw.topics[2], 16);

                if (!auctions[flipId]) {
                    return "continue";
                }

                values += "ID: <b>".concat(flipId, "</b> | "); // Get LOT

                var _lot2 = parseInt(event.raw.topics[3], 16) / 10 ** 18;

                values += "lot: ".concat(_lot2.toFixed(3), " eth | "); // Get BID

                var _raw = event.raw.data.slice(289, -248);

                var _bid = parseInt(_raw, 16) / 10 ** 27 / 10 ** 18;

                values += "bid: ".concat(_bid.toFixed(3), " dai | "); // Update Urn data

                auctions[flipId]["dents"] += 1;
                auctions[flipId]["bid"] = _bid.toFixed(3);
                auctions[flipId]["lot"] = _lot2.toFixed(3);
                auctions[flipId]["paidPrice"] = (_bid / _lot2).toFixed(3);
            } else if (event.raw.topics[0] === DEAL) {
                eventType = "DEAL"; // Get ID

                flipId = parseInt(event.raw.topics[2], 16);

                if (!auctions[flipId]) {
                    return "continue";
                }

                values += "ID: <b>".concat(flipId, "</b> | "); // Update Urn data

                osmPrice = 0;
                await getOsmPrice(event.blockNumber);
                auctions[flipId]["dealPrice"] = osmPrice.toString();
                auctions[flipId]["state"] = "CLOSE";
                values += "Paid: $".concat(auctions[flipId]["paidPrice"], " - ");
                values += "Price: $".concat(auctions[flipId]["dealPrice"], " | ");
            } else if (event.raw.topics[0] === TICK) {
                eventType = "TICK"; // Get ID

                flipId = parseInt(event.raw.topics[2], 16);
                values += "ID: <b>".concat(flipId, "</b> | ");
                values += "Time extended! | ";
            } else {
                console.log("Uknown event");
                console.log(event);
            } // Only for debug
            //console.log(event);
            // Get Sender


            await web3.eth.getTransaction(event.transactionHash).then(function (tx) {
                var from = tx.from;
                var txLink = "<a target=\"_blank\" href='https://etherscan.io/tx/\n          ".concat(event.transactionHash, "\n          '>Tx Info</a>");
                values += "from: ".concat(from, " | ").concat(txLink, " >>");
                auctions[flipId]["guy"] = from;
            }); // Render new line in document

            var oldPage = document.getElementById("app").innerHTML;
            var newLine = "";

            if (someID === 0 || someID === flipId) {
                newLine = "<div class=\"row flip-".concat(flipId, " ").concat(eventType.toLowerCase(), "\">").concat(eventType, " >> ").concat(values, "</div>");
            }

            var newPage = newLine + oldPage;
            document.getElementById("app").innerHTML = newPage;
        };

        for (var _iterator = events[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _ret = await _loop();

            if (_ret === "continue") continue;
        }
    } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
    } finally {
        try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
                _iterator.return();
            }
        } finally {
            if (_didIteratorError) {
                throw _iteratorError;
            }
        }
    }

    if (Object.keys(auctions).length > 0) {
        showFilter();
    } else {
        showEmptyMessage();
    }
    eventsLoaded = true;
};

var lastBlockfetch = 0;
var fetchAuctions = async function fetchAuctions(someID) {
    lastBlockfetch = await web3.eth.getBlockNumber();
    var fromBlock = lastBlockfetch - 18095; // 18095 -> 3.14 days blocks count
    await getFlipEvents(fromBlock);
    await showEvents(someID);
};

function showFilter() {
    var filterPanel = document.getElementById("filter-panel");

    if (filterPanel) {
        filterPanel.style.display = "block";
        var searchTag = document.getElementById("search");
        searchTag.style.display = "inline";
        var noResultsTag = document.getElementById("no-results");
        noResultsTag.style.display = "none";
        showLastUpdate();
    }
}

function showLastUpdate() {
    var lastUpdateTag = document.getElementById("last-update");
    var now = new Date().toLocaleString();
    lastUpdateTag.innerHTML = `- Updated to: ${now}`;
}

function hideFilterSearch() {
    var filterPanelSearch = document.getElementById("search");
    if (filterPanelSearch) {
        filterPanelSearch.style.display = "none";
    }
}

function showEmptyMessage() {
    var filterPanel = document.getElementById("filter-panel");

    if (filterPanel) {
        filterPanel.style.display = "block";
        var searchTag = document.getElementById("search");
        searchTag.style.display = "none";
        var noResultsTag = document.getElementById("no-results");
        noResultsTag.style.display = "inline";
        showLastUpdate();
    }
}

function filterAuctionById() {
    var flipId = $("#fliter-id").val();
    $(".row").hide();
    if (flipId) {
        $(".flip-" + flipId).show()
    } else {
        $(".row").show();
    }
}

async function newBlock(error, result) {
    if (result) {
        var newBlockNumber = result.number;
        if (!eventsLoaded) return;

        // Clear events and fetch new ones
        eventsLoaded = false;
        await getFlipEvents(newBlockNumber);
        await showEvents(0);
    } else {
        console.log(error);
    }
}

// Start Main function
fetchAuctions(0);

// Subscribe to new blocks
setTimeout(function () {
    console.log('Getting new data from chain...');
    web3.eth.subscribe('newBlockHeaders', newBlock);
}, 5000);
