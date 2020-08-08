import React from "react";
import Grid from '@material-ui/core/Grid';
import FilterButton from '../FilterButton/FilterButton';
import './FilterCard.css';

const yearList = ["2006", "2007", "2008", "2009", "2010", "2011", "2012", "2013", "2014", "2015", "2016", "2017", "2018", "2019", "2020"];

const FilterCard = props => {
    const { filterParam, handleChange } = props;
    const launchFilterApplied = "launch_success" in filterParam;
    let launchStatus;
    if (launchFilterApplied){
        launchStatus = filterParam["launch_success"].toString() === 'true';
    }

    const landingFilterApplied = "landing_success" in filterParam;
    let landingStatus;
    if (landingFilterApplied) {
        landingStatus = filterParam["landing_success"].toString() === 'true';
    }

    return (
        <div className="FilterCard">
            <p><b>Filters</b></p>
            <div className="year-filter-container">
                <p className="filter-heading">Launch Year</p>
                <hr/>
                <Grid container spacing={3}>
                    {yearList.map((year, idx) => {
                        const yearSelected = filterParam.launch_year === year;
                        return (
                            <Grid item xs={6} className="grid-margin" key={"launch_year"+year}>
                                <FilterButton
                                    keyValue="launch_year"
                                    label={year}
                                    value={year}
                                    handleChange={handleChange}
                                    selected={yearSelected}
                                />
                            </Grid>
                        )
                    })}
                </Grid>
                <p className="filter-heading">Successful Launch</p>
                <hr />
                <div className="filter-boolean">
                    <Grid container spacing={3}>
                        <Grid item xs={6} className="grid-margin">
                            <FilterButton
                                keyValue="launch_success"
                                label="True"
                                value={true}
                                handleChange={handleChange}
                                selected={launchFilterApplied && launchStatus}
                            />
                        </Grid>
                        <Grid item xs={6} className="grid-margin">
                            <FilterButton
                                keyValue="launch_success"
                                label="False"
                                value={false}
                                handleChange={handleChange}
                                selected={launchFilterApplied && !launchStatus}
                            />
                        </Grid>
                    </Grid>
                </div>
                <p className="filter-heading">Successful Landing</p>
                <hr />
                <div className="filter-boolean">
                    <Grid container spacing={3}>
                        <Grid item xs={6} className="grid-margin">
                            <FilterButton
                                keyValue="landing_success"
                                label="True"
                                value={true}
                                handleChange={handleChange}
                                selected={landingFilterApplied && landingStatus}
                            />
                        </Grid>
                        <Grid item xs={6} className="grid-margin">
                            <FilterButton
                                keyValue="landing_success"
                                label="False"
                                value={false}
                                handleChange={handleChange}
                                selected={landingFilterApplied && !landingStatus}
                            />
                        </Grid>
                    </Grid>
                </div>
            </div>
        </div>
    )
}

export default FilterCard;