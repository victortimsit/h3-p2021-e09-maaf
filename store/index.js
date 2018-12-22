import Vuex from "vuex";

import data from "~/assets/data/en_index.json";

const trueData = {
  assistant:
    data.assistants[Math.floor(Math.random() * data.assistants.length)],
  client: data.clients[Math.floor(Math.random() * data.clients.length)],
  scenario: data.scenarios[Math.floor(Math.random() * data.scenarios.length)]
};

const store = () => {
  return new Vuex.Store({
    strict: false,
    state: {
      assistant: trueData.assistant,
      client: trueData.client,
      scenario: trueData.scenario
    },
    mutations: {
      init(state) {
        state.assistant =
          data.assistants[Math.floor(Math.random() * data.assistants.length)];
        state.client =
          data.clients[Math.floor(Math.random() * data.clients.length)];
        state.scenario =
          data.scenarios[Math.floor(Math.random() * data.scenarios.length)];
      }
    }
  });
};

export default store;
