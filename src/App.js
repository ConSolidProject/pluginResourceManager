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
  FormControlLabel,
  FormGroup,
  Switch,
  Grid,
  FormHelperText,
  Typography,
} from "@material-ui/core";
import { v4 } from "uuid";
import UploadFileDialog from "./components/UploadFileDialog";
// import { StakeholderMapping } from "./mappings";
import getICDD from "./functions/getICDD";
import { alignGltfAndLbd, alignGuids } from "./functions";
import { getDefaultSession } from "@inrupt/solid-client-authn-browser";
import { getProject } from "consolid";
import { getLdpMembers, queryComunica } from "consolid";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getDatasetsOfPartial } from "consolid";

const queryClient = new QueryClient();
const packageJSON = require("../package.json");

const generateClassname = createGenerateClassName({
  productionPrefix: packageJSON.name,
  seed: packageJSON.name,
});

export default (props) => {
  if (props.inactive) return <></>;
  return (
    <StylesProvider generateClassName={generateClassname}>
      <QueryClientProvider client={queryClient}>
        <Insertion {...props} />
      </QueryClientProvider>
    </StylesProvider>
  );
};

function Insertion(props) {
  const [upload, setUpload] = useState(false);
  const [loading, setLoading] = useState(false);
  const { sharedProps, inactive } = props;
  const {
    projects,
    setProjects,
    setTrigger,
    trigger,
    store,
    datasets,
    setDatasets,
    session,
  } = sharedProps;
  const { isLoading, isError, data, error } = useQuery(
    "stakeholders",
    async () => await getStakeholders(projects[0], session)
  );



  async function alignResources() {
    try {
      setLoading(true);
      // await alignGltfAndLbd(datasets, session, store, project);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  async function getStakeholders(p, s) {
    const partials = await getLdpMembers(p, s);
    const st = [];
    for (const partial of partials) {
      console.log(`partial`, partial)
      try {
        const res = await queryComunica(
          `select ?i where {?p <http://purl.org/dc/terms/creator> ?i}`,
          [partial],
          { results: true, single: true, variable: "i" },
          s
        );
        st.push({ stakeholder: res, url: partial });
      } catch (error) {
        console.log(`error`, error);
      }
    }
    return st;
  }

  return (
    <div>
      <h3 style={{ margin: 10 }}>Resource overview</h3>
      <div>
        {data &&
          data.map((item) => {
           return <div>
             <h4 style={{marginLeft: 15}}>{item.stakeholder}:</h4>
             <StakeholderOverview key={item.url} {...sharedProps} {...item} />
             </div>
          })}
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
                // const projectId = project[session.info.webId].id;
                // const detail = await getProject(projectId, session, {});
                // setProjects((proj) => {
                //   return { ...proj, [project]: detail };
                // });
                // setTrigger(v4());
              }}
              open={upload}
              project={projects[0]}
              session={session}
              setDatasets={setDatasets}
            ></UploadFileDialog>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

function StakeholderOverview(props) {
  const {
    datasets,
    setDatasets,
    session,
  } = props;
    const {
    isLoading,
    isError,
    data,
    refetch,
    error,
  } = useQuery(
    `${props.url}_datasets`,
    async () => await getDatasetsOfPartial(props.url, session)
  );

  useEffect(() => {
    refetch()
  }, [datasets])

  function handleChange(item) {
    if (datasets.includes(item.url)) {
      console.log("filter out")
      const d = datasets.filter(o => o !== item.url)
      setDatasets(d)
    } else {
      console.log("filter in")

      setDatasets(o => [...o, item.url])
      console.log(`[...o, item.url]`, [...o, item.url])
    }
  }
  return (
    <Grid style={{marginLeft: 30}} container spacing={2}>      {data && data.map((i) => {
        return (
          <Grid item xs={8}>
          <FormControl key={i.url}>
            <FormGroup>
                <FormControlLabel
                  control={
                    <Switch
                      checked={datasets.includes(i.url)}
                      onChange={(e) => handleChange(i)}
                      color="primary"
                    />
                  }
                  color="primary"
                  label={i.title}
                />
            </FormGroup>
          </FormControl>
          </Grid>
        );
      })}
    </Grid>
  );
}
