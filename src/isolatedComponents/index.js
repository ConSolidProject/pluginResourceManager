import React, { useState, useEffect } from "react";
import App from "../App";
import {
  projects as p,
  datasets as sel,
  selectedElements as se,
  selectionId as sId,
  store as st,
  trigger as t
} from "../atoms";
import { useRecoilState, RecoilRoot, useRecoilValue } from "recoil";
import { QueryClientProvider, QueryClient } from "react-query";
import ChevronLeft from "@material-ui/icons/ChevronLeft";
import { IconButton } from "@material-ui/core";
// import Options from "../../../../consolid-react-ui/src/lib/components/Options";
// import { Options } from "consolid-react-ui";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
// import { loadProjectMetadata } from "consolid";
const packageJSON = require("../../package.json");

export default function Isolated() {
  const module = {
    url: "http://example.org/remoteEntry.js", // can be safely changed
    scope: packageJSON.name, // don't change
    label: packageJSON.name, // can be safely changed
    module: "./index", // don't change
    dimensions: {
      // can be safely changed
      x: 0,
      y: 0,
      h: 850,
      w: 400,
    },
  };

  // if you want to include more in the standalone Application than in the federated module, you should change 'App' to a component with extra functionality (still with App as a child component, though...)

  const Application = standaloneRunner(App, module);

  return (
    <div style={{ width: module.dimensions.w, height: module.dimensions.h }}>
      <RecoilRoot>
          <Application module={module} />
      </RecoilRoot>
    </div>
  );
}

function standaloneRunner(WrappedComponent, module) {
  return function Wrapped() {
    const [openOptions, setOpenOptions] = useState(true)
    const [datasets, setDatasets] = useRecoilState(sel);
    const [selectedElements, setSelectedElements] = useRecoilState(se);
    const [projects, setProjects] = useRecoilState(p);
    const [selectionId, setSelectionId] = useRecoilState(sId);
    const [trigger, setTrigger] = useRecoilState(t);
    const store = useRecoilValue(st)

    const sharedProps = {
      projects,
      setProjects,
      datasets,
      setDatasets,
      selectedElements,
      setSelectedElements,
      selectionId,
      setSelectionId,
      trigger,
      setTrigger,
      store,
      session: getDefaultSession()
    };

    const children = null;
    const inactive = false;

    const drawerWidth = 450

    // useEffect(() => {
    //   if (projects.length > 0) {
    //     loadProjectMetadata(projects[0], store, getDefaultSession()).then(() => console.log('loaded')).catch((err)=> console.log('err', err))
    //   }
    // }, [trigger])

    return (
      <div>
       <IconButton
        style={{ position: "absolute", right: (openOptions && drawerWidth) || 0}}
        variant="contained"
        color="primary"
        onClick={() => setOpenOptions(!openOptions)}
      >
        {openOptions ? <></> : <ChevronLeft />}
      </IconButton>
        {/* <Options
          openOptions={openOptions}
          setOpenOptions={setOpenOptions}
          trigger={trigger}
          setTrigger={setTrigger}
          projects={projects}
          setProjects={setProjects}
          store={store}
        />{" "} */}
        {(Object.keys(projects).length > 0) ? (
        <WrappedComponent
          sharedProps={sharedProps}
          module={module}
          children={children}
          inactive={inactive}
        />          
        ) : (
          <p>Select a project first</p>
        )}

      </div>
    );
  };
}
