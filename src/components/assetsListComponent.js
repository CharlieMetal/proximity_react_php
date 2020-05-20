import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import { CSVLink } from "react-csv";
import MaterialTable from "material-table";

import { forwardRef } from 'react';


import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';
import Button from '@material-ui/core/Button';
import SaveIcon from '@material-ui/icons/Save';

const tableIcons = {
    Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
    Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
    Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
    DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
    Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
    Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
    FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
    LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
    NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
    PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
    ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
    Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
    SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
    ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
    ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
  };

const AssetsListComponent = ({assets}) => {
    //CSV Export  
    const headers = [
        { label: "ID", key: "id" },
        { label: "Acquisition Date", key: "acquisition_date" },
        { label: "Name", key: "name" },
        { label: "Registration Number", key: "registration_number" },
        { label: "Next Service", key: "next_service" },
        { label: "Service Type", key: "service_type" },
        { label: "Service Status", key: "service_status" }                        
      ];
       
      const data = assets;
      //END
        return (
            <Container className="assets-list-component">
                <MaterialTable
                icons={tableIcons}
                columns={[
                    { title: "Acquisition Date", field: "acquisition_date", type: "numeric",
                        headerStyle: {
                            backgroundColor: '#3F51B5',
                            color: "#FFFFFF",                            
                        }
                    },
                    { title: "Name", field: "name",
                        headerStyle: {
                            backgroundColor: '#3F51B5',
                            color: "#FFFFFF",
                        }
                    },
                    { title: "Registration Number", field: "registration_number", type: "numeric",
                        headerStyle: {
                            backgroundColor: '#3F51B5',
                            color: "#FFFFFF",                            
                        }
                    },
                    { title: "Next Service", field: "next_service", type: "numeric",
                        headerStyle: {
                            backgroundColor: '#3F51B5',
                            color: "#FFFFFF",                            
                        }
                    },
                    { title: "Service Type", field: "service_type",
                        headerStyle: {
                            backgroundColor: '#3F51B5',
                            color: "#FFFFFF",                            
                        }
                    },
                    { title: "Service Status", field: "service_status",
                        headerStyle: {
                            backgroundColor: '#3F51B5',
                            color: "#FFFFFF",                            
                        }                
                    },

                ]}
                data={assets}
                options={{
                    exportButton: true,
                  }}
                  
                title="Assets Lists"
                />
                <br/>

                <CSVLink 
                    data={data}
                    headers={headers}
                    className="download-button"
                    filename={"full-assets-list-xyz.csv"}
                >
                Download Full Assets List
                </CSVLink>                
            </Container>

        )
};

AssetsListComponent.propTypes = {
    assets: PropTypes.array.isRequired,
};

export default AssetsListComponent;