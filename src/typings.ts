export type AgentType = 'ie' | 'firefox' | 'chrome' | 'safari' | 'opera' | 'ios_saf' | 'op_mini' | 'android' | 'op_mob' | 'bb' | 'and_chr' | 'and_ff' | 'ie_mob';
export interface Agent {
  browser: string;
  long_name: string;
  abbr: string;
  prefix: string;
  type: string;
  usage_global: Record<string, number>;
  versions: [null | string];
  prefix_exceptions?: Record<string, string>;
}
export interface AgentResult extends Agent {
  name: AgentType;
}
