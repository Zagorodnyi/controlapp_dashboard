import React, { Component } from 'react'
// REDUX
import { connect } from 'react-redux'
import { getAlldevices, postNewSettings, setActiveDevice, setScale, setSource } from '../../redux/actions/confidenceSettingsActions'
// MUI CORE
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from '@material-ui/core/Slider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListIcon from '@material-ui/core/ListItemIcon'
import Button from '@material-ui/core/Button'
// STYLES
import { withStyles } from '@material-ui/core/styles'
import { containerItem } from '../../assets/css/App.module.css'
import styles from '../../assets/jss/SettingsBlock/SettingsBlockStyles'
// ASSETS
import CheckImg from '../../assets/img/check.svg'
import online from '../../assets/img/online.png'

class SettingsBlock extends Component {

    componentDidMount() {
        this.props.getAlldevices()
    }

    generateDeviceMenu = () => (
        this.props.deviceList.map((device, index) => {
            return (
                <MenuItem
                    key={index}
                    value={device.deviceId}
                    style={{ display: "flex", position: "relative", justifyContent: "space-between", }}
                >
                    {device.deviceName}
                    {device.connected
                        ? <ListItemIcon>
                            <img alt="online" width="10px" height="10px" style={{ margin: '0 auto' }} src={online} />
                        </ListItemIcon>
                        : null}
                </MenuItem>
            )
        })
    )

    generateList = () => {
        const videoDevices = this.props.deviceInfo.deviceList.filter((device) => {
            return device.kind === "videoinput";
        });
        return videoDevices.map((device, index) => {
            return (
                <ListItem
                    button
                    key={index}
                    onClick={() => this.props.setSource(device.deviceId)}
                    style={{ display: "flex", justifyContent: "space-between", width: "100%" }}
                >
                    {device.label}
                    {this.props.deviceInfo.currentDevice === device.deviceId ? (
                        <ListIcon>
                            <img alt="check" src={CheckImg} width="20px" height="20px" />
                        </ListIcon>
                    ) : null}
                </ListItem>
            );
        });
    };

    onDeviceClick = (event) => {
        this.props.setActiveDevice(event.target.value)
    }

    render() {
        const { classes } = this.props
        return (
            <div className={containerItem + " " + classes.block}>
                <h1>Устройства</h1>
                <Select
                    className={classes.select}
                    value={this.props.activeDevice}
                    onChange={this.onDeviceClick}>
                    {this.generateDeviceMenu()}
                </Select>

                {this.props.activeDevice
                    ? (
                        <div className={classes.deviceSettings}>
                            <List className={classes.list}>
                                {this.generateList()}
                            </List>
                            <Slider
                                style={{ width: "50%", margin: "auto", paddingBottom: "20px" }}
                                value={this.props.deviceInfo.scale}
                                onChange={(event, value) => {
                                    if (this.props.scale !== value) {
                                        this.props.setScale(value);
                                    }
                                    return;
                                }}
                                marks
                                defaultValue={1}
                                step={0.5}
                                min={1}
                                max={4}
                                aria-labelledby="discrete-slider"
                                valueLabelDisplay="auto"
                            />
                            <div>
                                <Button
                                    onClick={this.props.postNewSettings.bind(this, this.props.deviceInfo)}
                                    color='primary'
                                >Send</Button>
                            </div>
                        </div>
                    )
                    : null
                }
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    deviceList: state.deviceList,
    activeDevice: state.activeDevice,
    deviceInfo: state.deviceInfo
})
const mapActionsToProps = {
    getAlldevices,
    postNewSettings,
    setActiveDevice,
    setScale,
    setSource
}

export default connect(mapStateToProps, mapActionsToProps)(withStyles(styles)(SettingsBlock))