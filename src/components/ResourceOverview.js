import React from "react";
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
import { deleteResource } from "consolid";
export default function ResourceOverview(props) {
  const { dataset, setActiveResources, activeResources, session } = props;
  const { artefactRegistry, accessRights, metadata, main } = dataset;
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
    console.log(`dataset`, dataset);
    await deleteResource(dataset, session);
    const newArray = activeResources.filter((value, i, arr) => {
      return value.main !== main;
    });
    setActiveResources(newArray);
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

        <Grid item xs={4}>
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
      </Grid>
    </div>
  );
}
