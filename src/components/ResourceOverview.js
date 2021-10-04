import React, {useState, useEffect} from "react";
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Switch,
  IconButton,
  Grid,
  Item
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import SyncIcon from '@material-ui/icons/Sync';
import { deleteResource, getAccessRights } from "consolid";
import mime from "mime-types";
import { createGlobalArtefactsFromGltf, createGlobalArtefactsFromLbd } from "../functions";

export default function ResourceOverview(props) {
  const { dataset, setActiveResources, activeResources, session, setTrigger, store, project } = props;
  const { artefactRegistry, accessRights, metadata, main } = dataset;
  const [artAccess, setArtAccess] = useState([])

  useEffect(() => {
    getAccessRights(artefactRegistry, session).then(a => setArtAccess(a))
  }, [])

  function handleChange(e) {
    const ar = activeResources.map((r) => r.main);
    if (!ar.includes(main)) {
      setActiveResources([...activeResources, dataset]);
    } else {
      const newArray = activeResources.filter((value, i, arr) => {
        return value.main !== main;
      });
      setActiveResources(newArray);
    }
  }

  async function onDeleteClick() {
    await deleteResource(dataset, session);
    const newArray = activeResources.filter((value, i, arr) => {
      return value.main !== main;
    });
    setActiveResources(newArray);
  }

  async function syncWithArtReg() {
    const mimeType = mime.lookup(main)
    if (mimeType === "model/gltf+json") {
      await createGlobalArtefactsFromGltf(main, artefactRegistry, store, project, session)
    } else  if (mimeType === "text/turtle") {
      await createGlobalArtefactsFromLbd(main, artefactRegistry, store, project, session)
    }
    setTrigger(t => t+ 1)
  }

  return (
    <div style={{ marginLeft: 25 }}>
      <Grid container spacing={2}>
        <Grid item xs={8}>
            {" "}
            <FormControl>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={activeResources
                        .map((r) => r.main)
                        .includes(main)}
                      onChange={handleChange}
                      color="primary"
                    />
                  }
                  color="primary"
                  // label={`${parse(props.resource.metadata)["rdfs:label"]} (${props.info.type})`}
                  label={main.split("/")[main.split("/").length - 1]}
                />
              </FormGroup>
            </FormControl>
        </Grid>

        <Grid item xs={2}>
            {" "}
            {accessRights.includes("write") ? (
              <IconButton
                style={{bottom: 5}}
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={onDeleteClick}
              >
                <DeleteIcon />
              </IconButton>
            ) : (
              <></>
            )}
        </Grid>
        <Grid item xs={2}>
            {" "}
            {artAccess.includes("write") ? (
              <IconButton
                style={{bottom: 5}}
                color="primary"
                aria-label="upload picture"
                component="span"
                onClick={syncWithArtReg}
              >
                <SyncIcon />
              </IconButton>
            ) : (
              <></>
            )}
        </Grid>
      </Grid>
    </div>
  );
}
