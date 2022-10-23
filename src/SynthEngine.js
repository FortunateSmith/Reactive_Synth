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
  const [delay, setDelay] = useState({ time: 0, feedback: 0, mix: 0 });
  const [distortionAmount, setDistortionAmount] = useState(0);
  const [tremoloAmount, setTremoloAmount] = useState({ mix: 0, depth: 0 });
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

  return (
    <div>
      <div class="container">
        <Song isPlaying={isPlaying} bpm={250}>
          <Track steps={steps} volume={volume}>
            <Instrument
              type={synthType}
              // envelope={{ attack: 0.1, decay: 0.1, release: 0.1, sustain: 0.9 }}
            />
            {/* setup effects chain */}
            <Effect type="autoWah" wet={wahAmount} />
            <Effect type="distortion" wet={distortionAmount} />
            <Effect
              type="feedbackDelay"
              wet={delay.mix}
              time={delay.time}
              feedback={delay.feedback}
            />
            <Effect type="tremolo" wet={tremoloAmount.mix} depth={tremoloAmount.depth} />
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
        </Stack>

        <Stack
          spacing={2}
          direction="row"
          sx={{ mb: 2 }}
          alignItems="center"
          className="CenterAlign"
        >
          <fieldset id="effect" name="tremolo" className="params">
            <h2 htmlFor="tremolo" id="tremolo-head">
              Tremolo
            </h2>
            <label htmlFor="tremolo-mix">MIX</label>
            <div class="effect-param">
              <input
                class="effect-param-input"
                id="tremolo-mix"
                name="tremolo-mix"
                type="range"
                min="0"
                max="1"
                step="0.01"
                onChange={(e) =>
                  setTremoloAmount({
                    ...tremoloAmount,
                    mix: e.target.value,
                  })
                }
                value={tremoloAmount.mix}
              />
              <p>{Math.floor(tremoloAmount.mix * 100)}</p>
            </div>
            <label htmlFor="tremolo-mix">DEPTH</label>
            <div class="effect-param">
              <input
                class="effect-param-input"
                id="tremolo-depth"
                name="tremolo-depth"
                type="range"
                min="0"
                max="1"
                step="0.01"
                onChange={(e) =>
                  setTremoloAmount({
                    ...tremoloAmount,
                    depth: e.target.value,
                  })
                }
                value={tremoloAmount.depth}
              />
              <p>{Math.floor(tremoloAmount.depth * 100)}</p>
            </div>
            {/* <label htmlFor="delay-feedback">FEEDBACK</label>
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
                step="0.01"
                onChange={(e) =>
                  setDelay({
                    ...delay,
                    time: e.target.value,
                  })
                }
                value={delay.time}
              />
              <p>{Math.floor(delay.time * 100)}</p>
              </div> */}
          </fieldset>
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
          <fieldset id="effect" name="delay" className="params">
            <h2 htmlFor="delay" id="delay-head">
              Delay
            </h2>
            <label htmlFor="delay-mix">MIX</label>
            <div class="effect-param">
              <input
                class="effect-param-input"
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
                class="effect-param-input"
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
            <div class="effect-param">
              <input
                class="effect-param-input"
                id="delay-time"
                name="delay-time"
                type="range"
                min="0"
                max="1"
                step="0.01"
                onChange={(e) =>
                  setDelay({
                    ...delay,
                    time: e.target.value,
                  })
                }
                value={delay.time}
              />
              <p>{Math.floor(delay.time * 100)}</p>
            </div>
          </fieldset>
        </Stack>

        <Stack alignItems="center" className="CenterAlign">
          <FormControl component="fieldset">
            <FormLabel components="legend" id="engine">
              Synth Engine
            </FormLabel>

            <div class="radio-group">
              <RadioGroup
                className="generator"
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
                  control={
                    <Radio onClick={() => setSynthType("membraneSynth")} />
                  }
                  label="membraneSynth"
                />
                <FormControlLabel
                  value="synth"
                  control={<Radio onClick={() => setSynthType("synth")} />}
                  label="synth"
                />
              </RadioGroup>
            </div>
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
