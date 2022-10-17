import { useEffect, useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Silver } from "react-dial-knob";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import "./SynthEngine.css";

export default function SynthEngine() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(-10);
  const [delay, setDelay] = useState({ time: 1, feedback: 0.5, mix: 0.5 });
  const [distortionAmount, setDistortionAmount] = useState(0);
  const [tremoloAmount, setTremoloAmount] = useState(0);
  const [steps] = useState([
    "E3",
    null,
    null,
    "G3",
    null,
    "B3",
    null,
    null,
    null,
    null,
    "G3",
    null,
    "D3",
    null,
    null,
    null,
    "E3",
    "D3",
    null,
    "G3",
    null,
    "C3",
    null,
    null,
    "C3",
    null,
    "G3",
    null,
    "D3",
    null,
    null,
    null,
    ["E3", "G3"],
    null,
    null,
    "G3",
    null,
    "B3",
    null,
    null,
    null,
    null,
    "G3",
    null,
    "D3",
    null,
    null,
    "E3",
    null,
    ["D3", "B4"],
    "A4",
    ["G3", "C4"],
    null,
    "C3",
    "A4",
    null,
    "C3",
    null,
    "G3",
    null,
    "D3",
    null,
    null,
    null,
  ]);
  const [synthType, setSynthType] = useState("amSynth");
  const [wahAmount, setWahAmount] = useState(0);

  // set delay mix
  const changeDelayMix = (e) => {
    setDelay({ ...delay, mix: e.target.value });
    return delay.mix;
  };

  // const getDMixVal = () => {
  //   let arr = Object.values(delay);
  //   const popped = arr.pop()

  //   console.log("DMixVal.arr.pop", popped)
  //   return popped
  // }

  // getDMixVal()
  return (
    <div>
    <div class="container">
      <Song isPlaying={isPlaying} bpm={250}>
        <Track steps={steps} volume={volume}>
          <Instrument
            type={synthType}
            envelope={{ attack: 0.1, decay: 0.1, release: 0.1, sustain: 0.9 }}
            // log={console.log("within Instrument", envelope)}
          />
          {/* setup effects chain */}
          <Effect type="autoWah" wet={wahAmount} />
          <Effect type="distortion" wet={distortionAmount} />
          <Effect type="feedbackDelay" wet={delay.mix} />
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
      <br />
      <br />
      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 2 }}
        alignItems="center"
        className="CenterAlign"
      >
        <fieldset id="delay" name="delay" className="params">
          <h2 htmlFor="delay">Delay</h2>
          <label htmlFor="delay-mix">MIX</label>
          <div class='effect-param'>
          <input
            class='effect-param-input'
            id="delay-mix"
            name="delay-mix"
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={(e) =>
              setDelay({
                ...delay,
                mix: e.target.value,
              })
            }
            value={delay.mix}
          />
          <p>{Math.floor(delay.mix * 100)}</p>
          </div>
          <label htmlFor="delay-feedback">FEEDBACK</label>
          <div class="effect-param">
          <input
            class='effect-param-input'
            id="delay-feedback"
            name="delay-feedback"
            type="range"
            min="0"
            max="1"
            step="0.01"
            onChange={(e) =>
              setDelay({
                ...delay,
                feedback: e.target.value,
              })
            }
            value={delay.feedback}
          />
          <p>{Math.floor(delay.feedback * 100)}</p>
          </div>
              <label htmlFor="delay-time">TIME</label>
              <div class='effect-param'>
              <input
              class='effect-param-input'
                id="delay-time"
                name="delay-time"
                type="range"
                min="0"
                max="1"
                step="0.1"
                onChange={(e) =>
                  setDelay({
                    ...delay,
                    time: e.target.value,
                  })
                }
                value={delay.time}
              />
              <p>{Math.floor(delay.time * 10)}</p>
              </div>
        </fieldset>
      </Stack>

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
    </div>
  );
}
