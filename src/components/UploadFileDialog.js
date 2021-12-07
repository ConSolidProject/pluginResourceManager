import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  TextField,
  Typography,
  DialogContent,
  DialogActions,
  Button,
  CircularProgress,
  DialogContentText,
  Checkbox,
  FormControlLabel,
  FormControl,
  Divider,
  MenuItem,
  InputLabel,
  Select,
} from "@material-ui/core";
import CloudUploadIcon from "@material-ui/icons/CloudUpload";
import { useQuery } from "react-query";
import { getDataset, getDatasetsOfPartial } from "consolid";
const short = require("short-uuid");


// import {
//   createGlobalArtefactsFromGltf,
//   createGlobalArtefactsFromLbd,
// } from "../functions";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

import { createDataset, createDistribution } from "consolid";

const typeExtensions = {
  graph: ["ttl", "rdf"],
  ifc: ["ifc"],
};

const UploadFileDialog = (props) => {
  const { project, setTrigger, store, session, setDatasets } = props;
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(null);
  const [label, setLabel] = useState(short.generate());
  const [description, setDescription] = useState("test");
  const [dataset, setDataset] = useState("CREATE NEW");
  const [createNew, setCreateNew] = useState(false);
  const [gltfQuestion, setGltfQuestion] = useState(false);
  const [gltfChecked, setGltfChecked] = useState(false);

  const { isLoading, isError, data, error } = useQuery(
    "datasets",
    async () => await getDatasetsOfPartial(project + "/local/", session)
  );

  function handleInput(e) {
    e.preventDefault();
    console.log(`e.target.files[0]`, e.target.files[0]);
    // let mimeType = mime.lookup(e.target.files[0].name);
    // console.log(`mimeType`, mimeType);
    // if (mimeType === "model/gltf+json" || mimeType === "text/turtle") {
    // setGltfQuestion(true);
    // }
    setFile(e.target.files[0]);
  }

  function isValidHttpUrl(string) {
    let url;

    try {
      url = new URL(string);
    } catch (_) {
      return false;
    }

    return url.protocol === "http:" || url.protocol === "https:";
  }

  async function uploadInput() {
    let dsUrl;
    const projectId = project.split("/")[project.split("/").length - 2];
    console.log(`projectId`, projectId);
    if (!isValidHttpUrl(dataset)) {
      dsUrl = await createDataset(
        projectId,
        { title: label, keywords: [] },
        {},
        session
      );
    } else {
      dsUrl = dataset;
    }
    console.log(`dsUrl`, dsUrl)
    const exists = await session
      .fetch(dsUrl, { method: "HEAD" })
      .then((s) => s.status);
    if (exists == 200) {
      const formData = new FormData();
      formData.append("file", file, file.name);
      formData.append("title", label);
      formData.append("keywords", [label]);
      const distribution = await createDistribution(
        projectId,
        dsUrl,
        formData,
        {},
        session
      );
      console.log(`distribution`, distribution);
    } else {
      throw Error("could not find dataset");
    }

    setDatasets((prev) => {
      return [...prev, dsUrl];
    });
    setLoading(false);
    props.onClose();
  }

  return (
    <div>
      <Dialog
        open={props.open}
        onClose={props.onClose}
        aria-labelledby="form-dialog-title"
        // style={{width: 400, height: 500}}
      >
        <DialogTitle id="form-dialog-title">
          Upload a distribution of a certain dataset
        </DialogTitle>
        <DialogContent>
          <Divider />
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Current Datasets
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={dataset}
              label="Current Datasets"
              onChange={(e) => {
                console.log(`e.target.value`, e.target.value);
                setDataset(e.target.value);
              }}
            >
              <MenuItem value={"CREATE NEW"}>CREATE NEW</MenuItem>
              {data &&
                data.map((ds) => {
                  return (
                    <MenuItem key={ds.url} value={ds.url}>
                      {ds.url}
                    </MenuItem>
                  );
                })}
            </Select>
          </FormControl>
          <Divider />{" "}
          <TextField
            fullWidth
            style={{ margin: 10 }}
            variant="standard"
            type="file"
            onChange={handleInput}
          />
          <TextField
            fullWidth
            id="standard-multiline-flexible"
            label="Dataset title (unique)"
            fullWidth
            value={label}
            onChange={(e) => setLabel(e.target.value)}
            style={{ marginTop: 10, marginBottom: 10 }}
          />{" "}
        </DialogContent>

        <DialogActions>
          {gltfQuestion ? (
            <FormControlLabel
              control={
                <Checkbox
                  checked={gltfChecked}
                  onChange={() => setGltfChecked((prev) => !prev)}
                  color="primary"
                />
              }
              label="Create global identifiers for GLTF or LBD"
            />
          ) : (
            <p></p>
          )}

          <Button onClick={props.onClose} color="primary">
            Cancel
          </Button>
          <Button
            onClick={uploadInput}
            variant="contained"
            color="primary"
            component="span"
            startIcon={<CloudUploadIcon fontSize="large" />}
            disabled={(!file && !createNew) || loading}
          >
            Upload
            {loading && <CircularProgress size={20} />}{" "}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

async function convertIFC(file, type, baseUri) {
  const formData = new FormData();
  formData.append("ifcFile", file, file.name);

  if (baseUri) {
    formData.append("baseUri", baseUri);
  }

  const response = await axios.post(`http://localhost:4800/${type}`, formData, {
    responseType: "arraybuffer",
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  console.log("response.data", response.data);
  const toFile = new File([response.data], "conversion.ttl");
  console.log("file", toFile);
  return toFile;
}

export default UploadFileDialog;
