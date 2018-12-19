import Vuex from "vuex";

import data from "~/assets/data/index.json";

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
    mutations: {}
  });
};

export default store;
