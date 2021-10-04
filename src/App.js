import React, { useEffect, useState } from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import {
  Select,
  MenuItem,
  Button,
  InputLabel,
  FormControl,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import UploadFileDialog from "./components/UploadFileDialog";
import { StakeholderMapping } from "./mappings";
import getICDD from "./functions/getICDD";
import { alignGltfAndLbd, alignGuids } from "./functions";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { getMyProjectRepository } from "consolid";
const packageJSON = require("../package.json");

const generateClassname = createGenerateClassName({
  productionPrefix: packageJSON.name,
  seed: packageJSON.name,
});

export default (props) => {
  const [mapping, setMapping] = useState("stakeholder");
  const [upload, setUpload] = useState(false);
  const [icddReady, setIcddReady] = useState();
  const [loading, setLoading] = useState(false);
  const [icddUrl, setIcddUrl] = useState();
  const { sharedProps, inactive } = props;
  const { projects, setTrigger, trigger, store, activeResources, session} = sharedProps;
  const project = projects[0];

  function selectMapping() {
    switch (mapping) {
      case "stakeholder":
        // return <p>test</p>
        return <StakeholderMapping sharedProps={sharedProps} />;
      default:
        break;
    }
  }

  // async function bundleIcdd() {
  //   const content = await getICDD(project, getDefaultSession())
  //   const link = document.createElement('a');
  //   link.href = window.URL.createObjectURL(content);
  //   link.download = `${project}.icdd`;
  //   setIcddUrl(link)
  //   setIcddReady(true)
  // }

  async function alignResources() {
    try {

      setLoading(true);
      await alignGltfAndLbd(activeResources, session, store, project);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  if (props.inactive) return <></>;
  return (
    <StylesProvider generateClassName={generateClassname}>
      <h3 style={{ margin: 10 }}>Resource overview</h3>
      {/* <Button color="primary" onClick={(e) => console.log(projects)}>LOG</Button> */}

      {/* <Button color="primary" onClick={(e) => alignGuids(getDefaultSession())}>CONVERT</Button> */}
      <FormControl style={{ margin: 20 }}>
        <InputLabel id="demo-simple-select-helper-label">Mapping</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={mapping}
          onChange={(e) => setMapping(e.target.value)}
        >
          <MenuItem value={"stakeholder"}>Stakeholder</MenuItem>
        </Select>
        <FormHelperText>
          Choose how project resources should be organised
        </FormHelperText>
      </FormControl>
      <hr />
      <div />
      {selectMapping()}
      <div>
        {/* <Typography variant="body1">
          Sub-document identifiers can be aligned with those of other documents. Alignment enables LBDserver plugins to 'know' which sub-document identifiers correspond with one another, and hence allow visualisation, querying and checking of the entire set of identifiers. Whether alignment can be done automatically or manually depends on the algorithms used. As for this demo, we only have an automatic alignment for glTF/LBD.ttl documents derived from IFC files. You can use <a target="_blank" href="http://lbdserver.org/convertor">this service</a> to convert an IFC files to various formats. Select these in the resource overview and press the Align button.
        </Typography> */}
      </div>
      <div>
        {session.info.isLoggedIn ? (
          <div>
            <Button
              disabled={loading}
              variant="contained"
              color="primary"
              style={{ margin: 10, position: "fixed", bottom: 10, left: 170 }}
              onClick={(e) => alignResources(true)}
            >
              ALIGN
            </Button>

            <Button
              variant="contained"
              color="primary"
              style={{ margin: 10, position: "fixed", bottom: 10, left: 70 }}
              onClick={(e) => setUpload(true)}
            >
              Upload
            </Button>

            <UploadFileDialog
              onClose={async () => {
                setUpload(false);
              }}
              setTrigger={setTrigger}
              store={store}
              open={upload}
              project={project}
              session={session}
            ></UploadFileDialog>
          </div>
        ) : (
          <></>
        )}
      </div>
      {/* <div>
              <Button variant="contained" color="primary" style={{margin: 10, position: "fixed", bottom: 10, left: 170}} onClick={async (e) => {if (!icddReady) {await bundleIcdd()} else {
                icddUrl.click()
              }}}>{icddReady ? "Download ICDD" : "ICDD dump"}</Button>
        </div> */}
    </StylesProvider>
  );
};
