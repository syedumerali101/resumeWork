import * as React from "react";
import classnames from "classnames";

import "./styles.scss";
import NarrationSentence from "../NarrationSentence";

class NarrationParagraph extends React.PureComponent {
  state = {
    hasPlayed: false,
    isPaused: false,
    resetState: false,
  };

  // Start narration
  startNarration = () => {
    this.setState({
      hasPlayed: true,
      resetState: false,
    });
  };

  // Pause narration
  pauseNarration = () => {
    this.setState({
      isPaused: true,
    });
  };

  // Resume narration
  resumeNarration = () => {
    this.setState({
      isPaused: false,
    });
  };

  // Reset narration
  resetNarration = (replay) => {
    this.setState({
      isPaused: false,
      hasPlayed: false,
      resetState: true,
    });

    setTimeout(() => {
      this.startNarration();
    });
  };

  render() {
    const { hasPlayed, isPaused, resetState } = this.state;
    const { data } = this.props;

    const narrationClass = classnames("m-narration", {
      "-ready": !hasPlayed,
      "-playing": hasPlayed,
      "-paused": isPaused,
    });

    return (
      <div className={narrationClass}>
        {data && (
          <p>
            {data.map((sentence) => (
              <NarrationSentence
                data={sentence}
                resetState={resetState}
                key={sentence.id}
              />
            ))}
          </p>
        )}
      </div>
    );
  }
}

export default NarrationParagraph;
