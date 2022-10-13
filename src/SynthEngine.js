import { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Silver } from "react-dial-knob";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";

export default function SynthEngine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0);
  const [delayAmount, setDelayAmount] = useState(0);
  const [distortionAmount, setDistortionAmount] = useState(0);
  const [tremoloAmount, setTremoloAmount] = useState(0);
  const [steps] = useState([
    "E3", null, null, "G3", null, "B3", null, null, null, null, "G3", null, "D3", null, null, null,"E3", "D3", null, "G3", null, "C3", null, null, "C3", null, "G3", null, "D3", null, null, null, ["E3", "G3"], null, null, "G3", null, "B3", null, null, null, null, "G3", null, "D3", null, null, "E3", null, ["D3", "B4"], "A4", ["G3", "C4"], null, "C3", "A4", null, "C3", null, "G3", null, "D3", null, null, null,
  ]);
  const [synthType, setSynthType] = useState("amSynth");
  const [wahAmount, setWahAmount] = useState(0);
  const envelope = {
    attack: 0.2,
    decay: 0.2,
    release: 0.5,
    sustain: 0
  };
  const [sustainAmount, setSustain] = useState(0);

  

  return (
    <div>
      <Song isPlaying={isPlaying} bpm={250}>
        <Track steps={steps} volume={volume}>
          <Instrument type={synthType} sustain={sustainAmount} />
          {/* setup effects chain */}
          <Effect type="autoWah" wet={wahAmount} />
          <Effect type="distortion" wet={distortionAmount} />
          <Effect type="feedbackDelay" wet={delayAmount} />
          <Effect type="tremolo" wet={tremoloAmount} />
          {/* <Effect type="sustain" wet={sustainAmount} /> */}
        </Track>
      </Song>

      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        className="CenterAlign"
      >
        <Silver
          diameter={100}
          min={-50}
          max={20}
          step={1}
          value={volume}
          theme={{
            donutColor: "blue",
            donutThickness: 7,
          }}
          onValueChange={setVolume}
          ariaLabelledBy={"volume"}
        >
          <label id={"volume"}>Volume</label>
        </Silver>
        <Silver
          diameter={100}
          min={0}
          max={12}
          step={1}
          value={wahAmount}
          theme={{
            donutColor: "orange",
            donutThickness: 7,
          }}
          onValueChange={setWahAmount}
          ariaLabelledBy={"delay-amount"}
        >
          <label id={"delay-amount"}>AutoWah</label>
        </Silver>
        <Silver
          diameter={100}
          min={0}
          max={12}
          step={1}
          value={delayAmount}
          theme={{
            donutColor: "purple",
            donutThickness: 7,
          }}
          onValueChange={setDelayAmount}
          ariaLabelledBy={"delay-amount"}
        >
          <label id={"delay-amount"}>Delay</label>
        </Silver>
        <Silver
          diameter={100}
          min={0}
          max={1}
          step={0.125}
          value={distortionAmount}
          theme={{
            donutColor: "purple",
            donutThickness: 7,
          }}
          onValueChange={setDistortionAmount}
          ariaLabelledBy={"delay-amount"}
        >
          <label id={"delay-amount"}>Distortion</label>
        </Silver>
        <Silver
          diameter={100}
          min={0}
          max={12}
          step={1}
          value={tremoloAmount}
          theme={{
            donutColor: "aqua",
            donutThickness: 7,
          }}
          onValueChange={setTremoloAmount}
          ariaLabelledBy={"delay-amount"}
          >
            <label id={"delay-amount"}>Tremolo</label>
          </Silver>
      </Stack>
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        className="CenterAlign"
      >
        <Silver
          diameter={100}
          min={0}
          max={12}
          step={1}
          value={sustainAmount}
          theme={{
            donutColor: "blue",
            donutThickness: 7,
          }}
          onValueChange={setSustain}
          ariaLabelledBy={"volume"}
        >
          <label id={"volume"}>Sustain</label>
        </Silver>
        </Stack>
      <br />
      <br />


      <Stack alignItems="center" className="CenterAlign">
        <FormControl component="fieldset">
          <FormLabel components="legend">Synth Engine</FormLabel>
          <RadioGroup
            aria-label="synth-engine"
            defaultValue="amSynth"
            name="radio-buttons-group"
          >
            <FormControlLabel
              value="amSynth"
              control={<Radio onClick={() => setSynthType("amSynth")} />}
              label="amSynth"
            />
            <FormControlLabel
              value="fmSynth"
              control={<Radio onClick={() => setSynthType("fmSynth")} />}
              label="fmSynth"
            />
            <FormControlLabel
              value="membraneSynth"
              control={<Radio onClick={() => setSynthType("membraneSynth")} />}
              label="membraneSynth"
            />
            <FormControlLabel
              value="synth"
              control={<Radio onClick={() => setSynthType("synth")} />}
              label="synth"
              />
          </RadioGroup>
        </FormControl>
        <br />
        <br />
        <button
          onClick={() => {
            setIsPlaying(!isPlaying);
          }}
        >
          {isPlaying ? "Stop" : "Play"}
        </button>
        <br />
        <br />
        <br />
      </Stack>
      
    </div>
  );
}
