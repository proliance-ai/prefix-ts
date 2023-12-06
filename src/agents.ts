import caniuseData from 'caniuse-db/data.json';
import { Agent, AgentType } from './typings.ts';

export const agents = caniuseData.agents as unknown as Record<AgentType, Agent>;
