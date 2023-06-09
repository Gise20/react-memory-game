import React, { useContext } from "react";
import { FcInfo } from "react-icons/fc";
import Context from "@context/Context";
import PlayTimer from "@components/Play/PlayTimer";

const PlayData = ({ setTime, gameData }) => {
  const data = useContext(Context);
  return (
    <div className="play-header-data-container">
      <div className="play-header-data-item">
        <div className="tooltip">
          <FcInfo size={20} />
          <span className="tooltiptext">
            ¡Cuanto menos tiempo, mayor puntuación! ¡Apresúrate al final para
            obtener bonificaciones de score!
          </span>
        </div>
        <span className="play-header-data-lbl-stats">Tiempo: </span>
        <span className="play-header-data-stats">
          <PlayTimer setTime={setTime} />
        </span>
      </div>
      <div className="play-header-data-item">
        <div className="tooltip">
          <FcInfo size={20} />
          <span className="tooltiptext">
            ¡Más dificultad, más tarjetas para emparejar!
          </span>
        </div>
        <span className="play-header-data-lbl-stats">Difficulty:</span>
        <span className="play-header-data-stats">{data.difficulty}</span>
      </div>
      <div className="play-header-data-item">
        <span className="play-header-data-lbl-stats">Score: </span>
        <span className="play-header-data-stats">{gameData.score}</span>
      </div>
    </div>
  );
};

export default React.memo(PlayData);
