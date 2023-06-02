import React, { useContext, useEffect } from "react";
import axios from "axios";
import Context from "@context/Context";
import settings from "@assets/data/settings.json";

const useGetGameConfigData = () => {
  const data = useContext(Context);
  const backendHost = settings[0]["backend-host"];
  const apiUrlCards = `${backendHost}api/ConfigNumberCards/?format=json`;
  const apiUrlTimeBonus = `${backendHost}api/ConfigTimeBonus/?format=json`;

  return new Promise((resolve, reject) => {
    useEffect(() => {
      const fetchGameConfigData = async () => {
        try {
          const [cardsResponse, timeBonusResponse] = await Promise.all([
            axios.get(apiUrlCards),
            axios.get(apiUrlTimeBonus)
          ]);

          if (data.difficulty === "EASY") {
            data.numCards = cardsResponse.data[0].Easy;
            data.timeBonus = timeBonusResponse.data[0].Easy;
          } else if (data.difficulty === "MEDIUM") {
            data.numCards = cardsResponse.data[0].Medium;
            data.timeBonus = timeBonusResponse.data[0].Medium;
          } else {
            data.numCards = cardsResponse.data[0].Difficult;
            data.timeBonus = timeBonusResponse.data[0].Difficult;
          }

          // Both requests were successful
          resolve(true);
        } catch (error) {
          console.log("Error:", error.message);
          // At least one request failed
          reject(false);
        }
      };

      fetchGameConfigData();
    }, [apiUrlCards, apiUrlTimeBonus, data.difficulty]);
  });
};

export default useGetGameConfigData;
