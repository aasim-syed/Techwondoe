import React from 'react'
import { Button as MuiButton, makeStyles } from "@material-ui/core";
import AudioReactRecorder, { RecordState } from 'audio-react-recorder'


class Audiorec extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      recordState: null,
      audioData: null
    }
  }

  start = () => {
    this.setState({
      recordState: RecordState.START
    })
  }

  pause = () => {
    this.setState({
      recordState: RecordState.PAUSE
    })
  }

  stop = () => {
    this.setState({
      recordState: RecordState.STOP
    })
  }

  onStop = (data) => {
    this.setState({
      audioData: data
    })
    console.log('onStop: audio data', data)
  }

  render() {
    const { recordState } = this.state

    return (
      <div>
        <AudioReactRecorder
          state={recordState}
          onStop={this.onStop}
          backgroundColor='rgba(60,30,110,0.8)'
          backdropFilter='saturate(180%) blur(30px)'
        />
        <audio
         style={{background:'rgba(0,0,0,0.8)',color:'white',backdropFilter:' saturate(180%) blur(30px)',borderRadius:'12px',fontFamily:'Inter',padding:'10px'}}
          id='audio'
          controls
          src={this.state.audioData ? this.state.audioData.url : null}
        ></audio>
        <MuiButton style={{backgroundColor:'lightgreen',borderRadius:'12px',fontFamily:'Inter',padding:'7px',fontSize:'15px'}} id='record' onClick={this.start}>
          Start 🎙️🎤
        </MuiButton>
        <MuiButton style={{backgroundColor:'yellow',borderRadius:'12px',fontFamily:'Inter',padding:'9px',fontSize:'15px'}} id='pause' onClick={this.pause}>
          Pause⏯️⏸️
        </MuiButton>
        <MuiButton style={{backgroundColor:'red',borderRadius:'12px',fontFamily:'Inter',padding:'11px',color:'darkpurple',fontSize:'17px'}} id='stop' onClick={this.stop}>
          Stop🤚⏹️
        </MuiButton>
      </div>
    )
  }
}

export default Audiorec

// export default Audiorec

