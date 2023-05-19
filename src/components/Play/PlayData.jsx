import React from "react";
import { FcInfo } from "react-icons/fc";

const PlayData = () => {
  return (
    <div className="play-header-data-container">
      <div className="play-header-data-item">
        <div class="tooltip">
          <FcInfo size={30} />
          <span class="tooltiptext">
            ¡Cuanto menos tiempo, mayor puntuación! ¡Apresúrate al final para
            obtener bonificaciones de score!
          </span>
        </div>
        <span className="play-header-data-lbl-stats">Tiempo: </span>
        <span className="play-header-data-stats">HH:MM</span>
      </div>
      <div className="play-header-data-item">
      <div class="tooltip">
          <FcInfo size={30} />
          <span class="tooltiptext">
            ¡Más dificultad, más tarjetas para emparejar!
          </span>
        </div>
        <span className="play-header-data-lbl-stats">Difficulty:</span>
        <span className="play-header-data-stats">Easy</span>
      </div>
      <div className="play-header-data-item">
        <span className="play-header-data-lbl-stats">Score: </span>
        <span className="play-header-data-stats">500</span>
      </div>
    </div>
  );
};

export default PlayData;
