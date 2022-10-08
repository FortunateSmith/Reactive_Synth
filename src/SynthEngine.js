import { useState } from "react";
import { Song, Track, Instrument, Effect } from "reactronica";
import { Donut } from "react-dial-knob";
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
  const [steps] = useState([
    ["C3", "E3", "A3"],
    null,
    ["C3", "E3", "G3", "B3"],
    null,
    ["C3", "F3", "A3"],
    null,
    ["D3", "G3", "B3"],
    null,
  ]);
  const [synthType, setSynthType] = useState("amSynth");

  return (
    <div>
      <Song isPlaying={isPlaying}>
        <Track steps={steps} volume={volume}>
          <Instrument type={synthType} />
          {/* setup effects chain */}
          <Effect type="distorion" wet={distortionAmount} />
          <Effect type="feedbackDelay" wet={delayAmount} />
        </Track>
      </Song>

      <Stack
        spacing={2}
        direction="row"
        sx={{ mb: 1 }}
        alignItems="center"
        className="CenterAlign"
      >
        <Donut
          diameter={60}
          min={-50}
          max={10}
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
        </Donut>
        <Donut
          diameter={60}
          min={0}
          max={1}
          step={0.25}
          value={delayAmount}
          theme={{
            donutColor: "purple",
            donutThickness: 7,
          }}
          onValueChange={setDelayAmount}
          ariaLabelledBy={"delay-amount"}
        >
          <label id={"delay-amount"}>Delay</label>
        </Donut>
        <Donut
          diameter={60}
          min={0}
          max={1}
          step={0.25}
          value={distortionAmount}
          theme={{
            donutColor: "purple",
            donutThickness: 7,
          }}
          onValueChange={setDistortionAmount}
          ariaLabelledBy={"delay-amount"}
        >
          <label id={"delay-amount"}>Distortion</label>
        </Donut>
      </Stack>
    </div>
  );
}
