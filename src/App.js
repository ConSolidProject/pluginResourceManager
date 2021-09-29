import React, {useEffect, useState} from "react";
import {
  StylesProvider,
  createGenerateClassName,
} from "@material-ui/core/styles";
import {Select, MenuItem, Button, InputLabel, FormControl, FormHelperText} from "@material-ui/core"
import UploadFileDialog from './components/UploadFileDialog'
import {StakeholderMapping} from './mappings'
import getICDD from './functions/getICDD'
import {alignGuids} from './functions'
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
const packageJSON = require('../package.json')

const generateClassname = createGenerateClassName({
  productionPrefix: packageJSON.name,
  seed: packageJSON.name,
});

export default (props) => {
  const [mapping, setMapping] = useState("stakeholder")
  const [upload, setUpload] = useState(false)
  const [icddReady, setIcddReady] = useState()
  const [icddUrl, setIcddUrl] = useState()
  const {sharedProps, inactive} = props
  const { projects, activeResources, trigger} = sharedProps
  const project = projects[0]

  useEffect(() => {

  }, [trigger])

  function selectMapping() {
    switch (mapping) {
      case "stakeholder":
        // return <p>test</p>
        return <StakeholderMapping sharedProps={sharedProps}/>
      default:
        break;
    }
  }
 
  if (inactive) return <></>

  async function bundleIcdd() {
    const content = await getICDD(project, getDefaultSession())
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(content);
    link.download = `${project}.icdd`;
    setIcddUrl(link)
    setIcddReady(true)
  }

  if (props.inactive) return <></>
  return (
      <StylesProvider generateClassName={generateClassname}>
        <h3 style={{margin: 10}}>Resource overview</h3>
        {/* <Button color="primary" onClick={(e) => console.log(projects)}>LOG</Button> */}

        {/* <Button color="primary" onClick={(e) => alignGuids(getDefaultSession())}>CONVERT</Button> */}
        <FormControl style={{margin: 20}}>
        <InputLabel id="demo-simple-select-helper-label">Mapping</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={mapping}
          onChange={(e) => setMapping(e.target.value)}
        >
          <MenuItem value={"stakeholder"}>Stakeholder</MenuItem>
        </Select>
        <FormHelperText>Choose how project resources should be organised</FormHelperText>
      </FormControl>
      <hr/>
      <div/>
      {selectMapping()}
        <div>
                      <Button variant="contained" color="primary" style={{margin: 10, position: "fixed", bottom: 10, left: 70}} onClick={(e) => setUpload(true)}>Upload</Button>
              <UploadFileDialog onClose={async () => {setUpload(false)}} open={upload} currentProject={project} session={getDefaultSession()}></UploadFileDialog>
        </div>
        <div>
              <Button variant="contained" color="primary" style={{margin: 10, position: "fixed", bottom: 10, left: 170}} onClick={async (e) => {if (!icddReady) {await bundleIcdd()} else {
                icddUrl.click()
              }}}>{icddReady ? "Download ICDD" : "ICDD dump"}</Button>
        </div>
   </StylesProvider>
  );
};
