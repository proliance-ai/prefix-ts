import { agents } from './agents';
import { browsers } from './browsers';
import { AgentResult, AgentType } from './typings.ts';

export const getBrowser = (name: string = ''): undefined | AgentResult => {
  const [agent] = Object.entries(browsers)
    .find(([_key, value]) => value.includes(name.toLowerCase())) || [''];

  if (agent) {
    return { ...agents[agent as AgentType], name: agent as AgentType };
  }
};
