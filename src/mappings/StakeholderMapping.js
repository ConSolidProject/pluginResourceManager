import React, { useEffect, useState } from "react";
import { getProjectResourcesByStakeholder } from "../functions";
import { Typography } from "@material-ui/core";
import ResourceOverview from "../components/ResourceOverview";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";

export default function StakeholderMapping({ sharedProps }) {
  const { projects, setActiveResources, activeResources, trigger, session } = sharedProps;
  const [resources, setResources] = useState([])
  const project = projects[0]

  useEffect(() => {
    getProjectResourcesByStakeholder(project, session).then(res => setResources(res))
  }, [activeResources, trigger])

  return (
    <div>
      {Object.keys(resources).map((item) => {
        return (
          <div style={{marginBottom: 20}} key={item}>
            <Typography>{item}: </Typography>
            {resources[item].map((res) => {
              return (
                <div key={res.metadata}>
                      <ResourceOverview
                        session={session}
                        dataset={res}
                        activeResources={activeResources}
                        setActiveResources={setActiveResources}
                      />
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
