import React, { useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import { Grid, TextField, Radio, RadioGroup, FormControlLabel, FormControl, Button } from '@material-ui/core'

function Forms() {
    const [radioStatus, setRadioStatus] = useState('one')

    const radioHandler = status => {
        setRadioStatus(status)
    }

    const handleChange = (event) => {
        setRadioStatus(event.target.value);
    }

    return (
        <div className="forms-wrapper">
            <h3 className="h3 mb-3">Reports Form</h3>
            <div className="forms-radio-btns">
                <FormControl component="fieldset">
                    <RadioGroup aria-label="gender" name="gender1" value={radioStatus} onChange={handleChange}>
                        <FormControlLabel value="one" control={<Radio />} label="Device Connections" />
                        <FormControlLabel value="two" control={<Radio />} label="Gift Card Reports" />
                        <FormControlLabel value="three" control={<Radio />} label="Activity Configured Clients Reports" />
                    </RadioGroup>
                </FormControl>
            </div>

            <div className="form-result mt-4">
                {radioStatus === 'one' && (
                    <div className="form-result-1">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <h4 className="h4 mb-2">Result</h4>
                                <h6 className="h6 mb-2">Device Connections</h6>
                            </Grid>
                            <form>
                                <Grid container spacing={3} className="plr-12">
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 1" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 2" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 3" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="primary">Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </div>
                )}
                {radioStatus === 'two' && (
                    <div className="form-result-2">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <h4 className="h4 mb-2">Result</h4>
                                <h6 className="h6 mb-2">Gift Card Reports</h6>
                            </Grid>
                            <form>
                                <Grid container spacing={3} className="plr-12">
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 1" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 2" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 3" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 4" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 5" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="primary">Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </div>
                )}
                {radioStatus === 'three' && (
                    <div className="form-result-3">
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <h4 className="h4 mb-2">Result</h4>
                                <h6 className="h6 mb-2">Activity Configured Clients Reports</h6>
                            </Grid>
                            <form>
                                <Grid container spacing={3} className="plr-12">
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 1" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 2" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 3" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 4" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 5" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 6" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 7" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={4}>
                                        <TextField id="outlined-basic" label="Input 8" variant="outlined" />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Button variant="contained" color="primary">Submit</Button>
                                    </Grid>
                                </Grid>
                            </form>
                        </Grid>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Forms
