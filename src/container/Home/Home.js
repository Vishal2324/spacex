import React, { Component } from 'react';
import Axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Layout from '../../hoc/Layout';
import LaunchCard from './SubComponents/LaunchCard/LaunchCard';
import FilterCard from './SubComponents/FilterCard/FilterCard';

class Home extends Component {
    state = {
        allLaunchPrograms: [],
        filterSelected: {},
        loading: false
    }

    componentDidMount(){
        const { location } = this.props;
        if (location.search && location.search !== "") {
            const search = location.search.substring(1);
            const paramObj = JSON.parse('{"' + decodeURI(search).replace(/"/g, '\\"').replace(/&/g, '","').replace(/=/g, '":"') + '"}');
            this.setState({ filterSelected: paramObj });
        } else {
            this.fetchPrograms("");
        }
    }

    fetchPrograms = params => {   
        this.setState({loading: true}, () => {
            Axios.get(`https://api.spacexdata.com/v3/launches?limit=100${params}`)
                .then(res => {
                    this.setState({ 
                        allLaunchPrograms: res.data,
                        loading: false
                    })
                })
                .catch(err => {
                    console.log("err", err)
                    this.setState({ loading: false })
                })
        })
    }

    handleChange = (value, key) => {
        const { history } = this.props;
        const { filterSelected } = this.state;
        const newFilter = { ...filterSelected };

        // will remove filter if user clicks on same filter which is already applied
        if (key in newFilter && newFilter[key] ===  value){
            delete newFilter[key];
        } else {
            newFilter[key] = value;
        }

        const qs = Object.keys(newFilter)
            .map(key => `${key}=${newFilter[key]}`)
            .join('&');
        history.push({ pathname: "/", search: qs });

        this.setState({ filterSelected: newFilter });
    }

    checkFilterDiff = (prevFilter, newFilter) => {   
        var prevProps = Object.getOwnPropertyNames(prevFilter);
        var newProps = Object.getOwnPropertyNames(newFilter);

        if (prevProps.length !== newProps.length) {
            return false;
        }

        for (var i = 0; i < prevProps.length; i++) {
            var propName = prevProps[i];
            if (prevFilter[propName] !== newFilter[propName]) {
                return false;
            }
        }

        return true;
    }

    componentDidUpdate(prevProps, prevState) {
        // will update launch program data only if related state change
        if (!this.checkFilterDiff(prevState.filterSelected, this.state.filterSelected)) {
            const qs = Object.keys(this.state.filterSelected)
                .map(key => `${key}=${this.state.filterSelected[key]}`)
                .join('&');
            this.fetchPrograms(`&${qs}`);
        }
    }

    render(){
        const { allLaunchPrograms, loading, filterSelected } = this.state;

        let launchPrograms = allLaunchPrograms.length > 0 ? allLaunchPrograms.map((program, idx) =>
                <Grid item xs={12} sm={6} lg={3} key={program.mission_name + idx}>
                    <LaunchCard {...program} />
                </Grid>
        ) : <p>No launch programs to show</p>
        
        if (loading){
            launchPrograms = <p>Fetching Launch Programs...</p>
        }

        return (
            <Layout>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={3}>
                        <FilterCard handleChange={this.handleChange} filterParam={filterSelected} />
                    </Grid>
                    <Grid item xs={12} sm={9}>
                        <Grid container spacing={1} style={{maxHeight: "85vh", overflowY: "auto"}}>
                            {launchPrograms}
                        </Grid>
                    </Grid>
                </Grid>
            </Layout>
        )
    }
}

export default Home;
