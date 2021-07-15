import React from "react";
import DataTable from "../components/Datatable/index";
import Service from "../view/service";
import { makeStyles, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    padding: "15px 50px",
    marginTop: "50px",
  },
}));

function Index() {
  const classes = useStyles();

  const TableData = Service();

  return (
    <div className={classes.pageContent}>
      <Grid container>
        <Grid item xs={12} md={12}>
          <DataTable
            data={TableData}
            title={"Clients"}
            searchFieldName={"companyName"}
          />
        </Grid>
      </Grid>
    </div>
  );
}

export default Index;
