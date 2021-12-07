import React, { useEffect, useState } from "react";
import { Typography } from "@material-ui/core";
import ResourceOverview from "../components/ResourceOverview";
import { getDataset } from "consolid";

export default function StakeholderMapping({ sharedProps }) {
  const {
    projects,
    setDatasets,
    datasets,
    trigger,
    setTrigger,
    session,
    store,
  } = sharedProps;
  // const [stakeholders, setStakeholders] = useState([]);
  const [project, setProject] = useState(projects[Object.keys(projects)[0]])
  useEffect(() => {
    const project = projects[Object.keys(projects)[0]]
    console.log("fetching datasets again!")
    async function getProjectAndDatasets() {
      // const guid = project.split("/")[project.split("/").length - 2];
      // const data = await getProjectData(guid, session).then((res => res.json()))
      // setStakeholders(() => data);
      // console.log(`datasets`, datasets)
          const dset = {}
          for (const st of Object.keys(project)) {
            for (const dataset of project[st].ds.datasets) {
              console.log(`dataset`, dataset)
              if (!datasets[dataset]) {
                const ds = await getDataset(dataset, session)
                dset[dataset] = ds
              }

            }
          }
          setDatasets(prev => {return {...dset, ...prev}})
    }

    getProjectAndDatasets()
  }, [projects]);

  return (
    <div>
      {Object.keys(project).map((item) => {
        return (
          <div style={{ marginBottom: 20 }} key={item}>
            <Typography>{item}: </Typography>
            {Object.keys(datasets).map((l) => {
              if (datasets[l]) {
                return (
                  <ResourceOverview
                    key={l}
                    name={l}
                    session={session}
                    project={project}
                    dataset={datasets[l]}
                    setTrigger={setTrigger}
                    setDatasets={setDatasets}
                  />
                );
              }

              // return <p>{l.split("/")[l.split('/').length -1]}</p>
            })}
          </div>
        );
      })}
    </div>
  );
}
