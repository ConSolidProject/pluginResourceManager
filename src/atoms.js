import {atom, atomFamily, selectorFamily} from 'recoil'
import {Session} from "@inrupt/solid-client-authn-browser"

const N3 = require("n3");
const session = atom({
    key: "session",
    default: new Session()
})

const projects = atom({
    key: "projects",
    default: ["http://localhost:5000/arch/lbd/testproject/"]
    // default: {"http://localhost:5000/lbd/4d023e8e-8cef-43db-8b8e-c890d91542c4/":{"http://localhost:5000/profile/card#me":{"proj":"http://localhost:5000/lbd/4d023e8e-8cef-43db-8b8e-c890d91542c4/","id":"4d023e8e-8cef-43db-8b8e-c890d91542c4","ref":{"index":"http://localhost:5000/lbd/4d023e8e-8cef-43db-8b8e-c890d91542c4/references/","accessURL":"http://localhost:5001/query"},"ds":{"registry":"http://localhost:5000/lbd/4d023e8e-8cef-43db-8b8e-c890d91542c4/index/","datasets":[]},"dist":"http://localhost:5000/lbd/4d023e8e-8cef-43db-8b8e-c890d91542c4/distributions/","members":"http://localhost:5000/lbd/4d023e8e-8cef-43db-8b8e-c890d91542c4/members","services":"http://localhost:5000/lbd/4d023e8e-8cef-43db-8b8e-c890d91542c4/services/"}}}
})

const datasets = atom({
    key: "datasets",
    default: []
})

const selectedElements = atom({
    key: "selectedElements",
    default: []
})

const selectionId = atom({
    key: "selectionId",
    default: ""
})

const trigger = atom({
    key: "trigger",
    default: '0'
})

const store = atom({
    key: "store", 
    default: new N3.Store()
})

export {session, projects, datasets, selectedElements, selectionId, trigger, store}